// AUTO-GENERATED — 수정 금지 (npm run build:components)
// spec: ogn/footer
// description: 서비스 푸터. Type(01/02).
import * as React from "react";


interface FooterBaseProps {
  style?: React.CSSProperties;
  ["data-id"]?: string;
}
interface FooterProps extends FooterBaseProps {
  "----"?: string;
  "------------"?: string;
  "--------"?: string;
  "-----sk------"?: string;
  "--------"?: string;
  "----------815-81-01244"?: string;
  "----------------264-----"?: string;
  "-----------2014------0036"?: string;
  "-----1800-0133"?: string;
  "gifticon-skplanet-com"?: string;
  "copyright----sk-planet-all-rig"?: string;
  type?: "01" | "02";
}

export function Footer(rawProps: FooterProps = {} as FooterProps) {
  const props = { "type": "01", ...rawProps };
  return (
    <div data-component="ogn/footer" data-id={rawProps["data-id"]} style={{ ...{ display: "flex", flexDirection: "column", gap: "30px", paddingTop: "32px", paddingRight: "32px", paddingBottom: "120px", paddingLeft: "32px", width: "100%", background: "#f4f5fa" }, ...rawProps.style }}>
      <div data-id="buttontextgroup" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
        <span data-id="----">{props["----"] ?? "이용약관"}</span>
        <div data-id="rectangle-1954131102" style={{ background: "#060c1f" }}>

        </div>
        <span data-id="------------">{props["------------"] ?? "전자금융거래래 이용약관"}</span>
        <div data-id="rectangle-1954131103" style={{ background: "#060c1f" }}>

        </div>
        <span data-id="--------">{props["--------"] ?? "개인정보처리방침"}</span>
      </div>
      <div data-id="infogroup" style={{ display: "flex", flexDirection: "column", gap: "4px", width: "auto" }}>
        <div data-id="frame-2147247976" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
          <span data-id="-----sk------">{props["-----sk------"] ?? "사업자: SK플래닛(주)"}</span>
          <span data-id="--------">{props["--------"] ?? "대표 : 유재욱"}</span>
        </div>
        <div data-id="frame-2147247977" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
          <span data-id="----------815-81-01244">{props["----------815-81-01244"] ?? "사업자등록번호 : 815-81-01244"}</span>
        </div>
        <div data-id="frame-2147247978" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
          <span data-id="----------------264-----">{props["----------------264-----"] ?? "경기도 성남시 분당구 판교로 264(삼평동)"}</span>
        </div>
        <div data-id="frame-2147247979" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
          <span data-id="-----------2014------0036">{props["-----------2014------0036"] ?? "통신판매매업신고 : 2014-경기성남-0036"}</span>
        </div>
        <div data-id="frame-2147247980" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
          <span data-id="-----1800-0133">{props["-----1800-0133"] ?? "전화 : 1800-0133"}</span>
        </div>
        <div data-id="frame-2147247981" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", width: "auto" }}>
          <span data-id="gifticon-skplanet-com">{props["gifticon-skplanet-com"] ?? "gifticon@skplanet.com"}</span>
        </div>
      </div>
      <span data-id="copyright----sk-planet-all-rig">{props["copyright----sk-planet-all-rig"] ?? "Copyright ©️ SK Planet All Rig"}</span>
    </div>
  );
}

export default Footer;
