"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SpecPreview } from "@/components/SpecPreview";

type SourceItem = {
  id: string;
  name: string;
  category: "ds" | "atom" | "mol" | "ogn" | "page" | "icon";
  path?: string;
  size?: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ResolvedRef = {
  raw: string;
  specName: string | null;
  category: "atom" | "mol" | "ogn" | null;
};

type SpecDeps = {
  refs: ResolvedRef[];
  tokens: string[];
  usedBy: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PreviewData =
  | { kind: "spec"; name: string; spec: any; ds: any; icons: Record<string, string>; deps?: SpecDeps }
  | { kind: "icon"; name: string; svg: string }
  | { kind: "ds"; ds: any }
  | null;

const CATEGORY_ORDER = ["atom", "mol", "ogn"] as const;
type Category = (typeof CATEGORY_ORDER)[number];

const CATEGORY_META: Record<Category, { label: string; desc: string; color: string; dot: string }> = {
  atom: {
    label: "Atom",
    desc: "더 이상 쪼갤 수 없는 기본 UI 단위",
    color: "text-violet-600 bg-violet-50 border-violet-200",
    dot: "bg-violet-500",
  },
  mol: {
    label: "Molecule",
    desc: "Atom을 조합한 의미 있는 최소 블록",
    color: "text-sky-600 bg-sky-50 border-sky-200",
    dot: "bg-sky-500",
  },
  ogn: {
    label: "Organism",
    desc: "화면을 구성하는 독립적인 섹션 단위",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    dot: "bg-emerald-500",
  },
};

const BG_OPTIONS = [
  { id: "white",  label: "White",  style: "#ffffff",       text: "bg-white border border-slate-200" },
  { id: "light",  label: "Light",  style: "#f8fafc",       text: "bg-slate-50 border border-slate-200" },
  { id: "grid",   label: "Grid",   style: "repeating-conic-gradient(#e2e8f0 0% 25%, #ffffff 0% 50%) 50% / 16px 16px", text: "border border-slate-200" },
  { id: "dark",   label: "Dark",   style: "#1e293b",       text: "bg-slate-800 border border-slate-700" },
  { id: "black",  label: "Black",  style: "#0f172a",       text: "bg-slate-950 border border-slate-800" },
];

function shortName(name: string) {
  const parts = name.split("/");
  return parts[parts.length - 1];
}

function variantCount(spec: any): number {
  return spec?.variants?.axes?.length ?? 0;
}

export default function SourcesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFilter = searchParams?.get("page") || "";
  const sectionParam = searchParams?.get("s") || "";

  const [topSection, setTopSection] = useState<"foundation" | "components">(
    sectionParam === "foundation" ? "foundation" : "components"
  );
  const [items, setItems] = useState<SourceItem[]>([]);
  const [selected, setSelected] = useState<SourceItem | null>(null);
  const [preview, setPreview] = useState<PreviewData>(null);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<Category | "all">("all");
  const [bgId, setBgId] = useState("white");
  const [pageDepsSet, setPageDepsSet] = useState<Set<string> | null>(null);
  const [pageOptions, setPageOptions] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [thumbnailUrls, setThumbnailUrls] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/sources").then(r => r.json()).then(d => setItems(d.items || [])).catch(() => {});
    fetch("/api/scripter/pages-list").then(r => r.json()).then(d => setPageOptions((d.pages || []).map((p: { name: string }) => p.name))).catch(() => {});
    fetch("/api/figma-thumbnails").then(r => r.json()).then(d => setThumbnailUrls(d.urls || {})).catch(() => {});
  }, []);

  useEffect(() => {
    if (!filterOpen) return;
    function handler(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setFilterOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [filterOpen]);

  useEffect(() => {
    if (!pageFilter) { setPageDepsSet(null); return; }
    fetch("/api/scripter/page-deps?name=" + encodeURIComponent(pageFilter))
      .then(r => r.json())
      .then(d => {
        if (d.error) { setPageDepsSet(null); return; }
        setPageDepsSet(new Set([d.page, ...d.atom, ...d.mol, ...d.ogn]));
      }).catch(() => setPageDepsSet(null));
  }, [pageFilter]);

  const grouped = useMemo(() => {
    const base = items.filter(i => ["atom", "mol", "ogn"].includes(i.category));
    const q = search.trim().toLowerCase();
    let filtered = q ? base.filter(i => i.name.toLowerCase().includes(q)) : base;
    if (pageDepsSet) filtered = filtered.filter(i => pageDepsSet.has(i.name));
    const g: Record<string, SourceItem[]> = {};
    for (const i of filtered) { g[i.category] = g[i.category] || []; g[i.category].push(i); }
    return g;
  }, [items, search, pageDepsSet]);

  const listItems = useMemo(() => {
    if (activeTab === "all") return CATEGORY_ORDER.flatMap(c => grouped[c] || []);
    return grouped[activeTab] || [];
  }, [grouped, activeTab]);

  useEffect(() => {
    if (!selected) { setPreview(null); return; }
    setLoadingPreview(true);
    const url = selected.category === "icon"
      ? "/api/spec?kind=icon&name=" + encodeURIComponent(selected.id.replace(/^icon:/, ""))
      : "/api/spec?kind=spec&name=" + encodeURIComponent(selected.id.replace(/^spec:/, ""));
    fetch(url).then(r => r.json()).then(d => setPreview(d)).catch(() => setPreview(null)).finally(() => setLoadingPreview(false));
  }, [selected]);

  const cat = selected ? CATEGORY_META[selected.category as Category] : null;
  const spec = preview?.kind === "spec" ? preview.spec : null;
  const axes = spec?.variants?.axes ?? [];

  function switchSection(s: "foundation" | "components") {
    setTopSection(s);
    const params = new URLSearchParams();
    if (s === "foundation") params.set("s", "foundation");
    if (pageFilter) params.set("page", pageFilter);
    router.push("/sources" + (params.toString() ? "?" + params.toString() : ""));
  }

  return (
    <div className="h-full flex flex-col bg-[#f9fafb]">

      {/* ── 상단 섹션 탭 ─────────────────────────────────── */}
      <div className="shrink-0 flex items-center gap-0.5 px-4 pt-3 pb-0 bg-white border-b border-slate-100">
        {(["foundation", "components"] as const).map(s => {
          const active = topSection === s;
          const label = s === "foundation" ? "Foundation" : "Components";
          return (
            <button
              key={s}
              onClick={() => switchSection(s)}
              className={`px-4 py-2 text-[12px] font-semibold rounded-t-lg transition relative ${
                active
                  ? "text-slate-900 bg-[#f9fafb] border border-b-0 border-slate-200"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ── Foundation 뷰 ────────────────────────────────── */}
      {topSection === "foundation" && (
        <iframe src="/foundation" className="flex-1 border-0 w-full" />
      )}

      {/* ── Components 뷰 ────────────────────────────────── */}
      {topSection === "components" && (
      <div className="flex-1 flex overflow-hidden">

      {/* ── 좌측 사이드바 ────────────────────────────────── */}
      <aside className="w-[240px] shrink-0 bg-white border-r border-slate-100 flex flex-col">

        {/* 검색 */}
        <div className="px-4 pt-5 pb-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="컴포넌트 검색"
              className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-[12px] placeholder:text-slate-400 focus:outline-none focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition"
            />
          </div>
        </div>

        {/* 페이지 필터 */}
        <div ref={filterRef} className="relative px-4 pb-2">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg border text-[11px] transition ${pageFilter ? "border-violet-300 bg-violet-50 text-violet-700" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"}`}
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 12h10M11 20h2" />
              </svg>
              <span className="font-medium truncate">{pageFilter || "페이지 필터"}</span>
            </span>
            <span className={`text-[10px] transition-transform ${filterOpen ? "rotate-180" : ""}`}>▾</span>
          </button>
          {filterOpen && (
            <div className="absolute top-full left-4 right-4 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-900/8 py-1 z-30 max-h-60 overflow-y-auto">
              <button onClick={() => { router.push("/sources"); setFilterOpen(false); }} className={`w-full text-left px-3 py-1.5 text-[11px] hover:bg-slate-50 ${!pageFilter ? "text-violet-700 font-semibold" : "text-slate-600"}`}>전체 보기</button>
              {pageOptions.length > 0 && <div className="border-t border-slate-100 my-1" />}
              {pageOptions.map(name => (
                <button key={name} onClick={() => { router.push("/sources?page=" + encodeURIComponent(name)); setFilterOpen(false); }} className={`w-full text-left px-3 py-1.5 text-[11px] font-mono hover:bg-slate-50 truncate ${pageFilter === name ? "text-violet-700 font-semibold" : "text-slate-600"}`}>{name}</button>
              ))}
            </div>
          )}
        </div>

        {/* 카테고리 탭 */}
        <div className="px-4 pb-2 flex gap-1">
          {([["all", "전체"], ...CATEGORY_ORDER.map(c => [c, CATEGORY_META[c].label])] as [string, string][]).map(([id, label]) => {
            const count = id === "all"
              ? CATEGORY_ORDER.reduce((n, c) => n + (grouped[c]?.length ?? 0), 0)
              : grouped[id]?.length ?? 0;
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id as Category | "all")}
                className={`flex-1 py-1.5 rounded-lg text-[11px] font-medium transition ${active ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"}`}
              >
                {label}
                <span className={`ml-1 text-[10px] ${active ? "text-slate-300" : "text-slate-400"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* 컴포넌트 목록 */}
        <nav className="flex-1 overflow-y-auto px-2 pb-4">
          {listItems.length === 0 && (
            <div className="px-3 py-6 text-center text-[11px] text-slate-400">컴포넌트 없음</div>
          )}
          {activeTab === "all"
            ? CATEGORY_ORDER.map(cat => {
                const list = grouped[cat];
                if (!list?.length) return null;
                const meta = CATEGORY_META[cat];
                return (
                  <div key={cat} className="mb-3">
                    <div className="flex items-center gap-1.5 px-2 py-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{meta.label}</span>
                    </div>
                    {list.map(it => <NavItem key={it.id} item={it} active={selected?.id === it.id} onClick={() => setSelected(it)} />)}
                  </div>
                );
              })
            : listItems.map(it => <NavItem key={it.id} item={it} active={selected?.id === it.id} onClick={() => setSelected(it)} />)
          }
        </nav>
      </aside>

      {/* ── 메인 콘텐츠 ─────────────────────────────────── */}
      <main className="flex-1 overflow-y-auto">

        {/* 선택 없음 → 그리드 오버뷰 */}
        {!selected && (
          <div className="max-w-5xl mx-auto px-8 py-10">
            <div className="mb-10">
              <h1 className="text-[22px] font-bold tracking-tight text-slate-900">컴포넌트 레지스트리</h1>
              <p className="mt-1 text-[13px] text-slate-500">Figma 마스터 컴포넌트 기반으로 자동 생성된 디자인 시스템</p>
            </div>

            {CATEGORY_ORDER.filter(c => (grouped[c]?.length ?? 0) > 0).map(cat => {
              const list = grouped[cat];
              const meta = CATEGORY_META[cat];
              return (
                <section key={cat} className="mb-12">
                  <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-[15px] font-bold text-slate-900">{meta.label}</h2>
                    <span className="text-[12px] text-slate-400">{meta.desc}</span>
                    <span className="ml-auto text-[11px] text-slate-400">{list?.length}개</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {list?.map(it => (
                      <ComponentCard key={it.id} item={it} cat={cat} thumbUrl={thumbnailUrls[it.name]} onClick={() => setSelected(it)} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* 선택됨 → 상세 문서 뷰 */}
        {selected && (
          <div className="max-w-3xl mx-auto px-8 py-10">

            {/* 브레드크럼 */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-6">
              <button onClick={() => setSelected(null)} className="hover:text-violet-600 transition">컴포넌트</button>
              <span>/</span>
              {cat && <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold border ${cat.color}`}>{cat.label}</span>}
              <span>/</span>
              <span className="text-slate-700 font-medium">{shortName(selected.name)}</span>
            </div>

            {/* 헤더 */}
            <div className="mb-8">
              <h1 className="text-[26px] font-bold tracking-tight text-slate-900 mb-2">
                {shortName(selected.name)}
              </h1>
              {spec?.description && (
                <p className="text-[14px] text-slate-500 leading-relaxed">{spec.description}</p>
              )}
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {cat && <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${cat.color}`}>{cat.label}</span>}
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 text-slate-500 border border-slate-200">{selected.name}</span>
                {axes.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-500 border border-slate-200">{axes.length}개 variant 축</span>
                )}
              </div>
            </div>

            {loadingPreview && (
              <div className="rounded-2xl bg-white border border-slate-200 h-48 flex items-center justify-center text-sm text-slate-400">로드 중…</div>
            )}

            {!loadingPreview && preview && (
              <>
                {/* 미리보기 */}
                <Section title="미리보기">
                  <div className="rounded-2xl overflow-hidden border border-slate-200">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-white">
                      <span className="text-[11px] text-slate-400">
                        {thumbnailUrls[selected.name] ? "Figma 마스터 컴포넌트" : "근사 렌더 · Figma auto-layout 과 미묘한 차이 가능"}
                      </span>
                      {!thumbnailUrls[selected.name] && (
                        <div className="flex items-center gap-1">
                          {BG_OPTIONS.map(b => (
                            <button
                              key={b.id}
                              onClick={() => setBgId(b.id)}
                              title={b.label}
                              className={`w-5 h-5 rounded-full transition border ${bgId === b.id ? "ring-2 ring-violet-500 ring-offset-1 border-transparent scale-110" : "border-slate-300 hover:scale-105"}`}
                              style={{ background: b.style }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      className="min-h-40 flex items-center justify-center p-10 overflow-auto"
                      style={{ background: thumbnailUrls[selected.name] ? "#f8fafc" : BG_OPTIONS.find(b => b.id === bgId)?.style }}
                    >
                      {thumbnailUrls[selected.name] ? (
                        <img
                          src={thumbnailUrls[selected.name]}
                          alt={selected.name}
                          className="max-w-full max-h-[480px] object-contain"
                        />
                      ) : (
                        <>
                          {preview.kind === "spec" && preview.spec && (
                            <SpecPreview spec={preview.spec} ds={preview.ds} icons={preview.icons} />
                          )}
                          {preview.kind === "icon" && (
                            <span className={`inline-flex items-center ${bgId === "dark" || bgId === "black" ? "invert" : ""}`} dangerouslySetInnerHTML={{ __html: preview.svg }} />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Section>

                {/* Variants 테이블 */}
                {axes.length > 0 && (
                  <Section title="Props / Variants">
                    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
                      <table className="w-full text-[12px]">
                        <thead>
                          <tr className="border-b border-slate-100 bg-slate-50">
                            <th className="text-left px-4 py-2.5 font-semibold text-slate-600 w-1/3">속성</th>
                            <th className="text-left px-4 py-2.5 font-semibold text-slate-600">값</th>
                            <th className="text-left px-4 py-2.5 font-semibold text-slate-600 w-24">기본값</th>
                          </tr>
                        </thead>
                        <tbody>
                          {axes.map((axis: any, i: number) => (
                            <tr key={axis.name} className={i > 0 ? "border-t border-slate-100" : ""}>
                              <td className="px-4 py-3 font-mono font-semibold text-slate-800">{axis.name}</td>
                              <td className="px-4 py-3">
                                <div className="flex flex-wrap gap-1">
                                  {axis.values.map((v: string) => (
                                    <span key={v} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono border border-slate-200">{v}</span>
                                  ))}
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                {axis.values[0] && (
                                  <span className="px-2 py-0.5 rounded-md bg-violet-50 text-violet-700 text-[11px] font-mono border border-violet-200">{axis.values[0]}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Section>
                )}

                {/* 구성 요소 관계 */}
                {preview.kind === "spec" && preview.deps && (["mol", "ogn"].includes(selected.category) || preview.deps.usedBy.length > 0) && (
                  <DepsSection deps={preview.deps} onSelect={(name) => {
                    const found = items.find(i => i.name === name);
                    if (found) setSelected(found);
                  }} />
                )}

                {/* Spec JSON */}
                {preview.kind === "spec" && (
                  <Section title="Spec JSON">
                    <SpecCodeBlock spec={preview.spec} specName={selected.id.replace(/^spec:/, "")} />
                  </Section>
                )}
              </>
            )}

            {/* 이전/다음 네비게이션 */}
            <PrevNextNav items={listItems} selected={selected} onSelect={setSelected} />
          </div>
        )}
      </main>
    </div>
    )}
    </div>
  );
}

/* ─── 서브 컴포넌트들 ─────────────────────────────── */

function NavItem({ item, active, onClick }: { item: SourceItem; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] transition group ${active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}
    >
      <span className="truncate font-medium">{shortName(item.name)}</span>
      {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />}
    </button>
  );
}

function ComponentCard({ item, cat, thumbUrl, onClick }: { item: SourceItem; cat: string; thumbUrl?: string; onClick: () => void }) {
  const meta = CATEGORY_META[cat as Category];
  return (
    <button
      onClick={onClick}
      className="text-left p-4 bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-md hover:shadow-violet-100 transition-all group"
    >
      <div className="h-28 rounded-xl bg-slate-50 border border-slate-100 mb-3 flex items-center justify-center overflow-hidden transition-colors">
        {thumbUrl ? (
          <img
            src={thumbUrl}
            alt={item.name}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${meta.dot} text-white group-hover:scale-110 transition-transform`}>
            {shortName(item.name).charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="font-semibold text-[13px] text-slate-800 truncate">{shortName(item.name)}</div>
      <div className="mt-0.5 text-[11px] font-mono text-slate-400 truncate">{item.name}</div>
    </button>
  );
}

const REF_CAT_STYLE: Record<string, string> = {
  atom: "bg-violet-50 text-violet-700 border-violet-200",
  mol: "bg-sky-50 text-sky-700 border-sky-200",
  ogn: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const TOKEN_PREFIX_STYLE: Record<string, string> = {
  foundation: "bg-amber-50 text-amber-700 border-amber-200",
  component: "bg-rose-50 text-rose-700 border-rose-200",
  semantic: "bg-teal-50 text-teal-700 border-teal-200",
};

function DepsSection({ deps, onSelect }: { deps: SpecDeps; onSelect: (name: string) => void }) {
  const tokensByPrefix: Record<string, string[]> = {};
  for (const t of deps.tokens) {
    const prefix = t.split(".")[0];
    tokensByPrefix[prefix] = tokensByPrefix[prefix] || [];
    if (!tokensByPrefix[prefix].includes(t)) tokensByPrefix[prefix].push(t);
  }

  const hasRefs = deps.refs.length > 0;
  const hasTokens = deps.tokens.length > 0;
  const hasUsedBy = deps.usedBy.length > 0;
  if (!hasRefs && !hasTokens && !hasUsedBy) return null;

  return (
    <Section title="구성 요소">
      <div className="space-y-4">
        {hasRefs && (
          <div>
            <p className="text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">사용하는 컴포넌트</p>
            <div className="flex flex-wrap gap-2">
              {deps.refs.map((ref) => {
                const catStyle = ref.category ? REF_CAT_STYLE[ref.category] : "bg-slate-100 text-slate-500 border-slate-200";
                const label = ref.specName ? ref.specName.split("/")[1] : ref.raw.replace(/^\./, "");
                const tier = ref.specName ? ref.specName.split("/")[0] : null;
                return (
                  <button
                    key={ref.raw}
                    onClick={() => ref.specName && onSelect(ref.specName)}
                    disabled={!ref.specName}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition ${catStyle} ${ref.specName ? "hover:opacity-80 cursor-pointer" : "opacity-50 cursor-default"}`}
                  >
                    {tier && <span className="text-[9px] font-bold uppercase opacity-60">{tier}</span>}
                    <span className="font-mono">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {hasTokens && (
          <div>
            <p className="text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">사용하는 디자인 토큰</p>
            <div className="space-y-2">
              {Object.entries(tokensByPrefix).map(([prefix, toks]) => (
                <div key={prefix}>
                  <span className={`inline-block mb-1.5 px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wide ${TOKEN_PREFIX_STYLE[prefix] ?? "bg-slate-100 text-slate-500 border-slate-200"}`}>{prefix}</span>
                  <div className="flex flex-wrap gap-1">
                    {toks.map(t => (
                      <span key={t} className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${TOKEN_PREFIX_STYLE[prefix] ?? "bg-slate-100 text-slate-500 border-slate-200"}`}>
                        {t.split(".").slice(1).join(".")}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasUsedBy && (
          <div>
            <p className="text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">이 컴포넌트를 사용하는</p>
            <div className="flex flex-wrap gap-2">
              {deps.usedBy.map((name) => {
                const tier = name.split("/")[0];
                const label = name.split("/")[1];
                const catStyle = REF_CAT_STYLE[tier] ?? "bg-slate-100 text-slate-500 border-slate-200";
                return (
                  <button
                    key={name}
                    onClick={() => onSelect(name)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition hover:opacity-80 ${catStyle}`}
                  >
                    <span className="text-[9px] font-bold uppercase opacity-60">{tier}</span>
                    <span className="font-mono">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-[13px] font-bold text-slate-700 mb-3 flex items-center gap-2">
        <span className="w-1 h-4 rounded-full bg-violet-400 inline-block" />
        {title}
      </h2>
      {children}
    </section>
  );
}

const SCRIPTER_BTN_LABEL: Record<string, string> = {
  running: "번들 중…",
  ok: "✓ 복사됨",
  err: "✕ 실패",
  idle: "Scripter 복사",
};
const SCRIPTER_BTN_CLASS: Record<string, string> = {
  ok: "border-emerald-500 text-emerald-400 bg-emerald-950",
  err: "border-rose-500 text-rose-400 bg-rose-950",
};

function SpecCodeBlock({ spec, specName }: { spec: any; specName: string }) {
  const [collapsed, setCollapsed] = useState(true);
  const [scripterState, setScripterState] = useState<"idle" | "running" | "ok" | "err">("idle");
  const [scripterMsg, setScripterMsg] = useState("");

  const { json, lines, preview } = useMemo(() => {
    const json = JSON.stringify(spec, null, 2);
    const lines = json.split("\n");
    return { json, lines, preview: lines.slice(0, 12).join("\n") };
  }, [spec]);

  async function runScripter() {
    setScripterState("running");
    setScripterMsg("");
    try {
      const res = await fetch("/api/scripter/spec-run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ specName }),
      });
      const data = await res.json();
      if (data.ok) {
        setScripterState("ok");
        setScripterMsg("클립보드 복사 완료 · Figma Scripter ⌘V → Run ▶");
      } else {
        setScripterState("err");
        setScripterMsg(data.stderr?.slice(0, 200) || data.error || "번들 실패");
      }
    } catch (e) {
      setScripterState("err");
      setScripterMsg(e instanceof Error ? e.message : String(e));
    }
    setTimeout(() => { setScripterState("idle"); setScripterMsg(""); }, 4000);
  }

  const btnClass = SCRIPTER_BTN_CLASS[scripterState] ?? "border-sky-600 text-sky-400 hover:bg-sky-950 disabled:opacity-50";

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
        <span className="text-[11px] text-slate-400 font-mono">{spec.name}.json</span>
        <div className="flex items-center gap-2">
          <button
            onClick={runScripter}
            disabled={scripterState === "running"}
            className={"text-[11px] font-medium transition px-2.5 py-1 rounded border " + btnClass}
          >
            {SCRIPTER_BTN_LABEL[scripterState]}
          </button>
          <button
            onClick={() => navigator.clipboard?.writeText(json)}
            className="text-[11px] text-slate-400 hover:text-slate-200 transition px-2 py-0.5 rounded hover:bg-slate-800"
          >JSON 복사</button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-[11px] text-slate-400 hover:text-slate-200 transition px-2 py-0.5 rounded hover:bg-slate-800"
          >{collapsed ? "전체 보기" : "접기"}</button>
        </div>
      </div>
      {scripterMsg && (
        <div className={
          "px-4 py-2 text-[11px] border-b " +
          (scripterState === "ok" ? "border-emerald-800 text-emerald-400 bg-emerald-950" : "border-rose-800 text-rose-400 bg-rose-950")
        }>
          {scripterMsg}
        </div>
      )}
      <pre className="p-4 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
        {collapsed ? preview + (lines.length > 12 ? "\n  …" : "") : json}
      </pre>
    </div>
  );
}

function PrevNextNav({ items, selected, onSelect }: { items: SourceItem[]; selected: SourceItem; onSelect: (it: SourceItem) => void }) {
  const idx = items.findIndex(i => i.id === selected.id);
  const prev = idx > 0 ? items[idx - 1] : null;
  const next = idx < items.length - 1 ? items[idx + 1] : null;
  return (
    <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
      {prev
        ? <button onClick={() => onSelect(prev)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition text-left group">
            <svg className="w-4 h-4 text-slate-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            <span>
              <div className="text-[10px] text-slate-400">이전</div>
              <div className="text-[12px] font-semibold text-slate-700">{shortName(prev.name)}</div>
            </span>
          </button>
        : <div />
      }
      {next
        ? <button onClick={() => onSelect(next)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition text-right group">
            <span>
              <div className="text-[10px] text-slate-400">다음</div>
              <div className="text-[12px] font-semibold text-slate-700">{shortName(next.name)}</div>
            </span>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        : <div />
      }
    </div>
  );
}
