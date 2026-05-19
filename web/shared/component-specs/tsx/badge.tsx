// AUTO-GENERATED — badge.json 기반. 직접 수정 금지.
// source: docs/input/components/json/badge.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface BadgeProps {
  type?: "Gray" | "Blue" | "Black";
  badge?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function Badge(props: BadgeProps) {
  const {
    type = "Gray", badge, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 10.0,
    padding: "2.0px 6.0px 2.0px 6.0px",
    justifyContent: "center",
    alignItems: "center",
    background: "#e2e6f1",
    borderRadius: 4.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Gray" && {})
  };

  return (
    <div
      data-component="badge"
      data-figma="12391:22190"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.badge ?? "Badge"}
    </div>
  );
}

export default Badge;
