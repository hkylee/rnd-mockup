// Setup task 목록 — 새 Figma 파일을 현재 @Genui 상태로 복제하는 순차 task.
// 각 task 는 copy 가능한 번들 1개 ↔ Scripter 1 Run 에 대응.

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { collectAllSpecs } from "./collect-specs";
import { sharedRoot } from "./paths";

export type SetupTask = {
  id: string;
  step: number;
  name: string;
  phase: string;
  kind: "sync" | "static" | "spec";
  // kind=spec 일 때
  specName?: string;
  // kind=static 일 때
  filePath?: string;
  note?: string;
};

function runsFilePath(filename: string): string {
  return resolve(sharedRoot(), "scripter", "runs", filename);
}

export function listSetupTasks(): SetupTask[] {
  const tasks: SetupTask[] = [];
  let step = 0;

  // Phase 1: Variables
  tasks.push({
    id: "sync",
    step: ++step,
    name: "sync-tokens (DS → Figma Variables)",
    phase: "Variables",
    kind: "sync",
    note: "가장 먼저 실행. idempotent (재실행 안전).",
  });

  // Phase 2: Icons (static files from scripter/runs/)
  const iconFiles = [
    { file: "icon-menu.generated.js", name: "atom/icon/menu" },
    { file: "icon-home.generated.js", name: "atom/icon/home" },
    { file: "icon-home-fill.generated.js", name: "atom/icon/home-fill" },
    { file: "icon-search.generated.js", name: "atom/icon/search" },
    { file: "icon-bag.generated.js", name: "atom/icon/bag" },
    { file: "icon-bag-fill.generated.js", name: "atom/icon/bag-fill" },
  ];
  for (const i of iconFiles) {
    if (existsSync(runsFilePath(i.file))) {
      tasks.push({
        id: "icon:" + i.name,
        step: ++step,
        name: i.name + " (SVG import)",
        phase: "Icons (SVG)",
        kind: "static",
        filePath: i.file,
      });
    }
  }

  // Skeleton icons (combined)
  if (existsSync(runsFilePath("skeleton-icons.generated.js"))) {
    tasks.push({
      id: "skeleton-icons",
      step: ++step,
      name: "Skeleton 아이콘 5개 (qr-scan, T, signal, wifi, battery)",
      phase: "Icons (Skeleton)",
      kind: "static",
      filePath: "skeleton-icons.generated.js",
      note: "회색 박스 placeholder. 실제 SVG 받으면 --icon 으로 교체.",
    });
  }

  // Phase 3-5: spec 기반 atom → mol → ogn
  const specs = collectAllSpecs({ excludePage: true });
  for (const s of specs) {
    const phase =
      s.category === "atom" ? "Atom (spec)"
      : s.category === "mol" ? "Molecule"
      : "Organism";
    tasks.push({
      id: "spec:" + s.name,
      step: ++step,
      name: s.name,
      phase,
      kind: "spec",
      specName: s.name,
    });
  }

  return tasks;
}

export function readStaticBundleFile(filename: string): string | null {
  const p = runsFilePath(filename);
  if (!existsSync(p)) return null;
  return readFileSync(p, "utf8");
}
