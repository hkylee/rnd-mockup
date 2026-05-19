// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/popup-action-btn
// description: 팝업 액션 버튼 그룹. 1Button/2Buttons.
import * as React from "react";
import { .Button } from "../.Button";

interface PopupActionBtnBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface PopupActionBtnProps extends PopupActionBtnBaseProps {
  options?: "2buttons" | "1button";
}

export function PopupActionBtn(rawProps: PopupActionBtnProps = {} as PopupActionBtnProps) {
  const props = { "options": "2buttons", ...rawProps };
  return (
    <div data-component="mol/popup-action-btn" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", gap: "8px", paddingTop: "12px", paddingRight: "24px", paddingLeft: "24px", width: "auto" }, ...rawProps.style }}>
      <.Button data-id="-button" />
      <.Button data-id="-button" />
    </div>
  );
}

export default PopupActionBtn;
