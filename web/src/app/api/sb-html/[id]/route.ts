import { NextResponse } from "next/server";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { sharedRoot } from "@/lib/paths";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // id 형식: "MBR-LEAVE-IMPACT" → shared/scripter/sb-html/<id>.html
  // 보안: id 에 path traversal 차단 (영문/숫자/dash 만)
  if (!/^[A-Za-z0-9-]+$/.test(id)) {
    return new NextResponse("Invalid id", { status: 400 });
  }
  const filePath = resolve(sharedRoot(), "scripter/sb-html", `${id}.html`);
  if (!existsSync(filePath)) {
    return new NextResponse(`<!DOCTYPE html><body style="font-family:sans-serif;padding:24px;color:#64748b">SB HTML 없음: <code>${id}</code></body>`, {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
  const html = readFileSync(filePath, "utf8");
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
