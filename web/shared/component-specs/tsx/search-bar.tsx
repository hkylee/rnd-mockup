// AUTO-GENERATED — search-bar.json 기반. 직접 수정 금지.
// source: docs/input/components/json/search-bar.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface SearchBarProps {
  type?: "LLM" | "search";
  style?: React.CSSProperties;
  className?: string;
}

export function SearchBar(props: SearchBarProps) {
  const {
    type = "LLM", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 166.0,
    padding: "6.0px 6.0px 6.0px 20.0px",
    alignItems: "center",
    background: "#f4f5fa",
    borderRadius: 999.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(type === "LLM" && {})
  };

  return (
    <div
      data-component="search-bar"
      data-figma="12372:120398"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <span>무엇을 도와드릴까요?</span>
    <div>
      {/* TODO: .Ico */}
    </div>
    </div>
  );
}

export default SearchBar;
