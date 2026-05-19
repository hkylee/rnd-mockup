// AUTO-GENERATED — title-main.json 기반. 직접 수정 금지.
// source: docs/input/components/json/title-main.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface TitleMainProps {
  type?: "Complete" | "Search";
  style?: React.CSSProperties;
  className?: string;
}

export function TitleMain(props: TitleMainProps) {
  const {
    type = "Complete", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12.0,
    padding: "0px 0px 32.0px 0px",
    width: "100%"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "Complete" && {})
  };

  return (
    <div
      data-component="title-main"
      data-figma="12372:120371"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
      <span>축하드려요 은진님, 개통이 완료되었어요</span>
    </div>
    <div>
      <span>지금부터 새로운 휴대폰 사용이 가능해요.</span>
      {props.2026-05-06 ?? "2026.05.06"}
    </div>
    </div>
  );
}

export default TitleMain;
