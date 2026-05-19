// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/banner-horizontal
// description: 가로형 미디엄 배너.
import * as React from "react";
import { .Indicator } from "../.Indicator";

interface BannerHorizontalBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface BannerHorizontalProps extends BannerHorizontalBaseProps {
  title?: string;
  subtitle?: string;
}

export function BannerHorizontal(rawProps: BannerHorizontalProps = {} as BannerHorizontalProps) {
  const props = rawProps;
  return (
    <div data-component="mol/banner-horizontal" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", paddingBottom: "4px", width: "auto" }, ...rawProps.style }}>
      <div data-id="banner" style={{ borderRadius: "24px", background: "#fdfdfe", border: (("var(--component-radio-default-dotcolor)") ? "1px solid " + ("var(--component-radio-default-dotcolor)") : "none") }}>
        <div data-id="image">

        </div>
        <div data-id="textarea" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "4px", width: "auto" }}>
          <span data-id="title">{props["title"] ?? "신혼부부 프랜차이즈 무조건 할인"}</span>
          <span data-id="subtitle">{props["subtitle"] ?? "기다림은 짧게, 혜택은 특별하게"}</span>
        </div>
      </div>
      <.Indicator data-id="-indicator" />
    </div>
  );
}

export default BannerHorizontal;
