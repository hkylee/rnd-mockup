// AUTO-GENERATED — badge-icon.json 기반. 직접 수정 금지.
// source: docs/input/components/json/badge-icon.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface BadgeIconProps {
  subtext?: "Off" | "On";
  style?: React.CSSProperties;
  className?: string;
}

export function BadgeIcon(props: BadgeIconProps) {
  const {
    subtext = "Off", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 20.0,
    padding: "6.0px 10.0px 6.0px 8.0px",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: 10.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Subtext === "Off" && {})
  };

  return (
    <div
      data-component="badge-icon"
      data-figma="12391:23848"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {/* TODO: .IconSet */}
      {props.text ?? "{Text}"}
    </div>
    </div>
  );
}

export default BadgeIcon;
