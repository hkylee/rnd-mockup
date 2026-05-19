// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/info-text-list
// description: 정보 텍스트 목록. 뱃지·우측 텍스트 on/off.
import * as React from "react";
import { .Badge } from "../.Badge";

interface InfoTextListBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface InfoTextListProps extends InfoTextListBaseProps {
  "--------------------"?: string;
  "-----"?: string;
  "2026-01-30"?: string;
  righttext?: "on" | "off";
}

export function InfoTextList(rawProps: InfoTextListProps = {} as InfoTextListProps) {
  const props = { "righttext": "on", ...rawProps };
  return (
    <div data-component="mol/info-text-list" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "4px", paddingTop: "16px", paddingBottom: "16px", width: "auto" }, ...rawProps.style }}>
      <div data-id="txt" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "40px", width: "auto" }}>
        <span data-id="--------------------">{props["--------------------"] ?? "일이삼사오육칠팔구십일이삼사오육칠팔구십"}</span>
        <.Badge data-id="-badge" />
      </div>
      <div data-id="txt_sub" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
        <span data-id="-----">{props["-----"] ?? "{텍스트}"}</span>
        <div data-id="div" style={{ background: "#060c1f" }}>

        </div>
        <span data-id="2026-01-30">{props["2026-01-30"] ?? "2026.01.30"}</span>
      </div>
    </div>
  );
}

export default InfoTextList;
