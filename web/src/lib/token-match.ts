// raw 값 → DS 토큰 closest match.
// figma-wash 워싱 단계에서 plugin 추출의 raw 값 (hex / px / "(raw fontSize=...)") 을 토큰 후보로 매칭.

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { sharedRoot } from "./paths";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Json = any;

type TokenLeaf = {
  path: string; // "foundation.typography.title-bold"
  type: string;
  value: Json;
  resolved: Json;
};

let cache: TokenLeaf[] | null = null;

function loadCatalog(): TokenLeaf[] {
  if (cache) return cache;
  const ds = JSON.parse(readFileSync(resolve(sharedRoot(), "skt-design-system.json"), "utf8"));
  const out: TokenLeaf[] = [];
  walk(ds, "", out, ds);
  cache = out;
  return out;
}

function walk(node: Json, prefix: string, out: TokenLeaf[], root: Json) {
  if (!node || typeof node !== "object") return;
  if (
    "value" in node &&
    Object.keys(node).every((k) => k === "value" || k === "type" || k === "description")
  ) {
    const type = typeof node.type === "string" ? node.type : "unknown";
    out.push({ path: prefix, type, value: node.value, resolved: resolveAlias(node.value, root) });
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    walk(v, prefix ? `${prefix}.${k}` : k, out, root);
  }
}

function resolveAlias(value: Json, root: Json): Json {
  if (typeof value === "string") {
    const m = value.match(/^\{(.+)\}$/);
    if (m) {
      const target = lookup(root, m[1]);
      if (target && typeof target === "object" && "value" in target) {
        return resolveAlias(target.value, root);
      }
    }
  }
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const out: Json = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = resolveAlias(v, root);
    }
    return out;
  }
  return value;
}

function lookup(root: Json, path: string): Json {
  const parts = path.split(".");
  let cur = root;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

// ===== typography 매칭 =====

// raw "(raw fontSize=20, weight=Medium)" → typography 토큰 후보 (top N)
export function matchTypography(rawText: string): string[] {
  const m = rawText.match(/fontSize=(\d+).*?weight=([^),]+)/);
  if (!m) return [];
  const fontSize = parseInt(m[1], 10);
  const weight = m[2].trim();
  const all = loadCatalog().filter(
    (t) =>
      t.type === "typography" ||
      /typography|textStyle|titleStyle|labelStyle|bodyStyle/i.test(t.path)
  );
  const scored = all
    .map((t) => {
      const v = t.resolved;
      let score = 0;
      if (v && typeof v === "object") {
        if (Number(v.fontSize) === fontSize) score += 10;
        else if (v.fontSize && Math.abs(Number(v.fontSize) - fontSize) <= 2) score += 5;
        if (v.fontWeight && normalizeWeight(v.fontWeight) === normalizeWeight(weight)) score += 5;
      }
      return { path: t.path, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  return scored.map((x) => `{${x.path}}`);
}

function normalizeWeight(w: Json): string {
  return String(w).toLowerCase().replace(/[\s\-_]/g, "");
}

// ===== color 매칭 =====

// "#3617CE" 또는 "#3617CEff" → color 토큰 후보 (closest hex distance)
export function matchColor(hex: string): string[] {
  const target = hexToRgb(hex);
  if (!target) return [];
  const colors = loadCatalog().filter((t) => t.type === "color" && typeof t.resolved === "string");
  const scored = colors
    .map((t) => {
      const c = hexToRgb(String(t.resolved));
      if (!c) return { path: t.path, dist: Infinity };
      const dist =
        Math.abs(c.r - target.r) + Math.abs(c.g - target.g) + Math.abs(c.b - target.b);
      return { path: t.path, dist };
    })
    .filter((x) => x.dist < 30) // tolerance
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 3);
  return scored.map((x) => `{${x.path}}`);
}

function hexToRgb(s: string): { r: number; g: number; b: number } | null {
  const m = String(s).replace("#", "").match(/^([0-9a-f]{6})([0-9a-f]{2})?$/i);
  if (!m) return null;
  const h = m[1];
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

// ===== dimension 매칭 =====

// 16 또는 "16" / "16px" → dimension 토큰 후보 (정확 매칭 + 근사)
export function matchDimension(input: string | number): string[] {
  const num = typeof input === "number" ? input : parseFloat(String(input).replace("px", ""));
  if (Number.isNaN(num)) return [];
  const dims = loadCatalog().filter(
    (t) =>
      (t.type === "dimension" || t.type === "number") &&
      typeof t.resolved === "number"
  );
  const scored = dims
    .map((t) => ({ path: t.path, diff: Math.abs(Number(t.resolved) - num) }))
    .filter((x) => x.diff <= 2) // tolerance
    .sort((a, b) => a.diff - b.diff)
    .slice(0, 3);
  return scored.map((x) => `{${x.path}}`);
}
