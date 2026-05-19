# Workflows

자주 쓰는 작업 레시피. **순서 있는 것은 순서대로** 따라야 ID chain 이 유지됩니다.

---

## ⚡ 빌드 범위 결정 (가장 먼저!) ⭐

spec/DS 수정 후 어떤 bundle 명령을 쓸지 — **변경 규모 따라** 좁은 것부터 선택. 무조건 `--library` / `--all` 부터 돌리지 말 것.

| 변경 규모 | 명령 | 비고 |
|---|---|---|
| spec 1개 신규/수정 | `node scripter/bundle.js {spec.name}` | ref 의존성 자동 포함. 가장 빠름 |
| spec N개 (관련 cascade) | `node scripter/bundle.js --changed` | git uncommitted 변경 추적 → 영향 받는 것만 자동 |
| DS 토큰만 수정 | `node scripter/bundle.js --sync` | Variable 갱신 1 Run |
| DS + spec 같이 | `--sync` 후 `--changed` | 2 Run (sync 먼저) |
| 카테고리 전체 (atom/mol/ogn/page 中 1) | `--group {atom\|mol\|ogn\|page}` | drift 정리 시 |
| 라이브러리 전체 + 페이지 | `--all` | **신규 셋업 또는 generator-core 변경** 시만. 일반 spec 수정에 쓰지 말 것 |
| 라이브러리만 (페이지 제외) | `--library` | 마찬가지로 generator 변경 / 토큰 일괄 마이그레이션 시만 |

### 결정 트리

```
spec/DS 수정 후 빌드 직전 →
├─ "1개 컴포넌트만 손봤음" → bundle.js {spec.name}
├─ "여러 spec 손봤지만 cascade 안 챙겼음" → --changed
├─ "DS 토큰만" → --sync
├─ "DS + spec 같이" → --sync 먼저, 그 다음 --changed
└─ "전체 처음 셋업이거나 generator-core 자체 수정" → --sync + --all
```

**AI 행동 규칙**: 단일 spec 수정 시 `--library` / `--all` 자동 호출 금지. `bundle.js {spec.name}` 또는 `--changed` 우선. cascade 영향 있으면 영향 받은 것만 추가로 명시 빌드.

---

## 🧭 정책서 → Figma (Lean 9 step)

정책서 (요건) → 화면 spec 까지 9 단계. 사용자 개입은 **검토 1 + 시각 검증 1 = 2 점만**. 나머지는 Claude 자동 + 자동 묶음.

```
1. 사용자: 정책서 첨부
   └─ HTML / PDF / Notion DB / 기획서
       │
       ▼
2. Claude: 분석 보고 통합 작성 (한 번에)
   📍 정책서 8 요소 → SB 매핑 표는 `mockup/sb-doc/policy-to-sb-mapping.md` 참조
   ├─ POLICY_REPORT (specs-report/<MOD>-policy.md)
   │  ├─ 정책서 메타 / Use Case 목록 / POL 매핑 / DS·cascade 개요
   │  └─ § 1.8 법적·안내 고지 도출 ⭐ 필수 — 정책서 키워드 검색 (동의/약관/안내/유의/불가/문의 등) → 화면별 매핑 + 🔴 필수 / 🟡 사용성 마킹
   ├─ USER_FLOW (specs-flow/<MOD>-<usecase>.md, use case 별 1 파일)
   │  └─ 진입·출구 / 시퀀스 / 분기 / 에지 케이스
   └─ SPEC_INPUT (specs-input/<MOD>-<usecase>.md, use case 별 1 파일)
      └─ 화면별 컨텍스트 6필드 + 기능 목록 (USER_FLOW 에서 자동 도출)
       │
       ▼
3. 사용자 검토 1 (모든 보고서 한 번에)
   ├─ Use Case·화면·동선·분기 OK?
   ├─ 컴포넌트 (재사용 / 리네임 / 신규) OK?
   └─ DS 신규 토큰 OK?
       │
       ▼
4. (옵션) 사용자: SPEC_INPUT 직접 미세 조정
   └─ 화면별 위계·기능·톤 조정
       │
       ▼
5. Claude: SPEC_REPORT 정밀화 (specs-report/<MOD>-<usecase>.md, use case 별)
   ├─ § 0 입력 요약 (UX 단계·task·동선 출처 — SPEC_INPUT 자동 인용)
   ├─ § 0.5 법적·안내 요소 체크 ⭐ POLICY_REPORT § 1.8 의 use case 별 발췌 — 🔴/🟡 마킹된 표
   ├─ § 0.6 도메인 copy 도출 ⭐ POLICY_REPORT § 1.7 의 결과를 page → ogn ref props 로 주입할 텍스트 표
   ├─ § 1 카탈로그 대조 (재사용 / 리네임 / 신규 — 고지 컴포넌트 포함)
   ├─ § 2 DS 토큰 점검
   └─ § 3 Cascade 빌드 순서
       │
       ▼
6. Claude: spec + audit + bundle (자동 묶음)
   ├─ DS 토큰 추가 (skt-design-system.json)
   ├─ spec JSON 작성 (atom → mol → ogn → page) — SPEC_INPUT 의 컨텍스트 반영
   │   └─ ⭐ page spec 에서 ogn ref 시 § 0.6 의 도메인 copy props 로 주입 (generic placeholder 잔존 X)
   ├─ audit 자동 (실패 시 bundle skip — Rule 12 고지 누락 / Rule 13 generic placeholder 잔존)
   └─ bundle --sync + --all → 클립보드
       │
       ▼
7. 사용자: Scripter Run (1~2회) + 시각 검증
   └─ 결과 OK / 어색한 부분 표시
       │
       ▼
8. (필요 시) Claude: spec 미세 조정 → 6 다시 → 7
       │
       ▼
9. commit + push
```

### 기능내역서 직접 첨부 시 (정책서 X)

step 2 의 POLICY_REPORT skip. 사용자가 SPEC_INPUT 양식으로 채워서 전달하면 USER_FLOW 도 skip 가능 — 단 컨텍스트 6필드가 비어 있으면 Claude 가 사용자에게 채울지 물어봄. step 5 부터 진행.

### 사용자 개입 시점 (2 점)

- **검토 1 (step 3)**: 한 번에 모든 분석 보고. "이 방향 OK?" 한 번 결정.
- **시각 검증 (step 7)**: Figma Run 후 결과 확인. 조정 필요하면 6 으로 돌아감.

(옵션 4, 8 은 미세 조정용 — 진행에 필수 X)

### 산출물 위치

```
mockup/
├ specs-report/<MOD>-policy.md         ← 정책서 단위 (메타 + POL)
├ specs-report/<MOD>-<usecase>.md      ← Use Case 단위 (카탈로그·DS·cascade)
├ specs-flow/<MOD>-<usecase>.md        ← Use Case 단위 (동선)
├ specs-input/<MOD>-<usecase>.md       ← Use Case 단위 (화면별 컨텍스트·기능)
└ component-specs/**                   ← 최종 spec JSON
```

---

## 📋 표준 화면 작업 흐름 (기능내역서 → Figma)

```
1. 사용자: 기능내역서 첨부
   - SPEC_INPUT_TEMPLATE.md 양식 채워서 텍스트 전달, OR
   - Notion DB URL 그대로 전달 (Claude 가 자동 추출)
       │
       ▼
2. Claude: 컴포넌트 분석 (SPEC_REPORT_TEMPLATE.md 따름)
   - **UX 단계 분류** (1 진입 ~ 7 CS) → governance/INDEX.md ★ 가장 먼저 (단계별 상세 가이드: governance/UXL_*.html)
   - 카탈로그 대조 (재사용 / 리네임 / 신규) → AUDIT_RULES.md
   - 위계 결정 (atom/mol/ogn) → DESIGN_PRINCIPLES.md
   - 보고서 표 형식 출력 (UX 단계·핵심 원칙·체크포인트 포함)
       │
       ▼
3. 사용자: 보고서 검토 → OK / 수정 요청
       │
       ▼
4. Claude: spec 작성
   - DS 신규 토큰 (필요 시) → skt-design-system.json
   - cascade 순서로 spec JSON (atom → mol → ogn → page)
       │
       ▼
5. Claude: 자동 검증
   node scripter/audit.js
   → 6 규칙 통과 확인
       │
       ▼
6. Claude: 2 Run 빌드
   node scripter/bundle.js --sync     # Run 1
   node scripter/bundle.js --all      # Run 2
   사용자: Scripter 에 Paste + Run × 2
       │
       ▼
7. Claude: commit + push
```

각 단계 자세히는 아래 참고.

---

## 🚀 처음부터 새 Figma 파일에 셋업

### 옵션 A — All-in-One (권장, 2 Run)

가장 간단. 전체를 2번 Scripter Run 으로 끝:

1. **Atom / Molecule / Organism 페이지 생성** — Figma UI 에서 페이지 추가 (`Atom`, `Molecule`, `Organism`)
2. **Variables 임포트** (Run 1)
   ```bash
   node scripter/bundle.js --sync
   ```
3. **전체 빌드** (Run 2 — 약 57개 컴포넌트)
   ```bash
   node scripter/bundle.js --all
   ```
   → atom + icon + mol + ogn + page 모두 통합. `Page` Figma 페이지는 자동 생성.

⚠️ Run 2 가 무거우면 (Figma 가 멈추거나 일부 실패) → **옵션 B** 로

### 옵션 B — 라이브러리 + 페이지 분리 (3 Run)

Run 2 가 부담될 때 페이지만 분리:
```bash
node scripter/bundle.js --sync         # Run 1
node scripter/bundle.js --library      # Run 2 (~55개)
node scripter/bundle.js --pages        # Run 3 (page 2개)
```

### 옵션 C — 카테고리별 분리 (5 Run, 안전)

옵션 A·B 모두 실패 시. 각 카테고리를 별개로:
```bash
node scripter/bundle.js --sync           # Run 1
node scripter/bundle.js --group atom     # Run 2 (atom + icon)
node scripter/bundle.js --group mol      # Run 3
node scripter/bundle.js --group ogn      # Run 4 (공통 + MYBEN + PRDD)
node scripter/bundle.js --group page     # Run 5
```

### 옵션 D — 1개씩 수동 (디버깅, 58 Run)

```bash
node scripter/bundle.js --sync
node scripter/bundle.js --icon sparkle      # icon 1개씩
node scripter/bundle.js atom/btn            # spec 1개씩
... 등 순차
```

### 옵션 E — `--changed` 자동 분류 (반복 작업 권장 default) ⭐

```bash
node scripter/bundle.js --changed
```

git uncommitted 변경 파일을 추적해서 영향 받는 것만 자동 빌드. 변경 종류별 분류:

| 변경 위치 | 자동 호출 |
|---|---|
| `scripter/generator-core.js` 또는 `bundle.js` | ⚠ warning + 변경 spec cascade 만 (전체 적용 원하면 별도 `--all`) |
| `skt-design-system.json` 만 변경 | `--sync` |
| `skt-design-system.json` + spec 같이 변경 | ⚠ sync 별도 Run 안내 + spec cascade 빌드 (사용자가 sync 한 번 + spec cascade 한 번 = 2 Run) |
| `scripter/icon-registry.json` 만 변경 | `--group atom` (atom + icon) |
| `component-specs/**/*.json` (변경 spec N개) | 변경 spec **+ 그걸 ref 한 모든 mol/ogn/page** transitive cascade |
| 비코드 파일 (docs / SVG 추가만) | 빌드 skip |

**언제 쓰나** — spec 1~몇개만 수정하는 반복 워크플로. 매번 `--all` 돌리지 않아 시간 절약.  
**언제 쓰지 마나** — 처음 셋업 (옵션 A), 또는 git 추적 안 되는 환경.

**generator/bundle 변경 시 동작**: 사용자가 변경 spec 만 의도하는 경우가 많아 conservative `--all` 강제하지 않음. 대신 warning 출력 + spec cascade 만 빌드. 모든 컴포넌트에 generator 변경 적용 원하면 별도로 `node scripter/bundle.js --all` 실행.

**DS + spec 같이 변경 시**: 신규 토큰이 Variable 등록 안 되면 spec 빌드 시 missing token error 가능. **순서**:
1. `node scripter/bundle.js --sync` → Figma Run (Variable 갱신)
2. `node scripter/bundle.js --changed` → Figma Run (spec cascade)

> **참고**: 이전 버전의 `figma-create-sections.js` 는 각 컴포넌트당 섹션 프레임을 만들었으나, 현재 구조에서는 섹션 불필요. 이미 섹션이 있는 파일은 `node scripter/bundle.js --cleanup` 으로 정리 가능.

---

## ➕ 새 atom 추가

예: `atom/chip` 추가.

### 1. 스펙 파일 작성

`component-specs/atom/chip.json` 생성:

```jsonc
{
  "$schema": "component-spec-v1",
  "name": "atom/chip",
  "category": "atom",
  "base": {
    "layout": {
      "mode": "HORIZONTAL",
      "primaryAxisSizingMode": "AUTO",
      "counterAxisSizingMode": "FIXED",
      "primaryAxisAlignItems": "CENTER",
      "counterAxisAlignItems": "CENTER",
      "paddingLeft":  "{component.chip.default.paddingHorizontal}",
      "paddingRight": "{component.chip.default.paddingHorizontal}",
      "paddingTop": 0,
      "paddingBottom": 0,
      "itemSpacing": "{foundation.dimension.spacing.xs}",
      "height": "{component.chip.default.height}",
      "width":  "HUG"
    },
    "visual": {
      "cornerRadius": "{component.chip.default.radius}",
      "fill":   "{component.chip.default.background}",
      "stroke": { "color": "{component.chip.default.border}", "weight": 1 },
      "shadow": null
    },
    "children": [
      {
        "kind": "text",
        "id": "label",
        "content": "Chip",
        "textStyle": "{component.chip.default.textStyle}",
        "color": "{component.chip.default.text}",
        "exposeAs": "label"
      }
    ]
  },
  "variants": {
    "axes": [
      { "name": "type", "values": ["default", "selected"] }
    ],
    "overrides": {
      "type=selected": {
        "visual": {
          "fill": "{component.chip.selected.background}",
          "stroke": null
        },
        "children[label].color": "{component.chip.selected.text}"
      }
    }
  }
}
```

### 2. 토큰 참조 검증 (Node REPL 간단 체크)

```bash
python3 -c "
import json, re
ds = json.load(open('skt-design-system.json'))
spec = json.load(open('component-specs/atom/chip.json'))
refs = set(re.findall(r'\{([^}]+)\}', json.dumps(spec)))
for r in refs:
    n = ds
    for k in r.split('.'):
        n = n.get(k) if isinstance(n, dict) else None
        if n is None: print(f'✗ missing: {r}'); break
    else:
        print(f'✓ {r}')
"
```

### 3. 번들 + Scripter 실행

```bash
node scripter/bundle.js atom/chip
```

→ 클립보드에 복사됨 → Scripter 에 붙여넣기 → Run ▶

### 4. 확인

Atom 페이지의 `atom/chip` 섹션 프레임 안에 Component Set 생성 확인. 각 variant 의 Variable 바인딩 확인 (padding/height/radius/fill 등).

---

## ➕ 새 mol 추가 (atom 참조 포함)

예: `mol/list-item-media` (thumbnail + title+sub + action btn).

### 1. 의존하는 atom 먼저 생성

`atom/thumb`, `atom/btn`, `atom/txt` — 모두 Figma 에 이미 있어야 함.

### 2. 스펙 작성

`component-specs/mol/list-item-media.json`:

```jsonc
{
  "$schema": "component-spec-v1",
  "name": "mol/list-item-media",
  "category": "mol",
  "base": {
    "layout": {
      "mode": "HORIZONTAL",
      "primaryAxisSizingMode": "AUTO",
      "counterAxisSizingMode": "AUTO",
      "primaryAxisAlignItems": "MIN",
      "counterAxisAlignItems": "CENTER",
      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
      "itemSpacing": "{foundation.dimension.spacing.md}",
      "width": "HUG"
    },
    "visual": { "cornerRadius": 0, "fill": null, "stroke": null, "shadow": null },
    "children": [
      { "kind": "ref", "id": "thumb", "component": "atom/thumb" },
      {
        "kind": "group",
        "id": "text-stack",
        "layoutGrow": 1,
        "layout": {
          "mode": "VERTICAL",
          "primaryAxisSizingMode": "AUTO",
          "counterAxisSizingMode": "AUTO",
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "itemSpacing": "{foundation.dimension.spacing.xs}",
          "width": "HUG"
        },
        "visual": { "cornerRadius": 0, "fill": null, "stroke": null, "shadow": null },
        "children": [
          { "kind": "text", "id": "title", "content": "제목", "textStyle": "{semantic.typography.body-medium}", "color": "{semantic.color.text.primary}", "exposeAs": "title" },
          { "kind": "text", "id": "sub",   "content": "부가 설명", "textStyle": "{semantic.typography.sub-label}",   "color": "{semantic.color.text.secondary}", "exposeAs": "sub" }
        ]
      },
      { "kind": "ref", "id": "action", "component": "atom/btn", "variant": { "type": "small", "state": "default" }, "props": { "label": "상세" } }
    ]
  }
}
```

### 3. 번들 + 실행

```bash
node scripter/bundle.js mol/list-item-media
```

Scripter Run ▶.

---

## ➕ 새 ogn 추가 (모듈 종속)

예: `ogn/MYBEN/card-barcode`.

### 1. 페이지 위치는 자동

**별도로 섹션 만들 필요 없음** — generator 가 Organism 페이지 하단 빈 공간에 Component 를 직접 배치. 기존 동일 이름 Component 가 있으면 그 위치 재사용.

### 2. 스펙 작성

module-code 별로 subdirectory 사용:

```
component-specs/ogn/MYBEN/card-barcode.json
```

모듈 종속 organism 의 `name` 필드는 **항상 full path 포함**:
```jsonc
{
  "name": "ogn/MYBEN/card-barcode",
  "category": "ogn",
  ...
}
```

### 3. 번들 + 실행

```bash
node scripter/bundle.js ogn/MYBEN/card-barcode
```

→ Organism 페이지 하단에 Component 직접 배치됨 (섹션 wrapper 없음).

---

## 🖼 새 아이콘 임포트

### 단일 아이콘 (가장 간단)

```bash
node scripter/bundle.js --icon sparkle
```

기본 경로: `figma-icons/Normal/sparkle.svg` 또는 `figma-icons/Normal/sparkleFill.svg`. Component 이름 자동: `atom/icon/sparkle`.

명시적 경로:
```bash
node scripter/bundle.js --icon sparkle figma-icons/Normal/sparkleFill.svg
```

색 바인딩 변경 (기본: `semantic.color.brand.primary`):
```bash
node scripter/bundle.js --icon sparkle --color semantic.color.icon.default
```

크기 변경 (기본 20x20):
```bash
node scripter/bundle.js --icon sparkle --size 24x24
```

### 슬래시 이름 (full path)

이름에 `/` 를 넣으면 full path 로 해석됨. 아이콘이 아닌 일반 atom 에도 사용 가능:
```bash
node scripter/bundle.js --icon atom/barcode figma-icons/Normal/Barcode.svg --size 327x80 --color semantic.color.text.primary
```

→ `atom/barcode` 로 Component 생성. fill 과 stroke 모두 색 재바인딩.

### 여러 아이콘 일괄 (shell 루프)

```bash
for name in sparkle starFill arrowRight heart; do
  node scripter/bundle.js --icon "$name"
  # 매번 클립보드 덮어써지므로 Scripter 바로 paste+run 해야 함
  # 자동화 안 됨: 수동 순회 필요
done
```

**주의**: `--icon` 모드는 매 실행마다 클립보드를 덮어쓰므로 스크립트 한 번에 여러 개 batch 임포트는 현재 지원 안 됨. 배치 필요 시 `bundle.js` 에 `--icons-batch <list>` 모드 추가 필요 (향후 개선).

---

## 🔧 DS 토큰 수정

### 단순 값 수정 (예: primary 색 변경)

1. `skt-design-system.json` 편집
2. `node scripter/bundle.js --sync` → Scripter Run (Variable 값만 업데이트, ID 유지)
3. **기존 Component 자동 반영** — Variable 바인딩 살아 있으므로 재생성 불필요
   (예외: typography 토큰은 composite 라 재생성해야 반영됨)

### 신규 토큰 추가 (예: radius.button = 12)

1. `skt-design-system.json` 에 leaf 추가
2. 참조하려는 컴포넌트 쪽 (예: `component.button.primary.radius`) alias 를 새 토큰으로 변경
3. `--sync` 재실행 (idempotent: 신규 Variable 만 create, 기존 ID 유지)
4. 영향 받는 Component 재생성 (typography 변경 시 또는 신규 토큰을 직접 참조하는 경우)

### 새 semantic typography variant 추가

1. `semantic.typography.card-header-label` 같은 composite 추가:
   ```jsonc
   "card-header-label": {
     "fontSize":      "{foundation.typography.fontSize.sub-label}",
     "lineHeight":    "{foundation.typography.lineHeight.sm}",
     "fontWeight":    "{foundation.typography.fontWeight.semibold}",
     "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}",
     "type": "typography"
   }
   ```
2. typography 는 composite 라 **Variable 을 별도 생성하지 않음** — generator 가 런타임에 composite 를 분해해서 각 field (fontSize/lineHeight/letterSpacing) 를 해당 foundation Variable 로 바인딩.
3. 스펙에서 `"textStyle": "{semantic.typography.card-header-label}"` 로 참조.
4. 해당 스펙 재번들 + Scripter 실행.

> **주의**: composite 자체는 Variable 아니므로, `card-header-label` 이라는 이름의 Variable 은 Figma 에 없음. 하지만 내부 field 는 각 foundation Variable 로 바인딩됨 → DS 수정 시 Variable 업데이트로 반영 가능 (단, 현재 sync 가 destructive 라 전체 재생성 필요).

---

## 🔁 Cascade 재생성

Component 재생성 시 Figma 가 새 ID 를 발급 → 이를 참조하는 상위 컴포넌트의 instance 는 **끊김**.

### 규칙

- A → B 참조 (B 가 A 를 ref) 일 때, **A 를 재생성하면 B 도 재생성** 필요
- 순서: **atom → mol → ogn → page** (page 도 ogn 인스턴스 갱신 필요)
- 단일 spec 빌드 (`bundle.js <name>`) 는 deps 만 자동 포함, **parent 는 자동 안 됨** → parent 까지 가려면 별도 빌드
- 가장 안전: `--all` (한 번에 atom + mol + ogn + page). 변경 범위 좁으면 `--changed` 로 영향 받는 것만 자동

### 예시: atom/btn 수정 시

1. `atom/btn` 재생성
2. `atom/btn` 을 참조하는 모든 mol 재생성 (예: 현재는 없음)
3. `atom/btn` 을 직접 참조하는 ogn 재생성 (예: `ogn/MYBEN/card-points`)

### 예시: DS 전체 sync 후 (idempotent 버전)

`--sync` 는 이제 **기존 Variable ID 를 유지** 하므로 기존 Component 바인딩 살아있음. 재생성은 실제로 변경된 Component 에만 필요:

- **color / dimension 값만 바뀐 경우**: Variable 업데이트로 Component 자동 반영. 재생성 불필요.
- **typography composite 바뀐 경우**: 해당 typography 쓰는 Component 재생성 필요.
- **신규 토큰 추가**: 해당 토큰을 직접 쓰는 Component 재생성 필요 (바인딩 포함하려면).

## 🧹 기존 섹션 프레임 정리

이전 버전 (2026-04 이전) 은 컴포넌트당 섹션 프레임이 있었음. 현재는 불필요. 한 번 정리:

```bash
node scripter/bundle.js --cleanup
```

→ Scripter Run ▶
- Atom / Molecule / Organism 페이지의 `atom/`, `mol/`, `ogn/` 이름 패턴 FRAME 전수조사
- Component 가 안에 있으면 페이지로 꺼내고 FRAME 삭제 (대략 위치 보존)
- 빈 FRAME (placeholder) 은 그냥 삭제

정리 후 Component 위치가 흩어지면 Figma "Tidy up" 기능으로 격자 정렬.

---

## 🧹 기존 Figma 파일 정리 / rename

이전 네이밍 (`mlc/*`, `atom/button`, `ogn/personal-card` 등) 을 새 규칙으로 migration:

```bash
# 코드 내용 확인
cat figma-rename-sections.js | pbcopy
```

Scripter Run ▶ → 매핑된 프레임 이름 일괄 변경.

수정 매핑이 필요하면 `figma-rename-sections.js` 의 `RENAME_MAP` 편집 후 재실행.

### Orphan Component 정리 (rename / 삭제 후) ⭐

spec 의 컴포넌트 이름을 바꾸거나 삭제하면 generator 는 **새 이름 Component 만 만들고 구 Component 는 그대로 둠** (in-place 교체는 동일 이름 일치 시에만). 결과: Figma 에 orphan Component 들이 누적.

**증상**: Components 페이지 /Asset 패널에 spec 에 없는 옛날 이름 Component 가 계속 보임.

**대응**: 작은 cleanup Scripter 스니펫 작성 → 직접 삭제. 예시 골격:

```javascript
// scripter/runs/cleanup-orphans.generated.js (수동 작성 OK)
const ORPHANS = ["mol/old-name", "ogn/MBR/old-card", ...];
async function cleanup() {
  if (figma.loadAllPagesAsync) await figma.loadAllPagesAsync();
  for (const pg of figma.root.children) {
    if (!["Atom", "Molecule", "Organism"].includes(pg.name)) continue;
    pg.findAll(n => (n.type === "COMPONENT" || n.type === "COMPONENT_SET")
                 && ORPHANS.includes(n.name))
      .forEach(c => c.remove());
  }
}
cleanup();
```

→ Figma Scripter 에 붙여넣고 Run ▶. orphan 들이 한 번에 삭제됨.

**책임**: spec 에서 컴포넌트 rename/삭제 작업한 사람이 같은 PR 에서 cleanup 도 처리. 안 하면 Figma 가 점점 지저분해짐.

---

## 🔍 토큰 참조 검증 (빠른 체크)

스펙 작성 직후 토큰 오타/누락 확인:

```bash
python3 -c "
import json, re
ds = json.load(open('skt-design-system.json'))
spec = json.load(open('component-specs/ogn/MYBEN/card-points.json'))
refs = set(re.findall(r'\{([^}]+)\}', json.dumps(spec)))
missing = []
for r in refs:
    n = ds
    for k in r.split('.'):
        n = n.get(k) if isinstance(n, dict) else None
        if n is None: missing.append(r); break
print('refs:', len(refs), 'missing:', len(missing))
for m in missing: print(' ✗', m)
"
```

generator 자체에도 `validateSpec` 가 있어서 Figma 호출 전에 누락 토큰이면 throw 됨.

---

## 🗂 커밋 단위 가이드

- DS 수정 + 관련 스펙 업데이트는 **같은 커밋**에 묶기 (토큰-스펙 일관성)
- generator 로직 변경은 **별도 커밋** (관련 스펙 업데이트와 분리)
- 번들 결과물 `scripter/runs/*.generated.js` 는 `.gitignore` → 커밋하지 않음
