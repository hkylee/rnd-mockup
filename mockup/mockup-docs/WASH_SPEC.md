# Wash — Figma 손그림 → 시스템 컴포넌트 변환 도구

> 디자이너가 figma 에서 자유롭게 그린 결과물을 우리 디자인 시스템 가이드대로 자동 변환하는 후처리 도구.
> 명령어: `node scripter/wash.js` → 클립보드 → Figma Scripter ⌘V → Run ▶

---

## 0. 왜 만드나

기존 흐름 (spec → bundle → Run) 은 SDUI / 시스템 출신 작업자에게는 자연스럽지만, **디자이너 입장에서는 부담**:
- DS Variable 토큰 일일이 박기
- auto layout 일관 적용
- Pattern A/B padding 룰 기억
- 토큰 이름 (hero-headline, screen-padding-default 등) 외우기

→ 디자이너는 **figma 에서 자유롭게 raw 값으로 그리고**, wash 한 번에 시스템화. 손그림이 가이드에 맞게 정리됨.

---

## 1. 입력 / 출력

### 입력
- figma 의 임의 노드 (FRAME / RECTANGLE / TEXT / GROUP / INSTANCE)
- 사용자가 wash 대상 선택 (single component / 여러 개 / 전체 페이지)

### 출력
- **figma 측**: 정리된 component (+ instance 자동 갱신)
- **(옵션) spec JSON**: `component-specs/<cat>/<MODULE>/<name>.json` 자동 생성 — 시스템에 추가
- **report**: "이런 fix 했어요" 콘솔 리포트 (디자이너 review 가능)

---

## 2. 핵심 기능 (3가지 + 보조)

### 2.1 Variable 자동 바인딩 ⭐ 핵심

raw 값 → DS 토큰 자동 매칭 + Variable 바인딩.

| raw 값 (예) | 매칭 토큰 | 룰 |
|---|---|---|
| `#3617CE` | `semantic.color.brand.primary` | 정확 일치 |
| `#F5F5F5` | `semantic.color.surface.secondary` | 정확 일치 |
| `#3717D0` (오타) | `semantic.color.brand.primary` (가장 가까움) | 색 거리 < threshold |
| `padding: 24` | `semantic.layout.screen-padding-default` | 정확 일치 |
| `padding: 23` | `semantic.layout.screen-padding-default` (가장 가까움) | 거리 ≤ 2px |
| `fontSize: 14` | `foundation.typography.fontSize.body` | 정확 일치 |

휴리스틱:
- 색: 모든 DS color leaf 의 RGB 값 lookup table → wash 대상의 raw 색에 가장 가까운 값 찾음 (ΔE 또는 단순 RGB 거리)
- dimension: 모든 spacing/dimension leaf 값 sort → 가장 가까운 1개 선택 (거리 ≤ threshold 면 매칭)
- typography: fontSize / lineHeight / fontWeight 셋 모두 매칭되는 composite token 찾음

### 2.2 Auto Layout 자동 적용

frame 안 자식들 위치 분석 → auto layout VERTICAL or HORIZONTAL 추론 + 적용.

| 자식 위치 패턴 | 추론 결과 |
|---|---|
| 모든 자식이 같은 X, Y 만 다름 | `mode: VERTICAL` (수직 stack) |
| 모든 자식이 같은 Y, X 만 다름 | `mode: HORIZONTAL` (수평 stack) |
| 자식 사이 간격 일정 | `itemSpacing: <간격>` (DS spacing 토큰 매칭) |
| 자식 vs frame 경계 동일 | `padding: <간격>` (DS spacing 토큰 매칭) |
| 임의 위치 (grid, ABSOLUTE) | auto layout 미적용 — 사용자에게 confirm |

### 2.3 Alignment 자동 정리

텍스트 + 자식 정렬 추론.

| 패턴 | 자동 적용 |
|---|---|
| 텍스트가 frame 가로 가운데 | `textAlignHorizontal: CENTER` |
| 자식들 가로 가운데 정렬 | `counterAxisAlignItems: CENTER` |
| 자식들 세로 가운데 | `primaryAxisAlignItems: CENTER` |
| 텍스트 box width = HUG | left align 유지 (텍스트 자체가 짧음) |

### 2.4 룰 위반 auto-fix (보조)

DESIGN_PRINCIPLES.md / CONVENTIONS.md / AUDIT_RULES.md 의 룰 위반 자동 수정.

핵심 룰 (지금까지 누적):

| 룰 | 위반 검출 | auto-fix |
|---|---|---|
| **Pattern B (서브 페이지)** | page content paddingLR > 0 + ogn inner paddingLR > 0 | page paddingLR = 0 으로 |
| **DS 토큰 일반 이름 사용** | `heading-1`, `4xl` 등 — DS 에 없는 이름 | DS 매핑 표로 자동 변환 (hero-headline / 3xl 등) |
| **center align 누락** | result-summary 같은 강조 컴포넌트의 텍스트 left | textAlignHorizontal CENTER 추가 |
| **raw 색 / dimension** | 토큰 ref 안 쓰고 raw 값 박힘 | 2.1 의 자동 매칭 |
| **외피 padding 누락** | ogn 의 visual.fill 있는데 padding 0 | DS 룰 따라 padding 24 적용 |

룰은 누적 — 새 패턴 발견 시 추가.

---

## 3. 사용 흐름 (디자이너 입장)

```
1. Figma 에서 자유롭게 그림
   - raw 색 박기 OK
   - padding 24 raw 값 박기 OK
   - auto layout 안 적용해도 OK

2. wash 대상 선택 (component 1개 / N개 / 페이지 전체)

3. 터미널에서: node scripter/wash.js [--target <name>] [--dry]

4. Figma Scripter ⌘V → Run ▶

5. 결과:
   - 콘솔에 "이런 fix 했어요" 리포트
   - figma 측 component 정리됨
   - (옵션) spec JSON 자동 생성

6. 결과 review → 어색하면 ⌘Z 또는 spec 직접 수정
```

---

## 4. 안전장치

### --dry 모드 (default)
실제 변경 없이 "어떤 fix 할지" 만 보고. 디자이너가 review 후 진짜 적용 결정.

### 점진 fix
한 번에 다 하지 않고 **confidence 높은 fix 만 자동**:
- 정확 일치 (raw 값 = DS 토큰 leaf 값) → 자동 fix
- 가까운 매칭 (거리 ≤ threshold) → confirm 후 fix
- 모호 (복수 후보) → 사용자에게 선택지 보여줌

### 영향 범위 표시
fix 전 / 후 변경 항목 list 출력 — 사용자가 어떤 거 바뀌는지 미리 봄.

---

## 5. 단계별 개발 일정 (총 약 1~2일)

| Phase | 기능 | 난이도 | 시간 |
|---|---|---|---|
| **1** | Variable 자동 바인딩 (색 + dimension) | 중간 | 2~3시간 |
| **2** | Alignment 자동 정리 | 쉬움 | 1시간 |
| **3** | Auto Layout 자동 적용 (휴리스틱 추론) | 중간 | 3~4시간 |
| **4** | 룰 위반 auto-fix (룰 5개 누적) | 쉬움 | 2시간 |
| **5** | spec JSON 자동 생성 (옵션) | 어려움 | 4~6시간 |

→ Phase 1~4 만 하면 핵심 wash 동작 (1일 정도). Phase 5 는 별도.

---

## 6. 누적 룰 list (지금까지 발견)

### 토큰 매핑 (DS 일반 이름 → SKT 이름)
- `heading-1` → `hero-headline`
- `heading-2` → `card-title`
- `heading-3` → `body-bold`
- `spacing.4xl`, `spacing.5xl` → `spacing.3xl` (가장 큰)
- `body-large` → `body-medium`

### Pattern A·B 룰
- 홈 / GNB 대표 메뉴 → Pattern A (page padding 24)
- 서브 페이지 → Pattern B (page padding 0)
- 안티패턴: page padding 24 + ogn inner padding 24 → 48 이중 (auto-fix)

### Center alignment
- result-summary 같은 강조 ogn의 text → CENTER
- 가입 완료 / 탈퇴 완료 등 헤드라인 영역 → CENTER

### Variable 바인딩 누락 검출
- raw `#FFF`, `#3617CE` 등 → DS 색 토큰 매칭
- raw `padding: 24`, `gap: 16` 등 → DS dimension 토큰 매칭

(룰은 작업하면서 점진 누적)

---

## 7. 미래 방향 (Phase 5+)

### 손그림 → spec JSON 자동 생성
디자이너가 figma 에서 raw 그림만 그렸어도 wash 가:
1. 그림 분석 → atom/mol/ogn/page 위계 추론
2. 컴포넌트 이름 자동 생성 (또는 사용자 prompt)
3. spec JSON 자동 작성 → `component-specs/` 에 저장
4. spec 으로 다시 빌드 → figma 의 정돈된 component 교체

이건 본격 도구. 별도 프로젝트로 추진.

### 연관 도구
- **시각 검증** — figma 의 모든 component 가 spec 과 일치하는지 자동 검증 (audit 의 figma 측 버전)
- **export to web** — figma component → React/Vue 컴포넌트 코드 자동 생성

---

## 8. 시작 시점

1차 안: **현재 발견된 룰 5개 + 핵심 3 기능 만 들어간 MVP** — 1일 작업.
- 사용 가치 검증 후 Phase 5 추진 결정.

2차: **사용자 작업하면서 룰 추가 발견 시 즉시 wash 에 반영** — 점진적 발전.

---

## 참고
- DS 토큰 source-of-truth: `mockup/skt-design-system.json`
- spec 룰: `mockup/mockup-docs/DESIGN_PRINCIPLES.md` § 9.1.1 (Pattern B), § 9.1.3 (surface 분리), § 9.2 (chrome default)
- audit 룰: `mockup/mockup-docs/AUDIT_RULES.md`
- 메모리: `feedback_subpage_pattern_b.md`, `feedback_design_baselines.md`, `feedback_legal_notice_marking.md`, `feedback_page_grid_layout.md`
