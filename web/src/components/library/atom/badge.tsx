// AUTO-GENERATED — atom/badge
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
