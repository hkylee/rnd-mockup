// AUTO-GENERATED — text-field.json 기반. 직접 수정 금지.
// source: docs/input/components/json/text-field.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TextFieldProps {
  states?: "Default" | "Disabled" | "Focused" | "Typed" | "Typing";
  error?: "on" | "off";
  style?: React.CSSProperties;
  className?: string;
}

export function TextField(props: TextFieldProps) {
  const {
    states = "Default", error = "on", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(States === "Default" && {})
    // ...(Error === "on" && {})
  };

  return (
    <div
      data-component="text-field"
      data-figma="12391:22256"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Label */}
    {/* TODO: .TextFieldDefault */}
    <div>
      {props.help-text ?? "Help Text"}
    </div>
    </div>
  );
}

export default TextField;
