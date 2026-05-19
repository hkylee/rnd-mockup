// AUTO-GENERATED — top-navigation.json 기반. 직접 수정 금지.
// source: docs/input/components/json/top-navigation.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TopNavigationProps {
  devtype?: "page-2depth" | "popup" | "page-1depth";
  style?: React.CSSProperties;
  className?: string;
}

export function TopNavigation(props: TopNavigationProps) {
  const {
    devtype = "page-2depth", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 217.0,
    padding: "10.0px 20.0px 10.0px 20.0px",
    alignItems: "center",
    width: "100%",
    background: "#ffffff"
  };

  const variantStyle: React.CSSProperties = {
    // ...(devType === "page-2depth" && {})
  };

  return (
    <div
      data-component="top-navigation"
      data-figma="12391:23996"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {/* TODO: .IconSet */}
    </div>
    <div>
      {/* TODO: .IconSet */}
      {/* TODO: .IconSet */}
      {/* TODO: .IconSet */}
    </div>
    </div>
  );
}

export default TopNavigation;
