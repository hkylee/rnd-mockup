// AUTO-GENERATED — right-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/right-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface RightItemProps {
  type?: "Text" | "BadgeLevel" | "TextButton" | "Icon";
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function RightItem(props: RightItemProps) {
  const {
    type = "Text", text, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 2.0,
    alignItems: "center"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Text" && {})
  };

  return (
    <div
      data-component="right-item"
      data-figma="12391:23874"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.text ?? "-3,000원"}
    </div>
  );
}

export default RightItem;
