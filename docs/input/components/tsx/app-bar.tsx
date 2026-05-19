// AUTO-GENERATED — app-bar.json 기반. 직접 수정 금지.
// source: docs/input/components/json/app-bar.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface AppBarProps {
  rightitem?: "On" | "Off";
  title?: "On" | "Off";
  leftitem?: "On" | "Off";
  logo?: "Off" | "On";
  style?: React.CSSProperties;
  className?: string;
}

export function AppBar(props: AppBarProps) {
  const {
    rightitem = "On", title = "On", leftitem = "On", logo = "Off", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    padding: "10.0px 20.0px 10.0px 20.0px",
    alignItems: "center",
    width: "100%"
  };

  const variantStyle: React.CSSProperties = {
    // ...(RightItem === "On" && {})
    // ...(Title === "On" && {})
    // ...(LeftItem === "On" && {})
    // ...(Logo === "Off" && {})
  };

  return (
    <div
      data-component="app-bar"
      data-figma="12372:118389"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
      {props.title ?? "결제하기"}
    </div>
    <div>
      <div>
      </div>
      <div>
      </div>
    </div>
    </div>
  );
}

export default AppBar;
