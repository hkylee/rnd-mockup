// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/option-list
// description: 옵션 선택 목록. Volume/Color 타입.
import * as React from "react";
import { .OptionListItem } from "../.OptionListItem";

interface OptionListBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface OptionListProps extends OptionListBaseProps {
  "속성-1"?: "volume" | "color";
}

export function OptionList(rawProps: OptionListProps = {} as OptionListProps) {
  const props = { "속성-1": "volume", ...rawProps };
  return (
    <div data-component="ogn/option-list" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "4px", width: "auto" }, ...rawProps.style }}>
      <.OptionListItem data-id="-optionlistitem" />
      <.OptionListItem data-id="-optionlistitem" />
    </div>
  );
}

export default OptionList;
