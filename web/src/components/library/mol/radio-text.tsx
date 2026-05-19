// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/radio-text
// description: 라디오+텍스트 행. Checked × Disabled.
import * as React from "react";
import { .RadioItem } from "../.RadioItem";

interface RadioTextBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface RadioTextProps extends RadioTextBaseProps {
  text?: string;
  checked?: "on" | "off";
  disabled?: "off" | "on";
}

export function RadioText(rawProps: RadioTextProps = {} as RadioTextProps) {
  const props = { "checked": "on", "disabled": "off", ...rawProps };
  return (
    <div data-component="mol/radio-text" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", gap: "8px", width: "auto" }, ...rawProps.style }}>
      <.RadioItem data-id="-radioitem" />
      <span data-id="text">{props["text"] ?? "텍스트"}</span>
    </div>
  );
}

export default RadioText;
