// AUTO-GENERATED — checkbox-text.json 기반. 직접 수정 금지.
// source: docs/input/components/json/checkbox-text.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CheckboxTextProps {
  checked?: "Off" | "On";
  disabled?: "Off" | "On";
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function CheckboxText(props: CheckboxTextProps) {
  const {
    checked = "Off", disabled = "Off", text, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 8.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Checked === "Off" && {})
    // ...(Disabled === "Off" && {})
  };

  return (
    <div
      data-component="checkbox-text"
      data-figma="12372:118472"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Checkboxitem */}
    {props.text ?? "텍스트"}
    </div>
  );
}

export default CheckboxText;
