// 기능내역서 분석 결과(FeatureRow[]) 에서 screen id 단위로 page spec 자동 생성.
// 3-zone 구조: status-bar (top) → GNB (top) → content group (middle) → tab-bar / sticky-footer (bottom)

import type { FeatureRow } from "./spec-analysis-types";

type CandidateInput = {
  name: string;
  category: "page";
  spec: Record<string, unknown>;
  description?: string;
  reason?: string;
};

// "TU-MY-AGR-MO-02-BS-001" → "tu-my-agr-mo-02-bs-001"
function slugifyScreenId(screenId: string): string {
  return screenId
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function inferPageName(screenId: string, moduleCode: string, fallback: string): string {
  const mod = (moduleCode || "UNKNOWN").trim();
  const slug = slugifyScreenId(screenId || fallback);
  return `page/${mod}/${slug}`;
}

// chrome 분류 — 이름 정규화해서 비교
type ChromeRole = "status-bar" | "gnb" | "tab-bar" | "sticky-footer" | "bottomsheet";

function chromeRoleOf(name: string): ChromeRole | null {
  const last = name.split("/").pop()?.toLowerCase().replace(/_/g, "-") || "";
  if (last === "status-bar" || last === "statusbar") return "status-bar";
  if (last === "gnb" || last === "header" || last === "top-bar" || last === "topbar") return "gnb";
  if (last === "tab-bar" || last === "tabbar" || last === "bottom-nav" || last === "bottom-navigation") return "tab-bar";
  if (last === "sticky-footer" || last === "footer-cta" || last === "bottom-cta") return "sticky-footer";
  if (last === "bottomsheet" || last === "bottom-sheet" || last === "modal" || last === "dialog") return "bottomsheet";
  return null;
}

export type GeneratedPage = {
  pageName: string;
  screenId: string;
  moduleCode: string;
  features: FeatureRow[];
  componentNames: string[];     // 모든 컴포넌트 이름 (중복 제거, chrome 포함)
  candidate: CandidateInput;
};

export function buildPagesFromFeatures(
  features: FeatureRow[],
  extraComponentNames: string[] = []  // 추론된 essentials 도 포함
): GeneratedPage[] {
  const groups = new Map<string, FeatureRow[]>();
  for (const f of features) {
    const key = (f.screenId || f.specId || "unknown").trim();
    if (!key) continue;
    const arr = groups.get(key) || [];
    arr.push(f);
    groups.set(key, arr);
  }

  const out: GeneratedPage[] = [];
  for (const [screenId, fs] of groups) {
    const moduleCode = fs.find((f) => f.module)?.module || "UNKNOWN";
    const pageName = inferPageName(screenId, moduleCode, fs[0].specId);

    // 1. 모든 컴포넌트 이름 추출 (suggested 우선, 중복 제거, 등장 순서 유지)
    const seen = new Set<string>();
    const allNames: string[] = [];
    for (const f of fs) {
      for (const c of f.components) {
        const name = c.suggested || c.name;
        if (!seen.has(name)) {
          seen.add(name);
          allNames.push(name);
        }
      }
    }
    for (const name of extraComponentNames) {
      if (!seen.has(name)) {
        seen.add(name);
        allNames.push(name);
      }
    }

    // 2. chrome 분류 (status-bar / GNB / tab-bar / sticky-footer / bottomsheet 는 zone 별로 배치)
    const zones: Record<ChromeRole, string | null> & { content: string[] } = {
      "status-bar": null,
      gnb: null,
      "tab-bar": null,
      "sticky-footer": null,
      bottomsheet: null,
      content: [],
    };
    for (const name of allNames) {
      const role = chromeRoleOf(name);
      if (role && !zones[role]) {
        zones[role] = name;
      } else {
        zones.content.push(name);
      }
    }

    // 3. children 조립
    // BottomSheet 가 chrome 으로 잡히면 페이지를 "BottomSheet 올라온 상태" 의 미리보기로 구성:
    // status-bar + dim 깔린 backdrop (남은 공간 채움) + 하단 BottomSheet
    // 컨텐츠 컴포넌트들은 ogn/bottomsheet spec 안의 children 에 들어 있어야 함 (페이지 레벨 중복 방지)
    const isBottomSheetScreen = !!zones.bottomsheet;
    const children: unknown[] = [];

    if (isBottomSheetScreen) {
      // BottomSheet 화면 — open state 미리보기
      // 레이어 z-order (children 배열 순서): status-bar(bottom) → dim(middle, absolute full-bleed) → bottomsheet(top)
      // status-bar 와 bottomsheet 는 auto-layout flow (page 가 SPACE_BETWEEN 으로 위/아래 고정)
      // dim 은 absolute positioning + 반투명 — 화면 전체 덮으면서 status-bar 도 가림

      // Top: status-bar (flow)
      children.push({
        kind: "ref",
        id: "status-bar",
        component: zones["status-bar"] || "ogn/status-bar",
        layoutAlign: "STRETCH",
      });

      // Middle: dim (absolute, 전체 덮음, 반투명)
      // mode: NONE 일 때는 auto-layout 전용 속성 (sizingMode/alignItems/padding/itemSpacing) 안 넣음 — Figma API 가 throw
      children.push({
        kind: "group",
        id: "dim",
        layoutPositioning: "ABSOLUTE",
        x: 0,
        y: 0,
        constraints: { horizontal: "STRETCH", vertical: "STRETCH" },
        layout: {
          mode: "NONE",
          width: "{foundation.dimension.size.screen-mobile}",
          height: 812,
        },
        visual: {
          cornerRadius: 0,
          fill: "{semantic.color.background.overlay}",
          opacity: 0.4,
          stroke: null,
          shadow: null,
        },
        children: [],
      });

      // Bottom: bottomsheet (flow, dim 위에 z-order)
      children.push({
        kind: "ref",
        id: "bottomsheet",
        component: zones.bottomsheet,
        layoutAlign: "STRETCH",
      });
    } else {
      // 일반 페이지 — chrome zone 별 배치
      if (zones["status-bar"]) {
        children.push({
          kind: "ref",
          id: "status-bar",
          component: zones["status-bar"],
          layoutAlign: "STRETCH",
        });
      }
      if (zones.gnb) {
        children.push({
          kind: "ref",
          id: "gnb",
          component: zones.gnb,
          layoutAlign: "STRETCH",
        });
      }

      // content group 가운데 (가로 24 padding default, 세로 hug)
      // 가로 24 = screen-padding-default (홈 외 모든 페이지 baseline)
      children.push({
        kind: "group",
        id: "content",
        layoutAlign: "STRETCH",
        layout: {
          mode: "VERTICAL",
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "FIXED",
          primaryAxisAlignItems: "MIN",
          counterAxisAlignItems: "CENTER",
          paddingTop: "{foundation.dimension.spacing.md}",
          paddingBottom: "{foundation.dimension.spacing.md}",
          paddingLeft: "{semantic.layout.screen-padding-default}",
          paddingRight: "{semantic.layout.screen-padding-default}",
          itemSpacing: "{foundation.dimension.spacing.md}",
          width: "{foundation.dimension.size.screen-mobile}",
          height: "HUG",
        },
        visual: { cornerRadius: 0, fill: null, stroke: null, shadow: null },
        children: zones.content.map((name) => ({
          kind: "ref",
          id: name.split("/").pop() || "ref",
          component: name,
          layoutAlign: "STRETCH",
        })),
      });

      if (zones["sticky-footer"]) {
        children.push({
          kind: "ref",
          id: "sticky-footer",
          component: zones["sticky-footer"],
          layoutAlign: "STRETCH",
        });
      }
      if (zones["tab-bar"]) {
        children.push({
          kind: "ref",
          id: "tab-bar",
          component: zones["tab-bar"],
          layoutAlign: "STRETCH",
        });
      }
    }

    // 4. page spec 작성
    // BottomSheet 화면: 모바일 전체 높이 (FIXED 812) + SPACE_BETWEEN 으로 status-bar 상단·bottomsheet 하단 고정.
    // dim 은 absolute 라 flow 에 영향 없음.
    // 일반 페이지: 컨텐츠 길이만큼 HUG.
    const spec = {
      $schema: "component-spec-v1",
      name: pageName,
      category: "page",
      description: `자동 생성 — ${screenId} (${fs.length}개 기능)`,
      base: {
        layout: {
          mode: "VERTICAL",
          primaryAxisSizingMode: isBottomSheetScreen ? "FIXED" : "AUTO",
          counterAxisSizingMode: "FIXED",
          primaryAxisAlignItems: isBottomSheetScreen ? "SPACE_BETWEEN" : "MIN",
          counterAxisAlignItems: "MIN",
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          itemSpacing: 0,
          width: "{foundation.dimension.size.screen-mobile}",
          height: isBottomSheetScreen ? 812 : "HUG",
        },
        visual: {
          cornerRadius: 0,
          fill: "{semantic.color.surface.secondary}",
          stroke: null,
          shadow: null,
        },
        children,
      },
    };

    out.push({
      pageName,
      screenId,
      moduleCode,
      features: fs,
      componentNames: allNames,
      candidate: {
        name: pageName,
        category: "page",
        spec,
        description: `${moduleCode} · ${screenId} (${fs.length}개 기능: ${fs
          .map((f) => f.name)
          .join(", ")
          .slice(0, 80)})`,
        reason: "기능내역서에서 자동 생성된 page spec — screen id 별 그룹핑",
      },
    });
  }

  return out;
}
