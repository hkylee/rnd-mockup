// AUTO-GENERATED — tooltip.json 기반. 직접 수정 금지.
// source: docs/input/components/json/tooltip.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TooltipProps {
  direction?: "Left" | "Center" | "Right";
  style?: React.CSSProperties;
  className?: string;
}

export function Tooltip(props: TooltipProps) {
  const {
    direction = "Left", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Direction === "Left" && {})
  };

  return (
    <div
      data-component="tooltip"
      data-figma="12391:22237"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {props.선물가-14900원 ?? "선물가 14,900원"}
    </div>
    <div>
    </div>
    </div>
  );
}

export default Tooltip;
