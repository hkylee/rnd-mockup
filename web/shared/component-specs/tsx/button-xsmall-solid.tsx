// AUTO-GENERATED — button-xsmall-solid.json 기반. 직접 수정 금지.
// source: docs/input/components/json/button-xsmall-solid.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ButtonXsmallSolidProps {
  state?: "Active" | "Disabled";
  쿠폰-받기?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function ButtonXsmallSolid(props: ButtonXsmallSolidProps) {
  const {
    state = "Active", 쿠폰-받기, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    padding: "4.0px 7.0px 4.0px 7.0px",
    justifyContent: "center",
    alignItems: "center",
    background: "#05001a",
    borderRadius: 9999.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(State === "Active" && {})
  };

  return (
    <div
      data-component="button-xsmall-solid"
      data-figma="12391:22453"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.쿠폰-받기 ?? "쿠폰 받기"}
    {/* TODO: .IconSet */}
    </div>
  );
}

export default ButtonXsmallSolid;
