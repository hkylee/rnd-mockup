// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: mol/card-contents-line
// description: 카드 콘텐츠 라인형.
import * as React from "react";


interface CardContentsLineBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface CardContentsLineProps extends CardContentsLineBaseProps {}

export function CardContentsLine(rawProps: CardContentsLineProps = {} as CardContentsLineProps) {
  const props = rawProps;
  return (
    <div data-component="mol/card-contents-line" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "24px", paddingRight: "24px", paddingBottom: "24px", paddingLeft: "24px", width: "auto", borderRadius: "20px", background: "var(--component-radio-default-dotcolor)", border: (("var(--component-progress-small-track)") ? "1px solid " + ("var(--component-progress-small-track)") : "none") }, ...rawProps.style }}>
      <div data-id="divider" style={{ background: "var(--component-progress-small-track)" }}>

      </div>
    </div>
  );
}

export default CardContentsLine;
