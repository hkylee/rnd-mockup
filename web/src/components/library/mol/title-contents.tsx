// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/title-contents
// description: 섹션 제목 + 우측 버튼.
import * as React from "react";
import { .TitleContentsRightItem } from "../.TitleContentsRightItem";

interface TitleContentsBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface TitleContentsProps extends TitleContentsBaseProps {
  title?: string;
}

export function TitleContents(rawProps: TitleContentsProps = {} as TitleContentsProps) {
  const props = rawProps;
  return (
    <div data-component="mol/title-contents" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "10px", paddingBottom: "4px", width: "auto" }, ...rawProps.style }}>
      <span data-id="title">{props["title"] ?? "타이틀"}</span>
      <.TitleContentsRightItem data-id="-titlecontentsrightitem" />
    </div>
  );
}

export default TitleContents;
