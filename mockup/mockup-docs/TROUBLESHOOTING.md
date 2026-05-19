# Troubleshooting

알려진 이슈와 해결 방법. 같은 실수 반복하지 말자.

---

## 1. Scripter 예약 식별자 충돌

### 증상
Scripter 에서 붙여넣고 Run 할 때:
- `'node' is not defined`
- `'map' is not defined`
- `unexpected token in expression: ')'`
- `expecting ';'`

### 원인
Scripter 는 다음 전역을 예약: **`node`, `map`, `page`, `color`, `rgb`**. 변수/파라미터 이름으로 쓰면 충돌.

### 해결
generator-core.js 에서는 이미 회피됨 (`tgt/varMap/targetPage/resolvedColor/rgbColor`). 새 코드 작성 시 이 이름들 사용 금지.

Node syntax check (`node -c file.js`) 는 통과하지만 Scripter 가 실패하면 **십중팔구 이거**. 전역 검색으로 확인:
```bash
grep -nE "\b(node|map|page|color|rgb)\b" scripter/generator-core.js
```

---

## 2. 정규식 리터럴에 한글 → Scripter 파서 실패

### 증상
`expecting ';'` 에러. 한글이 들어간 정규식 리터럴 근처.

### 원인
Scripter 의 파서(TypeScript 기반) 가 정규식 안의 한글 처리 못 함. `/[가-힣]/` 같은 패턴에서 `/` 가 나눗셈으로 오해됨.

### 해결
유니코드 escape 사용:
```js
// ❌
if (/[가-힣]/.test(s)) { ... }

// ✓
if (/[가-힣]/.test(s)) { ... }
```

문자열 리터럴 `"한글"` 은 OK (UTF-8 문제없음). **정규식 리터럴만 주의**.

---

## 3. `layoutAlign: "MAX"` 가 먹지 않음 (right-align)

### 증상
컴포넌트 자식에 `layoutAlign: "MAX"` 지정했는데 우측 정렬 안 됨 (부모의 기본 정렬대로 놓임).

### 원인
Figma **v3 auto-layout 은 child 레벨 MIN/CENTER/MAX 정렬 지원 안 함**. `"STRETCH"` / `"INHERIT"` 만 작동.

### 해결
horizontal wrapper group 으로 감싸기:

```jsonc
{
  "kind": "group",
  "id": "cta-wrap",
  "layoutAlign": "STRETCH",                  // 부모 카드 너비로 확장
  "layout": {
    "mode": "HORIZONTAL",
    "primaryAxisSizingMode": "FIXED",
    "counterAxisSizingMode": "AUTO",
    "primaryAxisAlignItems": "MAX",          // ← 버튼 오른쪽 정렬
    "counterAxisAlignItems": "CENTER",
    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
    "itemSpacing": 0,
    "width": "HUG", "height": "HUG"
  },
  "visual": { "cornerRadius": 0, "fill": null, "stroke": null, "shadow": null },
  "children": [
    { "kind": "ref", "component": "atom/btn", ... }
  ]
}
```

비슷한 패턴 자주 쓰이면 `mol/cta-row` 등으로 승격 고려.

---

## 4. sync-tokens 이후 cascade (해결됨, 이전 버전용)

### 과거 이슈 (2026-04 이전)
`--sync` 가 destructive — 기존 SKT 컬렉션 전부 삭제 후 재생성. Variable ID 바뀌어 기존 Component 의 바인딩 끊김 → 전체 재생성 필요했음.

### 현재 (idempotent 모드)
`--sync` 는 **기존 Variable ID 를 유지** 하고 값만 업데이트. 신규 토큰만 create. Orphan 은 로그만 남김 (자동 삭제 안 함).

결과: DS 수정 → `--sync` → 영향 받는 Component 만 재생성. 전체 재생성 불필요.

### 주의: typography 변경 시 여전히 cascade 필요
`semantic.typography.*` 는 composite 이라 Variable 로 저장되지 않음. 생성 시 raw 값으로 text 에 적용됨. 따라서 typography 토큰 값이 변하면 **해당 typography 를 참조하는 Component 는 재생성해야 반영됨** (Variable 업데이트만으론 부족).

---

## 5. Cascade 재생성 (해결됨 — 2026-05-05)

### 이전 증상 (옛 동작)
A 컴포넌트를 재생성했는데, A 를 참조하던 B 컴포넌트에서 "Main component deleted" 표시 또는 깨진 instance.

### 옛 원인
Component 재생성 = purge + create → Figma 가 새 ID 발급. 기존 instance 의 원본 링크 끊어짐.

### 해결 (현재 동작) ⭐
generator-core.js 가 새 Component 생성 직후 `instance.swapComponent(new)` 로 **모든 instance 의 mainComponent 를 자동으로 new 로 redirect** → old 삭제 시점에 instance 들은 이미 new 를 가리키고 있어 끊기지 않음.

→ **mol/atom 의 visual-only 변경 (텍스트·색·padding·radius·fill·stroke 등) 은 cascade 재생성 불필요.** 단일 spec 만 빌드해도 ogn/page 의 instance 들이 자동 갱신됨.

```bash
# 옛 흐름 (cascade 필요했던 시절)
node scripter/bundle.js --changed   # mol 변경 → 모든 dependents 묶음

# 현재 흐름 (instance swap 자동)
node scripter/bundle.js mol/notice-card   # mol 1개만 → 23 instances 자동 swap → ogn/page 안 만져도 OK
```

### 여전히 cascade 가 필요한 경우
- **variants axis 추가/제거** — Component Set 구조 자체가 바뀌어 instance 가 default 로 fallback. 사용처 명시적 `variant: { ... }` 추가 + cascade 재빌드 권장
- **spec 이름 변경** — `mol/foo` → `mol/bar` 로 rename 시 ref 가 새 이름 lookup 못 함. dependents 의 `component:` 필드 직접 수정 필요
- **자식 id 변경** — exposeAs 로 Component Property 노출된 자식의 id 바꾸면 instance 의 props 매칭 끊김

이 외 (visual·copy 변경) 는 모두 swap 으로 처리됨.

### 의존성 파악 (rename / 이름 변경 시 여전히 유용)
```bash
grep -r "atom/btn" component-specs/
```

---

## 6. Variable 바인딩 불가 속성

### 증상
typography / shadow 필드에 Variable 연결 안 됨.

### 원인
Figma Variables 가 **composite 타입 미지원**:
- typography (fontSize + weight + lineHeight + letterSpacing 묶음)
- shadow (x/y/blur/spread/color/alpha 묶음)

### 해결
- **typography composite 자체** 는 Variable 안 됨. 대신 **내부 field 각각 은 FLOAT Variable 로 바인딩 가능** — generator 가 자동으로 처리:
  - `fontSize` → `foundation.typography.fontSize.*` Variable
  - `lineHeight` (PIXELS 만) → `foundation.typography.lineHeight.*` Variable
  - `letterSpacing` → `foundation.typography.letterSpacing.*` Variable
  - `fontWeight` → 바인딩 안 됨 (Figma 제약)
- **shadow 는 raw** 로만 적용됨. Figma Effect Style 로 관리해야 재사용 가능. 아직 미구현.

## 7. lineHeight PERCENT + Variable 바인딩 충돌

### 증상
`lineHeight` 에 `"120%"` 값을 넣어도 Figma 에서 **120px 로 해석** 됨. 또는 binding 시 unit 이 PIXELS 로 강제됨.

### 원인
Figma Plugin API 의 `node.setBoundVariable("lineHeight", v)` 가 PERCENT unit 을 **PIXELS 로 덮어쓰는** 문제가 있음 (Figma 내부 버그로 추정).

### 해결 (현재 구현)
generator 가 **PERCENT lineHeight 는 Variable 바인딩 skip** — raw 값만 적용. 결과:
- Figma 에서 lineHeight 값은 올바름 (120%)
- lineHeight 옆에 Variable chip 없음 (raw 로 표시)
- fontSize / letterSpacing 등 다른 필드는 Variable 바인딩 정상

### 향후 개선
Figma 측 개선 기다리거나, `t.setBoundVariable` 호출 후 `t.lineHeight = {unit:"PERCENT", value:...}` 재설정이 통하면 binding + PERCENT 공존 가능 — 테스트 필요.

---

## 7. Scripter 에서 Pretendard 폰트 없음 경고

### 증상
콘솔에 `누락된 폰트: Pretendard Regular` 등.

### 원인
시스템에 Pretendard 설치 안 됨.

### 해결
- [Pretendard 공식 GitHub](https://github.com/orioncactus/pretendard) 에서 설치
- 설치 안 해도 Inter 로 fallback 됨 (한글은 tofu 없이 system fallback 처리). 다만 디자인 의도와 다를 수 있음.

---

## 8. 섹션 프레임 관련 (제거됨 — 2026-04)

### 변경 사항
이전 버전은 각 Component 를 섹션 프레임 (FRAME with auto-layout) 으로 감쌌음. 이제 **Component 는 Atom/Molecule/Organism 페이지에 직접 배치**.

### 기존 섹션 정리
- `node scripter/bundle.js --cleanup` 실행 → Scripter Run
- 동작: 모든 섹션 프레임 삭제 + 내부 Component 는 페이지로 꺼냄 (대략 위치 유지)
- 정리 후 페이지 요소들이 흩어질 수 있음 → Figma "Tidy up" 기능으로 격자 정렬 추천

### 신규 Component 배치 로직
generator 가 자동:
- 기존 동일 이름 Component 있으면 그 좌표 이어받음
- 없으면 페이지 최하단 + 80px 에 배치

---

## 9. Component Property 노출 안 됨 (해결됨)

### 과거 이슈
variants 없는 단일 Component 에는 Component Property 가 노출 안 됨. props override 가 무시되어 default 값만 보임.

### 현재 (수정됨)
Generator 가 단일 Component 에도 `addComponentProperty` 호출. 또한 `kind: "group"` 안 nested text 의 `exposeAs` 도 재귀 탐색.

### 변경된 Component 에만 반영
수정 이전에 생성된 Component 는 Property 없음. 해당 Component 재생성하면 반영됨.

---

## 10. 대형 파일 / 성능 이슈

### 증상
Scripter 실행 시 UI 멈춤 또는 매우 느림.

### 원인
번들 파일이 70-80KB 이상 (DS JSON + spec + generator 모두 포함). Scripter 파싱에 수 초 걸림.

### 대응
- 정상 범위 — 완료까지 5-10초 기다림
- 진행 안 되면 Scripter 재시작 (Figma 플러그인 메뉴 → 다시 실행)
- Figma 데스크톱 앱 자체가 무거워졌을 수 있음 — 파일 저장 후 재열기

---

## 11. `validateSpec` 가 throw

### 증상
`Missing tokens:` 에러로 실행 중단. 리스트에 찾을 수 없는 토큰 경로 나열됨.

### 원인
스펙에서 참조한 `{some.token.path}` 가 DS 에 없음.

### 해결
- 오타 확인 (예: `semantic.color.text.emphasis` vs `semantic.color.text.emphais`)
- DS 에 해당 토큰 추가 여부 확인
- alias chain 깊이 확인 (재귀 돌며 끝까지 resolve 되어야 함)

토큰 추가 시: [WORKFLOWS.md — DS 토큰 수정](WORKFLOWS.md#-ds-%ED%86%A0%ED%81%B0-%EC%88%98%EC%A0%95) 참고.

---

## 12. Variant 이름 매칭 실패 (setProperties 경고)

### 증상
`setProperties 실패` 콘솔 경고. Instance 의 variant 가 default 로 남음.

### 원인
`variant: { type: "primary", state: "default" }` 로 지정했는데 Component Set 에 해당 조합이 없음 (예: 축 이름 오타 또는 값 오타).

### 해결
- Component Set 의 실제 variant 이름 확인 (Figma 에서 열어 본 뒤)
- 스펙의 variant 값 수정
- 오타 확인: `type=primary, state=default` 형식, 띄어쓰기 포함

---

## 13. Fetch / 복사 모드가 macOS 외에서 실패

### 증상
Windows 또는 Linux 에서 `node scripter/bundle.js ...` 실행 시 "Copied to clipboard" 메시지 없음.

### 원인
`bundle.js` 의 클립보드 복사가 `pbcopy` (macOS 전용).

### 해결
- 파일은 정상 생성됨 (`scripter/runs/*.generated.js`)
- 해당 파일 열어서 수동 복사
- cross-platform 필요 시 `clipboardy` npm 패키지 추가 고려

---

## 14. Git 커밋 후 동료가 실행 실패

### 증상
Git clone 후 동료가 Scripter 실행 시 컴포넌트 생성 실패.

### 원인
- Figma 파일이 다르면 페이지/섹션 구조 없음 → 먼저 `figma-create-sections.js` 실행 필요
- Variables 가 없으면 바인딩 실패 → `--sync` 먼저 실행

### 해결
[README.md — 초기 셋업](../README.md#%EC%B4%88%EA%B8%B0-%EC%85%8B%EC%97%85-%EC%B2%98%EC%9D%8C-%ED%95%9C-%EB%B2%88%EB%A7%8C) 을 새 환경에서 돌릴 때 반드시 따르도록 안내.

---

## 15. Component 이름에 `/` 쓸 때 Figma UI 에서 folder 로 그룹핑됨

### 현상 (버그 아님)
`atom/icon/sparkle` 이라고 이름 짓으면 Figma Assets 패널에서 `atom > icon > sparkle` 폴더 계층으로 표시됨.

### 의도된 동작
Figma 가 `/` 를 계층 구분자로 인식. 우리가 네이밍 규칙에 `/` 쓰는 것은 Figma 의 이 기능 활용 목적도 있음.

---

## 뭔가 잘 안 될 때 체크리스트

- [ ] **`node scripter/audit.js` 통과?** (6 규칙 자동 검증 — AUDIT_RULES.md)
- [ ] Scripter 콘솔의 전체 에러 메시지 확인 (하단 panel)
- [ ] `node -c scripter/runs/xxx.generated.js` 로 syntax 검증
- [ ] `skt-design-system.json` 이 유효한 JSON 인지 (`python3 -c "import json; json.load(open('skt-design-system.json'))"`)
- [ ] 스펙의 토큰 참조가 모두 DS 에 존재하는지 (WORKFLOWS.md 의 검증 스크립트)
- [ ] 의존하는 컴포넌트가 Figma 에 이미 있는지 (`atom → mol → ogn` 순서)
- [ ] `--sync` 최근 실행 후 모든 컴포넌트 재생성 했는지

---

## 예방 — spec 작성 후 자동 검증

빌드 (Scripter Run) 전에 항상:

```bash
node scripter/audit.js
```

→ 6 규칙 (중복 이름, 네이밍, 고아 ref, 완결성, 모듈 코드, raw 값) 자동 검사. 통과 못 한 spec 은 빌드 시 무조건 깨지거나 어색한 결과.

규칙 상세는 `AUDIT_RULES.md` 참고.
