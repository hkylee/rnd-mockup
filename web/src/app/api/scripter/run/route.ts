// mockup/scripter/bundle.js 실행 — sync / library / pages / group-{atom,mol,ogn} 화이트리스트.
// 결과: stdout/stderr + 생성된 .generated.js 파일 경로 + 클립보드 복사 여부.

import { spawn } from "node:child_process";
import { mockupRoot } from "@/lib/paths";

export const runtime = "nodejs";
export const maxDuration = 60;

const ALLOWED = [
  "sync",
  "library",
  "pages",
  "group-atom",
  "group-mol",
  "group-ogn",
] as const;
type Cmd = typeof ALLOWED[number];

function buildArgs(cmd: Cmd): string[] {
  // group-* 는 --group <category> 로 변환
  if (cmd.startsWith("group-")) {
    return ["scripter/bundle.js", "--group", cmd.slice("group-".length)];
  }
  return ["scripter/bundle.js", `--${cmd}`];
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { cmd?: string };
    const cmd = body.cmd;
    if (!cmd || !ALLOWED.includes(cmd as Cmd)) {
      return Response.json(
        { error: "cmd 는 sync / library / pages / group-atom / group-mol / group-ogn 중 하나" },
        { status: 400 }
      );
    }

    const cwd = mockupRoot();
    const args = buildArgs(cmd as Cmd);

    const result = await runProcess("node", args, cwd);

    return Response.json({
      cmd,
      cwd,
      args,
      ...result,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}

function runProcess(
  command: string,
  args: string[],
  cwd: string
): Promise<{ stdout: string; stderr: string; exitCode: number; ok: boolean }> {
  return new Promise((res) => {
    const proc = spawn(command, args, { cwd });
    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (chunk) => (stdout += chunk.toString()));
    proc.stderr.on("data", (chunk) => (stderr += chunk.toString()));
    proc.on("close", (code) => {
      res({
        stdout,
        stderr,
        exitCode: code ?? -1,
        ok: code === 0,
      });
    });
    proc.on("error", (e) => {
      res({
        stdout,
        stderr: stderr + "\n" + e.message,
        exitCode: -1,
        ok: false,
      });
    });
  });
}
