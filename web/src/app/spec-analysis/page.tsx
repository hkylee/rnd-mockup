"use client";

import { useEffect, useState } from "react";
import type { CandidateCategory } from "@/lib/review-store";
import type { SpecAnalysisResult } from "@/lib/spec-analysis-types";
import { buildPagesFromFeatures } from "@/lib/page-spec-builder";
import { archiveAnalysis, archiveGeneration } from "@/lib/spec-analysis-history";
import { SpecReport } from "@/components/SpecReport";
import { CodeGenerationResult } from "@/components/CodeGenerationResult";

type CandidateInputForGen = {
  name: string;
  category: "component" | "page";
  description?: string;
  baseOn?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

export type TierKind = "component" | "page";

export type TierBundles = Record<TierKind, string | null>;

type GenerationOutcome = {
  newSpecs: Spec[];
  pageSpecs: Spec[];
  bundleText: string;
  tierBundles: TierBundles;
};

const STORAGE_KEY = "genui.spec-analysis.latest";

type InputMode = "feature-spec" | "policy-doc";

function loadLatest(): SpecAnalysisResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SpecAnalysisResult) : null;
  } catch {
    return null;
  }
}

function saveLatest(r: SpecAnalysisResult) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(r));
  } catch {}
}

function inferCategory(name: string, fallback?: string): CandidateCategory {
  const first = name.split("/")[0];
  if (first === "page") return "page";
  if (first === "atom" || first === "mol" || first === "ogn" || first === "component") return "component";
  if (fallback === "page") return "page";
  if (fallback === "atom" || fallback === "mol" || fallback === "ogn" || fallback === "component") return "component";
  return "component";
}

// AI 응답 정규화 — 다중 화면일 때 객체로 오는 케이스 방어 + 신규 screenRoles 처리.
function normalizeAnalysisResult(r: SpecAnalysisResult): SpecAnalysisResult {
  // notes 같은 단일 string 필드: 객체로 오면 평탄화
  const flattenStringMap = (v: unknown): string | undefined => {
    if (typeof v === "string") return v;
    if (v && typeof v === "object") {
      const parts: string[] = [];
      for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
        if (typeof val === "string") parts.push(`[${k}] ${val}`);
      }
      return parts.length > 0 ? parts.join(" / ") : undefined;
    }
    return undefined;
  };

  // screenRoles: AI 가 줘야 할 새 형식 — Record<screenId, string>.
  // 못 주거나 다른 모양이면 가능한 정보로 reconstruct.
  const buildScreenRoles = (
    raw: unknown,
    legacyScreenRole: unknown,
    features: SpecAnalysisResult["features"]
  ): Record<string, string> | undefined => {
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      const out: Record<string, string> = {};
      for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
        if (typeof v === "string") out[k] = v;
      }
      if (Object.keys(out).length > 0) return out;
    }
    // legacy: screenRole 단일 문자열 + 단일 화면이면 그 화면에 그대로 mapping
    const screenIds = Array.from(
      new Set(features.map((f) => (f.screenId || f.specId || "").trim()).filter(Boolean))
    );
    if (typeof legacyScreenRole === "string" && screenIds.length === 1) {
      return { [screenIds[0]]: legacyScreenRole };
    }
    return undefined;
  };

  const flattenEssentialsMap = (v: unknown): SpecAnalysisResult["inferredEssentials"] => {
    if (Array.isArray(v)) return v;
    if (v && typeof v === "object") {
      const merged: NonNullable<SpecAnalysisResult["inferredEssentials"]> = [];
      const seen = new Set<string>();
      for (const val of Object.values(v as Record<string, unknown>)) {
        if (Array.isArray(val)) {
          for (const e of val) {
            if (e && typeof e === "object" && typeof (e as { name?: unknown }).name === "string") {
              const n = (e as { name: string }).name;
              if (seen.has(n)) continue;
              seen.add(n);
              merged.push(e as NonNullable<SpecAnalysisResult["inferredEssentials"]>[number]);
            }
          }
        }
      }
      return merged;
    }
    return undefined;
  };

  const features = r.features || [];
  return {
    ...r,
    features,
    screenRole: flattenStringMap(r.screenRole),
    screenRoles: buildScreenRoles(r.screenRoles, r.screenRole, features),
    notes: flattenStringMap(r.notes),
    inferredEssentials: flattenEssentialsMap(r.inferredEssentials),
  };
}

export default function SpecAnalysisPage() {
  const [input, setInput] = useState("");
  const [inputMode, setInputMode] = useState<InputMode>("feature-spec");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SpecAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [raw, setRaw] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [genStatus, setGenStatus] = useState<string | null>(null);
  const [genOutcome, setGenOutcome] = useState<GenerationOutcome | null>(null);
  // Step 0.5: policy doc → derived feature spec review
  const [policyDerived, setPolicyDerived] = useState<{ spec: string; summary: string } | null>(null);
  const [derivedSpecEdited, setDerivedSpecEdited] = useState("");

  useEffect(() => {
    const latest = loadLatest();
    if (latest) setResult(normalizeAnalysisResult(latest));
  }, []);

  async function runAnalysis(specText: string) {
    setLoading(true);
    setError(null);
    setRaw(null);
    setGenOutcome(null);
    try {
      const res = await fetch("/api/analyze-spec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: specText }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setRaw(data.raw || null);
        return;
      }
      if (!data.result) {
        setError("파싱 실패 — JSON 추출 불가");
        setRaw(data.raw || null);
        return;
      }
      const r = normalizeAnalysisResult(data.result as SpecAnalysisResult);
      setResult(r);
      saveLatest(r);
      archiveAnalysis(r);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }

  async function analyze() {
    if (inputMode === "policy-doc") {
      // Step 0.5: 정책서 → 기능내역서 도출
      setLoading(true);
      setError(null);
      setRaw(null);
      try {
        const res = await fetch("/api/derive-features", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input.trim() }),
        });
        const data = await res.json();
        if (data.error) {
          setError(data.error);
          setRaw(data.raw || null);
          return;
        }
        setPolicyDerived({ spec: data.derivedSpec || "", summary: data.summary || "" });
        setDerivedSpecEdited(data.derivedSpec || "");
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    } else {
      await runAnalysis(input.trim());
    }
  }

  async function generateScripterCode(
    screenId: string,
    includedEssentialNames: string[]
  ) {
    if (!result?.features) return;
    const features = result.features.filter(
      (f) => (f.screenId || f.specId || "unknown").trim() === screenId
    );
    if (features.length === 0) {
      alert("해당 화면의 기능이 없습니다.");
      return;
    }
    // appliesToScreens 가 명시되어 있으면 해당 화면에 적용되는 것만 사용
    const essentials = (result.inferredEssentials || []).filter(
      (e) =>
        !e.appliesToScreens ||
        e.appliesToScreens.length === 0 ||
        e.appliesToScreens.includes(screenId)
    );
    setGenerating(true);
    setGenStatus(null);
    try {
      const seenNames = new Set<string>();
      const newCandidates: CandidateInputForGen[] = [];

      // 1. 기능내역서의 신규 컴포넌트
      for (const f of features) {
        for (const c of f.components) {
          if (c.status !== "new") continue;
          const name = c.suggested || c.name;
          const cat = inferCategory(name, c.category);
          if (seenNames.has(name)) continue;
          seenNames.add(name);
          newCandidates.push({
            name,
            category: cat,
            description: c.reason || `${f.name} 에서 사용`,
          });
        }
      }

      // 2. 체크된 추론 essentials → page children + 신규 spec 작성
      const includedEssentialsForChildren: string[] = [];
      for (const e of essentials) {
        if (!includedEssentialNames.includes(e.name)) continue;
        const useName = e.suggested || e.name;
        includedEssentialsForChildren.push(useName);
        if (e.status !== "new" || seenNames.has(useName)) continue;
        seenNames.add(useName);
        newCandidates.push({
          name: useName,
          category: e.category,
          description: e.reason,
        });
      }

      // 3. 페이지 spec
      const pageSpecs: Spec[] = buildPagesFromFeatures(
        features,
        includedEssentialsForChildren
      ).map((p) => p.candidate.spec);

      const newSpecs: Spec[] = [];
      if (newCandidates.length > 0) {
        setGenStatus(`AI 가 ${newCandidates.length}개 신규 컴포넌트 spec 작성 중… (30-60초)`);
        const ctx = features.map((f) => `[${f.specId}] ${f.name}: ${f.description || ""}`).join("\n");
        const res = await fetch("/api/generate-spec", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ candidates: newCandidates, context: ctx }),
        });
        const data = await res.json();
        if (!data.result?.specs) {
          const detail = [
            data.error && `error: ${data.error}`,
            data.parseError && `parse error: ${data.parseError}`,
            data.stopReason && `stop reason: ${data.stopReason}`,
            data.usage && `tokens: in=${data.usage.input_tokens} out=${data.usage.output_tokens}`,
            data.raw && `\n--- raw 응답 (앞 1500자) ---\n${String(data.raw).slice(0, 1500)}`,
          ]
            .filter(Boolean)
            .join("\n");
          console.error("[generate-spec] 실패", data);
          alert("신규 spec 생성 실패\n\n" + (detail || "result.specs 없음"));
          return;
        }
        for (const name of Object.keys(data.result.specs)) {
          newSpecs.push(data.result.specs[name]);
        }
        // invalid token 경고 — Scripter 에서 throw 하기 전에 미리 알림
        if (data.invalidTokens) {
          const lines = Object.entries(data.invalidTokens).map(
            ([specName, tokens]) => `· ${specName}: ${(tokens as string[]).join(", ")}`
          );
          console.warn("[generate-spec] invalid tokens", data.invalidTokens);
          const proceed = confirm(
            `⚠ 일부 spec 에 카탈로그에 없는 토큰이 있어요 (Scripter 에서 그 spec 들이 fail 함):\n\n` +
              lines.join("\n") +
              `\n\n그래도 진행할까요? (취소 시 다시 분석/생성)`
          );
          if (!proceed) return;
        }
      }

      if (newSpecs.length === 0 && pageSpecs.length === 0) {
        alert("생성할 spec 이 없어요.");
        return;
      }

      setGenStatus("번들 생성 중… (전체 + tier 별)");
      const tierGroups: Record<TierKind, Spec[]> = {
        component: newSpecs,
        page: pageSpecs,
      };
      const fetchBundle = async (body: { newSpecs?: Spec[]; pageSpecs?: Spec[] }) => {
        const r = await fetch("/api/cascade-bundle", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!r.ok) {
          const d = await r.json().catch(() => ({}));
          throw new Error(d.error || r.statusText);
        }
        return r.text();
      };

      const [fullBundle, componentBundle, pageBundle] = await Promise.all([
        fetchBundle({ newSpecs, pageSpecs }),
        tierGroups.component.length > 0 ? fetchBundle({ newSpecs: tierGroups.component }) : Promise.resolve<string | null>(null),
        tierGroups.page.length > 0 ? fetchBundle({ pageSpecs: tierGroups.page }) : Promise.resolve<string | null>(null),
      ]);

      const tierBundles: TierBundles = {
        component: componentBundle,
        page: pageBundle,
      };

      try {
        await navigator.clipboard.writeText(fullBundle);
      } catch {}

      const extractName = (s: unknown): string | undefined =>
        typeof s === "object" && s !== null && "name" in s
          ? typeof (s as { name?: unknown }).name === "string"
            ? ((s as { name: string }).name)
            : undefined
          : undefined;
      const newSpecNames = newSpecs
        .map(extractName)
        .filter((n): n is string => typeof n === "string");
      const pageSpecNames = pageSpecs
        .map(extractName)
        .filter((n): n is string => typeof n === "string");
      archiveGeneration({
        features,
        newSpecNames,
        pageSpecNames,
        includedEssentials: includedEssentialsForChildren,
        bundleText: fullBundle,
      });

      setGenOutcome({ newSpecs, pageSpecs, bundleText: fullBundle, tierBundles });
    } catch (e) {
      alert("에러: " + (e instanceof Error ? e.message : String(e)));
    } finally {
      setGenerating(false);
      setGenStatus(null);
    }
  }

  function reset() {
    setResult(null);
    setInput("");
    setError(null);
    setRaw(null);
    setGenOutcome(null);
    setPolicyDerived(null);
    setDerivedSpecEdited("");
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }

  // ---------- Step 0.5: 정책서 도출 검토 ----------
  if (!result && policyDerived) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-amber-600 font-semibold mb-1">
                Step 0.5 — 기능내역서 도출 완료
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">도출된 기능내역서 검토</h1>
              <p className="text-sm text-slate-600 mt-1">
                AI가 정책서를 분석해서 기능내역서를 작성했어요. 내용을 확인하고 필요하면 수정 후 분석을 진행하세요.
              </p>
            </div>
            <button
              onClick={() => { setPolicyDerived(null); setDerivedSpecEdited(""); }}
              className="text-xs text-slate-500 hover:underline"
            >
              ← 다시 입력
            </button>
          </header>

          <div className="surface-card p-6 space-y-4 mb-4">
            <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4">
              <span className="text-amber-600 text-lg leading-none mt-0.5">📋</span>
              <div>
                <p className="text-sm font-semibold text-amber-900 mb-0.5">도출 요약</p>
                <p className="text-sm text-amber-800">{policyDerived.summary}</p>
              </div>
            </div>

            <label className="block text-sm font-medium text-slate-800">
              도출된 기능내역서 <span className="text-slate-400 font-normal">(수정 가능)</span>
            </label>
            <textarea
              value={derivedSpecEdited}
              onChange={(e) => setDerivedSpecEdited(e.target.value)}
              rows={18}
              className="w-full rounded-xl border border-slate-300 p-3 text-xs font-mono focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />

            <button
              onClick={() => runAnalysis(derivedSpecEdited)}
              disabled={!derivedSpecEdited.trim() || loading}
              className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold disabled:opacity-40 hover:bg-indigo-700 shadow-md shadow-indigo-200 flex items-center justify-center gap-2"
            >
              {loading && <span className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />}
              {loading ? "분석 중… (Claude Sonnet · 20-40초)" : "이 기능내역서로 분석 진행"}
            </button>

            {error && (
              <div className="rounded-xl p-3 bg-rose-50 border border-rose-200 text-rose-900 text-sm">
                <strong>에러:</strong> {error}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---------- Step 1: 입력 ----------
  if (!result) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">기능내역서 분석</h1>
            <p className="text-sm text-slate-600 mt-1">
              기능내역서 표 또는 정책서 문서를 붙여넣으면 화면별 컴포넌트 목록을 분석합니다.
            </p>
          </header>

          <div className="surface-card p-6 space-y-4">
            {/* 입력 모드 토글 */}
            <div className="flex gap-2">
              <button
                onClick={() => setInputMode("feature-spec")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  inputMode === "feature-spec"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-white text-slate-600 border-slate-300 hover:border-indigo-400"
                }`}
              >
                기능내역서
              </button>
              <button
                onClick={() => setInputMode("policy-doc")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  inputMode === "policy-doc"
                    ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                    : "bg-white text-slate-600 border-slate-300 hover:border-amber-400"
                }`}
              >
                정책서
              </button>
            </div>

            {inputMode === "feature-spec" ? (
              <label className="block text-sm font-medium text-slate-800">기능내역서 텍스트</label>
            ) : (
              <div>
                <label className="block text-sm font-medium text-slate-800">정책서 텍스트</label>
                <p className="text-xs text-amber-700 mt-0.5">
                  AI가 정책서를 읽고 기능내역서를 먼저 도출합니다 — 검토 후 분석 진행 (2단계)
                </p>
              </div>
            )}
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={14}
              placeholder={
                inputMode === "policy-doc"
                  ? "정책서 텍스트를 붙여넣기\n\n· Word / HTML / Markdown 어떤 형식이든 OK\n· 복사해서 그대로 붙여넣기 (태그 포함도 OK)"
                  : `Notion/Excel/Markdown 테이블을 그대로 붙여넣기\n\n예:\nspec id | screen id | 기능명 | 세부 설명 | 컴포넌트 목록 | 모듈 목록 | 우선순위`
              }
              className="w-full rounded-xl border border-slate-300 p-3 text-xs font-mono focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <button
              onClick={analyze}
              disabled={!input.trim() || loading}
              className={`w-full py-3 rounded-full text-white font-semibold disabled:opacity-40 shadow-md flex items-center justify-center gap-2 ${
                inputMode === "policy-doc"
                  ? "bg-amber-500 hover:bg-amber-600 shadow-amber-200"
                  : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200"
              }`}
            >
              {loading && <span className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />}
              {loading
                ? inputMode === "policy-doc"
                  ? "기능내역서 도출 중… (Claude Sonnet · 30-60초)"
                  : "분석 중… (Claude Sonnet · 20-40초)"
                : inputMode === "policy-doc"
                  ? "정책서 분석 → 기능내역서 도출"
                  : "분석하기"
              }
            </button>

            {error && (
              <div className="rounded-xl p-3 bg-rose-50 border border-rose-200 text-rose-900 text-sm">
                <strong>에러:</strong> {error}
                {raw && (
                  <details className="mt-2">
                    <summary className="text-xs cursor-pointer">raw 응답</summary>
                    <pre className="mt-2 p-2 bg-white border rounded text-[10px] max-h-60 overflow-auto">{raw}</pre>
                  </details>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---------- Step 3: 코드 생성 결과 ----------
  if (genOutcome) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-emerald-600 font-semibold mb-1">
                Step 3 — 생성 완료
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">코드 생성 결과</h1>
            </div>
            <button onClick={reset} className="text-xs text-slate-500 hover:underline">
              ← 처음부터
            </button>
          </header>
          <CodeGenerationResult
            newSpecs={genOutcome.newSpecs}
            pageSpecs={genOutcome.pageSpecs}
            bundleText={genOutcome.bundleText}
            tierBundles={genOutcome.tierBundles}
            onBack={() => setGenOutcome(null)}
          />
        </div>
      </div>
    );
  }

  // ---------- Step 2: 보고서 ----------
  return (
    <div className="h-full overflow-y-auto pb-32">
      <div className="max-w-3xl mx-auto p-8">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold mb-1">
              Step 2 — Spec Analysis Report
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">기능내역서 분석 보고서</h1>
            <p className="text-sm text-slate-600 mt-1">
              화면(탭) 별로 검토 후 [코드 생성] 으로 진행하세요.
            </p>
          </div>
          <button onClick={reset} className="text-xs text-slate-500 hover:underline">
            ← 다시 입력
          </button>
        </header>

        <SpecReport
          result={result}
          onGenerate={generateScripterCode}
          generating={generating}
          genStatus={genStatus}
        />
      </div>
    </div>
  );
}
