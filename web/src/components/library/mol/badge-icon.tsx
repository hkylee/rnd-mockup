// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/badge-icon
// description: 아이콘+뱃지 조합. Subtext On/Off.
import * as React from "react";
import { .Ico } from "../.Ico";

interface BadgeIconBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface BadgeIconProps extends BadgeIconBaseProps {
  "-text-"?: string;
  subtext?: "off" | "on";
}

export function BadgeIcon(rawProps: BadgeIconProps = {} as BadgeIconProps) {
  const props = { "subtext": "off", ...rawProps };
  return (
    <div data-component="mol/badge-icon" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", paddingTop: "6px", paddingRight: "10px", paddingBottom: "6px", paddingLeft: "8px", width: "auto", borderRadius: "10px", background: "var(--component-radio-default-dotcolor)" }, ...rawProps.style }}>
      <div data-id="main" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", width: "auto" }}>
        <.Ico data-id="-ico" />
        <span data-id="-text-">{props["-text-"] ?? "{Text}"}</span>
      </div>
    </div>
  );
}

export default BadgeIcon;
