"use client";

import { useRef } from "react";

import { PageRunList } from "@/components/PageRunList";
import { RunsFileTree, type RunsFileTreeHandle } from "@/components/RunsFileTree";

export default function ScripterLibraryPage() {
  const fileTreeRef = useRef<RunsFileTreeHandle | null>(null);

  return (
    <div className="h-full flex">
      <section className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <header className="mb-6">
            <div className="text-[10px] uppercase tracking-wider text-indigo-600 font-semibold mb-1">
              Scripter Run
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Component Run</h1>
            <p className="text-sm text-slate-600 mt-1">
              카탈로그 전체 (상단) 또는 화면별 cascade (하단) 로 빌드. 결과는 클립보드 자동 복사 → Figma Scripter ⌘V → Run ▶
            </p>
          </header>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 mb-6">
            DS Run 이 먼저 실행되어 있어야 Variable 바인딩이 정상 작동합니다.
          </div>

          <PageRunList onFilesChanged={() => fileTreeRef.current?.refresh()} />
        </div>
      </section>

      <RunsFileTree ref={fileTreeRef} />
    </div>
  );
}
