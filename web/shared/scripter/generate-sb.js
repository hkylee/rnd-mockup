#!/usr/bin/env node
// =============================================
// SKT Genui — SB Generator (prototype)
// SPEC_INPUT.md (mockup 기능내역서) → SB JSON (mockup/sb-doc/ 화면설계서)
//
// Usage:
//   node scripter/generate-sb.js specs-input/MBR-signup.md      # 단일 use case
//
// 동작:
//   1) markdown 파싱 — # 화면 N 으로 화면 분리
//   2) 각 화면의 # 화면 정보 / # 컨텍스트 / # 기능 목록 추출
//   3) 기능별 'SB description' 태그 → SB area.descriptions
//   4) scripter/sb/<screenId>.sb.json 으로 출력 (mockup/sb-doc/sb-template-schema.md 형식)
//
// 산출물:
//   {
//     "screenId": "MBR-SIGNUP-TERMS",
//     "screenName": "약관 동의",
//     "areas": [
//       { "label": "기능 1: 약관 목록 노출", "descriptions": "[영역명] ...\n[고지:필수|...]" }
//     ]
//   }
// =============================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "scripter", "sb");

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

// ---------- markdown 파싱 ----------

// ## 화면 N: <한글이름> 으로 화면 분리.
// fallback: `## 화면 N:` 매치 없고 `# 화면 정보` 만 있으면 single-screen 파일 (BIL 형식) — 전체를 1 screen 으로.
function splitScreens(text) {
  const screenPattern = /^## 화면 \d+: (.+)$/gm;
  const screens = [];
  let lastIdx = 0;
  let lastTitle = null;
  let match;
  while ((match = screenPattern.exec(text)) !== null) {
    if (lastTitle !== null) {
      screens.push({ title: lastTitle, body: text.slice(lastIdx, match.index) });
    }
    lastTitle = match[1].trim();
    lastIdx = match.index;
  }
  if (lastTitle !== null) {
    screens.push({ title: lastTitle, body: text.slice(lastIdx) });
  }
  if (screens.length === 0 && /^#\s*화면\s*정보/m.test(text)) {
    screens.push({ title: null, body: text });
  }
  return screens;
}

// 화면 정보 (- 모듈 코드 / - 화면 이름 / 등) 파싱.
// 지원 형식:
//   - **키**: 값                            (signup 양식)
//   - 키: 값                                (plain)
//   - **키1**: 값1 · 키2: 값2 · ...          (leave/rejoin/dormant 양식 — 한 줄 multi-key)
function parseScreenInfo(body) {
  const info = {};
  const lines = body.split("\n");
  for (const line of lines) {
    if (!line.startsWith("- ")) continue;
    const stripped = line.slice(2);
    const segments = stripped.split(/\s+·\s+/);
    for (const seg of segments) {
      let m = seg.match(/^\*\*([^*]+)\*\*[^:]*:\s*(.+)$/);
      if (m) {
        const key = m[1].trim();
        if (!info[key]) info[key] = m[2].trim();
        continue;
      }
      m = seg.match(/^([^:*][^:]*?):\s*(.+)$/);
      if (m) {
        const key = m[1].trim();
        if (!info[key]) info[key] = m[2].trim();
      }
    }
  }
  return info;
}

// 기능 N: <이름> 으로 기능 분리 (한 화면 body 안).
// MBR (multi-screen) 형식 = `#### 기능 N:`, BIL (single-screen) 형식 = `## 기능 N:`. 둘 다 매칭.
function splitFunctions(body) {
  const fnPattern = /^(?:####|##) 기능 \d+: (.+)$/gm;
  const functions = [];
  let lastIdx = 0;
  let lastTitle = null;
  let match;
  while ((match = fnPattern.exec(body)) !== null) {
    if (lastTitle !== null) {
      functions.push({ title: lastTitle, body: body.slice(lastIdx, match.index) });
    }
    lastTitle = match[1].trim();
    lastIdx = match.index;
  }
  if (lastTitle !== null) {
    functions.push({ title: lastTitle, body: body.slice(lastIdx) });
  }
  return functions;
}

// 기능 안 'SB description' 또는 'sb description' 필드 추출 (multi-line, ``` block)
// markdown list item 안 ``` block 은 보통 2 space indent — 모든 라인에서 공통 indent 제거
function dedent(text) {
  const lines = text.split("\n");
  const indents = lines
    .filter((l) => l.trim().length > 0)
    .map((l) => l.match(/^\s*/)[0].length);
  if (indents.length === 0) return text;
  const minIndent = Math.min(...indents);
  return lines.map((l) => l.slice(minIndent)).join("\n");
}

function extractSbDescription(fnBody) {
  // 패턴 1: - **SB description**: 다음 ``` ... ``` 블록
  const block = fnBody.match(/SB description[^\n]*:\n\s*```[^\n]*\n([\s\S]*?)\n\s*```/i);
  if (block) return dedent(block[1]).trim();
  // 패턴 2: 단순 inline (한 줄)
  const inline = fnBody.match(/SB description[^\n]*:\s*(.+)$/im);
  if (inline) return inline[1].trim();
  return "";
}

// dynamic / static 판정.
// 우선: 사용자가 '노출 방식: dynamic|static|yes|no' 명시하면 그대로.
// 없으면 SB description 의 [상태:loading|empty|error] 태그로 자동 판단 (API 호출 신호).
function inferDynamic(fnBody, description) {
  const explicit = fnBody.match(/노출\s*방식\s*:\s*(dynamic|static|yes|no)/i);
  if (explicit) {
    const v = explicit[1].toLowerCase();
    return v === "dynamic" || v === "yes";
  }
  return /\[상태:(loading|empty|error)\]/.test(description);
}

// ---------- 변환 ----------

// 단순 list-item 필드 추출 — '- 키: 값' 또는 '- **키**: 값' 양식 한 줄.
function extractField(body, key) {
  const re = new RegExp("^-\\s*(?:\\*\\*)?" + key + "(?:\\*\\*)?\\s*[:：]\\s*(.+)$", "im");
  const m = body.match(re);
  return m ? m[1].trim() : "";
}

// 노출 개수 — '1/1' / '0/1' / '1/N' 형식 → { min, max }
function parseDisplayCount(s) {
  if (!s) return { min: "", max: "" };
  const m = s.match(/^([0-9N]+)\s*\/\s*([0-9N]+)$/i);
  if (m) return { min: m[1], max: m[2] };
  return { min: s, max: "" };
}

// 오가니즘 분해 — list 양식 파싱.
//   - ogn-MBR-foo: 한글명 — 설명
//     서버 제어: a, b
function parseOrganisms(body) {
  // "오가니즘 분해" label 다음 줄들 (다음 - **... 또는 ### 까지)
  const startRe = /^-\s*(?:\*\*)?오가니즘\s*분해(?:\*\*)?\s*[:：]?\s*$/im;
  const match = body.match(startRe);
  if (!match) return [];
  const fromIdx = body.indexOf(match[0]) + match[0].length;
  // 끝 — 다음 list item (- **) 또는 ### / ``` 만남
  const tail = body.slice(fromIdx);
  const stopRe = /\n-\s*\*\*[^*]+\*\*|\n###|\n```/;
  const stopM = tail.match(stopRe);
  const segment = stopM ? tail.slice(0, stopM.index) : tail;

  // organism 라인 찾기 — '  - ogn-...: 한글명 — 설명' (들여쓰기 2 space)
  const lines = segment.split("\n");
  const organisms = [];
  let current = null;
  for (const line of lines) {
    const ognMatch = line.match(/^\s*-\s*(ogn-[\w/-]+)\s*[:：]\s*(.+)$/);
    if (ognMatch) {
      if (current) organisms.push(current);
      const idAndRest = ognMatch[2];
      // 한글명 — 설명 분리 (em-dash 또는 hyphen)
      const dashMatch = idAndRest.match(/^([^—-]+?)\s*[—-]\s*(.+)$/);
      const organismName = dashMatch ? dashMatch[1].trim() : idAndRest.trim();
      const organismDescription = dashMatch ? dashMatch[2].trim() : "";
      current = {
        organismId: ognMatch[1],
        organismName: organismName,
        organismDescription: organismDescription,
        serverControl: ""
      };
      continue;
    }
    const serverMatch = line.match(/^\s*서버\s*제어\s*[:：]\s*(.+)$/);
    if (serverMatch && current) {
      current.serverControl = serverMatch[1].trim();
    }
  }
  if (current) organisms.push(current);
  return organisms;
}

// '사용 컴포넌트' 라인에서 ogn/mol/atom path 모두 추출 — area 에 쓰이는 컴포넌트 ground truth.
// 형식: '- **사용 컴포넌트(?: 후보)?**: `ogn/MBR/auth-method-list` + `mol/text-input-field` × N + `atom/btn`'
function extractComponentsFromUsage(body) {
  const lines = body.split("\n");
  const paths = [];
  for (const line of lines) {
    if (!/사용\s*컴포넌트/.test(line)) continue;
    const matches = line.matchAll(/`?((?:ogn|mol|atom)\/[\w/-]+)`?/g);
    for (const m of matches) {
      if (!paths.includes(m[1])) paths.push(m[1]);
    }
  }
  return paths.map((p) => ({
    organismId: p,
    organismName: "",
    organismDescription: "",
    serverControl: ""
  }));
}

// 기능명 → kebab-case section ID slug
function slugify(s) {
  return String(s || "")
    .replace(/^기능\s*\d+:\s*/, "")
    .replace(/\s+/g, "-")
    .replace(/[·,()/]/g, "")
    .toLowerCase();
}

function functionsToAreas(functions, screenInfo) {
  const moduleCode = (screenInfo["모듈 코드"] || "UNKNOWN").toUpperCase();
  return functions.map((fn, i) => {
    const desc = extractSbDescription(fn.body);
    const kind = (extractField(fn.body, "영역\\s*종류") || "body").toLowerCase();
    const container = (extractField(fn.body, "컨테이너\\s*유형") || "vertical").toLowerCase();
    const displayCount = parseDisplayCount(extractField(fn.body, "노출\\s*개수"));
    const displayPriorityRaw = extractField(fn.body, "노출\\s*우선순위");
    const displayPriority = displayPriorityRaw ? parseInt(displayPriorityRaw, 10) || (i + 1) : (i + 1);
    const errorHandling = extractField(fn.body, "오류\\s*처리\\s*방식") || "";

    // 1순위 — '사용 컴포넌트' 라인의 ogn/mol/atom path (ground truth, paths 만 풍부)
    let organisms = extractComponentsFromUsage(fn.body);
    // 2순위 — '오가니즘 분해' 섹션 (organismName/Description/serverControl 정보 풍부)
    const decomposed = parseOrganisms(fn.body);
    if (organisms.length > 0 && decomposed.length > 0) {
      // 두 양식 모두 있을 때 — 1순위 path 에 2순위의 name/description/serverControl 머지
      // ID 정규화: 'ogn/BIL/foo' (slash) ↔ 'ogn-BIL-foo' (dash) 양방향 매칭
      const norm = (id) => String(id).replace(/[/]/g, "-");
      const decByNorm = new Map();
      for (const d of decomposed) decByNorm.set(norm(d.organismId), d);
      organisms = organisms.map((o) => {
        const hit = decByNorm.get(norm(o.organismId));
        return hit ? {
          organismId: o.organismId,
          organismName: hit.organismName || o.organismName,
          organismDescription: hit.organismDescription || o.organismDescription,
          serverControl: hit.serverControl || o.serverControl,
        } : o;
      });
    } else if (organisms.length === 0 && decomposed.length > 0) {
      organisms = decomposed;
    }
    // 3순위 fallback — 자동 1 organism (기능명 자체, 한글 slug)
    if (organisms.length === 0) {
      organisms = [{
        organismId: `ogn-${moduleCode}-${slugify(fn.title)}`,
        organismName: fn.title,
        organismDescription: extractField(fn.body, "설명") || "",
        serverControl: ""
      }];
    }

    const explicitSectionId = extractField(fn.body, "섹션\\s*ID");
    return {
      no: i + 1,
      kind: kind,
      sectionId: explicitSectionId || `section-${moduleCode}-${slugify(fn.title)}`,
      sectionName: fn.title,
      sectionDescription: extractField(fn.body, "설명") || "",
      container: container,
      displayCount: displayCount,
      displayPriority: displayPriority,
      errorHandling: errorHandling,
      dynamic: inferDynamic(fn.body, desc),
      organisms: organisms,
      descriptions: desc || `[영역명] ${fn.title}\n(SB description 미작성 — SPEC_INPUT 의 'SB description' 필드 채워주세요)`,
      // 호환 — 옛 generate-sb-html 의 label 참조 흡수
      label: `기능 ${i + 1}: ${fn.title}`
    };
  });
}

function buildScreenId(info) {
  // 화면 이름 (영문 kebab-case) + 모듈 코드 → SCREEN-ID 형식
  const moduleCode = (info["모듈 코드"] || "UNKNOWN").toUpperCase();
  const screenName = (info["화면 이름"] || "unknown").replace(/[^a-z0-9-]/gi, "");
  return `${moduleCode}-${screenName.toUpperCase()}`;
}

function specInputToSBs(text, sourceFile) {
  const screens = splitScreens(text);
  const result = [];
  for (const screen of screens) {
    const info = parseScreenInfo(screen.body);
    const functions = splitFunctions(screen.body);
    const screenId = buildScreenId(info);
    const sb = {
      screenId,
      screenName: info["화면 한글명"] || screen.title,
      screenPath: info["출처"] || "",
      sectionName: `SB-${(info["모듈 코드"] || "UNKNOWN").toUpperCase()}`,
      lastUpdated: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      writer: "(generate-sb.js)",
      version: "v1.0",
      mapping: {
        policy: info["출처"] || "",
        spec_input: sourceFile,
      },
      areas: functionsToAreas(functions, info),
    };
    result.push(sb);
  }
  return result;
}

// ---------- CLI ----------

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage:");
  console.error("  node scripter/generate-sb.js <specs-input md path>");
  console.error("Example:");
  console.error("  node scripter/generate-sb.js specs-input/MBR-signup.md");
  process.exit(1);
}

const inputPath = path.isAbsolute(args[0]) ? args[0] : path.join(ROOT, args[0]);
if (!fs.existsSync(inputPath)) {
  console.error("✗ file not found:", inputPath);
  process.exit(2);
}

const text = fs.readFileSync(inputPath, "utf8");
const sourceFile = path.relative(ROOT, inputPath);
const sbs = specInputToSBs(text, sourceFile);

ensureDir(OUTPUT_DIR);
for (const sb of sbs) {
  const outPath = path.join(OUTPUT_DIR, sb.screenId + ".sb.json");
  fs.writeFileSync(outPath, JSON.stringify(sb, null, 2), "utf8");
  console.log(`✓ ${sb.screenId} (${sb.areas.length} areas) → scripter/sb/${sb.screenId}.sb.json`);
}
console.log(`\n=== ${sbs.length} screens converted ===`);
