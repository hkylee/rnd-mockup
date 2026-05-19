# Spec Analysis Report — 템플릿

> 사용자가 기능내역서를 첨부했을 때 Claude 가 작성하는 표준 분석 보고서.
> AUDIT_RULES.md 와 DESIGN_PRINCIPLES.md 를 기준으로 컴포넌트를 분류하고, 작업 순서를 제시한다.
>
> ⭐ **AI 가 화면 그릴 때 § 1.5.1 우선 참조** (시각 순서 row 표 — kind 8 종 + 카탈로그 매핑 + UXL 룰 + 액션 한 표 응축).
> § 1.5.1 만으로 figma component 자동 생성 가능. 다른 § 은 운영 spec 보강 (DS 토큰 / 상태 / 마킹 / Cascade).

---

## 사용 시점

- 사용자가 기능내역서 / 시안을 첨부함
- Claude 가 카탈로그와 대조 + 위계 결정 후 본 양식으로 보고
- 사용자가 표 보고 결정 → 스펙 작성 시작

---

## 보고 템플릿

```markdown
# {화면 이름} 스펙 분석

## 0. 입력 요약
- **모듈**: {MYBEN | PRDD | BEN | MBR | ...}
- **화면 후보 이름**: page/{MODULE}/{screen-kebab-name}
- **기능 개수**: {N}
- **언급된 컴포넌트 (raw)**: {목록}
- **Use Case / 동선 출처**: {US-XXX-NNN — `mockup/specs-flow/<MODULE>-<usecase>.md`}  ⭐ USER_FLOW 있을 때만
- **사용자 task** (한 줄): {SPEC_INPUT 의 컨텍스트에서 인용}
- **UX 단계** ([governance/INDEX.md](../../governance/INDEX.md) 7단계 기준): 주 {1~7} {단계명} / 부가 {1~7 또는 없음}
  - **핵심 원칙**: {해당 단계 bullet 중 이 화면에 강하게 적용되는 1~3개}
  - **체크포인트**: {해당 단계 spec 작성 체크포인트 중 핵심 2~4개}
  - **적용 UXL pattern_id** (선택): {`UXL_ETR_1`, `UXL_TCP_2` 등 — `governance/UXL_*.html` 안 패턴 ID 인용. 적용 row 별 § 1.5 표에서 다시 인용}

---

## 0.5 법적·안내 요소 체크 ⭐ (2026-04-30 신설)

정책서에서 **법적 의무 또는 사용자 안내** 가 필요한 텍스트/문구를 빠뜨리지 않기 위한 단계. 화면을 그리기 전에 정책서 검색으로 도출.

### 0.5.1 키워드 자동 검색 체크리스트

정책서 전문에서 다음 키워드 등장 위치를 모두 기록:

- [ ] **동의 / 약관 / 고지** — 동의 화면 위계 (필수/선택/전체)
- [ ] **필수 / 선택** — 동의 항목 분기
- [ ] **안내 / 주의 / 유의 / 경고** — 배너·모달·인라인 텍스트
- [ ] **불가 / 불가역 / 복구 / 되돌릴 수** — 경고 톤 (강 leveled)
- [ ] **휴면 / 탈퇴 / 제한 / 차단** — 상태별 후속 안내
- [ ] **본인인증 / 통신사 / 정보 수집 / 보유 기간** — 개인정보 고지
- [ ] **문의 / 고객센터 / 1:1 / 연락처** — 항상 노출 위치
- [ ] **유예 / 철회 / 기한 / 만료일** — 기간 제한 안내

### 0.5.2 도출 표 (필수 작성)

| # | 정책서 출처 | 키워드 | 표시 화면 | 컴포넌트 | 마킹 | 문구 예시 |
|---|---|---|---|---|---|---|
| 1 | PG-MBR-TERM-001 | "필수 약관" | JOIN-01 | `mol/list-item-terms` 의 `requiredLabel` | 🔴 필수 | "필수" / "선택" 배지 |
| 2 | (정책서 § / 항목) | (검색된 키워드) | (page/MODULE/screen) | (제안 ogn/mol) | 🔴/🟡 | (구체 텍스트) |

### 0.5.3 마킹 표준

| 표시 | 정의 | 근거 / 예시 |
|---|---|---|
| **🔴 필수** | 법적 의무 (전기통신사업법, 개인정보보호법) **또는** 정책서에 "안내", "고지" 형태로 명시 | 약관 필수/선택 배지, 탈퇴 경고, 본인인증 정보 수집 고지, 고객센터 연락처 |
| **🟡 사용성 강화** | 정책서엔 추상적 ("여부", "이동 경로") 만 적혀있고 구체 문구는 사용자 경험 보완 | 휴면 해제 재동의 범위 인포 배너, 완료 후 후속 액션 카테고리 안내 |

→ 🔴 누락 시 **컴플라이언스 위반** (자동 reject) / 🟡 누락 시 **리뷰 권장** (UX 검토)

### 0.5.4 페이지·컴포넌트 매핑 룰

각 spec JSON 의 `_comment` 필드로 정책 ID 추적 가능하게:

```jsonc
{
  "kind": "text",
  "id": "required-badge",
  "content": "필수",
  "_comment": "[고지·필수] PG-MBR-TERM-001 약관 동의 적용 정책 — 전기통신사업법 § 22-2 의무 표시"
}
```

→ AUDIT_RULES 의 자동 검사 (필수 고지 누락) 가 `_comment` 값으로 추적.

---

## 0.6 도메인 copy 도출 ⭐ (2026-04-30 신설)

page = 실제 사용자 화면. **모든 텍스트가 도메인 copy** 여야 함. atom/mol baseline 의 generic placeholder ("후속 액션 1", "내용을 입력해 주세요", "약관 제목" 등) 가 화면에 그대로 노출되면 brand 신뢰도 저하.

### 0.6.1 layer 별 텍스트 책임

| Layer | 텍스트 성격 | 예시 |
|---|---|---|
| **atom** | generic baseline OK (재사용) | placeholder "내용을 입력해 주세요" |
| **mol** | generic baseline OK (재사용) | "약관 제목" / "후속 액션 1" |
| **ogn** | 모듈별 도메인 sample | "회원정보 확인" / "마케팅 동의 변경" |
| **page** | **use case 별 실제 도메인 copy** — 사용자에게 직접 노출됨 | "다시 돌아오신 것을 환영합니다" / "휴면이 해제되었습니다" |

### 0.6.2 도메인 copy 도출 표 (필수 작성)

POLICY_REPORT § 1.7 (UC + 설계 원칙 → 도메인 copy 도출) 의 결과를 page spec 에 ref props 로 주입. 사용처 별로:

| page | ogn ref | 변경되어야 할 props (도메인 텍스트) | 출처 |
|---|---|---|---|
| dormant-complete | post-actions | card-1.headline = "회원정보 확인" / card-1.description = "복원된 등급·포인트를 확인해 보세요" | POLICY § 1.7 (휴면 해제 use case) |
| signup-complete | post-actions | card-1.headline = "환영 혜택 받기" / ... | POLICY § 1.7 (가입 use case) |
| login | login-form | row-id.placeholder = "아이디를 입력해 주세요" / row-password.placeholder = "비밀번호를 입력해 주세요" | 입력 필드 도메인 |
| ... | ... | ... | ... |

### 0.6.3 generic placeholder 패턴 — audit 자동 검출 (Rule 13)

다음 텍스트가 page spec 또는 그 ref 로 구성된 화면에 잔존하면 audit warning:

- `^(후속 액션|항목|예시|sample) [0-9]+$` — placeholder 카운터
- `^내용을 입력해 주세요$` — atom default placeholder
- `^라벨$` / `^약관 제목$` / `^타이틀$` — generic placeholder
- `^완료 후 추천 액션 안내\.?$` — generic description

**자동 회피**: page spec 에서 ogn ref 시 props 로 도메인 텍스트 명시.

### 0.6.4 ogn baseline 의 sample 도메인화

ogn 자체의 baseline 도 generic 보다 **가장 일반적 use case 의 도메인 sample** 박는 게 권장:
- `ogn/MBR/post-actions` baseline → 휴면 해제 후속 액션 (가장 일반적)
- `ogn/MBR/login-form` baseline → "아이디를 입력해 주세요" placeholder

다른 use case 는 page 시점 props override.

---

## 1. 카탈로그 대조 (3 분기)

### ✅ 재사용 (reused) — {n}개

| 입력 표기 | 카탈로그 매칭 | 사용 위치 (예상) |
|---|---|---|
| `atom/btn` | `atom/btn` (variant: type=primary) | 메인 CTA |
| ... | ... | ... |

### 🔄 리네임 (rename) — {n}개

| 입력 표기 | 표준 이름 | 사유 |
|---|---|---|
| `mlc/list` | `mol/list` | mlc → mol (legacy) |
| `atom/iconButton` | `atom/btn-icon` | kebab-case 통일 |
| ... | ... | ... |

### 🆕 신규 필요 (new) — {n}개

| 컴포넌트 후보 | category | 위계 근거 (DESIGN_PRINCIPLES) |
|---|---|---|
| `atom/{name}` | atom | "여러 atom 결합 X / 단일 단위" |
| `mol/{name}` | mol | "atom N개 결합 + 반복 사용 예상" |
| `ogn/{MODULE}/{name}` | ogn | "화면 단위 블록, 모듈 종속" |
| ... | ... | ... |

### ⚠️ 의문 사항 (placeholder — 의문 시점 기록)

- (입력에 모호한 부분이 있으면 여기에)
- 예: "PRDD-02 에 atom/text-area 가 적힌 게 입력 컴포넌트인지 단순 텍스트 영역인지 불분명"

---

## 1.5 시각 위계 매트릭스 ⭐ (2026-05-01 신설)

SPEC_INPUT 의 "정보 위계 (1·2·3·...)" 가 시각 토큰으로 어떻게 매핑되는지 명시. 위계만 적힘 → 시각 톤 결정 누락 빈번.

| 위계 | 영역 | typography 토큰 | color 토큰 | weight/특이점 |
|---|---|---|---|---|
| 1 (가장 강) | 헤드라인 / 화면 인지 | `{semantic.typography.heading-2}` | `{semantic.color.text.primary}` | bold |
| 2 | 핵심 task 영역 (반복 row) | `{semantic.typography.body-medium}` | `{semantic.color.text.primary}` | medium / 좌측 정렬 |
| 3 | 보조 텍스트 / sub label | `{semantic.typography.sub-label}` | `{semantic.color.text.secondary}` | regular |
| 4 (가장 약) | 메타 / placeholder | `{semantic.typography.sub-label}` | `{semantic.color.text.muted}` | regular |
| 강조 (cross-cutting) | brand color 강조 (link / required 배지) | (위계 그대로) | `{semantic.color.text.brand}` 또는 `feedback.error` | semibold 가능 |

→ 산출물: 위계 1~4 가 spec 의 어느 컴포넌트의 어느 children 에 매핑되는지 표 따로 (예: "위계 1 = mol/section-header.headline / 위계 2 = mol/checkbox-item.label / ...").

### 1.5.1 시각 순서 row 표 ⭐ (AI 화면 그리기 single source)

**AI 가 화면을 그릴 때 본 § 만으로 충분.** 위→아래 row 순서 + kind + 내용 + 톤·마킹 + 분기 + 액션 + 카탈로그 매핑 + UXL 룰 한 표 응축. 다른 § (1.6 상태 / 1.7 설계 결정 / 2 DS / 3 Cascade) 은 운영 spec 보강.

**kind 분류 8 종**:

| kind | 의미 | 예시 |
|---|---|---|
| `section` | 영역 wrapper | "section 1 / 본인인증" |
| `chrome` | 화면 외피 (header / step indicator / footer) | "chrome / step / 1·6" |
| `text` | 일반 텍스트 (headline / label / 안내) | "탈퇴 사유를 알려주세요" |
| `button` | CTA (primary / secondary / inline) | "인증 요청" |
| `icon` | atom/icon/* | `atom/icon/lock-closed` |
| `enum` | 선택지 (radio / checkbox row) | "서비스를 잘 이용하지 않아요" |
| `case` | 분기 / 예외 (정상 외 시각) | "5회 실패 시 차단 popup" |
| `asset` | 일러스트 / 외부 이미지 | `assets/MBR/leave-hero.png` |

**표 양식**:

| 위치 (path) | kind | 내용 / 값 | 톤·마킹 | 분기 (case) | 액션 (사용자 인터랙션) | 이동 (다음 화면) | 🤖 카탈로그 매핑 | 🎯 UXL 룰 |
|---|---|---|---|---|---|---|---|---|
| section1 / auth-verify / banner | text | "휴대폰 또는 PASS 인증해 주세요" | brand / 🟡 사용성 | — | — | — | mol/notice-card type=plain (재사용) | UXL_ETR_1 — 상태 기반 선제 안내 |
| section1 / term-row | enum | 약관 row | — | — | tap row → BottomSheet open / long-tap → 컨텍스트 | (BottomSheet) | mol/list-item-terms (신규) | — |
| chrome / footer / cta | button | "인증 요청" | primary | 정상 | tap | section 2 | ogn/sticky-footer-cta (재사용) | — |
| section1 / 인증 실패 시 | case | "5회 실패 시 24h 차단" | error | 실패 5회+ | (자동 trigger) | AlertPopup AP-MBR-001 | 신규 popup spec 검토 | UXL_ETR_3 — 구조적 명확성 |

**액션 (사용자 인터랙션) 컬럼 표기 enum**:
- 사용자 액션: `tap` / `long-tap` / `swipe-left|right|up|down` / `pull-to-refresh` / `scroll` / `pinch` / `drag` / `focus` / `input` / `submit` / `paste` / `voice` / `share`
- 시스템 액션: `permission-request` / `auto-trigger` (timer/timeout) / `deep-link` / `notification-tap` / `background-resume`
- 형식: `tap → 결과` 또는 `long-tap → 컨텍스트` 같이 trigger → 결과
- 복수 액션은 ` / ` 로 구분

> 🤖 카탈로그 매핑 / UXL 룰 컬럼은 AI 자동 채움. AI 가 화면 그릴 때 본 표 한 행 = 한 figma node 매핑.

---

## 1.6 상태 매트릭스 ⭐ (2026-05-01 신설)

화면별 컴포넌트의 **운영 상태 (default / loading / empty / error / partial / branch)** 시각 spec. SPEC_INPUT § 컨텍스트 > 상태 시나리오를 컴포넌트 시각으로 변환.

| 컴포넌트 | default | loading | empty | error | partial / branch |
|---|---|---|---|---|---|
| mol/checkbox-item × N | render | skeleton row × 3 | "약관 없음" 1줄 + 자동 진행 | snack-bar 재시도 | 미동의 row border 강조 |
| ogn/sticky-footer | [다음] disabled | [다음] disabled (skeleton) | [다음] enabled | [재시도] 노출 | [다음] disabled (필수 1개 미동의 시) |
| (그 외 컴포넌트) | ... | ... | ... | ... | ... |

→ 산출물: 각 상태별 시각 차이를 spec 시점에서 결정 → spec JSON 의 `_state_*` 또는 별도 variant 로 반영.

---

## 1.7 설계 결정 — 대안 + 기각 사유 ⭐ (2026-05-01 신설)

같은 사용자 task 를 처리하는 **여러 design 옵션** 중 왜 이걸 골랐는지 트레이서빌리티. 신규 컴포넌트 / variant 결정 시.

| 결정 항목 | 채택 | 대안 | 기각 사유 |
|---|---|---|---|
| 약관 row 시각 | mol/checkbox-item (variant tone=required/optional) | (a) 별도 mol/list-item-terms / (b) atom/checkbox + atom/tag 인라인 | (a) 도메인 종속 mol 누적 / (b) 위계 일관 어려움 |
| 전체 동의 | mol/all-agree-row (별도 mol) | mol/checkbox-item 의 variant=all | variants 폭증 + 시각 강도 차이 큼 |
| step indicator | inline text "1/4" (mol/page-header.trailing) | mol/step-indicator 신규 | 사용처 1곳만이라 over |
| ... | ... | ... | ... |

→ 산출물: 미래 같은 케이스 만났을 때 결정 근거 참조. spec 의 `_comment` 필드에 이 표 row 인용 가능 (예: `"_comment": "[설계결정] 약관 row → checkbox-item tone variant — 도메인 mol 누적 회피"`).

---

## 1.8 Figma Component Property 매핑 ⭐ (자동 생성 — 2026-05-01)

각 spec 의 `exposeAs` / `variants.axes` 가 figma instance 의 어떤 component property 로 노출되는지. **수동 작성 X — `scripter/generate-connect.js` 로 자동 생성됨.**

```bash
node scripter/generate-connect.js <spec-name>     # 단일
node scripter/generate-connect.js --all           # 전체 (118+ spec 일괄)
```

→ 산출물: `scripter/connect/<slug>.figma.tsx` (Figma Code Connect 형식)

자동 매핑:
- `variants.axes` → `figma.enum`
- text `exposeAs` → `figma.string`
- ref `exposeAs` → `figma.children` (slot)
- 충돌 (axis ↔ exposeAs 같은 키) → axis 우선

placeholder (spec 에 명시 가능):
- `spec.connect.import` → import path 자동 채움
- `spec.connect.figmaNodeUrl` → figma node URL 자동 채움

본 SPEC_REPORT § 1.8 에서는 **자동 생성 결과의 위치 + 사용자 수동 채움 항목 (import path / figma node URL)** 만 명시:

| spec | 자동 생성 | 사용자 수동 보완 (있다면) |
|---|---|---|
| 예: atom/btn | `scripter/connect/atom-btn.figma.tsx` | import path = `@design-system/btn` |
| 예: mol/checkbox-item | `scripter/connect/mol-checkbox-item.figma.tsx` | import path = `@design-system/checkbox-item` |
| ... | ... | ... |

---

## 2. DS 토큰 점검

### 재사용 가능
- `component.{name}.*` 으로 커버됨 → 신규 토큰 X

### 신규 필요 (제안)
| 토큰 | layer | 값 후보 | 사유 |
|---|---|---|---|
| `foundation.dimension.size.{...}` | foundation | {value} | {위치/용도} |
| `component.{name}.{prop}` | component | `{semantic.color....}` | {신규 컴포넌트 위계} |

### 결정 필요 (사용자)
- 위 신규 토큰 이름 / 값 OK?
- 또는 기존 토큰 재활용 가능 여부?

---

## 3. Cascade 빌드 순서

신규 spec 작성 + Figma 빌드 cascade. atom → mol → ogn → page.

```
1. atom 신규 ({n}개)
   1.1 atom/{name1}
   1.2 atom/{name2}
   ...

2. mol 신규 ({n}개)
   2.1 mol/{name1} (의존: atom/...)
   ...

3. ogn 신규 ({n}개)
   3.1 ogn/{MODULE}/{name1}
   ...

4. page
   4.1 page/{MODULE}/{screen-name}
```

### Run 전략
- **2 Run (--all)**: 작업 후 한 번에 적용 ⭐ 기본
- **5 Run (--group)**: 각 카테고리별 검증 원할 때

---

## 4. 의사결정 체크리스트 (사용자 확인)

- [ ] 재사용 매핑 정확? ({n}개)
- [ ] 리네임 제안 OK?  ({n}개)
- [ ] 신규 컴포넌트 분류 (atom/mol/ogn) 적절?
- [ ] DS 신규 토큰 이름/값 합의
- [ ] 의문 사항 해결

→ 모두 OK 면 spec 작성 시작.
```

---

## 사용 예시 (PRDD 케이스 회고)

```markdown
# 상품상세_case1_단독상품 스펙 분석

## 0. 입력 요약
- 모듈: PRDD
- 화면 이름: page/PRDD/case1-standalone
- 기능 개수: 16 (SPEC-PRDD-01~16)
- 언급된 컴포넌트: ogn/snack-bar, atom/thumnail, atom/iconbutton, ...
- UX 단계: 주 4 결정 / 부가 5 실행
  - 핵심 원칙: 데이터 기반 최적안 도출, 근거 기반 비교 단축, 입력 간소화
  - 체크포인트: 추천 항목에 근거 라벨, 1순위 추천 시각 강조, sticky-footer CTA 1개

## 1. 카탈로그 대조

### 재사용 — 3개
| `atom/button(primary)` | atom/btn (variant: type=primary) | 쿠폰 받기 |
| `atom/button(secondary/ghost)` | atom/btn (variant: type=secondary) | 보조 CTA |
| `atom/thumnail` | atom/thumb | 갤러리·추천상품 |

### 리네임 — 3개
| `mlc/card` | mol/card | mlc → mol |
| `mlc/list` | mol/list (스킵) | mlc → mol; 단 list 는 organism 직접 조립 |
| `ogn/sticky footer` | ogn/sticky-footer | 공백 → 하이픈 |

### 신규 — 11개
| atom/tag | atom | 단일 라벨 (badge 토큰 재활용) |
| atom/tooltip | atom | 단일 버블 (component.tooltip 재활용) |
| atom/accordion | atom | placeholder 단일 |
... (생략)
```

---

## 보고 후 작업 흐름

1. 사용자 보고 → 표 검토 → 결정 (OK / 수정 요청)
2. 합의 완료 → DS 토큰 추가 (신규 있으면) → sync Run
3. spec 작성 (cascade 순)
4. 카탈로그 자동 검증 (`node scripter/audit.js`)
5. 통과 → bundle --all → Run 2회로 Figma 반영
6. commit + push

---

## 참고

- **UX 단계 분류**: `governance/INDEX.md` (7단계 + 식별 신호 + 체크포인트)
- 진단 규칙: `mockup/mockup-docs/AUDIT_RULES.md`
- 위계 결정: `mockup/mockup-docs/DESIGN_PRINCIPLES.md`
- 빌드 도구: `mockup/scripter/bundle.js`
- 자동 검증: `mockup/scripter/audit.js` (Phase 1 구현)
