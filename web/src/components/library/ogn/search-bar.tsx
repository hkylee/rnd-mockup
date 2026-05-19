// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/search-bar
// description: 검색 바. type(LLM/search).
import * as React from "react";
import { .Ico } from "../.Ico";

interface SearchBarBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface SearchBarProps extends SearchBarBaseProps {
  "-----------"?: string;
  type?: "llm" | "search";
}

export function SearchBar(rawProps: SearchBarProps = {} as SearchBarProps) {
  const props = { "type": "llm", ...rawProps };
  return (
    <div data-component="ogn/search-bar" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "166px", paddingTop: "6px", paddingRight: "6px", paddingBottom: "6px", paddingLeft: "20px", width: "auto", borderRadius: "999px", background: "#f4f5fa" }, ...rawProps.style }}>
      <span data-id="-----------">{props["-----------"] ?? "무엇을 도와드릴까요?"}</span>
      <div data-id="button-search" style={{ borderRadius: "26px", background: "var(--component-radio-default-fillselected)" }}>
        <.Ico data-id="-ico" />
      </div>
    </div>
  );
}

export default SearchBar;
