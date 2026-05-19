# Atomic Design 분류 가이드라인

> 이 문서는 `component-specs/` 안의 모든 컴포넌트가 어떤 기준으로 atom / mol / ogn 에 속하는지 정의합니다.
> 새 컴포넌트 추가 시, 또는 기존 분류가 의심스러울 때 이 문서를 먼저 확인하세요.

---

## 핵심 판단 기준: Spec 안의 `kind: "ref"` 존재 여부

분류의 1차 기준은 **다른 컴포넌트를 참조(ref)하는가** 입니다.

| 단계 | ref 구성 | 화면 역할 |
|---|---|---|
| **atom** | 외부 ref 없음 (또는 아이콘 슬롯 1개만) | 단일 UI 요소 |
| **mol** | atom ref 포함 | 패턴 단위 조합 |
| **ogn** | mol 또는 다수 atom ref 포함, 또는 화면 고정 구획 | 독립된 화면 구역 |

단, ref만으로 판단이 안 되는 경우는 아래 세부 기준을 사용하세요.

---

## ATOM — 더 이상 쪼갤 수 없는 단일 요소

### 조건 (모두 해당해야 함)
1. **다른 스펙 컴포넌트를 ref로 포함하지 않음** (아이콘 슬롯 단독 예외 — 아래 참고)
2. **하나의 설계 개념을 표현함** — 버튼, 체크박스, 배지, 칩, 라디오 등
3. **여러 화면에서 그 자체로 재사용 가능**

### 아이콘 슬롯 예외
버튼 안에 아이콘이 포함되더라도, 아이콘이 **항상 고정 구조의 일부**라면 atom 유지.
- `atom/btn-xsmall` (`.Ico` 포함) → **atom** ✓ — 아이콘이 버튼 구조의 일부
- `atom/chip-image` (`.Ico` 포함) → **atom** ✓ — 칩에 이미지 슬롯이 내장된 구조

단, 아이콘 + 독립적인 텍스트 레이블이 결합되어 *새로운 패턴*을 만들면 → **mol**

### 현재 atom 목록 (검수 대상)
| 컴포넌트 | ref | 판단 | 비고 |
|---|---|---|---|
| atom/badge | 없음 | ✅ atom | |
| atom/btn | 없음 | ✅ atom | |
| atom/btn-text | 없음 | ✅ atom | |
| atom/btn-xsmall | `.Ico` | ✅ atom | 아이콘 슬롯 예외 |
| atom/checkbox | 없음 | ✅ atom | |
| atom/chip | 없음 | ✅ atom | |
| atom/chip-image | `.Ico` | ✅ atom | 아이콘 슬롯 예외 |
| atom/divider | 없음 | ✅ atom | |
| atom/icon | `.Ico/교체용` | ✅ atom | 자기 자신 플레이스홀더 |
| atom/payment-logo | 없음 | ✅ atom | |
| atom/pin | 없음 | ✅ atom | |
| atom/radio | 없음 | ✅ atom | |
| atom/tab-item | 없음 | ✅ atom | |

---

## MOL (Molecule) — Atom을 조합한 패턴 단위

### 조건 (하나 이상 해당)
1. **atom ref를 1개 이상 포함**하며, 그 조합이 하나의 의미 있는 패턴을 형성
2. **반복 사용되는 레이아웃 패턴** — 리스트 행, 카드 아이템, 라디오+텍스트 조합 등
3. 화면 전체 구획을 차지하지 않음 (그러면 ogn)

### ⚠️ ref가 없는데 mol로 분류된 케이스 (재검토 필요)

현재 ref가 없지만 mol로 분류된 컴포넌트들입니다. 아래 중 어느 기준에 해당하는지 검수해주세요.

| 컴포넌트 | ref | 현재 | 재분류 제안 | 근거 |
|---|---|---|---|---|
| mol/thumb-item | 없음 | mol | **→ atom** | 단일 썸네일 이미지 요소. 조합 없음 |
| mol/action-button | 없음 | mol | **→ atom** | 단일 CTA 버튼 영역. 내부 구조는 그룹이지만 ref 없음 |
| mol/card-contents-line | 없음 | mol | **→ atom?** | 라인형 카드 콘텐츠. 내부 복잡도 확인 필요 |
| mol/option-list-item | 없음 | mol | **→ atom?** | 옵션 아이템 단일 행. 내부 복잡도 확인 필요 |
| mol/tooltip | 없음 | mol | **→ atom** | 단일 말풍선 요소. 조합 없음 |

> **판단 기준**: ref가 없어도 내부 구조가 "atom 여러 개가 조합된 것처럼 동작하는 복합 레이아웃"이면 mol 유지 가능. 단일 덩어리면 atom으로 내리는 것이 맞음.

### mol이 mol을 ref하는 경우
`mol/carousel-product-text` 처럼 다른 mol을 ref하는 경우 — **mol 유지** 가능. ogn으로 올릴 기준은 "화면 구획 점유 여부"이지 "mol을 포함하는가"가 아님.

### 현재 mol 목록 (검수 대상)
| 컴포넌트 | ref | 판단 | 비고 |
|---|---|---|---|
| mol/action-button | 없음 | ⚠️ atom 검토 | |
| mol/badge-icon | `.Ico` | ✅ mol | 아이콘+배지 조합 |
| mol/banner-horizontal | `.Indicator` | ✅ mol | |
| mol/card-contents-line | 없음 | ⚠️ atom 검토 | |
| mol/card-info | `.CardText` `.ThumbnailLogoItem` | ✅ mol | (ref가 미등록 컴포넌트지만 조합 의도 명확) |
| mol/card-item | `.Button` `.ThumbnailItem` | ✅ mol | |
| mol/card-summary | `.Button` | ✅ mol | |
| mol/carousel-product-text | `.BadgeIcon` `.ThumbnailItem` 등 | ✅ mol | mol 포함이지만 화면 구획 아님 |
| mol/checkbox-text | `.CheckboxItem` | ✅ mol | |
| mol/info-text-list | `.Badge` | ✅ mol | |
| mol/list-selected | `.RadioText` `.ListSelectedRightItem` | ✅ mol | |
| mol/list-text | `.RightItem` | ✅ mol | |
| mol/option-list-item | 없음 | ⚠️ atom 검토 | |
| mol/popup-action-btn | `.Button` | ✅ mol | |
| mol/radio-text | `.RadioItem` | ✅ mol | |
| mol/thumb-item | 없음 | ⚠️ atom 검토 | |
| mol/title-bottomsheet | `.Ico` | ✅ mol | 아이콘+제목 패턴 |
| mol/title-contents | `.TitleContentsRightItem` | ✅ mol | |
| mol/title-main | `.ChipImageItem` | ✅ mol | |
| mol/tooltip | 없음 | ⚠️ atom 검토 | |

---

## OGN (Organism) — 독립적인 화면 구역

### 조건 (하나 이상 해당)
1. **화면의 고정 구획을 점유** — 상단 바, 하단 네비, 검색 바, 탭 바, 풋터, 바텀시트 등
2. **여러 mol/atom을 포함하며 그 자체로 화면 한 섹션**을 구성
3. **인프라적 역할** — 페이지 구조에 항상 등장하는 틀

### ⚠️ ref가 없는데 ogn으로 분류된 케이스

| 컴포넌트 | ref | 현재 | 재분류 제안 | 근거 |
|---|---|---|---|---|
| ogn/footer | 없음 | ogn | **→ ogn 유지?** | 화면 하단 고정 구획이므로 역할 기준으로 ogn 가능. 내부 복잡도 확인 필요 |
| ogn/tab | 없음 | ogn | **→ ogn 유지?** | 탭 바는 화면 구획 역할. 단 `atom/tab-item` 을 ref해야 맞음 — spec 수정 필요 |

### atom ref만 있는 ogn (mol 검토 필요)
아래는 `.Ico` 하나만 ref하며 ogn으로 분류된 케이스입니다.

| 컴포넌트 | ref | 현재 | 재분류 제안 | 근거 |
|---|---|---|---|---|
| ogn/app-bar | `.Ico` | ogn | **→ ogn 유지** | 화면 상단 고정 구획 — 역할 기준 |
| ogn/accordion-notice | `.Ico` | ogn | **→ ogn 유지** | 섹션 단위 아코디언 — 역할 기준 |
| ogn/accordion-price | `.Ico` | ogn | **→ ogn 유지** | 동일 |
| ogn/search-bar | `.Ico` | ogn | **→ ogn 유지** | 검색 입력 구획 — 역할 기준 |
| ogn/bottom-nav | `.Ico` | ogn | **→ ogn 유지** | 하단 네비 고정 구획 |

### 현재 ogn 목록 (검수 대상)
| 컴포넌트 | ref | 판단 | 비고 |
|---|---|---|---|
| ogn/accordion-notice | `.Ico` | ✅ ogn | 구획 역할 |
| ogn/accordion-price | `.Ico` | ✅ ogn | |
| ogn/accordion-product | `.Ico` `.ThumbnailLogoItem` | ✅ ogn | |
| ogn/app-bar | `.Ico` | ✅ ogn | 상단 바 |
| ogn/bottom-nav | `.Ico` | ✅ ogn | 하단 네비 |
| ogn/bottomsheet | `.Handle` `.TitleBottomSheet` `ActionButton` | ✅ ogn | |
| ogn/card-section | `.CardSectionTitle` `Local_CardContents` | ✅ ogn | |
| ogn/footer | 없음 | ⚠️ 내부 확인 필요 | ref 없지만 역할은 ogn |
| ogn/option-list | `.OptionListItem` | ✅ ogn | 목록 구획 |
| ogn/pagestack | `TitleSection` | ✅ ogn | |
| ogn/pay-product-item | `.ButtonTextUnderline` `.ThumbnailItem` | ✅ ogn | |
| ogn/search-bar | `.Ico` | ✅ ogn | 검색 구획 |
| ogn/status-bar | `_StatusBar-time` | ✅ ogn | 시스템 상단 바 |
| ogn/tab | 없음 | ⚠️ atom/tab-item ref 추가 필요 | |
| ogn/text-field | `Label` `TextFieldDefault` | ✅ ogn | |
| ogn/thumbnail | `.Indicator` | ✅ ogn | |

---

## 분류 판단 플로우

```
새 컴포넌트를 추가하려 한다
        │
        ▼
   ref가 있는가?
   ┌────┴────┐
  없음      있음
   │         │
   ▼         ▼
단일 개념?  mol/ogn ref 포함?
  Yes→atom  ┌───┴───┐
  No↓      No      Yes
   ▼        │       │
복합 레이아웃  ▼       ▼
이지만 ref없음 atom ref만  화면 구획 점유?
→ atom or mol  → mol    ┌───┴───┐
(내부 구조로 판단)       No     Yes
                        mol    ogn
```

**화면 구획 점유** 판단 기준: 해당 컴포넌트가 화면에 단독으로 올라가서 하나의 섹션/구역을 완성하는가?
- 앱 바, 탭 바, 바텀 네비, 검색 바, 아코디언, 바텀시트 → **ogn**
- 리스트 행, 카드 아이템, 제목+버튼 조합 → **mol**

---

## 검수 요청 사항

아래 5개 컴포넌트의 최종 분류를 결정해주세요.

| # | 컴포넌트 | 현재 | 제안 | 확인 포인트 |
|---|---|---|---|---|
| 1 | mol/thumb-item | mol | **atom** | 단순 이미지 요소인지, 아니면 텍스트 등과 조합 구조인지 |
| 2 | mol/action-button | mol | **atom** | 내부가 복합 패턴인지, 단순 버튼 영역인지 |
| 3 | mol/card-contents-line | mol | **atom?** | 내부 구조 복잡도 직접 확인 필요 |
| 4 | mol/option-list-item | mol | **atom?** | 단일 선택지 행인지, 복합 조합인지 |
| 5 | mol/tooltip | mol | **atom** | 단일 말풍선 — ref 없음 |
| 6 | ogn/tab | ogn | **ogn 유지** | 단, spec에 `atom/tab-item` ref 추가 권장 |
| 7 | ogn/footer | ogn | **ogn 유지?** | 내부 구조 직접 확인 필요 |
