// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: page/PRDD/case1-standalone
"use client";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import flowMap from "@/lib/page-flow.json";
import { PageStateContext } from "@/components/library/_state-context";
import { StatusBar } from "@/components/library/ogn/status-bar";
import { Header } from "@/components/library/ogn/header";
import { BannerPadded } from "@/components/library/mol/banner-padded";
import { Gallery } from "@/components/library/ogn/PRDD/gallery";
import { ProductInfo } from "@/components/library/ogn/PRDD/product-info";
import { DiscountBox } from "@/components/library/ogn/PRDD/discount-box";
import { Accordion } from "@/components/library/mol/accordion";
import { Tab } from "@/components/library/ogn/tab";
import { RecommendList } from "@/components/library/ogn/PRDD/recommend-list";
import { FooterCta } from "@/components/library/ogn/PRDD/footer-cta";

const SLUG = "PRDD/case1-standalone";

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
        <div data-component="page/PRDD/case1-standalone" style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "var(--foundation-dimension-spacing-none)", paddingTop: "var(--foundation-dimension-spacing-none)", paddingRight: "var(--foundation-dimension-spacing-none)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--foundation-dimension-spacing-none)", width: "100%", height: "var(--foundation-dimension-size-screen-mobile-height)", background: "var(--semantic-color-background-page-sub)", minHeight: "100%" }, height: "100%", overflowY: "auto", overflowX: "hidden" }} onClick={(e) => {
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
          <Header data-id="header" {...{"title": "without", "actions": "share-cart"}} />
          <div data-id="content" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "var(--semantic-layout-card-gap)", paddingTop: "var(--foundation-dimension-spacing-none)", paddingRight: "var(--foundation-dimension-spacing-none)", paddingBottom: "var(--foundation-dimension-spacing-none)", paddingLeft: "var(--foundation-dimension-spacing-none)", width: "100%", height: "auto", alignSelf: "stretch", flex: "1 1 0%", minWidth: 0 }}>
            <BannerPadded data-id="notice-banner" {...{"message": "공지사항 — 상품 관련 중요 안내입니다."}} />
            <Gallery data-id="gallery" />
            <ProductInfo data-id="product-info" />
            <DiscountBox data-id="discount-box" />
            <Accordion data-id="accordion-shipping" {...{"title": "배송 정보", "body": "기본 배송비 3,000원 / 50,000원 이상 무료배송"}} style={{ alignSelf: "stretch" }} />
            <BannerPadded data-id="promo-banner" {...{"message": "지금 구독하면 첫 달 50% 할인!"}} />
            <Tab data-id="content-tab" {...{"active": "0"}} />
            <span data-id="tab-content" className="typography-body" style={{ color: "var(--semantic-color-text-secondary)", alignSelf: "stretch" }}>{props["tab-content"] ?? "상품 정보 콘텐츠 영역 — 상세 설명이 들어가는 블록입니다."}</span>
            <RecommendList data-id="recommend-list" />
            <Accordion data-id="accordion-inquiry" {...{"title": "상품 문의", "body": "등록된 상품 문의 내역이 여기에 표시됩니다."}} style={{ alignSelf: "stretch" }} />
            <Accordion data-id="accordion-other" {...{"title": "기타 정보", "body": "상품 정보 고시 및 법적 고지사항 영역입니다."}} style={{ alignSelf: "stretch" }} />
          </div>
          <FooterCta data-id="footer-cta" style={{ position: "sticky", bottom: 0, zIndex: 10 }} />
        </div>
      </div>
    </div>
    </PageStateContext.Provider>
  );
}
