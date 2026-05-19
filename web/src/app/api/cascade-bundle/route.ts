import { buildCascadeBundle } from "@/lib/bundle-cascade";

export const runtime = "nodejs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      newSpecs?: Spec[];
      pageSpecs?: Spec[];
    };
    const newSpecs = Array.isArray(body.newSpecs) ? body.newSpecs : [];
    const pageSpecs = Array.isArray(body.pageSpecs) ? body.pageSpecs : [];

    if (newSpecs.length === 0 && pageSpecs.length === 0) {
      return Response.json({ error: "spec 이 비어있음" }, { status: 400 });
    }

    // 페이지가 여러 개면 모두 ALL_SPECS 에 합치는 식으로 처리
    const allNewSpecs = [...newSpecs, ...pageSpecs];
    const bundle = buildCascadeBundle({ newSpecs: allNewSpecs });

    return new Response(bundle, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
