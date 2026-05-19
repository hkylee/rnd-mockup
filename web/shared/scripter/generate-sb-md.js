#!/usr/bin/env node
// =============================================
// SKT Genui — SB JSON → NOVA MD
// generate-sb.js 산출물 (scripter/sb/<screenId>.sb.json) → 마크다운 화면설계서
//
// Usage:
//   node scripter/generate-sb-md.js scripter/sb/MBR-SIGNUP-TERMS.sb.json
//   node scripter/generate-sb-md.js scripter/sb/                          # 폴더 안 전체
//
// 산출물: scripter/sb-md/<screenId>.sb.md
// =============================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "scripter", "sb-md");

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function s(v) { return v == null ? "" : String(v); }

function generateMd(sb) {
  const moduleId = (sb.screenId || "").split("-")[0];
  const policy = (sb.mapping && sb.mapping.policy) || "—";
  const specInput = (sb.mapping && sb.mapping.spec_input) || "—";

  // YAML frontmatter
  const frontmatter = [
    "---",
    `screenId: ${s(sb.screenId)}`,
    `screenName: ${s(sb.screenName)}`,
    `moduleId: ${moduleId}`,
    `version: ${s(sb.version || "v1.0")}`,
    `lastUpdated: ${s(sb.lastUpdated || "")}`,
    `writer: ${s(sb.writer || "")}`,
    `specInput: ${specInput}`,
    `policy: ${policy}`,
    "---",
  ].join("\n");

  // 속성 테이블
  const attrTable = [
    "| 항목 | 값 |",
    "|------|-----|",
    `| 화면 ID | \`${s(sb.screenId)}\` |`,
    `| 화면명 | ${s(sb.screenName)} |`,
    `| 모듈 ID | \`${moduleId}\` |`,
    `| 화면 경로 | \`${s(sb.screenPath || "—")}\` |`,
    `| 관련 정책서 | ${policy} |`,
    `| 배포일 | ${s(sb.lastUpdated || "—")} |`,
    `| 배포자 | ${s(sb.writer || "—")} |`,
    `| 현재 버전 | ${s(sb.version || "—")} |`,
    `| 입력 파일 | \`${specInput}\` |`,
  ].join("\n");

  // area별 소섹션
  const areaSections = (sb.areas || []).map((a) => {
    const dynamicLabel = a.dynamic ? "`dynamic`" : "`static`";
    const minMax = (a.displayCount && a.displayCount.min)
      ? `${s(a.displayCount.min)}~${s(a.displayCount.max || "N")}`
      : "—";

    const metaLine = [
      `**Section ID:** \`${s(a.sectionId)}\``,
      `**container:** ${s(a.container) || "—"}`,
      `**노출:** ${minMax}`,
      `**우선순위:** ${s(a.displayPriority) || "—"}`,
      a.errorHandling ? `**에러처리:** ${s(a.errorHandling)}` : null,
    ].filter(Boolean).join(" | ");

    // organisms 테이블
    const organisms = (a.organisms && a.organisms.length > 0)
      ? a.organisms
      : [{ organismId: "—", organismName: "—", organismDescription: "—", serverControl: "" }];

    const ognRows = organisms.map((og, i) =>
      `| ${i + 1} | \`${s(og.organismId)}\` | ${s(og.organismName)} | ${s(og.organismDescription)} | ${s(og.serverControl || "")} |`
    ).join("\n");

    const ognTable = [
      "| no | Organism ID | Organism명 | Organism 설명 | 서버제어 |",
      "|----|------------|-----------|--------------|---------|",
      ognRows,
    ].join("\n");

    // descriptions 코드블록
    const descBlock = a.descriptions
      ? ["**디스크립션:**", "```", a.descriptions.trim(), "```"].join("\n")
      : "";

    const parts = [
      `### ${a.no}. ${s(a.sectionName)} — ${dynamicLabel}`,
      s(a.sectionDescription) ? `> ${s(a.sectionDescription)}` : null,
      metaLine,
      ognTable,
      descBlock,
    ].filter(v => v != null && v !== "");

    return parts.join("\n\n");
  });

  const lines = [
    frontmatter,
    "",
    `# ${s(sb.screenId)} — ${s(sb.screenName)}`,
    "",
    `> 🤖 NOVA SB (자동 생성) | 입력: \`${specInput}\``,
    "",
    "## 속성",
    "",
    attrTable,
    "",
    "## 화면 구성",
    "",
    areaSections.join("\n\n---\n\n"),
    "",
    "---",
    "",
    "> **다음 단계 (사용자 보강):** ① 설계 원칙 (정책서 § 인용) ② 케이스 매트릭스 ③ 역방향 매핑 ④ Section / Organism 단위 SB 분해",
  ];

  return lines.join("\n");
}

// ---------- CLI ----------
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage:");
  console.error("  node scripter/generate-sb-md.js <sb-json-path-or-dir>");
  console.error("Example:");
  console.error("  node scripter/generate-sb-md.js scripter/sb/MBR-SIGNUP-TERMS.sb.json");
  console.error("  node scripter/generate-sb-md.js scripter/sb/");
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
  const md = generateMd(sb);
  const slug = sb.screenId || path.basename(f, ".sb.json");
  const outPath = path.join(OUTPUT_DIR, slug + ".sb.md");
  fs.writeFileSync(outPath, md, "utf8");
  console.log("✓ " + slug + " → scripter/sb-md/" + slug + ".sb.md");
}
console.log(`\n=== ${files.length}개 MD 생성 ===`);
