import { listSources } from "@/lib/sources-catalog";

export const runtime = "nodejs";

export async function GET() {
  try {
    const items = listSources();
    return Response.json({ items });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
