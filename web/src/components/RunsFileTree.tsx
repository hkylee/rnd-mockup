"use client";

import { useEffect, useImperativeHandle, useMemo, useState, forwardRef } from "react";

type FileEntry = {
  name: string;
  category: "sync" | "library" | "pages" | "atom" | "mol" | "ogn" | "page" | "icon" | "other";
  size: number;
  mtime: number;
};

const CATEGORY_LABEL: Record<string, string> = {
  sync: "🔄 sync",
  library: "📦 library",
  pages: "📄 pages",
  atom: "⚛ atom",
  mol: "🧬 mol",
  ogn: "🦠 ogn",
  page: "📄 page",
  icon: "🖼 icon",
  other: "기타",
};

const CATEGORY_ORDER = ["sync", "library", "pages", "atom", "mol", "ogn", "page", "icon", "other"];

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

export type RunsFileTreeHandle = {
  refresh: () => void;
};

export const RunsFileTree = forwardRef<RunsFileTreeHandle>(function RunsFileTree(_props, ref) {
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

  useImperativeHandle(ref, () => ({ refresh: refreshFiles }), []);

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

  return (
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

      {selectedFile && fileContent && (
        <div className="border-t border-slate-200 max-h-[40vh] overflow-hidden flex flex-col">
          <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-500">미리보기</div>
              <div className="text-[11px] font-mono font-medium truncate">{selectedFile}</div>
            </div>
            <div className="flex gap-1 shrink-0">
              <button
                onClick={() => copyFile(selectedFile)}
                className="py-1 px-2 rounded-full border border-slate-300 text-[10px] font-medium hover:bg-slate-50"
              >
                {copyState[selectedFile] ? "✓" : "📋"}
              </button>
              <button
                onClick={() => setSelectedFile(null)}
                className="py-1 px-2 rounded-full text-slate-400 hover:bg-slate-100 text-[10px]"
              >
                ✕
              </button>
            </div>
          </div>
          <pre className="px-4 py-2 text-[10px] overflow-auto text-slate-700 font-mono whitespace-pre-wrap">
            {fileContent}
          </pre>
        </div>
      )}
    </aside>
  );
});
