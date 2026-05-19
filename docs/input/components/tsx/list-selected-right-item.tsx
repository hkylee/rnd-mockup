// AUTO-GENERATED — list-selected-right-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/list-selected-right-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ListSelectedRightItemProps {
  type?: "ButtonXsmallSolid" | "Icon" | "TextButton";
  style?: React.CSSProperties;
  className?: string;
}

export function ListSelectedRightItem(props: ListSelectedRightItemProps) {
  const {
    type = "ButtonXsmallSolid", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "ButtonXsmallSolid" && {})
  };

  return (
    <div
      data-component="list-selected-right-item"
      data-figma="12391:23910"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .ButtonXsmallSolid */}
    </div>
  );
}

export default ListSelectedRightItem;
