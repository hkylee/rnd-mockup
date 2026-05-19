"use client";
// AUTO-GENERATED — atom/btn
import * as React from "react";

export type BtnSize = "small" | "medium" | "large" | "xlarge";
export type BtnVariant = "primary" | "secondary" | "disabled";

export interface BtnProps {
  /** 버튼 라벨 */
  label?: React.ReactNode;
  /** 크기 */
  size?: BtnSize;
  /** 스타일 유형 */
  variant?: BtnVariant;
  /** 비활성화 (variant="disabled" 와 동일 효과) */
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** 왼쪽 슬롯 (아이콘 등) */
  leftItem?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

const SIZE_STYLE: Record<BtnSize, React.CSSProperties> = {
  small:  { height: "var(--foundation-dimension-size-button-sm)", paddingLeft: "var(--foundation-dimension-spacing-md)", paddingRight: "var(--foundation-dimension-spacing-md)", fontSize: 13 },
  medium: { height: "var(--foundation-dimension-size-button-md)", paddingLeft: "var(--foundation-dimension-spacing-lg)", paddingRight: "var(--foundation-dimension-spacing-lg)", fontSize: 14 },
  large:  { height: "var(--foundation-dimension-size-button-lg)", paddingLeft: "var(--foundation-dimension-spacing-2xl)", paddingRight: "var(--foundation-dimension-spacing-2xl)", fontSize: 15 },
  xlarge: { height: "var(--foundation-dimension-size-button-lg)", paddingLeft: "var(--foundation-dimension-spacing-3xl)", paddingRight: "var(--foundation-dimension-spacing-3xl)", fontSize: 16 },
};

const VARIANT_STYLE: Record<BtnVariant, React.CSSProperties> = {
  primary:   { background: "var(--semantic-color-brand-primary)", color: "var(--semantic-color-brand-on-brand)", border: "none" },
  secondary: { background: "var(--semantic-color-surface-primary)", color: "var(--semantic-color-text-primary)", border: "1px solid var(--semantic-color-border-default)" },
  disabled:  { background: "var(--semantic-color-state-disabled-bg)", color: "var(--semantic-color-state-disabled-text)", border: "none", cursor: "not-allowed" },
};

export function Btn({
  label = "버튼",
  size = "large",
  variant = "primary",
  disabled = false,
  onClick,
  leftItem,
  type = "button",
  className,
  style,
  "data-id": dataId,
}: BtnProps) {
  const isDisabled = disabled || variant === "disabled";

  return (
    <button
      data-component="atom/btn"
      data-id={dataId}
      type={type}
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderRadius: "var(--foundation-dimension-radius-button)",
        fontWeight: 600,
        cursor: isDisabled ? "not-allowed" : "pointer",
        transition: "background 0.15s, opacity 0.15s",
        whiteSpace: "nowrap",
        userSelect: "none",
        outline: "none",
        ...SIZE_STYLE[size],
        ...VARIANT_STYLE[isDisabled ? "disabled" : variant],
        ...style,
      }}
      className={className}
    >
      {leftItem && <span style={{ display: "flex", alignItems: "center" }}>{leftItem}</span>}
      {label}
    </button>
  );
}

export default Btn;
