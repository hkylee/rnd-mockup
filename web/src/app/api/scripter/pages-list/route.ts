// page spec 목록 + 각 page 의 의존성 카운트 + 카탈로그 전체 카테고리별 totals 반환.
// /scripter/library 페이지가 호출.

import { collectAllSpecs } from "@/lib/collect-specs";
import { getPageDeps } from "@/lib/page-deps";

export const runtime = "nodejs";

export async function GET() {
  try {
    const all = collectAllSpecs();
    const pages = all.filter((s) => s.category === "page");

    const result = pages.map((p) => {
      const deps = getPageDeps(p.name, all);
      return {
        name: p.name,
        componentCount: deps?.components.length ?? 0,
        missingCount: deps?.missing.length ?? 0,
        missing: deps?.missing ?? [],
      };
    });

    result.sort((a, b) => a.name.localeCompare(b.name));

    // 카탈로그 전체 카테고리별 spec 수
    const totals = {
      component: all.filter((s) => s.category === "component").length,
      page: all.filter((s) => s.category === "page").length,
    };

    return Response.json({ totals, pages: result });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
