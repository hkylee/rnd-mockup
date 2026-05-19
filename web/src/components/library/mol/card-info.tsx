// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/card-info
// description: 카드 정보 패널. Type(Brand/Place).
import * as React from "react";
import { .CardText } from "../.CardText";
import { .ThumbnailLogoItem } from "../.ThumbnailLogoItem";

interface CardInfoBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface CardInfoProps extends CardInfoBaseProps {
  type?: "brand" | "place";
}

export function CardInfo(rawProps: CardInfoProps = {} as CardInfoProps) {
  const props = { "type": "brand", ...rawProps };
  return (
    <div data-component="mol/card-info" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "8px", width: "auto" }, ...rawProps.style }}>
      <div data-id="frame-2147248009" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "236px", paddingTop: "24px", paddingRight: "24px", paddingBottom: "24px", paddingLeft: "24px", width: "auto", borderRadius: "20px", background: "#f4f5fa" }}>
        <.CardText data-id="-cardtext" />
        <.ThumbnailLogoItem data-id="-thumbnaillogoitem" />
      </div>
    </div>
  );
}

export default CardInfo;
