// DS 토큰 alias 를 recursive 하게 풀어 raw value 반환.
// spec 에서 쓰는 `{path.to.token}` 문법 처리.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tokens = any;

export function resolveToken(tokens: Tokens, path: string): string | number | null {
  const parts = path.split(".");
  let cur: Tokens = tokens;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  if (cur && typeof cur === "object" && "value" in cur) {
    const v = cur.value;
    if (typeof v === "string") {
      const m = v.match(/^\{(.+)\}$/);
      if (m) return resolveToken(tokens, m[1]);
      return v;
    }
    if (typeof v === "number") return v;
    return null;
  }
  return null;
}

export function resolveRef(tokens: Tokens, ref: unknown): string | number | null {
  if (typeof ref === "number") return ref;
  if (typeof ref !== "string") return null;
  const m = ref.match(/^\{(.+)\}$/);
  if (!m) return ref; // raw (예: "120%", "#fff", "HUG")
  return resolveToken(tokens, m[1]);
}
