"use client";

import { useEffect, useRef, useState } from "react";
import type { DetectionNode } from "@/lib/detection-types";

type Props = {
  imageUrl: string;
  nodes: DetectionNode[];          // flat list with bbox + path
  selectedPath: string | null;     // path key (예: "0.1.2")
  hoveredPath: string | null;
  onSelect: (path: string | null) => void;
  onHover: (path: string | null) => void;
};

const CATEGORY_COLOR: Record<string, string> = {
  atom: "emerald-500",
  mol: "blue-500",
  ogn: "violet-500",
  page: "slate-700",
};

function categoryOf(component: string): string {
  const first = component.split("/")[0];
  if (["atom", "mol", "ogn", "page"].includes(first)) return first;
  return "ogn";
}

function strokeColor(cat: string): string {
  if (cat === "atom") return "#10b981";
  if (cat === "mol") return "#3b82f6";
  if (cat === "ogn") return "#8b5cf6";
  return "#475569";
}

export function DetectionImage({
  imageUrl,
  nodes,
  selectedPath,
  hoveredPath,
  onSelect,
  onHover,
}: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [rendered, setRendered] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    function update() {
      const el = imgRef.current;
      if (!el) return;
      setRendered({ w: el.clientWidth, h: el.clientHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [imageUrl]);

  function onImgLoad() {
    const el = imgRef.current;
    if (!el) return;
    setNatural({ w: el.naturalWidth, h: el.naturalHeight });
    setRendered({ w: el.clientWidth, h: el.clientHeight });
  }

  const scale = natural && rendered ? rendered.w / natural.w : 1;

  return (
    <div className="relative inline-block" onMouseLeave={() => onHover(null)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={imageUrl}
        alt="capture"
        onLoad={onImgLoad}
        className="block max-w-full select-none"
        draggable={false}
      />
      {natural && nodes.map((n) => {
        const bbox = n.bbox;
        if (!bbox) return null;
        const cat = categoryOf(n.component);
        const selected = selectedPath === n.path;
        const hovered = hoveredPath === n.path;
        const active = selected || hovered;
        const color = strokeColor(cat);
        return (
          <button
            key={n.path}
            type="button"
            onMouseEnter={() => onHover(n.path)}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(selected ? null : n.path);
            }}
            className="absolute cursor-pointer transition-opacity"
            style={{
              left: bbox.x * scale,
              top: bbox.y * scale,
              width: bbox.w * scale,
              height: bbox.h * scale,
              border: `${active ? 3 : 2}px solid ${color}`,
              background: active
                ? `${color}1a`
                : hoveredPath
                  ? "transparent"
                  : "transparent",
              boxShadow: selected ? `0 0 0 2px ${color}33` : "none",
              opacity: hoveredPath && !active ? 0.4 : 1,
              zIndex: active ? 10 : 1,
            }}
            title={n.component}
          >
            {active && (
              <div
                className="absolute -top-5 left-0 px-1.5 py-0.5 rounded text-[10px] font-mono text-white whitespace-nowrap"
                style={{ background: color }}
              >
                {n.component}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

export const _meta = { CATEGORY_COLOR };
