// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/list-text
// description: 텍스트 목록 행. RightItem × Table 타입.
import * as React from "react";
import { .RightItem } from "../.RightItem";

interface ListTextBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface ListTextProps extends ListTextBaseProps {
  text?: string;
  table?: "off" | "on" | "dot" | "첫번째-강조-타이틀" | "두번째-강조-타이틀";
}

export function ListText(rawProps: ListTextProps = {} as ListTextProps) {
  const props = { "table": "off", ...rawProps };
  return (
    <div data-component="mol/list-text" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", paddingBottom: "4px", width: "100%" }, ...rawProps.style }}>
      <div data-id="leftitem" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "auto" }}>
        <span data-id="text">{props["text"] ?? "타이틀 레이블"}</span>
      </div>
      <.RightItem data-id="-rightitem" />
    </div>
  );
}

export default ListText;
