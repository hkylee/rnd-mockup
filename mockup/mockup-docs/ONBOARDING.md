# Onboarding — 처음 시작하는 동료를 위한 가이드

> 새 화면을 기능내역서 → Figma 컴포넌트로 만드는 표준 흐름.
> 첫 30분 안에 환경 셋업 + 첫 화면 빌드까지.

---

## 0. 이 도구로 무엇을 하나

기능내역서 (Notion 또는 텍스트) 를 입력하면, 다음을 자동으로:

1. **컴포넌트 분류** — 기존 카탈로그에서 재사용 / 리네임 / 신규 필요 판단
2. **위계 결정** — 새 컴포넌트가 atom 인지 mol 인지 ogn 인지
3. **spec 자동 작성** — JSON 형식
4. **Figma 자동 빌드** — Atom / Molecule / Organism / Page 페이지에 컴포넌트 + 화면 생성

→ 동료는 **"기능내역서 주기 + 결과 검토"** 만 하면 됨.

---

## 1. 환경 셋업 (한 번만, 10분)

### 1-1. 필수 도구

| 도구 | 용도 | 확인 명령 (터미널) |
|---|---|---|
| **Node.js 18+** | 빌드 도구 | `node -v` (18 이상이면 OK) |
| **Figma 데스크톱 앱** | 컴포넌트 생성 대상 | Figma 다운로드 페이지에서 설치 |
| **Scripter 플러그인** | Figma 안에서 코드 실행 | Figma 메뉴 → Plugins → Browse → "Scripter" 검색 → Install |

### 1-2. Node.js 설치 (없으면)

Mac:
```bash
# Homebrew 가 있으면
brew install node

# 또는 https://nodejs.org 에서 LTS 버전 다운로드
```

설치 확인:
```bash
node -v   # v18 이상이면 OK
```

### 1-3. 프로젝트 폴더 받기

팀에서 공유하는 mockup/ 폴더를 본인 Mac 으로 받기 (Drive / GitHub clone / 공유 링크 — 팀 운영 방식 따름).

## 2. Figma 파일 준비 (5분)

### 2-1. 새 Figma 파일 또는 기존 파일

기존 작업물에 추가하거나 새 파일 만들기.

### 2-2. 페이지 3개 추가

Figma 좌측 사이드바 페이지 영역에서:
- 페이지 추가 → 이름 `Atom`
- 페이지 추가 → 이름 `Molecule`
- 페이지 추가 → 이름 `Organism`

⚠️ **이름 정확해야 함** (대소문자, 영문). `atom` / `Atoms` 같은 변형 X.

`Page` 페이지는 만들 필요 없음 — 도구가 자동 생성합니다.

### 2-3. Scripter 플러그인 열기

Figma 메뉴 → `Plugins` → `Scripter`. 빈 코드 창이 뜸.

---

## 3. 표준 작업 흐름 — 화면 1개 만들기

### 3-1. 기능내역서 준비

**옵션 A: Notion DB**
- 기능내역서 Notion 페이지의 URL 복사

**옵션 B: 텍스트 양식**
- `mockup/mockup-docs/SPEC_INPUT_TEMPLATE.md` 의 양식을 복사
- 화면 정보 + 기능 목록 채우기

### 3-2. Claude 에게 전달

"이 기능내역서로 atom/mol/ogn/page 만들어줘" + (Notion URL 또는 채운 양식)

Claude 가:
1. 기능내역서 읽기
2. 카탈로그 대조
3. **분석 보고서** 출력 (재사용/리네임/신규 표)

### 3-3. 보고서 검토

- **재사용 (reused)**: 기존 컴포넌트 그대로 — 매핑 정확한가?
- **리네임 (rename)**: 이름만 표준화 — OK?
- **신규 (new)**: 새로 만들 atom/mol/ogn — 분류 적절한가?
- **DS 신규 토큰**: 새 컴포넌트가 새 토큰 필요? 이름/값 합의

빠진 거나 잘못된 게 있으면 그대로 알려주면 됨. Claude 가 수정.

### 3-4. 빌드 (Claude 가 안내)

OK 하면 Claude 가:
1. 신규 spec 자동 작성
2. 자동 검증 (`audit`) 통과 확인
3. **2번의 Scripter Run** 명령 안내:

```
Run 1: sync (Figma Variables 동기화)
Run 2: all  (모든 컴포넌트 + 화면 빌드)
```

Claude 가 클립보드에 코드 복사해줌. 사용자는:
1. Figma Scripter 창 클릭
2. **Cmd+V** (Paste)
3. **Run ▶** 버튼
4. 끝나면 Claude 에게 "다음" 또는 "됐어"
5. 다음 Run 도 같은 방식

⏱ 시간:
- Run 1: 10초
- Run 2: 1~2분 (큰 화면이면)

---

## 4. 결과 확인

### 4-1. 체크리스트

Figma 좌측 페이지 사이드바에서 페이지별 확인:

- [ ] **Atom** 페이지 — 작은 단위 컴포넌트들 (버튼, 태그, 아이콘 등)
- [ ] **Molecule** 페이지 — 중간 단위 (카드 헤더, 가격 행 등)
- [ ] **Organism** 페이지 — 화면 단위 블록 (상품 정보 카드, 헤더 등)
- [ ] **Page** 페이지 — 완성된 화면 (Frame)

### 4-2. Variables 확인

우측 패널 → Local variables → 3 컬렉션 보여야:
- `SKT Foundation`
- `SKT Semantic`
- `SKT Component`

### 4-3. 시안과 비교

원본 시안 (있으면) 과 생성된 화면 비교. 어색한 부분 (간격 / 색 / 글자 크기 / 정렬) 캡처.

---

## 5. 어색한 부분 발견 시

캡처 + 위치 설명을 Claude 에게:

> "여기 [캡처] product-info 의 가격이 너무 작아 보여"

Claude 가:
- 어떤 토큰/컴포넌트 문제인지 진단
- 수정 spec 작성
- 다시 빌드 안내

---

## 6. 자주 마주치는 문제

| 증상 | 원인 / 해결 |
|---|---|
| Run 시 "Atom 페이지 없음" | Figma 에 페이지 3개 (Atom/Molecule/Organism) 직접 만들었는지 확인 |
| Run 시 코드 멈춤 | 큰 화면이면 1~2분 소요. 그래도 너무 오래면 콘솔 캡처 → Claude |
| 컴포넌트가 회색 박스로 보임 | placeholder 상태 (정상). 아이콘 SVG 없는 경우 등. Claude 에게 문의 |
| 변수가 raw 값 (예: `#3617CE`) | Run 1 (sync) 안 했거나 실패. 다시 실행 |
| 같은 이름 컴포넌트 두 개 | 이전 버전이 남아있는 것. 옛 컴포넌트 수동 삭제 또는 Claude 에게 cleanup 요청 |

---

## 7. 어디 보면 되나

| 궁금한 것 | 보는 곳 |
|---|---|
| 디자인 시스템 전체 | `mockup/CLAUDE.md` |
| 작업 흐름 자세히 | `mockup/mockup-docs/WORKFLOWS.md` |
| **UX 7단계 (단계 분류·체크포인트)** | `governance/INDEX.md` (단계별 가이드: `governance/UXL_*.html`) |
| 위계 / spacing 결정 | `mockup/mockup-docs/DESIGN_PRINCIPLES.md` |
| 카탈로그 진단 규칙 | `mockup/mockup-docs/AUDIT_RULES.md` |
| 입력 양식 (직접 채울 때) | `mockup/mockup-docs/SPEC_INPUT_TEMPLATE.md` |
| spec 형식 자세히 | `mockup/mockup-docs/CONVENTIONS.md` |
| 함정 / 트러블슈팅 | `mockup/mockup-docs/TROUBLESHOOTING.md` |
| 빠른 시작 (이 문서) | `mockup/mockup-docs/ONBOARDING.md` |

---

## 8. 첫 작업 추천 흐름

1. **이 문서 끝까지 읽기** (10분)
2. **환경 셋업** (10분, 위 1번)
3. **Figma 새 파일 + 페이지 만들기** (3분, 위 2번)
4. **간단한 기능내역서로 한 번 시도** — 작은 화면부터
5. **Claude 와 대화하며 진행**

---

## 9. 핵심 원칙

- **DS 토큰만 사용** — `#FFFFFF` 같은 raw 값 금지. 항상 토큰 (`{semantic.color.text.primary}`)
- **카탈로그 재사용 우선** — 같은 컴포넌트 두 번 만들지 말 것
- **위계는 atomic design**: atom → mol → ogn → page (작은 → 큰)
- **Claude 가 spec 작성** — 동료는 검토만. 직접 JSON 만들 필요 없음
- **모든 변경은 Claude 와** — `component-specs/` 직접 수정 X (Claude 가 처리)

---

질문 / 막힘 → Claude 에게 그대로 물어보세요. 답을 모르면 같이 찾을 수 있어요.
