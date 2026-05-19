#!/usr/bin/env node
// =============================================
// page-interactions.json 자동 추론
// 입력: shared/component-specs/page/**/*.json + page-flow.json
// 출력: src/lib/page-interactions.auto.json
//
// 룰:
//  - mol/checkbox-item id → states[id] = false
//  - mol/all-agree-row id → states[id] = false + sync[id] = [같은 page 안 모든 checkbox-item id]
//  - actions.next:
//      target = flow[slug] (다음 page)
//      condition = all-agree-row 의 id (있으면) || 모든 checkbox-item 의 AND || (없으면 미지정 — 항상 true)
//
// page-interactions.json (수동 작성) 이 있으면 그게 우선 (override). auto 는 fallback.
// =============================================
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const SPECS_ROOT = resolve(WEB_ROOT, "shared/component-specs");
const FLOW_PATH = resolve(WEB_ROOT, "src/lib/page-flow.json");
const OUT_PATH = resolve(WEB_ROOT, "src/lib/page-interactions.auto.json");
const SPECS_INPUT_DIR = resolve(WEB_ROOT, "../mockup/specs-input"); // mockup 직접 참조 (sync 안 함)

// ---------- 모든 spec 수집 (name → spec) ----------
const specByName = new Map();
function walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (entry.endsWith(".json")) {
      try {
        const spec = JSON.parse(readFileSync(full, "utf8"));
        if (spec.name) specByName.set(spec.name, spec);
      } catch (e) {}
    }
  }
}
walk(SPECS_ROOT);

const flow = existsSync(FLOW_PATH) ? JSON.parse(readFileSync(FLOW_PATH, "utf8")) : {};

// ---------- specs-input MD 의 정형 인라인 태그 파싱 (### 액션 섹션) ----------
// INTERACTION_TAGS.md 의 8종 태그 추출 → page-level interactions
// 핵심 4종만 우선 처리 (시나리오 4종은 다음 세션):
//   [interactive] <id>: <type>
//   [sync] <parent>: [<c1>, <c2>, ...]
//   [tap] [<선택자>] → <action>
//   [enabled] [<선택자>] if <condition>
function parseInlineTags(mdContent) {
  // page slug 별 누적 — { "MBR/leave-impact": { states, actions, sync, enabled, ... } }
  const result = {};
  let currentPageSlug = null;
  let inActionSection = false;

  const lines = mdContent.split("\n");
  for (const raw of lines) {
    const line = raw.trim();
    // ## 화면 N: page/<MODULE>/<name> — ...
    const screenMatch = raw.match(/^##\s+화면\s+\d+:\s+page\/([^\s—]+)/);
    if (screenMatch) {
      currentPageSlug = screenMatch[1].trim();
      inActionSection = false;
      continue;
    }
    // ### 액션 섹션 진입
    if (/^###\s+액션/.test(raw)) {
      inActionSection = true;
      continue;
    }
    // 다른 ### 또는 ## 만나면 액션 섹션 종료
    if (/^##/.test(raw) || (inActionSection && /^###\s+(?!액션)/.test(raw))) {
      if (!screenMatch) inActionSection = false;
    }
    if (!inActionSection || !currentPageSlug) continue;
    if (!line.startsWith("- [")) continue;

    if (!result[currentPageSlug]) result[currentPageSlug] = { states: {}, sync: {}, actions: [], enabled: [], loading: null, nav: {} };
    const inter = result[currentPageSlug];

    // [interactive] <id>: <type>
    let m = line.match(/^-\s+\[interactive\]\s+([^:]+):\s+(toggle|all-toggle|radio-group)\s*$/);
    if (m) {
      const id = m[1].trim();
      inter.states[id] = false;
      inter._types = inter._types || {};
      inter._types[id] = m[2];
      continue;
    }
    // [sync] <parent>: [<c1>, <c2>, ...]
    m = line.match(/^-\s+\[sync\]\s+([^:]+):\s+\[([^\]]+)\]\s*$/);
    if (m) {
      const parent = m[1].trim();
      const children = m[2].split(",").map(s => s.trim()).filter(Boolean);
      inter.sync[parent] = children;
      // 자식들도 states 에 자동 등록
      for (const c of children) {
        if (!(c in inter.states)) inter.states[c] = false;
      }
      continue;
    }
    // [tap] [<selector>] → <action>
    m = line.match(/^-\s+\[tap\]\s+\[([^\]]+)\]\s+(?:→|->)\s+(.+)\s*$/);
    if (m) {
      const selector = m[1].trim();
      const action = m[2].trim();
      // action 형식: navigate:<slug> | back | bottom-sheet:<id> | modal:<id> | toggle | submit
      const navMatch = action.match(/^navigate:(.+)$/);
      const sheetMatch = action.match(/^(bottom-sheet|modal):(.+)$/);
      const entry = { trigger: "tap", selector };
      if (navMatch) {
        entry.action = "navigate";
        entry.target = navMatch[1].trim().replace(/^page\//, "");
      } else if (action === "back") {
        entry.action = "back";
      } else if (sheetMatch) {
        entry.action = sheetMatch[1];
        entry.target = sheetMatch[2].trim();
      } else if (action === "toggle" || action === "submit") {
        entry.action = action;
      } else {
        entry.action = action;
      }
      inter.actions.push(entry);
      continue;
    }
    // [enabled] [<selector>] if <condition>
    m = line.match(/^-\s+\[enabled\]\s+\[([^\]]+)\]\s+if\s+(.+)\s*$/);
    if (m) {
      inter.enabled.push({ selector: m[1].trim(), condition: m[2].trim() });
      continue;
    }
    // [loading] <selector>: <type>
    m = line.match(/^-\s+\[loading\]\s+([^:]+):\s+(full-screen|inline|skeleton|progress)\s*$/);
    if (m) {
      inter.loading = { selector: m[1].trim(), type: m[2] };
      continue;
    }
    // [nav] <selector> → <target>
    m = line.match(/^-\s+\[nav\]\s+([^\s]+)\s+(?:→|->)\s+(.+)\s*$/);
    if (m) {
      const sel = m[1].trim();
      const target = m[2].trim().replace(/^page\//, "");
      inter.nav[sel] = target;
      continue;
    }
  }

  // 정리: 빈 객체 제거 + actions 의 navigate 가 있으면 actions.next 형태로 변환
  const out = {};
  for (const [slug, inter] of Object.entries(result)) {
    const o = {};
    if (Object.keys(inter.states).length > 0) o.states = inter.states;
    if (Object.keys(inter.sync).length > 0) o.sync = inter.sync;
    // syncType — radio-group / all-toggle 구분 (page generator 가 다른 코드 생성)
    if (inter._types) {
      const types = {};
      for (const [k, v] of Object.entries(inter._types)) {
        if (k in inter.sync) types[k] = v; // sync 의 parent 만 의미
      }
      if (Object.keys(types).length > 0) o.syncType = types;
    }
    // navigate action 의 첫 번째 → actions.next 형태
    const navAction = inter.actions.find(a => a.action === "navigate");
    if (navAction) {
      o.actions = {
        next: {
          selector: navAction.selector,
          target: navAction.target,
        },
      };
      const enabledMatch = inter.enabled.find(e => e.selector === navAction.selector);
      if (enabledMatch) o.actions.next.condition = enabledMatch.condition;
    }
    if (inter.loading) o.loading = inter.loading;
    if (Object.keys(inter.nav).length > 0) o.nav = inter.nav;
    if (Object.keys(o).length > 0) out[slug] = o;
  }
  return out;
}

const inlineTagsBySlug = {};
if (existsSync(SPECS_INPUT_DIR)) {
  for (const f of readdirSync(SPECS_INPUT_DIR)) {
    if (!f.endsWith(".md")) continue;
    const content = readFileSync(resolve(SPECS_INPUT_DIR, f), "utf8");
    const parsed = parseInlineTags(content);
    Object.assign(inlineTagsBySlug, parsed);
  }
}

// ---------- page 별 인터랙션 추론 ----------
function extractPageInteractions(pageSpec) {
  const states = {};       // id → false
  const checkboxIds = [];  // mol/checkbox-item id 들
  let allAgreeId = null;   // mol/all-agree-row id (있으면 단일)

  function walkChildren(children, depth = 0) {
    if (depth > 20) return;
    for (const c of (children || [])) {
      if (c.kind === "ref" && c.component) {
        if (c.component === "mol/checkbox-item") {
          if (c.id) {
            states[c.id] = false;
            checkboxIds.push(c.id);
          }
        } else if (c.component === "mol/all-agree-row") {
          if (c.id) {
            states[c.id] = false;
            allAgreeId = c.id;
          }
        } else {
          // 다른 ref → 해당 spec 의 children 도 walk (ogn 안 nested 처리)
          const refSpec = specByName.get(c.component);
          if (refSpec && refSpec.base && refSpec.base.children) {
            walkChildren(refSpec.base.children, depth + 1);
          }
        }
      } else if (c.kind === "group") {
        walkChildren(c.children, depth + 1);
      }
    }
  }

  walkChildren(pageSpec.base?.children || []);

  const out = {};
  if (Object.keys(states).length > 0) out.states = states;

  // sync — all-agree-row 있으면 모든 checkbox 자식
  if (allAgreeId && checkboxIds.length > 0) {
    out.sync = { [allAgreeId]: checkboxIds };
  }

  // actions.next
  const slug = pageSpec.name.replace(/^page\//, "");
  const next = flow[slug];
  if (next) {
    out.actions = {
      next: {
        selector: "sticky-cta",
        target: next,
      },
    };
    // condition
    let condition = null;
    if (allAgreeId) condition = allAgreeId;
    else if (checkboxIds.length > 0) condition = checkboxIds.join(" && ");
    if (condition) out.actions.next.condition = condition;
  }

  return Object.keys(out).length > 0 ? out : null;
}

const result = {
  $comment: "AUTO-GENERATED. 수동 override 는 page-interactions.json 에 작성. 명령: npm run build:interactions",
};

let count = 0;
let inlineCount = 0;
for (const [name, spec] of specByName) {
  if (!name.startsWith("page/")) continue;
  const slug = name.replace(/^page\//, "");
  const auto = extractPageInteractions(spec);
  const inline = inlineTagsBySlug[slug];
  // 인라인 태그 우선 (정형 source). actions.next 에 condition 이 inline 에 없고 auto 에 있으면 fill-in
  let inter = null;
  if (inline) {
    inter = JSON.parse(JSON.stringify(inline));
    if (auto?.actions?.next && !inter.actions) inter.actions = auto.actions;
    inlineCount++;
  } else if (auto) {
    inter = auto;
  }
  if (inter) {
    result[slug] = inter;
    count++;
  }
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(result, null, 2));

console.log(`✓ Written: ${OUT_PATH.replace(WEB_ROOT, ".")}`);
console.log(`  추론 page: ${count}개 (인라인 태그 ${inlineCount} / 자동 추론 ${count - inlineCount})`);
console.log(`  sample:`, Object.entries(result).filter(([k]) => k !== "$comment").slice(0, 2).map(([k, v]) => `${k} → ${Object.keys(v.states || {}).length} states`).join(" | "));
