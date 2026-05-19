// =============================================
// AUTO-GENERATED — DO NOT EDIT
// source HTML: scripter/sb-html/BIL-PROXY-PAY-CONFIRM.html
// renderer:    scripter/render-sb.js
// generated at: 2026-05-06T07:54:33.355Z
// Paste into Figma Scripter → Run ▶ (SB 페이지에 frame 생성)
// =============================================

const SB_TREE = {
  "title": "BIL-PROXY-PAY-CONFIRM — 대리납부 실행 SB",
  "blocks": [
    {
      "kind": "h1",
      "spans": [
        {
          "kind": "plain",
          "text": "BIL-PROXY-PAY-CONFIRM — 대리납부 실행"
        }
      ]
    },
    {
      "kind": "meta-line",
      "spans": [
        {
          "kind": "plain",
          "text": " 📄 SDUI 화면설계서 (Screen-SB) · 입력: "
        },
        {
          "kind": "code",
          "text": "specs-input/BIL-pay-proxy.md"
        }
      ]
    },
    {
      "kind": "note",
      "spans": [
        {
          "kind": "strong",
          "text": "자동 생성 흐름"
        },
        {
          "kind": "plain",
          "text": " SPEC_INPUT.md → generate-sb.js (SB JSON) → generate-sb-html.js (NOVA HTML). 설계 원칙·역방향 매핑·서버제어 등 일부 섹션은 사용자 후처리 또는 정책서 직접 인용. "
        }
      ]
    },
    {
      "kind": "h2",
      "spans": [
        {
          "kind": "plain",
          "text": "속성"
        }
      ]
    },
    {
      "kind": "table",
      "rows": [
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "화면 ID"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "code",
                "text": "BIL-PROXY-PAY-CONFIRM"
              }
            ]
          }
        ],
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "모듈 ID"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "code",
                "text": "BIL"
              }
            ]
          }
        ],
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "화면 명"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "plain",
                "text": "대리납부 실행"
              }
            ]
          }
        ],
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "화면 경로"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "code",
                "text": "page/BIL/proxy-pay-confirm"
              }
            ]
          }
        ],
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "관련 정책서"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "plain",
                "text": "page/BIL/proxy-pay-confirm"
              }
            ]
          }
        ],
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "배포일"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "plain",
                "text": "2026.05.06"
              }
            ]
          }
        ],
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "배포자"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "plain",
                "text": "(generate-sb.js)"
              }
            ]
          }
        ],
        [
          {
            "isHeader": true,
            "spans": [
              {
                "kind": "plain",
                "text": "현재 버전"
              }
            ]
          },
          {
            "isHeader": false,
            "spans": [
              {
                "kind": "plain",
                "text": "v1.0"
              }
            ]
          }
        ]
      ]
    },
    {
      "kind": "h2",
      "spans": [
        {
          "kind": "plain",
          "text": "화면 구성"
        }
      ]
    },
    {
      "kind": "note",
      "spans": [
        {
          "kind": "strong",
          "text": "다음 단계 (사용자 보강)"
        },
        {
          "kind": "plain",
          "text": " ① 설계 원칙 (정책서 § 인용) ② 케이스 매트릭스 ③ 역방향 매핑 ④ Section / Organism 단위 SB 분해. "
        }
      ]
    }
  ]
};

// =============================================
// SKT Genui — NOVA SB Renderer (Scripter)
// SB_TREE 변수 (parse-sb-html.js 산출물) → figma frame
//
// Figma "SB" 페이지에 NOVA HTML 양식 그대로 frame 생성.
// 색은 NOVA _shared.css 의 raw 값 직접 사용 (시각화 도구 — Variable 바인딩 안 함).
// =============================================

(async function renderSb() {
  // ---------- 색 / 폰트 상수 ----------
  const C = {
    brand:        { r: 0.212, g: 0.090, b: 0.808 },  // #3617CE
    brandSoft:    { r: 0.961, g: 0.949, b: 1.000 },  // #F5F2FF
    brandLight:   { r: 0.933, g: 0.918, b: 0.996 },  // #EEEAFE
    warn:         { r: 0.941, g: 0.549, b: 0.000 },  // #F08C00
    warnLight:    { r: 1.000, g: 0.957, b: 0.859 },  // #FFF4DB
    danger:       { r: 0.788, g: 0.165, b: 0.165 },  // #C92A2A
    dangerLight:  { r: 1.000, g: 0.961, b: 0.961 },  // #FFF5F5
    ok:           { r: 0.184, g: 0.620, b: 0.267 },  // #2F9E44
    okLight:      { r: 0.922, g: 0.984, b: 0.929 },  // #EBFBEE
    auto:         { r: 0.098, g: 0.443, b: 0.761 },  // #1971C2
    gray50:       { r: 0.973, g: 0.976, b: 0.980 },  // #F8F9FA
    gray100:      { r: 0.945, g: 0.953, b: 0.961 },  // #F1F3F5
    gray200:      { r: 0.914, g: 0.925, b: 0.937 },  // #E9ECEF
    gray500:      { r: 0.678, g: 0.710, b: 0.741 },  // #ADB5BD
    text:         { r: 0.129, g: 0.145, b: 0.161 },  // #212529
    textSecond:   { r: 0.286, g: 0.314, b: 0.345 },  // #495057
    textMuted:    { r: 0.525, g: 0.557, b: 0.588 },  // #868E96
    white:        { r: 1, g: 1, b: 1 }
  };

  const FONT_REG    = { family: "Pretendard", style: "Regular" };
  const FONT_MED    = { family: "Pretendard", style: "Medium" };
  const FONT_SEMI   = { family: "Pretendard", style: "SemiBold" };
  const FONT_BOLD   = { family: "Pretendard", style: "Bold" };
  const FONT_MONO   = { family: "Menlo", style: "Regular" };
  const FONT_FALLBACK = { family: "Inter", style: "Regular" };

  // 폰트 미리 로드 — fallback 처리
  const fontsToLoad = [FONT_REG, FONT_MED, FONT_SEMI, FONT_BOLD, FONT_MONO];
  const loadedFonts = [];
  for (const f of fontsToLoad) {
    try { await figma.loadFontAsync(f); loadedFonts.push(f); }
    catch (e) {
      try { await figma.loadFontAsync(FONT_FALLBACK); loadedFonts.push(FONT_FALLBACK); }
      catch (e2) {}
    }
  }
  const useFont = function (target) {
    return loadedFonts.find(f => f.family === target.family && f.style === target.style)
        || loadedFonts.find(f => f.family === target.family)
        || FONT_FALLBACK;
  };

  // ---------- helpers ----------
  function fill(color) { return [{ type: "SOLID", color: color }]; }

  function text(content, options) {
    const t = figma.createText();
    options = options || {};
    const font = useFont(options.font || FONT_REG);
    t.fontName = font;
    t.characters = content || "";
    t.fontSize = options.size || 13;
    if (options.color) t.fills = fill(options.color);
    if (options.lineHeight) t.lineHeight = { value: options.lineHeight, unit: "PERCENT" };
    if (options.letterSpacing != null) t.letterSpacing = { value: options.letterSpacing, unit: "PIXELS" };
    return t;
  }

  // span 배열 → text node 1개 (각 span 별로 character range 스타일 적용)
  function spansToText(spans, baseOptions) {
    baseOptions = baseOptions || {};
    const baseFont = useFont(baseOptions.font || FONT_REG);
    const t = figma.createText();
    t.fontName = baseFont;
    t.fontSize = baseOptions.size || 13;
    if (baseOptions.color) t.fills = fill(baseOptions.color);

    let full = "";
    const ranges = [];
    for (const span of spans) {
      const start = full.length;
      full += span.text;
      const end = full.length;
      ranges.push({ start: start, end: end, span: span });
    }
    t.characters = full;

    for (const r of ranges) {
      if (r.end <= r.start) continue;
      const span = r.span;
      if (span.kind === "code" || span.kind === "pid") {
        const monoFont = useFont(FONT_MONO);
        t.setRangeFontName(r.start, r.end, monoFont);
        t.setRangeFontSize(r.start, r.end, 11.5);
        if (span.kind === "pid") {
          t.setRangeFills(r.start, r.end, fill(C.brand));
        } else {
          t.setRangeFills(r.start, r.end, fill(C.textSecond));
        }
      } else if (span.kind === "tag") {
        const semiFont = useFont(FONT_SEMI);
        t.setRangeFontName(r.start, r.end, semiFont);
        const colorMap = { ok: C.ok, warn: C.warn, danger: C.danger };
        t.setRangeFills(r.start, r.end, fill(colorMap[span.variant] || C.text));
      } else if (span.kind === "strong") {
        t.setRangeFontName(r.start, r.end, useFont(FONT_BOLD));
      }
    }
    return t;
  }

  function vframe(name, options) {
    options = options || {};
    const f = figma.createFrame();
    f.name = name || "frame";
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = options.fillWidth ? "FIXED" : "AUTO";
    f.itemSpacing = options.gap == null ? 0 : options.gap;
    f.paddingTop = options.pt || 0;
    f.paddingRight = options.pr || 0;
    f.paddingBottom = options.pb || 0;
    f.paddingLeft = options.pl || 0;
    if (options.fill) f.fills = fill(options.fill);
    else f.fills = [];
    if (options.cornerRadius) f.cornerRadius = options.cornerRadius;
    if (options.stroke) {
      f.strokes = fill(options.stroke);
      f.strokeWeight = options.strokeWeight || 1;
    }
    return f;
  }

  function hframe(name, options) {
    const f = vframe(name, options);
    f.layoutMode = "HORIZONTAL";
    return f;
  }

  // ---------- block renderers ----------
  function renderH1(block) {
    return spansToText(block.spans, { font: FONT_BOLD, size: 24, color: C.text });
  }
  function renderH2(block) {
    const wrap = vframe("h2-block", { gap: 6, pb: 6 });
    wrap.layoutAlign = "STRETCH";
    const t = spansToText(block.spans, { font: FONT_BOLD, size: 17, color: C.brand });
    wrap.appendChild(t);
    // bottom border 시뮬레이션 — 얇은 frame
    const border = figma.createFrame();
    border.name = "h2-border";
    border.resize(800, 2);
    border.fills = fill(C.brand);
    border.layoutAlign = "STRETCH";
    wrap.appendChild(border);
    return wrap;
  }
  function renderH3(block) {
    return spansToText(block.spans, { font: FONT_SEMI, size: 14, color: C.text });
  }
  function renderEyebrow(block) {
    return spansToText(block.spans, { font: FONT_SEMI, size: 12, color: C.brand });
  }
  function renderMetaLine(block) {
    return spansToText(block.spans, { font: FONT_REG, size: 13, color: C.textMuted });
  }
  function renderNote(block) {
    const f = hframe("note", {
      pt: 10, pr: 14, pb: 10, pl: 14,
      fill: C.brandSoft,
      cornerRadius: 6,
      gap: 0
    });
    f.layoutAlign = "STRETCH";
    // 좌측 brand border — width 4
    const stripe = figma.createFrame();
    stripe.name = "note-stripe";
    stripe.resize(4, 1);
    stripe.fills = fill(C.brand);
    stripe.layoutAlign = "STRETCH";
    f.appendChild(stripe);
    f.itemSpacing = 10;
    const body = spansToText(block.spans, { font: FONT_REG, size: 12.5, color: C.textSecond });
    body.layoutGrow = 1;
    f.appendChild(body);
    return f;
  }

  function renderTable(block) {
    const tbl = vframe("table", {
      cornerRadius: 6,
      stroke: C.gray200,
      strokeWeight: 1,
      fill: C.white,
      gap: 0
    });
    tbl.layoutAlign = "STRETCH";
    tbl.clipsContent = true;
    block.rows.forEach((cells, idx) => {
      const row = hframe("row", { gap: 0 });
      row.layoutAlign = "STRETCH";
      row.primaryAxisSizingMode = "FIXED";
      cells.forEach((cell) => {
        const cellFrame = vframe(cell.isHeader ? "th" : "td", {
          pt: 6, pr: 10, pb: 6, pl: 10,
          fill: cell.isHeader ? C.gray50 : C.white,
          gap: 0
        });
        cellFrame.layoutGrow = 1;
        cellFrame.counterAxisSizingMode = "AUTO";
        const cellText = spansToText(cell.spans, {
          font: cell.isHeader ? FONT_SEMI : FONT_REG,
          size: cell.isHeader ? 11 : 12.5,
          color: cell.isHeader ? C.textMuted : C.text
        });
        cellText.layoutAlign = "STRETCH";
        cellFrame.appendChild(cellText);
        row.appendChild(cellFrame);
      });
      // 행 사이 border — bottom 1px (마지막 행 제외)
      if (idx < block.rows.length - 1) {
        row.strokes = fill(C.gray200);
        row.strokeWeight = 0;
        row.strokeBottomWeight = 1;
        row.strokeAlign = "INSIDE";
      }
      tbl.appendChild(row);
    });
    return tbl;
  }

  // ---------- main ----------
  let targetPage = figma.root.children.find((p) => p.name === "SB");
  if (!targetPage) {
    targetPage = figma.createPage();
    targetPage.name = "SB";
  }
  await figma.setCurrentPageAsync(targetPage);

  const root = vframe(SB_TREE.title || "NOVA SB", {
    pt: 32, pr: 24, pb: 32, pl: 24,
    gap: 20,
    fill: C.gray50
  });
  root.resize(1180, 100);  // baseline width — auto-grow vertically

  for (const block of SB_TREE.blocks) {
    let node;
    if (block.kind === "h1") node = renderH1(block);
    else if (block.kind === "h2") node = renderH2(block);
    else if (block.kind === "h3") node = renderH3(block);
    else if (block.kind === "eyebrow") node = renderEyebrow(block);
    else if (block.kind === "meta-line") node = renderMetaLine(block);
    else if (block.kind === "note") node = renderNote(block);
    else if (block.kind === "table") node = renderTable(block);
    if (node) {
      if (node.layoutAlign !== "STRETCH" && root.layoutMode === "VERTICAL") {
        node.layoutAlign = "STRETCH";
      }
      root.appendChild(node);
    }
  }

  targetPage.appendChild(root);
  figma.viewport.scrollAndZoomIntoView([root]);
  figma.notify("✓ SB 렌더 완료: " + (SB_TREE.title || "NOVA SB"));
})();
