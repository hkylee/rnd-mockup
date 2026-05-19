// AUTO-GENERATED — left-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/left-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface LeftItemProps {
  type?: "Ai+Gift" | "Ai";
  style?: React.CSSProperties;
  className?: string;
}

export function LeftItem(props: LeftItemProps) {
  const {
    type = "Ai+Gift", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 20.0,
    alignItems: "center"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Ai+Gift" && {})
  };

  return (
    <div
      data-component="left-item"
      data-figma="12391:23943"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
    </div>
    <div>
      <div>
        <div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LeftItem;
