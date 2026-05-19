"use client";
// AUTO-GENERATED — atom/btn-text
import * as React from "react";

export interface BtnTextProps {
  label?: React.ReactNode;
  /** default | active | disabled */
  state?: "default" | "active" | "disabled";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function BtnText({
  label = "텍스트",
  state = "default",
  disabled = false,
  onClick,
  className,
  style,
  "data-id": dataId,
}: BtnTextProps) {
  const isDisabled = disabled || state === "disabled";
  const color = isDisabled
    ? "var(--semantic-color-state-disabled-text)"
    : state === "active"
    ? "var(--semantic-color-brand-primary)"
    : "var(--semantic-color-text-primary)";

  return (
    <button
      data-component="atom/btn-text"
      data-id={dataId}
      type="button"
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      style={{
        display: "inline-flex", alignItems: "center",
        background: "none", border: "none", padding: 0,
        fontSize: 14, fontWeight: 500, lineHeight: 1.4,
        color,
        cursor: isDisabled ? "not-allowed" : "pointer",
        transition: "color 0.15s",
        userSelect: "none",
        outline: "none",
        ...style,
      }}
      className={className}
    >
      {label}
    </button>
  );
}

export default BtnText;
