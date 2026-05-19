// AUTO-GENERATED — bottom-navigation.json 기반. 직접 수정 금지.
// source: docs/input/components/json/bottom-navigation.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface BottomNavigationProps {
  state?: "My" | "Search" | "Shopping";
  style?: React.CSSProperties;
  className?: string;
}

export function BottomNavigation(props: BottomNavigationProps) {
  const {
    state = "My", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 12.0,
    padding: "12.0px 0px 36.0px 0px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    background: "#ebeef6",
    border: "1.0px solid #f4f5fa"
  };

  const variantStyle: React.CSSProperties = {
    // ...(State === "My" && {})
  };

  return (
    <div
      data-component="bottom-navigation"
      data-figma="12391:22358"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {/* TODO: .IconSet */}
      {props.my ?? "MY"}
    </div>
    <div>
      {/* TODO: .IconSet */}
      {props.검색 ?? "검색"}
    </div>
    <div>
      {/* TODO: .IconSet */}
      {props.쇼핑 ?? "쇼핑"}
    </div>
    </div>
  );
}

export default BottomNavigation;
