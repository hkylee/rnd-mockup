"use client";

export type ChainStep = {
  path: string;
  value: string | number | null;
};

export type TokenPanelData = {
  tokenPath: string;
  type: "foundation" | "semantic" | "component";
  foundationCategory: string | null;
  chain: ChainStep[];
  resolvedValue: string | number | null;
};

const FOUNDATION_LABEL: Record<string, string> = {
  radius: "Radius",
  spacing: "Spacing",
  typography: "Typography",
  color: "Color",
  shadow: "Shadow",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNode(ds: any, path: string): any {
  const parts = path.split(".");
  let node = ds;
  for (const p of parts) {
    if (node == null) return null;
    node = node[p];
  }
  return node;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildTokenChain(ds: any, path: string): ChainStep[] {
  const steps: ChainStep[] = [];
  let current = path;
  const visited = new Set<string>();
  while (current && !visited.has(current)) {
    visited.add(current);
    const node = getNode(ds, current);
    if (!node || typeof node !== "object") {
      steps.push({ path: current, value: null });
      break;
    }
    const val = node.$value ?? node.value;
    if (typeof val === "string" && /^\{.+\}$/.test(val)) {
      steps.push({ path: current, value: null });
      current = val.slice(1, -1);
    } else {
      steps.push({ path: current, value: val ?? null });
      break;
    }
  }
  return steps;
}

export function getFoundationCategory(path: string): string | null {
  if (/^foundation\.dimension\.radius\b/.test(path)) return "radius";
  if (/^foundation\.dimension\.spacing\b/.test(path)) return "spacing";
  if (/^foundation\.typography\b/.test(path)) return "typography";
  if (/^foundation\.color\b/.test(path)) return "color";
  if (/^foundation\.shadow\b/.test(path)) return "shadow";
  if (/^semantic\.color\b/.test(path)) return "color";
  if (/^semantic\.typography\b/.test(path)) return "typography";
  return null;
}

export function getTokenType(path: string): "foundation" | "semantic" | "component" {
  if (path.startsWith("foundation.")) return "foundation";
  if (path.startsWith("semantic.")) return "semantic";
  return "component";
}

export function resolveFoundationCategory(chain: ChainStep[]): string | null {
  for (const step of chain) {
    const cat = getFoundationCategory(step.path);
    if (cat) return cat;
  }
  return null;
}

export function TokenDetailPanel({
  data,
  onClose,
  onNavigateFoundation,
}: {
  data: TokenPanelData | null;
  onClose: () => void;
  onNavigateFoundation: (category: string) => void;
}) {
  const visible = !!data;

  return (
    <div
      className={`fixed bottom-6 right-6 w-[320px] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 transition-all duration-200 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      {data && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                data.type === "foundation"
                  ? "bg-emerald-100 text-emerald-700"
                  : data.type === "semantic"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-violet-100 text-violet-700"
              }`}
            >
              {data.type}
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 transition p-0.5 rounded-md hover:bg-slate-100"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {/* Token path */}
            <div className="font-mono text-[12px] font-semibold text-slate-800 break-all mb-3 leading-relaxed">
              {data.tokenPath}
            </div>

            {/* Resolved value */}
            {data.resolvedValue !== null && (
              <div className="flex items-center gap-2 mb-3">
                {typeof data.resolvedValue === "string" && data.resolvedValue.startsWith("#") && (
                  <span
                    className="w-5 h-5 rounded-md border border-black/10 shrink-0 inline-block"
                    style={{ background: data.resolvedValue }}
                  />
                )}
                <span className="font-mono text-[12px] text-slate-500">{String(data.resolvedValue)}</span>
              </div>
            )}

            {/* Resolution chain */}
            {data.chain.length > 1 && (
              <div className="bg-slate-50 rounded-xl px-3 py-2.5 mb-3">
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                  Resolution chain
                </div>
                <div className="space-y-0.5">
                  {data.chain.map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-baseline gap-1 text-[11px] font-mono ${
                        i === data.chain.length - 1 ? "text-slate-800 font-semibold" : "text-slate-400"
                      }`}
                    >
                      {i > 0 && <span className="text-slate-300 text-[10px]">→</span>}
                      <span className="break-all">
                        {step.value !== null ? String(step.value) : step.path}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Foundation nav button */}
            {data.foundationCategory && (
              <button
                onClick={() => onNavigateFoundation(data.foundationCategory!)}
                className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-[12px] font-semibold transition ${
                  data.type === "semantic"
                    ? "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                    : "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Foundation · {FOUNDATION_LABEL[data.foundationCategory] ?? data.foundationCategory} 에서 보기
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
