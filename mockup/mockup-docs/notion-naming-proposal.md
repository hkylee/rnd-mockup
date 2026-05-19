# Notion 컴포넌트 DB 네이밍 교정 제안서

> 작성일: 2026-04-24
> 대상 DB: Next Channel Wiki > 컴포넌트 ([data source](https://www.notion.so/ff7de7542a4882979aea87b9444d1e37))
> 맥락: 기능 내역서(SPEC-PRDD-01~16, "상품상세_case1_단독상품" 화면)에 연결된 14개 컴포넌트 행을 현재 디자인 시스템 코드(`component-specs/`) 및 CLAUDE.md · [docs/CONVENTIONS.md](CONVENTIONS.md) 의 네이밍 규칙과 정합시키기 위함.

---

## 요약

| 유형 | 대상 수 |
|---|---|
| 단순 오타 | 1 |
| 레거시 prefix (`mlc/` → `mol/`) | 2 |
| 공백 → 하이픈 | 1 |
| 괄호 표기 → variant 축 (2행 병합) | 2 |
| **합계 교정 필요** | **6 행** |
| **병합 후 행 수** | 14 → 13 |

추가로 `btn` vs `button` 축약·풀네임 방향 **결정 필요 1건**, 스펙 리뷰 **확인 1건**.

---

## 1. 단순 오타

| 현재 | 제안 | 페이지 | 근거 |
|---|---|---|---|
| `atom/thumnail` | `atom/thumbnail` | [링크](https://www.notion.so/atom-thumnail-becde7542a4882a9b70f81e843db36ae) | 철자 오류 (thumb+nail) |

**코멘트 문안**

> `thumnail` 은 `thumbnail` 오타로 보입니다. 또한 현재 디자인 시스템에는 축약형 `atom/thumb` + `atom/thumb-portrait` 가 이미 구현되어 있습니다(세로/정사각 2 variant). 네이밍 통일 방향을 `atom/thumbnail` (풀 네임) vs `atom/thumb` (축약) 중 택일해서 통일 제안드립니다.

---

## 2. 레거시 prefix — `mlc/` → `mol/`

| 현재 | 제안 | 페이지 |
|---|---|---|
| `mlc/card` | `mol/card` | [링크](https://www.notion.so/mlc-card-649de7542a48831492010162486f887f) |
| `mlc/list` | `mol/list` | [링크](https://www.notion.so/mlc-list-707de7542a48824293a801e8dffff785) |

**근거**

Atomic Design 표준에서 Molecule 의 축약은 **`mol`** 입니다. `mlc` 는 과거 사용하던 네이밍이며 현재 DS 코드 베이스([component-specs/mol/](../component-specs/mol/))와 문서([CONVENTIONS](CONVENTIONS.md))는 모두 `mol/` 로 통일되어 있습니다.

**코멘트 문안**

> `mlc/` prefix 는 과거 네이밍이며, 현재 디자인 시스템(`component-specs/mol/*`) 및 CLAUDE.md · docs/CONVENTIONS.md 는 **`mol/`** 로 통일되어 있습니다. 혼동 방지를 위해 `mol/card`, `mol/list` 로 교정 부탁드립니다.

---

## 3. 구분자 (공백 → 하이픈)

| 현재 | 제안 | 페이지 |
|---|---|---|
| `ogn/sticky footer` | `ogn/sticky-footer` | [링크](https://www.notion.so/ogn-sticky-footer-524de7542a4882efb8ef01bba9310cfa) |

**근거**

- Figma Assets 패널은 `/` 기반 폴더링을 하며, 공백을 포함한 이름은 처리 규칙이 모호합니다.
- 기존 DS 의 다른 `ogn/*` 들(`ogn/tab-bar`, `ogn/status-bar`)은 모두 하이픈 사용 중.

**코멘트 문안**

> 컴포넌트 이름의 공백은 Figma Assets 패널 폴더링에 문제를 줄 수 있습니다. 기존 DS 의 `ogn/tab-bar`, `ogn/status-bar` 와 같이 **하이픈** 으로 변경 요청드립니다.

---

## 4. 괄호 표기 → variant 축 (2행 병합)

| 현재 | 제안 |
|---|---|
| `atom/button(primary)` ([링크](https://www.notion.so/atom-button-primary-fc6de7542a488378adb681235d82481a)) + `atom/button(secondary/ghost)` ([링크](https://www.notion.so/atom-button-secondary-ghost-e7dde7542a48838fa565811220af4fd3)) | **하나의 `atom/button`** 로 병합, variant 축 `type = primary \| secondary \| ghost` 로 표현 |

**근거**

1. Figma Component Property 로 단일 Component 안에서 variant 전환이 표준 패턴
2. 현재 DS 의 `atom/btn` 이 이미 이 구조 (9 variants: `type × state`)
3. 괄호 네이밍은 variant 축 모델을 파일명에 하드코딩하는 안티패턴 (axis 추가 시 이름이 계속 길어짐)

**병합 후 속성 예시**

```
name: atom/button
variants:
  type:  [primary, secondary, ghost]
  state: [default, pressed, disabled]
```

**코멘트 문안**

> 버튼의 `type`(primary/secondary/ghost) 은 별도 컴포넌트가 아닌 **variant 축** 으로 다루는 것이 표준입니다. 두 행을 하나의 `atom/button` 으로 합치고, 설명에 `type=primary | secondary | ghost` + `state=default | pressed | disabled` 같은 variant 축을 기입하는 방식을 제안드립니다. Figma 에서 단일 Component 의 Property 로 노출되어 쓰는 쪽에서 자연스럽게 스위칭할 수 있습니다.

---

## 5. 결정 필요 — 축약 vs 풀네임 (`btn` vs `button`)

| 현재 코드 · CLAUDE.md | 현재 Notion |
|---|---|
| `atom/btn` (축약) | `atom/button` (풀네임) |

### 옵션

- **A. Notion 을 `atom/btn` 으로 교정** — 코드 · CLAUDE.md 와 일치, 짧음, 추가 작업 없음
- **B. 코드 · CLAUDE.md 를 `atom/button` 으로 리네임** — 더 표준적 · 가독성 ↑, 단 Figma 재생성 cascade 발생 (`atom/btn` 을 참조하는 mol/ogn 다수 - `mol/list-item-movie`, `mol/list-item-coupon`, `ogn/MYBEN/card-points` 등)

### 권장

**옵션 A** — 현 DS 가 `atom/btn` 기준으로 이미 9 variants + 다수 참조되어 있어 변경 비용이 큼. Notion 쪽 이름만 맞추는 쪽이 경제적.

---

## 6. 추가 확인 사항 (교정은 아님, 스펙 리뷰)

### PRDD-02 "상품 기본 정보 노출" 에 `atom/text-area` 가 걸려있음

[SPEC-PRDD-02 페이지](https://www.notion.so/SPEC-PRDD-02-908de7542a4883fdb7690124241a61a6)

**문제**

- `atom/text-area` 는 "멀티라인 **입력**" (카테고리 · Input & Form)
- PRDD-02 는 상품 정보 **노출**(읽기 전용) 기능

**의문**

상품 설명 본문 텍스트 블록을 입력 컴포넌트로 오분류한 것은 아닌지? 작성자 확인 권장. 읽기 전용이라면 별도 `atom/text` (표시 전용 멀티라인) 를 추가하거나 기존 텍스트 노드로 처리.

---

## 교정 후 최종 14 → 13 컴포넌트

| # | 최종 이름 | 카테고리 |
|---|---|---|
| 1 | `atom/button` (type×state variants) | Action |
| 2 | `atom/iconbutton` | Action |
| 3 | `atom/thumbnail` (또는 `atom/thumb`) | Data Display |
| 4 | `atom/tag` | Data Display |
| 5 | `atom/text-area` (확인 필요) | Input & Form |
| 6 | `atom/tooltip` | Data Display |
| 7 | `atom/accordion` | Data Display |
| 8 | `atom/banner` | Data Display |
| 9 | `mol/card` | Data Display |
| 10 | `mol/list` | Data Display |
| 11 | `ogn/tab` | Navigation |
| 12 | `ogn/snack-bar` | Feedback & Status |
| 13 | `ogn/sticky-footer` | Action |

(※ `atom/button` 병합으로 14 → 13)

---

## 다음 단계

1. 본 문서 검토 → 반영 방향 합의
2. 2, 3, 4, 5번 결정 사항 정리 후 Notion DB 업데이트 (수동 또는 자동 코멘트)
3. 교정 완료되면 **신규 atom 6종 + mol 2종 + ogn 3종** 스펙 작성 시작
   - cascade 순서: atom → mol → ogn
