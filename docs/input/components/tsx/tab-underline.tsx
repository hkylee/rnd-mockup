// AUTO-GENERATED — tab-underline.json 기반. 직접 수정 금지.
// source: docs/input/components/json/tab-underline.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TabUnderlineProps {
  state?: "01" | "02";
  style?: React.CSSProperties;
  className?: string;
}

export function TabUnderline(props: TabUnderlineProps) {
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
      data-component="tab-underline"
      data-figma="12391:22104"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
        {props.상품-정보 ?? "상품 정보"}
      </div>
    </div>
    <div>
      <div>
        {props.사용-방법 ?? "사용 방법"}
      </div>
    </div>
    </div>
  );
}

export default TabUnderline;
