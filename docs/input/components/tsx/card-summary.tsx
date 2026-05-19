// AUTO-GENERATED — card-summary.json 기반. 직접 수정 금지.
// source: docs/input/components/json/card-summary.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CardSummaryProps {
  button?: "Off" | "On";
  type?: "Text+RightItem" | "Text" | "Button";
  style?: React.CSSProperties;
  className?: string;
}

export function CardSummary(props: CardSummaryProps) {
  const {
    button = "Off", type = "Text+RightItem", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 24.0,
    padding: 24.0,
    background: "#f4f5fa",
    borderRadius: 20.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Button === "Off" && {})
    // ...(Type === "Text+RightItem" && {})
  };

  return (
    <div
      data-component="card-summary"
      data-figma="12372:120282"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
      {/* TODO: .Button */}
    </div>
    <div>
      <div>
      </div>
      <div>
      </div>
    </div>
    </div>
  );
}

export default CardSummary;
