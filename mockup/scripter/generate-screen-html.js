#!/usr/bin/env node
// =============================================
// SKT Genui — Screen HTML Generator
// SB JSON → 폰 화면 와이어프레임 HTML (375px)
//
// Usage:
//   node scripter/generate-screen-html.js scripter/sb/BIL-BILL-MAIN.sb.json
//   node scripter/generate-screen-html.js scripter/sb/   # 폴더 전체
//
// 산출물: scripter/sb-html/<screenId>.html
// =============================================

const fs   = require("fs");
const path = require("path");

const ROOT       = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "scripter", "sb-html");

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

// ---------- 태그 파서 ----------
function parseTags(desc) {
  if (!desc) return [];
  return desc.split("\n").map(line => {
    const m = line.match(/^\[([^\]:]+)(?::([^\]]*))?\]\s*(.*)/);
    if (!m) return null;
    return { tag: m[1].trim(), sub: (m[2] || "").trim(), body: (m[3] || "").trim() };
  }).filter(Boolean);
}

function getTagsByName(tags, name) {
  return tags.filter(t => t.tag === name);
}

// ---------- 컴포넌트 → 시각 블록 ----------
const COMPONENT_RENDERS = {
  "ogn/status-bar":       () => `<div class="comp status-bar"><span class="time">9:41</span><span class="icons">●●●</span></div>`,
  "ogn/header":           (sb) => `<div class="comp header"><span class="back">‹</span><span class="title">${sb.screenName}</span><span class="more">⋯</span></div>`,
  "ogn/tab-bar":          () => `<div class="comp tab-bar"><span>홈</span><span class="active">청구</span><span>혜택</span><span>MY</span></div>`,
  "ogn/gnb":              () => `<div class="comp tab-bar"><span>홈</span><span class="active">청구</span><span>혜택</span><span>MY</span></div>`,
  "ogn/sticky-footer-cta": (_, area) => {
    const actions = getTagsByName(parseTags(area.descriptions), "액션");
    const label = actions[0] ? actions[0].body.split("→")[0].replace("tap","").trim() : "확인";
    return `<div class="comp cta-footer"><button class="cta-btn">${label}</button></div>`;
  },
  "ogn/footer-cs":        () => `<div class="comp footer-cs">고객센터 · 1588-0010</div>`,
  "ogn/notice-bottomsheet": () => `<div class="comp bottomsheet-hint">⬆ 바텀시트</div>`,
  "ogn/BIL/bill-summary-card": () => `
    <div class="comp card bill-summary-card">
      <div class="card-label">11월 청구 요금</div>
      <div class="card-amount">78,300원</div>
      <div class="card-meta-row"><span class="meta-key">납부 기한</span><span class="meta-val">11/25</span></div>
      <div class="card-meta-row"><span class="meta-key">자동납부</span><span class="meta-val">카드 ****-7890</span></div>
    </div>`,
  "ogn/BIL/line-selector": () => `
    <div class="comp line-selector">
      <span class="line-tab active">01X-1234-5678</span>
      <span class="line-tab">02X-9876-5432</span>
    </div>`,
  "ogn/BIL/pay-amount-summary": () => `
    <div class="comp card pay-amount">
      <div class="card-label">납부 합계</div>
      <div class="card-amount">78,300원</div>
    </div>`,
  "ogn/BIL/pay-confirm-card": () => `
    <div class="comp card pay-confirm-card">
      <div class="card-label">납부 정보</div>
      <div class="card-meta-row"><span class="meta-key">납부 금액</span><span class="meta-val">78,300원</span></div>
      <div class="card-meta-row"><span class="meta-key">납부 수단</span><span class="meta-val">카드 ****-7890</span></div>
      <div class="card-meta-row"><span class="meta-key">납부 대상</span><span class="meta-val">01X-1234-5678</span></div>
    </div>`,
  "ogn/BIL/payment-confirm-card": () => `
    <div class="comp card pay-confirm-card">
      <div class="card-label">납부 정보</div>
      <div class="card-meta-row"><span class="meta-key">납부 금액</span><span class="meta-val">78,300원</span></div>
      <div class="card-meta-row"><span class="meta-key">납부 수단</span><span class="meta-val">카드 ****-7890</span></div>
    </div>`,
  "ogn/BIL/pay-result-card":  () => `
    <div class="comp card result-card success">
      <div class="result-icon">✓</div>
      <div class="result-title">납부가 완료되었습니다</div>
      <div class="card-meta-row"><span class="meta-key">승인번호</span><span class="meta-val">A1234567</span></div>
      <div class="card-meta-row"><span class="meta-key">납부 금액</span><span class="meta-val">78,300원</span></div>
      <div class="card-meta-row"><span class="meta-key">납부 일시</span><span class="meta-val">2026.11.15 14:35</span></div>
    </div>`,
  "ogn/BIL/payment-result-card": () => `
    <div class="comp card result-card success">
      <div class="result-icon">✓</div>
      <div class="result-title">납부가 완료되었습니다</div>
      <div class="card-meta-row"><span class="meta-key">승인번호</span><span class="meta-val">A1234567</span></div>
      <div class="card-meta-row"><span class="meta-key">납부 금액</span><span class="meta-val">78,300원</span></div>
    </div>`,
  "ogn/BIL/autopay-card": () => `
    <div class="comp card">
      <div class="card-label">현재 자동납부 수단</div>
      <div class="card-meta-row"><span class="meta-key">카드사</span><span class="meta-val">신한 ****-7890</span></div>
      <div class="card-meta-row"><span class="meta-key">출금일</span><span class="meta-val">매월 25일</span></div>
    </div>`,
  "ogn/BIL/suspend-status-card": () => `
    <div class="comp card card-info">
      <div class="card-label">정지 해제 상태</div>
      <div class="status-processing">처리 중 ···</div>
    </div>`,
  "ogn/BIL/bill-guide-card": () => `
    <div class="comp card">
      <div class="card-label">2026년 11월 요금안내서</div>
      <div class="card-meta-row"><span class="meta-key">발급일</span><span class="meta-val">2026.12.01</span></div>
      <div style="margin-top:8px"><button class="sec-btn">재발행 요청</button></div>
    </div>`,
  "ogn/BIL/usage-forecast-card": () => `
    <div class="comp card">
      <div class="card-label tag-expected">예상 금액</div>
      <div class="card-amount">42,100원</div>
      <div class="card-meta-row muted"><span>확정 전 금액 — 변동 가능</span></div>
    </div>`,
  "ogn/BIL/usage-realtime-card": () => `
    <div class="comp card">
      <div class="card-label tag-expected">실시간 예상 요금</div>
      <div class="card-amount">42,100원</div>
    </div>`,
  "ogn/BIL/payment-failure-card": () => `
    <div class="comp card card-error">
      <div class="result-icon err">✕</div>
      <div class="result-title">납부에 실패했습니다</div>
      <div class="card-meta-row muted"><span>카드 한도 초과</span></div>
    </div>`,
  "ogn/BIL/reserve-form":      () => `
    <div class="comp card">
      <div class="card-label">예약 납부 설정</div>
      <div class="form-row"><span class="form-label">예약일</span><span class="form-input-mock">날짜 선택 ›</span></div>
      <div class="form-row"><span class="form-label">납부 수단</span><span class="form-input-mock">카드 선택 ›</span></div>
    </div>`,
  "ogn/BIL/reserve-result-card": () => `
    <div class="comp card result-card">
      <div class="result-title">예약이 접수되었습니다</div>
      <div class="card-meta-row"><span class="meta-key">예약일</span><span class="meta-val">12월 25일</span></div>
      <div class="card-meta-row"><span class="meta-key">금액</span><span class="meta-val">78,300원</span></div>
    </div>`,
  "ogn/BIL/third-party-consent-sheet": () => `
    <div class="comp card card-warn">
      <div class="card-label">명의자 동의 필요</div>
      <div class="notice-text">타인 명의 납부수단 사용 시 명의자 동의가 필요합니다</div>
      <div class="notice-text muted">동의 유효 시간: 24시간</div>
      <div style="margin-top:8px"><button class="cta-btn-sm">동의 요청 보내기</button></div>
    </div>`,
  "ogn/BIL/cancel-warning-sheet": () => `
    <div class="comp card card-warn">
      <div class="card-label">자동납부 해지 안내</div>
      <div class="notice-text">해지 후 미납이 발생할 수 있습니다</div>
    </div>`,
  "ogn/BIL/limit-status-card": () => `
    <div class="comp card">
      <div class="card-label">현재 이용 한도</div>
      <div class="card-amount">300,000원</div>
      <div class="card-meta-row muted"><span>최대 한도: 500,000원</span></div>
    </div>`,
  "ogn/BIL/setting-method-card": () => `
    <div class="comp card">
      <div class="card-label">등록된 납부수단</div>
      <div class="card-meta-row"><span class="meta-key">신한카드</span><span class="meta-val">****-7890</span></div>
    </div>`,
  "ogn/BIL/setting-limit-form": () => `
    <div class="comp card">
      <div class="card-label">한도 변경</div>
      <div class="form-row"><span class="form-label">변경 한도</span><span class="form-input-mock">금액 입력</span></div>
    </div>`,
  "ogn/BIL/setting-method-form": () => `
    <div class="comp card">
      <div class="card-label">납부수단 변경</div>
      <div class="form-row"><span class="form-label">카드/계좌</span><span class="form-input-mock">선택 ›</span></div>
    </div>`,
  "ogn/BIL/setting-document-form": () => `
    <div class="comp card">
      <div class="card-label">수신 설정</div>
      <div class="form-row"><label><input type="radio" checked> 앱 알림</label></div>
      <div class="form-row"><label><input type="radio"> 이메일</label></div>
      <div class="form-row"><label><input type="radio"> 문자</label></div>
    </div>`,
  "ogn/BIL/setting-auto-prepay-form": () => `
    <div class="comp card">
      <div class="card-label">자동 선결제 설정</div>
      <div class="form-row"><span class="form-label">실행일</span><span class="form-input-mock">매월 20일</span></div>
      <div class="form-row"><span class="form-label">납부 수단</span><span class="form-input-mock">카드 ****-7890</span></div>
    </div>`,
  "ogn/BIL/delegate-target-list": () => `
    <div class="comp list-section">
      <div class="list-item"><span class="list-primary">홍길동</span><span class="list-meta">01X-1234-5678 · 명의자</span></div>
    </div>`,
  "ogn/BIL/delegate-record-card": () => `
    <div class="comp card">
      <div class="card-label">대리 납부 기록</div>
      <div class="card-meta-row"><span class="meta-key">확인자</span><span class="meta-val">홍길동 (명의자)</span></div>
      <div class="card-meta-row"><span class="meta-key">납부자</span><span class="meta-val">홍길순 (가족)</span></div>
    </div>`,
  "ogn/BIL/prepay-target-list": () => `
    <div class="comp list-section">
      <div class="list-item selectable"><input type="checkbox"> <span class="list-primary">OO마켓 결제</span><span class="list-amount">15,000원</span></div>
      <div class="list-item selectable"><input type="checkbox"> <span class="list-primary">콘텐츠 이용료</span><span class="list-amount">9,900원</span></div>
    </div>`,
  "ogn/BIL/prepay-result-card": () => `
    <div class="comp card result-card">
      <div class="result-title">선결제가 완료되었습니다</div>
      <div class="card-meta-row"><span class="meta-key">선결제 금액</span><span class="meta-val">24,900원</span></div>
      <div class="card-meta-row muted"><span>청구 차감 예정</span></div>
    </div>`,
  "ogn/BIL/refund-target-card": () => `
    <div class="comp card">
      <div class="card-label">환불 신청</div>
      <div class="form-row"><span class="form-label">환불 계좌</span><span class="form-input-mock">계좌번호 입력</span></div>
    </div>`,
  "ogn/BIL/bill-detail-list": () => `
    <div class="comp list-section">
      <div class="list-item"><span class="list-primary">기본 요금제</span><span class="list-amount">55,000원</span></div>
      <div class="list-item"><span class="list-primary">부가서비스</span><span class="list-amount">9,900원</span></div>
      <div class="list-item"><span class="list-primary">단말 할부</span><span class="list-amount">13,400원</span></div>
      <div class="list-item muted"><span class="list-primary">할인</span><span class="list-amount">-15,000원</span></div>
    </div>`,
  "ogn/BIL/bill-variation-list": () => `
    <div class="comp notice-card info">
      <div class="notice-title">전월 대비 변동 사유</div>
      <div class="notice-body">콘텐츠 이용료 +9,900원 증가</div>
    </div>`,
  "ogn/BIL/bill-document-list": () => `
    <div class="comp list-section">
      <div class="list-item"><span class="list-primary">2026년 11월</span><button class="sec-btn-sm">조회</button></div>
      <div class="list-item"><span class="list-primary">2026년 10월</span><button class="sec-btn-sm">조회</button></div>
    </div>`,
  "ogn/BIL/payment-history-list": () => `
    <div class="comp list-section">
      <div class="list-item"><div><div class="list-primary">2026.11.15 14:35</div><div class="list-meta muted">카드 ****-7890</div></div><div class="right"><div class="list-amount">78,300원</div><span class="tag-ok">완료</span></div></div>
      <div class="list-item"><div><div class="list-primary">2026.10.20 09:12</div><div class="list-meta muted">계좌이체</div></div><div class="right"><div class="list-amount">76,500원</div><span class="tag-ok">완료</span></div></div>
    </div>`,
  "ogn/BIL/payment-method-list": () => `
    <div class="comp list-section">
      <div class="list-item selectable"><span class="list-icon">💳</span><div><div class="list-primary">신한카드</div><div class="list-meta muted">****-7890</div></div><input type="radio" name="method" checked></div>
      <div class="list-item selectable"><span class="list-icon">🏦</span><div><div class="list-primary">국민은행</div><div class="list-meta muted">****-4321</div></div><input type="radio" name="method"></div>
    </div>`,
  "ogn/BIL/usage-line-list": () => `
    <div class="comp list-section">
      <div class="list-item"><div><div class="list-primary">OO마켓 결제</div><div class="list-meta muted">2026.11.14</div></div><div class="list-amount">15,000원</div></div>
      <div class="list-item"><div><div class="list-primary">콘텐츠 구독</div><div class="list-meta muted">2026.11.10</div></div><div class="list-amount">9,900원</div></div>
    </div>`,
  "ogn/BIL/method-action-pair": () => `
    <div class="comp" style="display:flex;gap:8px">
      <button class="sec-btn" style="flex:1">변경</button>
      <button class="sec-btn danger" style="flex:1">해지</button>
    </div>`,

  "atom/banner":           (_, area) => {
    const tags = parseTags(area.descriptions);
    const notice = getTagsByName(tags, "고지")[0];
    const msg = notice ? notice.body : (area.sectionDescription || "안내");
    const tone = msg.includes("주의") || msg.includes("경고") || msg.includes("위험") ? "warning" : "info";
    return `<div class="comp banner banner-${tone}">${msg}</div>`;
  },
  "atom/tag":              () => `<span class="comp tag-expected">예상</span>`,
  "atom/checkbox":         () => `<input type="checkbox" class="comp">`,
  "atom/radio":            () => `<input type="radio" class="comp">`,
  "atom/calendar-picker":  () => `<div class="comp calendar-mock">📅 날짜 선택</div>`,
  "atom/spinner":          () => `<div class="comp spinner">⟳</div>`,
  "atom/skeleton":         () => `<div class="comp skeleton"></div>`,

  "mol/notice-card":       (_, area) => {
    const tags = parseTags(area.descriptions);
    const notice = getTagsByName(tags, "고지")[0];
    const required = notice && notice.sub.includes("필수");
    const pol = notice ? notice.sub.split("|").slice(1).join("|") : "";
    const msg = notice ? notice.body : (area.sectionDescription || "안내 문구");
    return `<div class="comp notice-card${required ? " required" : ""}">
      ${required ? `<span class="notice-badge">필수</span>` : ""}
      ${pol ? `<span class="pol-id">${pol}</span>` : ""}
      <span class="notice-body">${msg}</span>
    </div>`;
  },
  "mol/list-item-bill-item": () => `
    <div class="comp list-section">
      <div class="list-item"><span class="list-primary">기본 요금제</span><span class="list-amount">55,000원</span></div>
      <div class="list-item"><span class="list-primary">부가서비스</span><span class="list-amount">9,900원</span></div>
    </div>`,
  "mol/list-item-pay-target": () => `
    <div class="comp list-section">
      <div class="list-item selectable"><input type="checkbox" checked><div><span class="list-primary">당월 청구액</span><div class="list-meta muted">11/25 납부 기한</div></div><span class="list-amount">78,300원</span></div>
    </div>`,
  "mol/list-item-pay-method": () => `
    <div class="comp list-section">
      <div class="list-item selectable"><span class="list-icon">💳</span><div class="list-primary">신한카드 ****-7890</div><input type="radio" checked></div>
    </div>`,
  "mol/payment-target-item": () => `
    <div class="comp list-section">
      <div class="list-item selectable"><input type="checkbox" checked><span class="list-primary">당월 청구액</span><span class="list-amount">78,300원</span></div>
    </div>`,
  "mol/payment-method-item": () => `
    <div class="comp list-section">
      <div class="list-item selectable"><span class="list-icon">💳</span><div class="list-primary">신한카드 ****-7890</div><input type="radio" checked></div>
    </div>`,
  "mol/payment-history-item": () => `
    <div class="comp list-section">
      <div class="list-item"><div><div class="list-primary">2026.11.15</div><div class="list-meta muted">카드 ****-7890</div></div><div class="right"><span class="list-amount">78,300원</span><span class="tag-ok">완료</span></div></div>
    </div>`,
  "mol/list-item-link":    (_, area) => {
    const actions = getTagsByName(parseTags(area.descriptions), "액션");
    const label = actions[0] ? actions[0].body.split("→")[0].replace("tap","").trim() : "자세히 보기";
    return `<div class="comp list-item-link">${label} ›</div>`;
  },
  "mol/list-item":         () => `<div class="comp list-item-link">항목 ›</div>`,
  "mol/month-picker":      () => `<div class="comp month-picker">‹ 2026년 11월 ›</div>`,
  "mol/toggle-item":       (_, area) => {
    return `<div class="comp toggle-row"><span>${area.sectionName}</span><span class="toggle on"></span></div>`;
  },
  "mol/post-action-card":  (_, area) => {
    const actions = getTagsByName(parseTags(area.descriptions), "액션");
    const label = actions[0] ? actions[0].body.split("→")[0].replace("tap","").trim() : "다음";
    return `<div class="comp post-action">${label} ›</div>`;
  },
  "mol/total-amount":      () => `
    <div class="comp total-amount">
      <div class="total-label">납부 합계</div>
      <div class="total-value">78,300원</div>
    </div>`,
  "mol/info-row":          () => `<div class="comp list-item"><span class="meta-key">항목</span><span class="meta-val">내용</span></div>`,
  "mol/page-header":       (_, area) => `<div class="comp page-header">${area.sectionName}</div>`,
  "mol/section-header":    (_, area) => `<div class="comp section-header">${area.sectionName}</div>`,
  "mol/card-header":       (_, area) => `<div class="comp section-header">${area.sectionName}</div>`,
  "mol/amount-row":        () => `<div class="comp list-item"><span class="meta-key">금액</span><span class="list-amount">78,300원</span></div>`,
};

function renderOrganism(organism, area, sb) {
  const id = organism.organismId;
  const fn = COMPONENT_RENDERS[id];
  if (fn) return fn(sb, area);
  // fallback: 컴포넌트 placeholder
  const short = id.split("/").pop();
  return `<div class="comp placeholder">${short}</div>`;
}

// ---------- 태그 배지 렌더 ----------
function renderDescTags(desc) {
  if (!desc) return "";
  const tags = parseTags(desc);
  const badges = [];
  for (const t of tags) {
    if (t.tag === "고지") {
      const required = t.sub.includes("필수");
      const pol = t.sub.split("|").slice(1).join("|");
      badges.push(`<div class="desc-tag notice${required ? " required" : ""}">
        <span class="badge">${required ? "🔴 필수" : "🟡 사용성"}</span>
        ${pol ? `<code>${pol}</code>` : ""}
        <span>${t.body}</span>
      </div>`);
    } else if (t.tag === "상태") {
      badges.push(`<div class="desc-tag state"><span class="badge state-badge">${t.sub}</span> ${t.body}</div>`);
    } else if (t.tag === "액션") {
      badges.push(`<div class="desc-tag action"><span class="badge action-badge">tap</span> ${t.body}</div>`);
    } else if (t.tag === "조건") {
      badges.push(`<div class="desc-tag condition"><span class="badge cond-badge">${t.sub}</span> ${t.body}</div>`);
    }
  }
  return badges.join("\n");
}

// ---------- HTML 생성 ----------
function generateScreenHtml(sb) {
  const areas = sb.areas || [];

  // 특수 영역 분리
  const isChrome = (a) => {
    const ogns = a.organisms.map(o => o.organismId);
    return ogns.some(o => ["ogn/status-bar","ogn/header","ogn/tab-bar","ogn/gnb"].includes(o));
  };
  const isFooter = (a) => {
    const ogns = a.organisms.map(o => o.organismId);
    return ogns.some(o => ["ogn/sticky-footer-cta","ogn/footer-cs","ogn/tab-bar"].includes(o));
  };

  // 바디 영역만 (chrome/footer 는 별도 처리)
  const bodyAreas = areas.filter(a => !isChrome(a) || a.organisms.some(o =>
    !["ogn/status-bar","ogn/header","ogn/tab-bar","ogn/gnb"].includes(o.organismId)
  ));

  // status-bar + header render
  const statusBar = `<div class="status-bar"><span class="time">9:41</span><span class="icons">●●●</span></div>`;
  const header = `<div class="header"><span class="back">‹</span><span class="title">${sb.screenName}</span><span class="more">⋯</span></div>`;

  // 바텀 CTA 여부
  const hasFooterCta = areas.some(a =>
    a.organisms.some(o => o.organismId === "ogn/sticky-footer-cta")
  );
  const hasTabBar = areas.some(a =>
    a.organisms.some(o => ["ogn/tab-bar","ogn/gnb"].includes(o.organismId))
  );
  const ctaArea = areas.find(a => a.organisms.some(o => o.organismId === "ogn/sticky-footer-cta"));

  // 각 area → HTML
  const areaHtml = bodyAreas.map(area => {
    const tags = parseTags(area.descriptions);
    const areaNameTag = getTagsByName(tags, "영역명")[0];
    const areaLabel = areaNameTag ? areaNameTag.body : area.sectionName;

    // 이 영역의 organisms (chrome 제외)
    const renderOrgs = area.organisms.filter(o =>
      !["ogn/status-bar","ogn/header","ogn/sticky-footer-cta","ogn/tab-bar","ogn/gnb","ogn/footer-cs"].includes(o.organismId)
    );
    if (renderOrgs.length === 0) return "";

    const orgHtml = renderOrgs.map(o => renderOrganism(o, area, sb)).join("\n");
    const descHtml = renderDescTags(area.descriptions);
    const dynamicBadge = area.dynamic
      ? `<span class="area-badge dynamic">dynamic</span>`
      : `<span class="area-badge static">static</span>`;

    return `
    <div class="area" id="${area.sectionId}">
      <div class="area-header">
        <span class="area-no">${area.no}</span>
        <span class="area-name">${areaLabel}</span>
        ${dynamicBadge}
      </div>
      <div class="area-body">
        ${orgHtml}
      </div>
      ${descHtml ? `<div class="area-tags">${descHtml}</div>` : ""}
    </div>`;
  }).filter(Boolean).join("\n");

  const footerHtml = hasFooterCta
    ? (() => {
        const actions = getTagsByName(parseTags(ctaArea?.descriptions || ""), "액션");
        const label = actions[0] ? actions[0].body.split("→")[0].replace(/tap\s*/i,"").trim() : "확인";
        return `<div class="footer-cta"><button class="cta-btn">${label}</button></div>`;
      })()
    : hasTabBar
    ? `<div class="tab-bar"><span>홈</span><span class="active">청구</span><span>혜택</span><span>MY</span></div>`
    : "";

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=375">
<title>${sb.screenId} — ${sb.screenName}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, 'Pretendard', sans-serif; }
  body { background: #f0f0f5; display: flex; justify-content: center; padding: 24px 0 48px; }

  .phone-wrap { display: flex; gap: 32px; align-items: flex-start; }

  /* ── 폰 프레임 ── */
  .phone { width: 375px; min-height: 812px; background: #fff; border-radius: 44px; overflow: hidden;
    box-shadow: 0 24px 80px rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.08);
    display: flex; flex-direction: column; position: relative; }
  .screen { flex: 1; overflow-y: auto; display: flex; flex-direction: column;
    background: #f8f9fa; padding-bottom: ${hasFooterCta || hasTabBar ? "64px" : "0"}; }

  /* ── chrome ── */
  .status-bar { height: 44px; background: #fff; display: flex; align-items: center;
    justify-content: space-between; padding: 0 24px; font-size: 12px; font-weight: 600; flex-shrink: 0; }
  .header { height: 56px; background: #fff; display: flex; align-items: center; padding: 0 20px;
    border-bottom: 1px solid #f1f3f5; flex-shrink: 0; position: sticky; top: 0; z-index: 10; }
  .header .back { font-size: 22px; color: #333; margin-right: 8px; cursor: pointer; }
  .header .title { flex: 1; font-size: 17px; font-weight: 600; color: #212529; }
  .header .more { font-size: 20px; color: #868e96; }

  /* ── 영역 ── */
  .area { margin: 0; padding: 0; }
  .area-header { display: flex; align-items: center; gap: 6px; padding: 12px 16px 6px;
    background: #fff; border-bottom: 1px solid #f1f3f5; }
  .area-no { width: 20px; height: 20px; background: #3617CE; color: #fff; border-radius: 50%;
    font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .area-name { font-size: 12px; font-weight: 600; color: #495057; flex: 1; }
  .area-badge { font-size: 10px; padding: 2px 6px; border-radius: 10px; font-weight: 500; }
  .area-badge.dynamic { background: #e8f4fd; color: #1971C2; }
  .area-badge.static  { background: #f1f3f5; color: #868e96; }
  .area-body { padding: 12px 16px; background: #fff; display: flex; flex-direction: column; gap: 8px; }
  .area-tags { padding: 8px 16px 12px; background: #fff; display: flex; flex-direction: column; gap: 4px;
    border-bottom: 8px solid #f1f3f5; }

  /* ── 컴포넌트 ── */
  .comp { width: 100%; }
  .placeholder { padding: 10px 12px; background: #f8f9fa; border: 1.5px dashed #dee2e6;
    border-radius: 8px; font-size: 12px; color: #868e96; text-align: center; }

  /* card */
  .card { background: #f8f9fa; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
  .card-label { font-size: 12px; color: #868e96; font-weight: 500; }
  .card-amount { font-size: 26px; font-weight: 700; color: #212529; }
  .card-meta-row { display: flex; justify-content: space-between; font-size: 13px; }
  .meta-key { color: #868e96; }
  .meta-val { color: #212529; font-weight: 500; }
  .tag-expected { display: inline-flex; align-items: center; background: #fff3bf; color: #e67700;
    font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 10px; }
  .status-processing { font-size: 13px; color: #1971C2; }

  /* card states */
  .card-warn  { background: #fff9db; border: 1px solid #ffe066; }
  .card-error { background: #fff5f5; border: 1px solid #ffc9c9; }
  .result-card { text-align: center; padding: 24px 16px; }
  .result-icon { font-size: 40px; margin-bottom: 8px; color: #2F9E44; }
  .result-icon.err { color: #C92A2A; }
  .result-title { font-size: 18px; font-weight: 700; color: #212529; margin-bottom: 12px; }

  /* bill-summary-card */
  .bill-summary-card { background: #fff; border: 1.5px solid #e9ecef; }

  /* line-selector */
  .line-selector { display: flex; gap: 8px; overflow-x: auto; padding: 4px 0; }
  .line-tab { padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500;
    background: #f1f3f5; color: #495057; white-space: nowrap; flex-shrink: 0; }
  .line-tab.active { background: #3617CE; color: #fff; }

  /* list */
  .list-section { display: flex; flex-direction: column; }
  .list-item { display: flex; align-items: center; justify-content: space-between; padding: 12px 0;
    border-bottom: 1px solid #f1f3f5; font-size: 14px; gap: 8px; }
  .list-item:last-child { border-bottom: none; }
  .list-item.selectable { cursor: pointer; }
  .list-primary { font-weight: 500; color: #212529; flex: 1; }
  .list-meta { font-size: 12px; color: #868e96; }
  .list-amount { font-weight: 600; color: #212529; font-size: 14px; }
  .list-icon { font-size: 20px; }
  .list-item .right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }

  /* notice */
  .notice-card { padding: 12px; border-radius: 8px; background: #f8f9fa; font-size: 12.5px;
    color: #495057; display: flex; flex-direction: column; gap: 4px; }
  .notice-card.required { background: #fff9db; }
  .notice-badge { font-size: 10px; font-weight: 700; color: #e67700; }
  .pol-id { font-size: 10px; font-family: monospace; color: #868e96; }
  .notice-text { font-size: 12.5px; color: #495057; }
  .notice-title { font-size: 12px; font-weight: 600; color: #495057; }
  .notice-body { font-size: 12.5px; color: #495057; }
  .notice-card.info { background: #e8f4fd; }

  /* banner */
  .banner { padding: 12px 16px; border-radius: 8px; font-size: 13px; font-weight: 500; }
  .banner-warning { background: #fff4e6; color: #e67700; }
  .banner-info    { background: #e8f4fd; color: #1971C2; }
  .banner-error   { background: #fff5f5; color: #C92A2A; }

  /* tags */
  .tag-ok   { font-size: 11px; font-weight: 600; color: #2F9E44; background: #ebfbee; padding: 2px 8px; border-radius: 10px; }
  .tag-warn { font-size: 11px; font-weight: 600; color: #e67700; background: #fff4e6; padding: 2px 8px; border-radius: 10px; }

  /* month-picker */
  .month-picker { text-align: center; padding: 10px; font-size: 15px; font-weight: 600; color: #212529;
    background: #f8f9fa; border-radius: 8px; }

  /* toggle */
  .toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 4px 0; font-size: 14px; color: #212529; }
  .toggle { width: 44px; height: 24px; border-radius: 12px; background: #dee2e6; }
  .toggle.on { background: #3617CE; }

  /* cta */
  .cta-btn { width: 100%; height: 52px; background: #3617CE; color: #fff; border: none; border-radius: 12px;
    font-size: 16px; font-weight: 700; cursor: pointer; }
  .cta-btn-sm { padding: 8px 16px; background: #3617CE; color: #fff; border: none; border-radius: 8px;
    font-size: 13px; font-weight: 600; cursor: pointer; }
  .sec-btn { padding: 8px 14px; border: 1.5px solid #3617CE; color: #3617CE; background: #fff; border-radius: 8px;
    font-size: 13px; font-weight: 600; cursor: pointer; }
  .sec-btn-sm { padding: 4px 10px; border: 1px solid #dee2e6; color: #495057; background: #fff; border-radius: 6px;
    font-size: 12px; cursor: pointer; }
  .sec-btn.danger { border-color: #C92A2A; color: #C92A2A; }

  /* footer */
  .footer-cta { position: sticky; bottom: 0; padding: 12px 16px; background: #fff;
    border-top: 1px solid #f1f3f5; z-index: 20; }
  .tab-bar { height: 64px; background: #fff; border-top: 1px solid #f1f3f5; display: flex;
    align-items: center; justify-content: space-around; position: sticky; bottom: 0; z-index: 20; flex-shrink: 0; }
  .tab-bar span { font-size: 12px; color: #868e96; padding: 8px; }
  .tab-bar span.active { color: #3617CE; font-weight: 600; }

  /* form */
  .form-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0;
    border-bottom: 1px solid #f1f3f5; font-size: 14px; }
  .form-row:last-child { border-bottom: none; }
  .form-label { color: #495057; }
  .form-input-mock { color: #868e96; font-size: 13px; }

  /* page-header */
  .page-header { font-size: 22px; font-weight: 700; color: #212529; padding: 8px 0 4px; }
  .section-header { font-size: 14px; font-weight: 600; color: #495057; }
  .post-action { padding: 14px 0; font-size: 15px; color: #3617CE; font-weight: 600; cursor: pointer; }
  .list-item-link { padding: 14px 0; font-size: 14px; color: #3617CE; cursor: pointer; }
  .total-amount { padding: 4px 0; }
  .total-label { font-size: 12px; color: #868e96; }
  .total-value { font-size: 22px; font-weight: 700; color: #212529; }
  .pay-amount .card-amount { font-size: 22px; }

  /* muted */
  .muted { color: #868e96 !important; }

  /* ── 스펙 패널 (오른쪽) ── */
  .spec-panel { width: 320px; background: #fff; border-radius: 16px; padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,.08); display: flex; flex-direction: column; gap: 12px;
    align-self: flex-start; position: sticky; top: 24px; }
  .spec-title { font-size: 15px; font-weight: 700; color: #212529; border-bottom: 2px solid #3617CE; padding-bottom: 8px; }
  .spec-meta { font-size: 12px; color: #868e96; display: flex; flex-wrap: wrap; gap: 4px; }
  .spec-meta code { background: #f1f3f5; padding: 2px 6px; border-radius: 4px; font-size: 11px; color: #495057; }
  .spec-area { border: 1px solid #f1f3f5; border-radius: 10px; overflow: hidden; }
  .spec-area-head { padding: 8px 12px; background: #f8f9fa; display: flex; align-items: center; gap: 6px; }
  .spec-area-body { padding: 10px 12px; display: flex; flex-direction: column; gap: 6px; }
  .desc-tag { font-size: 11.5px; padding: 4px 8px; border-radius: 6px; display: flex; gap: 6px; align-items: flex-start; }
  .desc-tag.notice   { background: #fff9db; color: #664d03; }
  .desc-tag.notice.required { background: #fff3cd; }
  .desc-tag.state    { background: #f1f3f5; color: #495057; }
  .desc-tag.action   { background: #e8f4fd; color: #1864ab; }
  .desc-tag.condition { background: #f3f0ff; color: #5f3dc4; }
  .badge { font-size: 10px; font-weight: 700; padding: 1px 5px; border-radius: 4px; white-space: nowrap; flex-shrink: 0; }
  .state-badge  { background: #868e96; color: #fff; }
  .action-badge { background: #1971C2; color: #fff; }
  .cond-badge   { background: #7950f2; color: #fff; }
  .spec-orgs { display: flex; flex-direction: column; gap: 2px; }
  .spec-org { font-size: 11px; font-family: monospace; color: #495057; background: #f8f9fa;
    padding: 3px 8px; border-radius: 4px; }
</style>
</head>
<body>
<div class="phone-wrap">

  <!-- 폰 화면 -->
  <div class="phone">
    <div class="screen">
      ${statusBar}
      ${header}
      <div style="flex:1; overflow-y:auto; display:flex; flex-direction:column;">
        ${areaHtml}
      </div>
    </div>
    ${footerHtml}
  </div>

  <!-- 스펙 패널 -->
  <div class="spec-panel">
    <div class="spec-title">${sb.screenId}</div>
    <div class="spec-meta">
      <code>${sb.screenPath || ""}</code>
      <code>${sb.version || "v1.0"}</code>
      <code>${sb.lastUpdated || ""}</code>
    </div>
    ${areas.map(area => {
      const tags = parseTags(area.descriptions);
      const namTag = getTagsByName(tags, "영역명")[0];
      const aLabel = namTag ? namTag.body : area.sectionName;
      const descTags = renderDescTags(area.descriptions);
      return `
    <div class="spec-area">
      <div class="spec-area-head">
        <div class="area-no">${area.no}</div>
        <span class="area-name">${aLabel}</span>
        <span class="area-badge ${area.dynamic ? "dynamic" : "static"}">${area.dynamic ? "dynamic" : "static"}</span>
      </div>
      <div class="spec-area-body">
        <div class="spec-orgs">
          ${area.organisms.map(o => `<div class="spec-org">${o.organismId}</div>`).join("")}
        </div>
        ${descTags}
      </div>
    </div>`;
    }).join("")}
  </div>

</div>
</body>
</html>`;
}

// ---------- CLI ----------
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage:");
  console.error("  node scripter/generate-screen-html.js <sb-json-path-or-dir>");
  process.exit(1);
}

const inputPath = path.isAbsolute(args[0]) ? args[0] : path.join(ROOT, args[0]);
if (!fs.existsSync(inputPath)) { console.error("입력 없음:", inputPath); process.exit(2); }

const stat = fs.statSync(inputPath);
const files = stat.isDirectory()
  ? fs.readdirSync(inputPath).filter(f => f.endsWith(".sb.json")).map(f => path.join(inputPath, f))
  : [inputPath];

ensureDir(OUTPUT_DIR);
for (const f of files) {
  const sb = JSON.parse(fs.readFileSync(f, "utf8"));
  const html = generateScreenHtml(sb);
  const slug = sb.screenId || path.basename(f, ".sb.json");
  const outPath = path.join(OUTPUT_DIR, slug + ".html");
  fs.writeFileSync(outPath, html, "utf8");
  console.log("✓ " + slug + " → scripter/sb-html/" + slug + ".html");
}
console.log(`\n=== ${files.length}개 화면 HTML 생성 ===`);
