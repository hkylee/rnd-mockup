// AUTO-GENERATED — accordion-notice-info.json 기반. 직접 수정 금지.
// source: docs/input/components/json/accordion-notice-info.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface AccordionNoticeInfoProps {
  state?: "Close" | "Open";
  style?: React.CSSProperties;
  className?: string;
}

export function AccordionNoticeInfo(props: AccordionNoticeInfoProps) {
  const {
    state = "Close", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "20.0px 0px 20.0px 0px",
    alignItems: "center"
  };

  const variantStyle: React.CSSProperties = {
    // ...(State === "Close" && {})
  };

  return (
    <div
      data-component="accordion-notice-info"
      data-figma="12372:119115"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      <div>
      </div>
      {/* TODO: .Ico */}
    </div>
    </div>
  );
}

export default AccordionNoticeInfo;
