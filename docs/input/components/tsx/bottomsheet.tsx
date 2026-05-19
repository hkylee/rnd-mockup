// AUTO-GENERATED — bottomsheet.json 기반. 직접 수정 금지.
// source: docs/input/components/json/bottomsheet.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface BottomsheetProps {
  actionbutton?: "on" | "off";
  style?: React.CSSProperties;
  className?: string;
}

export function Bottomsheet(props: BottomsheetProps) {
  const {
    actionbutton = "on", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    background: "#ffffff"
  };

  const variantStyle: React.CSSProperties = {
    // ...(ActionButton === "on" && {})
  };

  return (
    <div
      data-component="bottomsheet"
      data-figma="12372:118942"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Handle */}
    <div>
      {/* TODO: .Titlebottomsheet */}
    </div>
    {/* TODO: .Actionbutton */}
    </div>
  );
}

export default Bottomsheet;
