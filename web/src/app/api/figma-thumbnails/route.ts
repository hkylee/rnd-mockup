import { NextRequest, NextResponse } from "next/server";
import { FIGMA_NODE_MAP, FIGMA_FILE_KEY } from "@/lib/figma-node-map";

// 메모리 캐시 (서버 재시작 전까지 유지)
let cache: { urls: Record<string, string>; ts: number } | null = null;
const CACHE_TTL = 1000 * 60 * 30; // 30분

export async function GET(req: NextRequest) {
  const token = process.env.FIGMA_TOKEN;
  if (!token) return NextResponse.json({ error: "FIGMA_TOKEN missing" }, { status: 500 });

  // 특정 spec만 요청 시
  const specName = req.nextUrl.searchParams.get("name");

  // 캐시 유효하면 바로 반환
  if (cache && Date.now() - cache.ts < CACHE_TTL) {
    if (specName) return NextResponse.json({ url: cache.urls[specName] ?? null });
    return NextResponse.json({ urls: cache.urls });
  }

  // 모든 노드 ID를 한 번에 요청 (Figma API 제한: 최대 ~200개)
  const allIds = Object.values(FIGMA_NODE_MAP);
  const idsParam = allIds.map(id => id.replace(":", "-")).join(",");

  const res = await fetch(
    `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${idsParam}&format=png&scale=2`,
    { headers: { "X-Figma-Token": token }, next: { revalidate: 1800 } }
  );

  if (!res.ok) {
    return NextResponse.json({ error: `Figma API ${res.status}` }, { status: res.status });
  }

  const data = await res.json();
  const figmaImages: Record<string, string> = data.images ?? {};

  // node ID → spec path 역매핑 (콜론/하이픈 양쪽 모두 커버)
  const nodeToSpec: Record<string, string> = {};
  for (const [spec, nodeId] of Object.entries(FIGMA_NODE_MAP)) {
    nodeToSpec[nodeId] = spec;
    nodeToSpec[nodeId.replace(":", "-")] = spec;
  }

  const urls: Record<string, string> = {};
  for (const [rawId, url] of Object.entries(figmaImages)) {
    if (typeof url === "string") {
      const spec = nodeToSpec[rawId];
      if (spec) urls[spec] = url;
    }
  }

  cache = { urls, ts: Date.now() };

  if (specName) return NextResponse.json({ url: urls[specName] ?? null });
  return NextResponse.json({ urls });
}
