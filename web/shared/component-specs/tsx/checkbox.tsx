// AUTO-GENERATED — checkbox.json 기반. 직접 수정 금지.
// source: docs/input/components/json/checkbox.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CheckboxProps {
  checked?: "Off" | "On";
  text?: "On";
  disabled?: "Off" | "On";
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function Checkbox(props: CheckboxProps) {
  const {
    checked = "Off", text = "On", disabled = "Off", text, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 8.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Checked === "Off" && {})
    // ...(Text === "On" && {})
    // ...(Disabled === "Off" && {})
  };

  return (
    <div
      data-component="checkbox"
      data-figma="12391:22210"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .CheckboxItem */}
    {props.text ?? "텍스트"}
    </div>
  );
}

export default Checkbox;
