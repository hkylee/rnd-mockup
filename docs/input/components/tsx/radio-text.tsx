// AUTO-GENERATED — radio-text.json 기반. 직접 수정 금지.
// source: docs/input/components/json/radio-text.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface RadioTextProps {
  checked?: "Off" | "On";
  disabled?: "Off" | "On";
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function RadioText(props: RadioTextProps) {
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
      data-component="radio-text"
      data-figma="12372:118459"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Radioitem */}
    {props.text ?? "텍스트"}
    </div>
  );
}

export default RadioText;
