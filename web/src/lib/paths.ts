// 경로 헬퍼.
// shared/ — mockup 의 read-only 복제본 (DS / specs / icons / scripter). `npm run sync:shared` 로 갱신.
// mockup/mockup-docs — 가이드는 sync 하지 않고 mockup 원본을 직접 참조 (single source of truth).
// mockup/sb-doc / governance — 분석 워크플로 양식 직접 참조.
// production-flow/ 는 2026-05-01 archive 됨 (mockup/_archive/production-flow-v1/) — 이전 v1 흐름.

import { resolve } from "node:path";

export function sharedRoot(): string {
  return resolve(process.cwd(), "shared");
}

// mockup 원본 폴더 (../mockup). docs 가이드 직접 참조용.
// 의도된 mockup 직접 접근 — /api/scripter 와 동일 패턴.
export function mockupRoot(): string {
  return resolve(process.cwd(), "..", "mockup");
}

// production-flow/ — 2026-05-01 archive (mockup/_archive/production-flow-v1/). 옛 v1 흐름의 양식·sample.
// 현재 흐름은 governance/ + mockup/mockup-docs/ + mockup/sb-doc/ 분리 운영. 본 path 는 호환용 — 새 코드는 사용 X.
export function productionFlowRoot(): string {
  return resolve(process.cwd(), "..", "mockup", "_archive", "production-flow-v1");
}

// governance/ — UX Governance 인덱스·7원칙 가이드. 분석 워크플로의 첫 단추 (화면 의도 결정).
export function governanceRoot(): string {
  return resolve(process.cwd(), "..", "governance");
}

// docs/ — 스킬 공통 참조 문서 (make-cmp / make-tsx 산출물, 디자인 토큰, 목업 HTML 출력).
export function docsRoot(): string {
  return resolve(process.cwd(), "..", "docs");
}

// mockup/sb-doc/ — Storyboard (SB) 작성 양식·규칙 (분석 워크플로 일부).
// 2026-05-01: production/ → sb/ rename.
// 2026-05-02: sb/ → sb-doc/ rename (혼동 방지) → mockup/sb-doc/ 으로 이동 (mockup 통합).
export function sbRoot(): string {
  return resolve(process.cwd(), "..", "mockup", "sb-doc");
}
