#!/usr/bin/env node
// =============================================
// SKT Genui — Wash Bundler — Phase 3 (컨텍스트 인식 매칭)
// DS 토큰 walk → 종류별 lookup table 생성 (text / surface / border / other / radius / spacing).
//
// Phase 3 lookup 분류:
//   color:
//     - COLOR_TEXT_LOOKUP — semantic.color.text.* / foundation.color.* "text" 키워드
//     - COLOR_SURFACE_LOOKUP — semantic.color.{surface,background}.*
//     - COLOR_BORDER_LOOKUP — semantic.color.border.*
//     - COLOR_OTHER_LOOKUP — brand / feedback / icon / link / divider 등 (fallback)
//   dimension:
//     - RADIUS_LOOKUP — `.radius.` 키워드
//     - SPACING_LOOKUP — `.spacing.` / `semantic.layout.` 키워드
//     - SIZE_LOOKUP — 나머지 (height/width 등)
//   typography (변경 없음): FONTSIZE / FONTWEIGHT / LETTERSPACING
// =============================================

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DS_PATH = path.join(ROOT, "skt-design-system.json");
const RUNTIME_PATH = path.join(__dirname, "wash-runtime.js");
const OUT_PATH = path.join(__dirname, "runs", "wash.generated.js");

const ds = JSON.parse(fs.readFileSync(DS_PATH, "utf8"));

function walkLeaves(obj, prefix, out) {
  if (out == null) out = [];
  if (prefix == null) prefix = [];
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return out;
  if ("value" in obj && "type" in obj) {
    out.push({ path: prefix.join("."), type: obj.type, value: obj.value });
    return out;
  }
  for (const k in obj) walkLeaves(obj[k], prefix.concat([k]), out);
  return out;
}

function resolveAlias(value, depth) {
  if (depth == null) depth = 0;
  if (depth > 20) return null;
  if (typeof value !== "string") return value;
  const m = value.match(/^\{(.+)\}$/);
  if (!m) return value;
  const node = m[1].split(".").reduce(function (o, k) { return o == null ? null : o[k]; }, ds);
  if (!node) return null;
  const v = node.value !== undefined ? node.value : node;
  return resolveAlias(v, depth + 1);
}

function hexToRgb(s) {
  if (typeof s !== "string") return null;
  let m = s.replace("#", "");
  let alpha = 1;
  if (m.length === 8) {
    alpha = parseInt(m.slice(6, 8), 16) / 255;
    m = m.slice(0, 6);
  }
  if (!/^[0-9a-f]{6}$/i.test(m) && !/^[0-9a-f]{3}$/i.test(m)) return null;
  let h = m.length === 3 ? m.split("").map(function (c) { return c + c; }).join("") : m;
  const n = parseInt(h, 16);
  return {
    r: ((n >> 16) & 255) / 255,
    g: ((n >> 8) & 255) / 255,
    b: (n & 255) / 255,
    a: alpha,
  };
}

const leaves = walkLeaves(ds);

// ---------- Color lookup — 카테고리별 분리 ----------
function colorCategory(p) {
  if (p.includes(".text.") || p.startsWith("foundation.color.text") || p.startsWith("semantic.color.text")) return "text";
  if (p.includes(".surface.") || p.includes(".background.")) return "surface";
  if (p.includes(".border.") || p.includes(".divider.")) return "border";
  return "other";
}

function colorPriority(p) {
  if (p.startsWith("semantic.color.")) return 1;
  if (p.startsWith("foundation.color.")) return 3;
  if (p.startsWith("component.")) return 5;
  return 9;
}

const colorLookups = { text: {}, surface: {}, border: {}, other: {} };
const colorLookupsRgba = { text: {}, surface: {}, border: {}, other: {} };

const colorEntries = [];
for (const leaf of leaves) {
  if (leaf.type !== "color") continue;
  const resolved = resolveAlias(leaf.value);
  if (!resolved) continue;
  const rgba = typeof resolved === "string" ? hexToRgb(resolved) : null;
  if (!rgba) continue;
  const rgbKey = rgba.r.toFixed(4) + "," + rgba.g.toFixed(4) + "," + rgba.b.toFixed(4);
  colorEntries.push({
    rgbKey: rgbKey,
    rgbaKey: rgbKey + "," + rgba.a.toFixed(3),
    path: leaf.path,
    priority: colorPriority(leaf.path),
    category: colorCategory(leaf.path),
    hasAlpha: rgba.a < 1,
  });
}
colorEntries.sort(function (a, b) { return a.priority - b.priority; });
for (const e of colorEntries) {
  if (!e.hasAlpha && !colorLookups[e.category][e.rgbKey]) colorLookups[e.category][e.rgbKey] = e.path;
  if (!colorLookupsRgba[e.category][e.rgbaKey]) colorLookupsRgba[e.category][e.rgbaKey] = e.path;
}

// ---------- Dimension lookup — 카테고리별 분리 ----------
function dimensionCategory(p) {
  if (p.includes(".radius.")) return "radius";
  if (p.includes(".spacing.") || p.startsWith("semantic.layout.")) return "spacing";
  return "size";
}

function dimensionPriority(p) {
  // foundation.dimension.spacing.* 우선 — 일반 spacing/itemSpacing/padding
  if (p.includes(".spacing.")) return 1;
  if (p.includes(".radius.")) return 1;
  // semantic.layout.* 는 fallback — 정확한 layout 토큰 (screen-padding 등) 은 별개 매칭
  if (p.startsWith("semantic.layout.")) return 3;
  if (p.startsWith("foundation.dimension.size.")) return 5;
  if (p.startsWith("component.")) return 9;
  return 10;
}

const dimensionLookups = { radius: {}, spacing: {}, size: {} };

const dimEntries = [];
for (const leaf of leaves) {
  if (leaf.type !== "dimension") continue;
  const resolved = resolveAlias(leaf.value);
  if (resolved == null) continue;
  const num = typeof resolved === "number" ? resolved : parseFloat(resolved);
  if (isNaN(num)) continue;
  dimEntries.push({
    key: num,
    path: leaf.path,
    priority: dimensionPriority(leaf.path),
    category: dimensionCategory(leaf.path),
  });
}
dimEntries.sort(function (a, b) { return a.priority - b.priority; });
for (const e of dimEntries) {
  if (dimensionLookups[e.category][e.key] == null) dimensionLookups[e.category][e.key] = e.path;
}

// ---------- FontSize / FontWeight / LetterSpacing (변경 없음) ----------
const fontSizeLookup = {};
const fontWeightLookup = {};
const letterSpacingLookup = {};

for (const leaf of leaves) {
  const resolved = resolveAlias(leaf.value);
  if (resolved == null) continue;
  if (leaf.type === "fontSize") {
    const num = typeof resolved === "number" ? resolved : parseFloat(resolved);
    if (!isNaN(num) && fontSizeLookup[num] == null) fontSizeLookup[num] = leaf.path;
  } else if (leaf.type === "fontWeight") {
    const segs = leaf.path.split(".");
    const lastSeg = segs[segs.length - 1].toLowerCase();
    if (lastSeg !== "fontweight" && !fontWeightLookup[lastSeg]) fontWeightLookup[lastSeg] = leaf.path;
  } else if (leaf.type === "letterSpacing") {
    const num = typeof resolved === "number" ? resolved : parseFloat(resolved);
    if (!isNaN(num) && letterSpacingLookup[num] == null) letterSpacingLookup[num] = leaf.path;
  }
}

// ---------- runtime read + 합치기 ----------
const runtime = fs.readFileSync(RUNTIME_PATH, "utf8");

const banner = [
  "// =============================================",
  "// AUTO-GENERATED — WASH MODE Phase 3 (컨텍스트 인식)",
  "// node 속성 종류에 따라 후보 토큰 자동 필터링.",
  "// generated at: " + new Date().toISOString(),
  `// color: text=${Object.keys(colorLookups.text).length} surface=${Object.keys(colorLookups.surface).length} border=${Object.keys(colorLookups.border).length} other=${Object.keys(colorLookups.other).length}`,
  `// dimension: radius=${Object.keys(dimensionLookups.radius).length} spacing=${Object.keys(dimensionLookups.spacing).length} size=${Object.keys(dimensionLookups.size).length}`,
  `// fontSize: ${Object.keys(fontSizeLookup).length} / fontWeight: ${Object.keys(fontWeightLookup).length} / letterSpacing: ${Object.keys(letterSpacingLookup).length}`,
  "// =============================================",
  "",
];

const tablesInjection = [
  "const COLOR_LOOKUP = " + JSON.stringify(colorLookups, null, 2) + ";",
  "const COLOR_LOOKUP_RGBA = " + JSON.stringify(colorLookupsRgba, null, 2) + ";",
  "const DIMENSION_LOOKUP = " + JSON.stringify(dimensionLookups, null, 2) + ";",
  "const FONTSIZE_LOOKUP = " + JSON.stringify(fontSizeLookup, null, 2) + ";",
  "const FONTWEIGHT_LOOKUP = " + JSON.stringify(fontWeightLookup, null, 2) + ";",
  "const LETTERSPACING_LOOKUP = " + JSON.stringify(letterSpacingLookup, null, 2) + ";",
  "",
].join("\n");

const out = banner.join("\n") + tablesInjection + runtime;

if (!fs.existsSync(path.dirname(OUT_PATH))) fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, out);

try {
  execSync("pbcopy", { input: out });
  console.log("✓ Written + clipboard: " + path.relative(ROOT, OUT_PATH) + " (" + out.length + " bytes)");
} catch (e) {
  console.log("✓ Written (pbcopy 실패)");
}

console.log("\nLookup 통계:");
console.log("  color: text=" + Object.keys(colorLookups.text).length + " / surface=" + Object.keys(colorLookups.surface).length + " / border=" + Object.keys(colorLookups.border).length + " / other=" + Object.keys(colorLookups.other).length);
console.log("  dimension: radius=" + Object.keys(dimensionLookups.radius).length + " / spacing=" + Object.keys(dimensionLookups.spacing).length + " / size=" + Object.keys(dimensionLookups.size).length);
console.log("  fontSize: " + Object.keys(fontSizeLookup).length);
console.log("\nNext: Figma → wash 대상 선택 → Scripter ⌘V → Run");
