#!/usr/bin/env node
// =============================================
// SKT Genui — Code Connect Generator (prototype)
// Usage:
//   node scripter/generate-connect.js atom/btn        # 단일 spec
//   node scripter/generate-connect.js --all           # 모든 spec
//   node scripter/generate-connect.js --dir <path>    # 출력 디렉토리 (default: scripter/connect/)
//
// 동작:
//   1) component-specs/{name}.json 읽기
//   2) variants.axes → figma.enum / exposeAs (text) → figma.string
//      base.children 안 ref (exposeAs 가진 것) → figma.children
//   3) scripter/connect/<slug>.figma.tsx 작성
//   4) <TODO> placeholder 2종 (import path / figma node URL) — 사용자가 figma 빌드 후 채움
//
// 산출물 형식 (Figma Code Connect):
//   import { figma } from "@figma/code-connect";
//   import { Btn } from "<TODO: import path>";
//   figma.connect(Btn, "<TODO: figma node URL>", { props: { ... }, example: ... });
// =============================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SPECS_DIR = path.join(ROOT, "component-specs");
const OUTPUT_DIR = path.join(ROOT, "scripter", "connect");

// ---------- Helpers ----------

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

// "atom/btn" → "Btn" / "atom/icon/sparkle" → "IconSparkle" / "mol/list-item-coupon" → "ListItemCoupon" / "ogn/MBR/auth-widget" → "AuthWidget"
function pascalCaseName(specName) {
  // category/{module/}{rest} 에서 마지막 segments 사용
  const parts = specName.split("/");
  // category prefix 제거 (atom/mol/ogn/page)
  const tail = parts.slice(1);
  // module code 제거 (대문자 약어)
  const filtered = tail.filter((p) => !/^[A-Z][A-Z0-9_]+$/.test(p));
  // kebab-case → PascalCase 합산
  return filtered
    .map((seg) =>
      seg
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("")
    )
    .join("");
}

// spec.base.children 재귀 — text exposeAs / ref exposeAs 수집
function collectExposed(node, out, depth) {
  if (depth > 6) return; // 안전 한계
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const c of node) collectExposed(c, out, depth + 1);
    return;
  }
  if (node.exposeAs && typeof node.exposeAs === "string") {
    out.push({
      key: node.exposeAs,
      kind: node.kind || "text",
      id: node.id || "?",
    });
  }
  if (Array.isArray(node.children)) {
    for (const c of node.children) collectExposed(c, out, depth + 1);
  }
}

// variant axis → figma.enum 매핑 코드
function axisToEnum(axis) {
  const valuesObj = axis.values
    .map((v) => `      ${JSON.stringify(v)}: ${JSON.stringify(v)}`)
    .join(",\n");
  return `figma.enum(${JSON.stringify(axis.name)}, {\n${valuesObj}\n    })`;
}

// exposeAs → figma.string / figma.children
function exposedToFigma(item) {
  if (item.kind === "ref") {
    return `figma.children(${JSON.stringify(item.key)})`;
  }
  // default: text
  return `figma.string(${JSON.stringify(item.key)})`;
}

// ---------- Main generator ----------

function generateConnect(spec) {
  const componentName = pascalCaseName(spec.name);
  // spec.connect.import / .figmaNodeUrl 명시 시 placeholder 자동 채움
  const importPath = (spec.connect && spec.connect.import) || "<TODO: import path>";
  const figmaNodeUrl = (spec.connect && spec.connect.figmaNodeUrl) || "<TODO: figma node URL>";
  const exposed = [];
  collectExposed(spec.base || {}, exposed, 0);

  // 중복 제거 (같은 exposeAs 키 한 번만 노출)
  const seen = new Set();
  const uniqExposed = exposed.filter((e) => {
    if (seen.has(e.key)) return false;
    seen.add(e.key);
    return true;
  });

  const axes = (spec.variants && spec.variants.axes) || [];

  // props 객체 구성 — axis 우선, 같은 키 exposeAs 는 skip (충돌 회피)
  const propsLines = [];
  const propKeys = new Set();
  for (const ax of axes) {
    propsLines.push(`    ${ax.name}: ${axisToEnum(ax)}`);
    propKeys.add(ax.name);
  }
  for (const ex of uniqExposed) {
    if (propKeys.has(ex.key)) continue; // axis 와 충돌 시 skip
    propsLines.push(`    ${ex.key}: ${exposedToFigma(ex)}`);
    propKeys.add(ex.key);
  }
  const propsBody = propsLines.length > 0 ? propsLines.join(",\n") + "," : "";

  // example 구성: text exposeAs 를 자식 또는 props 로 분리 (axis 와 충돌하는 키는 제외)
  const exposedNoCollision = uniqExposed.filter((e) => {
    return !axes.some((ax) => ax.name === e.key);
  });
  const textKeys = exposedNoCollision.filter((e) => e.kind !== "ref").map((e) => e.key);
  const refKeys = exposedNoCollision.filter((e) => e.kind === "ref").map((e) => e.key);
  const destructured = [...textKeys, ...refKeys].join(", ");
  const restProps = "...props";

  const exampleSig = destructured ? `{ ${destructured}, ${restProps} }` : `{ ${restProps} }`;

  // example body — 가장 일반: <Component {...props}>{firstText}</Component>
  const exampleBody = `<${componentName} {...props}>${
    textKeys.length > 0 ? `{${textKeys[0]}}` : ""
  }</${componentName}>`;

  return `// AUTO-GENERATED — Figma Code Connect mapping for ${spec.name}
// source: component-specs/${spec.name}.json
// generated at: ${new Date().toISOString()}
//
// TODO (사용자 작성, spec 의 connect.import / connect.figmaNodeUrl 박으면 자동):
//   1. import 경로: 실제 React 컴포넌트 위치
//   2. figma node URL: figma 빌드 후 component 의 share URL
//
// 자동 매핑:
//   - variants.axes → figma.enum
//   - base.children 의 text exposeAs → figma.string
//   - base.children 의 ref exposeAs → figma.children (slot)

import { figma } from "@figma/code-connect";
import { ${componentName} } from ${JSON.stringify(importPath)};

figma.connect(${componentName}, ${JSON.stringify(figmaNodeUrl)}, {
  props: {
${propsBody}
  },
  example: (${exampleSig}) => ${exampleBody},
});
`;
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function processSpec(specPath) {
  const spec = readJSON(specPath);
  if (!spec.name) {
    console.warn("✗ skip — no name:", specPath);
    return;
  }
  const tsx = generateConnect(spec);
  const slug = spec.name.replace(/\//g, "-");
  const outPath = path.join(OUTPUT_DIR, slug + ".figma.tsx");
  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(outPath, tsx, "utf8");
  console.log(`✓ ${spec.name} → scripter/connect/${slug}.figma.tsx`);
}

function walkSpecs(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkSpecs(p, out);
    else if (entry.name.endsWith(".json")) out.push(p);
  }
}

// ---------- CLI ----------

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage:");
  console.error("  node scripter/generate-connect.js <spec-name>      # 단일");
  console.error("  node scripter/generate-connect.js --all            # 모든 spec");
  process.exit(1);
}

if (args[0] === "--all") {
  const all = [];
  walkSpecs(SPECS_DIR, all);
  for (const p of all) processSpec(p);
  console.log(`\n=== ${all.length} specs processed ===`);
} else {
  const specName = args[0];
  const specPath = path.join(SPECS_DIR, specName + ".json");
  if (!fs.existsSync(specPath)) {
    console.error("✗ spec not found:", specName);
    process.exit(2);
  }
  processSpec(specPath);
}
