# Claude Session Context — Genui Web

이 파일은 `@Genui/web/` 에서 Claude Code 세션 시작 시 자동 로드됩니다.
전역 구조/mockup 과의 관계는 상위 [`../CLAUDE.md`](../CLAUDE.md) 참고. 처음 시작 setup → [README.md](README.md).

## 프로젝트 정체

이미지 / 기능내역서 / 정책서 → atom · molecule · organism · page 분류 → spec 자동 작성 → Figma cascade 번들 자동 생성 + 페이지 React 미러링 + SB HTML 도메인 메타 시각화 웹서비스.

**현재 진행도**: Phase 0 PoC + 1a (Detection Board) + 1b (검수) + 2a (기능내역서 분석) + 2b (보고서/코드 생성) + 2c (정책서 모드) + 3 (페이지 라이브러리 + Figma 워싱 + INTERACTION_TAGS) 완료. Phase 1c (승격 → 저장) 와 DS 업데이트 적용은 미구현.

설계 문서:
- `docs/SERVICE_DESIGN.md` — 서비스 전체
- `docs/DETECTION_BOARD.md` — UI 생성 (이미지 분석)
- `docs/REVIEW_MENU.md` — 검수 / 진단 / 승격
- `docs/SPEC_ANALYSIS.md` — 기능내역서 분석

mockup 쪽 참고 문서 (분석 / 보고 양식 / DS 규칙 — **AI 프롬프트의 source of truth**):
- `../governance/INDEX.md` — 단계 분류·체크포인트 ★ 화면 의도 결정의 첫 단추
- `../mockup/mockup-docs/UX_GOVERNANCE.md` — UX 7원칙
- `../mockup/mockup-docs/SPEC_INPUT_TEMPLATE.md` — 기능내역서 입력 양식
- `../mockup/mockup-docs/SPEC_REPORT_TEMPLATE.md` — 분석 보고서 형식
- `../mockup/mockup-docs/AUDIT_RULES.md` — 진단 규칙
- `../mockup/mockup-docs/DESIGN_PRINCIPLES.md` — 위계 결정
- `../mockup/mockup-docs/CONVENTIONS.md` — 네이밍/스키마/토큰
- `../mockup/mockup-docs/INTERACTION_TAGS.md` — 8 인터랙션 태그 (`[tap]`/`[interactive]`/`[sync]`/`[enabled]`/`[loading]`/`[modal]`/`[state]`/`[nav]`)
- `../mockup/mockup-docs/WASH_SPEC.md` — Figma 손그림 → DS 자동 변환 사양

이 docs 들은 **sync 안 함** — `src/lib/docs-loader.ts` 가 `mockup/mockup-docs/` 원본을 직접 참조해서 프롬프트에 주입. mockup-docs 가 single source of truth — 한 곳만 고치면 AI 동작 자동 갱신.

## 중요: Next.js 16 주의사항

@AGENTS.md

이 버전은 학습 데이터와 **breaking change 있을 수 있음**. 코드 쓰기 전에 `node_modules/next/dist/docs/` 의 관련 가이드를 먼저 읽어야 함.

## 기술 스택

- **Next.js 16.2.4** (App Router, Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (`@theme inline`, PostCSS v4) + Pretendard 폰트 (CDN)
- **Anthropic SDK** (`@anthropic-ai/sdk` 0.90+) — Claude Sonnet 4.6 (Vision + 구조화 출력)

## 폴더 구조

```
web/
├── shared/                            ← mockup 의 read-only 스냅샷 (gitignore — sync:shared 로 갱신)
│   ├── skt-design-system.json
│   ├── scripter/                      (generator-core.js, sync-tokens.js, bundle.js, generate-sb*.js, wash.js, runs/, sb/, sb-html/)
│   ├── component-specs/
│   └── figma-icons/
├── scripts/                           ← 빌드 파이프라인 5종
│   ├── sync-shared.mjs                (1) mockup → shared 복제
│   ├── build-tokens.mjs               (2) DS JSON → CSS Variables
│   ├── build-flow.mjs                 (3) specs-flow → page-flow.json
│   ├── build-interactions.mjs         (4) spec walk + 인라인 태그 → page-interactions.auto.json
│   └── build-components.mjs           (5) specs → React 컴포넌트 + 페이지 라우트
├── src/
│   ├── app/
│   │   ├── layout.tsx                 (Sidebar + Pretendard CDN + tokens.css)
│   │   ├── page.tsx                   (/ → /sources redirect)
│   │   ├── sources/                   (컴포넌트 라이브러리 — DS/atom/mol/ogn/page/icon 카탈로그)
│   │   ├── pages/[[...slug]]          ⭐ 페이지 라이브러리 — 좌(React iframe) + 우(SB HTML iframe) 가로 split
│   │   ├── library/preview/<M>/<S>/   ⭐ (자동 생성) iframe 안 모바일 미러링 — /pages 가 src 로 임베드
│   │   ├── docs/dp                    (DESIGN_PRINCIPLES 뷰어)
│   │   ├── docs/templates             (UX 의도 / 정책 분석 / SB 작성 가이드 모음)
│   │   ├── generate/                  (UI 생성 — 이미지 → Detection Board)
│   │   ├── figma-wash/                ⭐ (Figma plugin 추출 spec 워싱)
│   │   ├── review/                    (검수 — candidate 진단 + 승격 액션)
│   │   ├── review-history/            (내역 — 승격/병합/스킵 + 재검수)
│   │   ├── spec-analysis/             (기능내역서 분석 — input→report→generated 3단계)
│   │   ├── spec-analysis-history/     (분석 히스토리 — screen id archive)
│   │   ├── scripter/{sync,library,pages}/  (mockup bundle.js 실행)
│   │   └── api/
│   │       ├── analyze, analyze-spec, derive-features, generate-spec  (Claude API)
│   │       ├── bundle, bundle-setup, cascade-bundle                    (Scripter 번들 빌드)
│   │       ├── figma-wash, figma-wash/save, figma-wash/promote        ⭐ (워싱 처리)
│   │       ├── sb-html/[id]                                            ⭐ (shared/scripter/sb-html/<id>.html 서빙)
│   │       ├── scripter/{run,runs-list,runs-file,page-deps,page-run,pages-list}  (mockup bundle.js child_process)
│   │       ├── setup/tasks · setup/bundle                              (Setup task 33개)
│   │       ├── sources                                                  (소스 목록)
│   │       └── spec                                                     (ds/icon/spec 가져오기)
│   ├── components/
│   │   ├── Sidebar.tsx                (5섹션 + 접펼)
│   │   ├── SpecPreview.tsx, SpecPreviewCard.tsx
│   │   ├── DetectionImage.tsx, DetectionTree.tsx
│   │   ├── CopyableDetails.tsx
│   │   ├── ScripterRunCard.tsx, RunsFileTree.tsx, PageRunList.tsx
│   │   ├── SpecReport.tsx, CodeGenerationResult.tsx
│   │   └── library/                   ⭐ (자동 생성)
│   │       ├── _state-context.tsx     (PageStateContext — nested mol 들이 page state 한 곳에서 관리)
│   │       ├── index.json             (atom/mol/ogn/page slug 목록)
│   │       └── atom|mol|ogn/<name>.tsx
│   ├── lib/
│   │   ├── paths.ts                   ← sharedRoot() / mockupRoot() (모든 fs 접근 헬퍼)
│   │   ├── docs-loader.ts             (mockup/mockup-docs 발췌 → 프롬프트 주입)
│   │   ├── ds-tokens.ts               (DS 토큰 path/type 추출 + spec validation)
│   │   ├── token-match.ts             ⭐ (raw 값 → 토큰 후보 매칭 — wash 에서 사용)
│   │   ├── spec-normalize.ts          (AI 응답 자동 보정 — STRETCH 등)
│   │   ├── catalog.ts                 (Claude 프롬프트용 카탈로그 — shared/component-specs crawler)
│   │   ├── resolve-token.ts           (DS 토큰 alias 재귀 resolve)
│   │   ├── sources-catalog.ts         (라이브러리 페이지용)
│   │   ├── collect-specs.ts           (specs crawler + 의존성 순서)
│   │   ├── setup-tasks.ts             (33개 Setup task)
│   │   ├── bundle.ts, bundle-sync.ts, bundle-cascade.ts, bundle-setup.ts
│   │   ├── tree-to-spec.ts            (AI tree → page spec)
│   │   ├── page-spec-builder.ts       (기능내역서 features → page spec 들)
│   │   ├── page-deps.ts               (page → ref 의존성 그래프)
│   │   ├── page-flow.json             ⭐ (자동 생성 — 페이지 동선)
│   │   ├── page-interactions.json     (수동 override — 인터랙션 메타)
│   │   ├── page-interactions.auto.json ⭐ (자동 생성 — spec walk + 인라인 태그)
│   │   ├── detection-types.ts
│   │   ├── review-store.ts, review-diagnostics.ts
│   │   └── spec-analysis-types.ts, spec-analysis-history.ts
│   └── styles/
│       └── tokens.css                 ⭐ (자동 생성 — DS → CSS Variables)
├── .env.local                         ← ANTHROPIC_API_KEY (gitignore)
├── CLAUDE.md                          (이 파일)
└── AGENTS.md                          (Next.js 16 경고)
```

> ⭐ = 이전 버전 CLAUDE.md 에 없던 항목 (Phase 3 신설). `(자동 생성)` 표시는 `npm run sync:shared` 로 만들어지는 산출물 — 직접 편집 금지, gitignore 권장.

## 사이드바 메뉴 구조 (5 섹션)

[Sidebar.tsx](src/components/Sidebar.tsx) 참조. 변경 시 코드와 이 표 둘 다 갱신.

```
LIBRARY (헤더 없음)
  · 디자인 원칙          /docs/dp
  · 컴포넌트 라이브러리   /sources
  · 페이지 라이브러리    /pages

SCRIPTER RUN
  · DS Run               /scripter/sync
  · Component Run        /scripter/library

MOCKUP PREPARATION
  · 기능내역서 분석      /spec-analysis
  · 히스토리             /spec-analysis-history

COMPONENT REVIEW
  · UI 생성              /generate
  · Figma 워싱           /figma-wash
  · 검수                 /review
  · 내역                 /review-history

TEMPLATES
  · 템플릿 (전체)         /docs/templates
  · 1. UX 의도            /docs/templates?slug=governance-INDEX
  · 2. 분석 보고 · 입력    /docs/templates?slug=POLICY_REPORT_TEMPLATE
  · 4. 스토리보드 (SB)    /docs/templates?slug=sb-template-schema
```

`/library/preview/<MODULE>/<screen>` 라우트는 메뉴에 노출 안 됨 (자동 생성 + iframe 임베드 전용 — Sidebar 가 자동으로 hide).

## 빌드 파이프라인 (`npm run sync:shared`)

```
mockup/  ──[ 1. sync-shared ]──> web/shared/  ──[ 2-5. build:* ]──>  src/styles/, src/lib/, src/components/library/, src/app/library/preview/
```

| 순서 | 스크립트 | 입력 | 출력 |
|---|---|---|---|
| 1 | `sync-shared.mjs` | `../mockup/{skt-design-system.json, scripter/, component-specs/, figma-icons/}` | `web/shared/` |
| 2 | `build-tokens.mjs` | `shared/skt-design-system.json` | `src/styles/tokens.css` (CSS Variables, var() 체인 보존, MIRROR_SCALE 0.8 fontSize/screen-mobile) |
| 3 | `build-flow.mjs` | `shared/specs-flow/*.md` | `src/lib/page-flow.json` (페이지 동선, 26 entries) |
| 4 | `build-interactions.mjs` | `shared/component-specs/**/*.json` + `shared/specs-input/*.md` 인라인 태그 | `src/lib/page-interactions.auto.json` (states / actions / sync — 자동 추론) |
| 5 | `build-components.mjs` | `shared/component-specs/**/*.json` + page-flow + page-interactions | `src/components/library/{atom,mol,ogn}/*.tsx` + `src/components/library/index.json` + `src/components/library/_state-context.tsx` + `src/app/library/preview/<MODULE>/<screen>/page.tsx` |

**일부만 빌드**: mockup spec 만 고쳤다면 `npm run build:components`, DS 토큰만이면 `build:tokens`, 인터랙션 태그만이면 `build:interactions`. `sync:shared` 안 돌리면 shared 가 stale 인 점 주의.

**우선순위 — 인라인 태그 > spec walk > 수동 override**: `page-interactions.json` (수동) 보다 `.auto.json` 이 더 정확 (인라인 태그 + spec walk 가 더 정밀). 수동은 자동이 못 잡는 케이스에만.

## localStorage 키 (브라우저 상태 보존)

| key | 용도 |
|---|---|
| `genui.review.candidates` | 검수 큐 candidate 배열 |
| `genui.review.ds-proposals` | DS 토큰 추가 후보 |
| `genui.setup.done` | Setup task 진행 체크 |
| `genui.spec-analysis.latest` | 마지막 기능내역서 분석 결과 |
| `genui.spec-analysis.history` | screen id 별 분석 archive |
| `genui.sidebar.collapsed` | Sidebar 섹션별 접힘 상태 |

## 핵심 규칙

### 1. fs 접근은 `sharedRoot()` 또는 `mockupRoot()` 헬퍼 경유
[`src/lib/paths.ts`](src/lib/paths.ts) 의 두 헬퍼만 사용:
- `sharedRoot()` = `<cwd>/shared` — DS / specs / icons / scripter 의 read-only 복제본 (default)
- `mockupRoot()` = `<cwd>/../mockup` — **의도된 mockup 직접 참조** (docs / scripter bundle 실행)

mockup 직접 참조는 다음 경우만:
- `src/lib/docs-loader.ts` — mockup-docs 가이드 (single source of truth, sync 안 함)
- `/api/scripter/*` — mockup/scripter/bundle.js 를 child_process 로 실행

다른 fs 접근에서 `process.cwd() + ".."` 직접 쓰지 말 것.

### 2. mockup 변경사항 동기화
mockup/ 편집 후:
```bash
cd web && npm run sync:shared
```
대상: `skt-design-system.json` / `scripter` / `component-specs` / `figma-icons`. **mockup-docs/ 는 sync 안 함** — docs-loader 가 직접 읽음.

### 3. API key 취급
- `.env.local` 에만 저장, 채팅/커밋/스크린샷 노출 금지
- 노출 시 즉시 `console.anthropic.com/settings/keys` 에서 rotate

### 4. Claude API 호출
- 모델: `claude-sonnet-4-6`
- 시스템 프롬프트에 `mockup/mockup-docs` 발췌 + DS 토큰 + 카탈로그 자동 주입
- 카탈로그 ([`src/lib/catalog.ts`](src/lib/catalog.ts)) 는 `shared/component-specs/**/*.json` crawler — mockup 에 spec 추가 시 sync 만 돌리면 자동 반영
- 응답: ```json``` 블록 파싱 + fallback raw + 토큰 type validation ([`ds-tokens.ts::validateSpecTokens`](src/lib/ds-tokens.ts)) + 자동 normalize ([`spec-normalize.ts`](src/lib/spec-normalize.ts) — STRETCH 자동 추가 등)

### 5. 페이지 라이브러리 (`/pages`) — 좌우 split
[`src/app/pages/[[...slug]]/page.tsx`](src/app/pages/[[...slug]]/page.tsx):
- 좌측 aside (모듈 그룹 — 접펼) → 페이지 선택
- 우측 main (가로 스크롤) → **좌(React iframe 375×812) + 우(SB HTML iframe 1000×812)**
- React iframe `src` = `/library/preview/<MODULE>/<screen>?embed=1` — 자동 생성된 페이지
- SB HTML iframe `src` = `/api/sb-html/<MODULE>-<SCREEN>` — `shared/scripter/sb-html/<id>.html` 서빙
- iframe 안 [확인]/[back] → postMessage → 부모 URL 동기화 + 좌측 목록 자동 이동

### 6. PageStateContext — nested mol 의 state 단일 관리
[`src/components/library/_state-context.tsx`](src/components/library/_state-context.tsx) (자동 생성):
```tsx
export const PageStateContext = React.createContext<Record<string, boolean> | null>(null);
```
페이지 컴포넌트가 page-interactions 의 `states` 로 useState 만들고 Context 로 내림. 임의 깊이 nested mol (예: `mol/checkbox-item` 안 `atom/checkbox`) 이 `data-id` 로 자기 키 찾아서 자동 binding. 이전 버전의 mol-self useState 로 인한 desync 해결.

### 7. iframe 안에서 Sidebar hide
`/library/preview/...` 라우트에선 [Sidebar.tsx](src/components/Sidebar.tsx) 가 `pathname.startsWith("/library/preview")` 면 null 반환. iframe 임베드 시 root layout 의 sidebar 가 안에 또 들어가지 않게.

### 8. 기능내역서 분석 3단계 상태머신
`/spec-analysis` 페이지의 핵심 흐름:
1. **input** — textarea 에 기능내역서 paste → 분석 버튼
2. **report** — `SpecReport` (탭 구조 — 화면별)
   - 화면 (screen id) 탭 + 0. 요약 / 1. 카탈로그 대조 / 1.5. 추론된 필수 컴포넌트 / 2. Cascade / 3. 체크
   - 하단 fixed 단일 CTA `🚀 이 페이지 코드 생성`
3. **generated** — `CodeGenerationResult`
   - tier 별 카드 (Atom · Molecule · Organism · Page) — 각자 복사 / 다운로드
   - 전체 합본 번들 별도

### 9. 히스토리 — screen id 단위 결합 뷰
`/spec-analysis-history`: 좌측 모듈→screen id 그룹 + chevron 펼침, screen id 본체 클릭 → 우측 결합 뷰 (그 화면의 최근 분석 + 최근 생성 둘 다). 개별 entry 클릭 시 단독 상세.

### 10. Figma Wash (`/figma-wash`)
[`src/app/figma-wash/`](src/app/figma-wash/) — Figma plugin 이 추출한 손그림 spec JSON 을 받아 DS 가이드대로 정규화 (slug / category / typography 매칭). API: `/api/figma-wash` (POST 받기) / `/figma-wash/save` (저장) / `/figma-wash/promote` (승격). 자세한 사양 → `../mockup/mockup-docs/WASH_SPEC.md`

## 자동 생성 산출물 (gitignore 권장)

`npm run sync:shared` 가 만드는 것 — 직접 편집 금지:
- `src/styles/tokens.css`
- `src/lib/page-flow.json`
- `src/lib/page-interactions.auto.json`
- `src/components/library/` (전체 — `_state-context.tsx` / `index.json` / `atom,mol,ogn/*.tsx`)
- `src/app/library/preview/<MODULE>/<screen>/page.tsx`

> 현재 git 에 untracked 상태. `.gitignore` 에 추가하든, 산출물도 commit 하든 결정 사안.

## UI 디자인 원칙

- Material 3 근사 (Indigo primary, rounded-2xl 카드, rounded-full 버튼)
- Pretendard 폰트 (한글 최적화 — CDN)
- Sidebar: w-60 drawer (접힘 시 w-10), 섹션 헤더 (uppercase tracking-[0.1em] bold), 활성 메뉴 indigo bg + shadow
- surface-card / surface-card-md utility (globals.css) 재사용
- bg chip 5종 (light/white/grid/dark/black) — 미러링 배경 토글

## 미해결 / 다음 단계

### 진행 중 (Phase 1d)
- **기본 컴포넌트 추론**: 사용자가 빼먹는 공통 컴포넌트 (status-bar, GNB 등) 를 AI 가 추정해 보고서에 보완 제안. 체크박스로 포함/제외 토글
- **코드 생성 히스토리**: spec-analysis-history 메뉴에 코드 생성 결과도 함께 표시
- **scenario 태그** (`[modal]` / `[state]`) — React 컴포넌트 처리 (BottomSheet, error/empty visuals)

### 더 큰 미해결 (Phase 1c)
- **승격 → web/projects/<id>/ 저장**: 검수 통과 시 실제 spec 파일 생성. 현재는 localStorage status 만 변경
- **DS 업데이트 적용**: raw 값 감지 → 토큰 추가 / spec 안 raw → 토큰 참조로 자동 변환
- **병합 액션**: 기존 라이브러리 컴포넌트와 ref 교체

### 장기
- Figma Plugin (Scripter 복붙 대체 — 일부 manifest 는 mockup/figma-plugin/ 이미 있음)
- 유저/프로젝트 DB (Supabase)
- 아이콘 자동 SVG import

## 자주 마주치는 문제

| 증상 | 원인 / 해결 |
|---|---|
| `Cannot find module '@/components/library/...'` | `npm run sync:shared` 안 돌림 — 자동 생성물 |
| `/pages` 페이지 목록 비어있음 | 같은 이유 — sync:shared |
| 401 / "ANTHROPIC_API_KEY missing" | `.env.local` 작성 안 됨 |
| `/library/preview/...` 가 404 | spec 없거나 이름 mismatch — `mockup/component-specs/page/<MODULE>/<screen>.json` 확인 |
| sb-html 영역 "SB HTML 없음" | `mockup/scripter/sb-html/<id>.html` 없음 → mockup 에서 `node scripter/generate-sb-html.js` 후 sync:shared |
| iframe 임베드 시 Sidebar 가 안에 또 보임 | Sidebar 의 `/library/preview` 가드 깨졌는지 확인 |
| nested mol 토글 안 됨 / desync | PageStateContext 가 안 흘러옴 — page 가 Context Provider 로 감싸는지 확인 |
| 페이지 전환 시 깜박임 | iframe key 박았는지, embed 가 useSearchParams 로 SSR-stable 인지 확인 |
