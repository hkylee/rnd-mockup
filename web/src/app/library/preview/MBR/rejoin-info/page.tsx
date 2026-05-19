// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: page/MBR/rejoin-info
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
import { InfoRow } from "@/components/library/mol/info-row";
import { StickyFooterCta } from "@/components/library/ogn/sticky-footer-cta";
import { FooterCs } from "@/components/library/ogn/footer-cs";

const SLUG = "MBR/rejoin-info";

export default function PreviewPage() {
  // page 안 inline text 의 expose 는 component 가 아니라 page scope — props 변수 정의 (모두 undefined 라 fallback default 적용)
  const props: Record<string, unknown> = {};
  void props;
  const router = useRouter();
  // SSR 시점에 embed 결정 — useState + useEffect 두번 render 로 인한 깜빡 방지
  const _searchParams = useSearchParams();
  const embed = _searchParams?.get("embed") === "1";
  const next = (flowMap as Record<string, string | null>)[SLUG] || null;

  const _navigateTo = (slug: string) => {
    router.push("/library/preview/" + slug + (embed ? "?embed=1" : ""));
    if (embed && typeof window !== "undefined") {
      window.parent?.postMessage({ type: "preview-nav", slug }, "*");
    }
  };
  const onNext = () => {
    const target = next;
    if (typeof target === "string" && target.length > 0 && target !== "next") _navigateTo(target);
    else if (next) _navigateTo(next);
  };
  
  return (
    <PageStateContext.Provider value={{  }}>
    <div style={embed ? { minHeight: "100vh", background: "#fff", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: 0 } : { minHeight: "100vh", background: "#1f2937", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: 32 }}>
      <div style={embed ? { width: 375, height: 812, background: "var(--semantic-color-background-page-home, #ffffff)", overflow: "hidden", display: "flex", flexDirection: "column" } : { width: 375, height: 812, background: "var(--semantic-color-background-page-home, #ffffff)", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column" }}>
        <div data-component="page/MBR/rejoin-info" style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "var(--foundation-dimension-spacing-none)", paddingTop: "var(--foundation-dimension-spacing-none)", paddingRight: "var(--foundation-dimension-spacing-none)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--foundation-dimension-spacing-none)", width: "100%", height: "var(--foundation-dimension-size-screen-mobile-height)", background: "var(--semantic-color-background-page-sub)", minHeight: "100%" }, height: "100%", overflowY: "auto", overflowX: "hidden" }} onClick={(e) => {
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
          const _stateKeys = new Set<string>([]);
          let _walk: HTMLElement | null = t;
          let id: string | undefined = undefined;
          while (_walk) {
            const _did = _walk.dataset?.id;
            if (_did && _stateKeys.has(_did)) { id = _did; break; }
            _walk = _walk.parentElement;
          }
          if (id) {
          /* no states */
          }
          // 3. sticky-footer 안 atom/btn 클릭 → navigate (condition 충족 시)
          const inSticky = t.closest('[data-component="ogn/sticky-footer-cta"]') || t.closest('[data-component="ogn/sticky-footer"]');
          const isBtn = t.closest('[data-component="atom/btn"]');
          if (inSticky && isBtn) {
            if (true) onNext();
            return;
          }
        }}>
          <StatusBar data-id="status-bar" />
          <Header data-id="header" {...{"title": "재가입"}} />
          <StepIndicator data-id="step" {...{"label": "2 / 5"}} />
          <div data-id="content" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "var(--foundation-dimension-spacing-lg)", paddingTop: "var(--foundation-dimension-spacing-lg)", paddingRight: "var(--foundation-dimension-spacing-none)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--foundation-dimension-spacing-none)", width: "100%", height: "auto", alignSelf: "stretch", flex: "1 1 0%", minWidth: 0 }}>
            <div data-id="main-wrap" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "var(--foundation-dimension-spacing-lg)", paddingTop: "var(--foundation-dimension-spacing-none)", paddingRight: "var(--semantic-layout-screen-padding-default)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--semantic-layout-screen-padding-default)", width: "100%", height: "auto", alignSelf: "stretch" }}>
              <SectionHeader data-id="section-headline" {...{"headline": "정보를 확인해 주세요", "description": "이전 사용 정보 일부를 그대로 사용하실 수 있어요."}} style={{ alignSelf: "stretch" }} />
              <NoticeCard data-id="restore-notice" {...{"message": "다음 정보는 이전 가입 정보에서 자동 복원됩니다. 변경하려면 [수정] 을 눌러주세요.", "type": "message"}} style={{ alignSelf: "stretch" }} />
              <InfoRow data-id="row-name" {...{"label": "이름", "value": "홍길동"}} style={{ alignSelf: "stretch" }} />
              <InfoRow data-id="row-email" {...{"label": "이메일", "value": "user@example.com"}} style={{ alignSelf: "stretch" }} />
              <InfoRow data-id="row-phone" {...{"label": "휴대폰 번호", "value": "010-XXXX-XXXX"}} style={{ alignSelf: "stretch" }} />
            </div>
          </div>
          <StickyFooterCta data-id="sticky-footer" {...{"label": "다음"}} style={{ alignSelf: "stretch", position: "sticky", bottom: 0, zIndex: 10 }} />
          <FooterCs data-id="footer-cs" style={{ alignSelf: "stretch", position: "sticky", bottom: 0, zIndex: 10 }} />
        </div>
      </div>
    </div>
    </PageStateContext.Provider>
  );
}
