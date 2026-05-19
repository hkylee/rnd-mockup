// AUTO-GENERATED — filter-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/filter-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface FilterItemProps {
  selected?: "On" | "Off";
  단말기?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function FilterItem(props: FilterItemProps) {
  const {
    selected = "On", 단말기, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 2.0,
    padding: "10.0px 16.0px 10.0px 12.0px",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: 9999.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Selected === "On" && {})
  };

  return (
    <div
      data-component="filter-item"
      data-figma="12391:23750"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .IconSet */}
    {props.단말기 ?? "단말기"}
    </div>
  );
}

export default FilterItem;
