import { listSetupTasks } from "@/lib/setup-tasks";

export const runtime = "nodejs";

export async function GET() {
  try {
    const tasks = listSetupTasks();
    return Response.json({ tasks });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
