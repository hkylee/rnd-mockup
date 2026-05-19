"use client";

import type { DetectionNode } from "@/lib/detection-types";

type Props = {
  nodes: DetectionNode[];
  selectedPath: string | null;
  hoveredPath: string | null;
  onSelect: (path: string | null) => void;
  onHover: (path: string | null) => void;
};

const MATCH_BADGE: Record<string, { label: string; cls: string }> = {
  reused: { label: "재사용", cls: "bg-emerald-100 text-emerald-700" },
  new: { label: "신규", cls: "bg-amber-100 text-amber-700" },
  conflict: { label: "충돌", cls: "bg-rose-100 text-rose-700" },
};

function catOf(component: string): string {
  const first = component.split("/")[0];
  if (["atom", "mol", "ogn", "page"].includes(first)) return first;
  return "ogn";
}

function dotColor(cat: string): string {
  if (cat === "atom") return "bg-emerald-500";
  if (cat === "mol") return "bg-blue-500";
  if (cat === "ogn") return "bg-violet-500";
  return "bg-slate-500";
}

export function DetectionTree({ nodes, selectedPath, hoveredPath, onSelect, onHover }: Props) {
  return (
    <ul className="space-y-0.5">
      {nodes.map((n) => {
        const cat = catOf(n.component);
        const selected = selectedPath === n.path;
        const hovered = hoveredPath === n.path;
        const badge = n.match ? MATCH_BADGE[n.match.status] : null;
        return (
          <li key={n.path}>
            <button
              onMouseEnter={() => onHover(n.path)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onSelect(selected ? null : n.path)}
              className={
                "w-full text-left py-1.5 px-2 rounded-lg flex items-center gap-2 text-xs transition " +
                (selected
                  ? "bg-indigo-50 ring-1 ring-indigo-200"
                  : hovered
                    ? "bg-slate-50"
                    : "hover:bg-slate-50")
              }
              style={{ paddingLeft: 8 + n.depth * 16 }}
            >
              <span className={`w-2 h-2 rounded-full ${dotColor(cat)} shrink-0`} />
              <span className="font-mono flex-1 truncate">{n.component}</span>
              {badge && (
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${badge.cls}`}>
                  {badge.label}
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
