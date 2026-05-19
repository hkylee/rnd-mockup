# Architecture

JSON 스펙 → Scripter 붙여넣기용 .js → Figma Component 로 가는 파이프라인의 구조.

## 전체 흐름

```
┌─────────────────────────────────────────────────────────────────┐
│ 소스 (사용자가 직접 편집하는 것)                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  skt-design-system.json        component-specs/**/*.json        │
│  (DTCG 토큰 source)            (컴포넌트 선언)                    │
│                                                                 │
└──────────────┬────────────────────────────┬─────────────────────┘
               │                            │
               │  Node CLI 번들링            │
               ↓                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ scripter/bundle.js                                              │
│                                                                 │
│  - DS + spec + generator-core 합성 (기본 모드)                   │
│  - --sync: DS + sync-tokens.js (idempotent)                     │
│  - --icon: 개별 SVG + 임포트 스크립트 (slash 이름 + --size 지원)  │
│  - --cleanup: 구 섹션 프레임 일괄 정리                            │
│  - 결과 .generated.js 출력 + macOS pbcopy                       │
│                                                                 │
└──────────────┬──────────────────────────────────────────────────┘
               │
               ↓  scripter/runs/*.generated.js (클립보드)
               │
               │  사용자가 Scripter 에 Paste + Run
               ↓
┌─────────────────────────────────────────────────────────────────┐
│ Figma Scripter Plugin                                           │
│                                                                 │
│  - generator-core 실행: resolveToken / buildFrame /              │
│    buildText / buildRef / buildGroup / ...                      │
│  - Component 를 페이지에 직접 배치 (섹션 wrapper 없음)             │
│    · 기존 동일 이름 Component 있으면 그 좌표 이어받아 교체          │
│    · 기존 섹션 wrapper 자동 정리                                  │
│    · 신규는 페이지 하단 + 80px 에 추가                             │
│  - Variable 바인딩 적용                                          │
│                                                                 │
└──────────────┬──────────────────────────────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────────────────────────────┐
│ Figma 파일                                                       │
│                                                                 │
│   Variables:    SKT Foundation / Semantic / Component            │
│   Pages:        Atom / Molecule / Organism                       │
│   Components:   atom/btn, mol/card-header, ogn/MYBEN/...         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 파일별 역할

### 소스 (편집 대상)

| 파일 | 역할 |
|---|---|
| `skt-design-system.json` | **DTCG 형식의 design token source of truth.** foundation (원시 값) → semantic (alias) → component (컴포넌트 preset) 3-tier 구조. 모든 값은 `{path.to.token}` alias 로 상호 참조 가능. |
| `component-specs/**/*.json` | 각 컴포넌트의 **선언적 스펙**. layout / visual / children / variants. 토큰 참조는 DS 에 정의된 경로만 허용. |
| `figma-icons/**/*.svg` | 340개 SVG 아이콘 라이브러리. `--icon` 모드로 Figma Component 임포트. |

### 실행 도구 (편집 거의 안 함)

| 파일 | 역할 |
|---|---|
| `scripter/generator-core.js` | **핵심 엔진.** Figma Plugin API 호출로 spec 을 Component 로 변환. 주요 함수: `resolveToken`, `buildFrame`, `buildText`, `buildRef`, `buildSolidPaint`, `setFloatField`, `findVariable`, `exposeComponentProperties`, `generateComponentSet`. |
| `scripter/sync-tokens.js` | DS JSON 을 walk 해서 Figma Variables 3개 컬렉션 생성 또는 업데이트 (**idempotent** — 기존 ID 유지). `setPluginData("skt-vars", idMap)` 에 path→ID 맵 저장. |
| `scripter/bundle.js` | Node CLI. 여러 모드 지원: 기본 (단일 컴포넌트), `--sync`, `--icon`, `--cleanup`, 그리고 batch 모드 `--all` / `--library` / `--pages` / `--group <category>`. DS + spec + core 를 literal 삽입 후 `.generated.js` 파일로 출력하고 pbcopy. |
| `scripter/audit.js` | Node CLI. `AUDIT_RULES.md` 의 6 규칙을 카탈로그 (component-specs/) 에 자동 적용해서 진단 결과 출력. exit code 로 통과/경고/실패 표현. `--strict` 로 경고도 실패 처리. |
| `scripter/icon-registry.json` | atom/icon/* + atom/logo/* 의 매핑 (이름 → SVG 경로 / skeleton 여부). bundle.js 의 batch 모드와 audit.js 의 ref 검증이 공유. |

### 중간 산출물 (gitignore 됨)

| 파일 | 역할 |
|---|---|
| `scripter/runs/*.generated.js` | Scripter 붙여넣기용. 자동 생성. 직접 수정 금지. |

### 설정 스크립트 (1회성)

| 파일 | 역할 |
|---|---|
| `figma-create-sections.js` | 초기 셋업: Atom/Molecule/Organism 페이지 + 섹션 프레임 생성. |
| `figma-rename-sections.js` | 마이그레이션: 이전 네이밍 → 새 네이밍. |

## 토큰 해결 (Resolver)

`generator-core.js` 의 `resolveToken(tokens, ref, seen?)`:

1. `ref` 가 `"{path}"` 형식이 아니면 → `parseLiteral` 로 원시 값 해석 (hex→RGB, "16px"→16)
2. path 로 DS 노드를 찾음
3. 해당 노드가 `value` + `type` 을 가진 leaf 면 → 그 value 로 재귀
4. value 가 또 `"{...}"` alias 면 → 재귀 (cycle detection)
5. value 가 복합 객체 (shadow / typography 등) 면 → 특수 처리
6. **추가로** `bindings` 필드에 각 하위 path 를 보존 (Variable 바인딩용)

## Variable 바인딩 원리

1. **`sync-tokens` 실행 시:** DS 의 모든 leaf 토큰이 Figma Variable 로 생성됨. alias 는 Figma 의 `VARIABLE_ALIAS` 로 저장. path→variableId 맵이 plugin data 에 영구 저장.

2. **컴포넌트 생성 시:** `generator-core` 가
   - scalar field (padding, cornerRadius, fontSize 등) 는 `node.setBoundVariable(field, variable)` 호출
   - paint 의 color 는 `paint.boundVariables = { color: { type: "VARIABLE_ALIAS", id: ... } }` 로 설정
   
3. **DS 수정 시:** `sync-tokens` 는 idempotent — 기존 Variable ID 유지, 값만 업데이트. 따라서 Variable 로 바인딩된 속성 (color/dimension 등) 은 Component 재생성 없이 즉시 반영됨. 단, typography 는 composite 이라 raw 값으로 적용되므로 재생성 필요.

## Idempotency (중복 실행 안전성)

### Component 생성
- **같은 이름의 Component / Set 이 페이지에 있으면 교체** — 기존 좌표 이어받아 새 Component 로 swap.
- 이전 버전의 **섹션 프레임 wrapper** 가 있으면 같이 삭제 (name 일치 시).
- 신규 Component 는 페이지 최하단 + 80px 에 배치.

### Sync (Variables)
- 기존 SKT 컬렉션 / Variable 유지 (이름 매칭으로 인덱스).
- 값 변경된 것만 setValueForMode 로 업데이트.
- 신규 토큰만 createVariable.
- DS 에서 제거된 orphan Variable 은 로그만 남기고 자동 삭제 안 함.

### 주의
- 수동으로 수정한 Component 의 override 는 재생성 시 **소실**.
- `kind: "ref"` 로 상위 컴포넌트가 참조 중인 Component 를 재생성하면 **instance 끊김** → cascade 재생성 필요 (atom → mol → ogn).

## Scripter 제약 반영

- **Scripter 예약 전역** (`node/map/page/color/rgb`) 와 충돌 피해서 식별자 명명. `tgt/varMap/targetPage/resolvedColor/rgbColor` 사용.
- **정규식에 한글 금지** (파서 실패) — 유니코드 escape `가-힣` 사용.
- **Unicode-escape 정규식** 으로 한글 감지 → Pretendard 자동 선택.
