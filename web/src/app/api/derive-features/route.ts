import Anthropic from "@anthropic-ai/sdk";
import { loadDoc } from "@/lib/docs-loader";

export const runtime = "nodejs";
export const maxDuration = 90;

const UX_GOVERNANCE = loadDoc("UX_GOVERNANCE.md");

const SYSTEM_PROMPT = `당신은 서비스 정책서를 읽고 모바일 앱 FO 기능내역서를 도출하는 전문가입니다.

== 작업 ==

정책서 텍스트 (Word·HTML·Markdown 어떤 형식이든) 를 입력받아, 실제 모바일 앱 화면 기준으로 기능내역서를 도출합니다.

== UX Governance (mockup/mockup-docs/UX_GOVERNANCE.md — 화면 분해 시 참조) ==

화면을 분해할 때 각 화면이 7단계 (1 진입 / 2 탐색 / 3 검색 / 4 결정 / 5 실행 / 6 완료 / 7 CS) 중 어디에 속하는지 인식하라. 같은 단계의 화면은 묶고, 다른 단계로 넘어가면 별도 screen 으로 분해.

${UX_GOVERNANCE}

== 도출 단계 ==

1. **주요 업무 플로우 파악** — 유즈케이스·프로세스·기능 정의 섹션에서 고객(FO)이 직접 수행하는 업무 흐름 추출
2. **화면 단위로 분해** — 각 플로우를 사용자가 실제로 보는 모바일 앱 화면으로 쪼개기
   - 화면 전환이 일어나는 지점 = 별도 screen
   - 같은 화면 안의 단계(예: 로딩→결과)는 같은 screen으로 묶기
3. **기능 정의** — 각 화면에서 사용자가 할 수 있는 행위 + 시스템이 노출하는 정보 (UI 관점)
   - BSS/서버 내부 로직 전용 기능은 제외 (FO 에 UI 없음)
4. **UI 컴포넌트 힌트** — 각 기능에 필요한 대표 UI 요소 (일반적인 이름으로, 쉼표 구분)

== 네이밍 규칙 ==

- screen id: SCR-{모듈약어}-{화면약어}-{2자리} (예: SCR-MBR-JOIN-01, SCR-MBR-DORM-01)
- spec id: SPEC-{모듈약어}-{3자리} (예: SPEC-MBR-001, SPEC-MBR-002)
- 모듈약어: 정책서 도메인에서 추출 (회원관리 → MBR, 인증 → AUTH, 약관 → AGR 등)

== 화면당 기능 수 ==

화면당 3~7개가 적당. 너무 세분화하거나 (1개) 너무 뭉치지 (15개) 않기.

== 세부 설명 형식 ==

[조건] ...조건... [입력] ...사용자 입력... [출력] ...노출 내용...
없는 항목은 생략.

== 우선순위 ==

- P0: 화면의 핵심 기능 (없으면 화면 자체가 무의미)
- P1: 중요 기능 (있어야 하지만 없어도 기본 동선은 가능)
- P2: 선택/부가 기능

== 출력 형식 ==

반드시 아래 JSON 블록으로만 답합니다. 앞뒤 설명 없이 JSON만.

\`\`\`json
{
  "summary": "회원가입·휴면해제·회원탈퇴·재가입 4개 플로우, 총 N개 화면, M개 기능 도출",
  "derivedSpec": "| spec id | screen id | 기능명 | 세부 설명 | 컴포넌트 목록 | 모듈 | 우선순위 |\\n|---|---|---|---|---|---|---|\\n| SPEC-MBR-001 | SCR-MBR-JOIN-01 | 약관 동의 목록 노출 | [조건] 가입 진입 시 [출력] 필수/선택 약관 목록 및 전체동의 체크박스 표시 | 전체동의 체크박스, 약관 리스트 아이템, 다음 버튼 | MBR | P0 |\\n..."
}
\`\`\`
`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { text?: string };
    const text = (body.text || "").trim();
    if (!text) {
      return Response.json({ error: "text 필수" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "ANTHROPIC_API_KEY 설정 안 됨" }, { status: 500 });
    }

    const client = new Anthropic({ apiKey });

    const msg = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 16384,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: text }],
    });

    const rawText = msg.content
      .filter((c) => c.type === "text")
      .map((c) => (c as { text: string }).text)
      .join("\n");

    // ```json 블록 우선, 없으면 첫 { 부터 마지막 } 추출 (앞뒤 설명 텍스트 방어)
    let candidate = "";
    const m = rawText.match(/```json\s*([\s\S]*?)\s*```/);
    if (m) {
      candidate = m[1];
    } else {
      const first = rawText.indexOf("{");
      const last = rawText.lastIndexOf("}");
      candidate = first >= 0 && last > first ? rawText.slice(first, last + 1) : rawText.trim();
    }

    let result: { summary?: string; derivedSpec?: string } | null = null;
    try {
      result = JSON.parse(candidate);
    } catch (parseErr) {
      const reason = msg.stop_reason; // "end_turn" | "max_tokens" | "stop_sequence" | ...
      const truncated = reason === "max_tokens";
      return Response.json(
        {
          error: truncated
            ? "AI 응답이 너무 길어서 잘렸어요 (max_tokens 한계). 정책서 분량을 줄이거나 일부만 분석하세요."
            : "AI 응답에서 JSON 추출 실패. 입력이 정책서 형식이 맞는지 확인하세요.",
          raw: rawText,
          stopReason: reason,
          parseError: parseErr instanceof Error ? parseErr.message : String(parseErr),
          usage: msg.usage,
        },
        { status: 500 }
      );
    }

    return Response.json({
      summary: result?.summary || "",
      derivedSpec: result?.derivedSpec || "",
      raw: rawText,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
