// page 1개의 의존성 컴포넌트 이름 목록 반환.
// /sources?page=page/X/y 필터 적용 시 호출.

import { collectAllSpecs } from "@/lib/collect-specs";
import { getPageDeps } from "@/lib/page-deps";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    if (!name) {
      return Response.json({ error: "name 누락" }, { status: 400 });
    }
    const all = collectAllSpecs();
    const deps = getPageDeps(name, all);
    if (!deps) {
      return Response.json({ error: `page 를 찾을 수 없음: ${name}` }, { status: 404 });
    }
    return Response.json({
      page: deps.page.name,
      atom: deps.atom.map((s) => s.name),
      mol: deps.mol.map((s) => s.name),
      ogn: deps.ogn.map((s) => s.name),
      missing: deps.missing,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
