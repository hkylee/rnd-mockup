// 후보 컴포넌트에 대한 Tier 1 진단 엔진.
// 클라이언트에서 실행 (소스 카탈로그는 API 로 fetch 해서 전달받음).

import type { Candidate, DiagnosticResult } from "./review-store";

type SourceEntry = {
  name: string;
  category: string;
};

const NAMING_REGEX = /^[a-z0-9]+(?:[-/][a-z0-9]+)*$/;

export function diagnose(candidate: Candidate, sources: SourceEntry[], others: Candidate[]): DiagnosticResult[] {
  const out: DiagnosticResult[] = [];

  // 1. name-conflict — 기존 소스 또는 다른 candidate 에 정확히 같은 이름
  const sameName = sources.find((s) => s.name === candidate.name);
  if (sameName) {
    out.push({
      level: "warning",
      type: "name-conflict",
      message: `이미 라이브러리에 있는 이름: ${candidate.name}`,
      suggestion:
        sameName.category === candidate.category
          ? "구조가 유사하면 '병합' 을 고려. 다르면 이름 변경 필요 (예: " + candidate.name + "-v2)."
          : "카테고리가 다르지만 이름이 같음. 충돌 가능성 높음.",
    });
  }
  const sameInCandidates = others.find((c) => c.id !== candidate.id && c.name === candidate.name);
  if (sameInCandidates) {
    out.push({
      level: "warning",
      type: "name-conflict",
      message: `다른 후보에 동명: ${candidate.name}`,
      suggestion: "하나로 병합하거나 이름 분리 필요.",
    });
  }

  // 2. naming-rule — kebab-case + slash 만 허용
  const segments = candidate.name.split("/");
  const invalidSeg = segments.find((s) => !NAMING_REGEX.test(s));
  if (invalidSeg) {
    out.push({
      level: "error",
      type: "naming-rule",
      message: `네이밍 규칙 위반: "${invalidSeg}"`,
      suggestion: "kebab-case (소문자 + 숫자 + 하이픈) 만 사용. 예: my-card-header",
    });
  }
  // 첫 segment 가 category prefix 와 일치해야
  if (segments[0] !== candidate.category && segments[0] !== "atom" && segments[0] !== "mol" && segments[0] !== "ogn" && segments[0] !== "page") {
    out.push({
      level: "error",
      type: "naming-rule",
      message: `이름이 카테고리 prefix 로 시작해야 함: ${candidate.category}/...`,
    });
  } else if (segments[0] !== candidate.category) {
    out.push({
      level: "error",
      type: "naming-rule",
      message: `이름의 prefix (${segments[0]}) 와 category (${candidate.category}) 불일치`,
    });
  }

  // 3. completeness — 필수 필드
  if (!candidate.spec) {
    out.push({
      level: "warning",
      type: "completeness",
      message: "spec 이 아직 생성되지 않음",
      suggestion: "AI 자동 생성 또는 수동 작성 필요 (Phase 1b 에선 spec 없이도 등록 가능).",
    });
  } else {
    const spec = candidate.spec as Record<string, unknown>;
    if (!spec.name) out.push({ level: "error", type: "completeness", message: "spec.name 누락" });
    if (!spec.category) out.push({ level: "error", type: "completeness", message: "spec.category 누락" });
    const base = spec.base as Record<string, unknown> | undefined;
    if (!base) out.push({ level: "error", type: "completeness", message: "spec.base 누락" });
    else if (!(base.layout as Record<string, unknown> | undefined)?.mode) {
      out.push({ level: "warning", type: "completeness", message: "base.layout.mode 누락" });
    }
  }

  // 4. orphan-ref — spec 안의 ref 가 카탈로그에도 후보에도 없음
  if (candidate.spec) {
    const refs = collectRefs(candidate.spec);
    const sourceNames = new Set(sources.map((s) => s.name));
    const candidateNames = new Set(others.map((c) => c.name).concat(candidate.name));
    for (const r of refs) {
      if (!sourceNames.has(r) && !candidateNames.has(r)) {
        out.push({
          level: "warning",
          type: "orphan-ref",
          message: `참조 대상이 어디에도 없음: ${r}`,
          suggestion: "해당 컴포넌트를 먼저 승격하거나 ref 제거 필요.",
        });
      }
    }
  }

  // 5. raw-value — spec 안 raw color/dimension 감지
  if (candidate.spec) {
    const raws = collectRawValues(candidate.spec);
    for (const r of raws) {
      out.push({
        level: "info",
        type: "raw-value",
        message: `raw 값 감지: ${r.value} (${r.kind})`,
        suggestion: "DS 토큰으로 교체하면 일관성 유지.",
        details: r,
      });
    }
  }

  return out;
}

function collectRefs(spec: unknown): string[] {
  const acc: string[] = [];
  function walk(x: unknown) {
    if (!x || typeof x !== "object") return;
    const o = x as Record<string, unknown>;
    if (o.kind === "ref" && typeof o.component === "string") acc.push(o.component);
    for (const k in o) {
      const v = o[k];
      if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === "object") walk(v);
    }
  }
  walk(spec);
  return acc;
}

type RawValue = { value: string; kind: "color" | "dimension" | "other"; property: string };

const HEX_RE = /^#[0-9A-Fa-f]{3,8}$/;
const RGBA_RE = /^rgba?\([^)]+\)$/;
const DIM_RE = /^-?\d+(\.\d+)?(px|rem|em|%)$/;
const TOKEN_RE = /^\{[^}]+\}$/;

function collectRawValues(spec: unknown): RawValue[] {
  const acc: RawValue[] = [];
  function walk(x: unknown, propPath: string[] = []) {
    if (!x) return;
    if (typeof x === "string") {
      if (TOKEN_RE.test(x)) return; // already token ref
      const prop = propPath[propPath.length - 1] || "";
      if (HEX_RE.test(x) || RGBA_RE.test(x)) {
        acc.push({ value: x, kind: "color", property: propPath.join(".") });
      } else if (DIM_RE.test(x)) {
        acc.push({ value: x, kind: "dimension", property: propPath.join(".") });
      }
      return;
    }
    if (Array.isArray(x)) {
      x.forEach((v, i) => walk(v, [...propPath, String(i)]));
      return;
    }
    if (typeof x === "object") {
      const o = x as Record<string, unknown>;
      for (const k in o) walk(o[k], [...propPath, k]);
    }
  }
  walk(spec);
  return acc;
}
