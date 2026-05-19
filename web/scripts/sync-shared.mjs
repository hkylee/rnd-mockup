#!/usr/bin/env node
// mockup/ 의 변경사항을 web/shared/ 로 동기화.
// web/scripts 에서 실행되므로 cwd 는 web/.

import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const WRAPPER_ROOT = resolve(WEB_ROOT, "..");
const MOCKUP = resolve(WRAPPER_ROOT, "mockup");
const DOCS = resolve(WRAPPER_ROOT, "docs");
const SHARED = resolve(WEB_ROOT, "shared");

// mockup/ 에서 동기화하는 항목
const MOCKUP_TARGETS = [
  "skt-design-system.json",
  "scripter",
  "figma-icons",
];

if (!existsSync(MOCKUP)) {
  console.error("❌ mockup 폴더 없음:", MOCKUP);
  process.exit(1);
}

for (const t of MOCKUP_TARGETS) {
  const src = resolve(MOCKUP, t);
  const dest = resolve(SHARED, t);
  if (!existsSync(src)) {
    console.warn("⚠ mockup 에 없음 (skip):", t);
    continue;
  }
  if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
  cpSync(src, dest, { recursive: true });
  console.log("✓ synced:", t);
}

// docs/input/components/json/*.json → shared/component-specs/*.json (flat)
// TSX는 docsRoot()에서 직접 읽으므로 sync 불필요
import { readdirSync, copyFileSync, mkdirSync } from "node:fs";

const docsJsonDir = resolve(DOCS, "input", "components", "json");
const sharedSpecs = resolve(SHARED, "component-specs");
if (existsSync(docsJsonDir)) {
  mkdirSync(sharedSpecs, { recursive: true });
  // 기존 JSON 파일만 제거 (하위 폴더는 유지)
  if (existsSync(sharedSpecs)) {
    for (const f of readdirSync(sharedSpecs)) {
      if (f.endsWith(".json")) {
        rmSync(resolve(sharedSpecs, f), { force: true });
      }
    }
  }
  let count = 0;
  for (const f of readdirSync(docsJsonDir)) {
    if (f.endsWith(".json")) {
      copyFileSync(resolve(docsJsonDir, f), resolve(sharedSpecs, f));
      count++;
    }
  }
  console.log(`✓ synced: docs/input/components/json/ → shared/component-specs/ (${count}개)`);
} else {
  console.warn("⚠ docs/input/components/json 없음 (skip)");
}

console.log("=== sync 완료 ===");
