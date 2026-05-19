// sync-tokens 만 단일 번들로 생성 (새 Figma 파일 첫 Run 용).

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { sharedRoot } from "./paths";

export function buildSyncBundle(): string {
  const root = sharedRoot();
  const dsPath = resolve(root, "skt-design-system.json");
  const syncPath = resolve(root, "scripter", "sync-tokens.js");

  const ds = JSON.parse(readFileSync(dsPath, "utf8"));
  const sync = readFileSync(syncPath, "utf8");

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — sync-tokens",
    "// DS JSON → Figma Variables (idempotent)",
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶",
    "// =============================================",
    "",
  ].join("\n");

  return [
    banner,
    "const DS_TOKENS = " + JSON.stringify(ds, null, 2) + ";",
    "",
    sync,
    "",
  ].join("\n");
}
