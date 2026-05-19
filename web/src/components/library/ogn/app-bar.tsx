// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/app-bar
// description: 앱 상단 AppBar. RightItem·Title·LeftItem·Logo on/off.
import * as React from "react";
import { .Ico } from "../.Ico";

interface AppBarBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface AppBarProps extends AppBarBaseProps {
  title?: string;
  rightitem?: "on" | "off";
  leftitem?: "on" | "off";
  logo?: "off" | "on";
}

export function AppBar(rawProps: AppBarProps = {} as AppBarProps) {
  const props = { "rightitem": "on", "leftitem": "on", "logo": "off", ...rawProps };
  return (
    <div data-component="ogn/app-bar" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "10px", paddingRight: "20px", paddingBottom: "10px", paddingLeft: "20px", width: "100%" }, ...rawProps.style }}>
      <div data-id="title" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", width: "auto" }}>
        <div data-id="btn" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", paddingTop: "2px", paddingRight: "2px", paddingBottom: "2px", paddingLeft: "2px", width: "auto" }}>
          <.Ico data-id="-ico" />
        </div>
        <span data-id="title">{props["title"] ?? "결제하기"}</span>
      </div>
      <div data-id="rightitem" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "12px", width: "auto" }}>
        <div data-id="btn" style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "2px", paddingRight: "2px", paddingBottom: "2px", paddingLeft: "2px", width: "auto" }}>
          <.Ico data-id="-ico" />
        </div>
        <div data-id="btn" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", paddingTop: "2px", paddingRight: "2px", paddingBottom: "2px", paddingLeft: "2px", width: "auto" }}>
          <.Ico data-id="-ico" />
        </div>
      </div>
    </div>
  );
}

export default AppBar;
