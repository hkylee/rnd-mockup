// =============================================
// SKT Genui — Wash Runtime (Figma 측) — Phase 3
// 컨텍스트 인식 매칭:
//   - text node fill → COLOR.text 우선
//   - frame fill → COLOR.surface 우선
//   - stroke → COLOR.border 우선
//   - cornerRadius → DIMENSION.radius 만
//   - padding/itemSpacing → DIMENSION.spacing 만
//   - fontSize → FONTSIZE 만
// fuzzy threshold:
//   - color 0.12 (Phase 2 의 0.15 보다 좁힘 — 컨텍스트 필터로 정확도 확보)
//   - dimension 1.5 (Phase 2 의 2.5 → 정확 일치 또는 아주 가까움만)
// =============================================

async function wash() {
  if (figma.loadAllPagesAsync) await figma.loadAllPagesAsync();

  const VAR_MAP = JSON.parse(figma.root.getPluginData("skt-vars") || "{}");
  if (!Object.keys(VAR_MAP).length) {
    figma.notify("DS Variables 없음 — bundle.js --sync 먼저 실행", { error: true });
    return;
  }

  const targets = figma.currentPage.selection;
  if (targets.length === 0) {
    figma.notify("wash 대상 노드 선택 필요", { error: true });
    return;
  }

  const stats = { color: 0, padding: 0, spacing: 0, radius: 0, fontSize: 0, fontWeight: 0, letterSpacing: 0 };
  const report = [];
  const fuzzyReport = [];
  const unmatchedRaw = { colors: {}, dimensions: {}, fontSizes: {} };

  for (const t of targets) {
    await washNode(t);
  }

  // === 보고서 ===
  console.log("=== Wash Report (Phase 3 — 컨텍스트 인식) ===");
  console.log(`총 ${targets.length} 개 노드 시작 — ${report.length + fuzzyReport.length} fix`);
  if (report.length) console.log("\n[정확/가까운 매칭 — 자동 적용]");
  for (const r of report) console.log("  ✓ " + r);
  if (fuzzyReport.length) {
    console.log("\n[Fuzzy 매칭 — review 권장]");
    for (const r of fuzzyReport) console.log("  ⚠ " + r);
  }
  const uColor = Object.keys(unmatchedRaw.colors);
  const uDim = Object.keys(unmatchedRaw.dimensions);
  const uFs = Object.keys(unmatchedRaw.fontSizes);
  if (uColor.length || uDim.length || uFs.length) {
    console.log("\n[매칭 못 한 raw 값 — DS 추가 또는 수동]");
    for (const c of uColor) console.log(`  ✗ color #${c} (${unmatchedRaw.colors[c]} 회)`);
    for (const d of uDim) console.log(`  ✗ dimension ${d}px (${unmatchedRaw.dimensions[d]} 회)`);
    for (const f of uFs) console.log(`  ✗ fontSize ${f}px (${unmatchedRaw.fontSizes[f]} 회)`);
  }
  console.log(`\n=== 통계 ===`);
  console.log(`색: ${stats.color} / padding: ${stats.padding} / spacing: ${stats.spacing} / radius: ${stats.radius}`);
  console.log(`fontSize: ${stats.fontSize} / fontWeight: ${stats.fontWeight} / letterSpacing: ${stats.letterSpacing}`);

  const totalFix = report.length + fuzzyReport.length;
  const totalUnmatched = uColor.length + uDim.length + uFs.length;
  figma.notify(`✓ Wash: ${totalFix} fix · 매칭 못 한 raw ${totalUnmatched} 종`);

  // ----- 노드 1개 처리 -----
  async function washNode(node) {
    const nodeName = node.name || "(unnamed)";
    const isText = node.type === "TEXT";

    // 1. fills SOLID color — 컨텍스트: text node 면 COLOR.text 우선, 아니면 COLOR.surface 우선
    if ("fills" in node && Array.isArray(node.fills) && node.fills.length > 0) {
      const fills = node.fills.map(function (f) { return Object.assign({}, f); });
      let changed = false;
      for (let i = 0; i < fills.length; i++) {
        const f = fills[i];
        if (f.type === "SOLID" && f.color && !isFillBound(node, "fills", i)) {
          const opacity = f.opacity == null ? 1 : f.opacity;
          const result = matchColorContextual(f.color, opacity, isText ? "text" : "surface");
          if (result.path && VAR_MAP[result.path]) {
            const v = figma.variables.getVariableById(VAR_MAP[result.path]);
            if (v) {
              fills[i] = figma.variables.setBoundVariableForPaint(f, "color", v);
              changed = true;
              stats.color++;
              const msg = `${nodeName} fills[${i}] (#${rgbToHex(f.color)}${opacity < 1 ? ` α${opacity.toFixed(2)}` : ""}) → ${result.path}`;
              if (result.distance > 0.05) fuzzyReport.push(msg + ` (거리 ${result.distance.toFixed(3)})`);
              else report.push(msg);
            }
          } else {
            const key = rgbToHex(f.color) + (opacity < 1 ? `α${opacity.toFixed(2)}` : "");
            unmatchedRaw.colors[key] = (unmatchedRaw.colors[key] || 0) + 1;
          }
        }
      }
      if (changed) node.fills = fills;
    }

    // 2. strokes — COLOR.border 우선
    if ("strokes" in node && Array.isArray(node.strokes) && node.strokes.length > 0) {
      const strokes = node.strokes.map(function (s) { return Object.assign({}, s); });
      let changed = false;
      for (let i = 0; i < strokes.length; i++) {
        const s = strokes[i];
        if (s.type === "SOLID" && s.color && !isFillBound(node, "strokes", i)) {
          const opacity = s.opacity == null ? 1 : s.opacity;
          const result = matchColorContextual(s.color, opacity, "border");
          if (result.path && VAR_MAP[result.path]) {
            const v = figma.variables.getVariableById(VAR_MAP[result.path]);
            if (v) {
              strokes[i] = figma.variables.setBoundVariableForPaint(s, "color", v);
              changed = true;
              stats.color++;
              const msg = `${nodeName} strokes[${i}] → ${result.path}`;
              if (result.distance > 0.05) fuzzyReport.push(msg + ` (거리 ${result.distance.toFixed(3)})`);
              else report.push(msg);
            }
          }
        }
      }
      if (changed) node.strokes = strokes;
    }

    // 3. padding — DIMENSION.spacing 만
    const paddingFields = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"];
    for (let i = 0; i < paddingFields.length; i++) {
      const prop = paddingFields[i];
      if (prop in node && typeof node[prop] === "number") {
        const result = matchDimensionContextual(node[prop], "spacing");
        if (result.path && VAR_MAP[result.path] && !isFieldBound(node, prop)) {
          try {
            node.setBoundVariable(prop, figma.variables.getVariableById(VAR_MAP[result.path]));
            stats.padding++;
            const msg = `${nodeName} ${prop}=${node[prop]} → ${result.path}`;
            if (result.distance > 0) fuzzyReport.push(msg + ` (거리 ${result.distance})`);
            else report.push(msg);
          } catch (e) {}
        } else if (!result.path && node[prop] > 0) {
          unmatchedRaw.dimensions[node[prop]] = (unmatchedRaw.dimensions[node[prop]] || 0) + 1;
        }
      }
    }

    // 4. itemSpacing — DIMENSION.spacing 만
    if ("itemSpacing" in node && typeof node.itemSpacing === "number") {
      const result = matchDimensionContextual(node.itemSpacing, "spacing");
      if (result.path && VAR_MAP[result.path] && !isFieldBound(node, "itemSpacing")) {
        try {
          node.setBoundVariable("itemSpacing", figma.variables.getVariableById(VAR_MAP[result.path]));
          stats.spacing++;
          const msg = `${nodeName} itemSpacing=${node.itemSpacing} → ${result.path}`;
          if (result.distance > 0) fuzzyReport.push(msg);
          else report.push(msg);
        } catch (e) {}
      } else if (!result.path && node.itemSpacing > 0) {
        unmatchedRaw.dimensions[node.itemSpacing] = (unmatchedRaw.dimensions[node.itemSpacing] || 0) + 1;
      }
    }

    // 5. cornerRadius — DIMENSION.radius 만
    if ("cornerRadius" in node && typeof node.cornerRadius === "number") {
      const result = matchDimensionContextual(node.cornerRadius, "radius");
      if (result.path && VAR_MAP[result.path]) {
        const v = figma.variables.getVariableById(VAR_MAP[result.path]);
        if (v) {
          try {
            ["topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius"].forEach(function (rprop) {
              if (rprop in node && !isFieldBound(node, rprop)) {
                node.setBoundVariable(rprop, v);
              }
            });
            stats.radius++;
            const msg = `${nodeName} cornerRadius=${node.cornerRadius} → ${result.path}`;
            if (result.distance > 0) fuzzyReport.push(msg);
            else report.push(msg);
          } catch (e) {}
        }
      } else if (!result.path && node.cornerRadius > 0) {
        unmatchedRaw.dimensions[node.cornerRadius] = (unmatchedRaw.dimensions[node.cornerRadius] || 0) + 1;
      }
    }

    // 6. text — fontSize / fontWeight / letterSpacing
    if (isText) {
      const fs = node.fontSize;
      if (typeof fs === "number") {
        const path = matchFontSize(fs);
        if (path && VAR_MAP[path] && !isFieldBound(node, "fontSize")) {
          try {
            node.setBoundVariable("fontSize", figma.variables.getVariableById(VAR_MAP[path]));
            stats.fontSize++;
            report.push(`${nodeName} fontSize=${fs} → ${path}`);
          } catch (e) {}
        } else if (!path) {
          unmatchedRaw.fontSizes[fs] = (unmatchedRaw.fontSizes[fs] || 0) + 1;
        }
      }
      if (node.fontName && node.fontName.style) {
        const path = matchFontWeight(node.fontName.style);
        if (path && VAR_MAP[path] && !isFieldBound(node, "fontWeight")) {
          try {
            node.setBoundVariable("fontWeight", figma.variables.getVariableById(VAR_MAP[path]));
            stats.fontWeight++;
            report.push(`${nodeName} weight=${node.fontName.style} → ${path}`);
          } catch (e) {}
        }
      }
      if (node.letterSpacing && typeof node.letterSpacing.value === "number" && node.letterSpacing.unit === "PIXELS") {
        const path = matchLetterSpacing(node.letterSpacing.value);
        if (path && VAR_MAP[path] && !isFieldBound(node, "letterSpacing")) {
          try {
            node.setBoundVariable("letterSpacing", figma.variables.getVariableById(VAR_MAP[path]));
            stats.letterSpacing++;
            report.push(`${nodeName} letterSpacing=${node.letterSpacing.value} → ${path}`);
          } catch (e) {}
        }
      }
    }

    // 자식 재귀
    if ("children" in node && node.type !== "INSTANCE") {
      for (let i = 0; i < node.children.length; i++) {
        await washNode(node.children[i]);
      }
    }
  }

  // ----- 매칭 함수 (컨텍스트 인식) -----

  // 색 매칭 — context: "text" / "surface" / "border"
  // 우선 카테고리 lookup → fallback (확장): white 같은 공유 색 매칭 위해 surface/text 도 시도
  function matchColorContextual(c, opacity, primaryCategory) {
    // primary 카테고리 우선 → 그 다음 fallback. fallback 은 카테고리별 다름.
    let fallbackCategories;
    if (primaryCategory === "text") {
      fallbackCategories = ["surface", "other"]; // text node 의 white 등 공유 색
    } else if (primaryCategory === "surface") {
      fallbackCategories = ["other", "text"]; // frame 도 brand-light bg 등
    } else if (primaryCategory === "border") {
      fallbackCategories = ["other"];
    } else {
      fallbackCategories = ["other"];
    }
    const tryCategories = [primaryCategory].concat(fallbackCategories);

    const key = colorKey(c);
    const rgbaKey = key + "," + opacity.toFixed(3);

    // 1. 정확 매칭 (alpha 포함 우선)
    for (const cat of tryCategories) {
      if (COLOR_LOOKUP_RGBA[cat] && COLOR_LOOKUP_RGBA[cat][rgbaKey]) {
        return { path: COLOR_LOOKUP_RGBA[cat][rgbaKey], distance: 0 };
      }
    }
    // 2. 정확 매칭 (RGB 만, alpha 1 일 때)
    if (opacity === 1) {
      for (const cat of tryCategories) {
        if (COLOR_LOOKUP[cat] && COLOR_LOOKUP[cat][key]) {
          return { path: COLOR_LOOKUP[cat][key], distance: 0 };
        }
      }
    }
    // 3. fuzzy 매칭 (primary 카테고리 우선, fallback 사이즈 좁힘)
    let bestPath = null;
    let bestDist = 0.12; // Phase 3: 0.15 → 0.12
    for (const cat of tryCategories) {
      const pool = COLOR_LOOKUP[cat] || {};
      for (const k in pool) {
        const parts = k.split(",").map(parseFloat);
        const d = Math.sqrt(
          Math.pow(parts[0] - c.r, 2) +
          Math.pow(parts[1] - c.g, 2) +
          Math.pow(parts[2] - c.b, 2)
        );
        if (d < bestDist) {
          bestDist = d;
          bestPath = pool[k];
        }
      }
      // primary 에서 fuzzy 매칭 됐으면 fallback 안 봄 (primary 정확도 우선)
      if (bestPath) break;
    }
    return { path: bestPath, distance: bestDist };
  }

  // dimension 매칭 — context: "radius" / "spacing" / "size"
  function matchDimensionContextual(num, category) {
    const pool = DIMENSION_LOOKUP[category] || {};
    if (pool[num] !== undefined) return { path: pool[num], distance: 0 };
    let bestPath = null;
    let bestDist = 1.5; // Phase 3: 2.5 → 1.5
    for (const k in pool) {
      const v = parseFloat(k);
      const d = Math.abs(v - num);
      if (d < bestDist) {
        bestDist = d;
        bestPath = pool[k];
      }
    }
    return { path: bestPath, distance: bestDist === 1.5 ? null : bestDist };
  }

  function matchFontSize(num) {
    if (FONTSIZE_LOOKUP[num] !== undefined) return FONTSIZE_LOOKUP[num];
    return null;
  }

  function matchFontWeight(figmaStyle) {
    const normalized = String(figmaStyle).toLowerCase().replace(/\s+/g, "");
    return FONTWEIGHT_LOOKUP[normalized] || null;
  }

  function matchLetterSpacing(num) {
    if (LETTERSPACING_LOOKUP[num] !== undefined) return LETTERSPACING_LOOKUP[num];
    return null;
  }

  function colorKey(c) {
    return c.r.toFixed(4) + "," + c.g.toFixed(4) + "," + c.b.toFixed(4);
  }

  function rgbToHex(c) {
    function h(n) { return ("0" + Math.round(n * 255).toString(16)).slice(-2); }
    return (h(c.r) + h(c.g) + h(c.b)).toUpperCase();
  }

  function isFillBound(node, prop, index) {
    if (!node.boundVariables) return false;
    const arr = node.boundVariables[prop];
    if (!Array.isArray(arr)) return false;
    return !!arr[index];
  }

  function isFieldBound(node, prop) {
    if (!node.boundVariables) return false;
    return !!node.boundVariables[prop];
  }
}

wash().catch(function (e) {
  console.error("Wash 에러:", e);
  figma.notify("Wash 에러: " + (e && e.message ? e.message : e), { error: true });
});
