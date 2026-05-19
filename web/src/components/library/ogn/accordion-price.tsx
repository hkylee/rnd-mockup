// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/accordion-price
// description: 가격 정보 아코디언. Type(SelectedList/TextList) × Open/Default.
import * as React from "react";
import { .Ico } from "../.Ico";

interface AccordionPriceBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface AccordionPriceProps extends AccordionPriceBaseProps {
  "66-"?: string;
  "6-086-"?: string;
  "-1--"?: string;
  states?: "default" | "open";
  type?: "selectedlist" | "textlist";
}

export function AccordionPrice(rawProps: AccordionPriceProps = {} as AccordionPriceProps) {
  const props = { "states": "default", "type": "selectedlist", ...rawProps };
  return (
    <div data-component="ogn/accordion-price" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "24px", paddingRight: "24px", paddingBottom: "24px", paddingLeft: "24px", width: "auto", borderRadius: "20px", background: "var(--component-radio-default-dotcolor)", border: (("var(--component-progress-small-track)") ? "1px solid " + ("var(--component-progress-small-track)") : "none") }, ...rawProps.style }}>
      <div data-id="titleaccordion" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "126px", width: "auto" }}>
        <div data-id="txt_price" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "auto" }}>
          <span data-id="66-">{props["66-"] ?? "66%"}</span>
          <span data-id="6-086-">{props["6-086-"] ?? "6,086원"}</span>
          <span data-id="-1--">{props["-1--"] ?? "/1개월"}</span>
        </div>
        <div data-id="frame-2147247824" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", width: "auto" }}>
          <.Ico data-id="-ico" />
        </div>
      </div>
    </div>
  );
}

export default AccordionPrice;
