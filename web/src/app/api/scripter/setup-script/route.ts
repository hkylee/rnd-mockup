import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { mockupRoot } from "@/lib/paths";

export const runtime = "nodejs";

const ALLOWED_SCRIPTS: Record<string, string> = {
  "figma-create-sections": "figma-create-sections.js",
};

export function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") ?? "";
  const filename = ALLOWED_SCRIPTS[name];
  if (!filename) {
    return Response.json({ error: "스크립트를 찾을 수 없음" }, { status: 404 });
  }
  try {
    const content = readFileSync(resolve(mockupRoot(), filename), "utf8");
    return Response.json({ name, filename, content });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
