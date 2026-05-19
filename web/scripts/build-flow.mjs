#!/usr/bin/env node
// =============================================
// mockup/specs-flow/*.md 의 "화면 시퀀스" 표 파싱 → src/lib/page-flow.json
// 형식: { "MBR/leave-impact": "MBR/leave-confirm", ... }
// 명령: npm run build:flow (또는 sync:shared 의 chain)
// =============================================
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const FLOW_DIR = resolve(WEB_ROOT, "../mockup/specs-flow");
const OUT_PATH = resolve(WEB_ROOT, "src/lib/page-flow.json");

function parseFlowMd(content, moduleCode) {
  // "## 2. 화면 시퀀스" 블록 안 표 row 추출
  // | Step | screen-id | 화면 한글 | 사용자 task | UX 단계 | 다음 |
  const flow = {};
  const lines = content.split("\n");
  let inSequence = false;
  for (const line of lines) {
    if (/^##\s+\d+\.\s+화면 시퀀스/.test(line)) { inSequence = true; continue; }
    if (inSequence && /^##\s+/.test(line)) break;
    if (!inSequence) continue;
    // table row: | step | `screen-id` | ... | `next-id` |
    const cols = line.split("|").map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
    if (cols.length < 6) continue;
    const screenIdRaw = cols[1];
    const nextRaw = cols[5];
    // backtick 안 screen-id 추출 (⭐ 같은 메타 char 무시)
    const idMatch = screenIdRaw.match(/`([^`]+)`/);
    const nextMatch = nextRaw.match(/`([^`]+)`/);
    if (!idMatch) continue;
    const screenId = idMatch[1].trim();
    const fullPath = `${moduleCode}/${screenId}`;
    if (nextMatch) {
      let nextId = nextMatch[1].trim();
      // 같은 모듈 가정 — module/ 없는 형식이면 prefix 추가
      if (!nextId.includes("/")) nextId = `${moduleCode}/${nextId}`;
      flow[fullPath] = nextId;
    } else {
      // 다음 없음 (마지막 화면 또는 BSS 자동)
      flow[fullPath] = null;
    }
  }
  return flow;
}

const flow = {};
if (existsSync(FLOW_DIR)) {
  const files = readdirSync(FLOW_DIR).filter(f => f.endsWith(".md"));
  for (const f of files) {
    // 파일 이름 = "MBR-leave.md" → moduleCode = "MBR"
    const m = f.match(/^([A-Z]+)-/);
    if (!m) continue;
    const moduleCode = m[1];
    const content = readFileSync(resolve(FLOW_DIR, f), "utf8");
    Object.assign(flow, parseFlowMd(content, moduleCode));
  }
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(flow, null, 2));

console.log(`✓ Written: ${OUT_PATH.replace(WEB_ROOT, ".")}`);
console.log(`  flow entries: ${Object.keys(flow).length}`);
console.log(`  sample:`, Object.entries(flow).slice(0, 3).map(([k, v]) => `${k} → ${v}`).join(" | "));
