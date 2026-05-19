#!/usr/bin/env node
// =============================================
// SKT Genui — SB JSON → NOVA HTML
// generate-sb.js 산출물 (scripter/sb/<screenId>.sb.json) → NOVA 양식 HTML
//
// Usage:
//   node scripter/generate-sb-html.js scripter/sb/MBR-SIGNUP-TERMS.sb.json
//   node scripter/generate-sb-html.js scripter/sb/                          # 폴더 안 전체
//
// 산출물: scripter/sb-html/<screenId>.html (self-contained, inline style)
// =============================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "scripter", "sb-html");

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// _shared.css 인라인화
const SHARED_CSS = `
:root {
  --brand: #3617CE; --brand-soft: #F5F2FF; --brand-light: #EEEAFE;
  --warn: #F08C00; --warn-light: #FFF4DB;
  --danger: #C92A2A; --danger-light: #FFF5F5;
  --ok: #2F9E44; --ok-light: #EBFBEE;
  --auto: #1971C2; --auto-soft: #F4FAFF;
  --gray-50: #F8F9FA; --gray-100: #F1F3F5; --gray-200: #E9ECEF; --gray-500: #ADB5BD;
  --text: #212529; --text-secondary: #495057; --text-muted: #868E96;
  --mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, "Pretendard", "Apple SD Gothic Neo", sans-serif; color: var(--text); background: var(--gray-50); line-height: 1.6; -webkit-font-smoothing: antialiased; padding: 32px 24px; }
.wrap { max-width: 2400px; margin: 0 auto; }
.areas-wrap { overflow-x: auto; margin: 8px 0; }
.areas-wrap table { min-width: 2200px; margin: 0; }
.eyebrow { font-size: 12px; font-weight: 600; color: var(--brand); letter-spacing: 0.5px; margin-bottom: 6px; text-transform: uppercase; }
h1 { font-size: 24px; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.4px; }
.meta-line { font-size: 13px; color: var(--text-muted); margin-bottom: 20px; }
h2 { font-size: 17px; font-weight: 700; margin-top: 28px; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 2px solid var(--brand); color: var(--brand); }
table { width: 100%; border-collapse: collapse; background: white; border: 1px solid var(--gray-200); border-radius: 6px; overflow: hidden; margin: 8px 0; font-size: 12.5px; }
th, td { padding: 6px 10px; text-align: left; border-bottom: 1px solid var(--gray-200); vertical-align: top; }
th { background: var(--gray-50); font-weight: 600; font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.4px; }
tr:last-child td { border-bottom: none; }
code { font-family: var(--mono); font-size: 11.5px; background: var(--gray-100); padding: 1px 5px; border-radius: 3px; }
.tag { font-family: var(--mono); font-size: 11px; color: var(--brand); font-weight: 600; }
.tag-required { color: var(--danger); font-weight: 700; }
.tag-usability { color: var(--warn); font-weight: 700; }
.tag-action { color: var(--auto); font-weight: 600; }
.tag-permission { color: var(--ok); font-weight: 600; }
.tag-auto { color: var(--text-muted); font-style: italic; font-weight: 600; }
.note { background: var(--brand-soft); border-left: 4px solid var(--brand); padding: 10px 14px; margin: 10px 0; border-radius: 6px; font-size: 12.5px; color: var(--text-secondary); }
.dynamic-cell { background: var(--auto-soft); color: var(--auto); font-weight: 600; }
.static-cell { color: var(--text-muted); }
.desc-cell { font-size: 11.5px; line-height: 1.7; }
.desc-cell .line { margin-bottom: 2px; }
`;

// descriptions 한 셀 — [태그] 라인별 분해 + 시각 강조
function renderDescriptions(desc) {
  if (!desc) return "";
  const lines = desc.split("\n").map(l => l.trim()).filter(Boolean);
  return lines.map(line => {
    const m = line.match(/^\[([^\]]+)\]\s*(.*)$/);
    if (!m) return `<div class="line">${escapeHtml(line)}</div>`;
    const tag = m[1];
    const body = m[2];
    let tagClass = "tag";
    if (/^고지:필수/.test(tag)) tagClass = "tag tag-required";
    else if (/^고지:사용성/.test(tag)) tagClass = "tag tag-usability";
    else if (/^액션:/.test(tag)) tagClass = "tag tag-action";
    else if (/^권한:/.test(tag)) tagClass = "tag tag-permission";
    else if (/^자동:/.test(tag)) tagClass = "tag tag-auto";
    return `<div class="line"><span class="${tagClass}">[${escapeHtml(tag)}]</span> ${escapeHtml(body)}</div>`;
  }).join("");
}

function generateHtml(sb) {
  const moduleId = (sb.screenId || "").split("-")[0];
  const policy = (sb.mapping && sb.mapping.policy) || "—";
  const specInput = (sb.mapping && sb.mapping.spec_input) || "—";

  // 이미지 양식 — 1 area 안 N organism nested. area 정보는 첫 organism row 에만.
  // description 컬럼을 화면 구성 표 마지막에 통합 (별도 표 X).
  const areaRows = (sb.areas || []).flatMap((a) => {
    const organisms = (a.organisms && a.organisms.length > 0) ? a.organisms : [{ organismId: "—", organismName: "—", organismDescription: "—", serverControl: "" }];
    const dynamicCell = a.dynamic
      ? '<td class="dynamic-cell">dynamic</td>'
      : '<td class="static-cell">static</td>';
    const minMax = (a.displayCount && a.displayCount.min) ? `${a.displayCount.min}/${a.displayCount.max || "—"}` : "—";
    return organisms.map((og, ogIdx) => {
      const isFirst = ogIdx === 0;
      const areaCells = isFirst ? `
      <td>${a.no}</td>
      ${dynamicCell}
      <td><code>${escapeHtml(a.sectionId)}</code></td>
      <td>${escapeHtml(a.sectionName)}</td>
      <td>${escapeHtml(a.sectionDescription)}</td>
      <td>${escapeHtml(a.container)}</td>` : `
      <td></td><td></td><td></td><td></td><td></td><td></td>`;
      const priorityCell = isFirst ? `<td>${a.displayPriority}</td>` : `<td></td>`;
      const errorCell = isFirst ? `<td>${escapeHtml(a.errorHandling)}</td>` : `<td></td>`;
      const descCell = isFirst ? `<td class="desc-cell">${renderDescriptions(a.descriptions)}</td>` : `<td></td>`;
      return `
    <tr>${areaCells}
      <td>${ogIdx + 1}</td>
      <td><code>${escapeHtml(og.organismId)}</code></td>
      <td>${escapeHtml(og.organismName)}</td>
      <td>${escapeHtml(og.organismDescription)}</td>
      <td>${escapeHtml(og.serverControl || "")}</td>
      <td>${escapeHtml(minMax)}</td>
      ${priorityCell}
      ${errorCell}
      ${descCell}
    </tr>`;
    });
  }).join("");

  return `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>${escapeHtml(sb.screenId)} — ${escapeHtml(sb.screenName)} SB</title>
<style>${SHARED_CSS}</style></head>
<body><div class="wrap">
<div class="eyebrow">🤖 NOVA SB (자동 생성) — generate-sb-html.js</div>
<h1>${escapeHtml(sb.screenId)} — ${escapeHtml(sb.screenName)}</h1>
<div class="meta-line">
  📄 SDUI 화면설계서 (Screen-SB) · 입력: <code>${escapeHtml(specInput)}</code>
</div>

<div class="note">
  <strong>자동 생성 흐름</strong>
  SPEC_INPUT.md → generate-sb.js (SB JSON) → generate-sb-html.js (NOVA HTML).
  설계 원칙·역방향 매핑·서버제어 등 일부 섹션은 사용자 후처리 또는 정책서 직접 인용.
</div>

<h2>속성</h2>
<table>
  <tr><th style="width:160px">화면 ID</th><td><code>${escapeHtml(sb.screenId)}</code></td></tr>
  <tr><th>모듈 ID</th><td><code>${escapeHtml(moduleId)}</code></td></tr>
  <tr><th>화면 명</th><td>${escapeHtml(sb.screenName)}</td></tr>
  <tr><th>화면 경로</th><td><code>${escapeHtml(sb.screenPath || "—")}</code></td></tr>
  <tr><th>관련 정책서</th><td>${escapeHtml(policy)}</td></tr>
  <tr><th>배포일</th><td>${escapeHtml(sb.lastUpdated || "—")}</td></tr>
  <tr><th>배포자</th><td>${escapeHtml(sb.writer || "—")}</td></tr>
  <tr><th>현재 버전</th><td>${escapeHtml(sb.version || "—")}</td></tr>
</table>

<h2>화면 구성</h2>
<div class="areas-wrap">
<table>
  <tr>
    <th style="width:40px">no.</th>
    <th style="width:80px">영역 종류</th>
    <th style="width:200px">섹션 ID</th>
    <th style="width:140px">섹션 명</th>
    <th style="width:240px">섹션 설명</th>
    <th style="width:90px">컨테이너 유형</th>
    <th style="width:40px">No.</th>
    <th style="width:200px">오가니즘 ID</th>
    <th style="width:140px">오가니즘 명</th>
    <th style="width:240px">오가니즘 설명</th>
    <th style="width:200px">서버 제어 항목</th>
    <th style="width:90px">노출 개수 (min/max)</th>
    <th style="width:80px">노출 우선순위</th>
    <th style="width:120px">오류 처리 방식</th>
    <th style="width:340px">description</th>
  </tr>
  ${areaRows}
</table>
</div>

<div class="note">
  <strong>다음 단계 (사용자 보강)</strong>
  ① 설계 원칙 (정책서 § 인용) ② 케이스 매트릭스 ③ 역방향 매핑 ④ Section / Organism 단위 SB 분해.
</div>

</div></body></html>`;
}

// ---------- CLI ----------
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage:");
  console.error("  node scripter/generate-sb-html.js <sb-json-path-or-dir>");
  console.error("Example:");
  console.error("  node scripter/generate-sb-html.js scripter/sb/MBR-SIGNUP-TERMS.sb.json");
  console.error("  node scripter/generate-sb-html.js scripter/sb/");
  process.exit(1);
}

const inputPath = path.isAbsolute(args[0]) ? args[0] : path.join(ROOT, args[0]);
if (!fs.existsSync(inputPath)) {
  console.error("입력 없음:", inputPath);
  process.exit(2);
}

const stat = fs.statSync(inputPath);
const files = stat.isDirectory()
  ? fs.readdirSync(inputPath).filter(f => f.endsWith(".sb.json")).map(f => path.join(inputPath, f))
  : [inputPath];

ensureDir(OUTPUT_DIR);
for (const f of files) {
  const sb = JSON.parse(fs.readFileSync(f, "utf8"));
  const html = generateHtml(sb);
  const slug = sb.screenId || path.basename(f, ".sb.json");
  const outPath = path.join(OUTPUT_DIR, slug + ".html");
  fs.writeFileSync(outPath, html, "utf8");
  console.log("✓ " + slug + " → scripter/sb-html/" + slug + ".html");
}
console.log(`\n=== ${files.length} HTML 생성 ===`);
