// AUTO-GENERATED — tab-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/tab-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TabItemProps {
  state?: "Default" | "Selected";
  txt?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function TabItem(props: TabItemProps) {
  const {
    state = "Default", txt, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(State === "Default" && {})
  };

  return (
    <div
      data-component="tab-item"
      data-figma="12391:22434"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.txt ?? "{txt}"}
    </div>
  );
}

export default TabItem;
