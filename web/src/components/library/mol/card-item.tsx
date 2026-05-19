// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/card-item
// description: 카드 콘텐츠 아이템. Type(List/Barcode/ai).
import * as React from "react";
import { .ThumbnailItem } from "../.ThumbnailItem";
import { .Button } from "../.Button";

interface CardItemBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface CardItemProps extends CardItemBaseProps {
  "--------"?: string;
  type?: "list" | "barcode" | "ai";
}

export function CardItem(rawProps: CardItemProps = {} as CardItemProps) {
  const props = { "type": "list", ...rawProps };
  return (
    <div data-component="mol/card-item" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "14px", width: "auto" }, ...rawProps.style }}>
      <div data-id="info" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "14px", width: "auto" }}>
        <.ThumbnailItem data-id="-thumbnailitem" />
        <div data-id="text" style={{ display: "flex", flexDirection: "column", width: "auto" }}>
          <span data-id="--------">{props["--------"] ?? "왕과 사는 남자"}</span>
        </div>
      </div>
      <.Button data-id="-button" />
    </div>
  );
}

export default CardItem;
