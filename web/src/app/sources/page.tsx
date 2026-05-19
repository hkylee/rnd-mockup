"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SpecPreview } from "@/components/SpecPreview";
import {
  TokenDetailPanel,
  buildTokenChain,
  getTokenType,
  resolveFoundationCategory,
  type TokenPanelData,
} from "@/components/TokenDetailPanel";

type SourceItem = {
  id: string;
  name: string;
  category: "ds" | "component" | "foundation" | "page" | "icon";
  path?: string;
  size?: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ResolvedRef = {
  raw: string;
  specName: string | null;
  category: "component" | null;
};

type SpecDeps = {
  refs: ResolvedRef[];
  tokens: string[];
  usedBy: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PreviewData =
  | { kind: "spec"; name: string; spec: any; ds: any; icons: Record<string, string>; deps?: SpecDeps; tsx?: string | null }
  | { kind: "icon"; name: string; svg: string }
  | { kind: "ds"; ds: any }
  | null;

const CATEGORY_ORDER = ["component"] as const;
type Category = (typeof CATEGORY_ORDER)[number];

const CATEGORY_META: Record<Category, { label: string; desc: string; color: string; dot: string }> = {
  component: {
    label: "Component",
    desc: "디자인 시스템 구성 컴포넌트",
    color: "text-violet-600 bg-violet-50 border-violet-200",
    dot: "bg-violet-500",
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

  const [topSection, setTopSection] = useState<"foundation" | "components" | "mockup">(
    sectionParam === "foundation" ? "foundation" : sectionParam === "mockup" ? "mockup" : "components"
  );
  const [mockupScreens, setMockupScreens] = useState<string[]>([]);
  const [selectedMockup, setSelectedMockup] = useState<string | null>(null);
  const [items, setItems] = useState<SourceItem[]>([]);
  const [selected, setSelected] = useState<SourceItem | null>(null);
  const [preview, setPreview] = useState<PreviewData>(null);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [search, setSearch] = useState("");
  const [bgId, setBgId] = useState("white");
  const [pageDepsSet, setPageDepsSet] = useState<Set<string> | null>(null);
  const [pageOptions, setPageOptions] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [thumbnailUrls, setThumbnailUrls] = useState<Record<string, string>>({});
  const [tokenPanel, setTokenPanel] = useState<TokenPanelData | null>(null);
  const [foundationFocus, setFoundationFocus] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/sources").then(r => r.json()).then(d => setItems(d.items || [])).catch(() => {});
    fetch("/api/scripter/pages-list").then(r => r.json()).then(d => setPageOptions((d.pages || []).map((p: { name: string }) => p.name))).catch(() => {});
    fetch("/api/figma-thumbnails").then(r => r.json()).then(d => setThumbnailUrls(d.urls || {})).catch(() => {});
    fetch("/api/mockup-list").then(r => r.json()).then(d => setMockupScreens(d.screens || [])).catch(() => {});
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
        setPageDepsSet(new Set([d.page, ...(d.components || [])]));
      }).catch(() => setPageDepsSet(null));
  }, [pageFilter]);

  const grouped = useMemo(() => {
    const base = items.filter(i => i.category === "component");
    const q = search.trim().toLowerCase();
    let filtered = q ? base.filter(i => i.name.toLowerCase().includes(q)) : base;
    if (pageDepsSet) filtered = filtered.filter(i => pageDepsSet.has(i.name));
    const g: Record<string, SourceItem[]> = { component: filtered };
    return g;
  }, [items, search, pageDepsSet]);

  const listItems = useMemo(() => {
    return grouped["component"] || [];
  }, [grouped]);

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

  function switchSection(s: "foundation" | "components" | "mockup", focus?: string) {
    setTopSection(s);
    if (focus) setFoundationFocus(focus);
    const params = new URLSearchParams();
    if (s === "foundation") params.set("s", "foundation");
    if (s === "mockup") params.set("s", "mockup");
    if (pageFilter && s === "components") params.set("page", pageFilter);
    router.push("/sources" + (params.toString() ? "?" + params.toString() : ""));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleTokenClick(tokenPath: string, ds: any) {
    const chain = buildTokenChain(ds, tokenPath);
    const type = getTokenType(tokenPath);
    const foundationCategory = resolveFoundationCategory(chain);
    const lastStep = chain[chain.length - 1];
    const resolvedValue = lastStep?.value ?? null;
    setTokenPanel({ tokenPath, type, foundationCategory, chain, resolvedValue });
  }

  function handleNavigateFoundation(category: string) {
    setTokenPanel(null);
    switchSection("foundation", category);
  }

  return (
    <div className="h-full flex flex-col bg-[#f9fafb]">

      {/* ── 상단 섹션 탭 ─────────────────────────────────── */}
      <div className="shrink-0 flex items-center gap-0.5 px-4 pt-3 pb-0 bg-white border-b border-slate-100">
        {([
          { id: "foundation", label: "Foundation" },
          { id: "components", label: "Components" },
          { id: "mockup",     label: "Mockup", badge: mockupScreens.length || null },
        ] as const).map(({ id, label, badge }) => {
          const active = topSection === id;
          return (
            <button
              key={id}
              onClick={() => switchSection(id)}
              className={`px-4 py-2 text-[12px] font-semibold rounded-t-lg transition relative flex items-center gap-1.5 ${
                active
                  ? "text-slate-900 bg-[#f9fafb] border border-b-0 border-slate-200"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {label}
              {badge ? (
                <span className="px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-600 text-[10px] font-bold leading-none">{badge}</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* ── Mockup 뷰 ────────────────────────────────────── */}
      {topSection === "mockup" && (
        <div className="flex-1 flex overflow-hidden">
          {/* 좌측: 스크린 목록 */}
          <aside className="w-[240px] shrink-0 bg-white border-r border-slate-100 flex flex-col">
            <div className="px-4 pt-5 pb-3">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">make-mockup 출력</p>
              <p className="text-[11px] text-slate-400">{mockupScreens.length}개 화면</p>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 pb-4">
              {mockupScreens.length === 0 && (
                <div className="px-3 py-6 text-center text-[11px] text-slate-400">
                  <p className="font-medium mb-1">HTML 없음</p>
                  <p className="text-slate-300">/make-mockup 실행 후<br />docs/output/mockup/ 확인</p>
                </div>
              )}
              {mockupScreens.map(name => (
                <button
                  key={name}
                  onClick={() => setSelectedMockup(name)}
                  className={`w-full text-left flex items-center px-3 py-2 rounded-lg text-[12px] transition ${
                    selectedMockup === name
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate font-medium font-mono">{name}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* 우측: iframe 미리보기 */}
          <main className="flex-1 flex flex-col overflow-hidden bg-slate-50">
            {!selectedMockup ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-3 text-slate-400">
                <svg className="w-10 h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
                </svg>
                <p className="text-[13px]">좌측에서 화면을 선택하세요</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <div className="shrink-0 flex items-center justify-between px-5 py-3 bg-white border-b border-slate-100">
                  <span className="text-[12px] font-mono font-semibold text-slate-700">{selectedMockup}</span>
                  <a
                    href={`/api/mockup-html?name=${encodeURIComponent(selectedMockup)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-slate-400 hover:text-violet-600 transition flex items-center gap-1"
                  >
                    새 탭으로 열기
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
                <iframe
                  key={selectedMockup}
                  src={`/api/mockup-html?name=${encodeURIComponent(selectedMockup)}`}
                  className="flex-1 border-0 w-full"
                  title={selectedMockup}
                />
              </div>
            )}
          </main>
        </div>
      )}

      {/* ── Foundation 뷰 ────────────────────────────────── */}
      {topSection === "foundation" && (
        <iframe
          key={foundationFocus ?? "default"}
          src={foundationFocus ? `/foundation?focus=${foundationFocus}` : "/foundation"}
          className="flex-1 border-0 w-full"
          onLoad={() => setFoundationFocus(null)}
        />
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

        {/* 컴포넌트 수 */}
        <div className="px-4 pb-2">
          <span className="text-[11px] text-slate-400">{grouped["component"]?.length ?? 0}개 컴포넌트</span>
        </div>

        {/* 컴포넌트 목록 */}
        <nav className="flex-1 overflow-y-auto px-2 pb-4">
          {listItems.length === 0 && (
            <div className="px-3 py-6 text-center text-[11px] text-slate-400">컴포넌트 없음</div>
          )}
          {listItems.map(it => <NavItem key={it.id} item={it} active={selected?.id === it.id} onClick={() => setSelected(it)} />)}
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
              const meta = CATEGORY_META[cat as Category];
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

                {/* Spec JSON */}
                {preview.kind === "spec" && (
                  <Section title="Spec JSON">
                    <SpecCodeBlock spec={preview.spec} specName={selected.id.replace(/^spec:/, "")} />
                  </Section>
                )}

                {/* TSX */}
                {preview.kind === "spec" && (
                  <Section title="TSX">
                    <TsxCodeBlock tsx={preview.tsx ?? null} specName={selected.id.replace(/^spec:/, "")} />
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
      {/* ── Token Detail Panel (fixed, 전체 페이지 기준) ── */}
      <TokenDetailPanel
        data={tokenPanel}
        onClose={() => setTokenPanel(null)}
        onNavigateFoundation={handleNavigateFoundation}
      />
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
  const meta = CATEGORY_META[cat as Category] ?? CATEGORY_META.component;
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

function TsxCodeBlock({ tsx, specName }: { tsx: string | null; specName: string }) {
  const [collapsed, setCollapsed] = useState(true);

  if (!tsx) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 flex items-center gap-3">
        <span className="text-slate-400 text-[20px]">·</span>
        <div>
          <p className="text-[12px] text-slate-500 font-medium">TSX 미생성</p>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">/make-cmp {specName.split("/").pop()} 실행 후 나타납니다</p>
        </div>
      </div>
    );
  }

  const lines = tsx.split("\n");
  const preview = lines.slice(0, 14).join("\n");

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
        <span className="text-[11px] text-slate-400 font-mono">{specName.split("/").pop()}.tsx</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-sky-900 text-sky-400 border border-sky-700 font-semibold">TSX</span>
          <button
            onClick={() => navigator.clipboard?.writeText(tsx)}
            className="text-[11px] text-slate-400 hover:text-slate-200 transition px-2 py-0.5 rounded hover:bg-slate-800"
          >복사</button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-[11px] text-slate-400 hover:text-slate-200 transition px-2 py-0.5 rounded hover:bg-slate-800"
          >{collapsed ? "전체 보기" : "접기"}</button>
        </div>
      </div>
      <pre className="p-4 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
        {collapsed ? preview + (lines.length > 14 ? "\n  …" : "") : tsx}
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
