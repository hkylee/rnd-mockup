// AUTO-GENERATED — thumbnail.json 기반. 직접 수정 금지.
// source: docs/input/components/json/thumbnail.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ThumbnailProps {
  size?: "64" | "160" | "182" | "40";
  style?: React.CSSProperties;
  className?: string;
}

export function Thumbnail(props: ThumbnailProps) {
  const {
    size = "64", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 10.0,
    alignItems: "center",
    borderRadius: 8.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Size === "64" && {})
  };

  return (
    <div
      data-component="thumbnail"
      data-figma="12391:22051"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >

    </div>
  );
}

export default Thumbnail;
