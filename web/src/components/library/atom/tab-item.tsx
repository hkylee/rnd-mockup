"use client";
// AUTO-GENERATED — atom/tab-item
import * as React from "react";

export interface TabItemProps {
  label?: React.ReactNode;
  /** default | active | disabled */
  state?: "default" | "active" | "disabled";
  /** 오른쪽 뱃지 숫자 */
  badge?: number;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function TabItem({
  label = "탭",
  state = "default",
  badge,
  disabled = false,
  onClick,
  className,
  style,
  "data-id": dataId,
}: TabItemProps) {
  const isActive = state === "active";
  const isDisabled = disabled || state === "disabled";

  return (
    <button
      data-component="atom/tab-item"
      data-id={dataId}
      type="button"
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      role="tab"
      aria-selected={isActive}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4,
        height: "var(--foundation-dimension-size-tab-height, 48px)",
        paddingLeft: "var(--foundation-dimension-spacing-md, 12px)",
        paddingRight: "var(--foundation-dimension-spacing-md, 12px)",
        position: "relative",
        background: "none", border: "none",
        borderBottom: isActive
          ? "2px solid var(--semantic-color-brand-primary)"
          : "2px solid transparent",
        color: isActive
          ? "var(--semantic-color-brand-primary)"
          : isDisabled
          ? "var(--semantic-color-state-disabled-text)"
          : "var(--semantic-color-text-secondary)",
        fontSize: 14, fontWeight: isActive ? 600 : 500,
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.4 : 1,
        transition: "color 0.15s, border-color 0.15s",
        userSelect: "none",
        outline: "none",
        whiteSpace: "nowrap",
        ...style,
      }}
      className={className}
    >
      {label}
      {badge !== undefined && badge > 0 && (
        <span style={{
          minWidth: 16, height: 16,
          borderRadius: "var(--foundation-dimension-radius-pill, 999px)",
          background: "var(--semantic-color-brand-primary)",
          color: "var(--semantic-color-brand-on-brand)",
          fontSize: 10, fontWeight: 700,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          padding: "0 4px",
        }}>
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </button>
  );
}

export default TabItem;
