"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PageMeta = {
  name: string;
  atomCount: number;
  molCount: number;
  ognCount: number;
  missingCount: number;
  missing: string[];
};

type Totals = { atom: number; mol: number; ogn: number; page: number };

type RunLevel = "atom" | "mol" | "ogn" | "all";

type PageRunResult = {
  ok?: boolean;
  pageName?: string;
  level?: RunLevel;
  counts?: { atom: number; mol: number; ogn: number; page: number; total: number };
  missing?: string[];
  outPath?: string;
  bundleSize?: number;
  copied?: boolean;
  copyError?: string | null;
  error?: string;
};

type GlobalCmd = "group-atom" | "group-mol" | "group-ogn" | "pages";

type GlobalRunResult = {
  ok?: boolean;
  cmd?: string;
  exitCode?: number;
  stdout?: string;
  stderr?: string;
  error?: string;
};

const LEVEL_LABEL: Record<RunLevel, string> = {
  atom: "Atom",
  mol: "Mol",
  ogn: "Ogn",
  all: "Page",
};

const LEVEL_HINT: Record<RunLevel, string> = {
  atom: "이 페이지의 atom 만",
  mol: "atom + mol (mol 의존성까지)",
  ogn: "atom + mol + ogn (page 직전까지)",
  all: "atom + mol + ogn + page (전체 cascade)",
};

const LEVEL_TONE = "border-slate-300 hover:bg-slate-100 text-slate-700";

const GLOBAL_HINT: Record<GlobalCmd, string> = {
  "group-atom": "카탈로그 전체 atom 빌드 (--group atom)",
  "group-mol": "카탈로그 전체 mol 빌드 (--group mol)",
  "group-ogn": "카탈로그 전체 ogn 빌드 (--group ogn)",
  "pages": "카탈로그 전체 page 빌드 (--pages)",
};

const GLOBAL_LABEL: Record<GlobalCmd, string> = {
  "group-atom": "Atom",
  "group-mol": "Mol",
  "group-ogn": "Ogn",
  "pages": "Page",
};

type Toast = {
  id: number;
  ok: boolean;
  message: string;
  detail?: string;
};

type Props = {
  onFilesChanged?: () => void;
};

export function PageRunList({ onFilesChanged }: Props) {
  const router = useRouter();
  const [pages, setPages] = useState<PageMeta[]>([]);
  const [totals, setTotals] = useState<Totals | null>(null);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState<string | null>(null);
  const [toast, setToast] = useState<Toast | null>(null);

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch("/api/scripter/pages-list");
      const data = await res.json();
      setPages(data.pages || []);
      setTotals(data.totals || null);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  function showToast(t: Omit<Toast, "id">) {
    const id = Date.now() + Math.random();
    setToast({ ...t, id });
    setTimeout(() => {
      setToast((cur) => (cur && cur.id === id ? null : cur));
    }, 3500);
  }

  async function runPage(pageName: string, level: RunLevel) {
    const key = "page__" + pageName + "__" + level;
    setRunning(key);
    try {
      const res = await fetch("/api/scripter/page-run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageName, level }),
      });
      const data: PageRunResult = await res.json();
      if (data.ok) {
        const total = data.counts?.total ?? 0;
        showToast({
          ok: true,
          message: `✓ ${pageName} · ${data.level} 빌드 — 총 ${total} specs`,
          detail: data.copied
            ? "📋 클립보드 복사 완료 · Figma Scripter 에 ⌘V → Run ▶"
            : "⚠ 클립보드 복사 실패",
        });
        onFilesChanged?.();
      } else {
        showToast({ ok: false, message: "✕ " + (data.error || "빌드 실패") });
      }
    } catch (e) {
      showToast({
        ok: false,
        message: "✕ " + (e instanceof Error ? e.message : String(e)),
      });
    } finally {
      setRunning(null);
    }
  }

  async function runGlobal(cmd: GlobalCmd) {
    const key = "global__" + cmd;
    setRunning(key);
    try {
      const res = await fetch("/api/scripter/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cmd }),
      });
      const data: GlobalRunResult = await res.json();
      if (data.ok) {
        showToast({
          ok: true,
          message: `✓ 전체 ${GLOBAL_LABEL[cmd]} 빌드 완료`,
          detail: "📋 클립보드 복사 완료 · Figma Scripter 에 ⌘V → Run ▶",
        });
        onFilesChanged?.();
      } else {
        const msg = data.error || data.stderr?.slice(0, 200) || `exit ${data.exitCode}`;
        showToast({ ok: false, message: "✕ " + msg });
      }
    } catch (e) {
      showToast({
        ok: false,
        message: "✕ " + (e instanceof Error ? e.message : String(e)),
      });
    } finally {
      setRunning(null);
    }
  }

  const isAnyRunning = running !== null;
  const globalCounts: Record<GlobalCmd, number | null> = {
    "group-atom": totals?.atom ?? null,
    "group-mol": totals?.mol ?? null,
    "group-ogn": totals?.ogn ?? null,
    "pages": totals?.page ?? null,
  };

  return (
    <section>
      {loading && (
        <div className="text-sm text-slate-400 py-8 text-center">목록 불러오는 중…</div>
      )}

      {!loading && pages.length === 0 && totals === null && (
        <div className="text-sm text-slate-400 py-8 text-center">목록이 없어요.</div>
      )}

      <ul className="space-y-2">
        {/* 전체 (카탈로그 단위) — 클릭 시 라이브러리 전체 보기 */}
        <li
          onClick={() => router.push("/sources")}
          className="border border-slate-200 rounded-xl px-4 py-3 bg-white hover:bg-slate-50 hover:border-slate-300 cursor-pointer transition"
          title="라이브러리에서 전체 카탈로그 보기"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-slate-900">전체</div>
            </div>

            <div className="flex gap-1.5 shrink-0">
              {(["group-atom", "group-mol", "group-ogn", "pages"] as GlobalCmd[]).map((cmd) => {
                const key = "global__" + cmd;
                const isRunning = running === key;
                const count = globalCounts[cmd];
                return (
                  <button
                    key={cmd}
                    onClick={(e) => {
                      e.stopPropagation();
                      runGlobal(cmd);
                    }}
                    disabled={isAnyRunning}
                    title={GLOBAL_HINT[cmd]}
                    className="py-1.5 px-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-[11px] font-medium transition disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap inline-flex items-center gap-1.5"
                  >
                    {count !== null && (
                      <span className="text-[10px] tabular-nums opacity-70">{count}</span>
                    )}
                    <span>{isRunning ? "…" : GLOBAL_LABEL[cmd]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </li>

        {pages.map((p) => {
          const counts: Record<RunLevel, number> = {
            atom: p.atomCount,
            mol: p.molCount,
            ogn: p.ognCount,
            all: 1,
          };
          return (
            <li
              key={p.name}
              onClick={() =>
                router.push("/sources?page=" + encodeURIComponent(p.name))
              }
              className="border border-slate-200 rounded-xl px-4 py-3 bg-white hover:bg-slate-50 hover:border-slate-300 cursor-pointer transition"
              title="라이브러리에서 이 페이지 의존성만 보기"
            >
              <div className="flex items-center gap-4 flex-wrap">
                <div className="min-w-0 flex-1 flex items-center gap-2 flex-wrap">
                  <div className="text-sm font-mono font-semibold text-slate-900 truncate">
                    {p.name}
                  </div>
                  {p.missingCount > 0 && (
                    <span
                      className="text-[10px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded"
                      title={p.missing.join(", ")}
                    >
                      누락 {p.missingCount}
                    </span>
                  )}
                </div>

                <div className="flex gap-1.5 shrink-0">
                  {(["atom", "mol", "ogn", "all"] as RunLevel[]).map((lv) => {
                    const key = "page__" + p.name + "__" + lv;
                    const isRunning = running === key;
                    return (
                      <button
                        key={lv}
                        onClick={(e) => {
                          e.stopPropagation();
                          runPage(p.name, lv);
                        }}
                        disabled={isAnyRunning}
                        title={LEVEL_HINT[lv]}
                        className={
                          "py-1.5 px-3 rounded-lg border bg-white text-[11px] font-medium transition disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap inline-flex items-center gap-1.5 " +
                          LEVEL_TONE
                        }
                      >
                        <span className="text-[10px] tabular-nums opacity-70">{counts[lv]}</span>
                        <span>{isRunning ? "…" : LEVEL_LABEL[lv]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {toast && (
        <div
          key={toast.id}
          className="fixed bottom-6 right-6 z-50 max-w-sm pointer-events-auto animate-toast-in"
        >
          <div
            className={
              "rounded-xl shadow-lg shadow-slate-900/10 px-4 py-3 text-xs border " +
              (toast.ok
                ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                : "bg-rose-50 text-rose-900 border-rose-200")
            }
          >
            <div className="font-semibold">{toast.message}</div>
            {toast.detail && <div className="opacity-80 mt-0.5">{toast.detail}</div>}
          </div>
        </div>
      )}
    </section>
  );
}
