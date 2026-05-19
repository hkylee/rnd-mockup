// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/tooltip
// description: 툴팁 버블. Direction(Left/Center/Right).
import * as React from "react";


interface TooltipBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface TooltipProps extends TooltipBaseProps {
  "----14-900-"?: string;
  direction?: "left" | "center" | "right";
}

export function Tooltip(rawProps: TooltipProps = {} as TooltipProps) {
  const props = { "direction": "left", ...rawProps };
  return (
    <div data-component="mol/tooltip" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", width: "auto" }, ...rawProps.style }}>
      <div data-id="bubble" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px", paddingTop: "6px", paddingRight: "12px", paddingBottom: "6px", paddingLeft: "12px", width: "auto", borderRadius: "99px", background: "var(--component-radio-default-dotcolor)" }}>
        <span data-id="----14-900-">{props["----14-900-"] ?? "선물가 14,900원"}</span>
      </div>
      <div data-id="tail" style={{ display: "flex", flexDirection: "column", gap: "10px", paddingRight: "20px", paddingLeft: "20px", width: "auto" }}>

      </div>
    </div>
  );
}

export default Tooltip;
