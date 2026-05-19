// AUTO-GENERATED — handle.json 기반. 직접 수정 금지.
// source: docs/input/components/json/handle.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface HandleProps {
  state?: "Default" | "off";
  style?: React.CSSProperties;
  className?: string;
}

export function Handle(props: HandleProps) {
  const {
    state = "Default", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "12.0px 32.0px 0px 32.0px",
    alignItems: "center",
    width: "100%"
  };

  const variantStyle: React.CSSProperties = {
    // ...(state === "Default" && {})
  };

  return (
    <div
      data-component="handle"
      data-figma="12391:23790"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >

    </div>
  );
}

export default Handle;
