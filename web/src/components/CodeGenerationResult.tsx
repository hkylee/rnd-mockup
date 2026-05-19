"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

type TierKind = "atom" | "mol" | "ogn" | "page";

type Props = {
  newSpecs: Spec[];
  pageSpecs: Spec[];
  bundleText: string;
  tierBundles: Record<TierKind, string | null>;
  onBack: () => void;
};

function categoryOf(name: string): TierKind | "other" {
  const first = (name || "").split("/")[0];
  if (first === "atom" || first === "mol" || first === "ogn" || first === "page") return first;
  return "other";
}

const TIER_META: Record<
  TierKind,
  { label: string; num: number; chip: string; ring: string; btn: string }
> = {
  atom: {
    label: "Atom",
    num: 1,
    chip: "bg-emerald-100 text-emerald-700 border-emerald-200",
    ring: "border-emerald-200",
    btn: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200",
  },
  mol: {
    label: "Molecule",
    num: 2,
    chip: "bg-blue-100 text-blue-700 border-blue-200",
    ring: "border-blue-200",
    btn: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200",
  },
  ogn: {
    label: "Organism",
    num: 3,
    chip: "bg-violet-100 text-violet-700 border-violet-200",
    ring: "border-violet-200",
    btn: "bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-200",
  },
  page: {
    label: "Page",
    num: 4,
    chip: "bg-slate-200 text-slate-700 border-slate-300",
    ring: "border-slate-300",
    btn: "bg-slate-700 hover:bg-slate-800 text-white shadow-md shadow-slate-200",
  },
};

const TIER_ORDER: TierKind[] = ["atom", "mol", "ogn", "page"];

export function CodeGenerationResult({
  newSpecs,
  pageSpecs,
  bundleText,
  tierBundles,
  onBack,
}: Props) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [doneKeys, setDoneKeys] = useState<Set<string>>(new Set());
  const [openSpec, setOpenSpec] = useState<string | null>(null);

  // tier 별 spec 그룹 (이름 표시용)
  const tierSpecs: Record<TierKind, Spec[]> = {
    atom: newSpecs.filter((s) => categoryOf(s?.name || "") === "atom"),
    mol: newSpecs.filter((s) => categoryOf(s?.name || "") === "mol"),
    ogn: newSpecs.filter((s) => categoryOf(s?.name || "") === "ogn"),
    page: pageSpecs,
  };

  async function copyText(key: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setDoneKeys((s) => new Set(s).add(key));
      setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1500);
    } catch {
      alert("복사 실패 — 수동으로 복사해주세요.");
    }
  }

  function downloadBundle(name: string, text: string) {
    const blob = new Blob([text], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const totalTierCount = TIER_ORDER.reduce(
    (acc, k) => acc + tierSpecs[k].length,
    0
  );

  return (
    <div className="space-y-6">
      {/* 성공 헤더 */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-emerald-900">✓ 코드 생성 완료</h2>
          <button onClick={onBack} className="text-xs text-slate-500 hover:underline">
            ← 보고서로
          </button>
        </div>
        <div className="text-sm text-emerald-900 leading-relaxed">
          신규 컴포넌트 <strong>{newSpecs.length}개</strong> + 페이지{" "}
          <strong>{pageSpecs.length}개</strong> 생성. 전체 번들이 클립보드에 복사되었습니다.
        </div>
      </div>

      {/* 안내 */}
      <div className="surface-card-md p-5">
        <h3 className="text-sm font-semibold mb-2">실행 순서</h3>
        <ol className="text-xs text-slate-700 space-y-1.5">
          <li>
            <strong>1.</strong> 아직 안 했다면 <strong>DS Run</strong> 먼저 실행 (Variable
            바인딩 필요)
          </li>
          <li>
            <strong>2.</strong> 아래 <strong>Atom → Molecule → Organism → Page</strong> 순서로
            각 단계마다: <span className="text-indigo-700">[복사]</span> → Figma Scripter ⌘V →{" "}
            <strong>Run ▶</strong>
          </li>
          <li>
            <strong>3.</strong> 한 번에 처리하고 싶으면 맨 아래 [전체 번들 복사] 사용 (단, scripter
            가 cascade 순서를 자동 처리해야 함)
          </li>
        </ol>
      </div>

      {/* tier 별 카드 */}
      <div className="space-y-3">
        {TIER_ORDER.map((tier) => {
          const meta = TIER_META[tier];
          const specs = tierSpecs[tier];
          const bundle = tierBundles[tier];
          const empty = specs.length === 0 || !bundle;
          const copied = copiedKey === tier;
          const done = doneKeys.has(tier);

          return (
            <div
              key={tier}
              className={
                "rounded-2xl border bg-white overflow-hidden transition " +
                (empty ? "border-slate-200 opacity-50" : meta.ring)
              }
            >
              <div className="px-5 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={
                      "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border " +
                      meta.chip
                    }
                  >
                    {meta.num}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold">{meta.label}</h3>
                      <span className="text-[11px] text-slate-500">{specs.length}개</span>
                      {done && !empty && (
                        <span className="text-[10px] text-emerald-600 font-semibold">
                          ✓ 복사됨
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {!empty && (
                    <>
                      <button
                        onClick={() => downloadBundle(`${tier}.generated.js`, bundle)}
                        className="text-[11px] px-2.5 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50"
                        title={`${tier}.generated.js 로 다운로드`}
                      >
                        ⬇
                      </button>
                      <button
                        onClick={() => copyText(tier, bundle)}
                        className={`text-xs px-4 py-2 rounded-full font-semibold transition ${meta.btn}`}
                      >
                        {copied ? "✓ 복사됨" : "📋 복사"}
                      </button>
                    </>
                  )}
                  {empty && (
                    <span className="text-[11px] text-slate-400 italic">없음</span>
                  )}
                </div>
              </div>

              {!empty && specs.length > 0 && (
                <ul className="border-t border-slate-100 divide-y divide-slate-100">
                  {specs.map((s) => {
                    const name = s?.name || "(unnamed)";
                    const open = openSpec === name;
                    return (
                      <li key={name}>
                        <button
                          onClick={() => setOpenSpec(open ? null : name)}
                          className="w-full text-left px-5 py-2 hover:bg-slate-50 flex items-center justify-between"
                        >
                          <span className="font-mono text-xs text-slate-700">{name}</span>
                          <span className="text-[10px] text-slate-400">
                            {open ? "▾" : "▸"}
                          </span>
                        </button>
                        {open && (
                          <pre className="px-5 pb-3 text-[10px] text-slate-700 max-h-80 overflow-auto font-mono bg-slate-50">
                            {JSON.stringify(s, null, 2)}
                          </pre>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* 전체 번들 (대체용) */}
      <details className="surface-card overflow-hidden">
        <summary className="px-5 py-3 cursor-pointer text-sm font-semibold hover:bg-slate-50 flex items-center justify-between">
          <span>전체 합본 번들 ({totalTierCount}개)</span>
          <span className="text-[10px] text-slate-400">
            {Math.round(bundleText.length / 1024)} KB
          </span>
        </summary>
        <div className="border-t border-slate-100 px-5 py-3 flex gap-2">
          <button
            onClick={() => copyText("full", bundleText)}
            className="flex-1 py-2 px-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
          >
            {copiedKey === "full" ? "✓ 복사됨" : "📋 전체 번들 복사"}
          </button>
          <button
            onClick={() => downloadBundle("cascade.generated.js", bundleText)}
            className="py-2 px-4 rounded-full border border-slate-300 text-xs font-medium hover:bg-slate-50"
          >
            ⬇ 다운로드
          </button>
        </div>
      </details>
    </div>
  );
}
