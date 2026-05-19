// =============================================
// SKT SDUI — 페이지 + 섹션 프레임 자동 생성
// 사용법: Figma 데스크톱 앱 → Plugins → Scripter 열기
//        → 이 코드 전체 복사·붙여넣기 → Run ▶
// =============================================
//
// 생성되는 것:
//   📦 Components 페이지 + 49개 섹션 프레임 (flat, 분류 없음)
//
// 크기 800x600, 세로 간격 100px, 같은 이름의 페이지가 이미
// 있으면 재사용하고 새 프레임을 이어붙입니다.
// =============================================

const SECTION_WIDTH = 800;
const SECTION_HEIGHT = 600;
const GAP = 100;
const START_X = 80;
const START_Y = 80;

const FILL = { r: 0.933, g: 0.929, b: 0.996 };
const LABEL_COLOR = { r: 0.212, g: 0.090, b: 0.808 };

const SECTIONS = [
  "accordion-notice-info",
  "accordion-price-info",
  "accordion-product-info",
  "action-button",
  "app-bar",
  "badge",
  "badge-icon",
  "banner-horizontal-medium",
  "bottom-navigation",
  "bottomsheet",
  "button",
  "button-xsmall-solid",
  "card-contents-item",
  "card-contents-line",
  "card-info",
  "card-section",
  "card-summary",
  "carousel-product-text",
  "checkbox-item",
  "checkbox-text",
  "chip-image-item",
  "chip-item",
  "divider",
  "footer",
  "icon",
  "info-text-list",
  "list-selected",
  "list-text",
  "option-list",
  "option-list-item",
  "pagestack",
  "pay-product-list-item",
  "payment-logo-item",
  "pin",
  "popup-action-button",
  "radio-item",
  "radio-text",
  "search-bar",
  "status-bar",
  "tab-item",
  "text-button",
  "text-field",
  "thumbnail",
  "thumbnail-item",
  "title-bottom-sheet",
  "title-contents",
  "title-main",
  "tooltip",
  "underline-tab",
];

// ⚠️ Scripter 예약어: node, map, page, color, rgb — 변수명으로 사용 금지
async function ensureFigmaPage(pageName) {
  let targetPage = figma.root.children.find((p) => p.name === pageName);
  if (!targetPage) {
    targetPage = figma.createPage();
    targetPage.name = pageName;
    console.log(`+ 페이지 생성: ${pageName}`);
  } else {
    console.log(`= 페이지 재사용: ${pageName}`);
  }
  return targetPage;
}

async function run() {
  if (figma.loadAllPagesAsync) {
    await figma.loadAllPagesAsync();
  }

  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const targetPage = await ensureFigmaPage("Components");
  await figma.setCurrentPageAsync(targetPage);

  let y = START_Y;
  let total = 0;

  for (const sectionName of SECTIONS) {
    const existing = targetPage.children.filter(
      (n) => n.type === "FRAME" && n.name === sectionName
    );
    let fx, fy;
    if (existing.length > 0) {
      let rightmost = existing[0];
      for (const n of existing) {
        if (n.x + n.width > rightmost.x + rightmost.width) rightmost = n;
      }
      fx = rightmost.x + rightmost.width + GAP;
      fy = rightmost.y;
    } else {
      fx = START_X;
      fy = y;
      y += SECTION_HEIGHT + GAP;
    }

    const frame = figma.createFrame();
    frame.name = sectionName;
    frame.x = fx;
    frame.y = fy;
    frame.cornerRadius = 16;
    frame.fills = [{ type: "SOLID", "color": FILL }];
    frame.strokes = [{ type: "SOLID", "color": { r: 0.85, g: 0.85, b: 0.90 } }];
    frame.strokeWeight = 1;

    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    frame.minWidth = SECTION_WIDTH;
    frame.minHeight = SECTION_HEIGHT;
    frame.paddingTop = 24;
    frame.paddingRight = 24;
    frame.paddingBottom = 24;
    frame.paddingLeft = 24;
    frame.itemSpacing = 12;

    const label = figma.createText();
    label.fontName = { family: "Inter", style: "Semi Bold" };
    label.characters = sectionName;
    label.fontSize = 18;
    label.fills = [{ type: "SOLID", "color": LABEL_COLOR }];
    frame.appendChild(label);

    const hint = figma.createText();
    hint.fontName = { family: "Inter", style: "Regular" };
    hint.characters = "여기에 컴포넌트를 배치하세요";
    hint.fontSize = 13;
    hint.fills = [{ type: "SOLID", "color": { r: 0.6, g: 0.6, b: 0.65 } }];
    frame.appendChild(hint);

    targetPage.appendChild(frame);
    total += 1;
  }

  figma.notify(`🎉 ${total}개 섹션 프레임 생성 완료`);
  console.log(`\n=== 완료: 총 ${total}개 (Components 페이지) ===`);
}

run().catch((e) => {
  console.error("에러:", e);
  figma.notify("에러: " + (e && e.message ? e.message : e), { error: true });
});
