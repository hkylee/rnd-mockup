"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./markdown.css";

type Template = {
  slug: string;
  name: string;
  category: string;
  source: string;
  order: number;
  format: "md" | "html";
  html: string;
};

const SOURCE_LABEL: Record<string, string> = {
  "governance": "governance",
  "mockup-docs": "mockup/mockup-docs",
  "sb": "mockup/sb-doc",
  // 호환용 — manifest 에서 더 이상 사용 X (2026-05-01 production-flow archive)
  "production-flow": "_archive/production-flow-v1",
  "production": "sb",
};

export function TemplateView({ templates }: { templates: Template[] }) {
  const sorted = [...templates].sort((a, b) => a.order - b.order);
  const [activeSlug, setActiveSlug] = useState(sorted[0]?.slug || "");
  const active = sorted.find((t) => t.slug === activeSlug) || sorted[0];

  // URL ?slug=xxx 와 동기화 — Sidebar sub-link 등 navigate 시 query 변경 감지
  const searchParams = useSearchParams();
  const querySlug = searchParams.get("slug");
  useEffect(() => {
    if (querySlug && sorted.some((t) => t.slug === querySlug)) {
      setActiveSlug(querySlug);
    }
  }, [querySlug, sorted]);

  const onSelect = (slug: string) => {
    setActiveSlug(slug);
    const url = new URL(window.location.href);
    url.searchParams.set("slug", slug);
    window.history.replaceState({}, "", url);
  };

  // 카테고리 그룹 — manifest order 유지
  const byCategory: Array<[string, Template[]]> = [];
  for (const t of sorted) {
    let last = byCategory[byCategory.length - 1];
    if (!last || last[0] !== t.category) {
      last = [t.category, []];
      byCategory.push(last);
    }
    last[1].push(t);
  }

  return (
    <>
      {/* 좌측 목록 */}
      <aside className="w-72 shrink-0 border-r border-slate-200 bg-slate-50 overflow-y-auto">
        <div className="px-5 py-5 border-b border-slate-200">
          <div className="text-base font-bold tracking-tight text-slate-900">
            Document Templates
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {sorted.length}개 템플릿
          </div>
        </div>
        <div className="p-3 space-y-5">
          {byCategory.map(([cat, items]) => (
            <div key={cat}>
              <div className="px-2 mb-2 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                {cat}
              </div>
              <div className="space-y-0.5">
                {items.map((t) => {
                  const isActive = t.slug === activeSlug;
                  return (
                    <button
                      key={t.slug}
                      onClick={() => onSelect(t.slug)}
                      className={
                        "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all " +
                        (isActive
                          ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-200"
                          : "text-slate-700 font-medium hover:bg-white")
                      }
                    >
                      <div>{t.name}</div>
                      <div
                        className={
                          "text-[10px] mt-0.5 font-mono " +
                          (isActive ? "text-indigo-100" : "text-slate-400")
                        }
                      >
                        {SOURCE_LABEL[t.source]}/{t.slug}.{t.format}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* 우측 상세 */}
      <main className="flex-1 overflow-y-auto bg-white">
        {active && (
          <div className="max-w-4xl mx-auto px-10 py-10">
            <header className="mb-8 pb-6 border-b border-slate-200">
              <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-indigo-600 mb-1.5">
                {active.category}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                {active.name}
              </h1>
              <div className="text-xs text-slate-500 mt-2 font-mono">
                {SOURCE_LABEL[active.source]}/{active.slug}.{active.format}
              </div>
            </header>

            {active.format === "html" ? (
              <iframe
                srcDoc={active.html}
                className="w-full h-[85vh] border border-slate-200 rounded-lg bg-white"
                title={active.name}
              />
            ) : (
              <article
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: active.html }}
              />
            )}
          </div>
        )}
      </main>
    </>
  );
}
