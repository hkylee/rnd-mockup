"use client";

import { useEffect, useMemo, useState } from "react";
import {
  loadHistory,
  removeFromHistory,
  clearHistory,
  type HistoryEntry,
  type AnalysisEntry,
  type GenerationEntry,
} from "@/lib/spec-analysis-history";
import type { ComponentMatch } from "@/lib/spec-analysis-types";

const STATUS_META: Record<ComponentMatch["status"], { label: string; color: string; icon: string }> = {
  reused: { label: "재사용", color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: "✓" },
  rename: { label: "조정", color: "bg-amber-100 text-amber-700 border-amber-200", icon: "⚠" },
  new: { label: "신규", color: "bg-rose-100 text-rose-700 border-rose-200", icon: "✕" },
};

const CONFIDENCE_META: Record<"high" | "medium" | "low", { label: string; color: string }> = {
  high: { label: "high", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  medium: { label: "med", color: "bg-sky-100 text-sky-700 border-sky-200" },
  low: { label: "low", color: "bg-slate-100 text-slate-600 border-slate-200" },
};

function fmt(ts: number): string {
  return new Date(ts).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

type ScreenGroup = {
  screenId: string;
  moduleCode?: string;
  entries: HistoryEntry[];
  latestAt: number;
};

export default function SpecAnalysisHistoryPage() {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedScreenId, setSelectedScreenId] = useState<string | null>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [copyHint, setCopyHint] = useState<string | null>(null);

  useEffect(() => {
    setEntries(loadHistory());
  }, []);

  const selected = selectedId ? entries.find((e) => e.id === selectedId) : null;

  // screenId 기준 그룹핑 (모듈 정보는 그룹 내 첫 항목에서 추출)
  const groups = useMemo<ScreenGroup[]>(() => {
    const map = new Map<string, ScreenGroup>();
    for (const e of entries) {
      const g = map.get(e.screenId) || {
        screenId: e.screenId,
        moduleCode: e.moduleCode,
        entries: [],
        latestAt: 0,
      };
      g.entries.push(e);
      if (!g.moduleCode && e.moduleCode) g.moduleCode = e.moduleCode;
      if (e.createdAt > g.latestAt) g.latestAt = e.createdAt;
      map.set(e.screenId, g);
    }
    const arr = Array.from(map.values());
    for (const g of arr) g.entries.sort((a, b) => b.createdAt - a.createdAt);
    arr.sort((a, b) => b.latestAt - a.latestAt);
    return arr;
  }, [entries]);

  // 모듈 → 그룹 (좌측 sidebar 조직화)
  const byModule = useMemo(() => {
    const map = new Map<string, ScreenGroup[]>();
    for (const g of groups) {
      const k = g.moduleCode || "기타";
      const arr = map.get(k) || [];
      arr.push(g);
      map.set(k, arr);
    }
    return map;
  }, [groups]);

  function selectScreen(screenId: string) {
    setSelectedScreenId(screenId);
    setSelectedId(null); // 그룹 뷰와 개별 entry 뷰는 mutually exclusive
    // 클릭 시 자동 펼침
    setOpenGroups((prev) => ({ ...prev, [screenId]: true }));
  }

  function toggleGroupOnly(screenId: string, ev: React.MouseEvent) {
    ev.stopPropagation();
    setOpenGroups((prev) => ({ ...prev, [screenId]: !prev[screenId] }));
  }

  function selectEntry(id: string) {
    setSelectedId(id);
    setSelectedScreenId(null);
  }

  function handleDelete(id: string) {
    if (!confirm("이 항목을 삭제할까요?")) return;
    setEntries(removeFromHistory(id));
    if (selectedId === id) setSelectedId(null);
  }

  function handleClear() {
    if (!confirm("히스토리 전체를 삭제할까요?")) return;
    clearHistory();
    setEntries([]);
    setSelectedId(null);
    setSelectedScreenId(null);
  }

  // 결합 뷰용 — 선택된 screen 의 최신 분석 + 최신 생성
  const selectedScreen = selectedScreenId ? groups.find((g) => g.screenId === selectedScreenId) : null;
  const latestAnalysis = selectedScreen?.entries.find((e): e is AnalysisEntry => e.kind === "analysis");
  const latestGeneration = selectedScreen?.entries.find(
    (e): e is GenerationEntry => e.kind === "generation"
  );

  async function copyBundle(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyHint("✓ 클립보드에 복사됨");
      setTimeout(() => setCopyHint(null), 1500);
    } catch {
      setCopyHint("복사 실패 — 수동 복사 필요");
      setTimeout(() => setCopyHint(null), 2000);
    }
  }

  return (
    <div className="h-full flex">
      {/* 좌: 그룹 목록 */}
      <section className="w-96 shrink-0 bg-white border-r border-slate-200 flex flex-col">
        <header className="sticky top-0 bg-white border-b border-slate-200 px-4 py-3 space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold tracking-tight">분석 · 생성 히스토리</h1>
            <span className="text-xs text-slate-500">
              {groups.length} screen · {entries.length}건
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            screen id 기준으로 분석과 코드 생성이 함께 저장됩니다.
          </p>
          {entries.length > 0 && (
            <button onClick={handleClear} className="text-[10px] text-rose-600 hover:underline">
              전체 삭제
            </button>
          )}
        </header>

        <div className="flex-1 overflow-y-auto p-2">
          {entries.length === 0 && (
            <div className="p-6 text-center">
              <div className="text-3xl mb-2">🗂</div>
              <div className="text-xs text-slate-500">
                아직 히스토리가 없어요.
                <br />
                <a href="/spec-analysis" className="text-indigo-600 underline">
                  기능내역서 분석
                </a>{" "}
                을 실행하면 자동 저장됩니다.
              </div>
            </div>
          )}

          {Array.from(byModule.entries()).map(([mod, list]) => (
            <div key={mod} className="mb-3">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 px-2 py-1.5">
                {mod} ({list.length} screen)
              </div>
              <ul className="space-y-1">
                {list.map((g) => {
                  const open = openGroups[g.screenId] !== false; // 기본 펼침
                  const analyses = g.entries.filter(
                    (e): e is AnalysisEntry => e.kind === "analysis"
                  );
                  const generations = g.entries.filter(
                    (e): e is GenerationEntry => e.kind === "generation"
                  );
                  const screenActive = selectedScreenId === g.screenId;
                  return (
                    <li key={g.screenId}>
                      <div
                        className={
                          "rounded-lg transition flex items-stretch " +
                          (screenActive
                            ? "bg-indigo-50 ring-1 ring-indigo-200"
                            : "hover:bg-slate-50")
                        }
                      >
                        <button
                          onClick={(ev) => toggleGroupOnly(g.screenId, ev)}
                          className={
                            "shrink-0 px-2 flex items-start pt-2.5 transition-transform text-[10px] text-slate-400 hover:text-slate-700 " +
                            (open ? "rotate-90" : "")
                          }
                          title={open ? "접기" : "펼치기"}
                        >
                          ▶
                        </button>
                        <button
                          onClick={() => selectScreen(g.screenId)}
                          className="flex-1 text-left pr-3 py-2 min-w-0"
                        >
                          <div className="text-[11px] font-mono text-slate-700 truncate">
                            {g.screenId}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5 flex gap-2">
                            {analyses.length > 0 && (
                              <span>📋 분석 {analyses.length}</span>
                            )}
                            {generations.length > 0 && (
                              <span className="text-emerald-700">🚀 생성 {generations.length}</span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            최근: {fmt(g.latestAt)}
                          </div>
                        </button>
                      </div>

                      {open && (
                        <ul className="ml-4 mt-1 space-y-0.5 border-l border-slate-200 pl-2">
                          {g.entries.map((e) => {
                            const active = selectedId === e.id;
                            const isAnalysis = e.kind === "analysis";
                            return (
                              <li key={e.id} className="group relative">
                                <button
                                  onClick={() => selectEntry(e.id)}
                                  className={
                                    "w-full text-left px-2.5 py-1.5 rounded transition " +
                                    (active
                                      ? "bg-indigo-50 ring-1 ring-indigo-200"
                                      : "hover:bg-slate-50")
                                  }
                                >
                                  <div className="flex items-center gap-1.5">
                                    <span
                                      className={
                                        "inline-flex items-center justify-center w-4 h-4 rounded text-[9px] font-bold " +
                                        (isAnalysis
                                          ? "bg-indigo-100 text-indigo-700"
                                          : "bg-emerald-100 text-emerald-700")
                                      }
                                    >
                                      {isAnalysis ? "분" : "생"}
                                    </span>
                                    <span className="text-[10px] text-slate-600">
                                      {fmt(e.createdAt)}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-slate-500 mt-0.5 ml-5">
                                    {isAnalysis
                                      ? `${(e as AnalysisEntry).features.length}개 기능`
                                      : `신규 ${(e as GenerationEntry).newSpecNames.length} · 페이지 ${
                                          (e as GenerationEntry).pageSpecNames.length
                                        }`}
                                  </div>
                                </button>
                                <button
                                  onClick={(ev) => {
                                    ev.stopPropagation();
                                    handleDelete(e.id);
                                  }}
                                  className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-slate-400 hover:bg-rose-100 hover:text-rose-600 opacity-0 group-hover:opacity-100 transition"
                                  title="삭제"
                                >
                                  ×
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 우: 선택 화면 결합 뷰 또는 개별 entry 상세 */}
      <section className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          {!selected && !selectedScreen && (
            <div className="h-[60vh] flex flex-col items-center justify-center text-slate-400 text-sm">
              왼쪽에서 화면 (screen id) 또는 항목을 선택하세요
            </div>
          )}

          {/* 화면 결합 뷰 — screen id 클릭 시 */}
          {!selected && selectedScreen && (
            <ScreenCombinedView
              screenId={selectedScreen.screenId}
              moduleCode={selectedScreen.moduleCode}
              latestAnalysis={latestAnalysis}
              latestGeneration={latestGeneration}
              onCopy={copyBundle}
              copyHint={copyHint}
            />
          )}

          {/* 개별 entry 뷰 — 펼친 후 분/생 항목 클릭 시 */}
          {selected && selected.kind === "analysis" && <AnalysisDetail entry={selected} />}
          {selected && selected.kind === "generation" && (
            <GenerationDetail entry={selected} onCopy={copyBundle} copyHint={copyHint} />
          )}
        </div>
      </section>
    </div>
  );
}

function ScreenCombinedView({
  screenId,
  moduleCode,
  latestAnalysis,
  latestGeneration,
  onCopy,
  copyHint,
}: {
  screenId: string;
  moduleCode?: string;
  latestAnalysis: AnalysisEntry | undefined;
  latestGeneration: GenerationEntry | undefined;
  onCopy: (text: string) => void;
  copyHint: string | null;
}) {
  return (
    <>
      <div className="mb-6">
        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
          화면 결합 뷰
        </div>
        <h1 className="text-2xl font-semibold tracking-tight font-mono break-all">{screenId}</h1>
        {moduleCode && <p className="text-xs text-slate-500 mt-1">모듈: {moduleCode}</p>}
      </div>

      {!latestAnalysis && !latestGeneration && (
        <div className="surface-card p-6 text-sm text-slate-500 text-center">
          이 화면에 대한 분석이나 생성 기록이 없어요.
        </div>
      )}

      {latestAnalysis && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold">
              📋 최근 분석
            </span>
            <span className="text-[10px] text-slate-400">{fmt(latestAnalysis.createdAt)}</span>
          </div>
          <AnalysisDetail entry={latestAnalysis} hideHeader />
        </section>
      )}

      {latestGeneration && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-wider text-emerald-600 font-semibold">
              🚀 최근 생성
            </span>
            <span className="text-[10px] text-slate-400">{fmt(latestGeneration.createdAt)}</span>
          </div>
          <GenerationDetail entry={latestGeneration} onCopy={onCopy} copyHint={copyHint} hideHeader />
        </section>
      )}
    </>
  );
}

function AnalysisDetail({ entry, hideHeader }: { entry: AnalysisEntry; hideHeader?: boolean }) {
  return (
    <>
      {!hideHeader && (
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold mb-1 font-mono">
            📋 분석 · {entry.screenId}
            {entry.moduleCode && (
              <span className="ml-2 text-slate-400 normal-case">· {entry.moduleCode}</span>
            )}
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {entry.features.length}개 기능
          </h1>
          <p className="text-xs text-slate-500 mt-1">분석 시각: {fmt(entry.createdAt)}</p>
          {entry.screenRole && (
            <p className="text-xs text-indigo-700 mt-1">화면 역할: {entry.screenRole}</p>
          )}
        </div>
      )}

      <ul className="space-y-3">
        {entry.features.map((f, i) => (
          <li key={f.specId + i} className="surface-card p-5">
            <div className="flex items-start gap-2 mb-2 flex-wrap">
              <span className="text-[10px] font-mono text-slate-500">{f.specId}</span>
              {f.priority && (
                <span className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 text-[9px] font-semibold">
                  {f.priority}
                </span>
              )}
            </div>
            <h2 className="text-base font-semibold mb-1">{f.name}</h2>
            {f.description && (
              <p className="text-xs text-slate-600 mt-2 whitespace-pre-line leading-relaxed">
                {f.description}
              </p>
            )}
            {f.components.length > 0 && (
              <ul className="mt-3 space-y-1">
                {f.components.map((c, j) => {
                  const m = STATUS_META[c.status];
                  return (
                    <li key={j} className="flex items-center gap-2 text-xs">
                      <span
                        className={
                          "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold border " +
                          m.color
                        }
                      >
                        <span>{m.icon}</span>
                        <span>{m.label}</span>
                      </span>
                      <span className="font-mono text-slate-700">
                        {c.name}
                        {c.suggested && c.suggested !== c.name && (
                          <>
                            <span className="text-amber-600 mx-1">→</span>
                            <span className="text-amber-700">{c.suggested}</span>
                          </>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {entry.inferredEssentials && entry.inferredEssentials.length > 0 && (
        <div className="mt-6 surface-card p-5">
          <h2 className="text-sm font-semibold mb-3 text-indigo-700">
            추론된 필수 컴포넌트 (기능내역서 외)
          </h2>
          <ul className="space-y-1">
            {entry.inferredEssentials.map((e, i) => {
              const sm = STATUS_META[e.status];
              const cm = CONFIDENCE_META[e.confidence];
              return (
                <li key={i} className="text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={
                        "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold border " +
                        sm.color
                      }
                    >
                      <span>{sm.icon}</span>
                      <span>{sm.label}</span>
                    </span>
                    <span
                      className={
                        "inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold border " +
                        cm.color
                      }
                    >
                      {cm.label}
                    </span>
                    <span className="font-mono text-slate-700">{e.name}</span>
                  </div>
                  <p className="ml-1 mt-1 text-[11px] text-slate-500">{e.reason}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {entry.notes && (
        <div className="mt-4 rounded-xl p-3 bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <strong>Notes:</strong> {entry.notes}
        </div>
      )}
    </>
  );
}

function GenerationDetail({
  entry,
  onCopy,
  copyHint,
  hideHeader,
}: {
  entry: GenerationEntry;
  onCopy: (text: string) => void;
  copyHint: string | null;
  hideHeader?: boolean;
}) {
  return (
    <>
      {!hideHeader && (
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-wider text-emerald-600 font-semibold mb-1 font-mono">
            🚀 코드 생성 · {entry.screenId}
            {entry.moduleCode && (
              <span className="ml-2 text-slate-400 normal-case">· {entry.moduleCode}</span>
            )}
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">생성 결과</h1>
          <p className="text-xs text-slate-500 mt-1">생성 시각: {fmt(entry.createdAt)}</p>
        </div>
      )}

      <div className="surface-card p-5 mb-4">
        <h2 className="text-sm font-semibold mb-3">생성 내역</h2>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-center">
            <div className="text-[10px] uppercase tracking-wider text-rose-600 font-semibold">
              신규 spec
            </div>
            <div className="text-2xl font-bold text-rose-700 mt-1">
              {entry.newSpecNames.length}
            </div>
          </div>
          <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-3 text-center">
            <div className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold">
              페이지 spec
            </div>
            <div className="text-2xl font-bold text-indigo-700 mt-1">
              {entry.pageSpecNames.length}
            </div>
          </div>
          <div className="rounded-xl bg-sky-50 border border-sky-200 p-3 text-center">
            <div className="text-[10px] uppercase tracking-wider text-sky-600 font-semibold">
              포함 추론
            </div>
            <div className="text-2xl font-bold text-sky-700 mt-1">
              {entry.includedEssentials.length}
            </div>
          </div>
        </div>

        {entry.newSpecNames.length > 0 && (
          <div className="mb-3">
            <div className="text-[10px] uppercase tracking-wider text-rose-600 font-semibold mb-1">
              신규 spec
            </div>
            <ul className="space-y-0.5">
              {entry.newSpecNames.map((n, i) => (
                <li key={i} className="font-mono text-xs text-slate-700">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}

        {entry.pageSpecNames.length > 0 && (
          <div className="mb-3">
            <div className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold mb-1">
              페이지 spec
            </div>
            <ul className="space-y-0.5">
              {entry.pageSpecNames.map((n, i) => (
                <li key={i} className="font-mono text-xs text-slate-700">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}

        {entry.includedEssentials.length > 0 && (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sky-600 font-semibold mb-1">
              포함된 추론 컴포넌트
            </div>
            <ul className="space-y-0.5">
              {entry.includedEssentials.map((n, i) => (
                <li key={i} className="font-mono text-xs text-slate-700">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="surface-card p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold">번들 코드</h2>
          <div className="flex items-center gap-2">
            {copyHint && (
              <span className="text-[10px] text-emerald-600">{copyHint}</span>
            )}
            <button
              onClick={() => onCopy(entry.bundleText)}
              className="text-xs px-3 py-1.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              📋 다시 복사
            </button>
          </div>
        </div>
        <details>
          <summary className="text-[11px] text-slate-500 cursor-pointer hover:text-slate-700">
            번들 미리보기 ({Math.round(entry.bundleText.length / 1024)} KB)
          </summary>
          <pre className="mt-2 p-3 bg-slate-900 text-slate-200 rounded-lg text-[10px] font-mono max-h-96 overflow-auto">
            {entry.bundleText.slice(0, 4000)}
            {entry.bundleText.length > 4000 && "\n\n... (잘림)"}
          </pre>
        </details>
      </div>
    </>
  );
}
