/**
 * atom-templates.mjs
 * atom 컴포넌트별 고품질 TSX 코드 생성기
 * build-components.mjs 가 import해서 사용
 */

export const ATOM_TEMPLATES = {};

function t(name, fn) { ATOM_TEMPLATES[name] = fn; }

// ──────────────────────────────────────────────────────────────
// atom/checkbox
// ──────────────────────────────────────────────────────────────
t("atom/checkbox", () => `"use client";
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
          border: \`2px solid \${isOn ? "var(--semantic-color-brand-primary)" : "var(--semantic-color-border-default)"}\`,
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
`);

// ──────────────────────────────────────────────────────────────
// atom/radio
// ──────────────────────────────────────────────────────────────
t("atom/radio", () => `"use client";
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
          border: \`2px solid \${checked ? "var(--semantic-color-brand-primary)" : "var(--semantic-color-border-default)"}\`,
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
`);

// ──────────────────────────────────────────────────────────────
// atom/btn
// ──────────────────────────────────────────────────────────────
t("atom/btn", () => `"use client";
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
`);

// ──────────────────────────────────────────────────────────────
// atom/btn-text
// ──────────────────────────────────────────────────────────────
t("atom/btn-text", () => `"use client";
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
`);

// ──────────────────────────────────────────────────────────────
// atom/btn-xsmall
// ──────────────────────────────────────────────────────────────
t("atom/btn-xsmall", () => `"use client";
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
`);

// ──────────────────────────────────────────────────────────────
// atom/badge
// ──────────────────────────────────────────────────────────────
t("atom/badge", () => `// AUTO-GENERATED — atom/badge
import * as React from "react";

export type BadgeVariant = "gray" | "blue" | "black";

export interface BadgeProps {
  label?: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

const BADGE_STYLE: Record<BadgeVariant, React.CSSProperties> = {
  gray:  { background: "var(--component-badge-neutral-background, var(--foundation-color-gray-200))", color: "var(--component-badge-neutral-text, var(--semantic-color-text-secondary))" },
  blue:  { background: "var(--component-badge-default-background, var(--semantic-color-brand-light))", color: "var(--component-badge-default-text, var(--semantic-color-brand-primary))" },
  black: { background: "var(--component-badge-emphasis-background, var(--semantic-color-brand-primary))", color: "var(--component-badge-emphasis-text, var(--semantic-color-brand-on-brand))" },
};

export function Badge({
  label = "Badge",
  variant = "gray",
  className,
  style,
  "data-id": dataId,
}: BadgeProps) {
  return (
    <span
      data-component="atom/badge"
      data-id={dataId}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        height: "var(--component-badge-default-height, 20px)",
        paddingLeft: "var(--foundation-dimension-spacing-xs, 4px)",
        paddingRight: "var(--foundation-dimension-spacing-xs, 4px)",
        borderRadius: "var(--foundation-dimension-radius-pill, 999px)",
        fontSize: 11, fontWeight: 600, lineHeight: 1,
        whiteSpace: "nowrap",
        ...BADGE_STYLE[variant],
        ...style,
      }}
      className={className}
    >
      {label}
    </span>
  );
}

export default Badge;
`);

// ──────────────────────────────────────────────────────────────
// atom/chip
// ──────────────────────────────────────────────────────────────
t("atom/chip", () => `"use client";
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
`);

// ──────────────────────────────────────────────────────────────
// atom/chip-image
// ──────────────────────────────────────────────────────────────
t("atom/chip-image", () => `"use client";
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
`);

// ──────────────────────────────────────────────────────────────
// atom/tab-item
// ──────────────────────────────────────────────────────────────
t("atom/tab-item", () => `"use client";
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
`);

// ──────────────────────────────────────────────────────────────
// atom/divider
// ──────────────────────────────────────────────────────────────
t("atom/divider", () => `// AUTO-GENERATED — atom/divider
import * as React from "react";

export type DividerType = "hairline" | "thick" | "vertical";

export interface DividerProps {
  type?: DividerType;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function Divider({
  type = "hairline",
  className,
  style,
  "data-id": dataId,
}: DividerProps) {
  if (type === "vertical") {
    return (
      <span
        data-component="atom/divider"
        data-id={dataId}
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "var(--foundation-dimension-size-divider-weight-hairline, 1px)",
          alignSelf: "stretch",
          background: "var(--semantic-color-divider-hairline)",
          flexShrink: 0,
          ...style,
        }}
        className={className}
      />
    );
  }

  return (
    <hr
      data-component="atom/divider"
      data-id={dataId}
      aria-hidden="true"
      style={{
        margin: 0, padding: 0, border: "none",
        width: "100%",
        height: type === "thick"
          ? "var(--foundation-dimension-size-divider-weight-thick, 8px)"
          : "var(--foundation-dimension-size-divider-weight-hairline, 1px)",
        background: type === "thick"
          ? "var(--semantic-color-surface-secondary)"
          : "var(--semantic-color-divider-hairline)",
        flexShrink: 0,
        ...style,
      }}
      className={className}
    />
  );
}

export default Divider;
`);

// ──────────────────────────────────────────────────────────────
// atom/icon
// ──────────────────────────────────────────────────────────────
t("atom/icon", () => `// AUTO-GENERATED — atom/icon
import * as React from "react";

export type IconSize = "sm" | "md" | "lg" | "xl";

export interface IconProps {
  /** SVG 아이콘 (React 컴포넌트 또는 raw SVG string) */
  children?: React.ReactNode;
  size?: IconSize;
  /** 컨테이너 배경 (container 스타일 사용 시) */
  container?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

const SIZE_PX: Record<IconSize, string> = {
  sm: "var(--foundation-dimension-size-icon-sm, 16px)",
  md: "var(--foundation-dimension-size-icon-md, 20px)",
  lg: "var(--foundation-dimension-size-icon-lg, 24px)",
  xl: "var(--foundation-dimension-size-icon-xl, 32px)",
};

export function Icon({
  children,
  size = "md",
  container = false,
  className,
  style,
  "data-id": dataId,
}: IconProps) {
  const dim = SIZE_PX[size];

  if (container) {
    return (
      <span
        data-component="atom/icon"
        data-id={dataId}
        aria-hidden="true"
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: "var(--foundation-dimension-size-icon-container, 40px)",
          height: "var(--foundation-dimension-size-icon-container, 40px)",
          borderRadius: "var(--foundation-dimension-radius-pill, 999px)",
          background: "var(--semantic-color-icon-container-brand)",
          color: "var(--semantic-color-icon-on-brand)",
          flexShrink: 0,
          ...style,
        }}
        className={className}
      >
        <span style={{ width: dim, height: dim, display: "flex" }}>{children}</span>
      </span>
    );
  }

  return (
    <span
      data-component="atom/icon"
      data-id={dataId}
      aria-hidden="true"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: dim, height: dim, flexShrink: 0,
        ...style,
      }}
      className={className}
    >
      {children}
    </span>
  );
}

export default Icon;
`);

// ──────────────────────────────────────────────────────────────
// atom/pin
// ──────────────────────────────────────────────────────────────
t("atom/pin", () => `// AUTO-GENERATED — atom/pin
import * as React from "react";

export interface PinProps {
  /** 채워진 자리 수 (0–6) */
  filled?: number;
  /** 전체 자리 수 */
  total?: number;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

export function Pin({
  filled = 0,
  total = 6,
  className,
  style,
  "data-id": dataId,
}: PinProps) {
  return (
    <div
      data-component="atom/pin"
      data-id={dataId}
      style={{ display: "flex", alignItems: "center", gap: 12, ...style }}
      className={className}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 12, height: 12,
            borderRadius: "50%",
            background: i < filled
              ? "var(--semantic-color-brand-primary)"
              : "var(--semantic-color-border-default)",
            transition: "background 0.15s",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

export default Pin;
`);

// ──────────────────────────────────────────────────────────────
// atom/payment-logo
// ──────────────────────────────────────────────────────────────
t("atom/payment-logo", () => `// AUTO-GENERATED — atom/payment-logo
import * as React from "react";

export type PaymentLogoType =
  | "visa" | "mastercard" | "amex" | "kakao" | "naver"
  | "toss" | "payco" | "samsung" | "default";

export interface PaymentLogoProps {
  type?: PaymentLogoType;
  /** 커스텀 로고 (img src 또는 ReactNode) */
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  "data-id"?: string;
}

const LOGO_LABEL: Record<PaymentLogoType, string> = {
  visa: "VISA", mastercard: "MC", amex: "AMEX",
  kakao: "카카오", naver: "네이버", toss: "토스",
  payco: "PAYCO", samsung: "삼성", default: "PAY",
};

export function PaymentLogo({
  type = "default",
  src,
  alt,
  className,
  style,
  "data-id": dataId,
}: PaymentLogoProps) {
  return (
    <span
      data-component="atom/payment-logo"
      data-id={dataId}
      title={alt ?? LOGO_LABEL[type]}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 48, height: 30,
        borderRadius: "var(--foundation-dimension-radius-xs, 4px)",
        border: "1px solid var(--semantic-color-border-default)",
        background: "var(--semantic-color-surface-primary)",
        overflow: "hidden",
        flexShrink: 0,
        ...style,
      }}
      className={className}
    >
      {src
        ? <img src={src} alt={alt ?? LOGO_LABEL[type]} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        : <span style={{ fontSize: 10, fontWeight: 700, color: "var(--semantic-color-text-secondary)", letterSpacing: "-0.02em" }}>{LOGO_LABEL[type]}</span>
      }
    </span>
  );
}

export default PaymentLogo;
`);
