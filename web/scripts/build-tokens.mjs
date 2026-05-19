#!/usr/bin/env node
// =============================================
// DS 토큰 (skt-design-system.json) → CSS Variables 자동 생성
// 입력: shared/skt-design-system.json
// 출력: src/styles/tokens.css
//
// 룰:
//   - foundation/semantic/component path 모두 CSS Variable 로 변환
//   - 명명: dot path → kebab-case (ex. semantic.color.brand.primary → --semantic-color-brand-primary)
//   - alias 는 var() 체인 유지 (semantic 이 foundation 가리키는 식)
//   - shadow composite → 단일 box-shadow CSS 값 (raw hex 박음, color alias 풀어서 rgb)
//   - typography composite → CSS class (.typography-<name>) 형태 — 4 field 한 번에 적용
// =============================================
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const DS_PATH = resolve(WEB_ROOT, "shared/skt-design-system.json");
const OUT_PATH = resolve(WEB_ROOT, "src/styles/tokens.css");

const ds = JSON.parse(readFileSync(DS_PATH, "utf8"));

// ---------- 유틸 ----------
function pathToCssVar(path) {
  return "--" + path.replace(/\./g, "-").replace(/_/g, "-").toLowerCase();
}
function unwrapAlias(s) {
  if (typeof s !== "string") return null;
  const m = s.match(/^\{(.+)\}$/);
  return m ? m[1] : null;
}
function resolveAlias(value, depth = 0) {
  if (depth > 20) return null;
  if (typeof value !== "string") return value;
  const path = unwrapAlias(value);
  if (!path) return value;
  const node = path.split(".").reduce((o, k) => (o == null ? null : o[k]), ds);
  if (!node) return null;
  const v = node.value !== undefined ? node.value : node;
  return resolveAlias(v, depth + 1);
}
function hexToRgba(hex, alpha = 1) {
  const m = hex.replace("#", "");
  let s = m.length === 3 ? m.split("").map(c => c + c).join("") : m;
  let a = alpha;
  if (s.length === 8) {
    a = parseInt(s.slice(6, 8), 16) / 255;
    s = s.slice(0, 6);
  }
  const n = parseInt(s.slice(0, 6), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${Number(a.toFixed(3))})`;
}

// ---------- 토큰 walk ----------
const lines = {
  foundation: [],
  semantic: [],
  component: [],
};
const typographyClasses = []; // .typography-<name> { ... }

function emitVar(category, path, value) {
  lines[category].push(`  ${pathToCssVar(path)}: ${value};`);
}

function valueToCss(rawValue, type, path) {
  // alias → var() 형태 유지
  const aliasPath = unwrapAlias(rawValue);
  if (aliasPath) {
    return `var(${pathToCssVar(aliasPath)})`;
  }
  if (typeof rawValue === "string") {
    if (type === "color") {
      // 8자리 hex (alpha) 면 rgba 로
      if (/^#[0-9a-f]{8}$/i.test(rawValue)) return hexToRgba(rawValue);
      return rawValue;
    }
    if (type === "lineHeight" && rawValue.endsWith("%")) return rawValue;
    return rawValue;
  }
  if (typeof rawValue === "number") return String(rawValue);
  // shadow composite
  if (rawValue && typeof rawValue === "object" && "blur" in rawValue) {
    const colorResolved = resolveAlias(rawValue.color);
    const colorRgba = typeof colorResolved === "string"
      ? hexToRgba(colorResolved, rawValue.alpha != null ? rawValue.alpha : 1)
      : "rgba(0, 0, 0, 0.1)";
    return `${rawValue.x} ${rawValue.y} ${rawValue.blur} ${rawValue.spread || "0px"} ${colorRgba}`;
  }
  return null;
}

function walk(obj, prefix = []) {
  if (!obj || typeof obj !== "object") return;
  // typography composite leaf?
  if (obj.type === "typography" && obj.fontSize) {
    emitTypography(prefix.join("."), obj);
    return;
  }
  // 일반 leaf — value/type 동시 존재
  if ("value" in obj && "type" in obj) {
    const path = prefix.join(".");
    const category = prefix[0];
    if (!lines[category]) return;
    const css = valueToCss(obj.value, obj.type, path);
    if (css == null) return;
    emitVar(category, path, css);
    return;
  }
  // composite: shadow object 안 leaf 가 아닌 경우 (foundation.shadow.sm.value 형태)
  for (const k of Object.keys(obj)) {
    walk(obj[k], prefix.concat(k));
  }
}

function emitTypography(path, composite) {
  // path 가 "semantic.typography.body-medium" 형태
  const name = path.split(".").pop();
  const className = `.typography-${name}`;
  const lines = [];
  for (const field of ["fontSize", "lineHeight", "fontWeight", "letterSpacing"]) {
    const v = composite[field];
    if (!v) continue;
    const cssProp = field === "fontSize" ? "font-size"
      : field === "lineHeight" ? "line-height"
      : field === "fontWeight" ? "font-weight"
      : "letter-spacing";
    const aliasPath = unwrapAlias(v);
    if (aliasPath) {
      lines.push(`  ${cssProp}: var(${pathToCssVar(aliasPath)});`);
    } else {
      lines.push(`  ${cssProp}: ${v};`);
    }
  }
  if (composite.textDecoration) lines.push(`  text-decoration: ${composite.textDecoration};`);
  typographyClasses.push(`${className} {\n${lines.join("\n")}\n}`);
}

// ---------- 실행 ----------
walk(ds);

const banner = `/*\n * AUTO-GENERATED — DO NOT EDIT MANUALLY\n * 생성: web/scripts/build-tokens.mjs\n * 입력: shared/skt-design-system.json\n * 명령: npm run build:tokens\n */\n`;

const css = banner + "\n:root {\n" +
  "  /* === foundation === */\n" + lines.foundation.join("\n") + "\n\n" +
  "  /* === semantic === */\n" + lines.semantic.join("\n") + "\n\n" +
  "  /* === component === */\n" + lines.component.join("\n") + "\n" +
  "}\n\n" +
  "/* === typography composite (class) === */\n" +
  typographyClasses.join("\n\n") + "\n";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, css);

console.log("✓ Written:", OUT_PATH.replace(WEB_ROOT, "."));
console.log("  foundation:", lines.foundation.length, "vars");
console.log("  semantic:  ", lines.semantic.length, "vars");
console.log("  component: ", lines.component.length, "vars");
console.log("  typography:", typographyClasses.length, "classes");
