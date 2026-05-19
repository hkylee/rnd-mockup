"use client";
// AUTO-GENERATED — atom/radio
import * as React from "react";

export interface RadioProps {
  /** 선택 여부 */
  checked?: boolean;
  /** 비활성화 */
  disabled?: boolean;
  /** 변경 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 오른쪽 라벨 */
  label?: React.ReactNode;
  /** 그룹 공유 name (input type=radio 시 사용) */
  name?: string;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function Radio({
  checked = false,
  disabled = false,
  onChange,
  label,
  name,
  value,
  className,
  style,
  "data-id": dataId,
}: RadioProps) {
  const toggle = () => { if (!disabled) onChange?.(!checked); };

  return (
    <label
      data-component="atom/radio"
      data-id={dataId}
      style={style}
      className={[
        "inline-flex items-center gap-2.5 select-none",
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
        className,
      ].filter(Boolean).join(" ")}
    >
      <span
        role="radio"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
        style={{
          width: 20, height: 20,
          borderRadius: "50%",
          border: `2px solid ${checked ? "var(--semantic-color-brand-primary)" : "var(--semantic-color-border-default)"}`,
          background: "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          transition: "border-color 0.15s",
          boxSizing: "border-box",
        }}
      >
        {checked && (
          <span style={{
            width: 10, height: 10,
            borderRadius: "50%",
            background: "var(--semantic-color-brand-primary)",
            transition: "transform 0.15s",
          }} />
        )}
      </span>
      {label !== undefined && (
        <span style={{ fontSize: 15, lineHeight: 1.4, color: "var(--semantic-color-text-primary)" }}>{label}</span>
      )}
    </label>
  );
}

export default Radio;
