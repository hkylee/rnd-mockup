// 컴포넌트 카탈로그 — shared/component-specs/**/*.json 자동 crawl 로 생성.
// AI 프롬프트 inject 용. 신규 컴포넌트 추가 시 mockup/component-specs 만 갱신하면 자동 반영.

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { resolve, join } from "node:path";
import { sharedRoot } from "./paths";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

let cached: string | null = null;

function listSpecs(dir: string, out: string[]): void {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) {
      listSpecs(p, out);
    } else if (entry.endsWith(".json")) {
      out.push(p);
    }
  }
}

// spec 의 variants axes 요약 (예: "type=primary|secondary, state=default|pressed")
function variantsSummary(spec: Spec): string {
  const axes = spec?.variants?.axes;
  if (!Array.isArray(axes) || axes.length === 0) return "";
  return axes
    .map((a: { name?: string; values?: string[] }) =>
      a?.name && Array.isArray(a.values) ? `${a.name}=${a.values.join("|")}` : ""
    )
    .filter(Boolean)
    .join(", ");
}

// children 의 ref 기반 요약 (어떤 컴포넌트들을 조합하는지)
function refsSummary(node: Spec, out: Set<string>): void {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const c of node) refsSummary(c, out);
    return;
  }
  if (node.kind === "ref" && typeof node.component === "string") {
    out.add(node.component);
  }
  for (const v of Object.values(node)) refsSummary(v, out);
}

// 한 spec → 한 줄 catalog entry
function specToLine(spec: Spec): string {
  const name = spec?.name || "?";
  const desc = (spec?.description || "").replace(/\n/g, " ").slice(0, 100);
  const v = variantsSummary(spec);
  const refs = new Set<string>();
  refsSummary(spec?.base?.children, refs);
  const refsList = Array.from(refs).slice(0, 5);

  const parts: string[] = [`- ${name}`];
  if (desc) parts.push(`— ${desc}`);
  const meta: string[] = [];
  if (v) meta.push(`variants: ${v}`);
  if (refsList.length > 0) meta.push(`refs: ${refsList.join(", ")}${refs.size > 5 ? "…" : ""}`);
  if (meta.length > 0) parts.push(`(${meta.join(" / ")})`);
  return parts.join(" ");
}

// 카테고리/모듈별 그룹핑
function groupKey(name: string): string {
  const segs = name.split("/");
  const cat = segs[0]; // atom | mol | ogn | page
  if (cat === "atom") {
    if (segs[1] === "icon") return "ATOM — icon";
    if (segs[1] === "logo") return "ATOM — logo";
    return "ATOM";
  }
  if (cat === "mol") return "MOLECULE";
  if (cat === "ogn") {
    if (segs.length >= 3) return `ORGANISM — ${segs[1]} 모듈`;
    return "ORGANISM (공통)";
  }
  if (cat === "page") {
    if (segs.length >= 3) return `PAGE — ${segs[1]} 모듈`;
    return "PAGE";
  }
  return "기타";
}

const GROUP_ORDER = [
  "ATOM",
  "ATOM — icon",
  "ATOM — logo",
  "MOLECULE",
  "ORGANISM (공통)",
  "ORGANISM — MYBEN 모듈",
  "ORGANISM — PRDD 모듈",
  "PAGE",
  "PAGE — MYBEN 모듈",
  "PAGE — PRDD 모듈",
  "기타",
];

function buildCatalog(): string {
  const root = resolve(sharedRoot(), "component-specs");
  const files: string[] = [];
  listSpecs(root, files);

  const specs: Spec[] = [];
  for (const f of files) {
    try {
      specs.push(JSON.parse(readFileSync(f, "utf8")));
    } catch {
      // skip invalid
    }
  }

  const groups = new Map<string, string[]>();
  for (const s of specs) {
    const key = groupKey(s?.name || "");
    const arr = groups.get(key) || [];
    arr.push(specToLine(s));
    groups.set(key, arr);
  }

  // 그룹별로 spec 이름 알파벳 정렬
  for (const [k, list] of groups) {
    list.sort();
    groups.set(k, list);
  }

  // 그룹 순서 적용
  const orderedKeys = [
    ...GROUP_ORDER.filter((k) => groups.has(k)),
    ...Array.from(groups.keys()).filter((k) => !GROUP_ORDER.includes(k)),
  ];

  const sections: string[] = [];
  for (const k of orderedKeys) {
    const lines = groups.get(k);
    if (!lines || lines.length === 0) continue;
    sections.push(`${k}\n${lines.join("\n")}`);
  }

  return sections.join("\n\n");
}

export function getComponentCatalog(): string {
  if (cached !== null) return cached;
  cached = buildCatalog();
  return cached;
}

// 하위 호환 — 기존 import 가 string 으로 받음
export const COMPONENT_CATALOG = getComponentCatalog();
