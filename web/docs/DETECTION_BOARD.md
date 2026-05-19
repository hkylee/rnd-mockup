# Detection Board — Phase 1 설계

Genui 웹서비스의 "UI 생성" 메뉴 핵심 기능. 페이지 캡처 이미지를 올리면 AI 가 atom/mol/ogn 로 자동 분류 + bbox 감지 → 사용자가 편집·승인 → 소스 아카이빙으로 승격.

## 결정된 4가지

1. **bbox 정확도**: AI 대략 감지 + 사용자 수동 조정 가능 (resize/drag)
2. **신규 spec 생성**: AI 자동 생성 + 사용자 검수
3. **모듈 코드 할당**: AI 자동 제안 + 드롭다운 수정 가능
4. **저장소**: Phase 1a/b localStorage → Phase 1c 승격 시 file system → (장기) DB

## 3영역 레이아웃

```
┌──────────┬────────────────────┬──────────────────┐
│ Sidebar  │ Annotated Image    │ Detection Tree   │
│          │ 원본 + bbox overlay  │ + Diagnostics   │
│  📁 소스  │ 드래그 새 영역 추가    │ 승격 버튼        │
│  ✨ 생성  │ resize/drag bbox    │                  │
└──────────┴────────────────────┴──────────────────┘
```

## 색상 규칙 (레이어 구분)

- atom: emerald-500 (초록)
- mol: blue-500 (파랑)
- ogn: violet-500 (보라)
- page: slate-700

## Phase 1 세부 단계

### Phase 1a — Detection Tree 편집기
- AI 프롬프트 확장 (bbox, 카탈로그 매칭, 모듈 제안 포함)
- 3영역 UI + 트리 편집 (리네임/카테고리/삭제)
- 이미지 overlay 읽기 전용 (hover 양방향 바인딩)
- 저장: localStorage

### Phase 1b — 카탈로그 매칭 + 진단
- reused/신규/충돌 뱃지
- 린터 5종:
  1. 중복 이름 (기존 소스와 동명이지만 구조 다름)
  2. 네이밍 규칙 (kebab-case, 특수문자)
  3. 고아 ref (참조 컴포넌트 부재)
  4. Spec 완결성 (필수 필드)
  5. 모듈 코드 누락 (ogn/UNKNOWN/…)
- 네이밍 자동 교정 제안

### Phase 1c — 승격 파이프라인
- 진단 통과 → 소스 저장소 추가
- 신규 atom/mol/ogn spec JSON 생성
- page spec 생성
- Figma 번들 (cascade 순서)
- 저장: file system (프로젝트별 디렉토리, 예: `web/projects/{id}/` 구상)

### Phase 1d (선택) — 드래그 수동 추가
- 이미지 위 드래그 → 새 bbox → 노드 생성

## AI 프롬프트 확장 (Phase 1a 핵심)

### 입력
- image (base64)
- feature spec (선택)
- 현재 카탈로그 (이름 + 간단 메타)

### 출력 (JSON)
```jsonc
{
  "screen": {
    "name": "page/{MODULE}/{name}",
    "moduleCode": "MYBEN",
    "moduleCodeConfidence": "high|medium|low",
    "moduleCandidates": ["MYBEN", "BEN"],
    "description": "...",
    "bbox": { "x": 0, "y": 0, "w": 375, "h": 812 },
    "children": [
      {
        "component": "ogn/MYBEN/card-points",
        "bbox": { "x": 24, "y": 180, "w": 327, "h": 192 },
        "match": {
          "status": "reused|new|conflict",
          "ref": "ogn/MYBEN/card-points",       // 매칭된 카탈로그 항목 (reused 시)
          "confidence": "high|medium|low",
          "reason": "정확 일치"
        },
        "props": { "label": "..." },
        "children": [...]
      }
    ]
  },
  "newComponents": [
    {
      "name": "mol/my-edit-btn",
      "category": "mol",
      "reason": "...",
      "baseOn": "atom/btn type=ghost"
    }
  ],
  "notes": "..."
}
```

### 프롬프트 규칙
- bbox 는 **원본 이미지 픽셀 좌표** (x/y/w/h). 절대값.
- `match.status`:
  - `reused`: 기존 카탈로그에 있고 그대로 쓸 수 있음
  - `new`: 카탈로그에 없음, 신규 생성 필요
  - `conflict`: 이름이 같은 기존이 있는데 구조 다름 (rename 필요)
- `moduleCodeConfidence` 가 low/medium 일 때 UI 에서 사용자 드롭다운 노출

## 데이터 모델 (localStorage)

```ts
type DetectionSession = {
  id: string;                    // UUID
  imageDataUrl: string;          // 원본 이미지
  featureSpec: string;
  tree: AnalyzeTree;             // AI 원본 응답
  edits: Edit[];                 // 사용자 편집 history
  createdAt: number;
  updatedAt: number;
};

type Edit =
  | { type: "rename"; path: string[]; newName: string }
  | { type: "category"; path: string[]; newCategory: "atom"|"mol"|"ogn" }
  | { type: "delete"; path: string[] }
  | { type: "bbox"; path: string[]; newBbox: { x,y,w,h } }
  | { type: "match"; path: string[]; status: "reused"|"new"; ref?: string };
```

Key: `genui.detection.{session-id}`, 최근 세션은 `genui.detection.recent = [id1, id2, ...]`

## 진단 규칙

진단 규칙 5종 + raw 값 감지의 상세는 **mockup 의 source of truth** 를 참조:

→ `mockup/mockup-docs/AUDIT_RULES.md`

- 컴포넌트 분류 (reused / rename / new)
- 5 진단 규칙 (중복이름 · 네이밍 · 고아ref · 완결성 · 모듈코드)
- raw 값 감지
- 자주 발생하는 rename 케이스

본 도구 (Detection Board) 는 위 규칙을 UI 상에서 자동 실행하는 구현체.

## 파일 맵 (구현 예정)

```
web/src/
├── app/generate/page.tsx             ← 3영역 레이아웃 재구성
├── components/
│   ├── DetectionImage.tsx            ← 이미지 + bbox overlay
│   ├── DetectionTree.tsx             ← 트리 편집기
│   ├── DiagnosticsPanel.tsx          ← 진단 결과
│   └── PromoteButton.tsx             ← 승격 CTA + modal
├── lib/
│   ├── detection-store.ts            ← localStorage 세션 관리
│   ├── diagnostics.ts                ← 린터 5종
│   └── promote.ts                    ← 승격 파이프라인 (Phase 1c)
└── app/api/
    ├── analyze/route.ts              ← 프롬프트 확장
    ├── spec-from-bbox/route.ts       ← (Phase 1b) AI 가 bbox 이미지 조각 → spec 생성
    └── promote/route.ts              ← (Phase 1c) 승격 → file system 저장
```
