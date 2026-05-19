// spec JSON에서 component ref / design token 의존성을 추출하고 역참조 그래프를 빌드.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { sharedRoot } from "./paths";

export type ResolvedRef = {
  raw: string;              // 원본 ref 이름 (e.g. ".Button")
  specName: string | null;  // 매핑된 spec name (e.g. "atom/btn"), null=미매핑
  category: "atom" | "mol" | "ogn" | null;
};

export type SpecDeps = {
  refs: ResolvedRef[];   // 이 컴포넌트가 사용하는 컴포넌트 ref
  tokens: string[];      // 이 컴포넌트가 사용하는 design token
  usedBy: string[];      // 이 컴포넌트를 참조하는 다른 spec 이름
};

function walkJson(dir: string, acc: string[]) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) walkJson(full, acc);
    else if (e.endsWith(".json")) acc.push(full);
  }
}

// .PascalCase → kebab-case
function toKebab(name: string): string {
  return name
    .replace(/^\./, "")
    .replace(/([A-Z])/g, (m, c, i) => (i > 0 ? "-" : "") + c.toLowerCase());
}

// Figma 컴포넌트명 → spec name 수동 매핑
const MANUAL_MAP: Record<string, string> = {
  ".Ico": "atom/icon",
  ".Button": "atom/btn",
  ".ButtonText": "atom/btn-text",
  ".CheckboxItem": "atom/checkbox",
  ".RadioItem": "atom/radio",
  ".ChipImageItem": "atom/chip-image",
  ".ThumbnailItem": "mol/thumb-item",
  ".BadgeIcon": "mol/badge-icon",
  ".RadioText": "mol/radio-text",
};

let _knownSpecs: Set<string> | null = null;

function knownSpecs(): Set<string> {
  if (_knownSpecs) return _knownSpecs;
  _knownSpecs = new Set<string>();
  const files: string[] = [];
  walkJson(join(sharedRoot(), "component-specs"), files);
  for (const fp of files) {
    try {
      const json = JSON.parse(readFileSync(fp, "utf8"));
      if (typeof json.name === "string") _knownSpecs.add(json.name);
    } catch { /* skip */ }
  }
  return _knownSpecs;
}

function resolveRef(raw: string): ResolvedRef {
  if (MANUAL_MAP[raw]) {
    const n = MANUAL_MAP[raw];
    const cat = n.split("/")[0] as ResolvedRef["category"];
    return { raw, specName: n, category: cat };
  }

  const specs = knownSpecs();
  const kebab = toKebab(raw);

  for (const tier of ["atom", "mol", "ogn"] as const) {
    if (specs.has(`${tier}/${kebab}`)) return { raw, specName: `${tier}/${kebab}`, category: tier };
  }

  // suffix 제거 후 재시도
  const trimmed = kebab.replace(/-(item|text|logo|bar)$/, "");
  if (trimmed !== kebab) {
    for (const tier of ["atom", "mol", "ogn"] as const) {
      if (specs.has(`${tier}/${trimmed}`)) return { raw, specName: `${tier}/${trimmed}`, category: tier };
    }
  }

  return { raw, specName: null, category: null };
}

function extractFromNode(node: unknown, refs: Set<string>, tokens: Set<string>) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) { node.forEach(v => extractFromNode(v, refs, tokens)); return; }
  const o = node as Record<string, unknown>;

  if (o.kind === "ref" && typeof o.component === "string") refs.add(o.component);

  for (const [key, val] of Object.entries(o)) {
    if (key === "$schema") continue;
    if (typeof val === "string") {
      const matches = val.match(/\{((?:foundation|component|semantic)\.[^}]+)\}/g);
      if (matches) matches.forEach(m => tokens.add(m.slice(1, -1)));
    } else if (val && typeof val === "object") {
      extractFromNode(val, refs, tokens);
    }
  }
}

type GraphEntry = { rawRefs: string[]; tokens: string[] };
let _graph: Map<string, GraphEntry> | null = null;

function buildGraph(): Map<string, GraphEntry> {
  if (_graph) return _graph;
  _graph = new Map<string, GraphEntry>();
  const files: string[] = [];
  walkJson(join(sharedRoot(), "component-specs"), files);
  for (const fp of files) {
    try {
      const json = JSON.parse(readFileSync(fp, "utf8"));
      if (typeof json.name !== "string") continue;
      const refs = new Set<string>();
      const tokens = new Set<string>();
      extractFromNode(json, refs, tokens);
      _graph.set(json.name, { rawRefs: Array.from(refs), tokens: Array.from(tokens) });
    } catch { /* skip */ }
  }
  return _graph;
}

export function getSpecDeps(specName: string): SpecDeps {
  const graph = buildGraph();
  const entry = graph.get(specName);

  const seenRaws = new Set<string>();
  const refs: ResolvedRef[] = [];
  for (const raw of entry?.rawRefs ?? []) {
    if (seenRaws.has(raw)) continue;
    seenRaws.add(raw);
    refs.push(resolveRef(raw));
  }

  const usedBy: string[] = [];
  for (const [name, e] of graph.entries()) {
    if (name === specName) continue;
    if (e.rawRefs.some(r => resolveRef(r).specName === specName)) usedBy.push(name);
  }

  return { refs, tokens: entry?.tokens ?? [], usedBy };
}
