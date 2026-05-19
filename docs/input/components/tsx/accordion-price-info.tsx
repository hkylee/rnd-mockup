// AUTO-GENERATED — accordion-price-info.json 기반. 직접 수정 금지.
// source: docs/input/components/json/accordion-price-info.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface AccordionPriceInfoProps {
  states?: "Default" | "Open";
  type?: "SelectedList" | "TextList";
  style?: React.CSSProperties;
  className?: string;
}

export function AccordionPriceInfo(props: AccordionPriceInfoProps) {
  const {
    states = "Default", type = "SelectedList", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 16.0,
    padding: 24.0,
    background: "#ffffff",
    borderRadius: 20.0,
    border: "1.5px solid #ebeef6"
  };

  const variantStyle: React.CSSProperties = {
    // ...(States === "Default" && {})
    // ...(Type === "SelectedList" && {})
  };

  return (
    <div
      data-component="accordion-price-info"
      data-figma="12372:120468"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
      <div>
      </div>
    </div>
    </div>
  );
}

export default AccordionPriceInfo;
