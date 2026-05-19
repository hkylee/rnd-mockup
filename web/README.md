# Genui Web

이미지 / 기능내역서 / 정책서 → 화면 분석 → spec 자동 작성 → Figma 컴포넌트 번들 자동 생성하는 Next.js 웹서비스.

상위 wrapper 안내 → [../README.md](../README.md)

---

## 처음 시작 (다른 머신에서 클론한 직후)

> 비개발자 메모: 아래 단계는 "처음 한 번만". 이미 한 번 셋업한 머신에선 `npm run dev` 만 돌리면 됨.

### 1. 의존성 설치
```bash
npm install
```
> 약 1~2분. `node_modules/` 폴더가 생기면 됨. (이건 라이브러리들 다운로드하는 거 — git 에 안 올라가니까 머신마다 따로 받아야 함)

### 2. 환경변수 작성
```bash
cp .env.example .env.local
```
그리고 `.env.local` 을 열어서:
```
ANTHROPIC_API_KEY=sk-ant-...본인키...
```
> Anthropic API key 는 https://console.anthropic.com/settings/keys 에서 발급. **이 파일은 절대 commit 안 됨** (`.gitignore` 처리됨)

### 3. mockup → shared 동기화 + 빌드
```bash
npm run sync:shared
```
이 한 줄이 4가지 일을 순차 실행:
1. `mockup/` 의 DS·specs·scripter·icons → `web/shared/` 로 복제
2. `build:tokens` — DS JSON → CSS Variables (`src/styles/tokens.css`)
3. `build:flow` — `mockup/specs-flow/*.md` → `src/lib/page-flow.json` (페이지 동선)
4. `build:interactions` — specs-input 의 인라인 태그 → `src/lib/page-interactions.auto.json`
5. `build:components` — `shared/component-specs/**/*.json` → React 컴포넌트들 (`src/components/library/`) + 페이지 라우트들 (`src/app/library/preview/...`)

> *"왜 이걸 해야 해?"*: web 은 mockup 의 디자인 시스템·spec 을 읽어서 화면을 그리는데, mockup 원본을 직접 읽지 않고 `shared/` 복제본을 읽도록 분리되어 있어. 그래서 mockup 편집 → web 에 반영하려면 항상 이 명령을 다시 돌려야 함.

### 4. 개발 서버 시작
```bash
npm run dev
```
브라우저에서 http://localhost:3000

---

## 주요 페이지 (지도)

| URL | 메뉴 | 역할 |
|---|---|---|
| `/sources` | 컴포넌트 라이브러리 | DS / atom / mol / ogn / page / icon 카탈로그 |
| `/pages` | 페이지 라이브러리 | 모듈별 페이지 — React 미러링 + SB HTML 좌우 split |
| `/docs/dp` | 디자인 원칙 | DESIGN_PRINCIPLES.md 뷰어 |
| `/docs/templates` | 템플릿 | UX 의도 / 정책 분석 / SB 작성 가이드 모음 |
| `/spec-analysis` | 기능내역서 분석 | 기능내역서 paste → AI 분석 → 코드 생성 |
| `/spec-analysis-history` | 히스토리 | screen id 별 분석 archive |
| `/generate` | UI 생성 | 이미지 → Detection Board (이미지 분석 기반) |
| `/figma-wash` | Figma 워싱 | Figma plugin 추출 spec → DS 가이드대로 변환 |
| `/review` | 검수 | candidate 진단 + 승격 액션 |
| `/review-history` | 내역 | 승격/병합/스킵 이력 |
| `/scripter/sync` | DS Run | mockup `bundle.js --sync` 실행 |
| `/scripter/library` | Component Run | mockup `bundle.js --library` 실행 |
| `/library/preview/<MODULE>/<screen>` | (내부) | iframe 안 모바일 미러링용 — `/pages` 가 임베드 |

---

## 자주 쓰는 명령

| 목적 | 명령 |
|---|---|
| 개발 서버 | `npm run dev` |
| mockup 변경 반영 (전체) | `npm run sync:shared` |
| 빌드 일부만 | `npm run build:tokens` / `build:flow` / `build:interactions` / `build:components` |
| 프로덕션 빌드 | `npm run build` |
| 린트 | `npm run lint` |

> 일부만 빌드: mockup 의 spec 만 고쳤다면 `build:components`, DS 토큰만 고쳤다면 `build:tokens` 처럼 좁게 돌리면 빠름. 단, sync 가 먼저 필요한 경우엔 `sync:shared` 가 안전.

---

## 폴더 구조 요약

```
web/
├── shared/                    ← mockup 스냅샷 (gitignore, sync:shared 로 복원)
├── scripts/                   ← 빌드 스크립트 5종
│   ├── sync-shared.mjs
│   ├── build-tokens.mjs
│   ├── build-flow.mjs
│   ├── build-interactions.mjs
│   └── build-components.mjs
├── src/
│   ├── app/                   ← Next.js App Router (페이지 + API 라우트)
│   ├── components/            ← Sidebar 등 UI + library/ (자동 생성)
│   ├── lib/                   ← paths.ts (sharedRoot 헬퍼) / docs-loader / catalog 등
│   └── styles/tokens.css      ← (자동 생성) DS → CSS Variables
├── docs/                      ← 서비스 자체 설계서
├── .env.local                 ← API key (gitignore)
└── CLAUDE.md                  ← Claude Code 세션 컨텍스트 (Next 16 주의 포함)
```

자세한 코드 지도 / 핵심 규칙 → [CLAUDE.md](CLAUDE.md)

---

## ⚠️ Next.js 16 주의

이 프로젝트는 Next.js **16.2.4** (cutting-edge). 학습 데이터와 **breaking change 있을 수 있음**. 코드 쓰기 전에 `node_modules/next/dist/docs/` 의 관련 가이드를 먼저 읽는 것을 권장.

자세히 → [AGENTS.md](AGENTS.md)

---

## 자주 마주치는 문제

| 증상 | 해결 |
|---|---|
| `npm run dev` 시 "Cannot find module '@/components/library/...'" | `npm run sync:shared` 안 돌렸음 — 이게 자동 생성하는 파일 |
| `/pages` 들어가니 페이지 목록 비어있음 | 같은 이유 — sync:shared |
| API 호출 시 401 / "ANTHROPIC_API_KEY missing" | `.env.local` 작성 안 됨 또는 키 잘못됨 |
| `/library/preview/...` 가 404 | spec 파일 (mockup/component-specs/page/...) 이 없거나 이름 mismatch |
| sb-html 영역에 "SB HTML 없음" | mockup 의 `scripter/sb-html/<id>.html` 이 없음 → mockup 에서 `node scripter/generate-sb-html.js` 후 sync:shared |
