# Policy Report — 정책서 분석 보고 양식

> 정책서 (POL-\* / 비즈니스 룰 + Use Case + Process + Function 정의 문서) 가 입력일 때 작성하는 보고서.
> 기능내역서가 입력일 때 쓰는 `SPEC_REPORT_TEMPLATE.md` 와 형제 문서.

> 📍 **정책서 요소 → SB 매핑 표**: `mockup/sb-doc/policy-to-sb-mapping.md` 참조.
> Actor / UseCase / State / Process / Function / Policy Group / Policy Item / Term 8 요소가 SB 의 Screen / Section / Organism / Molecule / Atom 으로 어떻게 떨어지는지 + 노출 조건 / 서버 제어 / props 바인딩 매핑 표 정리됨. 본 보고서 § 1.5 (POL → 화면 룰 매핑) 작성 시 참고.

---

## 사용 시점

- 사용자가 정책서 첨부 (HTML / PDF / Notion DB 등)
- 정책서엔 화면 / 컴포넌트 명시가 없음 → **추론 단계가 명시적으로 보고서에 노출됨**
- Claude 가 화면 후보 + UI 구성 + POL→화면 룰을 추론해서 본 양식으로 보고
- 사용자 검토 후 결정 → 화면별로 `SPEC_REPORT_TEMPLATE` 단위로 분해 진입

---

## 정책서 vs 기능내역서 — 입력 형태 차이

| 항목 | 기능내역서 (`SPEC_REPORT`) | 정책서 (`POLICY_REPORT`) |
|---|---|---|
| 입력 단위 | 화면별 기능 N개 | Use Case + Process step + Function + Policy |
| 컴포넌트 명시 | ✅ 직접 명시 (`atom/btn`, `ogn/snack-bar`) | ❌ 없음 (필드 / 처리 룰만) |
| 화면 명시 | ✅ screen id 직접 | ❌ PR step → 화면 추론 |
| 추론 분량 | 적음 (재사용 후보 매칭만) | 많음 (UI 전체 추론) |
| 정책 룰 | 없음 (디자인 영역 외) | POL-\* 다수 (UI 강제 규칙 도출 필요) |

→ POLICY_REPORT 는 **추론 단계를 명시 노출**, **POL → 화면 룰 매핑** 섹션을 추가로 포함.

---

## 보고 템플릿

````markdown
# {정책서 이름} 정책서 분석

> ⚠️ **추론 표시**: 컴포넌트 / 화면 / UI 동작은 정책서에 직접 명시되지 않음 — AI 추론 결과. 사용자 검토 필수.

## 0. 정책서 메타
- **정책서 ID**: POL-XXX
- **버전**: v{x.y}
- **모듈**: {MODULE-CODE} (기존 카탈로그? 신규 모듈?)
- **Use Case 수**: N (UC-XXX-001 ~ )
- **Process step 수**: N (PR-XXX-XX-XX)
- **Function 수**: N (FN-XXX-* )
- **Policy item 수**: N+ (POL-XXX-*)

---

## 1. Use Case → 화면 후보 도출

### UC-{ID} {use case 이름}

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-XXX-XX | `page/{MOD}/{name}` | 화면 (입력) / 화면 (안내) / BottomSheet / 백엔드 절차 | FN-* + POL-* |
| ... | ... | ... | ... |

(use case 별로 반복)

### ⚠️ 화면 추정 의문사항
- PR-XXX-XX 가 화면인지 자동 절차인지 정책서로는 불분명 → 사용자 확인 필요
- ...

---

## 1.5 동선 도출 (USER_FLOW)  ⭐ 정책서 입력 전용

§ 1 의 화면 후보를 **Use Case 단위 동선** 으로 정리. 자세한 양식은 [`USER_FLOW_TEMPLATE.md`](./USER_FLOW_TEMPLATE.md), 단계 분류는 [`governance/INDEX.md`](../../governance/INDEX.md).

### UC-{ID} 동선

- **진입 트리거**: {어떤 행위 / 상황이 동선을 시작시키는가}
- **진입점 (시작 화면)**: `page/{MOD}/{name}`
- **출구 (성공)**: {도달 화면 또는 외부 redirect}
- **출구 (이탈 / 차단)**: {어디로 가나}
- **UX 단계** (governance/INDEX.md): 주 {1~7} / 부가 {N}

#### 화면 시퀀스

| Step | screen-id | 화면 한글 | 사용자 task (한 줄) | UX 단계 | 다음 (정상) |
|---|---|---|---|---|---|
| 1 | `signup-terms` | 약관 동의 | 필수 약관 동의 | 5 실행 | `signup-info` |
| ... | ... | ... | ... | ... | ... |

#### 분기 케이스

| 조건 | 발생 화면 | 분기 형태 (page / BottomSheet / Toast) | 분기 화면 / 시트 | 처리 후 복귀 |
|---|---|---|---|---|
| 미성년 | `signup-terms` | BottomSheet | 법정대리인 동의 시트 | 본 흐름 step 2 |
| ... | ... | ... | ... | ... |

#### 에지 케이스
- 외부 SDK 오류 / 네트워크 끊김 / 약관 버전 갱신 / 세션 만료 등

(use case 별로 반복)

→ **산출물**: 각 use case 별 `mockup/specs-flow/<MODULE>-<usecase>.md` 1 파일.

---

## 1.6 FN 출력값 → 완료·처리 화면 데이터 매핑  ⭐ 정책서 전용

> 각 FN 의 **출력 정보 + 처리 단계**에서 완료 화면에 표시할 실제 데이터를 도출.
> 이 단계를 건너뛰면 완료 화면이 빈 껍데기(사무적 결과 텍스트)가 됨.

| FN ID | 출력 정보 (정책서 원문) | 완료 화면 | 표시할 데이터 | 비고 |
|---|---|---|---|---|
| FN-XXX-JOIN-last | 회원ID, 가입일시 | `*-complete` | "회원ID: {id} / 가입일: {date}" | 헤더 메타 row |
| FN-XXX-LEAVE-result | 유예종료일, 철회가능여부, 안내문구 | `leave-complete` | "탈퇴 유예 종료: {date} / 7일 이내 철회 가능" | TM 유예 기간 참조 |
| FN-XXX-REJOIN-scope | 연계가능항목, 복원제외항목 | `rejoin-complete` | 복원됨 / 복원 제외 항목 목록 | FN 출력 리스트 그대로 |
| FN-XXX-DORM-result | 복원 범위, 후속 조치 | `dormant-complete` | 복원된 항목 안내 | 분리보관 데이터 범위 |

→ **산출물**: 화면별 `완료 화면 메타데이터` 필드 (SPEC_INPUT_TEMPLATE § 컨텍스트 > 완료 메타에 반영).

---

## 1.7 UC 설명 + 설계 원칙 → 도메인 copy 도출  ⭐ 정책서 전용

> UC 설명 / FN 처리 결과 문구 / 정책서 설계 원칙을 **사용자 대상 언어**로 변환.
> 사무적 처리 결과(예: "가입 처리 완료") ≠ copy — 반드시 변환 필요.

변환 규칙:
- UC 목적(비회원→회원 전환) → "환영" 톤
- UC 복원(휴면해제/재가입) → "다시 만나다" 톤
- UC 종료(탈퇴) → 설계 원칙 "고위험 업무 신중 처리" → 차분하되 철회 가능 안내
- FN 처리 액션 → post-actions 카드 제목 직접 도출

| 화면 | 정책서 근거 | 도출 headline | 도출 description |
|---|---|---|---|
| `*-complete` (가입) | UC: "비회원→회원 전환" + FN-JOIN-005: "정상 회원 이용 가능" | "환영합니다, 회원이 되셨습니다" | "NC의 모든 서비스를 이용하실 수 있습니다." |
| `*-complete` (휴면해제) | UC: "정상 회원 상태로 복원" + TM-027: "데이터 운영 영역 복원" | "다시 돌아오신 것을 환영합니다" | "정상 이용이 재개되었습니다. 이전 정보를 확인해 보세요." |
| `*-complete` (탈퇴) | 설계원칙: 고위험 업무 + TM-029: 7일 유예 + FN-LEAVE-006: 철회가능여부 | "탈퇴가 완료되었습니다" | "7일 이내에는 탈퇴를 철회하실 수 있습니다." |
| `*-complete` (재가입) | UC: "기존 이력 고객 재전환" + TM-032: "계정 복원" + FN-REJOIN-006: "이력 연계 안내" | "다시 만나서 반갑습니다" | "이전 이용 정보 일부가 복원되었습니다." |

→ **산출물**: 완료 화면 4종의 headline / description / post-actions copy 확정 → spec 직접 반영.

---

## 1.8 법적·안내 고지 도출  ⭐ 2026-04-30 신설 (정책서 전용) — 마킹 표준 source-of-truth

> 정책서를 **키워드 검색** 으로 훑어, 법적 의무 또는 안내 필요 텍스트를 화면별로 매핑.
> 이 단계를 건너뛰면 동의·경고·고지 문구가 누락되어 컴플라이언스 위반 (전기통신사업법 § 22-2, 개인정보보호법) 가능.
>
> 📍 **본 § 은 마킹 표준 (🔴 필수 / 🟡 사용성) 의 source-of-truth.** 다른 문서 (`SPEC_REPORT_TEMPLATE § 0.5`, `AUDIT_RULES Rule 12`, `mockup/sb-doc/description-format.md`, `mockup/sb-doc/sb-writing-rules.md`, `governance/INDEX.md § 횡단 의무`) 가 본 § 을 참조.

### 키워드 검색 (필수)

정책서 전문에서 다음 키워드 등장 위치 모두 기록:

- [ ] **동의 / 약관 / 고지** — 동의 화면 위계 (필수/선택/전체)
- [ ] **필수 / 선택** — 동의 항목 분기
- [ ] **안내 / 주의 / 유의 / 경고** — 배너·모달·인라인 텍스트
- [ ] **불가 / 불가역 / 복구 / 되돌릴 수** — 경고 톤 (강 leveled)
- [ ] **휴면 / 탈퇴 / 제한 / 차단** — 상태별 후속 안내
- [ ] **본인인증 / 통신사 / 정보 수집 / 보유 기간** — 개인정보 고지
- [ ] **문의 / 고객센터 / 1:1 / 연락처** — 항상 노출 위치
- [ ] **유예 / 철회 / 기한 / 만료일** — 기간 제한 안내

### 도출 표 (필수 작성)

| # | 정책 ID / 출처 | 키워드 | 표시 화면 | 권장 컴포넌트 / 위치 | 마킹 | 문구 예시 |
|---|---|---|---|---|---|---|
| 1 | PG-MBR-TERM-001 | 필수/선택 약관 | JOIN-01 | `mol/list-item-terms` 의 배지 | 🔴 필수 | "필수" / "선택" |
| 2 | (정책서 § / 항목) | (검색된 키워드) | (page/MODULE/screen) | (제안 ogn/mol) | 🔴/🟡 | (구체 텍스트) |

### 마킹 표준

| 표시 | 정의 | 누락 시 |
|---|---|---|
| **🔴 필수** | 법적 의무 (전기통신사업법, 개인정보보호법) **또는** 정책서에 "안내", "고지" 형태로 명시 | audit FAIL → 자동 reject |
| **🟡 사용성** | 정책서엔 추상적 ("여부", "이동 경로") 만 적혀있고 구체 문구는 사용자 경험 보완 | audit WARNING → 리뷰 권장 |

→ **산출물**: 화면별 고지 문구 표 → 각 spec JSON 의 텍스트 컴포넌트 `_comment` 필드로 정책 ID 추적 (예: `"_comment": "[고지·필수] PG-MBR-TERM-001 — 전기통신사업법 § 22-2"`).

### 고지 대상 프로세스 (검사 필수)

| 프로세스 카테고리 | 표시 의무 | 마킹 |
|---|---|---|
| **동의** (약관, 마케팅, 개인정보 수집) | 필수/선택 배지 + 전체동의 적용 범위 명시 | 🔴 필수 |
| **고위험 행위** (탈퇴, 강제 제한) | "되돌릴 수 없음", "복구 불가능" 명시 | 🔴 필수 |
| **상태 제한** (휴면 해제 불가, 가입 제한) | 사유 + 해제일/예상일 + 문의처 | 🔴 필수 |
| **본인인증** (휴대폰, PASS, 공동인증서) | 수단별 정보 수집 범위 inline 고지 | 🔴 필수 |
| **유예 기간** (탈퇴 7일, 인증 시간) | 기한 + 만료 후 결과 명시 | 🔴 필수 |
| **법적 의무 표시** | 고객센터 / 1:1 문의 / 회사 정보 항상 노출 | 🔴 필수 |
| **후속 안내** (완료 후 변경 경로) | 카테고리별 액션 가이드 | 🟡 사용성 |

### 표시 위계 (톤 표준)

| 중요도 | 톤 | 컴포넌트 패턴 | 예시 문구 |
|---|---|---|---|
| **강** (경고) | red / orange | `banner(tone=error)` + `text(weight=bold)` | "탈퇴 후 모든 데이터가 삭제되며 복구 불가능합니다" |
| **중** (안내) | blue / gray | `banner(tone=info)` + `icon(name=info)` | "휴면 중 개정된 약관을 재동의해주세요" |
| **약** (참고) | gray | `text(tone=secondary)` + `(?)` icon | "본인인증 정보는 변경 불가능합니다" |

### spec 단계 체크포인트

모든 화면 spec 작성 시 (특히 MBR / 결제 / 동의 흐름):

- [ ] 동의 화면 — `필수` / `선택` 배지 + 전체동의 적용 범위 (필수만? 필수+선택?)
- [ ] 제한·에러 — 사유 + 해제 기한/조건 + 문의처
- [ ] 탈퇴·삭제 — 영향 범위 (삭제 항목·자산·미납) + 경고 톤 텍스트
- [ ] 본인인증 수단 선택 — 각 수단별 수집 정보 inline
- [ ] 마케팅 동의 — 필수 약관과 시각 구분 (색·배경·섹션 분리)
- [ ] 완료 화면 — 후속 액션 카테고리 가이드 (설정 / 마케팅 / 문의)
- [ ] 모든 에러·완료·제한 화면 — 고객센터 / 1:1 문의 footer

→ AUDIT_RULES Rule 12 (필수 고지 누락 검사) 가 spec JSON 의 `_comment` 으로 추적.

---

## 1.9 시각 톤 매니페스트 ⭐ 2026-05-01 신설 (정책서 전용)

> UC 별로 화면이 어떤 **감정 톤**을 띠어야 하는지 명시. 정책서의 "사용자 상황·UC 의도·설계 원칙" 에서 도출. § 1.7 (도메인 copy) 와 짝꿍 — copy 의 어휘 + 시각 톤이 함께 결정되어야 일관.

### 톤 카테고리

| 톤 | UC 케이스 | 시각 표현 | copy 톤 |
|---|---|---|---|
| **친절·간결** | 가입 / 본인인증 / 정보 입력 | 충분한 white space, 단순 layout, 진행 단계 명시 | 짧은 명령형 ("입력해 주세요") |
| **환영·축하** | 가입 완료 / 휴면 해제 완료 / 재가입 완료 | brand color 강조, 중앙 정렬 headline, 후속 액션 가이드 | 환영 ("환영합니다", "다시 만나서 반갑습니다") |
| **차분·신중** | 탈퇴 안내 / 탈퇴 영향 / 정보 변경 | 회색 톤, 정보 stack, 강 톤 banner 외 강조 자제 | 사실 전달 ("처리됩니다", "복구할 수 없습니다") |
| **경고·강** | 탈퇴 유예 종료 임박 / 결제 실패 / 잔액 부족 | feedback.error 또는 warning 톤, banner 강조, 카운트다운 | 명확한 결과 ("복구 불가", "기한 종료") |
| **안내·보조** | 동의 화면 / 약관 / 고지 | 회색 외피 + 본문 secondary, 작은 prefix 배지 | 정중한 안내 ("동의해 주세요", "확인해 주세요") |
| **위급·차단** | 가입 제한 / 차단 / 정지 안내 | 빨강 톤 또는 차단 아이콘, 사유·해제일·문의처 명시 | 사유 + 해결 경로 ("연락 주세요", "고객센터 문의") |

### UC → 톤 매핑 (필수 작성)

| UC ID | UC 이름 | 주 톤 | 부가 톤 | 시각 키 컴포넌트 |
|---|---|---|---|---|
| US-MBR-CS-001 | 회원 가입 | 친절·간결 | 환영·축하 (마지막 화면) | mol/page-header (step), mol/section-header, mol/post-action-card |
| US-MBR-CS-002 | 휴면 해제 | 차분 → 환영·축하 | 안내 (재동의) | mol/notice-card (안내), mol/post-action-card (완료) |
| US-MBR-CS-003 | 회원 탈퇴 | 차분·신중 → 경고·강 | 차분 (완료) | mol/notice-card (emphasis), mol/notice-block, atom/banner (warning) |
| US-MBR-CS-004 | 재가입 | 친절 → 환영 | 안내 (이력 복원) | mol/post-action-card |
| ... | ... | ... | ... | ... |

### 톤 → spec 시각 토큰 매핑

| 톤 | 권장 background | 권장 text color | 권장 typography | 권장 패턴 컴포넌트 |
|---|---|---|---|---|
| 친절·간결 | `surface.primary` (흰) | `text.primary` | `body-medium` + `heading-2` | mol/section-header, atom/btn primary |
| 환영·축하 | `surface.primary` | `text.primary` + `text.brand` (강조) | `heading-2` (큰), `body` | mol/post-action-card + brand color |
| 차분·신중 | `surface.secondary` (연 회색) | `text.secondary` | `body` (regular) | mol/notice-card (message), mol/notice-block |
| 경고·강 | `feedback.warning-bg` 또는 `feedback.error-bg` | `feedback.warning` 또는 `feedback.error` | `body-medium` + `card-title` | atom/banner (warning), mol/timer-banner (있다면) |
| 안내·보조 | `surface.secondary` | `text.secondary` | `body-medium` | mol/notice-card (message), mol/checkbox-item |
| 위급·차단 | `feedback.error-bg` | `feedback.error` | `body-bold` | ogn/dialog (notice-bottomsheet 의 details 강조) |

→ **산출물**: 각 화면 spec 작성 시 헤드라인 / banner / sticky-footer 의 톤 결정 근거 = § 1.9 표. SPEC_REPORT § 1.5 (시각 위계 매트릭스) 와 연결.

---

## 2. 화면별 컴포넌트 추론

### page/{MOD}/{screen-name} — {화면 한 줄 설명}

**정책서 명시 정보** (추론 input):
- 호출 함수: `FN-XXX-*` — 입력값 / 출력값 / 처리(상태-액션-결과)
- 관련 정책: `POL-XXX-*` — 강제 룰

**추론한 화면 구성** (추론 output):

> **chrome 행 (status-bar / header / footer / tab-bar) 은 정책서 명시 여부와 무관하게 자동 채움** — 화면 역할 식별 후 [DESIGN_PRINCIPLES § 9.2](DESIGN_PRINCIPLES.md) default 적용. 추론 근거에 "default chrome (DP § 9.2 / 화면 역할: {역할명})" 표기.

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome (DP § 9.2) |
| header | `ogn/header` | ✅ 재사용 / 🆕 신규 | default chrome (DP § 9.2 / 화면 역할: 컨텐츠 상세) — back + 타이틀 |
| {본문 영역} | {추론한 컴포넌트} | ✅ / 🔄 / 🆕 | FN의 입력값 N개 → atom/text-input N개 |
| {CTA 영역} | `ogn/sticky-footer-cta` | ✅ 재사용 | default footer (DP § 3.5 / pattern: single) — "다음" 버튼 |
| {모달/시트} | `ogn/{MOD}/bottomsheet-*` | 🆕 신규 | POL-* (전문 표시 룰) |

(화면별 반복)

---

## 3. 카탈로그 대조 (정책서 전체 합산)

### ✅ 재사용 — N개

| 추론된 컴포넌트 | 카탈로그 매칭 | 사용 화면 |
|---|---|---|
| `ogn/status-bar` | `ogn/status-bar` | 모든 화면 |

### 🔄 리네임 — N개

| 추론 표기 | 표준 이름 | 사유 |
|---|---|---|

### 🆕 신규 — N개

| 컴포넌트 후보 | category | 위계 근거 (DESIGN_PRINCIPLES) | 추론 근거 (정책서) |
|---|---|---|---|
| `atom/checkbox` | atom | 단일 단위 / 다수 화면 재사용 | 약관 동의·마케팅·법정대리인 |

### ⚠️ 추론 검증 필요
- 정책서로 결정 못 한 항목 (예: BottomSheet vs Page 형태, 화면 분할 단위 등)

---

## 4. DS 토큰 점검

(SPEC_REPORT § 2 와 동일 — 신규 토큰 후보 / 재사용 가능 / 결정 필요 사항)

---

## 5. POL → 화면 룰 매핑 ⭐ 정책서 전용

> 정책 항목이 **어느 화면**에서 **어떤 UI 동작**으로 강제되는지 트레이서빌리티 표.
> 정책서 정합성 검증의 핵심 산출물.

| POL ID | 정책 내용 (요약) | 적용 화면 | 강제 룰 (UI 동작) |
|---|---|---|---|
| POL-XXX-NN-NN | "필수 X 미동의 시 진행 불가" | `page/.../signup-terms` | "다음" 버튼 disabled |
| POL-XXX-NN-NN | "약관 전문 + 요약 + 개정이력 동시 노출" | `page/.../signup-terms` BottomSheet | 탭 3개 (전문/요약/개정) |

### 매핑 누락 검증
- 정책서의 모든 POL-* 가 1개 이상 화면에 매핑됐는가?
- UI로 강제 불가능한 정책 (백엔드 룰) 은 별도 표기

---

## 6. Cascade 빌드 순서

(SPEC_REPORT § 3 와 동일 — atom → mol → ogn → page)

---

## 7. 의사결정 체크리스트

- [ ] Use Case → 화면 후보 매핑 OK?
- [ ] 백엔드 절차로 분류한 PR step OK?
- [ ] 추론한 컴포넌트 분류 (atom / mol / ogn) 적절?
- [ ] BottomSheet vs Page 추정 OK?
- [ ] 신규 컴포넌트 N개 카탈로그 추가 OK?
- [ ] POL → 화면 룰 매핑 누락 없음?
- [ ] 추론 검증 필요 항목 해결?

→ 모두 OK 면 화면별로 SPEC_REPORT 단위로 분해 → spec 작성 진입.

````

---

## 보고 후 작업 흐름

1. 정책서 첨부 → POLICY_REPORT 작성 (이 양식)
2. 사용자 검토 → 화면 / 컴포넌트 / 룰 매핑 결정
3. 화면별로 SPEC_REPORT 단위 분해 (필요 시)
4. 이후 기존 흐름 (DS 토큰 추가 → spec 작성 → cascade → Figma 빌드)

---

## 참고

- **UX 단계 분류**: `governance/INDEX.md` (정책서에서 도출된 화면도 7단계 중 어디에 속하는지 분류 — 도출된 features 의 의도 정합성 점검에 사용)
- 형제 문서 (기능내역서 입력): `SPEC_REPORT_TEMPLATE.md`
- 형제 문서 (입력 양식): `SPEC_INPUT_TEMPLATE.md`
- 진단 규칙: `AUDIT_RULES.md`
- 위계 결정: `DESIGN_PRINCIPLES.md`
- web 흐름: `/spec-analysis` 메뉴 (정책서 모드 분기 — `/api/derive-features` 가 정책서 → 기능내역서 변환 담당)
