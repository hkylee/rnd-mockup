// AI 가 반환한 트리 JSON 을 기존 @Genui 의 page spec JSON 형식으로 변환.
// Phase 0 버전: flat 트리를 (status-bar/GNB → content group(MYBEN 카드들) → tab-bar) 구조로 재조립.
// 신규 컴포넌트는 skip (추후 Phase 1 에서 지원).

export type TreeNode = {
  component: string;
  reused?: boolean;
  props?: Record<string, unknown>;
  description?: string;
  children?: TreeNode[];
};

export type AnalyzeTree = {
  screen: {
    name: string;
    description?: string;
    children: TreeNode[];
  };
  newComponents?: { name: string; reason: string; baseOn?: string }[];
  notes?: string;
};

type SpecChild =
  | {
      kind: "ref";
      id: string;
      component: string;
      props?: Record<string, unknown>;
      layoutAlign?: string;
    }
  | {
      kind: "group";
      id: string;
      layoutAlign?: string;
      layout: Record<string, unknown>;
      visual: Record<string, unknown>;
      children: SpecChild[];
    };

function refFrom(child: TreeNode): SpecChild {
  const id = child.component.split("/").pop() || "ref";
  const out: SpecChild = {
    kind: "ref",
    id,
    component: child.component,
  };
  if (child.props && Object.keys(child.props).length > 0) {
    out.props = child.props;
  }
  return out;
}

export function treeToPageSpec(tree: AnalyzeTree) {
  const screen = tree.screen;
  const srcChildren = (screen.children || []).filter((c) => c.reused !== false);

  const before: SpecChild[] = [];
  const content: SpecChild[] = [];
  const after: SpecChild[] = [];

  for (const c of srcChildren) {
    const comp = c.component;
    const ref = refFrom(c);

    if (comp === "ogn/tab-bar") {
      ref.layoutAlign = "STRETCH";
      after.push(ref);
      continue;
    }
    if (comp === "ogn/status-bar" || comp === "ogn/GNB") {
      ref.layoutAlign = "STRETCH";
      before.push(ref);
      continue;
    }
    // 기본: content 영역
    content.push(ref);
  }

  return {
    $schema: "component-spec-v1",
    name: screen.name,
    category: "page",
    description: screen.description || "AI 생성",
    base: {
      layout: {
        mode: "VERTICAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "MIN",
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        itemSpacing: 0,
        width: "{foundation.dimension.size.screen-mobile}",
        height: "HUG",
      },
      visual: {
        cornerRadius: 0,
        fill: "{semantic.color.surface.secondary}",
        stroke: null,
        shadow: null,
      },
      children: [
        ...before,
        {
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
            paddingLeft: "{foundation.dimension.spacing.md}",
            paddingRight: "{foundation.dimension.spacing.md}",
            itemSpacing: "{foundation.dimension.spacing.md}",
            width: "{foundation.dimension.size.screen-mobile}",
            height: "HUG",
          },
          visual: { cornerRadius: 0, fill: null, stroke: null, shadow: null },
          children: content,
        },
        ...after,
      ],
    },
  };
}
