#!/usr/bin/env node
// =============================================
// Page card wrap utility (DP § 9.1.3)
// page spec 안 -card 네이밍 ogn ref 마다 padding 24 group wrap 자동 변환.
// 사용:
//   node scripter/wrap-page-cards.js                       # component-specs/page/**/*.json 전체
//   node scripter/wrap-page-cards.js page/BIL/bill-summary # 특정 page 만
// =============================================
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "component-specs", "page");

function makeWrap(child) {
  return {
    kind: "group",
    id: (child.id || "card") + "-wrap",
    layoutAlign: child.layoutAlign || "STRETCH",
    layout: {
      mode: "VERTICAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      paddingTop: "{foundation.dimension.spacing.none}",
      paddingBottom: "{foundation.dimension.spacing.none}",
      paddingLeft: "{foundation.dimension.spacing.2xl}",
      paddingRight: "{foundation.dimension.spacing.2xl}",
      itemSpacing: "{foundation.dimension.spacing.none}",
      width: "FILL",
      height: "HUG"
    },
    visual: { cornerRadius: 0, fill: null, stroke: null, shadow: null },
    children: [Object.assign({}, child, { layoutAlign: "STRETCH" })]
  };
}

function transform(node, stats) {
  if (!node || !node.children) return;
  const newChildren = [];
  for (const c of node.children) {
    // 이미 -wrap 으로 끝나는 group 안 자식이면 skip (재변환 방지)
    const isAlreadyWrapped = node.id && node.id.endsWith("-wrap");
    if (!isAlreadyWrapped && c.kind === "ref" && c.component && /-card$/.test(c.component)) {
      newChildren.push(makeWrap(c));
      stats.wrapped++;
    } else {
      if (c.kind === "group") transform(c, stats);
      newChildren.push(c);
    }
  }
  node.children = newChildren;
}

function* walkPageSpecs(rootDir) {
  for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
    const p = path.join(rootDir, entry.name);
    if (entry.isDirectory()) yield* walkPageSpecs(p);
    else if (entry.name.endsWith(".json")) yield p;
  }
}

function processFile(fp, stats) {
  const spec = JSON.parse(fs.readFileSync(fp, "utf8"));
  if (spec.base) {
    const before = stats.wrapped;
    transform(spec.base, stats);
    if (stats.wrapped > before) {
      fs.writeFileSync(fp, JSON.stringify(spec, null, 2));
      stats.changedFiles++;
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  const stats = { wrapped: 0, changedFiles: 0, totalFiles: 0 };

  if (args.length === 0) {
    for (const fp of walkPageSpecs(ROOT)) {
      stats.totalFiles++;
      processFile(fp, stats);
    }
  } else {
    for (const arg of args) {
      const rel = arg.replace(/^page\//, "") + ".json";
      const fp = path.resolve(ROOT, rel);
      if (!fs.existsSync(fp)) {
        console.error("not found:", fp);
        continue;
      }
      stats.totalFiles++;
      processFile(fp, stats);
    }
  }

  console.log(
    `처리 ${stats.totalFiles} page, 변경 ${stats.changedFiles} files, wrap ${stats.wrapped} card refs`
  );
}

main();
