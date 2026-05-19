// =============================================
// AUTO-GENERATED — DO NOT EDIT
// source: scripter/bundle-screen-batch.js
// renderer: scripter/render-screen.js
// screens: BIL-AUTO-PREPAY-SETTING, BIL-AUTOPAY-SETTING, BIL-BILL-DETAIL, BIL-BILL-GUIDE, BIL-BILL-MAIN, BIL-CONTENT-PAY-LIMIT, BIL-MOBILE-PAY-HISTORY, BIL-MOBILE-PAY-LIMIT, BIL-NOTICE-SETTING, BIL-PAY-COMPLETE, BIL-PAY-CONFIRM, BIL-PAY-FAIL, BIL-PAY-HISTORY, BIL-PAY-METHOD-SELECT, BIL-PAY-RESERVE-COMPLETE, BIL-PAY-RESERVE, BIL-PAY-TARGET, BIL-PREPAY-SELECT, BIL-PROXY-PAY-CHECK, BIL-PROXY-PAY-CONFIRM, BIL-REALTIME-USAGE, BIL-RECEIPT-ISSUE, BIL-THIRD-PARTY-CONSENT, BIL-UNPAID-RESULT
// generated at: 2026-05-06T08:14:57.867Z
// Paste into Figma Scripter → Run ▶
// =============================================

const SCREEN_DATA = [
  {
    "screenId": "BIL-AUTO-PREPAY-SETTING",
    "screenName": "자동 선결제 설정",
    "screenPath": "page/BIL/auto-prepay-setting",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/auto-prepay-setting",
      "spec_input": "specs-input/BIL-settings.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-auto-prepay-status",
        "sectionName": "자동 선결제 현재 상태 및 조건 표시",
        "sectionDescription": "자동 선결제 현재 설정 상태와 신청 조건(5종) 충족 여부를 표시한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 자동 선결제 현재 상태 및 조건 표시\n[규칙:FN-SET-007] 자동 선결제 현재 상태와 신청 조건을 표시한다\n[고지:필수|POL-BIL-AUTO-001-01] 자동 선결제 신청 가능 조건 1: 정상 회선\n[고지:필수|POL-BIL-AUTO-001-02] 자동 선결제 신청 가능 조건 2: 자동납부 설정 완료\n[고지:필수|POL-BIL-AUTO-001-03] 자동 선결제 신청 가능 조건 3: 미납 없음\n[고지:필수|POL-BIL-AUTO-001-04] 자동 선결제 신청 가능 조건 4: 유효 납부수단 등록\n[고지:필수|POL-BIL-AUTO-001-05] 자동 선결제 신청 가능 조건 5: 본인 명의 회선\n[조건:설정중] 현재 설정 정보 카드 노출 + 해지 버튼\n[조건:미설정] 신청 조건 체크리스트 노출 + 신청 버튼\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 자동 선결제 현재 상태 및 조건 표시"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-auto-prepay-cancel-notice",
        "sectionName": "자동 선결제 해지 안내",
        "sectionDescription": "자동 선결제 해지 시 영향과 재신청 조건을 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "0-1/1",
          "max": ""
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 자동 선결제 해지 안내\n[고지:필수|POL-BIL-AUTO-001-06] 해지 시 자동 선결제 중단 및 영향 안내\n[고지:필수|POL-BIL-AUTO-001-07] 해지 후 재신청 시 조건 재충족 필요 안내\n[고지:필수|POL-BIL-AUTO-001-08] 해지 적용 시점 명시\n[조건:해지아님] 영역 미노출",
        "label": "기능 2: 자동 선결제 해지 안내"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-auto-prepay-cta",
        "sectionName": "설정 신청·해지 CTA",
        "sectionDescription": "자동 선결제 신청 또는 해지를 확정하는 버튼",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 설정 신청·해지 CTA\n[조건:조건미충족] \"신청\" 버튼 비활성(disabled) 처리\n[조건:설정중] \"해지\" 버튼 노출 (tone=destructive)\n[조건:미설정] \"신청\" 버튼 노출\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 신청] 자동 선결제 신청 처리 → 성공 시 snack-bar 완료 안내\n[액션:tap 해지] 자동 선결제 해지 확인 다이얼로그 노출",
        "label": "기능 3: 설정 신청·해지 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-AUTOPAY-SETTING",
    "screenName": "납부방법 신청·변경·해지",
    "screenPath": "page/BIL/autopay-setting",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/autopay-setting",
      "spec_input": "specs-input/BIL-settings.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-autopay-current-status",
        "sectionName": "자동납부 현재 상태 표시",
        "sectionDescription": "현재 자동납부 설정 상태(신청 여부·수단·신청일)를 표시하고 신청/변경/해지 진입점을 제공한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 자동납부 현재 상태 표시\n[규칙:FN-SET-002] 현재 자동납부 설정 상태를 표시한다\n[규칙:FN-SET-003] 자동납부 수단 변경 진입점을 제공한다\n[규칙:FN-SET-004] 자동납부 해지 진입점을 제공한다\n[조건:미설정] \"자동납부가 설정되지 않았습니다\" 안내 + 신청 버튼\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 수단변경] 납부수단 선택 모드 전환\n[액션:tap 해지] 자동납부 해지 확인 다이얼로그 노출",
        "label": "기능 1: 자동납부 현재 상태 표시"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-autopay-cancel-notice",
        "sectionName": "해지 영향 안내",
        "sectionDescription": "자동납부 해지 시 발생하는 영향(연체·정지 위험 등)을 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "0-1/1",
          "max": ""
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 해지 영향 안내\n[고지:필수|POL-BIL-SET-001-06] 해지 시 자동납부 중단으로 인한 연체·정지 위험 안내\n[고지:필수|POL-BIL-SET-001-08] 해지 적용 시점(다음 청구주기 또는 즉시) 명시\n[고지:필수|POL-BIL-SET-001-09] 재신청 시 재적용까지 소요 시간 안내\n[조건:해지아님] 영역 미노출\n[상태:loading] 숨김",
        "label": "기능 2: 해지 영향 안내"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-autopay-setting-cta",
        "sectionName": "설정 변경 CTA",
        "sectionDescription": "자동납부 신청·변경·해지를 최종 확정하는 버튼. 고위험 변경 시 추가 인증 절차 포함",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 설정 변경 CTA\n[고지:필수|POL-BIL-AUTH-001-08] 고위험 변경(해지·수단변경) 시 추가 본인인증 절차 안내\n[조건:신청모드] \"자동납부 신청\" 버튼 노출\n[조건:변경모드] \"수단 변경\" 버튼 노출\n[조건:해지모드] \"자동납부 해지\" 버튼 노출 (tone=destructive)\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 확인] 설정 변경 처리 → 성공 시 snack-bar 완료 안내",
        "label": "기능 3: 설정 변경 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-BILL-DETAIL",
    "screenName": "청구 상세",
    "screenPath": "page/BIL/bill-detail",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/bill-detail",
      "spec_input": "specs-input/BIL-bill-check.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-month-picker",
        "sectionName": "월 선택기",
        "sectionDescription": "사용자가 조회할 기준 월을 선택한다. 과거 최대 12개월까지 선택 가능",
        "container": "horizontal",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "당월로 fallback",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/month-picker",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 월 선택기\n[규칙:FN-CHK-002] 최근 12개월 범위 내에서 월 선택이 가능하다\n[조건:최대범위초과] 이전 버튼 비활성화, \"조회 가능 범위를 초과했습니다\" 안내\n[조건:당월] 다음 버튼 비활성화\n[액션:tap 이전월] 이전 월 데이터 로드\n[액션:tap 다음월] 다음 월 데이터 로드\n[액션:tap 월선택드롭다운] 월 선택 모달 노출",
        "label": "기능 1: 월 선택기"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-bill-detail-items",
        "sectionName": "청구 상세 내역",
        "sectionDescription": "선택한 월의 항목별 상세 청구 내역을 분류 순으로 표시",
        "container": "vertical",
        "displayCount": {
          "min": "N",
          "max": "N"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김 + snack-bar",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 청구 상세 내역\n[규칙:FN-CHK-002] 요금제·부가서비스·기기할부·콘텐츠이용료를 분류별로 노출한다\n[규칙:FN-CHK-003] 할인 항목은 별도 행으로 표시하며 금액 앞에 '-' 부호를 붙인다\n[규칙:FN-COM-007] 항목 합계와 청구 총액이 일치하는지 클라이언트에서 검증한다\n[조건:항목없음] \"상세 내역이 없습니다\" empty 안내\n[상태:loading] skeleton 표시\n[상태:empty] 안내 문구 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 항목행] 항목 상세 설명 bottom-sheet 노출\n[액션:tap 요금안내서] bill-guide 화면으로 이동",
        "label": "기능 2: 청구 상세 내역"
      },
      {
        "no": 3,
        "kind": "body",
        "sectionId": "section-BIL-bill-notice",
        "sectionName": "고지 공지",
        "sectionDescription": "청구 관련 공지사항(부가세 포함 안내, 조정 금액 등)을 info 카드로 표시",
        "container": "vertical",
        "displayCount": {
          "min": "0",
          "max": "N"
        },
        "displayPriority": 3,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 고지 공지\n[규칙:FN-CHK-002] 서버가 전달하는 공지 항목만 조건부 노출한다\n[조건:공지없음] 영역 숨김\n[상태:error] 영역 숨김 (공지 오류는 UX에 영향 없음)\n[액션:tap 자세히보기] 공지 링크 페이지로 이동",
        "label": "기능 3: 고지 공지"
      }
    ]
  },
  {
    "screenId": "BIL-BILL-GUIDE",
    "screenName": "요금안내서",
    "screenPath": "page/BIL/bill-guide",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/bill-guide",
      "spec_input": "specs-input/BIL-history.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-bill-guide-view",
        "sectionName": "요금안내서 조회",
        "sectionDescription": "선택 월의 요금안내서를 인앱 뷰어 또는 PDF 다운로드로 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김 + snack-bar",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/button",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/month-picker",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 요금안내서 조회\n[규칙:FN-CHK-006] 선택 월의 요금안내서 파일(PDF)을 인앱 뷰어 또는 다운로드로 제공한다\n[조건:안내서없음] \"해당 월의 요금안내서가 없습니다\" empty 안내 + 수신 설정 링크\n[상태:loading] skeleton 표시\n[상태:empty] 안내 문구 + notice-setting 이동 링크\n[상태:error] snack-bar 재시도 안내\n[액션:tap 요금안내서열기] 인앱 PDF 뷰어 또는 외부 다운로드",
        "label": "기능 1: 요금안내서 조회"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-bill-guide-reissue",
        "sectionName": "요금안내서 재발행",
        "sectionDescription": "요금안내서 재발행을 요청한다. 본인인증 필수이며 처리 후 지정 수신처로 발송",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "오류 메시지 inline 표시",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "atom/button",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 요금안내서 재발행\n[고지:필수|POL-BIL-DOC-001-02] 재발행 요청 전 본인인증 절차를 반드시 수행한다\n[규칙:FN-CHK-006] 본인인증 성공 후 재발행 API를 호출하고 결과를 snack-bar로 안내한다\n[상태:loading] 버튼 로딩 스피너 표시\n[상태:error] inline 오류 메시지 표시\n[액션:tap 재발행요청] 본인인증 플로우 진입 → 인증 성공 후 재발행 요청",
        "label": "기능 2: 요금안내서 재발행"
      },
      {
        "no": 3,
        "kind": "body",
        "sectionId": "section-BIL-bill-guide-setting-link",
        "sectionName": "수신 설정 안내 링크",
        "sectionDescription": "요금안내서 수신 방식(이메일/우편) 설정 화면으로 이동하는 링크 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 3,
        "errorHandling": "영역 숨김",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 수신 설정 안내 링크\n[규칙:FN-CHK-006] 요금안내서 수신 방식 변경 화면으로 이동하는 링크를 하단에 제공한다\n[액션:tap 수신방식설정] notice-setting 화면으로 이동",
        "label": "기능 3: 수신 설정 안내 링크"
      }
    ]
  },
  {
    "screenId": "BIL-BILL-MAIN",
    "screenName": "청구 메인",
    "screenPath": "page/BIL/bill-main",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/bill-main",
      "spec_input": "specs-input/BIL-bill-check.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-bill-summary",
        "sectionName": "청구 요약 카드",
        "sectionDescription": "당월 청구액, 납부기한, 미납 여부를 카드 형태로 표시. 미납 시 강조 스타일 적용",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/BIL/bill-summary-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 청구 요약 카드\n[규칙:FN-CHK-001] 당월 청구액·납부기한·미납 여부를 카드에 표시한다\n[규칙:FN-COM-001] 회선 식별자(회선번호·명칭)와 함께 표시한다\n[조건:미납] atom/banner(tone=warning) 노출 — 납부 CTA 버튼 포함\n[고지:필수|POL-BIL-SUSP-001] 정지 위험 안내 문구 배너에 포함\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 청구 상세] bill-detail 화면으로 이동\n[액션:tap 납부하기] pay-target 화면으로 이동",
        "label": "기능 1: 청구 요약 카드"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-line-selector",
        "sectionName": "회선 선택",
        "sectionDescription": "다회선 사용자가 회선을 전환해 각 회선의 청구 요약을 조회한다",
        "container": "horizontal-scroll",
        "displayCount": {
          "min": "N/N (회선 수)",
          "max": ""
        },
        "displayPriority": 2,
        "errorHandling": "기본 회선 고정 노출",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/BIL/line-selector",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 회선 선택\n[규칙:FN-COM-001] 보유 회선 목록을 탭 형태로 나열한다\n[조건:단일회선] 회선 선택 영역 숨김\n[조건:다회선] 기본 회선 선택 상태로 진입, 탭 전환 시 청구 요약 카드 갱신\n[상태:loading] skeleton 표시\n[상태:error] 영역 숨김, 기본 회선 데이터로 fallback\n[액션:tap 회선탭] 해당 회선의 청구 요약 카드·항목 목록 갱신",
        "label": "기능 2: 회선 선택"
      },
      {
        "no": 3,
        "kind": "body",
        "sectionId": "section-BIL-bill-items",
        "sectionName": "청구 항목 목록",
        "sectionDescription": "요금제·부가서비스·기기할부 등 청구 구성 항목을 리스트로 표시",
        "container": "vertical",
        "displayCount": {
          "min": "N",
          "max": "N"
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/tab-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 청구 항목 목록\n[규칙:FN-CHK-001] 요금제·부가서비스·기기할부·콘텐츠이용료 항목을 분류별로 노출한다\n[규칙:FN-CHK-010] 항목별 소계와 합계가 일치해야 한다\n[조건:항목없음] \"청구 항목이 없습니다\" empty 상태 표시\n[상태:loading] skeleton 표시\n[상태:empty] 안내 문구 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 항목행] 해당 항목 상세로 이동 또는 expand\n[액션:tap 청구 상세보기] bill-detail 화면으로 이동",
        "label": "기능 3: 청구 항목 목록"
      }
    ]
  },
  {
    "screenId": "BIL-CONTENT-PAY-LIMIT",
    "screenName": "콘텐츠 이용료 한도",
    "screenPath": "page/BIL/content-pay-limit",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/content-pay-limit",
      "spec_input": "specs-input/BIL-settings.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-content-pay-current",
        "sectionName": "현재 콘텐츠 이용료 한도 및 사용 현황",
        "sectionDescription": "현재 설정된 월 콘텐츠 이용료 한도와 이번 달 사용 금액·잔여 한도를 표시한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 현재 콘텐츠 이용료 한도 및 사용 현황\n[규칙:FN-SET-006] 현재 설정된 콘텐츠 이용료 한도와 사용 현황을 표시한다\n[고지:필수|POL-BIL-MOB-001-03] 정상 회선이 아닌 경우(정지·연체) 한도 변경 불가 안내\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 현재 콘텐츠 이용료 한도 및 사용 현황"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-content-pay-limit-input",
        "sectionName": "콘텐츠 이용료 한도 변경 입력",
        "sectionDescription": "변경할 한도 금액을 선택하거나 직접 입력한다. 하향/상향 여부에 따라 적용 시점을 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "유효성 오류 인라인 표시",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 콘텐츠 이용료 한도 변경 입력\n[고지:필수|POL-BIL-MOB-001-05] 한도 하향은 즉시 적용됨을 표시\n[고지:필수|POL-BIL-MOB-001-06] 한도 상향은 심사 후 적용됨을 표시\n[조건:하향선택] mol/notice-card \"즉시 적용\" 안내 표시\n[조건:상향선택] mol/notice-card \"심사 후 적용\" 안내 표시\n[상태:loading] skeleton 표시",
        "label": "기능 2: 콘텐츠 이용료 한도 변경 입력"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-content-pay-limit-cta",
        "sectionName": "콘텐츠 이용료 한도 변경 CTA",
        "sectionDescription": "선택된 한도로 변경을 신청하는 버튼",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 콘텐츠 이용료 한도 변경 CTA\n[조건:변경불가] 버튼 비활성(disabled) 처리\n[조건:미선택] 버튼 비활성(disabled) 처리\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 한도변경 신청] 한도 변경 처리 → 성공 시 snack-bar 완료 안내",
        "label": "기능 3: 콘텐츠 이용료 한도 변경 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-MOBILE-PAY-HISTORY",
    "screenName": "휴대폰 결제 이용내역",
    "screenPath": "page/BIL/mobile-pay-history",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/mobile-pay-history",
      "spec_input": "specs-input/BIL-history.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-mobile-pay-list",
        "sectionName": "결제 내역 리스트",
        "sectionDescription": "선택 월의 휴대폰 결제 내역을 날짜 역순으로 표시. 가맹점명·결제금액·카테고리 태그 포함",
        "container": "vertical",
        "displayCount": {
          "min": "N",
          "max": "N"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김 + snack-bar",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/month-picker",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 결제 내역 리스트\n[규칙:FN-CHK-005] 선택 월의 휴대폰 결제 내역을 날짜 역순으로 나열한다\n[조건:내역없음] \"결제 내역이 없습니다\" empty 안내 노출\n[상태:loading] skeleton 표시\n[상태:empty] 안내 문구 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 내역행] 결제 상세 정보 bottom-sheet 노출",
        "label": "기능 1: 결제 내역 리스트"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-mobile-pay-summary",
        "sectionName": "월 합계 및 월 선택기",
        "sectionDescription": "조회 기준 월을 선택하고 해당 월 결제 합계 금액을 상단에 표시",
        "container": "horizontal",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "당월로 fallback",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/month-picker",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 월 합계 및 월 선택기\n[규칙:FN-CHK-005] 선택 월 결제 합계 금액을 월 선택기 하단에 표시한다\n[조건:범위초과] 이전 버튼 비활성화, 안내 문구 표시\n[액션:tap 월이동] 해당 월 결제 내역·합계 갱신",
        "label": "기능 2: 월 합계 및 월 선택기"
      },
      {
        "no": 3,
        "kind": "body",
        "sectionId": "section-BIL-mobile-pay-limit-link",
        "sectionName": "한도 안내 링크",
        "sectionDescription": "휴대폰 결제 한도 조회·변경 화면으로 이동하는 링크 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 3,
        "errorHandling": "영역 숨김",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 한도 안내 링크\n[규칙:FN-CHK-005] 휴대폰 결제 한도 변경 화면으로 이동하는 링크를 하단에 제공한다\n[액션:tap 한도변경] mobile-pay-limit 화면으로 이동",
        "label": "기능 3: 한도 안내 링크"
      }
    ]
  },
  {
    "screenId": "BIL-MOBILE-PAY-LIMIT",
    "screenName": "휴대폰 결제 한도",
    "screenPath": "page/BIL/mobile-pay-limit",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/mobile-pay-limit",
      "spec_input": "specs-input/BIL-settings.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-mobile-pay-current",
        "sectionName": "현재 한도 및 사용 현황",
        "sectionDescription": "현재 설정된 월 한도와 이번 달 사용 금액·잔여 한도를 표시한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/BIL/bill-summary-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 현재 한도 및 사용 현황\n[규칙:FN-SET-005] 현재 설정된 휴대폰 결제 한도와 사용 현황을 표시한다\n[고지:필수|POL-BIL-MOB-001-03] 정상 회선이 아닌 경우(정지·연체) 한도 변경 불가 안내\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 현재 한도 및 사용 현황"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-mobile-pay-limit-input",
        "sectionName": "한도 변경 입력",
        "sectionDescription": "변경할 한도 금액을 선택하거나 직접 입력한다. 하향/상향 여부에 따라 적용 시점을 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "유효성 오류 인라인 표시",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 한도 변경 입력\n[고지:필수|POL-BIL-MOB-001-05] 한도 하향은 즉시 적용됨을 표시\n[고지:필수|POL-BIL-MOB-001-06] 한도 상향은 심사 후 적용됨을 표시 — 예상 소요 시간 안내\n[조건:하향선택] mol/notice-card \"즉시 적용\" 안내 표시\n[조건:상향선택] mol/notice-card \"심사 후 적용\" 안내 표시\n[상태:loading] skeleton 표시",
        "label": "기능 2: 한도 변경 입력"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-mobile-pay-limit-cta",
        "sectionName": "한도 변경 CTA",
        "sectionDescription": "선택된 한도로 변경을 신청하는 버튼",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 한도 변경 CTA\n[조건:변경불가] 버튼 비활성(disabled) 처리\n[조건:미선택] 버튼 비활성(disabled) 처리\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 한도변경 신청] 한도 변경 처리 → 성공 시 snack-bar 완료 안내",
        "label": "기능 3: 한도 변경 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-NOTICE-SETTING",
    "screenName": "요금안내서 수신 설정",
    "screenPath": "page/BIL/notice-setting",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/notice-setting",
      "spec_input": "specs-input/BIL-settings.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-notice-method-select",
        "sectionName": "수신 방식 선택",
        "sectionDescription": "요금안내서를 받을 수신 방식(이메일·문자·앱 알림)을 선택한다. 복수 선택 가능",
        "container": "vertical",
        "displayCount": {
          "min": "N/N (수신 방식 수)",
          "max": ""
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 수신 방식 선택\n[규칙:FN-SET-001] 요금안내서 수신 방식을 선택하는 UI를 제공한다\n[고지:필수|POL-BIL-SET-001-01] 수신 방식별 안내 (이메일·문자·앱 알림) 선택 UI 제공\n[고지:필수|POL-BIL-SET-001-02] 수신처 변경 시 본인 인증 절차 필요함을 안내한다\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 수신방식] 해당 방식 활성/비활성 토글\n[액션:tap 수신처변경] 수신처 인증 플로우 진입",
        "label": "기능 1: 수신 방식 선택"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-notice-apply-date",
        "sectionName": "적용 예정일 안내",
        "sectionDescription": "수신 설정 변경사항이 적용될 예정일을 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "0-1/1",
          "max": ""
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 적용 예정일 안내\n[고지:필수|POL-BIL-SET-001-08] 변경사항은 다음 청구서 발행 주기부터 적용됨을 안내한다\n[조건:변경없음] 영역 미노출\n[상태:loading] 숨김",
        "label": "기능 2: 적용 예정일 안내"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-notice-setting-cta",
        "sectionName": "설정 저장 CTA",
        "sectionDescription": "변경된 수신 설정을 저장하는 버튼",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 설정 저장 CTA\n[조건:변경없음] 버튼 비활성(disabled) 처리\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 저장] 수신 설정 저장 API 호출 → 성공 시 snack-bar 완료 안내",
        "label": "기능 3: 설정 저장 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-COMPLETE",
    "screenName": "납부 완료",
    "screenPath": "page/BIL/pay-complete",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-complete",
      "spec_input": "specs-input/BIL-pay-flow.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-complete-result",
        "sectionName": "납부 결과 표시",
        "sectionDescription": "수납완료 또는 수납대기 상태를 명확히 표시. 납부 금액·일시·수단을 요약 표시",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 결과 표시\n[규칙:FN-PAY-011] 납부 처리 결과를 수납완료/수납대기로 구분하여 표시한다\n[고지:필수|POL-BIL-STAT-001-01] 수납완료 시 즉시 처리 완료 메시지 표시\n[고지:필수|POL-BIL-STAT-001-02] 수납대기 시 처리 지연 사유와 예상 완료 시점 안내\n[고지:필수|POL-BIL-SUSP-001] 서비스 정지 해제 진행 중인 경우 해제 진행 안내 표시\n[고지:필수|POL-BIL-CUS-001-05] 중복납부 주의 안내 문구 항상 표시\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 납부 결과 표시"
      },
      {
        "no": 2,
        "kind": "footer",
        "sectionId": "section-BIL-pay-complete-actions",
        "sectionName": "완료 후 액션",
        "sectionDescription": "납부 내역 확인, 청구 메인으로 이동 등 완료 후 다음 행동 버튼 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "항상 노출",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 완료 후 액션\n[규칙:FN-CHK-007] 납부 완료 후 납부 이력 확인 진입점을 제공한다\n[액션:tap 납부내역 확인] pay-history 화면으로 이동\n[액션:tap 청구메인으로] bill-main 화면으로 이동",
        "label": "기능 2: 완료 후 액션"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-CONFIRM",
    "screenName": "납부 확인",
    "screenPath": "page/BIL/pay-confirm",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-confirm",
      "spec_input": "specs-input/BIL-pay-flow.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-confirm-summary",
        "sectionName": "납부 정보 요약",
        "sectionDescription": "최종 납부 금액, 납부 대상, 납부수단을 요약 표시. 금액 변경 감지 시 변경 전/후 금액 강조",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/BIL/bill-summary-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 정보 요약\n[규칙:FN-PAY-004] 최종 납부 금액·대상·수단을 한 화면에 요약 표시한다\n[고지:필수|POL-BIL-PAY-001-09] 금액 변경 감지 시 변경 전/후 금액을 강조하고 재확인 요청\n[고지:필수|POL-BIL-PAY-004-08] 중복납부 주의 안내 문구를 화면 하단에 항상 표시\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 납부수단 변경] pay-method-select 화면으로 돌아가기",
        "label": "기능 1: 납부 정보 요약"
      },
      {
        "no": 2,
        "kind": "footer",
        "sectionId": "section-BIL-pay-confirm-cta",
        "sectionName": "납부 실행 CTA",
        "sectionDescription": "최종 납부를 실행하는 버튼. 금액 변경 감지 시 \"변경된 금액으로 납부\" 문구로 표시",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 (처리 중)",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/txt",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 실행 CTA\n[규칙:FN-PAY-004] 납부 실행 버튼을 제공한다\n[조건:금액변경] 버튼 레이블을 \"변경된 금액으로 납부\"로 표시\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 납부하기] 납부 처리 요청 → 성공 시 pay-complete / 실패 시 pay-fail",
        "label": "기능 2: 납부 실행 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-FAIL",
    "screenName": "납부 실패",
    "screenPath": "page/BIL/pay-fail",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-fail",
      "spec_input": "specs-input/BIL-pay-flow.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-fail-reason",
        "sectionName": "납부 실패 사유 안내",
        "sectionDescription": "납부 실패 사유(8종)를 사용자가 이해할 수 있는 언어로 표시하고 대처 방법을 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "최소 실패 상태 항상 노출",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 실패 사유 안내\n[규칙:FN-PAY-009] 납부 실패 시 실패 사유를 사용자 언어로 표시한다\n[고지:필수|POL-BIL-EXC-001-01] 실패 사유 8종 각각에 대해 명확한 안내 문구 제공\n[고지:필수|POL-BIL-CUS-001-04] 실패 사유와 함께 대체 납부수단 안내를 제공한다\n[상태:loading] skeleton 표시\n[상태:error] 기본 실패 메시지(\"납부 처리에 실패했습니다\") 표시",
        "label": "기능 1: 납부 실패 사유 안내"
      },
      {
        "no": 2,
        "kind": "footer",
        "sectionId": "section-BIL-pay-fail-actions",
        "sectionName": "재시도 및 대체수단 CTA",
        "sectionDescription": "납부 재시도 및 다른 납부수단으로 변경하는 버튼 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "재시도 버튼 항상 노출",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 재시도 및 대체수단 CTA\n[규칙:FN-PAY-010] 납부 실패 시 재시도 및 대체수단 선택 경로를 제공한다\n[고지:필수|POL-BIL-EXC-001-02] 재시도 가능 여부를 서버에서 제어하고 불가 시 버튼 숨김\n[액션:tap 재시도] pay-confirm 화면으로 돌아가기\n[액션:tap 다른수단으로] pay-method-select 화면으로 이동\n[액션:tap 고객센터] 고객센터 연결",
        "label": "기능 2: 재시도 및 대체수단 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-HISTORY",
    "screenName": "납부 이력",
    "screenPath": "page/BIL/pay-history",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-history",
      "spec_input": "specs-input/BIL-history.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-history-list",
        "sectionName": "납부 이력 리스트",
        "sectionDescription": "선택 월의 납부 이력을 날짜 역순으로 표시. 납부일·금액·납부 수단·상태 태그 포함",
        "container": "vertical",
        "displayCount": {
          "min": "N",
          "max": "N"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김 + snack-bar",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/month-picker",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 이력 리스트\n[규칙:FN-CHK-007] 선택 월의 납부 이력을 날짜 역순으로 나열한다\n[조건:수납완료] atom/tag(tone=positive) 표시\n[조건:수납대기] atom/tag(tone=warning) 표시\n[조건:이력없음] \"납부 이력이 없습니다\" empty 안내 노출\n[상태:loading] skeleton 표시\n[상태:empty] 안내 문구 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 이력행] 납부 상세 bottom-sheet 노출 (영수증 발급 링크 포함)",
        "label": "기능 1: 납부 이력 리스트"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-receipt-link",
        "sectionName": "증빙 발급 링크",
        "sectionDescription": "납부 이력에서 증빙 서류(영수증·납부확인서) 발급 화면으로 이동하는 링크 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 증빙 발급 링크\n[규칙:FN-CHK-007] 납부 이력 화면 하단에 증빙 발급 화면으로 이동하는 링크를 제공한다\n[액션:tap 증빙발급] receipt-issue 화면으로 이동",
        "label": "기능 2: 증빙 발급 링크"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-METHOD-SELECT",
    "screenName": "납부수단 선택",
    "screenPath": "page/BIL/pay-method-select",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-method-select",
      "spec_input": "specs-input/BIL-pay-flow.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-method-list",
        "sectionName": "납부수단 목록",
        "sectionDescription": "등록된 납부수단을 카드번호·계좌번호 마스킹 처리하여 목록으로 표시. 타인 명의 수단은 별도 표시",
        "container": "vertical",
        "displayCount": {
          "min": "N/N (등록 수단 수)",
          "max": ""
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/icon",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부수단 목록\n[규칙:FN-PAY-002] 등록된 납부수단을 목록으로 표시한다\n[고지:필수|POL-BIL-SEC-001-02] 카드번호·계좌번호는 마스킹 처리하여 표시한다\n[고지:필수|POL-BIL-AUTH-001-07] 타인 명의 납부수단은 별도 표시하고 선택 시 동의 절차 안내\n[고지:필수|POL-BIL-AUTH-001-09] 인증 5회 실패 시 잠금 처리 및 잠금 해제 안내 표시\n[상태:loading] skeleton 표시\n[상태:empty] \"등록된 납부수단이 없습니다\" 안내 + 신규 등록 버튼\n[상태:error] snack-bar 재시도 안내\n[액션:tap 수단 선택] 해당 납부수단 선택 → 타인 명의 여부에 따라 분기\n[액션:tap 타인명의수단] third-party-consent 화면으로 이동",
        "label": "기능 1: 납부수단 목록"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-pay-method-add",
        "sectionName": "납부수단 추가",
        "sectionDescription": "새 납부수단(카드·계좌)을 등록하는 링크 또는 버튼. 목록 하단에 고정 노출",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "항상 노출",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/icon",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부수단 추가\n[규칙:FN-PAY-003] 새 납부수단 등록 진입점을 제공한다\n[액션:tap 납부수단 추가] 납부수단 등록 외부 플로우 진입",
        "label": "기능 2: 납부수단 추가"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-RESERVE-COMPLETE",
    "screenName": "납부 예약 완료",
    "screenPath": "page/BIL/pay-reserve-complete",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-reserve-complete",
      "spec_input": "specs-input/BIL-pay-reserve.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-reserve-result",
        "sectionName": "예약 결과 표시",
        "sectionDescription": "납부 예약 성공/실패/취소 결과를 명확히 표시. 성공 시 예약 날짜·수단과 취소 방법 안내",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "최소 실패 상태 항상 노출",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 예약 결과 표시\n[고지:필수|POL-BIL-PAY-003-10] 예약 성공 시 예약 날짜·수단과 함께 취소 방법(경로·기한) 안내\n[고지:필수|POL-BIL-PAY-003-10] 예약 실패 시 실패 사유와 재시도 방법 안내\n[조건:예약성공] mol/notice-card(tone=info) 노출\n[조건:예약실패] mol/notice-card(tone=error) 노출\n[조건:취소완료] 취소 완료 확인 메시지 노출\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 예약 결과 표시"
      },
      {
        "no": 2,
        "kind": "footer",
        "sectionId": "section-BIL-pay-reserve-complete-actions",
        "sectionName": "완료 후 액션",
        "sectionDescription": "예약 결과 확인 후 청구 메인 이동, 예약 취소, 재시도 등 다음 행동 버튼 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "홈 이동 버튼 항상 노출",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 완료 후 액션\n[조건:예약성공] 예약 취소 버튼 노출 (실행 전날까지 활성)\n[조건:예약실패] 재시도 버튼 노출\n[액션:tap 청구메인으로] bill-main 화면으로 이동\n[액션:tap 예약취소] pay-reserve 화면으로 이동 (취소 모드)\n[액션:tap 재시도] pay-reserve 화면으로 이동",
        "label": "기능 2: 완료 후 액션"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-RESERVE",
    "screenName": "납부 예약",
    "screenPath": "page/BIL/pay-reserve",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-reserve",
      "spec_input": "specs-input/BIL-pay-reserve.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-reserve-current",
        "sectionName": "기존 예약 상태 표시",
        "sectionDescription": "기존 납부 예약이 있는 경우 예약 날짜·금액·수단을 표시하고 변경/취소 가능 여부를 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "0-1/1",
          "max": ""
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 기존 예약 상태 표시\n[고지:필수|POL-BIL-PAY-003-03] 예약 변경은 실행 전날까지만 가능함을 명시\n[고지:필수|POL-BIL-PAY-003-04] 실행 당일 취소 불가 상태 시 취소 버튼 숨김 + 안내 문구 표시\n[조건:기존예약없음] 영역 미노출\n[조건:취소불가] atom/banner(tone=warning) 노출 — 취소 기한 경과 안내\n[상태:loading] skeleton 표시\n[상태:error] 영역 숨김\n[액션:tap 예약변경] 예약 날짜·수단 수정 모드 전환\n[액션:tap 예약취소] 예약 취소 확인 다이얼로그 노출",
        "label": "기능 1: 기존 예약 상태 표시"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-pay-reserve-input",
        "sectionName": "예약 날짜·수단 입력",
        "sectionDescription": "납부 예약 날짜를 선택하고 납부수단을 지정한다. 납부기한 이전 날짜만 선택 가능",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/month-picker",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 예약 날짜·수단 입력\n[규칙:FN-PAY-005] 납부 예약 날짜와 수단을 선택하는 UI를 제공한다\n[고지:필수|POL-BIL-PAY-003-03] 예약 날짜는 납부기한 이전 날짜만 선택 가능하도록 제한\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 날짜선택] 날짜 피커 활성화\n[액션:tap 납부수단 선택] pay-method-select 화면으로 이동",
        "label": "기능 2: 예약 날짜·수단 입력"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-pay-reserve-cta",
        "sectionName": "예약 확정 CTA",
        "sectionDescription": "선택된 날짜·수단으로 납부 예약을 확정하는 버튼. 날짜 또는 수단 미선택 시 비활성",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 예약 확정 CTA\n[조건:날짜미선택] 버튼 비활성(disabled) 처리\n[조건:수단미선택] 버튼 비활성(disabled) 처리\n[액션:tap 예약하기] 납부 예약 처리 요청 → 성공 시 pay-reserve-complete",
        "label": "기능 3: 예약 확정 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-PAY-TARGET",
    "screenName": "납부 대상 선택",
    "screenPath": "page/BIL/pay-target",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/pay-target",
      "spec_input": "specs-input/BIL-pay-flow.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-pay-target-list",
        "sectionName": "납부 대상 목록",
        "sectionDescription": "납부 가능한 청구 대상 회선과 금액을 목록으로 표시. 수납완료 항목은 제외하고 제한 항목은 비활성 표시",
        "container": "vertical",
        "displayCount": {
          "min": "N/N (납부 대상 수)",
          "max": ""
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 대상 목록\n[규칙:FN-PAY-001] 납부 가능한 청구 대상 회선과 금액을 목록으로 표시한다\n[규칙:FN-COM-003] 회선 식별자(회선번호·명칭)를 함께 표시한다\n[고지:필수|POL-BIL-PAY-001-02] 수납완료 항목은 목록에서 제외하고 제외 사유를 표시한다\n[고지:필수|POL-BIL-PAY-002-05] 수납대기 상태인 항목은 선택 비활성 처리하고 사유를 표시한다\n[고지:필수|POL-BIL-CUS-001-03] 납부 제한 사유 6종 해당 시 해당 항목 비활성 + 사유 고지\n[상태:loading] skeleton 표시\n[상태:empty] \"납부 대상이 없습니다\" 안내 텍스트 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 항목 선택] 해당 항목 선택/해제 토글",
        "label": "기능 1: 납부 대상 목록"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-pay-warning",
        "sectionName": "납부 제한·경고 배너",
        "sectionDescription": "24시간 내 납부 이력, 수납대기 상태 등 납부 진행 시 주의가 필요한 경우 경고 배너 표시",
        "container": "vertical",
        "displayCount": {
          "min": "0-1/1",
          "max": ""
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 제한·경고 배너\n[고지:필수|POL-BIL-PAY-002-03] 최근 24시간 내 납부 이력 있을 시 중복 주의 경고 배너 노출\n[조건:24시간_내_납부] atom/banner(tone=warning) 노출 — \"최근 납부 이력이 있습니다\" 문구\n[상태:loading] 숨김\n[상태:error] 숨김",
        "label": "기능 2: 납부 제한·경고 배너"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-pay-target-cta",
        "sectionName": "납부하기 CTA",
        "sectionDescription": "선택된 납부 대상에 대한 납부 진행 버튼. 선택 항목 없거나 전체 비활성 시 버튼 비활성",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/txt",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부하기 CTA\n[규칙:FN-PAY-001] 선택된 납부 대상이 있을 때만 버튼 활성화\n[조건:선택없음] 버튼 비활성(disabled) 처리\n[조건:전체제한] 버튼 비활성(disabled) 처리\n[액션:tap 납부하기] pay-method-select 화면으로 이동",
        "label": "기능 3: 납부하기 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-PREPAY-SELECT",
    "screenName": "선결제",
    "screenPath": "page/BIL/prepay-select",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/prepay-select",
      "spec_input": "specs-input/BIL-pay-prepay.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-prepay-amount-info",
        "sectionName": "선결제 가능 금액 안내",
        "sectionDescription": "현재 실시간 사용량을 기반으로 선결제 가능 금액 범위를 표시하고 선결제 개념을 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 선결제 가능 금액 안내\n[규칙:FN-PAY-007] 현재 사용량 기반 예상 금액을 선결제 가능 금액으로 표시한다\n[고지:필수|POL-BIL-PAY-003-09] 선결제 금액은 다음 청구서 발행 시 차감됨을 명시한다\n[고지:필수|POL-BIL-PAY-003-08] 선결제에 사용 가능한 납부수단 조건을 안내한다\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 선결제 가능 금액 안내"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-prepay-amount-input",
        "sectionName": "선결제 금액 입력",
        "sectionDescription": "선결제할 금액을 직접 입력하거나 제안 금액 중 선택한다. 최소/최대 한도 유효성 검증 포함",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "유효성 오류 인라인 표시",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/txt",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 선결제 금액 입력\n[규칙:FN-PAY-007] 선결제 금액 입력 또는 선택 UI를 제공한다\n[조건:한도초과] 인라인 오류 메시지 표시 — \"선결제 가능 한도를 초과했습니다\"\n[조건:최소미달] 인라인 오류 메시지 표시 — \"최소 선결제 금액 이상을 입력하세요\"\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 금액선택] 해당 금액으로 설정",
        "label": "기능 2: 선결제 금액 입력"
      },
      {
        "no": 3,
        "kind": "body",
        "sectionId": "section-BIL-prepay-method-select",
        "sectionName": "납부수단 선택",
        "sectionDescription": "선결제에 사용할 납부수단을 선택한다. 선결제 불가 수단은 비활성 처리",
        "container": "vertical",
        "displayCount": {
          "min": "N/N (등록 수단 수)",
          "max": ""
        },
        "displayPriority": 3,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/icon",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부수단 선택\n[고지:필수|POL-BIL-PAY-003-08] 선결제 불가 납부수단에 \"사용불가\" 태그 표시 및 사유 안내\n[상태:loading] skeleton 표시\n[상태:empty] \"등록된 납부수단이 없습니다\" 안내 + 수단 등록 버튼\n[상태:error] snack-bar 재시도 안내\n[액션:tap 수단선택] 해당 납부수단 선택",
        "label": "기능 3: 납부수단 선택"
      },
      {
        "no": 4,
        "kind": "footer",
        "sectionId": "section-BIL-prepay-cta",
        "sectionName": "선결제 실행 CTA",
        "sectionDescription": "선택된 금액·수단으로 선결제를 실행하는 버튼. 금액 또는 수단 미선택 시 비활성",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 선결제 실행 CTA\n[조건:금액미입력] 버튼 비활성(disabled) 처리\n[조건:수단미선택] 버튼 비활성(disabled) 처리\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 선결제하기] 선결제 처리 요청 → 성공 시 pay-complete / 실패 시 pay-fail",
        "label": "기능 4: 선결제 실행 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-PROXY-PAY-CHECK",
    "screenName": "대리납부 권한 확인",
    "screenPath": "page/BIL/proxy-pay-check",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/proxy-pay-check",
      "spec_input": "specs-input/BIL-pay-proxy.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-proxy-auth-check",
        "sectionName": "대리납부 권한 안내 및 확인",
        "sectionDescription": "대리납부 가능한 관계 유형(가족·법정대리·위임)과 권한 확인 방법을 안내하고, 현재 사용자의 권한 상태를 표시한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 대리납부 권한 안내 및 확인\n[규칙:FN-PAY-006] 대리납부 권한 유형을 표시하고 현재 사용자의 권한 상태를 확인한다\n[고지:필수|POL-BIL-AGT-001] 가족·법정대리·위임 3가지 권한 유형과 각 조건을 안내한다\n[조건:권한없음] atom/banner(tone=warning) 노출 — 관계 등록 안내 링크 포함\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 권한유형] 해당 권한 유형 상세 안내 및 확인 절차 진입",
        "label": "기능 1: 대리납부 권한 안내 및 확인"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-proxy-target-select",
        "sectionName": "대리납부 대상 선택",
        "sectionDescription": "권한이 확인된 경우 대리납부할 대상(회선·금액)을 선택한다",
        "container": "vertical",
        "displayCount": {
          "min": "N/N (대상 수)",
          "max": ""
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 대리납부 대상 선택\n[고지:필수|POL-BIL-AGT-001] 권한 확인된 관계에 한해 대리납부 대상 표시\n[조건:권한없음] 영역 미노출\n[상태:loading] skeleton 표시\n[상태:empty] \"대리납부 가능한 대상이 없습니다\" 안내\n[상태:error] snack-bar 재시도 안내\n[액션:tap 대상선택] 해당 대상 선택 → proxy-pay-confirm으로 이동",
        "label": "기능 2: 대리납부 대상 선택"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-proxy-check-cta",
        "sectionName": "권한 확인 진행 CTA",
        "sectionDescription": "선택된 대리납부 대상에 대한 납부 확인 화면으로 이동하는 버튼",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 권한 확인 진행 CTA\n[조건:대상미선택] 버튼 비활성(disabled) 처리\n[조건:권한없음] 버튼 비활성(disabled) 처리\n[액션:tap 납부진행] proxy-pay-confirm 화면으로 이동",
        "label": "기능 3: 권한 확인 진행 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-PROXY-PAY-CONFIRM",
    "screenName": "대리납부 실행",
    "screenPath": "page/BIL/proxy-pay-confirm",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/proxy-pay-confirm",
      "spec_input": "specs-input/BIL-pay-proxy.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-proxy-confirm-summary",
        "sectionName": "대리납부 정보 요약",
        "sectionDescription": "대리납부 대상 명의자·회선·금액·수단을 요약 표시. 대리납부 분리 기록 안내 포함",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 대리납부 정보 요약\n[규칙:FN-PAY-006] 대리납부 대상 명의자·회선·금액·수단을 표시한다\n[규칙:FN-PAY-004] 납부 확인 절차를 준수한다\n[고지:필수|POL-BIL-AGT-001-09] 대리납부 내역은 명의자 내역과 별도 기록됨을 안내한다\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 대리납부 정보 요약"
      },
      {
        "no": 2,
        "kind": "footer",
        "sectionId": "section-BIL-proxy-confirm-cta",
        "sectionName": "대리납부 실행 CTA",
        "sectionDescription": "대리납부를 최종 실행하는 버튼",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 (처리 중)",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 대리납부 실행 CTA\n[조건:처리중] 버튼 비활성(loading) 처리\n[액션:tap 대리납부 실행] 납부 처리 요청 → 성공 시 pay-complete / 실패 시 pay-fail\n[액션:tap 취소] proxy-pay-check 화면으로 돌아가기",
        "label": "기능 2: 대리납부 실행 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-REALTIME-USAGE",
    "screenName": "실시간 예상 요금",
    "screenPath": "page/BIL/realtime-usage",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/realtime-usage",
      "spec_input": "specs-input/BIL-bill-check.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-realtime-summary",
        "sectionName": "예상 요금 카드",
        "sectionDescription": "현재까지 누적 사용량 기반 이번 달 예상 청구액을 표시. \"예상\" 라벨 필수 부착",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/BIL/bill-summary-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 예상 요금 카드\n[규칙:FN-CHK-004] 실시간 사용 데이터를 집계하여 예상 청구액을 표시한다\n[고지:필수|POL-BIL-CHG-001-07] atom/tag(label=예상) 을 금액 옆에 반드시 표시한다 — 확정 금액과 혼동 방지\n[조건:갱신중] skeleton 표시\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 새로고침] 실시간 데이터 재조회",
        "label": "기능 1: 예상 요금 카드"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-usage-breakdown",
        "sectionName": "사용량 항목 현황",
        "sectionDescription": "데이터·음성·SMS 등 사용량 항목별 현재까지 사용량과 잔여량을 바 그래프 또는 리스트로 표시",
        "container": "vertical",
        "displayCount": {
          "min": "N",
          "max": "N"
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 사용량 항목 현황\n[규칙:FN-CHK-004] 데이터·음성·SMS 항목별 사용량을 노출한다\n[고지:필수|POL-BIL-CHG-001-07] 각 항목 수치가 예상치임을 \"(예상)\" 텍스트로 병기한다\n[조건:사용량임박] atom/banner(tone=warning) 노출 — \"데이터 소진 임박\" 경고\n[조건:항목없음] 해당 항목 행 숨김\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 항목행] 해당 사용량 상세 bottom-sheet 노출",
        "label": "기능 2: 사용량 항목 현황"
      },
      {
        "no": 3,
        "kind": "body",
        "sectionId": "section-BIL-realtime-notice",
        "sectionName": "실시간 안내 공지",
        "sectionDescription": "예상 요금 산정 기준, 갱신 주기 등 이용자 고지 사항을 공지 카드로 표시",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 3,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 실시간 안내 공지\n[고지:필수|POL-BIL-CHG-001-07] \"예상 요금은 실제 청구 금액과 다를 수 있습니다\" 문구를 항상 표시한다\n[규칙:FN-CHK-004] 데이터 갱신 시각(HH:MM 기준)을 공지 카드에 함께 표시한다\n[상태:error] 영역 숨김 (공지 카드 로드 실패 시 UX 영향 없음)",
        "label": "기능 3: 실시간 안내 공지"
      }
    ]
  },
  {
    "screenId": "BIL-RECEIPT-ISSUE",
    "screenName": "증빙 발급",
    "screenPath": "page/BIL/receipt-issue",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/receipt-issue",
      "spec_input": "specs-input/BIL-history.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-receipt-select",
        "sectionName": "증빙 종류 선택 및 발급",
        "sectionDescription": "발급할 증빙 종류를 선택하고 발급 버튼을 통해 요청한다. 1일 5회 한도 정책 적용",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "오류 메시지 inline 표시",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/button",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 증빙 종류 선택 및 발급\n[규칙:FN-CHK-007] 영수증·납부확인서 중 하나를 선택 후 발급 버튼을 탭하면 발급을 요청한다\n[고지:필수|POL-BIL-DOC-001-08] 1일 5회 발급 한도 초과 시 버튼 비활성화 + \"오늘 발급 한도를 초과했습니다\" 안내\n[고지:필수|POL-BIL-SEC-001-07] 화면 캡처 방지 정책 적용 — 캡처 시 검은 화면 표시\n[상태:loading] 발급 요청 중 버튼 로딩 스피너 표시\n[상태:error] inline 오류 메시지 표시 + 재시도 버튼\n[액션:tap 발급] 발급 요청 API 호출 → 성공 시 문서 뷰어 노출",
        "label": "기능 1: 증빙 종류 선택 및 발급"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-receipt-notice",
        "sectionName": "발급 정책 안내",
        "sectionDescription": "1일 발급 한도, 캡처 방지, 재발행 유의 사항을 안내 카드로 표시",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 발급 정책 안내\n[고지:필수|POL-BIL-DOC-001-08] \"증빙 서류는 1일 최대 5회까지 발급할 수 있습니다\" 문구 필수 표시\n[고지:필수|POL-BIL-SEC-001-07] \"화면 캡처 및 녹화는 보안 정책에 따라 제한됩니다\" 문구 필수 표시",
        "label": "기능 2: 발급 정책 안내"
      }
    ]
  },
  {
    "screenId": "BIL-THIRD-PARTY-CONSENT",
    "screenName": "타인 명의 동의",
    "screenPath": "page/BIL/third-party-consent",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/third-party-consent",
      "spec_input": "specs-input/BIL-pay-proxy.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-third-party-consent-info",
        "sectionName": "타인 명의 동의 요청 안내",
        "sectionDescription": "타인 명의 납부수단 사용을 위한 동의 요청 내용과 절차를 안내한다",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 타인 명의 동의 요청 안내\n[규칙:FN-PAY-003] 타인 명의 납부수단 사용 시 명의자 동의 절차를 제공한다\n[고지:필수|POL-BIL-AUTH-001-07] 타인 명의 수단 사용 시 명의자 동의가 필수임을 안내한다\n[고지:필수|POL-BIL-AGT-001-06] 동의의 유효 시간이 24시간임을 명시한다\n[고지:필수|POL-BIL-AGT-001-08] 명의자 승인 후 철회가 불가함을 명확히 고지한다\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내",
        "label": "기능 1: 타인 명의 동의 요청 안내"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-third-party-consent-status",
        "sectionName": "동의 상태 확인",
        "sectionDescription": "동의 요청 발송 후 명의자의 승인/거부/만료 상태를 실시간으로 확인한다",
        "container": "vertical",
        "displayCount": {
          "min": "0-1/1",
          "max": ""
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 동의 상태 확인\n[조건:동의대기] atom/tag(tone=neutral, label=대기중) 노출\n[조건:동의승인] atom/tag(tone=positive, label=승인완료) 노출 → 납부 진행 CTA 활성\n[조건:동의거부] atom/tag(tone=negative, label=거부) 노출 + 다른 수단 안내\n[조건:동의만료] atom/tag(tone=warning, label=만료) 노출 + 재요청 버튼\n[상태:loading] skeleton 표시",
        "label": "기능 2: 동의 상태 확인"
      },
      {
        "no": 3,
        "kind": "footer",
        "sectionId": "section-BIL-third-party-consent-cta",
        "sectionName": "동의 요청 및 진행 CTA",
        "sectionDescription": "동의 요청 발송 버튼과 동의 승인 후 납부 진행 버튼을 상태에 따라 표시",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "버튼 비활성 유지",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/btn",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 동의 요청 및 진행 CTA\n[조건:동의전] \"동의 요청 발송\" 버튼 노출\n[조건:동의대기] 버튼 비활성(loading) — \"승인 대기 중\" 문구\n[조건:동의승인] \"납부 진행\" 버튼 활성\n[조건:동의거부] \"다른 수단으로 납부\" 버튼 노출\n[조건:동의만료] \"동의 재요청\" 버튼 노출\n[액션:tap 동의요청발송] 동의 요청 발송 API 호출\n[액션:tap 납부진행] pay-confirm 화면으로 이동\n[액션:tap 다른수단으로] pay-method-select 화면으로 이동",
        "label": "기능 3: 동의 요청 및 진행 CTA"
      }
    ]
  },
  {
    "screenId": "BIL-UNPAID-RESULT",
    "screenName": "미납 해소 완료",
    "screenPath": "page/BIL/unpaid-result",
    "sectionName": "SB-BIL",
    "lastUpdated": "2026.05.06",
    "writer": "(generate-sb.js)",
    "version": "v1.0",
    "mapping": {
      "policy": "page/BIL/unpaid-result",
      "spec_input": "specs-input/BIL-unpaid.md"
    },
    "areas": [
      {
        "no": 1,
        "kind": "body",
        "sectionId": "section-BIL-unpaid-result-status",
        "sectionName": "납부 완료 및 정지 해제 상태 표시",
        "sectionDescription": "미납 납부 완료 결과와 서비스 정지 해제 여부를 상태별로 명확하게 표시",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 1,
        "errorHandling": "영역 숨김 + snack-bar",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "ogn/BIL/bill-summary-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/status-bar",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "ogn/header",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 납부 완료 및 정지 해제 상태 표시\n[규칙:FN-CHK-009] 납부 금액·일시·수납 상태를 카드에 표시한다\n[고지:필수|POL-BIL-SUSP-001-07] suspension_status=delayed 인 경우 atom/banner(tone=warning) 로 \"서비스 정지 해제 처리가 지연되고 있습니다. 잠시 후 다시 확인해 주세요\" 안내를 반드시 표시한다\n[조건:즉시해제] \"서비스가 정상 복구되었습니다\" 완료 메시지 노출\n[조건:처리중] \"처리 중\" 스피너 + 지연 안내 배너 노출\n[상태:loading] skeleton 표시\n[상태:error] snack-bar 재시도 안내\n[액션:tap 납부이력] pay-history 화면으로 이동",
        "label": "기능 1: 납부 완료 및 정지 해제 상태 표시"
      },
      {
        "no": 2,
        "kind": "body",
        "sectionId": "section-BIL-unpaid-device-action",
        "sectionName": "단말 조치 안내",
        "sectionDescription": "서비스 복구 후 단말 재시작 또는 네트워크 재설정 등 필요한 조치를 안내",
        "container": "vertical",
        "displayCount": {
          "min": "0",
          "max": "1"
        },
        "displayPriority": 2,
        "errorHandling": "영역 숨김",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "mol/notice-card",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 단말 조치 안내\n[고지:필수|POL-BIL-SUSP-001-08] device_action_required=true 인 경우 \"서비스 복구 후 단말을 재시작해 주세요\" 안내 문구를 반드시 노출한다\n[조건:조치불필요] 영역 숨김\n[조건:즉시해제완료] mol/notice-card(tone=info) 로 단말 재시작 안내 노출\n[액션:tap 자세히보기] 단말 조치 방법 안내 페이지로 이동",
        "label": "기능 2: 단말 조치 안내"
      },
      {
        "no": 3,
        "kind": "body",
        "sectionId": "section-BIL-unpaid-result-actions",
        "sectionName": "추가 안내 및 홈 복귀",
        "sectionDescription": "고객센터 연결, 납부 이력 확인, 홈 화면 복귀 버튼을 제공",
        "container": "vertical",
        "displayCount": {
          "min": "1",
          "max": "1"
        },
        "displayPriority": 3,
        "errorHandling": "영역 숨김",
        "dynamic": false,
        "organisms": [
          {
            "organismId": "atom/button",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "mol/list-item-link",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 추가 안내 및 홈 복귀\n[규칙:FN-CHK-009] 완료 화면 하단에 홈 복귀 버튼과 고객센터 링크를 제공한다\n[액션:tap 홈으로] 앱 홈 화면으로 이동\n[액션:tap 납부이력확인] pay-history 화면으로 이동\n[액션:tap 고객센터] 고객센터 전화 연결 또는 채팅 화면으로 이동",
        "label": "기능 3: 추가 안내 및 홈 복귀"
      },
      {
        "no": 4,
        "kind": "body",
        "sectionId": "section-BIL-unpaid-partial-lines",
        "sectionName": "부분 해제 회선 안내",
        "sectionDescription": "일부 회선만 정지 해제된 경우 미해제 회선 목록과 이유를 표시",
        "container": "vertical",
        "displayCount": {
          "min": "0",
          "max": "N"
        },
        "displayPriority": 4,
        "errorHandling": "영역 숨김",
        "dynamic": true,
        "organisms": [
          {
            "organismId": "mol/list-item-bill-item",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/tag",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          },
          {
            "organismId": "atom/banner",
            "organismName": "",
            "organismDescription": "",
            "serverControl": ""
          }
        ],
        "descriptions": "[영역명] 부분 해제 회선 안내\n[고지:필수|POL-BIL-SUSP-001-07] 미해제 회선이 존재하는 경우 회선별 해제 상태와 사유를 표시한다\n[조건:전체해제] 영역 숨김\n[조건:부분해제] 미해제 회선 목록 + 각 회선별 처리 상태 태그 노출\n[상태:loading] skeleton 표시\n[상태:error] 영역 숨김\n[액션:tap 회선행] 해당 회선 납부·해제 상태 상세 bottom-sheet 노출",
        "label": "기능 4: 부분 해제 회선 안내"
      }
    ]
  }
];

(async function renderScreenBatch() {


// ═══════════════════════════════════
// Colors
// ═══════════════════════════════════
const C = {
  white:      { r: 1,     g: 1,     b: 1 },
  gray50:     { r: 0.973, g: 0.973, b: 0.980 },
  gray100:    { r: 0.945, g: 0.957, b: 0.961 },
  gray200:    { r: 0.878, g: 0.906, b: 0.922 },
  gray300:    { r: 0.800, g: 0.835, b: 0.855 },
  gray400:    { r: 0.533, g: 0.573, b: 0.631 },
  gray600:    { r: 0.294, g: 0.333, b: 0.388 },
  gray800:    { r: 0.129, g: 0.157, b: 0.196 },
  brand:      { r: 0.212, g: 0.090, b: 0.808 },
  brandL:     { r: 0.910, g: 0.941, b: 1.000 },
  warnBg:     { r: 1.000, g: 0.976, b: 0.878 },
  warnText:   { r: 0.902, g: 0.471, b: 0.000 },
  errBg:      { r: 1.000, g: 0.961, b: 0.961 },
  errText:    { r: 0.788, g: 0.165, b: 0.165 },
  infoBg:     { r: 0.910, g: 0.957, b: 0.992 },
  infoText:   { r: 0.098, g: 0.443, b: 0.784 },
  successBg:  { r: 0.922, g: 0.984, b: 0.933 },
  successText:{ r: 0.184, g: 0.620, b: 0.263 },
  divider:    { r: 0.945, g: 0.953, b: 0.961 },
};

// ═══════════════════════════════════
// Font loading
// ═══════════════════════════════════
let FONT = "Inter";
const FONT_STYLES = { R: "Regular", M: "Medium", SB: "SemiBold", B: "Bold" };
for (const fam of ["Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "Inter"]) {
  try {
    await figma.loadFontAsync({ family: fam, style: "Regular" });
    await figma.loadFontAsync({ family: fam, style: "Bold" });
    try { await figma.loadFontAsync({ family: fam, style: "Medium" }); } catch(e) { FONT_STYLES.M = "Regular"; }
    try { await figma.loadFontAsync({ family: fam, style: "SemiBold" }); } catch(e) { FONT_STYLES.SB = "Bold"; }
    FONT = fam; break;
  } catch(e) { continue; }
}

// ═══════════════════════════════════
// Primitive helpers
// ═══════════════════════════════════
function S(c) { return [{ type: "SOLID", color: c }]; }

function vf(name, opts) {
  opts = opts || {};
  const fr = figma.createFrame();
  fr.name = name;
  fr.layoutMode = "VERTICAL";
  fr.primaryAxisSizingMode   = opts.hug    ? "AUTO"  : "FIXED";
  fr.counterAxisSizingMode   = opts.wstretch ? "AUTO" : "FIXED";
  fr.fills = opts.fill ? S(opts.fill) : [];
  fr.itemSpacing    = opts.gap || 0;
  fr.paddingTop     = opts.pt  || 0;
  fr.paddingRight   = opts.pr  || 0;
  fr.paddingBottom  = opts.pb  || 0;
  fr.paddingLeft    = opts.pl  || 0;
  if (opts.align)      fr.primaryAxisAlignItems  = opts.align;
  if (opts.crossAlign) fr.counterAxisAlignItems  = opts.crossAlign;
  if (opts.radius)     fr.cornerRadius = opts.radius;
  if (opts.stroke)   { fr.strokes = S(opts.stroke); fr.strokeWeight = opts.sw || 1; fr.strokeAlign = "INSIDE"; }
  if (opts.clip !== undefined) fr.clipsContent = opts.clip;
  if (opts.w && opts.h) fr.resize(opts.w, opts.h);
  else if (opts.w)      fr.resize(opts.w, 100);
  return fr;
}

function hf(name, opts) {
  opts = opts || {};
  const fr = figma.createFrame();
  fr.name = name;
  fr.layoutMode = "HORIZONTAL";
  fr.primaryAxisSizingMode   = opts.hug    ? "AUTO"  : "FIXED";
  fr.counterAxisSizingMode   = opts.hug    ? "AUTO"  : "FIXED";
  fr.fills = opts.fill ? S(opts.fill) : [];
  fr.itemSpacing    = opts.gap || 0;
  fr.paddingTop     = opts.pt  || 0;
  fr.paddingRight   = opts.pr  || 0;
  fr.paddingBottom  = opts.pb  || 0;
  fr.paddingLeft    = opts.pl  || 0;
  if (opts.align)      fr.primaryAxisAlignItems  = opts.align;
  if (opts.crossAlign) fr.counterAxisAlignItems  = opts.crossAlign;
  if (opts.radius)     fr.cornerRadius = opts.radius;
  if (opts.stroke)   { fr.strokes = S(opts.stroke); fr.strokeWeight = opts.sw || 1; fr.strokeAlign = "INSIDE"; }
  if (opts.w && opts.h) fr.resize(opts.w, opts.h);
  else if (opts.w)      fr.resize(opts.w, 44);
  return fr;
}

function tx(str, opts) {
  opts = opts || {};
  const t = figma.createText();
  const styleKey = opts.weight || "R";
  const style = FONT_STYLES[styleKey] || "Regular";
  t.fontName   = { family: FONT, style: style };
  t.fontSize   = opts.sz || 13;
  t.characters = String(str || "");
  t.fills      = S(opts.c || C.gray800);
  if (opts.align) t.textAlignHorizontal = opts.align;
  if (opts.maxW) { t.textAutoResize = "HEIGHT"; t.resize(opts.maxW, t.height); }
  if (opts.grow) t.layoutGrow = 1;
  return t;
}

function rc(name, w, h, fill, opts) {
  opts = opts || {};
  const r = figma.createRectangle();
  r.name = name;
  r.resize(w, h);
  r.fills = fill ? S(fill) : [];
  r.cornerRadius = opts.radius || 0;
  if (opts.stroke) { r.strokes = S(opts.stroke); r.strokeWeight = opts.sw || 1; r.strokeAlign = "INSIDE"; }
  return r;
}

// ═══════════════════════════════════
// Tag parser
// ═══════════════════════════════════
function parseTags(desc) {
  if (!desc) return [];
  return desc.split("\n").map(function(line) {
    const m = line.match(/^\[([^\]:]+)(?::([^\]]*))?\]\s*(.*)/);
    if (!m) return null;
    return { tag: m[1].trim(), sub: (m[2] || "").trim(), body: (m[3] || "").trim() };
  }).filter(Boolean);
}
function getTag(desc, name) { return parseTags(desc).filter(function(t) { return t.tag === name; }); }

// ═══════════════════════════════════
// Chrome / Footer org IDs
// ═══════════════════════════════════
const CHROME_IDS  = ["ogn/status-bar","ogn/header"];
const FOOTER_IDS  = ["ogn/sticky-footer-cta","ogn/footer-cs","ogn/tab-bar","ogn/gnb"];
const CHROME_ALL  = CHROME_IDS.concat(FOOTER_IDS);

function isChrome(oid)  { return CHROME_IDS.indexOf(oid)  >= 0; }
function isFooter(oid)  { return FOOTER_IDS.indexOf(oid)  >= 0; }
function isChromeAll(oid) { return CHROME_ALL.indexOf(oid) >= 0; }

// ═══════════════════════════════════
// Component renderers → Figma nodes
// Each returns a node (child of area-body)
// ═══════════════════════════════════

// Card helper
function mkCard(name, opts, children) {
  opts = opts || {};
  const bg = opts.bg || C.gray100;
  const card = vf(name, { hug: true, fill: bg, radius: 12, pt: 16, pr: 16, pb: 16, pl: 16, gap: 8,
    stroke: opts.stroke, sw: 1 });
  card.layoutAlign = "STRETCH";
  children.forEach(function(ch) { if (ch) card.appendChild(ch); });
  return card;
}

// Row helper (key + value)
function mkRow(key, val) {
  const row = hf("row", { hug: true, fill: null, gap: 8, align: "SPACE_BETWEEN", crossAlign: "CENTER" });
  row.layoutAlign = "STRETCH";
  row.appendChild(tx(key, { sz: 13, c: C.gray400 }));
  row.appendChild(tx(val, { sz: 13, c: C.gray800, weight: "M" }));
  return row;
}

// List item helper
function mkListItem(primary, right, muted) {
  const row = hf("list-item", { hug: true, fill: C.white, gap: 8, pt: 12, pb: 12,
    align: "SPACE_BETWEEN", crossAlign: "CENTER",
    stroke: C.divider, sw: 1 });
  row.layoutAlign = "STRETCH";
  row.appendChild(tx(primary, { sz: 14, c: muted ? C.gray400 : C.gray800, weight: "M", grow: true }));
  if (right) row.appendChild(tx(right, { sz: 14, c: C.gray800, weight: "SB" }));
  return row;
}

const RENDERS = {
  // ── Status bar (rendered separately, not via this map) ──
  "ogn/status-bar": function() {
    const f = hf("status-bar", { fill: C.white, w: 375, h: 44, pr: 20, pl: 20,
      align: "SPACE_BETWEEN", crossAlign: "CENTER" });
    f.counterAxisSizingMode = "FIXED";
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("9:41", { sz: 12, weight: "SB", c: C.gray800 }));
    f.appendChild(tx("●  ●  ●", { sz: 9, c: C.gray400 }));
    return f;
  },

  // ── Header ──
  "ogn/header": function(sd) {
    const f = hf("header", { fill: C.white, w: 375, h: 56, pr: 20, pl: 20, gap: 8,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.counterAxisSizingMode = "FIXED";
    f.layoutAlign = "STRETCH";
    const back = tx("‹", { sz: 24, c: C.gray600 });
    const title = tx(sd.screenName || "화면명", { sz: 17, weight: "SB", c: C.gray800 });
    title.layoutGrow = 1;
    const more = tx("···", { sz: 16, c: C.gray400 });
    f.appendChild(back); f.appendChild(title); f.appendChild(more);
    return f;
  },

  // ── Tab bar ──
  "ogn/tab-bar": function() {
    const f = hf("tab-bar", { fill: C.white, w: 375, h: 64, pr: 24, pl: 24,
      align: "SPACE_BETWEEN", crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.counterAxisSizingMode = "FIXED";
    f.strokes = S(C.divider); f.strokeAlign = "OUTSIDE";
    f.layoutAlign = "STRETCH";
    ["홈","청구","혜택","MY"].forEach(function(label, i) {
      f.appendChild(tx(label, { sz: 12, c: i === 1 ? C.brand : C.gray400, weight: i === 1 ? "SB" : "R" }));
    });
    return f;
  },

  // ── Sticky footer CTA ──
  "ogn/sticky-footer-cta": function(sd, area) {
    const actions = getTag(area.descriptions, "액션");
    const label = actions[0]
      ? actions[0].body.split("→")[0].replace(/tap\s*/i, "").trim()
      : "확인";
    const wrap = vf("footer-cta", { hug: true, fill: C.white, pt: 12, pr: 16, pb: 12, pl: 16,
      stroke: C.divider, sw: 1 });
    wrap.strokes = S(C.divider); wrap.strokeAlign = "OUTSIDE";
    wrap.layoutAlign = "STRETCH";
    const btn = vf("cta-btn", { hug: true, fill: C.brand, radius: 12,
      pt: 16, pr: 16, pb: 16, pl: 16, align: "CENTER", crossAlign: "CENTER" });
    btn.resize(343, 52); btn.primaryAxisSizingMode = "FIXED"; btn.counterAxisSizingMode = "FIXED";
    btn.layoutAlign = "STRETCH";
    btn.appendChild(tx(label, { sz: 16, weight: "B", c: C.white, align: "CENTER" }));
    wrap.appendChild(btn);
    return wrap;
  },

  // ── Footer CS ──
  "ogn/footer-cs": function() {
    const f = vf("footer-cs", { hug: true, fill: C.gray100, pt: 16, pr: 24, pb: 16, pl: 24,
      align: "CENTER", crossAlign: "CENTER" });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("고객센터 · 1588-0010", { sz: 12, c: C.gray400, align: "CENTER" }));
    return f;
  },

  // ── Bill summary card ──
  "ogn/BIL/bill-summary-card": function() {
    return mkCard("bill-summary-card", { bg: C.white, stroke: C.gray200 }, [
      tx("11월 청구 요금", { sz: 12, c: C.gray400, weight: "M" }),
      tx("78,300원", { sz: 26, weight: "B", c: C.gray800 }),
      mkRow("납부 기한","11/25"),
      mkRow("자동납부","카드 ****-7890"),
    ]);
  },

  // ── Line selector ──
  "ogn/BIL/line-selector": function() {
    const row = hf("line-selector", { hug: true, fill: C.white, gap: 8, pt: 4, pb: 4 });
    row.layoutAlign = "STRETCH";
    [[true,"01X-1234-5678"],[false,"02X-9876-5432"]].forEach(function(item) {
      const active = item[0]; const label = item[1];
      const chip = hf("chip", { hug: true, fill: active ? C.brand : C.gray100, radius: 20,
        pt: 6, pr: 14, pb: 6, pl: 14, crossAlign: "CENTER" });
      chip.appendChild(tx(label, { sz: 13, c: active ? C.white : C.gray600, weight: active ? "M" : "R" }));
      row.appendChild(chip);
    });
    return row;
  },

  // ── Pay amount summary ──
  "ogn/BIL/pay-amount-summary": function() {
    return mkCard("pay-amount", {}, [
      tx("납부 합계", { sz: 12, c: C.gray400, weight: "M" }),
      tx("78,300원", { sz: 22, weight: "B", c: C.gray800 }),
    ]);
  },

  // ── Pay confirm card ──
  "ogn/BIL/pay-confirm-card": function() {
    return mkCard("pay-confirm-card", {}, [
      tx("납부 정보", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("납부 금액","78,300원"),
      mkRow("납부 수단","카드 ****-7890"),
      mkRow("납부 대상","01X-1234-5678"),
    ]);
  },

  // ── Pay result card (success) ──
  "ogn/BIL/pay-result-card": function() {
    const card = vf("result-card-success", { hug: true, fill: C.successBg, radius: 12,
      pt: 24, pr: 16, pb: 24, pl: 16, gap: 8, crossAlign: "CENTER" });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("✓", { sz: 36, weight: "B", c: C.successText, align: "CENTER" }));
    card.appendChild(tx("납부가 완료되었습니다", { sz: 18, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(mkRow("승인번호","A1234567"));
    card.appendChild(mkRow("납부 금액","78,300원"));
    card.appendChild(mkRow("납부 일시","2026.11.15 14:35"));
    return card;
  },

  // ── Pay failure card ──
  "ogn/BIL/payment-failure-card": function() {
    const card = vf("result-card-fail", { hug: true, fill: C.errBg, radius: 12,
      pt: 24, pr: 16, pb: 24, pl: 16, gap: 8, crossAlign: "CENTER", stroke: C.errText, sw: 1 });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("✕", { sz: 36, weight: "B", c: C.errText, align: "CENTER" }));
    card.appendChild(tx("납부에 실패했습니다", { sz: 18, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(tx("카드 한도 초과", { sz: 13, c: C.gray400, align: "CENTER" }));
    return card;
  },

  // ── Payment history list ──
  "ogn/BIL/payment-history-list": function() {
    const wrap = vf("pay-history-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["2026.11.15 14:35","카드 ****-7890","78,300원"],
     ["2026.10.20 09:12","계좌이체",      "76,500원"]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0] + "  " + item[1], item[2]));
    });
    return wrap;
  },

  // ── Payment method list ──
  "ogn/BIL/payment-method-list": function() {
    const wrap = vf("pay-method-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["신한카드  ****-7890","선택"],["국민은행  ****-4321",""]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], item[1]));
    });
    return wrap;
  },

  // ── Bill detail list ──
  "ogn/BIL/bill-detail-list": function() {
    const wrap = vf("bill-detail-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["기본 요금제","55,000원",false],["부가서비스","9,900원",false],
     ["단말 할부","13,400원",false],["할인","-15,000원",true]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], item[1], item[2]));
    });
    return wrap;
  },

  // ── Bill document list ──
  "ogn/BIL/bill-document-list": function() {
    const wrap = vf("bill-doc-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["2026년 11월"],["2026년 10월"]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], "조회 ›"));
    });
    return wrap;
  },

  // ── Reserve form ──
  "ogn/BIL/reserve-form": function() {
    return mkCard("reserve-form", {}, [
      tx("예약 납부 설정", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("예약일","날짜 선택 ›"),
      mkRow("납부 수단","카드 선택 ›"),
    ]);
  },

  // ── Reserve result card ──
  "ogn/BIL/reserve-result-card": function() {
    const card = vf("reserve-result", { hug: true, fill: C.successBg, radius: 12,
      pt: 20, pr: 16, pb: 20, pl: 16, gap: 8, crossAlign: "CENTER" });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("예약이 접수되었습니다", { sz: 17, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(mkRow("예약일","12월 25일"));
    card.appendChild(mkRow("금액","78,300원"));
    return card;
  },

  // ── Limit status card ──
  "ogn/BIL/limit-status-card": function() {
    return mkCard("limit-status", {}, [
      tx("현재 이용 한도", { sz: 12, c: C.gray400, weight: "M" }),
      tx("300,000원", { sz: 22, weight: "B", c: C.gray800 }),
      tx("최대 한도: 500,000원", { sz: 12, c: C.gray400 }),
    ]);
  },

  // ── Autopay card ──
  "ogn/BIL/autopay-card": function() {
    return mkCard("autopay-card", {}, [
      tx("현재 자동납부 수단", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("카드사","신한 ****-7890"),
      mkRow("출금일","매월 25일"),
    ]);
  },

  // ── Usage realtime card ──
  "ogn/BIL/usage-realtime-card": function() {
    return mkCard("realtime-card", { bg: C.warnBg }, [
      tx("실시간 예상 요금", { sz: 12, c: C.warnText, weight: "M" }),
      tx("42,100원", { sz: 22, weight: "B", c: C.gray800 }),
      tx("확정 전 금액 — 변동 가능", { sz: 12, c: C.gray400 }),
    ]);
  },

  // ── Usage forecast card ──
  "ogn/BIL/usage-forecast-card": function() {
    return mkCard("forecast-card", { bg: C.warnBg }, [
      tx("예상 금액", { sz: 12, c: C.warnText, weight: "M" }),
      tx("42,100원", { sz: 22, weight: "B", c: C.gray800 }),
    ]);
  },

  // ── Usage line list ──
  "ogn/BIL/usage-line-list": function() {
    const wrap = vf("usage-line-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["OO마켓 결제","15,000원"],["콘텐츠 구독","9,900원"]].forEach(function(item) {
      wrap.appendChild(mkListItem(item[0], item[1]));
    });
    return wrap;
  },

  // ── Prepay target list ──
  "ogn/BIL/prepay-target-list": function() {
    const wrap = vf("prepay-target-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    [["OO마켓 결제","15,000원"],["콘텐츠 이용료","9,900원"]].forEach(function(item) {
      wrap.appendChild(mkListItem("[ ] " + item[0], item[1]));
    });
    return wrap;
  },

  // ── Prepay result card ──
  "ogn/BIL/prepay-result-card": function() {
    const card = vf("prepay-result", { hug: true, fill: C.successBg, radius: 12,
      pt: 20, pr: 16, pb: 20, pl: 16, gap: 8, crossAlign: "CENTER" });
    card.layoutAlign = "STRETCH";
    card.appendChild(tx("선결제가 완료되었습니다", { sz: 17, weight: "B", c: C.gray800, align: "CENTER" }));
    card.appendChild(mkRow("선결제 금액","24,900원"));
    return card;
  },

  // ── Delegate target list ──
  "ogn/BIL/delegate-target-list": function() {
    const wrap = vf("delegate-target-list", { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    wrap.appendChild(mkListItem("홍길동  01X-1234-5678 · 명의자", "선택 ›"));
    return wrap;
  },

  // ── Third-party consent sheet ──
  "ogn/BIL/third-party-consent-sheet": function() {
    return mkCard("consent-sheet", { bg: C.warnBg, stroke: C.warnText }, [
      tx("명의자 동의 필요", { sz: 12, c: C.warnText, weight: "B" }),
      tx("타인 명의 납부수단 사용 시 명의자 동의가 필요합니다", { sz: 13, c: C.gray800, maxW: 311 }),
      tx("동의 유효 시간: 24시간", { sz: 12, c: C.gray400 }),
    ]);
  },

  // ── Setting auto-prepay form ──
  "ogn/BIL/setting-auto-prepay-form": function() {
    return mkCard("auto-prepay-form", {}, [
      tx("자동 선결제 설정", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("실행일","매월 20일"),
      mkRow("납부 수단","카드 ****-7890"),
    ]);
  },

  // ── Setting limit form ──
  "ogn/BIL/setting-limit-form": function() {
    return mkCard("limit-form", {}, [
      tx("한도 변경", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("변경 한도","금액 입력"),
    ]);
  },

  // ── Setting document form ──
  "ogn/BIL/setting-document-form": function() {
    return mkCard("doc-form", {}, [
      tx("수신 설정", { sz: 12, c: C.gray400, weight: "M" }),
      tx("(●) 앱 알림  ( ) 이메일  ( ) 문자", { sz: 13, c: C.gray800 }),
    ]);
  },

  // ── Setting method card ──
  "ogn/BIL/setting-method-card": function() {
    return mkCard("method-card", {}, [
      tx("등록된 납부수단", { sz: 12, c: C.gray400, weight: "M" }),
      mkRow("신한카드","****-7890"),
    ]);
  },

  // ── Method action pair ──
  "ogn/BIL/method-action-pair": function() {
    const row = hf("method-actions", { hug: true, fill: null, gap: 8 });
    row.layoutAlign = "STRETCH";
    ["변경","해지"].forEach(function(label) {
      const btn = hf("btn-" + label, { hug: true, fill: C.white, radius: 8,
        pt: 10, pr: 14, pb: 10, pl: 14, crossAlign: "CENTER", stroke: C.brand, sw: 1.5 });
      btn.layoutGrow = 1;
      btn.appendChild(tx(label, { sz: 13, weight: "SB", c: C.brand, align: "CENTER" }));
      row.appendChild(btn);
    });
    return row;
  },

  // ── Bill variation list ──
  "ogn/BIL/bill-variation-list": function() {
    return mkCard("variation-list", { bg: C.infoBg }, [
      tx("전월 대비 변동 사유", { sz: 12, c: C.infoText, weight: "SB" }),
      tx("콘텐츠 이용료 +9,900원 증가", { sz: 13, c: C.gray800 }),
    ]);
  },

  // ── Cancel warning sheet ──
  "ogn/BIL/cancel-warning-sheet": function() {
    return mkCard("cancel-warning", { bg: C.warnBg, stroke: C.warnText }, [
      tx("자동납부 해지 안내", { sz: 12, c: C.warnText, weight: "B" }),
      tx("해지 후 미납이 발생할 수 있습니다", { sz: 13, c: C.gray800 }),
    ]);
  },

  // ── Bill guide card ──
  "ogn/BIL/bill-guide-card": function() {
    return mkCard("bill-guide-card", {}, [
      tx("2026년 11월 요금안내서", { sz: 13, weight: "M", c: C.gray800 }),
      mkRow("발급일","2026.12.01"),
    ]);
  },

  // ── Suspend status card ──
  "ogn/BIL/suspend-status-card": function() {
    return mkCard("suspend-status", { bg: C.infoBg }, [
      tx("정지 해제 상태", { sz: 12, c: C.infoText, weight: "M" }),
      tx("처리 중 ···", { sz: 14, c: C.infoText }),
    ]);
  },

  // ── atom/banner ──
  "atom/banner": function(sd, area) {
    const desc = area.descriptions || "";
    const isWarn = desc.includes("위험") || desc.includes("정지") || desc.includes("미납") || desc.includes("경고");
    const bg   = isWarn ? C.warnBg   : C.infoBg;
    const fc   = isWarn ? C.warnText : C.infoText;
    const msg  = (getTag(desc, "고지")[0] || {}).body || area.sectionDescription || "안내";
    const wrap = vf("banner", { hug: true, fill: bg, radius: 8, pt: 12, pr: 16, pb: 12, pl: 16 });
    wrap.layoutAlign = "STRETCH";
    wrap.appendChild(tx(msg.length > 60 ? msg.slice(0, 60) + "…" : msg, { sz: 13, weight: "M", c: fc, maxW: 311 }));
    return wrap;
  },

  // ── mol/notice-card ──
  "mol/notice-card": function(sd, area) {
    const tags    = parseTags(area.descriptions);
    const notice  = (tags.filter(function(t) { return t.tag === "고지"; })[0]) || {};
    const required = notice.sub && notice.sub.indexOf("필수") >= 0;
    const polId   = notice.sub ? notice.sub.split("|").slice(1).join("|") : "";
    const msg     = notice.body || area.sectionDescription || "법적 고지";
    const bg      = required ? C.warnBg : C.gray100;
    const card    = vf("notice-card", { hug: true, fill: bg, radius: 8, pt: 12, pr: 12, pb: 12, pl: 12, gap: 4 });
    card.layoutAlign = "STRETCH";
    if (required) card.appendChild(tx("[필수 고지]", { sz: 10, weight: "B", c: C.warnText }));
    if (polId)    card.appendChild(tx(polId, { sz: 10, c: C.gray400 }));
    card.appendChild(tx(msg.length > 80 ? msg.slice(0, 80) + "…" : msg, { sz: 12, c: C.gray600, maxW: 311 }));
    return card;
  },

  // ── mol/toggle-item ──
  "mol/toggle-item": function(sd, area) {
    const row = hf("toggle-row", { hug: true, fill: C.white, pt: 4, pb: 4,
      align: "SPACE_BETWEEN", crossAlign: "CENTER" });
    row.layoutAlign = "STRETCH";
    const label = tx(area.sectionName, { sz: 14, c: C.gray800 });
    label.layoutGrow = 1;
    row.appendChild(label);
    const track = rc("toggle-track", 44, 24, C.brand, { radius: 12 });
    row.appendChild(track);
    return row;
  },

  // ── mol/month-picker ──
  "mol/month-picker": function() {
    const f = hf("month-picker", { hug: true, fill: C.gray100, radius: 8, pt: 10, pb: 10,
      align: "CENTER", crossAlign: "CENTER" });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("< 2026년 11월 >", { sz: 15, weight: "SB", c: C.gray800, align: "CENTER" }));
    return f;
  },

  // ── mol/total-amount ──
  "mol/total-amount": function() {
    const f = vf("total-amount", { hug: true, fill: null, gap: 2 });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx("납부 합계", { sz: 12, c: C.gray400 }));
    f.appendChild(tx("78,300원", { sz: 22, weight: "B", c: C.gray800 }));
    return f;
  },

  // ── mol/list-item-link ──
  "mol/list-item-link": function(sd, area) {
    const actions = getTag(area.descriptions, "액션");
    const label = actions[0] ? actions[0].body.split("→")[0].replace(/tap\s*/i, "").trim() : "자세히 보기";
    const f = hf("list-link", { hug: true, fill: C.white, pt: 14, pb: 14,
      align: "SPACE_BETWEEN", crossAlign: "CENTER",
      stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx(label, { sz: 14, c: C.brand, weight: "M" }));
    f.appendChild(tx("›", { sz: 14, c: C.brand }));
    return f;
  },

  // ── mol/payment-target-item / mol/list-item-pay-target ──
  "mol/payment-target-item": function() {
    const f = hf("pay-target-item", { hug: true, fill: C.white, gap: 8, pt: 12, pb: 12,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    const chk = rc("checkbox", 16, 16, C.brand, { radius: 4 });
    f.appendChild(chk);
    const lbl = tx("당월 청구액", { sz: 14, c: C.gray800, weight: "M" });
    lbl.layoutGrow = 1;
    f.appendChild(lbl);
    f.appendChild(tx("78,300원", { sz: 14, c: C.gray800, weight: "SB" }));
    return f;
  },

  // ── mol/payment-method-item ──
  "mol/payment-method-item": function() {
    const f = hf("pay-method-item", { hug: true, fill: C.white, gap: 8, pt: 12, pb: 12,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    const icon = rc("card-icon", 20, 20, C.gray300, { radius: 4 });
    f.appendChild(icon);
    const lbl = tx("신한카드 ****-7890", { sz: 14, c: C.gray800, weight: "M" });
    lbl.layoutGrow = 1;
    f.appendChild(lbl);
    const radio = rc("radio", 16, 16, C.brand, { radius: 8 });
    f.appendChild(radio);
    return f;
  },

  // ── mol/page-header / mol/section-header ──
  "mol/page-header": function(sd, area) {
    const f = vf("page-header", { hug: true, fill: null, pt: 8, pb: 4 });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx(area.sectionName, { sz: 22, weight: "B", c: C.gray800 }));
    return f;
  },
  "mol/section-header": function(sd, area) {
    const f = vf("section-header", { hug: true, fill: null });
    f.layoutAlign = "STRETCH";
    f.appendChild(tx(area.sectionName, { sz: 14, weight: "SB", c: C.gray600 }));
    return f;
  },
  "mol/card-header": function(sd, area) { return RENDERS["mol/section-header"](sd, area); },

  // ── mol/post-action-card ──
  "mol/post-action-card": function(sd, area) {
    const actions = getTag(area.descriptions, "액션");
    const label = actions[0] ? actions[0].body.split("→")[0].replace(/tap\s*/i, "").trim() : "다음 단계";
    const f = hf("post-action", { hug: true, fill: C.white, pt: 14, pb: 14,
      crossAlign: "CENTER", stroke: C.divider, sw: 1 });
    f.layoutAlign = "STRETCH";
    const lbl = tx(label + " ›", { sz: 15, c: C.brand, weight: "SB" });
    lbl.layoutGrow = 1;
    f.appendChild(lbl);
    return f;
  },

  // ── mol/amount-row / mol/info-row ──
  "mol/amount-row": function() { return mkListItem("금액", "78,300원"); },
  "mol/info-row":   function() { return mkListItem("항목", "내용"); },

  // fallback aliases
  "mol/list-item-bill-item":  function() { return RENDERS["ogn/BIL/bill-detail-list"](); },
  "mol/list-item-pay-target": function() { return RENDERS["mol/payment-target-item"](); },
  "mol/list-item-pay-method": function() { return RENDERS["mol/payment-method-item"](); },
  "mol/payment-history-item": function() {
    return mkListItem("2026.11.15  카드 ****-7890", "78,300원");
  },
  "ogn/BIL/payment-confirm-card": function() { return RENDERS["ogn/BIL/pay-confirm-card"](); },
  "ogn/BIL/payment-result-card":  function() { return RENDERS["ogn/BIL/pay-result-card"](); },
};

// ─── Generic fallback renderer ───
function renderComp(organism, area, sd) {
  const oid = organism.organismId;
  const fn  = RENDERS[oid];
  if (fn) return fn(sd, area);

  const short = oid.split("/").pop();

  // Card-like
  if (/card|summary|result|guide|form|setting|delegate-record|refund/.test(oid)) {
    return mkCard(short, {}, [
      tx(area.sectionName, { sz: 12, c: C.gray400, weight: "M" }),
      tx(short.replace(/-/g, " "), { sz: 13, c: C.gray600 }),
    ]);
  }

  // List-like
  if (/list|history|method|target/.test(oid)) {
    const wrap = vf(short, { hug: true, fill: C.white });
    wrap.layoutAlign = "STRETCH";
    wrap.appendChild(mkListItem(area.sectionName, "›"));
    wrap.appendChild(mkListItem("항목 2", "›"));
    return wrap;
  }

  // Banner-like
  if (/banner/.test(oid)) {
    const bn = vf(short, { hug: true, fill: C.infoBg, radius: 8, pt: 12, pr: 16, pb: 12, pl: 16 });
    bn.layoutAlign = "STRETCH";
    bn.appendChild(tx(area.sectionDescription || "안내", { sz: 13, weight: "M", c: C.infoText, maxW: 311 }));
    return bn;
  }

  // Toggle-like
  if (/toggle|switch/.test(oid)) {
    return RENDERS["mol/toggle-item"](sd, area);
  }

  // Placeholder
  const ph = vf(short, { hug: true, fill: C.gray100, radius: 8, pt: 10, pr: 12, pb: 10, pl: 12,
    crossAlign: "CENTER" });
  ph.layoutAlign = "STRETCH";
  ph.appendChild(tx(short.replace(/-/g, " "), { sz: 12, c: C.gray400, align: "CENTER" }));
  return ph;
}

// ═══════════════════════════════════
// Screen builder
// ═══════════════════════════════════
function buildScreen(sd) {
  const areas = sd.areas || [];

  const hasTabBar = areas.some(function(a) {
    return a.organisms.some(function(o) { return o.organismId === "ogn/tab-bar" || o.organismId === "ogn/gnb"; });
  });
  const hasCta = areas.some(function(a) {
    return a.organisms.some(function(o) { return o.organismId === "ogn/sticky-footer-cta"; });
  });
  const ctaArea = areas.find(function(a) {
    return a.organisms.some(function(o) { return o.organismId === "ogn/sticky-footer-cta"; });
  });

  // Body areas = areas that have at least one non-chrome organism
  const bodyAreas = areas.filter(function(a) {
    return a.organisms.some(function(o) { return !isChromeAll(o.organismId); });
  });

  // ── phone frame ──
  const phone = vf(sd.screenId || "screen", {
    hug: true, fill: C.white, radius: 40, w: 375, clip: true
  });
  phone.counterAxisSizingMode = "FIXED";

  // Status bar (always)
  const sbNode = RENDERS["ogn/status-bar"]();
  sbNode.layoutAlign = "STRETCH";
  phone.appendChild(sbNode);

  // Header (always)
  const hdrNode = RENDERS["ogn/header"](sd);
  hdrNode.layoutAlign = "STRETCH";
  phone.appendChild(hdrNode);

  // Body areas
  for (let ai = 0; ai < bodyAreas.length; ai++) {
    const area = bodyAreas[ai];

    // Area label strip
    const strip = hf("area-" + area.no + "-strip", {
      fill: C.gray50, h: 36, pr: 16, pl: 16, gap: 6,
      crossAlign: "CENTER", stroke: C.divider, sw: 1
    });
    strip.primaryAxisSizingMode = "FIXED";
    strip.counterAxisSizingMode = "FIXED";
    strip.resize(375, 36);
    strip.layoutAlign = "STRETCH";

    // Number circle
    const numWrap = vf("no", { fill: C.brand, radius: 10, w: 20, h: 20,
      align: "CENTER", crossAlign: "CENTER" });
    numWrap.primaryAxisSizingMode = "FIXED";
    numWrap.counterAxisSizingMode = "FIXED";
    numWrap.appendChild(tx(String(area.no), { sz: 11, weight: "B", c: C.white, align: "CENTER" }));
    strip.appendChild(numWrap);

    const areaLabel = tx(area.sectionName, { sz: 12, weight: "SB", c: C.gray600 });
    areaLabel.layoutGrow = 1;
    strip.appendChild(areaLabel);

    const badge = tx(area.dynamic ? "D" : "S", { sz: 10, c: area.dynamic ? C.infoText : C.gray300 });
    strip.appendChild(badge);
    phone.appendChild(strip);

    // Area body
    const areaBody = vf("area-" + area.no + "-body", {
      hug: true, fill: C.white, pt: 12, pr: 16, pb: 12, pl: 16, gap: 8
    });
    areaBody.counterAxisSizingMode = "FIXED";
    areaBody.layoutAlign = "STRETCH";

    const contentOrgs = area.organisms.filter(function(o) { return !isChromeAll(o.organismId); });
    for (let oi = 0; oi < contentOrgs.length; oi++) {
      const orgNode = renderComp(contentOrgs[oi], area, sd);
      if (orgNode) {
        orgNode.layoutAlign = "STRETCH";
        areaBody.appendChild(orgNode);
      }
    }

    if (areaBody.children.length > 0) {
      phone.appendChild(areaBody);
    }

    // Divider between areas
    const divNode = rc("divider", 375, 8, C.gray50);
    divNode.layoutAlign = "STRETCH";
    phone.appendChild(divNode);
  }

  // Footer
  if (hasCta && ctaArea) {
    const footerNode = RENDERS["ogn/sticky-footer-cta"](sd, ctaArea);
    footerNode.layoutAlign = "STRETCH";
    phone.appendChild(footerNode);
  } else if (hasTabBar) {
    const tabNode = RENDERS["ogn/tab-bar"]();
    tabNode.layoutAlign = "STRETCH";
    phone.appendChild(tabNode);
  }

  return phone;
}



  // ---------- main (batch) ----------
  let targetPage = figma.root.children.find(function(p) { return p.name === "\uD654\uBA74"; });
  if (!targetPage) {
    targetPage = figma.createPage();
    targetPage.name = "\uD654\uBA74";
  }
  await figma.setCurrentPageAsync(targetPage);

  const allFrames = [];
  let xOffset = 0;
  const GAP = 48;

  for (let i = 0; i < SCREEN_DATA.length; i++) {
    const phoneFrame = buildScreen(SCREEN_DATA[i]);
    phoneFrame.x = xOffset;
    phoneFrame.y = 0;
    targetPage.appendChild(phoneFrame);
    allFrames.push(phoneFrame);
    xOffset += 375 + GAP;
  }

  figma.viewport.scrollAndZoomIntoView(allFrames);
  figma.notify("\u2713 \uD654\uBA74 \uB80C\uB354 \uC644\uB8CC: " + SCREEN_DATA.length + "\uAC1C");

})();