# Figma 어노테이션 리뷰 규칙

## 워크플로우
1. 사용자가 Figma 프레임 선택 + Description 작성
2. Description 내 `@policy:`, `@req:`, `@sb:` 태그로 비교 대상 지정
3. Claude가 해당 문서를 Notion에서 fetch
4. Description과 Policy diff 비교 → 어노테이션 부착
5. 사용자가 리뷰 후 직접 수정

## Description 태그 포맷
```
@policy: P-RCM, P-MAIN
@req: REQ-MAIN-001
@sb: SB-MAIN
```
- 문서 단위로만 지정 (섹션 단위 지정 불가 — Notion fetch 제약)
- 태그가 있으면 해당 문서만 fetch → 토큰 절감

## 어노테이션 카테고리
| 카테고리 | 색상 | 용도 |
|---------|------|------|
| 오타 | red | 맞춤법, 오탈자 |
| 정책위반 | orange | Policy 규칙과 불일치 |
| 누락 | yellow | 필수 항목 빠짐 |
| 용어 | violet | 용어 불일치 |
| 확인필요 | blue | 자동 판단 어려움, 사용자 판단 요청 |

## 어노테이션 본문 포맷
```markdown
**[이슈유형]** 간결한 요약
- AS-IS: 현재 내용
- TO-BE: 권장 수정안
- 근거: [정책서명](Notion URL) — 관련 섹션명
- 📅 YYYY-MM-DD
```

## annotationId 규칙
```
review-YYYYMMDD-N
```
예: `review-20260327-1`, `review-20260327-2`

## 기타 규칙
- 1 이슈 = 1 어노테이션 (개별로 부착)
- AS-IS / TO-BE 필수
- 근거에 Notion 원문 링크 포함 (마크다운 링크)
- 오타는 근거 불필요, Policy 관련은 정책서 링크 + 섹션명 기재
- 확인필요는 제안만 (강제하지 않음)
- categoryId: `1:3` (Claude / 주황) 사용

