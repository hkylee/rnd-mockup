// =============================================
// SKT Genui — Screen Wireframe Renderer
// SB JSON → Figma 폰 와이어프레임 (375px)
//
// 단독 실행 시: SCREEN_DATA 를 상단에 직접 넣고 Run
// 배치 실행: bundle-screen-batch.js 로 번들 후 Figma Scripter Run
// =============================================

(async function renderScreen() {

// ═══════════════════════════════════
// Colors
// ═══════════════════════════════════
const C = {
  white:      { r: 1,     g: 1,     b: 1 },
  gray50:     { r: 0.973, g: 0.973, b: 0.980 },
  gray100:    { r: 0.945, g: 0.957, b: 0.961 },
  gray200:    { r: 0.878, g: 0.906, b: 0.922 },
  gray300:    { r: 0.800, g: 0.835, b: 0.855 },
  gray400:    { r: 0.533, g: 0.573, b: 0.631 },
  gray600:    { r: 0.294, g: 0.333, b: 0.388 },
  gray800:    { r: 0.129, g: 0.157, b: 0.196 },
  brand:      { r: 0.212, g: 0.090, b: 0.808 },
  brandL:     { r: 0.910, g: 0.941, b: 1.000 },
  warnBg:     { r: 1.000, g: 0.976, b: 0.878 },
  warnText:   { r: 0.902, g: 0.471, b: 0.000 },
  errBg:      { r: 1.000, g: 0.961, b: 0.961 },
  errText:    { r: 0.788, g: 0.165, b: 0.165 },
  infoBg:     { r: 0.910, g: 0.957, b: 0.992 },
  infoText:   { r: 0.098, g: 0.443, b: 0.784 },
  successBg:  { r: 0.922, g: 0.984, b: 0.933 },
  successText:{ r: 0.184, g: 0.620, b: 0.263 },
  divider:    { r: 0.945, g: 0.953, b: 0.961 },
};

// ═══════════════════════════════════
// Font loading
// ═══════════════════════════════════
let FONT = "Inter";
const FONT_STYLES = { R: "Regular", M: "Medium", SB: "SemiBold", B: "Bold" };
for (const fam of ["Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "Inter"]) {
  try {
    await figma.loadFontAsync({ family: fam, style: "Regular" });
    await figma.loadFontAsync({ family: fam, style: "Bold" });
    try { await figma.loadFontAsync({ family: fam, style: "Medium" }); } catch(e) { FONT_STYLES.M = "Regular"; }
    try { await figma.loadFontAsync({ family: fam, style: "SemiBold" }); } catch(e) { FONT_STYLES.SB = "Bold"; }
    FONT = fam; break;
  } catch(e) { continue; }
}

// ═══════════════════════════════════
// Primitive helpers
// ═══════════════════════════════════
function S(c) { return [{ type: "SOLID", color: c }]; }

function vf(name, opts) {
  opts = opts || {};
  const fr = figma.createFrame();
  fr.name = name;
  fr.layoutMode = "VERTICAL";
  fr.primaryAxisSizingMode   = opts.hug    ? "AUTO"  : "FIXED";
  fr.counterAxisSizingMode   = opts.wstretch ? "AUTO" : "FIXED";
  fr.fills = opts.fill ? S(opts.fill) : [];
  fr.itemSpacing    = opts.gap || 0;
  fr.paddingTop     = opts.pt  || 0;
  fr.paddingRight   = opts.pr  || 0;
  fr.paddingBottom  = opts.pb  || 0;
  fr.paddingLeft    = opts.pl  || 0;
  if (opts.align)      fr.primaryAxisAlignItems  = opts.align;
  if (opts.crossAlign) fr.counterAxisAlignItems  = opts.crossAlign;
  if (opts.radius)     fr.cornerRadius = opts.radius;
  if (opts.stroke)   { fr.strokes = S(opts.stroke); fr.strokeWeight = opts.sw || 1; fr.strokeAlign = "INSIDE"; }
  if (opts.clip !== undefined) fr.clipsContent = opts.clip;
  if (opts.w && opts.h) fr.resize(opts.w, opts.h);
  else if (opts.w)      fr.resize(opts.w, 100);
  return fr;
}

function hf(name, opts) {
  opts = opts || {};
  const fr = figma.createFrame();
  fr.name = name;
  fr.layoutMode = "HORIZONTAL";
  fr.primaryAxisSizingMode   = opts.hug    ? "AUTO"  : "FIXED";
  fr.counterAxisSizingMode   = opts.hug    ? "AUTO"  : "FIXED";
  fr.fills = opts.fill ? S(opts.fill) : [];
  fr.itemSpacing    = opts.gap || 0;
  fr.paddingTop     = opts.pt  || 0;
  fr.paddingRight   = opts.pr  || 0;
  fr.paddingBottom  = opts.pb  || 0;
  fr.paddingLeft    = opts.pl  || 0;
  if (opts.align)      fr.primaryAxisAlignItems  = opts.align;
  if (opts.crossAlign) fr.counterAxisAlignItems  = opts.crossAlign;
  if (opts.radius)     fr.cornerRadius = opts.radius;
  if (opts.stroke)   { fr.strokes = S(opts.stroke); fr.strokeWeight = opts.sw || 1; fr.strokeAlign = "INSIDE"; }
  if (opts.w && opts.h) fr.resize(opts.w, opts.h);
  else if (opts.w)      fr.resize(opts.w, 44);
  return fr;
}

function tx(str, opts) {
  opts = opts || {};
  const t = figma.createText();
  const styleKey = opts.weight || "R";
  const style = FONT_STYLES[styleKey] || "Regular";
  t.fontName   = { family: FONT, style: style };
  t.fontSize   = opts.sz || 13;
  t.characters = String(str || "");
  t.fills      = S(opts.c || C.gray800);
  if (opts.align) t.textAlignHorizontal = opts.align;
  if (opts.maxW) { t.textAutoResize = "HEIGHT"; t.resize(opts.maxW, t.height); }
  if (opts.grow) t.layoutGrow = 1;
  return t;
}

function rc(name, w, h, fill, opts) {
  opts = opts || {};
  const r = figma.createRectangle();
  r.name = name;
  r.resize(w, h);
  r.fills = fill ? S(fill) : [];
  r.cornerRadius = opts.radius || 0;
  if (opts.stroke) { r.strokes = S(opts.stroke); r.strokeWeight = opts.sw || 1; r.strokeAlign = "INSIDE"; }
  return r;
}

// ═══════════════════════════════════
// Tag parser
// ═══════════════════════════════════
function parseTags(desc) {
  if (!desc) return [];
  return desc.split("\n").map(function(line) {
    const m = line.match(/^\[([^\]:]+)(?::([^\]]*))?\]\s*(.*)/);
    if (!m) return null;
    return { tag: m[1].trim(), sub: (m[2] || "").trim(), body: (m[3] || "").trim() };
  }).filter(Boolean);
}
function getTag(desc, name) { return parseTags(desc).filter(function(t) { return t.tag === name; }); }

// ═══════════════════════════════════
// Chrome / Footer org IDs
// ═══════════════════════════════════
const CHROME_IDS  = ["ogn/status-bar","ogn/header"];
const FOOTER_IDS  = ["ogn/sticky-footer-cta","ogn/footer-cs","ogn/tab-bar","ogn/gnb"];
const CHROME_ALL  = CHROME_IDS.concat(FOOTER_IDS);

function isChrome(oid)  { return CHROME_IDS.indexOf(oid)  >= 0; }
function isFooter(oid)  { return FOOTER_IDS.indexOf(oid)  >= 0; }
function isChromeAll(oid) { return CHROME_ALL.indexOf(oid) >= 0; }

// ═══════════════════════════════════
// Component renderers → Figma nodes
// Each returns a node (child of area-body)
// ═══════════════════════════════════

// Card helper
function mkCard(name, opts, children) {
  opts = opts || {};
  const bg = opts.bg || C.gray100;
  const card = vf(name, { hug: true, fill: bg, radius: 12, pt: 16, pr: 16, pb: 16, pl: 16, gap: 8,
    stroke: opts.stroke, sw: 1 });
  card.layoutAlign = "STRETCH";
  children.forEach(function(ch) { if (ch) card.appendChild(ch); });
  return card;
}

// Row helper (key + value)
function mkRow(key, val) {
  const row = hf("row", { hug: true, fill: null, gap: 8, align: "SPACE_BETWEEN", crossAlign: "CENTER" });
  row.layoutAlign = "STRETCH";
  row.appendChild(tx(key, { sz: 13, c: C.gray400 }));
  row.appendChild(tx(val, { sz: 13, c: C.gray800, weight: "M" }));
  return row;
}

// List item helper
function mkListItem(primary, right, muted) {
  const row = hf("list-item", { hug: true, fill: C.white, gap: 8, pt: 12, pb: 12,
    align: "SPACE_BETWEEN", crossAlign: "CENTER",
    stroke: C.divider, sw: 1 });
  row.layoutAlign = "STRETCH";
  row.appendChild(tx(primary, { sz: 14, c: muted ? C.gray400 : C.gray800, weight: "M", grow: true }));
  if (right) row.appendChild(tx(right, { sz: 14, c: C.gray800, weight: "SB" }));
  return row;
}

const RENDERS = {
  // ── Status bar (rendered separately, not via this map) ──
  "ogn/status-bar": function() {
    const f = hf("status-bar", { fill: C.white, w: 375, h: 44, pr: 20, pl: 20,
      align: "SPACE_BETWEEN", crossAlign: "CENTER" });
    f.counterAxisSizingMode = "FIXED";
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("9:41", { sz: 12, weight: "SB", c: C.gray800 }));
    f.appendChild(tx("●  ●  ●", { sz: 9, c: C.gray400 }));
    return f;
  },

  // ── Header ──
  "ogn/header": function(sd) {
    const f = hf("header", { fill: C.white, w: 375, h: 56, pr: 20, pl: 20, gap: 8,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.counterAxisSizingMode = "FIXED";
    f.layoutAlign = "STRETCH";
    const back = tx("‹", { sz: 24, c: C.gray600 });
    const title = tx(sd.screenName || "화면명", { sz: 17, weight: "SB", c: C.gray800 });
    title.layoutGrow = 1;
    const more = tx("···", { sz: 16, c: C.gray400 });
    f.appendChild(back); f.appendChild(title); f.appendChild(more);
    return f;
  },

  // ── Tab bar ──
  "ogn/tab-bar": function() {
    const f = hf("tab-bar", { fill: C.white, w: 375, h: 64, pr: 24, pl: 24,
      align: "SPACE_BETWEEN", crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.counterAxisSizingMode = "FIXED";
    f.strokes = S(C.divider); f.strokeAlign = "OUTSIDE";
    f.layoutAlign = "STRETCH";
    ["홈","청구","혜택","MY"].forEach(function(label, i) {
      f.appendChild(tx(label, { sz: 12, c: i === 1 ? C.brand : C.gray400, weight: i === 1 ? "SB" : "R" }));
    });
    return f;
  },

  // ── Sticky footer CTA ──
  "ogn/sticky-footer-cta": function(sd, area) {
    const actions = getTag(area.descriptions, "액션");
    const label = actions[0]
      ? actions[0].body.split("→")[0].replace(/tap\s*/i, "").trim()
      : "확인";
    const wrap = vf("footer-cta", { hug: true, fill: C.white, pt: 12, pr: 16, pb: 12, pl: 16,
      stroke: C.divider, sw: 1 });
    wrap.strokes = S(C.divider); wrap.strokeAlign = "OUTSIDE";
    wrap.layoutAlign = "STRETCH";
    const btn = vf("cta-btn", { hug: true, fill: C.brand, radius: 12,
      pt: 16, pr: 16, pb: 16, pl: 16, align: "CENTER", crossAlign: "CENTER" });
    btn.resize(343, 52); btn.primaryAxisSizingMode = "FIXED"; btn.counterAxisSizingMode = "FIXED";
    btn.layoutAlign = "STRETCH";
    btn.appendChild(tx(label, { sz: 16, weight: "B", c: C.white, align: "CENTER" }));
    wrap.appendChild(btn);
    return wrap;
  },

  // ── Footer CS ──
  "ogn/footer-cs": function() {
    const f = vf("footer-cs", { hug: true, fill: C.gray100, pt: 16, pr: 24, pb: 16, pl: 24,
      align: "CENTER", crossAlign: "CENTER" });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("고객센터 · 1588-0010", { sz: 12, c: C.gray400, align: "CENTER" }));
    return f;
  },

  // ── Bill summary card ──
  "ogn/BIL/bill-summary-card": function() {
    return mkCard("bill-summary-card", { bg: C.white, stroke: C.gray200 }, [
      tx("11월 청구 요금", { sz: 12, c: C.gray400, weight: "M" }),
      tx("78,300원", { sz: 26, weight: "B", c: C.gray800 }),
      mkRow("납부 기한","11/25"),
      mkRow("자동납부","카드 ****-7890"),
    ]);
  },

  // ── Line selector ──
  "ogn/BIL/line-selector": function() {
    const row = hf("line-selector", { hug: true, fill: C.white, gap: 8, pt: 4, pb: 4 });
    row.layoutAlign = "STRETCH";
    [[true,"01X-1234-5678"],[false,"02X-9876-5432"]].forEach(function(item) {
      const active = item[0]; const label = item[1];
      const chip = hf("chip", { hug: true, fill: active ? C.brand : C.gray100, radius: 20,
        pt: 6, pr: 14, pb: 6, pl: 14, crossAlign: "CENTER" });
      chip.appendChild(tx(label, { sz: 13, c: active ? C.white : C.gray600, weight: active ? "M" : "R" }));
      row.appendChild(chip);
    });
    return row;
  },

  // ── Pay amount summary ──
  "ogn/BIL/pay-amount-summary": function() {
    return mkCard("pay-amount", {}, [
      tx("납부 합계", { sz: 12, c: C.gray400, weight: "M" }),
      tx("78,300원", { sz: 22, weight: "B", c: C.gray800 }),
    ]);
  },

  // ── Pay confirm card ──
  "ogn/BIL/pay-confirm-card": function() {
    return mkCard("pay-confirm-card", {}, [
      tx("납부 정보", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("납부 금액","78,300원"),
      mkRow("납부 수단","카드 ****-7890"),
      mkRow("납부 대상","01X-1234-5678"),
    ]);
  },

  // ── Pay result card (success) ──
  "ogn/BIL/pay-result-card": function() {
    const card = vf("result-card-success", { hug: true, fill: C.successBg, radius: 12,
      pt: 24, pr: 16, pb: 24, pl: 16, gap: 8, crossAlign: "CENTER" });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("✓", { sz: 36, weight: "B", c: C.successText, align: "CENTER" }));
    card.appendChild(tx("납부가 완료되었습니다", { sz: 18, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(mkRow("승인번호","A1234567"));
    card.appendChild(mkRow("납부 금액","78,300원"));
    card.appendChild(mkRow("납부 일시","2026.11.15 14:35"));
    return card;
  },

  // ── Pay failure card ──
  "ogn/BIL/payment-failure-card": function() {
    const card = vf("result-card-fail", { hug: true, fill: C.errBg, radius: 12,
      pt: 24, pr: 16, pb: 24, pl: 16, gap: 8, crossAlign: "CENTER", stroke: C.errText, sw: 1 });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("✕", { sz: 36, weight: "B", c: C.errText, align: "CENTER" }));
    card.appendChild(tx("납부에 실패했습니다", { sz: 18, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(tx("카드 한도 초과", { sz: 13, c: C.gray400, align: "CENTER" }));
    return card;
  },

  // ── Payment history list ──
  "ogn/BIL/payment-history-list": function() {
    const wrap = vf("pay-history-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["2026.11.15 14:35","카드 ****-7890","78,300원"],
     ["2026.10.20 09:12","계좌이체",      "76,500원"]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0] + "  " + item[1], item[2]));
    });
    return wrap;
  },

  // ── Payment method list ──
  "ogn/BIL/payment-method-list": function() {
    const wrap = vf("pay-method-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["신한카드  ****-7890","선택"],["국민은행  ****-4321",""]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], item[1]));
    });
    return wrap;
  },

  // ── Bill detail list ──
  "ogn/BIL/bill-detail-list": function() {
    const wrap = vf("bill-detail-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["기본 요금제","55,000원",false],["부가서비스","9,900원",false],
     ["단말 할부","13,400원",false],["할인","-15,000원",true]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], item[1], item[2]));
    });
    return wrap;
  },

  // ── Bill document list ──
  "ogn/BIL/bill-document-list": function() {
    const wrap = vf("bill-doc-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["2026년 11월"],["2026년 10월"]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], "조회 ›"));
    });
    return wrap;
  },

  // ── Reserve form ──
  "ogn/BIL/reserve-form": function() {
    return mkCard("reserve-form", {}, [
      tx("예약 납부 설정", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("예약일","날짜 선택 ›"),
      mkRow("납부 수단","카드 선택 ›"),
    ]);
  },

  // ── Reserve result card ──
  "ogn/BIL/reserve-result-card": function() {
    const card = vf("reserve-result", { hug: true, fill: C.successBg, radius: 12,
      pt: 20, pr: 16, pb: 20, pl: 16, gap: 8, crossAlign: "CENTER" });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("예약이 접수되었습니다", { sz: 17, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(mkRow("예약일","12월 25일"));
    card.appendChild(mkRow("금액","78,300원"));
    return card;
  },

  // ── Limit status card ──
  "ogn/BIL/limit-status-card": function() {
    return mkCard("limit-status", {}, [
      tx("현재 이용 한도", { sz: 12, c: C.gray400, weight: "M" }),
      tx("300,000원", { sz: 22, weight: "B", c: C.gray800 }),
      tx("최대 한도: 500,000원", { sz: 12, c: C.gray400 }),
    ]);
  },

  // ── Autopay card ──
  "ogn/BIL/autopay-card": function() {
    return mkCard("autopay-card", {}, [
      tx("현재 자동납부 수단", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("카드사","신한 ****-7890"),
      mkRow("출금일","매월 25일"),
    ]);
  },

  // ── Usage realtime card ──
  "ogn/BIL/usage-realtime-card": function() {
    return mkCard("realtime-card", { bg: C.warnBg }, [
      tx("실시간 예상 요금", { sz: 12, c: C.warnText, weight: "M" }),
      tx("42,100원", { sz: 22, weight: "B", c: C.gray800 }),
      tx("확정 전 금액 — 변동 가능", { sz: 12, c: C.gray400 }),
    ]);
  },

  // ── Usage forecast card ──
  "ogn/BIL/usage-forecast-card": function() {
    return mkCard("forecast-card", { bg: C.warnBg }, [
      tx("예상 금액", { sz: 12, c: C.warnText, weight: "M" }),
      tx("42,100원", { sz: 22, weight: "B", c: C.gray800 }),
    ]);
  },

  // ── Usage line list ──
  "ogn/BIL/usage-line-list": function() {
    const wrap = vf("usage-line-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["OO마켓 결제","15,000원"],["콘텐츠 구독","9,900원"]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], item[1]));
    });
    return wrap;
  },

  // ── Prepay target list ──
  "ogn/BIL/prepay-target-list": function() {
    const wrap = vf("prepay-target-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["OO마켓 결제","15,000원"],["콘텐츠 이용료","9,900원"]].forEach(function(item) {
      wrap.appendChild(mkListItem("[ ] " + item[0], item[1]));
    });
    return wrap;
  },

  // ── Prepay result card ──
  "ogn/BIL/prepay-result-card": function() {
    const card = vf("prepay-result", { hug: true, fill: C.successBg, radius: 12,
      pt: 20, pr: 16, pb: 20, pl: 16, gap: 8, crossAlign: "CENTER" });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("선결제가 완료되었습니다", { sz: 17, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(mkRow("선결제 금액","24,900원"));
    return card;
  },

  // ── Delegate target list ──
  "ogn/BIL/delegate-target-list": function() {
    const wrap = vf("delegate-target-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    wrap.appendChild(mkListItem("홍길동  01X-1234-5678 · 명의자", "선택 ›"));
    return wrap;
  },

  // ── Third-party consent sheet ──
  "ogn/BIL/third-party-consent-sheet": function() {
    return mkCard("consent-sheet", { bg: C.warnBg, stroke: C.warnText }, [
      tx("명의자 동의 필요", { sz: 12, c: C.warnText, weight: "B" }),
      tx("타인 명의 납부수단 사용 시 명의자 동의가 필요합니다", { sz: 13, c: C.gray800, maxW: 311 }),
      tx("동의 유효 시간: 24시간", { sz: 12, c: C.gray400 }),
    ]);
  },

  // ── Setting auto-prepay form ──
  "ogn/BIL/setting-auto-prepay-form": function() {
    return mkCard("auto-prepay-form", {}, [
      tx("자동 선결제 설정", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("실행일","매월 20일"),
      mkRow("납부 수단","카드 ****-7890"),
    ]);
  },

  // ── Setting limit form ──
  "ogn/BIL/setting-limit-form": function() {
    return mkCard("limit-form", {}, [
      tx("한도 변경", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("변경 한도","금액 입력"),
    ]);
  },

  // ── Setting document form ──
  "ogn/BIL/setting-document-form": function() {
    return mkCard("doc-form", {}, [
      tx("수신 설정", { sz: 12, c: C.gray400, weight: "M" }),
      tx("(●) 앱 알림  ( ) 이메일  ( ) 문자", { sz: 13, c: C.gray800 }),
    ]);
  },

  // ── Setting method card ──
  "ogn/BIL/setting-method-card": function() {
    return mkCard("method-card", {}, [
      tx("등록된 납부수단", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("신한카드","****-7890"),
    ]);
  },

  // ── Method action pair ──
  "ogn/BIL/method-action-pair": function() {
    const row = hf("method-actions", { hug: true, fill: null, gap: 8 });
    row.layoutAlign = "STRETCH";
    ["변경","해지"].forEach(function(label) {
      const btn = hf("btn-" + label, { hug: true, fill: C.white, radius: 8,
        pt: 10, pr: 14, pb: 10, pl: 14, crossAlign: "CENTER", stroke: C.brand, sw: 1.5 });
      btn.layoutGrow = 1;
      btn.appendChild(tx(label, { sz: 13, weight: "SB", c: C.brand, align: "CENTER" }));
      row.appendChild(btn);
    });
    return row;
  },

  // ── Bill variation list ──
  "ogn/BIL/bill-variation-list": function() {
    return mkCard("variation-list", { bg: C.infoBg }, [
      tx("전월 대비 변동 사유", { sz: 12, c: C.infoText, weight: "SB" }),
      tx("콘텐츠 이용료 +9,900원 증가", { sz: 13, c: C.gray800 }),
    ]);
  },

  // ── Cancel warning sheet ──
  "ogn/BIL/cancel-warning-sheet": function() {
    return mkCard("cancel-warning", { bg: C.warnBg, stroke: C.warnText }, [
      tx("자동납부 해지 안내", { sz: 12, c: C.warnText, weight: "B" }),
      tx("해지 후 미납이 발생할 수 있습니다", { sz: 13, c: C.gray800 }),
    ]);
  },

  // ── Bill guide card ──
  "ogn/BIL/bill-guide-card": function() {
    return mkCard("bill-guide-card", {}, [
      tx("2026년 11월 요금안내서", { sz: 13, weight: "M", c: C.gray800 }),
      mkRow("발급일","2026.12.01"),
    ]);
  },

  // ── Suspend status card ──
  "ogn/BIL/suspend-status-card": function() {
    return mkCard("suspend-status", { bg: C.infoBg }, [
      tx("정지 해제 상태", { sz: 12, c: C.infoText, weight: "M" }),
      tx("처리 중 ···", { sz: 14, c: C.infoText }),
    ]);
  },

  // ── atom/banner ──
  "atom/banner": function(sd, area) {
    const desc = area.descriptions || "";
    const isWarn = desc.includes("위험") || desc.includes("정지") || desc.includes("미납") || desc.includes("경고");
    const bg   = isWarn ? C.warnBg   : C.infoBg;
    const fc   = isWarn ? C.warnText : C.infoText;
    const msg  = (getTag(desc, "고지")[0] || {}).body || area.sectionDescription || "안내";
    const wrap = vf("banner", { hug: true, fill: bg, radius: 8, pt: 12, pr: 16, pb: 12, pl: 16 });
    wrap.layoutAlign = "STRETCH";
    wrap.appendChild(tx(msg.length > 60 ? msg.slice(0, 60) + "…" : msg, { sz: 13, weight: "M", c: fc, maxW: 311 }));
    return wrap;
  },

  // ── mol/notice-card ──
  "mol/notice-card": function(sd, area) {
    const tags    = parseTags(area.descriptions);
    const notice  = (tags.filter(function(t) { return t.tag === "고지"; })[0]) || {};
    const required = notice.sub && notice.sub.indexOf("필수") >= 0;
    const polId   = notice.sub ? notice.sub.split("|").slice(1).join("|") : "";
    const msg     = notice.body || area.sectionDescription || "법적 고지";
    const bg      = required ? C.warnBg : C.gray100;
    const card    = vf("notice-card", { hug: true, fill: bg, radius: 8, pt: 12, pr: 12, pb: 12, pl: 12, gap: 4 });
    card.layoutAlign = "STRETCH";
    if (required) card.appendChild(tx("[필수 고지]", { sz: 10, weight: "B", c: C.warnText }));
    if (polId)    card.appendChild(tx(polId, { sz: 10, c: C.gray400 }));
    card.appendChild(tx(msg.length > 80 ? msg.slice(0, 80) + "…" : msg, { sz: 12, c: C.gray600, maxW: 311 }));
    return card;
  },

  // ── mol/toggle-item ──
  "mol/toggle-item": function(sd, area) {
    const row = hf("toggle-row", { hug: true, fill: C.white, pt: 4, pb: 4,
      align: "SPACE_BETWEEN", crossAlign: "CENTER" });
    row.layoutAlign = "STRETCH";
    const label = tx(area.sectionName, { sz: 14, c: C.gray800 });
    label.layoutGrow = 1;
    row.appendChild(label);
    const track = rc("toggle-track", 44, 24, C.brand, { radius: 12 });
    row.appendChild(track);
    return row;
  },

  // ── mol/month-picker ──
  "mol/month-picker": function() {
    const f = hf("month-picker", { hug: true, fill: C.gray100, radius: 8, pt: 10, pb: 10,
      align: "CENTER", crossAlign: "CENTER" });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("< 2026년 11월 >", { sz: 15, weight: "SB", c: C.gray800, align: "CENTER" }));
    return f;
  },

  // ── mol/total-amount ──
  "mol/total-amount": function() {
    const f = vf("total-amount", { hug: true, fill: null, gap: 2 });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("납부 합계", { sz: 12, c: C.gray400 }));
    f.appendChild(tx("78,300원", { sz: 22, weight: "B", c: C.gray800 }));
    return f;
  },

  // ── mol/list-item-link ──
  "mol/list-item-link": function(sd, area) {
    const actions = getTag(area.descriptions, "액션");
    const label = actions[0] ? actions[0].body.split("→")[0].replace(/tap\s*/i, "").trim() : "자세히 보기";
    const f = hf("list-link", { hug: true, fill: C.white, pt: 14, pb: 14,
      align: "SPACE_BETWEEN", crossAlign: "CENTER",
      stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx(label, { sz: 14, c: C.brand, weight: "M" }));
    f.appendChild(tx("›", { sz: 14, c: C.brand }));
    return f;
  },

  // ── mol/payment-target-item / mol/list-item-pay-target ──
  "mol/payment-target-item": function() {
    const f = hf("pay-target-item", { hug: true, fill: C.white, gap: 8, pt: 12, pb: 12,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    const chk = rc("checkbox", 16, 16, C.brand, { radius: 4 });
    f.appendChild(chk);
    const lbl = tx("당월 청구액", { sz: 14, c: C.gray800, weight: "M" });
    lbl.layoutGrow = 1;
    f.appendChild(lbl);
    f.appendChild(tx("78,300원", { sz: 14, c: C.gray800, weight: "SB" }));
    return f;
  },

  // ── mol/payment-method-item ──
  "mol/payment-method-item": function() {
    const f = hf("pay-method-item", { hug: true, fill: C.white, gap: 8, pt: 12, pb: 12,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    const icon = rc("card-icon", 20, 20, C.gray300, { radius: 4 });
    f.appendChild(icon);
    const lbl = tx("신한카드 ****-7890", { sz: 14, c: C.gray800, weight: "M" });
    lbl.layoutGrow = 1;
    f.appendChild(lbl);
    const radio = rc("radio", 16, 16, C.brand, { radius: 8 });
    f.appendChild(radio);
    return f;
  },

  // ── mol/page-header / mol/section-header ──
  "mol/page-header": function(sd, area) {
    const f = vf("page-header", { hug: true, fill: null, pt: 8, pb: 4 });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx(area.sectionName, { sz: 22, weight: "B", c: C.gray800 }));
    return f;
  },
  "mol/section-header": function(sd, area) {
    const f = vf("section-header", { hug: true, fill: null });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx(area.sectionName, { sz: 14, weight: "SB", c: C.gray600 }));
    return f;
  },
  "mol/card-header": function(sd, area) { return RENDERS["mol/section-header"](sd, area); },

  // ── mol/post-action-card ──
  "mol/post-action-card": function(sd, area) {
    const actions = getTag(area.descriptions, "액션");
    const label = actions[0] ? actions[0].body.split("→")[0].replace(/tap\s*/i, "").trim() : "다음 단계";
    const f = hf("post-action", { hug: true, fill: C.white, pt: 14, pb: 14,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    const lbl = tx(label + " ›", { sz: 15, c: C.brand, weight: "SB" });
    lbl.layoutGrow = 1;
    f.appendChild(lbl);
    return f;
  },

  // ── mol/amount-row / mol/info-row ──
  "mol/amount-row": function() { return mkListItem("금액", "78,300원"); },
  "mol/info-row":   function() { return mkListItem("항목", "내용"); },

  // fallback aliases
  "mol/list-item-bill-item":  function() { return RENDERS["ogn/BIL/bill-detail-list"](); },
  "mol/list-item-pay-target": function() { return RENDERS["mol/payment-target-item"](); },
  "mol/list-item-pay-method": function() { return RENDERS["mol/payment-method-item"](); },
  "mol/payment-history-item": function() {
    return mkListItem("2026.11.15  카드 ****-7890", "78,300원");
  },
  "ogn/BIL/payment-confirm-card": function() { return RENDERS["ogn/BIL/pay-confirm-card"](); },
  "ogn/BIL/payment-result-card":  function() { return RENDERS["ogn/BIL/pay-result-card"](); },
};

// ─── Generic fallback renderer ───
function renderComp(organism, area, sd) {
  const oid = organism.organismId;
  const fn  = RENDERS[oid];
  if (fn) return fn(sd, area);

  const short = oid.split("/").pop();

  // Card-like
  if (/card|summary|result|guide|form|setting|delegate-record|refund/.test(oid)) {
    return mkCard(short, {}, [
      tx(area.sectionName, { sz: 12, c: C.gray400, weight: "M" }),
      tx(short.replace(/-/g, " "), { sz: 13, c: C.gray600 }),
    ]);
  }

  // List-like
  if (/list|history|method|target/.test(oid)) {
    const wrap = vf(short, { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    wrap.appendChild(mkListItem(area.sectionName, "›"));
    wrap.appendChild(mkListItem("항목 2", "›"));
    return wrap;
  }

  // Banner-like
  if (/banner/.test(oid)) {
    const bn = vf(short, { hug: true, fill: C.infoBg, radius: 8, pt: 12, pr: 16, pb: 12, pl: 16 });
    bn.layoutAlign = "STRETCH";
    bn.appendChild(tx(area.sectionDescription || "안내", { sz: 13, weight: "M", c: C.infoText, maxW: 311 }));
    return bn;
  }

  // Toggle-like
  if (/toggle|switch/.test(oid)) {
    return RENDERS["mol/toggle-item"](sd, area);
  }

  // Placeholder
  const ph = vf(short, { hug: true, fill: C.gray100, radius: 8, pt: 10, pr: 12, pb: 10, pl: 12,
    crossAlign: "CENTER" });
  ph.layoutAlign = "STRETCH";
  ph.appendChild(tx(short.replace(/-/g, " "), { sz: 12, c: C.gray400, align: "CENTER" }));
  return ph;
}

// ═══════════════════════════════════
// Screen builder
// ═══════════════════════════════════
function buildScreen(sd) {
  const areas = sd.areas || [];

  const hasTabBar = areas.some(function(a) {
    return a.organisms.some(function(o) { return o.organismId === "ogn/tab-bar" || o.organismId === "ogn/gnb"; });
  });
  const hasCta = areas.some(function(a) {
    return a.organisms.some(function(o) { return o.organismId === "ogn/sticky-footer-cta"; });
  });
  const ctaArea = areas.find(function(a) {
    return a.organisms.some(function(o) { return o.organismId === "ogn/sticky-footer-cta"; });
  });

  // Body areas = areas that have at least one non-chrome organism
  const bodyAreas = areas.filter(function(a) {
    return a.organisms.some(function(o) { return !isChromeAll(o.organismId); });
  });

  // ── phone frame ──
  const phone = vf(sd.screenId || "screen", {
    hug: true, fill: C.white, radius: 40, w: 375, clip: true
  });
  phone.counterAxisSizingMode = "FIXED";

  // Status bar (always)
  const sbNode = RENDERS["ogn/status-bar"]();
  sbNode.layoutAlign = "STRETCH";
  phone.appendChild(sbNode);

  // Header (always)
  const hdrNode = RENDERS["ogn/header"](sd);
  hdrNode.layoutAlign = "STRETCH";
  phone.appendChild(hdrNode);

  // Body areas
  for (let ai = 0; ai < bodyAreas.length; ai++) {
    const area = bodyAreas[ai];

    // Area label strip
    const strip = hf("area-" + area.no + "-strip", {
      fill: C.gray50, h: 36, pr: 16, pl: 16, gap: 6,
      crossAlign: "CENTER", stroke: C.divider, sw: 1
    });
    strip.primaryAxisSizingMode = "FIXED";
    strip.counterAxisSizingMode = "FIXED";
    strip.resize(375, 36);
    strip.layoutAlign = "STRETCH";

    // Number circle
    const numWrap = vf("no", { fill: C.brand, radius: 10, w: 20, h: 20,
      align: "CENTER", crossAlign: "CENTER" });
    numWrap.primaryAxisSizingMode = "FIXED";
    numWrap.counterAxisSizingMode = "FIXED";
    numWrap.appendChild(tx(String(area.no), { sz: 11, weight: "B", c: C.white, align: "CENTER" }));
    strip.appendChild(numWrap);

    const areaLabel = tx(area.sectionName, { sz: 12, weight: "SB", c: C.gray600 });
    areaLabel.layoutGrow = 1;
    strip.appendChild(areaLabel);

    const badge = tx(area.dynamic ? "D" : "S", { sz: 10, c: area.dynamic ? C.infoText : C.gray300 });
    strip.appendChild(badge);
    phone.appendChild(strip);

    // Area body
    const areaBody = vf("area-" + area.no + "-body", {
      hug: true, fill: C.white, pt: 12, pr: 16, pb: 12, pl: 16, gap: 8
    });
    areaBody.counterAxisSizingMode = "FIXED";
    areaBody.layoutAlign = "STRETCH";

    const contentOrgs = area.organisms.filter(function(o) { return !isChromeAll(o.organismId); });
    for (let oi = 0; oi < contentOrgs.length; oi++) {
      const orgNode = renderComp(contentOrgs[oi], area, sd);
      if (orgNode) {
        orgNode.layoutAlign = "STRETCH";
        areaBody.appendChild(orgNode);
      }
    }

    if (areaBody.children.length > 0) {
      phone.appendChild(areaBody);
    }

    // Divider between areas
    const divNode = rc("divider", 375, 8, C.gray50);
    divNode.layoutAlign = "STRETCH";
    phone.appendChild(divNode);
  }

  // Footer
  if (hasCta && ctaArea) {
    const footerNode = RENDERS["ogn/sticky-footer-cta"](sd, ctaArea);
    footerNode.layoutAlign = "STRETCH";
    phone.appendChild(footerNode);
  } else if (hasTabBar) {
    const tabNode = RENDERS["ogn/tab-bar"]();
    tabNode.layoutAlign = "STRETCH";
    phone.appendChild(tabNode);
  }

  return phone;
}

  // ---------- main ----------
  let targetPage = figma.root.children.find(function(p) { return p.name === "화면"; });
  if (!targetPage) {
    targetPage = figma.createPage();
    targetPage.name = "화면";
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
  figma.notify("✓ 화면 렌더 완료: " + SCREEN_DATA.length + "개");

})();
