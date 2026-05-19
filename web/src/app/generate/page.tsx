"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DetectionImage } from "@/components/DetectionImage";
import { DetectionTree } from "@/components/DetectionTree";
import { flattenTree, type AnalyzeTree, type DetectionNode } from "@/lib/detection-types";
import { addCandidates, type CandidateCategory } from "@/lib/review-store";
import { CopyableDetails } from "@/components/CopyableDetails";

type AnalyzeResponse = {
  tree?: AnalyzeTree;
  raw?: string;
  error?: string;
};

function inferCategory(name: string, fallback?: string): CandidateCategory {
  const first = name.split("/")[0];
  if (first === "atom" || first === "mol" || first === "ogn" || first === "page") return first;
  if (fallback === "atom" || fallback === "mol" || fallback === "ogn" || fallback === "page") return fallback;
  return "mol";
}

export default function GeneratePage() {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [featureSpec, setFeatureSpec] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [bundling, setBundling] = useState(false);

  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  function handleSendToReview() {
    if (!result?.tree) return;
    const tree = result.tree;
    const news = tree.newComponents || [];
    const screenName = tree.screen?.name;

    // 1. newComponents 에 들어있는 것들을 candidate 로
    const fromList = news.map((n) => ({
      name: n.name,
      category: inferCategory(n.name, n.category),
      description: n.reason,
      reason: n.reason,
      baseOn: n.baseOn,
      sourceImageUrl: imagePreview || undefined,
    }));

    // 2. 트리 walk 하면서 match.status === "new" 인 것도 수집 (newComponents 와 중복 제거)
    const fromTree: { name: string; category: CandidateCategory; description?: string }[] = [];
    function walk(nodes: unknown): void {
      if (!Array.isArray(nodes)) return;
      for (const n of nodes) {
        if (!n || typeof n !== "object") continue;
        const o = n as Record<string, unknown>;
        const comp = typeof o.component === "string" ? o.component : "";
        const match = o.match as { status?: string } | undefined;
        if (comp && match?.status === "new") {
          if (!fromList.find((x) => x.name === comp) && !fromTree.find((x) => x.name === comp)) {
            fromTree.push({
              name: comp,
              category: inferCategory(comp),
              description: typeof o.description === "string" ? o.description : undefined,
            });
          }
        }
        if (Array.isArray(o.children)) walk(o.children);
      }
    }
    walk(tree.screen?.children);

    const toAdd = [...fromList, ...fromTree];

    if (toAdd.length === 0) {
      alert("이번 분석에서 신규 후보가 없습니다.\n모든 컴포넌트가 라이브러리에 있는 것으로 판단됐어요.");
      return;
    }

    addCandidates(
      toAdd.map((x) => ({
        ...x,
        sessionId: screenName,
        sourceImageUrl: imagePreview || undefined,
      }))
    );

    const go = confirm(
      `✓ ${toAdd.length}개 후보를 검수 큐로 보냈어요.\n\n검수 메뉴로 이동할까요?`
    );
    if (go) router.push("/review");
  }

  const flatNodes: DetectionNode[] = useMemo(() => {
    if (!result?.tree?.screen) return [];
    return flattenTree(result.tree.screen);
  }, [result]);

  const selectedNode = selectedPath ? flatNodes.find((n) => n.path === selectedPath) : null;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleSubmit() {
    if (!imageFile) return;
    setLoading(true);
    setResult(null);
    setSelectedPath(null);
    try {
      const imageBase64 = imagePreview?.split(",")[1] ?? "";
      const mediaType = imageFile.type;
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64, mediaType, featureSpec }),
      });
      const data: AnalyzeResponse = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: err instanceof Error ? err.message : String(err) });
    } finally {
      setLoading(false);
    }
  }

  async function handleCopyBundle() {
    if (!result?.tree?.screen?.name) return;
    setBundling(true);
    try {
      const res = await fetch("/api/bundle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tree: result.tree }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert("번들 생성 실패: " + (data.error || res.statusText));
        return;
      }
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      alert("✓ 클립보드에 복사됨. Figma Scripter 에 붙여넣고 Run ▶");
    } catch (err) {
      alert("에러: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setBundling(false);
    }
  }

  // 결과 없으면 입력 폼 (기존 Phase 0 스타일)
  if (!result?.tree?.screen) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">UI 생성</h1>
            <p className="text-sm text-slate-600 mt-1">
              페이지 캡처를 업로드하면 AI 가 atom · mol · ogn 으로 분류해서 편집 가능한 트리로 보여드립니다.
            </p>
          </header>

          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-4 text-xs text-indigo-900 mb-6 flex items-start gap-2">
            <span>ℹ️</span>
            <div>
              생성된 번들을 Run 하기 전에 <strong>Figma 초기 세팅</strong> 이 되어 있어야 합니다.
              새 Figma 파일이면 <a href="/sources" className="underline font-medium">라이브러리</a> 메뉴에서 Setup task 를 먼저 실행하세요.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-800">
                1. 디자인 이미지
              </label>
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleFileChange}
                className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 file:cursor-pointer"
              />
              {imagePreview && (
                <div className="mt-3 rounded-xl border border-slate-200 p-2 bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imagePreview} alt="preview" className="max-h-96 mx-auto rounded" />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-800">
                2. 기능 설명 <span className="text-slate-400 font-normal">(선택)</span>
              </label>
              <textarea
                value={featureSpec}
                onChange={(e) => setFeatureSpec(e.target.value)}
                rows={4}
                placeholder="예: 상단에 T로고와 햄버거 메뉴, 아래에 포인트 잔액 카드와 바코드 카드 ..."
                className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!imageFile || loading}
              className="w-full py-3 rounded-full bg-indigo-600 text-white font-medium disabled:opacity-40 hover:bg-indigo-700 transition shadow-sm flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              )}
              {loading ? "분석 중… (Claude Sonnet · 30-60초)" : "분석하기"}
            </button>

            {result?.error && (
              <div className="rounded-xl p-3 bg-rose-50 border border-rose-200 text-rose-900 text-sm">
                <strong>에러:</strong> {result.error}
              </div>
            )}

            {/* 분석은 됐는데 screen 파싱 실패한 경우 (새 스키마 오류 등) */}
            {result && !result.error && !result.tree?.screen && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 space-y-2">
                <div className="text-sm font-semibold text-amber-900">
                  ⚠ AI 응답을 JSON 으로 파싱 못했어요
                </div>
                <p className="text-xs text-amber-800">
                  응답은 도착했지만 `screen` 필드가 없거나 JSON 형식이 깨졌습니다.
                  아래 raw 응답을 확인해주세요.
                </p>
                {result.raw && (
                  <div className="mt-2">
                    <CopyableDetails data={result.raw} label="Raw response" defaultOpen />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 결과 3영역 뷰
  const { screen } = result.tree;
  return (
    <div className="h-full flex">
      {/* 중앙: annotated image */}
      <section className="flex-1 min-w-0 overflow-y-auto bg-slate-100">
        <div className="p-6 flex flex-col items-center">
          <div className="w-full max-w-2xl flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold">
                Detected Screen
              </div>
              <h1 className="text-lg font-semibold tracking-tight">{screen.name}</h1>
              {screen.description && (
                <div className="text-xs text-slate-500 mt-0.5">{screen.description}</div>
              )}
            </div>
            <button
              onClick={() => {
                setResult(null);
                setSelectedPath(null);
              }}
              className="text-xs py-1.5 px-3 rounded-full border border-slate-300 hover:bg-slate-50 shrink-0"
            >
              ← 다시 업로드
            </button>
          </div>

          {imagePreview && (
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-3">
              <DetectionImage
                imageUrl={imagePreview}
                nodes={flatNodes}
                selectedPath={selectedPath}
                hoveredPath={hoveredPath}
                onSelect={setSelectedPath}
                onHover={setHoveredPath}
              />
            </div>
          )}
        </div>
      </section>

      {/* 우측: Tree + Diagnostics + CTA */}
      <aside className="w-96 shrink-0 bg-white border-l border-slate-200 flex flex-col">
        <header className="p-4 border-b border-slate-200">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold">Detection Tree</h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                atom/mol/ogn 분류 결과
              </p>
            </div>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(JSON.stringify(result.tree, null, 2));
                  alert("✓ raw JSON 복사됨. 검수 메뉴에서 붙여넣기/파일업로드로 사용 가능.");
                } catch (e) {
                  alert("복사 실패: " + (e instanceof Error ? e.message : String(e)));
                }
              }}
              className="py-1 px-2 rounded-full border border-slate-300 text-[10px] hover:bg-slate-50 shrink-0"
              title="전체 트리 JSON 을 클립보드에 복사"
            >
              📋 raw 복사
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-3">
          {flatNodes.length === 0 && (
            <div className="text-xs text-slate-400 p-2">감지된 요소 없음</div>
          )}
          <DetectionTree
            nodes={flatNodes}
            selectedPath={selectedPath}
            hoveredPath={hoveredPath}
            onSelect={setSelectedPath}
            onHover={setHoveredPath}
          />

          {selectedNode && (
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs space-y-1">
              <div className="font-mono font-semibold text-slate-900">{selectedNode.component}</div>
              {selectedNode.match && (
                <div className="text-slate-600">
                  매치: <strong>{selectedNode.match.status}</strong>
                  {selectedNode.match.ref && ` → ${selectedNode.match.ref}`}
                </div>
              )}
              {selectedNode.bbox && (
                <div className="text-slate-500 font-mono text-[10px]">
                  bbox: {selectedNode.bbox.x}, {selectedNode.bbox.y}, {selectedNode.bbox.w}×{selectedNode.bbox.h}
                </div>
              )}
              {selectedNode.description && (
                <div className="text-slate-600 italic">{selectedNode.description}</div>
              )}
            </div>
          )}

          {result.tree.newComponents && result.tree.newComponents.length > 0 && (
            <div className="mt-4">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-amber-700 mb-1.5">
                Newly Proposed ({result.tree.newComponents.length})
              </div>
              <ul className="space-y-1 text-xs">
                {result.tree.newComponents.map((nc) => (
                  <li key={nc.name} className="rounded-lg border border-amber-200 bg-amber-50 p-2">
                    <div className="font-mono font-semibold">{nc.name}</div>
                    {nc.reason && <div className="text-slate-600 mt-0.5">{nc.reason}</div>}
                    {nc.baseOn && <div className="text-slate-500 text-[10px] mt-0.5">base on: {nc.baseOn}</div>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <footer className="p-3 border-t border-slate-200 space-y-2">
          <button
            onClick={handleSendToReview}
            className="w-full py-2.5 px-4 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 shadow-sm"
          >
            🔎 신규 후보를 검수 큐로 보내기
          </button>
          <div className="text-[10px] text-slate-400 px-1 leading-relaxed">
            검수 메뉴에서 네이밍/중복/DS 업데이트 진단 후 라이브러리로 승격합니다.
          </div>
          <details className="border-t border-slate-100 pt-2 mt-1">
            <summary className="text-[10px] text-slate-500 cursor-pointer">임시 직결 번들 (Phase 1b 이전 호환)</summary>
            <button
              onClick={handleCopyBundle}
              disabled={bundling}
              className="mt-2 w-full py-2 px-4 rounded-full bg-slate-200 text-slate-700 text-xs font-medium disabled:opacity-40 hover:bg-slate-300"
            >
              {bundling ? "번들 생성 중…" : "📋 AI 트리 그대로 번들 (신규 제외)"}
            </button>
          </details>
        </footer>
      </aside>
    </div>
  );
}
