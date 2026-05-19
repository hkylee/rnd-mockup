import { buildBundle } from "@/lib/bundle";
import { treeToPageSpec, type AnalyzeTree } from "@/lib/tree-to-spec";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { tree?: AnalyzeTree };
    const tree = body.tree;

    if (!tree?.screen?.name) {
      return Response.json({ error: "tree.screen.name 필수" }, { status: 400 });
    }

    const spec = treeToPageSpec(tree);
    const bundleJs = buildBundle(spec);

    const filename = tree.screen.name.replace(/\//g, "-") + ".generated.js";

    return new Response(bundleJs, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
