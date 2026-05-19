// AUTO-GENERATED — card-info.json 기반. 직접 수정 금지.
// source: docs/input/components/json/card-info.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CardInfoProps {
  type?: "Brand" | "Place";
  style?: React.CSSProperties;
  className?: string;
}

export function CardInfo(props: CardInfoProps) {
  const {
    type = "Brand", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 8.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Brand" && {})
  };

  return (
    <div
      data-component="card-info"
      data-figma="12372:119099"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {/* TODO: .Cardtext */}
      {/* TODO: .Thumbnaillogoitem */}
    </div>
    </div>
  );
}

export default CardInfo;
