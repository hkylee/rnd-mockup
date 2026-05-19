// AUTO-GENERATED — checkbox-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/checkbox-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CheckboxItemProps {
  속성1?: "Off" | "On";
  속성2?: "Off";
  속성3?: "Off" | "On";
  style?: React.CSSProperties;
  className?: string;
}

export function CheckboxItem(props: CheckboxItemProps) {
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
      data-component="checkbox-item"
      data-figma="12391:23969"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
        <div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CheckboxItem;
