#!/usr/bin/env node
// =============================================
// SKT Genui — Scripter Bundle CLI
// Usage:  node scripter/bundle.js atom/btn
//         node scripter/bundle.js --dry atom/btn   # 파일만 저장, 클립보드 복사 생략
//
// 동작:
//   1) skt-design-system.json 읽기
//   2) component-specs/{name}.json 읽기
//   3) scripter/generator-core.js 읽기
//   4) 셋을 하나의 .generated.js 로 합치기 (DS_TOKENS / COMPONENT_SPEC literal 주입)
//   5) scripter/runs/{slug}.generated.js 에 저장
//   6) macOS pbcopy 로 클립보드 복사
// =============================================

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DS_PATH = path.join(ROOT, "skt-design-system.json");
const SB_DS_PATH = path.join(ROOT, "..", "sb", "design-system.json");
const CORE_PATH = path.join(ROOT, "scripter", "generator-core.js");
const SPECS_DIR = path.join(ROOT, "..", "docs", "input", "components", "json");
const RUNS_DIR = path.join(ROOT, "scripter", "runs");

// 두 DS (mockup + sb) 를 deep merge — 같은 figma Variable 컬렉션에 통합 등록.
// foundation.color.* 같은 평행 그룹은 key 합쳐짐. semantic.color.sb.* 는 sb DS 만 정의.
function deepMerge(a, b) {
  if (a === undefined || a === null) return b;
  if (b === undefined || b === null) return a;
  if (typeof a !== "object" || typeof b !== "object" || Array.isArray(a) || Array.isArray(b)) return b;
  const result = Object.assign({}, a);
  for (const k of Object.keys(b)) result[k] = deepMerge(a[k], b[k]);
  return result;
}

function readDsCombined() {
  const mockupDs = readJSON(DS_PATH);
  if (!fs.existsSync(SB_DS_PATH)) return mockupDs;
  const sbDs = readJSON(SB_DS_PATH);
  return deepMerge(mockupDs, sbDs);
}

function usage() {
  console.error("Usage:");
  console.error("  node scripter/bundle.js [--dry] <spec-name>    # build one component");
  console.error("  node scripter/bundle.js --sync [--dry]         # import DS into Figma Variables");
  console.error("  node scripter/bundle.js --all     [--dry]      # batch: 전체 (component+icon+page)");
  console.error("  node scripter/bundle.js --library [--dry]      # batch: component + icon");
  console.error("  node scripter/bundle.js --pages   [--dry]      # batch: 모든 page");
  console.error("  node scripter/bundle.js --group <component|sb|page> [--dry]  # batch: 단일 category");
  console.error("  node scripter/bundle.js --icon <name> [svg-path] [--color token.path]");
  console.error("                                                 # import SVG as atom/icon/<name>");
  console.error("  node scripter/bundle.js --cleanup              # 빈/낡은 섹션 프레임 삭제");
  console.error("  node scripter/bundle.js --changed [--dry]      # ⭐ git 변경 추적 → 영향 받는 것 + cascade 자동 빌드");
  console.error("  node scripter/bundle.js <spec1> <spec2> ...     # ⭐ 명시 spec 만 batch (cascade X — 신규 spec 빠르게)");
  console.error("  node scripter/bundle.js --sb <html> [--dry]    # NOVA SB HTML → figma frame 렌더");
  console.error("Examples:");
  console.error("  node scripter/bundle.js --sync");
  console.error("  node scripter/bundle.js atom/btn");
  console.error("  node scripter/bundle.js --all                # 한 번 Run 으로 전체 (라이브러리 + 페이지)");
  console.error("  node scripter/bundle.js --library            # 한 번 Run 으로 라이브러리만");
  console.error("  node scripter/bundle.js --pages");
  console.error("  node scripter/bundle.js --group atom");
  console.error("  node scripter/bundle.js --icon sparkle figma-icons/Normal/sparkleFill.svg");
  process.exit(1);
}

// ---------- Batch Helpers ----------
// Icon registry 는 별도 JSON (audit.js 와 공유)
const ICON_REGISTRY_PATH = path.join(ROOT, "scripter", "icon-registry.json");
const ICON_REGISTRY = readJSON(ICON_REGISTRY_PATH);
const ICON_DEFAULT_COLOR = "semantic.color.icon.default";
const ICON_DEFAULT_SIZE = 20;

function collectSpecs(category) {
  if (!fs.existsSync(SPECS_DIR)) return [];
  const specs = [];
  if (category === "component") {
    // flat JSON files at SPECS_DIR root (no subdirs)
    for (const f of fs.readdirSync(SPECS_DIR, { withFileTypes: true })) {
      if (!f.isDirectory() && f.name.endsWith(".json")) {
        specs.push(readJSON(path.join(SPECS_DIR, f.name)));
      }
    }
  } else if (category === "page") {
    // JSON files inside module subdirs (BIL/, MBR/, etc.)
    for (const entry of fs.readdirSync(SPECS_DIR, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const subDir = path.join(SPECS_DIR, entry.name);
        (function walk(d) {
          for (const f of fs.readdirSync(d, { withFileTypes: true })) {
            const p = path.join(d, f.name);
            if (f.isDirectory()) walk(p);
            else if (f.name.endsWith(".json")) specs.push(readJSON(p));
          }
        })(subDir);
      }
    }
  } else {
    // sb or other: read from SPECS_DIR/category/ as before
    const dir = path.join(SPECS_DIR, category);
    if (!fs.existsSync(dir)) return [];
    (function walk(d) {
      for (const f of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, f.name);
        if (f.isDirectory()) walk(p);
        else if (f.name.endsWith(".json")) specs.push(readJSON(p));
      }
    })(dir);
  }
  return specs;
}

// 모든 카테고리 spec 에서 ref 자동 STRETCH 추론용 layout meta 만 추출.
// generator-core 가 ref 처리 시 SPEC_REGISTRY[component].width === "FILL" 이면 자동 STRETCH 부여.
// 모든 빌드 wrapper (배치/단일) 에 일관 주입 → 부분 빌드 (--group ogn 등) 에서도 ref 자동 추론 작동.
function buildSpecRegistry() {
  const cats = ["component", "page"];
  const reg = {};
  for (const c of cats) {
    const specs = collectSpecs(c);
    for (const s of specs) {
      if (!s || !s.name || !s.base || !s.base.layout) continue;
      const w = s.base.layout.width;
      const h = s.base.layout.height;
      if (w == null && h == null) continue;
      reg[s.name] = { width: w || null, height: h || null };
    }
  }
  return reg;
}

function loadIcons() {
  return ICON_REGISTRY.map((icon) => {
    const config = {
      name: icon.name,
      color: icon.color || ICON_DEFAULT_COLOR,
      size: ICON_DEFAULT_SIZE,
      skeleton: !!icon.skeleton
    };
    if (icon.svg) {
      const svgPath = path.join(ROOT, "figma-icons", icon.svg);
      if (!fs.existsSync(svgPath)) {
        console.warn("⚠ SVG 누락:", icon.name, "— skeleton 으로 대체");
        config.skeleton = true;
      } else {
        config.svgContent = fs.readFileSync(svgPath, "utf8");
      }
    }
    return config;
  });
}

// spec 안의 모든 `kind:"ref"` 자식의 component 이름 수집 (재귀)
function collectRefDeps(node, out) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const c of node) collectRefDeps(c, out);
    return;
  }
  if (node.kind === "ref" && typeof node.component === "string") {
    out.add(node.component);
  }
  for (const v of Object.values(node)) collectRefDeps(v, out);
}

// 카테고리 순서 (atom→mol→ogn→sb→page) + 같은 카테고리 안에서 ref 의존성 topo sort.
// list-item-movie 가 list-item-title-sub-default 를 ref 하면 title-sub-default 가 먼저 빌드됨.
//
// page 카테고리 안에서는 user flow 순서로 정렬 (Figma "Page" 에 가로로 배치되는 순서가 사용자 흐름과 일치).
// 다른 모듈 추가 시 PAGE_FLOW_ORDER 에 항목 추가.
const PAGE_FLOW_ORDER = {
  // MBR — 회원 가입 (UC1)
  "page/MBR/signup-terms":     11, "page/MBR/signup-info":      12, "page/MBR/signup-auth":      13,
  "page/MBR/signup-loading":   14, "page/MBR/signup-complete":  15,
  // MBR — 휴면 해제 (UC2)
  "page/MBR/dormant-auth":     21, "page/MBR/dormant-terms":    22,
  "page/MBR/dormant-loading":  23, "page/MBR/dormant-complete": 24,
  // MBR — 회원 탈퇴 (UC3)
  "page/MBR/leave-auth":       31, "page/MBR/leave-reason":     32, "page/MBR/leave-impact":     33,
  "page/MBR/leave-confirm":    34, "page/MBR/leave-loading":    35, "page/MBR/leave-complete":   36,
  // MBR — 재가입 (UC4)
  "page/MBR/rejoin-auth":      41, "page/MBR/rejoin-blocked":   42, "page/MBR/rejoin-info":      43,
  "page/MBR/rejoin-terms":     44, "page/MBR/rejoin-loading":   45, "page/MBR/rejoin-complete":  46,
};

function sortByCascade(specs) {
  const byName = new Map();
  for (const s of specs) byName.set(s.name, s);

  // 평탄한 컴포넌트(이름에 "/" 없음) 먼저, 그 다음 page (모듈/화면 — "/" 포함)
  // page 끼리는 PAGE_FLOW_ORDER 우선 (user flow 순서)
  const seeds = specs.slice().sort((a, b) => {
    const aIsPage = (a.name || "").includes("/");
    const bIsPage = (b.name || "").includes("/");
    if (aIsPage !== bIsPage) return aIsPage ? 1 : -1;
    if (aIsPage) {
      const oa = PAGE_FLOW_ORDER[a.name] ?? 9999;
      const ob = PAGE_FLOW_ORDER[b.name] ?? 9999;
      if (oa !== ob) return oa - ob;
    }
    return (a.name || "").localeCompare(b.name || "");
  });

  const visited = new Set();
  const visiting = new Set();
  const result = [];

  function visit(spec) {
    if (visited.has(spec.name)) return;
    if (visiting.has(spec.name)) return; // cycle — skip
    visiting.add(spec.name);
    const deps = new Set();
    collectRefDeps(spec.base, deps);
    for (const dep of deps) {
      const depSpec = byName.get(dep);
      if (depSpec && depSpec !== spec) visit(depSpec);
    }
    visiting.delete(spec.name);
    visited.add(spec.name);
    // page 카테고리: PAGE_FLOW_ORDER 의 십의 자리 = row index (UC), 일의 자리 = column index (step)
    //   가입=row 0 / 휴면해제=row 1 / 탈퇴=row 2 / 재가입=row 3
    //   step 1=col 0 / step 2=col 1 / ...
    // generator-core.js 의 generateScreen 이 _layout_col, _layout_row 활용해 X·Y 좌표 결정.
    if (PAGE_FLOW_ORDER[spec.name] !== undefined) {
      const code = PAGE_FLOW_ORDER[spec.name];
      spec._layout_row = Math.floor(code / 10) - 1;
      spec._layout_col = (code % 10) - 1;
    }
    result.push(spec);
  }

  for (const s of seeds) visit(s);
  return result;
}

const BATCH_RUNNER = `
async function importIconBatch(iconConfig) {
  const ICON_NAME = iconConfig.name;
  const SIZE_W = iconConfig.size;
  const SIZE_H = iconConfig.size;
  const COLOR_TOKEN = iconConfig.color;

  const firstSeg = ICON_NAME.split("/")[0];
  const pageMap = { component: "Components", sb: "SB", atom: "Components", mol: "Components", ogn: "Components" };
  const PAGE_NAME = pageMap[firstSeg] || "Components";
  const targetPage = figma.root.children.find(function(p) { return p.name === PAGE_NAME; });
  if (!targetPage) throw new Error(PAGE_NAME + " 페이지 없음 — figma-create-sections.js 먼저 실행");
  await figma.setCurrentPageAsync(targetPage);

  const existing = targetPage.findAll(function(n) {
    return (n.type === "COMPONENT" || n.type === "COMPONENT_SET") && n.name === ICON_NAME;
  });
  let prevX = null, prevY = null;
  if (existing.length > 0) {
    const first = existing[0];
    let ax = first.x, ay = first.y;
    let p = first.parent;
    while (p && p.type !== "PAGE") { ax += p.x; ay += p.y; p = p.parent; }
    prevX = ax; prevY = ay;
  }
  for (let i = 0; i < existing.length; i++) {
    try { existing[i].remove(); } catch (e) {}
  }

  const raw = figma.root.getPluginData("skt-vars");
  const varMap = raw ? JSON.parse(raw) : {};
  const vid = varMap[COLOR_TOKEN];
  const colorVar = vid ? await figma.variables.getVariableByIdAsync(vid) : null;

  let comp;
  if (iconConfig.skeleton) {
    const frame = figma.createFrame();
    frame.name = ICON_NAME;
    frame.resize(SIZE_W, SIZE_H);
    frame.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
    frame.cornerRadius = 4;
    comp = figma.createComponentFromNode(frame);
  } else {
    const svgFrame = figma.createNodeFromSvg(iconConfig.svgContent);
    svgFrame.name = ICON_NAME;
    function buildPaint() {
      const p = { type: "SOLID", color: { r: 0, g: 0, b: 0 } };
      if (colorVar) p.boundVariables = { color: { type: "VARIABLE_ALIAS", id: colorVar.id } };
      return p;
    }
    const vectors = svgFrame.findAll(function(n) {
      return n.type === "VECTOR" || n.type === "BOOLEAN_OPERATION";
    });
    for (let i = 0; i < vectors.length; i++) {
      const v = vectors[i];
      if (v.fills && v.fills.length > 0) v.fills = [buildPaint()];
      if (v.strokes && v.strokes.length > 0) v.strokes = [buildPaint()];
    }
    if (svgFrame.width !== SIZE_W || svgFrame.height !== SIZE_H) {
      svgFrame.resize(SIZE_W, SIZE_H);
    }
    comp = figma.createComponentFromNode(svgFrame);
  }

  comp.name = ICON_NAME;
  targetPage.appendChild(comp);

  if (prevX !== null && prevY !== null) {
    try { comp.x = prevX; comp.y = prevY; } catch (e) {}
  } else {
    const allComps = targetPage.findAll(function(n) {
      return n.type === "COMPONENT" || n.type === "COMPONENT_SET";
    });
    let maxBottom = 0;
    for (let i = 0; i < allComps.length; i++) {
      const c = allComps[i];
      if (c === comp) continue;
      let ay = c.y;
      let p = c.parent;
      while (p && p.type !== "PAGE") { ay += p.y; p = p.parent; }
      const b = ay + c.height;
      if (b > maxBottom) maxBottom = b;
    }
    try { comp.x = 80; comp.y = maxBottom + 80; } catch (e) {}
  }
  console.log("✓ icon: " + ICON_NAME + (iconConfig.skeleton ? " (skeleton)" : ""));
}

async function runBatch() {
  if (figma.loadAllPagesAsync) await figma.loadAllPagesAsync();

  let okIcons = 0, failIcons = 0;
  if (ICONS && ICONS.length > 0) {
    console.log("=== Phase 1: Icons (" + ICONS.length + "개) ===");
    for (let i = 0; i < ICONS.length; i++) {
      try { await importIconBatch(ICONS[i]); okIcons++; }
      catch (e) { failIcons++; console.error("✗ icon 실패:", ICONS[i].name, e.message); }
    }
  }

  let okSpecs = 0, failSpecs = 0;
  if (SPECS && SPECS.length > 0) {
    console.log("=== Phase 2: Components (" + SPECS.length + "개) ===");
    for (let i = 0; i < SPECS.length; i++) {
      try { await generateComponentSet(SPECS[i], DS_TOKENS); okSpecs++; }
      catch (e) { failSpecs++; console.error("✗ spec 실패:", SPECS[i].name, e.message); }
    }
  }

  const total = okIcons + okSpecs;
  const fails = failIcons + failSpecs;
  const msg = "✓ Batch 완료 — " + total + "개" + (fails > 0 ? " (" + fails + "개 실패)" : "");
  figma.notify(msg);
  console.log("=== " + msg + " ===");
}
`;

function batchTemplate(banner, ds, specs, icons) {
  const core = fs.readFileSync(CORE_PATH, "utf8");
  const sortedSpecs = sortByCascade(specs);
  const specRegistry = buildSpecRegistry();
  return [
    banner,
    "const DS_TOKENS = " + JSON.stringify(ds, null, 2) + ";",
    "",
    "const SPECS = " + JSON.stringify(sortedSpecs, null, 2) + ";",
    "",
    "const ICONS = " + JSON.stringify(icons, null, 2) + ";",
    "",
    "// ref 자동 STRETCH 추론용 — generator-core 가 참조",
    "const SPEC_REGISTRY = " + JSON.stringify(specRegistry, null, 2) + ";",
    "",
    core,
    "",
    BATCH_RUNNER,
    "",
    "runBatch().then(function() {",
    "  const __counts = {};",
    "  for (const __s of SPECS) {",
    "    const __firstSeg = (__s.name || '').split('/')[0];",
    "    const __seg = (__firstSeg === (__s.name || '')) ? (__s.category || __firstSeg) : __firstSeg;",
    "    const __page = __seg === 'atom' ? 'Atom' : __seg === 'mol' ? 'Molecule' : __seg === 'ogn' ? 'Organism' : __seg === 'page' ? 'Page' : __seg === 'component' ? 'Component' : __seg;",
    "    __counts[__page] = (__counts[__page] || 0) + 1;",
    "  }",
    "  if (typeof ICONS !== 'undefined' && ICONS.length > 0) __counts['Atom'] = (__counts['Atom'] || 0) + ICONS.length;",
    "  const __summary = Object.keys(__counts).map(function(p) { return p + ' ' + __counts[p] + '개'; }).join(', ') + ' changed';",
    "  figma.notify(__summary, { timeout: 2000 });",
    "}).catch(function(e) {",
    "  console.error('에러:', e);",
    "  figma.notify('에러: ' + (e && e.message ? e.message : e), { error: true });",
    "});",
    ""
  ].join("\n");
}

function bundleLibrary(dry) {
  const ds = readDsCombined();
  const specs = [...collectSpecs("component")];
  const icons = loadIcons();
  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — BATCH MODE (--library)",
    "// component 전체 + icon 통합 — Run 1회로 전체 라이브러리 빌드",
    "// specs: " + specs.length + "개 / icons: " + icons.length + "개",
    "// generated at: " + new Date().toISOString(),
    "// Requires: --sync 가 먼저 실행되어 있어야 Variable 바인딩 작동",
    "// =============================================",
    ""
  ].join("\n");
  writeAndCopy(batchTemplate(banner, ds, specs, icons),
    path.join(RUNS_DIR, "library.generated.js"), dry);
}

function bundleAll(dry) {
  const ds = readDsCombined();
  const specs = [
    ...collectSpecs("component"),
    ...collectSpecs("page")
  ];
  const icons = loadIcons();
  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — BATCH MODE (--all)",
    "// 전체 통합 — component + icon + page",
    "// Run 1회로 카탈로그 + 화면 전부 빌드",
    "// specs: " + specs.length + "개 / icons: " + icons.length + "개",
    "// generated at: " + new Date().toISOString(),
    "// Requires: --sync 가 먼저 실행되어 있어야 Variable 바인딩 작동",
    "// =============================================",
    ""
  ].join("\n");
  writeAndCopy(batchTemplate(banner, ds, specs, icons),
    path.join(RUNS_DIR, "all.generated.js"), dry);
}

function bundlePages(dry) {
  const ds = readDsCombined();
  const specs = collectSpecs("page");
  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — BATCH MODE (--pages)",
    "// 모든 page 통합 — Run 1회로 전체 page 조립",
    "// specs: " + specs.length + "개",
    "// generated at: " + new Date().toISOString(),
    "// Requires: --library (또는 개별 컴포넌트들) 가 먼저 실행되어 있어야 함",
    "// =============================================",
    ""
  ].join("\n");
  writeAndCopy(batchTemplate(banner, ds, specs, []),
    path.join(RUNS_DIR, "pages.generated.js"), dry);
}

function bundleGroup(category, dry) {
  if (!["component", "sb", "page"].includes(category)) {
    console.error("Unknown category:", category, "— component/sb/page 중 하나여야 합니다");
    process.exit(2);
  }
  const ds = readDsCombined();
  const specs = collectSpecs(category);
  const icons = (category === "component") ? loadIcons() : [];
  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — BATCH MODE (--group " + category + ")",
    "// " + category + " category 만 통합" + (icons.length ? " (+ icon)" : ""),
    "// specs: " + specs.length + "개" + (icons.length ? " / icons: " + icons.length + "개" : ""),
    "// generated at: " + new Date().toISOString(),
    "// =============================================",
    ""
  ].join("\n");
  writeAndCopy(batchTemplate(banner, ds, specs, icons),
    path.join(RUNS_DIR, "group-" + category + ".generated.js"), dry);
}

// ---------- --changed: git 변경 추적 → 영향 받는 것만 자동 빌드 ----------
function bundleChanged(dry) {
  // git status (uncommitted + untracked)
  let statusOut;
  try {
    statusOut = execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" });
  } catch (e) {
    console.error("git status 실패 — git 저장소가 아니거나 git 미설치:", e.message);
    process.exit(2);
  }
  const changed = statusOut.split("\n")
    .map(l => l.trim()).filter(Boolean)
    .map(l => l.replace(/^\S+\s+/, "")); // 상태 코드 제거

  if (changed.length === 0) {
    console.log("[--changed] 변경 없음 — 빌드할 것 없음");
    return;
  }

  // 분류
  let touchGenerator = false;
  let touchDS = false;
  let touchIconRegistry = false;
  const touchedSpecs = []; // spec name (예: "atom/btn")

  for (const f0 of changed) {
    // git status 가 저장소 root 기준 path 출력 — "mockup/" prefix 가 붙을 수 있음
    const f = f0.replace(/^mockup\//, "");
    if (f === "scripter/generator-core.js" || f === "scripter/bundle.js") touchGenerator = true;
    else if (f === "skt-design-system.json") touchDS = true;
    else if (f === "scripter/icon-registry.json") touchIconRegistry = true;
    else if (f.startsWith("component-specs/") && f.endsWith(".json")) {
      touchedSpecs.push(f.replace(/^component-specs\//, "").replace(/\.json$/, ""));
    }
  }

  console.log("[--changed] git 변경 분석 — 변경 파일 " + changed.length + "개");
  if (touchGenerator) console.log("  · generator/bundle 변경");
  if (touchDS) console.log("  · DS 토큰 변경");
  if (touchIconRegistry) console.log("  · icon-registry 변경");
  if (touchedSpecs.length > 0) console.log("  · spec " + touchedSpecs.length + "개:", touchedSpecs.slice(0, 5).join(", ") + (touchedSpecs.length > 5 ? "..." : ""));

  // 결정 — 우선순위 순
  if (touchGenerator) {
    // generator/bundle 변경은 cascade 영향 잠재적이지만 사용자가 변경 spec 만 빌드 원할 수 있음.
    // --all 강제 안 함 — warning 만 + spec cascade 진행.
    console.log("[--changed] ⚠ generator/bundle 변경 감지 — 변경 spec 만 cascade 빌드 진행. 모든 컴포넌트에 generator 영향 적용하려면 별도로 --all 실행.");
  }
  if (touchDS && touchedSpecs.length === 0 && !touchIconRegistry) {
    console.log("[--changed] DS 토큰만 변경 → --sync");
    return bundleSync(dry);
  }
  if (touchDS) {
    console.log("[--changed] ⚠ DS 토큰 변경 감지 — Variable Run 필요. spec cascade 진행 전에 다음 명령 실행:");
    console.log("    node scripter/bundle.js --sync   (먼저 별도 Run)");
    console.log("  계속해서 spec cascade 빌드 진행 (sync Run 후 spec Run 까지 총 2 Run 필요).");
    // fall through — spec cascade 빌드
  }
  if (touchIconRegistry && touchedSpecs.length === 0) {
    console.log("[--changed] icon-registry 만 변경 → --group component");
    return bundleGroup("component", dry);
  }
  if (touchedSpecs.length === 0 && !touchIconRegistry) {
    console.log("[--changed] 빌드할 spec 변경 없음 — docs/SVG 같은 비코드 변경");
    return;
  }

  // spec 변경 → 변경 spec + cascade dependents 빌드
  const allSpecs = [
    ...collectSpecs("component"),
    ...collectSpecs("page"),
  ];
  const byName = new Map();
  for (const s of allSpecs) byName.set(s.name, s);

  // dependents map: name → set of spec names that ref it
  const dependents = new Map();
  for (const s of allSpecs) {
    const deps = new Set();
    collectRefDeps(s.base, deps);
    for (const d of deps) {
      if (!dependents.has(d)) dependents.set(d, new Set());
      dependents.get(d).add(s.name);
    }
  }

  // transitive cascade collect
  const toBuild = new Set();
  function addCascade(name) {
    if (toBuild.has(name)) return;
    if (!byName.has(name)) return;
    toBuild.add(name);
    const ups = dependents.get(name) || new Set();
    for (const u of ups) addCascade(u);
  }
  for (const name of touchedSpecs) addCascade(name);

  if (toBuild.size === 0) {
    console.log("[--changed] 변경된 spec 이 카탈로그에 없음 — 신규 추가 직후거나 이름 매칭 안됨");
    return;
  }

  const specs = Array.from(toBuild).map(n => byName.get(n));
  const sortedSpecs = sortByCascade(specs);

  // icon-registry 변경 시 → git diff 로 신규/변경 icon 만 추출 (모든 33개 빌드 안 함)
  // spec 안에 atom/* 가 있으면 atom 전체 ref 가능성 있어 모든 icon 로드 (안전 fallback)
  let icons = [];
  if (touchIconRegistry) {
    icons = collectChangedIcons();
    if (icons.length > 0) {
      console.log("[--changed] icon-registry 변경 — 신규/변경 icon " + icons.length + "개 cascade 포함");
    }
  } else if (specs.some(s => !((s.name || "").includes("/")))) {
    // flat-named component specs may reference icons
    icons = loadIcons();
  }

  console.log("[--changed] cascade 빌드 대상 " + toBuild.size + "개" + (icons.length ? " + icons " + icons.length + "개" : "") + ":");
  for (const n of toBuild) console.log("  - " + n);
  for (const ic of icons) console.log("  - " + ic.name + " (icon)");

  const ds = readDsCombined();
  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — CHANGED MODE",
    "// 변경된 spec + cascade dependents + 변경된 icon 만 빌드",
    "// specs: " + specs.length + "개" + (icons.length ? " / icons: " + icons.length + "개" : ""),
    "// generated at: " + new Date().toISOString(),
    "// =============================================",
    ""
  ].join("\n");
  writeAndCopy(batchTemplate(banner, ds, sortedSpecs, icons),
    path.join(RUNS_DIR, "changed.generated.js"), dry);
}

// multi-spec batch 모드 — 여러 spec 이름 받아 (cascade 없이) topo sort 후 한 Run 빌드.
// 사용처: 변경된 신규 spec 만 빠르게 빌드. cascade dependents 는 영향 없으면 굳이 재빌드 안 함.
function bundleSpecs(specNames, dry) {
  const allSpecs = [
    ...collectSpecs("component"),
    ...collectSpecs("page"),
  ];
  const byName = new Map();
  for (const s of allSpecs) byName.set(s.name, s);

  const specs = [];
  const missing = [];
  for (const n of specNames) {
    if (byName.has(n)) specs.push(byName.get(n));
    else missing.push(n);
  }
  if (missing.length > 0) {
    console.error("✗ spec 못 찾음:", missing.join(", "));
    process.exit(2);
  }

  const sortedSpecs = sortByCascade(specs);
  // atom 이 포함되면 icon ref 풀려야 하니 모든 icon 로드 (안전).
  const icons = sortedSpecs.some(s => (s.name || "").startsWith("atom/")) ? loadIcons() : [];

  console.log("[bundleSpecs] 빌드 대상 " + sortedSpecs.length + "개" + (icons.length ? " + icons " + icons.length + "개" : "") + ":");
  for (const s of sortedSpecs) console.log("  - " + s.name);

  const ds = readDsCombined();
  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — MULTI-SPEC MODE",
    "// 명시한 spec 만 batch 빌드 (cascade dependents X)",
    "// specs: " + sortedSpecs.length + "개" + (icons.length ? " / icons: " + icons.length + "개" : ""),
    "// generated at: " + new Date().toISOString(),
    "// Requires: --sync 가 먼저 실행되어 있어야 Variable 바인딩 작동",
    "// =============================================",
    ""
  ].join("\n");
  writeAndCopy(batchTemplate(banner, ds, sortedSpecs, icons),
    path.join(RUNS_DIR, "specs.generated.js"), dry);
}

// icon-registry 변경 시 git diff 로 신규/변경된 entry 만 추출.
// 단순 휴리스틱 — git diff 의 추가 (+) 라인에서 "atom/icon/..." 또는 "atom/logo/..." path 추출.
// loadIcons() 의 결과에서 그 이름들만 필터.
function collectChangedIcons() {
  const allIcons = loadIcons();
  if (allIcons.length === 0) return [];
  let diff = "";
  try {
    diff = execSync("git diff HEAD -- scripter/icon-registry.json", { cwd: ROOT, encoding: "utf8" });
  } catch (e) {
    // diff 실패 (untracked 또는 첫 commit) → 모든 icon 반환 (안전)
    return allIcons;
  }
  if (!diff) return [];
  const changedNames = new Set();
  diff.split("\n").forEach(line => {
    if (!line.startsWith("+") || line.startsWith("+++")) return;
    const m = line.match(/"name":\s*"(atom\/(?:icon|logo)\/[^"]+)"/);
    if (m) changedNames.add(m[1]);
  });
  if (changedNames.size === 0) return [];
  return allIcons.filter(ic => changedNames.has(ic.name));
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeAndCopy(output, outPath, dry) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, output, "utf8");
  console.log("✓ Written:", path.relative(ROOT, outPath), "(" + output.length + " bytes)");

  if (!dry && process.platform === "darwin") {
    try {
      const child = require("child_process").spawnSync("pbcopy", [], { input: output });
      if (child.status === 0) console.log("✓ Copied to clipboard (pbcopy)");
      else console.warn("pbcopy exit:", child.status);
    } catch (e) {
      console.warn("clipboard 복사 실패:", e.message);
    }
  } else if (dry) {
    console.log("(--dry 모드: 클립보드 복사 생략)");
  }
  console.log("\nNext: Figma Scripter 에 붙여넣고 Run ▶");
}

function bundleIcon(iconName, svgPath, colorToken, sizeArg, dry) {
  // Slash 있으면 full path 로, 없으면 atom/icon/<name> 로 추론
  const hasSlash = iconName.indexOf("/") !== -1;
  const componentName = hasSlash ? iconName : "atom/icon/" + iconName;
  // 기본 SVG path 추론 (slash 없을 때만)
  if (!svgPath) {
    const short = hasSlash ? iconName.split("/").pop() : iconName;
    const tryA = path.join(ROOT, "figma-icons", "Normal", short + ".svg");
    const tryB = path.join(ROOT, "figma-icons", "Normal", short + "Fill.svg");
    if (fs.existsSync(tryA)) svgPath = tryA;
    else if (fs.existsSync(tryB)) svgPath = tryB;
    else {
      console.error("SVG not found: tried", tryA, "and", tryB);
      process.exit(2);
    }
  } else if (!path.isAbsolute(svgPath)) {
    svgPath = path.join(ROOT, svgPath);
  }
  if (!fs.existsSync(svgPath)) {
    console.error("SVG not found:", svgPath);
    process.exit(2);
  }

  const svgContent = fs.readFileSync(svgPath, "utf8");
  const color = colorToken || "semantic.color.brand.primary";

  // 섹션: componentName 의 첫 2 segment ("atom/icon" or "atom/barcode")
  const sectionName = componentName.split("/").slice(0, 2).join("/");
  const firstSeg = componentName.split("/")[0];
  const pageNameMap = { atom: "Atom", mol: "Molecule", ogn: "Organism" };
  const pageName = pageNameMap[firstSeg] || "Atom";

  // 사이즈: "WxH" 파싱, 기본 20x20
  let sizeW = 20, sizeH = 20;
  if (sizeArg) {
    const parts = sizeArg.toLowerCase().split("x");
    if (parts.length === 2) {
      sizeW = parseInt(parts[0], 10) || 20;
      sizeH = parseInt(parts[1], 10) || 20;
    }
  }

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — DO NOT EDIT",
    "// Icon import: " + componentName,
    "// source SVG:  " + path.relative(ROOT, svgPath),
    "// color token: " + color,
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶",
    "// =============================================",
    ""
  ].join("\n");

  const script = `
const SVG_CONTENT = ${JSON.stringify(svgContent)};
const ICON_NAME = ${JSON.stringify(componentName)};
const SECTION_NAME = ${JSON.stringify(sectionName)};
const PAGE_NAME = ${JSON.stringify(pageName)};
const COLOR_TOKEN = ${JSON.stringify(color)};
const SIZE_W = ${sizeW};
const SIZE_H = ${sizeH};

async function importIcon() {
  await figma.loadAllPagesAsync();

  const targetPage = figma.root.children.find(function (p) { return p.name === PAGE_NAME; });
  if (!targetPage) throw new Error(PAGE_NAME + " 페이지 없음 — figma-create-sections.js 먼저 실행");
  await figma.setCurrentPageAsync(targetPage);

  // 섹션 프레임 폐기 후에는 Atom 페이지 직접 배치. 기존 섹션이 남아있으면 그대로 사용.
  let section = targetPage.children.find(function (n) { return n.type === "FRAME" && n.name === SECTION_NAME; });
  const container = section || targetPage;

  // 기존 같은 이름 Component 제거 (페이지/섹션 어디든)
  const existing = targetPage.findAll(function (n) {
    return (n.type === "COMPONENT" || n.type === "COMPONENT_SET") && n.name === ICON_NAME;
  });
  // 기존 위치 기억 (있으면 이어받기)
  let prevX = null, prevY = null;
  if (existing.length > 0) {
    const first = existing[0];
    let ax = first.x, ay = first.y;
    let p = first.parent;
    while (p && p.type !== "PAGE") { ax += p.x; ay += p.y; p = p.parent; }
    prevX = ax; prevY = ay;
  }
  for (let i = 0; i < existing.length; i++) {
    try { existing[i].remove(); } catch (err) {}
  }

  // SVG → Frame
  const svgFrame = figma.createNodeFromSvg(SVG_CONTENT);
  svgFrame.name = ICON_NAME;

  // 원본 vector fill/stroke 색 덮어쓰기 + Variable 바인딩
  const raw = figma.root.getPluginData("skt-vars");
  const varMap = raw ? JSON.parse(raw) : {};
  const vid = varMap[COLOR_TOKEN];
  const colorVar = vid ? await figma.variables.getVariableByIdAsync(vid) : null;

  function buildPaint() {
    const p = { type: "SOLID", color: { r: 0, g: 0, b: 0 } };
    if (colorVar) p.boundVariables = { color: { type: "VARIABLE_ALIAS", id: colorVar.id } };
    return p;
  }

  const vectors = svgFrame.findAll(function (n) {
    return n.type === "VECTOR" || n.type === "BOOLEAN_OPERATION";
  });
  for (let i = 0; i < vectors.length; i++) {
    const v = vectors[i];
    // fill 이 있으면 재채색
    if (v.fills && v.fills.length > 0) {
      v.fills = [buildPaint()];
    }
    // stroke 가 있으면 재채색
    if (v.strokes && v.strokes.length > 0) {
      v.strokes = [buildPaint()];
    }
  }

  // Resize to target size
  if (svgFrame.width !== SIZE_W || svgFrame.height !== SIZE_H) {
    svgFrame.resize(SIZE_W, SIZE_H);
  }

  // Component 로 승격
  const comp = figma.createComponentFromNode(svgFrame);
  comp.name = ICON_NAME;
  container.appendChild(comp);

  // 위치: 기존 자리 이어받거나, 페이지 하단에 추가
  if (prevX !== null && prevY !== null) {
    try { comp.x = prevX; comp.y = prevY; } catch (e) {}
  } else if (container === targetPage) {
    // 페이지 직접 배치 시 다른 Component 하단에 80px 간격
    const allComps = targetPage.findAll(function (n) { return n.type === "COMPONENT" || n.type === "COMPONENT_SET"; });
    let maxBottom = 0;
    for (let i = 0; i < allComps.length; i++) {
      const c = allComps[i];
      if (c === comp) continue;
      let ay = c.y;
      let p = c.parent;
      while (p && p.type !== "PAGE") { ay += p.y; p = p.parent; }
      const b = ay + c.height;
      if (b > maxBottom) maxBottom = b;
    }
    try { comp.x = 80; comp.y = maxBottom + 80; } catch (e) {}
  }

  figma.notify("✓ " + ICON_NAME + " 생성");
  console.log("✓ " + ICON_NAME + " (" + SIZE_W + "x" + SIZE_H + ", color=" + COLOR_TOKEN + (colorVar ? " 바인딩 OK" : " raw") + ")");
}

importIcon().catch(function (e) {
  console.error("에러:", e);
  figma.notify("에러: " + (e && e.message ? e.message : e), { error: true });
});
`;

  const output = banner + script;
  const slug = "icon-" + iconName.replace(/\//g, "-");
  writeAndCopy(output, path.join(RUNS_DIR, slug + ".generated.js"), dry);
}

function bundleCleanup(dry) {
  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — DO NOT EDIT",
    "// Section cleanup script",
    "// Atom / Molecule / Organism 페이지에서 Component 를 감싸고 있지 않은",
    "// 빈 섹션 프레임 (spec 네이밍 패턴의 FRAME) 을 일괄 삭제.",
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶",
    "// =============================================",
    ""
  ].join("\n");

  const script = `
async function cleanup() {
  if (figma.loadAllPagesAsync) await figma.loadAllPagesAsync();
  const TARGET_PAGES = ["Atom", "Molecule", "Organism"];
  let removed = 0;
  let kept = 0;
  for (let i = 0; i < figma.root.children.length; i++) {
    const pg = figma.root.children[i];
    if (TARGET_PAGES.indexOf(pg.name) === -1) continue;
    // 페이지 직접 자식 FRAME 중 spec 이름 패턴 (atom/, mol/, ogn/) 인 것 검사
    const framesToCheck = pg.children.filter(function (n) {
      return n.type === "FRAME" &&
        (n.name.indexOf("atom/") === 0 || n.name.indexOf("mol/") === 0 || n.name.indexOf("ogn/") === 0);
    });
    for (let j = 0; j < framesToCheck.length; j++) {
      const f = framesToCheck[j];
      // 안에 Component / ComponentSet 이 있으면 유지, 없으면 삭제
      const hasComp = f.findAll(function (n) {
        return n.type === "COMPONENT" || n.type === "COMPONENT_SET";
      }).length > 0;
      if (hasComp) {
        // Component 를 페이지로 꺼내고 섹션은 삭제
        const comps = f.findAll(function (n) {
          return (n.type === "COMPONENT" || n.type === "COMPONENT_SET") && (n.parent === f);
        });
        for (let k = 0; k < comps.length; k++) {
          const c = comps[k];
          const absX = f.x + c.x;
          const absY = f.y + c.y;
          pg.appendChild(c);
          c.x = absX;
          c.y = absY;
        }
        try { f.remove(); removed++; } catch (e) {}
      } else {
        // 빈 섹션 — 그냥 삭제
        try { f.remove(); removed++; } catch (e) {}
      }
    }
  }
  figma.notify("✓ Cleanup — " + removed + "개 섹션 삭제");
  console.log("=== Cleanup 완료 ===");
  console.log("  섹션 삭제: " + removed);
}

cleanup().catch(function (e) {
  console.error(e);
  figma.notify("에러: " + (e && e.message ? e.message : e), { error: true });
});
`;

  const output = banner + script;
  writeAndCopy(output, path.join(RUNS_DIR, "cleanup.generated.js"), dry);
}

// NOVA HTML → tree JSON + render-sb.js 합성 → Scripter 실행용 .generated.js
function bundleSb(htmlPathArg, dry) {
  const { parseNovaHtml } = require("./parse-sb-html.js");
  const htmlPath = path.isAbsolute(htmlPathArg) ? htmlPathArg : path.resolve(process.cwd(), htmlPathArg);
  if (!fs.existsSync(htmlPath)) {
    console.error("HTML 없음:", htmlPath);
    process.exit(2);
  }
  const html = fs.readFileSync(htmlPath, "utf8");
  const tree = parseNovaHtml(html);
  const renderPath = path.join(ROOT, "scripter", "render-sb.js");
  const renderCode = fs.readFileSync(renderPath, "utf8");
  const slug = path.basename(htmlPath, path.extname(htmlPath)).replace(/\s+/g, "_");

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — DO NOT EDIT",
    "// source HTML: " + path.relative(ROOT, htmlPath),
    "// renderer:    scripter/render-sb.js",
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶ (SB 페이지에 frame 생성)",
    "// =============================================",
    ""
  ].join("\n");

  const output = [
    banner,
    "const SB_TREE = " + JSON.stringify(tree, null, 2) + ";",
    "",
    renderCode
  ].join("\n");

  writeAndCopy(output, path.join(RUNS_DIR, "sb-" + slug + ".generated.js"), dry);
}

function bundleSync(dry) {
  const ds = readDsCombined();
  const syncPath = path.join(ROOT, "scripter", "sync-tokens.js");
  const syncCode = fs.readFileSync(syncPath, "utf8");

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — DO NOT EDIT",
    "// source: scripter/sync-tokens.js + skt-design-system.json",
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶ (1회 실행으로 Variables 생성)",
    "// =============================================",
    ""
  ].join("\n");

  const output = [
    banner,
    "const DS_TOKENS = " + JSON.stringify(ds, null, 2) + ";",
    "",
    syncCode
  ].join("\n");

  writeAndCopy(output, path.join(RUNS_DIR, "sync-tokens.generated.js"), dry);
}

function bundleComponent(specArg, dry) {
  const specPath = path.join(SPECS_DIR, specArg + ".json");
  if (!fs.existsSync(specPath)) {
    console.error("스펙 없음:", specPath);
    process.exit(2);
  }

  const ds = readDsCombined();
  const spec = readJSON(specPath);
  const core = fs.readFileSync(CORE_PATH, "utf8");

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — DO NOT EDIT",
    "// source spec:  docs/input/components/json/" + specArg + ".json",
    "// source DS:    skt-design-system.json",
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶",
    "// Requires: sync-tokens 가 먼저 실행되어 있어야 Variable 바인딩 작동",
    "// =============================================",
    ""
  ].join("\n");

  const specRegistry = buildSpecRegistry();
  const output = [
    banner,
    "const DS_TOKENS = " + JSON.stringify(ds, null, 2) + ";",
    "",
    "const COMPONENT_SPEC = " + JSON.stringify(spec, null, 2) + ";",
    "",
    "// ref 자동 STRETCH 추론용 — generator-core 가 참조",
    "const SPEC_REGISTRY = " + JSON.stringify(specRegistry, null, 2) + ";",
    "",
    core,
    "",
    "// ---------- Entry ----------",
    "generateComponentSet(COMPONENT_SPEC, DS_TOKENS).catch(function (e) {",
    "  console.error('에러:', e);",
    "  figma.notify('에러: ' + (e && e.message ? e.message : e), { error: true });",
    "});",
    ""
  ].join("\n");

  const slug = specArg.replace(/\//g, "-");
  writeAndCopy(output, path.join(RUNS_DIR, slug + ".generated.js"), dry);
}

function main() {
  const args = process.argv.slice(2);
  let dry = false;
  let sync = false;
  let icon = false;
  let cleanup = false;
  let library = false;
  let pages = false;
  let all = false;
  let groupCategory = null;
  let colorToken = null;
  let sizeArg = null;
  let changed = false;
  let sb = false;
  const rest = [];
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--dry") dry = true;
    else if (a === "--sync") sync = true;
    else if (a === "--icon") icon = true;
    else if (a === "--cleanup") cleanup = true;
    else if (a === "--library") library = true;
    else if (a === "--pages") pages = true;
    else if (a === "--all") all = true;
    else if (a === "--changed") changed = true;
    else if (a === "--sb") sb = true;
    else if (a === "--group") { groupCategory = args[++i]; }
    else if (a === "--color") { colorToken = args[++i]; }
    else if (a === "--size")  { sizeArg = args[++i]; }
    else rest.push(a);
  }

  if (changed) {
    bundleChanged(dry);
    return;
  }

  if (sb) {
    if (rest.length === 0) {
      console.error("--sb 모드: HTML path 가 필요합니다");
      console.error("Usage: node scripter/bundle.js --sb <path-to-NOVA-XXX.html>");
      process.exit(2);
    }
    bundleSb(rest[0], dry);
    return;
  }

  if (sync) {
    if (rest.length > 0) {
      console.error("--sync 모드에서는 spec 인자를 주지 마세요 (무시됨):", rest);
    }
    bundleSync(dry);
    return;
  }

  if (cleanup) {
    bundleCleanup(dry);
    return;
  }

  if (all) {
    bundleAll(dry);
    return;
  }

  if (library) {
    bundleLibrary(dry);
    return;
  }

  if (pages) {
    bundlePages(dry);
    return;
  }

  if (groupCategory) {
    bundleGroup(groupCategory, dry);
    return;
  }

  if (icon) {
    if (rest.length === 0) {
      console.error("--icon 모드에는 이름 인자가 필요합니다 (예: sparkle)");
      process.exit(1);
    }
    bundleIcon(rest[0], rest[1], colorToken, sizeArg, dry);
    return;
  }

  if (rest.length === 0) usage();
  if (rest.length > 1) {
    bundleSpecs(rest, dry);
    return;
  }
  bundleComponent(rest[0], dry);
}

main();
