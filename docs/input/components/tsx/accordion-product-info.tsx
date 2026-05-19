// AUTO-GENERATED — accordion-product-info.json 기반. 직접 수정 금지.
// source: docs/input/components/json/accordion-product-info.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface AccordionProductInfoProps {
  states?: "Default" | "Open";
  style?: React.CSSProperties;
  className?: string;
}

export function AccordionProductInfo(props: AccordionProductInfoProps) {
  const {
    states = "Default", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10.0,
    padding: 24.0,
    background: "#f4f5fa",
    borderRadius: 20.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(States === "Default" && {})
  };

  return (
    <div
      data-component="accordion-product-info"
      data-figma="12372:119046"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
      {/* TODO: .Ico */}
    </div>
    </div>
  );
}

export default AccordionProductInfo;
