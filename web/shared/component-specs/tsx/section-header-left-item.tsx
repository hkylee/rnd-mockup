// AUTO-GENERATED — section-header-left-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/section-header-left-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface SectionHeaderLeftItemProps {
  type?: "Text" | "Icon" | "Badge";
  2?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function SectionHeaderLeftItem(props: SectionHeaderLeftItemProps) {
  const {
    type = "Text", 2, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10.0,
    padding: "1.0px 0px 1.0px 0px",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Text" && {})
  };

  return (
    <div
      data-component="section-header-left-item"
      data-figma="12391:22230"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.2 ?? "2"}
    </div>
  );
}

export default SectionHeaderLeftItem;
