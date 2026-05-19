// AUTO-GENERATED — chip-image-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/chip-image-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ChipImageItemProps {
  selected?: "On" | "Off";
  style?: React.CSSProperties;
  className?: string;
}

export function ChipImageItem(props: ChipImageItemProps) {
  const {
    selected = "On", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 2.0,
    padding: "10.0px 16.0px 10.0px 12.0px",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: 999.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Selected === "On" && {})
  };

  return (
    <div
      data-component="chip-image-item"
      data-figma="12372:120407"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Ico */}
    <span>단말기</span>
    </div>
  );
}

export default ChipImageItem;
