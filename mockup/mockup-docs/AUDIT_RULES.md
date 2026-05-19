# Catalog Audit Rules — 카탈로그 진단 규칙

## 목적

기능내역서 / 디자인 시안 → 컴포넌트 목록을 추출할 때, mockup 의 기존 카탈로그와 대조하여
**"재사용"** / **"리네임"** / **"신규 필요"** 로 분류하고, 새 spec 의 품질을 검증하는 기준.

mockup 카탈로그가 source of truth. 외부 도구(`web/`) 는 모두 이 문서의 규칙을 따름.

## 자동 검증

본 규칙은 **`scripter/audit.js`** 에 자동화되어 있음:

```bash
node scripter/audit.js              # 16 규칙 검사 (warning 통과)
node scripter/audit.js --strict     # warning 도 실패 처리
```

새 spec 작성 후 빌드 전 항상 실행 권장. exit code 로 통과/경고/실패 구분되어 CI 통합도 가능. 본 문서의 각 규칙이 audit.js 의 검사 함수와 1:1 대응.

---

## 1. 컴포넌트 분류 (3 분기)

기능내역서나 시안에서 발견된 컴포넌트 이름을 카탈로그와 대조한 결과:

| 분기 | 의미 | 처리 |
|---|---|---|
| **reused** | 카탈로그에 정확 일치 | 그대로 사용. 추가 작업 없음. |
| **rename** | 의미는 같으나 이름이 다름 (네이밍 차이) | 카탈로그 네이밍으로 통일 + description 에 원본 이름 기록 |
| **new** | 카탈로그에 없음 | 신규 spec 작성 (atom/mol/ogn 단위 결정 후) |

### 자주 발생하는 rename 케이스

| 발견된 이름 | 카탈로그 표준 | 사유 |
|---|---|---|
| `mlc/*` | `mol/*` | 과거 약어. atomic design 표준은 `mol` |
| `atom/iconbutton` | `atom/btn-icon` | kebab-case + 일관 약어 |
| `atom/thumnail` | `atom/thumb` 또는 `atom/thumbnail` | 오타 또는 풀네임 통일 |
| `atom/button(primary)` | `atom/btn` (variant `type=primary`) | 괄호 표기 → variant 축으로 |
| `ogn/sticky footer` | `ogn/sticky-footer` | 공백 → 하이픈 |
| **`mol/list-item-terms`** | **`mol/checkbox-item` (variant `tone=required`)** | 약관 도메인 종속 → 중립 mol 흡수 (2026-04-30) |
| **`mol/list-item-terms-optional`** | **`mol/checkbox-item` (variant `tone=optional`)** | 약관 도메인 종속 → 중립 mol 흡수 |
| **`mol/agreement-row` / `mol/term-row` 류 (도메인 row)** | **`mol/checkbox-item`** + 적절한 tone variant | 의미 매칭 우선 — analyze-spec 룰 + DP § 5.2 |
| **`mol/checkbox-list` / `mol/list-wrapper` 류 (가변 N row 묶음 mol)** | **사용처에서 row mol N개 직접 + `component.checkbox-list.*` 토큰** | row mol N개 묶는 wrapper mol 은 안티패턴 — Figma component 의 가변 N + 텍스트 override + padding 한계로 깨짐 (2026-04-30 mol/checkbox-list 폐기 사례). 토큰 (itemSpacing/paddingY/paddingX) 으로 일관 보장 + 사용처 row mol 직접 ref. |
| **`mol/list-item-coupon` / `mol/list-item-movie` / `mol/list-item-title-sub-default`** | **`mol/list-item` (variant `thumb=square/portrait`)** | 도메인 종속 list-item 시리즈 → 중립 mol 통합 (2026-04-30). thumb 종류 (square/portrait) variants + props 로 title/sub/action.label 주입. |
| 도메인 종속 `mol/list-item-{도메인}` 류 | `mol/list-item` + 적절한 thumb variant + props | 의미 매칭 우선 — analyze-spec 룰 |
| **`mol/brand-grid`** | **`mol/logo-grid`** | 브랜드 도메인 단어 제거 — 어떤 로고든 2x2 grid 재사용 (2026-04-30) |
| **`mol/point-balance`** | **`mol/value-row`** | 포인트 도메인 단어 제거 — icon + label + 강조 value 행 일반화 |
| **`mol/card-info-brand`** | **`mol/card-info-split`** | brand 도메인 단어 → 구성 표현 (split). card-info-stack 과 짝꿍 |

### 의미 매칭 우선 원칙 ⭐

새 도메인 종속 mol/ogn 만들기 전에 **catalog description 검색** 으로 중립 mol 흡수 가능한지 검토.  
analyze-spec / generate-spec API 가 자동 적용 (시스템 프롬프트 룰 — 2026-04-30 신설).

(상세는 `notion-naming-proposal.md` 참조)

---

## 2. 진단 규칙 (6 + 9)

신규/리네임 spec 이 카탈로그에 들어가기 전 통과해야 하는 검증.

### 2.1 중복 이름 (name-conflict)

**검사**: 신규 spec 의 `name` 이 기존 카탈로그에 정확히 같음.

**판정**:
- 구조(`base.children`, `category`, variants) 동일 → **재사용**으로 승격
- 구조 다름 → **rename 제안** (`{name}-v2`, `{name}-alt`)

### 2.2 네이밍 규칙 (naming-rule)

**기본 Allow**: `[a-z0-9-]+` (kebab-case + 숫자 + 하이픈)

**Disallow**: 대문자, `_`, 공백, 한글, 기타 특수문자

**예외**: **모듈 코드 위치에서만 대문자 허용**.  
`ogn/{MODULE}/...` 와 `page/{MODULE}/...` 의 `{MODULE}` 부분은 대문자 약어 (예: `MYBEN`, `PRDD`, `MYCPN`).  
이 외 위치 (atom/mol 이름, ogn 의 component 부분, page 의 screen-name) 는 모두 소문자 kebab-case.

**카테고리 별 패턴**:
- `atom/{name}` — 모두 소문자 (예: `atom/btn`, `atom/icon/sparkle`)
- `mol/{component-modifier}[/{variant}]` — 모두 소문자
- `ogn/{name}` (공통) 또는 `ogn/{MODULE}/{name}` (모듈 종속) — `{MODULE}` 만 대문자 허용
- `page/{MODULE}/{screen-name}` — `{MODULE}` 만 대문자 허용, screen-name 은 소문자

**위반 예시**:
- ❌ `ogn/GNB` (모듈 코드 아닌 위치에 대문자)  → ✅ `ogn/gnb`
- ❌ `page/PRDD/case1_단독상품` (언더스코어 + 한글) → ✅ `page/PRDD/case1-standalone`
- ❌ `atom/iconButton` (camelCase 대문자)  → ✅ `atom/icon-button`

(상세 패턴은 `mockup/CLAUDE.md` 의 "네이밍 규칙" 표 참조)

### 2.3 고아 ref (orphan-ref)

**검사**: spec 의 `kind: "ref"` 의 `component` 값이
- 기존 카탈로그에 없고
- 현재 작업 중인 신규 candidate 에도 없음

**판정**: warning. 사용자 결정:
- 누락된 컴포넌트 신규 작성
- ref 제거
- 기존 카탈로그에서 유사 컴포넌트로 대체

### 2.4 Spec 완결성 (completeness)

**필수 필드**:
- `name` (string, kebab-case)
- `category` (`atom` | `mol` | `ogn` | `page`)
- `base.layout.mode` (`HORIZONTAL` | `VERTICAL` | `NONE`)
- `base.layout.width` 또는 `height` 중 최소 하나

**선택 필드**: `description`, `variants`, `props`, `exposeAs` 등

**판정**: 필수 누락 → error. 작업 진행 전 보강 필수.

### 2.5 모듈 코드 (module-code-missing)

**검사**: `ogn/UNKNOWN/...`, `page/UNKNOWN/...` 패턴 금지.

**유효 모듈 코드**: Notion "모듈 정의서" DB 기준.  
예: `MYBEN`, `BEN`, `MYCPN`, `TPNT`, `PRDL`, `PRDD` 등

**판정**: error. 사용자 결정 필요 (모듈 코드 드롭다운 또는 AI 추천 받기).

### 2.6 Raw 값 감지 (raw-value, info 레벨)

**검사**: spec 안에 다음 패턴의 raw 값이 있음:
- 색상: `/^#[0-9A-Fa-f]{3,8}$/` 또는 `rgba\(...\)`
- 길이: `/^-?\d+(px|rem|%)$/` (단, `0` 제외)

**판정**: info. 자동 처리 후보:
- DS 토큰에 같은 값이 있으면 → 토큰 참조 교체 제안
- 없으면 → 신규 토큰 후보 (사용 빈도 가중)

⚠️ raw 값 그대로 두는 spec 은 카탈로그 적합성 떨어짐. 가능하면 0 으로 유지.

### 2.7 페이지 bg 토큰 (page-background)

**검사**: page spec 의 `base.visual.fill` 값이 페이지 종류와 일치하는 intent 토큰인지.

| 페이지 패턴 | 요구 토큰 |
|---|---|
| `page/{MODULE}/main` (홈) | `{semantic.color.background.page-home}` (그레이) |
| 그 외 모든 page (서브) | `{semantic.color.background.page-sub}` (화이트) |

**판정**: warning. `surface.primary` / `surface.secondary` 직접 참조도 위반 — intent 토큰만 허용.

**이유**: 홈은 카드 스택을 그레이 배경에 시각 분리, 서브는 단일 task 흐름이라 flat 화이트가 시선 분산을 줄임. 자세한 근거는 `DESIGN_PRINCIPLES.md` § 9.1.2.

### 2.8 checkbox-list 패턴 토큰 (checkbox-list-tokens)

**검사**: spec 안 group 의 children 중 `mol/checkbox-item` 또는 `mol/radio-item` 이 **2개 이상** 있으면 그 group 의 layout 이 표준 토큰을 써야 함.

| 필드 | 요구 토큰 |
|---|---|
| `itemSpacing` | `{component.checkbox-list.default.itemSpacing}` (= spacing.md, 12) |
| `paddingTop` / `paddingBottom` | `{component.checkbox-list.default.paddingY}` (= screen-padding-default, 24) |
| `paddingLeft` / `paddingRight` | `{component.checkbox-list.default.paddingX}` (= screen-padding-default, 24) |

**판정**: warning. `spacing.md` / `screen-padding-default` 직접 참조도 위반 — intent 토큰 (`component.checkbox-list.default.*`) 만 허용.

**이유**: 같은 list 패턴이 4곳 이상 등장 (bottomsheet / term-section / term-section-dormant / leave-reason-form). 토큰 path 자체가 의도를 담아 AI 가 spec 작성 시 헷갈릴 일 줄임. 자세한 가이드는 `CONVENTIONS.md` § 9.

### 2.9 서브 페이지 위 ogn 외피 시각 분리 (sub-page-ogn-fill)

**검사**: page spec 의 fill 이 `{semantic.color.background.page-sub}` (서브 페이지 = 화이트) 인 경우, 그 page 가 ref 한 ogn 의 `base.visual.fill` 이 `{semantic.color.surface.primary}` (= 화이트) 면 페이지 bg 와 동색이라 시각 분리 실패.

**판정**: warning. ogn 외피를 `{semantic.color.surface.secondary}` (가장 연 그레이) 로 변경 권장.

**예외 (chrome 류)**: 이름이 다음으로 끝나는 ogn 은 위치·dim 으로 분리되므로 룰 제외:
- `header`, `footer`, `bottomsheet`, `bottom-sheet`, `sticky-*`, `snack-bar`, `status-bar`, `tab-bar`, `tabbar`, `GNB`, `tab`

**이유**: 화면 톤 일관 + 시각 위계. DP § 9.1.3 nested row/카드 surface 분리 가이드 참조.

### 2.10 atom/mol baseline width 명시 (atom-mol-baseline-width)

**검사**: atom / mol category spec 의 `base.layout.width` 명시 여부.

**권장**: `"FILL"` 키워드 (CONVENTIONS § 6.3 v4 표준 — 반응형 / 개발 `width:100%` 와 의미 일치, generator 가 top-level 빌드 시 `widthFallback` 토큰으로 자동 우회).

**허용**: 토큰 직접 명시 (FIXED, 의도된 고정폭). 단 v4 정책상 폐기 방향.

**위반**: width 미명시.

**예외 prefix** (자체 dimension 토큰 가진 leaf atom — audit.js 의 `EXEMPT_PREFIX`):
- `atom/icon/`, `atom/logo/`, `atom/divider`, `atom/checkbox`, `atom/radio`, `atom/btn-icon`, `atom/btn-inline`, `atom/btn`, `atom/tag`, `atom/tab-item`, `atom/thumb`, `atom/tooltip`, `atom/barcode`

**판정**: warning. 상세 정책은 [CONVENTIONS § 6.3](CONVENTIONS.md).

**이유**: baseline width 미명시 시 Figma 빌드 결과 default 100×100 으로 작아져 시각 깨짐. v4 표준 (FILL) 또는 토큰 FIXED 모두 허용 — 의도만 명확하면 됨.

### 2.11 page footer scrollBehavior (page-footer-sticky)

**검사**: page spec 안 children 중 footer 류 ref (component 가 `sticky-footer` / `footer-cta` / `cta-pair` / 끝이 `-footer` 또는 `/footer`) 의 `scrollBehavior` 명시 여부.

**판정**: warning. `"STICKY_SCROLLS"` 또는 `"FIXED"` 명시 권장. 미명시 시 default `"SCROLLS"` (스크롤 따라 이동) — footer chrome 의도와 어긋남.

**Figma 매핑**:
| 값 | 동작 |
|---|---|
| `"STICKY_SCROLLS"` ⭐ 표준 | 자기 영역 도달 시 sticky (CSS `position: sticky` 와 일치) |
| `"FIXED"` | 항상 같은 화면 위치 (CSS `position: fixed`) |
| 미명시 (default `"SCROLLS"`) | 스크롤 따라 이동 (footer 의도 X) |

**이유**: footer 는 화면 하단 고정 — CTA 가 항상 보여야 함. Figma prototype 에서 sticky 동작 + 개발 export 시 `position: sticky` 매핑. 자세한 가이드는 `DESIGN_PRINCIPLES.md` § 9.8.

### 2.12 필수 고지·안내 누락 (legal-notice-coverage) ⭐ 2026-04-30 신설

**검사**: page spec 안에서 화면 카테고리별로 **법적 의무 또는 정책서 명시 고지 텍스트** 가 누락됐는지 점검. 자세한 정책은 [POLICY_REPORT_TEMPLATE § 1.8](POLICY_REPORT_TEMPLATE.md) (마킹 표준 source) / [SPEC_REPORT_TEMPLATE § 0.5](SPEC_REPORT_TEMPLATE.md).

**검사 방식 — `_comment` 추적**:

각 고지 텍스트 컴포넌트는 `_comment` 필드에 `[고지·필수]` 또는 `[고지·사용성]` + 정책 ID 명시:

```jsonc
{
  "kind": "text",
  "content": "탈퇴 후 모든 데이터가 삭제되며 복구 불가능합니다",
  "_comment": "[고지·필수] PR-MBR-CS-003-03 — 전기통신사업법 § 22-2"
}
```

**카테고리별 필수 항목**:

| 화면 카테고리 (page name 패턴) | 🔴 필수 누락 키 (audit FAIL) | 🟡 사용성 (audit WARNING) |
|---|---|---|
| **동의** (`*-auth`, `*-terms`, `*-agree`, `signup-*`) | 필수/선택 배지 / 전체동의 적용 범위 / 마케팅 동의 시각 분리 | 약관 변경 시 재동의 범위 안내 |
| **탈퇴·삭제** (`leave-*`, `withdraw-*`, `delete-*`) | 영향 범위 + 경고 톤 ("불가역", "복구 불가") / 유예 기간 + 만료 후 결과 | — |
| **제한·에러** (`*-restriction`, `*-blocked`, `*-error`) | 사유 + 해제 기한 + 문의처 | — |
| **본인인증** (`auth-*`, `verify-*`) | 인증수단별 정보 수집 범위 inline | 통신사 vs 서비스사 구분 명확화 |
| **완료** (`*-complete`, `*-done`, `*-success`) | (없음) | 후속 액션 카테고리 (설정 / 마케팅 / 문의) |
| **모든 에러·완료·제한 화면** | 고객센터 footer (전기통신사업법 § 22-2) | — |

**판정**:
- 🔴 필수 누락 → **error** (자동 reject)
- 🟡 사용성 누락 → warning (리뷰 권장)

**이유**: 빠지면 컴플라이언스 위반 (전기통신사업법, 개인정보보호법). UX 와 별개로 법적 안전망이 필요. 자세한 마킹 표준은 [POLICY_REPORT_TEMPLATE § 1.8](POLICY_REPORT_TEMPLATE.md).

**구현 상태**: 본 Rule 의 audit.js 구현은 후속 작업. 현재는 spec 작성자가 SPEC_REPORT_TEMPLATE § 0.5 도출 표 작성 + `_comment` 명시로 수동 검증.

### 2.13 줄글 텍스트 STRETCH 누락 (long-text-stretch) ⭐

**검사**: `kind: "text"` 노드 중 id 가 줄글 패턴 (`body` / `description` / `headline` / `message` / `paragraph` / `notice` / `guide` / `summary` / `rollback-notice` / `promo-text` / `tab-content` / `phoneInfo` / `passInfo`) 이면 `layoutAlign: "STRETCH"` 명시 필수.

**판정**: warning. STRETCH 누락이면 generator 의 textAutoResize=HEIGHT 자동 적용 안 돼서 부모 폭 줄바꿈 실패 → 컨테이너 넘침.

**이유**: CONVENTIONS § 6.1 "줄글 텍스트는 STRETCH 표준" 규칙이 spec 작성 시 누락 빈번. 자동 잡아 일관성 보장.

**예외**: 짧은 라벨 (label / value / prefix / action / title / time 등) 은 textStyle 이 body 류여도 제외 — 한 줄 들어가는 게 의도.

```jsonc
// ✅ 올바름
{ "kind": "text", "id": "body", "content": "...", "layoutAlign": "STRETCH", ... }
{ "kind": "text", "id": "description", "content": "...", "layoutAlign": "STRETCH", ... }

// ❌ 위반
{ "kind": "text", "id": "body", "content": "...", "textStyle": "{...body}", ... }   // STRETCH 누락
```

### 2.14 ref props 키 ↔ exposeAs 매칭 (props-key-match) ⭐ 2026-04-30 신설

**검사**: 모든 `kind: "ref"` 자식의 `props` 키가, 대상 spec 의 `exposeAs` 값 (재귀 — outer + nested ref 들의 모든 exposeAs) 중 하나와 일치해야 함.

**판정**: warning. 일치 안 되면 figma 빌드 시 매칭 실패 → props 가 무효 (baseline 텍스트 그대로 노출). 사용자는 "props 박았는데 안 바뀜" 으로 오인.

**이유**: 41 건 카탈로그 전수조사 결과 — 대부분 spec 들이 잘못된 키를 박았으나 generator 의 nested instance 매칭으로 우연히 작동. 진짜 invalid 만 (6 건) 자동 노출. 2026-04-30 mol/checkbox-item 의 `title→label` 사례에서 발견.

**탐색 깊이**: outer spec 의 base.children 의 exposeAs + 그 안의 ref 들의 (재귀 4 단계까지) exposeAs 모두 누적. 따라서 nested 매칭 가능한 키는 잡히지 않음.

**dot path props (`card-1.label` 등)** — nested instance 명시 prop 으로 별도 처리, skip.

```jsonc
// mol/card 의 base.children
[
  { "kind": "text", "id": "title", "content": "...", "exposeAs": "headline" },
  { "kind": "text", "id": "body",  "content": "...", "exposeAs": "description" }
]

// ✅ 올바름 — exposeAs 값 매칭
{ "kind": "ref", "component": "mol/card", "props": { "headline": "...", "description": "..." } }

// ❌ 위반 — 키가 exposeAs 와 다름
{ "kind": "ref", "component": "mol/card", "props": { "title": "...", "body": "..." } }
```

### 2.15 generic placeholder 잔존 (domain-copy-coverage) ⭐ 2026-04-30 신설

**검사**: page spec 또는 page 가 ref 한 ogn 의 baseline 텍스트가 generic placeholder 패턴이면 warning. page = 실제 사용자 화면이므로 도메인 copy 가 아닌 generic 텍스트가 노출되면 brand 신뢰도 저하.

**검출 패턴** (text content 정규식):
- `^(후속 액션|항목|예시|sample|placeholder) [0-9]+$` — placeholder 카운터
- `^내용을 입력해 주세요$` — atom default placeholder
- `^라벨$` / `^약관 제목$` / `^타이틀$` / `^안내$` — generic placeholder
- `^완료 후 추천 액션 안내\.?$` / `^여기에 안내 메시지가 표시됩니다\.?$` — generic description
- `^도움말 또는 오류 메시지$` — atom default helper

**판정**: 
- atom / mol baseline → 통과 (재사용 placeholder OK)
- ogn baseline → warning (도메인 sample 권장 — 가장 일반 use case)
- page spec / page 가 ref 한 ogn → **warning + 회피 필수** (page level 에서 ref props 로 도메인 copy 주입)

**이유**: 사용자 화면에 "후속 액션 1" / "내용을 입력해 주세요" / "약관 제목" 같은 placeholder 가 그대로 노출되면 디자인 시스템의 baseline 이 운영 환경에 누출됨. POLICY_REPORT § 1.7 / SPEC_REPORT § 0.6 의 도메인 copy 도출 결과를 page spec 작성 시 ref props 로 주입해야 회피 가능.

**자동 회피 가이드**:
- ogn baseline → 가장 일반 use case 도메인 sample (예: `ogn/MBR/post-actions` baseline = 휴면 해제 후속 액션)
- page → 다른 use case 의 ogn ref 시 props 로 override (`{ "headline": "환영 혜택 받기", ... }`)

**구현 상태**: audit.js 자동화는 후속 작업. 현재는 spec 작성자가 수동 검증.

```jsonc
// ❌ ogn baseline 에 generic
{ "kind": "ref", "component": "mol/card",
  "props": { "headline": "후속 액션 1", "description": "완료 후 추천 액션 안내." } }

// ✅ ogn baseline 도메인 sample (default = 가장 일반 use case)
{ "kind": "ref", "component": "mol/card",
  "props": { "headline": "회원정보 확인", "description": "변경하거나 확인하실 정보가 있으신가요?" } }
```

**조치 가이드**:
1. props 박고 싶다면 → 대상 spec 의 base.children 에서 exposeAs 값 확인
2. exposeAs 가 아예 없으면 → 대상 spec 에 `exposeAs:"label"` 같은 명시 추가 필요 (CONVENTIONS § 7)
3. variant 로 content 분기하는 child 의 exposeAs 는 충돌 가능 (DESIGN_PRINCIPLES § 6 안티패턴 참조)

### 2.16 빈 props value (empty-props-value) ⭐ 2026-05-01 신설

**검사**: ref 자식의 `props` 값이 빈 문자열 (`""`) 또는 whitespace-only 면 warning. 옵셔널 자식 (helper / sub / status badge 등) 을 빈 string 으로 우회한 패턴 검출.

**판정**: 모든 ref props (재귀 walk) — 빈 string value 발견 시 1건 warning.

**Why**: Figma 의 text node 는 빈 string 이어도 line-height(약 18px) + auto-layout itemSpacing 만큼 vertical space 점유 → "옵셔널 자식 없을 때 spacing 좁아짐" 시각 의도와 어긋남. 개발 export 시에도 `<Helper>{""}</Helper>` 빈 element 가 렌더되어 CSS gap 자동 collapse 안됨.

**조치 가이드** (CONVENTIONS § 8.5 옵셔널 자식 패턴 표준):
1. mol spec 에 variants axis 추가: `{ "name": "{slot}", "values": ["with", "without"] }`
2. override: `"{slot}=without": { "children[{id}].visible": false }`
3. 사용처에서 옵셔널 자식 없으면 `variant: { "{slot}": "without" }` 명시 + 해당 props 키 자체 생략 (빈 string 박지 말 것)

```jsonc
// ❌ 위반 — 빈 string 으로 우회
{ "kind": "ref", "component": "mol/form-row",
  "props": { "label": "비밀번호", "placeholder": "...", "helper": "" } }

// ✅ 권장 — variant + visible:false
{ "kind": "ref", "component": "mol/form-row",
  "variant": { "helper": "without" },
  "props": { "label": "비밀번호", "placeholder": "..." } }
```

**개발 export 매핑**: Figma `visible: false` ≈ React `{condition && <Element />}` ≈ CSS `display: none` — 셋 다 layout flow 에서 element 자체 제외 → flex/grid gap 자동 collapse. 빈 string 우회는 이 매핑 트레이서빌리티 깨짐.

---

## 3. 작업 흐름

```
기능내역서 / 시안
       │
       ▼
컴포넌트 목록 추출
       │
       ▼
1. 카탈로그 대조 (3분기)
   ├─ reused → 끝
   ├─ rename → 표준 이름으로 변환
   └─ new    → 신규 작성 시작
       │
       ▼
2. spec 작성 (atom → mol → ogn → page 순)
       │
       ▼
3. 진단 규칙 6개 통과 검증
   - 중복 이름 / 네이밍 / 고아 ref / 완결성 / 모듈 코드 / raw 값
       │
       ▼
4. 통과 → 카탈로그에 등록 + Figma 빌드
   실패 → 보강 후 재검증
```

---

## 4. 외부 도구 (web/) 와의 관계

`web/` 의 도구들이 이 규칙을 자동화하여 구현:

| 도구 | 역할 | 설계서 |
|---|---|---|
| **Detection Board** | 이미지 → AI 가 컴포넌트 자동 검출 + bbox + 분류 | `web/docs/DETECTION_BOARD.md` |
| **Review Menu** | candidate 검수 → 진단 규칙 자동 적용 → 승격 | `web/docs/REVIEW_MENU.md` |
| **Spec Analysis** | 기능내역서 텍스트 → 컴포넌트 매칭 (3분기) | `web/docs/SPEC_ANALYSIS.md` |

**중요**: 이 도구들이 변해도 본 문서의 규칙은 source of truth. web 도구는 본 문서의 구현체.

---

## 5. 적용 사례 (참고)

### 5.1 PRDD 화면 작업 시 (2026-04)

상품상세_case1_단독상품 화면의 SPEC-PRDD-01~16 분석 결과:

- **재사용 (3종)**: `atom/btn(primary)`, `atom/btn(secondary/ghost)`, `atom/thumnail` → 각각 `atom/btn` (variants 활용), `atom/thumb` 으로 통일
- **rename (3종)**: `mlc/card` → `mol/card`, `mlc/list` → `mol/list`, `ogn/sticky footer` → `ogn/sticky-footer`
- **신규 (11종)**: `atom/tag`, `atom/tooltip`, `atom/accordion`, `atom/banner`, `atom/btn-icon`, `atom/text-area`, `atom/tab-item`, `mol/card`, `ogn/tab`, `ogn/snack-bar`, `ogn/sticky-footer`

자세한 교정 제안: `mockup/mockup-docs/notion-naming-proposal.md`
