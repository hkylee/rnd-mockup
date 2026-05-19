// AUTO-GENERATED — callout.json 기반. 직접 수정 금지.
// source: docs/input/components/json/callout.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface CalloutProps {
  property1?: "Default";
  style?: React.CSSProperties;
  className?: string;
}

export function Callout(props: CalloutProps) {
  const {
    property1 = "Default", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Property1 === "Default" && {})
  };

  return (
    <div
      data-component="callout"
      data-figma="12391:23794"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {props.title ?? "타이틀"}
      {props.구독-주기마다-요금이-정기-결제돼요 ?? "구독 주기마다 요금이 정기 결제돼요"}
    </div>
    </div>
  );
}

export default Callout;
