# BIL-pay-reserve.md — 납부 예약 (pay-reserve / pay-reserve-complete)

---

## 화면 1: 납부 예약

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-reserve
- **화면 한글명**: 납부 예약
- **출처**: page/BIL/pay-reserve
- **User Flow 내 위치**: PAY-003 step 1

# 컨텍스트

- **UX 단계**: 4 (결정)
- **사용자 상황**: 사용자가 특정 날짜에 자동으로 납부가 실행되도록 예약을 설정하는 상황
- **사용자 task**: 납부 예약 날짜와 수단을 선택하고 예약을 확정한다
- **가능 케이스**:
  - 정상: 예약 날짜·수단 선택 후 예약 완료
  - 기존 예약 존재: 기존 예약 정보 표시, 변경 또는 취소 가능(실행 전날까지, POL-BIL-PAY-003-03)
  - 예약 취소 제한: 실행 당일 취소 불가(POL-BIL-PAY-003-04)
  - 납부수단 없음: 납부수단 등록 안내
- **정보 위계**:
  1. 현재 예약 상태 (예약 없음 / 예약 중)
  2. 예약 날짜 선택
  3. 납부수단 선택
  4. 예약 관련 주의사항 (변경·취소 기한)
- **톤**: 안내·중립 (예약 조건 명확히)

# 기능 목록

## 기능 1: 기존 예약 상태 표시
- **설명**: 기존 납부 예약이 있는 경우 예약 날짜·금액·수단을 표시하고 변경/취소 가능 여부를 안내한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`, `atom/tag`
- **우선순위**: P1
- **노출 방식**: dynamic (조건부)
- **섹션 ID**: section-BIL-pay-reserve-current
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0-1/1
- **노출 우선순위**: 0 (최상단)
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 기존 예약 정보 카드
    서버 제어: `existing_reserve: {date, amount, method_label, is_cancellable}`
  - `atom/banner(tone=warning)`: 취소 기한 경과 경고 (해당 시)
    서버 제어: `is_cancellable: false`
- **SB description**:
  ```
  [영역명] 기존 예약 상태 표시
  [고지:필수|POL-BIL-PAY-003-03] 예약 변경은 실행 전날까지만 가능함을 명시
  [고지:필수|POL-BIL-PAY-003-04] 실행 당일 취소 불가 상태 시 취소 버튼 숨김 + 안내 문구 표시
  [조건:기존예약없음] 영역 미노출
  [조건:취소불가] atom/banner(tone=warning) 노출 — 취소 기한 경과 안내
  [상태:loading] skeleton 표시
  [상태:error] 영역 숨김
  [액션:tap 예약변경] 예약 날짜·수단 수정 모드 전환
  [액션:tap 예약취소] 예약 취소 확인 다이얼로그 노출
  ```

## 기능 2: 예약 날짜·수단 입력
- **설명**: 납부 예약 날짜를 선택하고 납부수단을 지정한다. 납부기한 이전 날짜만 선택 가능
- **사용 컴포넌트 후보**: `mol/month-picker`, `mol/list-item-link`, `atom/btn(type=secondary)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-reserve-input
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/month-picker`: 날짜 선택 컴포넌트 — 선택 가능 범위 제한
    서버 제어: `selectable_range: {min_date, max_date}`
  - `mol/list-item-link`: 납부수단 선택 행
    서버 제어: `selected_method: {id, label, masked_number}`
- **SB description**:
  ```
  [영역명] 예약 날짜·수단 입력
  [규칙:FN-PAY-005] 납부 예약 날짜와 수단을 선택하는 UI를 제공한다
  [고지:필수|POL-BIL-PAY-003-03] 예약 날짜는 납부기한 이전 날짜만 선택 가능하도록 제한
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 날짜선택] 날짜 피커 활성화
  [액션:tap 납부수단 선택] pay-method-select 화면으로 이동
  ```

## 기능 3: 예약 확정 CTA
- **설명**: 선택된 날짜·수단으로 납부 예약을 확정하는 버튼. 날짜 또는 수단 미선택 시 비활성
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `mol/notice-card(tone=info)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-pay-reserve-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 예약하기 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 예약 확정 CTA
  [조건:날짜미선택] 버튼 비활성(disabled) 처리
  [조건:수단미선택] 버튼 비활성(disabled) 처리
  [액션:tap 예약하기] 납부 예약 처리 요청 → 성공 시 pay-reserve-complete
  ```

---

## 화면 2: 납부 예약 완료

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-reserve-complete
- **화면 한글명**: 납부 예약 완료
- **출처**: page/BIL/pay-reserve-complete
- **User Flow 내 위치**: PAY-003 step 2

# 컨텍스트

- **UX 단계**: 6 (완료)
- **사용자 상황**: 납부 예약이 완료되거나 실패한 후 결과를 확인하는 상황
- **사용자 task**: 납부 예약 결과를 확인하고 예약 취소 방법을 파악한다
- **가능 케이스**:
  - 예약 성공: 예약 날짜·수단 확인, 취소 방법 안내(POL-BIL-PAY-003-10)
  - 예약 실패: 실패 사유 표시, 재시도 안내(POL-BIL-PAY-003-10)
  - 예약 취소 완료: 취소 완료 확인
- **정보 위계**:
  1. 예약 결과 상태 (성공/실패/취소완료)
  2. 예약 날짜·금액·수단 (성공 시)
  3. 취소 방법 안내 (성공 시)
  4. 다음 행동 버튼
- **톤**: 긍정·완료 (예약 성공), 안내·해결 지향 (예약 실패)

# 기능 목록

## 기능 1: 예약 결과 표시
- **설명**: 납부 예약 성공/실패/취소 결과를 명확히 표시. 성공 시 예약 날짜·수단과 취소 방법 안내
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `mol/notice-card(tone=error)`, `atom/tag`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-reserve-result
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 최소 실패 상태 항상 노출
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 예약 성공 결과 카드 — 날짜·금액·수단
    서버 제어: `reserve_result: {status, date, amount, method_label}`
  - `mol/notice-card(tone=error)`: 예약 실패 결과 카드 (해당 시)
    서버 제어: `status: "failed", fail_reason`
- **SB description**:
  ```
  [영역명] 예약 결과 표시
  [고지:필수|POL-BIL-PAY-003-10] 예약 성공 시 예약 날짜·수단과 함께 취소 방법(경로·기한) 안내
  [고지:필수|POL-BIL-PAY-003-10] 예약 실패 시 실패 사유와 재시도 방법 안내
  [조건:예약성공] mol/notice-card(tone=info) 노출
  [조건:예약실패] mol/notice-card(tone=error) 노출
  [조건:취소완료] 취소 완료 확인 메시지 노출
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 완료 후 액션
- **설명**: 예약 결과 확인 후 청구 메인 이동, 예약 취소, 재시도 등 다음 행동 버튼 제공
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `atom/btn(type=secondary)`
- **우선순위**: P1
- **노출 방식**: static
- **섹션 ID**: section-BIL-pay-reserve-complete-actions
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 홈 이동 버튼 항상 노출
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 청구 메인으로 버튼
    서버 제어: (없음)
  - `atom/btn(type=secondary)`: 예약 취소 / 재시도 버튼 (조건부)
    서버 제어: `show_cancel_btn: true/false, show_retry_btn: true/false`
- **SB description**:
  ```
  [영역명] 완료 후 액션
  [조건:예약성공] 예약 취소 버튼 노출 (실행 전날까지 활성)
  [조건:예약실패] 재시도 버튼 노출
  [액션:tap 청구메인으로] bill-main 화면으로 이동
  [액션:tap 예약취소] pay-reserve 화면으로 이동 (취소 모드)
  [액션:tap 재시도] pay-reserve 화면으로 이동
  ```
