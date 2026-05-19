import { NextRequest, NextResponse } from "next/server";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";

export const runtime = "nodejs";

// web/projects/figma-wash/<spec.name>.json 임시 저장.
// promote 전 검수용. 같은 name 재저장 시 덮어쓰기.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON 파싱 실패" }, { status: 400 });
  }
  const spec: Spec = body.spec;
  if (!spec || !spec.name || !spec.category) {
    return NextResponse.json({ error: "spec.name / spec.category 필수" }, { status: 400 });
  }
  const fileName = spec.name + ".json";
  const path = resolve(process.cwd(), "projects", "figma-wash", fileName);
  try {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, JSON.stringify(spec, null, 2) + "\n", "utf8");
    return NextResponse.json({ ok: true, path });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 500 }
    );
  }
}
