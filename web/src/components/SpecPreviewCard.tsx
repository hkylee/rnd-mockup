"use client";

import { useState } from "react";
import { SpecPreview } from "./SpecPreview";

const BG_OPTIONS = [
  { id: "light", label: "light", style: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" },
  { id: "white", label: "white", style: "#ffffff" },
  { id: "grid", label: "grid", style: "repeating-conic-gradient(#f1f5f9 0% 25%, #ffffff 0% 50%) 50% / 16px 16px" },
  { id: "dark", label: "dark", style: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" },
  { id: "black", label: "black", style: "#0f172a" },
];

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ds: any;
  icons?: Record<string, string>;
  title?: string;
  footerNote?: string;
};

export function SpecPreviewCard({ spec, ds, icons = {}, title = "미리보기", footerNote = "근사 렌더 · Figma auto-layout 과 미묘한 차이 가능" }: Props) {
  const [bgId, setBgId] = useState<string>("light");
  const bgStyle = BG_OPTIONS.find((b) => b.id === bgId)?.style;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-400">배경</span>
          <div className="flex items-center gap-1">
            {BG_OPTIONS.map((b) => {
              const active = bgId === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setBgId(b.id)}
                  title={b.label}
                  className={
                    "w-6 h-6 rounded-full border transition " +
                    (active
                      ? "ring-2 ring-indigo-500 ring-offset-1 border-transparent"
                      : "border-slate-200 hover:border-slate-300")
                  }
                  style={{ background: b.style }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="p-8 min-h-48 flex items-center justify-center overflow-auto"
        style={{ background: bgStyle }}
      >
        {spec ? (
          <SpecPreview spec={spec} ds={ds} icons={icons} />
        ) : (
          <div className={"text-xs " + (bgId === "dark" || bgId === "black" ? "text-slate-400" : "text-slate-500")}>
            spec 없음 — 미러링 불가
          </div>
        )}
      </div>
      <div className="px-5 py-2 border-t border-slate-100 text-[10px] text-slate-400 italic text-right">
        {footerNote}
      </div>
    </div>
  );
}
