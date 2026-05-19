// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/title-main
// description: 메인 타이틀 섹션. Type(Complete/Search).
import * as React from "react";
import { .ChipImageItem } from "../.ChipImageItem";

interface TitleMainBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface TitleMainProps extends TitleMainBaseProps {
  "----s29---sm-s942nv"?: string;
  "---------------------"?: string;
  "----------------------"?: string;
  "2026-05-06"?: string;
  type?: "complete" | "search";
}

export function TitleMain(rawProps: TitleMainProps = {} as TitleMainProps) {
  const props = { "type": "complete", ...rawProps };
  return (
    <div data-component="mol/title-main" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "32px", width: "100%" }, ...rawProps.style }}>
      <div data-id="titletext" style={{ display: "flex", flexDirection: "column", gap: "4px", width: "auto" }}>
        <div data-id="titlesubtext" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", width: "auto" }}>
          <.ChipImageItem data-id="-chipimageitem" />
          <span data-id="----s29---sm-s942nv">{props["----s29---sm-s942nv"] ?? "갤럭시 S29 ∙ SM-S942NV"}</span>
        </div>
        <span data-id="---------------------">{props["---------------------"] ?? "축하드려요 은진님, 개통이 완료되었어요"}</span>
      </div>
      <div data-id="subtext" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
        <span data-id="----------------------">{props["----------------------"] ?? "지금부터 새로운 휴대폰 사용이 가능해요."}</span>
        <div data-id="div" style={{ background: "#060c1f" }}>

        </div>
        <span data-id="2026-05-06">{props["2026-05-06"] ?? "2026.05.06"}</span>
      </div>
    </div>
  );
}

export default TitleMain;
