// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/thumbnail
// description: 상품 썸네일. Type(Product/Brand).
import * as React from "react";
import { .Indicator } from "../.Indicator";

interface ThumbnailBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface ThumbnailProps extends ThumbnailBaseProps {
  type?: "product" | "brand";
}

export function Thumbnail(rawProps: ThumbnailProps = {} as ThumbnailProps) {
  const props = { "type": "product", ...rawProps };
  return (
    <div data-component="ogn/thumbnail" data-id={rawProps["data-id"]} style={{ ...{ background: "#f4f5fa" }, ...rawProps.style }}>
      <div data-id="imageproduct">

      </div>
      <.Indicator data-id="-indicator" />
    </div>
  );
}

export default Thumbnail;
