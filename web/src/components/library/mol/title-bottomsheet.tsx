// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/title-bottomsheet
// description: 바텀시트 제목 영역.
import * as React from "react";
import { .Ico } from "../.Ico";

interface TitleBottomsheetBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface TitleBottomsheetProps extends TitleBottomsheetBaseProps {
  "---"?: string;
  "---"?: string;
  "---"?: string;
}

export function TitleBottomsheet(rawProps: TitleBottomsheetProps = {} as TitleBottomsheetProps) {
  const props = rawProps;
  return (
    <div data-component="mol/title-bottomsheet" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: "8px", width: "auto" }, ...rawProps.style }}>
      <div data-id="title" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", gap: "16px", width: "auto" }}>
        <div data-id="text" style={{ display: "flex", flexDirection: "column", gap: "4px", width: "auto" }}>
          <span data-id="---">{props["---"] ?? "타이틀"}</span>
        </div>
        <.Ico data-id="-ico" />
      </div>
      <div data-id="subtext" style={{ display: "flex", flexDirection: "row", gap: "4px", paddingTop: "16px", width: "auto" }}>
        <span data-id="---">{props["---"] ?? "텍스트"}</span>
        <span data-id="---">{props["---"] ?? "텍스트"}</span>
      </div>
    </div>
  );
}

export default TitleBottomsheet;
