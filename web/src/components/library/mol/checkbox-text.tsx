// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/checkbox-text
// description: 체크박스+텍스트 행. Checked × Disabled.
import * as React from "react";
import { .CheckboxItem } from "../.CheckboxItem";

interface CheckboxTextBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface CheckboxTextProps extends CheckboxTextBaseProps {
  text?: string;
  checked?: "off" | "on";
  disabled?: "off" | "on";
}

export function CheckboxText(rawProps: CheckboxTextProps = {} as CheckboxTextProps) {
  const props = { "checked": "off", "disabled": "off", ...rawProps };
  return (
    <div data-component="mol/checkbox-text" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", gap: "8px", width: "auto" }, ...rawProps.style }}>
      <.CheckboxItem data-id="-checkboxitem" />
      <span data-id="text">{props["text"] ?? "텍스트"}</span>
    </div>
  );
}

export default CheckboxText;
