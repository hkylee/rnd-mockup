"use client";

import { useState } from "react";

type Props = {
  data: unknown;
  label?: string;
  defaultOpen?: boolean;
};

export function CopyableDetails({ data, label = "Raw", defaultOpen = false }: Props) {
  const [copied, setCopied] = useState(false);
  const text = typeof data === "string" ? data : JSON.stringify(data, null, 2);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("복사 실패");
    }
  }

  return (
    <details className="rounded-2xl border border-slate-200 bg-white" open={defaultOpen}>
      <summary className="list-none px-5 py-3 text-sm font-medium text-slate-700 cursor-pointer hover:bg-slate-50 rounded-2xl flex items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <span className="text-slate-400 text-xs">▸</span>
          <span>{label}</span>
        </span>
        <button
          onClick={handleCopy}
          className={
            "py-1 px-2.5 rounded-full border text-[11px] font-medium transition " +
            (copied
              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
              : "border-slate-300 text-slate-700 hover:bg-slate-100")
          }
        >
          {copied ? "✓ 복사됨" : "📋 복사"}
        </button>
      </summary>
      <pre className="px-5 pb-4 text-[11px] max-h-96 overflow-auto text-slate-700 font-mono">
        {text}
      </pre>
    </details>
  );
}
