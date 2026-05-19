# Specs Input — 기능내역서 입력 보관소

> `SPEC_INPUT_TEMPLATE.md` 양식에 따라 채운 기능내역서 보관 폴더.
> 정책서 도출 / Notion 추출 / 사용자 직접 작성 모두 이 형식.

## 폴더 구조

파일 명명: `{MODULE-CODE}-{use-case-or-screen-group}.md`

```
specs-input/
└── MBR-signup.md       (US-MBR-CS-001 회원 가입 — 4 화면)
└── MBR-dormant.md      (US-MBR-CS-002 휴면 해제 — 4 화면)
└── MBR-leave.md        (US-MBR-CS-003 회원 탈퇴 — 5 화면)
└── MBR-rejoin.md       (US-MBR-CS-004 재가입 — 3 화면)
```

## 작업 흐름 내 위치

```
1. 정책서 / 시안 / 기획서       (외부 입력)
2. 기능내역서 도출 / 작성       ← 여기 (specs-input/)
3. SPEC_REPORT 분석            (mockup/mockup-docs/SPEC_REPORT_TEMPLATE.md 양식)
4. spec JSON 작성              (component-specs/)
5. cascade 빌드 → Figma
```

## 출처 표시

각 파일 상단 frontmatter 에 출처 명시:
- 정책서 도출: 정책서 파일명 + Use Case ID + 도출일
- Notion 추출: Notion DB URL + 추출일
- 직접 작성: 작성자 + 작성일

## 참고

- 양식: `mockup/mockup-docs/SPEC_INPUT_TEMPLATE.md`
- 정책서 도출 양식: `mockup/mockup-docs/POLICY_REPORT_TEMPLATE.md`
- 다음 단계: `mockup/mockup-docs/SPEC_REPORT_TEMPLATE.md`
