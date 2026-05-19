// mockup/mockup-docs 의 가이드 문서를 직접 읽어서 AI 프롬프트에 주입.
// **mockup 원본 직접 참조** — sync 안 함. mockup/mockup-docs/* 한 곳이 source of truth.
// 이 모듈만 mockup 직접 접근. 다른 fs 접근은 shared/ 경유.

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { mockupRoot } from "./paths";

const cache = new Map<string, string>();

export function loadDoc(name: string): string {
  if (cache.has(name)) return cache.get(name)!;
  const p = resolve(mockupRoot(), "mockup-docs", name);
  if (!existsSync(p)) {
    cache.set(name, "");
    return "";
  }
  const content = readFileSync(p, "utf8");
  cache.set(name, content);
  return content;
}

// 특정 markdown 섹션 추출. heading 은 "## 5. 스펙 JSON 스키마" 같은 형태.
// 같은 또는 더 높은 level 의 다음 헤딩 직전까지 반환.
export function extractSection(content: string, heading: string): string {
  const lines = content.split("\n");
  const startIdx = lines.findIndex((l) => l.trim() === heading);
  if (startIdx === -1) return "";

  const startLevel = heading.match(/^#+/)?.[0].length || 2;
  const endIdx = lines.findIndex((l, i) => {
    if (i <= startIdx) return false;
    const m = l.match(/^(#+)\s/);
    if (!m) return false;
    return m[1].length <= startLevel;
  });

  const sliceEnd = endIdx === -1 ? lines.length : endIdx;
  return lines.slice(startIdx, sliceEnd).join("\n").trim();
}

// 여러 섹션 한 번에 추출
export function extractSections(content: string, headings: string[]): string {
  return headings
    .map((h) => extractSection(content, h))
    .filter(Boolean)
    .join("\n\n---\n\n");
}
