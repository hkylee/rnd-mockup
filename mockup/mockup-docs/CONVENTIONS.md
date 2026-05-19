# Conventions

네이밍 규칙 · 스펙 JSON 스키마 · 토큰 참조 문법 · DS 구조.

---

## 1. 네이밍 규칙

### 계층 prefix

| prefix | 의미 | 위치 (Figma 페이지) |
|---|---|---|
| `atom/` | 원자 (버튼, 텍스트, 아이콘 등 더 이상 쪼갤 수 없는 단위) | **Atom** |
| `mol/` | 분자 (atom 조합, 자체 의미 있는 작은 단위) | **Molecule** |
| `ogn/` | 유기체 (독립적 역할, 완결된 UI 블럭) | **Organism** |

`mlc/` 는 과거 오타/잘못된 이름. 쓰지 말 것.

**Component 는 페이지에 직접 배치됨** (섹션 프레임 wrapper 없음). Figma Assets 패널이 `/` 기반 자동 폴더링 처리.

### 전체 경로 패턴

```
atom/{name}
atom/{category}/{name}           (예: atom/icon/sparkle)

mol/{component}-{modifier}
mol/{component}-{modifier}/{variant}      (예: mol/card-product/hor)

ogn/{name}                       (공통 조직체)
ogn/{MODULE-CODE}/{component}
ogn/{MODULE-CODE}/{component}/{variant}   (모듈 종속 조직체)
```

### 조합 원칙

- **`{component}-{modifier}` 순서** — component type 이 먼저, modifier 가 뒤. 예시:
  - ✓ `card-product`, `card-header`, `card-personal`
  - ✓ `list-item`, `coupon-item`
  - ✓ `data-row`, `price-row`, `action-row` (row 가 component type, 관용 표현 유지)
  - ✗ `product-card`, `personal-card` (지양)

- **variant (상태/방향) 는 슬래시 다음 레벨**:
  - `mol/card-product/hor` (horizontal)
  - `mol/card-product/ver` (vertical)

### Module code

모듈 종속 organism 의 `{MODULE-CODE}` 는 Notion "모듈 정의서" DB 의 module-code 값 사용. 예:

| Code | 의미 |
|---|---|
| MYBEN | 내 혜택 |
| BEN | 멤버십 혜택 |
| MYCPN | 내 쿠폰 |
| TPNT | T 플러스 포인트 |
| PRDL | 상품 목록 |
| CPN | 외부 쿠폰 |
| ... | (49개) |

**module-code 판단 기준**: 이 조직체가 **특정 모듈에만 종속**되면 붙이고, 여러 모듈에서 재사용되면 (예: `ogn/header`, `ogn/GNB`) 붙이지 않음.

현재 프로젝트는 "MYBEN 통일 전략" (처음엔 크게 묶고 나중에 필요하면 세분화) — 프로젝트 진행에 따라 재검토.

### 중립 이름 우선 원칙 ⭐

**`atom/` · `mol/` 의 이름은 도메인 종속 단어를 피하고 중립 이름 우선**. ogn 의 module-code 자리만 도메인 명시 허용.

| ✅ 중립 (재사용 ↑) | ❌ 도메인 종속 (재사용 ↓) |
|---|---|
| `mol/list-item` | `mol/list-item-coupon` / `mol/list-item-movie` (도메인 흡수 후 deprecated) |
| `mol/checkbox-item` | `mol/list-item-terms` / `mol/agreement-row` (도메인 흡수 후 deprecated) |
| `mol/info-row` / `mol/info-stack` | `mol/restriction-info` / `mol/notice-details` |
| `mol/card-info` | `mol/card-info-brand` / `mol/card-info-product` |

**왜 중립 우선**:
- 같은 시각 구조가 다른 도메인 (약관·쿠폰·영화·상품) 에서 재사용 가능 → 카탈로그 비대 ↓
- AI 가 새 화면 만들 때 "이 도메인용 mol 만들지 vs 기존 중립 mol 재사용" 헷갈림 ↓
- 도메인 차이는 props (label / icon path / variant 축) 으로 표현 — mol 이름이 아니라

**도메인 종속이 정당한 경우** (예외):
- `ogn/{MODULE}/{name}` — module-code 자리는 도메인 명시 허용 (네이밍 규칙 자체)
- atom/icon/{name} — 아이콘은 본질적으로 의미 단위 (sparkle / heart / chevron-left 등)
- 도메인 의미가 진짜 새로워서 중립 mol 로 흡수 불가능한 경우 (검토 후 명시)

**rename 가이드**:
- 도메인 종속 mol/atom 발견 시 → AUDIT_RULES § 1 의 rename 표 참조 → 중립 mol 흡수 가능한지 1차 검토
- analyze-spec / generate-spec API 가 자동 적용 (시스템 프롬프트에 "의미 매칭 우선" 룰 박힘)

---

## 2. Atom 줄임말 표준

자주 쓰는 atom 은 통용 줄임말 사용. moderate 레벨:

| 풀네임 | 줄임말 |
|---|---|
| button | **btn** |
| text | **txt** |
| icon-container | **icon-ctr** |
| thumbnail | **thumb** |
| progress-bar | **progress** |
| text-area | **textarea** |

나머지는 풀네임 유지: `icon`, `badge`, `chip`, `divider`, `barcode`, `banner`, `link`, `skeleton`.

---

## 3. 토큰 참조 문법

### DTCG 네이티브 형식

```jsonc
"{foundation.color.purple.500}"                 // alias
"{semantic.color.brand.primary}"                // semantic alias
"{component.button.primary.background}"         // component preset
```

- **중괄호 + 점 경로**
- `skt-design-system.json` 에 존재하는 path 만 허용
- 값은 재귀적으로 chain 해결됨 (component → semantic → foundation → raw)
- **raw 값 직접 쓰지 말 것** (`#3617CE`, `16px` 등) — DS 드리프트 원인

### 허용 값 형식

| 타입 | 예시 | 해석 |
|---|---|---|
| hex color | `#3617ce`, `#fff` | RGB 0-1 정규화 |
| pixel | `"16px"`, `"52px"` | number |
| millisec | `"150ms"` | number |
| percent | `"120%"` | lineHeight 에서 PERCENT unit 으로 변환 |
| DTCG alias | `"{a.b.c}"` | 재귀 해결 |

### 복합 토큰 (composite)

- **shadow**: `{x, y, blur, spread, color, alpha}` — Figma DropShadow Effect 로 변환
- **typography**: `{fontSize, lineHeight, fontWeight, letterSpacing}` — 텍스트 속성별로 분할 적용 + 개별 Variable 바인딩

### 필드 ↔ 토큰 type 매칭 (필수)

DS 토큰은 각자 `type` 을 가짐 (color / dimension / shadow / typography / fontSize / lineHeight / fontWeight / letterSpacing 등). spec 에서 토큰을 참조할 때 **그 필드가 기대하는 type 과 토큰 type 이 일치해야 함**. 어긋나면 generator 가 resolve 후 잘못된 타입으로 처리 → Figma API 호출 시 TypeError (예: `cannot read property 'rgb' of undefined`).

| 필드 | 허용 토큰 type |
|---|---|
| `fill`, `stroke`, `background`, `color`, `border`, `divider`, `text`, `iconColor` | **color** |
| `shadow` | **shadow** |
| `cornerRadius`, `radius`, `width`, `height`, `minHeight`, `paddingTop/Bottom/Left/Right`, `paddingHorizontal`, `paddingVertical`, `padding`, `itemSpacing`, `gap`, `size`, `iconSize` | **dimension** |
| `textStyle` | **typography** |
| `fontSize` / `lineHeight` / `fontWeight` / `letterSpacing` | 같은 이름의 type |

`web/` 의 generate-spec API 는 이 매핑을 server-side 에서 자동 검증 (`web/src/lib/ds-tokens.ts::validateSpecTokens`). 위반 시 Scripter 실행 전 사용자에게 confirm 으로 알림.

### 3.x icon-registry 의 color 필드

[`mockup/scripter/icon-registry.json`](../scripter/icon-registry.json) 의 각 항목에 `color` 필드 명시 가능. SVG fill 색을 어떤 토큰에 바인딩할지 결정.

```jsonc
[
  { "name": "atom/icon/menu",       "svg": "Normal/menu.svg" },
  // color 미명시 → bundle.js 의 ICON_DEFAULT_COLOR ("semantic.color.icon.default", 검정) 사용

  { "name": "atom/icon/sparkle",    "svg": "Normal/sparkle.svg",     "color": "semantic.color.brand.primary" },
  { "name": "atom/icon/home-fill",  "svg": "Normal/homeFill.svg",    "color": "semantic.color.brand.primary" },
  // 명시 → 해당 토큰 (활성 탭·AI 강조용 brand 보라)
]
```

**현재 정책** (DP § 11 audit log, 2026-04-28):
- **default = `semantic.color.icon.default`** (gray.900, 거의 검정) — chrome / 비활성 / 일반 아이콘
- **brand 예외** = `sparkle` / `home-fill` / `bag-fill` (활성 탭·AI 강조)

신규 아이콘 추가 시 default (검정) 가 표준. brand 색이 필요한 케이스만 명시적으로 `color` 필드 추가.

---

## 4. DS 구조 (skt-design-system.json)

### 3-Tier

```
foundation/
  color/           원시 컬러 (purple 300/500/700, gray 0/50/..., red, green, orange)
  dimension/
    radius/        radius 스케일
    spacing/       간격 스케일 (xs/sm/md/lg/xl/2xl/3xl)
    size/          고정 크기 (icon-*, button-*, thumbnail-*, ...)
  typography/      fontSize / lineHeight / fontWeight / letterSpacing
  shadow/          sm/md/lg 그림자
  motion/          duration / easing

semantic/          foundation 에 의미 붙임 (alias)
  color/
    brand/         primary/light/dark/on-brand
    background/    default/subtle/overlay
    surface/       primary/secondary/tooltip
    text/          primary/strong/secondary/muted/brand/disabled/emphasis/...
    border/        default/subtle/focus/active
    state/         disabled-bg/pressed/hover-bg/selected-bg
    feedback/      error/success/warning/info
    icon/          각 container / on-gray / on-brand / ...
  typography/      hero-headline / card-title / card-header-label / body / button / sub-label / ...
  motion/          fast/base/slow/loading + easing

component/         semantic 을 특정 컴포넌트 공식으로 묶음 (preset)
  button/          primary/secondary/small
  card/            default/shopping-outer/shopping-inner
  chip/            default/selected/search
  badge/           default/emphasis/neutral
  input, search-bar, tab-bar, header, icon, tooltip, bottom-sheet, skeleton, progress, divider, banner, link, thumb, textarea, barcode, feedback, layout
```

### Variable 타입 매핑

| DS type | Figma Variable 타입 | 바인딩 대상 |
|---|---|---|
| `color` | **COLOR** | fill / stroke color |
| `dimension`, `fontSize`, `lineHeight`, `fontWeight`, `letterSpacing`, `duration` | **FLOAT** | padding, cornerRadius, itemSpacing, strokeWeight, width, height, fontSize, lineHeight, letterSpacing |
| `fontFamily` | **STRING** | 텍스트 fontFamily (Pretendard primary / Inter fallback 자동 매핑) |
| `cubicBezier` | **STRING** | (기록용) |
| `shadow`, `typography` (composite) | **미지원** | raw 값으로만. typography 는 내부 field 각각은 FLOAT/STRING 로 바인딩 가능 |

### Component 토큰 2-layer 패턴 (typography composite) ⭐

Component 자체 토큰 (`component.X.default.*`) 안에서 typography 를 다룰 때, 단일 composite alias 만 두면 **Figma Variable 패널에 component-level 로 안 보이고 foundation Variable 만 보임**. 이유: composite typography 는 Variable type 미지원 → primitive (fontSize/lineHeight/fontWeight/letterSpacing) 만 sync 됨.

→ Component-level Variable 로 binding 이 떨어지게 하려면 **2-layer**:
1. 중간 primitive 4개를 component scope 안에 명시 (foundation alias)
2. 그 4개를 묶는 composite typography 를 옆에 둠

```jsonc
"component.card.default": {
  "background": { "value": "{semantic.color.surface.primary}", "type": "color" },
  "radius":     { "value": "{foundation.dimension.radius.md}", "type": "dimension" },
  "padding":    { "value": "{foundation.dimension.spacing.2xl}", "type": "dimension" },
  "shadow":     { "value": "{foundation.shadow.sm}", "type": "shadow" },

  // ⭐ Layer 1: 중간 primitive (foundation alias) — 각자 Variable 로 sync
  "main-title": {
    "fontSize":      { "value": "{foundation.typography.fontSize.title}",         "type": "fontSize" },
    "lineHeight":    { "value": "{foundation.typography.lineHeight.120}",         "type": "lineHeight" },
    "fontWeight":    { "value": "{foundation.typography.fontWeight.bold}",        "type": "fontWeight" },
    "letterSpacing": { "value": "{foundation.typography.letterSpacing.tight-md}", "type": "letterSpacing" }
  },
  // ⭐ Layer 2: composite — 위 primitive 를 참조 (component-level binding 보장)
  "main-titleStyle": {
    "value": {
      "fontSize":      "{component.card.default.main-title.fontSize}",
      "lineHeight":    "{component.card.default.main-title.lineHeight}",
      "fontWeight":    "{component.card.default.main-title.fontWeight}",
      "letterSpacing": "{component.card.default.main-title.letterSpacing}"
    },
    "type": "typography"
  },
  "main-titleColor": { "value": "{semantic.color.text.primary}", "type": "color" }
}
```

**spec 사용**:
```jsonc
{ "kind": "text", "textStyle": "{component.card.default.main-titleStyle}",
  "color": "{component.card.default.main-titleColor}", ... }
```

**결과 (Figma)**: 텍스트 인스펙터에서 fontSize/fontWeight 등이 `card/default/main-title/...` Variable 에 바인딩됨 → 카드 타이틀만 따로 톤 조정 가능 (foundation 안 건드리고).

**적용 사례**: `card.default.main-title*`, `header.default.titleStyle`, `result.default.headline*`, `result.default.description*`.

**언제 안 쓰나**: foundation primitive 가 그대로 재사용되는 일반 텍스트 (body, sub-label 등) → semantic typography composite 로 충분.

---

## 5. 스펙 JSON 스키마

### Top-level

```jsonc
{
  "$schema": "component-spec-v1",
  "name": "atom/btn",                // 컴포넌트 경로 (= Figma Component Set 이름)
  "category": "atom",                // atom | mol | ogn (페이지 결정)
  "description": "...",              // 선택

  "base": { /* 아래 참고 */ },
  "variants": { /* 선택 */ }
}
```

### `base`

#### layout.mode 사용 원칙 (필수)

**기본은 auto-layout (HORIZONTAL 또는 VERTICAL)**. 모든 mol / ogn / page 의 base 와 children 안 group 은 거의 항상 auto-layout 사용. atom 도 children 이 있으면 auto-layout.

`mode: "NONE"` 은 **leaf placeholder frame 에만** 허용:
- children 이 없거나 (의미 있는 layout 없음)
- 고정 치수의 색·이미지 박스로 단순 visual placeholder 역할일 때

예시:
- ✅ `atom/barcode`, `atom/thumb` — children 없는 placeholder, NONE OK
- ✅ `atom/btn-icon` 안 24×24 icon slot — leaf, NONE OK
- ✅ BottomSheet 페이지의 `dim` 그룹 — absolute positioning + 단색 fill, leaf, NONE OK
- ❌ 여러 ref/text/group 자식을 담는 컨테이너에 NONE — 자식이 안 정렬됨, 무조건 HORIZONTAL/VERTICAL
- ❌ ogn/page 의 base 에 NONE — 실수. 무조건 auto-layout

→ AI 가 spec 을 만들 때 children 이 있으면 항상 mode = HORIZONTAL/VERTICAL. NONE 으로 두면 자식들이 0,0 좌표에 겹쳐 쌓임 (혹은 figma 가 default size 로만 그림).

```jsonc
{
  "layout": {
    "mode": "HORIZONTAL" | "VERTICAL" | "NONE",
    "primaryAxisSizingMode":  "AUTO" | "FIXED",
    "counterAxisSizingMode":  "AUTO" | "FIXED",
    "primaryAxisAlignItems":  "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN",
    "counterAxisAlignItems":  "MIN" | "CENTER" | "MAX",
    "paddingTop":    "{...}" | number,
    "paddingRight":  "{...}" | number,
    "paddingBottom": "{...}" | number,
    "paddingLeft":   "{...}" | number,
    "itemSpacing":   "{...}" | number,
    "width":  number | "{...}" | "HUG" | "FILL",
    "height": number | "{...}" | "HUG" | "FILL"
  },
  "visual": {
    "cornerRadius": "{...}" | number | null,
    "fill":         "{...}" | null,
    "stroke":       { "color": "{...}", "weight": 1 } | null,
    "shadow":       "{...}" | null,
    "opacity":      number
  },
  "children": [ /* 자식 스펙 배열 — 아래 참고 */ ]
}
```

### 자식 종류

#### `kind: "text"`

```jsonc
{
  "kind": "text",
  "id": "label",                                  // 참조용 식별자 (variants override 에서 사용)
  "content": "버튼",                               // 초기 텍스트
  "textStyle": "{semantic.typography.button}",    // composite typography 토큰
  "color": "{semantic.color.brand.on-brand}",     // color 토큰
  "exposeAs": "label",                            // Component Property 로 노출 (선택)
  "layoutAlign": "STRETCH"                        // 부모의 counter 축에서 stretch (선택)
}
```

#### `kind: "ref"` (다른 컴포넌트 인스턴스 참조)

```jsonc
{
  "kind": "ref",
  "id": "cta",
  "component": "atom/btn",                  // 참조 대상 이름
  "variant": { "type": "primary", "state": "default" },  // ComponentSet variant 선택 (선택)
  "props": { "label": "담기" },              // Component Property 세팅 (선택)
  "layoutAlign": "STRETCH" | "MIN" | "CENTER" | "MAX",  // (선택)
  "scrollBehavior": "STICKY_SCROLLS" | "FIXED" | "SCROLLS"  // (선택, page chrome 용 — DP § 9.8)
}
```

참조 대상은 **미리 생성돼 있어야** 함 (atom → mol → ogn 순서).

**`scrollBehavior` 가이드** (DP § 9.8 표준):
- page chrome footer 류 (sticky-footer / footer-cta / cta-pair / `*-footer`) → `"STICKY_SCROLLS"` 권장 (audit 룰 11)
- 일반 콘텐츠 ref → 명시 X (default `"SCROLLS"`)
- Figma 의 prototype Scroll behavior 패널에 자동 노출 + 개발 export 시 `position: sticky` 매핑

**`ogn/sticky-footer-cta` variant 결정** (DP § 3.5):
- `single` (default) — 단일 primary 버튼. 약관/정보/결과 류 표준
- `with-icons` — 보조 btn-icon + primary. 콘텐츠 상세 (PRDD)
- `pair` — secondary + primary. 의사결정 페이지 (leave-confirm)

#### `kind: "group"` (익명 auto-layout wrapper)

```jsonc
{
  "kind": "group",
  "id": "cta-wrap",
  "layoutAlign": "STRETCH",
  "layout": { /* base.layout 과 같은 구조 */ },
  "visual": { /* base.visual 과 같은 구조 */ },
  "children": [ /* 재귀 children */ ]
}
```

용도: Figma v3 auto-layout 에서 **child 개별 정렬 (MIN/CENTER/MAX) 불가능** 한 제약 우회. 예: 카드 안에서 특정 요소만 우측 정렬.

### `variants`

```jsonc
{
  "axes": [
    { "name": "type",  "values": ["primary", "secondary", "small"] },
    { "name": "state", "values": ["default", "pressed", "disabled"] }
  ],
  "overrides": {
    "type=primary,state=default":  {},
    "type=primary,state=pressed":  {
      "visual": { "fill": "{...}" }
    },
    "type=secondary,state=default": {
      "layout": { "height": "{...}" },
      "visual": { "fill": "{...}", "stroke": { "color": "{...}", "weight": 1 } },
      "children[label].color": "{...}",
      "children[label].textStyle": "{...}"
    }
  }
}
```

- `axes`: variant property 축 정의. 순서대로 enumerate.
- `overrides` key 는 `axisname=value,axisname=value` 형식 (공백 없이, 콤마 구분).
- override value 는 `base` 와 같은 구조로 **부분 병합** (object 는 shallow merge, primitive 는 대체).
- **children 내부 필드 오버라이드**는 `children[{id}].{dot.path}` 문법:
  - `children[label].color`
  - `children[label].textStyle`
  - `children[label].content` — text 자식의 content 텍스트 자체 변경
  - `children[row-1].props.label` — **ref 자식의 props 값** 도 dot path 로 변경 가능 (단일 ogn + case variants 통합 패턴의 핵심)

#### mergeSpec 한계 (필수 숙지) ⚠️
- **top-level children only** — `children[content].children[row-1].xxx` 같은 nested 경로는 작동 안 함. variants 로 분기하려면 대상 자식을 `base.children` 의 직접 자식으로 끌어올려야 함.
- 즉 ogn 표준 (외피 + content wrapper) 패턴을 유지하면서 content 안 자식의 props 를 variants 로 분기하려면, content wrapper 를 깨고 base 가 외피 visual 직접 + 자식들 base.children 직접 보유.

#### 활용 패턴 — 단일 ogn + case variants (5+ case 통합)
같은 형태 / 데이터만 다른 ogn 이 N개 있을 때, 분리 X → 단일 ogn + case axis 로 통합:
- `axes: [{ name: "case", values: ["signup","dormant","leave","rejoin","history"] }]`
- baseline children = max(N) row, row 부족 case 는 빈 문자열 (`""`) override
- override 형식: `"children[row-1].props.label": "회원ID"`
- 예: `ogn/MBR/meta` (5 case 통합, baseline row 4)

### 도메인 텍스트 (children content / props)

`base.children` 안 `kind:"text"` 의 `content` 와 `kind:"ref"` 의 `props.{label/title/...}` 등 **사람이 보는 문구**는 그 컴포넌트가 사용될 페이지 **도메인에 맞게** 작성.

**원칙**:
- 컴포넌트 자체의 base 엔 **도메인 중립 placeholder** 만 (예: "제목", "내용", "버튼") — 다른 도메인에서 재사용 가능하게
- 도메인-specific 문구는 사용처 (page spec 또는 상위 ogn) 의 ref 에서 `props` 로 주입
- 카탈로그의 default 텍스트가 도메인과 안 맞으면 **그대로 쓰지 말 것** — 반드시 props 또는 children override 로 교체

**예시 — 약관 동의 페이지**
- ❌ `mol/list-item-coupon` 의 default text ("VIPS 50% 할인쿠폰", "D-2") 그대로 사용
- ✅ 도메인용 새 mol `mol/list-item-terms` 작성 (placeholder: "약관 항목명", "자세히")  
- ✅ 사용처에서 props 주입: `{ "title": "(필수) 서비스 이용약관", "action": "자세히" }`

**예시 — 상품 상세**
- 컴포넌트 base: `props.label = "버튼"` (placeholder)  
- 페이지 ref: `props: { label: "구매하기" }` (도메인 텍스트)

이 원칙이 깨지면 같은 컴포넌트가 모든 페이지에서 동일 문구로 노출되어 "재사용성 0" 가 되거나 (도메인-specific text 가 base 에 박힌 경우), 페이지마다 같은 placeholder ("제목") 만 보여 의미 전달 실패.

→ AI 가 신규 spec 작성 시 children content 는 placeholder, 사용처 props 에서 도메인 텍스트 주입 패턴 따름.

---

## 6. layoutAlign 가이드

Figma auto-layout 의 child 정렬:

| 값 | 부모가 VERTICAL 일 때 | 부모가 HORIZONTAL 일 때 |
|---|---|---|
| `"INHERIT"` (기본) | 부모의 counterAxisAlignItems 따름 | 부모의 counterAxisAlignItems 따름 |
| `"STRETCH"` | 부모의 가로 너비만큼 확장 | 부모의 세로 높이만큼 확장 |
| `"MIN"` / `"CENTER"` / `"MAX"` | **Figma v3 에서 작동 안 함** → group wrapper 사용 | 동일 |

right-align / center-align 이 필요하면:
- **group wrapper** 로 감싸서 그 그룹에 `primaryAxisAlignItems: "MAX"` (또는 `"CENTER"`)
- 그룹 자체는 `layoutAlign: "STRETCH"` 로 부모 너비 받기

[TROUBLESHOOTING.md](TROUBLESHOOTING.md) 의 #3 참고.

### 6.1 줄글 텍스트는 `layoutAlign: "STRETCH"` 표준 ⭐

컨테이너 안에 들어가는 **본문 / 설명 / headline 류 텍스트** 는 항상 `layoutAlign: "STRETCH"` 명시. generator 가 자동으로 `textAutoResize="HEIGHT"` 적용 → **부모 폭에서 줄바꿈** 처리.

| 텍스트 종류 | 권장 |
|---|---|
| 본문 / description / headline / body | **`layoutAlign: "STRETCH"`** (자동 줄바꿈) |
| 단일 라벨 (버튼 label, chip, tag, 짧은 헤더) | layoutAlign 명시 X (HUG = 한 줄) |
| 우측 정렬 액션 텍스트 (예: "자세히 보기") | group wrapper + `primaryAxisAlignItems: "MAX"` |

**왜 default 정책인가**:
- 컨테이너 width 가 고정인데 텍스트가 길면 → 카드 외피를 넘침 (안티패턴, [DESIGN_PRINCIPLES § 6](DESIGN_PRINCIPLES.md))
- "줄글이면 줄내림" 이 자연스러움. AI 가 spec 만들 때 본문 류는 자동으로 STRETCH 박는 습관
- 단일 라벨 (button label 등) 만 명시적으로 HUG (default)

**generator 동작**: `kind: "text"` 의 `layoutAlign === "STRETCH"` 면 `textAutoResize="HEIGHT"` 자동. spec 에서 `autoResize` 명시하면 그 값 우선.

**`autoResize` 명시 케이스** — STRETCH 안 박지만 **부모 width 안에서 줄바꿈** 만 원할 때:
- HORIZONTAL 부모 안 텍스트 (`layoutGrow: 1` 로 가로 fill) + `autoResize: "HEIGHT"` 명시 → 가로는 grow 로 차지 + 세로는 콘텐츠 따라 자동
- 사례: `atom/banner` message — `layoutGrow: 1` + `autoResize: "HEIGHT"`
- 값: `"HEIGHT"` (height auto) / `"NONE"` (둘 다 fixed) / 미지정 (Figma 기본 = WIDTH_AND_HEIGHT)

### 6.2 `width` 명시 + `layoutAlign: "STRETCH"` 충돌 회피 ⭐

`layoutAlign: "STRETCH"` 박은 child 의 `layout.width` 토큰 명시는 **빼는 게 권장**. generator 가 STRETCH 시 `layoutSizingHorizontal = "FILL"` 자동 적용 → 부모 너비 따라감. 거기에 width 명시까지 박으면 충돌 가능성:

| 상황 | 결과 |
|---|---|
| `layoutAlign: STRETCH` + width 없음 ✅ | 부모 너비 fill (정상) |
| `layoutAlign: STRETCH` + `width: screen-content-width(327)` ⚠️ | 시점에 따라 width 327 고정 또는 fill 둘 중 — 일관성 ↓. SPACE_BETWEEN 같은 layout 동작이 어긋날 수 있음 |
| width 명시만 + STRETCH 없음 | 명시 width 그대로 (Pattern A 가정 시 OK) |

**왜 충돌인가**:
- generator 의 buildFrame 이 spec.layout.width 를 보고 `frame.resize(targetW, ...)` 호출 → width 박힘
- 그 후 layoutAlign STRETCH 처리부에서 `layoutSizingHorizontal = "FILL"` 호출 → FILL 모드 활성
- Figma API 는 FILL 이 우선이지만, 컨테이너 안에서 `primaryAxisAlignItems: "SPACE_BETWEEN"` 같은 child distribution 이 width 모호성 때문에 어긋나는 케이스 발견 (예: bottomsheet-terms-detail header 의 title↔X 가 가운데 붙어보임)

**규칙**:
- child 가 부모 너비 채우길 원함 → `layoutAlign: "STRETCH"` 만 (width 명시 X)
- child 가 특정 width 로 fixed → `layoutAlign` 빼고 `width` 만
- 둘 다 박지 말 것

(컨테이너 자체 = base 또는 group 의 width 는 자기 baseline 으로 명시 OK. 위 룰은 **부모 안의 child** 한정.)

### 6.3 baseline width 정책 — `"FILL"` 표준 ⭐ (v4 — 2026-04-30)

**원칙**: atom/mol/ogn 의 `base.layout.width = "FILL"` 키워드가 default. **개발 의미 (반응형 width:100%) 와 일치 + Figma 한계는 generator 가 자동 우회**.

#### 키워드 매핑

| 키워드 | 의미 | Figma 매핑 |
|---|---|---|
| `"FILL"` | 부모 너비/높이 채움 | `layoutSizingHorizontal/Vertical = "FILL"` |
| `"HUG"` | 자식 콘텐츠에 맞춤 | `layoutSizingHorizontal/Vertical = "HUG"` |
| 토큰 alias 또는 number | 고정 크기 | `frame.resize(x, y)` + Variable 바인딩 |

#### Figma 한계 + generator 우회

`"FILL"` 은 부모가 auto-layout 일 때만 유효. **top-level Component (Components 페이지에 직접 놓인 atom/mol/ogn) 의 base 에 `width:"FILL"` 박으면 Figma API throw**. → generator 가 자동 catch + `spec.widthFallback` 토큰으로 fallback 적용 (시각 일치).

`"HUG"` 는 top-level 도 OK.

#### 자식 FILL — Variable 바인딩 unbind 필수 ⭐

Component baseline 이 `width:"FILL"` + `widthFallback` 패턴이면 **Component 자체에 width Variable (widthFallback 토큰) 가 바인딩됨**. 이 instance 가 부모 안에서 사용될 때, 단순히 `layoutSizingHorizontal="FILL"` 만 박으면 **bound Variable 이 우선해 fill 안 됨** (Figma 가 explicit FILL 보다 Variable 바인딩을 우선시).

→ generator 의 자식 처리 (auto STRETCH + post-append group FILL) 에서 **`setBoundVariable("width"|"height", null)` 로 먼저 unbind 후 layoutSizing FILL 적용**. 이걸 안 하면 footer-cta 처럼 직접 chrome 자식만 fill 되고 content group 안 ogn 들은 baseline width 그대로 (FIXED) 머무는 증상 발생.

| 적용 위치 (generator) | 처리 |
|---|---|
| 자식 ref 의 STRETCH (자동 또는 명시) | unbind width/height → layoutSizingHorizontal/Vertical = FILL |
| 자식 group (kind:"group") + layout.width="FILL" | unbind width → layoutSizingHorizontal = FILL (post-appendChild) |

spec 작성자는 신경 쓸 필요 없음 — baseline FILL + widthFallback 패턴이면 generator 가 자동 처리.

#### 흐름

```
spec.layout.width = "FILL" (의미: 부모 따라 fill — 반응형)
  ↓
사용처 ref (instance) 시 → § 6.x 자동 STRETCH 룰 → 부모 padding 따라 fill
  ↓
top-level Component 빌드 시 → Figma throw → generator 가 spec.widthFallback 토큰으로 fallback
```

#### `widthFallback` 명시 위치 ⭐

`widthFallback` 은 **spec 객체의 top-level 필드** (base 안 ❌). generator 의 `buildFrame(spec.base, ...)` 호출에서 spec 인자가 base 라 명시적으로 base 안에 주입되도록 fix 됨 (2026-04-30).

```jsonc
{
  "name": "ogn/MYBEN/card-points",
  "base": { "layout": { "width": "FILL", ... }, ... },
  "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  // ↑ spec top-level (base 옆)
}
```

명시 안 하면 generator default `screen-content-width` (=327) 적용.

| Component 유형 | widthFallback 권장 |
|---|---|
| 페이지 외피 (banner-padded, status-bar, gnb, tab-bar) | `{...screen-mobile}` (375) |
| 홈 카드 (ogn/MYBEN/*) | `{...screen-content-width-home}` (351) |
| 일반 페이지 ogn (MBR, PRDD 등) | `{...screen-mobile}` (375) — page padding 24 시 inner 327 |
| 명시 안 함 | generator default 327 |

#### 적용 패턴

| 패턴 | base.layout.width | 단독 Component | instance 사용처 |
|---|---|---|---|
| **표준 (v4)** | `"FILL"` | `widthFallback` 명시 시 그 폭, 아니면 327 default | 부모 padding 따라 fill (반응형) |
| 예외 — 컨텐츠 따라가는 atom/mol (btn, tag, btn-icon, inline 액션) | `"HUG"` | hug | hug |
| 폐기 | `screen-*` 토큰 직접 (FIXED) | 명시 폭 | STRETCH 미작동 시 mismatch |

#### 개발 매핑 (반응형 / 해상도 유연)

| Layer | spec 표현 | 개발 export |
|---|---|---|
| **CSS Web** | `"FILL"` | `width: 100%` 또는 `flex: 1` |
| **iOS Auto Layout** | `"FILL"` | leading/trailing constraint 0 |
| **Android** | `"FILL"` | `layout_width="match_parent"` |
| **React Native** | `"FILL"` | `flex: 1` |
| **Figma (instance)** | `"FILL"` | `layoutSizingHorizontal = "FILL"` |
| **Figma (top-level Component)** | `"FILL"` (자동 fallback) | `frame.resize(widthFallback, ...)` + Variable 바인딩 |

#### 히스토리

- v1 (2026-04-29 a.m.): 9개 spec width 일괄 제거 (HUG 표준) → 시각 깨짐 → baseline FIXED 로 다시 박음
- v2 (2026-04-29 p.m.): 13개 spec width 일괄 제거 → 또 시각 깨짐 → baseline FIXED 표준으로 통일
- v3 (2026-04-29 저녁): 개발 반응형 일치 + Figma 한계 우회 모두 만족 — `"FILL"` 키워드 표준 + generator top-level fallback 자동 처리. atom/mol 12개 spec 일괄 적용.
- **v4 (2026-04-30)**: 적용 범위 ogn 까지 확장 — chrome 3개 (status-bar/gnb/tab-bar) + ogn 32개 (MBR 14 / MYBEN 7 / PRDD 6 / 기타 5) 모두 FILL 표준화. 동시에 generator 의 `spec.widthFallback` lookup 버그 fix — 이전엔 buildFrame 의 spec 인자(=base)에서만 lookup 해서 spec top-level 의 widthFallback 이 무시되고 default 327 이 silently 적용되던 문제 해결. CONVENTIONS § 6.3 의 두 중복 섹션도 본 항목으로 통합.
- **v5 (2026-04-30 p.m.)**: page 안 content group + 그 안 자식 ogn 들의 FILL 미작동 fix. 원인: Component baseline 이 widthFallback Variable 에 바인딩된 상태로 instance 에 상속 → `layoutSizingHorizontal=FILL` 박아도 bound Variable 이 우선해 fixed width 유지. 해결: generator 의 (1) ref auto-STRETCH 분기 + (2) kind:"group" post-append FILL 분기 모두 `setBoundVariable("width"|"height", null)` 먼저 호출 후 FILL 설정. DESIGN_PRINCIPLES § 9.1 의 3-zone 구조 (chrome / content group / chrome) 도 동시에 명문화 — content group 은 width=FILL + layoutAlign=STRETCH, 그 안 ogn 들도 자동 STRETCH.

CLAUDE.md § 12 의 STRETCH 미작동 우회책은 v3 의 "generator fallback 자동" 으로 흡수됨.

### 6.4 layoutPositioning 의 constraints alias

`layoutPositioning: "ABSOLUTE"` 의 `constraints` 필드는 Figma 가 `MIN`/`MAX`/`STRETCH`/`SCALE` 만 받음. 그러나 `BOTTOM`/`TOP`/`LEFT`/`RIGHT` 같은 직관 표현이 사용 시점에 더 명확 — generator 가 자동 매핑.

| 직관 표현 | Figma 매핑 |
|---|---|
| `"TOP"` | `"MIN"` |
| `"BOTTOM"` | `"MAX"` |
| `"LEFT"` | `"MIN"` |
| `"RIGHT"` | `"MAX"` |

```jsonc
// snack-bar 가 화면 하단 fill
{
  "layoutPositioning": "ABSOLUTE",
  "x": 0, "y": 720,
  "constraints": { "horizontal": "STRETCH", "vertical": "BOTTOM" }
  //                                                    ↑ generator 가 "MAX" 로 자동 변환
}
```

자세한 floating chrome 패턴은 [DESIGN_PRINCIPLES § 9.6](DESIGN_PRINCIPLES.md) 참조.

---

## 7. INSTANCE_SWAP 패턴 (atom 안 자식 swap)

atom 안의 자식 자리 (보통 아이콘) 가 사용처마다 다를 때 사용. 매번 별개 atom (atom/btn-icon-back, atom/btn-icon-share, ...) 만들지 말고 **한 atom 으로 통합 + 사용처에서 swap**.

### 적용 예 — `atom/btn-icon`

```jsonc
// atom/btn-icon spec
{
  "name": "atom/btn-icon",
  "base": {
    "layout": { "mode": "HORIZONTAL", "width": 40, "height": 40, ... },
    "children": [
      {
        "kind": "ref",
        "id": "icon",
        "component": "atom/icon/menu",        // default placeholder
        "exposeAs": "icon"                    // ⭐ instance swap property 노출
      }
    ]
  }
}
```

### 사용처에서 swap

```jsonc
{
  "kind": "ref",
  "id": "btn-back",
  "component": "atom/btn-icon",
  "props": { "icon": "atom/icon/chevron-left" }   // ⭐ 원하는 아이콘 path
}
```

generator 가 path 를 component id 로 자동 변환해서 instance swap 적용. Figma 의 우측 Properties 패널에 **`icon (Instance swap)`** 컨트롤 노출 → 디자이너도 직접 swap 가능.

### 언제 쓰나

- atom 안에 사용처마다 다를 자식 자리 (아이콘·이미지·작은 컴포넌트) 가 있을 때
- 같은 시각 구조에 다른 아이콘만 들어가는 경우 5+ 곳 발견 → 별개 atom 만들지 말고 INSTANCE_SWAP 으로

### 언제 안 쓰나

- atom 안 자식이 항상 같으면 단순 `ref` (exposeAs 없이)
- 텍스트는 별개 패턴 — `kind: "text"` 의 `exposeAs` (TEXT property)
- 자식이 시각적으로 완전 다른 구조 (변형 아닌 별개 디자인) → 별개 atom 또는 별개 mol 분리

### generator 처리 메커니즘

`exposeAs` 가진 `kind: "ref"` 발견 시:
1. set 또는 component 에 `addComponentProperty(name, "INSTANCE_SWAP", defaultNode.id)` 호출 — Figma Property 등록
2. 각 variant 의 instance 에 `componentPropertyReferences = { mainComponent: propId }` 박아 ref 박힘
3. 사용처의 `props` 값 (path 형태 "atom/icon/heart") 을 component **id** 로 변환해서 `setProperties` 적용 (key 가 아닌 id — Figma plugin API quirk)

### 안티패턴

| 실수 | 권장 |
|---|---|
| 사용처마다 별개 atom 만들기 (atom/btn-icon-back, atom/btn-icon-share, ...) | atom/btn-icon 1개 + INSTANCE_SWAP |
| variants 축으로 아이콘 종류 분기 (`type=back/share/heart`) | 변형 폭증 — INSTANCE_SWAP 이 더 적합 |
| `exposeAs` 없이 ref 만 박고 사용처에서 props 넘기기 | 작동 안 함 — exposeAs 필수 |

---

## 8. Properties 적극 활용 가이드 ⭐

Figma Component Properties 는 디자이너가 spec 편집 없이 인스턴스 단에서 수정할 수 있는 컨트롤. **노출 가능하면 무조건 노출** — 한 곳 (메인 Component) 에 박아두면 전체 인스턴스가 그 자리에서 조정됨.

### 8.1 4가지 Property 타입

| 타입 | spec 표현 | Figma 컨트롤 | 사용 |
|---|---|---|---|
| **TEXT** | `kind: "text"` + `exposeAs: "fooName"` | 텍스트 입력 박스 | 라벨, 본문, headline, 동적 텍스트 |
| **VARIANT** | `variants.axes: [{ name, values }]` | 드롭다운 / 스위치 | 상태 (state=default/pressed/disabled), 종류 (type=primary/secondary), 켜짐/꺼짐 (input=checkbox/radio · state=on/off) |
| **INSTANCE_SWAP** | `kind: "ref"` + `exposeAs: "iconName"` | 컴포넌트 picker | 자식 컴포넌트 교체 (icon, thumb 등) — 자세히는 § 7 |
| **BOOLEAN** | (현재 generator 미지원) | 토글 | 자식 visibility — 필요해지면 generator 패치 |

### 8.2 적극 활용 원칙

**텍스트는 거의 항상 `exposeAs`** — placeholder 라도 박아둠. 디자이너가 인스펙터에서 바로 수정. 안 박으면 spec 편집 → 빌드 → Run 사이클 강제됨. cost vs benefit 명확.

```jsonc
// ❌ 노출 안 함 — 수정 시 spec 편집 강제
{ "kind": "text", "id": "label", "content": "이용약관 동의", ... }

// ✅ 노출 — Figma 인스펙터에서 바로
{ "kind": "text", "id": "label", "content": "이용약관 동의", "exposeAs": "label", ... }
```

**자식 ref 도 비슷한 패턴이 5+ 곳에 등장하면 INSTANCE_SWAP 으로** — 매번 별개 atom 만들지 말 것. (§ 7 참조)

**VARIANT 는 state/type 같은 본질적 분기에만**:
- ✅ atom/btn 의 type/state, atom/checkbox 의 state, atom/tab-item 의 state
- ✅ mol/checkbox-item 의 input(checkbox/radio) × state(on/off) — 이산 분기
- ❌ 콘텐츠 차이 (label 텍스트만 다름) → variants 말고 props · exposeAs
- ❌ 아이콘 종류 (heart/share/back ...) → INSTANCE_SWAP

### 8.3 nested props 재귀 매칭 활용

상위 ref 의 `props` 키는 generator 가 outer instance 먼저 매칭, 안 맞으면 **내부 nested instance 들 탐색**해서 적용 (`mockup/CLAUDE.md` 함정 § 9). 즉 mol 안의 atom 까지 한 번에 props 주입 가능.

```jsonc
// ogn 이 mol/list-item-coupon 을 ref. mol 안에 atom/btn 이 nested.
// atom/btn 의 label 까지 ogn 단에서 한 줄로 주입.
{ "kind": "ref", "id": "row1", "component": "mol/list-item-coupon",
  "props": { "title": "혜택 A", "label": "상세" } }   // title=mol level, label=atom/btn nested
```

→ ogn 디자이너가 mol/atom 까지 안 들어가도 prop 1번에 처리. 강력하지만 **prop 이름 중복 시 outer 우선** 주의.

### 8.4 안티패턴 요약

| 실수 | 권장 |
|---|---|
| spec 의 텍스트에 exposeAs 안 박음 | 거의 항상 exposeAs (placeholder 라도) |
| 같은 시각 구조에 다른 아이콘만 → 별개 atom 양산 | INSTANCE_SWAP (§ 7) |
| 텍스트 콘텐츠 분기를 variants axis 로 | exposeAs + props |
| variants 폭증 (4+ 축, 16+ variants) | 의미 단위 재검토 — 별개 mol 분리 또는 swap |
| **사용처에서 박은 props 키가 대상 spec 의 exposeAs 와 다름** | **AUDIT Rule 14 자동 검증** — props 박기 전 대상 spec 의 exposeAs 값 확인 |
| **variant content 분기 + 같은 child 에 exposeAs 동시 부여** | **택일** — Figma 가 instance property default value 로 통일해서 variant content 무시함. 분기는 variant 또는 props 중 하나만 (DESIGN_PRINCIPLES § 6 안티패턴 참조) |

### 8.5 옵셔널 자식 패턴 — `visible: false` override ⭐ 2026-04-30 신설

**Rule**: 자식 element 가 **때로는 있고 때로는 없는** 경우 (helper text / sub-text / status badge / error message 등), variants axis 로 분기 + `visible: false` override 사용. **빈 문자열 (`""`) 로 우회 금지**.

**Why**: Figma 의 text node 는 빈 string 이어도 line-height 만큼 vertical space 점유 + auto-layout itemSpacing 도 그대로 적용 → 자식 없을 때도 element 의 spacing 이 살아남아 시각 일관성 깨짐. 개발 export 시에도 `<Helper>{""}</Helper>` 같은 빈 element 가 렌더되어 CSS gap 자동 collapse 안 됨.

**How to apply**:
1. mol spec 에 variants axis 추가: `{ "name": "{slot}", "values": ["with", "without"] }`
2. override: `"{slot}=without": { "children[{id}].visible": false }`
3. 사용처에서 옵셔널 자식 없으면 `variant: { "{slot}": "without" }` 명시 (with 도 명시 권장 — 의도 분명)
4. helper props 자체는 with 일 때만 전달, without 은 생략

**예시 — `mol/form-row`**:
```jsonc
// mol spec
"variants": {
  "axes": [{ "name": "helper", "values": ["with", "without"] }],
  "overrides": {
    "helper=with": {},
    "helper=without": { "children[helper].visible": false }
  }
}

// 사용처 (helper 있음)
{ "kind": "ref", "component": "mol/form-row",
  "variant": { "helper": "with" },
  "props": { "label": "...", "placeholder": "...", "helper": "..." } }

// 사용처 (helper 없음)
{ "kind": "ref", "component": "mol/form-row",
  "variant": { "helper": "without" },
  "props": { "label": "...", "placeholder": "..." } }   // helper props 생략
```

**개발 export 매핑** (트레이서빌리티):
- Figma `visible: false` 자식 ≈ React `{condition && <Element />}` 조건부 렌더 ≈ CSS `display: none`
- 셋 다 layout flow 에서 element 자체 제외 → flex/grid gap 자동 collapse
- 의도 일관: "있을 땐 있고, 없을 땐 element 자체 없다"

**적용 후보 패턴**:
- form-row 의 helper / error message
- list-item 의 sub-text / status label
- card-header 의 subtitle
- 기타 "**옵셔널** 자식이 있는 모든 mol"

**generator 지원**: `children[{id}].visible: false` override 는 generator 에 이미 박혀 있음 (DP § 11 audit log 2026-04-30 — visible 처리 추가). spec 작성자는 위 패턴 따르면 됨.

### 8.6 ref props 키 매칭 룰 (재발 방지) ⭐ 2026-04-30 신설

**Rule**: ref 자식의 `props` 키 = 대상 spec 의 `exposeAs` 값 (또는 그 안 nested ref 의 exposeAs). 

**Why**: 41 곳 카탈로그 전수조사 결과 — 잘못된 props 키가 sympotom 없이 (baseline 텍스트 그대로) figma 빌드 → 사용자는 "props 안 먹힘" 으로 진단. mol/checkbox-item 의 `title→label` 사례에서 발견.

**How to apply**:
1. spec 작성 시 ref 의 props 박기 전 — 대상 spec 의 base.children 검색 → `exposeAs` 값 모음
2. 매칭 안 되면 두 갈래:
   a. 사용처 props 키 → 대상의 exposeAs 값으로 정정
   b. 대상 spec 에 exposeAs 추가 (placeholder text 도 노출 default — § 8.2)
3. AUDIT Rule 14 가 빌드 전 자동 검증 (nested ref 까지 재귀 확인 — false positive 줄임)

**예시**:
```jsonc
// mol/card 의 base.children
{ "kind": "text", "id": "title", "content": "...", "exposeAs": "headline" }
{ "kind": "text", "id": "body",  "content": "...", "exposeAs": "description" }

// ✅ 사용처
{ "kind": "ref", "component": "mol/card", "props": { "headline": "...", "description": "..." } }

// ❌ 사용처 — title/body 키는 exposeAs 와 매칭 안 됨 → audit Rule 14 fail
{ "kind": "ref", "component": "mol/card", "props": { "title": "...", "body": "..." } }
```

### 8.7 variant 별 valid props 키 룰 ⭐ 2026-05-01 신설

**문제**: variant 가 children visibility 분기 시 (`children[X].visible: false`), outer 와 inner exposeAs 가 같이 존재하면 **잘못된 키가 silent 로 매칭** 되어 figma 시각상 안 나타남. audit Rule 14 가 키 자체는 매칭이라 통과 — 사용자는 "props 박았는데 안 보임" 으로 헷갈림.

**Why** — mol/notice-card 사례 (2026-05-01):
- variant `type=message` → outer `message` text visible, inner `block` (mol/notice-block ref) hidden → valid props = `{message}`
- variant `type=title-body` → outer `message` hidden, inner `block` visible → valid props = `{title, body}` (notice-block 의 nested exposeAs)
- 사용자가 type=title-body 시 `props.message` 박으면 → outer message 매칭 (visible:false 라 시각 X) → "안 나옴". 정답은 `props.body`.

**How to apply**:
1. **spec description 에 variant 별 valid props 명시** (필수) — AI / 사용자가 spec 작성 시 즉시 인지
   ```
   ⚠️ variant 별 valid props 키:
     • type=message  → props.message
     • type=title-body → props.title + props.body (notice-block nested)
     • type=plain    → props.message
     • type=emphasis → props.message
   ```
2. **spec 의 variants.overrides 에서 visible:false 처리한 child 의 exposeAs 가 다른 valid 키와 의미 충돌** 하면 — 해당 variant 에서는 안티패턴. ref id 또는 키 unique 화 검토.
3. **사용처 ref 시** — 대상 spec 의 description / variants 부분 확인 후 variant 에 맞는 props 키 박기.
4. **audit Rule 14 한계**: variant context 자동 분석 미지원 — variant 별 valid props 동적 계산 어려움 (각 variant 의 visible 트리 분석 + valid keys 매핑 필요). 향후 강화 후보.

**조치 가이드 (작성자)**:
- variant 가 children 분기를 가지는 mol 작성 시 — description 에 variant→valid keys 표 필수
- 같은 키 (예: `message`) 가 여러 variant 에서 의미 다르다면 — 키 유지 + description 에 명시 (mol/notice-card 의 plain/emphasis 케이스)

---

## 9. List group 패턴 (가변 N row)

`mol/checkbox-item` / `mol/radio-item` / 비슷한 row mol 들을 **N개 묶을 때** 의 표준 layout.

### 9.1 표준 spec

```jsonc
{
  "kind": "group",
  "id": "content",            // ogn 외피+content 패턴 — 보통 content 자체가 list 역할
  "layoutAlign": "STRETCH",
  "layout": {
    "mode": "VERTICAL",
    "primaryAxisSizingMode": "AUTO",
    "counterAxisSizingMode": "FIXED",
    "primaryAxisAlignItems":  "MIN",
    "counterAxisAlignItems":  "MIN",
    "paddingTop":    "{component.checkbox-list.default.paddingY}",       // 24
    "paddingBottom": "{component.checkbox-list.default.paddingY}",
    "paddingLeft":   "{component.checkbox-list.default.paddingX}",       // 24
    "paddingRight":  "{component.checkbox-list.default.paddingX}",
    "itemSpacing":   "{component.checkbox-list.default.itemSpacing}",   // 12
    "width":  "{foundation.dimension.size.screen-mobile}",
    "height": "HUG"
  },
  "children": [
    /* (선택) all-agree-row, headline, description 등 머리글 */
    { "kind": "ref", "id": "row-1", "component": "mol/checkbox-item", ... },
    { "kind": "ref", "id": "row-2", "component": "mol/checkbox-item", ... },
    /* ... N개 */
  ]
}
```

### 9.2 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `component.checkbox-list.default.itemSpacing` | `spacing.md` (12) | row ↔ row 간격 |
| `component.checkbox-list.default.paddingY` | `screen-padding-default` (24) | 외피 상하 padding |
| `component.checkbox-list.default.paddingX` | `screen-padding-default` (24) | 외피 좌우 padding |

### 9.3 왜 이 패턴인가

- **시각 일관성** — 4곳 ogn (bottomsheet / term-section / term-section-dormant / leave-reason-form) 이 이미 동일한 layout. 토큰화로 의도 명시.
- **AI 일관 결정** — `spacing.md` 직접 참조하면 "이게 list 의도?" 매번 추론. `component.checkbox-list.default.itemSpacing` path 자체가 의도 → 헷갈림 X.
- **변경 시 한 곳만** — list 표준 spacing 바꾸려면 토큰 한 줄.

### 9.4 적용 케이스 (현재 4곳)

| ogn | 항목 수 | input | 도메인 |
|---|---|---|---|
| `ogn/bottomsheet` | 3 | checkbox | 약관 동의 BS |
| `ogn/MBR/term-section` | 4 | checkbox | 약관 (signup-terms / rejoin-terms) |
| `ogn/MBR/term-section-dormant` | 3 | checkbox | 휴면 해제 약관 |
| `ogn/MBR/leave-reason-form` | 5 | radio | 탈퇴 사유 |

### 9.5 안티패턴

| 실수 | 권장 |
|---|---|
| `itemSpacing: spacing.md` 직접 참조 | `component.checkbox-list.default.itemSpacing` (의도 명시) |
| 매번 다른 itemSpacing (`spacing.lg`, `spacing.sm` 등) | 표준 토큰 통일 — 시각 일관성 + AI 결정 부담 ↓ |
| list group 자체를 mol 화 (가변 N variants) | 현재는 ogn 단에서 N row 조립 — 사용 빈도 6+ 곳 되면 mol 신설 검토 |

### 9.6 향후 확장

같은 패턴을 다른 row 류 mol 도 공유 (mol/list-item-* 류). 이 토큰 path 가 `checkbox-list` 로 시작하지만 의미는 "**가변 N row list 의 spacing**" 이라 다른 row mol 도 같은 토큰 사용 OK. 만약 row 종류별로 spacing 이 달라지면 그때 별개 토큰 (`component.tag-list.default.*` 등) 분리.

---

## 10. 커밋 / PR 메시지 (권장)

```
feat(atom): add atom/chip
feat(mol): add mol/list-item-media
feat(ogn/MYBEN): add ogn/MYBEN/card-barcode
chore(ds): add foundation.dimension.radius.button = 12
fix(generator): support kind:group
docs: update WORKFLOWS.md icon import section
```

prefix 는 변경 파일 종류 반영. DS 변경은 `chore(ds):` 로 명시.
