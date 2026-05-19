"use client";

import { resolveRef, resolveToken } from "@/lib/resolve-token";
import type { CSSProperties, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

type Props = {
  spec: Any;
  ds: Any;
  icons: Record<string, string>;
};

function pxify(v: unknown): string | undefined {
  if (v == null) return undefined;
  if (typeof v === "number") return `${v}px`;
  if (typeof v === "string") return v;
  return undefined;
}

function resolveTypography(tokens: Any, ref: unknown): CSSProperties {
  if (typeof ref !== "string") return {};
  const m = ref.match(/^\{(.+)\}$/);
  if (!m) return {};
  const parts = m[1].split(".");
  let cur: Any = tokens;
  for (const p of parts) cur = cur?.[p];
  if (!cur || cur.type !== "typography") return {};
  const fontSize = resolveRef(tokens, cur.fontSize);
  const lineHeight = resolveRef(tokens, cur.lineHeight);
  const fontWeight = resolveRef(tokens, cur.fontWeight);
  const letterSpacing = resolveRef(tokens, cur.letterSpacing);
  const style: CSSProperties = {};
  if (fontSize != null) style.fontSize = pxify(fontSize);
  if (lineHeight != null) {
    const s = String(lineHeight);
    style.lineHeight = s.endsWith("%") ? parseInt(s) / 100 : pxify(lineHeight);
  }
  if (fontWeight != null) style.fontWeight = fontWeight as number;
  if (letterSpacing != null) style.letterSpacing = pxify(letterSpacing);
  return style;
}

function baseStyle(node: Any, tokens: Any): CSSProperties {
  const layout = node.layout || {};
  const visual = node.visual || {};
  const style: CSSProperties = {};

  // layout
  if (layout.mode === "HORIZONTAL" || layout.mode === "VERTICAL") {
    style.display = "flex";
    style.flexDirection = layout.mode === "VERTICAL" ? "column" : "row";
    const pt = resolveRef(tokens, layout.paddingTop);
    const pr = resolveRef(tokens, layout.paddingRight);
    const pb = resolveRef(tokens, layout.paddingBottom);
    const pl = resolveRef(tokens, layout.paddingLeft);
    style.padding = `${toNum(pt)}px ${toNum(pr)}px ${toNum(pb)}px ${toNum(pl)}px`;
    const gap = resolveRef(tokens, layout.itemSpacing);
    if (gap != null) style.gap = pxify(gap);
    if (layout.primaryAxisAlignItems === "CENTER") style.justifyContent = "center";
    else if (layout.primaryAxisAlignItems === "MAX") style.justifyContent = "flex-end";
    else if (layout.primaryAxisAlignItems === "SPACE_BETWEEN") style.justifyContent = "space-between";
    if (layout.counterAxisAlignItems === "CENTER") style.alignItems = "center";
    else if (layout.counterAxisAlignItems === "MAX") style.alignItems = "flex-end";
  }

  // size
  if (layout.width != null && layout.width !== "HUG") {
    const w = resolveRef(tokens, layout.width);
    if (w != null) style.width = pxify(w);
  }
  if (layout.height != null && layout.height !== "HUG") {
    const h = resolveRef(tokens, layout.height);
    if (h != null) style.height = pxify(h);
  }

  // visual
  if (visual.cornerRadius != null) {
    const r = resolveRef(tokens, visual.cornerRadius);
    if (r != null) style.borderRadius = pxify(r);
  }
  if (visual.fill) {
    const c = resolveRef(tokens, visual.fill);
    if (c != null) style.background = String(c);
  }
  if (visual.stroke) {
    const c = resolveRef(tokens, visual.stroke);
    if (c != null) style.border = `1px solid ${c}`;
  }
  if (visual.shadow) {
    // composite token — best-effort
    const shadowRef = String(visual.shadow);
    const sm = shadowRef.match(/^\{(.+)\}$/);
    if (sm) {
      const parts = sm[1].split(".");
      let cur: Any = tokens;
      for (const p of parts) cur = cur?.[p];
      if (cur && cur.type === "shadow" && cur.value) {
        const v = cur.value;
        const color = v.color || "rgba(0,0,0,.1)";
        style.boxShadow = `${v.offsetX || 0}px ${v.offsetY || 2}px ${v.blur || 4}px ${color}`;
      }
    }
  }

  return style;
}

function toNum(v: unknown): number {
  if (v == null) return 0;
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

function RenderNode({ node, tokens, icons, depth }: { node: Any; tokens: Any; icons: Record<string, string>; depth: number }): ReactNode {
  const style = baseStyle(node, tokens);
  const children: Any[] = node.children || [];
  return (
    <div style={style} title={node.name || node.id}>
      {children.map((c, i) => (
        <RenderChild key={i} child={c} tokens={tokens} icons={icons} depth={depth + 1} />
      ))}
    </div>
  );
}

function RenderChild({ child, tokens, icons, depth }: { child: Any; tokens: Any; icons: Record<string, string>; depth: number }): ReactNode {
  if (child.kind === "text") {
    const style: CSSProperties = {
      ...resolveTypography(tokens, child.textStyle),
      whiteSpace: "pre-wrap",
    };
    const color = resolveRef(tokens, child.color);
    if (color != null) style.color = String(color);
    return <span style={style}>{String(child.content ?? "")}</span>;
  }
  if (child.kind === "group") {
    return <RenderNode node={child} tokens={tokens} icons={icons} depth={depth} />;
  }
  if (child.kind === "ref") {
    const comp = String(child.component || "");
    // 아이콘 SVG embed
    if (comp.startsWith("atom/icon/")) {
      const iconName = comp.slice("atom/icon/".length);
      const svg = icons[iconName];
      if (svg) {
        return (
          <span
            style={{ display: "inline-flex", alignItems: "center", lineHeight: 0 }}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        );
      }
    }
    // placeholder
    return (
      <span
        style={{
          display: "inline-block",
          padding: "4px 8px",
          background: "#eef2ff",
          color: "#4f46e5",
          border: "1px dashed #a5b4fc",
          borderRadius: 4,
          fontSize: 11,
          fontFamily: "monospace",
        }}
      >
        [{comp}]
      </span>
    );
  }
  return null;
}

export function SpecPreview({ spec, ds, icons }: Props) {
  if (!spec?.base) return null;
  // `name` 을 노드에 주입해서 디버깅 용 tooltip
  const root = { ...spec.base, name: spec.name };
  return (
    <div className="inline-block">
      <RenderNode node={root} tokens={ds} icons={icons} depth={0} />
    </div>
  );
}

// DS 내에서 shadow/typography leaf 에 접근하는 helper 가 필요할 경우에 대비해 export
export const __internal = { resolveToken, resolveRef };
