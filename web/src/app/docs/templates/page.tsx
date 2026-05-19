import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";
import { mockupRoot, productionFlowRoot, sbRoot, governanceRoot } from "@/lib/paths";
import { TemplateView } from "./TemplateView";

export const dynamic = "force-static";

export type Template = {
  slug: string;
  name: string;
  category: string;
  source: string;
  order: number;
  format: "md" | "html";
  html: string;
};

// 분석 흐름 순서 — UX 의도 → 정책 → 입력 → 동선 → 분석 보고 → Screen Spec → SB
const MANIFEST: Array<{
  slug: string;
  name: string;
  category: string;
  source: "mockup-docs" | "production-flow" | "sb" | "governance";
  file: string;
  format: "md" | "html";
}> = [
  // 1. UX 의도
  { slug: "governance-INDEX", name: "UX Governance 인덱스 (단계 분류·첫 단추)", category: "1. UX 의도", source: "governance", file: "INDEX.md", format: "md" },
  { slug: "UX_GOVERNANCE", name: "⚠️ UX Governance (폐기 — governance/INDEX 로 이전)", category: "1. UX 의도", source: "mockup-docs", file: "UX_GOVERNANCE.md", format: "md" },
  // 2. 분석 보고 / 입력 양식
  { slug: "POLICY_REPORT_TEMPLATE", name: "정책서 분석 보고", category: "2. 분석 보고 · 입력", source: "mockup-docs", file: "POLICY_REPORT_TEMPLATE.md", format: "md" },
  { slug: "SPEC_INPUT_TEMPLATE", name: "기능내역서 입력 양식", category: "2. 분석 보고 · 입력", source: "mockup-docs", file: "SPEC_INPUT_TEMPLATE.md", format: "md" },
  { slug: "USER_FLOW_TEMPLATE", name: "사용자 동선 (USER_FLOW)", category: "2. 분석 보고 · 입력", source: "mockup-docs", file: "USER_FLOW_TEMPLATE.md", format: "md" },
  { slug: "SPEC_REPORT_TEMPLATE", name: "기능내역서 분석 보고", category: "2. 분석 보고 · 입력", source: "mockup-docs", file: "SPEC_REPORT_TEMPLATE.md", format: "md" },
  // 3. ~~Screen Spec~~ — 2026-05-01 archive (mockup/_archive/production-flow-v1/). SPEC_REPORT_TEMPLATE.md 에 흡수.
  // 4. 스토리보드 (SB)
  { slug: "sb-template-schema", name: "SB 템플릿 스키마", category: "4. 스토리보드 (SB)", source: "sb", file: "sb-template-schema.md", format: "md" },
  { slug: "create-sb-workflow", name: "SB 생성 워크플로", category: "4. 스토리보드 (SB)", source: "sb", file: "create-sb-workflow.md", format: "md" },
  { slug: "sb-writing-rules", name: "SB 작성 규칙", category: "4. 스토리보드 (SB)", source: "sb", file: "sb-writing-rules.md", format: "md" },
  { slug: "description-format", name: "SB 설명 양식", category: "4. 스토리보드 (SB)", source: "sb", file: "description-format.md", format: "md" },
  { slug: "annotation-rules", name: "SB 주석 규칙", category: "4. 스토리보드 (SB)", source: "sb", file: "annotation-rules.md", format: "md" },
  { slug: "policy-to-sb-mapping", name: "정책 ↔ SB 매핑", category: "4. 스토리보드 (SB)", source: "sb", file: "policy-to-sb-mapping.md", format: "md" },
  { slug: "module-id-list", name: "모듈 ID 목록", category: "4. 스토리보드 (SB)", source: "sb", file: "module-id-list.md", format: "md" },
  { slug: "SDUI-schema", name: "SDUI 스키마", category: "4. 스토리보드 (SB)", source: "sb", file: "SDUI-schema.html", format: "html" },
];

marked.setOptions({ gfm: true, breaks: false });

function rootFor(source: "mockup-docs" | "production-flow" | "sb" | "governance"): string {
  if (source === "mockup-docs") return resolve(mockupRoot(), "mockup-docs");
  if (source === "production-flow") return productionFlowRoot();
  if (source === "governance") return governanceRoot();
  return sbRoot();
}

function loadTemplates(): Template[] {
  return MANIFEST.map((entry, idx) => {
    const root = rootFor(entry.source);
    const path = resolve(root, entry.file);
    let html = "";
    if (existsSync(path)) {
      const raw = readFileSync(path, "utf8");
      html = entry.format === "md" ? (marked.parse(raw, { async: false }) as string) : raw;
    } else {
      html = `<div class="missing">파일을 찾을 수 없습니다: <code>${entry.source}/${entry.file}</code></div>`;
    }
    return {
      slug: entry.slug,
      name: entry.name,
      category: entry.category,
      source: entry.source,
      order: idx,
      format: entry.format,
      html,
    };
  });
}

export default function TemplatesPage() {
  const templates = loadTemplates();
  return (
    <div className="flex h-full">
      <TemplateView templates={templates} />
    </div>
  );
}
