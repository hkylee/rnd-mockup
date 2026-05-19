# Genui Spec Extractor (Figma Plugin)

Figma 손작업 컴포넌트 → `component-specs/*.json` 포맷 자동 추출.

## 등록 방법 (한 번만)

1. Figma 데스크톱 앱 실행 (브라우저 X — plugin dev 는 데스크톱 전용)
2. 메뉴 → `Plugins` → `Development` → `Import plugin from manifest...`
3. 이 폴더 안 `manifest.json` 선택
4. 메뉴 → `Plugins` → `Development` → `Genui Spec Extractor` 가 보이면 등록 완료

## 사용

### 1개 컴포넌트 추출
1. Figma 안 추출할 컴포넌트 (또는 frame / instance) 선택
2. 메뉴 → `Plugins` → `Development` → `Genui Spec Extractor` 실행
3. plugin UI 에 spec JSON 표시
4. 옵션:
   - **복사** 버튼 → 클립보드 복사 → web `/figma-wash` 에 paste
   - **웹으로 전송** 버튼 → `localhost:3000/api/figma-wash` POST → web 자동 워싱

### 페이지 전체 추출 (옵션)
plugin UI 의 "페이지 전체" 토글 ON → 현재 Figma 페이지 안 모든 top-level component / instance / frame 일괄 추출

## 추출 범위

| 속성 | 추출 |
|---|---|
| `layout` | layoutMode, primaryAxisSizingMode, padding*, itemSpacing, layoutAlign |
| `visual` | fills (color), strokes, cornerRadius, effects (shadow) |
| `children` | text / instance (ref) / nested group (재귀) |
| `exposeAs` | componentProperty (TEXT / BOOLEAN / INSTANCE_SWAP / VARIANT) |
| `variants` | ComponentSet 자식들의 variant axes + overrides |
| 토큰 매칭 | boundVariables (Variable 바인딩) → `{semantic.color.brand.primary}` 형태 |
| Typography composite | 4단계 fallback: textStyleId → Variable path → raw 값 → raw 문자열 |
| 위계 (category) | 이름 prefix 없으면 노드 구조 (width/padding/children) 로 atom/mol/ogn/page 추론 |
| ID slug | 한글 노드명은 `text-1` / `group-1` / `ref-1` sequential id 자동 부여 |

## DS Lookup 갱신

plugin 안 typography lookup table 은 DS (`skt-design-system.json`) 에서 자동 생성됨.
DS 의 `semantic.typography.*` 추가/변경 시 **반드시** 재실행:

```bash
node scripter/build-plugin-lookup.js
```

이후 Figma 메뉴에서 plugin reload (Plugins → Development → 우클릭 → Reload).

## 한계

- **위계 판정** — atom/mol/ogn 추정 휴리스틱. 결과 spec 의 `category` 필드 검토 필요
- **변형 (variants) 추론** — ComponentSet 형태일 때만 자동. 단일 Component 는 variants 없음으로 처리
- **typography 동률** — DS 에 동일 raw 값/path 의 composite 가 여럿이면 (예: `body` vs `list-label`) DS 정의 순서대로 첫 후보 사용

## 트러블슈팅

- **plugin 등록 X** — Figma 브라우저 버전은 dev plugin 미지원. 데스크톱 앱 사용
- **localhost POST 실패** — `npm run dev` 가 `web/` 에서 돌고 있는지 확인. CORS 문제 시 paste 폴백 사용
- **추출 결과 비어있음** — 선택 노드가 frame / component / instance / group / text 중 하나여야 함
