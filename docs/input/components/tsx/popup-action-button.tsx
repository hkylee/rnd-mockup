// AUTO-GENERATED — popup-action-button.json 기반. 직접 수정 금지.
// source: docs/input/components/json/popup-action-button.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface PopupActionButtonProps {
  options?: "2Buttons" | "1Button";
  style?: React.CSSProperties;
  className?: string;
}

export function PopupActionButton(props: PopupActionButtonProps) {
  const {
    options = "2Buttons", style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 8.0,
    padding: "12.0px 24.0px 0px 24.0px"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Options === "2Buttons" && {})
  };

  return (
    <div
      data-component="popup-action-button"
      data-figma="12372:118961"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    {/* TODO: .Button */}
    {/* TODO: .Button */}
    </div>
  );
}

export default PopupActionButton;
