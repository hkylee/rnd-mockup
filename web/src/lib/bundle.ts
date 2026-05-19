// @Genui/scripter/bundle.js 의 bundleComponent 로직을 포팅.
// DS_TOKENS + SPEC + generator-core.js 를 합쳐서 Scripter 에 붙여넣을 .js 문자열 생성.

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { sharedRoot } from "./paths";

export type ComponentSpec = Record<string, unknown> & { name: string };

export function buildBundle(spec: ComponentSpec): string {
  const root = sharedRoot();
  const dsPath = resolve(root, "skt-design-system.json");
  const corePath = resolve(root, "scripter", "generator-core.js");

  const ds = JSON.parse(readFileSync(dsPath, "utf8"));
  const core = readFileSync(corePath, "utf8");

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — DO NOT EDIT",
    "// source: Genui web (" + spec.name + ")",
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶",
    "// Requires: sync-tokens 가 먼저 실행되어 있어야 Variable 바인딩 작동",
    "// =============================================",
    "",
  ].join("\n");

  return [
    banner,
    "const DS_TOKENS = " + JSON.stringify(ds, null, 2) + ";",
    "",
    "const COMPONENT_SPEC = " + JSON.stringify(spec, null, 2) + ";",
    "",
    core,
    "",
    "// ---------- Entry ----------",
    "generateComponentSet(COMPONENT_SPEC, DS_TOKENS).catch(function (e) {",
    "  console.error('에러:', e);",
    "  figma.notify('에러: ' + (e && e.message ? e.message : e), { error: true });",
    "});",
    "",
  ].join("\n");
}
