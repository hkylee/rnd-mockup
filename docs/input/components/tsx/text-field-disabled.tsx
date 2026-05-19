// AUTO-GENERATED — text-field-disabled.json 기반. 직접 수정 금지.
// source: docs/input/components/json/text-field-disabled.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TextFieldDisabledProps {
  button?: "off" | "on";
  style?: React.CSSProperties;
  className?: string;
}

export function TextFieldDisabled(props: TextFieldDisabledProps) {
  const {
    button = "off", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Button === "off" && {})
  };

  return (
    <div
      data-component="text-field-disabled"
      data-figma="12391:22350"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {props.텍스트를-입력하세요 ?? "텍스트를 입력하세요"}
    </div>
    </div>
  );
}

export default TextFieldDisabled;
