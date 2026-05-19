// AUTO-GENERATED — card-contents-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/card-contents-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CardContentsItemProps {
  type?: "List" | "Barcode" | "ai";
  style?: React.CSSProperties;
  className?: string;
}

export function CardContentsItem(props: CardContentsItemProps) {
  const {
    type = "List", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 14.0,
    justifyContent: "center",
    alignItems: "center"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "List" && {})
  };

  return (
    <div
      data-component="card-contents-item"
      data-figma="12391:23582"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {/* TODO: .Image */}
      <div>
        {props.왕과-사는-남자 ?? "왕과 사는 남자"}
      </div>
    </div>
    {/* TODO: .Button */}
    </div>
  );
}

export default CardContentsItem;
