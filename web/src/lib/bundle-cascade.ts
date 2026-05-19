// Cascade 번들 빌더 — 신규 component spec + page spec 을 한 번의 Run 으로 처리.
// generator-core 가 ALL_SPECS 를 순차로 await 처리 (component → page).

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { sharedRoot } from "./paths";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

const CATEGORY_ORDER = ["component", "atom", "mol", "ogn", "page"] as const;

function categoryRank(name: string): number {
  const first = name.split("/")[0];
  const idx = CATEGORY_ORDER.indexOf(first as typeof CATEGORY_ORDER[number]);
  return idx === -1 ? 99 : idx;
}

// spec 안 모든 kind:"ref" 자식의 component 이름 수집 (재귀)
function collectRefDeps(node: unknown, out: Set<string>): void {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const c of node) collectRefDeps(c, out);
    return;
  }
  const obj = node as Record<string, unknown>;
  if (obj.kind === "ref" && typeof obj.component === "string") {
    out.add(obj.component);
  }
  for (const v of Object.values(obj)) collectRefDeps(v, out);
}

// 카테고리 + ref 의존성 기반 topo sort.
function topoSortByCascade(specs: Spec[]): Spec[] {
  const byName = new Map<string, Spec>();
  for (const s of specs) if (s?.name) byName.set(s.name, s);

  // 카테고리 순서로 seed
  const seeds = specs.slice().sort((a, b) => {
    const ra = categoryRank(a?.name || "");
    const rb = categoryRank(b?.name || "");
    if (ra !== rb) return ra - rb;
    return (a?.name || "").localeCompare(b?.name || "");
  });

  const visited = new Set<string>();
  const visiting = new Set<string>();
  const result: Spec[] = [];

  function visit(spec: Spec): void {
    const name = spec?.name;
    if (!name) {
      result.push(spec);
      return;
    }
    if (visited.has(name)) return;
    if (visiting.has(name)) return; // cycle — skip
    visiting.add(name);
    const deps = new Set<string>();
    collectRefDeps(spec?.base, deps);
    for (const dep of deps) {
      const depSpec = byName.get(dep);
      if (depSpec && depSpec !== spec) visit(depSpec);
    }
    visiting.delete(name);
    visited.add(name);
    result.push(spec);
  }

  for (const s of seeds) visit(s);
  return result;
}

export type CascadeBundleOptions = {
  newSpecs: Spec[];          // 신규 컴포넌트 spec (atom/mol/ogn)
  pageSpec?: Spec | null;    // 페이지 spec (선택)
};

export function buildCascadeBundle(opts: CascadeBundleOptions): string {
  const root = sharedRoot();
  const dsPath = resolve(root, "skt-design-system.json");
  const corePath = resolve(root, "scripter", "generator-core.js");
  const ds = JSON.parse(readFileSync(dsPath, "utf8"));
  const core = readFileSync(corePath, "utf8");

  // 의존성 순서 정렬: 카테고리 순서 + intra-category ref topo sort
  const collected: Spec[] = [...opts.newSpecs];
  if (opts.pageSpec) collected.push(opts.pageSpec);
  const allSpecs = topoSortByCascade(collected);

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — Cascade bundle (web)",
    "// 신규 컴포넌트 + 페이지 일괄 빌드",
    "// 생성: " + new Date().toISOString(),
    "// 총 " + allSpecs.length + " specs",
    "// Paste into Figma Scripter → Run ▶",
    "// Requires: sync-tokens 가 먼저 실행되어 있어야 Variable 바인딩 작동",
    "// =============================================",
    "",
  ].join("\n");

  return [
    banner,
    "const DS_TOKENS = " + JSON.stringify(ds, null, 2) + ";",
    "",
    "const ALL_SPECS = " + JSON.stringify(allSpecs, null, 2) + ";",
    "",
    core,
    "",
    "// ---------- Orchestrator ----------",
    "async function ensureCategoryPages() {",
    "  const needed = ['Atom', 'Molecule', 'Organism'];",
    "  for (const n of needed) {",
    "    let p = figma.root.children.find(function (x) { return x.name === n; });",
    "    if (!p) {",
    "      p = figma.createPage();",
    "      p.name = n;",
    "      console.log('페이지 자동 생성: ' + n);",
    "    }",
    "  }",
    "}",
    "",
    "async function runCascade() {",
    "  await ensureCategoryPages();",
    "  console.log('=== Cascade 시작 — ' + ALL_SPECS.length + ' specs ===');",
    "  let ok = 0, fail = 0;",
    "  const failed = [];",
    "  for (let i = 0; i < ALL_SPECS.length; i++) {",
    "    const spec = ALL_SPECS[i];",
    "    try {",
    "      console.log('  [' + (i + 1) + '/' + ALL_SPECS.length + '] ' + spec.name);",
    "      await generateComponentSet(spec, DS_TOKENS);",
    "      ok++;",
    "    } catch (e) {",
    "      fail++;",
    "      failed.push(spec.name + ' — ' + (e && e.message ? e.message : e));",
    "      console.error('    실패:', spec.name, e);",
    "    }",
    "  }",
    "  console.log('=== 완료 — ok ' + ok + ' / fail ' + fail + ' ===');",
    "  if (failed.length) console.log('실패 목록:', failed);",
    "  figma.notify('✓ ' + ok + ' ok / ' + fail + ' failed');",
    "}",
    "",
    "runCascade().catch(function (e) {",
    "  console.error(e);",
    "  figma.notify('에러: ' + (e && e.message ? e.message : e), { error: true });",
    "});",
    "",
  ].join("\n");
}
