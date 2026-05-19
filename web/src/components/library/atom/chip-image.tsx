"use client";
// AUTO-GENERATED — atom/chip-image
import * as React from "react";

export interface ChipImageProps {
  label?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  /** 왼쪽 이미지 URL */
  imgSrc?: string;
  /** 이미지 대체 텍스트 */
  imgAlt?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function ChipImage({
  label = "칩",
  selected = false,
  disabled = false,
  imgSrc,
  imgAlt = "",
  onClick,
  className,
  style,
  "data-id": dataId,
}: ChipImageProps) {
  return (
    <button
      data-component="atom/chip-image"
      data-id={dataId}
      type="button"
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      aria-pressed={selected}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        height: "var(--foundation-dimension-size-chip, 34px)",
        paddingLeft: 6,
        paddingRight: "var(--foundation-dimension-spacing-md, 12px)",
        borderRadius: "var(--foundation-dimension-radius-pill, 999px)",
        border: selected ? "none" : "1px solid var(--semantic-color-border-default)",
        background: selected
          ? "var(--semantic-color-chip-selected-bg, var(--semantic-color-brand-primary))"
          : "var(--semantic-color-surface-primary)",
        color: selected ? "var(--semantic-color-brand-on-brand)" : "var(--semantic-color-text-secondary)",
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
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: 22, height: 22, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
        />
      )}
      {label}
    </button>
  );
}

export default ChipImage;
