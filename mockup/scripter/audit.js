#!/usr/bin/env node
// =============================================
// SKT Genui — Catalog Audit
// AUDIT_RULES.md 의 15 규칙을 카탈로그에 자동 적용 (Rule 12=legal-notice / Rule 15=domain-copy-coverage 는 미구현 placeholder).
//
// Usage:
//   node scripter/audit.js              # 진단 (warning 은 통과로 취급)
//   node scripter/audit.js --strict     # warning 도 실패 처리
//
// Exit code:
//   0 = 모두 통과
//   1 = warning 있음 (--strict 아닐 때)
//   2 = error 있음 (또는 strict + warning)
// =============================================

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SPECS_DIR = path.join(ROOT, "..", "docs", "components");
const ICON_REGISTRY_PATH = path.join(ROOT, "scripter", "icon-registry.json");

// ---------- Loaders ----------

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadAllSpecs() {
  const specs = [];
  (function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith(".json")) {
        try {
          const spec = readJSON(p);
          spec._file = path.relative(ROOT, p);
          specs.push(spec);
        } catch (e) {
          throw new Error(`JSON parse error in ${p}: ${e.message}`);
        }
      }
    }
  })(SPECS_DIR);
  return specs;
}

function loadIconNames() {
  if (!fs.existsSync(ICON_REGISTRY_PATH)) return [];
  return readJSON(ICON_REGISTRY_PATH).map((icon) => icon.name);
}

// ---------- Rules ----------

// Rule 1: 중복 이름
function checkDuplicateNames(specs) {
  const counts = {};
  for (const s of specs) counts[s.name] = (counts[s.name] || 0) + 1;
  return Object.entries(counts)
    .filter(([_, c]) => c > 1)
    .map(([name, c]) => ({ name, count: c }));
}

// Rule 2: 네이밍 규칙
// - prefix: atom | mol | ogn | page
// - 모듈 코드 위치 (ogn|page 의 두 번째 segment, 자식 더 있을 때): 대문자 약어 허용
// - 그 외: kebab-case (a-z 0-9 -)
function checkNaming(specs) {
  const violations = [];
  for (const s of specs) {
    if (!s.name) continue;
    const parts = s.name.split("/");
    const prefix = parts[0];
    if (!["atom", "mol", "ogn", "page"].includes(prefix)) {
      violations.push({ spec: s.name, file: s._file, issue: `unknown prefix '${prefix}'` });
      continue;
    }
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      const isModulePos =
        i === 1 && (prefix === "ogn" || prefix === "page") && parts.length > 2;
      if (isModulePos) {
        if (!/^[A-Z][A-Z0-9_]*$/.test(part)) {
          violations.push({
            spec: s.name,
            file: s._file,
            issue: `module code 위치 '${part}' — 대문자 약어여야 함`,
          });
        }
      } else if (!/^[a-z0-9-]+$/.test(part)) {
        violations.push({
          spec: s.name,
          file: s._file,
          issue: `'${part}' — kebab-case 위반 (대문자/언더스코어/한글/특수문자)`,
        });
      }
    }
  }
  return violations;
}

// Rule 3: 고아 ref
function checkOrphanRefs(specs, iconNames) {
  const known = new Set(specs.map((s) => s.name).concat(iconNames));
  const orphans = [];
  function walk(node, specName, file) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const item of node) walk(item, specName, file);
      return;
    }
    if (node.kind === "ref" && node.component && !known.has(node.component)) {
      orphans.push({ from: specName, file, ref: node.component });
    }
    for (const key of Object.keys(node)) walk(node[key], specName, file);
  }
  for (const s of specs) walk(s, s.name, s._file);
  return orphans;
}

// Rule 4: Spec 완결성
function checkCompleteness(specs) {
  const missing = [];
  for (const s of specs) {
    const issues = [];
    if (!s.name) issues.push("name");
    if (!s.category) issues.push("category");
    if (!s.base) issues.push("base");
    else if (!s.base.layout) issues.push("base.layout");
    else if (!s.base.layout.mode) issues.push("base.layout.mode");
    if (issues.length) missing.push({ spec: s.name || s._file, file: s._file, missing: issues });
  }
  return missing;
}

// Rule 5: 모듈 코드 (UNKNOWN 금지)
function checkModuleCode(specs) {
  const violations = [];
  for (const s of specs) {
    if (!s.name) continue;
    if (s.name.includes("/UNKNOWN/") || s.name.endsWith("/UNKNOWN")) {
      violations.push({ spec: s.name, file: s._file });
    }
  }
  return violations;
}

// Rule 6: Raw 값 (px / 색상)
function checkRawValues(specs) {
  const violations = [];
  const colorPattern = /^#[0-9A-Fa-f]{3,8}$/;
  const lengthPattern = /^-?\d+(?:\.\d+)?(?:px|rem)$/;
  function walk(node, specName, file, trail) {
    if (typeof node === "string") {
      if (node.startsWith("{") && node.endsWith("}")) return; // 토큰 참조
      if (colorPattern.test(node)) {
        violations.push({ spec: specName, file, path: trail, value: node, type: "color" });
      } else if (lengthPattern.test(node)) {
        const num = parseFloat(node);
        if (num !== 0) {
          violations.push({ spec: specName, file, path: trail, value: node, type: "length" });
        }
      }
    } else if (Array.isArray(node)) {
      node.forEach((item, i) => walk(item, specName, file, `${trail}[${i}]`));
    } else if (node && typeof node === "object") {
      for (const key of Object.keys(node)) {
        if (key === "_file") continue;
        walk(node[key], specName, file, trail ? `${trail}.${key}` : key);
      }
    }
  }
  for (const s of specs) walk(s, s.name, s._file, "");
  return violations;
}

// Rule 7: 페이지 bg 토큰 (DESIGN_PRINCIPLES § 9.1.2)
// page/{MODULE}/main → background.page-home (그레이)
// 그 외 page          → background.page-sub  (화이트)
function checkPageBackground(specs) {
  const HOME_TOKEN = "{semantic.color.background.page-home}";
  const SUB_TOKEN  = "{semantic.color.background.page-sub}";
  const violations = [];
  for (const s of specs) {
    if (s.category !== "page") continue;
    const fill = s.base && s.base.visual && s.base.visual.fill;
    const isHome = /^page\/[A-Z][A-Z0-9_]*\/main$/.test(s.name || "");
    const expected = isHome ? HOME_TOKEN : SUB_TOKEN;
    if (fill !== expected) {
      violations.push({
        spec: s.name,
        file: s._file,
        kind: isHome ? "home" : "sub",
        actual: fill,
        expected,
      });
    }
  }
  return violations;
}

// Rule 11 — page footer ref 의 scrollBehavior STICKY_SCROLLS 검증.
// page spec 안 footer 류 ref (sticky-footer/footer-cta/cta-pair/*-footer) 가
// scrollBehavior 미명시면 warning. DP § 9.8 표준 — Figma prototype sticky 동작.
function checkPageFooterSticky(specs) {
  const FOOTER_RE = /(sticky-footer|footer-cta|cta-pair|-footer$|\/footer$)/;
  const violations = [];

  function walk(spec, node) {
    if (!node || typeof node !== "object") return;
    if (node.kind === "ref" && typeof node.component === "string" && FOOTER_RE.test(node.component)) {
      if (node.scrollBehavior !== "STICKY_SCROLLS" && node.scrollBehavior !== "FIXED") {
        violations.push({
          page: spec.name,
          file: spec._file,
          ref: node.component,
          refId: node.id || "?",
          actual: node.scrollBehavior || "(미명시)",
        });
      }
    }
    const kids = node.children || [];
    for (const c of kids) walk(spec, c);
  }

  for (const s of specs) {
    if (s.category !== "page") continue;
    walk(s, s.base);
  }
  return violations;
}

// Rule 9 — 서브 페이지 위 ogn 외피의 시각 분리 검증.
// 서브 페이지 (page-sub = surface.primary 화이트 bg) 위에 놓이는 ogn 의 외피 fill 도 surface.primary 면
// 시각 분리 실패. surface.secondary (가장 연 그레이) 등으로 분리해야 함.
// chrome 류 (header/footer/bottomsheet/sticky/snack-bar/status-bar/tab-bar/GNB/tab) 는 예외 (위치·dim 으로 분리).
function checkSubPageOgnFill(specs) {
  const PAGE_SUB        = "{semantic.color.background.page-sub}";
  const SURFACE_PRIMARY = "{semantic.color.surface.primary}";
  const CHROME_PATTERNS = [
    /\/header$/, /\/header\//, /\/footer$/, /\/footer-/, /\/sticky/,
    /\/bottomsheet/, /\/bottom-sheet/, /\/snack-bar$/, /\/status-bar$/,
    /\/tab-bar$/, /\/tabbar$/, /\/GNB$/, /\/tab$/,
  ];
  const isChrome = (name) => CHROME_PATTERNS.some((re) => re.test(name || ""));

  const byName = new Map();
  for (const s of specs) byName.set(s.name, s);

  const violations = [];

  function collectOgnRefs(node, acc) {
    if (!node || typeof node !== "object") return;
    if (node.kind === "ref" && typeof node.component === "string" && node.component.startsWith("ogn/")) {
      acc.push(node.component);
    }
    const kids = node.children || [];
    for (const c of kids) collectOgnRefs(c, acc);
  }

  for (const page of specs) {
    if (page.category !== "page") continue;
    const pageFill = page.base && page.base.visual && page.base.visual.fill;
    if (pageFill !== PAGE_SUB) continue;

    const ognRefs = [];
    collectOgnRefs(page.base, ognRefs);
    for (const refName of ognRefs) {
      if (isChrome(refName)) continue;
      const ognSpec = byName.get(refName);
      if (!ognSpec) continue;
      const ognFill = ognSpec.base && ognSpec.base.visual && ognSpec.base.visual.fill;
      if (ognFill === SURFACE_PRIMARY) {
        violations.push({
          page: page.name,
          ogn: refName,
          ognFill,
          file: page._file,
        });
      }
    }
  }
  return violations;
}

// Rule 8 — checkbox-list 패턴 spacing 토큰 표준 사용 검증.
// children 중 mol/checkbox-item 또는 mol/radio-item N+ 있는 group 은
// itemSpacing / paddingY / paddingX 가 component.checkbox-list.default.* 토큰을 써야 함.
function checkCheckboxListPattern(specs) {
  const TOKEN_ITEMSPACING = "{component.checkbox-list.default.itemSpacing}";
  const TOKEN_PADY        = "{component.checkbox-list.default.paddingY}";
  const TOKEN_PADX        = "{component.checkbox-list.default.paddingX}";
  const ROW_REFS          = ["mol/checkbox-item", "mol/radio-item"];
  const violations = [];

  function walk(spec, node) {
    if (!node || typeof node !== "object") return;
    if (node.kind === "group") {
      const children = node.children || [];
      const rowCount = children.filter((c) =>
        c && c.kind === "ref" && ROW_REFS.includes(c.component)
      ).length;
      if (rowCount >= 2) {
        const l = node.layout || {};
        const issues = [];
        if (l.itemSpacing && l.itemSpacing !== TOKEN_ITEMSPACING) {
          issues.push(`itemSpacing=${l.itemSpacing} → ${TOKEN_ITEMSPACING}`);
        }
        if (l.paddingTop && l.paddingTop !== TOKEN_PADY) {
          issues.push(`paddingTop=${l.paddingTop} → ${TOKEN_PADY}`);
        }
        if (l.paddingBottom && l.paddingBottom !== TOKEN_PADY) {
          issues.push(`paddingBottom=${l.paddingBottom} → ${TOKEN_PADY}`);
        }
        if (l.paddingLeft && l.paddingLeft !== TOKEN_PADX) {
          issues.push(`paddingLeft=${l.paddingLeft} → ${TOKEN_PADX}`);
        }
        if (l.paddingRight && l.paddingRight !== TOKEN_PADX) {
          issues.push(`paddingRight=${l.paddingRight} → ${TOKEN_PADX}`);
        }
        if (issues.length > 0) {
          violations.push({
            spec: spec.name,
            file: spec._file,
            groupId: node.id || "?",
            rowCount,
            issues,
          });
        }
      }
    }
    const kids = node.children || [];
    for (const c of kids) walk(spec, c);
  }

  for (const s of specs) walk(s, s.base);
  return violations;
}

function checkAtomMolBaselineWidth(specs) {
  // atom/mol 의 base.layout.width 정책 — CONVENTIONS § 6.3 v4 (FILL 표준).
  // - 권장: "FILL" 키워드 (반응형 / 개발 width:100% 와 일치, generator 가 top-level fallback 자동 처리)
  // - 허용: 토큰 직접 명시 (FIXED, 의도된 고정폭)
  // - 위반: width 미명시
  // 예외: leaf atom (icon, logo, divider 등 자체 dimension 토큰 가진 단일 단위)
  const EXEMPT_PREFIX = ["atom/icon/", "atom/logo/", "atom/divider", "atom/checkbox", "atom/radio", "atom/btn-icon", "atom/btn-inline", "atom/btn", "atom/tag", "atom/tab-item", "atom/thumb", "atom/tooltip", "atom/barcode"];
  const violations = [];
  for (const s of specs) {
    if (s.category !== "atom" && s.category !== "mol") continue;
    if (EXEMPT_PREFIX.some((p) => s.name.startsWith(p))) continue;
    const layout = s.base && s.base.layout;
    if (!layout) continue;
    const w = layout.width;
    if (!w) {
      violations.push({ spec: s.name, file: s._file, issue: "width 미명시 — \"FILL\" 키워드 또는 토큰 명시" });
    }
  }
  return violations;
}

// Rule 12 — 줄글 텍스트 layoutAlign:STRETCH 누락 검증 (CONVENTIONS § 6.1)
// kind:"text" 중 id 가 long-text 류 (body / description / headline / message / paragraph / notice 등) 면
// layoutAlign:STRETCH 박혀야 generator 가 textAutoResize=HEIGHT 자동 적용 → 부모 폭 줄바꿈.
// 짧은 라벨 (label / value / prefix / action / title / time 등) 은 textStyle 이 body 류여도 제외.
function checkLongTextStretch(specs) {
  // id 가 정확히 이거이거나, "<id>-something" / "something-<id>" 형태로 매칭되면 long-text
  const LONG_ID_PATTERNS = ["body", "description", "headline", "message", "paragraph", "notice", "guide", "summary", "rollback-notice", "promo-text", "tab-content", "phoneInfo", "passInfo"];
  const violations = [];

  function isLongText(node) {
    if (node.kind !== "text") return false;
    const id = (node.id || "").toLowerCase();
    return LONG_ID_PATTERNS.some((p) => {
      const pl = p.toLowerCase();
      return id === pl || id.endsWith("-" + pl) || id.startsWith(pl + "-") || id.includes("-" + pl + "-");
    });
  }

  function walk(node, specName, file) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { node.forEach((c) => walk(c, specName, file)); return; }
    if (isLongText(node) && node.layoutAlign !== "STRETCH") {
      violations.push({
        spec: specName,
        file,
        textId: node.id,
        textStyle: node.textStyle || "(미명시)",
        layoutAlign: node.layoutAlign || "(없음)"
      });
    }
    for (const k of Object.keys(node)) {
      if (k === "_file") continue;
      walk(node[k], specName, file);
    }
  }
  for (const s of specs) walk(s, s.name, s._file);
  return violations;
}

function checkPropsKeyMatch(specs) {
  const specMap = {};
  for (const s of specs) specMap[s.name] = s;

  // spec 의 base 트리를 walk 해서 (group 재귀 포함) exposeAs 모음
  function collectExposed(spec) {
    const out = new Set();
    function walk(n) {
      if (!n || !n.children) return;
      for (const c of n.children) {
        if (c.exposeAs) out.add(c.exposeAs);
        if (c.kind === "group") walk(c);
      }
    }
    if (spec && spec.base) walk(spec.base);
    return out;
  }

  // spec 의 자체 exposeAs + 안에 박힌 ref 들의 (재귀) exposeAs 까지 모음 → applyInstanceProps 의 nested 매칭 시뮬레이션
  function collectAllExposed(spec, depth, seen) {
    depth = depth || 0;
    seen = seen || new Set();
    if (!spec || depth > 4 || seen.has(spec.name)) return new Set();
    seen.add(spec.name);
    const out = collectExposed(spec);
    function walk(n) {
      if (!n || !n.children) return;
      for (const c of n.children) {
        if (c.kind === "ref" && c.component && specMap[c.component]) {
          const inner = collectAllExposed(specMap[c.component], depth + 1, seen);
          inner.forEach((k) => out.add(k));
        }
        if (c.kind === "group") walk(c);
      }
    }
    if (spec.base) walk(spec.base);
    return out;
  }

  const violations = [];
  for (const s of specs) {
    function walk(n) {
      if (!n || !n.children) return;
      for (const c of n.children) {
        if (c.kind === "ref" && c.props && specMap[c.component]) {
          const valid = collectAllExposed(specMap[c.component]);
          for (const k in c.props) {
            // "card-1.headline" 같은 dot-path 는 nested instance 의 명시 prop — 별도 처리, skip
            if (k.includes(".")) continue;
            if (!valid.has(k)) {
              violations.push({
                spec: s.name,
                file: s._file,
                refId: c.id || "(no-id)",
                refTo: c.component,
                badKey: k,
                validKeys: Array.from(valid).slice(0, 6)
              });
            }
          }
        }
        if (c.kind === "group") walk(c);
      }
    }
    if (s.base) walk(s.base);
  }
  return violations;
}

// Rule 16 — ref props 의 빈 string value 검출 (CONVENTIONS § 8.5 옵셔널 자식 패턴)
// "props": { "X": "" } 패턴은 Figma text node 의 line-height + itemSpacing 점유 → 시각 의도 어긋남.
// 옵셔널 자식은 variants axis (with/without) + visible:false override 권장.
function checkEmptyPropsValue(specs) {
  const violations = [];
  for (const s of specs) {
    function walk(n) {
      if (!n || !n.children) return;
      for (const c of n.children) {
        if (c.kind === "ref" && c.props) {
          for (const k in c.props) {
            const v = c.props[k];
            if (typeof v === "string" && v.trim() === "") {
              violations.push({
                spec: s.name,
                file: s._file,
                refId: c.id || "(no-id)",
                refTo: c.component,
                emptyKey: k
              });
            }
          }
        }
        if (c.kind === "group") walk(c);
      }
    }
    if (s.base) walk(s.base);
  }
  return violations;
}

// ---------- Reporter ----------

function reportRule(num, label, items, severity, formatter) {
  const icon = items.length === 0 ? "✅" : (severity === "error" ? "❌" : (severity === "warn" ? "⚠" : "ℹ"));
  const note = items.length === 0 ? "통과" : `${items.length}건`;
  console.log(`${icon} ${num}. ${label} — ${note}`);
  for (const it of items) console.log("   - " + formatter(it));
}

// ---------- Main ----------

function main() {
  const args = process.argv.slice(2);
  const strict = args.includes("--strict");

  let specs, iconNames;
  try {
    specs = loadAllSpecs();
    iconNames = loadIconNames();
  } catch (e) {
    console.error("Load 실패:", e.message);
    process.exit(2);
  }

  console.log(`\n=== Catalog Audit ===`);
  console.log(`spec: ${specs.length}개 / icon registry: ${iconNames.length}개\n`);

  const r1 = checkDuplicateNames(specs);
  const r2 = checkNaming(specs);
  const r3 = checkOrphanRefs(specs, iconNames);
  const r4 = checkCompleteness(specs);
  const r5 = checkModuleCode(specs);
  const r6 = checkRawValues(specs);
  const r7 = checkPageBackground(specs);
  const r8 = checkCheckboxListPattern(specs);
  const r9 = checkSubPageOgnFill(specs);
  const r10 = checkAtomMolBaselineWidth(specs);
  const r11 = checkPageFooterSticky(specs);
  const r12 = checkLongTextStretch(specs);
  const r13 = checkPropsKeyMatch(specs);
  const r14 = checkEmptyPropsValue(specs);

  reportRule(1, "중복 이름", r1, "error", (d) => `${d.name} (${d.count}회)`);
  reportRule(2, "네이밍 규칙", r2, "error", (v) => `${v.spec}: ${v.issue}`);
  reportRule(3, "고아 ref", r3, "warn", (o) => `${o.from} → ${o.ref} (없음)`);
  reportRule(4, "Spec 완결성", r4, "error", (i) => `${i.spec}: ${i.missing.join(", ")} 누락`);
  reportRule(5, "모듈 코드 UNKNOWN", r5, "error", (m) => m.spec);
  reportRule(6, "Raw 값", r6, "info", (r) => `${r.spec} :: ${r.path} = ${r.value} (${r.type})`);
  reportRule(7, "페이지 bg 토큰", r7, "warn", (v) => `${v.spec} (${v.kind}): ${v.actual || "null"} → ${v.expected} 이어야 함`);
  reportRule(8, "checkbox-list 패턴 토큰", r8, "warn", (v) => `${v.spec} :: ${v.groupId} (rows=${v.rowCount}): ${v.issues.join(", ")}`);
  reportRule(9, "서브 페이지 위 ogn 외피 시각 분리", r9, "warn", (v) => `${v.page} → ${v.ogn} (외피 fill=surface.primary, 페이지 bg 와 동색 → surface.secondary 권장)`);
  reportRule(10, "atom/mol baseline width 명시", r10, "warn", (v) => `${v.spec} :: ${v.issue} (CONVENTIONS § 6.3 v4 — "FILL" 키워드 또는 토큰 명시 필요)`);
  reportRule(11, "page footer scrollBehavior", r11, "warn", (v) => `${v.page} :: ${v.refId} (${v.ref}) — ${v.actual} → "STICKY_SCROLLS" 권장 (DP § 9.8)`);
  reportRule(13, "줄글 텍스트 STRETCH 누락", r12, "warn", (v) => `${v.spec} :: text "${v.textId}" (${v.textStyle}) — layoutAlign:STRETCH 누락 (CONVENTIONS § 6.1)`);
  reportRule(14, "ref props 키 ↔ exposeAs 매칭", r13, "warn", (v) => `${v.spec} → ${v.refId} (${v.refTo}) :: props.${v.badKey} 매칭 안됨. valid: [${v.validKeys.join(", ") || "(노출 없음)"}]`);
  reportRule(16, "빈 props value (옵셔널 자식 우회)", r14, "warn", (v) => `${v.spec} → ${v.refId} (${v.refTo}) :: props.${v.emptyKey} = "" — variants visible:false 권장 (CONVENTIONS § 8.5)`);

  const errors = r1.length + r2.length + r4.length + r5.length;
  const warnings = r3.length + r7.length + r8.length + r9.length + r10.length + r11.length + r12.length + r13.length + r14.length;
  const infos = r6.length;

  console.log(`\n=== 결과 ===`);
  console.log(`error: ${errors}, warning: ${warnings}, info: ${infos}`);

  if (errors > 0) {
    console.log("\n❌ 실패 — error 해결 후 재실행");
    process.exit(2);
  } else if (warnings > 0 && strict) {
    console.log("\n❌ 실패 (--strict) — warning 해결 후 재실행");
    process.exit(2);
  } else if (warnings > 0) {
    console.log("\n⚠ 경고 있음 — 검토 권장 (--strict 아니라 통과 처리)");
    process.exit(1);
  } else {
    console.log("\n✅ 모두 통과");
    process.exit(0);
  }
}

main();
