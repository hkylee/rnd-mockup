#!/usr/bin/env node
// =============================================
// SKT Genui — Plugin Lookup Builder
// DS 의 semantic.typography.* 를 walk → figma-plugin/code.js 의 marker 영역에
// path-based + raw-based 두 typography lookup 자동 주입.
//
// 사용: node scripter/build-plugin-lookup.js
//
// 이후 figma plugin reload 필요 (Figma Plugins 메뉴).
// DS 의 typography 추가/변경 시마다 재실행.
// =============================================

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DS_PATH = path.join(ROOT, "skt-design-system.json");
const PLUGIN_CODE_PATH = path.join(ROOT, "figma-plugin", "code.js");

const MARK_START = "/* @generated:typography-lookup-start */";
const MARK_END = "/* @generated:typography-lookup-end */";

const ds = JSON.parse(fs.readFileSync(DS_PATH, "utf8"));

// {foundation.typography.fontSize.body} → "foundation.typography.fontSize.body"
function unwrapAlias(s) {
  if (typeof s !== "string") return null;
  const m = s.match(/^\{(.+)\}$/);
  return m ? m[1] : null;
}

// dot path → DS leaf 의 .value 까지 끝까지 풀기
function resolvePath(p, depth) {
  if (depth == null) depth = 0;
  if (depth > 20) return null;
  const node = p.split(".").reduce((o, k) => (o == null ? null : o[k]), ds);
  if (!node) return null;
  if (node.value !== undefined) {
    const v = node.value;
    const inner = unwrapAlias(v);
    return inner ? resolvePath(inner, depth + 1) : v;
  }
  return null;
}

// "15px" → 15, "120%" → { value: 120, unit: "PERCENT" }, "-0.3px" → -0.3
function parseLength(v) {
  if (typeof v === "number") return { value: v, unit: "PIXELS" };
  if (typeof v !== "string") return null;
  if (v.endsWith("%")) {
    const n = parseFloat(v);
    return isNaN(n) ? null : { value: n, unit: "PERCENT" };
  }
  if (v.endsWith("px")) {
    const n = parseFloat(v);
    return isNaN(n) ? null : { value: n, unit: "PIXELS" };
  }
  const n = parseFloat(v);
  return isNaN(n) ? null : { value: n, unit: "PIXELS" };
}

// fontWeight: "400" or 400 → 400 (number)
function parseWeight(v) {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseInt(v, 10);
    return isNaN(n) ? null : n;
  }
  return null;
}

const sem = ds.semantic && ds.semantic.typography;
if (!sem) {
  console.error("✗ DS 에 semantic.typography 가 없음.");
  process.exit(1);
}

const pathLookup = {}; // name → { fontSize: dsPath, lineHeight: dsPath, fontWeight: dsPath, letterSpacing: dsPath }
const rawLookup = []; // [{ name, fontSize, lineHeight: {value,unit}, fontWeight, letterSpacing }]

for (const name of Object.keys(sem)) {
  const composite = sem[name];
  if (!composite || composite.type !== "typography") continue;

  const pathEntry = {};
  const rawEntry = { name };

  for (const field of ["fontSize", "lineHeight", "fontWeight", "letterSpacing"]) {
    const aliasOrRaw = composite[field];
    const aliasPath = unwrapAlias(aliasOrRaw);
    if (aliasPath) {
      pathEntry[field] = aliasPath;
      const resolved = resolvePath(aliasPath);
      if (field === "fontSize") {
        const parsed = parseLength(resolved);
        if (parsed) rawEntry.fontSize = parsed.value;
      } else if (field === "lineHeight") {
        const parsed = parseLength(resolved);
        if (parsed) rawEntry.lineHeight = parsed;
      } else if (field === "letterSpacing") {
        const parsed = parseLength(resolved);
        if (parsed) rawEntry.letterSpacing = parsed.value;
      } else if (field === "fontWeight") {
        const w = parseWeight(resolved);
        if (w != null) rawEntry.fontWeight = w;
      }
    }
  }

  pathLookup[name] = pathEntry;
  rawLookup.push(rawEntry);
}

const injection = [
  MARK_START,
  "const TYPOGRAPHY_PATH_LOOKUP = " + JSON.stringify(pathLookup, null, 2) + ";",
  "const TYPOGRAPHY_RAW_LOOKUP = " + JSON.stringify(rawLookup, null, 2) + ";",
  MARK_END,
].join("\n");

const code = fs.readFileSync(PLUGIN_CODE_PATH, "utf8");

const startIdx = code.indexOf(MARK_START);
const endIdx = code.indexOf(MARK_END);

let next;
if (startIdx === -1 || endIdx === -1) {
  console.error("✗ marker 영역을 plugin/code.js 에서 찾지 못함:");
  console.error("  " + MARK_START + " 와 " + MARK_END + " 가 있어야 함.");
  console.error("  최초 1회 marker 영역을 plugin/code.js 적당한 위치 (예: figma.showUI 호출 위) 에 넣어 주세요.");
  process.exit(1);
} else {
  next = code.slice(0, startIdx) + injection + code.slice(endIdx + MARK_END.length);
}

if (next === code) {
  console.log("= 변경 없음 (이미 최신).");
} else {
  fs.writeFileSync(PLUGIN_CODE_PATH, next);
  console.log("✓ figma-plugin/code.js 의 typography lookup 갱신.");
}

console.log("\nlookup 통계:");
console.log("  composite: " + Object.keys(pathLookup).length);
console.log("  raw entries: " + rawLookup.length);
console.log("\nNext: Figma → Plugins 메뉴에서 plugin reload (코드 재로드).");
