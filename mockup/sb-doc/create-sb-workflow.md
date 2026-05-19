# 정책서 → SB 생성 워크플로우 (수동)

> ⚠️ **DEPRECATED — 2026-05-01**
> 이 문서는 ProductionAgent 의 초기 수동 워크플로우 (Notion DB 직접 입력) 이고, 현재 표준 흐름과 다릅니다.
>
> **현재 표준 흐름** (mockup 단일 source → 두 산출물):
> 1. 정책서 → SPEC_INPUT 작성 → [`mockup/mockup-docs/WORKFLOWS.md § "🧭 정책서 → Figma (Lean 9 step)"`](../mockup/mockup-docs/WORKFLOWS.md)
> 2. SPEC_INPUT → SB JSON 자동 생성 → [`mockup/scripter/generate-sb.js`](../mockup/scripter/generate-sb.js)
> 3. SPEC_INPUT → Figma component 자동 생성 → [`mockup/scripter/bundle.js`](../mockup/scripter/bundle.js)
>
> **이 문서가 여전히 유용한 영역** (참고용):
> - Step 1.2 정책서 8가지 요소 체크리스트 (Actor/UseCase/State/Process/Function/Policy Group/Policy Item/Term) — 정책서 분석 시 참고
> - Step 2~4 매핑 표 (Process → Screen → Section → Organism → Policy 의 양식) — SB JSON → SB HTML/figma 변환 구현 시 참고
> - Step 6 Notion DB 속성 정의 — 향후 Notion 동기화 필요할 때 참고

---

## 🎯 목적 (당시)

정책서 HTML 파일을 읽고 SDUI 기반 화면설계서(SB)를 Notion에 생성하는 수동 프로세스 검증

---

## 📋 준비물

1. **정책서 HTML 파일**
   - 위치: `/Users/plusx/ProductionAgent/policy/`
   - 예시: `정책서-회원가입:회원탈퇴.html`

2. **참고 문서**
   - `docs/sb-writing-rules.md` - SB 작성 규칙
   - `docs/policy-to-sb-mapping.md` - 매핑 규칙
   - `docs/sb-writing-rules.md` - SB 작성 규칙 및 화면 ID 규칙

3. **Notion 페이지**
   - SB 데이터베이스 (생성 필요)

---

## 🔄 워크플로우

### Step 1: 정책서 분석 (20분)

**1.1 정책서 HTML 파일 열기**
```bash
open /Users/plusx/ProductionAgent/policy/정책서-회원가입:회원탈퇴.html
```

**1.2 8가지 요소 체크리스트 작성**

| ✅ | 요소 | 내용 요약 | 비고 |
|---|------|----------|------|
| [ ] | Actor | 액터 목록 | 예: 고객, 법정대리인, BSS |
| [ ] | UseCase | 유즈케이스 목록 | 예: 회원 탈퇴 신청 |
| [ ] | State | 상태 코드 | 예: PENDING, COMPLETED |
| [ ] | Process | 프로세스 단계 | 예: 4단계 (사유입력→영향도→인증→신청) |
| [ ] | Function | 기능 목록 | 예: 본인인증, 사유선택 |
| [ ] | Policy Group | 정책 그룹 | 예: 인증 정책, 유예 기간 정책 |
| [ ] | Policy Item | 정책 항목 | 예: 유효시간 10분 |
| [ ] | Term | 주요 용어 | 예: 휴면 회원 |

---

### Step 2: Process → Screen 매핑

**핵심 규칙: `1 Process = 1 Screen`**

참고: `docs/sb-writing-rules.md` 섹션 5.1 (Screen 도출 규칙)

**2.1 Process 목록 추출 및 화면 판정**

정책서 "4. 프로세스 정의"에서 프로세스를 추출하고, 각 프로세스가 고객 대면 화면인지 판정한다.

| Process ID | Process 명 | 화면 판정 | TYPE_CODE | 판정 사유 |
|-----------|-----------|----------|-----------|----------|
| PR-MBR-CS-003-01 | 본인인증 | Screen | PG | 고객이 인증수단 선택 및 인증 진행 |
| PR-MBR-CS-003-02 | 탈퇴 사유 입력 | Screen | PG | 고객이 사유를 선택/입력 |
| PR-MBR-CS-003-03 | 탈퇴 전 안내 확인 | Screen | PG | 영향도 안내를 확인 |
| PR-MBR-CS-003-04 | 탈퇴 최종 동의 | Screen | CP | 확인/취소 2버튼 의사결정 |
| PR-MBR-CS-003-05 | 탈퇴 처리 | 제외 | - | 백엔드 자동 처리 |
| PR-MBR-CS-003-06 | 탈퇴 결과 안내 | Screen | PG | 고객에게 결과 안내 (제외된 003-05 결과 포함) |

**2.2 화면 ID 생성**

```
NOVA-{MODULE_ID}-{TYPE_CODE}-{NNN}-{N}
```

UseCase 내 여정 순서대로 NNN을 부여한다.

| 화면 ID | 화면 명 | Process ID |
|---------|---------|-----------|
| NOVA-MBR-PG-009-0 | 본인인증 (탈퇴) | PR-MBR-CS-003-01 |
| NOVA-MBR-PG-010-0 | 탈퇴 사유 입력 | PR-MBR-CS-003-02 |
| NOVA-MBR-PG-011-0 | 탈퇴 전 안내 | PR-MBR-CS-003-03 |
| NOVA-MBR-CP-012-0 | 탈퇴 최종 동의 | PR-MBR-CS-003-04 |
| NOVA-MBR-PG-013-0 | 탈퇴 완료 | PR-MBR-CS-003-06 |

> 본인인증(PG-009)은 가입/휴면해제에서도 동일 UI를 사용하므로, 재사용 Screen으로 별도 작성하고 여기서는 참조만 한다.

**2.3 Screen-SB 메타데이터** (각 화면마다 작성)

| 필드 | 값 | 출처 |
|------|---|------|
| 모듈 ID | MBR | 정책서 업무코드 |
| 화면 ID | NOVA-MBR-PG-010-0 | 위 테이블에서 부여 |
| 화면 명 | 탈퇴 사유 입력 | Process 명 |
| 화면 경로 | screen/MBR/withdraw/reason | Process 기반 |
| 관련 정책서 | 정책서-회원가입:회원탈퇴.html | 파일명 |
| 연관 설계서 | NOVA-MBR-PG-009-0 (이전), NOVA-MBR-PG-011-0 (다음) | 여정 순서 |
| 배포일 | YYYY-MM-DD | 현재 날짜 |
| 배포자 | 작성자명 | - |
| 현재 버전 | v0.1 | 초안 |

---

### Step 3: Function → Section/Organism 매핑

각 Screen-SB 내부의 Section과 Organism을 정의한다.

**핵심 규칙:**
- `1 Screen = 1 Section` (Screen과 Section은 1:1)
- `1 Function = 1 Organism` (기능과 오가니즘은 1:1)
- Section ID: `section-{MODULE_ID}-{Screen의 의미명}`
- Organism ID: `ogn-{MODULE_ID}-{기능 의미명}`

**3.1 Function 목록 추출**

해당 Process에 연결된 기능을 정책서 "5. 기능 정의"에서 추출한다.

| Function ID | Function 명 | 세부 기능 구성 |
|------------|-----------|-------------|
| FN-MBR-UI-001 | 사유 선택 폼 | - 사유 선택 (라디오)<br>- 추가 의견 입력 (텍스트) |
| FN-MBR-API-001 | 영향도 조회 | - API 호출<br>- 포인트/구독/할인 표시 |
| FN-MBR-COM-001 | 본인인증 | - 인증 수단 선택<br>- 인증 요청 API<br>- 타이머 |
| FN-MBR-API-002 | 탈퇴 신청 | - 탈퇴 API 호출<br>- 유예 기간 안내 |

**3.2 Section/Organism 생성**

각 Screen(=Process)에 대해 Section 1개를 만들고, Process 소속 Function마다 Organism을 생성한다.

| Screen ID | Section ID | Organism ID | Organism 명 | Function ID |
|-----------|-----------|------------|-----------|------------|
| NOVA-MBR-PG-010-0 | section-MBR-leave-reason | ogn-MBR-leave-reason-form | 탈퇴 사유 선택 및 입력 | FN-MBR-UI-001 |
| NOVA-MBR-PG-011-0 | section-MBR-leave-impact | ogn-MBR-leave-impact-list | 영향도 리스트 | FN-MBR-API-001 |
| NOVA-MBR-PG-009-0 | section-MBR-leave-auth | ogn-MBR-auth-verify | 인증수단 선택 및 인증 | FN-MBR-COM-001 |
| NOVA-MBR-CP-012-0 | section-MBR-leave-confirm | ogn-MBR-leave-final-consent | 최종 탈퇴 동의 | FN-MBR-API-002 |

> 하나의 Process에 Function이 여러 개면, 해당 Screen의 Section 안에 Organism이 여러 개 배치된다.

---

### Step 4: Policy → SDUI 필드 매핑

**5.1 Policy Group/Item 추출**

정책서의 "6. 정책 정의" 섹션에서 추출:

| Policy Group ID | Policy 명 | Policy Item | 정책값 |
|----------------|----------|-------------|--------|
| PG-MBR-AUTH-001 | 인증 정책 | 인증 수단 | 휴대폰, PASS |
| PG-MBR-AUTH-001 | 인증 정책 | 유효시간 | 10분 |
| PG-MBR-GRACE-001 | 유예 기간 정책 | 유예 기간 | 7일 |

**5.2 SB 필드 매핑**

**노출 조건:**
| Organism ID | 노출 조건 | Policy 출처 |
|------------|----------|------------|
| ogn-MBR-auth-method | 로그인 사용자 | ACT-MBR-001 |
| ogn-MBR-withdraw-btn | 로그인 사용자 AND 사유 선택 완료 | PG-MBR-REASON-001 |

**서버 제어 항목:**
| Organism ID | 서버 제어 항목 | Policy 출처 |
|------------|-------------|------------|
| ogn-MBR-auth-method | ☑ 인증 수단<br>☑ 유효시간 | PG-MBR-AUTH-001 |
| ogn-MBR-impact-list | ☑ 노출 개수 | PG-MBR-IMPACT-001 |

**props 바인딩:**
| Organism ID | props 이름 | 정책값 | 바인딩 |
|------------|-----------|--------|--------|
| ogn-MBR-auth-method | authMethods | ["phone", "pass"] | `{ "bind": "data.authMethods" }` |
| ogn-MBR-auth-method | timerDuration | 600 | `{ "bind": "data.authDuration", "default": 600 }` |

---

### Step 5: Organism-SB 상세 작성

각 Organism별로 상세 SB 작성:

**예시: ogn-MBR-auth-method**

**메타데이터:**
| 필드 | 값 |
|------|---|
| 모듈 ID | MBR |
| 컴포넌트 ID | ogn-MBR-auth-method |
| 컴포넌트 명 | 본인 인증 수단 선택 |
| 컴포넌트 설명 | 휴대폰 또는 PASS 인증 수단 선택 및 인증 진행 |
| 관련 정책서 | 정책서-회원가입:회원탈퇴.html |
| 배포일 | YYYY-MM-DD |
| 현재 버전 | v1.0 |

**오가니즘 정보:**
| 필드 | 값 |
|------|---|
| 오가니즘 ID | ogn-MBR-auth-method |
| 오가니즘 명 | 본인 인증 수단 선택 |
| 오가니즘 설명 | 휴대폰/PASS 인증 수단 선택 및 타이머 |
| 컨테이너 유형 | vertical |
| 노출 조건 | 로그인 사용자 |
| 노출 케이스 | - 로그인: 표시<br>- 비로그인: 숨김 |

**컴포넌트 상세:**
| no. | 컴포넌트 ID | 컴포넌트 명 | 이벤트 | 액션 | 비고 |
|-----|------------|-----------|--------|------|------|
| 1 | mlc-auth-phone | 휴대폰 인증 버튼 | onClick | apiCall | /api/auth/phone |
| 2 | mlc-auth-pass | PASS 인증 버튼 | onClick | apiCall | /api/auth/pass |
| 3 | atom-timer | 유효시간 타이머 | - | - | 10분 (600초) |
| 4 | atom-btn-verify | 인증 확인 버튼 | onClick | apiCall | /api/auth/verify |

---

### Step 6: Notion 페이지 생성

**7.1 Notion Database 생성**

**Screen-SB Database 속성:**
| 속성명 | 타입 | 설명 |
|--------|------|------|
| 화면 ID | 제목 | NOVA-MBR-PG-001-0 |
| 화면 명 | 텍스트 | 회원탈퇴 |
| 모듈 ID | 선택 | MBR |
| 관련 정책서 | 파일 | 업로드 |
| 배포일 | 날짜 | - |
| 버전 | 텍스트 | v1.0 |

**Section 테이블:**
- 페이지 내 인라인 데이터베이스 또는 테이블 블록

**7.2 데이터 입력**

Screen-SB 페이지:
1. 메타데이터 입력
2. Section 테이블 작성
3. 각 Organism 링크 추가

Organism-SB 페이지:
1. 각 Organism별 개별 페이지 생성
2. 메타데이터 + 오가니즘 정보 + 컴포넌트 상세 입력

---

## ✅ 완료 체크리스트

### 정책서 분석
- [ ] Actor 목록 추출 완료
- [ ] UseCase 목록 추출 완료
- [ ] State 코드 추출 완료
- [ ] Process 목록 추출 완료
- [ ] Function 목록 추출 완료
- [ ] Policy Group/Item 추출 완료
- [ ] Term 목록 추출 완료

### SB 생성
- [ ] Process → Screen 매핑 및 화면 판정 완료
- [ ] Screen-SB 메타데이터 작성
- [ ] Function → Section/Organism 매핑 완료
- [ ] Policy → 노출 조건/서버 제어 매핑 완료
- [ ] Organism-SB 상세 작성 (전체)

### Notion 입력
- [ ] Screen-SB 페이지 생성
- [ ] Section 테이블 입력
- [ ] Organism-SB 페이지 생성 (전체)
- [ ] 링크 연결 완료

---

## 🐛 문제점 기록

워크플로우 실행 중 발견한 문제점을 기록:

| 날짜 | 문제점 | 원인 | 해결 방안 |
|------|--------|------|----------|
| YYYY-MM-DD | Process가 Section으로 1:1 매핑 안됨 | 프로세스 2개가 하나의 섹션 | 매핑 규칙 수정 필요 |
| YYYY-MM-DD | Policy 항목이 props 바인딩으로 변환 어려움 | 정책값이 복잡한 조건문 | 매핑 규칙 보완 필요 |

---

## 📝 다음 단계

워크플로우 실행 완료 후:

1. **문제점 검토**
   - 매핑이 안 되는 케이스 정리
   - 예외 규칙 문서화

2. **매핑 규칙 보완**
   - `policy-to-sb-mapping.md` 업데이트

3. **자동화 스크립트 개발**
   - Python 스크립트 작성
   - Notion API 연동
   - `/create-sb` 스킬 완성

---

**버전:** 2.0
**작성일:** 2026-04-30
**테스트 대상 정책서:** `정책서-회원가입:회원탈퇴.html`
