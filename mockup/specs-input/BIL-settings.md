# BIL-settings.md — 청구 설정 (notice-setting / autopay-setting / mobile-pay-limit / content-pay-limit / auto-prepay-setting)

---

## 화면 1: 요금안내서 수신 설정

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): notice-setting
- **화면 한글명**: 요금안내서 수신 설정
- **출처**: page/BIL/notice-setting
- **User Flow 내 위치**: SET-001 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 요금안내서 수신 방식(이메일·문자 등)과 수신처를 설정하는 상황
- **사용자 task**: 요금안내서 수신 방식과 수신처를 변경하고 적용 예정일을 확인한다
- **가능 케이스**:
  - 정상: 수신 방식·수신처 변경 후 저장
  - 수신처 인증 필요: 이메일·번호 변경 시 인증 필요(POL-BIL-SET-001-02)
  - 적용 예정일 안내: 변경사항은 적용 예정일부터 반영(POL-BIL-SET-001-08)
  - 수신 해제: 모든 수신 방식 해제 가능
- **정보 위계**:
  1. 현재 수신 설정 상태
  2. 수신 방식 선택 (이메일·문자·앱)
  3. 수신처 정보 (마스킹)
  4. 적용 예정일 안내
- **톤**: 안내·중립

# 기능 목록

## 기능 1: 수신 방식 선택
- **설명**: 요금안내서를 받을 수신 방식(이메일·문자·앱 알림)을 선택한다. 복수 선택 가능
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/list-item-link`, `atom/tag`, `mol/notice-card(tone=info)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-notice-method-select
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N (수신 방식 수)
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-link`: 수신 방식 행 — 방식명·현재 상태·수신처
    서버 제어: `notice_methods: [{type, label, current_address, is_enabled}]`
- **SB description**:
  ```
  [영역명] 수신 방식 선택
  [규칙:FN-SET-001] 요금안내서 수신 방식을 선택하는 UI를 제공한다
  [고지:필수|POL-BIL-SET-001-01] 수신 방식별 안내 (이메일·문자·앱 알림) 선택 UI 제공
  [고지:필수|POL-BIL-SET-001-02] 수신처 변경 시 본인 인증 절차 필요함을 안내한다
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 수신방식] 해당 방식 활성/비활성 토글
  [액션:tap 수신처변경] 수신처 인증 플로우 진입
  ```

## 기능 2: 적용 예정일 안내
- **설명**: 수신 설정 변경사항이 적용될 예정일을 안내한다
- **사용 컴포넌트 후보**: `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`
- **우선순위**: P1
- **노출 방식**: dynamic (변경 발생 시)
- **섹션 ID**: section-BIL-notice-apply-date
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0-1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 적용 예정일 안내 카드
    서버 제어: `apply_date: "YYYY-MM-DD"`
- **SB description**:
  ```
  [영역명] 적용 예정일 안내
  [고지:필수|POL-BIL-SET-001-08] 변경사항은 다음 청구서 발행 주기부터 적용됨을 안내한다
  [조건:변경없음] 영역 미노출
  [상태:loading] 숨김
  ```

## 기능 3: 설정 저장 CTA
- **설명**: 변경된 수신 설정을 저장하는 버튼
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-notice-setting-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 저장 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 설정 저장 CTA
  [조건:변경없음] 버튼 비활성(disabled) 처리
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 저장] 수신 설정 저장 API 호출 → 성공 시 snack-bar 완료 안내
  ```

---

## 화면 2: 납부방법 신청·변경·해지

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): autopay-setting
- **화면 한글명**: 납부방법 신청·변경·해지
- **출처**: page/BIL/autopay-setting
- **User Flow 내 위치**: SET-002, SET-003 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 자동납부 신청, 납부수단 변경, 또는 자동납부 해지를 하려는 상황
- **사용자 task**: 자동납부 설정(신청·변경·해지)을 완료하고 적용 시점을 확인한다
- **가능 케이스**:
  - 신규 신청: 자동납부 미설정 상태에서 신규 신청
  - 수단 변경: 기존 자동납부 수단 변경
  - 해지: 자동납부 해지 (해지 영향 안내 포함, POL-BIL-SET-001-06)
  - 고위험 추가 인증: 특정 변경 유형 시 추가 인증 필요(POL-BIL-AUTH-001-08)
  - 적용 시점 안내: 변경사항은 적용 예정일부터(POL-BIL-SET-001-08~09)
- **정보 위계**:
  1. 현재 자동납부 설정 상태
  2. 신청/변경/해지 선택
  3. 납부수단 선택 (신청·변경 시)
  4. 해지 영향 및 주의사항 (해지 시)
- **톤**: 안내·신중 (해지 시 위험 고지)

# 기능 목록

## 기능 1: 자동납부 현재 상태 표시
- **설명**: 현재 자동납부 설정 상태(신청 여부·수단·신청일)를 표시하고 신청/변경/해지 진입점을 제공한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/tag`, `mol/list-item-link`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-autopay-current-status
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 자동납부 현재 상태 카드 — 수단·신청일
    서버 제어: `autopay_status: {is_active, method_label, masked_number, start_date}`
  - `atom/tag`: 설정중/미설정 상태 태그
    서버 제어: `is_active: true/false`
- **SB description**:
  ```
  [영역명] 자동납부 현재 상태 표시
  [규칙:FN-SET-002] 현재 자동납부 설정 상태를 표시한다
  [규칙:FN-SET-003] 자동납부 수단 변경 진입점을 제공한다
  [규칙:FN-SET-004] 자동납부 해지 진입점을 제공한다
  [조건:미설정] "자동납부가 설정되지 않았습니다" 안내 + 신청 버튼
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 수단변경] 납부수단 선택 모드 전환
  [액션:tap 해지] 자동납부 해지 확인 다이얼로그 노출
  ```

## 기능 2: 해지 영향 안내
- **설명**: 자동납부 해지 시 발생하는 영향(연체·정지 위험 등)을 안내한다
- **사용 컴포넌트 후보**: `atom/banner(tone=warning)`, `mol/notice-card(tone=info)`
- **우선순위**: P0
- **노출 방식**: dynamic (해지 선택 시)
- **섹션 ID**: section-BIL-autopay-cancel-notice
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0-1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `atom/banner(tone=warning)`: 해지 영향 경고 배너
    서버 제어: `show_cancel_notice: true/false`
- **SB description**:
  ```
  [영역명] 해지 영향 안내
  [고지:필수|POL-BIL-SET-001-06] 해지 시 자동납부 중단으로 인한 연체·정지 위험 안내
  [고지:필수|POL-BIL-SET-001-08] 해지 적용 시점(다음 청구주기 또는 즉시) 명시
  [고지:필수|POL-BIL-SET-001-09] 재신청 시 재적용까지 소요 시간 안내
  [조건:해지아님] 영역 미노출
  [상태:loading] 숨김
  ```

## 기능 3: 설정 변경 CTA
- **설명**: 자동납부 신청·변경·해지를 최종 확정하는 버튼. 고위험 변경 시 추가 인증 절차 포함
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/btn(type=secondary)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-autopay-setting-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 확인/저장/해지 버튼 (모드별)
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 설정 변경 CTA
  [고지:필수|POL-BIL-AUTH-001-08] 고위험 변경(해지·수단변경) 시 추가 본인인증 절차 안내
  [조건:신청모드] "자동납부 신청" 버튼 노출
  [조건:변경모드] "수단 변경" 버튼 노출
  [조건:해지모드] "자동납부 해지" 버튼 노출 (tone=destructive)
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 확인] 설정 변경 처리 → 성공 시 snack-bar 완료 안내
  ```

---

## 화면 3: 휴대폰 결제 한도

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): mobile-pay-limit
- **화면 한글명**: 휴대폰 결제 한도
- **출처**: page/BIL/mobile-pay-limit
- **User Flow 내 위치**: SET-004 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 휴대폰 결제 월 한도를 조회하고 변경하려는 상황
- **사용자 task**: 휴대폰 결제 한도를 확인하고 하향 또는 상향 신청을 완료한다
- **가능 케이스**:
  - 한도 하향: 즉시 적용(POL-BIL-MOB-001-05)
  - 한도 상향: 심사 후 적용(POL-BIL-MOB-001-06)
  - 정상 회선 조건: 정지·연체 없는 정상 회선만 한도 변경 가능(POL-BIL-MOB-001-03)
  - 조건 미충족: 변경 불가 안내
- **정보 위계**:
  1. 현재 한도 및 이번 달 사용 현황
  2. 변경 가능 한도 범위
  3. 하향/상향 적용 시점 안내
- **톤**: 안내·명확

# 기능 목록

## 기능 1: 현재 한도 및 사용 현황
- **설명**: 현재 설정된 월 한도와 이번 달 사용 금액·잔여 한도를 표시한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `ogn/BIL/bill-summary-card`, `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-mobile-pay-current
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 한도 현황 카드 — 현재한도·사용액·잔여한도
    서버 제어: `limit_status: {current_limit, used_amount, remaining_amount}`
  - `atom/banner(tone=warning)`: 변경 불가 조건 경고 배너 (해당 시)
    서버 제어: `is_changeable: false, restriction_reason`
- **SB description**:
  ```
  [영역명] 현재 한도 및 사용 현황
  [규칙:FN-SET-005] 현재 설정된 휴대폰 결제 한도와 사용 현황을 표시한다
  [고지:필수|POL-BIL-MOB-001-03] 정상 회선이 아닌 경우(정지·연체) 한도 변경 불가 안내
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 한도 변경 입력
- **설명**: 변경할 한도 금액을 선택하거나 직접 입력한다. 하향/상향 여부에 따라 적용 시점을 안내한다
- **사용 컴포넌트 후보**: `mol/list-item-link`, `mol/notice-card(tone=info)`, `atom/btn(type=secondary)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-mobile-pay-limit-input
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 유효성 오류 인라인 표시
- **오가니즘 분해**:
  - `mol/list-item-link`: 한도 선택 옵션 행
    서버 제어: `limit_options: [{amount, label}]`
  - `mol/notice-card(tone=info)`: 하향/상향 적용 시점 안내 카드
    서버 제어: `change_direction: "down" | "up"`
- **SB description**:
  ```
  [영역명] 한도 변경 입력
  [고지:필수|POL-BIL-MOB-001-05] 한도 하향은 즉시 적용됨을 표시
  [고지:필수|POL-BIL-MOB-001-06] 한도 상향은 심사 후 적용됨을 표시 — 예상 소요 시간 안내
  [조건:하향선택] mol/notice-card "즉시 적용" 안내 표시
  [조건:상향선택] mol/notice-card "심사 후 적용" 안내 표시
  [상태:loading] skeleton 표시
  ```

## 기능 3: 한도 변경 CTA
- **설명**: 선택된 한도로 변경을 신청하는 버튼
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-mobile-pay-limit-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 한도 변경 신청 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 한도 변경 CTA
  [조건:변경불가] 버튼 비활성(disabled) 처리
  [조건:미선택] 버튼 비활성(disabled) 처리
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 한도변경 신청] 한도 변경 처리 → 성공 시 snack-bar 완료 안내
  ```

---

## 화면 4: 콘텐츠 이용료 한도

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): content-pay-limit
- **화면 한글명**: 콘텐츠 이용료 한도
- **출처**: page/BIL/content-pay-limit
- **User Flow 내 위치**: SET-005 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 콘텐츠 이용료(앱·디지털콘텐츠) 월 한도를 조회하고 변경하려는 상황
- **사용자 task**: 콘텐츠 이용료 한도를 확인하고 하향 또는 상향 신청을 완료한다
- **가능 케이스**:
  - 한도 하향: 즉시 적용
  - 한도 상향: 심사 후 적용
  - 정상 회선 조건: 정지·연체 없는 정상 회선만 변경 가능
  - 조건 미충족: 변경 불가 안내
- **정보 위계**:
  1. 현재 한도 및 이번 달 사용 현황
  2. 변경 가능 한도 범위
  3. 하향/상향 적용 시점 안내
- **톤**: 안내·명확

# 기능 목록

## 기능 1: 현재 콘텐츠 이용료 한도 및 사용 현황
- **설명**: 현재 설정된 월 콘텐츠 이용료 한도와 이번 달 사용 금액·잔여 한도를 표시한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-content-pay-current
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 콘텐츠 이용료 현황 카드 — 현재한도·사용액·잔여한도
    서버 제어: `content_limit_status: {current_limit, used_amount, remaining_amount}`
  - `atom/banner(tone=warning)`: 변경 불가 조건 경고 배너 (해당 시)
    서버 제어: `is_changeable: false, restriction_reason`
- **SB description**:
  ```
  [영역명] 현재 콘텐츠 이용료 한도 및 사용 현황
  [규칙:FN-SET-006] 현재 설정된 콘텐츠 이용료 한도와 사용 현황을 표시한다
  [고지:필수|POL-BIL-MOB-001-03] 정상 회선이 아닌 경우(정지·연체) 한도 변경 불가 안내
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 콘텐츠 이용료 한도 변경 입력
- **설명**: 변경할 한도 금액을 선택하거나 직접 입력한다. 하향/상향 여부에 따라 적용 시점을 안내한다
- **사용 컴포넌트 후보**: `mol/list-item-link`, `mol/notice-card(tone=info)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-content-pay-limit-input
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 유효성 오류 인라인 표시
- **오가니즘 분해**:
  - `mol/list-item-link`: 콘텐츠 이용료 한도 선택 옵션 행
    서버 제어: `limit_options: [{amount, label}]`
  - `mol/notice-card(tone=info)`: 하향/상향 적용 시점 안내 카드
    서버 제어: `change_direction: "down" | "up"`
- **SB description**:
  ```
  [영역명] 콘텐츠 이용료 한도 변경 입력
  [고지:필수|POL-BIL-MOB-001-05] 한도 하향은 즉시 적용됨을 표시
  [고지:필수|POL-BIL-MOB-001-06] 한도 상향은 심사 후 적용됨을 표시
  [조건:하향선택] mol/notice-card "즉시 적용" 안내 표시
  [조건:상향선택] mol/notice-card "심사 후 적용" 안내 표시
  [상태:loading] skeleton 표시
  ```

## 기능 3: 콘텐츠 이용료 한도 변경 CTA
- **설명**: 선택된 한도로 변경을 신청하는 버튼
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-content-pay-limit-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 한도 변경 신청 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 콘텐츠 이용료 한도 변경 CTA
  [조건:변경불가] 버튼 비활성(disabled) 처리
  [조건:미선택] 버튼 비활성(disabled) 처리
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 한도변경 신청] 한도 변경 처리 → 성공 시 snack-bar 완료 안내
  ```

---

## 화면 5: 자동 선결제 설정

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): auto-prepay-setting
- **화면 한글명**: 자동 선결제 설정
- **출처**: page/BIL/auto-prepay-setting
- **User Flow 내 위치**: SET-006 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 매월 자동으로 선결제가 실행되도록 설정하거나 해지하려는 상황
- **사용자 task**: 자동 선결제 신청 조건을 확인하고 설정(신청/해지)을 완료한다
- **가능 케이스**:
  - 신청 가능: 신청 조건(POL-BIL-AUTO-001-01~05) 충족 시 신청 진행
  - 신청 불가: 조건 미충족 시 불가 사유 안내
  - 이미 설정: 현재 설정 표시 + 해지 가능
  - 해지: 해지 조건(POL-BIL-AUTO-001-06~08) 확인 후 해지
- **정보 위계**:
  1. 자동 선결제 현재 상태 (설정/미설정)
  2. 신청 조건 및 충족 여부
  3. 설정 금액·수단 (설정 시)
  4. 해지 영향 안내 (해지 시)
- **톤**: 안내·명확 (자동 선결제 조건 명확히)

# 기능 목록

## 기능 1: 자동 선결제 현재 상태 및 조건 표시
- **설명**: 자동 선결제 현재 설정 상태와 신청 조건(5종) 충족 여부를 표시한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/tag`, `atom/banner(tone=warning)`, `mol/list-item-link`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-auto-prepay-status
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 자동 선결제 현황 카드 — 설정 금액·수단·신청일
    서버 제어: `auto_prepay_status: {is_active, amount, method_label, start_date}`
  - `mol/list-item-link`: 신청 조건 항목 행 (조건별 충족 여부)
    서버 제어: `conditions: [{label, is_met}]`
  - `atom/banner(tone=warning)`: 조건 미충족 경고 배너 (해당 시)
    서버 제어: `all_conditions_met: false`
- **SB description**:
  ```
  [영역명] 자동 선결제 현재 상태 및 조건 표시
  [규칙:FN-SET-007] 자동 선결제 현재 상태와 신청 조건을 표시한다
  [고지:필수|POL-BIL-AUTO-001-01] 자동 선결제 신청 가능 조건 1: 정상 회선
  [고지:필수|POL-BIL-AUTO-001-02] 자동 선결제 신청 가능 조건 2: 자동납부 설정 완료
  [고지:필수|POL-BIL-AUTO-001-03] 자동 선결제 신청 가능 조건 3: 미납 없음
  [고지:필수|POL-BIL-AUTO-001-04] 자동 선결제 신청 가능 조건 4: 유효 납부수단 등록
  [고지:필수|POL-BIL-AUTO-001-05] 자동 선결제 신청 가능 조건 5: 본인 명의 회선
  [조건:설정중] 현재 설정 정보 카드 노출 + 해지 버튼
  [조건:미설정] 신청 조건 체크리스트 노출 + 신청 버튼
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 자동 선결제 해지 안내
- **설명**: 자동 선결제 해지 시 영향과 재신청 조건을 안내한다
- **사용 컴포넌트 후보**: `atom/banner(tone=warning)`, `mol/notice-card(tone=info)`
- **우선순위**: P1
- **노출 방식**: dynamic (해지 선택 시)
- **섹션 ID**: section-BIL-auto-prepay-cancel-notice
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0-1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `atom/banner(tone=warning)`: 해지 영향 경고 배너
    서버 제어: `show_cancel_notice: true/false`
- **SB description**:
  ```
  [영역명] 자동 선결제 해지 안내
  [고지:필수|POL-BIL-AUTO-001-06] 해지 시 자동 선결제 중단 및 영향 안내
  [고지:필수|POL-BIL-AUTO-001-07] 해지 후 재신청 시 조건 재충족 필요 안내
  [고지:필수|POL-BIL-AUTO-001-08] 해지 적용 시점 명시
  [조건:해지아님] 영역 미노출
  ```

## 기능 3: 설정 신청·해지 CTA
- **설명**: 자동 선결제 신청 또는 해지를 확정하는 버튼
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/btn(type=secondary)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-auto-prepay-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 자동 선결제 신청/해지 버튼 (상태별)
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 설정 신청·해지 CTA
  [조건:조건미충족] "신청" 버튼 비활성(disabled) 처리
  [조건:설정중] "해지" 버튼 노출 (tone=destructive)
  [조건:미설정] "신청" 버튼 노출
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 신청] 자동 선결제 신청 처리 → 성공 시 snack-bar 완료 안내
  [액션:tap 해지] 자동 선결제 해지 확인 다이얼로그 노출
  ```
