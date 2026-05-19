"use client";

import { useEffect, useMemo, useState } from "react";

type RunResult = {
  ok?: boolean;
  exitCode?: number;
  stdout?: string;
  stderr?: string;
  cwd?: string;
  args?: string[];
  error?: string;
};

type FileEntry = {
  name: string;
  category: "sync" | "library" | "pages" | "component" | "page" | "icon" | "other";
  size: number;
  mtime: number;
};

type Props = {
  cmd: "sync" | "library" | "pages";
  title: string;
  description: string;
  command: string;
  warning?: string;
  /** 헤더 바로 아래, 메인 카드 위에 끼워 넣을 영역 */
  topSlot?: React.ReactNode;
  /** 메인 카드 아래에 끼워 넣을 추가 영역 (예: 페이지별 부분 빌드 리스트) */
  bottomSlot?: React.ReactNode;
};

const CATEGORY_LABEL: Record<string, string> = {
  sync: "🔄 sync",
  library: "📦 library",
  pages: "📄 pages",
  component: "◻ component",
  page: "📄 page",
  icon: "🖼 icon",
  other: "기타",
};

const CATEGORY_ORDER = ["sync", "library", "pages", "component", "page", "icon", "other"];

function fmtBytes(n: number): string {
  if (n < 1024) return n + " B";
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
  return (n / 1024 / 1024).toFixed(1) + " MB";
}

function fmtTime(ts: number): string {
  return new Date(ts).toLocaleString("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ScripterRunCard({ cmd, title, description, command, warning, topSlot, bottomSlot }: Props) {
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<RunResult | null>(null);
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<Record<string, boolean>>({});

  async function refreshFiles() {
    try {
      const res = await fetch("/api/scripter/runs-list");
      const data = await res.json();
      setFiles(data.files || []);
    } catch {}
  }

  useEffect(() => {
    refreshFiles();
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setFileContent(null);
      return;
    }
    fetch("/api/scripter/runs-file?name=" + encodeURIComponent(selectedFile))
      .then((r) => r.json())
      .then((d) => setFileContent(d.content || null))
      .catch(() => setFileContent(null));
  }, [selectedFile]);

  async function execute() {
    setRunning(true);
    setResult(null);
    try {
      const res = await fetch("/api/scripter/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cmd }),
      });
      const data: RunResult = await res.json();
      setResult(data);
      // 파일 목록 새로고침
      await refreshFiles();
    } catch (err) {
      setResult({ ok: false, error: err instanceof Error ? err.message : String(err) });
    } finally {
      setRunning(false);
    }
  }

  async function copyFile(name: string) {
    try {
      const res = await fetch("/api/scripter/runs-file?name=" + encodeURIComponent(name));
      const data = await res.json();
      if (!data.content) {
        alert("파일을 읽을 수 없어요: " + (data.error || "unknown"));
        return;
      }
      await navigator.clipboard.writeText(data.content);
      setCopyState((s) => ({ ...s, [name]: true }));
      setTimeout(() => setCopyState((s) => ({ ...s, [name]: false })), 1500);
    } catch (e) {
      alert("복사 실패: " + (e instanceof Error ? e.message : String(e)));
    }
  }

  const grouped = useMemo(() => {
    const map = new Map<string, FileEntry[]>();
    for (const f of files) {
      const arr = map.get(f.category) || [];
      arr.push(f);
      map.set(f.category, arr);
    }
    return map;
  }, [files]);

  const success = result?.ok === true;

  return (
    <div className="h-full flex">
      {/* 좌: 실행 + 결과 */}
      <section className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <header className="mb-6">
            <div className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold mb-1">
              Scripter Run
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <p className="text-sm text-slate-600 mt-1">{description}</p>
          </header>

          {topSlot && <div>{topSlot}</div>}

          {warning && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 mb-6">
              {warning}
            </div>
          )}

          <div className="surface-card p-6 space-y-4">
            <div>
              <div className="text-xs font-semibold text-slate-700 mb-2">실행 명령</div>
              <pre className="px-3 py-2 rounded-lg bg-slate-900 text-emerald-300 text-xs font-mono overflow-x-auto">
                {command}
              </pre>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed">
              <strong>실행 결과:</strong> 번들 파일이 <code className="bg-slate-100 px-1 rounded">mockup/scripter/runs/</code> 에 저장되고,
              macOS 클립보드에 자동 복사됩니다. Figma Scripter 에 <code className="bg-slate-100 px-1 rounded">⌘V</code> 후 Run ▶.
            </div>

            <button
              onClick={execute}
              disabled={running}
              className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold disabled:opacity-40 hover:bg-indigo-700 shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all"
            >
              {running && (
                <span className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              )}
              {running ? "실행 중…" : `▶ Run ${title}`}
            </button>
          </div>

          {result && (
            <div className="mt-6 space-y-3">
              <div
                className={
                  "rounded-2xl border p-4 " +
                  (success
                    ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                    : "border-rose-200 bg-rose-50 text-rose-900")
                }
              >
                <div className="font-semibold text-sm mb-1">
                  {success ? "✓ 실행 성공" : "✕ 실행 실패"}
                  {typeof result.exitCode === "number" && (
                    <span className="font-normal text-xs ml-2 opacity-70">
                      (exit code: {result.exitCode})
                    </span>
                  )}
                </div>
                {result.error && <div className="text-xs">{result.error}</div>}
                {success && (
                  <div className="text-xs">
                    📋 클립보드에 번들이 복사되었습니다. Figma Scripter 에 ⌘V → Run ▶
                  </div>
                )}
              </div>

              {result.stdout && (
                <details className="surface-card overflow-hidden" open={!success}>
                  <summary className="px-5 py-3 text-sm font-medium text-slate-700 cursor-pointer hover:bg-slate-50">
                    stdout
                  </summary>
                  <pre className="px-5 pb-4 text-[11px] text-slate-700 max-h-80 overflow-auto font-mono whitespace-pre-wrap">
                    {result.stdout}
                  </pre>
                </details>
              )}

              {result.stderr && (
                <details className="surface-card overflow-hidden border-rose-200" open>
                  <summary className="px-5 py-3 text-sm font-medium text-rose-800 cursor-pointer hover:bg-rose-50">
                    stderr
                  </summary>
                  <pre className="px-5 pb-4 text-[11px] text-rose-700 max-h-80 overflow-auto font-mono whitespace-pre-wrap">
                    {result.stderr}
                  </pre>
                </details>
              )}
            </div>
          )}

          {bottomSlot && <div className="mt-8">{bottomSlot}</div>}

          {selectedFile && fileContent && (
            <div className="mt-6 surface-card overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">파일 미리보기</div>
                  <div className="text-sm font-mono font-medium">{selectedFile}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyFile(selectedFile)}
                    className="py-1 px-3 rounded-full border border-slate-300 text-xs font-medium hover:bg-slate-50"
                  >
                    {copyState[selectedFile] ? "✓ 복사됨" : "📋 복사"}
                  </button>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="py-1 px-2 rounded-full text-slate-400 hover:bg-slate-100 text-xs"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <pre className="px-5 pb-4 pt-3 text-[10px] max-h-96 overflow-auto text-slate-700 font-mono whitespace-pre-wrap">
                {fileContent}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* 우: 생성된 파일 트리 */}
      <aside className="w-80 shrink-0 bg-white border-l border-slate-200 flex flex-col">
        <header className="sticky top-0 bg-white border-b border-slate-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-tight">생성된 코드</h2>
            <button onClick={refreshFiles} className="text-xs text-indigo-600 hover:underline">
              새로고침
            </button>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            mockup/scripter/runs/ 의 .generated.js 파일
          </p>
        </header>

        <div className="flex-1 overflow-y-auto p-2">
          {files.length === 0 && (
            <div className="p-4 text-xs text-slate-400">아직 생성된 파일이 없어요</div>
          )}

          {CATEGORY_ORDER.map((cat) => {
            const list = grouped.get(cat);
            if (!list || list.length === 0) return null;
            return (
              <div key={cat} className="mb-3">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 px-2 py-1.5">
                  {CATEGORY_LABEL[cat]}{" "}
                  <span className="text-slate-400 font-normal">({list.length})</span>
                </div>
                <ul className="space-y-0.5">
                  {list.map((f) => {
                    const active = selectedFile === f.name;
                    return (
                      <li key={f.name} className="group relative">
                        <button
                          onClick={() => setSelectedFile(active ? null : f.name)}
                          className={
                            "w-full text-left pl-3 pr-9 py-1.5 rounded-lg transition " +
                            (active ? "bg-indigo-50 ring-1 ring-indigo-200" : "hover:bg-slate-50")
                          }
                        >
                          <div className="text-[11px] font-mono truncate">{f.name}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 flex gap-2">
                            <span>{fmtBytes(f.size)}</span>
                            <span>·</span>
                            <span>{fmtTime(f.mtime)}</span>
                          </div>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyFile(f.name);
                          }}
                          className="absolute top-1/2 right-2 -translate-y-1/2 w-7 h-6 rounded-full text-[10px] text-slate-500 hover:bg-indigo-100 hover:text-indigo-700 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                          title="클립보드 복사"
                        >
                          {copyState[f.name] ? "✓" : "📋"}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
