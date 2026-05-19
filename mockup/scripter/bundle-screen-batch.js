#!/usr/bin/env node
// =============================================
// SKT Genui — Screen Wireframe Batch Bundle
// SB JSON 폴더 → Figma Scripter 폰 화면 배치 렌더 스크립트
//
// Usage:
//   node scripter/bundle-screen-batch.js              # sb/ 전체
//   node scripter/bundle-screen-batch.js --prefix BIL-
//   node scripter/bundle-screen-batch.js --prefix BIL- --dry
//
// 산출물: scripter/runs/screen-batch-<prefix>.generated.js
// =============================================

const fs   = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT     = path.resolve(__dirname, "..");
const SB_DIR   = path.join(ROOT, "scripter", "sb");
const RUNS_DIR = path.join(ROOT, "scripter", "runs");

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

// ---------- CLI ----------
const args = process.argv.slice(2);
let prefix = "";
let dry    = false;
for (let i = 0; i < args.length; i++) {
  if      (args[i] === "--prefix") prefix = args[++i] || "";
  else if (args[i] === "--dry")    dry = true;
}

const files = fs.readdirSync(SB_DIR)
  .filter(function(f) { return f.endsWith(".sb.json") && (prefix ? f.startsWith(prefix) : true); })
  .sort();

if (files.length === 0) {
  console.error("SB JSON 없음 (prefix:", prefix || "없음", ")");
  process.exit(2);
}

const screens = files.map(function(f) {
  return JSON.parse(fs.readFileSync(path.join(SB_DIR, f), "utf8"));
});

// ---------- render-screen.js 에서 helper 추출 ----------
const renderRaw = fs.readFileSync(path.join(ROOT, "scripter", "render-screen.js"), "utf8");

// IIFE 바디 추출
const bodyMatch = renderRaw.match(/\(async function renderScreen\(\)\s*\{([\s\S]*)\}\)\(\);?\s*$/);
if (!bodyMatch) {
  console.error("render-screen.js 구조 인식 실패");
  process.exit(3);
}
const body = bodyMatch[1];

// "  // ---------- main ----------" 이전 부분만 helper로 사용
const mainMarker = "  // ---------- main ----------";
const mainIdx = body.lastIndexOf(mainMarker);
if (mainIdx === -1) {
  console.error("main 마커 못 찾음 ('  // ---------- main ----------')");
  process.exit(3);
}
const helperSection = body.slice(0, mainIdx);

// ---------- batch main ----------
const batchMain = `
  // ---------- main (batch) ----------
  let targetPage = figma.root.children.find(function(p) { return p.name === "\\uD654\\uBA74"; });
  if (!targetPage) {
    targetPage = figma.createPage();
    targetPage.name = "\\uD654\\uBA74";
  }
  await figma.setCurrentPageAsync(targetPage);

  const allFrames = [];
  let xOffset = 0;
  const GAP = 48;

  for (let i = 0; i < SCREEN_DATA.length; i++) {
    const phoneFrame = buildScreen(SCREEN_DATA[i]);
    phoneFrame.x = xOffset;
    phoneFrame.y = 0;
    targetPage.appendChild(phoneFrame);
    allFrames.push(phoneFrame);
    xOffset += 375 + GAP;
  }

  figma.viewport.scrollAndZoomIntoView(allFrames);
  figma.notify("\\u2713 \\uD654\\uBA74 \\uB80C\\uB354 \\uC644\\uB8CC: " + SCREEN_DATA.length + "\\uAC1C");
`;

// ---------- 조합 ----------
const slugPrefix = prefix ? prefix.replace(/[^a-z0-9]/gi, "-").toLowerCase() : "batch";
const outSlug = "screen-batch-" + slugPrefix.replace(/-$/, "");

const banner = [
  "// =============================================",
  "// AUTO-GENERATED — DO NOT EDIT",
  "// source: scripter/bundle-screen-batch.js",
  "// renderer: scripter/render-screen.js",
  "// screens: " + files.map(function(f){ return f.replace(".sb.json",""); }).join(", "),
  "// generated at: " + new Date().toISOString(),
  "// Paste into Figma Scripter → Run ▶",
  "// =============================================",
  ""
].join("\n");

const dataJs = "const SCREEN_DATA = " + JSON.stringify(screens, null, 2) + ";";

const script = [
  banner,
  dataJs,
  "",
  "(async function renderScreenBatch() {",
  helperSection,
  batchMain,
  "})();"
].join("\n");

ensureDir(RUNS_DIR);
const outPath = path.join(RUNS_DIR, outSlug + ".generated.js");
fs.writeFileSync(outPath, script, "utf8");
console.log("✓ Written:", path.relative(ROOT, outPath), "(" + script.length + " bytes)");
console.log("  화면:", files.length + "개");

if (!dry) {
  try {
    execSync("pbcopy", { input: script });
    console.log("✓ Copied to clipboard (pbcopy)");
  } catch (e) {
    console.warn("⚠ pbcopy 실패 — 파일에서 직접 복사:", outPath);
  }
}
console.log("\nNext: Figma Scripter 에 붙여넣고 Run ▶ — '화면' 페이지에 " + files.length + "개 폰 프레임 생성");
