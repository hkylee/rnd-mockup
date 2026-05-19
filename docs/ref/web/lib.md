# 핵심 라이브러리

`web/src/lib/` 아래 /sources 관련 핵심 파일들.

---

## sources-catalog.ts

**경로**: `web/src/lib/sources-catalog.ts`
**역할**: FS에서 component-specs를 읽어 SourceItem[] 반환

```typescript
export function listSources(): SourceItem[]
```

읽는 경로: `sharedRoot()` = `<cwd>/shared`
- `shared/skt-design-system.json`
- `shared/component-specs/**/*.json`
- `shared/figma-icons/Normal/*.svg` (7개 import된 것만)

카테고리 판정:
```
json.category === "foundation"  → "foundation"
json.category === "page"        → "page"
첫 세그먼트 in MODULE_CODES     → "page"
나머지                          → "component"
```

MODULE_CODES: `BIL, MBR, MYBEN, PRDD, SCH, MYCPN, TPNT, PRDL`

---

## spec-deps.ts

**경로**: `web/src/lib/spec-deps.ts`
**역할**: 컴포넌트 간 ref/token 의존성 그래프

```typescript
export type SpecDeps = {
  refs: ResolvedRef[];   // 이 spec이 사용하는 컴포넌트 refs
  tokens: string[];      // 이 spec이 사용하는 DS 토큰 경로
  usedBy: string[];      // 이 spec을 사용하는 다른 spec들
};

export function getSpecDeps(specName: string): SpecDeps
```

동작 방식:
1. `buildGraph()` — 전체 component-specs/*.json 한 번만 로드 (module-level 캐시 `_graph`)
2. 각 spec에서 `extractFromNode()`:
   - `kind:"ref"` → rawRef 수집
   - `{foundation.*}` / `{semantic.*}` / `{component.*}` 패턴 → token 수집
3. `resolveRef(raw)` — Figma 이름 → spec 이름 변환

수동 매핑 (MANUAL_MAP):
```
".Ico"           → "atom/icon"
".Button"        → "atom/btn"
".ButtonText"    → "atom/btn-text"
".CheckboxItem"  → "atom/checkbox"
".RadioItem"     → "atom/radio"
".ChipImageItem" → "atom/chip-image"
".ThumbnailItem" → "mol/thumb-item"
".BadgeIcon"     → "mol/badge-icon"
".RadioText"     → "mol/radio-text"
```

자동 resolve: `.PascalCase` → kebab-case → `atom/{kebab}` / `mol/{kebab}` / `ogn/{kebab}` 순 시도
suffix 제거 후 재시도: `-item`, `-text`, `-logo`, `-bar`

---

## catalog.ts

**경로**: `web/src/lib/catalog.ts`
**역할**: AI 프롬프트 주입용 컴포넌트 카탈로그 텍스트

```typescript
export function getComponentCatalog(): string  // 캐시됨
export const COMPONENT_CATALOG: string         // 하위 호환 alias
```

출력 형식 (그룹별 마크다운):
```
ATOM
- atom/btn — 기본 버튼 컴포넌트 (variants: type=primary|secondary, state=default|pressed / refs: atom/icon/sparkle)
- atom/checkbox — ...

MOLECULE
- mol/card-header — ...
```

그룹 순서: ATOM → ATOM-icon → ATOM-logo → MOLECULE → ORGANISM(공통) → ORGANISM-모듈 → PAGE

---

## resolve-token.ts

**경로**: `web/src/lib/resolve-token.ts`
**역할**: DS 토큰 alias chain 재귀 resolve

```typescript
export function resolveToken(tokens: unknown, path: string): unknown
export function resolveRef(tokens: unknown, value: unknown): unknown
```

- `resolveToken(ds, "semantic.color.brand.primary")` → raw 값 (hex 등)
- `resolveRef(ds, "{semantic.color.brand.primary}")` → `{...}` 패턴 파싱 후 resolveToken 호출, 숫자/문자 그대로면 그대로 반환
- alias(`$value`)가 또 `{...}` 이면 재귀

---

## paths.ts

**경로**: `web/src/lib/paths.ts`
**역할**: 파일 경로 헬퍼 — 모든 FS 접근은 이 파일 경유

```typescript
export function sharedRoot(): string   // <cwd>/shared
export function mockupRoot(): string   // <cwd>/../mockup
```

`sharedRoot()` — 컴포넌트 스펙, DS, 아이콘 (read-only 스냅샷)
`mockupRoot()` — mockup 원본 직접 참조 (docs-loader, scripter API만 사용)
