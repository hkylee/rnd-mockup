// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/text-field
// description: 텍스트필드. States(Default/Focused/Typing/Typed/Disabled) × Error.
import * as React from "react";
import { Label } from "../Label";
import { TextFieldDefault } from "../TextFieldDefault";

interface TextFieldBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface TextFieldProps extends TextFieldBaseProps {
  "help-text"?: string;
  states?: "default" | "disabled" | "focused" | "typed" | "typing";
  error?: "on" | "off";
}

export function TextField(rawProps: TextFieldProps = {} as TextFieldProps) {
  const props = { "states": "default", "error": "on", ...rawProps };
  return (
    <div data-component="ogn/text-field" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", paddingBottom: "8px", width: "auto" }, ...rawProps.style }}>
      <Label data-id="label" />
      <TextFieldDefault data-id="textfielddefault" />
      <div data-id="help-text" style={{ display: "flex", flexDirection: "column", gap: "10px", width: "auto" }}>
        <span data-id="help-text">{props["help-text"] ?? "Help Text"}</span>
      </div>
    </div>
  );
}

export default TextField;
