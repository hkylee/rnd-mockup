// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/accordion-notice
// description: 공지 정보 아코디언. Open/Close.
import * as React from "react";
import { .Ico } from "../.Ico";

interface AccordionNoticeBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface AccordionNoticeProps extends AccordionNoticeBaseProps {
  "q-"?: string;
  "title-text"?: string;
  state?: "close" | "open";
}

export function AccordionNotice(rawProps: AccordionNoticeProps = {} as AccordionNoticeProps) {
  const props = { "state": "close", ...rawProps };
  return (
    <div data-component="ogn/accordion-notice" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px", paddingBottom: "20px", width: "auto" }, ...rawProps.style }}>
      <div data-id="title" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "40px", width: "auto" }}>
        <div data-id="txt" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2px", width: "auto" }}>
          <span data-id="q-">{props["q-"] ?? "Q."}</span>
          <span data-id="title-text">{props["title-text"] ?? "Title Text"}</span>
        </div>
        <.Ico data-id="-ico" />
      </div>
    </div>
  );
}

export default AccordionNotice;
