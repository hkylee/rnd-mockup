// AUTO-GENERATED — chip-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/chip-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ChipItemProps {
  selected?: "Off" | "On";
  단말기?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function ChipItem(props: ChipItemProps) {
  const {
    selected = "Off", 단말기, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 2.0,
    padding: "10.0px 12.0px 10.0px 12.0px",
    alignItems: "center",
    background: "#05001a",
    borderRadius: 9999.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Selected === "Off" && {})
  };

  return (
    <div
      data-component="chip-item"
      data-figma="12391:22440"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.단말기 ?? "단말기"}
    </div>
  );
}

export default ChipItem;
