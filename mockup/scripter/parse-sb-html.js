// =============================================
// SKT Genui — NOVA SB HTML Parser
// NOVA-XXX-PG-NNN.html → tree JSON
//
// 지원 요소: h1 / h2 / h3 / div.eyebrow / div.meta-line / div.note / table / code / span.pid|ok-tag|warn-tag|danger-tag / strong
// regex 기반 — 의존성 X. NOVA 양식에 한정 (mockup/sb-doc/_shared.css 또는 mockup/_archive/production-flow-v1/_shared.css 의 클래스 양식 인식).
//
// 사용:
//   const tree = parseNovaHtml(htmlString);
//   // tree = { title, blocks: [...] }
// =============================================

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

// inline 텍스트 안의 <code>, <span class="...">, <strong> 추출 → spans 배열.
// "[{kind: 'plain', text} | {kind: 'code', text} | {kind: 'pid', text} | {kind: 'tag', variant: 'ok|warn|danger', text} | {kind: 'strong', text}]"
function parseInline(html) {
  const spans = [];
  let cursor = 0;
  const re = /<(code|span|strong)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m.index > cursor) {
      const plain = decodeEntities(html.slice(cursor, m.index)).replace(/\s+/g, " ");
      if (plain.trim()) spans.push({ kind: "plain", text: plain });
    }
    const tag = m[1].toLowerCase();
    const attrs = m[2] || "";
    const inner = decodeEntities(m[3]).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (tag === "code") {
      spans.push({ kind: "code", text: inner });
    } else if (tag === "strong") {
      spans.push({ kind: "strong", text: inner });
    } else if (tag === "span") {
      const cls = (attrs.match(/class\s*=\s*"([^"]+)"/) || [])[1] || "";
      if (cls.includes("pid")) spans.push({ kind: "pid", text: inner });
      else if (cls.includes("ok-tag")) spans.push({ kind: "tag", variant: "ok", text: inner });
      else if (cls.includes("warn-tag")) spans.push({ kind: "tag", variant: "warn", text: inner });
      else if (cls.includes("danger-tag")) spans.push({ kind: "tag", variant: "danger", text: inner });
      else spans.push({ kind: "plain", text: inner });
    }
    cursor = re.lastIndex;
  }
  if (cursor < html.length) {
    const plain = decodeEntities(html.slice(cursor)).replace(/\s+/g, " ");
    if (plain.trim()) spans.push({ kind: "plain", text: plain });
  }
  return spans;
}

// table 파싱 — tr × (th|td) 추출.
function parseTable(tableHtml) {
  const rows = [];
  const trRe = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
  let trMatch;
  while ((trMatch = trRe.exec(tableHtml)) !== null) {
    const trInner = trMatch[1];
    const cells = [];
    const cellRe = /<(th|td)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
    let cellMatch;
    while ((cellMatch = cellRe.exec(trInner)) !== null) {
      const isHeader = cellMatch[1].toLowerCase() === "th";
      const inner = cellMatch[3];
      cells.push({ isHeader: isHeader, spans: parseInline(inner) });
    }
    if (cells.length > 0) rows.push(cells);
  }
  return rows;
}

function parseNovaHtml(html) {
  // <body><div class="wrap"> ... </div></body> 안만 처리
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;
  const wrapMatch = body.match(/<div\s+class\s*=\s*"wrap"[^>]*>([\s\S]*?)<\/div>\s*<\/body>/i);
  const content = wrapMatch ? wrapMatch[1] : body;

  // title from <title> tag
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeEntities(titleMatch[1]).trim() : "Untitled";

  // 블록 단위로 파싱 — h1, h2, h3, div.eyebrow|meta-line|note, table 만 인식.
  const blocks = [];
  const blockRe = /<(h1|h2|h3|table|div)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = blockRe.exec(content)) !== null) {
    const tag = m[1].toLowerCase();
    const attrs = m[2] || "";
    const inner = m[3];
    const cls = (attrs.match(/class\s*=\s*"([^"]+)"/) || [])[1] || "";
    if (tag === "h1") {
      blocks.push({ kind: "h1", spans: parseInline(inner) });
    } else if (tag === "h2") {
      blocks.push({ kind: "h2", spans: parseInline(inner) });
    } else if (tag === "h3") {
      blocks.push({ kind: "h3", spans: parseInline(inner) });
    } else if (tag === "table") {
      blocks.push({ kind: "table", rows: parseTable(inner) });
    } else if (tag === "div") {
      if (cls.includes("eyebrow")) blocks.push({ kind: "eyebrow", spans: parseInline(inner) });
      else if (cls.includes("meta-line")) blocks.push({ kind: "meta-line", spans: parseInline(inner) });
      else if (cls.includes("note")) blocks.push({ kind: "note", spans: parseInline(inner) });
      // 그 외 div (e.g. wrap) 는 skip
    }
  }

  return { title: title, blocks: blocks };
}

module.exports = { parseNovaHtml: parseNovaHtml };

// CLI test mode
if (require.main === module) {
  const fs = require("fs");
  const path = require("path");
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: node parse-sb-html.js <html-path>");
    process.exit(1);
  }
  const html = fs.readFileSync(args[0], "utf8");
  const tree = parseNovaHtml(html);
  console.log(JSON.stringify(tree, null, 2));
}
