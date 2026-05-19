// AUTO-GENERATED — search-field.json 기반. 직접 수정 금지.
// source: docs/input/components/json/search-field.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface SearchFieldProps {
  type?: "LLM" | "search";
  무엇을-도와드릴까요?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function SearchField(props: SearchFieldProps) {
  const {
    type = "LLM", 무엇을-도와드릴까요, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 166.0,
    padding: "6.0px 6.0px 6.0px 20.0px",
    alignItems: "center",
    background: "#f4f5fa",
    borderRadius: 9999.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(type === "LLM" && {})
  };

  return (
    <div
      data-component="search-field"
      data-figma="12391:23858"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {props.무엇을-도와드릴까요 ?? "무엇을 도와드릴까요?"}
    <div>
      {/* TODO: .IconSet */}
    </div>
    </div>
  );
}

export default SearchField;
