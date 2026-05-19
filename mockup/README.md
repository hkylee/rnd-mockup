# SKT Genui — Mockup (디자인 시스템 + Figma 자동화)

JSON 스펙 → Scripter / Figma Plugin → Figma 컴포넌트 자동 생성하는 디자인 시스템 작업 공간.

상위 wrapper 안내 → [../README.md](../README.md) · 작업 컨텍스트 → [CLAUDE.md](CLAUDE.md)

---

## 처음 시작

### 사전 준비
- Node.js 18+
- Figma 데스크톱 앱 (Figma 자동화는 데스크톱 전용)
- Figma **Scripter** 플러그인 설치 (Community 에서 검색)
- 대상 Figma 파일에 `Atom` / `Molecule` / `Organism` / `Page` 페이지 4개 (없으면 수동 생성)

### Figma Plugin 등록 (한 번만)
```
Figma 데스크톱 → Plugins → Development → Import plugin from manifest...
→ mockup/figma-plugin/manifest.json 선택
```
자세히 → [figma-plugin/README.md](figma-plugin/README.md)

### Figma Variables 임포트 (한 번만, DS 토큰)
```bash
node scripter/bundle.js --sync
```
→ 클립보드에 스크립트가 복사됨 → Figma 데스크톱 → `Plugins → Scripter` → 에디터 비우고 Cmd+V → Run ▶

결과: SKT Foundation / Semantic / Component 3개 Variable 컬렉션 생성 (~155 개 토큰).

### 컴포넌트 생성 (반복)
```bash
node scripter/bundle.js atom/btn          # 1개만
node scripter/bundle.js mol/card-header
node scripter/bundle.js ogn/MBR/card-bill-summary

node scripter/bundle.js --library         # atom + icon + mol + ogn 한 번에
node scripter/bundle.js --all             # + page 까지
node scripter/bundle.js --changed         # 직전 commit 대비 변경분 + cascade

node scripter/bundle.js --icon sparkle    # SVG 아이콘 import
```
모두 클립보드 복사 → Scripter Run.

> *"--library 와 --all 차이"*: `--library` 는 재사용 컴포넌트만 (atom/mol/ogn), `--all` 은 + Page 까지. 보통 page 는 따로 빌드하니까 `--library` 가 일상용.

---

## 폴더 구조

```
mockup/
├── skt-design-system.json      🎨 DTCG 형식 토큰 source of truth
├── component-specs/             📋 컴포넌트 스펙 (atom / mol / ogn / page)
│   ├── atom/                    btn, icon-bubble, thumb, ...
│   ├── mol/                     card-header, ai-insight, list-item-*, ...
│   ├── ogn/                     header, GNB, status-bar, tab-bar
│   ├── ogn/MBR/                 회원/탈퇴/휴면 모듈 ogn
│   └── page/MBR/, page/PRDD/    화면 (Frame, Component 아님)
├── figma-icons/                 🖼 SVG 아이콘 라이브러리 (340+ 카테고리별)
│
├── scripter/                    ⚙️ Figma 자동화 도구들
│   ├── bundle.js                ★ CLI 진입점 — DS+spec+core 를 paste 용 .js 로 번들
│   ├── generator-core.js        Figma Plugin API 로 Component 빌드 + Variable 바인딩
│   ├── sync-tokens.js           DS JSON → Figma Variables (idempotent)
│   ├── audit.js                 spec 자동 검증 (AUDIT_RULES 6 규칙)
│   ├── generate-sb.js           specs-input MD → SB JSON (스토리보드)
│   ├── generate-sb-html.js      SB JSON → SB HTML (도메인 메타 시각화)
│   ├── wash.js, wash-runtime.js Figma 손그림 → DS 가이드대로 spec 정규화
│   ├── build-plugin-lookup.js   DS 변경 시 plugin typography lookup 재생성
│   └── runs/, sb/, sb-html/     생성 결과물 (gitignore — 재생성 가능)
│
├── figma-plugin/                🔌 Genui Spec Extractor (Figma 손그림 → spec JSON)
│   ├── manifest.json
│   ├── code.js                  Figma 측 (selection 분석)
│   └── ui.html                  plugin UI
│
├── mockup-docs/                 📐 가이드 문서들 — single source of truth
│   ├── DESIGN_PRINCIPLES.md     위계·typography·spacing·페이지
│   ├── CONVENTIONS.md           네이밍·스키마·토큰·layoutAlign
│   ├── AUDIT_RULES.md           spec 진단 규칙
│   ├── SPEC_INPUT_TEMPLATE.md   기능내역서 입력 양식
│   ├── SPEC_REPORT_TEMPLATE.md  분석 보고 양식
│   ├── UX_GOVERNANCE.md         UX 7원칙
│   ├── INTERACTION_TAGS.md      [tap]/[interactive]/[sync]/[loading]/[nav] 등
│   ├── WASH_SPEC.md             wash 도구 사양
│   └── ONBOARDING.md            새 동료 첫 시작
│   → web 의 docs-loader 가 직접 참조 (sync 안 함)
│
├── specs-input/                 📝 기능내역서 입력 (MD)
├── specs-flow/                  🔀 페이지 동선 (MD)
├── specs-report/                📊 분석 보고서 (MD)
├── sb-doc/                      📜 SB 작성 가이드
│
├── CLAUDE.md                    Claude Code 세션 컨텍스트 (함정·네이밍·의존성 그래프)
└── README.md                    (이 파일)
```

---

## 자주 쓰는 작업 흐름

### A. 새 atom/mol/ogn 추가
1. `component-specs/<cat>/<name>.json` 작성 (스키마 → CONVENTIONS § 5)
2. `node scripter/audit.js` — 자동 검증
3. `node scripter/bundle.js <name>` → Scripter Run
4. (필요 시) 상위 ref 컴포넌트 cascade 재생성: `node scripter/bundle.js --changed`
5. web 에 반영: `cd ../web && npm run sync:shared`

### B. DS 토큰 추가/수정
1. `skt-design-system.json` 편집
2. `node scripter/bundle.js --sync` → Scripter Run (idempotent — 기존 Variable ID 유지, 값만 갱신)
3. (typography 추가 시) `node scripter/build-plugin-lookup.js` → Figma plugin reload
4. web 에 반영: `cd ../web && npm run sync:shared`

### C. Figma 손그림 → spec (wash)
1. Figma 데스크톱에서 손그림 컴포넌트 선택 → `Plugins → Development → Genui Spec Extractor`
2. plugin UI 의 "웹으로 전송" 버튼 → `localhost:3000/figma-wash` 자동 진입
3. web 에서 DS 가이드대로 변환 + 저장

### D. 정책서 → 화면 (Lean 9-step) ⭐ 표준 흐름
자세히 → [mockup-docs/WORKFLOWS.md](mockup-docs/WORKFLOWS.md) "정책서 → Figma (Lean 9 step)" 섹션. 사용자 개입 = 검토 1 + 시각 검증 1 = 총 2점.

---

## ⚠️ 핵심 함정 (작업 전 숙지)

자세한 함정 모음은 [CLAUDE.md](CLAUDE.md) 의 "필수 주의 사항" 섹션. 가장 자주 부딪히는 것:

1. **Scripter 예약어** — `node`, `map`, `page`, `color`, `rgb` 변수명 금지
2. **lineHeight PERCENT + Variable 충돌** — generator 가 자동 처리, raw 값만 들어감
3. **counterAxisSizingMode 의 의미는 layout.mode 에 따라 반대** — bulk sed 금지, 파일별 개별 Edit
4. **mol 레벨 스타일 분기는 별개 mol 로 쪼개기** — variants 축이나 nested override 로 분기 X
5. **baseline width = "FILL" 표준** — atom/mol/ogn 의 `base.layout.width` 는 `"FILL"` default, `widthFallback` 으로 top-level baseline 폭 명시
6. **ref 의 props 는 같은 키 여러 자식 시 첫 자식만 매칭** — 같은 mol 여러 개 묶는 ogn 만들지 말고 page 에서 직접 N ref

---

## 더 알아보기

- **세션 컨텍스트** (Claude Code 자동 로드) → [CLAUDE.md](CLAUDE.md)
- **디자인 원칙 / 위계 결정** → [mockup-docs/DESIGN_PRINCIPLES.md](mockup-docs/DESIGN_PRINCIPLES.md)
- **네이밍 / 스키마 / 토큰 문법** → [mockup-docs/CONVENTIONS.md](mockup-docs/CONVENTIONS.md)
- **새 동료 첫 시작** → [mockup-docs/ONBOARDING.md](mockup-docs/ONBOARDING.md)
- **인터랙션 태그 시스템** → [mockup-docs/INTERACTION_TAGS.md](mockup-docs/INTERACTION_TAGS.md)
- **Figma plugin 사용법** → [figma-plugin/README.md](figma-plugin/README.md)

---

## 라이선스 / 공유 시 주의

- `skt-design-system.json` 의 색상·치수·타이포는 SKT 프로젝트 베이스라인. 외부 공개 전 기업 기밀/브랜드 자산 검토 권장
- Figma 파일 URL, Notion 통합 토큰, Figma PAT 등 자격증명 절대 commit 금지
- 파이프라인 자체 (generator-core / bundle / sync-tokens / wash) 는 제품 독립적 — 다른 DS 로도 재사용 가능
