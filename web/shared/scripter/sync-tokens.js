// =============================================
// SKT Genui — Token Sync (DS JSON → Figma Variables)
// bundler --sync 모드가 DS_TOKENS 를 상단에 주입 후 이 코드를 붙임.
//
// 동작 (idempotent):
//   1) "SKT Foundation / Semantic / Component" 3개 컬렉션 — 없으면 생성, 있으면 재사용
//   2) 기존 Variable 은 이름으로 매칭해서 "값만 업데이트" → ID 유지
//   3) 신규 Variable 만 새로 생성
//   4) Type 불일치 시 삭제 후 재생성 (해당 Variable 바인딩만 끊김)
//   5) DS 에서 사라진 Variable 은 orphan 으로 로그만 남김 (자동 삭제 안 함)
//   6) path → variableId 맵을 figma.root.setPluginData("skt-vars") 로 업데이트
//
// 지원: color(COLOR), dimension/fontSize/lineHeight/fontWeight/letterSpacing/duration(FLOAT),
//       cubicBezier(STRING). 복합(typography, shadow)은 skip.
// =============================================

// ---------- Helpers ----------
function hexToRgb_s(s) {
  s = s.replace("#", "");
  if (s.length === 3) s = s.split("").map((c) => c + c).join("");
  // 8자리 hex 면 마지막 2자리는 alpha (#RRGGBBAA)
  let alpha = 1;
  if (s.length === 8) {
    alpha = parseInt(s.slice(6, 8), 16) / 255;
    s = s.slice(0, 6);
  }
  const n = parseInt(s.slice(0, 6), 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255, a: alpha };
}

function parseNum_s(v) {
  if (typeof v === "number") return v;
  if (typeof v === "string") return parseFloat(v);
  return 0;
}

function isAlias_s(v) { return typeof v === "string" && /^\{.+\}$/.test(v); }
function aliasPath_s(v) { const m = v.match(/^\{(.+)\}$/); return m ? m[1] : null; }

function figmaTypeFor_s(tokenType) {
  if (tokenType === "color") return "COLOR";
  if (tokenType === "dimension") return "FLOAT";
  if (tokenType === "fontSize" || tokenType === "lineHeight" ||
      tokenType === "fontWeight" || tokenType === "letterSpacing" ||
      tokenType === "duration") return "FLOAT";
  if (tokenType === "fontFamily") return "STRING";
  if (tokenType === "cubicBezier" || tokenType === "other") return "STRING";
  return null; // composite / unsupported
}

function walkLeafTokens_s(obj, cb, prefix) {
  if (!prefix) prefix = [];
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return;
  if ("value" in obj && "type" in obj) { cb(prefix.join("."), obj); return; }
  for (const key in obj) walkLeafTokens_s(obj[key], cb, prefix.concat([key]));
}

function topCollection_s(path) {
  const t = path.split(".")[0];
  if (t === "foundation") return "foundation";
  if (t === "semantic")   return "semantic";
  if (t === "component")  return "component";
  return null;
}

function varNameFor_s(path) {
  const parts = path.split(".");
  return parts.slice(1).join("/");
}

// FLOAT 또는 dimension 같은 경우 lineHeight value 가 "120%" 면 120 (FLOAT) 로 저장.
// parseNum_s 가 처리.
function computeValue_s(ftype, rawValue) {
  if (ftype === "COLOR") return hexToRgb_s(String(rawValue));
  if (ftype === "FLOAT") return parseNum_s(rawValue);
  return String(rawValue);
}

// Variable alias 현재 값이 같은지 체크 (불필요한 쓰기 방지)
function aliasValueEquals(existingValue, targetId) {
  return existingValue && existingValue.type === "VARIABLE_ALIAS" && existingValue.id === targetId;
}

// ---------- Main ----------
async function syncTokens() {
  await figma.loadAllPagesAsync();

  // 1) 3 컬렉션 찾기/생성
  const existingCols = await figma.variables.getLocalVariableCollectionsAsync();
  function findOrCreate(name) {
    let c = existingCols.find(function (x) { return x.name === name; });
    if (!c) c = figma.variables.createVariableCollection(name);
    return c;
  }
  const foundation = findOrCreate("SKT Foundation");
  const semantic   = findOrCreate("SKT Semantic");
  const component  = findOrCreate("SKT Component");

  const cols = {
    foundation: { col: foundation, mode: foundation.modes[0].modeId },
    semantic:   { col: semantic,   mode: semantic.modes[0].modeId },
    component:  { col: component,  mode: component.modes[0].modeId }
  };

  // 2) 기존 Variable 을 (컬렉션이름 + 변수이름) 으로 인덱스
  const existingByKey = {};   // "SKT Foundation|color/purple/500" → Variable
  for (const colName in cols) {
    const c = cols[colName].col;
    for (let i = 0; i < c.variableIds.length; i++) {
      const vid = c.variableIds[i];
      try {
        const v = await figma.variables.getVariableByIdAsync(vid);
        if (v) existingByKey[c.name + "|" + v.name] = v;
      } catch (e) {}
    }
  }

  // 3) DS leaf 토큰 수집
  const allTokens = [];
  walkLeafTokens_s(DS_TOKENS, function (path, leaf) {
    allTokens.push({ path: path, leaf: leaf });
  });

  const pathToVar = {};
  const stats = { created: 0, updated: 0, typeRecreated: 0, skipped: 0, aliasCreated: 0, aliasUpdated: 0, unchanged: 0 };
  const usedKeys = {};   // 이번 sync 에서 다룬 key — orphan 검출용

  function upsertVar(path, leaf, aliasMode) {
    const ftype = figmaTypeFor_s(leaf.type);
    if (!ftype) { stats.skipped++; return null; }

    const colName = topCollection_s(path);
    if (!colName) { stats.skipped++; return null; }
    const c = cols[colName];
    const varName = varNameFor_s(path);
    const key = c.col.name + "|" + varName;
    usedKeys[key] = true;

    let v = existingByKey[key];

    // Type 불일치면 재생성
    if (v && v.resolvedType !== ftype) {
      try { v.remove(); } catch (e) {}
      delete existingByKey[key];
      v = null;
      stats.typeRecreated++;
      console.warn("Type 불일치로 재생성: " + key + " (" + v + " → " + ftype + ")");
    }

    if (aliasMode) {
      // Alias variable: value 는 VARIABLE_ALIAS 포인터
      const targetPath = aliasPath_s(leaf.value);
      const targetVar = pathToVar[targetPath];
      if (!targetVar) return "defer";

      if (!v) {
        v = figma.variables.createVariable(varName, c.col, ftype);
        v.setValueForMode(c.mode, { type: "VARIABLE_ALIAS", id: targetVar.id });
        stats.aliasCreated++;
      } else {
        const currentValue = v.valuesByMode[c.mode];
        if (!aliasValueEquals(currentValue, targetVar.id)) {
          v.setValueForMode(c.mode, { type: "VARIABLE_ALIAS", id: targetVar.id });
          stats.aliasUpdated++;
        } else {
          stats.unchanged++;
        }
      }
    } else {
      // Literal variable
      const val = computeValue_s(ftype, leaf.value);
      if (!v) {
        v = figma.variables.createVariable(varName, c.col, ftype);
        v.setValueForMode(c.mode, val);
        stats.created++;
      } else {
        const currentValue = v.valuesByMode[c.mode];
        // 값 비교 — COLOR 는 객체, FLOAT 는 숫자
        let same = false;
        if (ftype === "COLOR" && currentValue && typeof currentValue === "object") {
          same = Math.abs((currentValue.r||0) - val.r) < 0.001 &&
                 Math.abs((currentValue.g||0) - val.g) < 0.001 &&
                 Math.abs((currentValue.b||0) - val.b) < 0.001;
        } else if (ftype === "FLOAT") {
          same = currentValue === val;
        } else {
          same = currentValue === val;
        }
        if (!same) {
          v.setValueForMode(c.mode, val);
          stats.updated++;
        } else {
          stats.unchanged++;
        }
      }
    }
    pathToVar[path] = v;
    return v;
  }

  // Pass 1: literal
  for (let i = 0; i < allTokens.length; i++) {
    const entry = allTokens[i];
    if (isAlias_s(entry.leaf.value)) continue;
    upsertVar(entry.path, entry.leaf, false);
  }

  // Pass 2: alias (fix-point)
  let remaining = allTokens.filter(function (e) {
    return figmaTypeFor_s(e.leaf.type) && isAlias_s(e.leaf.value) && !pathToVar[e.path];
  });

  let iter = 0, progress = true;
  while (remaining.length > 0 && iter < 20 && progress) {
    iter++;
    progress = false;
    const next = [];
    for (let i = 0; i < remaining.length; i++) {
      const entry = remaining[i];
      const result = upsertVar(entry.path, entry.leaf, true);
      if (result === "defer") next.push(entry);
      else if (result) progress = true;
    }
    remaining = next;
  }
  if (remaining.length > 0) {
    console.warn("해결 실패한 alias " + remaining.length + "개:");
    for (let i = 0; i < remaining.length; i++) {
      console.warn("  " + remaining[i].path + " → " + remaining[i].leaf.value);
    }
  }

  // Orphan 검출 (DS 에 더 이상 없는 Variable)
  const orphans = [];
  for (const key in existingByKey) {
    if (!usedKeys[key]) orphans.push(key);
  }
  if (orphans.length > 0) {
    console.warn("Orphan Variable " + orphans.length + "개 (DS 에서 제거됐지만 Figma 에 남아있음, 자동 삭제 안 함):");
    for (let i = 0; i < Math.min(orphans.length, 10); i++) console.warn("  " + orphans[i]);
    if (orphans.length > 10) console.warn("  ... +" + (orphans.length - 10) + " more");
  }

  // 4) pluginData 에 저장
  const idMap = {};
  for (const p in pathToVar) idMap[p] = pathToVar[p].id;
  figma.root.setPluginData("skt-vars", JSON.stringify(idMap));

  const totalVars = Object.keys(idMap).length;
  console.log("=== Sync 완료 (idempotent) ===");
  console.log("  Total tokens mapped: " + totalVars);
  console.log("  - Literal created:   " + stats.created);
  console.log("  - Literal updated:   " + stats.updated);
  console.log("  - Alias created:     " + stats.aliasCreated);
  console.log("  - Alias updated:     " + stats.aliasUpdated);
  console.log("  - Type recreated:    " + stats.typeRecreated);
  console.log("  - Unchanged:         " + stats.unchanged);
  console.log("  - Skipped (composite/unknown): " + stats.skipped);
  if (orphans.length > 0) console.log("  - Orphans (DS 에서 제거됨): " + orphans.length);

  const changed = stats.created + stats.updated + stats.aliasCreated + stats.aliasUpdated + stats.typeRecreated;
  figma.notify("✓ Sync (" + changed + " changed, " + stats.unchanged + " unchanged, " + totalVars + " total)");
}

syncTokens().catch(function (e) {
  console.error("에러:", e);
  figma.notify("에러: " + (e && e.message ? e.message : e), { error: true });
});
