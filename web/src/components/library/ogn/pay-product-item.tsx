// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/pay-product-item
// description: 결제/장바구니 상품 목록 아이템. Type(Pay/Cart).
import * as React from "react";
import { .ThumbnailItem } from "../.ThumbnailItem";
import { .ButtonTextUnderline } from "../.ButtonTextUnderline";

interface PayProductItemBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface PayProductItemProps extends PayProductItemBaseProps {
  type?: "pay" | "cart";
}

export function PayProductItem(rawProps: PayProductItemProps = {} as PayProductItemProps) {
  const props = { "type": "pay", ...rawProps };
  return (
    <div data-component="ogn/pay-product-item" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", paddingBottom: "8px", width: "auto" }, ...rawProps.style }}>
      <div data-id="local_listitem" style={{ display: "flex", flexDirection: "row", gap: "12px", width: "auto" }}>
        <.ThumbnailItem data-id="-thumbnailitem" />
        <div data-id="text" style={{ display: "flex", flexDirection: "column", gap: "8px", width: "auto" }}>

        </div>
      </div>
      <.ButtonTextUnderline data-id="-buttontextunderline" />
    </div>
  );
}

export default PayProductItem;
