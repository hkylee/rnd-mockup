// AUTO-GENERATED — icon.json 기반. 직접 수정 금지.
// source: docs/input/components/json/icon.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface IconProps {
  size?: "40" | "32" | "24" | "20" | "16" | "12";
  style?: React.CSSProperties;
  className?: string;
}

export function Icon(props: IconProps) {
  const {
    size = "40", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 10.0,
    alignItems: "center",
    background: "#ff0000"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Size === "40" && {})
  };

  return (
    <div
      data-component="icon"
      data-figma="12372:119165"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Ico교체용 */}
    </div>
  );
}

export default Icon;
