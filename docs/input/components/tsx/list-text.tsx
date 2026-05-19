// AUTO-GENERATED — list-text.json 기반. 직접 수정 금지.
// source: docs/input/components/json/list-text.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ListTextProps {
  table?: "off" | "on";
  style?: React.CSSProperties;
  className?: string;
}

export function ListText(props: ListTextProps) {
  const {
    table = "off", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 16.0,
    padding: "0px 0px 8.0px 0px",
    alignItems: "center",
    width: "100%"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Table === "off" && {})
  };

  return (
    <div
      data-component="list-text"
      data-figma="12391:23866"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {props.text ?? "본문"}
    </div>
    {/* TODO: .RightItem */}
    </div>
  );
}

export default ListText;
