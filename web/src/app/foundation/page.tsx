"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type DSTokens = Record<string, unknown>;

function resolveRef(ds: DSTokens, val: unknown, depth = 0): unknown {
  if (depth > 12 || typeof val !== "string") return val;
  const m = val.match(/^\{(.+)\}$/);
  if (!m) return val;
  const parts = m[1].split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = ds;
  for (const p of parts) cur = cur?.[p];
  if (cur == null) return val;
  const v = cur.$value ?? cur.value ?? cur;
  return resolveRef(ds, v, depth + 1);
}

function walkTokens(
  obj: unknown,
  path = "",
  out: Array<{ path: string; type: string; value: unknown }> = []
): Array<{ path: string; type: string; value: unknown }> {
  if (typeof obj !== "object" || obj === null) return out;
  const o = obj as Record<string, unknown>;
  if ("$value" in o || "value" in o) {
    out.push({ path, type: String(o.$type ?? o.type ?? ""), value: o.$value ?? o.value });
  } else {
    for (const [k, v] of Object.entries(o)) {
      if (typeof v === "object") walkTokens(v, path ? `${path}.${k}` : k, out);
    }
  }
  return out;
}

const NAV_FOUNDATION = [
  { id: "typography", label: "Typography", icon: "Aa" },
  { id: "color",      label: "Color",      icon: "◉" },
  { id: "spacing",    label: "Spacing",    icon: "↔" },
  { id: "radius",     label: "Radius",     icon: "⌒" },
  { id: "shadow",     label: "Shadow",     icon: "◫" },
] as const;

const NAV_COMPONENTS = [
  { id: "button",       label: "Button",       icon: "⬡" },
  { id: "checkbox",     label: "Checkbox",     icon: "☑" },
  { id: "radio",        label: "Radio",        icon: "◎" },
  { id: "input",        label: "Input",        icon: "_" },
  { id: "select",       label: "Select",       icon: "▾" },
  { id: "toggle",       label: "Toggle",       icon: "⊙" },
  { id: "chip",         label: "Chip / Tag",   icon: "○" },
  { id: "badge",        label: "Badge",        icon: "•" },
  { id: "callout",      label: "Callout",      icon: "⚠" },
  { id: "modal",        label: "Modal",        icon: "▣" },
  { id: "bottomsheet",  label: "Bottom Sheet", icon: "↑" },
  { id: "toast",        label: "Toast",        icon: "▲" },
  { id: "tabbar",       label: "Tab Bar",      icon: "⊟" },
  { id: "navigation",   label: "Navigation",   icon: "←" },
  { id: "card",         label: "Card",         icon: "▤" },
  { id: "listitem",     label: "List Item",    icon: "≡" },
] as const;

type NavId =
  | (typeof NAV_FOUNDATION)[number]["id"]
  | (typeof NAV_COMPONENTS)[number]["id"];

// ── 공통 UI 블록 ───────────────────────────────────────────────────

function SectionHeader({ title, desc, badge }: { title: string; desc: string; badge?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2.5 mb-1.5">
        <h2 className="text-[22px] font-bold text-slate-900 tracking-tight">{title}</h2>
        {badge && (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wide">{badge}</span>
        )}
      </div>
      <p className="text-[13px] text-slate-400 leading-relaxed">{desc}</p>
      <div className="mt-5 border-t border-slate-100" />
    </div>
  );
}

function SubHeader({ title }: { title: string }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3 mt-8">{title}</h3>
  );
}

function NeedsDefinition({ title, items }: { title?: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-dashed border-amber-300 bg-amber-50 p-4 my-5">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-[14px]">📋</span>
        <span className="text-[12px] font-semibold text-amber-700">정의 필요</span>
        {title && <span className="text-[12px] text-amber-600 font-medium">— {title}</span>}
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-[12px] text-amber-800 flex items-start gap-2 leading-relaxed">
            <span className="text-amber-400 shrink-0 mt-0.5">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DoBlock({ rules }: { rules: string[] }) {
  return (
    <div className="flex-1 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[9px] font-bold shrink-0">✓</span>
        <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Do</span>
      </div>
      <ul className="space-y-1.5">
        {rules.map((r, i) => (
          <li key={i} className="text-[12px] text-emerald-800 leading-relaxed">{r}</li>
        ))}
      </ul>
    </div>
  );
}

function DontBlock({ rules }: { rules: string[] }) {
  return (
    <div className="flex-1 rounded-xl border border-red-200 bg-red-50 p-4">
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-[9px] font-bold shrink-0">✕</span>
        <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider">Don&apos;t</span>
      </div>
      <ul className="space-y-1.5">
        {rules.map((r, i) => (
          <li key={i} className="text-[12px] text-red-800 leading-relaxed">{r}</li>
        ))}
      </ul>
    </div>
  );
}

function RuleBlock({ rules }: { rules: string[] }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3.5 my-4">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2.5">Rule</div>
      <ul className="space-y-2">
        {rules.map((r, i) => (
          <li key={i} className="text-[13px] text-slate-700 flex items-start gap-2 leading-relaxed">
            <span className="text-slate-300 shrink-0 mt-0.5 font-semibold">—</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UsageTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-xl border border-slate-100">
      <table className="w-full text-[12px]">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2.5 text-left font-semibold text-slate-500 uppercase tracking-wide text-[10px]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 text-slate-700 ${j === 0 ? "font-mono font-semibold text-slate-800" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 컴포넌트 섹션 공통 플레이스홀더 ────────────────────────────────

function ComponentPlaceholder({
  sectionRef,
  id,
  title,
  desc,
  items,
}: {
  sectionRef: (el: HTMLElement | null) => void;
  id: string;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <section id={id} ref={sectionRef} className="mb-16">
      <SectionHeader title={title} desc={desc} badge="component" />
      <NeedsDefinition
        items={items}
      />
    </section>
  );
}

// ── 메인 페이지 ────────────────────────────────────────────────────

function FoundationPageInner() {
  const searchParams = useSearchParams();
  const focusId = searchParams?.get("focus") ?? null;

  const [ds, setDs] = useState<DSTokens | null>(null);
  const [active, setActive] = useState<NavId>("typography");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const didFocus = useRef(false);

  useEffect(() => {
    fetch("/api/spec?kind=ds")
      .then(r => r.json())
      .then(d => setDs(d.ds ?? null))
      .catch(() => {});
  }, []);

  // focus 파라미터로 자동 스크롤 (DS 로드 후 1회)
  useEffect(() => {
    if (!focusId || !ds || didFocus.current) return;
    const el = sectionRefs.current[focusId];
    if (el && containerRef.current) {
      didFocus.current = true;
      setTimeout(() => {
        containerRef.current?.scrollTo({ top: el.offsetTop - 24, behavior: "smooth" });
        setActive(focusId as NavId);
        // 시각적 하이라이트를 위한 짧은 pulse
        el.style.transition = "background 0.4s";
        el.style.background = "#f0fdf4";
        setTimeout(() => { el.style.background = ""; }, 1200);
      }, 150);
    }
  }, [ds, focusId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handler = () => {
      const allNav = [...NAV_FOUNDATION, ...NAV_COMPONENTS];
      for (const { id } of [...allNav].reverse()) {
        const el = sectionRefs.current[id];
        if (el && el.offsetTop - 80 <= container.scrollTop) {
          setActive(id as NavId);
          return;
        }
      }
      setActive("typography");
    };
    container.addEventListener("scroll", handler, { passive: true });
    return () => container.removeEventListener("scroll", handler);
  }, []);

  function scrollTo(id: string) {
    const el = sectionRefs.current[id];
    if (el && containerRef.current) {
      containerRef.current.scrollTo({ top: el.offsetTop - 24, behavior: "smooth" });
    }
    setActive(id as NavId);
  }

  function navItem(id: string, label: string, icon: string) {
    const isActive = active === id;
    return (
      <button
        key={id}
        onClick={() => scrollTo(id)}
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition text-left w-full
          ${isActive ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"}`}
      >
        <span className={`text-[12px] w-4 text-center shrink-0 ${isActive ? "text-slate-300" : "text-slate-400"}`}>{icon}</span>
        {label}
      </button>
    );
  }

  return (
    <div className="h-full flex bg-white" id="foundation-root">

      {/* ── 좌측 네비게이션 ──────────────────────────── */}
      <aside className="w-[192px] shrink-0 border-r border-slate-100 flex flex-col pt-8 pb-8 px-4 gap-0.5 overflow-y-auto">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-3">Foundation</p>
        {NAV_FOUNDATION.map(({ id, label, icon }) => navItem(id, label, icon))}

        <div className="my-3 border-t border-slate-100" />

        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-3">Components</p>
        {NAV_COMPONENTS.map(({ id, label, icon }) => navItem(id, label, icon))}
      </aside>

      {/* ── 메인 콘텐츠 ────────────────────────────── */}
      <div ref={containerRef} className="flex-1 overflow-y-auto">
        <div className="max-w-[760px] mx-auto px-10 py-10 pb-32">

          {!ds && (
            <div className="h-64 flex items-center justify-center text-slate-400 text-sm">토큰 로드 중…</div>
          )}

          {ds && (
            <>
              <TypographySection ds={ds} sectionRef={el => (sectionRefs.current["typography"] = el)} />
              <ColorSection     ds={ds} sectionRef={el => (sectionRefs.current["color"]      = el)} />
              <SpacingSection   ds={ds} sectionRef={el => (sectionRefs.current["spacing"]    = el)} />
              <RadiusSection    ds={ds} sectionRef={el => (sectionRefs.current["radius"]     = el)} />
              <ShadowSection    ds={ds} sectionRef={el => (sectionRefs.current["shadow"]     = el)} />
            </>
          )}

          {/* Components — ds 없어도 렌더 */}
          <ComponentPlaceholder
            id="button" sectionRef={el => (sectionRefs.current["button"] = el)}
            title="Button" desc="작업을 실행하거나 화면 이동을 유도하는 기본 조작 컴포넌트"
            items={[
              "형태 (Variant) — Primary / Secondary / Ghost / Danger 시각 예시",
              "크기 (Size) — Small / Medium / Large 스펙표 (height, padding, font)",
              "상태 — Default / Hover / Pressed / Loading / Disabled",
              "아이콘 포함 형태 — Leading Icon / Trailing Icon / Icon Only",
              "전체 너비 (Full Width) — 사용 맥락 및 규칙",
              "접근성 — role=\"button\", aria-disabled, aria-label 가이드",
              "Props 테이블 — variant, size, disabled, loading, onClick 등",
            ]}
          />
          <ComponentPlaceholder
            id="checkbox" sectionRef={el => (sectionRefs.current["checkbox"] = el)}
            title="Checkbox" desc="단일 항목을 선택하거나 다중 선택에 사용하는 조작 컴포넌트"
            items={[
              "형태 (Variant) — Circle / Line 시각 예시",
              "상태 — Unchecked / Checked / Indeterminate / Disabled",
              "외부 상태 (Controlled) — checked + onCheckedChange props 사용 예시",
              "내부 상태 (Uncontrolled) — defaultChecked props 사용 예시",
              "크기 — 사이즈 조정 방법 및 스펙",
              "접근성 — role=\"checkbox\", aria-checked, aria-label 필수 여부",
              "Props 테이블 — checked, defaultChecked, onCheckedChange, disabled, size 등",
            ]}
          />
          <ComponentPlaceholder
            id="radio" sectionRef={el => (sectionRefs.current["radio"] = el)}
            title="Radio" desc="그룹 내 단일 항목을 선택하는 조작 컴포넌트"
            items={[
              "형태 — 라디오 버튼 형태 및 라벨 위치 예시",
              "상태 — Unselected / Selected / Disabled",
              "외부 상태 (Controlled) — value + onChange props",
              "내부 상태 (Uncontrolled) — defaultValue props",
              "Radio Group — 그룹핑 방법 및 예시",
              "접근성 — role=\"radio\", role=\"radiogroup\", aria-checked",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="input" sectionRef={el => (sectionRefs.current["input"] = el)}
            title="Input / TextField" desc="사용자 텍스트 입력을 받는 컴포넌트"
            items={[
              "형태 — Default / Search / Password / Number",
              "구성 요소 — Label / Placeholder / Leading Icon / Trailing Icon / Helper Text / Error Message / Character Count",
              "상태 — Default / Focused / Filled / Error / Disabled / Read-only",
              "크기 — 높이, 폰트, 패딩 스펙",
              "접근성 — aria-label / aria-describedby (helper, error 연결) / aria-invalid",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="select" sectionRef={el => (sectionRefs.current["select"] = el)}
            title="Select" desc="목록에서 단일 항목을 선택하는 드롭다운 컴포넌트"
            items={[
              "형태 — Default / Searchable",
              "상태 — Closed / Open / Selected / Disabled / Error",
              "구성 요소 — Trigger / Dropdown / Option Item / Placeholder",
              "접근성 — role=\"combobox\", aria-expanded, aria-haspopup",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="toggle" sectionRef={el => (sectionRefs.current["toggle"] = el)}
            title="Toggle / Switch" desc="즉각적인 on/off 전환을 위한 컴포넌트"
            items={[
              "상태 — Off / On / Disabled-Off / Disabled-On 시각 예시",
              "외부 상태 (Controlled) / 내부 상태 (Uncontrolled) 예시",
              "크기 — 크기별 스펙",
              "접근성 — role=\"switch\", aria-checked",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="chip" sectionRef={el => (sectionRefs.current["chip"] = el)}
            title="Chip / Tag" desc="필터, 선택, 정보 표시에 사용하는 소형 라벨 컴포넌트"
            items={[
              "형태 — Filter Chip / Input Chip / Suggestion Chip 구분 및 시각 예시",
              "상태 — Default / Selected / Disabled",
              "아이콘 / 닫기 버튼 포함 여부 옵션",
              "접근성 — role, aria-selected, aria-pressed",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="badge" sectionRef={el => (sectionRefs.current["badge"] = el)}
            title="Badge" desc="숫자, 상태, 알림을 표시하는 소형 인디케이터 컴포넌트"
            items={[
              "형태 — Dot / Count / Label 시각 예시",
              "색상 매핑 — brand / danger / neutral 등 시맨틱 색상 적용 기준",
              "위치 규칙 — 아이콘 / 아바타 위 오버레이 기준",
              "최대 숫자 처리 — 99+ 표시 규칙",
              "접근성 — aria-label로 숫자 의미 전달",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="callout" sectionRef={el => (sectionRefs.current["callout"] = el)}
            title="Callout / Alert" desc="인라인 정보·경고·오류 메시지를 표시하는 컴포넌트"
            items={[
              "형태 — Info / Success / Warning / Danger 시각 예시",
              "구성 요소 — 아이콘 / 제목 / 본문 / 닫기 버튼",
              "상태 — 닫기 가능 / 항상 표시",
              "접근성 — role=\"alert\" / role=\"status\" 구분 기준",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="modal" sectionRef={el => (sectionRefs.current["modal"] = el)}
            title="Modal / Dialog" desc="작업 중단 또는 확인이 필요할 때 사용하는 오버레이 컴포넌트"
            items={[
              "형태 — Alert Dialog / Confirm Dialog / Custom Content",
              "구성 요소 — Overlay / Container / Header / Body / Footer",
              "상태 — Open / Closed 전환 애니메이션",
              "외부 상태 (Controlled) / 내부 상태 (Uncontrolled) 예시",
              "포커스 트랩 — 모달 열릴 때 포커스 관리 규칙",
              "접근성 — role=\"dialog\", aria-modal, aria-labelledby, aria-describedby",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="bottomsheet" sectionRef={el => (sectionRefs.current["bottomsheet"] = el)}
            title="Bottom Sheet" desc="모바일 환경에서 화면 하단에서 올라오는 패널 컴포넌트"
            items={[
              "형태 — 고정 높이 / 드래그 가능 / 전체 화면 확장",
              "구성 요소 — Handle / Header / Body / Footer",
              "상태 — Closed / Half / Full",
              "스크롤 처리 — 내부 스크롤 vs 시트 높이 확장 규칙",
              "Radius — radius-28 상단 적용 규칙 (Radius 가이드 참조)",
              "접근성 — role=\"dialog\", 배경 스크롤 잠금",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="toast" sectionRef={el => (sectionRefs.current["toast"] = el)}
            title="Toast" desc="짧은 피드백 메시지를 전달하고 자동으로 사라지는 컴포넌트"
            items={[
              "형태 — Default / Success / Error / Action 포함 시각 예시",
              "위치 — 화면 기준 위치 (상단 / 하단 / 중앙)",
              "지속 시간 — 자동 닫힘 시간 기본값 정의",
              "중첩 처리 — 여러 개 Toast 쌓임 규칙",
              "접근성 — role=\"status\" / role=\"alert\" 구분 기준, aria-live",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="tabbar" sectionRef={el => (sectionRefs.current["tabbar"] = el)}
            title="Tab Bar" desc="콘텐츠 섹션 간 전환을 위한 네비게이션 컴포넌트"
            items={[
              "형태 — Underline / Filled / Pill 시각 예시",
              "구성 요소 — Tab Item (아이콘 + 라벨) / Indicator / Badge",
              "상태 — Default / Active / Disabled",
              "스크롤 탭 — 아이템 수 많을 때 가로 스크롤 처리",
              "접근성 — role=\"tablist\", role=\"tab\", aria-selected, aria-controls",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="navigation" sectionRef={el => (sectionRefs.current["navigation"] = el)}
            title="Navigation / Header" desc="페이지 상단 헤더 및 내비게이션 컴포넌트"
            items={[
              "형태 — Large / Default / Compact / Transparent",
              "구성 요소 — Back Button / Title / Subtitle / Right Actions",
              "스크롤 동작 — 스크롤 시 헤더 높이 변화 또는 고정 동작",
              "접근성 — role=\"banner\", aria-label",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="card" sectionRef={el => (sectionRefs.current["card"] = el)}
            title="Card" desc="콘텐츠를 담는 컨테이너 단위 컴포넌트"
            items={[
              "형태 — Default / Elevated / Outlined / Filled",
              "구성 요소 — 썸네일 / Header / Body / Footer / 액션 영역",
              "Radius — radius-24 (홈 카드) / radius-20 (상품 유닛) 적용 기준 (Radius 가이드 참조)",
              "Spacing — Inner spacing 규칙 (Spacing 가이드 참조)",
              "상태 — Default / Pressed / Disabled",
              "접근성 — 클릭 가능한 카드의 role, aria-label",
              "Props 테이블",
            ]}
          />
          <ComponentPlaceholder
            id="listitem" sectionRef={el => (sectionRefs.current["listitem"] = el)}
            title="List Item" desc="반복 나열되는 행 단위 컴포넌트"
            items={[
              "형태 — Default / With Leading / With Trailing / With Both",
              "구성 요소 — Leading (아이콘/아바타/썸네일) / Title / Subtitle / Trailing",
              "크기 — 1줄 / 2줄 / 3줄 (Multi-line)",
              "상태 — Default / Pressed / Selected / Disabled",
              "구분선 — Divider 적용 규칙",
              "접근성 — role=\"listitem\", 클릭 가능 항목의 role=\"button\" 처리",
              "Props 테이블",
            ]}
          />

        </div>
      </div>
    </div>
  );
}

export default function FoundationPage() {
  return (
    <Suspense fallback={<div className="h-full flex items-center justify-center text-slate-400 text-sm">로드 중…</div>}>
      <FoundationPageInner />
    </Suspense>
  );
}

// ── Typography ────────────────────────────────────────────────────

function TypographySection({ ds, sectionRef }: { ds: DSTokens; sectionRef: (el: HTMLElement | null) => void }) {
  const tokens = walkTokens(ds);
  const sizes = tokens.filter(t => t.type === "fontSize" && t.path.startsWith("foundation.typography.fontSize"));
  const weights = tokens.filter(t => t.type === "fontWeight" && t.path.startsWith("foundation.typography.fontWeight"));
  const spacings = tokens.filter(t => t.type === "letterSpacing" && t.path.startsWith("foundation"));

  const rows = sizes.map(s => {
    const name = s.path.split(".").pop()!;
    const size = String(resolveRef(ds, s.value) ?? s.value);
    const sizeNum = parseFloat(size);
    return { name, size, sizeNum };
  }).sort((a, b) => b.sizeNum - a.sizeNum);

  return (
    <section ref={sectionRef} className="mb-16">
      <SectionHeader
        title="Typography"
        desc="Pretendard Variable 기반. 콘텐츠의 시각적 계층 구조를 명확히 하며 모든 채널에서 접근성과 일관성을 유지합니다."
      />

      <SubHeader title="Font Size" />
      <div className="space-y-0.5">
        {rows.map(({ name, size, sizeNum }) => (
          <div key={name} className="flex items-baseline gap-6 py-3.5 border-b border-slate-50 group hover:bg-slate-50 -mx-4 px-4 rounded-xl transition">
            <div className="w-36 shrink-0">
              <div className="text-[11px] font-semibold font-mono text-slate-600">{name}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{size}</div>
            </div>
            <div
              className="text-slate-900 leading-none truncate"
              style={{ fontSize: Math.min(sizeNum, 32) + "px", fontFamily: "Pretendard, sans-serif" }}
            >
              가나다라마바사 ABCDEFabcdef
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div>
          <SubHeader title="Font Weight" />
          <div className="space-y-2.5">
            {weights.map(w => {
              const name = w.path.split(".").pop()!;
              const val = String(w.value);
              return (
                <div key={name} className="flex items-center gap-3">
                  <span className="w-20 text-[11px] font-mono text-slate-500 shrink-0">{name}</span>
                  <span style={{ fontWeight: parseInt(val), fontFamily: "Pretendard, sans-serif" }} className="text-[15px] text-slate-800 flex-1">가나다 Abc</span>
                  <span className="text-[11px] text-slate-400">{val}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <SubHeader title="Letter Spacing" />
          <div className="space-y-2.5">
            {spacings.map(s => {
              const name = s.path.split(".").pop()!;
              const val = String(s.value);
              return (
                <div key={name} className="flex items-center gap-3">
                  <span className="w-20 text-[11px] font-mono text-slate-500 shrink-0">{name}</span>
                  <span style={{ letterSpacing: val, fontFamily: "Pretendard, sans-serif" }} className="text-[14px] text-slate-800 flex-1">ABCDEF</span>
                  <span className="text-[11px] text-slate-400">{val}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SubHeader title="사용 가이드 — 위계 규칙" />
      <UsageTable
        headers={["Name", "사용", "Use Case"]}
        rows={[
          ["display", "페이지 내 가장 큰 텍스트에 1회 사용", "완료 페이지"],
          ["headline", "페이지 내 주요 텍스트에 사용", "홈 카드"],
          ["title", "섹션 또는 카드의 제목에 사용", "상세 페이지 타이틀"],
          ["body", "본문 텍스트에 사용", "—"],
          ["caption", "보조 정보에 사용", "뱃지, 콜아웃, 헬프텍스트"],
        ]}
      />

      <SubHeader title="사용 가이드 — 혼용 규칙" />
      <RuleBlock rules={[
        "한 화면에서 Font Weight는 최대 3가지 스타일로만 구성합니다.",
        "Regular, Medium, Semibold, Bold를 한 화면에 모두 사용하지 않습니다.",
        "타이틀, 본문, 보조 정보 등 텍스트의 역할별 굵기를 구분하여 적용합니다.",
      ]} />

      <SubHeader title="Do / Don't" />
      <div className="flex gap-3 my-4">
        <DoBlock rules={[
          "정보 위계에 맞춰 display → headline → title → body → caption 순으로 단계적으로 줄어들도록 적용합니다.",
          "역할별 굵기를 적용하여 최대 3가지 스타일로 구성합니다.",
        ]} />
        <DontBlock rules={[
          "타이틀과 본문이 구분되지 않거나 위계에 맞지 않게 적용합니다.",
          "한 화면에 Regular, Medium, Semibold, Bold를 모두 사용합니다.",
        ]} />
      </div>
      <NeedsDefinition
        title="시각적 Do / Don't 예시"
        items={[
          "위계가 올바른 화면과 잘못된 화면의 나란히 비교 시각",
          "weight 혼용이 과한 화면 vs 3가지 이하로 제한된 화면 비교",
        ]}
      />

      <SubHeader title="접근성" />
      <NeedsDefinition items={[
        "최소 본문 텍스트 크기 기준 (WCAG 권장 14px 이상 명시)",
        "줄간격·자간이 가독성에 미치는 영향 가이드",
        "caption 계열 소형 텍스트 사용 시 주의사항 (배경 대비 필수)",
      ]} />
    </section>
  );
}

// ── Color ─────────────────────────────────────────────────────────

function ColorSection({ ds, sectionRef }: { ds: DSTokens; sectionRef: (el: HTMLElement | null) => void }) {
  const tokens = walkTokens(ds);
  const colorTokens = tokens.filter(t => t.type === "color");

  const foundationColors = colorTokens.filter(t => t.path.startsWith("foundation.color"));
  const groups: Record<string, Array<{ path: string; value: unknown }>> = {};
  for (const t of foundationColors) {
    const g = t.path.split(".")[2];
    groups[g] = groups[g] ?? [];
    groups[g].push(t);
  }

  const semanticGroups: Record<string, Array<{ path: string; value: unknown }>> = {};
  const semanticColors = colorTokens.filter(t => t.path.startsWith("semantic.color"));
  for (const t of semanticColors) {
    const g = t.path.split(".")[2];
    if (["text", "background", "brand", "feedback", "surface", "border", "fill", "icon", "shadow", "bg"].includes(g)) {
      semanticGroups[g] = semanticGroups[g] ?? [];
      semanticGroups[g].push(t);
    }
  }

  return (
    <section ref={sectionRef} className="mb-16">
      <SectionHeader
        title="Color"
        desc="모든 UI 요소에 일관된 브랜드 아이덴티티를 부여하고, 명확한 정보 위계와 직관적인 피드백을 전달하기 위해 정의된 색상 시스템입니다."
      />

      <SubHeader title="Foundation — Color Palette" />
      <div className="space-y-5 mb-2">
        {Object.entries(groups).map(([groupName, items]) => (
          <div key={groupName}>
            <div className="text-[12px] font-semibold text-slate-600 mb-2 capitalize">{groupName}</div>
            <div className="flex flex-wrap gap-2">
              {items.map(({ path, value }) => {
                const hex = String(resolveRef(ds, value) ?? value);
                const name = path.split(".").pop()!;
                return (
                  <div key={path} className="flex flex-col items-center gap-1 w-14">
                    <div
                      className="w-10 h-10 rounded-xl border border-black/5 shadow-sm"
                      style={{ background: hex }}
                      title={`${path}: ${hex}`}
                    />
                    <span className="text-[10px] text-slate-400 text-center leading-tight">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <SubHeader title="Semantic Color" />
      <div className="space-y-4 mb-2">
        {Object.keys(semanticGroups).length > 0 ? Object.entries(semanticGroups).map(([groupName, items]) => (
          <div key={groupName}>
            <div className="text-[12px] font-semibold text-slate-600 mb-2 capitalize">{groupName}</div>
            <div className="flex flex-wrap gap-2">
              {items.map(({ path, value }) => {
                const hex = String(resolveRef(ds, value) ?? value);
                const name = path.split(".").slice(3).join(".");
                return (
                  <div key={path} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-4 h-4 rounded-md border border-black/5 shrink-0" style={{ background: hex }} />
                    <div>
                      <div className="text-[11px] font-medium text-slate-700">{name}</div>
                      <div className="text-[10px] font-mono text-slate-400">{hex}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )) : (
          <NeedsDefinition
            title="Semantic Color 데이터"
            items={[
              "DS JSON에서 semantic.color.* 경로 토큰 확인 필요",
              "Background / Fill / Text / Border / Icon / Shadow 그룹별 시각화",
            ]}
          />
        )}
      </div>

      <SubHeader title="사용 가이드" />
      <RuleBlock rules={[
        "정해진 색상 토큰만 사용합니다. 임의의 hex 값을 사용하지 않습니다.",
        "Semantic Color를 우선 사용합니다. Palette는 Semantic에 없는 경우에만 참조합니다.",
        "브랜드 컬러(color.fill.brand)는 강조가 필요한 단일 요소에만 사용합니다.",
        "비활성화 요소에는 color.fill.disabled / color.text.disabled를 적용합니다.",
      ]} />

      <SubHeader title="다크모드" />
      <NeedsDefinition items={[
        "다크모드 대응 여부 결정",
        "Light / Dark 모드별 Semantic Color 매핑 테이블",
        "다크모드 전환 시 변경되는 토큰 목록",
      ]} />

      <SubHeader title="접근성" />
      <NeedsDefinition items={[
        "주요 텍스트 색상 + 배경색 조합의 WCAG 대비 비율표 (AA / AAA 기준)",
        "브랜드 컬러(blue-800) 위 흰 텍스트의 대비 검증 결과",
        "색각 이상 사용자 대응 가이드 — 색상만으로 정보를 전달하지 않는 규칙",
        "color.text.disabled 의 대비 비율 경고 케이스 명시",
      ]} />
    </section>
  );
}

// ── Spacing ───────────────────────────────────────────────────────

function SpacingSection({ ds, sectionRef }: { ds: DSTokens; sectionRef: (el: HTMLElement | null) => void }) {
  const tokens = walkTokens(ds);
  const spacingTokens = tokens
    .filter(t => t.path.startsWith("foundation.dimension.spacing") && t.type === "dimension")
    .map(t => ({ name: t.path.split(".").pop()!, value: String(t.value), px: parseFloat(String(t.value)) }))
    .sort((a, b) => a.px - b.px);

  const maxPx = Math.max(...spacingTokens.map(t => t.px), 1);

  return (
    <section ref={sectionRef} className="mb-16">
      <SectionHeader
        title="Spacing"
        desc="기본 단위 2px. 제작자가 일관된 간격을 최대한 활용하면서도 각 경험의 요구 사항에 맞춰 유연하게 사용할 수 있도록 설계되었습니다."
      />

      <SubHeader title="Spacing Scale" />
      <div className="space-y-2.5">
        {spacingTokens.map(({ name, value, px }) => (
          <div key={name} className="flex items-center gap-4">
            <div className="w-14 text-[12px] font-mono font-semibold text-slate-700 shrink-0">{name}</div>
            <div className="w-10 text-[11px] text-slate-400 text-right shrink-0">{value}</div>
            <div className="flex-1 flex items-center gap-2">
              <div
                className="bg-violet-400 rounded-sm h-4 min-w-[2px] transition-all"
                style={{ width: px === 0 ? "2px" : `${(px / maxPx) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <SubHeader title="사용 가이드 — Component Spacing" />
      <UsageTable
        headers={["Name", "Value", "Usage"]}
        rows={[
          ["space-none", "0", "마스터 컴포넌트 좌우 여백값"],
          ["space-4", "4px", "컴포넌트 하단 여백값"],
          ["space-8", "8px", "컴포넌트 하단 여백값"],
          ["space-16", "16px", "컴포넌트 하단 여백값"],
          ["space-20", "20px", "컴포넌트 하단 여백값"],
          ["space-28", "28px", "컴포넌트 하단 여백값"],
          ["space-32", "32px", "컴포넌트 하단 여백값"],
        ]}
      />

      <SubHeader title="사용 가이드 — Layout Spacing" />
      <UsageTable
        headers={["Name", "Value", "Usage"]}
        rows={[
          ["space-none", "0", "PagestackItem Base 컴포넌트 전용 좌우 여백 / 헤더 하단 시작 컴포넌트 상단 패딩"],
          ["space-4", "4px", "반복되는 컴포넌트 배치 시 간격값"],
          ["space-12", "12px", "1depth 페이지 좌우 여백값"],
          ["space-20", "20px", "PagestackItem Card 컴포넌트 전용 좌우 여백값"],
        ]}
      />

      <SubHeader title="사용 가이드 — Inner Spacing" />
      <UsageTable
        headers={["Name", "Value", "Usage"]}
        rows={[
          ["space-12", "12px", "Box 안에 사용되는 상하 여백값"],
          ["space-16", "16px", "Box 안에 사용되는 좌우 여백값"],
          ["space-22", "22px", "1depth 페이지 ButtonSection 내부 상하 여백값"],
          ["space-24", "24px", "2depth Card 컴포넌트 내부 상하좌우 여백값"],
          ["space-28", "28px", "1depth 페이지 Card 컴포넌트 내부 상하좌우 여백값"],
        ]}
      />

      <SubHeader title="Do / Don't" />
      <div className="flex gap-3 my-4">
        <DoBlock rules={["정의된 space-* 토큰 값만 사용합니다."]} />
        <DontBlock rules={["임의의 px 수치를 사용하지 않습니다."]} />
      </div>
      <NeedsDefinition
        title="시각적 다이어그램"
        items={[
          "Spacing 값을 시각적 블록으로 보여주는 스케일 다이어그램",
          "Component / Layout / Inner 각 맥락에서 실제 적용된 화면 목업",
        ]}
      />
    </section>
  );
}

// ── Radius ────────────────────────────────────────────────────────

function RadiusSection({ ds, sectionRef }: { ds: DSTokens; sectionRef: (el: HTMLElement | null) => void }) {
  const RADIUS_ORDER = ["xs", "sm", "md", "button", "chip", "lg", "xl", "pill"];
  const tokens = walkTokens(ds);
  const radiusTokens = tokens
    .filter(t => t.path.startsWith("foundation.dimension.radius") && t.type === "dimension")
    .filter(t => RADIUS_ORDER.includes(t.path.split(".").pop()!))
    .map(t => ({
      name: t.path.split(".").pop()!,
      value: String(resolveRef(ds, t.value) ?? t.value),
      px: parseFloat(String(resolveRef(ds, t.value) ?? t.value)),
    }));

  const ordered = RADIUS_ORDER
    .map(n => radiusTokens.find(t => t.name === n))
    .filter(Boolean) as typeof radiusTokens;

  return (
    <section ref={sectionRef} className="mb-16">
      <SectionHeader
        title="Radius"
        desc="컴포넌트의 역할과 크기에 따라 적합한 radius 값을 적용하여 화면 전반의 시각적 밸런스를 유지합니다. 모든 radius에 Corner-smoothing 60%를 적용합니다."
      />

      <SubHeader title="Radius Scale" />
      <div className="flex flex-wrap gap-4 mb-2">
        {ordered.map(({ name, value, px }) => {
          const display = Math.min(px, 28);
          return (
            <div key={name} className="flex flex-col items-center gap-2.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 w-[110px]">
              <div
                className="w-16 h-16 bg-white border-2 border-slate-300"
                style={{ borderRadius: px >= 999 ? "50%" : `${display}px` }}
              />
              <div className="text-center">
                <div className="text-[12px] font-semibold font-mono text-slate-700">{name}</div>
                <div className="text-[11px] text-slate-400">{value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <SubHeader title="사용 가이드 — 역할별 분류" />
      <UsageTable
        headers={["Category", "Name", "Value", "Usage"]}
        rows={[
          ["Element", "radius-4", "4", "높이 20px 미만 정보성 요소"],
          ["Element", "radius-6", "6", "높이 20px 이상 요소"],
          ["Element", "radius-10", "10", "높이 24px 이상 요소"],
          ["Control", "radius-12", "12", "높이 36px 이상 조작 요소"],
          ["Control", "radius-16", "16", "높이 48px 이상 조작 요소"],
          ["Control", "radius-20", "20", "높이 56px 이상 조작 요소"],
          ["Container", "radius-20", "20", "상품 유닛"],
          ["Container", "radius-24", "24", "홈 카드 컴포넌트, 팝업"],
          ["Container", "radius-28", "28", "바텀시트"],
          ["Full", "radius-full", "9999", "원형 또는 타원형 요소"],
        ]}
      />

      <SubHeader title="사용 가이드 — 적용 및 중첩 규칙" />
      <RuleBlock rules={[
        "새로운 컴포넌트를 생성할 시 역할을 우선적으로 판단하고 이후 크기에 맞는 수치를 적용합니다.",
        "모든 radius 값에 Corner-smoothing 60%를 적용합니다.",
        "독립적으로 존재하며 배경이 있는 요소에는 항상 radius를 적용합니다.",
        "화면 경계에 맞닿는 면과 화면 끝까지 꽉 차는 요소에는 radius를 적용하지 않습니다.",
        "내부 요소는 외부 컨테이너보다 일반적으로 작은 radius를 사용합니다.",
        "radius-full은 외부 컨테이너의 radius 크기에 관계없이 적용할 수 있습니다.",
      ]} />

      <SubHeader title="Do / Don't" />
      <div className="flex gap-3 my-4">
        <DoBlock rules={[
          "적용 대상에 radius를 적용합니다.",
          "외부 컨테이너보다 작은 크기의 radius 값을 적용합니다.",
        ]} />
        <DontBlock rules={[
          "적용 대상이 아닌 요소에 radius를 적용하거나 적용 대상인 요소에 미적용하지 않습니다.",
          "외부 컨테이너보다 큰 크기의 radius 값을 적용하지 않습니다.",
        ]} />
      </div>
      <NeedsDefinition
        title="시각적 비교 예시"
        items={[
          "각 radius 값이 실제 컴포넌트에 적용된 시각적 비교 (4 / 12 / 24 / full 나란히)",
          "Corner-smoothing 적용 전/후 비교",
          "중첩 규칙 Do/Don't 시각 예시",
        ]}
      />
    </section>
  );
}

// ── Shadow ────────────────────────────────────────────────────────

function ShadowSection({ ds, sectionRef }: { ds: DSTokens; sectionRef: (el: HTMLElement | null) => void }) {
  const tokens = walkTokens(ds);
  const shadowTokens = tokens
    .filter(t => t.type === "shadow" && t.path.startsWith("foundation.shadow"))
    .map(t => {
      const name = t.path.split(".").pop()!;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const v = t.value as any;
      const color = typeof v?.color === "string" && v.color.startsWith("{")
        ? String(resolveRef(ds, v.color) ?? "#000")
        : v?.color ?? "#000";
      const alpha = v?.alpha ?? 0.1;
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      const shadow = `${v?.x ?? "0px"} ${v?.y ?? "2px"} ${v?.blur ?? "8px"} ${v?.spread ?? "0px"} rgba(${r},${g},${b},${alpha})`;
      return { name, shadow };
    });

  return (
    <section ref={sectionRef} className="mb-16">
      <SectionHeader
        title="Shadow"
        desc="깊이감을 표현하고 요소 간 시각적 계층을 구분하기 위한 그림자 레이어 시스템입니다."
      />

      <SubHeader title="Shadow Scale" />
      <div className="flex flex-wrap gap-5 mb-2">
        {shadowTokens.map(({ name, shadow }) => (
          <div key={name} className="flex flex-col items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-24 h-24 bg-white rounded-2xl" style={{ boxShadow: shadow }} />
            <div className="text-center">
              <div className="text-[12px] font-semibold font-mono text-slate-700">{name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5 font-mono max-w-[160px] break-all">{shadow}</div>
            </div>
          </div>
        ))}
      </div>

      <SubHeader title="사용 가이드" />
      <NeedsDefinition items={[
        "Shadow 레벨별 사용 맥락 정의 (어떤 컴포넌트에 어떤 shadow를 적용하는지)",
        "Floating / Card / Modal 등 계층별 shadow 적용 기준",
        "다크모드에서 shadow 처리 방식",
      ]} />

      <SubHeader title="접근성" />
      <NeedsDefinition items={[
        "shadow만으로 경계를 표현할 때 저시력 사용자 대응 기준",
        "border + shadow 병행 사용 권장 케이스",
      ]} />
    </section>
  );
}
