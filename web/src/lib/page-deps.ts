// page spec → 재귀적으로 의존하는 component 추출.
// "이 화면 cascade 빌드" 시 어떤 컴포넌트가 필요한지 계산.

import { collectAllSpecs, type CollectedSpec, type SpecCategory } from "./collect-specs";

function collectRefNames(node: unknown, out: Set<string>): void {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const c of node) collectRefNames(c, out);
    return;
  }
  const obj = node as Record<string, unknown>;
  if (obj.kind === "ref" && typeof obj.component === "string") {
    out.add(obj.component);
  }
  for (const v of Object.values(obj)) collectRefNames(v, out);
}

export type PageDeps = {
  page: CollectedSpec;
  components: CollectedSpec[];
  /** 누락된 ref (카탈로그에 없음) — 진단용 */
  missing: string[];
};

/**
 * 주어진 page name 의 모든 ref 의존성을 재귀적으로 수집.
 * 결과는 카테고리별로 분류 (atom · mol · ogn).
 */
export function getPageDeps(pageName: string, allSpecs?: CollectedSpec[]): PageDeps | null {
  const specs = allSpecs ?? collectAllSpecs();
  const byName = new Map<string, CollectedSpec>();
  for (const s of specs) byName.set(s.name, s);

  const page = byName.get(pageName);
  if (!page || page.category !== "page") return null;

  const visited = new Set<string>();
  const missing = new Set<string>();
  const queue: string[] = [];

  // page 의 직접 ref 부터
  const direct = new Set<string>();
  collectRefNames(page.spec, direct);
  for (const d of direct) queue.push(d);

  // icon / logo 는 SVG 직접 import 산물이라 component-specs 에 JSON 이 없음 (bundle.js --icon 으로 빌드).
  // page 부분 cascade 빌드 범위 밖 — missing 으로 표시하지 않고 그냥 skip.
  const isIconLike = (n: string) => n.startsWith("atom/icon/") || n.startsWith("atom/logo/");

  while (queue.length) {
    const name = queue.shift()!;
    if (visited.has(name)) continue;
    visited.add(name);
    const spec = byName.get(name);
    if (!spec) {
      if (!isIconLike(name)) missing.add(name);
      continue;
    }
    // 자식 ref 도 재귀
    const childRefs = new Set<string>();
    collectRefNames(spec.spec, childRefs);
    for (const c of childRefs) if (!visited.has(c)) queue.push(c);
  }

  const components: CollectedSpec[] = [];
  for (const name of visited) {
    const spec = byName.get(name);
    if (!spec) continue;
    if (spec.category !== "page") components.push(spec);
  }
  components.sort((a, b) => a.name.localeCompare(b.name));

  return {
    page,
    components,
    missing: [...missing].sort(),
  };
}

export type RunLevel = "component" | "all";

/**
 * level 에 따라 page 의존성을 누적 필터.
 * - component: 컴포넌트만
 * - all:       컴포넌트 + page
 */
export function filterDepsByLevel(deps: PageDeps, level: RunLevel): {
  specs: CollectedSpec[];
  includePage: boolean;
} {
  const specs: CollectedSpec[] = [...deps.components];
  if (level === "component") return { specs, includePage: false };
  // all
  return { specs, includePage: true };
}
