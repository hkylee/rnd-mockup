// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/action-button
// description: CTA 버튼 영역. Type(Default/Ai/Gift) × 버튼 수(1/2).
import * as React from "react";


interface ActionButtonBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface ActionButtonProps extends ActionButtonBaseProps {
  "---"?: string;
  "---"?: string;
  "---"?: string;
  type?: "default" | "ai" | "gift";
  button?: "1" | "2";
}

export function ActionButton(rawProps: ActionButtonProps = {} as ActionButtonProps) {
  const props = { "type": "default", "button": "1", ...rawProps };
  return (
    <div data-component="mol/action-button" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", paddingTop: "10px", paddingRight: "12px", paddingBottom: "36px", paddingLeft: "12px", width: "100%", background: "var(--component-radio-default-dotcolor)", border: (("#f4f5fa") ? "1px solid " + ("#f4f5fa") : "none") }, ...rawProps.style }}>
      <div data-id="txt" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px", paddingTop: "8px", paddingBottom: "8px", width: "auto" }}>
        <span data-id="---">{props["---"] ?? "텍스트"}</span>
      </div>
      <div data-id="button" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "10px", paddingRight: "32px", paddingLeft: "32px", width: "auto", borderRadius: "20px", background: "var(--component-radio-default-fillselected)" }}>
        <div data-id="ai" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "auto" }}>

        </div>
        <div data-id="buttontext" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "auto" }}>
          <span data-id="---">{props["---"] ?? "텍스트"}</span>
          <span data-id="---">{props["---"] ?? "텍스트"}</span>
        </div>
      </div>
    </div>
  );
}

export default ActionButton;
