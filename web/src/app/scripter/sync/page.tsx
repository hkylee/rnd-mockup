"use client";

import { useState } from "react";
import { ScripterRunCard } from "@/components/ScripterRunCard";

const INIT_BTN_LABEL: Record<string, string> = {
  loading: "읽는 중…",
  ok: "✓ 복사됨",
  err: "✕ 실패",
  idle: "Scripter 복사",
};
const INIT_BTN_CLASS: Record<string, string> = {
  ok: "border-emerald-400 text-emerald-700 bg-emerald-50",
  err: "border-rose-400 text-rose-700 bg-rose-50",
};

function FigmaInitCard() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function copyScript() {
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/scripter/setup-script?name=figma-create-sections");
      const data = await res.json();
      if (!data.content) throw new Error(data.error || "내용 없음");
      await navigator.clipboard.writeText(data.content);
      setState("ok");
      setMsg("클립보드 복사 완료 · Figma Scripter ⌘V → Run ▶");
    } catch (e) {
      setState("err");
      setMsg(e instanceof Error ? e.message : String(e));
    }
    setTimeout(() => { setState("idle"); setMsg(""); }, 4000);
  }

  const btnClass = INIT_BTN_CLASS[state] ?? "border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 mb-6 space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Step 0 · 최초 1회</div>
          <div className="text-sm font-semibold text-slate-800">Figma 페이지 초기화</div>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            새 Figma 파일에 <span className="font-mono bg-slate-100 px-1 rounded">Atom</span> · <span className="font-mono bg-slate-100 px-1 rounded">Molecule</span> · <span className="font-mono bg-slate-100 px-1 rounded">Organism</span> · <span className="font-mono bg-slate-100 px-1 rounded">Page</span> 페이지가 없으면 컴포넌트 Run 시 <em>&quot;X 페이지 없음&quot;</em> 에러가 나요.<br />
            DS Run 전에 이 스크립트를 Scripter 에 붙여넣어 먼저 실행하세요.
          </p>
        </div>
        <button
          onClick={copyScript}
          disabled={state === "loading"}
          className={"shrink-0 px-3 py-1.5 rounded-lg text-[12px] font-medium border transition " + btnClass}
        >
          {INIT_BTN_LABEL[state]}
        </button>
      </div>
      {msg && (
        <div className={
          "text-[11px] px-3 py-2 rounded-lg " +
          (state === "ok" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700")
        }>
          {msg}
        </div>
      )}
      <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-3">
        파일: <span className="font-mono">mockup/figma-create-sections.js</span>
      </div>
    </div>
  );
}

export default function ScripterSyncPage() {
  return (
    <ScripterRunCard
      cmd="sync"
      title="DS Run"
      description="Design System (skt-design-system.json) 을 Figma Variables 3개 컬렉션으로 동기화합니다. idempotent — 재실행해도 안전 (값만 갱신, ID 유지)."
      command="node scripter/bundle.js --sync"
      warning="새 Figma 파일이라면 가장 먼저 1회 실행해야 Component Run / Page Run 의 Variable 바인딩이 정상 작동합니다."
      topSlot={<FigmaInitCard />}
    />
  );
}
