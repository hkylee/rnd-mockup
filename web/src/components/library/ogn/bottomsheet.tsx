// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/bottomsheet
// description: 바텀시트 컨테이너. 타이틀·콘텐츠·액션버튼 슬롯.
import * as React from "react";
import { .Handle } from "../.Handle";
import { .TitleBottomSheet } from "../.TitleBottomSheet";
import { ActionButton } from "../ActionButton";

interface BottomsheetBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface BottomsheetProps extends BottomsheetBaseProps {
  actionbutton?: "on" | "off";
}

export function Bottomsheet(rawProps: BottomsheetProps = {} as BottomsheetProps) {
  const props = { "actionbutton": "on", ...rawProps };
  return (
    <div data-component="ogn/bottomsheet" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", borderRadius: "28px", background: "var(--component-radio-default-dotcolor)" }, ...rawProps.style }}>
      <.Handle data-id="-handle" />
      <div data-id="title" style={{ display: "flex", flexDirection: "column", gap: "10px", paddingRight: "32px", paddingLeft: "32px", width: "100%" }}>
        <.TitleBottomSheet data-id="-titlebottomsheet" />
      </div>
      <ActionButton data-id="actionbutton" />
    </div>
  );
}

export default Bottomsheet;
