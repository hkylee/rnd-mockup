// AUTO-GENERATED — radio-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/radio-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface RadioItemProps {
  속성1?: "Off" | "On";
  속성2?: "Off";
  속성3?: "Off" | "On";
  style?: React.CSSProperties;
  className?: string;
}

export function RadioItem(props: RadioItemProps) {
  const {
    속성1 = "Off", 속성2 = "Off", 속성3 = "Off", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 10.0,
    alignItems: "center"
  };

  const variantStyle: React.CSSProperties = {
    // ...(속성1 === "Off" && {})
    // ...(속성2 === "Off" && {})
    // ...(속성3 === "Off" && {})
  };

  return (
    <div
      data-component="radio-item"
      data-figma="12391:23984"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
    </div>
    </div>
  );
}

export default RadioItem;
