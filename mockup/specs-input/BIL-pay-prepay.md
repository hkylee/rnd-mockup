# BIL-pay-prepay.md — 선결제 (prepay-select)

---

## 화면 1: 선결제

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): prepay-select
- **화면 한글명**: 선결제
- **출처**: page/BIL/prepay-select
- **User Flow 내 위치**: PAY-007 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 청구일 이전에 미리 요금을 납부(선결제)하려는 상황
- **사용자 task**: 선결제 금액과 납부수단을 선택하고 선결제를 실행한다
- **가능 케이스**:
  - 정상: 선결제 가능 금액 확인 후 납부수단 선택하여 실행
  - 납부수단 검증 실패: 선결제 불가 수단(POL-BIL-PAY-003-08) 안내
  - 청구 차감 안내: 선결제 후 다음 청구서에서 차감됨(POL-BIL-PAY-003-09) 안내
  - 선결제 한도 초과: 한도 초과 안내
  - 납부수단 없음: 납부수단 등록 안내
- **정보 위계**:
  1. 선결제 가능 금액 (현재 사용량 기반 예상액)
  2. 선결제 금액 입력/선택
  3. 납부수단 선택
  4. 청구 차감 안내
- **톤**: 안내·명확 (선결제 개념과 차감 방식 설명)

# 기능 목록

## 기능 1: 선결제 가능 금액 안내
- **설명**: 현재 실시간 사용량을 기반으로 선결제 가능 금액 범위를 표시하고 선결제 개념을 안내한다
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `mol/notice-card(tone=info)`, `atom/tag(label=예상)`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-prepay-amount-info
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 선결제 안내 카드 — 예상 금액·차감 방식 설명
    서버 제어: `prepay_info: {estimated_amount, max_amount, charge_month}`
  - `atom/tag(label=예상)`: 예상 금액 표시 태그
    서버 제어: (없음)
  - `atom/banner(tone=warning)`: 선결제 주의사항 배너
    서버 제어: (항상 표시)
- **SB description**:
  ```
  [영역명] 선결제 가능 금액 안내
  [규칙:FN-PAY-007] 현재 사용량 기반 예상 금액을 선결제 가능 금액으로 표시한다
  [고지:필수|POL-BIL-PAY-003-09] 선결제 금액은 다음 청구서 발행 시 차감됨을 명시한다
  [고지:필수|POL-BIL-PAY-003-08] 선결제에 사용 가능한 납부수단 조건을 안내한다
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  ```

## 기능 2: 선결제 금액 입력
- **설명**: 선결제할 금액을 직접 입력하거나 제안 금액 중 선택한다. 최소/최대 한도 유효성 검증 포함
- **사용 컴포넌트 후보**: `mol/list-item-link`, `atom/txt`, `atom/btn(type=secondary)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-prepay-amount-input
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 유효성 오류 인라인 표시
- **오가니즘 분해**:
  - `mol/list-item-link`: 금액 선택 옵션 행 (예상 전액·부분 선결제)
    서버 제어: `amount_options: [{label, amount}]`
- **SB description**:
  ```
  [영역명] 선결제 금액 입력
  [규칙:FN-PAY-007] 선결제 금액 입력 또는 선택 UI를 제공한다
  [조건:한도초과] 인라인 오류 메시지 표시 — "선결제 가능 한도를 초과했습니다"
  [조건:최소미달] 인라인 오류 메시지 표시 — "최소 선결제 금액 이상을 입력하세요"
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 금액선택] 해당 금액으로 설정
  ```

## 기능 3: 납부수단 선택
- **설명**: 선결제에 사용할 납부수단을 선택한다. 선결제 불가 수단은 비활성 처리
- **사용 컴포넌트 후보**: `mol/list-item-link`, `atom/tag`, `atom/icon`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-prepay-method-select
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N (등록 수단 수)
- **노출 우선순위**: 3
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-link`: 납부수단 행 — 수단명·마스킹번호·사용가능 여부
    서버 제어: `pay_methods: [{id, label, masked_number, is_available_for_prepay}]`
  - `atom/tag`: 선결제 불가 태그 (해당 수단)
    서버 제어: `is_available_for_prepay: false`
- **SB description**:
  ```
  [영역명] 납부수단 선택
  [고지:필수|POL-BIL-PAY-003-08] 선결제 불가 납부수단에 "사용불가" 태그 표시 및 사유 안내
  [상태:loading] skeleton 표시
  [상태:empty] "등록된 납부수단이 없습니다" 안내 + 수단 등록 버튼
  [상태:error] snack-bar 재시도 안내
  [액션:tap 수단선택] 해당 납부수단 선택
  ```

## 기능 4: 선결제 실행 CTA
- **설명**: 선택된 금액·수단으로 선결제를 실행하는 버튼. 금액 또는 수단 미선택 시 비활성
- **사용 컴포넌트 후보**: `atom/btn(type=primary)`, `mol/notice-card(tone=info)`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-prepay-cta
- **영역 종류**: footer
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 버튼 비활성 유지
- **오가니즘 분해**:
  - `atom/btn(type=primary)`: 선결제하기 버튼
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 선결제 실행 CTA
  [조건:금액미입력] 버튼 비활성(disabled) 처리
  [조건:수단미선택] 버튼 비활성(disabled) 처리
  [조건:처리중] 버튼 비활성(loading) 처리
  [액션:tap 선결제하기] 선결제 처리 요청 → 성공 시 pay-complete / 실패 시 pay-fail
  ```
