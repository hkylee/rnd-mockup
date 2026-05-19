// AUTO-GENERATED — atom/pin
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
