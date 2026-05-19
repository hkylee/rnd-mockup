// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/card-summary
// description: 요약 카드. Button × Type(Text/Button/Text+RightItem).
import * as React from "react";
import { .Button } from "../.Button";

interface CardSummaryBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface CardSummaryProps extends CardSummaryBaseProps {
  "-subtext-"?: string;
  "-maintext-"?: string;
  titletext?: string;
  infotext?: string;
  titletext?: string;
  infotext?: string;
  button?: "on" | "off";
  type?: "text" | "button" | "text+rightitem";
}

export function CardSummary(rawProps: CardSummaryProps = {} as CardSummaryProps) {
  const props = { "button": "on", "type": "text", ...rawProps };
  return (
    <div data-component="mol/card-summary" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "24px", paddingRight: "24px", paddingBottom: "24px", paddingLeft: "24px", width: "auto", borderRadius: "20px", background: "#f4f5fa" }, ...rawProps.style }}>
      <div data-id="title" style={{ display: "flex", flexDirection: "row", gap: "4px", width: "auto" }}>
        <div data-id="txt" style={{ display: "flex", flexDirection: "column", gap: "4px", width: "auto" }}>
          <span data-id="-subtext-">{props["-subtext-"] ?? "{SubText}"}</span>
          <span data-id="-maintext-">{props["-maintext-"] ?? "{MainText}"}</span>
        </div>
        <.Button data-id="-button" />
      </div>
      <div data-id="list" style={{ display: "flex", flexDirection: "column", gap: "8px", width: "auto", borderRadius: "12px" }}>
        <div data-id="txt" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "4px", width: "auto" }}>
          <span data-id="titletext">{props["titletext"] ?? "TitleText"}</span>
          <span data-id="infotext">{props["infotext"] ?? "InfoText"}</span>
        </div>
        <div data-id="txt" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "4px", width: "auto" }}>
          <span data-id="titletext">{props["titletext"] ?? "TitleText"}</span>
          <span data-id="infotext">{props["infotext"] ?? "InfoText"}</span>
        </div>
      </div>
    </div>
  );
}

export default CardSummary;
