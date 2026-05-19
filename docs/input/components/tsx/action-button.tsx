// AUTO-GENERATED — action-button.json 기반. 직접 수정 금지.
// source: docs/input/components/json/action-button.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ActionButtonProps {
  type?: "Ai" | "Gift" | "Default";
  button?: "2" | "1";
  style?: React.CSSProperties;
  className?: string;
}

export function ActionButton(props: ActionButtonProps) {
  const {
    type = "Ai", button = "2", style, className
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
    // ...(Type === "Ai" && {})
    // ...(Button === "2" && {})
  };

  return (
    <div
      data-component="action-button"
      data-figma="12372:118323"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Button */}
    {/* TODO: .Tooltip */}
    </div>
  );
}

export default ActionButton;
