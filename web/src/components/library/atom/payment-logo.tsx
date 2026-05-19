// AUTO-GENERATED — atom/payment-logo
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
