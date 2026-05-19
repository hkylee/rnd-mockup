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
        atomCount: deps?.atom.length ?? 0,
        molCount: deps?.mol.length ?? 0,
        ognCount: deps?.ogn.length ?? 0,
        missingCount: deps?.missing.length ?? 0,
        missing: deps?.missing ?? [],
      };
    });

    result.sort((a, b) => a.name.localeCompare(b.name));

    // 카탈로그 전체 카테고리별 spec 수
    const totals = {
      atom: all.filter((s) => s.category === "atom").length,
      mol: all.filter((s) => s.category === "mol").length,
      ogn: all.filter((s) => s.category === "ogn").length,
      page: all.filter((s) => s.category === "page").length,
    };

    return Response.json({ totals, pages: result });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
