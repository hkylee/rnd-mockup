// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/carousel-product-text
// description: 텍스트형 캐러셀 상품 아이템.
import * as React from "react";
import { .ProductInfoHorizontal } from "../.ProductInfoHorizontal";
import { .ThumbnailItem } from "../.ThumbnailItem";
import { .BadgeIcon } from "../.BadgeIcon";

interface CarouselProductTextBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface CarouselProductTextProps extends CarouselProductTextBaseProps {}

export function CarouselProductText(rawProps: CarouselProductTextProps = {} as CarouselProductTextProps) {
  const props = rawProps;
  return (
    <div data-component="mol/carousel-product-text" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "32px", paddingTop: "24px", paddingRight: "24px", paddingBottom: "24px", paddingLeft: "24px", width: "auto", borderRadius: "20px", background: "#f4f5fa" }, ...rawProps.style }}>
      <div data-id="title" style={{ display: "flex", flexDirection: "row", gap: "40px", width: "auto" }}>
        <.ProductInfoHorizontal data-id="-productinfohorizontal" />
        <.ThumbnailItem data-id="-thumbnailitem" />
      </div>
      <div data-id="badgeicon" style={{ display: "flex", flexDirection: "row", gap: "4px", width: "auto", borderRadius: "12px" }}>
        <.BadgeIcon data-id="-badgeicon" />
        <.BadgeIcon data-id="-badgeicon" />
        <.BadgeIcon data-id="-badgeicon" />
      </div>
    </div>
  );
}

export default CarouselProductText;
