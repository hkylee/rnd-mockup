import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export const runtime = "nodejs";

function runsDir(): string {
  return resolve(process.cwd(), "..", "mockup", "scripter", "runs");
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    if (!name || !name.endsWith(".generated.js")) {
      return Response.json({ error: "name 필수 (.generated.js)" }, { status: 400 });
    }
    // 경로 트래버설 방지
    const target = resolve(runsDir(), name);
    if (!target.startsWith(runsDir() + "/") || !existsSync(target)) {
      return Response.json({ error: "파일 없음 또는 허용되지 않음" }, { status: 404 });
    }
    const content = readFileSync(target, "utf8");
    return Response.json({ content, name });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
