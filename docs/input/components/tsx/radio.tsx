// AUTO-GENERATED — radio.json 기반. 직접 수정 금지.
// source: docs/input/components/json/radio.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface RadioProps {
  checked?: "On" | "Off";
  text?: "On";
  disabled?: "Off" | "On";
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function Radio(props: RadioProps) {
  const {
    checked = "On", text = "On", disabled = "Off", text, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 8.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Checked === "On" && {})
    // ...(Text === "On" && {})
    // ...(Disabled === "Off" && {})
  };

  return (
    <div
      data-component="radio"
      data-figma="12391:22197"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .RadioItem */}
    {props.text ?? "텍스트"}
    </div>
  );
}

export default Radio;
