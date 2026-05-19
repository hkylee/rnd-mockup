import { NextRequest, NextResponse } from "next/server";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import { mockupRoot } from "@/lib/paths";

export const runtime = "nodejs";
export const maxDuration = 60;

const execAsync = promisify(exec);

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
  const runBundle: boolean = body.runBundle !== false; // default true
  if (!spec || !spec.name || !spec.category) {
    return NextResponse.json({ error: "spec.name / spec.category 필수" }, { status: 400 });
  }

  // 1. mockup/component-specs/<name>.json 저장
  const fileName = spec.name + ".json";
  const specPath = resolve(mockupRoot(), "component-specs", fileName);
  try {
    mkdirSync(dirname(specPath), { recursive: true });
    writeFileSync(specPath, JSON.stringify(spec, null, 2) + "\n", "utf8");
  } catch (e) {
    return NextResponse.json(
      { error: "spec 저장 실패: " + (e as Error).message },
      { status: 500 }
    );
  }

  const result: {
    ok: boolean;
    specPath: string;
    auditOutput?: string;
    bundleOutput?: string;
    bundleError?: string;
  } = { ok: true, specPath };

  // 2. audit 실행
  try {
    const { stdout } = await execAsync("node scripter/audit.js", { cwd: mockupRoot() });
    result.auditOutput = stdout.split("\n").slice(-15).join("\n"); // 마지막 15줄만
  } catch (e) {
    const err = e as { stdout?: string };
    result.auditOutput = (err.stdout || "").split("\n").slice(-15).join("\n");
  }

  // 3. bundle.js --changed (옵션)
  if (runBundle) {
    try {
      const { stdout } = await execAsync("node scripter/bundle.js --changed", {
        cwd: mockupRoot(),
        timeout: 50000,
      });
      result.bundleOutput = stdout.split("\n").slice(-10).join("\n");
    } catch (e) {
      result.bundleError = (e as Error).message;
    }
  }

  return NextResponse.json(result);
}
