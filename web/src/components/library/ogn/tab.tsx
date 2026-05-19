// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/tab
// description: 언더라인 탭 바. State(01/02).
import * as React from "react";


interface TabBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface TabProps extends TabBaseProps {
  "-----"?: string;
  "-----"?: string;
  state?: "01" | "02";
}

export function Tab(rawProps: TabProps = {} as TabProps) {
  const props = { "state": "01", ...rawProps };
  return (
    <div data-component="ogn/tab" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", width: "100%" }, ...rawProps.style }}>
      <div data-id="button-01" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px", paddingTop: "24px", paddingLeft: "12px", width: "auto" }}>
        <div data-id="text" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: "12px", width: "auto" }}>
          <span data-id="-----">{props["-----"] ?? "상품 정보"}</span>
        </div>
      </div>
      <div data-id="button-01" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "4px", paddingTop: "24px", paddingRight: "12px", width: "auto" }}>
        <div data-id="text" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: "12px", width: "auto" }}>
          <span data-id="-----">{props["-----"] ?? "사용 방법"}</span>
        </div>
      </div>
    </div>
  );
}

export default Tab;
