# 정책서 → 화면설계서(SB) 변환 매핑 규칙

> 정책서의 각 구성 요소를 SDUI 기반 화면설계서(SB)로 변환하는 상세 매핑 규칙

---

## 1. 핵심 매핑 개요

| 정책서 요소 | 정책서 필드 | SB 타입 | SB 필드 | 변환 규칙 | 예시 |
|------------|------------|---------|---------|----------|------|
| **Actor** | 액터명, 설명 | Screen | 진입 권한, 사용자 분기 | 액터별 화면 진입 조건 분리 → `display.when` | 고객: `"로그인 사용자"`<br>법정대리인: `"미성년자 AND 법정대리인 인증 완료"` |
| **UseCase** | 유즈케이스명, 설명 | Screen | 화면 그룹, 화면 ID | 유즈케이스 1개 = Screen 1개 이상<br>프로세스 정의 대상 Y → Screen 필수 | `US-MBR-CS-001` (회원탈퇴) → `NOVA-MBR-PG-001-0` |
| **State** | 상태 코드, 전이 기준 | Organism | 상태 표시, 버튼 활성화, 노출 조건 | 상태 코드 → UI 상태 분기<br>전이 이벤트 → 버튼 액션 | `STATE_PENDING` → `"신청 중"` 텍스트<br>`onClick` → `apiCall(승인 요청)` |
| **Process** | 프로세스 ID, 설명, 관련 기능/정책 | Screen<br>Section | 화면 ID, 섹션 구성, 노출 순서 | 1 Process = 1 Screen 또는 1 Section<br>Process 순서 → 섹션 노출 우선순위 | `PR-MBR-CS-001-01` (본인 확인) → `section-MBR-auth-form`<br>우선순위 1 |
| **Function** | 기능 ID, 세부 기능 구성 | Organism<br>Molecule<br>Atom | 오가니즘 구성, 이벤트/액션 | 기능 크기별 분해:<br>- 화면 단위 기능 → Organism<br>- 재사용 UI 블록 → Molecule<br>- 단일 입력/버튼 → Atom | `FN-MBR-COM-001` (본인인증) →<br>`ogn-MBR-auth-method-selector`<br>`mlc-auth-phone`<br>`atom-btn-primary` |
| **Policy Group** | 정책 ID, 정책 항목 | Organism<br>Section | `[규칙:]` 태그, `display.when`, 서버 제어 항목 | 정책 그룹 → 노출 조건 집합<br>정책 항목 → 세부 조건 | `PG-MBR-AUTH-001` (인증 정책) →<br>`display.when: "인증 수단 = 휴대폰 OR PASS"` |
| **Policy Item** | 정책 항목 ID, 정책 내용 | Organism<br>Atom | `[조건:]` 태그, props 바인딩, 노출 개수 | 정책값 → SDUI props 직접 바인딩<br>기준값 → 최소/최대 개수 | `PG-MBR-AUTH-001-1` (유효시간 10분) →<br>`timerDuration: 600` |
| **Term** | 용어 ID, 용어명, 설명 | 전역 | 용어 설명, 툴팁 | 용어 → UI 텍스트 일관성 유지<br>툴팁/설명문 참조 | `TM-MBR-001` (휴면 회원) →<br>툴팁: "장기 미이용으로 제한된 계정" |

---

## 2. 변환 플로우 상세

### 2.1 Actor → Screen 진입 권한

**정책서 예시:**
```
| ACT-MBR-001 | 고객 | 회원탈퇴를 신청하는 주체 |
| ACT-MBR-002 | 법정대리인 | 미성년자 대신 탈퇴 동의하는 주체 |
```

**SB 변환:**

| 화면 ID | 화면 명 | 진입 조건 | 비고 |
|---------|---------|----------|------|
| NOVA-MBR-PG-001-0 | 회원탈퇴 | 로그인 사용자 AND 정상 회원 | 고객용 |
| NOVA-MBR-PG-001-1 | 회원탈퇴 (법정대리인) | 로그인 사용자 AND 미성년자 회원 AND 법정대리인 인증 | 법정대리인용 |

---

### 2.2 Process → Screen/Section (핵심)

**정책서 예시:**
```
| PR-MBR-CS-001-01 | 탈퇴 사유 입력 | 고객이 탈퇴 사유를 선택하고 추가 의견 입력 |
| PR-MBR-CS-001-02 | 영향도 확인 | 포인트 소멸, 구독 해지, 할인 상실 안내 |
| PR-MBR-CS-001-03 | 본인 인증 | 휴대폰 본인인증 또는 PASS 인증 |
| PR-MBR-CS-001-04 | 탈퇴 신청 | 탈퇴 신청 완료, 유예 기간 안내 |
```

**SB 변환 (Screen-SB):**

| no. | 섹션 ID | 섹션 명 | 노출 우선순위 | 오가니즘 ID | 오가니즘 명 |
|-----|---------|---------|-------------|------------|-----------|
| 1 | section-MBR-reason | 탈퇴 사유 | 1 | ogn-MBR-reason-selector | 사유 선택 폼 |
| 2 | section-MBR-impact | 영향도 안내 | 2 | ogn-MBR-impact-list | 포인트/구독/할인 영향 |
| 3 | section-MBR-auth | 본인 인증 | 3 | ogn-MBR-auth-method | 인증 수단 선택 |
| 4 | section-MBR-confirm | 탈퇴 확인 | 4 | ogn-MBR-withdraw-btn | 탈퇴 신청 버튼 |

**매핑 규칙:**
- **1 Process = 1 Section** (기본 원칙)
- **Process 순서 → 섹션 노출 우선순위**

---

### 2.3 Function → Organism 분해

**정책서 예시:**
```
| FN-MBR-COM-001 | 본인인증 | 휴대폰 본인인증 또는 PASS 인증 수행 |
세부 기능:
- 인증 수단 선택
- 인증 요청 API
- 인증 결과 검증
- 유효시간 타이머
```

**SB 변환 (Organism-SB):**

**오가니즘 정보:**
| 오가니즘 ID | 오가니즘 명 | 노출 조건 | 컨테이너 유형 |
|------------|-----------|----------|-------------|
| ogn-MBR-auth-method | 본인 인증 수단 선택 | 항상 | vertical |

**컴포넌트 상세:**
| no. | 컴포넌트 ID | 컴포넌트 명 | 이벤트 | 액션 | 비고 |
|-----|------------|-----------|--------|------|------|
| 1 | mlc-auth-phone | 휴대폰 인증 버튼 | onClick | apiCall | /auth/phone |
| 2 | mlc-auth-pass | PASS 인증 버튼 | onClick | apiCall | /auth/pass |
| 3 | atom-timer | 유효시간 타이머 | - | - | 10분 카운트다운 |
| 4 | atom-btn-verify | 인증 확인 버튼 | onClick | apiCall | /auth/verify |

---

### 2.4 Policy → 노출 조건 + 서버 제어

**정책서 예시:**
```
| PG-MBR-AUTH-001 | 인증 정책 | 본인인증 수단과 유효시간 기준 |
정책 항목:
- 인증 수단: 휴대폰, PASS
- 유효시간: 10분
- 재인증 조건: 5회 실패 시 30분 제한
```

**SB 변환:**

| 오가니즘 ID | 오가니즘 명 | 노출 조건 | 서버 제어 항목 |
|------------|-----------|----------|-------------|
| ogn-MBR-auth-method | 본인 인증 | 로그인 사용자 | ☑ 인증 수단<br>☑ 유효시간 |

**정책 항목 → props 매핑:**
| 정책 항목 | 정책값 | props 바인딩 |
|----------|--------|-------------|
| 인증 수단 | 휴대폰, PASS | `{ "bind": "data.authMethods", "default": ["phone", "pass"] }` |
| 유효시간 | 10분 | `{ "bind": "data.authDuration", "default": 600 }` |
| 재인증 조건 | 5회 실패 → 30분 | `{ "bind": "data.maxRetry", "default": 5 }` |

---

## 3. 변환 규칙 상세

### 3.1 Process → Screen/Section 구분

| 조건 | Screen | Section |
|------|--------|---------|
| 프로세스가 독립적인 화면 단위 | ✅ | ❌ |
| 프로세스가 화면 내 영역 단위 | ❌ | ✅ |
| 프로세스가 모달/팝업으로 분리 | ✅ | ❌ |
| 프로세스가 스크롤 영역 내 배치 | ❌ | ✅ |

---

### 3.2 Function → Organism/Molecule/Atom 구분

| 기능 크기 | 분류 | 예시 |
|----------|------|------|
| 화면 단위 복합 기능 (2개 이상 세부 기능) | Organism | 인증 수단 + 타이머 + 확인 버튼 |
| 재사용 가능한 UI 블록 (1~2개 세부 기능) | Molecule | 휴대폰 인증 버튼 + 상태 표시 |
| 단일 입력/버튼/텍스트 | Atom | 버튼, 타이머, 텍스트 |

---

### 3.3 Policy → SDUI 필드 매핑

| 정책 유형 | SDUI 필드 | 예시 |
|----------|----------|------|
| 노출 조건 | `display.when` | `"로그인 사용자 AND 정상 회원"` |
| 기준값 (숫자) | props 바인딩 | `timerDuration: 600` |
| 허용 목록 | props 배열 | `authMethods: ["phone", "pass"]` |
| 서버 제어 | 서버 제어 항목 체크 | `☑ 노출 여부` |
| 오류 처리 | 오류 처리 방식 | `영역 숨김`, `대체 UI 표시` |

---

### 3.4 State → UI 상태 관리

| 정책서 요소 | SDUI 매핑 |
|-----------|----------|
| 현재 상태 | `data.status` |
| 전이 이벤트 | `events.onClick` → `apiCall` |
| 다음 상태 | `setResponse` |
| 처리 기준 | `statusCodeHandlers` |

---

## 4. 실전 예시

### 회원탈퇴 정책서 → SB 변환

**정책서:**
- UseCase: `US-MBR-CS-001` (회원 탈퇴 신청)
- Process: 4단계
- Function: 6개
- Policy: 3개 그룹

**SB 변환:**

**Screen-SB:**
```
화면 ID: NOVA-MBR-PG-001-0
화면 명: 회원탈퇴
섹션 개수: 4
```

**섹션 구성:**
| no. | 섹션 ID | 프로세스 ID | 노출 우선순위 |
|-----|---------|------------|-------------|
| 1 | section-MBR-reason | PR-MBR-CS-001-01 | 1 |
| 2 | section-MBR-impact | PR-MBR-CS-001-02 | 2 |
| 3 | section-MBR-auth | PR-MBR-CS-001-03 | 3 |
| 4 | section-MBR-confirm | PR-MBR-CS-001-04 | 4 |

---

## 5. 변환 체크리스트

**정책서 → SB 변환 시 필수 확인:**
- [ ] UseCase 1개 = Screen 1개 이상 정의됨
- [ ] Process 순서 = 섹션 노출 우선순위 1:1 매핑
- [ ] Function 세부 구성 = Organism 컴포넌트 상세 완성
- [ ] Policy 항목 = `display.when` 또는 props 바인딩
- [ ] State 전이 = 이벤트/액션으로 정의
- [ ] 모든 정책 그룹 = 서버 제어 항목 체크
- [ ] Actor 분기 = 진입 조건 명시

---

**버전:** 1.1
**작성일:** 2026-04-30
**참고 문서:**
- `정책서-템플릿.html`
- `sb-writing-rules.md`
- SDUI 스키마 v1.17.0
