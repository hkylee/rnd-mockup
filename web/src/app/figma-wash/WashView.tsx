"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

type RawValue = { jsonPath: string; value: string; tokenCandidates: string[] };
type Fix = { jsonPath: string; before: unknown; after: unknown; reason: string };

type WashResult = {
  spec: Spec;
  exists: boolean;
  catalogPath: string | null;
  catalogSpec: Spec | null;
  expectedCategory: string;
  rawValues: RawValue[];
  fixes: Fix[];
  auditNotes: string[];
};

export function WashView() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<WashResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onAnalyze = async () => {
    setError(null);
    setLoading(true);
    setResults([]);
    try {
      let parsed: unknown;
      try {
        parsed = JSON.parse(input);
      } catch (e) {
        setError("JSON 파싱 실패: " + (e as Error).message);
        setLoading(false);
        return;
      }
      const body = Array.isArray(parsed) ? { specs: parsed } : { spec: parsed };
      const res = await fetch("/api/figma-wash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || `HTTP ${res.status}`);
      } else {
        const data = await res.json();
        setResults(data.results || []);
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <aside className="w-[480px] shrink-0 border-r border-slate-200 bg-slate-50 flex flex-col">
        <div className="px-5 py-5 border-b border-slate-200">
          <div className="text-base font-bold tracking-tight text-slate-900">Figma 워싱</div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Figma 손작업 → component-specs JSON 정제
          </div>
        </div>
        <div className="px-5 py-4 flex-1 flex flex-col gap-3 overflow-y-auto">
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Spec JSON 입력
            </label>
            <p className="text-[11px] text-slate-500 mb-2">
              Figma plugin (Genui Spec Extractor) 의 추출 결과 paste. 또는 plugin 의 "웹으로 전송" 사용.
            </p>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"name": "atom/btn", "category": "atom", "base": {...}}'
              className="w-full h-72 border border-slate-300 rounded-lg p-3 font-mono text-xs bg-white"
            />
          </div>
          <button
            onClick={onAnalyze}
            disabled={loading || !input.trim()}
            className="bg-indigo-600 text-white font-semibold px-4 py-2.5 rounded-lg shadow-md shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "분석 중…" : "🧼 워싱 분석"}
          </button>
          {error && (
            <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded p-2">
              {error}
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-10 py-10">
          {results.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-6">
              <header className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  워싱 결과 {results.length}건
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  토큰 후보 / auto-fix 검수 후 저장 또는 promote.
                </p>
              </header>
              {results.map((r, i) => (
                <ResultCard key={i} initial={r} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20 text-slate-400">
      <div className="text-5xl mb-4">🧼</div>
      <div className="text-sm font-semibold text-slate-600 mb-1">
        Figma 손작업 spec 을 paste 하세요
      </div>
      <div className="text-xs">plugin 또는 직접 JSON 입력 → "워싱 분석" 클릭</div>
    </div>
  );
}

function ResultCard({ initial }: { initial: WashResult }) {
  const [spec, setSpec] = useState<Spec>(initial.spec);
  const [appliedFixes, setAppliedFixes] = useState<Set<number>>(new Set());
  const [appliedTokens, setAppliedTokens] = useState<Map<string, string>>(new Map());
  const [savedPath, setSavedPath] = useState<string | null>(null);
  const [promoteResult, setPromoteResult] = useState<{
    ok: boolean;
    specPath?: string;
    bundleOutput?: string;
    auditOutput?: string;
    bundleError?: string;
  } | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const { exists, expectedCategory, rawValues, fixes, auditNotes } = initial;
  const categoryMismatch =
    initial.spec.category !== expectedCategory && expectedCategory !== "(unknown)";

  const toggleFix = (idx: number) => {
    const next = new Set(appliedFixes);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setAppliedFixes(next);
    setSpec(rebuildSpec(initial.spec, fixes, next, appliedTokens));
  };

  const applyToken = (jsonPath: string, token: string) => {
    const next = new Map(appliedTokens);
    if (next.get(jsonPath) === token) next.delete(jsonPath);
    else next.set(jsonPath, token);
    setAppliedTokens(next);
    setSpec(rebuildSpec(initial.spec, fixes, appliedFixes, next));
  };

  const onSave = async () => {
    setBusy("save");
    try {
      const res = await fetch("/api/figma-wash/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spec }),
      });
      const data = await res.json();
      if (res.ok) setSavedPath(data.path);
      else alert("저장 실패: " + data.error);
    } finally {
      setBusy(null);
    }
  };

  const onPromote = async () => {
    if (!confirm(`mockup/component-specs/${spec.name}.json 로 promote 하시겠습니까? (덮어쓰기)`)) {
      return;
    }
    setBusy("promote");
    try {
      const res = await fetch("/api/figma-wash/promote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spec, runBundle: true }),
      });
      const data = await res.json();
      setPromoteResult(data);
    } finally {
      setBusy(null);
    }
  };

  return (
    <section className="border border-slate-200 rounded-2xl bg-white shadow-sm p-6">
      <header className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-indigo-600 mb-1">
            {spec.category} {categoryMismatch && `→ ${expectedCategory} ⚠️`}
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-mono">{spec.name}</h2>
          {spec.description && (
            <p className="text-xs text-slate-500 mt-1">{spec.description}</p>
          )}
        </div>
        <div className="shrink-0">
          {exists ? (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
              📦 카탈로그 존재 (덮어쓰기)
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
              ✨ 신규
            </span>
          )}
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Panel title="Audit" count={auditNotes.length} accent={auditNotes.length > 0 ? "amber" : "emerald"}>
          {auditNotes.length === 0 ? (
            <div className="text-xs text-emerald-600">✓ 통과</div>
          ) : (
            <ul className="space-y-1">
              {auditNotes.map((n, i) => (
                <li key={i} className="text-xs text-slate-700">{n}</li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          title={`Auto-fix (${appliedFixes.size}/${fixes.length})`}
          count={fixes.length}
          accent={fixes.length > 0 ? "amber" : "emerald"}
        >
          {fixes.length === 0 ? (
            <div className="text-xs text-emerald-600">✓ 정정 제안 없음</div>
          ) : (
            <ul className="space-y-1.5">
              {fixes.map((f, i) => (
                <li key={i} className="text-xs">
                  <label className="flex gap-2 items-start cursor-pointer">
                    <input
                      type="checkbox"
                      checked={appliedFixes.has(i)}
                      onChange={() => toggleFix(i)}
                      className="mt-0.5"
                    />
                    <div>
                      <div className="font-mono text-[10px] text-slate-500">{f.jsonPath}</div>
                      <div className="text-slate-700">{f.reason}</div>
                      <div className="font-mono text-[10px] text-slate-400 mt-0.5">
                        <s>{String(f.before)}</s> → <span className="text-emerald-700">{String(f.after)}</span>
                      </div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>

      {rawValues.length > 0 && (
        <div className="mt-4 border border-slate-200 rounded-xl p-3 bg-slate-50">
          <div className="text-[11px] font-bold text-slate-700 mb-2">
            Raw 값 → DS 토큰 후보 ({appliedTokens.size}/{rawValues.length} 적용)
          </div>
          <ul className="space-y-2">
            {rawValues.map((rv, i) => (
              <li key={i} className="text-xs">
                <div className="font-mono text-[10px] text-slate-500 mb-0.5">{rv.jsonPath}</div>
                <div className="font-mono text-slate-700 mb-1">현재: {rv.value}</div>
                {rv.tokenCandidates.length === 0 ? (
                  <div className="text-[10px] text-slate-400 italic">매칭 후보 없음 — 수동 입력 필요</div>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {rv.tokenCandidates.map((tc) => {
                      const active = appliedTokens.get(rv.jsonPath) === tc;
                      return (
                        <button
                          key={tc}
                          onClick={() => applyToken(rv.jsonPath, tc)}
                          className={
                            "text-[10px] font-mono px-2 py-1 rounded border transition " +
                            (active
                              ? "bg-indigo-600 text-white border-indigo-600"
                              : "bg-white text-slate-700 border-slate-300 hover:border-indigo-400")
                          }
                        >
                          {tc}
                        </button>
                      );
                    })}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <details className="mt-4">
        <summary className="text-xs font-semibold text-slate-600 cursor-pointer hover:text-slate-900">
          📄 spec JSON {appliedFixes.size + appliedTokens.size > 0 ? "(정정 적용됨)" : ""}
        </summary>
        <pre className="mt-2 text-[11px] bg-slate-50 border border-slate-200 rounded-lg p-3 overflow-x-auto font-mono">
          {JSON.stringify(spec, null, 2)}
        </pre>
      </details>

      <div className="mt-4 flex gap-2 items-center">
        <button
          onClick={onSave}
          disabled={!!busy}
          className="text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-50"
        >
          {busy === "save" ? "저장 중…" : "💾 web/projects 임시 저장"}
        </button>
        <button
          onClick={onPromote}
          disabled={!!busy}
          className="text-xs font-semibold px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {busy === "promote" ? "promote 중…" : "🚀 mockup 카탈로그 promote"}
        </button>
        {savedPath && (
          <span className="text-[10px] text-emerald-600 font-mono">
            ✓ saved: …/{savedPath.split("/").slice(-3).join("/")}
          </span>
        )}
      </div>

      {promoteResult && (
        <div className="mt-3 text-[11px] bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono whitespace-pre-wrap">
          <div className="font-sans font-bold text-emerald-700 mb-1">
            ✓ promote 완료: {promoteResult.specPath}
          </div>
          {promoteResult.auditOutput && (
            <details className="mt-1">
              <summary className="font-sans cursor-pointer">audit</summary>
              <pre className="mt-1">{promoteResult.auditOutput}</pre>
            </details>
          )}
          {promoteResult.bundleOutput && (
            <details className="mt-1">
              <summary className="font-sans cursor-pointer">bundle (clipboard 복사됨)</summary>
              <pre className="mt-1">{promoteResult.bundleOutput}</pre>
            </details>
          )}
          {promoteResult.bundleError && (
            <div className="mt-1 text-red-600">bundle 에러: {promoteResult.bundleError}</div>
          )}
        </div>
      )}
    </section>
  );
}

// 정정 (auto-fix + token replacement) 적용한 spec 생성
function rebuildSpec(
  original: Spec,
  fixes: Fix[],
  appliedFixes: Set<number>,
  appliedTokens: Map<string, string>
): Spec {
  const next = JSON.parse(JSON.stringify(original));
  // auto-fix
  for (const [i, f] of fixes.entries()) {
    if (!appliedFixes.has(i)) continue;
    setByPath(next, f.jsonPath, f.after);
  }
  // token replacement
  for (const [jsonPath, token] of appliedTokens.entries()) {
    setByPath(next, jsonPath, token);
  }
  return next;
}

function setByPath(obj: Spec, path: string, value: unknown) {
  const parts = path.split(/[.[\]]+/).filter(Boolean);
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  if (value === undefined) {
    cur[parts[parts.length - 1]] = undefined;
  } else {
    cur[parts[parts.length - 1]] = value;
  }
}

function Panel({
  title,
  count,
  accent,
  children,
}: {
  title: string;
  count: number;
  accent: "emerald" | "amber";
  children: React.ReactNode;
}) {
  const accentClass =
    accent === "emerald" ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200";
  return (
    <div className={"border rounded-xl p-3 " + accentClass}>
      <div className="text-[11px] font-bold text-slate-700 mb-2 flex items-center gap-2">
        <span>{title}</span>
        <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded">{count}</span>
      </div>
      {children}
    </div>
  );
}
