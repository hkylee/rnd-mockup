# Documentation

기획자를 위한 SDUI 화면설계서 작성 가이드 및 워크플로우 문서

---

## 🔄 큰 흐름 — 한 정책서, 두 산출물

```
정책서 (NC_정책서)
  ↓ 분석 (어휘 공유 — 마킹/톤/상태)
  │
  ├── mockup 흐름      → spec JSON → figma component (디자이너 핸드오프)
  │   (mockup/mockup-docs/, mockup/component-specs/)
  │
  └── sb 흐름          → SB HTML / SDUI JSON (개발자 핸드오프 ← 본 폴더)
      (NOVA-MBR-PG-XXX.html 같은 화면설계서)
```

> 📍 **어휘 source-of-truth**: 마킹·톤·상태 등 **공유 어휘는 mockup/mockup-docs/ 가 source**.
> 본 폴더는 그것의 SDUI 변환 가이드.
> - 마킹 (필수/사용성) → `mockup/mockup-docs/POLICY_REPORT_TEMPLATE.md § 1.8` (source-of-truth)
> - 시각 톤 (6 카테고리) → `mockup/mockup-docs/POLICY_REPORT_TEMPLATE.md § 1.9`
> - 상태 (6 케이스) → `mockup/mockup-docs/SPEC_REPORT_TEMPLATE.md § 1.6` + `SPEC_INPUT_TEMPLATE.md § 상태 시나리오`

---

## 📚 문서 목록

### 1. [sb-writing-rules.md](./sb-writing-rules.md)
**화면설계서(SB) 작성 가이드** - 메인 작성 규칙

기획자가 Screen-SB, Section-SB, Organism-SB를 작성할 때 참고하는 핵심 문서입니다.

**포함 내용:**
- ID 네이밍 컨벤션 (Screen/Section/Organism/Molecule/Atom)
- SDUI 필수 필드 작성 방법
  - 노출 조건 (자연어 방식)
  - 노출 우선순위
  - 노출 개수 (최소/최대)
  - 이벤트/액션
  - 서버 제어 항목
  - 오류 처리 방식
- 템플릿별 작성 가이드
- 작성 체크리스트

**대상:** 기획자
**관련 스키마:** SDUI JSON Schema v1.17.0

---

### 2. [description-format.md](./description-format.md)
**Description 구조화 포맷**

컴포넌트 설명을 구조화된 태그 방식으로 작성하는 방법입니다.

**태그 종류:**
- `[영역명]` - 컴포넌트가 속한 영역
- `[규칙:]` - 표시 규칙
- `[조건:]` - 노출 조건
- `[이동:]` - 클릭 시 이동 경로
- `[노출:]` - 노출 방식

**대상:** 기획자, 디자이너

---

### 3. [sb-template-schema.md](./sb-template-schema.md)
**SB 템플릿 스키마 및 자동 생성 플로우**

Figma 템플릿 구조와 JSON 기반 자동 생성 워크플로우입니다.

**포함 내용:**
- 마스터 템플릿 구조 (SB- nodeId: `1230:885`)
- 컴포넌트 ID 매핑
- JSON → Figma 변환 플로우
- TalkToFigma MCP 사용법

**대상:** 개발자, 자동화 스크립트 작성자

---

### 4. [annotation-rules.md](./annotation-rules.md)
**어노테이션 리뷰 워크플로우**

디자인 시안에 대한 어노테이션 리뷰 프로세스입니다.

**포함 내용:**
- 리뷰 단계별 규칙
- Notion Policy DB 연동
- 피드백 작성 가이드

**대상:** 기획자, 디자이너, 리뷰어

---

## 🔗 관련 문서

### docs 내
- **[module-id-list.md](./module-id-list.md)** - 모듈 ID 전체 목록 (48개, 카테고리별 계층 구조)

### 프로젝트 루트
- **[CLAUDE.md](../CLAUDE.md)** - 프로젝트 개요 및 SDUI 스키마 요약

### SDUI 스키마
- **[SDUI스키마/SDUI JSON 스키마 정의.html](../SDUI스키마/SDUI%20JSON%20스키마%20정의.html)** - SDUI JSON 스키마 v1.17.0 공식 문서

---

## 📖 사용 순서 (기획자용)

### 1단계: ID 규칙 확인
1. `sb-writing-rules.md` 섹션 1~2에서 ID 규칙 및 TYPE_CODE 확인
2. `module-id-list.md`에서 모듈 ID 확인

### 2단계: 화면설계서 작성
1. `sb-writing-rules.md`의 템플릿별 가이드 참고
2. 노출 조건, 우선순위 등 SDUI 필드 작성
3. `description-format.md`로 Description 구조화

### 3단계: 리뷰 및 배포
1. `annotation-rules.md`에 따라 어노테이션 리뷰 진행
2. Figma 템플릿에 적용 (개발자 협업)

---

**버전:** 1.0
**최종 업데이트:** 2026-04-30
**담당:** ProductionAgent Team
