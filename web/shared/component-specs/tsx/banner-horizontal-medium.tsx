// AUTO-GENERATED — banner-horizontal-medium.json 기반. 직접 수정 금지.
// source: docs/input/components/json/banner-horizontal-medium.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface BannerHorizontalMediumProps {
  subtitle?: "on";
  style?: React.CSSProperties;
  className?: string;
}

export function BannerHorizontalMedium(props: BannerHorizontalMediumProps) {
  const {
    subtitle = "on", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10.0,
    padding: "0px 0px 4.0px 0px",
    alignItems: "center"
  };

  const variantStyle: React.CSSProperties = {
    // ...(SubTitle === "on" && {})
  };

  return (
    <div
      data-component="banner-horizontal-medium"
      data-figma="12372:118791"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
    </div>
    {/* TODO: .Indicator */}
    </div>
  );
}

export default BannerHorizontalMedium;
