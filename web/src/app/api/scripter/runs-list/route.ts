import { readdirSync, statSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export const runtime = "nodejs";

function runsDir(): string {
  return resolve(process.cwd(), "..", "mockup", "scripter", "runs");
}

type FileEntry = {
  name: string;
  category: "sync" | "library" | "pages" | "atom" | "mol" | "ogn" | "page" | "icon" | "other";
  size: number;
  mtime: number;
};

function classify(name: string): FileEntry["category"] {
  if (name.startsWith("sync-tokens")) return "sync";
  if (name.startsWith("library")) return "library";
  if (name.startsWith("pages")) return "pages";
  if (name.startsWith("atom-")) return "atom";
  if (name.startsWith("mol-")) return "mol";
  if (name.startsWith("ogn-")) return "ogn";
  if (name.startsWith("page-")) return "page";
  if (name.startsWith("icon-")) return "icon";
  return "other";
}

export async function GET() {
  try {
    const dir = runsDir();
    if (!existsSync(dir)) return Response.json({ files: [] });
    const entries = readdirSync(dir).filter((f) => f.endsWith(".generated.js"));
    const files: FileEntry[] = entries.map((name) => {
      const st = statSync(resolve(dir, name));
      return {
        name,
        category: classify(name),
        size: st.size,
        mtime: st.mtimeMs,
      };
    });
    files.sort((a, b) => b.mtime - a.mtime);
    return Response.json({ files });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
