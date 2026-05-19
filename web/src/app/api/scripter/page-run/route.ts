// page 1개 + level (component / all) → cascade 번들 생성.
// 결과: mockup/scripter/runs/ 에 .generated.js 저장 + macOS pbcopy 클립보드 복사.

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { buildCascadeBundle } from "@/lib/bundle-cascade";
import { collectAllSpecs } from "@/lib/collect-specs";
import { filterDepsByLevel, getPageDeps, type RunLevel } from "@/lib/page-deps";
import { mockupRoot } from "@/lib/paths";

export const runtime = "nodejs";
export const maxDuration = 60;

const LEVELS: RunLevel[] = ["component", "all"];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { pageName?: string; level?: string };
    const pageName = body.pageName;
    const level = body.level as RunLevel | undefined;

    if (!pageName) {
      return Response.json({ error: "pageName 누락" }, { status: 400 });
    }
    if (!level || !LEVELS.includes(level)) {
      return Response.json(
        { error: "level 은 component / all 중 하나" },
        { status: 400 }
      );
    }

    const all = collectAllSpecs();
    const deps = getPageDeps(pageName, all);
    if (!deps) {
      return Response.json({ error: `page 를 찾을 수 없음: ${pageName}` }, { status: 404 });
    }

    const { specs, includePage } = filterDepsByLevel(deps, level);
    if (specs.length === 0 && !includePage) {
      return Response.json(
        { error: `${level} 단계에 빌드할 컴포넌트가 없음` },
        { status: 400 }
      );
    }

    const newSpecs = specs.map((s) => s.spec);
    const pageSpec = includePage ? deps.page.spec : null;

    const bundle = buildCascadeBundle({ newSpecs, pageSpec });

    // mockup/scripter/runs/ 에 저장 (mockup 이 source of truth)
    const runsDir = resolve(mockupRoot(), "scripter", "runs");
    mkdirSync(runsDir, { recursive: true });
    const slug = pageName.replace(/\//g, "-") + "__" + level;
    const outPath = resolve(runsDir, slug + ".generated.js");
    writeFileSync(outPath, bundle, "utf8");

    // macOS pbcopy 로 클립보드 복사 (실패해도 파일은 저장됨)
    let copied = false;
    let copyError: string | null = null;
    try {
      const child = spawnSync("pbcopy", [], { input: bundle });
      if (child.status === 0) copied = true;
      else copyError = `pbcopy exit ${child.status}`;
    } catch (e) {
      copyError = e instanceof Error ? e.message : String(e);
    }

    return Response.json({
      ok: true,
      pageName,
      level,
      includePage,
      counts: {
        component: deps.components.length,
        page: includePage ? 1 : 0,
        total: specs.length + (includePage ? 1 : 0),
      },
      missing: deps.missing,
      outPath,
      bundleSize: bundle.length,
      copied,
      copyError,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
