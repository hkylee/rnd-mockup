// AUTO-GENERATED — info-text-list.json 기반. 직접 수정 금지.
// source: docs/input/components/json/info-text-list.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface InfoTextListProps {
  righttext?: "Off" | "On";
  style?: React.CSSProperties;
  className?: string;
}

export function InfoTextList(props: InfoTextListProps) {
  const {
    righttext = "Off", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 4.0,
    padding: "16.0px 0px 16.0px 0px",
    justifyContent: "center",
    background: "#ff0000"
  };

  const variantStyle: React.CSSProperties = {
    // ...(RightText === "Off" && {})
  };

  return (
    <div
      data-component="info-text-list"
      data-figma="12372:118757"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <span>일이삼사오육칠팔구십일이삼사오육칠팔구십</span>
      {/* TODO: .Badge */}
    </div>
    <div>
      <span>{텍스트}</span>
      {props.2026-01-30 ?? "2026.01.30"}
    </div>
    </div>
  );
}

export default InfoTextList;
