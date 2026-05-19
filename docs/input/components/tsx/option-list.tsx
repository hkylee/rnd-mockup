// AUTO-GENERATED — option-list.json 기반. 직접 수정 금지.
// source: docs/input/components/json/option-list.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface OptionListProps {
  속성1?: "Volume" | "Color";
  style?: React.CSSProperties;
  className?: string;
}

export function OptionList(props: OptionListProps) {
  const {
    속성1 = "Volume", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 4.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(속성1 === "Volume" && {})
  };

  return (
    <div
      data-component="option-list"
      data-figma="12372:120615"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Optionlistitem */}
    {/* TODO: .Optionlistitem */}
    </div>
  );
}

export default OptionList;
