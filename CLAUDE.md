# Claude Session Context — SKT Genui (Workspace 전역)

이 파일은 `@Genui/` 를 열고 세션을 시작할 때 자동 로드됩니다.
두 작업 공간이 함께 있는 wrapper 프로젝트이며, 자세한 컨텍스트는 각 하위 폴더의 `CLAUDE.md` 에 있습니다.

## 폴더 구조

```
@Genui/                          (이 루트 — wrapper)
├── CLAUDE.md                    (이 파일, 전역 안내)
├── docs/                        ← 스킬 공통 참조 문서 (make-atomic 등)
│   ├── format/
│   │   └── atomic-guidelines.md (atom/mol/ogn 분류 기준 — Classifier 에이전트가 읽음)
│   └── components/              (컴포넌트 산출물)
│       ├── json/                (make-cmp 생성 component-spec JSON)
│       └── tsx/                 (make-cmp 자동 생성 React 컴포넌트)
├── mockup/                      ← 디자인 시스템 & Figma 자동화 (원본, source of truth)
│   ├── CLAUDE.md                (mockup 전용 컨텍스트 — 함정·네이밍·도구)
│   └── README.md
└── web/                         ← 웹서비스 (Next.js 16 + Anthropic SDK)
    ├── shared/                  (mockup/ 에서 복제된 read-only 스냅샷)
    ├── CLAUDE.md                (web 전용 컨텍스트 — Next 16 주의·구조·빌드 파이프라인)
    └── README.md
```

## 두 작업 공간 규칙

- **mockup/** 이 source of truth. 디자인 시스템, 스펙, 아이콘, Figma 자동화 도구는 모두 여기서 편집
- **web/** 은 `shared/` 아래 복제본만 읽음 (`fs` 접근은 `src/lib/paths.ts::sharedRoot()` 로 일원화)
- **예외: `mockup/mockup-docs/` 는 sync 안 함** — `web/src/lib/docs-loader.ts` 가 mockup 원본을 직접 참조해서 AI 프롬프트에 주입
- mockup 편집 후 web 에 반영: `cd web && npm run sync:shared`
- 세션 시작 시 `mockup/` 또는 `web/` 에서 열면 해당 폴더의 CLAUDE.md 만 자동 로드 → 맥락 분리

## 스킬 문서 경로

| 스킬 | 역할 | 저장 위치 |
|---|---|---|
| `/make-cmp` | Figma API → component-spec JSON + TSX 자동 생성 | `json/{name}.json` + `tsx/{name}.tsx` |
| `/make-mockup` | storyboard MD → HTML preview + page spec JSON → Figma | `docs/output/mockup/{SCREEN-ID}.html` |
| ~~`/make-tsx`~~ | ~~(폐기 — make-cmp 에 통합)~~ | — |
| ~~`/make-atomic`~~ | ~~(폐기 — make-cmp 로 대체)~~ | — |

`/make-cmp` 상세: `.claude/skills/make-cmp/orchestrator.md`  
`/make-mockup` 상세: `.claude/skills/make-mockup/orchestrator.md`

## 요약 포인터

- mockup 작업 (디자인 시스템 / Figma) 시작 전 → [mockup/CLAUDE.md](mockup/CLAUDE.md) 필독
- 웹서비스 개발 (Next.js / Anthropic API) 시작 전 → [web/CLAUDE.md](web/CLAUDE.md) 필독
- 서비스 설계서: `web/docs/SERVICE_DESIGN.md`

## 작업 스타일 (공통)

- **사용자는 비개발자** — 명령어/기술 용어는 "이건 이런 걸 하는 거야" 풀이 설명 붙이기
- 소요 시간/토큰 추정치 작업 종료 시 보고
- 디자인 디테일 꼼꼼히 — 확신 안 서면 사용자 확인
- 파일 일괄 수정 시 bulk sed 지양 (맥락별 의미가 다를 수 있음 — 개별 Edit)
- web 사용자 작업물은 `web/projects/<id>/` 에 저장. mockup/ 직접 쓰기 금지 (web 에서 mockup 편집 절대 X)
