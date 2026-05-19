// 신규 컴포넌트 spec 을 Claude 가 자동 작성.
// 입력: candidate 목록 + 기능 컨텍스트
// 출력: 각 candidate 에 대한 spec JSON (component-spec-v1 schema)

import Anthropic from "@anthropic-ai/sdk";
import { COMPONENT_CATALOG } from "@/lib/catalog";
import { tokenCatalogText, validateSpecTokens } from "@/lib/ds-tokens";
import { normalizeSpec } from "@/lib/spec-normalize";
import { loadDoc, extractSections } from "@/lib/docs-loader";

export const runtime = "nodejs";
export const maxDuration = 90;

// mockup/mockup-docs 의 핵심 가이드를 source of truth 로 주입.
// docs 를 고치면 AI 동작도 자동 갱신.
const CONVENTIONS = loadDoc("CONVENTIONS.md");
const DESIGN_PRINCIPLES = loadDoc("DESIGN_PRINCIPLES.md");
const UX_GOVERNANCE = loadDoc("UX_GOVERNANCE.md");

const CONVENTIONS_EXCERPT = extractSections(CONVENTIONS, [
  "## 1. 네이밍 규칙",
  "## 3. 토큰 참조 문법",
  "## 5. 스펙 JSON 스키마",
  "## 6. layoutAlign 가이드",
]);

const PRINCIPLES_EXCERPT = extractSections(DESIGN_PRINCIPLES, [
  "## 3. Action 위계",
  "## 4. 컴포넌트 분리 기준",
  "## 5. Variants 정책",
  "## 6. 자주 하는 실수 (안티패턴)",
  "## 9. 페이지 구성 패턴",
]);

const SYSTEM_PROMPT = `당신은 SKT 디자인 시스템의 atom/mol/ogn 컴포넌트 spec 을 작성하는 전문가입니다.

사용자가 신규 컴포넌트의 이름과 컨텍스트를 주면, 카탈로그 안에서 가장 가까운 형태를 base 로 추정해 spec JSON 을 작성합니다.

== 기존 컴포넌트 카탈로그 (참조용) ==
${COMPONENT_CATALOG}

== UX Governance (mockup/mockup-docs/UX_GOVERNANCE.md — 화면 의도 source of truth) ==
${UX_GOVERNANCE}

== Conventions (mockup/mockup-docs/CONVENTIONS.md — source of truth) ==
${CONVENTIONS_EXCERPT}

== Design Principles (mockup/mockup-docs/DESIGN_PRINCIPLES.md — 발췌) ==
${PRINCIPLES_EXCERPT}

== 사용 가능한 디자인 토큰 (이 목록 외 토큰은 절대 사용 금지 / type 일치 필수) ==
각 토큰 옆 → 뒤에 type 표시. **필드와 토큰의 type 이 일치해야 함**:
- color 필드 (fill, stroke, background, color, border, divider, text, iconColor) → type=color 토큰만
- shadow 필드 → type=shadow 토큰만
- 치수 필드 (cornerRadius, radius, width, height, padding*, itemSpacing, gap, size, iconSize) → type=dimension 토큰만
- textStyle → type=typography 토큰만
- fontSize/lineHeight/fontWeight/letterSpacing → 같은 이름의 type

${tokenCatalogText()}

== 작업 지침 ==
대부분의 규칙은 위 docs 가 source of truth. 여기는 task 흐름과 강조점만:

1. 각 candidate 에 대해 spec 을 작성. **name 은 사용자가 준 그대로** (suggested 우선). category 는 prefix 로 결정.

   ⭐ **신규 spec 만들기 전 catalog 의미 검색 필수** (재사용율 ↑):
   - candidate 이름이 도메인 종속 (예: list-item-terms, agreement-row, product-card) 이면
     → catalog 의 **모든 mol/ogn description 검색** — 도메인 키워드 (terms→"약관", agreement→"동의", product→"상품") 로 의미 유사 mol 찾기
   - 의미 유사한 중립 mol 이 있으면 (예: mol/checkbox-item description 에 "약관 동의 / 라디오 / 체크 공유") → **신규 spec 만들지 말고 그 중립 mol 에 variant/props 추가** 로 표현
   - 정말 의미가 새로운 경우만 신규 작성 (이름은 가능한 도메인 중립 — item / row / card 류)
   - 보수적이어야 — mol/ogn 신설은 카탈로그 비대 + 다른 도메인 재사용 어려움
2. **스키마는 위 CONVENTIONS § 5 정확히 준수** — 필드 의미·허용값 그 문서가 정답.
3. base 는 카탈로그의 가장 가까운 컴포넌트를 참고해서 layout/visual/children 추정.
4. **토큰 참조는 아래 "사용 가능한 디자인 토큰" 목록의 path 만 + type 일치**. 목록에 없는 path 와 raw 값 모두 절대 금지.
5. 자식 컴포넌트는 \`kind:"ref"\` 로 카탈로그 안 컴포넌트 참조 — **카탈로그에 없는 컴포넌트는 ref 불가**.
6. **layoutAlign 은 CONVENTIONS § 6 가이드 준수** — VERTICAL+FIXED 부모의 자식은 STRETCH.
7. **children content / props 는 도메인 텍스트** (CONVENTIONS § 5 "도메인 텍스트" 참조) — 컴포넌트 base 엔 placeholder, 사용처에서 props 주입.
8. 페이지 spec 작성 시 **DESIGN_PRINCIPLES § 9 페이지 구성 패턴** 따름.
9. 안티패턴은 DESIGN_PRINCIPLES § 6 참조. 확신 없으면 conservative.
10. **page spec 작성 시 UX_GOVERNANCE 단계 체크포인트 적용** — 페이지가 속한 단계 (1 진입 / 2 탐색 / 3 검색 / 4 결정 / 5 실행 / 6 완료 / 7 CS) 의 체크포인트를 충족하도록 children 구성. 분석 보고서에 uxStages 가 명시돼 있으면 그 분류 따름.

== 출력 형식 ==
JSON 으로만 답합니다. 앞뒤 설명 금지.

\`\`\`json
{
  "specs": {
    "ogn/snack-bar": { "$schema": "...", "name": "ogn/snack-bar", "category": "ogn", "base": {...} },
    "mol/example": { ... }
  },
  "notes": "추정 근거 또는 주의사항"
}
\`\`\`
`;

type CandidateInput = {
  name: string;
  category: "atom" | "mol" | "ogn" | "page";
  description?: string;
  baseOn?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      candidates?: CandidateInput[];
      context?: string;
    };
    const candidates = body.candidates || [];
    if (candidates.length === 0) {
      return Response.json({ error: "candidates 비어있음" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "ANTHROPIC_API_KEY 설정 안 됨" }, { status: 500 });
    }

    const client = new Anthropic({ apiKey });

    const userText =
      "다음 신규 컴포넌트 spec 들을 작성해주세요.\n\n" +
      (body.context ? `=== 기능 컨텍스트 ===\n${body.context}\n\n` : "") +
      "=== Candidates ===\n" +
      candidates
        .map(
          (c, i) =>
            `${i + 1}. name: ${c.name} · category: ${c.category}` +
            (c.description ? `\n   description: ${c.description}` : "") +
            (c.baseOn ? `\n   base on: ${c.baseOn}` : "")
        )
        .join("\n");

    const stream = client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 32000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userText }],
    });
    const msg = await stream.finalMessage();

    const rawText = msg.content
      .filter((c) => c.type === "text")
      .map((c) => (c as { text: string }).text)
      .join("\n");

    let result: unknown = null;
    let parseError: string | null = null;
    const m = rawText.match(/```json\s*([\s\S]*?)\s*```/);
    const candidate = m ? m[1] : rawText.trim();
    try {
      result = JSON.parse(candidate);
    } catch (e) {
      parseError = e instanceof Error ? e.message : String(e);
    }

    // 자동 normalize (VERTICAL+FIXED 컨테이너의 child layoutAlign STRETCH 보정 등)
    // + 토큰 validation
    const validation: Record<string, string[]> = {};
    if (
      result &&
      typeof result === "object" &&
      "specs" in result &&
      typeof (result as { specs?: unknown }).specs === "object" &&
      (result as { specs?: unknown }).specs
    ) {
      const specs = (result as { specs: Record<string, unknown> }).specs;
      for (const [name, spec] of Object.entries(specs)) {
        const normalized = normalizeSpec(spec);
        specs[name] = normalized;
        const issues = validateSpecTokens(normalized);
        if (issues.length > 0) {
          validation[name] = issues.map((i) => {
            if (i.kind === "missing") {
              return `${i.field || "?"}: 없는 토큰 {${i.path}}`;
            }
            return `${i.field}: 타입 불일치 — {${i.path}} 는 ${i.actual} 인데 ${i.expected.join("|")} 필요`;
          });
        }
      }
    }

    return Response.json({
      result,
      raw: rawText,
      parseError,
      stopReason: msg.stop_reason,
      usage: msg.usage,
      invalidTokens: Object.keys(validation).length > 0 ? validation : null,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
