// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/thumb-item
// description: 썸네일 아이템. Size(40/64/160/182/Movie).
import * as React from "react";


interface ThumbItemBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface ThumbItemProps extends ThumbItemBaseProps {
  size?: "64" | "160" | "182" | "40" | "movie";
}

export function ThumbItem(rawProps: ThumbItemProps = {} as ThumbItemProps) {
  const props = { "size": "64", ...rawProps };
  return (
    <div data-component="mol/thumb-item" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "auto", borderRadius: "8px" }, ...rawProps.style }}>
      <div data-id="logo_--">

      </div>
    </div>
  );
}

export default ThumbItem;
