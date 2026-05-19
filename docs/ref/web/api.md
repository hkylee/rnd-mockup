# API 엔드포인트

`web/src/app/api/` 아래 /sources 관련 엔드포인트.

---

## GET /api/sources

**파일**: `web/src/app/api/sources/route.ts`
**목적**: 컴포넌트 목록 반환

```
응답: { items: SourceItem[] }
```

내부: `sources-catalog.ts::listSources()` 호출
- `shared/skt-design-system.json` → id: "ds:main"
- `shared/component-specs/**/*.json` → 각 spec → SourceItem
- `shared/figma-icons/Normal/*.svg` (import된 7개만) → id: "icon:{name}"

---

## GET /api/spec

**파일**: `web/src/app/api/spec/route.ts`
**목적**: 선택된 소스의 전체 데이터 반환

### kind=ds
```
GET /api/spec?kind=ds
응답: { kind: "ds", ds: <skt-design-system.json 전체> }
```

### kind=icon
```
GET /api/spec?kind=icon&name=menu
응답: { kind: "icon", name: "menu", svg: "<svg>...</svg>" }
```
파일 경로: `shared/figma-icons/Normal/{name}.svg`
Path traversal 방어: `svgPath.startsWith(resolve(rootDir, "figma-icons"))` 검사

### kind=spec
```
GET /api/spec?kind=spec&name=atom/btn
응답: {
  kind: "spec",
  name: "atom/btn",
  spec: <component-spec JSON>,
  ds: <skt-design-system.json>,
  icons: { "menu": "<svg>...</svg>", ... },  // spec에서 참조하는 아이콘만
  deps: {
    refs: ResolvedRef[],    // 이 컴포넌트가 쓰는 ref들
    tokens: string[],       // 이 컴포넌트가 쓰는 DS 토큰 경로들
    usedBy: string[]        // 이 컴포넌트를 쓰는 다른 spec들
  }
}
```

아이콘 수집: spec 트리에서 `kind:"ref"` + `component.startsWith("atom/icon/")` 탐색
Path traversal 방어: `specPath.startsWith(resolve(rootDir, "component-specs"))` 검사

### 아이콘 이름 → SVG 파일 매핑 (iconMap)
```
menu       → menu.svg
home       → home.svg
home-fill  → homeFill.svg
search     → search.svg
bag        → businessBag.svg
bag-fill   → businessBagFill.svg
sparkle    → sparkleFill.svg
```
위 목록 외 아이콘: `{iconName}.svg` fallback

---

## 관련 라이브러리

| 함수 | 파일 | 역할 |
|---|---|---|
| `listSources()` | `lib/sources-catalog.ts` | SourceItem[] 생성 |
| `getSpecDeps(name)` | `lib/spec-deps.ts` | refs/tokens/usedBy 반환 |
| `sharedRoot()` | `lib/paths.ts` | `<cwd>/shared` 경로 반환 |
