import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";
import { mockupRoot } from "@/lib/paths";
import { DPView } from "./DPView";

export const dynamic = "force-static";

marked.setOptions({ gfm: true, breaks: false });

export default function DesignPrinciplesPage() {
  const raw = readFileSync(
    resolve(mockupRoot(), "mockup-docs", "DESIGN_PRINCIPLES.md"),
    "utf8"
  );
  const html = marked.parse(raw, { async: false }) as string;

  // ## / ### 헤딩만 추출 → 좌측 TOC
  const tocItems: { level: number; text: string; id: string }[] = [];
  const re = /^(#{2,3})\s+(.+)$/gm;
  let m;
  const slugCounts: Record<string, number> = {};
  while ((m = re.exec(raw)) !== null) {
    const level = m[1].length;
    const text = m[2].trim().replace(/`/g, "");
    const baseSlug = text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .trim()
      .replace(/\s+/g, "-");
    const count = (slugCounts[baseSlug] = (slugCounts[baseSlug] || 0) + 1);
    const id = count > 1 ? `${baseSlug}-${count - 1}` : baseSlug;
    tocItems.push({ level, text, id });
  }

  return <DPView html={html} toc={tocItems} />;
}
