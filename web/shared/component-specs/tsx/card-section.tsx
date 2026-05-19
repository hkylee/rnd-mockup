// AUTO-GENERATED — card-section.json 기반. 직접 수정 금지.
// source: docs/input/components/json/card-section.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CardSectionProps {
  type?: "Medium" | "Large";
  style?: React.CSSProperties;
  className?: string;
}

export function CardSection(props: CardSectionProps) {
  const {
    type = "Medium", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10.0,
    padding: "0px 0px 4.0px 0px"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Medium" && {})
  };

  return (
    <div
      data-component="card-section"
      data-figma="12372:118800"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {/* TODO: .Cardsectiontitle */}
      {/* TODO: .LocalCardcontents */}
    </div>
    </div>
  );
}

export default CardSection;
