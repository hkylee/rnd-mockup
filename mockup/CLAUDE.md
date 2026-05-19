# Claude Session Context — SKT Genui (Mockup)

이 파일은 `@Genui/mockup/` 에서 Claude Code 세션 시작 시 자동 로드됩니다.
처음 시작 setup → [README.md](README.md). 전역 안내 → [`../CLAUDE.md`](../CLAUDE.md).

## 프로젝트 정체

**SKT 디자인 시스템 컴포넌트를 JSON 스펙 → Scripter / Figma Plugin → Figma 로 자동 생성**하는 파이프라인 + 정책서/기능내역서 → spec 분석 도구 모음.

전체 구조는 [README.md](README.md), 자세한 도구 사양은 `mockup-docs/` 참조.

## 폴더 구조

```
mockup/
├── skt-design-system.json      🎨 DTCG 형식 토큰 source of truth
├── component-specs/             📋 컴포넌트 스펙
│   ├── atom/                    btn, icon-bubble, thumb, tag, accordion, banner, ...
│   ├── mol/                     card-header, ai-insight, list-item-*, ...
│   ├── ogn/                     header, GNB, status-bar, tab-bar (공통)
│   ├── ogn/MBR/                 회원/탈퇴/휴면 모듈
│   ├── ogn/MYBEN/               MY 혜택 모듈
│   ├── ogn/PRDD/                상품 상세 모듈
│   ├── ogn/SCH/                 검색 모듈
│   ├── page/<MODULE>/           화면 (Frame, Component 아님)
│   └── sb/                      SB JSON 스키마 정의
├── figma-icons/                 🖼 SVG 아이콘 (340+ 카테고리별)
│
├── scripter/                    ⚙️ Figma 자동화 도구 (Node CLI + Scripter paste)
│   ├── bundle.js                ★ 진입점 — DS+spec+core 를 paste 용 .js 로 번들
│   ├── generator-core.js        Figma Plugin API 로 Component 빌드 + Variable 바인딩
│   ├── sync-tokens.js           DS JSON → Figma Variables (idempotent)
│   ├── audit.js                 spec 자동 검증 (AUDIT_RULES 6 규칙)
│   ├── generate-sb.js           specs-input MD → SB JSON (스토리보드)
│   ├── generate-sb-html.js      SB JSON → SB HTML (도메인 메타 시각화)
│   ├── parse-sb-html.js         외부 SB HTML → SB JSON 역변환
│   ├── render-sb.js             SB JSON 렌더링
│   ├── poc-sb-html-v2.js        SB HTML v2 PoC
│   ├── generate-connect.js      Code Connect mapping 생성
│   ├── wash.js                  ⭐ Figma 손그림 → DS 가이드대로 spec 정규화
│   ├── wash-runtime.js          ⭐ wash 런타임 (token-match · category 추론)
│   ├── build-plugin-lookup.js   DS 변경 시 plugin typography lookup 재생성
│   ├── icon-registry.json       아이콘 카테고리 메타
│   ├── connect/                 (gitignore — 재생성 가능)
│   ├── runs/                    (gitignore — 번들 결과물)
│   ├── sb/                      (gitignore — SB JSON 자동 생성)
│   └── sb-html/                 (gitignore — SB HTML 자동 생성)
│
├── figma-plugin/                🔌 ⭐ Genui Spec Extractor (Figma 손그림 → spec JSON)
│   ├── manifest.json            Figma plugin manifest (Cmd+I import)
│   ├── code.js                  Figma 측 (selection 분석 + boundVariable 추출)
│   ├── ui.html                  plugin UI (복사 / 웹으로 전송)
│   └── README.md                등록 절차 + 사용법
│
├── mockup-docs/                 📐 가이드 문서들 — single source of truth
│   ├── ARCHITECTURE.md          파이프라인·파일 역할
│   ├── DESIGN_PRINCIPLES.md     위계·typography·spacing·페이지 (DP)
│   ├── CONVENTIONS.md           네이밍·스키마·토큰·layoutAlign
│   ├── AUDIT_RULES.md           spec 진단 규칙
│   ├── WORKFLOWS.md             자주 쓰는 작업 레시피 + Lean 9-step 흐름
│   ├── TROUBLESHOOTING.md       알려진 이슈 모음
│   ├── ONBOARDING.md            새 동료 첫 시작
│   ├── UX_GOVERNANCE.md         UX 7원칙
│   ├── SPEC_INPUT_TEMPLATE.md   기능내역서 입력 양식
│   ├── SPEC_REPORT_TEMPLATE.md  분석 보고 양식
│   ├── POLICY_REPORT_TEMPLATE.md 정책서 분석 양식
│   ├── USER_FLOW_TEMPLATE.md    Use Case 동선 양식
│   ├── EXTRACT_ANALYSIS_TEMPLATE.md  ⭐ Figma plugin 추출 spec 분석 양식
│   ├── INTERACTION_TAGS.md      ⭐ 8 인터랙션 태그 시스템
│   ├── WASH_SPEC.md             ⭐ Figma 손그림 → DS 자동 변환 사양
│   └── notion-naming-proposal.md
│   → web 의 docs-loader 가 직접 참조 (sync 안 함, single source of truth)
│
├── specs-input/                 📝 기능내역서 입력 (MD)
├── specs-flow/                  🔀 페이지 동선 (MD) — web build-flow 가 파싱
├── specs-report/                📊 분석 보고서 (MD)
├── sb-doc/                      📜 SB 작성 가이드
│
├── _archive/                    (옛 자료 — gitignore old/)
├── CLAUDE.md                    (이 파일)
└── README.md
```

> ⭐ = 최근 신설 (figma-plugin / wash / INTERACTION_TAGS / WASH_SPEC / EXTRACT_ANALYSIS_TEMPLATE)

## 핵심 도구 한 마디씩

| 도구 | 입력 → 출력 | 사용 시점 |
|---|---|---|
| `scripter/bundle.js` | spec JSON → Scripter paste 용 .js | 컴포넌트/페이지 Figma 에 빌드 |
| `scripter/sync-tokens.js` | DS JSON → Figma Variables | DS 토큰 추가/수정 시 (idempotent) |
| `scripter/audit.js` | spec → 진단 결과 | spec 작성 후 자동 검증 |
| `scripter/generate-sb.js` | `specs-input/<file>.md` → `scripter/sb/<id>.sb.json` | SPEC_INPUT 에 SB description 들어가면 자동 SB 변환 |
| `scripter/generate-sb-html.js` | SB JSON → SB HTML | 도메인 메타 시각화 (web `/pages` 의 우측 iframe) |
| `scripter/wash.js` | Figma plugin 추출 spec → DS 가이드 정규화 | 손그림 → 표준 spec 변환 |
| `figma-plugin/` (Genui Spec Extractor) | Figma 선택 → spec JSON + 토큰 매칭 | 손그림 / 기존 컴포넌트 추출 |

자세한 사양:
- Figma plugin → [`figma-plugin/README.md`](figma-plugin/README.md)
- Wash → [`mockup-docs/WASH_SPEC.md`](mockup-docs/WASH_SPEC.md)
- 인터랙션 태그 → [`mockup-docs/INTERACTION_TAGS.md`](mockup-docs/INTERACTION_TAGS.md)

## 🏗 아키텍처 핵심

### 섹션 프레임 없음
**Component 는 Atom / Molecule / Organism 페이지에 직접 배치됨.** 이전 버전은 각 Component 를 섹션 프레임으로 감쌌으나 현재는 제거. 이유:
- Figma Assets 패널이 `/` 기반 이름으로 자동 폴더링 → 시각 그룹핑 불필요
- 빈 섹션이 누적되는 문제 해결

generator 가 자동으로:
- 기존 동일 이름 Component 가 있으면 그 위치 이어받아 교체
- 기존 섹션 wrapper 가 있으면 같이 삭제
- 신규 Component 는 페이지 하단에 80px 간격으로 추가

초기 정리 필요 시: `node scripter/bundle.js --cleanup` → Scripter Run.

### sync-tokens 는 idempotent
DS 수정 후 `--sync` 재실행해도 **기존 Variable ID 유지** (값만 업데이트, 신규만 create). 이전의 destructive 모드는 제거. 덕분에 DS 수정 시 전체 Component 재생성 불필요.

### page 카테고리 = Frame, Component 아님
`page/*` 는 generator 가 다른 경로 (`generateScreen`) 로 처리. "Page" 라는 별도 Figma 페이지에 **top-level Frame** 으로 생성 (재사용 불필요). variants, exposeAs, Component Property 처리 모두 skip. 배경색/레이아웃만 spec 따라 빌드 + children 을 `ref` 로 조합.

### bundle.js 의 topo-sort (intra-category 의존성 자동 정렬)
`--library` / `--all` batch 빌드 시, 같은 카테고리 (예: mol) 안에서도 ref 의존성 따라 정렬됨. 즉 `mol/list-item-movie` 가 `mol/list-item-title-sub-default` 를 ref 하면 title-sub-default 가 먼저 빌드. (이전엔 alphabetical → coupon/movie 가 title-sub-default 보다 먼저 → ref 못 풀리는 버그 → topo sort 로 해결.)

### bundle.js 의 PAGE_FLOW_ORDER (Figma Page 위 frame 그리드)
Figma "Page" 위에 페이지 frame 들을 **UC × step grid** 로 배치 (row=UC, col=step). 새 페이지 추가 시 `bundle.js PAGE_FLOW_ORDER` 에 매핑 추가. (사용자 명시 결정 — 한 화면 한 자리)

### generator-core 의 layoutPositioning ABSOLUTE 지원
spec 의 자식에 `layoutPositioning: "ABSOLUTE"` + `x`, `y`, `constraints` 를 주면 auto-layout flow 에서 빠지고 부모 frame 기준 절대 좌표로 배치됨. BottomSheet 페이지의 dim layer (전체 화면 덮는 반투명) 같은 경우 사용. mode: NONE 일 때 auto-layout 전용 속성 (sizingMode/alignItems/padding) 은 자동 skip — 안 그러면 Figma 가 throw.

### ogn 표준 구조 = 외피 + content wrapper (DP § 4.3)
ogn spec 은 base (외피, padding 0, fill·width 같은 visual identity) + 1개 inner `content` group (auto-layout, padding 24) 으로 구성. 자식 다 content 안에. 전체 ogn (chrome + gallery + 단일 텍스트 ogn 제외) 이 이 패턴 따름.

### page 배열 — `-card` 네이밍 ogn 은 padding 24 wrap (DP § 9.1.3 ⭐)
**원칙**: ogn / mol 자체는 좌/우 여백 X (외피 padding 0 + content padding 24). page 가 ref 시 자식별 padding 다르게 못 줌 (Figma 제약). card 류만 화면 끝에서 24 띄움 — page spec 안 -card ref 마다 padding 24 horizontal group wrap 명시.

```jsonc
// page spec content children 안:
{
  "kind": "group", "id": "summary-wrap", "layoutAlign": "STRETCH",
  "layout": { "mode": "VERTICAL", ..., "paddingLeft": "{...spacing.2xl}", "paddingRight": "{...spacing.2xl}", ... },
  "visual": { "cornerRadius": 0, "fill": null, ... },
  "children": [
    { "kind": "ref", "id": "summary", "component": "ogn/BIL/bill-summary-card", "layoutAlign": "STRETCH" }
  ]
}
```

list / form 류 ogn 은 wrap 없음 (풀폭 — 화면 끝까지).

자동화: `node scripter/wrap-page-cards.js [page/MOD/screen]` — page spec 의 -card ref 들을 자동으로 wrap 변환. 새 page 추가 후 한 번 돌리면 일괄 적용.

## 네이밍 규칙 (엄격)

| 계층 | 패턴 | 예시 |
|---|---|---|
| Atom | `atom/{name}` | `atom/btn`, `atom/txt`, `atom/icon/sparkle`, `atom/barcode`, `atom/thumb`, `atom/logo/T`, `atom/icon-bubble` |
| Molecule | `mol/{component-modifier}[/{variant}]` | `mol/card-product/hor`, `mol/card-header`, `mol/ai-insight` |
| Organism (공통) | `ogn/{name}` | `ogn/header`, `ogn/GNB`, `ogn/status-bar`, `ogn/tab-bar` |
| Organism (모듈 종속) | `ogn/{MODULE-CODE}/{component}[/{variant}]` | `ogn/MYBEN/card-points`, `ogn/MBR/card-bill-summary` |
| Screen (Page) | `page/{MODULE-CODE}/{screen-name}` | `page/MYBEN/main`, `page/MBR/leave-impact` |

- **`mol` 이 맞음. `mlc` 는 과거 잘못된 이름**
- 모듈 코드는 Notion "모듈 정의서" DB 기준 (MYBEN, MBR, MYCPN, TPNT, PRDD, PRDL, SCH 등)
- 현재 MY 혜택 화면은 **MYBEN 통일 전략**

## 토큰 참조 문법

- DTCG 네이티브 형식: `"{semantic.color.brand.primary}"` (중괄호 + 점 경로)
- 재귀 resolver 가 alias chain 을 끝까지 풀어줌
- **절대 raw 값(`#3617CE`, `16px`) 직접 쓰지 말 것**

특수 값:
- `"120%"` — 비율 값. lineHeight 에서 사용. generator 가 PERCENT unit 으로 변환
- `"FILL"` / `"HUG"` — width/height. baseline width 정책 § 13 참조

페이지 bg intent 토큰 (DESIGN_PRINCIPLES § 9.1.2):
- 홈 (`page/{MODULE}/main`) → `{semantic.color.background.page-home}` (그레이)
- 서브 페이지 (그 외) → `{semantic.color.background.page-sub}` (화이트)
- `surface.primary/secondary` 직접 참조 금지 — intent 가 흐려짐. audit Rule 7 이 검증.

## 스펙 JSON 스키마 (축약)

```jsonc
{
  "$schema": "component-spec-v1",
  "name": "atom/btn",
  "category": "atom",          // atom | mol | ogn
  "widthFallback": "{...}",    // top-level Component baseline 폭 (FILL 일 때 fallback)
  "base": {
    "layout":  { "mode": "HORIZONTAL", "primaryAxisSizingMode": "AUTO", "paddingLeft": "{...}", ... },
    "visual":  { "cornerRadius": "{...}", "fill": "{...}", "stroke": null, "shadow": null },
    "children": [
      { "kind": "text", "id": "label", "content": "버튼", "textStyle": "{...}", "color": "{...}", "exposeAs": "label" },
      { "kind": "ref",  "id": "icon",  "component": "atom/icon/sparkle", "variant": {...}, "props": {...}, "layoutAlign": "STRETCH" },
      { "kind": "group", "id": "wrap", "layoutAlign": "STRETCH", "layout": {...}, "visual": {...}, "children": [...] }
    ]
  },
  "variants": {
    "axes": [ { "name": "type", "values": ["primary", "secondary"] } ],
    "overrides": {
      "type=primary,state=pressed": { "visual": { "fill": "{...}" } },
      "type=secondary,state=default": { "children[label].color": "{...}" }
    }
  },
  "_comment": "정책 ID: NC-001"  // 법적 고지 마킹 (🔴 필수 / 🟡 사용성)
}
```

자세한 스키마는 [`mockup-docs/CONVENTIONS.md`](mockup-docs/CONVENTIONS.md) § 5.

## 필수 주의 사항 (함정들)

> ⚠️ trapped knowledge — 코드만 봐선 알 수 없는 함정 모음. 작업 전 한 번씩.

### 1. Scripter 예약 식별자
Scripter 는 다음 이름들을 **전역으로 예약**합니다. 변수/파라미터 이름으로 쓰면 `'X' is not defined` 또는 `expecting ';'` 에러:
- `node`, `map`, `page`, `color`, `rgb`

→ 대신 `tgt`, `varMap`, `targetPage`, `resolvedColor`, `rgbColor` 같은 이름 사용.

### 2. 정규식 리터럴에 한글 금지
`/[가-힣]/` 같이 한글을 직접 넣으면 Scripter 파서 실패 → `가-힣` 유니코드 escape 사용.

### 3. `layoutAlign: "MAX"` (right-align) 은 Figma v3 auto-layout 에서 child 레벨 미지원
→ horizontal wrapper (`kind: "group"` with `primaryAxisAlignItems: "MAX"`) 로 감싸야 함.

### 4. lineHeight PERCENT + Variable 바인딩 충돌
Figma 에서 `setBoundVariable("lineHeight", v)` 호출 시 unit 이 PIXELS 로 강제됨. 따라서 **PERCENT lineHeight 는 Variable 바인딩 skip**, raw 값만 적용됨. generator 내부에서 자동 처리.
- 결과: Figma 에서 lineHeight 값은 올바름 (120%) 이지만 **Variable chip 없음**
- fontSize / letterSpacing 는 Variable 바인딩 정상 작동

### 5. Variable 바인딩 가능/불가
| 가능 (COLOR / FLOAT) | 불가 (composite) |
|---|---|
| fills/strokes color, paddingX/Y, itemSpacing, cornerRadius, strokeWeight, fontSize, lineHeight(PIXELS), letterSpacing, width/height | typography (composite 전체), shadow, lineHeight(PERCENT) |

typography composite 는 내부 field 각각 (fontSize/lineHeight/letterSpacing) 이 각자 해당 foundation Variable 로 바인딩됨.

### 6. Cascade 재생성 — 자동 instance swap 으로 거의 불필요해짐 (2026-05-05) ⭐
generator-core 가 새 Component 만든 직후 모든 instance 의 mainComponent 를 `swapComponent(new)` 로 redirect → old 삭제돼도 instance 끊기지 않음.

**대부분의 변경 (visual·copy·padding·radius·fill·stroke 등) 은 cascade 불필요** — 단일 spec 만 빌드해도 ogn/page 의 instance 가 자동 갱신.

여전히 cascade (또는 사용처 spec 수정) 필요한 케이스:
- variants axis 추가/제거 — 구조가 바뀜
- spec 이름 변경 — ref lookup 깨짐
- 자식 id 변경 — exposeAs 매칭 깨짐

자세한 내용 → [`mockup-docs/TROUBLESHOOTING.md`](mockup-docs/TROUBLESHOOTING.md) § 5.

### 7. Component Property 는 단일 Component 에도 노출됨
이전 버그: variants 있는 Component Set 만 `exposeAs` 로 Property 노출, 단일 Component 무시. 현재는 수정됨. `group` 안 nested text 의 `exposeAs` 도 재귀 탐색.

### 8. Pretendard 폰트
한글 텍스트는 자동으로 Pretendard 선택됨 (generator 내부 `pickFont`). 시스템에 Pretendard 없으면 Inter 로 fallback + 경고.

### 9. ref 의 props 는 nested instance 까지 재귀 매칭
상위 ref 의 `props` 에 키를 넣으면 generator (`applyInstanceProps`) 가 outer instance 먼저, 매칭 안 되면 **내부 nested instance 들을 탐색**해서 componentProperty 에 적용. 즉 `list-item-coupon` 이 ref 로 품은 `atom/btn` 의 `label` 도 상위에서 `props: { label: "상세" }` 로 주입 가능.

⚠️ **같은 키 여러 자식 시 첫 자식만 매칭** — outer ref 가 여러 nested instance 를 품고 그 instance 들이 같은 props key (예: `label`, `headline`) 를 공유하면 generator 는 **첫 매칭 nested 에만 적용 + 종료**. 2번째 카드는 baseline 그대로.
- 사례 (해결됨): page/SCH/results 의 ogn/tab ref → atom/tab-item × 4 가 모두 `label` 키 → 첫 tab 만 props 적용. 해결: ogn/tab → atom/tab-item × 4 직접 ref (각각 props 따로)
- 사례 (회피): ogn/MBR/post-actions 신설 시도 (외피 + post-action-card × 2) → 둘 다 `headline` 키 → 첫 카드만 매칭. **ogn 신설 포기 + page-level wrapper group 으로 인정** (DP § 4.4 v2)
- 회피 패턴: (a) 같은 mol N개 묶어야 하는 ogn 은 만들지 말고 **page 직접 N ref**, 또는 (b) props 키를 자식별로 unique 하게 (`label-1`, `label-2`). (a) 권장

### 10. `mergeSpec` 의 children 경로는 top-level only
`variants.overrides` 의 `children[id].foo` 경로는 **base.children 바로 아래** id 만 매칭. `children[group].children[text].foo` 같은 중첩 경로는 작동 안 함. group 안쪽 자식의 스타일 분기가 필요하면 variants 말고 **별개 mol 로 분리**해서 해결.

### 11. `counterAxisSizingMode` 의 의미는 `layout.mode` 에 따라 반대
- `mode: VERTICAL` → primary=세로, counter=가로 → `counterAxisSizingMode` 는 **width** 처리 방식
- `mode: HORIZONTAL` → primary=가로, counter=세로 → `counterAxisSizingMode` 는 **height** 처리 방식

→ "카드 width 를 FIXED 로" 원할 때 HORIZONTAL 카드(`card-brand-list`, `card-promo`, `promo-banner`) 에선 `counterAxisSizingMode` 가 아닌 `primaryAxisSizingMode` 를 건드려야 함. 여러 spec 을 일괄 수정할 때 특히 주의 — 이 속성을 bulk sed 로 치면 HORIZONTAL/VERTICAL 뒤섞여 깨짐.

### 12. ⚠️ deprecated — 옛 STRETCH 우회책 (FIXED baseline)
이전 버전: "STRETCH 안 먹으면 baseline 을 FIXED 로 박아 우회". → § 13 (FILL 표준) 으로 흡수됨.

### 13. baseline width = "FILL" 표준 + generator 자동화
**atom/mol/ogn 의 `base.layout.width` 는 `"FILL"` 이 default.** FIXED 토큰 박지 않음. `widthFallback` (spec top-level 필드) 으로 top-level Component baseline 폭 명시. `"HUG"` 는 top-level 도 OK.

상세 정책 / 매핑표 → [`mockup-docs/CONVENTIONS.md`](mockup-docs/CONVENTIONS.md) § 6.3 (source of truth).

**spec 작성자 가이드** (외워둘 4줄):
- ogn 거의 다 FILL (page padding 따라 자동 적응)
- 컨텐츠 따라가는 작은 atom/mol (`btn`, `tag`, `btn-icon`, inline 액션) 은 HUG
- chrome (status-bar/gnb/tab-bar) 도 FILL
- `widthFallback` 은 spec top-level 필드 (base 안 아님). 명시 안 하면 generator default 327 (screen-content-width)

**generator 자동화** (메커니즘 이해용):
- **top-level Component fallback**: 부모가 auto-layout 아니라서 `width:"FILL"` 시 Figma API throw → generator catch 후 `spec.widthFallback` 토큰으로 자동 fallback
- **ref 자동 STRETCH 추론**: 자식 ref 의 `layoutAlign` 미지정 + ref 대상 spec.width === "FILL" + 부모 VERTICAL → 자동 STRETCH 부여 (height + HORIZONTAL 도 동일). 명시적 skip 은 `layoutAlign: "INHERIT"`. 구현: bundle.js 가 카테고리 spec 의 `{name → {width, height}}` 추출해 `SPEC_REGISTRY` 로 주입
- **자식 FILL Variable unbind**: baseline 이 widthFallback Variable 에 바인딩된 instance 가 STRETCH 박혀도 bound Variable 이 우선해 fixed width 유지되는 함정 → generator 가 `setBoundVariable("width"|"height", null)` unbind 후 FILL 적용

## 디자인 baseline 합의 (사용자 명시)

> 모든 baseline 은 [`mockup-docs/`](mockup-docs/) 안 source of truth 로 정착됨. 여기는 메모.

- **24 padding 표준** — ogn content wrapper 의 padding (DP § 4.3)
- **외피 + content wrapper** — ogn 표준 구조 (DP § 4.3)
- **sm size 기본** — atom 에 size variant 있으면 default = sm
- **도메인 텍스트** — 한글 placeholder 자연스럽게 (`mockup-docs/CONVENTIONS.md` § 5)
- **detail link 패턴** — 카드 우측 상단 chevron + "자세히"
- **NONE 모드 규칙** — `layout.mode: NONE` 시 auto-layout 전용 속성 자동 skip
- **서브 페이지 = Pattern B** (DP § 9.1.1) — 홈/GNB 외 모든 서브 페이지는 **page content padding 0 + ogn 자체 padding 24**. 이중 여백 회피
- **법적 고지 마킹** — 🔴 필수 / 🟡 사용성. spec JSON `_comment` 로 정책 ID 추적. 가이드: SPEC_REPORT § 0.5 / UX_GOVERNANCE § 8 / AUDIT_RULES Rule 12

### 정책 합의 — variant vs 별개 mol
- **mol 레벨 스타일 분기는 별개 mol 로 분리** — variants 축이나 nested override 로 분기 X. 이유: (a) generator override 경로는 top-level children 만 지원, (b) 사용자 명시 피드백 — variants/props 분기는 복잡해서 쓰지 않기로 결정
- **variant override 시 base 의 cornerRadius/padding 굳이 0 으로 깎지 말고 상속** — variant 시각 속성 공통 적용

### SB area 컴포넌트 추출 정책
SB area.organisms 는 spec '사용 컴포넌트' 라인의 ogn/mol/atom path 모두 나열. organism 만 고집 금지.

### Figma extract 분석 양식
plugin spec JSON paste 시 [`mockup-docs/EXTRACT_ANALYSIS_TEMPLATE.md`](mockup-docs/EXTRACT_ANALYSIS_TEMPLATE.md) 양식 그대로 응답 (§0 요약 / §1 분해 / §2 매칭 / §3 Variable / §4 DP / §5 계획 / §6 결정).

## 자주 하는 오해

- **"atom/icon 하나에 variant 로 340개 아이콘" ❌** → 각 아이콘은 별도 Component (`atom/icon/sparkle` 등)
- **"카드 껍데기를 mol 로 분리?" ❌** → 불필요. 껍데기는 `component.card.default.*` 토큰으로 organism 이 직접 참조
- **"섹션 프레임 만들어야 함?" ❌** → 아님. Component 는 페이지 직접 배치
- **atom 의 원자적 특성 (type/state/size) → variants 로 ✅** 하나의 spec 안 `variants.overrides` 로 커버
- **mol 레벨 스타일 분기 → 별개 mol 로 쪼개기 ✅** (위 합의 참조)

## docs 읽는 순서 (상황별)

| 상황 | 순서 |
|---|---|
| 새 화면 시작 (기능내역서 받음) | **`../governance/INDEX.md` (단계 분류·체크포인트)** → DESIGN_PRINCIPLES § 0·9 → CONVENTIONS § 5 → AUDIT_RULES |
| 신규 컴포넌트 위계 결정 | DESIGN_PRINCIPLES § 4 → § 5 → § 6 (안티패턴) |
| spec JSON 작성 | CONVENTIONS § 1·3·5·6 → DESIGN_PRINCIPLES § 1·2 (typography·spacing) |
| 카탈로그 진단 (재사용/리네임/신규) | AUDIT_RULES → DESIGN_PRINCIPLES § 6 |
| 기능내역서 → 분석 보고 | **`../governance/INDEX.md`** → SPEC_REPORT_TEMPLATE → DESIGN_PRINCIPLES → AUDIT_RULES |
| 새 동료 첫 시작 | ONBOARDING (그 후 위 표 참조) |
| 사용자가 새 화면 입력 | SPEC_INPUT_TEMPLATE 양식 |
| **정책서 → Figma (Lean 9 step)** ⭐ 표준 흐름 | WORKFLOWS § "🧭 정책서 → Figma (Lean 9 step)" — 검토 1 + 시각 검증 1 = 2 점 사용자 개입 |
| **Use Case 동선 정의** | governance/INDEX.md → USER_FLOW_TEMPLATE |
| **화면별 컨텍스트 정의** (사용자 상황·task·케이스·위계·톤) | governance/INDEX.md → SPEC_INPUT_TEMPLATE 의 # 컨텍스트 섹션 |
| **SPEC_INPUT → SB JSON 자동 변환** | SPEC_INPUT 의 SB description 필드 → `node scripter/generate-sb.js specs-input/<file>.md` → `scripter/sb/<screenId>.sb.json` |
| **Figma 손그림 추출 → 분석** | figma-plugin 추출 spec → [`EXTRACT_ANALYSIS_TEMPLATE.md`](mockup-docs/EXTRACT_ANALYSIS_TEMPLATE.md) → wash 결정 |
| **인터랙션 태그 추가** | INTERACTION_TAGS.md → SPEC_INPUT 에 태그 인라인 → `npm run build:interactions` (web) |

`../governance/` 는 "**무엇을 위해 만들 것인가**" (단계별 의도) — 새 플로우/화면 시작의 가장 첫 단추. DESIGN_PRINCIPLES 는 "**어떻게 만들 것인가**" (시각·구조 결정).

CONVENTIONS 핵심 § 위치: 네이밍 § 1 / 토큰 참조 + 필드 ↔ 타입 매칭 + icon-registry color § 3 / DS 구조 + Component 토큰 2-layer 패턴 § 4 / JSON 스키마 + 도메인 텍스트 § 5 / layoutAlign + width-STRETCH 충돌 + baseline width 정책 + constraints alias § 6 / INSTANCE_SWAP 패턴 § 7 / Properties 적극 활용 § 8 / List group 패턴 § 9.

DESIGN_PRINCIPLES 핵심 § 위치: baseline § 0 / typography § 1 / spacing + 관계 쌍 매핑 § 2 / 컴포넌트 분리 § 4 / variants § 5 / 안티패턴 § 6 / 페이지 구성 § 9.

## web 와의 연계

mockup 편집 후 web 에 반영:
```bash
cd ../web && npm run sync:shared
```

대상: `skt-design-system.json` / `scripter` / `component-specs` / `figma-icons`. **`mockup-docs/` 는 sync 안 함** — web 의 `docs-loader.ts` 가 직접 참조 (single source of truth).

상세 web 구조 → [`../web/CLAUDE.md`](../web/CLAUDE.md).

### Wash 흐름 (Figma 손그림 → web 자동 워싱)
1. Figma 데스크톱에서 손그림 컴포넌트 선택
2. `Plugins → Development → Genui Spec Extractor`
3. plugin UI 의 "웹으로 전송" 버튼 → `localhost:3000/figma-wash` 자동 진입
4. web 에서 DS 가이드대로 변환 (slug / category / typography 매칭) + 저장

## 작업 스타일 요청

- **Variable 바인딩 필수** — raw 값 쓰면 지적
- **스펙 → 번들 → Scripter Run 사이클** 밟되, 사용자 개입 단계 (Scripter paste+run) 에서 대기
- Cascade 재생성 필요하면 순서대로 클립보드 교체해 드리기
- **디자인 디테일 꼼꼼히** — 명도(text.primary/secondary/muted), fontWeight (regular/medium/semibold/bold), letterSpacing 은 이미지 비교 후 매칭. 확신 안 서면 사용자 확인
- **bulk sed 로 layout 속성 일괄 치환 금지** — counterAxisSizingMode, primaryAxisSizingMode 등은 layout.mode (HORIZONTAL/VERTICAL) 에 따라 의미가 다르고 nested group 에도 같은 속성명이 있어 일괄 치환 시 망가짐. 파일별 개별 Edit
- **"컴포넌트 전체 코드 생성"** 같은 광범위 요청 시:
  - spec 작성 → `component-specs/<cat>/<name>.json` (CONVENTIONS § 5 스키마 준수)
  - 번들 → `node scripter/bundle.js --library` (atom+icon+mol+ogn) 또는 `--all` (+ page)
  - 실행 → 결과 .js 파일 클립보드 자동 복사 → Figma Scripter ⌘V → Run
- **spec 작성 후 자동 검증**: `node scripter/audit.js`
- **빌드 범위 결정** ⭐: spec/DS 수정 후 항상 **좁은 범위부터** 선택 — `bundle.js {spec.name}` (1개) → `--changed` (cascade) → `--sync` (DS 만) → `--group {cat}` (1 카테고리) → `--library` / `--all` (전체). 단일 spec 수정에 `--library`/`--all` 자동 호출 금지. 자세한 결정 트리 → [`mockup-docs/WORKFLOWS.md`](mockup-docs/WORKFLOWS.md) § "⚡ 빌드 범위 결정"
- **신규 Figma 셋업 / 전체 재빌드** 시만 `node scripter/bundle.js --sync` + `--all` (2 Run)
- **사용자는 비개발자** — 명령어/기술 용어 나올 때 "이건 이런 걸 하는 거야" 풀이 설명 붙일 것
- **MBR 진행 상황** — Phase 1·2 완료 (신규 4 + 기존 5 보강). Phase 3 (page 일괄 footer-cs + 🟡 사용성) 남음
- 소요 시간/토큰 추정치 작업 종료 시 보고
