"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  loadCandidates,
  removeCandidate,
  restoreCandidate,
  type Candidate,
  type CandidateStatus,
} from "@/lib/review-store";

const CATEGORY_COLOR: Record<string, string> = {
  atom: "text-emerald-700 bg-emerald-50 border-emerald-200",
  mol: "text-blue-700 bg-blue-50 border-blue-200",
  ogn: "text-violet-700 bg-violet-50 border-violet-200",
  page: "text-slate-700 bg-slate-50 border-slate-200",
};

const STATUS_META: Record<CandidateStatus, { label: string; dot: string; description: string }> = {
  pending: { label: "대기", dot: "bg-slate-400", description: "아직 검수 중" },
  promoted: { label: "승격", dot: "bg-emerald-500", description: "라이브러리로 확정 (Phase 1c 에서 실제 저장)" },
  merged: { label: "병합", dot: "bg-blue-500", description: "라이브러리의 기존 컴포넌트와 병합됨" },
  skipped: { label: "스킵", dot: "bg-rose-400", description: "제외된 후보" },
};

function formatTime(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

export default function ReviewHistoryPage() {
  const router = useRouter();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filter, setFilter] = useState<"all" | CandidateStatus>("all");

  useEffect(() => {
    setCandidates(loadCandidates());
  }, []);

  function handleReReview(id: string) {
    restoreCandidate(id);
    router.push(`/review?id=${encodeURIComponent(id)}`);
  }
  function handleDelete(id: string) {
    if (!confirm("이 항목을 영구 삭제합니다. 계속할까요?")) return;
    setCandidates(removeCandidate(id));
  }

  const counts: Record<string, number> = {
    all: candidates.length,
    pending: candidates.filter((c) => c.status === "pending").length,
    promoted: candidates.filter((c) => c.status === "promoted").length,
    merged: candidates.filter((c) => c.status === "merged").length,
    skipped: candidates.filter((c) => c.status === "skipped").length,
  };

  const visible = filter === "all" ? candidates : candidates.filter((c) => c.status === filter);

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">검수 내역</h1>
          <p className="text-sm text-slate-600 mt-1">
            승격·병합·스킵된 후보 이력. 스킵한 항목은 복원해서 다시 검수할 수 있어요.
          </p>
        </header>

        {/* 필터 */}
        <div className="flex gap-1.5 mb-4 flex-wrap">
          {([
            { key: "all" as const, label: "전체" },
            { key: "pending" as const, label: "대기" },
            { key: "promoted" as const, label: "승격" },
            { key: "merged" as const, label: "병합" },
            { key: "skipped" as const, label: "스킵" },
          ]).map((f) => {
            const active = filter === f.key;
            const n = counts[f.key] || 0;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={
                  "py-1.5 px-3 rounded-full text-xs font-medium border transition " +
                  (active
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50")
                }
              >
                {f.label} <span className={active ? "opacity-70" : "text-slate-400"}>({n})</span>
              </button>
            );
          })}
        </div>

        {/* 리스트 */}
        {visible.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <div className="text-3xl mb-2">📭</div>
            <div className="text-sm text-slate-500">
              {filter === "all" ? "검수 내역이 아직 없어요." : "이 상태의 항목이 없어요."}
            </div>
          </div>
        ) : (
          <ul className="space-y-2">
            {visible
              .slice()
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((c) => {
                const meta = STATUS_META[c.status];
                return (
                  <li
                    key={c.id}
                    className="rounded-xl border border-slate-200 bg-white p-3 flex items-center gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full ${meta.dot} shrink-0`} title={meta.description} />
                    <span
                      className={
                        "inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold border shrink-0 " +
                        (CATEGORY_COLOR[c.category] || CATEGORY_COLOR.mol)
                      }
                    >
                      {c.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-mono truncate">{c.name}</div>
                      <div className="flex gap-3 text-[10px] text-slate-500 mt-0.5">
                        <span>
                          <strong className="text-slate-700">{meta.label}</strong> · {meta.description}
                        </span>
                        <span>{formatTime(c.createdAt)}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      {c.status !== "pending" && (
                        <button
                          onClick={() => handleReReview(c.id)}
                          className="py-1 px-3 rounded-full border border-indigo-300 text-indigo-700 text-xs font-medium hover:bg-indigo-50"
                          title="검수 페이지에서 다시 열기"
                        >
                          ↻ 재검수
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="py-1 px-3 rounded-full border border-rose-300 text-rose-600 text-xs font-medium hover:bg-rose-50"
                        title="영구 삭제"
                      >
                        🗑 삭제
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
}
