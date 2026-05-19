// AUTO-GENERATED — action-area.json 기반. 직접 수정 금지.
// source: docs/input/components/json/action-area.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ActionAreaProps {
  type?: "Default" | "Ai" | "Gift";
  button?: "1" | "2";
  style?: React.CSSProperties;
  className?: string;
}

export function ActionArea(props: ActionAreaProps) {
  const {
    type = "Default", button = "1", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10.0,
    padding: "10.0px 12.0px 36.0px 12.0px",
    alignItems: "center",
    width: "100%",
    background: "#ffffff",
    border: "1.0px solid #f4f5fa"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Default" && {})
    // ...(Button === "1" && {})
  };

  return (
    <div
      data-component="action-area"
      data-figma="12391:22061"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {props.텍스트 ?? "텍스트"}
    </div>
    <div>
      <div>
      </div>
      <div>
        {props.텍스트 ?? "텍스트"}
        {props.텍스트 ?? "텍스트"}
      </div>
    </div>
    </div>
  );
}

export default ActionArea;
