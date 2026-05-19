# SB Template Schema — 3 Layer 화면설계서

> SB (Storyboard / 화면설계서) 의 표준 JSON 스키마.
> **3 layer 위계**로 큰 구조 → 상세를 정의: Screen → Section → Organism.
>
> 큰 구조는 변하지 않으며, 각 layer 의 본문 표 컬럼은 (필요 시) 점진적으로 보강.
>
> **미래 비전**: 각 layer 가 mockup 의 component-specs 처럼 **마스터 컴포넌트 1개 + props 데이터** 양식으로 운영. description 컬럼 안 태그 (`[영역명]`, `[규칙:]`, `[조건:]` 등) 가 마스터 컴포넌트의 props 로 직접 매핑.

---

## 1. 3 Layer 위계

```
Screen 설계 (페이지 레벨)
  └ Areas[]  (각 row = 한 영역 = 한 Section 참조)
       │
       ▼
Section 설계 (섹션 레벨)
  └ Organisms[]  (각 row = 한 Organism 참조)
       │
       ▼
Organism 설계 (오가니즘 레벨)
  └ Components[]  (각 row = 한 atom/mol/ogn Component 참조)
```

**의존 방향**: Screen → Section → Organism → Component.
**자동 도출 방향**: Component 카탈로그 (`component-specs/`) → Organism-SB 자동 생성. SPEC_INPUT 의 기능 목록 → Screen-SB 의 Areas 자동 도출. Section-SB 는 SPEC_REPORT 분석 결과로 보강.

---

## 2. 공통 메타 (모든 layer 공통)

각 layer 의 좌상단에 **8~9 row 메타 표** 가 배치됨 (이미지에서 추출).

| 필드 | 타입 | 설명 |
|---|---|---|
| `moduleId` | string | 모듈 코드 (MBR / PRDD / MYBEN / TPNT 등) |
| `id` | string | layer 별 ID (screen / section / organism) |
| `name` | string | 한글 명 |
| `description` | string | 한글 설명 (선택, organism 부터는 거의 필수) |
| `policy` | string | 관련 정책서 ID 또는 파일명 |
| `designDoc` | string | 연관 설계서 (상위 / 하위 SB 또는 외부 docs) |
| `deployDate` | string | 배포일 (YYYY/MM/DD) |
| `writer` | string | 배포자 |
| `version` | string | 현재 버전 (v0.1 / v1.0 등) |
| `versionHistory` | array | `[{ version, summary, date, writer }]` — Figma 의 sticky 노란 카드 |

---

## 3. Layer 1 — Screen-SB

### 3.1 본문 표 (Areas)

| no | 영역 종류 | Section ID | Section 설명 | Organism ID | 노출 조건 | 노출 케이스 | 서버 제어 항목 | 노출 개수 (min/max) | 노출 우선순위 | 오류 처리 방식 | descriptions |
|---|---|---|---|---|---|---|---|---|---|---|---|

> **영역 종류** (`type`): `dynamic` (API 응답 변동) / `static` (고정 콘텐츠).
> 휴리스틱: `descriptions` 안 `[상태:loading|empty|error]` 태그 있으면 `dynamic`. (`generate-sb.js` 기본 추론)

### 3.2 JSON 예시

```jsonc
{
  "type": "screen",
  "moduleId": "MBR",
  "id": "MBR-SIGNUP-TERMS",
  "name": "회원 가입 — 약관 동의",
  "description": "필수/선택 약관 동의 + 미성년 분기",
  "policy": "POL-MBR-TERM-001",
  "designDoc": "specs-input/MBR-signup.md",
  "deployDate": "2026/05/01",
  "writer": "전유진",
  "version": "v0.1",
  "versionHistory": [
    { "version": "v0.1", "summary": "초안 — generate-sb.js prototype", "date": "2026/05/01", "writer": "전유진" }
  ],
  "screenPath": "PR-MBR-CS-001-01",
  "areas": [
    {
      "no": 1,
      "type": "dynamic",
      "sectionId": "section/MBR/term-list",
      "sectionDescription": "필수/선택 약관 목록 노출",
      "organismIds": ["ogn/MBR/term-section"],
      "displayCondition": "약관 조회 API 성공",
      "displayCases": "정상 / loading / empty / error",
      "serverControl": "약관 list (terms[])",
      "displayCount": { "min": 1, "max": 4 },
      "displayPriority": 1,
      "errorHandling": "snack-bar + [재시도]",
      "descriptions": "[영역명] 약관 목록\n[규칙:노출순서] 필수 → 선택\n[고지:필수|POL-MBR-TERM-001-01] 이용약관\n[상태:loading] skeleton row × 4\n[상태:error] snack-bar + [재시도]\n[톤:안내] 차분·명확"
    }
  ]
}
```

### 3.3 source 매핑

| Screen-SB 필드 | source |
|---|---|
| 메타 (moduleId / id / name / screenPath) | SPEC_INPUT § 화면 정보 |
| `policy` | SPEC_INPUT § 화면 정보 의 출처 (정책서 ID) |
| `areas[].type` (dynamic/static) | `descriptions` 휴리스틱 OR SPEC_INPUT 기능별 `노출 방식` 명시 |
| `areas[].sectionId` | SPEC_INPUT 기능명 → kebab-case 변환 (예: "약관 목록 노출" → `section/MBR/term-list`) |
| `areas[].sectionDescription` | SPEC_INPUT 기능명 + 설명 |
| `areas[].descriptions` | SPEC_INPUT 의 `SB description` 필드 (description-format.md 태그) |
| `areas[].organismIds` | SPEC_REPORT § 1 카탈로그 대조 결과 (재사용 / 신규 ogn) |
| `areas[].displayCondition / displayCases / serverControl / displayCount / displayPriority / errorHandling` | SPEC_REPORT § 1.6 (상태 매트릭스) + § 1.7 (디자인 결정) |

→ **현 단계**: SPEC_INPUT 만으로 Screen-SB 의 메타 + areas 의 descriptions / type / sectionId 후보까지 자동 도출. 나머지는 SPEC_REPORT 분석 단계 또는 사용자 보강.

---

## 4. Layer 2 — Section-SB

### 4.1 본문 표 (Organisms)

| Organism ID | 노출 조건 | 노출 케이스 |
|---|---|---|

### 4.2 JSON 예시

```jsonc
{
  "type": "section",
  "moduleId": "PRDD",
  "id": "section/PRDD/card-bundle",
  "name": "카드 번들 상품 영역",
  "description": "상품 상세에서 추천 번들 상품을 카드로 노출",
  "policy": "POL-PRDD-BUNDLE-001",
  "designDoc": "PRDD-screen.sb (상위)",
  "deployDate": "2026/04/15",
  "writer": "이지윤",
  "version": "0.1",
  "versionHistory": [...],
  "organisms": [
    {
      "organismId": "ogn/PRDD/card/pick",
      "displayCondition": "선택 가능 상품군일 때",
      "displayCases": "선택 시 / 미선택 시 / 비활성"
    }
  ]
}
```

### 4.3 source 매핑

| Section-SB 필드 | source |
|---|---|
| 메타 (moduleId / id / name / description) | SPEC_REPORT § 1 카탈로그 대조 (Section 후보 정의) |
| `organisms[]` | SPEC_REPORT § 1 + component-specs 의 `ogn/{MOD}/*` 카탈로그 |
| `displayCondition / displayCases` | SPEC_REPORT § 1.6 상태 매트릭스 또는 SPEC_INPUT 의 `SB description` 안 `[조건:]` 태그 발췌 |

→ **자동 도출 가능성**: 부분. 사용자 보강 + SPEC_REPORT 분석 결과 결합 필요.

---

## 5. Layer 3 — Organism-SB

### 5.1 본문 표 (Components)

| no | Component ID | Component 명 | 설명 |
|---|---|---|---|

### 5.2 JSON 예시

```jsonc
{
  "type": "organism",
  "moduleId": "PRDD",
  "id": "ogn/PRDD/card/pick",
  "name": "선택 상품 카드",
  "description": "상품 상세페이지에서 신청 상품을 선택하는 상품군인 경우 노출되는 카드",
  "policy": "POL-PRDD-PICK-001",
  "designDoc": "section/PRDD/card-bundle (상위)",
  "deployDate": "2026/04/15",
  "writer": "이지윤",
  "version": "0.1",
  "versionHistory": [...],
  "components": [
    { "no": 1, "componentId": "mol/card-product", "componentName": "상품 카드", "description": "상품 정보 + 가격 + 선택 라디오" },
    { "no": 2, "componentId": "atom/btn",         "componentName": "선택 버튼", "description": "선택 시 active 상태로 전환" }
  ]
}
```

### 5.3 source 매핑

| Organism-SB 필드 | source |
|---|---|
| 메타 (id / name / description) | `mockup/component-specs/ogn/{MOD}/{name}.json` 의 `name` / `description` |
| `components[]` | 동일 spec 의 `base.children` 안 `kind: "ref"` 자식들 — 자동 추출 가능 |
| `components[].componentName` | ref target spec 의 한글명 (별도 dict 필요) |

→ **자동 도출 가능성**: 거의 100%. component-specs JSON 만 있으면 Organism-SB 의 components 표는 fully derive 가능.

---

## 6. Description 컬럼 → Props 매핑 (마스터 컴포넌트화)

> **미래 마스터 컴포넌트** (`sb/screen`, `sb/section`, `sb/organism`) 를 만들 때 description 안 태그가 props 로 1:1 매핑되도록 규격화. mockup 의 atom/mol/ogn 처럼 spec JSON + props 데이터로 instance 생성.

### 6.1 description 태그 → row props

description 한 줄 = SB 표의 **한 row** (description sub-row). 각 row 의 props:

| props | 타입 | 출처 태그 | 예시 |
|---|---|---|---|
| `tagType` | enum | 태그 카테고리 | `영역명` / `규칙` / `조건` / `이동` / `노출` / `고지` / `상태` / `톤` |
| `tagSubType` | string | 태그 안 콜론 뒤 식별자 | 규칙: `노출순서`, 조건: `배너1개`, 상태: `loading`, 톤: `친절` |
| `policyId` | string | 고지 태그의 정책 ID | `POL-MBR-TERM-001-01` (`[고지:필수|POL-...]`) |
| `marking` | enum | 고지 태그의 마킹 | `필수` / `사용성` |
| `value` | string | 태그 뒤 본문 텍스트 | "필수 약관 미동의 시 진행 제한" |

### 6.2 변환 예시

description 한 줄:
```
[고지:필수|POL-MBR-TERM-001-01] 이용약관 — 전기통신사업법 § 22-2
```

→ row props:
```jsonc
{
  "tagType": "고지",
  "marking": "필수",
  "policyId": "POL-MBR-TERM-001-01",
  "value": "이용약관 — 전기통신사업법 § 22-2"
}
```

### 6.3 description row variant (마스터 컴포넌트 후보)

| tagType | variant | 시각 시그널 |
|---|---|---|
| `영역명` | label-emphasis | 굵게, 큰 텍스트 |
| `규칙` / `조건` / `이동` / `노출` | rule-row | 라벨 + 값 좌우 |
| `고지` 마킹=필수 | notice-required | 🔴 + 정책 ID badge + 굵은 본문 |
| `고지` 마킹=사용성 | notice-usability | 🟡 + 정책 ID badge + 본문 |
| `상태` | state-row | 상태 chip + 동작 |
| `톤` | tone-meta | 톤 카테고리 chip + 짧은 메모 |

→ description-format.md 의 모든 태그가 시각 표현 양식과 일치되도록 정렬.

---

## 7. Figma 마스터 컴포넌트 매핑 (현재 알려진)

| Layer | 마스터 nodeId | 파일 |
|---|---|---|
| Screen-SB | `1230:885` (SB-) | `w4UaFkegK6myWfVw2au3Ru` |
| Section-SB | TBD | TBD |
| Organism-SB | TBD | TBD |

### 7.1 Screen-SB 내부 컴포넌트 ID

| 컴포넌트 | ID | 용도 |
|---|---|---|
| `screen` | `1217:6594` | 모바일 화면 프레임 (375×812) |
| `section` (static) | `1217:6088` | 영역 종류 = static |
| `section` (dynamic) | `1217:6278` | 영역 종류 = dynamic (슬롯 포함) |
| `section/common` | `1217:6272` | Header / Nav 바 라벨 |
| `viewport` | `1217:6742` | 뷰포트 위치 마커 |
| `.item/section/template` | `1217:7127` | 슬롯 내 플레이스홀더 |
| `numbering` | `1217:4055` | 영역 넘버링 (no.) |
| `text-block` | (미정) | 모든 라벨/값 쌍 (66px 라벨 + 가변 값) |

### 7.2 Section-SB / Organism-SB 마스터 (TBD)

이미지에서 확인된 구조 (메타 8 row + Version History sticky + 본문 표) 따라 마스터 정의 필요. 작성 시:
- Section-SB: 본문 표 3 col (Organism ID / 노출 조건 / 노출 케이스)
- Organism-SB: section mockup slot + 본문 표 4 col (no / Component ID / 명 / 설명)

---

## 8. 자동 생성 플로우

### 8.1 Flow A — SPEC_INPUT → Screen-SB (현 단계 ✅ 구현)

```
SPEC_INPUT.md → generate-sb.js → SB JSON (Screen-SB)
```

위치: `mockup/scripter/generate-sb.js`. 산출: `mockup/scripter/sb/<screenId>.sb.json`.

### 8.2 Flow B — SPEC_REPORT → Section-SB (TBD)

SPEC_REPORT § 1 (카탈로그 대조) + § 1.6 (상태 매트릭스) 결합 → Section-SB 자동 도출.

### 8.3 Flow C — component-specs → Organism-SB (TBD)

`mockup/component-specs/ogn/**/*.json` → Organism-SB 자동 도출. 거의 fully derive.

### 8.4 Flow D — SB JSON → Figma SB 인스턴스 (TBD)

마스터 nodeId clone + props 매핑 (TalkToFigma MCP). description 태그 → row props.

### 8.5 Flow E — SB JSON → SB HTML (TBD)

`mockup/sb-doc/NOVA-MBR-PG-*.html` 양식 템플릿화 + 데이터 주입. 개발자 핸드오프용.

---

## 9. TalkToFigma 핵심 도구

- `clone_node` — 마스터 컴포넌트 복제
- `set_multiple_text_contents` — 텍스트 일괄 교체
- `set_fill_color` — 텍스트/프레임 색상 보정 (notice 마킹 톤 등)
- `scan_text_nodes` — 텍스트 노드 탐색 (path 기반 매칭)
- `move_node` / `resize_node` — 위치·크기 조정

---

## 10. 마이그레이션 노트 (2026-05-01)

- 본 schema 는 사용자 제공 SB 양식 이미지 (Screen / Section / Organism 3 장) 를 source-of-truth 로 함.
- 이전 단일 layer schema (Areas 만 있는 양식) → 3 layer 로 확장.
- 현재 `mockup/scripter/generate-sb.js` 산출물은 Screen-SB 일부만 채움 — § 3.3 source 매핑 표의 자동 도출 가능 부분은 완료, 나머지 (organismIds / displayCondition / displayCases / 서버 제어 / 우선순위 / 오류 처리) 는 SPEC_REPORT 분석 단계 보강 또는 placeholder 유지.
- 다음 보강 후보 순서:
  1. Screen-SB 누락 필드 placeholder 추가 (generate-sb.js)
  2. Organism-SB 자동 생성 (component-specs JSON 입력)
  3. Section-SB 자동 생성 (SPEC_REPORT 분석 결과 입력)
  4. Flow D (Figma 인스턴스 생성) 또는 Flow E (HTML 변환)
  5. description row variant 마스터 컴포넌트 정의 (mockup component-specs 안 sb/* 카테고리)
