// AUTO-GENERATED — underline-tab.json 기반. 직접 수정 금지.
// source: docs/input/components/json/underline-tab.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface UnderlineTabProps {
  state?: "01" | "02";
  style?: React.CSSProperties;
  className?: string;
}

export function UnderlineTab(props: UnderlineTabProps) {
  const {
    state = "01", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    background: "#ffffff"
  };

  const variantStyle: React.CSSProperties = {
    // ...(State === "01" && {})
  };

  return (
    <div
      data-component="underline-tab"
      data-figma="12372:118366"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
    </div>
    <div>
      <div>
      </div>
    </div>
    </div>
  );
}

export default UnderlineTab;
