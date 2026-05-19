// AUTO-GENERATED — atom/divider
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
