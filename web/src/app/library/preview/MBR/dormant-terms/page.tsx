// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: page/MBR/dormant-terms
"use client";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import flowMap from "@/lib/page-flow.json";
import { PageStateContext } from "@/components/library/_state-context";
import { StatusBar } from "@/components/library/ogn/status-bar";
import { Header } from "@/components/library/ogn/header";
import { StepIndicator } from "@/components/library/ogn/step-indicator";
import { SectionHeader } from "@/components/library/mol/section-header";
import { NoticeCard } from "@/components/library/mol/notice-card";
import { TermList } from "@/components/library/ogn/MBR/term-list";
import { StickyFooterCta } from "@/components/library/ogn/sticky-footer-cta";
import { FooterCs } from "@/components/library/ogn/footer-cs";

const SLUG = "MBR/dormant-terms";

export default function PreviewPage() {
  // page 안 inline text 의 expose 는 component 가 아니라 page scope — props 변수 정의 (모두 undefined 라 fallback default 적용)
  const props: Record<string, unknown> = {};
  void props;
  const router = useRouter();
  // SSR 시점에 embed 결정 — useState + useEffect 두번 render 로 인한 깜빡 방지
  const _searchParams = useSearchParams();
  const embed = _searchParams?.get("embed") === "1";
  const next = (flowMap as Record<string, string | null>)[SLUG] || null;
  const [s_all_agree, set_s_all_agree] = React.useState<boolean>(false);
  const [s_term_required_1, set_s_term_required_1] = React.useState<boolean>(false);
  const [s_term_required_2, set_s_term_required_2] = React.useState<boolean>(false);
  const [s_term_optional_1, set_s_term_optional_1] = React.useState<boolean>(false);
  const [s_term_optional_2, set_s_term_optional_2] = React.useState<boolean>(false);
  const _navigateTo = (slug: string) => {
    router.push("/library/preview/" + slug + (embed ? "?embed=1" : ""));
    if (embed && typeof window !== "undefined") {
      window.parent?.postMessage({ type: "preview-nav", slug }, "*");
    }
  };
  const onNext = () => {
    const target = "MBR/dormant-loading";
    if (typeof target === "string" && target.length > 0 && target !== "next") _navigateTo(target);
    else if (next) _navigateTo(next);
  };
  
  return (
    <PageStateContext.Provider value={{ "all-agree": s_all_agree, "term-required-1": s_term_required_1, "term-required-2": s_term_required_2, "term-optional-1": s_term_optional_1, "term-optional-2": s_term_optional_2 }}>
    <div style={embed ? { minHeight: "100vh", background: "#fff", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: 0 } : { minHeight: "100vh", background: "#1f2937", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: 32 }}>
      <div style={embed ? { width: 375, height: 812, background: "var(--semantic-color-background-page-home, #ffffff)", overflow: "hidden", display: "flex", flexDirection: "column" } : { width: 375, height: 812, background: "var(--semantic-color-background-page-home, #ffffff)", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column" }}>
        <div data-component="page/MBR/dormant-terms" style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "var(--foundation-dimension-spacing-none)", paddingTop: "var(--foundation-dimension-spacing-none)", paddingRight: "var(--foundation-dimension-spacing-none)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--foundation-dimension-spacing-none)", width: "100%", height: "var(--foundation-dimension-size-screen-mobile-height)", background: "var(--semantic-color-background-page-sub)", minHeight: "100%" }, height: "100%", overflowY: "auto", overflowX: "hidden" }} onClick={(e) => {
          const t = (e.target as HTMLElement);
          // 1. 헤더 back button → router.back() + 부모 postMessage
          const btnIcon = t.closest<HTMLElement>('[data-component="atom/btn-icon"]');
          if (btnIcon && btnIcon.dataset.id === "btn-back") {
            router.back();
            if (embed && typeof window !== "undefined") window.parent?.postMessage({ type: "preview-nav-back" }, "*");
            return;
          }
          // 1-b. nav 매핑 (GNB / tab-bar 의 menu icon → 외부 page)
          /* no nav */
          // 2. interactive id (data-id) 클릭 → state toggle / sync
          //    parent 로 walk 하면서 state key 매치되는 가장 가까운 data-id 찾음 (자식의 data-id 가 더 안쪽이라 closest 만으론 부족)
          const _stateKeys = new Set<string>(["all-agree","term-required-1","term-required-2","term-optional-1","term-optional-2"]);
          let _walk: HTMLElement | null = t;
          let id: string | undefined = undefined;
          while (_walk) {
            const _did = _walk.dataset?.id;
            if (_did && _stateKeys.has(_did)) { id = _did; break; }
            _walk = _walk.parentElement;
          }
          if (id) {
          if (id === "all-agree") { const _next = !s_all_agree; set_s_all_agree(_next); set_s_term_required_1(_next); set_s_term_required_2(_next); set_s_term_optional_1(_next); set_s_term_optional_2(_next); return; }
          if (id === "term-required-1") { const _next = !s_term_required_1; set_s_term_required_1(_next); set_s_all_agree(_next && s_term_required_2 && s_term_optional_1 && s_term_optional_2); return; }
          if (id === "term-required-2") { const _next = !s_term_required_2; set_s_term_required_2(_next); set_s_all_agree(s_term_required_1 && _next && s_term_optional_1 && s_term_optional_2); return; }
          if (id === "term-optional-1") { const _next = !s_term_optional_1; set_s_term_optional_1(_next); set_s_all_agree(s_term_required_1 && s_term_required_2 && _next && s_term_optional_2); return; }
          if (id === "term-optional-2") { const _next = !s_term_optional_2; set_s_term_optional_2(_next); set_s_all_agree(s_term_required_1 && s_term_required_2 && s_term_optional_1 && _next); return; }
          }
          // 3. sticky-footer 안 atom/btn 클릭 → navigate (condition 충족 시)
          const inSticky = t.closest('[data-component="ogn/sticky-footer-cta"]') || t.closest('[data-component="ogn/sticky-footer"]');
          const isBtn = t.closest('[data-component="atom/btn"]');
          if (inSticky && isBtn) {
            if (s_term_required_1 && s_term_required_2) onNext();
            return;
          }
        }}>
          <StatusBar data-id="status-bar" />
          <Header data-id="header" {...{"title": "휴면 해제"}} />
          <StepIndicator data-id="step" {...{"label": "2 / 3"}} />
          <div data-id="content" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "var(--foundation-dimension-spacing-lg)", paddingTop: "var(--foundation-dimension-spacing-lg)", paddingRight: "var(--foundation-dimension-spacing-none)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--foundation-dimension-spacing-none)", width: "100%", height: "auto", alignSelf: "stretch", flex: "1 1 0%", minWidth: 0 }}>
            <div data-id="headline-wrap" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "var(--foundation-dimension-spacing-lg)", paddingTop: "var(--foundation-dimension-spacing-none)", paddingRight: "var(--semantic-layout-screen-padding-default)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--semantic-layout-screen-padding-default)", width: "100%", height: "auto", alignSelf: "stretch" }}>
              <SectionHeader data-id="section-headline" {...{"headline": "약관이 일부 개정되었어요", "description": "서비스 이용을 재개하기 위해 변경된 약관을 다시 확인해 주세요."}} style={{ alignSelf: "stretch" }} />
              <NoticeCard data-id="revision-notice" {...{"message": "휴면 기간 동안 일부 필수 약관이 개정되었습니다.", "type": "message"}} style={{ alignSelf: "stretch" }} />
            </div>
            <TermList data-id="term-list" style={{ alignSelf: "stretch" }} />
          </div>
          <StickyFooterCta data-id="sticky-footer" {...{"label": "완료"}} style={{ alignSelf: "stretch", position: "sticky", bottom: 0, zIndex: 10 }} />
          <FooterCs data-id="footer-cs" style={{ alignSelf: "stretch", position: "sticky", bottom: 0, zIndex: 10 }} />
        </div>
      </div>
    </div>
    </PageStateContext.Provider>
  );
}
