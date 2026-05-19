# BIL-pay-flow.md — 납부 흐름 (pay-target / pay-method-select / pay-confirm / pay-complete / pay-fail)

---

## 화면 1: 납부 대상 선택

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-target
- **화면 한글명**: 납부 대상 선택
- **출처**: page/BIL/pay-target
- **User Flow 내 위치**: PAY-001 step 1

# 컨텍스트

- **UX 단계**: 4 (결정)
- **사용자 상황**: 사용자가 납부할 청구 대상(회선·금액)을 선택하려는 상황
- **사용자 task**: 납부 대상 회선 및 청구 금액을 확인하고 납부 진행 여부를 결정한다
- **가능 케이스**:
  - 정상: 납부 대상 목록 정상 노출, 단건·다건 선택 후 납부 진행
  - 에러: 대상 조회 실패 → 영역 숨김 + snack-bar 재시도 안내
  - 수납완료: 이미 납부된 항목 제외(POL-BIL-PAY-001-02), 제외 사유 표시
  - 납부제한: 수납대기 상태(POL-BIL-PAY-002-05) 또는 제한 사유 6종(POL-BIL-CUS-001-03) 해당 시 CTA 비활성
  - 24시간 제한: 최근 24시간 내 납부 이력 있을 시 경고(POL-BIL-PAY-002-03)
- **정보 위계**:
  1. 납부 대상 회선·금액 목록
  2. 납부 제한/경고 안내 (해당 시)
  3. 납부하기 CTA 버튼
- **톤**: 명확·중립 (금액 정보 우선, 제한 시 경고)

# 기능 목록

## 기능 1: 납부 대상 목록
- **설명**: 납부 가능한 청구 대상 회선과 금액을 목록으로 표시. 수납완료 항목은 제외하고 제한 항목은 비활성 표시
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/list-item-bill-item`, `atom/tag`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-target-list
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N (납부 대상 수)
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 납부 대상 행 — 회선명·금액·납부기한 표시
    서버 제어: `pay_items: [{line_id, label, amount, status, disabled_reason}]`
  - `atom/tag`: 수납대기·납부제한 상태 태그
    서버 제어: `status_tag: {label, tone}`
- **SB description**:
  ```
  [영역명] 납부 대상 목록
  [규칙:FN-PAY-001] 납부 가능한 청구 대상 회선과 금액을 목록으로 표시한다
  [규칙:FN-COM-003] 회선 식별자(회선번호·명칭)를 함께 표시한다
  [고지:필수|POL-BIL-PAY-001-02] 수납완료 항목은 목록에서 제외하고 제외 사유를 표시한다
  [고지:필수|POL-BIL-PAY-002-05] 수납대기 상태인 항목은 선택 비활성 처리하고 사유를 표시한다
  [고지:필수|POL-BIL-CUS-001-03] 납부 제한 사유 6종 해당 시 해당 항목 비활성 + 사유 고지
  [상태:loading] skeleton 표시
  [상태:empty] "납부 대상이 없습니다" 안내 텍스트 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 항목 선택] 해당 항목 선택/해제 토글
  ```

## 기능 2: 납부 제한·경고 배너
- **설명**: 24시간 내 납부 이력, 수납대기 상태 등 납부 진행 시 주의가 필요한 경우 경고 배너 표시
- **사용 컴포넌트 후보**: `atom/banner(tone=warning)`, `mol/notice-card(tone=info)`
- **우선순위**: P1
- **노출 방식**: dynamic (조건부)
- **섹션 ID**: section-BIL-pay-warning
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0-1/1
- **노출 우선순위**: 0 (목록 상단)
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `atom/banner(tone=warning)`: 24시간 내 납부 이력 경고 배너
    서버 제어: `show_24h_warning: true/false`
- **SB description**:
  ```
  [영역명] 납부 제한·경고 배너
  [고지:필수|POL-BIL-PAY-002-03] 최근 24시간 내 납부 이력 있을 시 중복 주의 경고 배너 노출
  [조건:24시간_내_납부] atom/banner(tone=warning) 노출 — "최근 납부 이력이 있습니다" 문구
  [상태:loading] 숨김
  [상태:error] 숨김
  ```

## 기능 3: 납부하기 CTA
- **설명**: 선택된 납부 대상에 대한 납부 진행 버튼. 선택 항목 없거나 전체 비활성 시 버튼 비활성
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/txt`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-pay-target-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 납부하기 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 납부하기 CTA
  [규칙:FN-PAY-001] 선택된 납부 대상이 있을 때만 버튼 활성화
  [조건:선택없음] 버튼 비활성(disabled) 처리
  [조건:전체제한] 버튼 비활성(disabled) 처리
  [액션:tap 납부하기] pay-method-select 화면으로 이동
  ```

---

## 화면 2: 납부수단 선택

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-method-select
- **화면 한글명**: 납부수단 선택
- **출처**: page/BIL/pay-method-select
- **User Flow 내 위치**: PAY-001 step 2

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 실제 납부에 사용할 수단(카드·계좌·간편결제 등)을 선택하는 상황
- **사용자 task**: 납부수단을 선택하고 타인 명의 수단 사용 시 동의 절차를 완료한다
- **가능 케이스**:
  - 정상: 등록된 납부수단 목록 표시, 선택 후 납부 확인으로 이동
  - 에러: 납부수단 조회 실패 → 영역 숨김 + snack-bar 재시도 안내
  - 타인 명의: 타인 명의 수단 선택 시 동의 절차 필요(POL-BIL-AUTH-001-07)
  - 5회 실패 잠금: 인증 5회 실패 시 잠금 처리(POL-BIL-AUTH-001-09)
  - 신규 등록: 납부수단이 없는 경우 신규 등록 안내
- **정보 위계**:
  1. 등록된 납부수단 목록 (마스킹 처리)
  2. 타인 명의 동의 안내 (해당 시)
  3. 신규 납부수단 등록 링크
- **톤**: 명확·신뢰 (금융 정보 보안 강조)

# 기능 목록

## 기능 1: 납부수단 목록
- **설명**: 등록된 납부수단을 카드번호·계좌번호 마스킹 처리하여 목록으로 표시. 타인 명의 수단은 별도 표시
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/list-item-link`, `atom/tag`, `atom/icon`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-method-list
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N (등록 수단 수)
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-link`: 납부수단 행 — 수단 아이콘·명칭·마스킹 번호 표시
    서버 제어: `pay_methods: [{id, type, label, masked_number, is_third_party}]`
  - `atom/tag`: 타인 명의 태그
    서버 제어: `is_third_party: true/false`
- **SB description**:
  ```
  [영역명] 납부수단 목록
  [규칙:FN-PAY-002] 등록된 납부수단을 목록으로 표시한다
  [고지:필수|POL-BIL-SEC-001-02] 카드번호·계좌번호는 마스킹 처리하여 표시한다
  [고지:필수|POL-BIL-AUTH-001-07] 타인 명의 납부수단은 별도 표시하고 선택 시 동의 절차 안내
  [고지:필수|POL-BIL-AUTH-001-09] 인증 5회 실패 시 잠금 처리 및 잠금 해제 안내 표시
  [상태:loading] skeleton 표시
  [상태:empty] "등록된 납부수단이 없습니다" 안내 + 신규 등록 버튼
  [상태:error] snack-bar 재시도 안내
  [액션:tap 수단 선택] 해당 납부수단 선택 → 타인 명의 여부에 따라 분기
  [액션:tap 타인명의수단] third-party-consent 화면으로 이동
  ```

## 기능 2: 납부수단 추가
- **설명**: 새 납부수단(카드·계좌)을 등록하는 링크 또는 버튼. 목록 하단에 고정 노출
- **사용 컴포넌트 후보**: `mol/list-item-link`, `atom/icon`
- **우선순위**: P1
- **노출 방식**: static
- **섹션 ID**: section-BIL-pay-method-add
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 항상 노출
- **오가니즘 분해**:
  - `mol/list-item-link`: 납부수단 추가 행
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 납부수단 추가
  [규칙:FN-PAY-003] 새 납부수단 등록 진입점을 제공한다
  [액션:tap 납부수단 추가] 납부수단 등록 외부 플로우 진입
  ```

---

## 화면 3: 납부 확인

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-confirm
- **화면 한글명**: 납부 확인
- **출처**: page/BIL/pay-confirm
- **User Flow 내 위치**: PAY-002 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 납부 최종 정보를 확인하고 납부를 승인하는 상황
- **사용자 task**: 납부 금액·수단·대상을 최종 확인하고 납부를 실행한다
- **가능 케이스**:
  - 정상: 납부 정보 확인 후 납부 실행
  - 금액 변경: 확인 화면 진입 후 금액 변경 감지 시 재확인 요청(POL-BIL-PAY-001-09)
  - 중복납부: 중복납부 주의 안내 노출(POL-BIL-PAY-004-08)
  - 에러: 납부 처리 실패 → pay-fail 화면으로 이동
- **정보 위계**:
  1. 납부 금액 (강조)
  2. 납부 대상 (회선·청구 항목)
  3. 납부수단 정보 (마스킹)
  4. 중복납부 주의 안내
- **톤**: 신중·명확 (최종 확인 강조)

# 기능 목록

## 기능 1: 납부 정보 요약
- **설명**: 최종 납부 금액, 납부 대상, 납부수단을 요약 표시. 금액 변경 감지 시 변경 전/후 금액 강조
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `ogn/BIL/bill-summary-card`, `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-confirm-summary
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `ogn/BIL/bill-summary-card`: 납부 금액 요약 카드
    서버 제어: (없음)
  - `mol/notice-card(tone=info)`: 납부 대상·수단 상세
    서버 제어: `pay_summary: {target_label, method_label, masked_number}`
  - `atom/banner(tone=warning)`: 금액 변경 경고 배너 (해당 시)
    서버 제어: `amount_changed: true/false, original_amount, new_amount`
- **SB description**:
  ```
  [영역명] 납부 정보 요약
  [규칙:FN-PAY-004] 최종 납부 금액·대상·수단을 한 화면에 요약 표시한다
  [고지:필수|POL-BIL-PAY-001-09] 금액 변경 감지 시 변경 전/후 금액을 강조하고 재확인 요청
  [고지:필수|POL-BIL-PAY-004-08] 중복납부 주의 안내 문구를 화면 하단에 항상 표시
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 납부수단 변경] pay-method-select 화면으로 돌아가기
  ```

## 기능 2: 납부 실행 CTA
- **설명**: 최종 납부를 실행하는 버튼. 금액 변경 감지 시 "변경된 금액으로 납부" 문구로 표시
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/txt`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-pay-confirm-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 (처리 중)
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 납부 실행 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 납부 실행 CTA
  [규칙:FN-PAY-004] 납부 실행 버튼을 제공한다
  [조건:금액변경] 버튼 레이블을 "변경된 금액으로 납부"로 표시
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 납부하기] 납부 처리 요청 → 성공 시 pay-complete / 실패 시 pay-fail
  ```

---

## 화면 4: 납부 완료

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-complete
- **화면 한글명**: 납부 완료
- **출처**: page/BIL/pay-complete
- **User Flow 내 위치**: PAY-002 step 2

# 컨텍스트

- **UX 단계**: 6 (완료)
- **사용자 상황**: 납부 처리가 완료된 후 결과를 확인하는 상황
- **사용자 task**: 납부 처리 결과(수납완료·수납대기)를 확인하고 다음 행동을 결정한다
- **가능 케이스**:
  - 수납완료: 즉시 처리(POL-BIL-STAT-001-01), 납부 완료 확인 메시지
  - 수납대기: 처리 지연 안내(POL-BIL-STAT-001-02), 대기 사유 표시
  - 정지 해제: 서비스 정지 해제 진행 안내(POL-BIL-SUSP-001)
  - 중복납부 주의: 완료 후 중복납부 주의 안내(POL-BIL-CUS-001-05)
- **정보 위계**:
  1. 납부 결과 상태 (수납완료/수납대기)
  2. 납부 금액·일시·수단
  3. 정지 해제 안내 (해당 시)
  4. 다음 행동 안내 (납부 내역 확인·홈 이동)
- **톤**: 긍정·완료 (수납완료), 안내·중립 (수납대기)

# 기능 목록

## 기능 1: 납부 결과 표시
- **설명**: 수납완료 또는 수납대기 상태를 명확히 표시. 납부 금액·일시·수단을 요약 표시
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/tag`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-complete-result
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 납부 완료 결과 카드 — 금액·일시·수단
    서버 제어: `pay_result: {status, amount, datetime, method_label}`
  - `atom/tag`: 수납완료/수납대기 상태 태그
    서버 제어: `status: "completed" | "pending"`
  - `atom/banner(tone=warning)`: 수납대기 안내 배너 (해당 시)
    서버 제어: `show_pending_notice: true/false`
- **SB description**:
  ```
  [영역명] 납부 결과 표시
  [규칙:FN-PAY-011] 납부 처리 결과를 수납완료/수납대기로 구분하여 표시한다
  [고지:필수|POL-BIL-STAT-001-01] 수납완료 시 즉시 처리 완료 메시지 표시
  [고지:필수|POL-BIL-STAT-001-02] 수납대기 시 처리 지연 사유와 예상 완료 시점 안내
  [고지:필수|POL-BIL-SUSP-001] 서비스 정지 해제 진행 중인 경우 해제 진행 안내 표시
  [고지:필수|POL-BIL-CUS-001-05] 중복납부 주의 안내 문구 항상 표시
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 완료 후 액션
- **설명**: 납부 내역 확인, 청구 메인으로 이동 등 완료 후 다음 행동 버튼 제공
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/btn(type=secondary)`, `mol/list-item-link`
- **우선순위**: P1
- **노출 방식**: static
- **섹션 ID**: section-BIL-pay-complete-actions
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 항상 노출
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 납부 내역 확인 버튼
    서버 제어: (없음)
  - `atom/btn(type=secondary)`: 청구 메인으로 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 완료 후 액션
  [규칙:FN-CHK-007] 납부 완료 후 납부 이력 확인 진입점을 제공한다
  [액션:tap 납부내역 확인] pay-history 화면으로 이동
  [액션:tap 청구메인으로] bill-main 화면으로 이동
  ```

---

## 화면 5: 납부 실패

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-fail
- **화면 한글명**: 납부 실패
- **출처**: page/BIL/pay-fail
- **User Flow 내 위치**: PAY-008 step 1

# 컨텍스트

- **UX 단계**: 7 (문제해결)
- **사용자 상황**: 납부 처리 중 오류가 발생하여 실패 원인을 확인하고 재시도 방법을 찾는 상황
- **사용자 task**: 납부 실패 사유를 확인하고 재시도 또는 대체수단으로 납부를 완료한다
- **가능 케이스**:
  - 카드 한도 초과: 실패 사유 표시 + 다른 카드 안내
  - 계좌 잔액 부족: 실패 사유 표시 + 잔액 확인 안내
  - 인증 실패: 인증 재시도 안내
  - 시스템 오류: 재시도 안내 + 고객센터 연결
  - 납부수단 오류: 수단 변경 안내
  - 기타 8종 실패 사유(POL-BIL-EXC-001-01): 사유별 안내 문구 표시
- **정보 위계**:
  1. 실패 상태 표시 (명확)
  2. 실패 사유 설명
  3. 재시도 또는 대체수단 안내
- **톤**: 안내·해결 지향 (위기감 최소화, 해결 경로 강조)

# 기능 목록

## 기능 1: 납부 실패 사유 안내
- **설명**: 납부 실패 사유(8종)를 사용자가 이해할 수 있는 언어로 표시하고 대처 방법을 안내한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=error)`, `atom/banner(tone=warning)`, `atom/tag`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-fail-reason
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 최소 실패 상태 항상 노출
- **오가니즘 분해**:
  - `mol/notice-card(tone=error)`: 실패 사유 카드 — 실패 코드·메시지 표시
    서버 제어: `fail_reason: {code, message, detail}`
- **SB description**:
  ```
  [영역명] 납부 실패 사유 안내
  [규칙:FN-PAY-009] 납부 실패 시 실패 사유를 사용자 언어로 표시한다
  [고지:필수|POL-BIL-EXC-001-01] 실패 사유 8종 각각에 대해 명확한 안내 문구 제공
  [고지:필수|POL-BIL-CUS-001-04] 실패 사유와 함께 대체 납부수단 안내를 제공한다
  [상태:loading] skeleton 표시
  [상태:error] 기본 실패 메시지("납부 처리에 실패했습니다") 표시
  ```

## 기능 2: 재시도 및 대체수단 CTA
- **설명**: 납부 재시도 및 다른 납부수단으로 변경하는 버튼 제공
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/btn(type=secondary)`, `mol/list-item-link`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-fail-actions
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 재시도 버튼 항상 노출
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 재시도 버튼
    서버 제어: `retry_enabled: true/false`
  - `atom/btn(type=secondary)`: 다른 수단으로 납부 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 재시도 및 대체수단 CTA
  [규칙:FN-PAY-010] 납부 실패 시 재시도 및 대체수단 선택 경로를 제공한다
  [고지:필수|POL-BIL-EXC-001-02] 재시도 가능 여부를 서버에서 제어하고 불가 시 버튼 숨김
  [액션:tap 재시도] pay-confirm 화면으로 돌아가기
  [액션:tap 다른수단으로] pay-method-select 화면으로 이동
  [액션:tap 고객센터] 고객센터 연결
  ```
