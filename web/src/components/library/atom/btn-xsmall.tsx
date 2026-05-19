"use client";
// AUTO-GENERATED — atom/btn-xsmall
import * as React from "react";

export interface BtnXsmallProps {
  label?: React.ReactNode;
  /** default | active | disabled */
  state?: "default" | "active" | "disabled";
  disabled?: boolean;
  /** 왼쪽 아이콘 슬롯 */
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function BtnXsmall({
  label = "버튼",
  state = "default",
  disabled = false,
  icon,
  onClick,
  className,
  style,
  "data-id": dataId,
}: BtnXsmallProps) {
  const isDisabled = disabled || state === "disabled";

  return (
    <button
      data-component="atom/btn-xsmall"
      data-id={dataId}
      type="button"
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        height: "var(--foundation-dimension-size-button-xs)",
        paddingLeft: "var(--foundation-dimension-spacing-sm)",
        paddingRight: "var(--foundation-dimension-spacing-sm)",
        borderRadius: "var(--foundation-dimension-radius-pill)",
        background: isDisabled
          ? "var(--semantic-color-state-disabled-bg)"
          : state === "active"
          ? "var(--semantic-color-brand-primary)"
          : "var(--semantic-color-surface-primary)",
        border: state === "active" || isDisabled ? "none" : "1px solid var(--semantic-color-border-default)",
        color: isDisabled
          ? "var(--semantic-color-state-disabled-text)"
          : state === "active"
          ? "var(--semantic-color-brand-on-brand)"
          : "var(--semantic-color-text-primary)",
        fontSize: 12, fontWeight: 500,
        cursor: isDisabled ? "not-allowed" : "pointer",
        transition: "background 0.15s",
        userSelect: "none",
        outline: "none",
        whiteSpace: "nowrap",
        ...style,
      }}
      className={className}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      {label}
    </button>
  );
}

export default BtnXsmall;
