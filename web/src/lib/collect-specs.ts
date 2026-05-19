// component-specs/ 전체를 crawl 해서 의존성 순서로 반환.
// atom → mol → ogn (공통) → ogn (모듈 종속) → page

import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, join } from "node:path";
import { sharedRoot } from "./paths";

export type SpecCategory = "atom" | "mol" | "ogn" | "page";

export type CollectedSpec = {
  name: string;
  category: SpecCategory;
  filePath: string;
  spec: Record<string, unknown>;
};

function walkJson(dir: string, acc: string[]) {
  const entries = readdirSync(dir);
  for (const e of entries) {
    const full = join(dir, e);
    const st = statSync(full);
    if (st.isDirectory()) walkJson(full, acc);
    else if (e.endsWith(".json")) acc.push(full);
  }
}

const CATEGORY_ORDER: SpecCategory[] = ["atom", "mol", "ogn", "page"];

export function collectAllSpecs(opts?: { excludePage?: boolean }): CollectedSpec[] {
  const root = sharedRoot();
  const specsDir = resolve(root, "component-specs");

  const files: string[] = [];
  walkJson(specsDir, files);

  const out: CollectedSpec[] = [];
  for (const fp of files) {
    const raw = readFileSync(fp, "utf8");
    let json: Record<string, unknown>;
    try {
      json = JSON.parse(raw);
    } catch {
      continue;
    }
    const name = typeof json.name === "string" ? json.name : "";
    const category = name.split("/")[0] as SpecCategory;
    if (!CATEGORY_ORDER.includes(category)) continue;
    if (opts?.excludePage && category === "page") continue;

    out.push({ name, category, filePath: fp, spec: json });
  }

  // 정렬: category 순서 → 같은 category 안은 이름 오름차순
  out.sort((a, b) => {
    const ca = CATEGORY_ORDER.indexOf(a.category);
    const cb = CATEGORY_ORDER.indexOf(b.category);
    if (ca !== cb) return ca - cb;
    return a.name.localeCompare(b.name);
  });

  return out;
}
