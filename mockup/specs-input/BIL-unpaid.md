# BIL-unpaid.md — 미납 해소 (unpaid-result)

---

## 화면 1: 미납 해소 완료

# 화면 정보

- **모듈 코드**: BIL
- **화면 이름** (영문 kebab-case): unpaid-result
- **화면 한글명**: 미납 해소 완료
- **출처**: page/BIL/unpaid-result
- **User Flow 내 위치**: CHK-008 step 1

# 컨텍스트

- **UX 단계**: 6 (완료)
- **사용자 상황**: 사용자가 미납 요금을 납부한 직후 서비스 정지 해제 처리 결과를 확인하는 상황
- **사용자 task**: 미납 납부 완료 후 서비스 복구 상태를 확인하고 필요한 단말 조치를 안내받는다
- **가능 케이스**:
  - 정상(즉시 해제): 납부 완료 + 서비스 즉시 복구 → 완료 화면 표시
  - 지연 해제: 납부 완료 + 정지 해제 처리 중 → 처리 지연 안내
  - 단말 조치 필요: 서비스 복구 후 단말 재시작 안내
  - 부분 해제: 일부 회선만 해제 → 미해제 회선 목록 안내
- **정보 위계**:
  1. 납부 완료 상태 (성공/처리중)
  2. 서비스 정지 해제 상태
  3. 단말 조치 안내 (재시작 필요 시)
  4. 추가 안내 링크 (고객센터·납부 이력)
- **톤**: 안심·완료 (성공 시) / 대기·인내 (지연 시)

# 기능 목록

## 기능 1: 납부 완료 및 정지 해제 상태 표시
- **설명**: 미납 납부 완료 결과와 서비스 정지 해제 여부를 상태별로 명확하게 표시
- **사용 컴포넌트 후보**: `ogn/BIL/bill-summary-card`, `atom/banner(tone=warning)`, `ogn/status-bar`, `ogn/header`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-unpaid-result-status
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 1
- **오류 처리 방식**: 영역 숨김 + snack-bar
- **오가니즘 분해**:
  - `ogn/BIL/bill-summary-card`: 납부 완료 요약 — 납부 금액·일시·수납 상태
    서버 제어: `payment_result: {amount, datetime, status}`
  - `atom/banner(tone=warning)`: 정지 해제 지연 배너 — 지연 처리 중일 때 조건부 노출
    서버 제어: `suspension_status: releasing|released|delayed`
- **SB description**:
  ```
  [영역명] 납부 완료 및 정지 해제 상태 표시
  [규칙:FN-CHK-009] 납부 금액·일시·수납 상태를 카드에 표시한다
  [고지:필수|POL-BIL-SUSP-001-07] suspension_status=delayed 인 경우 atom/banner(tone=warning) 로 "서비스 정지 해제 처리가 지연되고 있습니다. 잠시 후 다시 확인해 주세요" 안내를 반드시 표시한다
  [조건:즉시해제] "서비스가 정상 복구되었습니다" 완료 메시지 노출
  [조건:처리중] "처리 중" 스피너 + 지연 안내 배너 노출
  [상태:loading] skeleton 표시
  [상태:error] snack-bar 재시도 안내
  [액션:tap 납부이력] pay-history 화면으로 이동
  ```

## 기능 2: 단말 조치 안내
- **설명**: 서비스 복구 후 단말 재시작 또는 네트워크 재설정 등 필요한 조치를 안내
- **사용 컴포넌트 후보**: `mol/notice-card(tone=info)`, `atom/banner(tone=warning)`
- **우선순위**: P0
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-unpaid-device-action
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0/1
- **노출 우선순위**: 2
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/notice-card(tone=info)`: 단말 조치 안내 카드 — 재시작 방법 등
    서버 제어: `device_action_required: true/false`, `device_action_text`
- **SB description**:
  ```
  [영역명] 단말 조치 안내
  [고지:필수|POL-BIL-SUSP-001-08] device_action_required=true 인 경우 "서비스 복구 후 단말을 재시작해 주세요" 안내 문구를 반드시 노출한다
  [조건:조치불필요] 영역 숨김
  [조건:즉시해제완료] mol/notice-card(tone=info) 로 단말 재시작 안내 노출
  [액션:tap 자세히보기] 단말 조치 방법 안내 페이지로 이동
  ```

## 기능 3: 추가 안내 및 홈 복귀
- **설명**: 고객센터 연결, 납부 이력 확인, 홈 화면 복귀 버튼을 제공
- **사용 컴포넌트 후보**: `atom/button(type=primary)`, `atom/button(type=secondary)`, `mol/list-item-link`
- **우선순위**: P1
- **노출 방식**: static
- **섹션 ID**: section-BIL-unpaid-result-actions
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 1/1
- **노출 우선순위**: 3
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `atom/button(type=primary)`: 홈으로 이동 버튼
    서버 제어: (없음)
  - `mol/list-item-link`: 고객센터 연결 링크
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 추가 안내 및 홈 복귀
  [규칙:FN-CHK-009] 완료 화면 하단에 홈 복귀 버튼과 고객센터 링크를 제공한다
  [액션:tap 홈으로] 앱 홈 화면으로 이동
  [액션:tap 납부이력확인] pay-history 화면으로 이동
  [액션:tap 고객센터] 고객센터 전화 연결 또는 채팅 화면으로 이동
  ```

## 기능 4: 부분 해제 회선 안내
- **설명**: 일부 회선만 정지 해제된 경우 미해제 회선 목록과 이유를 표시
- **사용 컴포넌트 후보**: `mol/list-item-bill-item`, `atom/tag`, `atom/banner(tone=warning)`
- **우선순위**: P1
- **노출 방식**: dynamic
- **섹션 ID**: section-BIL-unpaid-partial-lines
- **영역 종류**: body
- **컨테이너 유형**: vertical
- **노출 개수**: 0/N
- **노출 우선순위**: 4
- **오류 처리 방식**: 영역 숨김
- **오가니즘 분해**:
  - `mol/list-item-bill-item`: 미해제 회선 항목 행
    서버 제어: `partial_lines: [{line_id, reason}]`
  - `atom/tag(tone=warning)`: "해제 대기" 상태 태그
    서버 제어: (없음)
- **SB description**:
  ```
  [영역명] 부분 해제 회선 안내
  [고지:필수|POL-BIL-SUSP-001-07] 미해제 회선이 존재하는 경우 회선별 해제 상태와 사유를 표시한다
  [조건:전체해제] 영역 숨김
  [조건:부분해제] 미해제 회선 목록 + 각 회선별 처리 상태 태그 노출
  [상태:loading] skeleton 표시
  [상태:error] 영역 숨김
  [액션:tap 회선행] 해당 회선 납부·해제 상태 상세 bottom-sheet 노출
  ```
