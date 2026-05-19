"use client";

import { useEffect, useRef, useState } from "react";
import "../templates/markdown.css";

type TocItem = { level: number; text: string; id: string };

export function DPView({ html, toc }: { html: string; toc: TocItem[] }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const mainRef = useRef<HTMLElement>(null);
  const headingsRef = useRef<HTMLHeadingElement[]>([]);

  // main 이 자체 overflow-y-auto 라 scroll container = main element 본인.
  // toc 와 DOM heading 의 id slug 알고리즘 mismatch 가능 → index 기반 ref 매칭 (id 의존 X).
  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const headings = Array.from(
      root.querySelectorAll<HTMLHeadingElement>(
        ".markdown-body h2, .markdown-body h3"
      )
    );
    headingsRef.current = headings;

    // toc id 도 element 에 강제 동기화 (hash URL anchor 진입 호환)
    headings.forEach((h, i) => {
      const item = toc[i];
      if (item && h.id !== item.id) h.id = item.id;
    });

    if (headings.length === 0) return;
    setActiveIdx(0);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const idx = headings.indexOf(visible[0].target as HTMLHeadingElement);
          if (idx >= 0) setActiveIdx(idx);
        }
      },
      { root, rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [toc]);

  const scrollToIndex = (idx: number) => {
    const root = mainRef.current;
    if (!root) return;
    // 매번 fresh query — re-render / hydration 시 DOM element 재생성에 영향 X
    const headings = root.querySelectorAll<HTMLHeadingElement>(
      ".markdown-body h2, .markdown-body h3"
    );
    const el = headings[idx];
    if (!el) return;
    const top =
      el.getBoundingClientRect().top -
      root.getBoundingClientRect().top +
      root.scrollTop -
      16;
    root.scrollTo({ top, behavior: "smooth" });
    setActiveIdx(idx);
  };

  // hash URL 직접 진입 시 자동 scroll — id → idx 변환 후 scrollToIndex
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const decoded = decodeURIComponent(hash);
    const idx = toc.findIndex((t) => t.id === decoded);
    if (idx < 0) return;
    const t = setTimeout(() => scrollToIndex(idx), 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toc]);

  return (
    <div className="flex h-full">
      {/* 좌측 TOC */}
      <aside className="w-72 shrink-0 border-r border-slate-200 bg-slate-50 overflow-y-auto">
        <div className="px-5 py-5 border-b border-slate-200">
          <div className="text-base font-bold tracking-tight text-slate-900">
            Design Principles
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">{toc.length}개 섹션</div>
        </div>
        <nav className="p-3 space-y-0.5">
          {toc.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <a
                key={item.id + item.text + idx}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToIndex(idx);
                }}
                className={
                  "block px-3 py-2 rounded-lg text-sm transition-all " +
                  (item.level === 3 ? "ml-4 text-[13px] " : "") +
                  (isActive
                    ? "bg-indigo-600 text-white font-semibold shadow-sm"
                    : "text-slate-700 font-medium hover:bg-white")
                }
              >
                {item.text}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* 우측 본문 */}
      <main ref={mainRef} className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-10 py-10">
          <header className="mb-8 pb-6 border-b border-slate-200">
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-indigo-600 mb-1.5">
              Design Principles
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              DP — Design Principles
            </h1>
            <div className="text-xs text-slate-500 mt-2 font-mono">
              mockup/mockup-docs/DESIGN_PRINCIPLES.md
            </div>
          </header>

          <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </div>
  );
}
