# 기능내역서 분석 — Phase 2

기획/기능명세서 테이블 또는 정책서 문서를 입력하면 컴포넌트 목록을 파싱해서 재사용/조정/신규 로 분류.

## 5번째 메뉴: `📋 기능내역서 분석`

라우트: `/spec-analysis`

## 입력 모드 (2종)

### 기능내역서 모드 (기본)
Notion / Excel / Markdown 테이블 붙여넣기.
각 행에 대해 컴포넌트 목록 추출 + 기능 메타 (spec id, 기능명, 설명 등).

### 정책서 모드 (Phase 2c 추가)
Word / HTML / 자유 텍스트 형식의 정책서를 붙여넣기.
**2단계 처리**:
1. `/api/derive-features` — 정책서 → 기능내역서 도출 (Step 0.5 검토)
2. 사용자가 도출된 기능내역서 검토·편집 후 → `/api/analyze-spec` 기존 분석 진행

### Phase 2b (나중)
**이미지 업로드**: Claude Vision 으로 OCR + 테이블 파싱.

## AI 2-pass

### Pass 1: 테이블 → 구조화
```
입력: 자유 형식 텍스트 (markdown table / TSV / 자연어)
출력:
{
  "features": [
    {
      "specId": "SPEC-AGR-01",
      "screenId": "TU-MY-AGR-MO-02-BS-001",
      "name": "동의 항목 리스트 노출",
      "description": "[조건] ... [출력] ...",
      "components": ["ogn/bottomsheet"],
      "module": "AGR",
      "priority": "P0"
    }
  ]
}
```

### Pass 2: 컴포넌트 매칭

분류 기준은 **mockup 의 source of truth** 를 참조:

→ `mockup/mockup-docs/AUDIT_RULES.md` (1. 컴포넌트 분류)

3 분기: `reused` / `rename` / `new`. 자주 발생하는 rename 케이스 (mlc→mol, button(primary)→btn 등) 도 그 문서에 표로 정리되어 있음.

### Pass 3: UX 단계 분류 (UX_GOVERNANCE 7원칙)

각 screen id 별로 7단계 (1 진입 / 2 탐색 / 3 검색 / 4 결정 / 5 실행 / 6 완료 / 7 CS) 중 어디에 속하는지 분류 — `mockup/mockup-docs/UX_GOVERNANCE.md` 가 source of truth.

- 출력: `uxStages` 객체 (`{ "TU-...": { "primary": 4, "secondary": 5, "principles": [...], "checkpoints": [...] } }`)
- 보고서 0. 요약에 표시 → 사용자 검증
- inferredEssentials 추론도 단계 분류 결과를 반영해야 함 (예: 6 완료 단계 → 결과 요약 카드 essential)

## UX (3영역)

```
┌──────────┬──────────────────┬──────────────────┐
│ Sidebar  │ 기능 목록         │ 선택 기능 상세    │
│          │                  │                  │
│  📋 분석 │ SPEC-AGR-01     │ 동의 항목 리스트  │
│          │  ✓ 1 · ⚠ 0      │ [세부 설명]      │
│          │  ✕ 0            │                  │
│          │                  │ 컴포넌트 판정:    │
│          │ SPEC-MAIN-10    │  ✕ ogn/bottomsheet│
│          │  ✓ 1 · ⚠ 1      │  ⚠ atom/iconbutton│
│          │  ✕ 0            │    → atom/icon-button│
│          │                  │                  │
│          │ [📤 모두 보내기]  │ [이 기능만 보내기]│
└──────────┴──────────────────┴──────────────────┘
```

## 검수 큐 연결

- `reused` 제외
- `rename` 의 suggested 이름으로 candidate 생성 + description 에 "원본 이름: XXX" 기록
- `new` 는 그대로 candidate

candidate.description 에 출처 추가:
- `"SPEC-AGR-01 '동의 항목 리스트 노출' 에서 검출"`

## localStorage

세션 보존용:
- `genui.spec-analysis.latest` — 마지막 분석 결과 (features 배열)
- 페이지 새로고침해도 복원

## 데이터 모델

```ts
type ComponentMatch = {
  name: string;            // 원본 표기 (iconbutton, mlc/list)
  status: "reused" | "rename" | "new";
  suggested?: string;      // rename 시 조정안
  category?: "atom" | "mol" | "ogn" | "page";
  reason?: string;
};

type FeatureRow = {
  specId: string;
  screenId?: string;
  name: string;
  description?: string;
  components: ComponentMatch[];
  module?: string;
  priority?: string;
};

type SpecAnalysisResult = {
  features: FeatureRow[];
  notes?: string;
};
```

## Phase 분할 요약

- **2a**: 텍스트 입력 → 분석 → 검수 전송 (이 문서 범위)
- **2b**: 이미지 OCR
- **2c**: 편집 UI (매칭 결과 수정)
