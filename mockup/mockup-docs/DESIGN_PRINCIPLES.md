# Design Principles — 정보 위계와 의사결정 원칙

## 목적

mockup 카탈로그의 **시각 위계**, **공간 사용**, **컴포넌트 분리** 의 의사결정 가이드.  
DS 토큰만으로는 보장 안 되는 "언제 어떤 토큰을 쓸지" 의 사용 패턴을 정립.

> 새 화면을 시작하거나 컴포넌트 분리 여부가 헷갈릴 때 이 문서로 결정하세요.

**짝꿍 문서**: `governance/INDEX.md` (+ `governance/UXL_*.html`) 가 "**무엇을 위해 만들 것인가**" (단계별 의도) 라면, 본 문서는 "**어떻게 만들 것인가**" (시각·구조 결정). 새 화면 시작 시 governance 로 단계·원칙 확정 → 본 문서로 시각 구현.

---

## 0. 이 프로젝트의 baseline

이 카탈로그는 **모바일 단일 viewport** 기준이다. 데스크톱·태블릿 대응 안 한다.

| 기준 | 값 | 토큰 |
|---|---|---|
| 모바일 화면 너비 (artboard) | 375 | `{foundation.dimension.size.screen-mobile}` |
| 모바일 화면 높이 (page minHeight) | 812 | `{foundation.dimension.size.screen-mobile-height}` |
| 컨텐츠 너비 (좌우 24 padding 가정) | 327 | `{foundation.dimension.size.screen-content-width}` |
| 화면 좌우 padding (기본) | 24 | `{semantic.layout.screen-padding-default}` |
| 화면 좌우 padding (홈) | 12 | `{semantic.layout.screen-padding-home}` |

**page minHeight 원칙**: 모든 page 의 `base.layout` 에 `minHeight: {screen-mobile-height}` 명시. complete / 안내 등 짧은 화면도 viewport (812) 를 채우게. 콘텐츠가 더 많으면 자동으로 늘어남 (auto-layout primary AUTO + minHeight 결합).

- **DS = `skt-design-system.json` 단일 ground truth**. raw 값 (`#3617CE`, `16px`) 금지 — 모든 시각 속성은 토큰 참조.
- **breakpoint / media query 없음**. 한 페이지 안에서는 § 9.1.1 의 Pattern A 또는 B 중 하나만.
- spec → Scripter → Figma 단방향 파이프라인. **Figma 는 결과물이지 원본이 아님** — 의도는 spec 에 있다.

---

## 1. Typography 위계

### 1.1 텍스트 레벨 매핑

| 토큰 (`semantic.typography.*`) | 용도 | 예시 |
|---|---|---|
| **hero-headline** (20bold, lh xl) | 페이지 최상위 강조 | 화면 첫 줄 헤드라인 |
| **card-title** (20bold, lh 120%) | 카드 안 제목 | 상품명, 카드 헤더 |
| **number-emphasis** (28bold) | 숫자 강조 | 잔여 포인트, 큰 합계 금액 |
| **body-medium** (15medium) | 강조된 본문 | 리스트 메인 텍스트 |
| **body** (15regular) | 일반 본문 | 설명문, 다건 정보 |
| **button** (15semibold) | 버튼 라벨 | 모든 type=primary/secondary |
| **chip-badge** (13medium) | 칩·뱃지 텍스트 | 태그, small button |
| **card-label** (13regular) | 보조 라벨 | 카드 안 작은 메타 |
| **card-header-label** (12semibold muted) | 카드 상단 카테고리 | "오늘의 혜택" 같은 라벨 |
| **sub-label** (12regular) | 힌트·서브 | 부제, 컨텍스트 |
| **price-original** (13 line-through) | 취소선 원가 | 50,000원 (할인 전) |
| **list-label** (15regular) | 리스트 본문 | 리스트 아이템 텍스트 |
| **tab-label** (9medium) | 탭 라벨 | 하단 탭 바 |

### 1.2 색 강약 매핑

| 토큰 (`semantic.color.text.*`) | 용도 |
|---|---|
| **primary** (black) | 본문 메인 — 90% 의 텍스트 |
| **strong** (gray.900) | 더 강한 강조 (금액 합계 등) |
| **secondary** (gray.700) | 보조 — 부제, 설명 |
| **muted** (gray.600) | 힌트, 라벨, 비활성 |
| **disabled** (gray.500) | 명백히 비활성 |
| **emphasis** (brand.primary) | 브랜드 색 강조 — 할인율, 포인트 수치 |
| **brand** (brand.primary) | 링크, 클릭 가능 텍스트 |
| **on-dark** (gray.0) | 어두운 배경 위 텍스트 (툴팁, 스낵바) |
| **price-original** (gray.600) | 취소선 원가 색 |

### 1.3 결정 트리

```
이 텍스트는 무엇을 전달하나?
├─ 페이지 최상위 강조? → hero-headline
├─ 카드/섹션 제목? → card-title
├─ 숫자가 메인? (금액·포인트·잔여) → number-emphasis
├─ 본문이지만 살짝 강조? → body-medium
├─ 일반 본문? → body
├─ 작은 보조 정보? → sub-label / card-label
├─ 클릭 가능한 인터랙션? → button / chip-badge
└─ 취소선 (할인 전 가격)? → price-original
```

### 1.4 텍스트 그룹 위계 spacing

타이포 토큰만으론 위계 부족 — **그룹 간 spacing** 으로 완성. § 2.5 와 짝꿍.

| 관계 | gap | 토큰 |
|---|---|---|
| **hero-headline ↔ description** | **16~20** | `spacing.lg` ~ `spacing.xl` |
| section heading ↔ items | 16 | `spacing.lg` |
| card-title ↔ body | 12 | `spacing.md` |
| body ↔ caption / meta | 4~8 | `spacing.xs` ~ `spacing.sm` |
| 인라인 텍스트 ↔ 아이콘 | 4~8 | `spacing.xs` ~ `spacing.sm` |
| 가격 ↔ 단위 (₩ 등) | 4 | `spacing.xs` |

원칙:
- **위계가 강할수록 큰 spacing**. hero ↔ body 를 12 로 두면 위계 무너짐 (덩어리화)
- **같은 의미 단위 → 작은 spacing, 의미 분리 → 큰 spacing** (§ 2.5 와 동일 원리)
- description 이 1줄 이상이면 lg(16), 2줄 이상 또는 강조 화면 (Hero / Result) 이면 xl(20)

---

## 2. Spacing 패턴

### 2.1 spacing scale

DS 의 `foundation.dimension.spacing.*` 만 사용. raw 값 금지.

| 토큰 | 값 | 일반 용도 |
|---|---|---|
| **xs** | 4 | 텍스트와 작은 아이콘 사이, 인라인 요소 |
| **sm** | 8 | 작은 그룹 내부 (예: 가격 요소 사이) |
| **md** | 12 | 카드 안 row 간격, 섹션 내부, **홈 화면 가로 padding** |
| **lg** | 16 | 카드 안 큰 간격 |
| **xl** | 20 | 섹션 안 그룹 간 |
| **2xl** | 24 | **기본 화면 가로 padding** (홈 외) + 카드 padding |
| **3xl** | 32 | 섹션 간 큰 간격 |

### 2.2 사용 패턴 → § 2.5 참조

위치별·관계별 spacing 매핑은 **§ 2.5 관계 쌍별 gap 매핑** 이 source of truth. 표 1개로 통일.

버튼 자체의 padding 은 component 토큰 (`component.button.{tier}.paddingHorizontal`) 직접 참조 — 8(inline) / 12(small) / 16(secondary) / 24(primary) 가 baseline.

### 2.3 결정 기준

- **같은 의미 단위** → 작은 spacing (xs ~ md)
- **의미 분리** → 큰 spacing (lg ~ 3xl)
- **카드 사이** (페이지 안) → **xs (4)** — 카드의 background/shadow 가 시각 구획을 담당하므로 spacing 최소가 깔끔
- **카드 안 항목 사이** → md (12) — visual group 이 spacing 으로만 구분되므로 더 큰 갭 필요

### 2.4 안티패턴

- 매번 새 spacing 값을 만드는 것 (16 → 17 → 19 같은 변주) → 7단계 scale 안에서 고정
- 같은 패턴인데 화면마다 다른 spacing → 패턴화 가치 (반복 3+ 곳이면 mol 로 캡슐화)
- **raw 0 사용 (`"paddingTop": 0`)** → `{foundation.dimension.spacing.none}` 으로 대체. 모든 padding / itemSpacing 은 토큰 참조 강제.

### 2.4.1 padding / spacing 토큰 강제 원칙 ⭐

**모든 컴포넌트의 padding (top/right/bottom/left) 과 itemSpacing 은 토큰 참조** — raw 값 (`0`, `12`, `"24px"`) 직접 명시 금지.

| 사용 가능 토큰 | 위치 |
|---|---|
| `{foundation.dimension.spacing.{none\|xs\|sm\|md\|lg\|xl\|2xl\|3xl}}` | 일반 spacing |
| `{semantic.layout.screen-padding-default}` (= 24) / `screen-padding-home` (= 12) | 화면 좌우 padding |
| `{semantic.layout.card-gap}` (= 4) | 카드 ↔ 카드 |
| `{component.X.padding}` 류 | 컴포넌트 자체 토큰이 있을 때 (button / card 등) |

**왜 강제인가**:
- DS 변경 시 한 곳에서 일괄 — raw 값은 spec 마다 흩어져 있어 추적 어려움
- audit (rule 6) 가 raw 값 검사 강화 — 0 도 잡힘
- 의미 분리 명확 — `spacing.none` 은 "여백 없음 의도", raw 0 은 우연일 수 있음

### 2.5 관계 쌍별 gap 매핑 ⭐ (source of truth)

위치별·관계별 spacing 매핑의 단일 ground truth. 새 spec 작성 시 이 표를 먼저 보고 itemSpacing/padding 결정.

| 관계 쌍 | gap | 토큰 / 위치 |
|---|---|---|
| **카드 ↔ 카드** (페이지 본문 내) | 4 | `{semantic.layout.card-gap}` (= `spacing.xs`) |
| **섹션 그룹 ↔ 그룹** (큰 영역 분리) | 32 | `spacing.3xl` |
| 카드 안 title ↔ body | 12 | `spacing.md` |
| 카드 안 row ↔ row (예: list-item 끼리) | 12 | `spacing.md` |
| **checkbox/radio list row 사이** | **12** | `{component.checkbox-list.default.itemSpacing}` (= `spacing.md`) — checkbox-item N개 묶음 표준 |
| 카드 안 padding (외피 inner) | 24 | `component.card.default.padding` (= `spacing.2xl`) |
| 카드 안 padding (정보 밀도 높을 때) | 20 또는 16 | `spacing.xl` / `spacing.lg` (§ 4.3 예외) |
| 화면 좌우 padding (기본) | 24 | `{semantic.layout.screen-padding-default}` |
| 화면 좌우 padding (홈) | 12 | `{semantic.layout.screen-padding-home}` |
| 섹션 안 그룹 ↔ 그룹 | 20 | `spacing.xl` |
| 작은 그룹 내부 (예: 가격 요소 끼리) | 8 | `spacing.sm` |
| 인라인 요소 (텍스트 ↔ 아이콘) | 4 ~ 8 | `spacing.xs` ~ `spacing.sm` |

**chrome (status-bar / GNB / tab-bar) ↔ content** 간격은 § 9 페이지 구성 패턴 참조 — 페이지 content group 의 padding 으로 처리.

원칙:
- **카드 사이 = xs (4)** — 카드의 background/shadow 가 시각 구획을 담당하므로 spacing 최소가 깔끔
- **카드 안 = md (12) ~ lg (16)** — visual group 이 spacing 만으로 구분되므로 더 큰 갭
- **섹션 사이 = 3xl (32)** — 페이지 안 큰 영역 전환
- 같은 의미 단위 → 작은 spacing, 의미 분리 → 큰 spacing

---

## 3. Action 위계

### 3.1 버튼 4 tier

| atom | height | textStyle | 사용 맥락 |
|---|---|---|---|
| **btn type=primary** | 52 | button (15semibold) | 화면당 1개 주요 CTA (구독하기, 결제하기) |
| **btn type=secondary** | 44 | button | 보조 CTA (취소, 닫기) |
| **btn type=small** | 36 | chip-badge | 리스트 아이템 우측 (예매, 상세 같은 액션) |
| **btn-inline** | 22 | sub-label | 행 내 부수 action (쿠폰 받기, 삭제 같은 인라인 트리거) |

### 3.2 한 화면 원칙

- **primary 1개**: 화면 전체에 가장 중요한 1개 액션만 primary 톤
- **secondary 는 다수 가능**: 부수 액션
- **inline 자유롭게**: 행 단위 trigger 라 다수 OK
- 버튼 외 클릭 가능한 텍스트는 `text.brand` 색 + 본문 typography 사용 (별도 atom 필요 없음)

### 3.3 결정 트리

```
이 액션의 비중은?
├─ 화면 핵심 (1개) → btn type=primary
├─ 보조 (취소·닫기 등 핵심 옆 보조) → btn type=secondary
├─ 리스트 아이템 안 (예매·상세 등) → btn type=small
├─ 행 내 인라인 (쿠폰 받기·삭제 등) → btn-inline
└─ 단순 텍스트 링크? → text + color=brand
```

### 3.4 detail link 패턴 + status label 패턴 (리스트 아이템 행)

리스트 아이템 한 행에 자주 함께 등장하는 패턴 — status label + main text + detail link.

#### 안 좋은 예 vs 권장
| ❌ 안 좋음 | ✅ 권장 |
|---|---|
| status label ("[필수]", "[선택]" 등) 을 atom/btn 로 — fill 큰 버튼처럼 보임 | **text 노드** (sub-label / chip-badge style) + color=brand 또는 muted. atom/tag (type=emphasis/neutral) 도 가능 |
| 행 우측 진입을 chevron `>` 단독 | 텍스트 ("자세히 보기" 등) + brand 색, **같은 행 우측 정렬** |
| "자세히 보기" 가 위/아래 줄로 떨어짐 | 같은 HORIZONTAL row 안 가장 마지막 child, layoutGrow=1 spacer 또는 SPACE_BETWEEN 으로 우측 push |

#### 약관 동의 행 — 권장 spec 구조

```
mol/list-item-terms (HORIZONTAL · counterAxisAlignItems: CENTER · itemSpacing: md)
├─ atom/checkbox (size=sm)
├─ text "(필수)"   · textStyle: sub-label · color: text.brand
├─ text "약관 제목" · textStyle: list-label · color: text.primary · layoutGrow: 1   ← 이게 grow
└─ text "자세히 보기" · textStyle: sub-label · color: text.brand                     ← 자동 우측
```

핵심:
- HORIZONTAL row 한 개 — status·title·link 모두 같은 라인
- "약관 제목" text 가 `layoutGrow: 1` → 남은 공간 차지 → 마지막 link 가 자연스럽게 우측 끝으로 밀림
- "자세히 보기" 도 단순 text node — atom/btn 사용 X (atom/btn-inline 까지는 OK 지만 보통 text 한 줄로 충분)
- "[필수]" 같은 상태 라벨도 마찬가지 — text 또는 atom/tag, atom/btn 절대 X (큰 fill 버튼이 되어버림)

이유:
- 행 안 모든 시각 요소가 한 줄 흐름 → 스캐닝·정렬 일관
- atom/btn 은 "행위" 를 위한 큰 시각 가중 — 단순 정보 라벨에는 시각 노이즈
- 화살표만 있으면 뭐로 진입하는지 명시 안 됨, 접근성/스캐닝 모두 손해

### 3.5 footer CTA 패턴 (`ogn/sticky-footer-cta` variants) ⭐

페이지 하단 sticky footer 의 CTA 구성을 3가지 variant 로 표준화. AI 가 새 페이지 만들 때 화면 의도 보고 자동 결정.

#### variants

| pattern | 구성 | 사용 화면 | 예 |
|---|---|---|---|
| **`single`** ⭐ default | primary 버튼 1개 (full width) | 약관 동의·확인·결과 페이지·정보 입력 | `signup-terms`, `signup-info`, `*-complete`, `login` |
| **`with-icons`** | btn-icon × 2 (heart/gift 등) + primary 버튼 (남은 공간) | 상품/콘텐츠 상세 — 보조 액션과 메인 CTA 공존 | `PRDD/case1-standalone` |
| **`pair`** | secondary (취소) + primary (확인) — 50:50 | 결정 페이지 — 진행 vs 철회 명확 분리 | `leave-confirm` 같은 의사결정 화면 |

#### 결정 트리

```
이 페이지에 footer CTA 가 어떻게 구성?
├─ 단일 핵심 액션 (다음·확인·완료)        → single
├─ 보조 아이콘 액션 + 핵심 CTA             → with-icons
├─ 진행/취소 명확 분리 (의사결정)          → pair
└─ footer 자체 없음 (홈·정보 화면 등)      → ref 자체 X
```

#### 표준 spec

```jsonc
// pair 패턴 (예: leave-confirm)
{
  "kind": "ref",
  "id": "footer",
  "component": "ogn/sticky-footer-cta",
  "variant": { "pattern": "pair" },
  "props": {
    "btn-cancel.label":  "취소",
    "btn-confirm.label": "탈퇴 확인"
  },
  "scrollBehavior": "STICKY_SCROLLS"
}
```

```jsonc
// single 패턴 (default — variant 생략 가능)
{
  "kind": "ref",
  "id": "footer",
  "component": "ogn/sticky-footer-cta",
  "props": { "btn-cta.label": "다음" },
  "scrollBehavior": "STICKY_SCROLLS"
}
```

```jsonc
// with-icons 패턴 (예: PRDD)
{
  "kind": "ref",
  "id": "footer",
  "component": "ogn/sticky-footer-cta",
  "variant": { "pattern": "with-icons" },
  "props": {
    "btn-icon-1.icon": "atom/icon/heart",
    "btn-icon-2.icon": "atom/icon/gift",
    "btn-cta.label":   "구독하기"
  },
  "scrollBehavior": "STICKY_SCROLLS"
}
```

#### 원칙

- **single 이 default** — 명시 안 하면 single 적용. 약관/정보/결과 류 90%+ 화면이 여기 해당
- **pair 는 의사결정만** — 취소가 위험하지 않은 일반 페이지에선 single + 별도 back 버튼이 더 자연스러움
- **with-icons 는 다른 도메인 (콘텐츠 상세)** — 약관/정보 류엔 부적합 (시각 노이즈)
- `scrollBehavior: STICKY_SCROLLS` 는 모든 footer 표준 (DP § 9.8)

---

## 4. 컴포넌트 분리 기준

### 4.0 한 줄 룰 ⭐ 2026-05-01 v3 정통 회복 (atomic design)

```
atom = 단일 시각 단위 (page 안 nested only — chrome 안 포함)
mol  = atom + atom (또는 atom + mol) 결합. 도메인 X (모든 도메인 재사용)
ogn  = atom + mol + ogn 모든 조합 가능. 도메인 종속 또는 chrome 격 또는 큰 외피
```

**핵심 — atom 만 스크린에 오는 경우 X**. atom 은 항상 mol/ogn 안 nested. page = ogn ref + mol ref + chrome 만 직접.

**판정 우선 순서** (위에서부터):
1. 단일 시각 단위 (단일 텍스트/아이콘/도형) ? → **atom** (단일 텍스트는 § 4.1 승격 기준 충족 시 atom, 그 외 raw text)
2. 도메인 종속 (특정 모듈만 한정) ? → **ogn/{MODULE}/{name}**
3. chrome 격 (page top/bottom/sticky 위치 + 위치적 의미) ? → **ogn/{name}** 또는 **ogn/{MODULE}/{name}**
4. 그 외 atom + atom 또는 atom + mol 결합 (도메인 X) → **mol**

`atom` ↔ `mol` 차이 — 단일 vs 결합. `mol` ↔ `ogn` 차이 — **중립 vs 도메인 종속·chrome 격**.

### 4.1 atom — 더 쪼갤 수 없는 단위

다음 중 하나면 atom:
- **단일 텍스트**가 자체 의미 있는 단위 (atom/btn 의 label, `atom/text-label` 의 카드 헤더 라벨)
- **단일 아이콘** (atom/icon/sparkle)
- **단일 도형** placeholder (atom/thumb, atom/barcode)
- **상태/사이즈 variants 만 있는 단순 요소** (atom/tag, atom/btn-icon)
- **typography 위계별 단일 텍스트 atom** (위계가 분명한 라벨/캡션 등 — 자동 생성 시 AI 가 조합 단위로 인식)

⚠️ **절대 atom 으로 만들지 말 것**:
- 같은 typography 토큰을 atom 마다 또 분리 (예: card-title 토큰 박힌 일반 텍스트마다 atom 신설)
  → typography 토큰만 그대로 쓸 것. typography 위계가 분명한 의미 단위 (label/caption 등) 일 때만 atom.

📏 **atom 텍스트 승격 기준** (2026-05-01):
1. **사용처 10+ 건** (전수조사 후 카운트)
2. **컬러 1종 일관** (variants 분기 없이 같은 색)
3. **의미 단위 명확** (라벨/캡션/헤드라인 등 위계 자체가 의미)

세 조건 모두 충족 시 atom 승격. 한 가지라도 깨지면 typography 토큰 그대로 두기 (raw text). 사례:
- ✅ `atom/text-label` (card-header-label · 12건 · text.muted 일관 · "섹션 라벨" 의미)
- ❌ sub-label (11건 · 3색 분기 → 컬러 일관성 깨짐 → atom 화 안 함)
- ❌ body-medium (22건 · 컬러 다양 + 굵기 위계 분기 → atom 화 안 함)

⚠️ **page 직접 박힘 X — atom 정통 룰 v3 (2026-05-01)**:
- ❌ 모든 atom 의 page 직접 ref (단일 라벨/캡션 atom 도 X) → mol/ogn 안 nested 만 허용
- ✅ 예외 — page 안 chrome (status-bar, header, footer-cs, sticky-footer 등) 안 nested 는 부품 atom 포함 OK
- 사례: page/SCH/results 의 정확일치 라벨 + list 묶음 → ogn/SCH/result-list 추출 (atom/text-label 은 ogn 안 nested)

### 4.2 mol — 여러 atom 의 의미 있는 결합 (도메인 X)

다음 **모두** 해당되면 mol:
- **여러 atom 이 묶여 한 단위로 쓰임** (`mol/card-header` = label + title)
- **반복 가능성** — 같은 패턴이 **3+ 곳**에 등장
- **일정한 spacing/위계 캡슐화** 가치 — 안의 padding/itemSpacing 이 매번 같음
- **도메인 종속 X** — 여러 모듈 / 화면에서 재사용 가능 (CONVENTIONS § 1 중립 이름 우선)

mol 은 page 직접 박힘 OK. 단 도메인 종속이면 → ogn 으로 이동 검토.

⚠️ **mol → ogn 승격 후보 — 두 케이스** (2026-05-01 정착):

(a) **도메인 종속** — 정책서·사용처가 특정 모듈만 한정 → `ogn/{MODULE}/{name}`
- 사례: `mol/answer-card` · `mol/quick-action-card` (검색 정책서 F05·F06 용어) → `ogn/SCH/answer-card` · `ogn/SCH/quick-action-card`
- 단 다른 도메인에서도 재사용 가능 (예: `mol/post-action-card` = 회원 + 검색 양쪽 사용) → mol 유지

(b) **chrome 격** — 모든 도메인 재사용 + page top/bottom/sticky 위치적 의미 → `ogn/{name}` 또는 `ogn/{MODULE}/{name}`
- 사례: `mol/step-indicator` (회원/탈퇴/휴면 18 page 모두 page top) → `ogn/step-indicator`
- 사례: `mol/search-bar` (검색 도메인 + page top sticky) → `ogn/SCH/search-bar`
- 판정: "page 의 chrome 위치 (status-bar 옆 또는 footer 옆) 인가? + 위치적 의미 분명한가?"

⚠️ **mol 안에서 분기 금지**:
- 변형 (예: 강조 vs 약화) 이 필요하면 **별개 mol 로 분리**
- variants 축이나 nested override 로 분기하지 말 것 — generator 의 override 경로는 top-level children 만 지원

#### mol 자식 구성 패턴 (2026-05-01 명시)

mol 의 children 으로 허용되는 ref 종류:

| 패턴 | 사례 |
|---|---|
| **mol(atom + atom)** | mol/post-action-card (atom/icon + raw text 2개) · mol/section-header |
| **mol(atom + mol)** | mol/list-item-coupon (atom/thumb + mol/list-item-title-sub-default + atom/btn) · mol/barcode-display |
| **mol(mol + mol)** | mol/card-info-stack (mol/card-header + mol/point-balance) |

**mol 안에 ogn ref X** — ogn 은 page 또는 다른 ogn 안에만. mol 이 ogn 을 참조하면 위계 역전.

### 4.3 ogn — 화면 단위 블록 + 외피·content wrapper 패턴

ogn 의 표준 spec 구조는 **외피 + 1개 inner content auto-layout group**:

```
ogn/{module}/{name}
└─ base (외피 — 0 padding, fill·width 같은 visual identity)
   └─ content (group · layoutAlign: STRETCH · auto-layout · padding 24)
      ├─ child 1
      ├─ child 2
      └─ ...
```

- **base (외피)**: padding 0, visual.fill / cornerRadius / shadow 등 외관 속성, **`width: "FILL"`** (page padding 따라 자동 적응 — [CONVENTIONS § 6.3](CONVENTIONS.md) v4 표준). top-level baseline 폭은 spec top-level `widthFallback` 토큰으로 명시.
- **content (inner)**: padding (`screen-padding-default` = 24), auto-layout 모드, itemSpacing, 실제 자식 배치

이유:
- 외피의 시각 identity 와 content layout 을 분리 → 한쪽 변경이 다른 쪽에 영향 X
- AI 가 spec 만들 때도 같은 패턴 따라서 일관됨
- 페이지에 ref 로 들어갈 때 외피만 보이고, content 의 padding 이 자식 정렬을 담당

예외 (외피 패턴 안 씀):
- 시스템 chrome (status-bar, GNB, tab-bar, sticky-footer) — 함수적 toolbar 라 단순 구조
- 단일 텍스트 ogn (snack-bar 등)
- full-bleed 가 필요한 ogn (gallery 등)

#### ogn 자식 구성 패턴 (2026-05-01 명시)

ogn 의 children 으로 허용되는 ref 종류 — **모든 조합 OK**:

| 패턴 | 사례 |
|---|---|
| **ogn(atom + atom)** | ogn/GNB (atom/logo/T + atom/icon × 3) · ogn/status-bar (atom/icon × 3 + raw text) |
| **ogn(atom + mol)** | ogn/MYBEN/card-points (mol/card-info-stack + atom/btn) |
| **ogn(mol + mol)** | ogn/SCH/quick-entry-card (mol/section-header + mol/post-action-card × 4) · ogn/SCH/category-card (atom/text-label + mol/post-action-card × 2) |
| **ogn(ogn + ogn)** | ogn/PRDD/* 일부 (다른 ogn 들 조합) |

핵심 — ogn 은 **모든 위계 (atom/mol/ogn) 자유롭게 결합** 가능. 단 외피 + content wrapper 패턴 따름 (위 § 4.3).

#### 외피 visual identity 구체값

ogn 외피는 종류에 따라 시각 정체성이 분명히 다름. **반드시 아래 표의 값을 적용** — radius 0 / shadow null 로 두면 카드 느낌이 사라져 위계 무너짐.

| 외피 종류 | radius | fill | shadow | 사용 예 |
|---|---|---|---|---|
| **카드형** | `{component.card.default.radius}` (16) | `{semantic.color.surface.primary}` | `{component.card.default.shadow}` (sm) | result, MYBEN/card-*, auth-widget |
| **Hero** (큰 결과·안내) | `{foundation.dimension.radius.lg}` (20) | `{semantic.color.surface.primary}` | `{foundation.shadow.sm}` | ogn/MBR/result (signup/dormant/leave/rejoin complete) |
| **작은 패널** | `{foundation.dimension.radius.sm}` (8) | `{semantic.color.surface.primary}` | none | actions 안 작은 카드, 인라인 정보 panel |
| **Chrome** | 0 | `{semantic.color.surface.primary}` | none | status-bar, GNB, tab-bar, header, sticky-footer |
| **BottomSheet / 시트** | `{foundation.dimension.radius.lg}` (20, top corners) | `{semantic.color.surface.primary}` | `{foundation.shadow.sm}` | bottomsheet-* |

추가 패턴:
- 카드형 ogn 의 **content padding 은 `spacing.2xl` (24)** 가 기본. 정보 밀도가 높으면 `spacing.xl` (20) 또는 `spacing.lg` (16) 로 좁힘
- Hero 외피는 위/아래 **`spacing.3xl` (32) padding** 이 기본 — 강조 영역의 여백
- Chrome 의 fill 은 surface.primary 가 default, page 배경이 surface.secondary 일 때 시각 분리됨

- **공통 ogn**: `ogn/{name}` — 모든 화면에서 재사용 (status-bar, GNB, tab-bar, snack-bar, sticky-footer)
- **모듈 종속 ogn**: `ogn/{MODULE}/{name}` — 특정 도메인 (MYBEN, PRDD 등)
- **structure 컴포넌트**: 화면 구조 자체 (header, footer, gallery)

### 4.4 page — 화면 전체

- `page/{MODULE}/{screen-name}` — 위 모든 것을 조립한 최종 화면
- Component 가 아닌 Frame 으로 생성 (재사용 단위 아님)

⚠️ **page 정통 룰 v3 (2026-05-01 정통 atomic design 회복)** — page 안 (직접 + content group nested 모두) 허용 범위.

> ※ § 9 (페이지 구성 패턴) 의 "chrome 직접 자식 only / 도메인 ogn 은 content group 안" 룰과 직교. § 4.4 = **위계 룰** (어떤 종류 ref 박을 수 있나) / § 9 = **레이아웃 룰** (어디 위치 박나). 실제 도메인 ogn 은 § 9 따라 content group 안에 박힘.

| 종류 | 허용? | 비고 |
|---|---|---|
| **ogn ref** | ✅ | 1순위 — 모든 도메인 종속·큰 묶음 |
| **일반 mol ref** (도메인 X) | ✅ | post-action-card · notice-card · list-item · accordion · banner-padded 등 (DP § 4.2) |
| **atom ref** | ❌ | atom 직접 박힘 X — mol/ogn 안 nested 만. 단일 라벨/캡션도 ogn 추출. **예외**: chrome 안 nested |
| **chrome ref** | ✅ | status-bar / GNB / footer-cs / sticky-footer* 등 |
| **page-level wrapper group** | ✅ | header/라벨 없는 단순 padding wrapper — 자식 N개 OK. 예: post-actions (외피 padding + mol/post-action-card × 2) |
| **raw 의미 묶음 group** | ❌ | **header/라벨 + 자식 N개** 패턴 — 반드시 ogn 추출. 예: section-quick-entry, section-empty-hero, result-list (label + list-item × N) |

**핵심 판정 — 두 줄 룰**:
1. **atom 만 스크린에 오는 경우 X** — atom 은 항상 mol/ogn 안 nested
2. **header/라벨 + 자식 = 의미 묶음 → ogn 추출 필수** — 자식만 (header X) 이면 page-level wrapper (page 직접 OK)

이 룰은:
- 정통 atomic design 부합 (atom = 부품, mol/ogn = 결합 단위)
- AI 자동 생성 시 "page = ogn + mol 조합" 패턴 학습 명료
- 의미 묶음은 ogn 단위로 캡슐화 → 카탈로그 일관성

### 4.5 결정 트리 v3 (2026-05-01 — 정통 atomic design 회복)

```
이 요소를 어디 둘까?

(1) 단일 텍스트인가?
    ├─ 사용처 10+ 건 + 컬러 1종 일관 + 의미 단위 명확 (라벨/캡션 등)
    │   → atom 승격 (예: atom/text-label) — 단 mol/ogn 안 nested only
    └─ 그 외 → text 노드 + textStyle 토큰 (atom 만들지 말 것)

(2) 단일 아이콘 / placeholder 도형인가?
    └─ atom (atom/icon/*, atom/thumb, atom/barcode) — mol/ogn 안 nested only

(3) atom 결합 (atom + atom 또는 atom + mol) + 반복 사용 (3+ 곳)?
    ├─ 도메인 종속 (특정 모듈만 한정) ?
    │   → ogn/{MODULE}/{name} (예: ogn/SCH/answer-card)
    ├─ chrome 격 (page top/bottom/sticky 위치 + 위치적 의미) ?
    │   → ogn/{name} 또는 ogn/{MODULE}/{name} (예: ogn/step-indicator, ogn/SCH/search-bar)
    └─ 일반 묶음 (도메인 X) → mol (예: mol/post-action-card)

(4) 화면 단위 큰 블록 (header/라벨 + 자식 N) 인가?
    ├─ 모든 화면 재사용 → ogn/{name}
    └─ 도메인 종속 → ogn/{MODULE}/{name}

(5) 최종 화면 (page) ?
    └─ page/{MODULE}/{screen-name}
       children 허용 범위 (DP § 4.4 v3 표):
         ✅ ogn ref · 일반 mol ref · chrome · page-level wrapper group (header X, 단순 padding)
         ❌ atom 직접 ref (chrome 안 nested 만 예외)
         ❌ raw 의미 묶음 group (header/라벨 + 자식 N) → ogn 추출 필수
```

**한 줄 핵심 — 두 룰**:
1. **atom 만 스크린에 오는 경우 X** — atom 은 mol/ogn 안 nested
2. **header/라벨 + 자식 = 의미 묶음 → ogn 추출 필수** — 자식만 (header X) 이면 page-level wrapper OK

**조립 규칙 요약**:
- mol = atom + atom / atom + mol / mol + mol (ogn 참조 X)
- ogn = atom + mol + ogn 모든 조합
- page = ogn + mol + chrome + wrapper group (atom 직접 X)

---

## 5. Variants 정책

### 5.1 atom 의 variants

**좋은 사용**: type / state / size / direction 같은 **원자적 특성**

| atom | variants |
|---|---|
| atom/btn | type=primary/secondary/small × state=default/pressed/disabled (9) |
| atom/tag | type=default/emphasis/neutral (3) |
| atom/btn-icon | state=default/pressed/disabled (3) |
| atom/text-area | state=default/focused/disabled/error (4) |
| atom/thumb | size=sm/md/lg (3) |
| atom/thumb-portrait | size=sm/md/lg (3) |

**나쁜 사용**: 의미가 다른 분기 (예: variants 로 시각 구성 자체가 달라짐) → 별개 atom 또는 mol 로 분리

### 5.1.1 size 변종 기본값 — sm baseline

size variant 가 있는 atom 의 기본은 **sm**. md/lg 는 명시적 강조가 필요할 때만.

- 새 atom 작성 시 baseline = sm 기준으로 visual/dimension 결정
- 단일 사이즈 atom (size variant 없음) 도 작은 쪽 — 예: 체크박스 18-20px, inline icon 16-20px
- md 가 default 로 들어간 spec 발견 시 sm 으로 교체 검토 (단, **사용처 ref 가 명시 size 를 갖고 있으면 영향 없음** — variant 명시 안 한 ref 만 영향)
- 기준 변경 영향도: 현재 catalog 에서 size variant 갖는 atom (thumb / thumb-portrait) 의 모든 사용처는 ref 마다 명시 variant 가 있어 안전. 신규 atom 부터 적용.

이유:
- 모바일 화면에서 atom 이 차지하는 공간을 보수적으로 — 정보 밀도 ↑
- "필요시 키우기" 가 "필요시 줄이기" 보다 의도가 명확

### 5.2 mol/ogn 의 variants

⚠️ **권장 안 함**. 이유:
- nested children 의 시각 분기는 generator 의 override 경로 (top-level only) 와 충돌
- variants 가 많아질수록 spec 복잡도 폭증
- 디자인 일관성 추적 어려움

mol/ogn 에서 변이가 필요하면 → **별개 컴포넌트로 분리**.

예시:
- `mol/card-header` (label + title)
- `mol/card-header-label-only` (label 만) — variants 가 아닌 별개 mol

---

## 6. 자주 하는 실수 (안티패턴)

| 실수 | 권장 |
|---|---|
| ❌ 텍스트 1개를 atom 으로 (예: atom/title) | text 노드 + textStyle 토큰 |
| ❌ raw 값 (`"#3617CE"`, `"16px"`) 직접 사용 | DS 토큰 참조 (`{semantic.color.brand.primary}`) |
| ❌ mol 안에서 variants 로 분기 | 별개 mol 로 분리 |
| ❌ atom 에 너무 많은 variants 축 (3축 × 4값) | 의미 그룹별로 atom 분리 |
| ❌ 컴포넌트 이름에 한글, 언더스코어, 대문자 | kebab-case 영문 (모듈 코드 위치만 대문자) |
| ❌ 같은 패턴인데 spec 마다 다른 spacing | 토큰 통일 + mol 캡슐화 검토 |
| ❌ 사용처 없는 atom/mol 누적 | 사용 안 하면 카탈로그에서 제거 |
| ❌ 다른 도메인을 함의하는 이름의 mol/ogn 을 그대로 가져다 쓰기 (예: 약관 동의 페이지에 `ogn/MYBEN/promo-banner`, `mol/list-item-coupon` 직참조) | **구조 재사용은 OK** 하지만 **이름이 페이지 도메인에 부합** 해야 함. 같은 시각 구조가 필요하면: ① 그 도메인용 새 mol 작성 (e.g., `mol/list-item-terms`) 또는 ② 도메인 중립 이름 (e.g., `mol/list-item-default`). text/props 는 도메인 맞게 주입 (CONVENTIONS § 5 "도메인 텍스트") |
| ❌ size variant 의 default 를 md/lg 로 (큰 사이즈 baseline) | **sm 을 baseline 으로** (§ 5.1.1). md/lg 는 명시적 강조용 |
| ❌ 행 우측의 진입 링크를 chevron 화살표만 (텍스트 없이) | 텍스트 라벨 + brand 색, 우측 정렬 (§ 3.4) |
| ❌ status label ("[필수]", "[선택]", "D-2" 같은 상태 표기) 를 atom/btn 으로 — fill 큰 버튼이 됨 | **text 노드** (sub-label / chip-badge style) + brand/muted 색, 또는 atom/tag (§ 3.4) |
| ❌ 같은 행에 들어가야 할 link 가 별도 줄로 떨어짐 (위/아래 정렬) | 같은 HORIZONTAL row 안 마지막 child, 앞 text 에 `layoutGrow: 1` 주거나 SPACE_BETWEEN |
| ❌ children 이 있는 컨테이너에 `mode: "NONE"` (auto-layout 빠뜨림) — 자식들이 0,0 에 겹쳐 쌓임 | 무조건 HORIZONTAL/VERTICAL. NONE 은 leaf placeholder (자식 없는 단색 박스) 또는 absolute-positioned 단일 layer 에만 (CONVENTIONS § 5 layout.mode 사용 원칙) |
| ❌ ref 의 props 키를 임의로 박음 (대상 spec 의 exposeAs 값 확인 안 함) — 매칭 실패 시 baseline 텍스트 그대로 노출 | spec 작성 전 대상의 base.children 의 `exposeAs` 값 확인. **AUDIT Rule 14 자동 검증** (CONVENTIONS § 8.6) |
| ❌ 같은 child 에 variant content 분기 + exposeAs 동시 부여 — Figma 가 instance property default 로 통일해서 variant content 무시 | 분기는 **둘 중 하나**: variant content (모든 인스턴스 동일 분기) 또는 exposeAs (사용처에서 props 주입). 2026-04-30 mol/checkbox-item 의 prefix 사례 |

---

## 6.5 재사용 패턴 갤러리 ⭐

특정 패턴이 N+ 곳 반복되면 mol 로 분리 — 카탈로그의 표준 자산. 신규 ogn 작성 시 우선 갤러리 검토.

### 6.5.1 `mol/section-header` — 폼/안내 섹션 헤더
- **구성**: headline (`component.card.default.main-titleStyle` = 20bold) + description (`semantic.typography.body`) + itemSpacing md(12)
- **사용처 (현재)**: term-section / term-section-dormant / info-form / login-form / leave-reason-form / leave-impact-notice / leave-confirm-card / history-summary / auth-widget — 8+ ogn
- **언제 적용**: ogn 의 본문 ogn 가 "타이틀 + 안내 한두 줄" 로 시작할 때
- **page 에서 props 주입**: `{ "headline": "...", "description": "..." }` (nested 매칭으로 ogn → mol/section-header 까지 전달)

### 6.5.2 `mol/cta-pair` — dialog/bottomsheet 액션 영역
- **구성**: secondary 취소 + primary 확인, `layoutGrow: 1` (50/50 분할), itemSpacing sm(8)
- **사용처**: notice-bottomsheet 등 dialog 종류
- **DS 결정**: `component.button.secondary.height` = `button-lg`(52) — primary 와 통일. 이전에 button-md(44) 였으나 dialog action pair 시각 균형을 위해 lg 로 통일. 부수 영향: list-item-coupon / list-item-movie 의 secondary 도 lg 로 커짐 (의도된 trade-off).

### 6.5.3 `mol/info-row` + 단일 ogn + variants 패턴 — 메타 정보 표
- **mol/info-row**: 라벨(좌, muted) + 값(우, primary) HORIZONTAL row. 결과·이력·detail 메타 표시 공유.
- **단일 ogn + case variants 패턴**: 같은 외피 / 같은 row 구조 / case 별로 데이터만 다를 때, ogn 분리 X → 단일 ogn + axis "case" 통합. 예: `ogn/MBR/meta` 의 5 case (signup / dormant / leave / rejoin / history).
- **baseline row = max(N)**: row 부족 case 는 라벨/값 빈 문자열 override. (variants 가 children 추가는 못 함 — CONVENTIONS § 5 mergeSpec 한계 참조)
- **외피 visual**: 페이지 bg (page-sub) 위 카드 시각 분리를 위해 `surface.secondary` 권장 (audit Rule 9 가 검증).

### 6.5.4 `mol/result` — 완료 화면 hero 텍스트 영역 (plain)
- **구성**: section-header 1개 + padding 3xl/2xl. 외피 visual 없음 (plain).
- **사용처**: signup-complete / dormant-complete / leave-complete / rejoin-complete 4 화면 공유. case 별 copy 는 page 의 props 가 nested 매칭으로 주입.

### 6.5.5 `notice-card-list` — 외피 + N개 mol/notice-block stack ⭐ 2026-04-30 신설

**왜 갤러리 등록**: "외피 + N row" 패턴은 mol 로 묶지 않는 정책 (mol/checkbox-list 폐기 사례 — 가변 N 한계). 대신 **토큰 + 갤러리 + 사용 가이드 3 겹** 으로 시각·의도 일관성 보장.

**구성**:
- **외피 group** (ogn 단 직접) — `component.notice-card-list.default.{padding · itemSpacing · radius · fill}` 토큰 강제
- **자식** — `mol/notice-block` (variant `size=sm` — body-bold 15 + body) × N

**사용 사례**:
- `ogn/MBR/leave-block-check` (탈퇴 차단 사유 × 3) — 첫 적용
- 향후 등장 시 같은 토큰 + 패턴 재현

**spec 예시**:
```jsonc
{
  "kind": "group", "id": "block-list",
  "layout": {
    "mode": "VERTICAL",
    "paddingTop":    "{component.notice-card-list.default.padding}",
    "paddingBottom": "{component.notice-card-list.default.padding}",
    "paddingLeft":   "{component.notice-card-list.default.padding}",
    "paddingRight":  "{component.notice-card-list.default.padding}",
    "itemSpacing":   "{component.notice-card-list.default.itemSpacing}",
    "width": "FILL", "height": "HUG"
  },
  "visual": {
    "cornerRadius": "{component.notice-card-list.default.radius}",
    "fill":         "{component.notice-card-list.default.fill}"
  },
  "children": [
    { "kind": "ref", "component": "mol/notice-block", "variant": { "size": "sm" }, "props": { "title": "...", "body": "..." } },
    { "kind": "ref", "component": "mol/notice-block", "variant": { "size": "sm" }, "props": { "title": "...", "body": "..." } },
    ...
  ]
}
```

**vs `mol/notice-card`** (1 row, 자체 외피): 단독 안내 박스 (1 카드 = 1 메시지/안내). `notice-card-list` 패턴은 N row stack 시 사용.

**vs `mol/notice-block` 외피 없는 stack**: `leave-impact-notice` 의 큰 헤딩 (size=lg) 패턴. notice-card-list 와 다름 — 외피·헤딩 사이즈 모두 다름.

**판정 기준**:
- 1 row + 자체 외피 → `mol/notice-card`
- N row + 외피 없음 (큰 헤딩) → `mol/notice-block × N` (외피 없는 group)
- N row + 외피 있음 (작은 헤딩) → 본 패턴 (`component.notice-card-list.*` 토큰 + group + `notice-block` size=sm × N)

### 6.5.6 mol 추출 워크플로우 — 전수조사 → 분리

ogn 들의 inline 패턴이 N+ 곳 반복되면:
1. **grep 으로 동일 패턴 찾기** — 예: `grep -rn '"id": "headline"' component-specs/` → textStyle/색 모두 같은지 확인
2. **mol 신설** — placeholder 텍스트, exposeAs 로 noted 키 노출
3. **사용처 갱신** — inline text 두 개 → mol ref 1개 + props 주입 (props 키는 mol 의 exposeAs 와 일치)
4. **page 검증** — page → ogn → mol 까지 nested 매칭 작동 확인 (CONVENTIONS § 9 ref props 재귀 매칭)

→ 이 절차가 카탈로그를 시간 흐름에 따라 자연스럽게 슬림화시킴.

### 6.5.7 Center-Hero ogn 패턴 — 단일 메시지 화면용 (icon + 텍스트, 중앙 정렬) ⭐ 2026-05-02 신설

**왜 갤러리 등록**: "한 화면 = 단일 메시지" ogn 들 (결과/완료, 로딩, 빈 결과, 차단 안내 등) 이 동일 시각 패턴 — **중앙 정렬된 아이콘/스피너 + 강조 headline + 부연 description** — 을 반복. typography ladder · 정렬 · frame alignment 를 한 패턴으로 표준화.

**구성**:
- **frame**: `primaryAxisAlignItems: CENTER` + `counterAxisAlignItems: CENTER`
- **icon/spinner** (top): atom/icon/* 또는 atom/spinner
- **headline**: `semantic.typography.card-title` (20px bold)
- **description**: `semantic.typography.body` (15px regular)
- **sub-info** (옵션): `semantic.typography.body-medium` (15px medium) — 카운트다운·추가 안내
- **모든 text 자식 공통**: `layoutAlign: STRETCH` + `autoResize: HEIGHT` + `textAlignHorizontal: CENTER`

**사용처 (현재)**:
- `ogn/MBR/result-summary` — 가입/탈퇴/복귀 완료 hero (4 tone variant)
- `ogn/MBR/loading-screen` — BSS 처리 중 진행 (4 *-loading page 공유)
- `ogn/SCH/empty-hero` — 검색 제로 결과 (UXL_SCH_4 안내 우선)

**spec 예시 (text 자식 한 줄)**:
```jsonc
{
  "kind": "text", "id": "headline",
  "content": "처리하고 있어요",
  "textStyle": "{semantic.typography.card-title}",
  "color":     "{semantic.color.text.primary}",
  "exposeAs":  "headline",
  "layoutAlign": "STRETCH",
  "autoResize": "HEIGHT",
  "textAlignHorizontal": "CENTER"
}
```

**언제 적용**:
- ogn 가 화면 본문의 **단일 포커스** (옆에 다른 ogn 배치 X, ogn 자체 = 화면 메시지)
- 메시지 전달이 핵심 (form/list/data 표시 X)

**vs `mol/section-header`** (§ 6.5.1): section-header 는 좌측 정렬 + 섹션 도입부 (form/list 위 헤딩). 본 패턴은 가운데 정렬 + 화면 단일 hero. 위계가 다름.

**generator 지원**: `textAlignHorizontal` (LEFT/CENTER/RIGHT/JUSTIFIED) 는 generator-core.js 의 buildText 가 처리. 2026-05-02 추가됨.

---

## 7. 새 화면 작업 체크리스트 (표준 7단계)

전체 워크플로우는 `WORKFLOWS.md` 의 "표준 화면 작업 흐름" 참조. 각 단계에서 본 문서가 어떻게 쓰이는지:

1. **사용자 입력**: 기능내역서 첨부 (`SPEC_INPUT_TEMPLATE.md` 양식 또는 Notion URL)
2. **Claude 분석 보고** (`SPEC_REPORT_TEMPLATE.md` 형식):
   - 카탈로그 대조 (`AUDIT_RULES.md` 의 3 분기) → reused / rename / new
   - **위계 결정 (← 본 문서)** — 신규 컴포넌트의 atom/mol/ogn 분류, typography/spacing/action 위계
3. **사용자 검토/결정** — 분류·위계·DS 신규 토큰 합의
4. **spec 작성**:
   - DS 신규 토큰 (필요 시) → `skt-design-system.json` (foundation → semantic → component layer)
   - cascade 순서로 spec JSON (atom → mol → ogn → page)
5. **자동 검증**: `node scripter/audit.js` (AUDIT_RULES 6 규칙 자동)
6. **빌드**: `node scripter/bundle.js --sync` + `--all` (2 Run)
7. **commit + push**

---

## 8. 변경 시 의사결정

### DS 토큰 변경/추가
- 기존 토큰과 의미 중복? → 통합 검토
- 사용처 1곳뿐? → 정말 토큰 필요한지 재검토
- raw 값을 토큰화 한다면? → 가장 가까운 layer (foundation/semantic/component) 결정

### 컴포넌트 변경
- 이름 변경 → cascade 영향 (`grep -r "{old name}" component-specs/`)
- variants 추가 → 사용처 모두 점검 필요
- 삭제 → ref 하는 곳 모두 확인

---

## 9. 페이지 구성 패턴

페이지(Screen) spec 작성 시 따르는 구조/배치 규칙. `web/src/lib/page-spec-builder.ts` 가 자동 생성할 때, 그리고 사람이 손으로 page spec 을 만들 때 모두 동일하게 적용.

### 9.1 3-zone 기본 구조 ⭐

모바일 페이지는 vertical 컨테이너로 chrome 과 content 를 분리. **모든 페이지는 반드시 이 3-zone 구조를 따름.**

```
page (VERTICAL, width: screen-mobile 375, FIXED counter axis, fill: page-home/page-sub)
├─ chrome top    : status-bar (옵션) + GNB / header (옵션)
├─ content       : group, layout.width="FILL" + layoutAlign="STRETCH"
│                  ├─ ogn 1   ← layoutAlign="STRETCH" (FILL)
│                  ├─ ogn 2   ← STRETCH
│                  └─ …
└─ chrome bottom : sticky-footer (옵션) + tab-bar (옵션)
```

**규칙**:

1. **chrome 직접 자식** — status-bar / GNB / header / footer-cta / sticky-footer / tab-bar 만 page 의 직접 children. 다른 도메인 ogn 은 절대 page 직접 자식 X.
2. **content group 필수** — chrome 사이의 모든 도메인 ogn 은 단일 `kind:"group" id:"content"` 안에 묶임. spacing·padding 정책이 한 곳에 모이고, page 의 chrome zoning 이 명확해짐.
3. **content 는 FILL** — `layout.width = "FILL"` + `layoutAlign: "STRETCH"`. content group 이 page 의 가로 폭 (375) 을 그대로 채움.
4. **content 안 ogn 도 FILL** — 각 ogn ref 에 `layoutAlign: "STRETCH"`. ogn baseline width 가 다르더라도 content 의 폭 (= page 폭) 에 fill.
5. **page itemSpacing = 0** — chrome ↔ content 는 zone 단위라 spacing 0. 도메인 sections 사이 spacing 은 content group 의 itemSpacing 에서 일괄 관리.
6. content group 의 padding / itemSpacing 결정은 § 9.1.1 (Pattern A vs B) 참조.
7. **page 정적 sticky** ⭐ — `primaryAxisSizingMode: "FIXED"` + `height: {screen-mobile-height}` (812) + content `layoutGrow: 1`. canvas 정적 view 에서도 chrome bottom (footer) 이 항상 viewport 하단 (812 라인) 에 붙음. § 9.8 의 `scrollBehavior: "STICKY_SCROLLS"` 는 prototype 스크롤 시점 동작이라 둘 다 박아야 design 시점 + prototype 시점 모두 sticky. 콘텐츠가 812 보다 길면 frame 밖으로 자연스럽게 overflow (clipsContent default false) — 디자이너가 보고 조정.

### 9.1.1 가로 24 여백을 어디서 책임지나 — 두 패턴

화면의 자식 객체들이 좌/우 24 여백에 정렬되도록 하는 두 가지 합법 패턴. **한 페이지 안에서는 하나의 패턴만 사용** — 섞으면 ogn 들 가로 시작점이 들쭉날쭉.

#### default 룰 ⭐

| 페이지 종류 | default 패턴 | 사유 |
|---|---|---|
| **홈** (`page/{MODULE}/main`) + GNB 대표 메뉴 | **Pattern A** (page padding 24, ogn 327) | 카드 스택 — 시각 밀도 높음 |
| **서브 페이지** (그 외 모두 — 가입·인증·약관·완료 등) | **Pattern B** (page padding 0, ogn 375 + inner 24) | full-bleed 호환 + ogn 자체 padding 으로 일관 |

→ 도메인 특수 사유 (이미지 갤러리 full-bleed 등) 가 있을 때만 default 에서 벗어남. 명시적 결정 필요. **default 의심 시 Pattern B**.

> 안티패턴 사례: page content padding 24 + ogn inner padding 24 = **48 이중 좌/우 여백** → 화면이 좁아 보임. AI 가 처음 page 작성 시 자주 발생. § 9.1.1 default 룰 따르면 회피.

#### Pattern A — Page padding 방식 (단순 카드 스택)

- 페이지 content group: `paddingLeft/Right = 24` (`{semantic.layout.screen-padding-default}`)
- 모든 ogn: `width = 327` (`{foundation.dimension.size.screen-content-width}`)
- 각 ogn 안 좌우 padding: 0 — 페이지가 이미 24 처리

쓸 때: 카드들이 화면을 채우고, full-bleed (이미지 / 배너) 가 없는 페이지. 예: 홈 (홈은 12 padding · 351 width 변형), 단순 리스트 화면.

#### Pattern B — Full-bleed 방식 (갤러리·배너 필요)

- 페이지 content group: `paddingLeft/Right = 0`
- 모든 ogn: `width = 375` (`{foundation.dimension.size.screen-mobile}`)
- 각 ogn 안 좌우 padding: 24 (`{semantic.layout.screen-padding-default}`)
- **단**, 진짜 full-bleed 가 필요한 ogn (이미지 갤러리, hero 배너) 만 inner padding = 0 → 화면 끝까지 차지

쓸 때: 상품 상세, 갤러리, hero 가 있는 컨텐츠 페이지. 예: page/PRDD/case1-standalone (gallery full-bleed + 다른 ogn 24 inner).

#### 안티패턴 — 두 패턴 혼용 ❌

같은 페이지 안에 어떤 ogn 은 327 (Pattern A 가정) + 다른 ogn 은 375 + 24 inner (Pattern B) → ogn 별 가로 시작점이 흔들림.

→ **ogn 작성 전에 페이지 패턴을 먼저 결정**. 이미 Pattern B 인 페이지에 새 ogn 추가하면 그것도 375 + 24 inner. Pattern A 면 327 + 0.

#### AI 가 ogn 새로 만들 때 판단

해당 page 의 다른 ogn 의 width 를 보고 같은 패턴 따름:
- 다른 ogn 이 `screen-mobile` (375) 면 → Pattern B → 새 ogn 도 375 + 24 inner
- 다른 ogn 이 `screen-content-width` (327) 면 → Pattern A → 새 ogn 도 327 + 0 inner
- 페이지에 첫 ogn → 도메인 보고 결정 (full-bleed 가 의미 있으면 B, 아니면 A)

### 9.1.2 페이지 배경 색 ⭐

**페이지 종류에 따라 배경 색이 다름.** 카드 위계와 task 흐름에 영향이 있어 화면 톤을 결정짓는 baseline.

| 페이지 종류 | 토큰 | 색 | 이유 |
|---|---|---|---|
| **홈** (`page/{MODULE}/main`) | `{semantic.color.background.page-home}` | 그레이 (gray.50) | 여러 카드(흰)가 그레이 배경 위에서 시각 분리됨 — 정보 밀도 높은 메인 |
| **서브 페이지** (그 외 모든 page) | `{semantic.color.background.page-sub}` | 화이트 (gray.0) | 단일 task 흐름 (인증, 약관, 결제, 상세 등) → flat 배경이 시선 분산 줄임 |

- page spec `base.visual.fill` 에 위 토큰 중 하나를 반드시 사용. `surface.primary` / `surface.secondary` 직접 참조 금지 — intent 가 흐려짐
- 신규 page 작성 시 첫 결정: 홈인가 / 서브인가
- audit.js (audit § 페이지 bg) 가 자동 검증 — `page/{MODULE}/main` = page-home, 그 외 = page-sub

### 9.1.3 nested row/카드 surface 분리 ⭐

서브 페이지(화이트 bg) 위에 놓이는 **nested row/카드** (전체 동의 row, 강조 박스 등) 는 페이지 bg 와 동색이라 시각적으로 구분이 안 감 → `surface.secondary` (gray.50, 가장 연한 그레이) 로 fill 박아 시각 분리.

| 케이스 | fill | 위치 |
|---|---|---|
| 서브 페이지 (화이트) 위 nested row/카드 | `{semantic.color.surface.secondary}` | `mol/all-agree-row` 등 |
| **서브 페이지 (화이트) 위 ogn 외피** | **`{semantic.color.surface.secondary}`** ⭐ | `ogn/MBR/meta`, `ogn/MBR/auth-widget` 등 |
| 홈 페이지 (그레이) 위 카드 | `{semantic.color.surface.primary}` (white, 카드형) | `ogn/MYBEN/card-*` |
| Hero / 강조 카드 (sub-page) | `{component.result.default.background}` (= surface.primary white) | `ogn/MBR/result` |
| chrome 류 (header / footer / bottomsheet / sticky / snack-bar / status-bar / tab-bar / GNB) | `surface.primary` 또는 다른 토큰 | 위치/dim 으로 분리 보장 — 룰 예외 |

원칙:
- **bg 와 row/카드가 둘 다 화이트 = 시각 분리 실패** → 한 쪽이 그레이여야 함
- 서브 페이지 = 화이트 baseline 이라 nested 는 그레이로 분리
- 홈 = 그레이 baseline 이라 카드는 화이트로 분리 (반대 패턴)
- chrome 은 위치 또는 dim 으로 분리 보장 — fill 가이드 예외 (룰 9 제외 대상)
- audit 룰 9 가 서브 페이지 + ogn 외피 surface.primary 조합 자동 검증

### 9.1.4 페이지 단위 banner 는 wrapper mol 로 감싸기 ⭐

`atom/banner` 를 **페이지 children 에 직접 ref 금지**. 화면 좌·우 끝까지 닿는 full-bleed 로 보여 시각 위계 무너짐. 대신 `mol/banner-padded` 로 좌/우/상/하 12 padding 감싸 사용.

```jsonc
// ❌ Anti-pattern — page 가 atom/banner 직접
{ "kind": "ref", "id": "promo", "component": "atom/banner",
  "layoutAlign": "STRETCH", "props": {...} }

// ✅ wrapper mol 경유
{ "kind": "ref", "id": "promo", "component": "mol/banner-padded",
  "props": { "message": "..." } }
```

이유:
- atom/banner 는 **container 없는 atom** → 콘텐츠 너비 = 컨테이너 너비. 페이지 base 는 375 이라 banner 도 375 (full-bleed)
- 12 padding wrapper 가 들어가야 시각 breathing room 확보 (배너 너비 351 = screen-content-width-home)
- 같은 패턴이 5+ 페이지에 반복되면 mol 로 캡슐화 (§ 4.2 mol 분리 기준)

### 9.2 화면 역할별 default chrome 조합 (정책서 침묵 시 자동 적용) ⭐

**원칙**: 정책서가 chrome (status-bar / header / footer / tab-bar) 명시 안 해도 AI 는 화면 역할을 식별하고 아래 표의 default 를 **자동 적용**. **"정책서에 안 적힘 = 빼라" 가 아님 — 안 적힘 = default 적용**. 표에서 벗어난 추가/삭제만 명시적 근거 필요.

#### 화면 역할 식별 휴리스틱

screen-name / 모듈 / 페이지 suffix 로 추론:

| 식별 패턴 | 화면 역할 |
|---|---|
| `*-main` / `*-home` / 모듈 진입점 | 풀스크린 메인 |
| `PRDD/*` / `*-detail` / `*-product-*` / 콘텐츠 단일 화면 | 컨텐츠 상세 |
| `*-search` / `*-filter` / 리스트 + 검색 UI | 검색/필터 |
| `*-terms` / `*-info` / `*-complete` / `*-confirm` / 인증·약관·완료 류 | 로그인/인증/온보딩 |
| screenId `*BS*` / 명시적 modal·sheet | BottomSheet/모달 |
| 그 외 | 가장 가까운 패턴 + POLICY_REPORT § 2 "⚠️ 추론 검증 필요" 에 명시 |

#### chrome 조합 default

| 화면 역할 | chrome 구성 | 비고 |
|---|---|---|
| 풀스크린 메인 (홈, 마이페이지) | status-bar + GNB + content + tab-bar | 가장 일반적 |
| 컨텐츠 상세 (상품/영상/쿠폰 상세) | status-bar + header + content + sticky-footer | sticky-footer = 구매/예매 등 핵심 CTA |
| 검색 / 필터 | status-bar + GNB + content (+ tab-bar 옵션) | search-bar 는 GNB 안에 또는 content 첫 항목 |
| BottomSheet / 모달 | dim backdrop + bottomsheet (status-bar 옵션) | § 9.3 참조 |
| 로그인 / 인증 / 온보딩 | status-bar + header + content + sticky-footer | tab-bar 없음. footer 는 "다음·확인·완료" CTA |

#### header 슬롯 default

| 화면 역할 | 좌 | 중앙 | 우 |
|---|---|---|---|
| 풀스크린 메인 | (로고 또는 좌측 메뉴 — GNB 사용) | (없음 또는 GNB 통합) | 검색·카트·메뉴 (§ 9.7) |
| 컨텐츠 상세 | `btn-icon` (chevron-left, 뒤로가기) | (타이틀 옵션) | share + bag (§ 9.7) |
| 로그인/인증/온보딩 | `btn-icon` (chevron-left) | 타이틀 (옵션) | (비움) |
| BottomSheet/모달 | (비움 또는 타이틀) | (타이틀) | `btn-icon` (close, x-mark) |

footer 변형 (single / with-icons / pair) 결정은 [§ 3.5](#35-footer-cta-패턴-ognsticky-footer-cta-variants-) 참조.

#### POLICY_REPORT § 2 자동 채움 룰

POLICY_REPORT § 2 의 "화면별 컴포넌트 추론" 표 작성 시 **chrome 행 (status-bar / header / footer / tab-bar) 은 정책서 명시 여부와 무관하게 자동 채움**. 추론 근거 컬럼에 "default chrome (DP § 9.2)" 표기.

### 9.3 BottomSheet 화면 시각화 (open state preview)

BottomSheet 는 **자체 ogn 한 덩어리** 로 작성 (`ogn/{MODULE}/xxx-bottomsheet`). 그 ogn 안에 컨텐츠 (체크박스, 약관 항목, CTA 등) 모두 포함.

페이지(page) 로 감쌀 때는 **"올라온 상태의 미리보기"** 로 구성 — 디자이너가 BottomSheet 가 화면 위에 떴을 때 어떻게 보일지 가늠할 수 있게:

```
page (VERTICAL, FIXED 375 × 812, primaryAxisAlignItems: SPACE_BETWEEN)
├─ status-bar  (in flow, 자동으로 상단)
├─ dim         (layoutPositioning: ABSOLUTE · x:0 y:0 · 375×812
│                · constraints: STRETCH·STRETCH
│                · fill: {semantic.color.background.overlay} · opacity: 0.4)
└─ bottomsheet (in flow, 자동으로 하단 — SPACE_BETWEEN)
```

- 페이지: FIXED 812 + SPACE_BETWEEN — status-bar 자동 상단, bottomsheet 자동 하단
- **dim 은 absolute positioning** — auto-layout 흐름에서 빠져 page 전체 (status-bar 포함) 를 덮음. children 배열 위치 (status-bar 다음, bottomsheet 앞) 가 z-order 결정 → status-bar 위에 덮이지만 bottomsheet 아래에 깔림
- `opacity: 0.4` 필수 — DS `background.overlay` 토큰만으론 alpha 안 들어감 (값이 black 단색)
- BottomSheet 컨텐츠는 절대 페이지 레벨에서 풀어 놓지 말 것 (ogn 안에 들어 있어야 — 안 그러면 중복)
- 화면 역할이 "BottomSheet" 임은 screenId 의 `BS` 표기 / screenRole 명시로 판단

### 9.4 chrome 자동 분류 (이름 기반)

page-spec-builder 는 컴포넌트 이름의 마지막 segment 로 chrome 자동 분류:

| 이름 끝 (kebab-case 정규화) | chrome role | 배치 |
|---|---|---|
| `status-bar`, `statusbar` | status-bar | top |
| `gnb`, `header`, `top-bar` | gnb | top (status-bar 다음) |
| `tab-bar`, `tabbar`, `bottom-nav` | tab-bar | bottom |
| `sticky-footer`, `footer-cta`, `bottom-cta` | sticky-footer | bottom (tab-bar 위) |
| `bottomsheet`, `bottom-sheet`, `modal`, `dialog` | bottomsheet | open-state preview (§ 9.3) |

→ 새 chrome 류 컴포넌트 추가할 땐 이 이름 컨벤션 따르기. 그러면 자동 분류됨.

### 9.5 콘텐츠 영역 패턴 (chrome 조합과 별개)

§ 9.2 의 chrome 조합과 짝꿍. content group 안의 **자식 배치 / 정렬 / spacing** 패턴.

| 패턴 | 정렬 (counterAxis) | content padding (Y) | itemSpacing | typography | 예 |
|---|---|---|---|---|---|
| **Hero / Result** | CENTER | 위/아래 `spacing.3xl` (32) | `spacing.lg` (16) ~ `spacing.xl` (20) | hero 사이즈 (card-title or 더 큼) + body | `signup-complete`, `dormant-complete`, 인증 결과 |
| **Form** | MIN (좌측 정렬) | 위/아래 `spacing.2xl` (24) | `spacing.lg` (16) | label + input row 반복 | `signup-info`, `login`, `rejoin-info` |
| **List** | MIN | 위/아래 `spacing.2xl` (24) | section heading: `spacing.lg`, row 사이: `spacing.sm`~`spacing.md` | row 의 list-label 또는 mol/list-item-* | `signup-terms`, `dormant-terms`, `leave-notice` |
| **Detail** | MIN | 위/아래 `spacing.2xl` (24) | `semantic.layout.card-gap` (4) | gallery (full-bleed) + meta + body + sticky CTA | `PRDD/case1-standalone` |
| **Selection** | MIN | 위/아래 `spacing.2xl` (24) | `spacing.md` (12) | 선택 가능한 row (radio/checkbox + label) | `leave-reason`, `leave-confirm` |

**Hero / Result 패턴 자세히** (가장 자주 빠지는 부분):
- counterAxisAlignItems: **CENTER** — 콘텐츠가 화면 가운데 정렬
- 외피 padding 위/아래 **3xl (32)** — 강조 영역의 여백
- 헤드라인: **hero typography** (card-title 또는 더 큼)
- description: body 또는 body-medium, 헤드라인과 **lg(16)~xl(20) 간격** (§ 1.4)
- 그 아래 후속 액션 카드 (선택) — 카드 그룹과는 **3xl(32) gap** 분리 (단순한 card-gap 4 아님)

**선택 / List 패턴**: row 사이는 `spacing.sm`~`spacing.md` 가 자연스러움. card-gap (4) 처럼 좁히면 row 끼리 뭉쳐 보임.

### 9.6 Floating chrome 패턴 (snack-bar / toast)

플로팅 = **auto-layout 흐름 밖**에서 화면 특정 위치 (보통 하단) 에 떠 있는 chrome. 일시적 안내 (snack-bar / toast) 또는 BottomSheet dim 처리 (§ 9.3) 에 사용.

#### Figma spec 표준

```jsonc
{
  "kind": "ref",
  "id": "toast",
  "component": "ogn/snack-bar",
  "props": { "message": "..." },
  "layoutPositioning": "ABSOLUTE",          // auto-layout 흐름에서 빠짐
  "x": 0,
  "y": 720,                                 // 페이지 하단 - snack-bar 높이 - margin
  "constraints": {
    "horizontal": "STRETCH",                // 좌우 fill (또는 "CENTER" 로 가운데 정렬)
    "vertical": "BOTTOM"                    // 하단 고정 (= Figma "MAX")
  }
}
```

- **`layoutPositioning: "ABSOLUTE"`** 필수 — page 의 VERTICAL flow 에서 분리
- **`x` / `y`** 는 페이지 frame 기준 좌표 — 보통 `y = screen-mobile-height(812) - snack-bar-height - margin`
- **`constraints.vertical: "BOTTOM"`** — page 가 늘어나도 하단 유지. (`"BOTTOM"` 은 generator 가 Figma `"MAX"` 로 자동 변환)
- `horizontal: "STRETCH"` = 좌우 fill, `"CENTER"` = 가운데 정렬

#### 개발 매핑 (CSS)

Figma spec 의 의도가 실제 웹 구현에서 어떻게 번역되는지:

| Figma spec | CSS 매핑 |
|---|---|
| `layoutPositioning: "ABSOLUTE"` | `position: fixed` (또는 viewport 한정 시 `absolute`) |
| `constraints.vertical: "BOTTOM"` | `bottom: <margin>` |
| `constraints.horizontal: "STRETCH"` | `left: <margin>; right: <margin>` |
| `constraints.horizontal: "CENTER"` | `left: 50%; transform: translateX(-50%)` |
| `y: 720` (페이지 좌표) | `bottom: 812 - 720 - h` 로 환산 (또는 `bottom` 직접 명시) |

추가 고려 (개발 단:
- `z-index` 높게 (다른 chrome 위) — 보통 `999` 또는 design system 토큰
- `safe-area-inset-bottom` 보정 (iOS 노치/홈 바) — `bottom: calc(<margin> + env(safe-area-inset-bottom))`
- 일시적 노출이므로 enter/exit 트랜지션 (slide-up + fade)

#### sticky-footer 와의 차이

| 속성 | sticky-footer (chrome) | snack-bar (floating chrome) |
|---|---|---|
| 흐름 | auto-layout flow 안 (chrome bottom) | flow 밖 (`layoutPositioning: ABSOLUTE`) |
| 페이지 layoutMode | 보통 `SPACE_BETWEEN` 으로 자동 하단 | (별도 처리 필요 X — ABSOLUTE 가 알아서) |
| 시각적 영구성 | 항상 보임 | 임시·동적 |
| sticky-footer 가 있는 페이지 | — | y 좌표 = sticky-footer 위 (`812 - 72 - h - 16`) |

#### 가이드 요약

새 페이지에 snack-bar 류 floating chrome 추가 시:
1. ref 에 `layoutPositioning: "ABSOLUTE"` + `x`, `y`, `constraints` 4가지 필수
2. `vertical: "BOTTOM"` (직관 표현 OK — generator 가 MAX 로 자동 변환)
3. `horizontal: "STRETCH"` 또는 `"CENTER"` 중 디자인 따라 선택
4. y 좌표 계산 = `screen-mobile-height(812) - 자체 height - margin(보통 16~24)`

### 9.7 chrome 액션 아이콘 컨벤션 ⭐

Chrome (header / footer / bottomsheet) 의 자주 등장하는 액션은 **표준 아이콘** 으로 통일. AI 가 새 화면 만들 때 일관 결정하도록.

| 액션 | 아이콘 | 토큰 path |
|---|---|---|
| **뒤로가기** (header left) | chevron-left | `atom/icon/chevron-left` |
| **닫기** (modal/bottomsheet) | x-mark | `atom/icon/close` |
| **공유** (header right) | share | `atom/icon/share` |
| **장바구니** (header right) | shopping-bag | `atom/icon/bag` |
| **좋아요** (footer left) | heart | `atom/icon/heart` |
| **선물** (footer left) | gift | `atom/icon/gift` |
| **검색** (header right 또는 GNB) | magnifying-glass | `atom/icon/search` |
| **메뉴** (header right) | bars-3 | `atom/icon/menu` |
| **AI 강조** (인사·추천·sparkle 표시) | sparkles | `atom/icon/sparkle` (brand 색) |
| **하단 탭 — 활성 홈** | home-fill | `atom/icon/home-fill` (brand 색) |
| **하단 탭 — 비활성 홈** | home | `atom/icon/home` |
| **QR 스캔** | qr-code | `atom/icon/qr-scan` |

**원칙**:
- **뒤로가기 = `chevron-left`** (`arrow-left` 아님 — 더 가벼운 chrome 톤)
- **닫기 = `close`** (= heroicons `x-mark` 의 우리 이름)
- 색은 `default` (검정) — § 11 audit log "atom/icon default 색 정책" 참조. brand 는 활성·강조 자리만.
- atom/btn-icon 의 INSTANCE_SWAP property 로 swap (CONVENTIONS § 7)

```jsonc
// 헤더 뒤로가기 사용처 (ogn/header, ogn/PRDD/header 등)
{
  "kind": "ref",
  "id": "btn-back",
  "component": "atom/btn-icon",
  "props": { "icon": "atom/icon/chevron-left" }   // 표준
}
```

새 chrome 액션이 필요한데 위 표에 없으면 — heroicons (micro 16) 또는 SKT Normal SVG 셋에서 적절한 아이콘 선택 후 [`icon-registry.json`](../scripter/icon-registry.json) 추가.

### 9.8 page chrome scrollBehavior 표준 ⭐

page 안의 chrome (footer / GNB / status-bar / tab-bar 등) ref 에 `scrollBehavior` 명시 — Figma prototype 에서 페이지 스크롤 시 sticky 동작 결정.

| chrome 종류 | scrollBehavior | 이유 |
|---|---|---|
| **footer** (sticky-footer / footer-cta / cta-pair / `*-footer`) | **`"STICKY_SCROLLS"`** | 화면 하단 고정 — CTA 가 항상 보여야 함 |
| **header / GNB / status-bar / tab-bar** | `"FIXED"` 또는 `"STICKY_SCROLLS"` | 화면 상하단 고정 (디자인 따라) |
| 일반 콘텐츠 ogn / mol | (명시 X) | default `"SCROLLS"` — 스크롤 따라 이동 |

#### Figma plugin API 매핑

| spec 값 | Figma 동작 |
|---|---|
| `"SCROLLS"` (default) | 부모 스크롤 시 같이 이동 (일반) |
| `"STICKY_SCROLLS"` | 자기 영역 도달 시 하단(또는 상단) 에 sticky |
| `"FIXED"` | 부모 스크롤과 무관하게 항상 같은 화면 위치 |

#### 표준 spec

```jsonc
// page/MBR/signup-terms 의 footer ref
{
  "kind": "ref",
  "id": "footer",
  "component": "ogn/sticky-footer",
  "props": { "label": "다음" },
  "scrollBehavior": "STICKY_SCROLLS"   // ⭐ chrome 표준
}
```

generator 가 `scrollBehavior` 필드 인식 → instance 에 `node.scrollBehavior = ...` 박음 → Figma Prototype 탭의 **Scroll behavior > Position: Sticky** 로 노출.

#### 개발 매핑

| Figma | CSS |
|---|---|
| `"STICKY_SCROLLS"` | `position: sticky; bottom: 0;` (또는 top: 0) |
| `"FIXED"` | `position: fixed; bottom: 0;` |
| `"SCROLLS"` | `position: static` (default) |

(개발팀 export 시 위 매핑 그대로 따라가면 디자인 의도 일치.)

#### audit 룰 11 자동 검증

page 안에서 footer 류 ref (component 가 `sticky-footer` / `footer-cta` / `cta-pair` / `*-footer`) 발견 시 `scrollBehavior: "STICKY_SCROLLS"` 안 박혀있으면 warning. AI 가 새 page 만들 때 자동 적용 권장.

---

## 11. 디자인 결정 audit log

본 문서의 규칙·기본값을 변경하거나 새 결정을 추가했을 때 기록. git log 와 별도로 **사유**를 남기기 위함 — "왜 이 값을 이렇게 정했는지" 6개월 뒤에도 추적 가능하게.

| 날짜 | 변경/결정 | 사유 |
|---|---|---|
| 2026-04-27 | `foundation.dimension.size.screen-mobile-height = 812` 추가 + page minHeight 원칙 (§ 0) | iPhone 13/14 viewport. complete 류 짧은 화면도 viewport 채워 시각 안정성 확보. auto-layout primary AUTO + minHeight 로 긴 콘텐츠는 늘어남. |
| 2026-04-28 | § 1.4 텍스트 그룹 위계 spacing / § 4.3 외피 visual identity 구체값 / § 9.5 콘텐츠 영역 패턴 추가 | Hero/Result 류 화면이 위계 약하다는 피드백. radius·shadow·padding 가이드가 추상적이고 콘텐츠 영역 패턴도 chrome 조합만 있어 spec 작성 시 임의 결정 → 시각 퀄리티 일관성 확보 어려웠음. |
| 2026-04-28 | `component.accordion.default.paddingHorizontal` 토큰: `spacing.lg(16)` → `spacing.2xl(24)` | § 2.5 "카드 안 padding (외피 inner) = 24" 정합. PRDD 화면에서 accordion inner 가 16 들어가 좁게 보임 — accordion 은 정보 밀도 예외 케이스 아님. |
| 2026-04-28 | `atom/accordion`·`atom/banner`·`atom/text-area` baseline width: `screen-content-width(327)` → `screen-mobile(375)` | § 9.1.1 두 패턴 혼용 안티패턴. 사용처(`page/PRDD/case1-standalone`, `page/MBR/leave-notice`, `page/MBR/leave-reason`) 가 모두 Pattern B (페이지 padding 0 + ogn 375). atom 만 Pattern A 가정 327 이라 좌우 24씩 비어 보임 → fill 안 됨. |
| 2026-04-28 | (취소) `component.banner.*.padding` + `component.textarea.default.padding` : 24 → 16 으로 되돌림 | 의사소통 오해. 사용자 의도는 banner 의 **외부 마진 16** 이었음 (안쪽 padding 16 은 그대로 유지). atom width auto 화 정책 결정 후 외부 마진 처리 방식 재논의. |
| 2026-04-28 | atom/icon default 색 정책: `semantic.color.brand.primary` → **`semantic.color.icon.default`** (gray.900). brand 유지 예외 = sparkle / home-fill / bag-fill | 기존 모든 아이콘이 보라(brand) 라 헤더·status bar·탭바 비활성 영역에서 시각 노이즈 강함. 검정(`icon.default`) 이 일반 컨트롤 표준 — 활성·강조 자리만 brand 로 의도 분리. (관련: mockup/CLAUDE.md "아이콘 색상 분기" 미해결 항목 부분 해결) |
| 2026-04-28 | 줄글 텍스트 default 정책: `layoutAlign: "STRETCH"` 표준화 + generator 가 STRETCH text 에 `textAutoResize="HEIGHT"` 자동 적용 (CONVENTIONS § 6.1) | 컨테이너 width 고정인데 본문 길면 카드 밖으로 흘러넘치는 문제 발생 (예: ogn/MBR/result 의 description). 단일 라벨만 HUG, 줄글은 자동 줄바꿈이 default 여야 함. spec 작성자가 매번 textAutoResize 박을 필요 없도록 generator 자동화. |
| 2026-04-28 | § 9.6 Floating chrome (snack-bar / toast) 패턴 신설 + generator 가 `constraints` 에서 `BOTTOM/TOP/LEFT/RIGHT` 직관 표현을 Figma `MAX/MIN` 으로 자동 매핑 | snack-bar 류 플로팅 chrome 의 spec 표준 + 개발(CSS) 매핑이 명시 안 돼있어 page 별로 다른 좌표·constraints 패턴 발생. 디자인 의도(하단 fill / 가운데 정렬)와 개발 구현(`position: fixed; bottom; safe-area`) 의 트레이서빌리티 확보. |
| 2026-04-28 | `component.header.default.titleStyle` (20 medium, lh 120%, tight-sm) + `titleColor` 토큰 신설 + 모든 chrome 헤더 (ogn/header, ogn/bottomsheet, ogn/MBR/* 헤더 5개) 의 title text 가 새 토큰 참조 | 헤더 타이틀이 spec 마다 `semantic.typography.card-title` (20 bold) 로 박혀 본문 카드 제목과 시각 분리 안 됨. 헤더는 더 가벼운 weight(medium=500) 가 chrome 답고 본문 카드 제목(bold)과 위계 분리. 한 토큰으로 일괄 관리. |
| 2026-04-29 | CONVENTIONS § 6.2 신설 — `width` 명시 + `layoutAlign:STRETCH` 충돌 회피 규칙 | bottomsheet-terms-detail header 의 title↔X 가 SPACE_BETWEEN 안 먹어 가운데 붙어보임. width 327 + STRETCH 박힘이 generator 의 `layoutSizingHorizontal=FILL` 적용과 모호하게 충돌. STRETCH 면 width 안 박는 게 일관. |
| 2026-04-29 | CONVENTIONS § 7 신설 — INSTANCE_SWAP 패턴 (atom 안 자식 swap) | 같은 atom (atom/btn-icon) 인데 사용처마다 다른 아이콘이 들어가야 할 때, 별개 atom 다중 생성 또는 variants 분기 대신 `kind: ref + exposeAs` 로 instance swap property 노출 → 사용처에서 `props.icon` 한 줄로 swap. 카탈로그 비대 방지 + Figma 디자이너도 swap 컨트롤 사용 가능. 이 패턴이 spec 작성 시 표준 결정 트리에 반영. |
| 2026-04-29 | `component.checkbox-list.default.{itemSpacing\|paddingY\|paddingX}` 토큰 신설 + CONVENTIONS § 9 (List group 패턴) + AUDIT_RULES § 2.8 (룰 8) 신설 + 4곳 ogn (bottomsheet / term-section / term-section-dormant / leave-reason-form) 의 list group 토큰 참조 | checkbox-item / radio-item 류를 N개 묶는 list 패턴이 4곳 이상 등장. 시각 일관성은 이미 동일 토큰 (spacing.md, screen-padding-default) 으로 확보됐으나, 의도가 spec 마다 흩어져 AI 가 새 spec 작성 시 헷갈림. 의도 박힌 토큰 + 강제 가이드 + audit 자동 검증 3겹 안전망. mol 신설은 가변 N 한계로 보류. |
| 2026-04-29 | `mol/info-row` + `atom/divider` baseline width 토큰 제거 + primary `AUTO` (HUG) 로 통일 | ogn 에서 STRETCH 박았는데 fill 안 되는 케이스 발견 (ogn/MBR/meta 의 row/divider 327×38 Hug). CONVENTIONS § 6.2 의 width-STRETCH 충돌 안티패턴. mol/atom 의 baseline width 명시는 사용처 STRETCH 와 충돌 → 제거 표준. 9개 다른 spec (atom/text-input, mol/checkbox-item, mol/card, mol/all-agree-row 등) 도 같은 함정 잠재. |
| 2026-04-29 | `ogn/MBR/meta` + `ogn/MBR/auth-widget` 외피 fill: `surface.primary` → `surface.secondary` + DP § 9.1.3 보강 (ogn 외피 케이스 + chrome 예외) + AUDIT_RULES § 2.9 (룰 9) 신설 | 서브 페이지 (화이트 bg) 위 ogn 외피가 화이트면 시각 분리 실패. § 9.1.3 가 mol/row 위주로 적혀있어 ogn 케이스 미커버. ogn 도 추가 + chrome (header/footer/bottomsheet/sticky/etc.) 예외 명시. audit 룰 9 가 자동 검증 — page-sub × ogn surface.primary 조합 발견 시 warning. 현재 PRDD 3건 (gallery / product-info / recommend-list) 은 별도 안건. |
| 2026-04-29 | atom/mol baseline width 토큰 일괄 제거 (9개 spec) + CONVENTIONS § 6.3 (baseline width 정책) + § 6.4 (constraints alias) + § 3.x (icon-registry color) + DP § 9.7 (chrome 액션 아이콘 컨벤션) + WORKFLOWS 옵션 E 보강 | 같은 width-STRETCH 충돌 (§ 6.2) 잠재 함정이 9개 spec 에 남아 있어 일괄 정리. baseline 정책·constraints alias·icon-registry color·chrome 액션 컨벤션·--changed 동작 모두 docs 정착해서 AI 일관 결정 + 신규 사용자 진입 부담 ↓. 대상 9개: `atom/banner`, `atom/text-input`, `mol/{accordion, all-agree-row, card, checkbox-item, cta-pair, form-row, section-header}`. |
| 2026-04-29 | `mol/result` deprecated → 삭제 + `ogn/MBR/result-block` ref 를 `mol/section-header` 로 교체 | `mol/section-header` 가 이미 동일한 props 인터페이스 (`headline` + `description`) 노출. 기능 중복 + result-block 단일 사용처라 통합. 카탈로그 슬림화. Figma 의 좀비 컴포넌트는 수동 삭제 (mol/consent-card 와 동일 패턴). |
| 2026-04-30 | DP § 9.8 page chrome scrollBehavior 표준 + CONVENTIONS § 5 ref 스키마 보강 + AUDIT_RULES § 2.11 (룰 11) 신설 + 18개 page footer ref 일괄 `scrollBehavior:"STICKY_SCROLLS"` | footer = 화면 하단 고정 (CTA 항상 보임) 의도가 spec 마다 흩어져 일관성 ↓. 새 page 만들 때 AI 가 자동 적용하도록 표준화. Figma prototype sticky + 개발 export 시 `position: sticky` 매핑 트레이서빌리티 확보. |
| 2026-04-30 | DP § 3.5 footer CTA 패턴 (`ogn/sticky-footer-cta` 3 variants) 결정 트리 신설 + CONVENTIONS § 5 cross-link | 같은 ogn 의 single / with-icons / pair 중 어느 걸 쓸지 화면 의도 보고 결정. 약관/정보 → single, 콘텐츠 상세 → with-icons, 의사결정 → pair 표준화. AI 가 page 만들 때 자동 적용. |
| 2026-04-30 | analyze-spec / generate-spec API 시스템 프롬프트에 "**의미 매칭 우선**" 룰 추가 + AUDIT_RULES § 1 rename 표 보강 + `mol/list-item-terms`·`mol/list-item-terms-optional` 삭제 → `mol/checkbox-item` 통합 (`tone` variant 축 신설) | 도메인 종속 이름 mol 이 중립 mol 과 의미 중복 발생 (list-item-terms vs checkbox-item). 카탈로그 비대 + 다른 도메인 재사용 어려움. AI 가 catalog description 까지 검색해서 흡수하도록 시스템 프롬프트 강화. checkbox-item 의 action 도 atom/btn-inline ref 로 통일 (text "자세히" → 진짜 클릭 영역). 사용처 (term-section / term-section-dormant) ref 갱신. |
| 2026-04-30 | generator-core 의 variant overrides 매칭 로직 — **부분 키 (`"tone=required"` 처럼 일부 axis 만)** 도 인식하도록 수정. 기존 풀 조합 키도 동일 로직으로 처리 (backward compatible). + spec child 의 `visible: false` 처리 추가 (variant 별 hide) | mol/checkbox-item (3 axis × 12 combos) 의 부분 키 overrides 가 무시돼 모든 variant 가 base 와 동일 — generator 가 variantKey(combo) 풀 조합 결합 후 `overrides[key]` 정확 lookup 만 시도해서 부분 키 매칭 실패. 다른 spec 들이 axis 1~2 라 우연 작동했을 뿐. 새 로직: overrides 의 모든 키를 walk 하면서 키의 모든 (axis=value) 페어가 combo 와 일치하면 누적 merge. 추가로 visible 처리 — checkbox-item 의 tone=none 케이스에서 input + prefix 둘 다 hide 가 필요해 generator 보강. |
| 2026-04-30 | AUDIT Rule 14 (`props-key-match`) 신설 + audit.js 구현 + AUDIT_RULES § 2.14 + CONVENTIONS § 8.6 + DP § 6 안티패턴 2건 (props 키 임의 박기 / variant content + exposeAs 동시 부여) + ogn/PRDD/recommend-list 6 곳 정정 (`title/body` → `headline/description`) | mol/checkbox-item 의 `title→label` 사례에서 발견한 props 키 mismatch 함정 — 카탈로그 전수조사 결과 41 ref 에 잠재. nested 매칭으로 35 건은 우연 작동, 6 건만 진짜 invalid. audit 자동 검증 (재귀 깊이 4) 으로 재발 차단 + spec 들에 exposeAs 박는 정책 명시 (CONVENTIONS § 8.6). |
| 2026-04-30 | `mol/checkbox-list` (가변 N row 묶음 wrapper mol) 폐기 → 토큰 패턴 (`component.checkbox-list.default.*`) + 사용처 row mol N개 직접 ref 로 복귀 + AUDIT_RULES rename 표에 `list-wrapper` 류 안티패턴 등록 | mol/checkbox-list 시도 결과 3가지 한계 발견: (1) baseline 4 row 텍스트 vs 사용처 다름 → instance 텍스트 수동 편집 필요, (2) row 수 가변 (3/4/5) → variants 폭증 또는 4 row 고정으로 row hide 필요, (3) padding 중복 (사용처 외피 24 + mol 자체 24). Figma component 가변 N 한계 그대로. 결론: row 묶음 mol 신설은 안티패턴. 토큰 (itemSpacing/paddingY/paddingX) + 사용처 row mol N개가 정합 — 이미 룰 8 + CONVENTIONS § 9 정착. cleanup-orphans.generated.js 로 Figma 좀비 일괄 정리. |
| 2026-04-30 | list-item 시리즈 통합 — `mol/list-item-coupon`·`mol/list-item-movie`·`mol/list-item-title-sub-default` 삭제 → `mol/list-item` (variant `thumb=square/portrait`) 신설. 사용처 (ogn/MYBEN/card-coupon-list / card-movie-list) ref 갱신 + AUDIT_RULES rename 표 보강 | 도메인 종속 list-item 3종 (쿠폰·영화·텍스트만) 이 의미 같은 중립 mol 로 흡수 가능. thumb 종류 + props (title/sub/label) 만 다른 상태. 카탈로그 슬림 + 다른 도메인 (혜택·상품 등) 재사용 가능. 17개 page footer scrollBehavior 일괄 정착 (룰 11 통과) 작업도 같은 라운드. |
| 2026-04-30 | CONVENTIONS § 1 "중립 이름 우선" 원칙 신설 | atom/mol 의 이름은 도메인 종속 단어 피하고 중립 우선. 도메인 차이는 props/variants 로 표현. 약관·쿠폰·영화 통합 사례 (직전) 의 가이드 정착 + AI 일관 적용 (analyze-spec / generate-spec 의미 매칭 우선 룰과 짝꿍). 예외는 ogn/{MODULE} 자리 + atom/icon/* 의미 단위. |
| 2026-04-30 | 도메인 종속 mol 3개 rename — `mol/brand-grid` → `mol/logo-grid` / `mol/point-balance` → `mol/value-row` / `mol/card-info-brand` → `mol/card-info-split` (mol/card-info-stack 과 짝꿍) + AUDIT_RULES rename 표 보강 | 브랜드·포인트 도메인 단어 제거. 다른 도메인 (제휴사 로고, 잔여량 표시, 정보 split 카드) 에서 재사용 가능. 사용처 자동 갱신 (ogn/MYBEN/card-brand-list, mol/card-info-* 끼리). cleanup-orphans 로 Figma 좀비 정리. |
| 2026-04-30 | CONVENTIONS § 8.5 옵셔널 자식 패턴 (`visible: false` override) 표준 신설 + `mol/form-row` variants axis `helper=with/without` 도입 + 사용처 갱신 (ogn/MBR/info-form 5 row, login-form 2 row — `helper:""` 빈 string 우회 → variant 명시) | 빈 문자열 helper 가 Figma text node 의 line-height + itemSpacing 만큼 vertical space 점유 → "helper 없을 때 spacing 좁아짐" 시각 의도가 어긋남. 개발 export 시 `<Helper>{""}</Helper>` 빈 element 가 렌더되어 CSS gap 자동 collapse 안됨. visible:false 표준은 Figma auto-layout 의 collapse + React 조건부 렌더 + CSS display:none 셋 다 일관된 의도 매핑. 기존 § 8.5 "ref props 키 매칭" 은 § 8.6 으로 이동. |
| 2026-04-30 | DP § 9.2 default chrome 조합 (정책서 침묵 시 자동 적용) 보강 — 화면 역할 식별 휴리스틱 표 + chrome 조합 default 표 (컨텐츠 상세 = GNB → header / 인증·온보딩 = footer 추가) + header 슬롯 default 표 + POLICY_REPORT § 2 자동 채움 룰 명시. POLICY_REPORT_TEMPLATE § 2 도 cross-link 안내 추가 | 기존 § 9.2 의 "추론 시 보수적으로" 한 줄이 *부정형* (벗어난 추가 금지) 이라 정책서 침묵 시 chrome 자동 적용 룰이 모호. AI 가 "header 얘기 없으니 빼야 하나?" 망설임 발생. screen-name 패턴 기반 화면 역할 식별 + role → chrome 조합 → 슬롯 default 까지 3단 추론 체계 명시 → 새 도메인 화면도 일관 결정. |
| 2026-05-01 | `mol/notice-block` size=sm variant 톤 다운 — title + body 둘 다 `text.muted` (gray.600) 로 override. size=lg 는 baseline (title=primary / body=secondary) 유지 | nested 사용 케이스 (notice-card 안 / leave-block-check / leave-impact-notice 의 N 개 stack) 에서 size=sm 이 아직도 시선을 강하게 잡아 ogn 외피 visual 과 경쟁. 한 톤 다운으로 외피·헤딩 위계가 우선되고 sm 인스턴스는 배경 정보로 후퇴. lg (단독 대형 헤딩 자리) 는 그대로 강조 유지. |

기록 시점: 변경이 § 0~9 의 표·공식·기본값에 닿을 때. 단순 오타 수정·문구 다듬기는 기록 안 함.

---

## 부록: 현재 카탈로그의 위계 적용 사례

### MYBEN/main (MY 혜택 메인)
- 화면 헤더: `ogn/GNB` (T 로고 좌, 아이콘 우 — primary 색)
- 카드 영역: `ogn/MYBEN/card-*` (각 카드는 surface.primary + shadow.sm)
- 핵심 CTA: 카드 우측의 `atom/btn type=primary` ("3월 요금에 포인트 적용하기")
- 하단 탭: `ogn/tab-bar`

### PRDD/case1-standalone (상품상세)
- 헤더: `ogn/PRDD/header` (btn-icon 좌우)
- 갤러리: 풀 너비 이미지 + 카운터 sub-label
- 상품 정보: tag 2개 + card-title + 가격 (hero-headline 강조 + price-original 취소선) + btn-inline 쿠폰
- 핵심 CTA: 하단 footer-cta 의 `atom/btn type=primary` ("구독하기")
- 보조 액션: btn-icon × 2 (좋아요·선물)
