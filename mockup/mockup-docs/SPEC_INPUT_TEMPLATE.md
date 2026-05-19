# Spec Input Template — 기능내역서 표준 입력

> 사용자가 새 화면을 시작할 때 채워서 Claude 에게 전달하는 표준 양식.
> 이 형식을 따르면 Claude 의 분석 (`SPEC_REPORT_TEMPLATE.md`) 이 빠르고 일관적.

---

## 사용 방법

1. 아래 템플릿을 복사
2. 빈칸 (`{...}`) 채우기
3. 채운 내용을 Claude 채팅에 붙여넣기 (또는 Notion URL 그대로 전달도 가능)
4. Claude 가 `SPEC_REPORT_TEMPLATE` 형식으로 분석 보고

---

## 입력 템플릿 (복사해서 채우기)

```markdown
# 화면 정보

- **모듈 코드**: {MYBEN | PRDD | BEN | MBR | MYCPN | TPNT | ...}
- **화면 이름** (영문 kebab-case): {case2-options | edit-main | ...}
- **화면 한글명** (참고용): {옵션 상품 상세 | MY 편집 | ...}
- **출처** (선택): {PR step ID / Notion screen-id / 시안 파일}
- **User Flow 내 위치** (선택): {use-case 이름 + step N (또는 분기 안내)}
- **참고 시안** (선택): {이미지 경로 또는 Figma 링크}

# 컨텍스트 (사용자 맥락)  ⭐ 화면의 의도와 위계의 근거

> 이 6필드가 채워지지 않으면 화면이 "기능 나열" 형태로 만들어진다.
> 동선 정보가 있으면 (USER_FLOW_TEMPLATE) 거기서 대부분 도출 가능.

- **UX 단계** ([governance/INDEX.md](../../governance/INDEX.md) 7단계 중): {1 진입 | 2 탐색 | 3 검색 | 4 결정 | 5 실행/구매 | 6 완료 | 7 문제해결/CS}
  - 부가 단계 (있으면): {N}
- **사용자 상황** (한 문장 — 이 화면 진입 시 사용자 맥락):
  - 예: "신규 사용자가 회원 가입 절차 중 약관 동의 단계 진입. 약관을 처음 보는 상태."
- **사용자 task** (한 줄 — 여기서 무엇을 하는가):
  - 예: "필수 약관에 동의하고 다음 단계 진입"
- **가능 케이스** (정상 + 분기 + 에러 + empty):
  - 정상: 모든 약관 읽고 동의
  - 미성년 분기: 만 14세 미만 → 법정대리인 동의 BottomSheet
  - 미동의: 필수 약관 미동의 시 [다음] 비활성화 + 미동의 항목 강조
  - 약관 전문 보기: 각 약관 row chevron → BottomSheet
  - 에러: 약관 조회 실패 → snack-bar 재시도 안내
- **정보 위계** (높음 → 낮음):
  1. 화면 인지 (헤드라인 또는 진행 단계 표시)
  2. 핵심 task 영역 (필수 약관 list)
  3. 보조 task (선택 약관, 약관 전문 진입)
  4. 메인 CTA (sticky-footer)
- **톤** (UX 단계의 핵심 원칙에서 도출):
  - 예: "친절·간결 (5 실행 → 입력 간소화 원칙)"
  - 또는 "경고·신중 (탈퇴·차단 등)" / "환영·축하 (6 완료)"

- **화면 sketch** (선택, 권장 ⭐ — 위계 가시화):
  ```
  ┌─────────────────────────┐
  │ ← 회원 가입         1/4 │  ← chrome (header + step)
  ├─────────────────────────┤
  │ 약관에 동의해 주세요    │  ← 화면 인지 (headline)
  │                         │
  │ □ 전체 동의 (필수+선택) │  ← 편의 toggle
  │ ─────────────────────── │
  │ □ (필수) 이용약관   [>]│  ← 핵심 task (반복)
  │ □ (필수) 개인정보   [>]│
  │ □ (선택) 마케팅     [>]│
  │ ─────────────────────── │
  │                         │
  ├─────────────────────────┤
  │       [   다음   ]      │  ← sticky CTA
  └─────────────────────────┘
  ```
  → 텍스트로 그리는 wireframe — 위계 + 컴포넌트 위치 일목요연. AI/디자이너가 "기능 나열" 이상의 시각 의도를 잡음.

- **데이터 흐름** (선택, API 의존 화면 권장):
  ```
  [입력] 약관 목록 조회 GET /terms?version=latest
    ↓ FN-MBR-COM-003
  [응답] { terms: [{id, version, type:required|optional, title, url}, ...] }
    ↓ binding
  [UI] mol/checkbox-item × N (props.label, props.tone=type, props.href=url)
  [상태 분기] response 비어있음 → empty / 4xx → error / 200 → render
  ```
  → 어떤 데이터가 어디로 흐르는지 매핑. spec 단계에서 누락된 필드 / state 발견 가능.

- **상태 시나리오** (가능 케이스를 매트릭스로):
  | 상태 | 트리거 | 시각/액션 |
  |---|---|---|
  | default | 화면 진입 정상 | 약관 list 표시, [다음] disabled |
  | loading | API 호출 중 | skeleton row × 3, [다음] disabled |
  | empty | terms 응답 빈 배열 | "현재 동의할 약관이 없습니다" 안내 + 자동 진행 또는 [다음] enabled |
  | error | API 4xx/5xx | snack-bar "약관을 불러오지 못했습니다" + [재시도] 버튼 |
  | partial | 필수 1개만 동의 | [다음] disabled + 미동의 row 강조 (border 또는 shake) |
  | branch | 만 14세 미만 분기 | BottomSheet "법정대리인 동의 필요" |

  → default 만 spec 잡으면 운영 시 누락 발생 빈도 큼. 6 상태 다 명시 권장.

# 기능 목록

각 기능마다 1 항목씩.

## 기능 1: {기능명}
- **spec id** (선택, 외부 트래커 ID): {SPEC-PRDD-01}
- **설명**: {[조건] ... [출력] ...}
- **사용 컴포넌트 후보** (raw 표기 그대로): {atom/btn, ogn/snack-bar, ...}
- **우선순위** (선택, P0/P1/P2 — 작업 순서): {P0 | P1 | P2}
- **노출 방식** (선택, ⭐ SB JSON `dynamic` 필드 — 명시 안 하면 SB description 의 `[상태:loading|empty|error]` 태그 유무로 자동 판단): {dynamic | static}

⭐ **SB 표 컬럼 충족 필드** (NOVA SB 양식 자동 도출용):
- **섹션 ID** (영문, 필수): {section-MBR-term-list}  ← `section-{MOD}-{name}` kebab-case
- **영역 종류** (선택, default `body`): {chrome | body}
- **컨테이너 유형** (선택, default `vertical`): {vertical | horizontal | fixed-top | overlay}
- **노출 개수** (필수): {1/1 | 0/1 | 1/N | 0/N}  ← 화면 안 min/max instance
- **노출 우선순위** (선택, default 기능 idx): {1 | 2 | 3 | ...}  ← 화면 안 시각 순서
- **오류 처리 방식** (필수): {대체 UI | 영역 숨김 | 기본값 표시 | snack-bar 재시도}
- **오가니즘 분해** (필수, 1+ 개):
  ```
  - ogn-{MOD}-{name-1}: {한글명} — {설명}
    서버 제어: {a, b, c}
  - ogn-{MOD}-{name-2}: {한글명} — {설명}
    서버 제어: {d, e}
  ```

- **SB description** (선택, ⭐ SDUI 변환용 태그 형식 — mockup/sb-doc/description-format.md 참조):
  ```
  [영역명] {기능 영역 이름}
  [규칙:노출순서] {규칙}
  [조건:{조건명}] {동작}
  [고지:{필수|사용성}|{정책ID}] {고지 텍스트}
  [상태:{default|loading|empty|error|partial|branch}] {상태별 동작}
  [액션:{tap|long-tap|swipe-*|pull-to-refresh|focus|input|submit|paste|voice|share|...}] {대상 → 결과}
  [권한:{location|camera|notification|microphone|contacts}] {요청 시점}
  [자동:{timer N분|timeout|auto-refresh|deep-link|notification-tap}] {결과}
  ```
  > ⚠️ `[톤:]` 태그는 폐기 (2026-05-01) — SB 는 기능 정의. 톤은 디자인 단계 산출물.

## 기능 2: ...
(반복)

# 추가 메모 (선택)

- 디자인 참고:
- 인터랙션 특이사항:
- 데이터/API 의존성:
```

---

## 입력 예시 (PRDD 사례 회고)

```markdown
# 화면 정보

- 모듈 코드: PRDD
- 화면 이름: case1-standalone
- 화면 한글명: 상품상세 단독상품
- 참고 시안: (없음 — DS 기반 자체 설계)

# 기능 목록

## 기능 1: 공지사항 배너 노출
- spec id: SPEC-PRDD-01
- 설명: 상품 상세에 노출되어야 하는 공지가 있으면 최상단에 1개 노출. 2개 이상이면 필독Y 최신순 좌우 롤링.
- 사용 컴포넌트 후보: ogn/snack-bar
- 우선순위: P0

## 기능 2: 상품 기본 정보 노출
- spec id: SPEC-PRDD-02
- 설명: 상품 이미지 영역 + 페이지네이션 노출 + 상품 기본 정보 호출 + 상품 상세 데이터 + 가격 정보 API 데이터 동적 매핑 & 노출.
- 사용 컴포넌트 후보: atom/thumnail, atom/text-area, atom/tag
- 우선순위: P0

## 기능 3: 쿠폰 받기 버튼 노출
- spec id: SPEC-PRDD-03
- 설명: 해당 상품에 적용 가능한 쿠폰이 있을 때 쿠폰받기 버튼 노출.
- 사용 컴포넌트 후보: atom/button(primary)
- 우선순위: P1

... (생략)
```

---

## Notion DB 가 입력일 때

직접 채우지 않고 **Notion URL 만 전달**해도 OK.  
Claude 가 다음 컬럼을 자동 추출:

| Notion 컬럼 | 매핑 |
|---|---|
| `spec id` | spec id |
| `기능명` | 기능명 |
| `세부 설명` | 설명 |
| `screen name` | 화면 한글명 |
| `컴포넌트 목록` (relation) | 사용 컴포넌트 후보 |
| `모듈 목록` (relation) | 모듈 코드 |
| `우선순위` | 우선순위 |

→ 화면 이름의 영문 kebab-case 만 사용자에게 추가 확인.

---

## 채울 때 팁

### 컴포넌트 후보가 헷갈리면
- 알아서 적당히 (예: `버튼`, `이미지`, `리스트` 같은 자연어 OK)
- Claude 가 카탈로그 대조하면서 구체 컴포넌트 (`atom/btn`, `atom/thumb`) 로 매핑
- 정확한 표기 모르면 빈칸으로 두고 Claude 에게 추론 요청

### 화면 이름
- 영문 kebab-case 권장 (`case1-standalone`)
- 한글이나 언더스코어 금지 (AUDIT_RULES 위반)
- 한글명은 별도 참고용으로

### 우선순위
- 모르겠으면 빈칸 OK. Claude 작업 순서 결정에 참고만 함

---

## 입력 후 흐름

1. 사용자가 위 양식 채워서 전달
2. Claude 가 `SPEC_REPORT_TEMPLATE.md` 형식으로 분석 보고
3. 사용자 검토 → OK/수정
4. spec 작성 → audit → 2 Run 빌드

전체 흐름은 `WORKFLOWS.md` 의 "표준 화면 작업 흐름" 참고.

---

## 참고

- 분석 보고 형식: `SPEC_REPORT_TEMPLATE.md`
- 진단 규칙: `AUDIT_RULES.md`
- 위계 결정: `DESIGN_PRINCIPLES.md`
- 컨벤션: `CONVENTIONS.md`
