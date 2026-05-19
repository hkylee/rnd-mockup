// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/option-list-item
// description: 옵션 아이템. Type(Module/List) × States.
import * as React from "react";


interface OptionListItemBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface OptionListItemProps extends OptionListItemBaseProps {
  "--------"?: string;
  "------18---------"?: string;
  type?: "module" | "list";
  states?: "selected" | "default";
}

export function OptionListItem(rawProps: OptionListItemProps = {} as OptionListItemProps) {
  const props = { "type": "module", "states": "selected", ...rawProps };
  return (
    <div data-component="mol/option-list-item" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px", paddingTop: "24px", paddingRight: "32px", paddingBottom: "24px", paddingLeft: "32px", width: "auto", borderRadius: "20px", background: "var(--component-radio-default-dotcolor)", border: (("var(--component-radio-default-fillselected)") ? "1px solid " + ("var(--component-radio-default-fillselected)") : "none") }, ...rawProps.style }}>
      <span data-id="--------">{props["--------"] ?? "코발트 바이올렛"}</span>
      <span data-id="------18---------">{props["------18---------"] ?? "평일 기준\n18시 주문까지 가능"}</span>
    </div>
  );
}

export default OptionListItem;
