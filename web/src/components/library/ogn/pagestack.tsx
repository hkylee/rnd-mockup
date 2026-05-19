// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/pagestack
// description: 페이지스택 탐색 컴포넌트.
import * as React from "react";
import { TitleSection } from "../TitleSection";

interface PagestackBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface PagestackProps extends PagestackBaseProps {}

export function Pagestack(rawProps: PagestackProps = {} as PagestackProps) {
  const props = rawProps;
  return (
    <div data-component="ogn/pagestack" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", paddingTop: "28px", paddingRight: "12px", paddingBottom: "28px", paddingLeft: "12px", width: "100%" }, ...rawProps.style }}>
      <div data-id="contentstitle" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", paddingRight: "20px", paddingLeft: "20px", width: "auto" }}>
        <TitleSection data-id="titlesection" />
      </div>
    </div>
  );
}

export default Pagestack;
