# 청구 관리 및 요금 수납 정책서 분석

> ⚠️ **추론 표시**: 컴포넌트 / 화면 / UI 동작은 정책서에 직접 명시되지 않음 — AI 추론 결과. 사용자 검토 필수.

---

## 0. 정책서 메타

- **정책서 ID**: POL-BIL
- **버전**: Full v0.18
- **모듈**: BIL (신규 모듈 — 카탈로그 미존재, 신설 필요)
- **작성일**: 2026-05-04
- **Use Case 수**: 22 (US-BIL-CHK-001~008, US-BIL-PAY-001~008, US-BIL-SET-001~006 / FO 대상 22개. BO 운영자 UC 4개 + 시스템 UC 7개 제외)
- **FO Use Case 수**: 22 (CHK 8개 + PAY 8개 + SET 6개)
- **Process step 수**: 78 (FO UC 22개 × 평균 3 step)
- **Function 수**: 43 (FN-BIL-CHK-001~010, FN-BIL-COM-001~008, FN-BIL-PAY-001~011, FN-BIL-SET-001~008, FN-BIL-OP-001~006)
- **Policy Group 수**: 22 (PG-BIL-*)
- **Policy item 수**: 220+ (각 PG 당 10개 항목 기준)
- **대상 채널**: 앱·웹 FO (고객 셀프 처리)

---

## 1. Use Case → 화면 후보 도출

### UC-BIL-CHK-001 청구 요약 확인

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-001-01 청구 상태 진입 및 대상 회선 확인 | `page/BIL/bill-main` | 화면 (메인/요약) | FN-COM-001 (회선 권한 조회) → 회선 선택 + 청구 요약 진입점. CHK-001 전체 컨텍스트 화면 |
| PR-BIL-CHK-001-02 청구 요약 및 납부 필요 여부 확인 | `page/BIL/bill-main` | 동일 화면 (스크롤 or 탭 구역) | FN-CHK-001 (청구 요약 조회) → 당월 청구액·납부기한·자동납부 예정·미납완납 표시 |
| PR-BIL-CHK-001-03 다음 행동 분기 | `page/BIL/bill-main` | 동일 화면 CTA 영역 | FN-CHK-010 (후속 경로 추천) → 납부/상세/이력 이동 버튼 제시 |

### UC-BIL-CHK-002 청구 상세 및 변동 사유 확인

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-002-01 청구 항목 상세 조회 | `page/BIL/bill-detail` | 화면 (조회 상세) | FN-CHK-002 (청구 항목 상세 조회) → 기본료·부가서비스·단말할부·할인·세금 등 항목별 금액 목록 |
| PR-BIL-CHK-002-02 청구 변동 사유 확인 | `page/BIL/bill-detail` | 동일 화면 하단 영역 또는 BottomSheet | FN-CHK-003 (청구 변동 사유 산출) → 전월 대비 증감 사유 텍스트 |
| PR-BIL-CHK-002-03 이의·문의 후속 연결 | `page/BIL/bill-detail` | 동일 화면 내 링크 or BottomSheet | FN-COM-006 (고객 안내·알림) → 상담 연결 CTA |

### UC-BIL-CHK-003 실시간·예상 이용요금 확인

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-003-01 실시간 이용요금 조회 | `page/BIL/realtime-usage` | 화면 (조회) | FN-CHK-004 (실시간·예상 요금 산출) → 확정 전 금액, "예상" 라벨 필수 |
| PR-BIL-CHK-003-02 예상 청구 금액 확인 | `page/BIL/realtime-usage` | 동일 화면 (탭 or 섹션 분리) | PG-BIL-CHG-001-07 "확정 청구액처럼 표시 금지" → 예상/실시간 구분 표시 |
| PR-BIL-CHK-003-03 선제 조치 연결 | `page/BIL/realtime-usage` | 동일 화면 하단 CTA | FN-CHK-010 → 한도 변경·선결제 이동 버튼 |

### UC-BIL-CHK-004 휴대폰 결제·콘텐츠 이용료 이용내역 확인

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-004-01 이용내역 조회 | `page/BIL/mobile-pay-history` | 화면 (목록) | FN-CHK-005 (휴대폰결제·콘텐츠 이용내역 조회) → 이용일시·가맹점·금액·청구반영여부 목록 |
| PR-BIL-CHK-004-02 선결제 가능 여부 확인 | `page/BIL/mobile-pay-history` | 동일 화면 항목별 뱃지 or BottomSheet | PG-BIL-MOB-001 → 선결제 가능 항목 구분 표시 |
| PR-BIL-CHK-004-03 차단·한도 변경 연결 | `page/BIL/mobile-pay-history` | 동일 화면 상단 배너 or CTA | FN-CHK-010 → 한도 변경 이동 링크 |

### UC-BIL-CHK-005 요금안내서 조회 및 재발행

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-005-01 요금안내서 조회 | `page/BIL/bill-guide` | 화면 (조회) | FN-CHK-006 (요금안내서 조회·재발행) → 청구월 선택 + 안내서 뷰어 |
| PR-BIL-CHK-005-02 요금안내서 재발행 요청 | `page/BIL/bill-guide` | BottomSheet (재발행 수신처 입력) | POL-BIL-DOC-001-02~03 → 본인인증 또는 수신처 인증 필요 |
| PR-BIL-CHK-005-03 재발행 결과 확인 | `page/BIL/bill-guide` | Toast 또는 인라인 메시지 | FN-COM-006 → 발급 결과 안내 |

### UC-BIL-CHK-006 납부 대상 선택

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-006-01 납부 가능 대상 조회 | `page/BIL/pay-target` | 화면 (선택) | FN-PAY-001 (납부 대상·금액 확정) → 납부 가능 항목 체크리스트 |
| PR-BIL-CHK-006-02 납부 대상 및 금액 확정 | `page/BIL/pay-target` | 동일 화면 하단 금액 확인 영역 | POL-BIL-PAY-001 → 부분납부·전체납부·선납 선택 |
| PR-BIL-CHK-006-03 납부 실행 연결 | `page/BIL/pay-target` | 동일 화면 CTA (sticky footer) | FN-COM-003 → 납부수단 선택 화면 이동 |

### UC-BIL-CHK-007 납부 이력 및 증빙 확인

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-007-01 납부 이력 조회 | `page/BIL/pay-history` | 화면 (목록) | FN-CHK-007 (납부 이력·수납 상태 조회) → 납부일시·금액·수단·승인번호 목록 |
| PR-BIL-CHK-007-02 증빙 발급 가능 여부 확인 | `page/BIL/pay-history` | 동일 화면 항목별 뱃지 | POL-BIL-DOC-001 → 납부내역서·영수증·현금영수증·세금계산서 발급 가능 표시 |
| PR-BIL-CHK-007-03 증빙 재발행 요청 | `page/BIL/receipt-issue` | BottomSheet (발급 유형·수신처 선택) | POL-BIL-DOC-001-08 → 1일 5회 제한, 수신처 인증 |

### UC-BIL-CHK-008 미납 해소 및 후속 상태 확인

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-CHK-008-01 미납 해소 상태 조회 | `page/BIL/unpaid-result` | 화면 (결과/완료) | FN-CHK-009 (미납·정지 해제 상태 조회) → 미납 해소 여부 + 잔여 금액 |
| PR-BIL-CHK-008-02 정지 해제 연계 상태 확인 | `page/BIL/unpaid-result` | 동일 화면 + 처리중 배너 | POL-BIL-SUSP-001 → 정지 해제 처리중 안내 |
| PR-BIL-CHK-008-03 추가 조치 안내 | `page/BIL/unpaid-result` | 동일 화면 하단 CTA | FN-CHK-010 → 상담 연결 or 재납부 안내 |

### UC-BIL-PAY-001 납부수단 선택 및 인증

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-001-01 납부수단 선택 | `page/BIL/pay-method-select` | 화면 (선택) | FN-PAY-002 (납부수단 선택·유효성 검증) → 카드·계좌·간편결제·가상계좌 목록 |
| PR-BIL-PAY-001-02 납부수단 인증·동의 | `page/BIL/pay-method-select` | BottomSheet (인증) | FN-PAY-003 (납부수단 인증·명의자 동의) → 본인인증 or 명의자 동의 |
| PR-BIL-PAY-001-03 납부 가능 최종 확인 | `page/BIL/pay-confirm` | 화면 (확인) | PG-BIL-PAY-002 (납부 가능 여부 판정) → 납부 금액·수단·제한 사유 최종 확인 |

### UC-BIL-PAY-002 즉시 납부 실행

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-002-01 즉시 납부 요청 | `page/BIL/pay-confirm` | 화면 (실행 확인) | FN-PAY-004 (즉시 납부 요청·승인 처리) → 납부 실행 버튼 + 금액 최종 확인 |
| PR-BIL-PAY-002-02 납부 결과 수신 | `page/BIL/pay-processing` | 화면 (처리중) 또는 Toast | FN-PAY-008 (납부 결과 수신·수납 반영) → 처리중 상태 or 결과 즉시 반환 |
| PR-BIL-PAY-002-03 수납 반영 및 완료 확인 | `page/BIL/pay-complete` | 화면 (완료) | FN-PAY-011 (납부 결과 고객 확인) → 완료·대기·실패 분기 결과 화면 |

### UC-BIL-PAY-003 납부 예약 및 선납 실행

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-003-01 예약·선납 가능 여부 확인 | `page/BIL/pay-reserve` | 화면 (선택/입력) | FN-PAY-005 (예약·선납 요청 관리) → 예약 가능일·금액 표시 |
| PR-BIL-PAY-003-02 예약·선납 요청 접수 | `page/BIL/pay-reserve` | 동일 화면 날짜 선택 | POL-BIL-PAY-003 → 예약일 선택 + 수단 선택 |
| PR-BIL-PAY-003-03 예약 실행 결과 확인 | `page/BIL/pay-reserve-complete` | 화면 (완료) | POL-BIL-PAY-003-10 → 예약 성공/실패 결과 + 취소 방법 안내 |

### UC-BIL-PAY-004 대리 납부 권한 확인

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-004-01 대리 납부 대상 확인 | `page/BIL/proxy-pay-check` | 화면 또는 BottomSheet | FN-PAY-006 (대리 납부 권한·대상 관리) → 대상 회선·관계 확인 |
| PR-BIL-PAY-004-02 권한 및 인증 범위 판정 | `page/BIL/proxy-pay-check` | 동일 화면 인증 단계 | POL-BIL-AGT-001 → 가족·법정대리·위임 관계별 인증 기준 |
| PR-BIL-PAY-004-03 대리 납부 가능 결과 안내 | `page/BIL/proxy-pay-check` | 동일 화면 결과 or Toast | POL-BIL-AGT-001-10 → 제한 사유 안내 |

### UC-BIL-PAY-005 대리 납부 실행

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-005-01 대리 납부 대상 금액 확정 | `page/BIL/proxy-pay-confirm` | 화면 (확인) | FN-PAY-006 → 대상 회선·금액 확정 |
| PR-BIL-PAY-005-02 대리 납부 요청 | `page/BIL/proxy-pay-confirm` | 동일 화면 CTA | FN-PAY-004 → 납부 실행 |
| PR-BIL-PAY-005-03 대리 납부 결과 분리 기록 | `page/BIL/pay-complete` | 화면 (완료) 공유 | POL-BIL-AGT-001-09 → 청구 확인자·납부 실행자·명의자 분리 기록 표시 |

### UC-BIL-PAY-006 타인 명의 납부수단 사용 동의

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-006-01 타인 명의 여부 확인 | `page/BIL/pay-method-select` | 동일 화면 인라인 안내 | FN-PAY-002 → 명의 불일치 감지 |
| PR-BIL-PAY-006-02 납부수단 명의자 동의 요청 | `page/BIL/third-party-consent` | 화면 (동의) 또는 BottomSheet | FN-PAY-003 → 명의자 본인인증 + 동의 |
| PR-BIL-PAY-006-03 동의 결과 반영 | `page/BIL/pay-method-select` | Toast 또는 동의 뱃지 | POL-BIL-AGT-001-06 → 유효시간 24시간 표시 |

### UC-BIL-PAY-007 휴대폰 결제·콘텐츠 이용료 선결제

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-007-01 선결제 대상 조회 | `page/BIL/prepay-select` | 화면 (목록/선택) | FN-PAY-007 (선결제 대상·승인 처리) → 선결제 가능 항목 체크리스트 |
| PR-BIL-PAY-007-02 선결제 요청 및 승인 | `page/BIL/prepay-select` | 동일 화면 확인 → 처리 | POL-BIL-PAY-003-08 → 납부수단 검증·금액 확정·중복 확인 |
| PR-BIL-PAY-007-03 선결제 결과 및 청구 차감 확인 | `page/BIL/pay-complete` | 화면 (완료) 공유 | POL-BIL-PAY-003-09 → 청구 차감 반영 안내 |

### UC-BIL-PAY-008 납부 실패 및 중복 납부 후속 요청

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-PAY-008-01 실패·대기·중복 상태 확인 | `page/BIL/pay-fail` | 화면 (결과) | FN-PAY-009 (납부 실패·재시도 처리) → 실패 사유·재시도 가능 여부 표시 |
| PR-BIL-PAY-008-02 재시도·대체 납부 연결 | `page/BIL/pay-fail` | 동일 화면 CTA | POL-BIL-EXC-001-02~03 → 대체 수단 안내 |
| PR-BIL-PAY-008-03 환불·상계 후속 요청 | `page/BIL/pay-fail` | BottomSheet (환불 요청) | FN-PAY-010 (환불·상계 후속 요청) → 환불 계좌 입력·접수 |

### UC-BIL-SET-001 요금안내서 수신 설정 변경

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-SET-001-01 현재 수신 설정 조회 | `page/BIL/notice-setting` | 화면 (설정) | FN-SET-001 (요금안내서 수신 설정 관리) → 현재 수신 방식 표시 |
| PR-BIL-SET-001-02 수신 설정 변경 요청 | `page/BIL/notice-setting` | 동일 화면 라디오/셀렉트 | POL-BIL-SET-001-01~02 → 앱알림·문자·이메일·우편 선택 + 수신처 인증 |
| PR-BIL-SET-001-03 변경 결과 및 적용 시점 안내 | `page/BIL/notice-setting` | Toast 또는 인라인 메시지 | POL-BIL-SET-001-08 → 적용 예정일 표시 |

### UC-BIL-SET-002 납부방법 신청·변경

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-SET-002-01 현재 납부방법 조회 | `page/BIL/autopay-setting` | 화면 (설정) | FN-SET-002 (납부방법 조회) → 등록 카드·계좌 목록 |
| PR-BIL-SET-002-02 납부방법 신청·변경 요청 | `page/BIL/autopay-setting` | BottomSheet 또는 단계 화면 | POL-BIL-SET-001-04~05 → 유효 납부수단 검증 + 당월 적용 여부 |
| PR-BIL-SET-002-03 적용 시점 및 당월 납부 안내 | `page/BIL/autopay-setting` | 동일 화면 안내 텍스트 | POL-BIL-SET-001-08~09 → 청구 확정 전/후 적용 시점 구분 |

### UC-BIL-SET-003 납부방법 해지

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-SET-003-01 해지 가능 여부 확인 | `page/BIL/autopay-setting` | BottomSheet (해지 확인) | POL-BIL-SET-001-06 → 미납·예약·수납대기 영향 안내 |
| PR-BIL-SET-003-02 납부방법 해지 요청 | `page/BIL/autopay-setting` | 동일 BottomSheet 확인 버튼 | FN-SET-004 (납부방법 해지) → 해지 처리 |
| PR-BIL-SET-003-03 대체 납부 방법 안내 | `page/BIL/autopay-setting` | 동일 화면 안내 배너 | FN-COM-006 → 해지 후 대체 납부수단 안내 |

### UC-BIL-SET-004 휴대폰 결제 이용한도 변경

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-SET-004-01 휴대폰 결제 한도 조회 | `page/BIL/mobile-pay-limit` | 화면 (설정) | FN-SET-005 (휴대폰 결제 한도 설정) → 현재 한도·최대 한도 표시 |
| PR-BIL-SET-004-02 한도 변경·차단·복구 요청 | `page/BIL/mobile-pay-limit` | 동일 화면 슬라이더 or 입력 | POL-BIL-MOB-001-03~09 → 본인인증 후 한도 변경 |
| PR-BIL-SET-004-03 한도 반영 결과 안내 | `page/BIL/mobile-pay-limit` | Toast | POL-BIL-MOB-001-05 → 하향/차단 즉시 적용, 상향 심사 후 적용 |

### UC-BIL-SET-005 콘텐츠 이용료 이용한도 변경

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-SET-005-01 콘텐츠 이용료 한도 조회 | `page/BIL/content-pay-limit` | 화면 (설정) | FN-SET-006 (콘텐츠 이용료 한도 설정) → 현재 한도 표시 |
| PR-BIL-SET-005-02 한도 변경·차단·복구 요청 | `page/BIL/content-pay-limit` | 동일 화면 입력 | POL-BIL-MOB-001 (공유) → 인증 + 한도 변경 |
| PR-BIL-SET-005-03 한도 반영 결과 안내 | `page/BIL/content-pay-limit` | Toast | POL-BIL-MOB-001-05 동일 적용 |

### UC-BIL-SET-006 자동 선결제 설정 관리

| PR step | 화면 후보 | UI 종류 | 추론 근거 |
|---|---|---|---|
| PR-BIL-SET-006-01 자동 선결제 설정 조회 | `page/BIL/auto-prepay-setting` | 화면 (설정) | FN-SET-007 (자동 선결제 설정 관리) → 현재 설정 상태·납부수단·실행일 |
| PR-BIL-SET-006-02 자동 선결제 신청·변경 | `page/BIL/auto-prepay-setting` | 동일 화면 또는 단계 BottomSheet | POL-BIL-AUTO-001-01~05 → 정상 회선·납부수단 등록·본인인증 조건 |
| PR-BIL-SET-006-03 자동 선결제 해지 및 결과 안내 | `page/BIL/auto-prepay-setting` | BottomSheet (해지 확인) + Toast | POL-BIL-AUTO-001-06~08 → 해지 즉시 접수 + 결과 안내 |

### ⚠️ 화면 추정 의문사항

- `pay-processing` 화면이 별도 화면인지 pay-complete에 흡수되는지 — 결제 승인 속도에 따라 다름. 사용자 확인 필요
- `proxy-pay-check` (대리 납부 권한 확인)이 독립 화면인지 pay-target에 통합되는지 — 사용자 확인 필요
- `third-party-consent`(타인 명의 동의)가 독립 화면인지 BottomSheet인지 — 동의 내용 길이에 따라 결정 필요
- 설정 화면들 (SET-001~006)이 독립 화면인지 단일 설정 허브 화면의 섹션인지 — 사용자 확인 필요

---

## 1.5 동선 도출 (USER_FLOW)

### UC-BIL-CHK-001~002 청구 확인 동선

- **진입 트리거**: 홈 또는 GNB에서 "청구/납부" 탭 선택
- **진입점**: `page/BIL/bill-main`
- **출구 (성공)**: 납부 화면 이동 or 요금 확인 완료 후 이탈
- **출구 (이탈/차단)**: 권한 없음 → 본인인증 or 상담 연결
- **UX 단계**: 주 1(인식) / 부가 2(탐색), 3(비교)

#### 화면 시퀀스

| Step | screen-id | 화면 한글 | 사용자 task | UX 단계 | 다음 (정상) |
|---|---|---|---|---|---|
| 1 | `bill-main` | 청구 요약 | 당월 청구액·납부기한·미납 상태 확인 | 1 인식 | `bill-detail` or `pay-target` |
| 2 | `bill-detail` | 청구 상세 | 항목별 금액·변동 사유 확인 | 3 비교 | `pay-target` or 이탈 |
| 2a | `realtime-usage` | 실시간 요금 | 확정 전 이용요금 확인 | 1 인식 | 이탈 or `mobile-pay-limit` |

#### 분기 케이스

| 조건 | 발생 화면 | 분기 형태 | 분기 화면/시트 | 처리 후 복귀 |
|---|---|---|---|---|
| 가족·위임 회선 조회 | `bill-main` | 회선 선택 BottomSheet | 회선 목록 시트 | bill-main (선택 회선 기준) |
| 청구 미확정 | `bill-main` | 배너 안내 | 실시간 요금 안내 배너 | 동일 화면 |
| 조회 권한 없음 | `bill-main` | 차단 화면 | 본인인증 or 상담 | - |

---

### UC-BIL-PAY-001~002 즉시 납부 동선

- **진입 트리거**: bill-main 또는 pay-target에서 "납부하기" CTA
- **진입점**: `page/BIL/pay-target`
- **출구 (성공)**: `page/BIL/pay-complete`
- **출구 (실패)**: `page/BIL/pay-fail`
- **UX 단계**: 주 5(실행)

#### 화면 시퀀스

| Step | screen-id | 화면 한글 | 사용자 task | UX 단계 | 다음 (정상) |
|---|---|---|---|---|---|
| 1 | `pay-target` | 납부 대상 선택 | 납부 항목·금액 선택 확정 | 4 결정 | `pay-method-select` |
| 2 | `pay-method-select` | 납부수단 선택 | 카드/계좌/간편결제 선택 + 인증 | 5 실행 | `pay-confirm` |
| 3 | `pay-confirm` | 납부 확인 | 최종 금액·수단 확인 후 실행 | 5 실행 | `pay-complete` |
| 4 | `pay-complete` | 납부 완료 | 결과 확인 + 영수증/이력 이동 | 6 확인 | `pay-history` or 이탈 |

#### 분기 케이스

| 조건 | 발생 화면 | 분기 형태 | 분기 화면/시트 | 처리 후 복귀 |
|---|---|---|---|---|
| 납부 불가 시간 | `pay-target` | 배너/Toast | 제한 사유 + 예상 가능 시간 | - |
| 수납대기 중 | `pay-target` | 차단 배너 | 기존 요청 결과 확인 안내 | - |
| 타인 명의 카드 선택 | `pay-method-select` | BottomSheet | `third-party-consent` | pay-method-select |
| 결제 승인 실패 | `pay-confirm` 이후 | `pay-fail` 화면 | 실패 사유 + 재시도 | pay-method-select |
| 수납 반영 지연 | `pay-complete` | 처리중 배너 | 수납대기 안내 + 중복납부 주의 | - |

---

### UC-BIL-SET-001~006 설정 관리 동선

- **진입 트리거**: 마이페이지 또는 청구 화면에서 "납부설정" 진입
- **진입점**: 각 설정 화면 직접
- **출구 (성공)**: 설정 화면 (변경 완료 Toast)
- **UX 단계**: 주 5(실행) — 설정 변경

#### 분기 케이스

| 조건 | 발생 화면 | 분기 형태 | 분기 화면/시트 | 처리 후 복귀 |
|---|---|---|---|---|
| 자동납부 해지 | `autopay-setting` | 확인 BottomSheet | 해지 영향 안내 (미납 위험) | autopay-setting |
| 한도 상향 심사 중 | `mobile-pay-limit` | 처리중 배너 | 심사 결과 대기 안내 | - |
| 설정 변경 연계 실패 | 각 설정 화면 | 에러 Toast | 재시도 or 상담 | - |

---

## 1.6 FN 출력값 → 완료·처리 화면 데이터 매핑

| FN ID | 출력 정보 (정책서 원문) | 완료 화면 | 표시할 데이터 | 비고 |
|---|---|---|---|---|
| FN-BIL-PAY-004 (즉시 납부) | 납부 요청 ID, 승인 결과, 수납 상태, 납부 후 잔액, 실패 사유 | `pay-complete` | 승인번호, 납부 금액, 납부 일시, 잔여 미납액 | 수납완료 시 영수증 발급 CTA |
| FN-BIL-PAY-009 (납부 실패) | 실패 사유, 재시도 가능 여부, 대체 수단 목록 | `pay-fail` | 실패 사유 코드 → 고객 문구 변환, 대체 수단 목록 | POL-BIL-EXC-001-01 사유 분류 |
| FN-BIL-CHK-009 (미납·정지 해제) | 미납 해소 여부, 정지 해제 상태, 후속 처리 결과 | `unpaid-result` | 미납 해소 완료 or 잔여 미납액, 정지 해제 처리중/완료 | POL-BIL-SUSP-001-07~08 |
| FN-BIL-CHK-006 (요금안내서) | 재발행 결과, 수신처, 발급 시각 | `bill-guide` (인라인) | 발급 완료 수신처, 재발행 이력 | POL-BIL-DOC-001-10 |
| FN-BIL-SET-003 (납부방법 변경) | 변경 결과, 적용 예정일, 당월 납부 영향 | `autopay-setting` (Toast) | "○월 ○일부터 ○카드로 자동납부 예정" | POL-BIL-SET-001-08~09 |
| FN-BIL-PAY-007 (선결제) | 선결제 요청 결과, 청구 차감 반영 결과 | `pay-complete` (공유) | 선결제 완료 금액, 청구 차감 예정 안내 | POL-BIL-PAY-003-09 |

---

## 1.7 UC 설명 + 설계 원칙 → 도메인 copy 도출

| 화면 | 정책서 근거 | 도출 headline | 도출 description |
|---|---|---|---|
| `pay-complete` (납부 완료) | UC-BIL-PAY-002 완료 상태: "납부 결과가 성공으로 확인" + 설계 원칙: "고객 업무 완결성" | "납부가 완료되었습니다" | "영수증과 납부 이력을 확인하실 수 있습니다." |
| `pay-complete` (수납대기) | ST-BIL-010 수납대기 + POL-BIL-CUS-001-05 | "결제가 접수되었습니다" | "처리가 완료되면 납부 이력에서 확인하실 수 있습니다. 동일 금액을 중복 납부하지 마세요." |
| `pay-fail` (납부 실패) | ST-BIL-012 납부실패 + POL-BIL-CUS-001-04 | "납부에 실패했습니다" | "다른 납부수단으로 다시 시도하시거나 고객센터로 문의하세요." |
| `unpaid-result` (미납 해소 완료) | ST-BIL-022 후속상태변경완료 + POL-BIL-SUSP-001-08 | "미납 요금이 납부되었습니다" | "서비스 이용이 정상적으로 재개될 예정입니다." |
| `unpaid-result` (정지 해제 처리중) | ST-BIL-021 후속상태변경대기 + POL-BIL-SUSP-001-07 | "정지 해제를 처리 중입니다" | "잠시 후 자동으로 해제됩니다. 처리에 시간이 걸리면 고객센터로 문의하세요." |
| `bill-main` (완납) | ST-BIL-004 납부대상없음 + POL-BIL-CUS-001-02 | "이번 달 납부할 요금이 없습니다" | "다음 청구 예정일을 확인하세요." |

---

## 1.8 법적·안내 고지 도출

### 키워드 검색 결과

- **동의/약관/고지**: POL-BIL-AGT-001-05 (명의자 동의), POL-BIL-AUTH-001-07 (타인 명의 동의 필수)
- **필수/선택**: POL-BIL-AGT-001-04 (타인 명의 납부수단 동의 필수)
- **안내/주의/유의/경고**: POL-BIL-CUS-001-05 (수납대기 중복납부 주의), POL-BIL-PAY-004-08 (중복납부 가능성 안내)
- **불가/불가역**: POL-BIL-AGT-001-08 (승인 요청 이후 동의 철회 불가)
- **본인인증**: POL-BIL-AUTH-001-08 (대리납부·타인명의·환불계좌·자동납부 변경 고위험 추가 인증), POL-BIL-MOB-001-09 (한도 변경 인증)
- **유예/철회/기한**: POL-BIL-AGT-001-06 (명의자 동의 유효시간 24시간), POL-BIL-PAY-003-04 (예약 취소 제한)
- **마스킹/보호**: POL-BIL-SEC-001 전체 (카드번호·계좌번호·승인번호 마스킹)

### 도출 표

| # | 정책 ID / 출처 | 키워드 | 표시 화면 | 권장 컴포넌트 / 위치 | 마킹 | 문구 예시 |
|---|---|---|---|---|---|---|
| 1 | POL-BIL-AUTH-001-07 | 타인 명의 동의 필수 | `pay-method-select`, `third-party-consent` | `mol/notice-card` 인라인 안내 + 동의 버튼 | 🔴 필수 | "타인 명의 납부수단은 명의자 동의 후 사용 가능합니다" |
| 2 | POL-BIL-AGT-001-06 | 동의 유효시간 24시간 | `third-party-consent` 완료 화면 | `atom/text` (secondary, 작은 크기) | 🔴 필수 | "동의 유효 시간: 요청 후 24시간" |
| 3 | POL-BIL-AGT-001-08 | 승인 요청 후 동의 철회 불가 | `third-party-consent` | `atom/banner(tone=warning)` | 🔴 필수 | "납부 승인 요청 후에는 동의를 철회할 수 없습니다" |
| 4 | POL-BIL-CUS-001-05 | 수납대기 중복납부 주의 | `pay-complete` (수납대기) | `atom/banner(tone=warning)` | 🔴 필수 | "처리가 완료되기 전까지 동일 금액을 다시 납부하지 마세요" |
| 5 | POL-BIL-PAY-004-08 | 중복납부 가능성 안내 | `pay-target`, `pay-confirm` | `mol/notice-card(tone=info)` | 🔴 필수 | "현재 처리 중인 납부 요청이 있습니다. 중복 납부에 주의하세요" |
| 6 | POL-BIL-AUTH-001-08 | 고위험 업무 추가 인증 | `autopay-setting` (변경), `proxy-pay-check` | 인증 단계 진입 전 안내 | 🔴 필수 | "대리 납부 / 자동납부 변경은 추가 본인인증이 필요합니다" |
| 7 | POL-BIL-SEC-001-01~02 | 마스킹 — 카드·계좌번호 | 납부수단 표시 전 화면 | `atom/text` (마스킹 표시) | 🔴 필수 | "카드 끝 4자리만 표시" 규칙 적용 |
| 8 | POL-BIL-SEC-001-04 | 민감정보 재확인 인증 | `pay-history`, `receipt-issue` (증빙 원본) | `atom/btn` 클릭 후 인증 게이트 | 🔴 필수 | "카드·계좌 상세 조회는 추가 인증이 필요합니다" |
| 9 | POL-BIL-SEC-001-07 | 화면 캡처·복사 제한 | `receipt-issue` (증빙 원본), 환불 계좌 화면 | 시스템 캡처 방지 + 워터마크 | 🔴 필수 | (시스템 처리, UI 문구 없음) |
| 10 | POL-BIL-CHG-001-07 | 청구 확정 전 금액 라벨 | `realtime-usage` | 금액 앞 `atom/tag(label=예상)` | 🔴 필수 | "예상 금액 (확정 전)" |
| 11 | POL-BIL-MOB-001-09 | 한도 상향 인증 | `mobile-pay-limit`, `content-pay-limit` | 인증 단계 진입 전 안내 | 🔴 필수 | "한도 상향은 본인인증이 필요합니다" |
| 12 | POL-BIL-DOC-001-08 | 증빙 재발행 1일 5회 제한 | `receipt-issue` | `mol/notice-card(tone=info)` | 🟡 사용성 | "동일 증빙은 하루 5회까지 재발행할 수 있습니다" |
| 13 | POL-BIL-PAY-002-03 | 납부 가능 시간 안내 | `pay-target` (점검 시) | `atom/banner(tone=info)` | 🟡 사용성 | "현재 결제기관 점검 중입니다. ○○:○○ 이후 납부 가능합니다" |
| 14 | POL-BIL-SET-001-09 | 당월 청구 영향 안내 | `autopay-setting` (변경 전) | `mol/notice-card(tone=info)` | 🟡 사용성 | "변경 사항은 다음 달 청구부터 적용됩니다" |
| 15 | POL-BIL-SUSP-001-07 | 정지 해제 지연 안내 | `unpaid-result` | `atom/banner(tone=info)` | 🟡 사용성 | "정지 해제 처리까지 최대 ○분 소요될 수 있습니다" |
| 16 | POL-BIL-CUS-001-09 | 상담 전환 안내 | `pay-fail`, 설정 실패 화면 | footer `mol/list-item` (고객센터 연결) | 🟡 사용성 | "해결이 어려우시면 고객센터로 문의하세요" |
| 17 | POL-BIL-AUTO-001-06 | 자동 선결제 해지 범위 제한 | `auto-prepay-setting` (해지) | `mol/notice-card(tone=warning)` | 🟡 사용성 | "이미 실행 중인 선결제는 해지 대상에서 제외됩니다" |

---

## 1.9 시각 톤 매니페스트

| UC ID | UC 이름 | 주 톤 | 부가 톤 | 시각 키 컴포넌트 |
|---|---|---|---|---|
| US-BIL-CHK-001~002 | 청구 요약·상세 확인 | 친절·간결 | 안내·보조 (금액 강조) | `ogn/BIL/bill-summary-card`, `mol/list-item-*` |
| US-BIL-CHK-003 | 실시간·예상 이용요금 | 안내·보조 | 경고·강 (초과 경고 시) | `atom/tag(예상)`, `atom/banner(warning)` |
| US-BIL-CHK-004 | 휴대폰 결제 이용내역 | 친절·간결 | 안내·보조 | `mol/list-item-*`, `atom/tag` |
| US-BIL-CHK-005 | 요금안내서 조회·재발행 | 친절·간결 | - | `ogn/BIL/bill-guide-card` |
| US-BIL-CHK-006 | 납부 대상 선택 | 친절·간결 | 경고·강 (미납 강조) | `mol/list-item-*`, `atom/checkbox`, `atom/banner(warning)` |
| US-BIL-CHK-007 | 납부 이력·증빙 | 친절·간결 | - | `mol/list-item-*`, `atom/btn(secondary)` |
| US-BIL-CHK-008 | 미납 해소·후속 확인 | 차분·신중 → 환영·축하 | 경고·강 (해제 지연) | `atom/banner`, `mol/post-action-card` |
| US-BIL-PAY-001~002 | 납부수단 선택·즉시 납부 | 친절·간결 → 환영·축하 | 경고·강 (실패) | `ogn/BIL/pay-method-card`, `atom/btn(primary)` |
| US-BIL-PAY-003 | 납부 예약·선납 | 친절·간결 | 안내·보조 | `atom/calendar-picker`, `mol/notice-card` |
| US-BIL-PAY-004~005 | 대리 납부 | 안내·보조 | 위급·차단 (권한 없음) | `mol/notice-card`, `atom/banner` |
| US-BIL-PAY-006 | 타인 명의 납부수단 동의 | 차분·신중 | 경고·강 (철회 불가) | `atom/banner(warning)`, `atom/checkbox`, `atom/btn(primary)` |
| US-BIL-PAY-007 | 선결제 | 친절·간결 | 안내·보조 | `mol/list-item-*`, `atom/btn` |
| US-BIL-PAY-008 | 납부 실패·중복 후속 | 경고·강 | 안내·보조 (대체 수단) | `atom/banner(error)`, `mol/notice-card`, `atom/btn` |
| US-BIL-SET-001 | 요금안내서 수신 설정 | 친절·간결 | - | `mol/list-item-radio`, `atom/btn(primary)` |
| US-BIL-SET-002~003 | 납부방법 신청·변경·해지 | 친절·간결 | 경고·강 (해지 영향) | `ogn/BIL/autopay-card`, `atom/banner(warning)` |
| US-BIL-SET-004~005 | 이용한도 변경 | 친절·간결 | 경고·강 (차단) | `atom/slider`, `atom/banner` |
| US-BIL-SET-006 | 자동 선결제 설정 | 친절·간결 | 안내·보조 | `mol/toggle-item`, `mol/notice-card` |

---

## 2. 화면별 컴포넌트 추론

### page/BIL/bill-main — 청구 요약 메인

**정책서 명시 정보**:
- 호출 함수: FN-BIL-CHK-001 (청구 요약 조회), FN-BIL-COM-001 (권한 조회), FN-BIL-CHK-010 (후속 경로)
- 관련 정책: PG-BIL-CHG-001 (금액 노출), PG-BIL-VIEW-001 (조회 권한), PG-BIL-CUS-001 (안내)

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome (DP § 9.2) |
| header | `ogn/header` | ✅ 재사용 | back + 타이틀 "청구/납부" — default chrome |
| 회선 선택 영역 | `ogn/BIL/line-selector` | 🆕 신규 | FN-COM-001 다회선 조회 → 회선 탭/드롭다운 |
| 청구 요약 카드 | `ogn/BIL/bill-summary-card` | 🆕 신규 | FN-CHK-001 출력: 청구액·납부기한·미납상태·자동납부예정 |
| 미납 강조 배너 | `atom/banner(tone=warning)` | ✅ 재사용 | POL-BIL-CHG-001-02 미납 강조 노출 |
| 다음 행동 목록 | `mol/list-item-*` | ✅ 재사용 | FN-CHK-010 후속 경로 → 납부/상세/이력 링크 |
| tab-bar | `ogn/tab-bar` | ✅ 재사용 | default chrome (DP § 9.2) — GNB |

---

### page/BIL/bill-detail — 청구 상세

**정책서 명시 정보**:
- 호출 함수: FN-BIL-CHK-002, FN-BIL-CHK-003, FN-BIL-COM-007 (마스킹)
- 관련 정책: PG-BIL-CHG-001, PG-BIL-CHG-002, PG-BIL-CHG-003

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome |
| header | `ogn/header` | ✅ 재사용 | back + "청구 상세" 타이틀 |
| 청구월 선택 | `mol/month-picker` 또는 `atom/select` | 🆕 신규 | 최근 12개월 조회 — POL-BIL-VIEW-001-06 |
| 청구 항목 목록 | `mol/list-item-bill-item` | 🆕 신규 | FN-CHK-002 → 항목명·금액·기간·할인 목록 |
| 변동 사유 영역 | `mol/notice-card(tone=info)` | ✅ 재사용 | FN-CHK-003 → 전월 대비 증감 사유 텍스트 |
| 상담 연결 CTA | `mol/list-item-link` | ✅ 재사용 | FN-COM-006 → 문의 이동 |

---

### page/BIL/pay-target — 납부 대상 선택

**정책서 명시 정보**:
- 호출 함수: FN-BIL-PAY-001, FN-BIL-COM-003
- 관련 정책: PG-BIL-PAY-001, PG-BIL-PAY-002

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome |
| header | `ogn/header` | ✅ 재사용 | back + "납부 대상 선택" |
| 납부 항목 목록 | `mol/list-item-pay-target` | 🆕 신규 | 당월청구·미납·선납 항목별 checkbox + 금액 |
| 수납대기 경고 | `atom/banner(tone=warning)` | ✅ 재사용 | POL-BIL-PAY-002-05 수납대기 중 제한 |
| 합계 금액 영역 | `ogn/BIL/pay-amount-summary` | 🆕 신규 | 선택 항목 합계 동적 표시 |
| CTA | `ogn/sticky-footer-cta` | ✅ 재사용 | "납부하기" 버튼 — POL-BIL-PAY-002 판정 후 활성 |

---

### page/BIL/pay-method-select — 납부수단 선택

**정책서 명시 정보**:
- 호출 함수: FN-BIL-PAY-002, FN-BIL-PAY-003
- 관련 정책: PG-BIL-AUTH-001

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome |
| header | `ogn/header` | ✅ 재사용 | back + "납부수단 선택" |
| 납부수단 목록 | `mol/list-item-pay-method` | 🆕 신규 | 카드·계좌·간편결제·가상계좌 — POL-BIL-AUTH-001-01 |
| 타인 명의 안내 | `mol/notice-card(tone=warning)` | ✅ 재사용 | POL-BIL-AUTH-001-07 명의 불일치 시 표시 |
| 마스킹 표시 | `atom/text` (마스킹) | ✅ 재사용 | POL-BIL-SEC-001-02 카드·계좌 끝 4자리만 |
| CTA | `ogn/sticky-footer-cta` | ✅ 재사용 | "다음" 버튼 |

---

### page/BIL/pay-confirm — 납부 확인

**정책서 명시 정보**:
- 호출 함수: FN-BIL-PAY-004, FN-BIL-COM-003
- 관련 정책: PG-BIL-PAY-002, PG-BIL-PAY-004

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome |
| header | `ogn/header` | ✅ 재사용 | back + "납부 확인" |
| 납부 정보 요약 | `ogn/BIL/pay-confirm-card` | 🆕 신규 | 납부액·수단·대상 회선 최종 표시 |
| 중복 납부 주의 | `mol/notice-card(tone=warning)` | ✅ 재사용 | POL-BIL-PAY-004-08 |
| CTA | `ogn/sticky-footer-cta` | ✅ 재사용 | "납부하기" — 최종 실행 |

---

### page/BIL/pay-complete — 납부 완료

**정책서 명시 정보**:
- 호출 함수: FN-BIL-PAY-011, FN-BIL-CHK-007
- 관련 정책: PG-BIL-STAT-001, PG-BIL-CUS-001, PG-BIL-SUSP-001

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome |
| header | `ogn/header` | ✅ 재사용 | "납부 완료" |
| 결과 헤드라인 | `mol/page-header` | ✅ 재사용 | 완료/대기/실패 상태별 headline |
| 납부 상세 | `ogn/BIL/pay-result-card` | 🆕 신규 | 승인번호·금액·일시·수단 (마스킹 적용) |
| 수납대기 배너 | `atom/banner(tone=warning)` | ✅ 재사용 | ST-BIL-010 수납대기 시 중복납부 주의 |
| 정지 해제 상태 | `ogn/BIL/suspend-status-card` | 🆕 신규 | POL-BIL-SUSP-001 → 처리중/완료 표시 |
| 후속 액션 | `mol/post-action-card` | ✅ 재사용 | 영수증/이력 이동 CTA |

---

### page/BIL/pay-fail — 납부 실패

**정책서 명시 정보**:
- 호출 함수: FN-BIL-PAY-009, FN-BIL-PAY-010
- 관련 정책: PG-BIL-EXC-001, PG-BIL-CUS-001

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome |
| 실패 안내 | `atom/banner(tone=error)` | ✅ 재사용 | POL-BIL-EXC-001-01 실패 사유 분류 |
| 대체 납부수단 | `mol/list-item-pay-method` | ✅ 재사용 | POL-BIL-EXC-001-03 |
| 환불 요청 | `mol/list-item-link` | ✅ 재사용 | FN-PAY-010 → 환불 접수 |
| 상담 연결 | `mol/list-item-link` | ✅ 재사용 | POL-BIL-CUS-001-09 |

---

### page/BIL/autopay-setting — 납부방법 설정

**정책서 명시 정보**:
- 호출 함수: FN-BIL-SET-002, FN-BIL-SET-003, FN-BIL-SET-004
- 관련 정책: PG-BIL-SET-001, PG-BIL-AUTH-001

**추론한 화면 구성**:

| 영역 | 컴포넌트 후보 | 카탈로그 매칭 | 추론 근거 |
|---|---|---|---|
| status-bar | `ogn/status-bar` | ✅ 재사용 | default chrome |
| header | `ogn/header` | ✅ 재사용 | "납부방법 설정" |
| 현재 자동납부 정보 | `ogn/BIL/autopay-card` | 🆕 신규 | FN-SET-002 → 등록 카드·계좌·출금일 |
| 당월 영향 안내 | `mol/notice-card(tone=info)` | ✅ 재사용 | POL-BIL-SET-001-09 |
| 변경/해지 CTA | `atom/btn` | ✅ 재사용 | 변경/해지 분기 |
| 해지 확인 BottomSheet | `ogn/notice-bottomsheet` | ✅ 재사용 | POL-BIL-SET-001-06 해지 영향 안내 |

---

## 3. 카탈로그 대조 (정책서 전체 합산)

### ✅ 재사용 — 12개

| 추론된 컴포넌트 | 카탈로그 매칭 | 사용 화면 |
|---|---|---|
| `ogn/status-bar` | 기존 | 모든 화면 |
| `ogn/header` | 기존 | 모든 화면 |
| `ogn/tab-bar` | 기존 | bill-main |
| `ogn/sticky-footer-cta` | 기존 | pay-target, pay-method-select, pay-confirm |
| `ogn/notice-bottomsheet` | 기존 | autopay-setting 해지, third-party-consent |
| `atom/banner(tone=warning)` | 기존 | pay-target, pay-confirm, pay-complete, unpaid-result |
| `atom/banner(tone=error)` | 기존 | pay-fail |
| `atom/banner(tone=info)` | 기존 | realtime-usage, notice-setting, autopay-setting |
| `mol/notice-card` | 기존 | bill-detail, pay-method-select, pay-confirm |
| `mol/post-action-card` | 기존 | pay-complete, unpaid-result |
| `mol/page-header` | 기존 | pay-complete |
| `mol/list-item-link` | 기존 | bill-main (후속 경로), pay-fail (상담/환불) |

### 🆕 신규 — 15개

| 컴포넌트 후보 | category | 위계 근거 | 추론 근거 (정책서) |
|---|---|---|---|
| `ogn/BIL/bill-summary-card` | ogn | 복수 정보 블록 (금액·기한·상태) | FN-CHK-001 — 청구 요약 복합 카드 |
| `ogn/BIL/line-selector` | ogn | 회선 탭/드롭다운 — 화면 컨텍스트 전환 | FN-COM-001 — 다회선 선택 |
| `ogn/BIL/pay-amount-summary` | ogn | 동적 합계 표시 영역 | POL-BIL-PAY-001 — 납부 대상 합계 |
| `ogn/BIL/pay-confirm-card` | ogn | 납부 최종 확인 복합 카드 | FN-PAY-004 — 납부 정보 요약 |
| `ogn/BIL/pay-result-card` | ogn | 납부 결과 복합 카드 | FN-PAY-011 — 승인번호·금액·일시 |
| `ogn/BIL/autopay-card` | ogn | 자동납부 설정 정보 카드 | FN-SET-002 — 등록 납부수단 표시 |
| `ogn/BIL/suspend-status-card` | ogn | 정지 해제 상태 표시 카드 | POL-BIL-SUSP-001 — 해제 처리중/완료 |
| `mol/list-item-bill-item` | mol | 청구 항목 단일 행 | FN-CHK-002 — 항목·금액·기간 |
| `mol/list-item-pay-target` | mol | 납부 대상 선택 행 (checkbox + 금액) | FN-PAY-001 — 납부 선택 |
| `mol/list-item-pay-method` | mol | 납부수단 선택 행 (카드·계좌 마스킹) | FN-PAY-002 — 수단 선택·마스킹 |
| `mol/month-picker` | mol | 월 선택 컨트롤 | 청구월·이력 조회 공통 |
| `ogn/BIL/bill-guide-card` | ogn | 요금안내서 뷰어 카드 | FN-CHK-006 — 안내서 표시 |
| `atom/tag(type=label,label=예상)` | atom | 예상 금액 라벨 태그 | POL-BIL-CHG-001-07 — 확정 전 구분 |
| `atom/calendar-picker` | atom | 날짜 선택 UI | FN-PAY-005 — 예약 날짜 선택 |
| `mol/toggle-item` | mol | 자동 선결제 ON/OFF 토글 항목 | FN-SET-007 — 자동 선결제 설정 |

### ⚠️ 추론 검증 필요

- `ogn/BIL/line-selector`가 드롭다운인지 가로 탭인지 — 다회선 수에 따라 달라짐
- `pay-processing` 중간 화면 필요 여부 — 결제 API 응답 속도에 따라 결정
- 설정 화면 6개(SET-001~006)의 통합 여부 — 단일 "설정 허브" vs 각각 독립 화면

---

## 4. DS 토큰 점검

### 재사용 가능 토큰
- `feedback.warning`, `feedback.warning-bg` — 수납대기·중복납부 배너
- `feedback.error`, `feedback.error-bg` — 납부 실패
- `feedback.info` — 안내 배너
- `text.primary`, `text.secondary`, `text.muted` — 금액·항목·마스킹 텍스트
- `semantic.color.brand.primary` — 납부 완료 강조

### 결정 필요
- 납부 처리 중 상태 색상 (progress/pending 토큰 존재 여부 확인 필요)
- 마스킹 텍스트 전용 색상 (`text.muted` 또는 별도 토큰)

---

## 5. POL → 화면 룰 매핑

| POL ID | 정책 내용 (요약) | 적용 화면 | 강제 룰 (UI 동작) |
|---|---|---|---|
| POL-BIL-VIEW-001-01 | 본인·가족·위임 회선만 조회 가능 | `bill-main` | 권한 없는 회선 목록에서 제외 + 사유 표시 |
| POL-BIL-VIEW-001-02 | 대표 회선 기본 조회 | `bill-main` | 진입 시 대표 회선 자동 선택 |
| POL-BIL-VIEW-001-05 | 해지·명의불일치 회선 제외 | `bill-main` | 해당 회선 dimmed + "조회 불가" 사유 |
| POL-BIL-VIEW-001-06 | 최근 12개월 조회 | `bill-detail`, `pay-history` | 조회 월 선택 범위 12개월로 제한 |
| POL-BIL-CHG-001-01 | 당월 청구액은 확정 후 노출 | `bill-main`, `bill-detail` | 미확정 시 금액 숨김 or 예상 라벨 |
| POL-BIL-CHG-001-03 | 잔액 0원+수납완료 시 완납 표시 | `bill-main` | 완납 뱃지 또는 "완납" 상태 텍스트 |
| POL-BIL-CHG-001-07 | 확정 전 금액 "예상/실시간"으로 구분 | `realtime-usage` | `atom/tag(예상)` 필수 노출 — 확정액처럼 표시 금지 |
| POL-BIL-PAY-001-01 | 당월확정청구액·미납액·연체료·선납·선결제 포함 | `pay-target` | 해당 항목만 선택 목록 표시 |
| POL-BIL-PAY-001-02 | 수납완료·환불처리중·수납대기 금액 제외 | `pay-target` | 해당 금액 체크박스 disabled |
| POL-BIL-PAY-001-05 | 부분 납부는 BSS 허용 범위 내 | `pay-target` | BSS 응답 기준 선택 가능 범위 제한 |
| POL-BIL-PAY-001-09 | 요청 전 상태 변경 시 금액 재산정 + 고객 재확인 | `pay-confirm` | 금액 변경 시 확인 모달 or 화면 갱신 |
| POL-BIL-PAY-002-03 | 납부 24시간 허용, 점검 시 제한 | `pay-target` | 점검 시간 배너 + 납부 버튼 disabled |
| POL-BIL-PAY-002-05 | 수납대기 중 추가 납부 제한 | `pay-target`, `pay-confirm` | "현재 처리 중" 배너 + 납부 차단 |
| POL-BIL-PAY-003-03 | 예약 변경은 실행 전날까지 | `pay-reserve` | 실행 당일 변경 버튼 disabled |
| POL-BIL-PAY-004-02 | 수납대기 중 동일금액 추가 납부 차단 | `pay-target`, `pay-confirm` | 추가 납부 요청 버튼 disabled |
| POL-BIL-AUTH-001-07 | 타인 명의 납부수단 시 명의자 동의 필수 | `pay-method-select` | 타인 명의 감지 시 동의 프로세스 강제 진입 |
| POL-BIL-AUTH-001-09 | 인증 실패 5회 초과 시 제한 | `pay-method-select`, `third-party-consent` | 5회 실패 시 인증 잠금 + 안내 |
| POL-BIL-AGT-001-04 | 타인 명의 납부수단 동의 완료 필수 | `third-party-consent` | 동의 미완료 시 납부 진행 불가 |
| POL-BIL-AGT-001-06 | 명의자 동의 유효시간 24시간 | `third-party-consent` | 유효시간 표시 + 만료 시 재동의 요청 |
| POL-BIL-AGT-001-08 | 승인 요청 후 동의 철회 불가 | `third-party-consent` | 승인 요청 전까지만 "철회" 버튼 활성 |
| POL-BIL-STAT-001-01 | 결제승인+BSS반영 모두 성공 시 수납완료 | `pay-complete` | 두 조건 모두 충족 시만 완료 화면 표시 |
| POL-BIL-STAT-001-02 | BSS 반영 지연 시 수납대기 | `pay-complete` | "처리 중" 배너 + 중복납부 주의 문구 |
| POL-BIL-STAT-001-04 | 미납 잔액 0원+수납완료 시 미납 해소 | `unpaid-result` | 미납 해소 완료 메시지 |
| POL-BIL-SUSP-001-01 | 미납 이용정지 + 미납 해소 확인 시 해제 대상 | `unpaid-result` | 조건 충족 시 정지 해제 연계 자동 표시 |
| POL-BIL-SUSP-001-07 | 해제 지연 시 처리중 안내 | `unpaid-result` | `atom/banner(info)` + 예상 시간 표시 |
| POL-BIL-SUSP-001-08 | 해제 완료 시 재부팅 여부 안내 | `unpaid-result` | 완료 시 단말 조치 필요 여부 안내 |
| POL-BIL-EXC-001-01 | 실패 사유 8종 분류 | `pay-fail` | 사유 코드 → 고객 문구 매핑 표시 |
| POL-BIL-EXC-001-02 | 일시 오류 시 재시도 허용 | `pay-fail` | 재시도 가능 사유일 때 "다시 시도" 버튼 활성 |
| POL-BIL-SEC-001-01 | 이름·연락처 등 개인정보 마스킹 | 전 화면 납부수단 표시 | 이름 중간 글자 마스킹, 연락처 뒤 4자리만 |
| POL-BIL-SEC-001-02 | 카드·계좌번호 마스킹 | 납부수단 선택·확인·완료 | 카드사명 + 끝 4자리만 표시 |
| POL-BIL-SEC-001-04 | 카드·계좌 상세 추가 인증 | `pay-history`, `receipt-issue` | 상세 버튼 클릭 시 인증 게이트 |
| POL-BIL-SEC-001-07 | 증빙 원본 화면 캡처 제한 | `receipt-issue` | 시스템 캡처 방지 API + 워터마크 |
| POL-BIL-DOC-001-02 | 요금안내서 재발행 본인인증 필요 | `bill-guide` | 재발행 버튼 클릭 시 인증 게이트 |
| POL-BIL-DOC-001-08 | 증빙 재발행 1일 5회 제한 | `receipt-issue` | 5회 초과 시 버튼 disabled + 안내 |
| POL-BIL-SET-001-01 | 요금안내서 수신 방식 선택 | `notice-setting` | 앱알림·문자·이메일·우편 라디오 선택 |
| POL-BIL-SET-001-02 | 수신처 변경 시 인증 | `notice-setting` | 이메일·문자 수신처 변경 시 인증 게이트 |
| POL-BIL-SET-001-06 | 자동납부 해지 전 영향 안내 확인 | `autopay-setting` | 해지 BottomSheet에 미납 위험 안내 필수 |
| POL-BIL-SET-001-08 | 청구 확정 전 변경 당월 적용, 후 변경 익월 | `autopay-setting` | 변경 완료 후 "적용 예정: ○월 ○일" 표시 |
| POL-BIL-MOB-001-03 | 한도 변경은 정상 회선·인증 완료 시 | `mobile-pay-limit`, `content-pay-limit` | 비정상 회선 시 변경 버튼 disabled |
| POL-BIL-MOB-001-05 | 한도 하향·차단 즉시 적용 | `mobile-pay-limit`, `content-pay-limit` | 완료 즉시 현재 한도 갱신 표시 |
| POL-BIL-MOB-001-06 | 한도 상향 BSS 심사 후 적용 | `mobile-pay-limit`, `content-pay-limit` | "심사 중" 상태 표시 + 완료 알림 예정 |
| POL-BIL-AUTO-001-01 | 자동 선결제 신청 조건 | `auto-prepay-setting` | 미충족 조건 안내 + 신청 버튼 disabled |
| POL-BIL-AUTO-001-06 | 자동 선결제 실행 중 해지 제외 | `auto-prepay-setting` | 실행 중 건 해지 목록에서 제외 표시 |
| POL-BIL-LOG-001-04 | 알림 이벤트 (납부완료·실패·설정변경 등) | 모든 처리 완료 화면 | 앱푸시·알림함 발송 — UI 트리거 |
| POL-BIL-CUS-001-03 | 납부 제한 사유 6종 표시 | `pay-target` (제한 시) | 사유 코드 → 안내 문구 매핑 |
| POL-BIL-CUS-001-04 | 납부 실패 시 사유+재시도+대체수단 안내 | `pay-fail` | 모든 안내 요소 동시 표시 |
| POL-BIL-CUS-001-05 | 수납대기 중복납부 주의 문구 | `pay-complete` (대기) | `atom/banner(warning)` 필수 노출 |
| POL-BIL-OP-001-01 | 운영확인필요 상태 고객 안내 | `pay-fail`, 설정 실패 | "고객센터 접수" 안내 + 상담 연결 CTA |

### 매핑 누락 검증

- 백엔드 룰 (UI로 강제 불가) — 별도 표기:
  - POL-BIL-LOG-001-02 (이력 저장 필수 항목) — 서버 처리
  - POL-BIL-LOG-001-07 (이력 보관 기간) — 서버 정책
  - POL-BIL-STAT-001-07 (결제기관 결과 코드 매핑) — 서버 처리
  - POL-BIL-OP-001-06 (재처리 최대 3회) — 서버 제한

---

## 6. Cascade 빌드 순서

```
1. atom
   - atom/tag (예상 라벨)
   - atom/calendar-picker
   - atom/banner (tone variants: warning/error/info)
   - atom/checkbox

2. mol
   - mol/list-item-bill-item
   - mol/list-item-pay-target
   - mol/list-item-pay-method
   - mol/month-picker
   - mol/toggle-item
   - mol/notice-card (기존 재사용)
   - mol/post-action-card (기존 재사용)
   - mol/page-header (기존 재사용)

3. ogn (공통)
   - ogn/status-bar (기존 재사용)
   - ogn/header (기존 재사용)
   - ogn/tab-bar (기존 재사용)
   - ogn/sticky-footer-cta (기존 재사용)
   - ogn/notice-bottomsheet (기존 재사용)

4. ogn (BIL 모듈)
   - ogn/BIL/line-selector
   - ogn/BIL/bill-summary-card
   - ogn/BIL/bill-guide-card
   - ogn/BIL/pay-amount-summary
   - ogn/BIL/pay-confirm-card
   - ogn/BIL/pay-result-card
   - ogn/BIL/autopay-card
   - ogn/BIL/suspend-status-card

5. page (BIL 모듈)
   - page/BIL/bill-main
   - page/BIL/bill-detail
   - page/BIL/realtime-usage
   - page/BIL/mobile-pay-history
   - page/BIL/bill-guide
   - page/BIL/pay-target
   - page/BIL/pay-history
   - page/BIL/receipt-issue
   - page/BIL/unpaid-result
   - page/BIL/pay-method-select
   - page/BIL/pay-confirm
   - page/BIL/pay-complete
   - page/BIL/pay-fail
   - page/BIL/pay-reserve
   - page/BIL/pay-reserve-complete
   - page/BIL/proxy-pay-check
   - page/BIL/proxy-pay-confirm
   - page/BIL/third-party-consent
   - page/BIL/prepay-select
   - page/BIL/notice-setting
   - page/BIL/autopay-setting
   - page/BIL/mobile-pay-limit
   - page/BIL/content-pay-limit
   - page/BIL/auto-prepay-setting
```

---

## 7. 의사결정 체크리스트

- [ ] **Use Case → 화면 후보 매핑 OK?** — FO 22개 UC → 24개 화면 후보 도출 완료. 검토 필요
- [ ] **백엔드 절차로 분류한 PR step OK?** — POL-BIL-LOG-*, POL-BIL-STAT-*-07 등 서버 처리 분류 확인
- [ ] **추론한 컴포넌트 분류 (atom / mol / ogn) 적절?** — 특히 `ogn/BIL/bill-summary-card`의 ogn 분류 타당한지 검토
- [ ] **BottomSheet vs Page 추정 OK?** — `third-party-consent`(타인 명의 동의), `receipt-issue`(증빙 발급) 형태 확정 필요
- [ ] **설정 화면 6개 통합 여부?** — 단일 "납부·설정" 허브 vs 독립 화면 결정 필요
- [ ] **pay-processing 중간 화면 필요 여부?** — pay-confirm → pay-complete 사이 처리중 화면 별도 필요한지 확인
- [ ] **신규 컴포넌트 15개 카탈로그 추가 OK?** — ogn/BIL/* 8개 + mol/* 5개 + atom 2개
- [ ] **POL → 화면 룰 매핑 누락 없음?** — 22개 Policy Group × 10 항목 중 UI 강제 룰 매핑 완료 여부
- [ ] **추론 검증 필요 항목 해결?** — line-selector 형태, 설정 통합 여부, 처리중 화면 유무
- [ ] **법적 고지 17건 화면 반영 계획 수립?** — 🔴 필수 11건 우선 처리 필요
