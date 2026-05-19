import Link from "next/link";
import indexJson from "@/components/library/index.json";

const index = indexJson as { atom: string[]; mol: string[]; ogn: string[]; page: string[] };

export default function LibraryIndex() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">컴포넌트 라이브러리 (React 미리보기)</h1>
      <p className="text-sm text-slate-500 mb-8">
        spec JSON → React 자동 변환 결과. 모바일 viewport (375×812) 안에 렌더 — &quot;웹 배포됐을 때 모습&quot;.
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">📱 Page ({index.page.length})</h2>
        <ul className="grid grid-cols-2 gap-2">
          {index.page.map((name) => {
            const slug = name.replace(/^page\//, "");
            return (
              <li key={name}>
                <Link
                  href={`/library/preview/${slug}`}
                  className="block px-4 py-3 bg-white rounded-lg border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition"
                >
                  <span className="text-sm font-mono">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mb-10 grid grid-cols-3 gap-6">
        <Stat label="Atom" count={index.atom.length} items={index.atom} />
        <Stat label="Molecule" count={index.mol.length} items={index.mol} />
        <Stat label="Organism" count={index.ogn.length} items={index.ogn} />
      </section>

      <p className="text-xs text-slate-400">
        spec/DS 변경 후{" "}
        <code className="px-1.5 py-0.5 bg-slate-100 rounded">npm run sync:shared</code>{" "}
        (mockup → web/shared 갱신 + tokens 재빌드) 후{" "}
        <code className="px-1.5 py-0.5 bg-slate-100 rounded">npm run build:components</code>{" "}
        실행.
      </p>
    </div>
  );
}

function Stat({ label, count, items }: { label: string; count: number; items: string[] }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4">
      <h3 className="text-sm font-semibold mb-2">
        {label} <span className="text-slate-400">({count})</span>
      </h3>
      <ul className="text-xs text-slate-600 space-y-1 max-h-48 overflow-y-auto font-mono">
        {items.map((n) => (
          <li key={n} className="truncate" title={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
