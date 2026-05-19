# Service Design — Image → Figma Component Automator

> 이미지(+ 기능내역서) 를 업로드하면 AI 가 atom/mol/ogn/page 계층으로 분석해 DS 토큰 바인딩된 Figma 컴포넌트를 자동 생성하는 웹서비스. 현재 @Genui 프로젝트의 수동 워크플로우를 제품화.

---

## 1. 서비스 정체

### 한 줄 설명
**"디자인 이미지 한 장 → DS 적용된 Figma 컴포넌트 + Scripter 스크립트 자동 생성."**

### 타겟 사용자
1. **디자인 시스템 보유 기업의 디자인/개발팀** (SKT, 토스, 카카오 등) — 기존 DS 에 매핑해서 일관성 유지하며 빠르게 화면 다수 제작
2. **DS 를 세우려는 스타트업** — 임시로 토큰 정의 + 첫 화면부터 시스템화

### 경쟁 대비 포지셔닝
- 단순 "이미지→코드" 툴(Locofy, Anima) 은 **raw 픽셀값**으로 생성 — DS 일관성 없음
- 이 서비스는 **DS 토큰 바인딩이 핵심**. 디자인 → 코드 아닌 **디자인 → DS 적용된 Figma 컴포넌트** 로 차별화

### 가치 제안
| 기존 흐름 | 이 서비스 |
|---|---|
| 디자이너 Figma 에서 수동으로 DS 토큰 일일이 연결 | 이미지 업로드 → 자동 |
| 개발자 CSS 변수 매핑 재작업 | 이미 DS 토큰 물린 상태로 개발 넘어감 |
| 시안 1장 당 1-2시간 | 5-10분 |

---

## 2. 사용자 동선 (User Journey)

@Genui 프로젝트에서 진행한 실제 경험을 그대로 투영:

### Journey A: 첫 사용 (onboarding)
1. **회원가입** — Google/Figma OAuth
2. **프로젝트 생성** — 이름 + 설명
3. **DS JSON 업로드** — DTCG 형식 (skt-design-system.json 같은)
4. **Figma 파일 연동** (선택) — 결과물이 들어갈 Figma URL 등록

### Journey B: 화면 만들기 (핵심 루프)
1. **Screen 추가** — "MY 혜택 화면" 이름 지정
2. **이미지 업로드** — 디자인 시안 drag&drop
3. **기능내역서 입력** (선택) — 간단한 서술 ("상단 T로고 + 햄버거 메뉴, 아래 포인트 카드 ...")
4. **AI 분석 시작** — Claude Vision + DS 매핑 → 트리뷰 결과
5. **결과 검토 및 교정** (대화형)
   ```
   [자동 결과]
   ├── ogn/status-bar
   ├── ogn/GNB
   ├── ogn/MYBEN/card-points
   │   └── mol/card-info-stack
   │       └── mol/card-header (label+title)
   │       └── mol/point-balance
   │           └── atom/icon/sparkle
   └── ...
   
   [사용자 교정]
   "card-header 말고 card-header-label-only 로 써줘"
   → 즉시 트리 업데이트
   ```
6. **Spec preview** — 각 component 의 JSON spec + baseline 시각
7. **Bundle 생성** — cascade 순서대로 .js 파일 다수 생성
8. **Figma 에 적용** — 두 가지 방법:
   - (a) **복붙 모드** (MVP): 번들 .js 파일들을 차례로 다운받아 Scripter 에 붙여 Run
   - (b) **Plugin 모드** (beta): Figma Plugin 이 번들 직접 주입 → 순차 실행
9. **결과 확인 + iteration** — Figma 스크린샷 업로드 → AI 가 diff 분석 → 수정사항 제안

### Journey C: 컴포넌트 재사용
- 새 화면 만들 때 기존 프로젝트의 atom/mol/ogn 을 **재활용** 자동 인식
- 없는 것만 신규 생성 → cascade 최소화

---

## 3. 핵심 기능 (MVP 범위)

| # | 기능 | 설명 |
|---|---|---|
| F1 | DS JSON 업로드/관리 | DTCG 토큰 검증 + 저장 |
| F2 | 이미지 업로드 + 분석 | Claude Vision + 프롬프트로 계층 분류 |
| F3 | Spec 생성 | atom/mol/ogn/page JSON spec 자동 생성 + DS 토큰 매핑 |
| F4 | 컴포넌트 카탈로그 | 프로젝트 내 모든 atom/mol/ogn/page 목록 + 재사용 추적 |
| F5 | Bundle 생성 | 현재 `scripter/bundle.js` 의 웹 버전 + cascade 자동 계산 |
| F6 | Scripter 코드 export | 다운로드 or 클립보드 복사 |
| F7 | 대화형 교정 | 결과 트리에 "이건 다르게" 피드백 → 재생성 |

### Nice-to-have (Phase 2+)
- Figma Plugin (복붙 없이 직접 주입)
- 결과 diff 분석 (Figma vs 원본 이미지)
- 버저닝 (spec 히스토리)
- 팀 협업 (프로젝트 공유)

---

## 4. 아키텍처 & 기술 스택

### 스택 선택 (이유 포함)

| 레이어 | 기술 | 이유 |
|---|---|---|
| **Frontend** | Next.js 15 (React) | 풀스택 프레임워크, SSR, Vercel 배포 원클릭 |
| **UI** | Tailwind CSS + shadcn/ui | 표준 디자인 시스템. 빠른 구축 |
| **Backend** | Next.js API Routes (+ Edge runtime) | MVP 단계는 monolith 가 단순 |
| **LLM** | Anthropic Claude API (Vision + Sonnet 4.x) | 이미지 분석 정확도 + tool use 기능 |
| **DB** | Supabase (Postgres + Auth + Storage) | 3-in-1, 무료 tier 넉넉, Next.js 연동 쉬움 |
| **Auth** | Supabase Auth (+ Google OAuth) | 가장 단순 |
| **Hosting** | Vercel | Next.js 공식, CI/CD 자동 |
| **Figma 통합** | Plugin API (Phase 2) | 현재 Scripter 복붙은 MVP, 장기는 Plugin |

### 시스템 다이어그램

```
┌────────────────────────────────────────────────────────┐
│  Browser (Next.js Frontend)                             │
│  - 이미지 업로드 · 트리뷰어 · Spec 에디터                     │
└──────────┬─────────────────────────────────────────────┘
           │ HTTPS
           ▼
┌────────────────────────────────────────────────────────┐
│  Next.js API Routes                                     │
│  /api/analyze    → Claude Vision 호출                    │
│  /api/generate   → Spec 생성 (Claude + DS 매핑)          │
│  /api/bundle     → Scripter 번들 생성                     │
└────┬──────────────────────┬──────────────────┬─────────┘
     │                      │                  │
     ▼                      ▼                  ▼
┌──────────┐        ┌───────────────┐    ┌──────────┐
│ Supabase │        │ Anthropic API │    │  S3/     │
│ Postgres │        │ (Claude API)  │    │  Supa    │
│ + Storage│        │               │    │  Storage │
└──────────┘        └───────────────┘    └──────────┘
```

### 데이터 모델 (핵심)

```
users               (id, email, ...)
projects            (id, user_id, name, ds_json_url, figma_url)
components          (id, project_id, name, category, spec_json, bundle_url)
screens             (id, project_id, name, image_url, feature_spec, status)
analysis_sessions   (id, screen_id, claude_conversation, tree_json)
```

---

## 5. 개발 로드맵

### Phase 0: Prototype (2-3주)
**목표**: 한 페이지짜리 MVP. 이미지 한 장 올리면 번들 다운.
- [ ] Next.js 프로젝트 셋업
- [ ] 이미지 업로드 폼 + Claude Vision 호출 페이지
- [ ] 결과 → JSON spec 표시 → 다운로드
- [ ] 기존 `scripter/bundle.js` 로직을 API route 로 포팅
- **개발 리소스**: 풀스택 1명, 2-3주
- **결과**: 기술 검증 완료. 투자 데모 가능.

### Phase 1: MVP Launch (1-2개월)
**목표**: 실제 사용 가능한 베타 서비스.
- [ ] 회원가입/로그인 (Supabase Auth)
- [ ] 프로젝트/화면 관리 CRUD
- [ ] DS JSON 업로드 + 검증
- [ ] 분석 결과 트리뷰어
- [ ] 대화형 교정 UI (Claude chat 스타일)
- [ ] 번들 일괄 생성 + 다운로드
- **개발 리소스**: 풀스택 1명 + 디자이너 0.5 (part-time), 2개월
- **결과**: 첫 유저 10명 확보, 피드백 수집

### Phase 2: Beta (2-3개월)
**목표**: UX 매끄러움 + Figma Plugin.
- [ ] Figma Plugin 개발 — 복붙 없이 버튼 한 번으로 주입
- [ ] 결과 diff 분석 (원본 이미지 vs Figma 결과)
- [ ] 컴포넌트 카탈로그 뷰
- [ ] 재사용 추적 (기존 atom/mol 자동 매칭)
- [ ] 버저닝
- **개발 리소스**: 풀스택 1명 + Figma Plugin 개발자 1명 (part-time), 3개월
- **결과**: 무료 → 유료 전환 가능한 수준

### Phase 3: Scale (3-6개월)
**목표**: B2B 고객 확보, 수익화.
- [ ] 팀 협업 (프로젝트 공유, 권한)
- [ ] 코드 export (React/Vue 컴포넌트 스켈레톤)
- [ ] Public API 제공
- [ ] 결제 시스템 (Stripe)
- **개발 리소스**: 풀스택 2명 + 백엔드 1 + DevOps 0.5, 6개월
- **결과**: 유료 플랜 론칭

---

## 6. 필요한 개발자 라인업

### MVP (Phase 0-1)
- **풀스택 개발자 1명 (필수)** — Next.js + Claude API 경험
  - 역할: 전체 프론트+API+LLM 파이프라인
  - 시장 단가: 400-600만원/월 (시니어 기준)
- **디자이너 0.5명 (part-time)**
  - 역할: UI/UX + 자체 DS 정의 (shadcn 기반 커스텀)
  - 월 150-200만원

### Beta (Phase 2 추가)
- **Figma Plugin 개발자 1명 (part-time)** — TypeScript + Figma Plugin API
  - 월 150-250만원

### Scale (Phase 3 추가)
- **백엔드 개발자 1명** — DB 스케일링, 비용 최적화
- **DevOps 0.5명** — CI/CD, 모니터링

### 혼자 시작하는 방법 (개발 경험 없으신 경우)
1. **Lovable / Cursor + Claude** 로 MVP 혼자 제작 (AI 보조 코딩)
2. **프리랜서 1명 고용** (크몽/위시캣, 2-3개월 계약) — Phase 0-1 완주
3. **외주 에이전시** — 견적 2,000-3,000만원대 (기간 3개월 내외)

---

## 7. 비용 추정

### 초기 개발 비용 (MVP)
- 풀스택 개발자 2개월 × 500만원 = **1,000만원**
- 디자이너 1개월 × 200만원 = **200만원**
- Figma Plugin 개발 (Phase 2) +500-800만원
- **Total MVP**: 약 **1,200-1,500만원**

### 월 운영 비용 (유저 100명 가정)
| 항목 | 비용 |
|---|---|
| Vercel Pro | $20 |
| Supabase Pro | $25 |
| Claude API (유저당 $2-5) | $200-500 |
| Storage (S3) | $10-30 |
| 도메인/기타 | $10 |
| **합계** | **$265-585/월 (약 35-80만원)** |

### 유저당 원가
- 이미지 분석 1건 = Claude Vision call ~$0.05-0.20
- Spec 생성 = Sonnet long context ~$0.20-0.50
- **1 screen 생성 = $0.30-0.80 원가**
- → 유료 플랜 최소 단가: **$10/월 (10 screens)** 부터 흑자 가능

---

## 8. 리스크 & 대응

| 리스크 | 대응 |
|---|---|
| **Claude API 비용 폭증** | 프롬프트 캐싱 활용 (DS JSON 같은 large context 캐시), 배치 처리 |
| **분류 정확도** | 사용자 교정 루프 필수. Few-shot 예시를 DS 에 포함. |
| **Figma API 제약** | Phase 2 에서 Plugin 개발 — 복붙보다 UX 월등 |
| **DTCG 외 포맷** | MVP 는 DTCG 만. 추후 Style Dictionary 등 어댑터 추가 |
| **지적 재산권** | 유저 업로드 이미지 저작권은 유저 책임. 약관 명시 |
| **시장 크기 불확실** | MVP 내부 팀 + SKT 등 기존 연결 있는 조직에서 검증 후 확장 |

---

## 9. 혼자 개발 시작하기 체크리스트

개발 경험 없으시면 이 순서 추천:

### Week 1-2: 학습 & 환경 세팅
- [ ] Next.js 튜토리얼 (공식 learn.nextjs.org)
- [ ] Claude API Quickstart (docs.anthropic.com)
- [ ] Supabase 기본 CRUD 실습
- [ ] Cursor 또는 Claude Code (현재 사용 중!) 에디터 셋업

### Week 3-4: Prototype 개발 (AI 보조)
- [ ] Next.js 앱 `create-next-app` 으로 시작
- [ ] 이미지 업로드 폼 + `/api/analyze` route
- [ ] Claude Vision 호출 → JSON 반환
- [ ] 기존 `bundle.js` 를 API route 로 포팅
- **하루 2-3시간씩 투자하면 한 달이면 Phase 0 완성 가능**

### Week 5-8: Phase 1
- [ ] Auth 추가, DB 설계
- [ ] 트리뷰어 + 교정 UI
- [ ] 배포 (Vercel)

### 막히면
- **개인 멘토** 고용 (크몽/탈잉, 시간당 3-10만원) — 주 1-2회 코드 리뷰
- **프리랜서 파트너** — 막힌 부분만 집중 해결 (건당 30-100만원)

---

## 10. 요약 / 다음 스텝

**가능한가?** ✅ 네. PoC 검증 완료 (현재 프로젝트).
**얼마나 드나?** 1,200-1,500만원 (MVP) + 월 35-80만원 (운영).
**시간은?** 풀타임 2개월 / 하루 2-3시간 시 4-6개월.

**추천 다음 스텝**
1. 이 설계서 리뷰 + 피드백
2. 서비스명/브랜딩 결정
3. MVP 스코프 축소 검토 (가장 가벼운 단일 기능부터)
4. 개발 시작 방식 선택 (직접/프리랜서/에이전시)
5. 도메인 확보 & Figma/Anthropic 계정 세팅

---

_Updated: 2026-04-24 · @Genui 프로젝트 기반 설계서_
