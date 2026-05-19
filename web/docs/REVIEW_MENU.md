# Review Menu — 컴포넌트 검수 (Phase 1b / 1c)

UI 생성에서 나온 **후보 (candidate) 컴포넌트** 를 소스로 승격하기 전에 중복·네이밍·DS 충돌을 진단하고 사용자 확정을 받는 메뉴. Phase 1a (Detection Board) 의 후속 플로우.

## 3-메뉴 책임 분리

| 메뉴 | 역할 | 쓰기 권한 |
|---|---|---|
| 📁 소스 | 확정된 컴포넌트 아카이브 (read-only + 직접 추가 예외) | ✅ 확정본만 |
| ✨ UI 생성 | 이미지 → AI 분석 → 트리 편집 (candidate 생성) | 🚫 쓰기 없음 |
| 🔎 컴포넌트 검수 | candidate 진단 → 확정/병합/스킵 → 소스 승격 + DS 업데이트 | ✅ 승격 시에만 |

## 데이터 흐름

```
UI 생성                    컴포넌트 검수                  소스
  │                            │                         │
  │ AI 분석 + 편집              │                         │
  │ "검수로 보내기"              │                         │
  ├───────────────────────────▶│                         │
  │  candidate[] 저장           │  진단 (Tier 1~3)        │
  │  (localStorage)             │  ├ 이름 중복/유사        │
  │                            │  ├ 네이밍 규칙           │
  │                            │  ├ 완결성               │
  │                            │  ├ 고아 ref            │
  │                            │  └ DS raw 값 감지       │
  │                            │                         │
  │                            │ 사용자 결정               │
  │                            │ ● 확정 ─────────────────▶│ atomic 저장
  │                            │ ● 병합 (기존 ref)        │ DS 업데이트
  │                            │ ● 스킵                   │
```

## 3영역 레이아웃 (/review)

```
┌──────────┬────────────────┬────────────────────────┐
│ Sidebar  │ 후보 큐         │ 선택 후보 상세          │
│          │                │                        │
│  📁 소스 │ 🎨 DS 업데이트  │ ⚛ atom/new-btn        │
│  ✨ 생성 │   3개 후보 ▸    │                        │
│  🔎 검수 │                │ [미러링 렌더]            │
│          │ 컴포넌트 후보    │                        │
│          │ ● atom/new-btn  │ ─ 진단 ───────────     │
│          │   ⚠ 유사 1      │ ✓ 네이밍 규칙          │
│          │ ● mol/card-v2   │ ⚠ mol/card-header 와   │
│          │   ⚠ 중복        │   구조 87% 유사          │
│          │ ● ogn/MYBEN/..  │ ℹ 새 색 #3617CE 감지  │
│          │                │                        │
│          │                │ [확정] [병합] [스킵]     │
└──────────┴────────────────┴────────────────────────┘
```

## 데이터 모델

```ts
type Candidate = {
  id: string;                    // uuid
  createdAt: number;
  sessionId?: string;            // UI 생성 세션 출처
  name: string;                  // "mol/my-edit-btn"
  category: "atom" | "mol" | "ogn" | "page";
  spec?: ComponentSpec;          // 후보 spec (없으면 spec 생성 필요)
  description?: string;
  reason?: string;               // AI 가 신규로 판단한 이유
  baseOn?: string;               // 참고 컴포넌트
  sourceImageUrl?: string;       // 출처 캡처
  sourceBbox?: BBox;
  status: "pending" | "promoted" | "merged" | "skipped";
  diagnostics?: DiagnosticResult[];
};

type DiagnosticResult = {
  level: "info" | "warning" | "error";
  type:
    | "name-conflict"
    | "name-similar"
    | "naming-rule"
    | "completeness"
    | "orphan-ref"
    | "raw-value";
  message: string;
  suggestion?: string;
  details?: Record<string, unknown>;
};

type DsProposal = {
  type: "color" | "dimension" | "fontSize" | "spacing" | "other";
  rawValue: string;
  usage: number;
  suggestTokenName: string;
  suggestCategory: string;       // foundation.color / semantic.color / component.x
};
```

localStorage keys:
- `genui.review.candidates` — Candidate[]
- `genui.review.ds-proposals` — DsProposal[]

## 진단 엔진

진단 규칙은 **mockup 의 source of truth** 를 참조:

→ `mockup/mockup-docs/AUDIT_RULES.md`

본 도구는 그 규칙들을 Tier 단계로 단계적 구현:

### Tier 1 (Phase 1b)
- name-conflict / naming-rule / completeness / orphan-ref / raw-value
- (규칙 정의는 AUDIT_RULES.md 의 5+1 진단)

### Tier 2 (Phase 1c)
- **name-similar** (구현 확장): Levenshtein distance 낮음 + category 같음 → warning (ex: `card-header` vs `card-headr`)
- **structure-similar**: children 트리 86%+ 매치 → info (병합 제안)
- **module-code-missing**: AUDIT_RULES.md 2.5

### Tier 3 (Phase 2+)
- AST 기반 spec 정규화 비교
- 버저닝, undo

## DS Raw 값 감지 (Tier 1 의 raw-value 규칙)

`mockup/mockup-docs/AUDIT_RULES.md` 2.6 의 raw 값 감지 규칙 구현. 기본 흐름:

1. candidate.spec 전체를 walk
2. 색상/길이 raw 값 추출
3. 현재 DS 의 leaf 값과 비교
   - **매치** → 해당 토큰으로 교체 제안
   - **매치 없음** → 신규 토큰 후보 (category 추정 + 이름 제안)
4. 빈도 계산 → 가중치 부여

## 사용자 액션

| 액션 | 효과 |
|---|---|
| **확정** | candidate → 소스로 이동 (atomic). spec 파일 생성. 진단의 "권장 수정" 반영 옵션. |
| **병합** | 기존 소스 컴포넌트와 병합. UI 생성의 트리에서 해당 ref 교체. candidate 제거. |
| **스킵** | candidate 제거. 승격 안 함. |
| **이름 변경 후 확정** | 사용자가 새 이름 입력 → 중복/네이밍 재검증 → 확정 |
| **DS 제안 수락** | 해당 raw 값이 새 토큰으로 DS 에 추가 + 관련 spec 이 토큰 참조로 변환 |

## Phase 1c 구현 세부

- **승격 대상 저장**: `mockup/component-specs/<category>/<name>.json`
- **DS 업데이트**: `mockup/skt-design-system.json` 의 해당 섹션에 신규 leaf 추가
- **sync:shared 자동 실행**: web/shared 도 동시 갱신
- **번들 재생성**: 승격된 컴포넌트 + 의존 cascade 의 번들을 클립보드 복사 링크로 제공
- **의존성 순서**: atom → mol → ogn → page. Phase 1c 의 승격 API 가 자동 정렬.

## 파일 맵 (예정)

```
web/src/
├── app/review/page.tsx                   ← 3영역 UI
├── components/
│   ├── ReviewCandidateList.tsx           ← 후보 큐
│   ├── ReviewDetail.tsx                  ← 상세 + 진단 + CTA
│   └── DsProposalPanel.tsx               ← DS 업데이트 제안
├── lib/
│   ├── review-store.ts                   ← localStorage CRUD
│   ├── review-diagnostics.ts             ← Tier 1 진단
│   └── review-token-scan.ts              ← raw 값 감지 + DS 제안
└── app/api/
    ├── promote/route.ts                  ← (Phase 1c) 승격
    └── ds-update/route.ts                ← (Phase 1c) DS 업데이트
```
