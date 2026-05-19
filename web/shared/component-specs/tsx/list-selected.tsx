// AUTO-GENERATED — list-selected.json 기반. 직접 수정 금지.
// source: docs/input/components/json/list-selected.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ListSelectedProps {
  type?: "Radio" | "Checkbox";
  subtext?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function ListSelected(props: ListSelectedProps) {
  const {
    type = "Radio", subtext, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 8.0,
    padding: "0px 0px 4.0px 0px",
    alignItems: "center",
    width: "100%",
    background: "#ffbbbb"
  };

  const variantStyle: React.CSSProperties = {
    // ...(type === "Radio" && {})
  };

  return (
    <div
      data-component="list-selected"
      data-figma="12372:118314"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Radiotext */}
    {props.subtext ?? "-9,900원"}
    {/* TODO: .Listselectedrightitem */}
    </div>
  );
}

export default ListSelected;
