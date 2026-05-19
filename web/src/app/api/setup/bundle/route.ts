import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { buildSyncBundle } from "@/lib/bundle-sync";
import { buildBundle } from "@/lib/bundle";
import { sharedRoot } from "@/lib/paths";

export const runtime = "nodejs";

function root(): string {
  return sharedRoot();
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const kind = url.searchParams.get("kind");

    if (kind === "sync") {
      return respondJs(buildSyncBundle(), "sync-tokens.generated.js");
    }

    if (kind === "static") {
      const file = url.searchParams.get("file");
      if (!file) return Response.json({ error: "file 파라미터 필수" }, { status: 400 });
      // 보안: scripter/runs/ 안의 파일만 허용
      const target = resolve(root(), "scripter", "runs", file);
      const runsDir = resolve(root(), "scripter", "runs");
      if (!target.startsWith(runsDir) || !existsSync(target)) {
        return Response.json({ error: "파일 없음 또는 허용되지 않음" }, { status: 404 });
      }
      const content = readFileSync(target, "utf8");
      return respondJs(content, file);
    }

    if (kind === "spec") {
      const name = url.searchParams.get("name");
      if (!name) return Response.json({ error: "name 파라미터 필수" }, { status: 400 });
      const specPath = resolve(root(), "component-specs", name + ".json");
      if (!specPath.startsWith(resolve(root(), "component-specs")) || !existsSync(specPath)) {
        return Response.json({ error: "spec 없음" }, { status: 404 });
      }
      const spec = JSON.parse(readFileSync(specPath, "utf8"));
      return respondJs(buildBundle(spec), name.replace(/\//g, "-") + ".generated.js");
    }

    return Response.json({ error: "kind 파라미터 필요 (sync | static | spec)" }, { status: 400 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}

function respondJs(body: string, filename: string) {
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
