// AUTO-GENERATED — pay-product-list-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/pay-product-list-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface PayProductListItemProps {
  type?: "Pay" | "Cart";
  style?: React.CSSProperties;
  className?: string;
}

export function PayProductListItem(props: PayProductListItemProps) {
  const {
    type = "Pay", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12.0,
    padding: "0px 0px 8.0px 0px",
    alignItems: "center"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Pay" && {})
  };

  return (
    <div
      data-component="pay-product-list-item"
      data-figma="12372:120622"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {/* TODO: .Thumbnailitem */}
      <div>
      </div>
    </div>
    {/* TODO: .Buttontextunderline */}
    </div>
  );
}

export default PayProductListItem;
