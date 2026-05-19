// AUTO-GENERATED — button.json 기반. 직접 수정 금지.
// source: docs/input/components/json/button.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ButtonProps {
  size?: "Small" | "Medium" | "Large" | "XLarge";
  type?: "Primary" | "Secondary" | "Disabled";
  버튼?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function Button(props: ButtonProps) {
  const {
    size = "Small", type = "Primary", 버튼, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 10.0,
    padding: "6.0px 12.0px 6.0px 12.0px",
    justifyContent: "center",
    alignItems: "center",
    background: "#3617ce",
    borderRadius: 9999.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Size === "Small" && {})
    // ...(Type === "Primary" && {})
  };

  return (
    <div
      data-component="button"
      data-figma="12391:23917"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.버튼 ?? "버튼"}
    </div>
  );
}

export default Button;
