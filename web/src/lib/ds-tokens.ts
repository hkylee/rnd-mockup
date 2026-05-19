// DS_TOKENS 에서 유효한 토큰 path 들을 추출 + spec 안 토큰 reference validation.

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { sharedRoot } from "./paths";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Json = any;

let cachedDs: Json | null = null;
let cachedTokens: Map<string, string> | null = null; // path → type

function loadDs(): Json {
  if (cachedDs) return cachedDs;
  const dsPath = resolve(sharedRoot(), "skt-design-system.json");
  cachedDs = JSON.parse(readFileSync(dsPath, "utf8"));
  return cachedDs;
}

// 재귀 walk: { value: ..., type?: ... } leaf 를 발견하면 path → type 매핑 수집
function walkTokens(node: Json, prefix: string, out: Map<string, string>): void {
  if (!node || typeof node !== "object") return;
  if ("value" in node && Object.keys(node).every((k) => k === "value" || k === "type" || k === "description")) {
    const type = typeof node.type === "string" ? node.type : "unknown";
    out.set(prefix, type);
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    walkTokens(v, prefix ? `${prefix}.${k}` : k, out);
  }
}

function tokenMap(): Map<string, string> {
  if (cachedTokens) return cachedTokens;
  cachedTokens = new Map();
  walkTokens(loadDs(), "", cachedTokens);
  return cachedTokens;
}

export function validTokenPaths(): Set<string> {
  return new Set(tokenMap().keys());
}

export function tokenTypeOf(path: string): string | null {
  return tokenMap().get(path) || null;
}

// AI 프롬프트용 토큰 catalog 텍스트 생성 (그룹별, type 명시)
export function tokenCatalogText(): string {
  const tm = tokenMap();
  const paths = Array.from(tm.keys()).sort();
  const groups = new Map<string, string[]>();
  for (const p of paths) {
    const root = p.split(".").slice(0, 3).join(".");
    const arr = groups.get(root) || [];
    arr.push(p);
    groups.set(root, arr);
  }
  const lines: string[] = [];
  for (const [group, items] of groups) {
    lines.push(`[${group}]`);
    for (const p of items) lines.push(`  - {${p}} → ${tm.get(p)}`);
  }
  return lines.join("\n");
}

// 필드명 → 허용되는 토큰 type 들
const FIELD_EXPECTED_TYPES: Record<string, string[]> = {
  fill: ["color"],
  stroke: ["color"],
  background: ["color"],
  color: ["color"],
  border: ["color"],
  divider: ["color"],
  text: ["color"],
  iconColor: ["color"],
  shadow: ["shadow"],
  cornerRadius: ["dimension"],
  radius: ["dimension"],
  width: ["dimension"],
  height: ["dimension"],
  minHeight: ["dimension"],
  paddingTop: ["dimension"],
  paddingBottom: ["dimension"],
  paddingLeft: ["dimension"],
  paddingRight: ["dimension"],
  paddingHorizontal: ["dimension"],
  paddingVertical: ["dimension"],
  padding: ["dimension"],
  itemSpacing: ["dimension"],
  gap: ["dimension"],
  size: ["dimension"],
  iconSize: ["dimension"],
  textStyle: ["typography"],
  fontSize: ["fontSize"],
  lineHeight: ["lineHeight"],
  fontWeight: ["fontWeight"],
  letterSpacing: ["letterSpacing"],
};

type TokenIssue =
  | { kind: "missing"; path: string; field?: string }
  | { kind: "type-mismatch"; path: string; field: string; expected: string[]; actual: string };

// spec 안 모든 토큰 reference (path 와 어느 필드에 쓰였는지 함께) 수집
function collectRefsWithField(
  node: Json,
  fieldHint: string | undefined,
  out: { path: string; field?: string }[]
): void {
  if (!node) return;
  if (typeof node === "string") {
    const m = node.match(/^\{(.+)\}$/);
    if (m) out.push({ path: m[1], field: fieldHint });
    return;
  }
  if (Array.isArray(node)) {
    for (const item of node) collectRefsWithField(item, fieldHint, out);
    return;
  }
  if (typeof node === "object") {
    for (const [k, v] of Object.entries(node)) collectRefsWithField(v, k, out);
  }
}

// spec validation: 없는 토큰 + 타입 mismatch
export function validateSpecTokens(spec: Json): TokenIssue[] {
  const refs: { path: string; field?: string }[] = [];
  collectRefsWithField(spec, undefined, refs);
  const tm = tokenMap();
  const issues: TokenIssue[] = [];
  const seenMissing = new Set<string>();
  const seenMismatch = new Set<string>();

  for (const r of refs) {
    if (!tm.has(r.path)) {
      if (seenMissing.has(r.path)) continue;
      seenMissing.add(r.path);
      issues.push({ kind: "missing", path: r.path, field: r.field });
      continue;
    }
    const actual = tm.get(r.path) || "unknown";
    const expected = r.field ? FIELD_EXPECTED_TYPES[r.field] : undefined;
    if (expected && !expected.includes(actual)) {
      const key = `${r.field}::${r.path}`;
      if (seenMismatch.has(key)) continue;
      seenMismatch.add(key);
      issues.push({
        kind: "type-mismatch",
        path: r.path,
        field: r.field || "?",
        expected,
        actual,
      });
    }
  }
  return issues;
}

// 하위 호환 — 기존 caller 가 사용
export function invalidTokensInSpec(spec: Json): string[] {
  return validateSpecTokens(spec)
    .filter((i) => i.kind === "missing")
    .map((i) => i.path);
}
