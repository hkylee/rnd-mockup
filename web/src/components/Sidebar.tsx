"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

type MenuItem = {
  href: string;
  label: string;
  badge?: number;
  // sub-item 활성 판정용 (templates 섹션 — slug query)
  // matchSlugs[0] = 클릭 시 진입할 default slug. 활성 판정은 array 안 어떤 slug 든 매칭.
  matchSlugs?: string[];
};

type Section = {
  title?: string;
  key: string;
  items: MenuItem[];
};

const SECTIONS: Section[] = [
  {
    title: "Components",
    key: "components",
    items: [
      { href: "/sources?s=foundation", label: "Foundation" },
      { href: "/sources", label: "All Components" },
      { href: "/sources#atom", label: "Atom" },
      { href: "/sources#mol", label: "Molecule" },
      { href: "/sources#ogn", label: "Organism" },
    ],
  },
  {
    title: "Scripter Run",
    key: "scripter",
    items: [
      { href: "/scripter/sync", label: "DS Run" },
      { href: "/scripter/library", label: "Component Run" },
    ],
  },
];

const STORAGE_KEY = "genui.sidebar.collapsed";

export function Sidebar() {
  return (
    <Suspense fallback={<SidebarShell collapsed={{}} setCollapsed={() => {}} />}>
      <SidebarInner />
    </Suspense>
  );
}

function SidebarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeSlug = searchParams.get("slug");
  const activeSection = searchParams.get("s") ?? "";
  // /library/preview/... 안에서는 sidebar hide (iframe 임베드 시 root layout 의 sidebar 가 들어가지 않게)
  if (pathname?.startsWith("/library/preview")) return null;

  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCollapsed(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  const toggle = (key: string) => {
    setCollapsed((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // 활성 섹션은 자동 펼침 (사용자가 명시적으로 접지 않은 경우만)
  const isSectionActive = (section: Section): boolean => {
    return section.items.some((m) => isItemActive(m, pathname, activeSlug, activeSection));
  };

  return (
    <SidebarShell collapsed={collapsed} setCollapsed={toggle}>
      {SECTIONS.map((section) => {
        const sectionActive = isSectionActive(section);
        // hydration 전에는 active 섹션만 펼침 (default)
        const isCollapsed = hydrated
          ? collapsed[section.key] ?? false
          : !sectionActive && !!section.title;
        return (
          <SectionView
            key={section.key}
            section={section}
            pathname={pathname}
            activeSlug={activeSlug}
            activeSection={activeSection}
            collapsed={isCollapsed}
            onToggle={() => toggle(section.key)}
          />
        );
      })}
    </SidebarShell>
  );
}

function isItemActive(item: MenuItem, pathname: string | null, activeSlug: string | null, activeSection?: string): boolean {
  if (item.matchSlugs && item.matchSlugs.length > 0) {
    return pathname === "/docs/templates" && activeSlug !== null && item.matchSlugs.includes(activeSlug);
  }
  const [base, query] = item.href.split("?");
  const pathMatch = pathname === base || pathname?.startsWith(base + "/") || false;
  if (!pathMatch) return false;
  if (query) {
    const itemParams = new URLSearchParams(query);
    const itemS = itemParams.get("s") ?? "";
    return (activeSection ?? "") === itemS;
  }
  // no query on item: active only when no s= param on current URL
  return !activeSection;
}

function SidebarShell({
  collapsed: _collapsed,
  setCollapsed: _setCollapsed,
  children,
}: {
  collapsed: Record<string, boolean>;
  setCollapsed: ((key: string) => void) | (() => void);
  children?: React.ReactNode;
}) {
  const [shellCollapsed, setShellCollapsed] = useState(false);

  if (shellCollapsed) {
    return (
      <aside className="w-10 shrink-0 bg-white border-r border-slate-100 flex flex-col">
        <button
          onClick={() => setShellCollapsed(false)}
          className="h-12 flex items-center justify-center text-slate-400 hover:text-slate-700"
          title="펼치기"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </aside>
    );
  }
  return (
    <aside className="w-56 shrink-0 bg-white border-r border-slate-100 flex flex-col">
      <div className="px-5 pt-6 pb-5 flex items-center justify-between">
        <div>
          <div className="text-[15px] font-bold tracking-tight text-slate-900">PXDS</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Plus X Design System</div>
        </div>
        <button
          onClick={() => setShellCollapsed(true)}
          className="text-slate-300 hover:text-slate-500 transition"
          title="접기"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2.5L4.5 7L9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <nav className="flex-1 px-3 pb-6 space-y-0.5 overflow-y-auto">{children}</nav>
    </aside>
  );
}

function SectionView({
  section,
  pathname,
  activeSlug,
  activeSection,
  collapsed,
  onToggle,
}: {
  section: Section;
  pathname: string | null;
  activeSlug: string | null;
  activeSection?: string;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const hasTitle = !!section.title;
  return (
    <div>
      {hasTitle && (
        <div className="px-3 pt-4 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          {section.title}
        </div>
      )}
      {(!hasTitle || !collapsed) && (
        <div className="space-y-0.5 mb-2">
          {section.items.map((m) => {
            const active = isItemActive(m, pathname, activeSlug, activeSection);
            return (
              <Link
                key={m.href}
                href={m.href}
                className={
                  "flex items-center px-3 py-2 rounded-lg text-[13px] transition-all " +
                  (active
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900")
                }
              >
                <span className="truncate">{m.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Chevron({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={"transition-transform " + (collapsed ? "" : "rotate-90")}
    >
      <path d="M3 1.5L6.5 5L3 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
