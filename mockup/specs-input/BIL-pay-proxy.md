# BIL-pay-proxy.md — 대리납부 (proxy-pay-check / proxy-pay-confirm / third-party-consent)

---

## 화면 1: 대리납부 권한 확인

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): proxy-pay-check
- **화면 한글명**: 대리납부 권한 확인
- **출처**: page/BIL/proxy-pay-check
- **User Flow 내 위치**: PAY-004 step 1

# 컨텍스트

- **UX 단계**: 4 (결정)
- **사용자 상황**: 타인(가족·법정대리인·위임인)의 통신요금을 대신 납부하기 위해 권한을 확인하는 상황
- **사용자 task**: 대리납부 권한(가족·법정대리·위임)을 확인하고 납부 대상을 선택한다
- **가능 케이스**:
  - 가족 관계: 가족 관계 확인 후 대리납부 가능
  - 법정대리인: 법정대리인 증빙 확인 후 대리납부 가능
  - 위임: 위임 확인 후 대리납부 가능
  - 권한 없음: 권한 없음 안내 + 관계 등록 안내(POL-BIL-AGT-001)
- **정보 위계**:
  1. 대리납부 가능 관계 유형 안내
  2. 권한 확인 결과
  3. 납부 대상 선택
- **톤**: 안내·공식 (권한 확인 절차 명확히)

# 기능 목록

## 기능 1: 대리납부 권한 안내 및 확인
- **설명**: 대리납부 가능한 관계 유형(가족·법정대리·위임)과 권한 확인 방법을 안내하고, 현재 사용자의 권한 상태를 표시한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `mol/list-item-link`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-proxy-auth-check
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 대리납부 권한 안내 카드 — 관계 유형·절차 설명
    서버 제어: (없음)
  - `mol/list-item-link`: 권한 유형별 확인 항목 (가족·법정대리·위임)
    서버 제어: `auth_types: [{type, label, is_available}]`
  - `atom/banner(tone=warning)`: 권한 없음 경고 배너 (해당 시)
    서버 제어: `has_proxy_auth: false`
- **SB description**:
  ```
  [영역명] 대리납부 권한 안내 및 확인
  [규칙:FN-PAY-006] 대리납부 권한 유형을 표시하고 현재 사용자의 권한 상태를 확인한다
  [고지:필수|POL-BIL-AGT-001] 가족·법정대리·위임 3가지 권한 유형과 각 조건을 안내한다
  [조건:권한없음] atom/banner(tone=warning) 노출 — 관계 등록 안내 링크 포함
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 권한유형] 해당 권한 유형 상세 안내 및 확인 절차 진입
  ```

## 기능 2: 대리납부 대상 선택
- **설명**: 권한이 확인된 경우 대리납부할 대상(회선·금액)을 선택한다
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `atom/tag`
- **우선순위**: P0
- **노출 방식**: dynamic (권한 확인 후)
- **섹션 ID**: section-BIL-proxy-target-select
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N (대상 수)
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 대리납부 대상 행 — 명의자·회선·금액 표시
    서버 제어: `proxy_targets: [{owner_name, line_id, amount, status}]`
- **SB description**:
  ```
  [영역명] 대리납부 대상 선택
  [고지:필수|POL-BIL-AGT-001] 권한 확인된 관계에 한해 대리납부 대상 표시
  [조건:권한없음] 영역 미노출
  [상태:loading] skeleton 표시
  [상태:empty] "대리납부 가능한 대상이 없습니다" 안내
  [상태:error] snack-bar 재시도 안내
  [액션:tap 대상선택] 해당 대상 선택 → proxy-pay-confirm으로 이동
  ```

## 기능 3: 권한 확인 진행 CTA
- **설명**: 선택된 대리납부 대상에 대한 납부 확인 화면으로 이동하는 버튼
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-proxy-check-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 납부 진행 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 권한 확인 진행 CTA
  [조건:대상미선택] 버튼 비활성(disabled) 처리
  [조건:권한없음] 버튼 비활성(disabled) 처리
  [액션:tap 납부진행] proxy-pay-confirm 화면으로 이동
  ```

---

## 화면 2: 대리납부 실행

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): proxy-pay-confirm
- **화면 한글명**: 대리납부 실행
- **출처**: page/BIL/proxy-pay-confirm
- **User Flow 내 위치**: PAY-005 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 대리납부 권한이 확인된 후 실제 납부를 실행하는 상황
- **사용자 task**: 대리납부 정보를 최종 확인하고 납부를 실행한다
- **가능 케이스**:
  - 정상: 대리납부 정보 확인 후 납부 실행
  - 분리 기록: 대리납부 내역은 명의자와 별도 기록(POL-BIL-AGT-001-09)
  - 에러: 납부 실패 → 실패 사유 표시
- **정보 위계**:
  1. 대리납부 대상 (명의자·회선)
  2. 납부 금액
  3. 납부수단
  4. 대리납부 분리 기록 안내
- **톤**: 신중·명확 (최종 확인 강조)

# 기능 목록

## 기능 1: 대리납부 정보 요약
- **설명**: 대리납부 대상 명의자·회선·금액·수단을 요약 표시. 대리납부 분리 기록 안내 포함
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-proxy-confirm-summary
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 대리납부 정보 카드 — 명의자·금액·수단
    서버 제어: `proxy_summary: {owner_name, line_id, amount, method_label}`
  - `atom/banner(tone=warning)`: 분리 기록 안내 배너
    서버 제어: (항상 표시)
- **SB description**:
  ```
  [영역명] 대리납부 정보 요약
  [규칙:FN-PAY-006] 대리납부 대상 명의자·회선·금액·수단을 표시한다
  [규칙:FN-PAY-004] 납부 확인 절차를 준수한다
  [고지:필수|POL-BIL-AGT-001-09] 대리납부 내역은 명의자 내역과 별도 기록됨을 안내한다
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 대리납부 실행 CTA
- **설명**: 대리납부를 최종 실행하는 버튼
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/btn(type=secondary)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-proxy-confirm-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 (처리 중)
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 대리납부 실행 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 대리납부 실행 CTA
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 대리납부 실행] 납부 처리 요청 → 성공 시 pay-complete / 실패 시 pay-fail
  [액션:tap 취소] proxy-pay-check 화면으로 돌아가기
  ```

---

## 화면 3: 타인 명의 동의

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): third-party-consent
- **화면 한글명**: 타인 명의 동의
- **출처**: page/BIL/third-party-consent
- **User Flow 내 위치**: PAY-006 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 타인 명의 납부수단을 사용하기 위해 명의자의 동의를 받아야 하는 상황
- **사용자 task**: 타인 명의 납부수단 사용에 대한 명의자 동의를 요청하고 승인을 확인한다
- **가능 케이스**:
  - 동의 요청 발송: 명의자에게 동의 요청 발송 성공
  - 동의 승인: 명의자 승인 완료(유효 24시간, POL-BIL-AGT-001-06)
  - 동의 거부: 명의자 거부 → 다른 수단 안내
  - 동의 만료: 24시간 경과 → 재요청 안내
  - 승인 후 철회 불가(POL-BIL-AGT-001-08)
- **정보 위계**:
  1. 동의 요청 대상 (명의자 정보)
  2. 동의 내용 안내
  3. 동의 유효 시간 안내
  4. 승인 후 철회 불가 안내
- **톤**: 공식·중립 (동의 절차의 법적 성격 명확히)

# 기능 목록

## 기능 1: 타인 명의 동의 요청 안내
- **설명**: 타인 명의 납부수단 사용을 위한 동의 요청 내용과 절차를 안내한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-third-party-consent-info
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 동의 요청 안내 카드 — 명의자·동의 내용·유효 시간
    서버 제어: `consent_info: {owner_name, masked_contact, expires_in_hours}`
  - `atom/banner(tone=warning)`: 승인 후 철회 불가 경고 배너
    서버 제어: (항상 표시)
- **SB description**:
  ```
  [영역명] 타인 명의 동의 요청 안내
  [규칙:FN-PAY-003] 타인 명의 납부수단 사용 시 명의자 동의 절차를 제공한다
  [고지:필수|POL-BIL-AUTH-001-07] 타인 명의 수단 사용 시 명의자 동의가 필수임을 안내한다
  [고지:필수|POL-BIL-AGT-001-06] 동의의 유효 시간이 24시간임을 명시한다
  [고지:필수|POL-BIL-AGT-001-08] 명의자 승인 후 철회가 불가함을 명확히 고지한다
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 동의 상태 확인
- **설명**: 동의 요청 발송 후 명의자의 승인/거부/만료 상태를 실시간으로 확인한다
- **사용 컴포넌트 후보**: `mol/notice-card(tone=info)`, `mol/notice-card(tone=error)`, `atom/tag`
- **우선순위**: P0
- **노출 방식**: dynamic (동의 요청 발송 후)
- **섹션 ID**: section-BIL-third-party-consent-status
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0-1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `atom/tag`: 동의 상태 태그 — 대기중/승인/거부/만료
    서버 제어: `consent_status: "pending" | "approved" | "rejected" | "expired"`
- **SB description**:
  ```
  [영역명] 동의 상태 확인
  [조건:동의대기] atom/tag(tone=neutral, label=대기중) 노출
  [조건:동의승인] atom/tag(tone=positive, label=승인완료) 노출 → 납부 진행 CTA 활성
  [조건:동의거부] atom/tag(tone=negative, label=거부) 노출 + 다른 수단 안내
  [조건:동의만료] atom/tag(tone=warning, label=만료) 노출 + 재요청 버튼
  [상태:loading] skeleton 표시
  ```

## 기능 3: 동의 요청 및 진행 CTA
- **설명**: 동의 요청 발송 버튼과 동의 승인 후 납부 진행 버튼을 상태에 따라 표시
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/btn(type=secondary)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-third-party-consent-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 동의 요청 발송 / 납부 진행 버튼 (상태별)
    서버 제어: `consent_status`
- **SB description**:
  ```
  [영역명] 동의 요청 및 진행 CTA
  [조건:동의전] "동의 요청 발송" 버튼 노출
  [조건:동의대기] 버튼 비활성(loading) — "승인 대기 중" 문구
  [조건:동의승인] "납부 진행" 버튼 활성
  [조건:동의거부] "다른 수단으로 납부" 버튼 노출
  [조건:동의만료] "동의 재요청" 버튼 노출
  [액션:tap 동의요청발송] 동의 요청 발송 API 호출
  [액션:tap 납부진행] pay-confirm 화면으로 이동
  [액션:tap 다른수단으로] pay-method-select 화면으로 이동
  ```
