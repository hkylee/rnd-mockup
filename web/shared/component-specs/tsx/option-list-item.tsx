// AUTO-GENERATED — option-list-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/option-list-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface OptionListItemProps {
  type?: "Module" | "List";
  states?: "Selected" | "Default";
  코발트-바이올렛?: string;
  평일-기준-18시-주문까지-가능?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function OptionListItem(props: OptionListItemProps) {
  const {
    type = "Module", states = "Selected", 코발트-바이올렛, 평일-기준-18시-주문까지-가능, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8.0,
    padding: "24.0px 32.0px 24.0px 32.0px",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: 20.0,
    border: "1.5px solid #3617ce"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Module" && {})
    // ...(States === "Selected" && {})
  };

  return (
    <div
      data-component="option-list-item"
      data-figma="12391:23759"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.코발트-바이올렛 ?? "코발트 바이올렛"}
    {props.평일-기준-18시-주문까지-가능 ?? "평일 기준
18시 주문까지 가능"}
    </div>
  );
}

export default OptionListItem;
