// 선택된 소스의 spec + DS 토큰 + (필요시) 아이콘 SVG 반환.
// 클라이언트가 이걸로 미러링 렌더.

import { readFileSync, existsSync } from "node:fs";
import { resolve as pResolve, join } from "node:path";
import { sharedRoot } from "@/lib/paths";
import { getSpecDeps } from "@/lib/spec-deps";

export const runtime = "nodejs";

function root(): string {
  return sharedRoot();
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const kind = url.searchParams.get("kind");
    const name = url.searchParams.get("name");

    const rootDir = root();

    // DS
    if (kind === "ds") {
      const dsPath = pResolve(rootDir, "skt-design-system.json");
      if (!existsSync(dsPath)) return Response.json({ error: "DS 없음" }, { status: 404 });
      const ds = JSON.parse(readFileSync(dsPath, "utf8"));
      return Response.json({ kind: "ds", ds });
    }

    // Icon SVG
    if (kind === "icon") {
      if (!name) return Response.json({ error: "name 필수" }, { status: 400 });
      const svgPath = pResolve(rootDir, "figma-icons", "Normal", name + ".svg");
      if (!svgPath.startsWith(pResolve(rootDir, "figma-icons")) || !existsSync(svgPath)) {
        return Response.json({ error: "SVG 없음" }, { status: 404 });
      }
      const svg = readFileSync(svgPath, "utf8");
      return Response.json({ kind: "icon", name, svg });
    }

    // Spec (atom/mol/ogn/page)
    if (kind === "spec") {
      if (!name) return Response.json({ error: "name 필수" }, { status: 400 });
      const specPath = pResolve(rootDir, "component-specs", name + ".json");
      if (!specPath.startsWith(pResolve(rootDir, "component-specs")) || !existsSync(specPath)) {
        return Response.json({ error: "spec 없음" }, { status: 404 });
      }
      const spec = JSON.parse(readFileSync(specPath, "utf8"));
      const ds = JSON.parse(readFileSync(pResolve(rootDir, "skt-design-system.json"), "utf8"));

      // 아이콘 SVG 번들 — spec.base 하위 ref 중 atom/icon/* 에 대응하는 SVG 수집
      const icons: Record<string, string> = {};
      const needed = new Set<string>();
      collectIconRefs(spec, needed);
      const iconDir = pResolve(rootDir, "figma-icons", "Normal");
      const iconMap: Record<string, string[]> = {
        // icon name -> possible svg file names (first found wins)
        menu: ["menu.svg"],
        home: ["home.svg"],
        "home-fill": ["homeFill.svg"],
        search: ["search.svg"],
        bag: ["businessBag.svg"],
        "bag-fill": ["businessBagFill.svg"],
        sparkle: ["sparkleFill.svg"],
      };
      for (const iconName of needed) {
        const candidates = iconMap[iconName] || [iconName + ".svg"];
        for (const c of candidates) {
          const p = join(iconDir, c);
          if (existsSync(p)) {
            icons[iconName] = readFileSync(p, "utf8");
            break;
          }
        }
      }

      const deps = getSpecDeps(name);
      return Response.json({ kind: "spec", name, spec, ds, icons, deps });
    }

    return Response.json({ error: "kind 파라미터 필요 (ds | icon | spec)" }, { status: 400 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}

function collectIconRefs(obj: unknown, acc: Set<string>) {
  if (!obj || typeof obj !== "object") return;
  const o = obj as Record<string, unknown>;
  if (o.kind === "ref" && typeof o.component === "string") {
    const c = o.component;
    if (c.startsWith("atom/icon/")) acc.add(c.slice("atom/icon/".length));
  }
  for (const k in o) {
    const v = o[k];
    if (Array.isArray(v)) v.forEach((x) => collectIconRefs(x, acc));
    else if (v && typeof v === "object") collectIconRefs(v, acc);
  }
}
