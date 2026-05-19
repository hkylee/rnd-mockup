import Anthropic from "@anthropic-ai/sdk";
import { COMPONENT_CATALOG } from "@/lib/catalog";

export const runtime = "nodejs";
export const maxDuration = 60;

const SYSTEM_PROMPT = `당신은 UI 디자인 이미지를 분석해서 Atomic Design (atom/molecule/organism/page) 계층으로 분류하는 전문가입니다.

사용자가 업로드한 디자인 이미지를 보고, (1) 이미 빌드된 컴포넌트 카탈로그를 최대한 재활용해서 (2) 각 요소의 이미지 좌표(bbox) 와 함께 계층 트리를 반환합니다.

== 기존 컴포넌트 카탈로그 ==
${COMPONENT_CATALOG}

== 작업 지침 ==
1. 이미지 안의 구성 요소를 식별하고 **각 노드의 bbox** (원본 이미지 기준 픽셀 좌표) 를 추정합니다.
   - bbox 는 { x, y, w, h } 형식. x/y 는 좌상단 좌표.
   - 픽셀 정확성보다 대략적 영역이 중요 (사용자가 이후 수동 조정함).
2. 각 요소를 카탈로그의 atom/mol/ogn 으로 매핑합니다:
   - 카탈로그에 있고 구조/의미 일치 → match.status = "reused", match.ref = 카탈로그 이름
   - 카탈로그에 없음, 신규 필요 → match.status = "new"
   - 이름은 비슷한데 구조 다름 → match.status = "conflict"
3. 전체 화면을 \`page/{MODULE-CODE}/{screen-name}\` 으로 조립합니다.
   - MODULE-CODE 는 기능 영역. 후보: MYBEN(MY 혜택), BEN(혜택), MYCPN(MY 쿠폰), TPNT(T 포인트), PRDL(상품 목록).
   - 확신 없으면 moduleCodeConfidence: "low" + moduleCandidates 로 후보 여러 개 제시.
4. 신규 컴포넌트는 newComponents 배열에 요약 (name, category, reason, baseOn).

== 출력 형식 ==
반드시 아래 JSON 형식으로만 답합니다. JSON 앞뒤 설명 텍스트 금지.

\`\`\`json
{
  "screen": {
    "name": "page/MODULE/screen-name",
    "moduleCode": "MYBEN",
    "moduleCodeConfidence": "high",
    "moduleCandidates": ["MYBEN"],
    "description": "한 줄 요약",
    "bbox": { "x": 0, "y": 0, "w": 375, "h": 812 },
    "children": [
      {
        "component": "ogn/xxx",
        "bbox": { "x": 24, "y": 180, "w": 327, "h": 192 },
        "match": { "status": "reused", "ref": "ogn/xxx", "confidence": "high" },
        "props": { "label": "..." },
        "children": [ ... ]
      },
      {
        "component": "ogn/MODULE/new-card",
        "bbox": { "x": 24, "y": 400, "w": 327, "h": 80 },
        "match": { "status": "new", "reason": "카탈로그에 유사 컴포넌트 없음" },
        "children": [ ... ]
      }
    ]
  },
  "newComponents": [
    { "name": "mol/xxx", "category": "mol", "reason": "...", "baseOn": "mol/yyy" }
  ],
  "notes": "전체 분석 요약 / 주의사항"
}
\`\`\`
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { imageBase64, mediaType, featureSpec } = body as {
      imageBase64?: string;
      mediaType?: string;
      featureSpec?: string;
    };

    if (!imageBase64 || !mediaType) {
      return Response.json({ error: "imageBase64, mediaType 필수" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "ANTHROPIC_API_KEY 환경변수가 설정되지 않았습니다. .env.local 확인" },
        { status: 500 }
      );
    }

    const client = new Anthropic({ apiKey });

    const userText =
      (featureSpec?.trim() ? `기능 설명:\n${featureSpec.trim()}\n\n` : "") +
      `첨부된 디자인 이미지를 분석해주세요.`;

    const msg = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 8192,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mediaType as "image/png" | "image/jpeg" | "image/webp" | "image/gif",
                data: imageBase64,
              },
            },
            { type: "text", text: userText },
          ],
        },
      ],
    });

    const rawText = msg.content
      .filter((c) => c.type === "text")
      .map((c) => (c as { text: string }).text)
      .join("\n");

    // JSON 블록 파싱 시도
    let tree: unknown = null;
    const jsonMatch = rawText.match(/```json\s*([\s\S]*?)\s*```/);
    const candidate = jsonMatch ? jsonMatch[1] : rawText.trim();
    try {
      tree = JSON.parse(candidate);
    } catch {
      // parse 실패 시 raw 만 반환
    }

    return Response.json({ tree, raw: rawText });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
