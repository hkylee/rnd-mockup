# /sources 페이지 아키텍처

`localhost:3000/sources` — 컴포넌트 라이브러리 브라우저.
DS / component spec / icon 목록을 보여주고, 선택 시 spec JSON + 미리보기를 렌더링.

---

## 파일 목록

| 파일 | 역할 |
|---|---|
| `web/src/app/sources/page.tsx` (1,761줄) | 메인 페이지 컴포넌트. 전체 UI + 상태 관리 |
| `web/src/lib/sources-catalog.ts` | FS walker — component-specs/*.json → SourceItem[] 반환 |
| `web/src/lib/catalog.ts` | AI 프롬프트 주입용 카탈로그 텍스트 생성 (sources 페이지와 별개) |
| `web/src/lib/spec-deps.ts` | 컴포넌트 간 ref/token 의존성 그래프 |
| `web/src/lib/resolve-token.ts` | DS 토큰 alias 재귀 resolve |
| `web/src/app/api/sources/route.ts` | GET /api/sources → SourceItem[] |
| `web/src/app/api/spec/route.ts` | GET /api/spec?kind=spec&name=... → spec+ds+icons+deps |
| `web/src/components/SpecPreview.tsx` | spec.base 트리를 CSS style로 렌더링하는 React 컴포넌트 |

데이터 소스 (shared/):
- `web/shared/component-specs/**/*.json` — 50개 컴포넌트 spec
- `web/shared/skt-design-system.json` — DS 토큰
- `web/shared/figma-icons/Normal/*.svg` — 아이콘 SVG

---

## 데이터 흐름

```
[mount]
  fetch /api/sources
    → sources-catalog.ts::listSources()
    → walk("shared/component-specs/") + parse JSON
    → SourceItem[] {id, name, category, path, size}
  → 카테고리별 목록 렌더

[컴포넌트 클릭]
  fetch /api/spec?kind=spec&name={name}
    → spec JSON 읽기
    → skt-design-system.json 읽기
    → collectIconRefs(spec) → 필요한 아이콘 SVG 수집
    → getSpecDeps(name) → {refs, tokens, usedBy}
  → {spec, ds, icons, deps} 반환
  → SpecPreview 렌더 (spec.base 트리 → CSS DOM)
  → DepsSection: refs/tokens/usedBy 목록
```

---

## SourceItem 타입

```typescript
type SourceItem = {
  id: string;       // "spec:atom/btn" | "icon:menu" | "ds:main"
  name: string;     // "atom/btn"
  category: "ds" | "component" | "foundation" | "page" | "icon";
  path?: string;    // "component-specs/atom/btn.json"
  size?: number;    // bytes
};
```

카테고리 판정 로직:
- `json.category === "foundation"` → foundation
- `json.category === "page"` OR 첫 세그먼트가 모듈코드(BIL/MBR/MYBEN/PRDD/SCH/MYCPN/TPNT/PRDL) → page
- 나머지 → component

---

## sub-컴포넌트 (page.tsx 내부)

| 컴포넌트 | 역할 |
|---|---|
| `NavItem` | 좌측 사이드바 항목 |
| `ComponentCard` | 그리드 카드 |
| `DepsSection` | refs / tokens / usedBy 의존성 표시 |
| `SpecCodeBlock` | spec JSON 코드 뷰어 |
| `PrevNextNav` | 이전/다음 컴포넌트 네비게이션 |
| `TokenDetailPanel` | 토큰 클릭 시 DS alias chain 팝업 |
