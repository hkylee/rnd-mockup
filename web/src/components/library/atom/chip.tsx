"use client";
// AUTO-GENERATED — atom/chip
import * as React from "react";

export interface ChipProps {
  label?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function Chip({
  label = "칩",
  selected = false,
  disabled = false,
  onClick,
  className,
  style,
  "data-id": dataId,
}: ChipProps) {
  return (
    <button
      data-component="atom/chip"
      data-id={dataId}
      type="button"
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      aria-pressed={selected}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        height: "var(--foundation-dimension-size-chip, 34px)",
        paddingLeft: "var(--foundation-dimension-spacing-md, 12px)",
        paddingRight: "var(--foundation-dimension-spacing-md, 12px)",
        borderRadius: "var(--foundation-dimension-radius-pill, 999px)",
        border: selected ? "none" : "1px solid var(--semantic-color-border-default)",
        background: selected
          ? "var(--semantic-color-chip-selected-bg, var(--semantic-color-brand-primary))"
          : "var(--semantic-color-surface-primary)",
        color: selected
          ? "var(--semantic-color-brand-on-brand)"
          : "var(--semantic-color-text-secondary)",
        fontSize: 13, fontWeight: 500,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "background 0.15s, color 0.15s",
        userSelect: "none",
        outline: "none",
        whiteSpace: "nowrap",
        ...style,
      }}
      className={className}
    >
      {label}
    </button>
  );
}

export default Chip;
