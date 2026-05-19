// AUTO-GENERATED — text-button.json 기반. 직접 수정 금지.
// source: docs/input/components/json/text-button.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TextButtonProps {
  property1?: "Default" | "Variant2";
  버튼?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function TextButton(props: TextButtonProps) {
  const {
    property1 = "Default", 버튼, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    background: "#ffffff"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Property1 === "Default" && {})
  };

  return (
    <div
      data-component="text-button"
      data-figma="12391:23961"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.버튼 ?? "버튼"}
    </div>
  );
}

export default TextButton;
