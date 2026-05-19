// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/accordion-product
// description: 상품 정보 아코디언. Open/Default.
import * as React from "react";
import { .ThumbnailLogoItem } from "../.ThumbnailLogoItem";
import { .Ico } from "../.Ico";

interface AccordionProductBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface AccordionProductProps extends AccordionProductBaseProps {
  states?: "open" | "default";
}

export function AccordionProduct(rawProps: AccordionProductProps = {} as AccordionProductProps) {
  const props = { "states": "open", ...rawProps };
  return (
    <div data-component="ogn/accordion-product" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "24px", paddingRight: "24px", paddingBottom: "24px", paddingLeft: "24px", width: "auto", borderRadius: "20px", background: "#f4f5fa" }, ...rawProps.style }}>
      <div data-id="title" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "101px", width: "auto" }}>
        <div data-id="leftitem" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", width: "auto" }}>
          <.ThumbnailLogoItem data-id="-thumbnaillogoitem" />
        </div>
        <.Ico data-id="-ico" />
      </div>
    </div>
  );
}

export default AccordionProduct;
