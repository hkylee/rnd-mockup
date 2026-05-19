# BIL-history.md — 이용 내역 (mobile-pay-history / pay-history / receipt-issue / bill-guide)

---

## 화면 1: 휴대폰 결제 이용내역

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): mobile-pay-history
- **화면 한글명**: 휴대폰 결제 이용내역
- **출처**: page/BIL/mobile-pay-history
- **User Flow 내 위치**: CHK-004 step 1

# 컨텍스트

- **UX 단계**: 2 (탐색)
- **사용자 상황**: 사용자가 휴대폰 결제로 구매한 내역을 날짜·금액 순으로 탐색하려는 상황
- **사용자 task**: 월별 휴대폰 결제 이용 내역을 조회하고 항목별 금액을 확인한다
- **가능 케이스**:
  - 정상: 결제 내역 리스트 노출
  - 에러: 데이터 로드 실패 → snack-bar 재시도
  - 내역 없음: empty 상태 표시
  - 한도 초과 이력: 한도 초과 태그 노출
- **정보 위계**:
  1. 월 선택기
  2. 월 합계 금액
  3. 결제 내역 리스트 (날짜·가맹점·금액)
  4. 항목별 태그 (카테고리 분류)
- **톤**: 정보형·탐색 친화

# 기능 목록

## 기능 1: 결제 내역 리스트
- **설명**: 선택 월의 휴대폰 결제 내역을 날짜 역순으로 표시. 가맹점명·결제금액·카테고리 태그 포함
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `atom/tag`, `mol/month-picker`, `ogn/header`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-mobile-pay-list
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김 + snack-bar
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 결제 내역 행 — 날짜·가맹점·금액
    서버 제어: `pay_items: [{date, merchant, amount, category}]`
  - `atom/tag`: 카테고리 분류 태그 (쇼핑·게임·콘텐츠 등)
    서버 제어: `category_label`
- **SB description**:
  ```
  [영역명] 결제 내역 리스트
  [규칙:FN-CHK-005] 선택 월의 휴대폰 결제 내역을 날짜 역순으로 나열한다
  [조건:내역없음] "결제 내역이 없습니다" empty 안내 노출
  [상태:loading] skeleton 표시
  [상태:empty] 안내 문구 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 내역행] 결제 상세 정보 bottom-sheet 노출
  ```

## 기능 2: 월 합계 및 월 선택기
- **설명**: 조회 기준 월을 선택하고 해당 월 결제 합계 금액을 상단에 표시
- **사용 컴포넌트 후보**: `mol/month-picker`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-mobile-pay-summary
- **영역 종류**: body
- **컨테이너 유형**: horizontal
- **노출 개수**: 1/1
- **노출 우선순위**: 0
- **오류 처리 방식**: 당월로 fallback
- **오가니즘 분해**:
  - `mol/month-picker`: 월 선택 컴포넌트
    서버 제어: `min_month`, `max_month`
- **SB description**:
  ```
  [영역명] 월 합계 및 월 선택기
  [규칙:FN-CHK-005] 선택 월 결제 합계 금액을 월 선택기 하단에 표시한다
  [조건:범위초과] 이전 버튼 비활성화, 안내 문구 표시
  [액션:tap 월이동] 해당 월 결제 내역·합계 갱신
  ```

## 기능 3: 한도 안내 링크
- **설명**: 휴대폰 결제 한도 조회·변경 화면으로 이동하는 링크 제공
- **사용 컴포넌트 후보**: `mol/list-item-link`
- **우선순위**: P2
- **노출 방식**: static
- **섹션 ID**: section-BIL-mobile-pay-limit-link
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 3
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-link`: 한도 설정 이동 링크
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 한도 안내 링크
  [규칙:FN-CHK-005] 휴대폰 결제 한도 변경 화면으로 이동하는 링크를 하단에 제공한다
  [액션:tap 한도변경] mobile-pay-limit 화면으로 이동
  ```

---

## 화면 2: 납부 이력

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): pay-history
- **화면 한글명**: 납부 이력
- **출처**: page/BIL/pay-history
- **User Flow 내 위치**: CHK-007 step 1

# 컨텍스트

- **UX 단계**: 2 (탐색)
- **사용자 상황**: 사용자가 과거 납부 기록을 조회해 납부 여부 및 금액을 확인하려는 상황
- **사용자 task**: 월별 납부 이력 목록을 조회하고 납부 상태를 확인한다
- **가능 케이스**:
  - 정상: 납부 이력 리스트 노출
  - 에러: 데이터 로드 실패 → snack-bar
  - 이력 없음: empty 상태
  - 수납대기 상태: 상태 태그 강조
- **정보 위계**:
  1. 월 선택기
  2. 납부 이력 리스트 (납부일·금액·수단·상태)
  3. 증빙 발급 링크
- **톤**: 정보형·신뢰

# 기능 목록

## 기능 1: 납부 이력 리스트
- **설명**: 선택 월의 납부 이력을 날짜 역순으로 표시. 납부일·금액·납부 수단·상태 태그 포함
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `atom/tag`, `mol/month-picker`, `ogn/header`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-pay-history-list
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김 + snack-bar
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 납부 이력 행 — 날짜·금액·수단·상태
    서버 제어: `history_items: [{date, amount, method, status}]`
  - `atom/tag`: 납부 상태 태그 (수납완료/수납대기/취소)
    서버 제어: `status_label`, `status_tone`
- **SB description**:
  ```
  [영역명] 납부 이력 리스트
  [규칙:FN-CHK-007] 선택 월의 납부 이력을 날짜 역순으로 나열한다
  [조건:수납완료] atom/tag(tone=positive) 표시
  [조건:수납대기] atom/tag(tone=warning) 표시
  [조건:이력없음] "납부 이력이 없습니다" empty 안내 노출
  [상태:loading] skeleton 표시
  [상태:empty] 안내 문구 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 이력행] 납부 상세 bottom-sheet 노출 (영수증 발급 링크 포함)
  ```

## 기능 2: 증빙 발급 링크
- **설명**: 납부 이력에서 증빙 서류(영수증·납부확인서) 발급 화면으로 이동하는 링크 제공
- **사용 컴포넌트 후보**: `mol/list-item-link`
- **우선순위**: P1
- **노출 방식**: static
- **섹션 ID**: section-BIL-receipt-link
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-link`: 증빙 발급 이동 링크
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 증빙 발급 링크
  [규칙:FN-CHK-007] 납부 이력 화면 하단에 증빙 발급 화면으로 이동하는 링크를 제공한다
  [액션:tap 증빙발급] receipt-issue 화면으로 이동
  ```

---

## 화면 3: 증빙 발급

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): receipt-issue
- **화면 한글명**: 증빙 발급
- **출처**: page/BIL/receipt-issue
- **User Flow 내 위치**: CHK-007-03 step 1

# 컨텍스트

- **UX 단계**: 5 (실행)
- **사용자 상황**: 사용자가 납부 이력에서 영수증 또는 납부확인서를 발급받으려는 상황
- **사용자 task**: 증빙 서류 종류를 선택하고 발급 요청을 실행한다
- **가능 케이스**:
  - 정상: 발급 성공 → 문서 뷰어 또는 다운로드
  - 에러: 발급 실패 → 오류 코드 + 재시도 안내
  - 일일 한도 초과: 1일 5회 초과 시 발급 불가 안내
  - 캡처 방지: 화면 캡처 시 보안 정책 적용
- **정보 위계**:
  1. 발급 대상 납부 내역 요약
  2. 증빙 종류 선택 (영수증/납부확인서)
  3. 발급 버튼
  4. 정책 안내 (한도·캡처 방지)
- **톤**: 실행형·신중 (보안 맥락)

# 기능 목록

## 기능 1: 증빙 종류 선택 및 발급
- **설명**: 발급할 증빙 종류를 선택하고 발급 버튼을 통해 요청한다. 1일 5회 한도 정책 적용
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `atom/button(type=primary)`, `mol/notice-card(tone=info)`, `ogn/header`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-receipt-select
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 오류 메시지 inline 표시
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 발급 대상 납부 내역 요약
    서버 제어: `receipt_target: {date, amount, method}`
  - `atom/button(type=primary)`: 발급 실행 버튼
    서버 제어: `issue_enabled: true/false`
- **SB description**:
  ```
  [영역명] 증빙 종류 선택 및 발급
  [규칙:FN-CHK-007] 영수증·납부확인서 중 하나를 선택 후 발급 버튼을 탭하면 발급을 요청한다
  [고지:필수|POL-BIL-DOC-001-08] 1일 5회 발급 한도 초과 시 버튼 비활성화 + "오늘 발급 한도를 초과했습니다" 안내
  [고지:필수|POL-BIL-SEC-001-07] 화면 캡처 방지 정책 적용 — 캡처 시 검은 화면 표시
  [상태:loading] 발급 요청 중 버튼 로딩 스피너 표시
  [상태:error] inline 오류 메시지 표시 + 재시도 버튼
  [액션:tap 발급] 발급 요청 API 호출 → 성공 시 문서 뷰어 노출
  ```

## 기능 2: 발급 정책 안내
- **설명**: 1일 발급 한도, 캡처 방지, 재발행 유의 사항을 안내 카드로 표시
- **사용 컴포넌트 후보**: `mol/notice-card(tone=info)`
- **우선순위**: P1
- **노출 방식**: static
- **섹션 ID**: section-BIL-receipt-notice
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 정책 안내 카드
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 발급 정책 안내
  [고지:필수|POL-BIL-DOC-001-08] "증빙 서류는 1일 최대 5회까지 발급할 수 있습니다" 문구 필수 표시
  [고지:필수|POL-BIL-SEC-001-07] "화면 캡처 및 녹화는 보안 정책에 따라 제한됩니다" 문구 필수 표시
  ```

---

## 화면 4: 요금안내서

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): bill-guide
- **화면 한글명**: 요금안내서
- **출처**: page/BIL/bill-guide
- **User Flow 내 위치**: CHK-005 step 1

# 컨텍스트

- **UX 단계**: 2 (탐색)
- **사용자 상황**: 사용자가 공식 요금안내서 원본을 조회하거나 재발행을 요청하려는 상황
- **사용자 task**: 선택 월의 요금안내서를 열람하거나 재발행을 요청한다
- **가능 케이스**:
  - 정상: 요금안내서 PDF/뷰어 노출
  - 에러: 로드 실패 → 재시도 안내
  - 재발행 요청: 본인인증 후 재발행 처리
  - 발행 이력 없음: empty 상태 + 수신 설정 안내 링크
- **정보 위계**:
  1. 월 선택기
  2. 요금안내서 뷰어 또는 다운로드 버튼
  3. 재발행 요청 버튼 (본인인증 필요)
  4. 수신 방식 설정 링크
- **톤**: 정보형·공식

# 기능 목록

## 기능 1: 요금안내서 조회
- **설명**: 선택 월의 요금안내서를 인앱 뷰어 또는 PDF 다운로드로 제공
- **사용 컴포넌트 후보**: `mol/list-item-link`, `atom/button(type=secondary)`, `mol/month-picker`, `ogn/header`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-bill-guide-view
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김 + snack-bar
- **오가니즘 분해**:
  - `atom/button(type=secondary)`: 요금안내서 열기/다운로드 버튼
    서버 제어: `guide_url`, `guide_available: true/false`
- **SB description**:
  ```
  [영역명] 요금안내서 조회
  [규칙:FN-CHK-006] 선택 월의 요금안내서 파일(PDF)을 인앱 뷰어 또는 다운로드로 제공한다
  [조건:안내서없음] "해당 월의 요금안내서가 없습니다" empty 안내 + 수신 설정 링크
  [상태:loading] skeleton 표시
  [상태:empty] 안내 문구 + notice-setting 이동 링크
  [상태:error] snack-bar 재시도 안내
  [액션:tap 요금안내서열기] 인앱 PDF 뷰어 또는 외부 다운로드
  ```

## 기능 2: 요금안내서 재발행
- **설명**: 요금안내서 재발행을 요청한다. 본인인증 필수이며 처리 후 지정 수신처로 발송
- **사용 컴포넌트 후보**: `atom/button(type=primary)`, `mol/notice-card(tone=info)`
- **우선순위**: P1
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-bill-guide-reissue
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 오류 메시지 inline 표시
- **오가니즘 분해**:
  - `atom/button(type=primary)`: 재발행 요청 버튼
    서버 제어: `reissue_enabled: true/false`
  - `mol/notice-card(tone=info)`: 재발행 본인인증 안내 카드
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 요금안내서 재발행
  [고지:필수|POL-BIL-DOC-001-02] 재발행 요청 전 본인인증 절차를 반드시 수행한다
  [규칙:FN-CHK-006] 본인인증 성공 후 재발행 API를 호출하고 결과를 snack-bar로 안내한다
  [상태:loading] 버튼 로딩 스피너 표시
  [상태:error] inline 오류 메시지 표시
  [액션:tap 재발행요청] 본인인증 플로우 진입 → 인증 성공 후 재발행 요청
  ```

## 기능 3: 수신 설정 안내 링크
- **설명**: 요금안내서 수신 방식(이메일/우편) 설정 화면으로 이동하는 링크 제공
- **사용 컴포넌트 후보**: `mol/list-item-link`
- **우선순위**: P2
- **노출 방식**: static
- **섹션 ID**: section-BIL-bill-guide-setting-link
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 3
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-link`: 수신 설정 이동 링크
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 수신 설정 안내 링크
  [규칙:FN-CHK-006] 요금안내서 수신 방식 변경 화면으로 이동하는 링크를 하단에 제공한다
  [액션:tap 수신방식설정] notice-setting 화면으로 이동
  ```
