import { NextRequest, NextResponse } from "next/server";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { sharedRoot, mockupRoot } from "@/lib/paths";
import { matchTypography, matchColor, matchDimension } from "@/lib/token-match";

export const runtime = "nodejs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Spec = any;

type RawValue = { jsonPath: string; value: string; tokenCandidates: string[] };
type Fix = { jsonPath: string; before: unknown; after: unknown; reason: string };

type WashResult = {
  spec: Spec;
  exists: boolean;
  catalogPath: string | null;
  catalogSpec: Spec | null;
  expectedCategory: string;
  rawValues: RawValue[];
  fixes: Fix[];
  auditNotes: string[];
};

const CHROME_NAMES = new Set([
  "ogn/status-bar",
  "ogn/GNB",
  "ogn/header",
  "ogn/footer-cs",
  "ogn/tab-bar",
  "ogn/sticky-footer",
  "ogn/sticky-footer-cta",
  "ogn/snack-bar",
  "ogn/step-indicator",
]);

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "JSON 파싱 실패" }, 400);
  }
  const specs: Spec[] = Array.isArray(body.specs) ? body.specs : body.spec ? [body.spec] : [];
  if (specs.length === 0) return json({ error: "spec 또는 specs 가 필요합니다" }, 400);
  const results: WashResult[] = specs.map((s) => washSpec(s));
  return json({ results, redirect: "/figma-wash", url: "http://localhost:3000/figma-wash" });
}

function washSpec(spec: Spec): WashResult {
  const { exists, catalogPath, catalogSpec } = findCatalogMatch(spec);
  const expectedCategory = inferCategory(spec);
  const rawValues = collectRawValues(spec);
  const fixes = proposeFixes(spec);
  const auditNotes = quickAudit(spec, expectedCategory);
  return { spec, exists, catalogPath, catalogSpec, expectedCategory, rawValues, fixes, auditNotes };
}

// ===== 카탈로그 매칭 =====

function findCatalogMatch(spec: Spec) {
  if (!spec.name) return { exists: false, catalogPath: null, catalogSpec: null };
  const fileName = spec.name + ".json";
  const sharedPath = resolve(sharedRoot(), "component-specs", fileName);
  const mockupPath = resolve(mockupRoot(), "component-specs", fileName);
  for (const p of [sharedPath, mockupPath]) {
    if (existsSync(p)) {
      try {
        return { exists: true, catalogPath: p, catalogSpec: JSON.parse(readFileSync(p, "utf8")) };
      } catch {}
    }
  }
  return { exists: false, catalogPath: null, catalogSpec: null };
}

// ===== 위계 판정 =====

function inferCategory(spec: Spec): string {
  const seg = String(spec.name || "").split("/")[0];
  if (["atom", "mol", "ogn", "page"].includes(seg)) return seg;
  return spec.category || "(unknown)";
}

// ===== raw 값 → 토큰 매칭 후보 =====

function collectRawValues(spec: Spec): RawValue[] {
  const out: RawValue[] = [];
  walkCollect(spec, "", out);
  return out;
}

function walkCollect(node: unknown, path: string, out: RawValue[]) {
  if (typeof node === "string") {
    let candidates: string[] = [];
    if (node.startsWith("(raw fontSize")) {
      candidates = matchTypography(node);
    } else if (/^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(node)) {
      candidates = matchColor(node);
    } else if (/^\d+(\.\d+)?(px)?$/.test(node)) {
      candidates = matchDimension(node);
    } else if (node === "(raw)" || node.startsWith("drop-shadow(")) {
      candidates = [];
    } else {
      return; // 토큰 형태 또는 정상 string — skip
    }
    out.push({ jsonPath: path, value: node, tokenCandidates: candidates });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => walkCollect(item, `${path}[${i}]`, out));
    return;
  }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      walkCollect(v, path ? `${path}.${k}` : k, out);
    }
  }
}

// ===== auto-fix 제안 =====

function proposeFixes(spec: Spec): Fix[] {
  const fixes: Fix[] = [];

  // FIX 1 — chrome 격 + width 가 토큰이면 → FILL + widthFallback
  if (CHROME_NAMES.has(spec.name) || /chrome|status|header|footer|tab|gnb/i.test(spec.name || "")) {
    const w = spec?.base?.layout?.width;
    if (typeof w === "string" && w.startsWith("{") && w.endsWith("}")) {
      fixes.push({
        jsonPath: "base.layout.width",
        before: w,
        after: "FILL",
        reason: "chrome 격 ogn — width 는 FILL + spec.widthFallback 으로 변환 (CONVENTIONS § 6.3 v4)",
      });
      if (spec.widthFallback === undefined) {
        fixes.push({
          jsonPath: "widthFallback",
          before: undefined,
          after: w,
          reason: "원래 width 값을 widthFallback 으로 보존 (top-level Component baseline)",
        });
      }
    }
  }

  // FIX 2 — description placeholder
  if (spec.description?.includes("(Figma 손작업 추출 — 검토·보강 필요)")) {
    fixes.push({
      jsonPath: "description",
      before: spec.description,
      after: "(검토 후 컴포넌트 설명 작성)",
      reason: "추출 placeholder — 사용자가 의도 직접 작성 필요",
    });
  }

  return fixes;
}

// ===== quick audit =====

function quickAudit(spec: Spec, expectedCategory: string): string[] {
  const notes: string[] = [];
  if (!spec.name) notes.push("⚠️ spec.name 누락");
  if (!spec.category) notes.push("⚠️ spec.category 누락");
  if (spec.category && spec.category !== expectedCategory && expectedCategory !== "(unknown)") {
    notes.push(`⚠️ category 불일치 — spec="${spec.category}" / 예상="${expectedCategory}"`);
  }
  if (!spec.base) notes.push("⚠️ spec.base 누락");
  return notes;
}

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: CORS_HEADERS });
}
