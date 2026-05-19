#!/usr/bin/env node
// =============================================
// spec JSON → React component (.tsx) 자동 생성
// 입력: shared/component-specs/**/*.json
// 출력: src/components/library/<category>/<...>/<Name>.tsx
//
// 룰 (요약):
//   - layout (mode/padding/itemSpacing/sizingMode/...) → CSS (flexbox)
//   - visual (radius/fill/stroke/shadow) → CSS
//   - token ref "{path}" → var(--path)
//   - children: text / ref / group 재귀
//   - exposeAs → React props (string for text, ReactNode for ref/INSTANCE_SWAP)
//   - variants axes → TypeScript union props + overrides 머지 (className 또는 inline style)
//   - page/* → app router 의 page (모바일 viewport frame 안 렌더)
//
// 명령: npm run build:components
// =============================================
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, rmSync, existsSync } from "node:fs";
import { resolve, dirname, join, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { ATOM_TEMPLATES } from "./atom-templates.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const SPECS_ROOT = resolve(WEB_ROOT, "shared/component-specs");
const OUT_LIB_ROOT = resolve(WEB_ROOT, "src/components/library");
const OUT_PAGE_ROOT = resolve(WEB_ROOT, "src/app/library/preview");
const DS_PATH = resolve(WEB_ROOT, "shared/skt-design-system.json");

const ds = JSON.parse(readFileSync(DS_PATH, "utf8"));

// ---------- 전역: spec 별 conflictedAxes (다른 spec 이 ref 시 variant skip 결정용) ----------
const conflictedAxesBySpec = {};
function precomputeConflictedAxes(allSpecs) {
  function collectExposes(children, out) {
    for (const c of (children || [])) {
      if ((c.kind === "text" || c.kind === "ref") && c.exposeAs) out.add(c.exposeAs);
      if (c.kind === "group") collectExposes(c.children, out);
    }
  }
  for (const { spec } of allSpecs) {
    const exposes = new Set();
    collectExposes(spec.base?.children, exposes);
    const conflicted = new Set();
    for (const axis of (spec.variants?.axes || [])) {
      if (exposes.has(axis.name)) conflicted.add(axis.name);
    }
    conflictedAxesBySpec[spec.name] = conflicted;
  }
}

// ---------- 유틸 ----------
function pathToCssVar(path) {
  return "--" + path.replace(/\./g, "-").replace(/_/g, "-").toLowerCase();
}
function unwrapAlias(s) {
  if (typeof s !== "string") return null;
  const m = s.match(/^\{(.+)\}$/);
  return m ? m[1] : null;
}
function resolveAlias(value, depth = 0) {
  if (depth > 20) return null;
  if (typeof value !== "string") return value;
  const path = unwrapAlias(value);
  if (!path) return value;
  const node = path.split(".").reduce((o, k) => (o == null ? null : o[k]), ds);
  if (!node) return null;
  const v = node.value !== undefined ? node.value : node;
  return resolveAlias(v, depth + 1);
}
function tokenRefToCss(value) {
  // 토큰 ref → var(), 그 외엔 그대로
  if (typeof value !== "string") return value;
  const aliasPath = unwrapAlias(value);
  if (aliasPath) return `var(${pathToCssVar(aliasPath)})`;
  return value;
}
function pascalCase(s) {
  return s.split(/[-_/]/).filter(Boolean).map(p => p.charAt(0).toUpperCase() + p.slice(1).replace(/[^a-zA-Z0-9]/g, "")).join("");
}
function specNameToInfo(name) {
  // "atom/btn" → { category: "atom", path: "atom/btn", file: "atom/btn.tsx", componentName: "Btn", importPath: "atom/btn" }
  // "ogn/MBR/card-bill-summary" → componentName: "CardBillSummary", file: "ogn/MBR/card-bill-summary.tsx"
  const parts = name.split("/");
  const last = parts[parts.length - 1];
  return {
    category: parts[0],
    path: name,
    relFile: name + ".tsx",
    componentName: pascalCase(last) || "Component",
    importPath: name,
  };
}

// ---------- spec 수집 ----------
function walkSpecs(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walkSpecs(full, out);
    else if (entry.endsWith(".json")) {
      try {
        const spec = JSON.parse(readFileSync(full, "utf8"));
        if (spec.name) out.push({ filePath: full, spec });
      } catch (e) {
        console.warn("⚠ JSON parse 실패:", full, e.message);
      }
    }
  }
  return out;
}

// ---------- layout / visual → CSS ----------
function alignItemsCss(value) {
  switch (value) {
    case "MIN": return "flex-start";
    case "MAX": return "flex-end";
    case "CENTER": return "center";
    case "SPACE_BETWEEN": return "space-between";
    default: return "flex-start";
  }
}

function lengthToCss(v) {
  // FILL → 100%, HUG → auto, 숫자 → px, 토큰 → var()
  if (v === "FILL") return "100%";
  if (v === "HUG") return "auto";
  if (typeof v === "number") return v + "px";
  return tokenRefToCss(v);
}

function buildLayoutStyle(layout, isChild) {
  if (!layout) return {};
  const s = {};
  const mode = layout.mode || "NONE";

  if (mode === "VERTICAL" || mode === "HORIZONTAL") {
    s.display = "flex";
    s.flexDirection = mode === "VERTICAL" ? "column" : "row";

    // align: primary = main axis, counter = cross axis
    if (mode === "VERTICAL") {
      if (layout.primaryAxisAlignItems) s.justifyContent = alignItemsCss(layout.primaryAxisAlignItems);
      if (layout.counterAxisAlignItems) s.alignItems = alignItemsCss(layout.counterAxisAlignItems);
    } else {
      if (layout.primaryAxisAlignItems) s.justifyContent = alignItemsCss(layout.primaryAxisAlignItems);
      if (layout.counterAxisAlignItems) s.alignItems = alignItemsCss(layout.counterAxisAlignItems);
    }

    // gap
    if (layout.itemSpacing != null) s.gap = lengthToCss(layout.itemSpacing);

    // padding
    if (layout.paddingTop != null) s.paddingTop = lengthToCss(layout.paddingTop);
    if (layout.paddingRight != null) s.paddingRight = lengthToCss(layout.paddingRight);
    if (layout.paddingBottom != null) s.paddingBottom = lengthToCss(layout.paddingBottom);
    if (layout.paddingLeft != null) s.paddingLeft = lengthToCss(layout.paddingLeft);
  }

  // width / height
  if (layout.width != null) s.width = lengthToCss(layout.width);
  if (layout.height != null) s.height = lengthToCss(layout.height);

  return s;
}

function buildVisualStyle(visual) {
  if (!visual) return {};
  const s = {};
  if (visual.cornerRadius != null && visual.cornerRadius !== 0) {
    s.borderRadius = lengthToCss(visual.cornerRadius);
  }
  // visual.fill — variants override 분기 가능
  const fillExpr = exprForPath(overrideMap || {}, "visual.fill", visual.fill, tokenRefToCss);
  if (fillExpr) s.background = fillExpr;
  // visual.stroke — override 분기 가능 (단순화: 색만 분기, weight 는 override 박혀 있으면 1px 가정)
  const strokeBranches = overrideMap?.["visual.stroke"];
  if (visual.stroke || strokeBranches) {
    const strokeColorOf = (v) => {
      if (!v) return null;
      if (typeof v === "object" && v.color) return tokenRefToCss(v.color);
      return tokenRefToCss(v);
    };
    const colorExpr = exprForPath(overrideMap || {}, "visual.stroke", visual.stroke, strokeColorOf);
    if (colorExpr) s.border = `"1px solid " + (${colorExpr})`;
    // s.border 가 expression — styleToJsx 가 처리하도록 raw 표시
    if (s.border) s.border = `((${colorExpr}) ? "1px solid " + (${colorExpr}) : "none")`;
  }
  // visual.shadow — alias 면 var() 그대로, override 시 ternary
  const shadowToCss = (v) => {
    if (!v) return null;
    const aliasPath = unwrapAlias(v);
    if (aliasPath) return `var(${pathToCssVar(aliasPath)})`;
    if (typeof v === "string") return v;
    return null;
  };
  const shadowExpr = exprForPath(overrideMap || {}, "visual.shadow", visual.shadow, shadowToCss);
  if (shadowExpr) s.boxShadow = shadowExpr;
  return s;
}

function buildChildStyle(child) {
  // child 의 layoutAlign / layoutGrow / autoResize / scrollBehavior → CSS
  const s = {};
  if (child.layoutAlign === "STRETCH") {
    s.alignSelf = "stretch";
  }
  if (child.layoutGrow === 1) {
    s.flex = "1 1 0%";
    s.minWidth = 0;
  }
  // figma 의 STICKY_SCROLLS / FIXED → CSS sticky bottom 0
  if (child.scrollBehavior === "STICKY_SCROLLS" || child.scrollBehavior === "FIXED") {
    s.position = "sticky";
    s.bottom = 0;
    s.zIndex = 10;
  }
  return s;
}

// ---------- styleObject → JSX inline style 문자열 ----------
// value 가 "((..." 또는 '"' 로 시작하면 raw JS expression source (ternary 또는 string literal), 아니면 quote
function styleToJsx(style) {
  const entries = Object.entries(style);
  if (entries.length === 0) return "";
  const parts = entries.map(([k, v]) => {
    let val;
    if (typeof v === "string") {
      val = (v.startsWith("((") || v.startsWith('"')) ? v : JSON.stringify(v);
    } else {
      val = v;
    }
    return `${k}: ${val}`;
  });
  return `{ ${parts.join(", ")} }`;
}

// ---------- text composite typography (component.* 등 semantic 외) → inline style ----------
function textStyleToInlineStyle(textStyleRef) {
  const aliasPath = unwrapAlias(textStyleRef);
  if (!aliasPath) return {};
  const node = aliasPath.split(".").reduce((o, k) => (o == null ? null : o[k]), ds);
  if (!node) return {};
  const v = node.value !== undefined ? node.value : node;
  if (!v || typeof v !== "object" || !v.fontSize) return {};
  const style = {};
  const map = { fontSize: "fontSize", lineHeight: "lineHeight", fontWeight: "fontWeight", letterSpacing: "letterSpacing" };
  for (const [src, css] of Object.entries(map)) {
    const fieldRef = v[src];
    if (!fieldRef) continue;
    const fieldAlias = unwrapAlias(fieldRef);
    style[css] = fieldAlias ? `var(${pathToCssVar(fieldAlias)})` : fieldRef;
  }
  return style;
}

// ---------- text typography → className ----------
function textStyleToClass(textStyleRef) {
  const aliasPath = unwrapAlias(textStyleRef);
  if (!aliasPath) return null;
  // semantic.typography.body-medium → typography-body-medium
  if (aliasPath.startsWith("semantic.typography.")) {
    return "typography-" + aliasPath.replace("semantic.typography.", "");
  }
  // component.<x>.<y>.textStyle 같은 ref → 풀어서 typography- 추출
  const resolved = resolveAlias(textStyleRef);
  // resolved 가 typography composite 인지 체크
  if (resolved && typeof resolved === "object" && resolved.fontSize) {
    // alias chain 따라 들어가서 semantic.typography.* path 찾음 (단순 휴리스틱)
    const pathSegs = aliasPath.split(".");
    // component.button.primary.textStyle 의 ref 가 semantic.typography.button 이면 그 이름 사용
    const resolveToTypoPath = (path) => {
      const node = path.split(".").reduce((o, k) => (o == null ? null : o[k]), ds);
      if (!node) return null;
      const v = node.value !== undefined ? node.value : node;
      const inner = unwrapAlias(v);
      if (inner) return resolveToTypoPath(inner);
      return path;
    };
    const final = resolveToTypoPath(aliasPath);
    if (final && final.startsWith("semantic.typography.")) {
      return "typography-" + final.replace("semantic.typography.", "");
    }
  }
  return null;
}

// ---------- children → JSX ----------
let importsSet; // 컴포넌트 단위 — ref import 수집
let propsSet;   // exposeAs 모은 set
let overrideMap; // 컴포넌트 단위 — variants overrides 의 path → branches
let hideMapModule; // 컴포넌트 단위 — childId → hide condition strings
let childAtomStateBindingModule; // mol interactive 시 자식 atom checkbox/radio state prop binding expression
let pageStateNamesModule; // page generator 단위 — interactions.states 의 키 set (ref id 매칭 시 checked prop binding)

function renderChild(child, indent = "      ") {
  let inner;
  if (child.kind === "text") inner = renderText(child, indent);
  else if (child.kind === "ref") inner = renderRef(child, indent);
  else if (child.kind === "group") inner = renderGroup(child, indent);
  else inner = `${indent}/* unknown kind: ${child.kind} */`;
  // hideMap 적용 (nested children 도 자동 처리)
  if (hideMapModule && child.id && hideMapModule[child.id]) {
    const cond = `!(${hideMapModule[child.id].join(" || ")})`;
    return `${indent}{${cond} && (\n${inner}\n${indent})}`;
  }
  return inner;
}

function renderText(child, indent) {
  const id = child.id || "text";
  const expose = child.exposeAs;
  const defaultContent = JSON.stringify(child.content || "");
  const contentExpr = expose ? `props[${JSON.stringify(expose)}] ?? ${defaultContent}` : defaultContent;
  if (expose) propsSet.add({ name: expose, type: "string", optional: true });

  const className = textStyleToClass(child.textStyle);
  const style = {};
  // className 매칭 실패 시 (component composite typography 등) inline style fallback
  if (!className) Object.assign(style, textStyleToInlineStyle(child.textStyle));
  // children[id].color override 분기
  const colorExpr = exprForPath(overrideMap || {}, `children[${id}].color`, child.color, tokenRefToCss);
  if (colorExpr) style.color = colorExpr;
  Object.assign(style, buildChildStyle(child));
  if (child.autoResize === "HEIGHT") style.whiteSpace = "normal";

  // children[id].textStyle override → className 분기
  const textStyleBranches = overrideMap?.[`children[${id}].textStyle`];
  let classAttr;
  if (textStyleBranches && textStyleBranches.length > 0) {
    let expr = className ? JSON.stringify(className) : "\"\"";
    for (const b of [...textStyleBranches].reverse()) {
      const cls = textStyleToClass(b.value) || "";
      expr = `((${b.cond}) ? ${JSON.stringify(cls)} : ${expr})`;
    }
    classAttr = ` className={${expr}}`;
  } else {
    classAttr = className ? ` className="${className}"` : "";
  }

  const styleStr = Object.keys(style).length > 0 ? ` style={${styleToJsx(style)}}` : "";
  return `${indent}<span data-id="${id}"${classAttr}${styleStr}>{${contentExpr}}</span>`;
}

function renderRef(child, indent) {
  const id = child.id || "ref";
  const expose = child.exposeAs;
  const componentPath = child.component;
  const info = specNameToInfo(componentPath);
  // import 등록
  importsSet.add(componentPath);
  const compName = info.componentName;

  // props (우선)
  const propEntries = [];
  const seenKeys = new Set();
  // mol interactive 안 자식 atom checkbox/radio → state prop 을 부모 _checked 로 binding (controlled)
  const ATOM_CONTROLLED = new Set(["atom/checkbox", "atom/radio"]);
  if (childAtomStateBindingModule && ATOM_CONTROLLED.has(child.component)) {
    propEntries.push(`"state": ${childAtomStateBindingModule}`);
    seenKeys.add("state");
  }
  // page generator 가 ref.id 매칭 → mol interactive 의 checked prop 을 page state 로 binding
  const MOL_CONTROLLED_FOR_PAGE = new Set(["mol/checkbox-item", "mol/all-agree-row"]);
  if (pageStateNamesModule && pageStateNamesModule.has(child.id) && MOL_CONTROLLED_FOR_PAGE.has(child.component)) {
    propEntries.push(`"checked": s_${jsId(child.id)}`);
    seenKeys.add("checked");
  }
  if (child.props) {
    for (const [k, v] of Object.entries(child.props)) {
      if (seenKeys.has(k)) continue;
      seenKeys.add(k);
      if (typeof v === "string" && /^(atom|mol|ogn)\//.test(v)) {
        // INSTANCE_SWAP — value 가 component path → import + JSX element 로 변환
        importsSet.add(v);
        const swapInfo = specNameToInfo(v);
        propEntries.push(`${JSON.stringify(k)}: <${swapInfo.componentName} />`);
      } else {
        propEntries.push(`${JSON.stringify(k)}: ${JSON.stringify(v)}`);
      }
    }
  }
  if (child.variant) {
    const refConflicts = conflictedAxesBySpec[child.component] || new Set();
    for (const [k, v] of Object.entries(child.variant)) {
      if (seenKeys.has(k)) continue;
      if (refConflicts.has(k)) continue; // ref 대상의 충돌 axis 는 default 사용 (variant value text 로 새지 않게)
      seenKeys.add(k);
      propEntries.push(`${JSON.stringify(k)}: ${JSON.stringify(v)}`);
    }
  }

  // exposeAs (ref → React node prop) — 사용처에서 component / element 넘길 수 있게
  if (expose) propsSet.add({ name: expose, type: "React.ReactNode", optional: true });

  const style = buildChildStyle(child);
  const styleStr = Object.keys(style).length > 0 ? ` style={${styleToJsx(style)}}` : "";

  const propsStr = propEntries.length > 0 ? ` {...{${propEntries.join(", ")}}}` : "";
  // expose 가 있는 ref 의 경우 사용처 props 통해 override 가능 (단순화 — props 로 전달)
  if (expose) {
    const exposeKey = JSON.stringify(expose);
    return `${indent}<div data-id="${id}"${styleStr}>{props[${exposeKey}] != null ? props[${exposeKey}] : <${compName}${propsStr} />}</div>`;
  }
  return `${indent}<${compName} data-id="${id}"${propsStr}${styleStr} />`;
}

function renderGroup(child, indent) {
  const id = child.id || "group";
  const layoutStyle = buildLayoutStyle(child.layout || {}, true);
  const visualStyle = buildVisualStyle(child.visual || {});
  const childStyle = buildChildStyle(child);
  const style = { ...layoutStyle, ...visualStyle, ...childStyle };

  const styleStr = Object.keys(style).length > 0 ? ` style={${styleToJsx(style)}}` : "";
  const children = (child.children || []).map(c => renderChild(c, indent + "  ")).join("\n");
  return `${indent}<div data-id="${id}"${styleStr}>\n${children}\n${indent}</div>`;
}

// ---------- variants overrides → flat path map 추출 ----------
// 결과 형태: { "visual.fill": [{cond, value}, ...], "children[message].color": [...], ... }
function flattenOverride(obj, prefix = []) {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    if (v && typeof v === "object" && !Array.isArray(v) && !k.includes("[")) {
      Object.assign(out, flattenOverride(v, prefix.concat(k)));
    } else {
      out[prefix.concat(k).join(".")] = v;
    }
  }
  return out;
}
// comboKey ("type=primary,state=pressed") → JS condition expression.
// conflictedAxes 에 있는 axis 는 compile-time evaluate (default value 와 비교).
//   match → skip from runtime check
//   no match → 전체 condition 항상 false → null 반환 (이 override 자체 skip)
function comboKeyToCondExpr(comboKey, spec, conflictedAxes) {
  const live = [];
  for (const p of comboKey.split(",")) {
    const [axis, val] = p.split("=");
    if (conflictedAxes.has(axis)) {
      const axisDef = spec.variants.axes.find(a => a.name === axis);
      const defaultVal = axisDef?.values?.[0];
      if (defaultVal !== val) return null; // 항상 false → skip
      // match → 무시 (compile-time true)
    } else {
      live.push(`props[${JSON.stringify(axis)}] === ${JSON.stringify(val)}`);
    }
  }
  return live.length === 0 ? "true" : live.join(" && ");
}

function buildOverrideMap(spec, conflictedAxes = new Set()) {
  const map = {}; // path → [{cond, value}]
  if (!spec.variants || !spec.variants.overrides) return map;
  for (const [comboKey, override] of Object.entries(spec.variants.overrides)) {
    const flat = flattenOverride(override);
    const cond = comboKeyToCondExpr(comboKey, spec, conflictedAxes);
    if (cond === null) continue;
    for (const [path, value] of Object.entries(flat)) {
      if (!map[path]) map[path] = [];
      map[path].push({ cond, value });
    }
  }
  return map;
}
// path 의 base value + override branches → JSX expression string
// 결과는 항상 "((cond1) ? v1 : ((cond2) ? v2 : base))" 또는 base literal 형태
function exprForPath(overrideMap, path, baseValue, valueToCssFn) {
  const branches = overrideMap[path];
  const baseCss = valueToCssFn(baseValue);
  if (!branches || branches.length === 0) {
    return baseCss == null ? null : JSON.stringify(baseCss);
  }
  let expr = baseCss == null ? "null" : JSON.stringify(baseCss);
  for (const b of [...branches].reverse()) {
    const v = valueToCssFn(b.value);
    const vLit = v == null ? "null" : JSON.stringify(v);
    expr = `((${b.cond}) ? ${vLit} : ${expr})`;
  }
  return expr;
}

// ---------- variants overrides → child hide 조건 추출 ----------
function findBaseChildById(children, id) {
  for (const c of (children || [])) {
    if (c.id === id) return c;
    if (c.kind === "group") {
      const r = findBaseChildById(c.children, id);
      if (r) return r;
    }
  }
  return null;
}
function buildHideMap(spec, conflictedAxes = new Set()) {
  const hideMap = {};
  if (!spec.variants || !spec.variants.overrides) return hideMap;
  for (const [comboKey, override] of Object.entries(spec.variants.overrides)) {
    if (!override || typeof override !== "object") continue;
    const cond = comboKeyToCondExpr(comboKey, spec, conflictedAxes);
    if (cond === null) continue;
    for (const [k, v] of Object.entries(override)) {
      // 1. children[id].visible: false
      let m = k.match(/^children\[(.+?)\]\.visible$/);
      if (m && v === false) {
        const childId = m[1];
        if (!hideMap[childId]) hideMap[childId] = [];
        hideMap[childId].push(`(${cond})`);
        continue;
      }
      // 2. children[parent].children = [...] 통째 교체 → 새 children 에 없는 base id 는 hide
      m = k.match(/^children\[(.+?)\]\.children$/);
      if (m && Array.isArray(v)) {
        const parentId = m[1];
        const baseParent = findBaseChildById(spec.base?.children, parentId);
        if (!baseParent) continue;
        const newIds = new Set(v.map(c => c.id));
        for (const oldChild of (baseParent.children || [])) {
          if (!oldChild.id || newIds.has(oldChild.id)) continue;
          if (!hideMap[oldChild.id]) hideMap[oldChild.id] = [];
          hideMap[oldChild.id].push(`(${cond})`);
        }
      }
    }
  }
  return hideMap;
}

// ---------- 컴포넌트 1개 → tsx 코드 ----------
function generateComponent(spec) {
  // atom 템플릿이 있으면 고품질 코드로 바로 반환
  if (ATOM_TEMPLATES[spec.name]) return ATOM_TEMPLATES[spec.name](spec);

  importsSet = new Set();
  propsSet = new Set();
  pageStateNamesModule = null; // page 만 set, 일반 컴포넌트는 null

  const info = specNameToInfo(spec.name);

  // 1차 — children render 로 propsSet 에 expose 들어감 (그러나 render 결과는 conflictedAxes 알기 전이라 임시)
  // 2 pass: 먼저 children expose 만 채집 → conflictedAxes 결정 → overrideMap/hideMap 생성 → 다시 render
  const exposePassCollect = new Set();
  function walkExposes(children) {
    for (const c of (children || [])) {
      if (c.kind === "text" && c.exposeAs) exposePassCollect.add(c.exposeAs);
      if (c.kind === "ref" && c.exposeAs) exposePassCollect.add(c.exposeAs);
      if (c.kind === "group") walkExposes(c.children);
    }
  }
  walkExposes(spec.base.children);
  const conflictedAxes = new Set();
  if (spec.variants?.axes) {
    for (const axis of spec.variants.axes) {
      if (exposePassCollect.has(axis.name)) conflictedAxes.add(axis.name);
    }
  }

  overrideMap = buildOverrideMap(spec, conflictedAxes);
  hideMapModule = buildHideMap(spec, conflictedAxes);

  // mol interactive 면 자식 atom 의 state prop binding (children render 시점에 활성)
  const MOL_INTERACTIVE_EARLY = new Set(["mol/checkbox-item", "mol/all-agree-row"]);
  childAtomStateBindingModule = MOL_INTERACTIVE_EARLY.has(spec.name)
    ? `(_checked ? "checked" : "default")`
    : null;

  const layoutStyle = buildLayoutStyle(spec.base.layout || {}, false);
  const visualStyle = buildVisualStyle(spec.base.visual || {});
  const baseStyle = { ...layoutStyle, ...visualStyle };

  const childrenJsx = (spec.base.children || []).map(c => renderChild(c, "      ")).join("\n");

  // variants axes — props type. children exposeAs 와 axis name 충돌 시 axis skip (props 우선 + conflictedAxes 처리됨)
  if (spec.variants && spec.variants.axes) {
    for (const axis of spec.variants.axes) {
      if (conflictedAxes.has(axis.name)) continue;
      const union = axis.values.map(v => JSON.stringify(v)).join(" | ");
      propsSet.add({ name: axis.name, type: union, optional: true });
    }
  }

  // imports
  const imports = [...importsSet].map(p => {
    const i = specNameToInfo(p);
    // 상대 경로 — 현재 컴포넌트의 카테고리 기준
    const fromParts = info.path.split("/");
    const toParts = i.path.split("/");
    // 같은 라이브러리 폴더 (src/components/library) 안 → 상대 경로 계산
    const fromDir = fromParts.slice(0, -1).join("/");
    const toFile = i.path;
    let relativeImport;
    if (fromDir === "") {
      relativeImport = "./" + toFile;
    } else {
      const upCount = fromParts.length - 1;
      relativeImport = "../".repeat(upCount) + toFile;
    }
    return `import { ${i.componentName} } from "${relativeImport}";`;
  }).join("\n");

  // props 인터페이스
  const propsArr = Array.from(propsSet);
  // mol interactive 판별 (propsLines / defaults 보다 먼저)
  const MOL_INTERACTIVE = new Set(["mol/checkbox-item", "mol/all-agree-row"]);
  const isMolInteractive = MOL_INTERACTIVE.has(spec.name);

  // identifier 가 아닌 prop 이름 (dash 포함 등) 은 quote
  const isValidIdentifier = (s) => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(s);
  const propsLines = propsArr.map(p => {
    const key = isValidIdentifier(p.name) ? p.name : JSON.stringify(p.name);
    return `  ${key}${p.optional ? "?" : ""}: ${p.type};`;
  });
  if (isMolInteractive) {
    propsLines.push(`  checked?: boolean;`);
    propsLines.push(`  onCheckedChange?: (next: boolean) => void;`);
  }
  const propsInterface = propsArr.length > 0
    ? `interface ${info.componentName}Props {\n${propsLines.join("\n")}\n}`
    : `type ${info.componentName}Props = Record<string, never>;`;

  const styleStr = Object.keys(baseStyle).length > 0 ? `style={${styleToJsx(baseStyle)}}` : "";

  // axis default — props 안 박은 경우 첫 value 로 fallback. 충돌 axis 는 default 박지 X (conflictedAxes 처리됨)
  const axisDefaults = [];
  if (spec.variants && spec.variants.axes) {
    for (const axis of spec.variants.axes) {
      if (conflictedAxes.has(axis.name)) continue;
      axisDefaults.push(`${JSON.stringify(axis.name)}: ${JSON.stringify(axis.values[0])}`);
    }
  }

  // mol interactive: controlled — props.checked 또는 page Context 의 data-id 매칭 으로 시각. 자체 onClick X
  const interactivePrefix = isMolInteractive ? `"use client";\n` : "";
  let defaultsLine;
  if (isMolInteractive) {
    defaultsLine = `  const _ctx = React.useContext(PageStateContext);
  const _id = rawProps["data-id"];
  const _checked = _ctx && _id != null && _id in _ctx ? !!_ctx[_id] : !!rawProps.checked;
  const props = { ${axisDefaults.join(", ")}${axisDefaults.length ? ", " : ""}...rawProps };
`;
  } else {
    defaultsLine = axisDefaults.length > 0
      ? `  const props = { ${axisDefaults.join(", ")}, ...rawProps };\n`
      : `  const props = rawProps;\n`;
  }
  // mol interactive 안 자식 atom checkbox/radio 는 _checked 따라 state prop binding
  childAtomStateBindingModule = isMolInteractive ? `(_checked ? "checked" : "default")` : null;

  // 외부 style override 가능하게 — ref 사용처에서 박은 style (flex/alignSelf 등) 을 root 에 spread
  const rootStyleExpr = Object.keys(baseStyle).length > 0
    ? `{ ...${styleToJsx(baseStyle)}, ...rawProps.style }`
    : `rawProps.style`;

  const onClickAttr = ""; // mol interactive 도 page delegation 으로 처리 (자체 onClick X)

  const ctxImport = isMolInteractive
    ? `import { PageStateContext } from "@/components/library/_state-context";\n`
    : "";

  return `// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ${spec.name}
// description: ${(spec.description || "").replace(/\n/g, " ")}
${interactivePrefix}import * as React from "react";
${ctxImport}${imports}

interface ${info.componentName}BaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
${propsInterface.replace(/^interface (\w+)Props \{$/m, "interface $1Props extends " + info.componentName + "BaseProps {").replace(/^type (\w+)Props = Record<string, never>;$/m, "interface $1Props extends " + info.componentName + "BaseProps {}")}

export function ${info.componentName}(rawProps: ${info.componentName}Props = {} as ${info.componentName}Props) {
${defaultsLine}  return (
    <div data-component="${spec.name}" data-id={rawProps["data-id"]} style={${rootStyleExpr}}${onClickAttr}>
${childrenJsx}
    </div>
  );
}

export default ${info.componentName};
`;
}

// ---------- page → Next.js page ----------
// page-interactions: auto (자동 추론) + manual override (수동) 합치기
let _interactionsCache = null;
function loadInteractions() {
  if (_interactionsCache) return _interactionsCache;
  const autoPath = resolve(WEB_ROOT, "src/lib/page-interactions.auto.json");
  const manualPath = resolve(WEB_ROOT, "src/lib/page-interactions.json");
  let auto = {};
  let manual = {};
  try { auto = JSON.parse(readFileSync(autoPath, "utf8")); } catch (e) {}
  try { manual = JSON.parse(readFileSync(manualPath, "utf8")); } catch (e) {}
  // 수동이 우선 (page slug 단위 통째 override)
  _interactionsCache = { ...auto, ...manual };
  return _interactionsCache;
}

function generatePage(spec) {
  const info = specNameToInfo(spec.name);
  const slug = info.path.replace(/^page\//, "");
  importsSet = new Set();
  propsSet = new Set();
  overrideMap = {};
  hideMapModule = buildHideMap(spec, new Set());
  childAtomStateBindingModule = null;

  // 페이지별 인터랙션 메타 (states / actions / sync)
  const inter = loadInteractions()[slug] || null;
  pageStateNamesModule = new Set(Object.keys(inter?.states || {}));

  const layoutStyle = buildLayoutStyle(spec.base.layout || {}, false);
  const visualStyle = buildVisualStyle(spec.base.visual || {});
  const baseStyle = { ...layoutStyle, ...visualStyle, width: "100%", minHeight: "100%" };

  const childrenJsx = (spec.base.children || []).map(c => renderChild(c, "          ")).join("\n");

  const imports = [...importsSet].map(p => {
    const i = specNameToInfo(p);
    // page 는 src/app/library/preview/<slug>/page.tsx — components/library 까지 상대 경로
    return `import { ${i.componentName} } from "@/components/library/${i.path}";`;
  }).join("\n");

  // page-level state lifting (interactions.states 기반)
  const stateInits = inter?.states || {};
  const stateNames = Object.keys(stateInits);
  const stateDecls = stateNames.map(n => `  const [s_${jsId(n)}, set_s_${jsId(n)}] = React.useState<boolean>(${JSON.stringify(stateInits[n])});`).join("\n");
  // sync map (all-toggle / radio-group)
  const syncMap = inter?.sync || {};
  const syncType = inter?.syncType || {}; // parent → "all-toggle" | "radio-group"
  // navigate action condition
  const navAction = inter?.actions?.next;

  // 각 state 가 어느 부모 sync 에 속한 자식인지 매핑
  const childToParents = {};
  for (const [parent, kids] of Object.entries(syncMap)) {
    if (!Array.isArray(kids)) continue;
    for (const k of kids) {
      if (!childToParents[k]) childToParents[k] = [];
      childToParents[k].push(parent);
    }
  }

  // delegated click handler 본체
  const stateToggleCases = stateNames.map(n => {
    const kids = syncMap[n];
    if (Array.isArray(kids)) {
      const t = syncType[n];
      if (t === "radio-group") {
        // radio-group 부모 자체 클릭은 무동작 (radio 그룹은 자식만 클릭)
        return `if (id === ${JSON.stringify(n)}) { return; }`;
      }
      // all-toggle (default): 부모 toggle → 자기 + 자식 모두 set
      const childSets = kids.map(c => `set_s_${jsId(c)}(_next)`).join("; ");
      return `if (id === ${JSON.stringify(n)}) { const _next = !s_${jsId(n)}; set_s_${jsId(n)}(_next); ${childSets}; return; }`;
    }
    const parents = childToParents[n] || [];
    if (parents.length > 0) {
      return parents.map(p => {
        const allKids = syncMap[p];
        const t = syncType[p];
        if (t === "radio-group") {
          // 자식 click → 자기 true + 형제 모두 false + 부모 = 자기 true (어느 하나 선택됨)
          const sibSets = allKids.map(c => c === n ? `set_s_${jsId(c)}(true)` : `set_s_${jsId(c)}(false)`).join("; ");
          return `if (id === ${JSON.stringify(n)}) { ${sibSets}; set_s_${jsId(p)}(true); return; }`;
        }
        // all-toggle: 자기 toggle + 부모 evaluate (모두 체크 시 true)
        const evalExpr = allKids.map(k => k === n ? "_next" : `s_${jsId(k)}`).join(" && ");
        return `if (id === ${JSON.stringify(n)}) { const _next = !s_${jsId(n)}; set_s_${jsId(n)}(_next); set_s_${jsId(p)}(${evalExpr}); return; }`;
      }).join("\n          ");
    }
    return `if (id === ${JSON.stringify(n)}) { set_s_${jsId(n)}(v => !v); return; }`;
  }).join("\n          ");

  // [loading] page: full-screen → useEffect timeout 후 자동 next
  const loadingMeta = inter?.loading;
  const loadingAuto = loadingMeta && loadingMeta.selector === "page" && loadingMeta.type === "full-screen";
  // [nav] gnb.menu → page/... — selector → page slug 매핑
  const navMap = inter?.nav || {};
  const navEntries = Object.entries(navMap);

  // navigate condition — multi-state expression 지원 ("a && b" → "s_a && s_b")
  const stateNamesSet = new Set(stateNames);
  function condToExpr(cond) {
    if (!cond) return "true";
    return cond.replace(/[a-zA-Z][a-zA-Z0-9_-]*/g, (m) => stateNamesSet.has(m) ? `s_${jsId(m)}` : m);
  }
  const navCondExpr = condToExpr(navAction?.condition);

  // state 키 set 을 client 코드에서 사용 (closest match 시)
  const stateKeysJson = JSON.stringify(stateNames);
  const navTarget = navAction?.target ? JSON.stringify(navAction.target) : "next";

  const ctxValueEntries = stateNames.map(n => `${JSON.stringify(n)}: s_${jsId(n)}`).join(", ");

  return `// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ${spec.name}
"use client";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import flowMap from "@/lib/page-flow.json";
import { PageStateContext } from "@/components/library/_state-context";
${imports}

const SLUG = ${JSON.stringify(slug)};

export default function PreviewPage() {
  // page 안 inline text 의 expose 는 component 가 아니라 page scope — props 변수 정의 (모두 undefined 라 fallback default 적용)
  const props: Record<string, unknown> = {};
  void props;
  const router = useRouter();
  // SSR 시점에 embed 결정 — useState + useEffect 두번 render 로 인한 깜빡 방지
  const _searchParams = useSearchParams();
  const embed = _searchParams?.get("embed") === "1";
  const next = (flowMap as Record<string, string | null>)[SLUG] || null;
${stateDecls}
  const _navigateTo = (slug: string) => {
    router.push("/library/preview/" + slug + (embed ? "?embed=1" : ""));
    if (embed && typeof window !== "undefined") {
      window.parent?.postMessage({ type: "preview-nav", slug }, "*");
    }
  };
  const onNext = () => {
    const target = ${navTarget};
    if (typeof target === "string" && target.length > 0 && target !== "next") _navigateTo(target);
    else if (next) _navigateTo(next);
  };
  ${loadingAuto ? `
  // [loading] page: full-screen → 2초 후 자동 next (BSS 처리 시뮬레이션)
  React.useEffect(() => {
    const _t = setTimeout(() => onNext(), 2000);
    return () => clearTimeout(_t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);` : ""}
  return (
    <PageStateContext.Provider value={{ ${ctxValueEntries} }}>
    <div style={embed ? { minHeight: "100vh", background: "#fff", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: 0 } : { minHeight: "100vh", background: "#1f2937", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: 32 }}>
      <div style={embed ? { width: 375, height: 812, background: "var(--semantic-color-background-page-home, #ffffff)", overflow: "hidden", display: "flex", flexDirection: "column" } : { width: 375, height: 812, background: "var(--semantic-color-background-page-home, #ffffff)", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column" }}>
        <div data-component="${spec.name}" style={{ ...${styleToJsx(baseStyle)}, height: "100%", overflowY: "auto", overflowX: "hidden" }} onClick={(e) => {
          const t = (e.target as HTMLElement);
          // 1. 헤더 back button → router.back() + 부모 postMessage
          const btnIcon = t.closest<HTMLElement>('[data-component="atom/btn-icon"]');
          if (btnIcon && btnIcon.dataset.id === "btn-back") {
            router.back();
            if (embed && typeof window !== "undefined") window.parent?.postMessage({ type: "preview-nav-back" }, "*");
            return;
          }
          // 1-b. nav 매핑 (GNB / tab-bar 의 menu icon → 외부 page)
          ${navEntries.length > 0 ? `
          const _navMap: Record<string, string> = ${JSON.stringify(Object.fromEntries(navEntries))};
          for (const [navSel, navTarget] of Object.entries(_navMap)) {
            // navSel 형태: "gnb.menu" → ogn/GNB 안 data-id="menu" / "tab-bar.search" → ogn/tab-bar 안 data-id="search"
            const [parent, childId] = navSel.split(".");
            const parentMatch = (parent === "gnb" && t.closest('[data-component="ogn/GNB"]'))
              || (parent === "tab-bar" && t.closest('[data-component="ogn/tab-bar"]'));
            const childMatch = t.closest('[data-id="' + childId + '"]');
            if (parentMatch && childMatch) { _navigateTo(navTarget); return; }
          }` : "/* no nav */"}
          // 2. interactive id (data-id) 클릭 → state toggle / sync
          //    parent 로 walk 하면서 state key 매치되는 가장 가까운 data-id 찾음 (자식의 data-id 가 더 안쪽이라 closest 만으론 부족)
          const _stateKeys = new Set<string>(${stateKeysJson});
          let _walk: HTMLElement | null = t;
          let id: string | undefined = undefined;
          while (_walk) {
            const _did = _walk.dataset?.id;
            if (_did && _stateKeys.has(_did)) { id = _did; break; }
            _walk = _walk.parentElement;
          }
          if (id) {
          ${stateToggleCases || "/* no states */"}
          }
          // 3. sticky-footer 안 atom/btn 클릭 → navigate (condition 충족 시)
          const inSticky = t.closest('[data-component="ogn/sticky-footer-cta"]') || t.closest('[data-component="ogn/sticky-footer"]');
          const isBtn = t.closest('[data-component="atom/btn"]');
          if (inSticky && isBtn) {
            if (${navCondExpr}) onNext();
            return;
          }
        }}>
${childrenJsx}
        </div>
      </div>
    </div>
    </PageStateContext.Provider>
  );
}
`;
}

function jsId(s) {
  return s.replace(/[^a-zA-Z0-9_]/g, "_");
}

// ---------- 실행 ----------
const all = walkSpecs(SPECS_ROOT);
console.log("총 spec:", all.length);
precomputeConflictedAxes(all);

// 출력 폴더 정리 (idempotent)
if (existsSync(OUT_LIB_ROOT)) rmSync(OUT_LIB_ROOT, { recursive: true, force: true });
if (existsSync(OUT_PAGE_ROOT)) rmSync(OUT_PAGE_ROOT, { recursive: true, force: true });

// 공유 Context 파일 (page <-> nested mol 사이 state 전달)
mkdirSync(OUT_LIB_ROOT, { recursive: true });
writeFileSync(resolve(OUT_LIB_ROOT, "_state-context.tsx"), `"use client";
import * as React from "react";
// page generator 가 자동 주입. nested 된 mol/checkbox-item / all-agree-row 가 useContext 로 자기 id 매칭 후 시각 결정.
export const PageStateContext = React.createContext<Record<string, boolean> | null>(null);
`);

const indexEntries = { atom: [], mol: [], ogn: [], page: [] };
let okCount = 0;
let errCount = 0;

for (const { filePath, spec } of all) {
  const info = specNameToInfo(spec.name);
  if (!["atom", "mol", "ogn", "page"].includes(info.category)) continue;

  try {
    if (info.category === "page") {
      // page → Next.js route
      const slug = info.path.replace(/^page\//, "");
      const outFile = resolve(OUT_PAGE_ROOT, slug, "page.tsx");
      mkdirSync(dirname(outFile), { recursive: true });
      writeFileSync(outFile, generatePage(spec));
    } else {
      const outFile = resolve(OUT_LIB_ROOT, info.relFile);
      mkdirSync(dirname(outFile), { recursive: true });
      writeFileSync(outFile, generateComponent(spec));
    }
    indexEntries[info.category].push(spec.name);
    okCount++;
  } catch (e) {
    console.warn("⚠ 생성 실패:", spec.name, e.message);
    errCount++;
  }
}

console.log(`✓ 생성 ${okCount}개 / 실패 ${errCount}개`);
for (const cat of ["atom", "mol", "ogn", "page"]) {
  console.log(`  ${cat}: ${indexEntries[cat].length}`);
}

// ---------- icon 자동 생성 — SVG inline 또는 stub (icon-registry 기반) ----------
const ICON_REGISTRY_PATH = resolve(WEB_ROOT, "shared/scripter/icon-registry.json");
const FIGMA_ICONS_ROOT = resolve(WEB_ROOT, "shared/figma-icons");
function readSvgInline(svgRelPath) {
  if (!svgRelPath) return null;
  const full = resolve(FIGMA_ICONS_ROOT, svgRelPath);
  if (!existsSync(full)) return null;
  let content = readFileSync(full, "utf8");
  const m = content.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/i);
  if (!m) return null;
  const attrs = m[1];
  const viewBox = (attrs.match(/viewBox="([^"]+)"/) || [])[1] || "0 0 24 24";
  const fillAttr = (attrs.match(/fill="([^"]+)"/) || [])[1] || "none";
  let inner = m[2].trim();
  inner = inner.replace(/fill-rule="/g, 'fillRule="').replace(/clip-rule="/g, 'clipRule="').replace(/stroke-linecap="/g, 'strokeLinecap="').replace(/stroke-linejoin="/g, 'strokeLinejoin="').replace(/stroke-width="/g, 'strokeWidth="');
  return { viewBox, fillAttr, inner };
}
if (existsSync(ICON_REGISTRY_PATH)) {
  const icons = JSON.parse(readFileSync(ICON_REGISTRY_PATH, "utf8"));
  let iconCount = 0;
  let inlineCount = 0;
  for (const ic of icons) {
    const info = specNameToInfo(ic.name); // "atom/icon/bag" / "atom/logo/T"
    const outFile = resolve(OUT_LIB_ROOT, info.relFile);
    if (existsSync(outFile)) continue;
    mkdirSync(dirname(outFile), { recursive: true });

    const svgData = readSvgInline(ic.svg);
    let body;
    if (svgData) {
      const isMicro = /^0 0 16 16$/.test(svgData.viewBox.trim());
      const sz = isMicro ? 16 : 24;
      body = `    <svg
      data-component="${ic.name}"
      data-id={(props as any)["data-id"]}
      width={${sz}}
      height={${sz}}
      viewBox="${svgData.viewBox}"
      fill="${svgData.fillAttr}"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, color: "var(--semantic-color-icon-default, currentColor)", ...props.style }}
    >
      ${svgData.inner.replace(/\n/g, "\n      ")}
    </svg>`;
      inlineCount++;
    } else {
      body = `    <div
      data-component="${ic.name}"
      style={{
        width: 24,
        height: 24,
        background: "var(--semantic-color-icon-container-default, #ecedef)",
        borderRadius: 4,
        display: "inline-block",
        flexShrink: 0,
        ...props.style,
      }}
    />`;
    }
    const code = `// AUTO-GENERATED — icon (icon-registry 기반)
// name: ${ic.name} / svg: ${ic.svg || "(skeleton)"}
import * as React from "react";

interface ${info.componentName}Props {
  style?: React.CSSProperties;
}

export function ${info.componentName}(props: ${info.componentName}Props = {} as ${info.componentName}Props) {
  return (
${body}
  );
}

export default ${info.componentName};
`;
    writeFileSync(outFile, code);
    iconCount++;
  }
  console.log(`✓ icon ${iconCount}개 (SVG inline ${inlineCount} / stub ${iconCount - inlineCount})`);
}

// 인덱스 저장 (라이브러리 페이지가 사용)
const indexJson = JSON.stringify(indexEntries, null, 2);
writeFileSync(resolve(WEB_ROOT, "src/components/library/index.json"), indexJson);
console.log("✓ index.json 작성");
