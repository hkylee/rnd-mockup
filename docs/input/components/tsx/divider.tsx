// AUTO-GENERATED — divider.json 기반. 직접 수정 금지.
// source: docs/input/components/json/divider.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface DividerProps {
  type?: "Contents" | "Section";
  style?: React.CSSProperties;
  className?: string;
}

export function Divider(props: DividerProps) {
  const {
    type = "Contents", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10.0,
    width: "100%",
    background: "#ffffff"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Contents" && {})
  };

  return (
    <div
      data-component="divider"
      data-figma="12391:22223"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
    </div>
    </div>
  );
}

export default Divider;
