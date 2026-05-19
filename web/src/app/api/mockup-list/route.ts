import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { docsRoot } from "@/lib/paths";

export const runtime = "nodejs";

export async function GET() {
  const dir = resolve(docsRoot(), "output", "mockup");
  if (!existsSync(dir)) return Response.json({ screens: [] });

  const files = readdirSync(dir)
    .filter(f => f.endsWith(".html"))
    .sort()
    .map(f => f.replace(/\.html$/, ""));

  return Response.json({ screens: files });
}
