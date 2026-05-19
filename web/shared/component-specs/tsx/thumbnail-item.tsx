// AUTO-GENERATED — thumbnail-item.json 기반. 직접 수정 금지.
// source: docs/input/components/json/thumbnail-item.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface ThumbnailItemProps {
  size?: "40" | "Movie" | "64" | "160" | "182";
  style?: React.CSSProperties;
  className?: string;
}

export function ThumbnailItem(props: ThumbnailItemProps) {
  const {
    size = "40", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 10.0,
    alignItems: "center",
    borderRadius: 8.0
  };

  const variantStyle: React.CSSProperties = {
    // ...(Size === "40" && {})
  };

  return (
    <div
      data-component="thumbnail-item"
      data-figma="12372:118300"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >

    </div>
  );
}

export default ThumbnailItem;
