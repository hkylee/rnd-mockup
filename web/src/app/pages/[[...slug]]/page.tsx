"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import indexJson from "@/components/library/index.json";

// indexJson.page 는 "page/MBR/..." 형식 — page/ prefix 제거해 slug 만 사용 (iframe src 와 URL 모두 통일)
const PAGES: string[] = (indexJson as { page: string[] }).page.map((s) => s.replace(/^page\//, ""));

// "MBR/dormant-auth" → group "MBR", name "dormant-auth"
function groupPages() {
  const groups: Record<string, string[]> = {};
  for (const p of PAGES) {
    const [g, ...rest] = p.split("/");
    const name = rest.join("/");
    if (!groups[g]) groups[g] = [];
    groups[g].push(name);
  }
  // 알파벳 순 정렬
  const orderedKeys = Object.keys(groups).sort();
  for (const k of orderedKeys) groups[k].sort();
  return { groups, orderedKeys };
}

export default function PagesLibrary({ params }: { params: Promise<{ slug?: string[] }> }) {
  const router = useRouter();
  const { groups, orderedKeys } = React.useMemo(groupPages, []);

  // URL 의 slug → 현재 선택된 page slug ("MBR/dormant-auth")
  const [currentSlug, setCurrentSlug] = React.useState<string | null>(null);
  const [collapsed, setCollapsed] = React.useState<Record<string, boolean>>({});
  // aside 자체 접펼 (페이지 목록 panel)
  const [asideCollapsed, setAsideCollapsed] = React.useState(false);

  // params 비동기 — Next 16 의 Promise<Params>
  React.useEffect(() => {
    let mounted = true;
    params.then((p) => {
      if (!mounted) return;
      const slugArr = p.slug || [];
      if (slugArr.length >= 2) {
        const s = slugArr.join("/");
        if (PAGES.includes(s)) setCurrentSlug(s);
        else setCurrentSlug(PAGES[0] ?? null);
      } else {
        setCurrentSlug(PAGES[0] ?? null);
      }
    });
    return () => { mounted = false; };
  }, [params]);

  // iframe 안 navigation (postMessage) → 부모 URL 동기화
  React.useEffect(() => {
    function handler(e: MessageEvent) {
      const data = e.data;
      if (!data || typeof data !== "object") return;
      if (data.type === "preview-nav" && typeof data.slug === "string") {
        if (PAGES.includes(data.slug)) {
          setCurrentSlug(data.slug);
          window.history.replaceState(null, "", `/pages/${data.slug}`);
        }
      } else if (data.type === "preview-nav-back") {
        // 부모 history back 도 시도
        router.back();
      }
    }
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router]);

  function selectPage(slug: string) {
    setCurrentSlug(slug);
    window.history.replaceState(null, "", `/pages/${slug}`);
  }

  function toggleGroup(g: string) {
    setCollapsed((c) => ({ ...c, [g]: !c[g] }));
  }

  return (
    <div className="flex h-full">
      {/* 좌측: 페이지 목록 (모듈 코드 그룹) — 접펼 가능 */}
      <aside
        className={`shrink-0 bg-white border-r border-slate-200 flex flex-col transition-all duration-150 ${
          asideCollapsed ? "w-10" : "w-72"
        }`}
      >
        {asideCollapsed ? (
          <button
            onClick={() => setAsideCollapsed(false)}
            className="h-12 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50"
            title="펼치기"
          >
            ▶
          </button>
        ) : (
          <>
        <div className="px-4 py-4 border-b border-slate-100 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="text-base font-bold tracking-tight text-slate-900">페이지 라이브러리</div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              React 자동 변환 · {PAGES.length} 페이지 · 모바일 미러링
            </div>
          </div>
          <button
            onClick={() => setAsideCollapsed(true)}
            className="text-slate-400 hover:text-slate-700 text-sm shrink-0"
            title="접기"
          >
            ◀
          </button>
        </div>
        <nav className="flex-1 px-2 py-3 overflow-y-auto space-y-1">
          {orderedKeys.map((g) => {
            const open = !collapsed[g];
            return (
              <div key={g} className="mb-2">
                <button
                  onClick={() => toggleGroup(g)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <span>
                    {g} <span className="text-slate-300 normal-case font-medium tracking-normal">({groups[g].length})</span>
                  </span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${open ? "rotate-90" : ""}`}>
                    <path d="M3 1.5L6.5 5L3 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {open && (
                  <ul className="space-y-0.5 mt-1">
                    {groups[g].map((name) => {
                      const slug = `${g}/${name}`;
                      const active = slug === currentSlug;
                      return (
                        <li key={slug}>
                          <button
                            onClick={() => selectPage(slug)}
                            className={`w-full text-left flex items-center px-3 py-2 rounded-lg text-sm transition-all font-mono text-[12px] ${
                              active
                                ? "bg-indigo-50 text-indigo-700 font-medium"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            <span className="truncate">{name}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
        <div className="px-3 pb-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
          page-flow.json + page-interactions.json 기반 인터랙티브 미러링
        </div>
          </>
        )}
      </aside>

      {/* 우측: 좌(React iframe) + 우(SB HTML iframe) 가로 split — overflow-auto 로 좌우 스크롤 */}
      <main className="flex-1 min-w-0 bg-slate-100 overflow-auto">
        {currentSlug ? (
          <div className="flex items-start gap-6 p-6 min-w-max">
            {/* 좌 — React 미러링 */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-xs text-slate-500 font-mono">page/{currentSlug}</div>
              <div
                style={{
                  width: 375,
                  height: 812,
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
                  background: "#fff",
                }}
              >
                <iframe
                  src={`/library/preview/${currentSlug}?embed=1`}
                  style={{ width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="text-[10px] text-slate-400">React 미러링 — [확인] / [back] 클릭 시 좌측 목록 자동 이동</div>
            </div>

            {/* 우 — SB HTML */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-xs text-slate-500 font-mono">sb-html: {currentSlug.toUpperCase().replace("/", "-")}</div>
              <div
                style={{
                  width: 1000,
                  height: 812,
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
                  background: "#fff",
                }}
              >
                <iframe
                  src={`/api/sb-html/${currentSlug.toUpperCase().replace("/", "-")}`}
                  style={{ width: "100%", height: "100%", border: 0 }}
                />
              </div>
              <div className="text-[10px] text-slate-400">SB HTML — generate-sb-html.js 자동 생성 도메인 메타</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">페이지를 선택하세요</div>
        )}
      </main>
    </div>
  );
}
