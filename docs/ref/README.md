# docs/ref — AI 참조 레퍼런스

codebase를 빠르게 파악하기 위한 AI-readable 구조 문서.

## 구조

```
docs/ref/
  web/
    sources-page.md   ← /sources 페이지 전체 아키텍처 + 데이터 흐름
    api.md            ← API 엔드포인트 명세 (/api/sources, /api/spec)
    lib.md            ← 핵심 라이브러리 (catalog, spec-deps, resolve-token, sources-catalog)
    components.md     ← React 컴포넌트 (SpecPreview)
  mockup/
    spec-schema.md    ← component-spec-v1 JSON 스키마 완전 명세
    bundle-cli.md     ← bundle.js CLI 사용법 + 내부 동작
```

## 연관 폴더

| 폴더 | 역할 |
|---|---|
| `docs/input/components/` | component-spec-v1 JSON 원본 (50개) |
| `docs/input/variable/` | Figma Variables export (DTCG 토큰) |
| `web/shared/component-specs/` | sync-shared로 복제된 read-only 스냅샷 |
| `web/src/app/sources/` | /sources 페이지 |
| `mockup/scripter/` | Figma 자동화 도구 (bundle.js 등) |
