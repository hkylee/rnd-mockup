// AI 가 생성한 spec 의 미세한 누락을 자동 보정.
// 핵심: VERTICAL + counterAxisSizingMode FIXED 컨테이너의 자식은
//        layoutAlign: "STRETCH" 가 없으면 자동 추가 (그래야 가로 fill 됨).

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Json = any;

function normalizeContainer(container: Json): void {
  if (!container || typeof container !== "object") return;
  const layout = container.layout;
  const children = container.children;

  if (
    layout &&
    layout.mode === "VERTICAL" &&
    layout.counterAxisSizingMode === "FIXED" &&
    Array.isArray(children)
  ) {
    for (const child of children) {
      if (
        child &&
        typeof child === "object" &&
        !("layoutAlign" in child) &&
        // text 는 STRETCH 안 줘도 줄바꿈 자체로 fill 효과
        child.kind !== "text" &&
        // absolute positioning 은 auto-layout 밖이라 layoutAlign 무의미
        child.layoutPositioning !== "ABSOLUTE"
      ) {
        child.layoutAlign = "STRETCH";
      }
    }
  }

  // 중첩 group 도 재귀
  if (Array.isArray(children)) {
    for (const c of children) {
      if (c && c.kind === "group") normalizeContainer(c);
    }
  }
}

export function normalizeSpec(spec: Json): Json {
  if (!spec) return spec;
  if (spec.base) normalizeContainer(spec.base);
  // variants overrides 안에도 base 와 같은 구조가 있을 수 있음
  if (spec.variants?.overrides && typeof spec.variants.overrides === "object") {
    for (const ov of Object.values(spec.variants.overrides)) {
      if (ov && typeof ov === "object") normalizeContainer(ov);
    }
  }
  return spec;
}
