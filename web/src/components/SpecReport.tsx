"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  ComponentMatch,
  FeatureRow,
  InferredEssential,
  SpecAnalysisResult,
} from "@/lib/spec-analysis-types";
import { UX_STAGE_NAMES } from "@/lib/spec-analysis-types";
import { buildPagesFromFeatures } from "@/lib/page-spec-builder";

type Props = {
  result: SpecAnalysisResult;
  onGenerate: (screenId: string, includedEssentialNames: string[]) => void;
  generating: boolean;
  genStatus: string | null;
};

const CONFIDENCE_META: Record<InferredEssential["confidence"], { label: string; color: string }> = {
  high: { label: "high", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  medium: { label: "medium", color: "text-amber-700 bg-amber-50 border-amber-200" },
  low: { label: "low", color: "text-slate-600 bg-slate-100 border-slate-200" },
};

type ItemWithContext = ComponentMatch & {
  usedAt: string[];
};

function categoryOf(name: string): "atom" | "mol" | "ogn" | "page" {
  const first = name.split("/")[0];
  if (first === "atom" || first === "mol" || first === "ogn" || first === "page") return first;
  return "mol";
}

function screenKey(f: FeatureRow): string {
  return (f.screenId || f.specId || "unknown").trim();
}

export function SpecReport({
  result,
  onGenerate,
  generating,
  genStatus,
}: Props) {
  const features = result.features || [];
  const allEssentials = result.inferredEssentials || [];

  // screen id 별 features 그룹
  const screens = useMemo(() => {
    const map = new Map<string, FeatureRow[]>();
    for (const f of features) {
      const key = screenKey(f);
      const arr = map.get(key) || [];
      arr.push(f);
      map.set(key, arr);
    }
    return Array.from(map.entries()).map(([screenId, fs]) => ({
      screenId,
      moduleCode: fs.find((f) => f.module)?.module || "UNKNOWN",
      features: fs,
    }));
  }, [features]);

  const [activeScreenId, setActiveScreenId] = useState<string>(screens[0]?.screenId || "");

  // 새로 분석되거나 화면 목록이 바뀌면 첫 탭으로 리셋
  useEffect(() => {
    if (!screens.find((s) => s.screenId === activeScreenId)) {
      setActiveScreenId(screens[0]?.screenId || "");
    }
  }, [screens, activeScreenId]);

  const activeScreen = screens.find((s) => s.screenId === activeScreenId);
  const activeFeatures = activeScreen?.features || [];

  const summary = useMemo(() => {
    const moduleCode = activeScreen?.moduleCode || "UNKNOWN";
    const rawNames = new Set<string>();
    for (const f of activeFeatures) for (const c of f.components) rawNames.add(c.name);
    return {
      moduleCode,
      featureCount: activeFeatures.length,
      rawComponents: Array.from(rawNames),
    };
  }, [activeFeatures, activeScreen]);

  const groups = useMemo(() => {
    const reused: ItemWithContext[] = [];
    const rename: ItemWithContext[] = [];
    const neu: ItemWithContext[] = [];

    const map = new Map<string, ItemWithContext>();
    for (const f of activeFeatures) {
      for (const c of f.components) {
        const key = `${c.status}::${c.suggested || c.name}`;
        const existing = map.get(key);
        if (existing) {
          if (!existing.usedAt.includes(f.name)) existing.usedAt.push(f.name);
        } else {
          map.set(key, { ...c, usedAt: [f.name] });
        }
      }
    }

    for (const item of map.values()) {
      if (item.status === "reused") reused.push(item);
      else if (item.status === "rename") rename.push(item);
      else neu.push(item);
    }
    return { reused, rename, neu };
  }, [activeFeatures]);

  const cascade = useMemo(() => {
    const all = groups.neu;
    return {
      atoms: all.filter((i) => categoryOf(i.suggested || i.name) === "atom"),
      mols: all.filter((i) => categoryOf(i.suggested || i.name) === "mol"),
      ogns: all.filter((i) => categoryOf(i.suggested || i.name) === "ogn"),
    };
  }, [groups]);

  // 현재 탭에 적용되는 essentials 만 필터 (appliesToScreens 없으면 전체 적용)
  const essentials = useMemo(
    () =>
      allEssentials.filter(
        (e) => !e.appliesToScreens || e.appliesToScreens.length === 0 || e.appliesToScreens.includes(activeScreenId)
      ),
    [allEssentials, activeScreenId]
  );

  // essentials 체크 상태 (screen id 별로 별도 보관)
  const [includedEssentialsByScreen, setIncludedEssentialsByScreen] = useState<
    Record<string, Record<string, boolean>>
  >({});

  function getInclusion(screenId: string): Record<string, boolean> {
    if (includedEssentialsByScreen[screenId]) return includedEssentialsByScreen[screenId];
    // 초기값: high/medium 자동 체크, low 는 off
    const init: Record<string, boolean> = {};
    for (const e of essentials) init[e.name] = e.confidence !== "low";
    return init;
  }

  const inclusion = getInclusion(activeScreenId);

  const includedNames = useMemo(
    () =>
      Object.entries(inclusion)
        .filter(([, v]) => v)
        .map(([k]) => k),
    [inclusion]
  );

  const includedEssentialUseNames = useMemo(
    () =>
      essentials
        .filter((e) => includedNames.includes(e.name))
        .map((e) => e.suggested || e.name),
    [essentials, includedNames]
  );

  const activePages = useMemo(
    () => buildPagesFromFeatures(activeFeatures, includedEssentialUseNames),
    [activeFeatures, includedEssentialUseNames]
  );

  function toggleEssential(name: string) {
    setIncludedEssentialsByScreen((prev) => {
      const cur = prev[activeScreenId] || getInclusion(activeScreenId);
      return {
        ...prev,
        [activeScreenId]: { ...cur, [name]: !cur[name] },
      };
    });
  }

  function handleGenerate() {
    onGenerate(activeScreenId, includedNames);
  }

  const totalNewCount = useMemo(() => {
    const set = new Set<string>();
    for (const item of groups.neu) set.add(item.suggested || item.name);
    for (const e of essentials) {
      if (!includedNames.includes(e.name)) continue;
      if (e.status !== "new") continue;
      set.add(e.suggested || e.name);
    }
    return set.size;
  }, [groups.neu, essentials, includedNames]);

  // 화면이 0개일 때 (이상 케이스)
  if (screens.length === 0) {
    return (
      <div className="surface-card p-6 text-sm text-slate-500 text-center">
        분석된 화면이 없어요. 입력을 다시 확인해주세요.
      </div>
    );
  }

  const activeRole = result.screenRoles?.[activeScreenId] || result.screenRole;
  const activeUxStage = result.uxStages?.[activeScreenId];

  return (
    <div className="space-y-5">
      {/* 탭 바 (브라우저 탭 스타일) */}
      <div className="flex items-end gap-1 overflow-x-auto -mb-px pb-px">
        {screens.map((s) => {
          const active = s.screenId === activeScreenId;
          return (
            <button
              key={s.screenId}
              onClick={() => setActiveScreenId(s.screenId)}
              className={
                "shrink-0 px-3.5 py-2 rounded-t-lg border border-b-0 transition text-xs " +
                (active
                  ? "bg-white border-slate-200 text-slate-900 font-semibold shadow-sm relative z-10"
                  : "bg-slate-50 border-slate-150 text-slate-500 hover:bg-slate-100 hover:text-slate-700")
              }
              title={s.screenId}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono">{s.screenId}</span>
                <span
                  className={
                    "px-1.5 py-0.5 rounded text-[10px] font-semibold " +
                    (active ? "bg-indigo-100 text-indigo-700" : "bg-slate-200 text-slate-600")
                  }
                >
                  {s.features.length}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 탭 컨텐츠 */}
      <div
        className="space-y-6 -mt-1 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm"
        style={{ borderTopLeftRadius: activeScreenId === screens[0]?.screenId ? 0 : undefined }}
      >
        <div className="space-y-6 p-5">
          {/* 0. 요약 */}
          <Section title="0. 요약">
            <dl className="grid grid-cols-[100px_1fr] gap-y-2 text-sm">
              <dt className="text-slate-500">역할</dt>
              <dd className="text-slate-800 leading-relaxed">
                {activeRole || (
                  <span className="text-slate-400 italic">AI 가 추정 못 함 — 다시 분석 시도</span>
                )}
              </dd>
              <dt className="text-slate-500">screen id</dt>
              <dd className="font-mono text-xs">{activeScreenId}</dd>
              <dt className="text-slate-500">모듈</dt>
              <dd className="font-mono">{summary.moduleCode}</dd>
              <dt className="text-slate-500">기능 개수</dt>
              <dd>{summary.featureCount}</dd>
              <dt className="text-slate-500">생성될 페이지</dt>
              <dd className="space-y-0.5">
                {activePages.map((p) => (
                  <div key={p.pageName} className="font-mono text-xs">
                    {p.pageName}{" "}
                    <span className="text-slate-400">
                      ({p.componentNames.length} 컴포넌트, {p.features.length} 기능)
                    </span>
                  </div>
                ))}
              </dd>
              <dt className="text-slate-500">언급 컴포넌트</dt>
              <dd className="text-xs text-slate-600 font-mono leading-relaxed">
                {summary.rawComponents.join(", ") || "—"}
              </dd>
              <dt className="text-slate-500">UX 단계</dt>
              <dd className="text-sm text-slate-800 leading-relaxed">
                {activeUxStage ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-xs font-semibold">
                        주 {activeUxStage.primary} {UX_STAGE_NAMES[activeUxStage.primary]}
                      </span>
                      {activeUxStage.secondary && (
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-medium">
                          부가 {activeUxStage.secondary} {UX_STAGE_NAMES[activeUxStage.secondary]}
                        </span>
                      )}
                    </div>
                    {activeUxStage.principles?.length > 0 && (
                      <div className="text-xs text-slate-600">
                        <span className="text-slate-400">원칙:</span>{" "}
                        {activeUxStage.principles.join(" · ")}
                      </div>
                    )}
                    {activeUxStage.checkpoints?.length > 0 && (
                      <ul className="text-xs text-slate-600 list-disc pl-4 space-y-0.5">
                        {activeUxStage.checkpoints.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <span className="text-slate-400 italic text-xs">AI 가 분류 못 함</span>
                )}
              </dd>
            </dl>
          </Section>

          {/* 1. 카탈로그 대조 */}
          <Section title="1. 카탈로그 대조">
            <BucketTable
              icon="✓"
              color="emerald"
              title={`재사용 (reused) — ${groups.reused.length}개`}
              rows={groups.reused.map((i) => ({
                cols: [
                  <code key="raw" className="font-mono text-xs">
                    {i.name}
                  </code>,
                  <code key="match" className="font-mono text-xs">
                    {i.name}
                  </code>,
                  <span key="used" className="text-xs text-slate-600">
                    {i.usedAt.slice(0, 2).join(", ")}
                    {i.usedAt.length > 2 && ` (+${i.usedAt.length - 2})`}
                  </span>,
                ],
              }))}
              headers={["입력 표기", "카탈로그 매칭", "사용 위치"]}
            />
            <BucketTable
              icon="🔄"
              color="amber"
              title={`리네임 (rename) — ${groups.rename.length}개`}
              rows={groups.rename.map((i) => ({
                cols: [
                  <code key="raw" className="font-mono text-xs">
                    {i.name}
                  </code>,
                  <code key="suggested" className="font-mono text-xs text-amber-700 font-semibold">
                    {i.suggested || i.name}
                  </code>,
                  <span key="reason" className="text-xs text-slate-600">
                    {i.reason || "—"}
                  </span>,
                ],
              }))}
              headers={["입력 표기", "표준 이름", "사유"]}
            />
            <BucketTable
              icon="🆕"
              color="rose"
              title={`신규 (new) — ${groups.neu.length}개`}
              rows={groups.neu.map((i) => ({
                cols: [
                  <code key="name" className="font-mono text-xs">
                    {i.suggested || i.name}
                  </code>,
                  <span key="cat" className="text-xs uppercase text-slate-600">
                    {categoryOf(i.suggested || i.name)}
                  </span>,
                  <span key="reason" className="text-xs text-slate-600">
                    {i.reason || i.usedAt[0] || "—"}
                  </span>,
                ],
              }))}
              headers={["컴포넌트", "category", "위계 근거"]}
            />
          </Section>

          {/* 1.5. 추론된 필수 컴포넌트 */}
          {essentials.length > 0 && (
            <Section title="1.5. 추론된 필수 컴포넌트 (기능내역서 외)">
              <p className="text-xs text-slate-600 mb-3">
                화면 역할상 일반적으로 필요하지만 기능내역서에 빠진 것들을 AI 가 추론했어요.
                체크박스 상태는 화면(탭)별로 따로 저장됩니다.
              </p>
              <ul className="space-y-2">
                {essentials.map((e) => {
                  const cm = CONFIDENCE_META[e.confidence];
                  const checked = !!inclusion[e.name];
                  return (
                    <li
                      key={e.name}
                      className={
                        "rounded-xl border p-3 transition " +
                        (checked
                          ? "border-indigo-300 bg-indigo-50"
                          : "border-slate-200 bg-white")
                      }
                    >
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleEssential(e.name)}
                          className="mt-0.5 w-4 h-4 accent-indigo-600 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <code className="font-mono text-sm font-semibold">
                              {e.suggested || e.name}
                            </code>
                            <span className={"px-1.5 py-0.5 rounded text-[10px] font-semibold border " + cm.color}>
                              {cm.label}
                            </span>
                            {e.kind && (
                              <span
                                className={
                                  "px-1.5 py-0.5 rounded text-[10px] font-medium uppercase " +
                                  (e.kind === "chrome"
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-sky-100 text-sky-700")
                                }
                              >
                                {e.kind}
                              </span>
                            )}
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 uppercase">
                              {e.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600">{e.reason}</p>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Section>
          )}

          {/* 2. Cascade */}
          <Section title="2. Cascade 빌드 순서 (이 화면)">
            <p className="text-xs text-slate-600 mb-3">
              신규 spec AI 자동 작성 + Figma 빌드 cascade. <strong>atom → mol → ogn → page</strong>
            </p>
            <ol className="space-y-3">
              <CascadeStep
                num={1}
                title={`atom 신규 (${cascade.atoms.length}개)`}
                items={cascade.atoms.map((i) => i.suggested || i.name)}
              />
              <CascadeStep
                num={2}
                title={`mol 신규 (${cascade.mols.length}개)`}
                items={cascade.mols.map((i) => i.suggested || i.name)}
              />
              <CascadeStep
                num={3}
                title={`ogn 신규 (${cascade.ogns.length}개)`}
                items={cascade.ogns.map((i) => i.suggested || i.name)}
              />
              <CascadeStep
                num={4}
                title={`page (${activePages.length}개)`}
                items={activePages.map((p) => p.pageName)}
              />
            </ol>
          </Section>

          {/* 3. 체크리스트 */}
          <Section title="3. 체크 (사용자 확인)">
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>☐ 재사용 매핑 정확? ({groups.reused.length}개)</li>
              <li>☐ 리네임 제안 OK? ({groups.rename.length}개)</li>
              <li>☐ 신규 컴포넌트 분류 (atom/mol/ogn) 적절? ({groups.neu.length}개)</li>
              <li>☐ 추론 essentials 검토 ({essentials.length}개 중 {includedNames.length}개 포함)</li>
            </ul>
          </Section>

          {result.notes && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
              <strong className="text-slate-700">⚠️ 의문 사항 (전체):</strong> {result.notes}
            </div>
          )}
        </div>
      </div>

      {/* 하단 고정 코드 생성 바 */}
      <div className="fixed bottom-0 left-60 right-0 bg-white/95 backdrop-blur border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.04)] z-30">
        <div className="max-w-3xl mx-auto px-8 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[11px] text-slate-500 font-mono truncate">
              {activeScreenId} · 신규 {totalNewCount}개 + page
            </div>
            {genStatus && (
              <div className="text-[11px] text-indigo-700">{genStatus}</div>
            )}
          </div>
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-md shadow-indigo-200 disabled:bg-indigo-300 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-2 transition"
          >
            {generating && (
              <span className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            )}
            <span>{generating ? "생성 중…" : "🚀 이 페이지 코드 생성"}</span>
          </button>
          <p className="text-[10px] text-slate-400 mt-1.5 text-center">
            생성 후 atom → mol → ogn → page 순서로 분리 복사 가능
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card p-6">
      <h2 className="text-base font-semibold tracking-tight mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

const COLOR_MAP: Record<string, { border: string; bg: string; text: string }> = {
  emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700" },
  amber: { border: "border-amber-200", bg: "bg-amber-50", text: "text-amber-700" },
  rose: { border: "border-rose-200", bg: "bg-rose-50", text: "text-rose-700" },
};

function BucketTable({
  icon,
  color,
  title,
  rows,
  headers,
}: {
  icon: string;
  color: keyof typeof COLOR_MAP;
  title: string;
  rows: { cols: React.ReactNode[] }[];
  headers: string[];
}) {
  const c = COLOR_MAP[color];
  return (
    <div className={`rounded-xl border ${c.border} overflow-hidden`}>
      <div className={`px-4 py-2 ${c.bg} ${c.text} text-sm font-semibold`}>
        {icon} {title}
      </div>
      {rows.length === 0 ? (
        <div className="px-4 py-6 text-xs text-slate-400 text-center">없음</div>
      ) : (
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2 text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r, i) => (
              <tr key={i}>
                {r.cols.map((col, j) => (
                  <td key={j} className="px-4 py-2 align-top">
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function CascadeStep({ num, title, items }: { num: number; title: string; items: string[] }) {
  return (
    <li>
      <div className="flex items-baseline gap-2">
        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
          {num}
        </span>
        <span className="text-sm font-semibold">{title}</span>
      </div>
      {items.length > 0 && (
        <ul className="mt-1.5 ml-7 space-y-0.5">
          {items.map((n) => (
            <li key={n} className="text-xs font-mono text-slate-600">
              · {n}
            </li>
          ))}
        </ul>
      )}
      {items.length === 0 && <div className="ml-7 text-xs text-slate-400 italic">없음</div>}
    </li>
  );
}
