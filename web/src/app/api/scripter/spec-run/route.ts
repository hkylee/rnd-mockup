import { spawn } from "node:child_process";
import { mockupRoot } from "@/lib/paths";

export const runtime = "nodejs";
export const maxDuration = 60;

function isSafeSpecName(name: string): boolean {
  return /^[a-zA-Z0-9/_-]+$/.test(name) && !name.includes("..") && name.length < 120;
}

function runProcess(args: string[], cwd: string): Promise<{ stdout: string; stderr: string; exitCode: number; ok: boolean }> {
  return new Promise((res) => {
    const proc = spawn("node", args, { cwd });
    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (chunk) => (stdout += chunk.toString()));
    proc.stderr.on("data", (chunk) => (stderr += chunk.toString()));
    proc.on("close", (code) => res({ stdout, stderr, exitCode: code ?? -1, ok: code === 0 }));
    proc.on("error", (e) => res({ stdout, stderr: stderr + "\n" + e.message, exitCode: -1, ok: false }));
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { specName?: string };
    const specName = body.specName?.trim();

    if (!specName || !isSafeSpecName(specName)) {
      return Response.json({ error: "specName 이 올바르지 않음" }, { status: 400 });
    }

    const result = await runProcess(["scripter/bundle.js", specName], mockupRoot());
    return Response.json({ ...result, specName });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
