import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { docsRoot } from "@/lib/paths";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  if (!name || !/^[\w-]+$/.test(name)) {
    return new Response("name 파라미터 필요", { status: 400 });
  }

  const dir = resolve(docsRoot(), "output", "mockup");
  const filePath = resolve(dir, name + ".html");

  if (!filePath.startsWith(dir) || !existsSync(filePath)) {
    return new Response("HTML 없음", { status: 404 });
  }

  const html = readFileSync(filePath, "utf8");
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
