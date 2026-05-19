import { buildSetupBundle } from "@/lib/bundle-setup";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function GET() {
  try {
    const bundleJs = buildSetupBundle();
    return new Response(bundleJs, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Content-Disposition": `attachment; filename="genui-setup.generated.js"`,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
