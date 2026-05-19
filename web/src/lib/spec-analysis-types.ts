export type ComponentMatch = {
  name: string;                                 // 원본 표기
  status: "reused" | "rename" | "new";
  suggested?: string;                           // rename 시 조정안
  category?: "atom" | "mol" | "ogn" | "page";
  reason?: string;
};

export type FeatureRow = {
  specId: string;
  screenId?: string;
  name: string;
  description?: string;
  components: ComponentMatch[];
  module?: string;
  priority?: string;
};

export type InferredEssential = {
  name: string;                         // 카탈로그 매칭 또는 신규 이름
  category: "atom" | "mol" | "ogn" | "page";
  status: "reused" | "rename" | "new";  // 카탈로그 대조 결과
  suggested?: string;                   // rename 시
  reason: string;                       // 추론 근거 (페이지 역할 기반)
  confidence: "high" | "medium" | "low";
  kind?: "chrome" | "content";          // chrome = 시스템 외피, content = 화면 컨텐츠
  appliesToScreens?: string[];          // 어느 screen id 들에 적용 (없으면 전체 적용)
};

// UX_GOVERNANCE.md 의 7단계 (1 진입 / 2 탐색 / 3 검색 / 4 결정 / 5 실행 / 6 완료 / 7 CS)
export type UxStageNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type UxStageInfo = {
  primary: UxStageNumber;                 // 화면이 가장 강하게 속하는 단계
  secondary?: UxStageNumber | null;       // 부가 단계 (없으면 null)
  principles: string[];                   // 해당 단계 bullet 중 이 화면에 적용되는 1-3개
  checkpoints: string[];                  // spec 작성 체크포인트 중 핵심 2-4개
};

export const UX_STAGE_NAMES: Record<UxStageNumber, string> = {
  1: "진입",
  2: "탐색",
  3: "검색",
  4: "결정",
  5: "실행/구매",
  6: "완료",
  7: "문제해결/CS",
};

export type SpecAnalysisResult = {
  features: FeatureRow[];
  inferredEssentials?: InferredEssential[];  // 기능내역서에 빠졌지만 일반적으로 필요한 컴포넌트
  screenRole?: string;                       // 전체 요약 (deprecated; 호환성 위해 유지)
  screenRoles?: Record<string, string>;      // screen id → 역할 문장 (1-2 문장, 페이지가 어떤 일을 하는지)
  uxStages?: Record<string, UxStageInfo>;    // screen id → UX 단계 분류 (UX_GOVERNANCE)
  notes?: string;
};
