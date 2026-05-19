// AUTO-GENERATED — atom/icon
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
