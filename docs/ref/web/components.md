# React 컴포넌트

`web/src/components/` 아래 /sources 관련 컴포넌트.

---

## SpecPreview.tsx

**경로**: `web/src/components/SpecPreview.tsx`
**역할**: component-spec의 `base` 트리를 CSS inline style DOM으로 렌더링

```typescript
export function SpecPreview({ spec, ds, icons }: {
  spec: any;                        // component-spec JSON
  ds: any;                          // skt-design-system.json
  icons: Record<string, string>;    // { "menu": "<svg>...</svg>", ... }
}): ReactNode
```

### 렌더링 흐름

```
SpecPreview
  └─ RenderNode(spec.base, tokens=ds, icons)
       └─ layout/visual → baseStyle() → CSSProperties
       └─ children[] → RenderChild()
            ├─ kind="text"  → <span style={typography+color}>content</span>
            ├─ kind="group" → RenderNode (재귀)
            └─ kind="ref"
                 ├─ "atom/icon/*" → <span dangerouslySetInnerHTML={svg} />
                 └─ 그 외        → <span>[컴포넌트명]</span> (placeholder)
```

### baseStyle() 변환 규칙

| spec 필드 | CSS 속성 |
|---|---|
| `layout.mode: "HORIZONTAL"` | `display:flex; flex-direction:row` |
| `layout.mode: "VERTICAL"` | `display:flex; flex-direction:column` |
| `layout.paddingTop/Right/Bottom/Left` | `padding` (토큰 resolve 후 px) |
| `layout.itemSpacing` | `gap` |
| `layout.primaryAxisAlignItems: "CENTER"` | `justify-content:center` |
| `layout.primaryAxisAlignItems: "SPACE_BETWEEN"` | `justify-content:space-between` |
| `layout.counterAxisAlignItems: "CENTER"` | `align-items:center` |
| `layout.width/height` (HUG 제외) | `width/height` |
| `visual.cornerRadius` | `border-radius` |
| `visual.fill` | `background` |
| `visual.stroke` | `border: 1px solid` |
| `visual.shadow` | `box-shadow` (composite token best-effort) |

### resolveTypography()

typography 토큰(`{semantic.typography.xxx}`) → CSSProperties:
- `fontSize`, `lineHeight` (% → 0~1 변환), `fontWeight`, `letterSpacing`

### 토큰 resolve

모든 값은 `resolveRef(tokens, value)` 경유:
- `"{foundation.color.brand.primary}"` → DS alias chain 재귀 풀이 → `"#3617CE"`
- 숫자/문자 그대로 → 그대로 반환

### 한계

- `kind:"ref"` (atom/icon 제외)는 placeholder로만 표시 (실제 ref 컴포넌트 재귀 렌더 미구현)
- `variants.overrides` 반영 안 됨 — base만 렌더
- shadow composite token: offset/blur만 적용, spread/color 부분 지원
