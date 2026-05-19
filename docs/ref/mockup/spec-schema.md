# component-spec-v1 JSON 스키마

**저장 위치**: `docs/input/components/{name}.json`
**sync 후**: `web/shared/component-specs/{name}.json`

---

## 최상위 구조

```jsonc
{
  "$schema": "component-spec-v1",
  "name": "atom/btn",              // 필수. 계층 경로 (atom/mol/ogn/page)
  "category": "atom",             // atom | mol | ogn | page
  "description": "기본 버튼.",    // 선택
  "widthFallback": "{...}",       // 선택. base.layout.width="FILL"일 때 top-level Component baseline 폭
  "base": { ... },                // 필수. 기본 레이아웃/비주얼/자식
  "variants": { ... },            // 선택. 변형 정의
  "figmaNodeId": "12372:118452",  // Figma 노드 ID
  "figmaFileKey": "wLwyHV2L5wUz0fotXmN5dK"
}
```

---

## base

```jsonc
"base": {
  "layout": {
    "mode": "HORIZONTAL",           // HORIZONTAL | VERTICAL | NONE
    "primaryAxisSizingMode": "AUTO", // AUTO | FIXED
    "counterAxisSizingMode": "AUTO",
    "primaryAxisAlignItems": "CENTER", // MIN | CENTER | MAX | SPACE_BETWEEN
    "counterAxisAlignItems": "CENTER", // MIN | CENTER | MAX
    "itemSpacing": 8.0,
    "paddingTop": 2.0,
    "paddingRight": 8.0,
    "paddingBottom": 2.0,
    "paddingLeft": 8.0,
    "width": "FILL",  // 숫자 | "FILL" | "HUG" | 토큰참조
    "height": "HUG"
  },
  "visual": {
    "cornerRadius": 4.0,           // 숫자 또는 토큰참조
    "fill": "#e2e6f1",             // hex 또는 토큰참조
    "stroke": "{semantic.color.border.default}",
    "strokeWidth": 1.5,
    "shadow": "{foundation.shadow.card}"
  },
  "children": [ ... ]
}
```

> **주의**: `counterAxisSizingMode`의 의미는 `layout.mode`에 따라 반대
> - VERTICAL: counter = 가로(width)
> - HORIZONTAL: counter = 세로(height)

---

## children 노드 종류

### kind: "group"

```jsonc
{
  "kind": "group",
  "id": "wrap",
  "layoutAlign": "STRETCH",  // STRETCH | INHERIT (layoutAlign 미지정이면 ref 대상 width="FILL"이면 자동 STRETCH)
  "layout": { ... },
  "visual": { ... },
  "children": [ ... ]
}
```

### kind: "text"

```jsonc
{
  "kind": "text",
  "id": "label",
  "content": "버튼",
  "textStyle": "{semantic.typography.btn.md}",  // typography 토큰
  "color": "{semantic.color.text.primary}",     // color 토큰
  "exposeAs": "label"   // Figma Component Property로 노출할 이름
}
```

### kind: "ref"

```jsonc
{
  "kind": "ref",
  "id": "icon",
  "component": "atom/icon/sparkle",  // 참조할 spec name
  "variant": { "type": "fill" },     // variant 조건
  "props": { "label": "아이콘" },    // Figma Component Property 주입
  "layoutAlign": "STRETCH"
}
```

---

## variants

```jsonc
"variants": {
  "axes": [
    { "name": "Type", "values": ["Gray", "Blue", "Black"] },
    { "name": "State", "values": ["Default", "Pressed"] }
  ],
  "overrides": {
    "Type=Gray": {},
    "Type=Blue": {
      "visual": { "fill": "{component.badge.emphasis.background}" },
      "children[label].color": "{component.badge.emphasis.text}",
      "children[label].textStyle": "{component.badge.emphasis.textStyle}"
    }
  }
}
```

> **주의**: `children[id].foo` 경로는 base.children 바로 아래만 가능 (중첩 경로 미지원)

---

## 토큰 참조 문법

```
"{foundation.color.brand.primary}"    // foundation 레이어
"{semantic.color.surface.primary}"    // semantic 레이어
"{component.badge.neutral.background}" // component 레이어
```

토큰 파일: `docs/input/variable/` (DTCG 형식)
resolve: `web/src/lib/resolve-token.ts::resolveRef()` — alias chain 재귀 풀이

---

## 카테고리별 저장 위치 규칙

| 카테고리 | 경로 예시 |
|---|---|
| atom | `docs/input/components/accordion.json` |
| mol | `docs/input/components/accordion.json` (flat) |
| ogn | `docs/input/components/accordion-price-info.json` |
| page (모듈) | `docs/input/components/{MODULE}/{screen}.json` |

현재 실제 파일: 50개 flat JSON (category 필드로 구분, 폴더 계층 없음)
