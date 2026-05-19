# BIL-bill-check.md — 청구 확인 (bill-main / bill-detail / realtime-usage)

---

## 화면 1: 청구 메인

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): bill-main
- **화면 한글명**: 청구 메인
- **출처**: page/BIL/bill-main
- **User Flow 내 위치**: CHK-001 step 1

# 컨텍스트

- **UX 단계**: 1 (인식)
- **사용자 상황**: 사용자가 이번 달 청구 금액과 납부 기한을 한눈에 확인하려는 상황
- **사용자 task**: 당월 청구액·납부기한·미납여부를 확인하고 다음 행동(납부·상세보기)을 결정한다
- **가능 케이스**:
  - 정상: 청구 요약 카드 정상 노출, 회선 전환 가능
  - 에러: API 오류로 청구 데이터 로드 실패 → 영역 숨김 + snack-bar 재시도 안내
  - 미납: 미납 배너 노출, 납부 CTA 강조
  - 다회선: 회선 선택 탭 노출, 회선별 청구 요약 전환
- **정보 위계**:
  1. 당월 청구 요약 (금액·납부기한·미납상태)
  2. 회선 선택 영역
  3. 청구 항목 목록 (요금제·부가서비스·기기할부 등)
  4. 미납 배너 (해당 시)
- **톤**: 중립·명확 (숫자 정보 우선)

# 기능 목록

## 기능 1: 청구 요약 카드
- **설명**: 당월 청구액, 납부기한, 미납 여부를 카드 형태로 표시. 미납 시 강조 스타일 적용
- **사용 컴포넌트 후보**: `ogn/status-bar`, `ogn/header`, `ogn/BIL/bill-summary-card`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-bill-summary
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `ogn/BIL/bill-summary-card`: 청구 요약 카드 — 당월 청구액·납부기한·미납상태 표시
    서버 제어: (없음)
  - `atom/banner(tone=warning)`: 미납 배너 — 미납 발생 시 조건부 노출
    서버 제어: `show_unpaid_banner: true/false`
- **SB description**:
  ```
  [영역명] 청구 요약 카드
  [규칙:FN-CHK-001] 당월 청구액·납부기한·미납 여부를 카드에 표시한다
  [규칙:FN-COM-001] 회선 식별자(회선번호·명칭)와 함께 표시한다
  [조건:미납] atom/banner(tone=warning) 노출 — 납부 CTA 버튼 포함
  [고지:필수|POL-BIL-SUSP-001] 정지 위험 안내 문구 배너에 포함
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 청구 상세] bill-detail 화면으로 이동
  [액션:tap 납부하기] pay-target 화면으로 이동
  ```

## 기능 2: 회선 선택
- **설명**: 다회선 사용자가 회선을 전환해 각 회선의 청구 요약을 조회한다
- **사용 컴포넌트 후보**: `ogn/BIL/line-selector`
- **우선순위**: P1
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-line-selector
- **영역 종류**: body
- **컨테이너 유형**: horizontal-scroll
- **노출 개수**: N/N (회선 수)
- **노출 우선순위**: 0 (최상단)
- **오류 처리 방식**: 기본 회선 고정 노출
- **오가니즘 분해**:
  - `ogn/BIL/line-selector`: 회선 선택 탭 — 회선별 청구 요약 전환
    서버 제어: `lines: [{id, label, is_default}]`
- **SB description**:
  ```
  [영역명] 회선 선택
  [규칙:FN-COM-001] 보유 회선 목록을 탭 형태로 나열한다
  [조건:단일회선] 회선 선택 영역 숨김
  [조건:다회선] 기본 회선 선택 상태로 진입, 탭 전환 시 청구 요약 카드 갱신
  [상태:loading] skeleton 표시
  [상태:error] 영역 숨김, 기본 회선 데이터로 fallback
  [액션:tap 회선탭] 해당 회선의 청구 요약 카드·항목 목록 갱신
  ```

## 기능 3: 청구 항목 목록
- **설명**: 요금제·부가서비스·기기할부 등 청구 구성 항목을 리스트로 표시
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `mol/list-item-link`, `ogn/tab-bar`
- **우선순위**: P1
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-bill-items
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 청구 항목 행 — 항목명·금액 표시
    서버 제어: `items: [{name, amount, type}]`
  - `mol/list-item-link`: 상세보기 링크 행
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 청구 항목 목록
  [규칙:FN-CHK-001] 요금제·부가서비스·기기할부·콘텐츠이용료 항목을 분류별로 노출한다
  [규칙:FN-CHK-010] 항목별 소계와 합계가 일치해야 한다
  [조건:항목없음] "청구 항목이 없습니다" empty 상태 표시
  [상태:loading] skeleton 표시
  [상태:empty] 안내 문구 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 항목행] 해당 항목 상세로 이동 또는 expand
  [액션:tap 청구 상세보기] bill-detail 화면으로 이동
  ```

---

## 화면 2: 청구 상세

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): bill-detail
- **화면 한글명**: 청구 상세
- **출처**: page/BIL/bill-detail
- **User Flow 내 위치**: CHK-002 step 1

# 컨텍스트

- **UX 단계**: 3 (비교)
- **사용자 상황**: 사용자가 이번 달 청구의 세부 항목을 확인하고 전월과 비교하려는 상황
- **사용자 task**: 월별 청구 상세 내역을 확인하고 항목별 요금을 비교한다
- **가능 케이스**:
  - 정상: 당월 상세 내역 노출, 월 선택기로 과거 조회 가능
  - 에러: 데이터 로드 실패 → snack-bar 재시도
  - 조회 범위 초과: 최대 조회 가능 개월 초과 시 안내 문구
  - 항목 없음: empty 상태 표시
- **정보 위계**:
  1. 월 선택기 (기준 월)
  2. 청구 합계 및 납부 상태
  3. 항목별 상세 내역 (분류 → 항목 → 금액)
  4. 할인 적용 내역
  5. 안내 공지 (info)
- **톤**: 정보형·명료 (숫자·날짜 정밀도 강조)

# 기능 목록

## 기능 1: 월 선택기
- **설명**: 사용자가 조회할 기준 월을 선택한다. 과거 최대 12개월까지 선택 가능
- **사용 컴포넌트 후보**: `mol/month-picker`, `ogn/header`
- **우선순위**: P0
- **노출 방식**: static
- **섹션 ID**: section-BIL-month-picker
- **영역 종류**: body
- **컨테이너 유형**: horizontal
- **노출 개수**: 1/1
- **노출 우선순위**: 0
- **오류 처리 방식**: 당월로 fallback
- **오가니즘 분해**:
  - `mol/month-picker`: 월 선택 컴포넌트 — 이전/다음 월 이동 및 직접 선택
    서버 제어: `min_month`, `max_month`
- **SB description**:
  ```
  [영역명] 월 선택기
  [규칙:FN-CHK-002] 최근 12개월 범위 내에서 월 선택이 가능하다
  [조건:최대범위초과] 이전 버튼 비활성화, "조회 가능 범위를 초과했습니다" 안내
  [조건:당월] 다음 버튼 비활성화
  [액션:tap 이전월] 이전 월 데이터 로드
  [액션:tap 다음월] 다음 월 데이터 로드
  [액션:tap 월선택드롭다운] 월 선택 모달 노출
  ```

## 기능 2: 청구 상세 내역
- **설명**: 선택한 월의 항목별 상세 청구 내역을 분류 순으로 표시
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `mol/list-item-link`, `mol/notice-card(tone=info)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-bill-detail-items
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김 + snack-bar
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 청구 상세 항목 행 — 항목명·금액·할인여부
    서버 제어: `detail_items: [{category, name, amount, discount}]`
  - `mol/notice-card(tone=info)`: 안내 공지 카드 — 청구 관련 고지 사항
    서버 제어: `notice_text`
- **SB description**:
  ```
  [영역명] 청구 상세 내역
  [규칙:FN-CHK-002] 요금제·부가서비스·기기할부·콘텐츠이용료를 분류별로 노출한다
  [규칙:FN-CHK-003] 할인 항목은 별도 행으로 표시하며 금액 앞에 '-' 부호를 붙인다
  [규칙:FN-COM-007] 항목 합계와 청구 총액이 일치하는지 클라이언트에서 검증한다
  [조건:항목없음] "상세 내역이 없습니다" empty 안내
  [상태:loading] skeleton 표시
  [상태:empty] 안내 문구 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 항목행] 항목 상세 설명 bottom-sheet 노출
  [액션:tap 요금안내서] bill-guide 화면으로 이동
  ```

## 기능 3: 고지 공지
- **설명**: 청구 관련 공지사항(부가세 포함 안내, 조정 금액 등)을 info 카드로 표시
- **사용 컴포넌트 후보**: `mol/notice-card(tone=info)`
- **우선순위**: P2
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-bill-notice
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0/N
- **노출 우선순위**: 3
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 공지 카드 — 서버에서 전달하는 안내 문구
    서버 제어: `notices: [{text, link?}]`
- **SB description**:
  ```
  [영역명] 고지 공지
  [규칙:FN-CHK-002] 서버가 전달하는 공지 항목만 조건부 노출한다
  [조건:공지없음] 영역 숨김
  [상태:error] 영역 숨김 (공지 오류는 UX에 영향 없음)
  [액션:tap 자세히보기] 공지 링크 페이지로 이동
  ```

---

## 화면 3: 실시간 예상 요금

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): realtime-usage
- **화면 한글명**: 실시간 예상 요금
- **출처**: page/BIL/realtime-usage
- **User Flow 내 위치**: CHK-003 step 1

# 컨텍스트

- **UX 단계**: 1 (인식)
- **사용자 상황**: 사용자가 현재까지의 사용량을 바탕으로 이번 달 예상 요금을 파악하려는 상황
- **사용자 task**: 실시간 누적 사용량과 예상 청구액을 확인한다
- **가능 케이스**:
  - 정상: 예상 요금 카드 + 사용량 내역 노출
  - 에러: 실시간 데이터 조회 실패 → snack-bar 재시도
  - 데이터 갱신 중: 로딩 스켈레톤 표시
  - 경고: 사용량 임박 시 warning 배너 노출
- **정보 위계**:
  1. 예상 요금 총액 ("예상" 라벨 필수)
  2. 사용량 항목별 현황 (데이터·음성·SMS)
  3. 경고 배너 (임박 시)
  4. 안내 공지
- **톤**: 인식·경각 (예상치임을 명확히 표기)

# 기능 목록

## 기능 1: 예상 요금 카드
- **설명**: 현재까지 누적 사용량 기반 이번 달 예상 청구액을 표시. "예상" 라벨 필수 부착
- **사용 컴포넌트 후보**: `ogn/BIL/bill-summary-card`, `atom/tag(label=예상)`, `ogn/status-bar`, `ogn/header`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-realtime-summary
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `ogn/BIL/bill-summary-card`: 예상 요금 카드 — 예상 청구액 + "예상" 태그
    서버 제어: `estimated_amount`, `as_of_datetime`
  - `atom/tag(label=예상)`: 예상 라벨 태그 — 카드 상단에 필수 부착
    서버 제어: (없음, 항상 노출)
- **SB description**:
  ```
  [영역명] 예상 요금 카드
  [규칙:FN-CHK-004] 실시간 사용 데이터를 집계하여 예상 청구액을 표시한다
  [고지:필수|POL-BIL-CHG-001-07] atom/tag(label=예상) 을 금액 옆에 반드시 표시한다 — 확정 금액과 혼동 방지
  [조건:갱신중] skeleton 표시
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 새로고침] 실시간 데이터 재조회
  ```

## 기능 2: 사용량 항목 현황
- **설명**: 데이터·음성·SMS 등 사용량 항목별 현재까지 사용량과 잔여량을 바 그래프 또는 리스트로 표시
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `atom/banner(tone=warning)`, `mol/notice-card`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-usage-breakdown
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: N/N
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 사용량 항목 행 — 항목명·사용량·잔여량
    서버 제어: `usage_items: [{type, used, total, unit}]`
  - `atom/banner(tone=warning)`: 사용량 임박 경고 배너
    서버 제어: `show_usage_warning: true/false`
- **SB description**:
  ```
  [영역명] 사용량 항목 현황
  [규칙:FN-CHK-004] 데이터·음성·SMS 항목별 사용량을 노출한다
  [고지:필수|POL-BIL-CHG-001-07] 각 항목 수치가 예상치임을 "(예상)" 텍스트로 병기한다
  [조건:사용량임박] atom/banner(tone=warning) 노출 — "데이터 소진 임박" 경고
  [조건:항목없음] 해당 항목 행 숨김
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 항목행] 해당 사용량 상세 bottom-sheet 노출
  ```

## 기능 3: 실시간 안내 공지
- **설명**: 예상 요금 산정 기준, 갱신 주기 등 이용자 고지 사항을 공지 카드로 표시
- **사용 컴포넌트 후보**: `mol/notice-card`
- **우선순위**: P1
- **노출 방식**: static
- **섹션 ID**: section-BIL-realtime-notice
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 3
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card`: 안내 카드 — "예상 요금은 실제 청구 금액과 다를 수 있습니다"
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 실시간 안내 공지
  [고지:필수|POL-BIL-CHG-001-07] "예상 요금은 실제 청구 금액과 다를 수 있습니다" 문구를 항상 표시한다
  [규칙:FN-CHK-004] 데이터 갱신 시각(HH:MM 기준)을 공지 카드에 함께 표시한다
  [상태:error] 영역 숨김 (공지 카드 로드 실패 시 UX 영향 없음)
  ```
