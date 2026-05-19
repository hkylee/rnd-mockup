"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  addCandidates,
  loadCandidates,
  skipCandidate,
  updateCandidate,
  type Candidate,
  type CandidateCategory,
  type DiagnosticResult,
} from "@/lib/review-store";
import { diagnose } from "@/lib/review-diagnostics";
import { SpecPreviewCard } from "@/components/SpecPreviewCard";
import { CopyableDetails } from "@/components/CopyableDetails";

const CATEGORY_COLOR: Record<string, string> = {
  atom: "text-emerald-700 bg-emerald-50 border-emerald-200",
  mol: "text-blue-700 bg-blue-50 border-blue-200",
  ogn: "text-violet-700 bg-violet-50 border-violet-200",
  page: "text-slate-700 bg-slate-50 border-slate-200",
};

const LEVEL_STYLE: Record<string, { bg: string; text: string; icon: string }> = {
  info: { bg: "bg-indigo-50 border-indigo-200", text: "text-indigo-900", icon: "ℹ" },
  warning: { bg: "bg-amber-50 border-amber-200", text: "text-amber-900", icon: "⚠" },
  error: { bg: "bg-rose-50 border-rose-200", text: "text-rose-900", icon: "✕" },
};

type SourceEntry = { name: string; category: string };

function inferCategory(name: string, fallback?: string): CandidateCategory {
  const first = name.split("/")[0];
  if (first === "atom" || first === "mol" || first === "ogn" || first === "page") return first;
  if (fallback === "atom" || fallback === "mol" || fallback === "ogn" || fallback === "page") return fallback;
  return "mol";
}

// Scripter 번들 (.generated.js) 에서 COMPONENT_SPEC = {...} 객체 추출.
// balanced-brace 카운터로 최상위 중괄호를 찾아 잘라냄.
function extractFromJsBundle(text: string): unknown | null {
  const marker = text.match(/const\s+COMPONENT_SPEC\s*=\s*/);
  if (!marker || marker.index === undefined) return null;
  const start = marker.index + marker[0].length;
  if (text[start] !== "{") return null;
  let depth = 0;
  let end = -1;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) return null;
  const body = text.slice(start, end);
  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}

function tryParseJsonOrJsBundle(text: string): { json?: unknown; error?: string } {
  try {
    return { json: JSON.parse(text) };
  } catch (e) {
    const fromJs = extractFromJsBundle(text);
    if (fromJs) return { json: fromJs };
    return { error: e instanceof Error ? e.message : String(e) };
  }
}

// 업로드된 JSON 을 해석해서 candidate[] 로 변환.
// 케이스 A: 단일 component spec ({ name, category, base })
// 케이스 B: AI 분석 트리 ({ screen: {...}, newComponents: [...] })
// 케이스 C: candidate 배열 JSON 직접 (이식/백업 목적)
function parseImportedJson(json: unknown, filename?: string): {
  added: Parameters<typeof addCandidates>[0];
  note?: string;
} {
  if (!json || typeof json !== "object") return { added: [], note: "JSON 이 객체가 아님" };
  const o = json as Record<string, unknown>;

  // C. candidate 배열
  if (Array.isArray(json) && json.every((x) => x && typeof x === "object" && typeof (x as Record<string, unknown>).name === "string")) {
    const arr = json as Array<Record<string, unknown>>;
    return {
      added: arr.map((c) => ({
        name: String(c.name),
        category: inferCategory(String(c.name), typeof c.category === "string" ? c.category : undefined),
        description: typeof c.description === "string" ? c.description : undefined,
        spec: (c.spec && typeof c.spec === "object" ? c.spec : undefined) as Record<string, unknown> | undefined,
      })),
    };
  }

  // B. AI 트리 — screen + children[].component
  if (o.screen && typeof o.screen === "object") {
    const screen = o.screen as { children?: unknown[] };
    const news: Parameters<typeof addCandidates>[0] = [];

    function walk(nodes: unknown): void {
      if (!Array.isArray(nodes)) return;
      for (const n of nodes) {
        if (!n || typeof n !== "object") continue;
        const node = n as Record<string, unknown>;
        const comp = typeof node.component === "string" ? node.component : "";
        const match = node.match as { status?: string } | undefined;
        if (comp && match?.status === "new") {
          if (!news.find((x) => x.name === comp)) {
            news.push({
              name: comp,
              category: inferCategory(comp),
              description: typeof node.description === "string" ? node.description : undefined,
            });
          }
        }
        if (Array.isArray(node.children)) walk(node.children);
      }
    }
    walk(screen.children);

    const topLevelNew = Array.isArray(o.newComponents) ? (o.newComponents as Array<Record<string, unknown>>) : [];
    for (const nc of topLevelNew) {
      if (typeof nc.name !== "string") continue;
      if (!news.find((x) => x.name === nc.name)) {
        news.push({
          name: nc.name,
          category: inferCategory(nc.name, typeof nc.category === "string" ? nc.category : undefined),
          description: typeof nc.reason === "string" ? nc.reason : undefined,
          reason: typeof nc.reason === "string" ? nc.reason : undefined,
          baseOn: typeof nc.baseOn === "string" ? nc.baseOn : undefined,
        });
      }
    }

    return { added: news, note: news.length === 0 ? "AI 트리에서 신규 컴포넌트 없음" : undefined };
  }

  // A. 단일 spec
  if (typeof o.name === "string" && o.base) {
    const name = String(o.name);
    return {
      added: [
        {
          name,
          category: inferCategory(name, typeof o.category === "string" ? o.category : undefined),
          spec: json as Record<string, unknown>,
          description: typeof o.description === "string" ? o.description : filename,
        },
      ],
    };
  }

  return { added: [], note: "인식되지 않는 JSON 형식 (spec / AI tree / candidate 배열 중 하나여야 함)" };
}

export default function ReviewPage() {
  const searchParams = useSearchParams();
  const queryId = searchParams?.get("id") || null;
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [sources, setSources] = useState<SourceEntry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(queryId);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ds, setDs] = useState<any>(null);

  async function handleFilesUpload(files: FileList | File[]) {
    const arr = Array.from(files);
    const reports: string[] = [];
    let totalAdded = 0;
    for (const f of arr) {
      try {
        const text = await f.text();
        const { json, error } = tryParseJsonOrJsBundle(text);
        if (!json) {
          reports.push(`✕ ${f.name} — 파싱 실패 (${error || "unknown"})`);
          continue;
        }
        const { added, note } = parseImportedJson(json, f.name.replace(/\.(json|js)$/i, ""));
        if (added.length > 0) {
          addCandidates(added);
          totalAdded += added.length;
          reports.push(`✓ ${f.name} — ${added.length}개 후보 추가`);
        } else {
          reports.push(`⚠ ${f.name} — ${note || "추가할 항목 없음"}`);
        }
      } catch (e) {
        reports.push(`✕ ${f.name} — ${e instanceof Error ? e.message : String(e)}`);
      }
    }
    setCandidates(loadCandidates());
    alert(`${totalAdded}개 후보 추가 완료\n\n${reports.join("\n")}`);
  }

  const [pasteText, setPasteText] = useState("");
  const [pasteError, setPasteError] = useState<string | null>(null);

  function handleAddFromTextarea() {
    setPasteError(null);
    const text = pasteText.trim();
    if (!text) {
      setPasteError("JSON 또는 Scripter 번들을 붙여넣어주세요");
      return;
    }
    const { json, error } = tryParseJsonOrJsBundle(text);
    console.log("[review] parsed:", { json, error });
    if (!json) {
      setPasteError(
        "파싱 실패 — " +
          (error || "JSON 이 아니거나 번들 안에 COMPONENT_SPEC 가 없습니다.") +
          " (text length: " + text.length + ")"
      );
      return;
    }
    const { added, note } = parseImportedJson(json);
    console.log("[review] imported:", { added, note });
    if (added.length > 0) {
      addCandidates(added);
      setCandidates(loadCandidates());
      setPasteText("");
    } else {
      setPasteError(
        "인식 실패 — " + (note || "지원 형식: 단일 spec {name, base} · AI tree {screen} · candidate 배열 · Scripter 번들 JS")
      );
    }
  }

  useEffect(() => {
    setCandidates(loadCandidates());
    fetch("/api/sources")
      .then((r) => r.json())
      .then((d) => {
        const items = (d.items || []) as { name: string; category: string }[];
        setSources(items.filter((x) => ["atom", "mol", "ogn", "page"].includes(x.category)));
      })
      .catch(() => {});
    fetch("/api/spec?kind=ds")
      .then((r) => r.json())
      .then((d) => setDs(d.ds))
      .catch(() => {});
  }, []);

  const selected = selectedId ? candidates.find((c) => c.id === selectedId) : null;

  const diagnostics: DiagnosticResult[] = useMemo(() => {
    if (!selected) return [];
    return diagnose(selected, sources, candidates);
  }, [selected, sources, candidates]);

  function promote(id: string) {
    alert("승격은 Phase 1c 에서 구현됩니다. 현재는 localStorage 에 status='promoted' 로만 기록.");
    setCandidates(updateCandidate(id, { status: "promoted" }));
  }

  function skip(id: string) {
    setCandidates(skipCandidate(id));
    if (selectedId === id) setSelectedId(null);
  }

  const pending = candidates.filter((c) => c.status === "pending");
  const promoted = candidates.filter((c) => c.status === "promoted");

  return (
    <div className="h-full flex">
      {/* 좌: 후보 큐 */}
      <section className="w-96 shrink-0 bg-white border-r border-slate-200 flex flex-col">
        <header className="sticky top-0 bg-white border-b border-slate-200 px-4 py-3 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold tracking-tight">검수 큐</h1>
            <span className="text-xs text-slate-500">{pending.length} 대기</span>
          </div>

          {/* JSON / JS 붙여넣기 textarea */}
          <div>
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
              직접 검수 (JSON · Scripter 번들 JS)
            </label>
            <textarea
              value={pasteText}
              onChange={(e) => {
                setPasteText(e.target.value);
                if (pasteError) setPasteError(null);
              }}
              rows={5}
              placeholder={`컴포넌트 spec JSON, AI 트리 JSON, 또는\nScripter 번들(.generated.js) 파일 내용을 그대로 붙여넣기`}
              className="w-full rounded-lg border border-slate-300 p-2 text-[11px] font-mono focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {pasteError && (
              <div className="mt-1 text-[10px] text-rose-600">{pasteError}</div>
            )}
            <div className="mt-2 flex gap-1.5">
              <button
                onClick={handleAddFromTextarea}
                disabled={!pasteText.trim()}
                className="flex-1 py-1.5 px-3 rounded-full bg-indigo-600 text-white text-xs font-medium disabled:opacity-40 hover:bg-indigo-700 shadow-sm"
              >
                ＋ 검수에 추가
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.js,application/json,application/javascript"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) handleFilesUpload(e.target.files);
                  e.target.value = "";
                }}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="py-1.5 px-3 rounded-full border border-slate-300 text-xs font-medium hover:bg-slate-50"
                title=".json / .generated.js 파일 업로드"
              >
                📁 파일
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-2">
          {candidates.length === 0 && (
            <div className="p-4">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4">
                <div className="text-2xl mb-2">🧐</div>
                <div className="text-xs font-semibold text-indigo-900 mb-2">
                  검수 대기 중인 후보가 없어요
                </div>
                <div className="text-[11px] text-indigo-800 leading-relaxed space-y-1.5">
                  <div className="font-medium">① 이미지에서 추출</div>
                  <div className="pl-3 text-indigo-700">
                    <a href="/generate" className="underline hover:text-indigo-900">✨ UI 생성</a> 메뉴에서 이미지 분석 → 우측 트리 헤더의 <strong>📋 raw 복사</strong> → 위 textarea 에 붙여넣기
                  </div>
                  <div className="font-medium mt-2">② 파일 직접 올리기</div>
                  <div className="pl-3 text-indigo-700">
                    spec JSON (<code className="bg-white px-1 rounded">mol/card-header.json</code>) 또는 Scripter 번들 (<code className="bg-white px-1 rounded">atom-accordion.generated.js</code>) 을 <strong>📁 파일</strong> 로 업로드
                  </div>
                  <div className="font-medium mt-2">③ 직접 작성 · 번들 붙여넣기</div>
                  <div className="pl-3 text-indigo-700">
                    textarea 에 spec JSON 또는 Scripter 번들 JS 내용 전체를 붙여넣기 (자동으로 <code className="bg-white px-1 rounded">COMPONENT_SPEC</code> 추출)
                  </div>
                </div>
              </div>
            </div>
          )}

          {pending.length > 0 && (
            <div className="mb-3">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 px-2 py-1.5">
                대기 ({pending.length})
              </div>
              <ul className="space-y-0.5">
                {pending.map((c) => {
                  const diag = diagnose(c, sources, candidates);
                  const errors = diag.filter((d) => d.level === "error").length;
                  const warnings = diag.filter((d) => d.level === "warning").length;
                  const active = selectedId === c.id;
                  return (
                    <li key={c.id} className="group relative">
                      <div
                        onClick={() => setSelectedId(c.id)}
                        className={
                          "w-full text-left pl-3 pr-9 py-2 rounded-lg transition cursor-pointer " +
                          (active ? "bg-indigo-50 ring-1 ring-indigo-200" : "hover:bg-slate-50")
                        }
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              "inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold border " +
                              (CATEGORY_COLOR[c.category] || CATEGORY_COLOR.mol)
                            }
                          >
                            {c.category}
                          </span>
                          <span className="text-xs font-mono flex-1 truncate">{c.name}</span>
                        </div>
                        {(errors > 0 || warnings > 0) && (
                          <div className="text-[10px] mt-1 flex gap-2">
                            {errors > 0 && <span className="text-rose-600">✕ {errors}</span>}
                            {warnings > 0 && <span className="text-amber-600">⚠ {warnings}</span>}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          skip(c.id);
                        }}
                        className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:bg-rose-100 hover:text-rose-600 opacity-0 group-hover:opacity-100 transition"
                        title="스킵 (제거)"
                      >
                        ×
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {promoted.length > 0 && (
            <div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 px-2 py-1.5">
                승격 대기 ({promoted.length})
              </div>
              <ul className="space-y-0.5">
                {promoted.map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => setSelectedId(c.id)}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 line-through hover:bg-slate-50"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-[10px] text-slate-400 px-2 mt-2 italic">
                ⓘ Phase 1c 에서 라이브러리 저장 구현
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 우: 상세 */}
      <section className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          {!selected && (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl mb-3 shadow-sm">
                🔎
              </div>
              <div className="text-sm text-slate-600">
                좌측에서 후보를 선택하면 진단 결과가 표시됩니다.
              </div>
            </div>
          )}

          {selected && (
            <>
              <div className="mb-6">
                <span
                  className={
                    "inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold border mb-2 " +
                    (CATEGORY_COLOR[selected.category] || CATEGORY_COLOR.mol)
                  }
                >
                  {selected.category}
                </span>
                <h1 className="text-2xl font-semibold tracking-tight font-mono">{selected.name}</h1>
                {selected.description && (
                  <p className="text-sm text-slate-600 mt-2">{selected.description}</p>
                )}
                {selected.baseOn && (
                  <p className="text-xs text-slate-500 mt-1 font-mono">base on: {selected.baseOn}</p>
                )}
              </div>

              {selected.sourceImageUrl && (
                <details className="mb-4 rounded-xl border border-slate-200 bg-white">
                  <summary className="px-4 py-2 text-xs text-slate-600 cursor-pointer hover:bg-slate-50 rounded-xl">
                    출처 이미지 보기
                  </summary>
                  <div className="px-4 pb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selected.sourceImageUrl} alt="source" className="max-h-96 mx-auto rounded" />
                  </div>
                </details>
              )}

              {/* 미러링 렌더 */}
              <div className="mb-4">
                <SpecPreviewCard spec={selected.spec} ds={ds} title="미리보기" />
              </div>

              {/* 진단 결과 */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-4">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-700">진단</h2>
                  <span className="text-xs text-slate-500">{diagnostics.length}개 항목</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {diagnostics.length === 0 && (
                    <div className="px-5 py-6 text-center text-sm text-emerald-700">
                      ✓ 이상 없음 · 승격 준비 완료
                    </div>
                  )}
                  {diagnostics.map((d, i) => {
                    const s = LEVEL_STYLE[d.level];
                    return (
                      <div key={i} className={`px-5 py-3 border-l-4 ${s.bg} ${s.text}`}>
                        <div className="flex items-start gap-2">
                          <span className="font-bold">{s.icon}</span>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{d.message}</div>
                            {d.suggestion && (
                              <div className="text-xs mt-1 opacity-80">→ {d.suggestion}</div>
                            )}
                            <div className="text-[10px] mt-1 opacity-60 font-mono">{d.type}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-2">
                <button
                  onClick={() => promote(selected.id)}
                  disabled={selected.status !== "pending" || diagnostics.some((d) => d.level === "error")}
                  className="flex-1 py-2.5 px-4 rounded-full bg-emerald-600 text-white text-sm font-medium disabled:opacity-40 hover:bg-emerald-700 shadow-sm"
                >
                  {selected.status === "promoted" ? "✓ 승격 완료 (Phase 1c 대기)" : "✓ 컴포넌트로 확정"}
                </button>
                <button
                  onClick={() => alert("병합은 Phase 1c 에서 구현 예정 (라이브러리의 기존 컴포넌트와 ref 교체).")}
                  className="py-2.5 px-4 rounded-full border border-slate-300 text-sm font-medium hover:bg-slate-50"
                >
                  병합
                </button>
                <button
                  onClick={() => skip(selected.id)}
                  className="py-2.5 px-4 rounded-full border border-rose-300 text-rose-700 text-sm font-medium hover:bg-rose-50"
                >
                  스킵
                </button>
              </div>

              {/* raw spec */}
              {selected.spec ? (
                <div className="mt-4">
                  <CopyableDetails data={selected.spec} label="Raw spec JSON" />
                </div>
              ) : (
                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
                  <strong>⚠ spec 없음</strong> — 이 후보는 AI 가 감지했지만 spec 본문은 아직 생성 안 됐어요.
                  Phase 1c 의 자동 spec 생성 (AI 이미지 조각 재분석) 에서 채워집니다.
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
