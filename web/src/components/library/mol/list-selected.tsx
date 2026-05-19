// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/list-selected
// description: 선택형 목록 행. Radio/Checkbox × 서브텍스트.
import * as React from "react";
import { .RadioText } from "../.RadioText";
import { .ListSelectedRightItem } from "../.ListSelectedRightItem";

interface ListSelectedBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface ListSelectedProps extends ListSelectedBaseProps {
  subtext?: string;
  type?: "radio" | "checkbox";
}

export function ListSelected(rawProps: ListSelectedProps = {} as ListSelectedProps) {
  const props = { "type": "radio", ...rawProps };
  return (
    <div data-component="mol/list-selected" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", paddingBottom: "4px", width: "100%" }, ...rawProps.style }}>
      <.RadioText data-id="-radiotext" />
      <span data-id="subtext">{props["subtext"] ?? "-9,900원"}</span>
      <.ListSelectedRightItem data-id="-listselectedrightitem" />
    </div>
  );
}

export default ListSelected;
