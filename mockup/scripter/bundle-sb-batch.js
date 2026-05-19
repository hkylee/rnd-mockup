#!/usr/bin/env node
// =============================================
// SKT Genui — SB Batch Bundle
// 지정 폴더의 HTML 파일들 → 하나의 Figma Run 스크립트 (batch)
//
// Usage:
//   node scripter/bundle-sb-batch.js scripter/sb-html/  [--prefix BIL-]
//   node scripter/bundle-sb-batch.js scripter/sb-html/  --prefix BIL- --dry
//
// 산출물: scripter/runs/sb-batch-<prefix>.generated.js
// =============================================

const fs   = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { parseNovaHtml } = require("./parse-sb-html.js");

const ROOT     = path.resolve(__dirname, "..");
const RUNS_DIR = path.join(ROOT, "scripter", "runs");

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

// ---------- CLI ----------
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node scripter/bundle-sb-batch.js <sb-html-dir> [--prefix BIL-] [--dry]");
  process.exit(1);
}

let inputDir = null;
let prefix   = "";
let dry      = false;
for (let i = 0; i < args.length; i++) {
  if      (args[i] === "--prefix") prefix = args[++i] || "";
  else if (args[i] === "--dry")    dry = true;
  else                             inputDir = args[i];
}

const dirPath = path.isAbsolute(inputDir) ? inputDir : path.join(ROOT, inputDir);
if (!fs.existsSync(dirPath)) { console.error("폴더 없음:", dirPath); process.exit(2); }

const files = fs.readdirSync(dirPath)
  .filter(f => f.endsWith(".html") && (prefix ? f.startsWith(prefix) : true))
  .sort();

if (files.length === 0) { console.error("HTML 파일 없음 (prefix:", prefix || "없음", ")"); process.exit(2); }

// ---------- parse all HTML ----------
const trees = files.map(f => {
  const html = fs.readFileSync(path.join(dirPath, f), "utf8");
  return parseNovaHtml(html);
});

// ---------- load render-sb.js and extract inner content ----------
// render-sb.js 는 (async function renderSb() { ... })(); IIFE.
// 내부 콘텐츠를 추출해서 SB_TREE → SB_TREES 배치 루프로 교체.
const renderRaw = fs.readFileSync(path.join(ROOT, "scripter", "render-sb.js"), "utf8");

// IIFE 바디 추출: (async function renderSb() { ... })();
const bodyMatch = renderRaw.match(/\(async function renderSb\(\)\s*\{([\s\S]*)\}\)\(\);?\s*$/);
if (!bodyMatch) { console.error("render-sb.js 구조 인식 실패"); process.exit(3); }
let body = bodyMatch[1];

// 마지막 '// ---------- main ----------' 블록을 배치 버전으로 교체
const mainMarker = "  // ---------- main ----------";
const mainIdx = body.lastIndexOf(mainMarker);
if (mainIdx === -1) { console.error("main 블록 못 찾음"); process.exit(3); }

const helperSection = body.slice(0, mainIdx);

const batchMain = `
  // ---------- main (batch) ----------
  let targetPage = figma.root.children.find((p) => p.name === "SB");
  if (!targetPage) {
    targetPage = figma.createPage();
    targetPage.name = "SB";
  }
  await figma.setCurrentPageAsync(targetPage);

  const allRoots = [];
  let xOffset = 0;
  const GAP = 80;

  for (const SB_TREE of SB_TREES) {
    const root = vframe(SB_TREE.title || "NOVA SB", {
      pt: 32, pr: 24, pb: 32, pl: 24,
      gap: 20,
      fill: C.gray50
    });
    root.resize(1180, 100);

    for (const block of SB_TREE.blocks) {
      let node;
      if (block.kind === "h1")        node = renderH1(block);
      else if (block.kind === "h2")   node = renderH2(block);
      else if (block.kind === "h3")   node = renderH3(block);
      else if (block.kind === "eyebrow")   node = renderEyebrow(block);
      else if (block.kind === "meta-line") node = renderMetaLine(block);
      else if (block.kind === "note")      node = renderNote(block);
      else if (block.kind === "table")     node = renderTable(block);
      if (node) {
        if (node.layoutAlign !== "STRETCH" && root.layoutMode === "VERTICAL") {
          node.layoutAlign = "STRETCH";
        }
        root.appendChild(node);
      }
    }

    root.x = xOffset;
    root.y = 0;
    targetPage.appendChild(root);
    allRoots.push(root);
    xOffset += 1180 + GAP;
  }

  figma.viewport.scrollAndZoomIntoView(allRoots);
  figma.notify("✓ SB 배치 렌더 완료: " + SB_TREES.length + "개 화면");
`;

// ---------- assemble ----------
const slugPrefix = prefix ? prefix.replace(/[^a-z0-9]/gi, "-").toLowerCase() : "batch";
const outSlug = "sb-batch-" + slugPrefix.replace(/-$/, "");

const banner = [
  "// =============================================",
  "// AUTO-GENERATED — DO NOT EDIT",
  "// source: scripter/bundle-sb-batch.js",
  "// screens: " + files.map(f => f.replace(".html","")).join(", "),
  "// generated at: " + new Date().toISOString(),
  "// Paste into Figma Scripter → Run ▶",
  "// =============================================",
  ""
].join("\n");

const treesJs = "const SB_TREES = " + JSON.stringify(trees, null, 2) + ";";

const script = [
  banner,
  treesJs,
  "",
  "(async function renderSbBatch() {",
  helperSection,
  batchMain,
  "})();"
].join("\n");

ensureDir(RUNS_DIR);
const outPath = path.join(RUNS_DIR, outSlug + ".generated.js");
fs.writeFileSync(outPath, script, "utf8");
console.log("✓ Written:", path.relative(ROOT, outPath), "(" + script.length + " bytes)");
console.log("  screens:", files.length + "개");

if (!dry) {
  try {
    execSync("pbcopy", { input: script });
    console.log("✓ Copied to clipboard (pbcopy)");
  } catch (e) {
    console.warn("⚠ pbcopy 실패 — 파일에서 직접 복사하세요:", outPath);
  }
}
console.log("\nNext: Figma Scripter 에 붙여넣고 Run ▶ — SB 페이지에 " + files.length + "개 프레임 생성");
