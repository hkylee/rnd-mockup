// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/status-bar
// description: 시스템 StatusBar.
import * as React from "react";
import { StatusBarTime } from "../_StatusBar-time";

interface StatusBarBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface StatusBarProps extends StatusBarBaseProps {
  state?: "default";
}

export function StatusBar(rawProps: StatusBarProps = {} as StatusBarProps) {
  const props = { "state": "default", ...rawProps };
  return (
    <div data-component="ogn/status-bar" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "221px", paddingTop: "20px", paddingRight: "24px", paddingBottom: "18px", paddingLeft: "24px", width: "100%" }, ...rawProps.style }}>
      <div data-id="left-side" style={{ borderRadius: "24px" }}>
        <StatusBarTime data-id="_statusbar-time" />
      </div>
      <div data-id="notch">

      </div>
      <div data-id="right-side">
        <div data-id="battery">

        </div>
      </div>
    </div>
  );
}

export default StatusBar;
