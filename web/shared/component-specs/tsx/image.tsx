// AUTO-GENERATED — image.json 기반. 직접 수정 금지.
// source: docs/input/components/json/image.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ImageProps {
  type?: "Card" | "Banner" | "circle";
  size?: "40*58" | "82*62" | "393*310" | "16*16";
  style?: React.CSSProperties;
  className?: string;
}

export function Image(props: ImageProps) {
  const {
    type = "Card", size = "40*58", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 10.0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Card" && {})
    // ...(Size === "40*58" && {})
  };

  return (
    <div
      data-component="image"
      data-figma="12391:23708"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
    </div>
    </div>
  );
}

export default Image;
