// 현재 프로젝트에 "업로드된" 소스 목록 반환. 실제 업로드 저장소는 Phase 1 에서 추가.
// 현재는 @Genui 의 파일 시스템을 읽어서 UI 리스트 생성.

import { readdirSync, statSync, existsSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { sharedRoot } from "./paths";

export type SourceItem = {
  id: string;           // 고유 ID (ex: "spec:action-button", "icon:menu", "ds:main")
  name: string;         // 표시 이름
  category: "ds" | "component" | "foundation" | "page" | "icon";
  path?: string;        // 파일 상대 경로 (업로드 시 원본)
  size?: number;        // bytes
};

function rootDir(): string {
  return sharedRoot();
}

function walk(dir: string, acc: string[]) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
}

export function listSources(): SourceItem[] {
  const root = rootDir();
  const items: SourceItem[] = [];

  // DS
  const dsPath = resolve(root, "skt-design-system.json");
  if (existsSync(dsPath)) {
    items.push({
      id: "ds:main",
      name: "skt-design-system.json",
      category: "ds",
      path: "skt-design-system.json",
      size: statSync(dsPath).size,
    });
  }

  // Component spec files (flat in component-specs/)
  const specsDir = resolve(root, "component-specs");
  const specFiles: string[] = [];
  walk(specsDir, specFiles);
  // Module code prefixes used for page specs (e.g. BIL, MBR)
  const MODULE_CODES = new Set(["BIL", "MBR", "MYBEN", "PRDD", "SCH", "MYCPN", "TPNT", "PRDL"]);
  for (const fp of specFiles) {
    if (!fp.endsWith(".json")) continue;
    try {
      const raw = readFileSync(fp, "utf8");
      const json = JSON.parse(raw);
      const name = typeof json.name === "string" ? json.name : "";
      if (!name) continue;
      // Determine category: page if first segment is a module code, else component
      const firstSeg = name.split("/")[0];
      const jsonCat = typeof json.category === "string" ? json.category : "";
      let category: SourceItem["category"];
      if (jsonCat === "foundation") {
        category = "foundation";
      } else if (jsonCat === "page" || MODULE_CODES.has(firstSeg)) {
        category = "page";
      } else {
        category = "component";
      }
      items.push({
        id: "spec:" + name,
        name,
        category,
        path: fp.replace(root + "/", ""),
        size: statSync(fp).size,
      });
    } catch {
      continue;
    }
  }

  // Icon SVG files
  const iconDir = resolve(root, "figma-icons", "Normal");
  if (existsSync(iconDir)) {
    const svgFiles: string[] = [];
    walk(iconDir, svgFiles);
    // Genui 프로젝트에서 실제로 import 한 아이콘만 표시 (전체 340개는 노이즈)
    const imported = new Set([
      "menu.svg", "home.svg", "homeFill.svg", "search.svg",
      "businessBag.svg", "businessBagFill.svg", "sparkleFill.svg",
    ]);
    for (const fp of svgFiles) {
      const base = fp.split("/").pop() || "";
      if (!imported.has(base)) continue;
      const shortName = base.replace(/\.svg$/, "");
      items.push({
        id: "icon:" + shortName,
        name: "figma-icons/Normal/" + base,
        category: "icon",
        path: "figma-icons/Normal/" + base,
        size: statSync(fp).size,
      });
    }
  }

  return items;
}
