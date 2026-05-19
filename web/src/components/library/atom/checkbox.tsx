"use client";
// AUTO-GENERATED — atom/checkbox
import * as React from "react";

export interface CheckboxProps {
  /** 체크 여부 */
  checked?: boolean;
  /** 비활성화 */
  disabled?: boolean;
  /** 불확정 상태 (–) */
  indeterminate?: boolean;
  /** 변경 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 오른쪽 라벨 */
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function Checkbox({
  checked = false,
  disabled = false,
  indeterminate = false,
  onChange,
  label,
  className,
  style,
  "data-id": dataId,
}: CheckboxProps) {
  const isOn = checked || indeterminate;

  const toggle = () => { if (!disabled) onChange?.(!checked); };

  return (
    <label
      data-component="atom/checkbox"
      data-id={dataId}
      style={style}
      className={[
        "inline-flex items-center gap-2.5 select-none",
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
        className,
      ].filter(Boolean).join(" ")}
    >
      <span
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
        style={{
          width: 20, height: 20,
          borderRadius: 4,
          border: `2px solid ${isOn ? "var(--semantic-color-brand-primary)" : "var(--semantic-color-border-default)"}`,
          background: isOn ? "var(--semantic-color-brand-primary)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.15s, border-color 0.15s",
          boxSizing: "border-box",
        }}
      >
        {checked && !indeterminate && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
            <path d="M1 4.5L3.8 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {indeterminate && (
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none" aria-hidden="true">
            <line x1="1" y1="1" x2="9" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
      {label !== undefined && (
        <span style={{ fontSize: 15, lineHeight: 1.4, color: "var(--semantic-color-text-primary)" }}>{label}</span>
      )}
    </label>
  );
}

export default Checkbox;
