"use client";

import type { BBox } from "./detection-types";

export type CandidateCategory = "atom" | "mol" | "ogn" | "page";

export type CandidateStatus = "pending" | "promoted" | "merged" | "skipped";

export type DiagnosticLevel = "info" | "warning" | "error";

export type DiagnosticType =
  | "name-conflict"
  | "name-similar"
  | "naming-rule"
  | "completeness"
  | "orphan-ref"
  | "raw-value";

export type DiagnosticResult = {
  level: DiagnosticLevel;
  type: DiagnosticType;
  message: string;
  suggestion?: string;
  details?: Record<string, unknown>;
};

export type Candidate = {
  id: string;
  createdAt: number;
  sessionId?: string;
  name: string;
  category: CandidateCategory;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec?: any;
  description?: string;
  reason?: string;
  baseOn?: string;
  sourceImageUrl?: string;
  sourceBbox?: BBox;
  status: CandidateStatus;
  diagnostics?: DiagnosticResult[];
};

export type DsProposal = {
  id: string;
  type: "color" | "dimension" | "fontSize" | "spacing" | "other";
  rawValue: string;
  usage: number;
  suggestTokenName: string;
  suggestCategory: string;
  usedByCandidates: string[]; // candidate.id[]
  status: "pending" | "accepted" | "rejected";
};

const CANDIDATE_KEY = "genui.review.candidates";
const DS_PROPOSAL_KEY = "genui.review.ds-proposals";

export function loadCandidates(): Candidate[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CANDIDATE_KEY);
    return raw ? (JSON.parse(raw) as Candidate[]) : [];
  } catch {
    return [];
  }
}

export function saveCandidates(items: Candidate[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CANDIDATE_KEY, JSON.stringify(items));
}

export function addCandidates(newItems: Omit<Candidate, "id" | "createdAt" | "status">[]): Candidate[] {
  const existing = loadCandidates();
  const added: Candidate[] = newItems.map((x) => ({
    ...x,
    id: cryptoRandomId(),
    createdAt: Date.now(),
    status: "pending",
  }));
  const next = [...existing, ...added];
  saveCandidates(next);
  return next;
}

export function updateCandidate(id: string, patch: Partial<Candidate>): Candidate[] {
  const next = loadCandidates().map((c) => (c.id === id ? { ...c, ...patch } : c));
  saveCandidates(next);
  return next;
}

export function removeCandidate(id: string): Candidate[] {
  const next = loadCandidates().filter((c) => c.id !== id);
  saveCandidates(next);
  return next;
}

// 스킵 = 삭제가 아니라 status 변경 (내역에서 복원 가능하게)
export function skipCandidate(id: string): Candidate[] {
  return updateCandidate(id, { status: "skipped" });
}

// 스킵/승격된 후보를 다시 pending 으로 복원
export function restoreCandidate(id: string): Candidate[] {
  return updateCandidate(id, { status: "pending" });
}

export function clearCandidates(): void {
  saveCandidates([]);
}

export function loadDsProposals(): DsProposal[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(DS_PROPOSAL_KEY);
    return raw ? (JSON.parse(raw) as DsProposal[]) : [];
  } catch {
    return [];
  }
}

export function saveDsProposals(items: DsProposal[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(DS_PROPOSAL_KEY, JSON.stringify(items));
}

function cryptoRandomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return (crypto as Crypto).randomUUID();
  }
  return "c-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}
