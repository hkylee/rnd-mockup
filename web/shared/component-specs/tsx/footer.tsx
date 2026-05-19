// AUTO-GENERATED — footer.json 기반. 직접 수정 금지.
// source: docs/input/components/json/footer.json
// generated at: 2026-05-19T06:43:07Z

import * as React from "react";

interface FooterProps {
  type?: "01" | "02";
  copyright-sk-planet-all-rights-reserved?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function Footer(props: FooterProps) {
  const {
    type = "01", copyright-sk-planet-all-rights-reserved, style, className
  } = props;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 30.0,
    padding: "32.0px 32.0px 120.0px 32.0px",
    width: "100%",
    background: "#f4f5fa"
  };

  const variantStyle: React.CSSProperties = {
    // ...(Type === "01" && {})
  };

  return (
    <div
      data-component="footer"
      data-figma="12391:23799"
      style={{ ...baseStyle, ...variantStyle, ...style }}
      className={className}
    >
    <div>
      {props.이용약관 ?? "이용약관"}
      {props.전자금융거래래-이용약관 ?? "전자금융거래래 이용약관"}
      {props.개인정보처리방침 ?? "개인정보처리방침"}
    </div>
    <div>
      <div>
        {props.사업자-sk플래닛주 ?? "사업자: SK플래닛(주)"}
        {props.대표-유재욱 ?? "대표 : 유재욱"}
      </div>
      <div>
        {props.사업자등록번호-815-81-01244 ?? "사업자등록번호 : 815-81-01244"}
      </div>
      <div>
        {props.경기도-성남시-분당구-판교로-264삼평동 ?? "경기도 성남시 분당구 판교로 264(삼평동)"}
      </div>
      <div>
        {props.통신판매매업신고-2014-경기성남-0036 ?? "통신판매매업신고 : 2014-경기성남-0036"}
      </div>
      <div>
        {props.전화-1800-0133 ?? "전화 : 1800-0133"}
      </div>
      <div>
        {props.gifticonskplanetcom ?? "gifticon@skplanet.com"}
      </div>
    </div>
    {props.copyright-sk-planet-all-rights-reserved ?? "Copyright ©️ SK Planet All Rights Reserved"}
    </div>
  );
}

export default Footer;
