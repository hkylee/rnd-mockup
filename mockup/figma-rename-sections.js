// =============================================
// SKT SDUI — 기존 섹션 프레임 이름 일괄 rename
// 사용법: Figma 데스크톱 앱 → Plugins → Scripter
//        → 이 코드 전체 복사·붙여넣기 → Run ▶
// =============================================
//
// 네이밍 규칙 확정:
//   - prefix 통일: mlc → mol
//   - component-modifier 순서 통일 (card-X, item-X)
//   - atom 줄임말 적용 (btn, txt, icon-ctr, thumb, progress, textarea)
// =============================================

const RENAME_MAP = {
  // ===== Atom =====
  "atom/text":            "atom/txt",
  "atom/button":          "atom/btn",
  "atom/icon-container":  "atom/icon-ctr",
  "atom/thumbnail":       "atom/thumb",
  "atom/progress-bar":    "atom/progress",
  "atom/text-area":       "atom/textarea",
  // (atom/icon, atom/badge, atom/chip, atom/divider, atom/barcode,
  //  atom/banner, atom/link, atom/skeleton 는 변경 없음)

  // ===== Molecule — prefix 통일 (mlc → mol) =====
  "mlc/list-item":        "mol/list-item",
  "mlc/data-row":         "mol/data-row",
  "mlc/price-row":        "mol/price-row",
  "mlc/action-row":       "mol/action-row",
  "mlc/coupon-item":      "mol/coupon-item",
  "mlc/product-card":     "mol/card-product",   // 순서도 뒤집음
  "mlc/insight-row":      "mol/insight-row",
  "mlc/card-header":      "mol/card-header",

  // ===== Organism — card-X 순서 통일 =====
  "ogn/personal-card":    "ogn/card-personal",
  "ogn/membership-card":  "ogn/card-membership",
  "ogn/benefit-card":     "ogn/card-benefit",
  "ogn/coupon-card":      "ogn/card-coupon",
  "ogn/plan-card":        "ogn/card-plan",
  // (ogn/header, ogn/GNB 는 변경 없음)
};

async function run() {
  if (figma.loadAllPagesAsync) {
    await figma.loadAllPagesAsync();
  }

  let renamedCount = 0;
  let skippedCount = 0;
  const perPage = {};

  for (const page of figma.root.children) {
    await figma.setCurrentPageAsync(page);
    for (const node of page.children) {
      if (node.type !== "FRAME") continue;
      const newName = RENAME_MAP[node.name];
      if (!newName) continue;
      console.log(`  ${page.name} — ${node.name}  →  ${newName}`);
      node.name = newName;
      renamedCount += 1;
      perPage[page.name] = (perPage[page.name] || 0) + 1;
    }
  }

  // 안 바뀌는 이름(=이미 올바른 이름)의 프레임 수 집계 (참고용)
  const allValidNewNames = new Set(Object.values(RENAME_MAP));
  const alreadyCorrect = new Set([
    "atom/icon", "atom/badge", "atom/chip", "atom/divider",
    "atom/barcode", "atom/banner", "atom/link", "atom/skeleton",
    "ogn/header", "ogn/GNB",
  ]);

  for (const page of figma.root.children) {
    for (const node of page.children) {
      if (node.type !== "FRAME") continue;
      if (allValidNewNames.has(node.name) || alreadyCorrect.has(node.name)) {
        skippedCount += 1;
      }
    }
  }

  console.log(`\n=== Rename 완료 ===`);
  for (const [pageName, count] of Object.entries(perPage)) {
    console.log(`  ${pageName}: ${count}개 변경`);
  }
  console.log(`총 ${renamedCount}개 rename, ${skippedCount}개 이미 올바름`);

  figma.notify(`✓ ${renamedCount}개 프레임 rename 완료`);
}

run().catch((e) => {
  console.error("에러:", e);
  figma.notify("에러: " + (e && e.message ? e.message : e), { error: true });
});
