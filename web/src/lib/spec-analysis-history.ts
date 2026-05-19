"use client";

import type {
  FeatureRow,
  InferredEssential,
  SpecAnalysisResult,
} from "./spec-analysis-types";

export type AnalysisEntry = {
  kind: "analysis";
  id: string;
  createdAt: number;
  screenId: string;
  moduleCode?: string;
  features: FeatureRow[];
  inferredEssentials?: InferredEssential[];
  screenRole?: string;
  notes?: string;
};

export type GenerationEntry = {
  kind: "generation";
  id: string;
  createdAt: number;
  screenId: string;
  moduleCode?: string;
  newSpecNames: string[];
  pageSpecNames: string[];
  includedEssentials: string[];
  bundleText: string;
};

export type HistoryEntry = AnalysisEntry | GenerationEntry;

const HISTORY_KEY = "genui.spec-analysis.history";

function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return (crypto as Crypto).randomUUID();
  }
  return "h-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// 과거 entry (kind 필드 없음) 마이그레이션
function migrate(raw: unknown): HistoryEntry[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((e) => {
    const entry = e as Record<string, unknown>;
    const kind = entry.kind;
    if (kind === "analysis" || kind === "generation") {
      return entry as unknown as HistoryEntry;
    }
    // legacy = analysis
    return {
      kind: "analysis" as const,
      id: String(entry.id ?? ""),
      createdAt: Number(entry.createdAt ?? Date.now()),
      screenId: String(entry.screenId ?? ""),
      moduleCode: typeof entry.moduleCode === "string" ? entry.moduleCode : undefined,
      features: Array.isArray(entry.features) ? (entry.features as FeatureRow[]) : [],
      notes: typeof entry.notes === "string" ? entry.notes : undefined,
    };
  });
}

export function loadHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? migrate(JSON.parse(raw)) : [];
  } catch {
    return [];
  }
}

export function saveHistory(items: HistoryEntry[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
}

// 분석 결과를 screen id 별로 분리하여 history 에 추가
export function archiveAnalysis(result: SpecAnalysisResult): AnalysisEntry[] {
  const features = result.features || [];
  const groups = new Map<string, FeatureRow[]>();
  for (const f of features) {
    const key = (f.screenId || f.specId || "unknown").trim();
    if (!key) continue;
    const arr = groups.get(key) || [];
    arr.push(f);
    groups.set(key, arr);
  }
  const newEntries: AnalysisEntry[] = [];
  for (const [screenId, fs] of groups) {
    const moduleCode = fs.find((f) => f.module)?.module;
    // screenRoles 가 있으면 해당 screen 의 role 을 우선, 없으면 legacy screenRole 사용
    const role = result.screenRoles?.[screenId] || result.screenRole;
    newEntries.push({
      kind: "analysis",
      id: uid(),
      createdAt: Date.now(),
      screenId,
      moduleCode,
      features: fs,
      inferredEssentials: result.inferredEssentials,
      screenRole: role,
      notes: result.notes,
    });
  }
  const next = [...loadHistory(), ...newEntries];
  saveHistory(next);
  return newEntries;
}

// 코드 생성 결과를 screen id 별로 분리하여 history 에 추가
export function archiveGeneration(input: {
  features: FeatureRow[];
  newSpecNames: string[];
  pageSpecNames: string[];
  includedEssentials: string[];
  bundleText: string;
}): GenerationEntry[] {
  const screenIds = new Set<string>();
  for (const f of input.features) {
    const key = (f.screenId || f.specId || "unknown").trim();
    if (key) screenIds.add(key);
  }
  if (screenIds.size === 0) screenIds.add("unknown");

  const moduleByScreen = new Map<string, string | undefined>();
  for (const f of input.features) {
    const key = (f.screenId || f.specId || "unknown").trim();
    if (!moduleByScreen.has(key) && f.module) {
      moduleByScreen.set(key, f.module);
    }
  }

  const newEntries: GenerationEntry[] = [];
  const now = Date.now();
  for (const screenId of screenIds) {
    newEntries.push({
      kind: "generation",
      id: uid(),
      createdAt: now,
      screenId,
      moduleCode: moduleByScreen.get(screenId),
      newSpecNames: input.newSpecNames,
      pageSpecNames: input.pageSpecNames,
      includedEssentials: input.includedEssentials,
      bundleText: input.bundleText,
    });
  }
  const next = [...loadHistory(), ...newEntries];
  saveHistory(next);
  return newEntries;
}

export function removeFromHistory(id: string): HistoryEntry[] {
  const next = loadHistory().filter((e) => e.id !== id);
  saveHistory(next);
  return next;
}

export function clearHistory(): void {
  saveHistory([]);
}
