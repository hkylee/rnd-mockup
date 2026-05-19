# INTERACTION_TAGS — 인터랙션 정형 태그 (Draft v2)

> SPEC_INPUT.md 의 화면 sketch 또는 별도 `### 액션` 섹션에 표준 태그로 인터랙션을 명시하면, `generate-sb.js` 가 SB JSON 의 `interactions` 필드로 자동 추출. web 측 React 미러링 (`/pages`) 이 그 필드를 읽어 인터랙션 자동 구현 (장기적으로 풀 프로토타입핑).
>
> 자유 텍스트 (`[다음] disabled` 등) 보다 **정형 태그** 가 source of truth.

---

## 1. 표준 태그 (8종)

### 핵심 4종 — 인터랙션 / 상태

| 태그 | 형식 | 용도 |
|---|---|---|
| `[tap]` | `[tap] [<선택자>] → <action>` | 클릭/탭 액션 (navigate / back / bottom-sheet / modal / toggle) |
| `[interactive]` | `[interactive] <id>: <type>` | 컴포넌트 인터랙션 타입 (toggle / all-toggle / radio-group) |
| `[sync]` | `[sync] <parent>: [<child1>, <child2>, ...]` | 부모 ↔ 자식 동기화 |
| `[enabled]` | `[enabled] [<선택자>] if <condition>` | 활성 조건 직접 표기 (조건 충족 시 활성, 그 외 disabled) |

### 시나리오 4종 — 상태/로딩/모달/네비

| 태그 | 형식 | 용도 |
|---|---|---|
| `[state]` | `[state] <name>: <when>` | 화면/영역의 상태 (default / loading / empty / error / success) — 시각 분기 |
| `[loading]` | `[loading] <selector>: <type>` | 로딩 표시 (full-screen / inline / skeleton) |
| `[modal]` | `[modal] <id>: <kind>` | 모달/BottomSheet 정의 (kind: bottom-sheet / dialog / toast) |
| `[nav]` | `[nav] <selector> → <target>` | GNB / tab-bar 의 메뉴 → 외부 page (메인 흐름 외) |

---

## 2. 핵심 4종 상세

### `[tap]` — 클릭/탭

```
[tap] [<선택자>] → <action>
```

| `<action>` | 의미 |
|---|---|
| `navigate:<page slug>` | 다음 page 라우팅 |
| `back` | 이전 page 라우팅 |
| `bottom-sheet:<id>` | BottomSheet 열기 (id 는 `[modal]` 정의의 id) |
| `modal:<id>` | Dialog 모달 열기 |
| `toggle` | 자기 토글 (예: accordion 펼치기) |
| `submit` | 폼 submit (loading 후 navigate) |

### `[interactive]`

| `<type>` | 의미 |
|---|---|
| `toggle` | 단일 토글 (체크박스, 라디오, switch) |
| `all-toggle` | 전체선택 + 하위 sync |
| `radio-group` | 라디오 그룹 (자식 중 하나만) |

### `[sync]`

`[interactive] X: all-toggle` 또는 `radio-group` 와 짝.

### `[enabled]` (이전 [disabled] → 활성 조건 직접 표기로 변경)

```
[enabled] [<선택자>] if <condition>
```

| `<condition>` | 활성 조건 |
|---|---|
| `<id>` | state true 시 |
| `<id1> && <id2>` | 모든 state true 시 |
| `<id1> \|\| <id2>` | 하나라도 true |
| `<id> === "<value>"` | radio-group 시 특정 값 선택 |

**예**:
```
[enabled] [다음] if confirm-check
[enabled] [완료] if (term-required-1 && term-required-2)
[enabled] [다음] if reason-radio
```

---

## 3. 시나리오 4종 상세

### `[state]` — 화면/영역 상태

```
[state] <name>: <when>
```

| `<name>` | `<when>` 예 |
|---|---|
| `default` | (생략 — base) |
| `loading` | `polling` / `submit-pending` / `initial-fetch` |
| `empty` | `no-data` / `filter-empty` |
| `error` | `network-fail` / `validation-fail` |
| `success` | `submit-done` |

**예**:
```
[state] loading: submit-pending     # 다음 클릭 후 처리 중
[state] empty: no-asset             # 자산 list 비어있을 때
[state] error: network-fail
```

### `[loading]` — 로딩 시각

```
[loading] <selector>: <type>
```

| `<type>` | 의미 |
|---|---|
| `full-screen` | 페이지 전체 spinner / loading 화면 (별도 page 가 처리할 수도) |
| `inline` | 컴포넌트 내 spinner (button 안 등) |
| `skeleton` | placeholder skeleton |
| `progress` | progress bar |

**예**:
```
[loading] page: full-screen
[loading] [다음]: inline
[loading] result-list: skeleton
```

### `[modal]` — 모달 정의

```
[modal] <id>: <kind>
```

| `<kind>` | 의미 |
|---|---|
| `bottom-sheet` | 하단 sheet (탈퇴 차단 안내 등) |
| `dialog` | 중앙 dialog |
| `toast` | 일시 알림 |

**예**:
```
[modal] cannot-leave: bottom-sheet
[modal] confirm-leave: dialog
[modal] saved: toast
```

→ `[tap] [취소] → bottom-sheet:cannot-leave` 처럼 trigger.

### `[nav]` — GNB / tab-bar 메뉴 → page

GNB / tab-bar 의 각 아이콘 / 탭이 어느 page 로 가는지.

```
[nav] <selector> → <page slug>
```

**예** (page/MYBEN/main 의 GNB):
```
[nav] gnb.menu → page/MY/menu
[nav] gnb.qr-scan → page/SCAN/main
[nav] gnb.bag → page/SHOP/cart
[nav] tab-bar.home → page/MYBEN/main
[nav] tab-bar.search → page/SCH/search
[nav] tab-bar.bag → page/SHOP/cart
```

→ 모든 메뉴가 정의된 page 로. 정의 안 한 메뉴는 무동작.

---

## 4. 화면별 작성 예시

### 단순 — leave-impact

```markdown
## 화면 3: page/MBR/leave-impact

### 액션
- [interactive] confirm-check: toggle
- [tap] [<] → back
- [tap] [다음] → navigate:page/MBR/leave-confirm
- [enabled] [다음] if confirm-check
```

### 약관 동의 — dormant-terms

```markdown
## 화면 2: page/MBR/dormant-terms

### 액션
- [interactive] all-agree: all-toggle
- [sync] all-agree: [term-required-1, term-required-2, term-optional-1, term-optional-2]
- [interactive] term-required-1: toggle
- [interactive] term-required-2: toggle
- [interactive] term-optional-1: toggle
- [interactive] term-optional-2: toggle
- [tap] [<] → back
- [tap] [완료] → navigate:page/MBR/dormant-loading
- [enabled] [완료] if (term-required-1 && term-required-2)
```

### 라디오 — leave-reason

```markdown
## 화면 2: page/MBR/leave-reason

### 액션
- [interactive] reason-radio: radio-group
- [sync] reason-radio: [reason-1, reason-2, reason-3, reason-4, reason-other]
- [tap] [<] → back
- [tap] [다음] → navigate:page/MBR/leave-impact
- [enabled] [다음] if reason-radio
```

### 분기 — leave-auth (인증 실패 시 BottomSheet)

```markdown
## 화면 1: page/MBR/leave-auth

### 액션
- [interactive] auth-method: radio-group
- [sync] auth-method: [auth-pass, auth-sms]
- [tap] [<] → back
- [tap] [인증 시작] → submit
- [enabled] [인증 시작] if auth-method
- [state] loading: auth-pending      # 인증 진행 중 — 화면 잠금
- [state] error: auth-fail            # 실패 시 BottomSheet
- [modal] auth-fail-info: bottom-sheet
- [tap] (auth-fail trigger) → bottom-sheet:auth-fail-info
```

### Loading 화면 — leave-loading

```markdown
## 화면 4: page/MBR/leave-loading

### 액션
- [loading] page: full-screen
- [tap] (auto on done) → navigate:page/MBR/leave-complete
```

→ 사용자 액션 없음. BSS 처리 후 자동 다음 화면.

### GNB 라우팅 — page/MYBEN/main

```markdown
## 화면 1: page/MYBEN/main

### 액션
- [nav] gnb.menu → page/MY/menu
- [nav] gnb.qr-scan → page/SCAN/main
- [nav] gnb.bag → page/SHOP/cart
- [nav] tab-bar.home → page/MYBEN/main
- [nav] tab-bar.search → page/SCH/search
- [nav] tab-bar.bag → page/SHOP/cart
- [tap] [상세] → bottom-sheet:point-detail
- [modal] point-detail: bottom-sheet
```

### List dynamic — leave-impact 의 자산 카드

```markdown
## 화면 3: page/MBR/leave-impact

### 액션 (...)
- [list] impact-list: dynamic
- [state] empty: no-asset       # impact-list 비어있을 때
- [state] error: fetch-fail
```

`impact-list` 가 이름. 안 자식 N 개는 server data. dynamic count 는 자동 추론 안 함 — list 자체가 1 단위.

---

## 5. SB JSON 출력 형식

위 인라인 태그 → SB JSON 의 page-level `interactions` 필드:

```json
{
  "screenId": "MBR-LEAVE-IMPACT",
  "areas": [...],
  "interactions": {
    "states": {
      "confirm-check": { "type": "toggle", "default": false }
    },
    "actions": [
      { "trigger": "tap", "selector": "[다음]", "action": "navigate", "target": "page/MBR/leave-confirm" },
      { "trigger": "tap", "selector": "[<]", "action": "back" }
    ],
    "enabled": [
      { "selector": "[다음]", "condition": "confirm-check" }
    ],
    "states_extra": {
      "loading": "submit-pending",
      "empty": "no-asset"
    },
    "modals": {},
    "nav": {}
  }
}
```

web 측 `build-interactions.mjs` 가 이걸 읽어 `page-interactions.auto.json` 자동 생성.

---

## 6. 우선순위

```
specs-input 의 인라인 태그 (수동, 정형)
    ↓ generate-sb.js
SB JSON 의 interactions
    ↓ build-interactions.mjs
page-interactions.auto.json
    ↓ web 측 generator
React 컴포넌트 자동 생성

cf. spec walk 자동 추론 — 인라인 태그 없으면 fallback
cf. page-interactions.json — 마지막 수동 override (자동 부정확 시)
```

---

## 7. 작성자 가이드

### 우선 작성

- **체크박스/라디오 가 있는 화면** — 자동 추론 만으론 condition 부정확 → 인라인 태그 필수
- **분기 (BottomSheet, dialog)** — `[modal]` + `[tap] → bottom-sheet:<id>`
- **로딩 화면** — `[loading] page: full-screen` + `[tap] (auto on done) → navigate:...`
- **첫 진입 (홈) 화면** — GNB/tab-bar 라우팅 정의 (`[nav]`)

### 생략 가능

- **단순 next-only page** — auth / loading / complete 류 (인터랙션 없거나 자동) — 자동 추론 충분

---

## 8. 미해결 (다음 단계)

- **state 별 시각 자동 변환** — `[state] loading` 시 어떤 시각? skeleton 가져올지 / loading wrapper 어떻게?
- **modal trigger 자동 매핑** — `bottom-sheet:<id>` 클릭 시 BottomSheet 컴포넌트 자동 생성?
- **submit + auto-next** — loading 화면 후 다음 화면으로 자동 (timeout 또는 polling 시뮬레이션)
- **list 안 동적 자식** — server data 가정 시 더미 N 개로 시각화

→ 향후 프로토타입핑 단계에서 순차 보강.
