# bundle.js CLI

**경로**: `mockup/scripter/bundle.js`
**역할**: component-spec JSON → Figma Scripter 실행용 .js 번들 생성

---

## 사용법

```bash
# 단일 컴포넌트
node scripter/bundle.js atom/btn

# dry run (파일 저장만, 클립보드 복사 생략)
node scripter/bundle.js --dry atom/btn

# DS → Figma Variables 동기화
node scripter/bundle.js --sync

# 전체 빌드 (component + icon + page)
node scripter/bundle.js --all

# 컴포넌트 + 아이콘만
node scripter/bundle.js --library

# 페이지만
node scripter/bundle.js --pages

# 카테고리 단위 (component | sb | page)
node scripter/bundle.js --group component

# git 변경 추적 → 영향받은 spec + cascade 자동 빌드
node scripter/bundle.js --changed

# 명시 spec 여러 개 (cascade 없음 — 신규 spec 빠르게)
node scripter/bundle.js atom/btn mol/badge-icon

# SVG 아이콘 import
node scripter/bundle.js --icon sparkle figma-icons/Normal/sparkleFill.svg
node scripter/bundle.js --icon sparkle figma-icons/Normal/sparkleFill.svg --color semantic.color.icon.default
```

---

## 경로 상수

```javascript
ROOT       = mockup/                          // bundle.js 기준 ..
DS_PATH    = mockup/skt-design-system.json
CORE_PATH  = mockup/scripter/generator-core.js
SPECS_DIR  = docs/input/components/          // ← 업데이트됨 (구 docs/components/)
RUNS_DIR   = mockup/scripter/runs/
```

---

## 번들 생성 흐름

```
1. skt-design-system.json 읽기 (+ sb/design-system.json deepMerge)
2. docs/input/components/{name}.json 읽기
3. scripter/generator-core.js 읽기
4. 세 파일 합쳐 .generated.js 생성:
   - DS_TOKENS = {...}        (literal 주입)
   - COMPONENT_SPEC = {...}   (literal 주입)
   - SPEC_REGISTRY = {...}    (모든 spec의 width/height meta — ref 자동 STRETCH 추론용)
5. scripter/runs/{slug}.generated.js 저장
6. pbcopy로 클립보드 복사 (--dry면 생략)
```

출력 파일: `mockup/scripter/runs/{slug}.generated.js`
(web sync 후: `web/shared/scripter/runs/{slug}.generated.js`)

---

## collectSpecs(category) 동작

```
category="component" → SPECS_DIR/*.json (flat, 서브디렉토리 제외)
category="page"      → SPECS_DIR/{MODULE}/**/*.json (서브디렉토리만)
category 기타        → SPECS_DIR/{category}/**/*.json
```

---

## topo-sort (ref 의존성 자동 정렬)

`--library` / `--all` 배치 빌드 시, 같은 카테고리 안에서 ref 의존성 순서로 정렬.
예: `mol/list-item-movie` → `mol/list-item-title-sub-default` 참조 시, title-sub-default 먼저 빌드.

---

## PAGE_FLOW_ORDER

Figma "Page" 프레임에서 UC × step 그리드 배치 순서.
새 모듈 페이지 추가 시 bundle.js의 `PAGE_FLOW_ORDER` 객체에 항목 추가 필요.

---

## SPEC_REGISTRY

모든 spec의 width/height 메타:
```javascript
SPEC_REGISTRY = {
  "atom/btn": { width: "FILL", height: null },
  "mol/badge-icon": { width: null, height: null },
  ...
}
```
generator-core.js가 ref 처리 시 참조:
`SPEC_REGISTRY[component].width === "FILL"` → 자동 STRETCH 부여
