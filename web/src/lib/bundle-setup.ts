// "초기 세팅" 번들 — sync-tokens + 전체 atom/mol/ogn 스펙을 한 번의 Scripter Run 으로 생성.
// 페이지/아이콘은 제외 (페이지는 별도 플로우, 아이콘은 SVG 자산 관리 필요).

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { collectAllSpecs } from "./collect-specs";
import { sharedRoot } from "./paths";

export function buildSetupBundle(): string {
  const root = sharedRoot();
  const dsPath = resolve(root, "skt-design-system.json");
  const corePath = resolve(root, "scripter", "generator-core.js");
  const syncPath = resolve(root, "scripter", "sync-tokens.js");

  const ds = JSON.parse(readFileSync(dsPath, "utf8"));
  const core = readFileSync(corePath, "utf8");
  let sync = readFileSync(syncPath, "utf8");

  // sync-tokens.js 끝부분의 자동 호출 제거 — orchestrator 에서 직접 호출
  sync = sync.replace(
    /syncTokens\(\)\.catch\(function \(e\) \{[\s\S]*?\}\);?\s*$/,
    "// syncTokens() is invoked by the setup orchestrator"
  );

  const specs = collectAllSpecs({ excludePage: true });

  const banner = [
    "// =============================================",
    "// AUTO-GENERATED — Genui 프로젝트 초기 세팅",
    "// - sync-tokens: DS → Figma Variables",
    "// - atom/mol/ogn 전체 생성 (페이지/아이콘 제외)",
    "// generated at: " + new Date().toISOString(),
    "// Paste into Figma Scripter → Run ▶ (1회, 프로젝트 시작 시)",
    "// 경고: 아이콘 (atom/icon/*, atom/logo/T) 은 SVG 자산이 별도로 필요하며",
    "//       현재 번들에 포함되지 않음. 개별 --icon 번들로 별도 Run.",
    "// =============================================",
    "",
  ].join("\n");

  return [
    banner,
    "const DS_TOKENS = " + JSON.stringify(ds, null, 2) + ";",
    "",
    "const ALL_SPECS = " + JSON.stringify(specs.map((s) => s.spec), null, 2) + ";",
    "",
    "// ---------- sync-tokens body ----------",
    sync,
    "",
    "// ---------- generator-core body ----------",
    core,
    "",
    "// ---------- Orchestrator ----------",
    "async function runSetup() {",
    "  console.log('=== Genui 초기 세팅 시작 ===');",
    "  console.log('1. sync-tokens 실행 중...');",
    "  try {",
    "    await syncTokens();",
    "  } catch (e) {",
    "    console.error('sync-tokens 실패:', e);",
    "    figma.notify('sync-tokens 실패 — 중단', { error: true });",
    "    throw e;",
    "  }",
    "",
    "  console.log('2. 컴포넌트 생성 중... (' + ALL_SPECS.length + '개)');",
    "  let succeeded = 0, failed = 0;",
    "  const failedNames = [];",
    "  for (let i = 0; i < ALL_SPECS.length; i++) {",
    "    const spec = ALL_SPECS[i];",
    "    try {",
    "      console.log('  [' + (i + 1) + '/' + ALL_SPECS.length + '] ' + spec.name);",
    "      await generateComponentSet(spec, DS_TOKENS);",
    "      succeeded++;",
    "    } catch (e) {",
    "      failed++;",
    "      failedNames.push(spec.name);",
    "      console.error('    실패:', spec.name, '-', e && e.message ? e.message : e);",
    "    }",
    "  }",
    "",
    "  console.log('=== 세팅 완료 ===');",
    "  console.log('  성공: ' + succeeded);",
    "  console.log('  실패: ' + failed);",
    "  if (failed > 0) console.log('  실패 목록:', failedNames.join(', '));",
    "  figma.notify('✓ 세팅 완료 (' + succeeded + ' ok / ' + failed + ' failed)');",
    "}",
    "",
    "runSetup().catch(function (e) {",
    "  console.error('에러:', e);",
    "  figma.notify('에러: ' + (e && e.message ? e.message : e), { error: true });",
    "});",
    "",
  ].join("\n");
}
