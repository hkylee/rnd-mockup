// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/card-section
// description: 카드 섹션 컨테이너. Type(Medium/Large).
import * as React from "react";
import { .CardSectionTitle } from "../.CardSectionTitle";
import { LocalCardContents } from "../Local_CardContents";

interface CardSectionBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface CardSectionProps extends CardSectionBaseProps {
  type?: "medium" | "large";
}

export function CardSection(rawProps: CardSectionProps = {} as CardSectionProps) {
  const props = { "type": "medium", ...rawProps };
  return (
    <div data-component="ogn/card-section" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "4px", width: "auto" }, ...rawProps.style }}>
      <div data-id="card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "24px", paddingTop: "28px", paddingRight: "28px", paddingBottom: "28px", paddingLeft: "28px", width: "auto", borderRadius: "24px", background: "var(--component-radio-default-dotcolor)", border: (("var(--component-radio-default-dotcolor)") ? "1px solid " + ("var(--component-radio-default-dotcolor)") : "none") }}>
        <.CardSectionTitle data-id="-cardsectiontitle" />
        <LocalCardContents data-id="local_cardcontents" />
      </div>
    </div>
  );
}

export default CardSection;
