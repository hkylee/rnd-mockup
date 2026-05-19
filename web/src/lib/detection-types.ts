// /api/analyze 응답 타입 + 편집용 flat 뷰

export type BBox = { x: number; y: number; w: number; h: number };

export type MatchStatus = "reused" | "new" | "conflict";

export type MatchInfo = {
  status: MatchStatus;
  ref?: string;
  confidence?: "high" | "medium" | "low";
  reason?: string;
};

export type AnalyzeTreeNode = {
  component: string;
  bbox?: BBox;
  match?: MatchInfo;
  props?: Record<string, unknown>;
  description?: string;
  children?: AnalyzeTreeNode[];
};

export type AnalyzeScreen = {
  name: string;
  moduleCode?: string;
  moduleCodeConfidence?: "high" | "medium" | "low";
  moduleCandidates?: string[];
  description?: string;
  bbox?: BBox;
  children: AnalyzeTreeNode[];
};

export type AnalyzeTree = {
  screen: AnalyzeScreen;
  newComponents?: { name: string; category?: string; reason?: string; baseOn?: string }[];
  notes?: string;
};

// Flat 으로 펼친 detection 노드 (UI 선택/편집 용)
export type DetectionNode = {
  path: string;             // "0.1.2" 형식
  depth: number;
  component: string;
  bbox?: BBox;
  match?: MatchInfo;
  props?: Record<string, unknown>;
  description?: string;
  hasChildren: boolean;
};

export function flattenTree(screen: AnalyzeScreen): DetectionNode[] {
  const out: DetectionNode[] = [];
  function walk(nodes: AnalyzeTreeNode[], prefix: number[]) {
    nodes.forEach((n, i) => {
      const path = [...prefix, i].join(".");
      out.push({
        path,
        depth: prefix.length,
        component: n.component,
        bbox: n.bbox,
        match: n.match,
        props: n.props,
        description: n.description,
        hasChildren: Array.isArray(n.children) && n.children.length > 0,
      });
      if (n.children) walk(n.children, [...prefix, i]);
    });
  }
  walk(screen.children, []);
  return out;
}
