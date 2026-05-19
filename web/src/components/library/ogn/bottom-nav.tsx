// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/bottom-nav
// description: 하단 내비게이션. State(My/Search/Shopping).
import * as React from "react";
import { .Ico } from "../.Ico";

interface BottomNavBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface BottomNavProps extends BottomNavBaseProps {
  my?: string;
  "--"?: string;
  "--"?: string;
  state?: "my" | "search" | "shopping";
}

export function BottomNav(rawProps: BottomNavProps = {} as BottomNavProps) {
  const props = { "state": "my", ...rawProps };
  return (
    <div data-component="ogn/bottom-nav" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "12px", paddingTop: "12px", paddingBottom: "36px", width: "100%", background: "var(--component-progress-small-track)", border: (("#f4f5fa") ? "1px solid " + ("#f4f5fa") : "none") }, ...rawProps.style }}>
      <div data-id="my" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", paddingRight: "5px", paddingLeft: "5px", width: "auto" }}>
        <.Ico data-id="-ico" />
        <span data-id="my">{props["my"] ?? "MY"}</span>
      </div>
      <div data-id="search" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", paddingRight: "5px", paddingLeft: "5px", width: "auto" }}>
        <.Ico data-id="-ico" />
        <span data-id="--">{props["--"] ?? "검색"}</span>
      </div>
      <div data-id="shopping" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", paddingRight: "5px", paddingLeft: "5px", width: "auto" }}>
        <.Ico data-id="-ico" />
        <span data-id="--">{props["--"] ?? "쇼핑"}</span>
      </div>
    </div>
  );
}

export default BottomNav;
