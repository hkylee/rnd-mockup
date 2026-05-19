#!/usr/bin/env node
// =============================================
// POC — SB HTML v2 (단일 화면, schema 변경 시연용)
//
// 변경점:
//   - 'condition' 컬럼 추가 (organism 별 노출 분기 조건)
//   - 'organism priority' 컬럼 추가 (영역 안 우선순위)
//
// 조건 데이터 source: 스크립트 안 hardcoded MAP. sb json 원본은 변경 안 함.
// 사용자 결정 후 영구 적용 시 generate-sb.js 가 spec 에서 추출해 sb json 에 저장 → 이 스크립트 폐기.
//
// Usage:
//   node scripter/poc-sb-html-v2.js scripter/sb/MBR-LEAVE-IMPACT.sb.json
// =============================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "scripter", "sb-html");

// LEAVE-IMPACT 화면용 condition / organism priority 시연 데이터.
// (organism path → { condition, priority })
// area sectionId 와 organism path 둘 다 기준으로 매칭.
const POC_OVERRIDES = {
  "MBR-LEAVE-IMPACT": {
    "section-MBR-leave-impact-asset": [
      { match: "mol/notice-card", condition: "보유 자산 있음 (없으면 영역 hide)", priority: 1 }
    ],
    "section-MBR-leave-impact-related": [
      { match: "mol/notice-card", condition: "연계 서비스 있음 (없으면 영역 hide)", priority: 1 }
    ],
    "section-MBR-leave-impact-data": [
      { match: "mol/notice-card", condition: "항상 (법적 필수)", priority: 1 }
    ],
    "section-MBR-leave-impact-list": [
      { match: "ogn/MBR/leave-impact-list", condition: "외피 — 위 3 카드를 묶는 컨테이너", priority: 1 }
    ],
    "section-MBR-leave-impact-confirm": [
      { match: "mol/checkbox-item", condition: "항상 (체크 필수)", priority: 1 },
      { match: "ogn/sticky-footer", condition: "체크 후 활성 (미체크 시 disabled)", priority: 2 }
    ]
  }
};

function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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
.wrap { max-width: 2600px; margin: 0 auto; }
.areas-wrap { overflow-x: auto; margin: 8px 0; }
.areas-wrap table { min-width: 2400px; margin: 0; }
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
.line { margin: 2px 0; }
.dynamic-cell { color: var(--auto); font-weight: 600; font-family: var(--mono); font-size: 11px; }
.static-cell { color: var(--text-muted); font-family: var(--mono); font-size: 11px; }
.note { background: var(--brand-soft); border-left: 3px solid var(--brand); padding: 10px 14px; margin: 14px 0; font-size: 13px; line-height: 1.5; border-radius: 0 4px 4px 0; }
.note strong { display: block; color: var(--brand); margin-bottom: 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.4px; }
.desc-cell { font-family: var(--mono); font-size: 11px; line-height: 1.5; }
.condition-cell { color: var(--auto); font-style: italic; font-size: 11.5px; }
.condition-empty { color: var(--gray-500); }
.priority-cell { text-align: center; font-weight: 600; }
`;

function renderDescriptions(text) {
  if (!text) return "";
  return String(text).split("\n").filter(l => l.trim()).map(line => {
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

function lookupOverride(screenId, sectionId, organismId) {
  const map = POC_OVERRIDES[screenId];
  if (!map) return { condition: "", priority: "" };
  const list = map[sectionId];
  if (!list) return { condition: "", priority: "" };
  const found = list.find(o => organismId.indexOf(o.match) !== -1);
  return found ? { condition: found.condition, priority: found.priority } : { condition: "", priority: "" };
}

function generateHtml(sb) {
  const moduleId = (sb.screenId || "").split("-")[0];
  const policy = (sb.mapping && sb.mapping.policy) || "—";
  const specInput = (sb.mapping && sb.mapping.spec_input) || "—";

  const areaRows = (sb.areas || []).flatMap((a) => {
    const organisms = (a.organisms && a.organisms.length > 0) ? a.organisms : [{ organismId: "—", organismName: "—", organismDescription: "—", serverControl: "" }];
    const dynamicCell = a.dynamic
      ? '<td class="dynamic-cell">dynamic</td>'
      : '<td class="static-cell">static</td>';
    const minMax = (a.displayCount && a.displayCount.min) ? `${a.displayCount.min}/${a.displayCount.max || "—"}` : "—";
    return organisms.map((og, ogIdx) => {
      const isFirst = ogIdx === 0;
      const ovr = lookupOverride(sb.screenId, a.sectionId, og.organismId);
      const condCell = ovr.condition
        ? `<td class="condition-cell">${escapeHtml(ovr.condition)}</td>`
        : `<td class="condition-cell condition-empty">—</td>`;
      const ogPriorityCell = `<td class="priority-cell">${ovr.priority || (ogIdx + 1)}</td>`;
      const areaCells = isFirst ? `
      <td>${a.no}</td>
      ${dynamicCell}
      <td><code>${escapeHtml(a.sectionId)}</code></td>
      <td>${escapeHtml(a.sectionName)}</td>
      <td>${escapeHtml(a.sectionDescription)}</td>
      <td>${escapeHtml(a.container)}</td>` : `
      <td></td><td></td><td></td><td></td><td></td><td></td>`;
      const areaPriorityCell = isFirst ? `<td class="priority-cell">${a.displayPriority}</td>` : `<td></td>`;
      const errorCell = isFirst ? `<td>${escapeHtml(a.errorHandling)}</td>` : `<td></td>`;
      const descCell = isFirst ? `<td class="desc-cell">${renderDescriptions(a.descriptions)}</td>` : `<td></td>`;
      return `
    <tr>${areaCells}
      <td class="priority-cell">${ogIdx + 1}</td>
      <td><code>${escapeHtml(og.organismId)}</code></td>
      ${condCell}
      ${ogPriorityCell}
      <td>${escapeHtml(og.organismName)}</td>
      <td>${escapeHtml(og.organismDescription)}</td>
      <td>${escapeHtml(og.serverControl || "")}</td>
      <td>${escapeHtml(minMax)}</td>
      ${areaPriorityCell}
      ${errorCell}
      ${descCell}
    </tr>`;
    });
  }).join("");

  return `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>${escapeHtml(sb.screenId)} — ${escapeHtml(sb.screenName)} SB v2 (POC)</title>
<style>${SHARED_CSS}</style></head>
<body><div class="wrap">
<div class="eyebrow">🤖 NOVA SB v2 (POC) — poc-sb-html-v2.js</div>
<h1>${escapeHtml(sb.screenId)} — ${escapeHtml(sb.screenName)} <span style="font-size:13px;color:var(--text-muted);font-weight:400">[v2 시연]</span></h1>
<div class="meta-line">
  📄 SDUI 화면설계서 v2 시연 — condition / organism priority 컬럼 추가 · 입력: <code>${escapeHtml(specInput)}</code>
</div>

<div class="note">
  <strong>v2 변경점</strong>
  ① <code>condition</code> 컬럼 추가 — organism 별 노출 분기 조건 (조건 명시 안 하면 "—" = 항상 노출/nested 일부) ·
  ② <code>organism priority</code> 컬럼 추가 — 영역 (area) 안 organism 들의 우선순위 ·
  현재 시연 데이터는 스크립트 hardcoded (사용자 결정 후 spec 에서 자동 추출 가능).
</div>

<h2>속성</h2>
<table>
  <tr><th style="width:160px">화면 ID</th><td><code>${escapeHtml(sb.screenId)}</code></td></tr>
  <tr><th>모듈 ID</th><td><code>${escapeHtml(moduleId)}</code></td></tr>
  <tr><th>화면 명</th><td>${escapeHtml(sb.screenName)}</td></tr>
  <tr><th>관련 정책서</th><td>${escapeHtml(policy)}</td></tr>
</table>

<h2>화면 구성 (v2)</h2>
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
    <th style="width:200px">컴포넌트 ID</th>
    <th style="width:240px;background:var(--brand-soft)">condition <small>(v2 신규)</small></th>
    <th style="width:80px;background:var(--brand-soft)">organism priority <small>(v2)</small></th>
    <th style="width:140px">컴포넌트 명</th>
    <th style="width:240px">컴포넌트 설명</th>
    <th style="width:200px">서버 제어 항목</th>
    <th style="width:90px">노출 개수</th>
    <th style="width:80px">영역 우선순위</th>
    <th style="width:120px">오류 처리 방식</th>
    <th style="width:340px">description</th>
  </tr>
  ${areaRows}
</table>
</div>

</div></body></html>`;
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node scripter/poc-sb-html-v2.js <sb-json-path>");
  process.exit(1);
}

const inputPath = path.isAbsolute(args[0]) ? args[0] : path.join(ROOT, args[0]);
if (!fs.existsSync(inputPath)) {
  console.error("입력 없음:", inputPath);
  process.exit(2);
}

const sb = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const html = generateHtml(sb);
const slug = (sb.screenId || path.basename(inputPath, ".sb.json")) + "-v2";
const outPath = path.join(OUTPUT_DIR, slug + ".html");
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(outPath, html, "utf8");
console.log("✓ " + slug + " → scripter/sb-html/" + slug + ".html");
