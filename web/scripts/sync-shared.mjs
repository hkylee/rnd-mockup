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
const SHARED = resolve(WEB_ROOT, "shared");

// docs/ 는 sync 안 함 — mockup/mockup-docs 를 single source of truth 로 직접 참조 (web/src/lib/docs-loader.ts).
const TARGETS = [
  "skt-design-system.json",
  "scripter",
  "component-specs",
  "figma-icons",
];

if (!existsSync(MOCKUP)) {
  console.error("❌ mockup 폴더 없음:", MOCKUP);
  process.exit(1);
}

for (const t of TARGETS) {
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

console.log("=== sync 완료: mockup/ → web/shared/ ===");
