# Specs Report — SPEC_REPORT 분석 보관소

> `SPEC_REPORT_TEMPLATE.md` 양식에 따라 작성한 분석 보고서 보관 폴더.
> `specs-input/` (입력) 의 다음 단계 산출물.

## 폴더 구조

파일 명명: `{MODULE-CODE}-{use-case-or-screen-group}.md`
입력 파일과 동일한 명명 → 1:1 매칭.

```
specs-report/
└── MBR-signup.md       (US-MBR-CS-001 회원 가입 분석)
└── MBR-dormant.md      (US-MBR-CS-002 휴면 해제 분석)
└── MBR-leave.md        (US-MBR-CS-003 회원 탈퇴 분석)
└── MBR-rejoin.md       (US-MBR-CS-004 재가입 분석)
```

## 작업 흐름 내 위치

```
1. 정책서 / 시안 / 기획서       (외부 입력)
2. 기능내역서 도출             (specs-input/)
3. SPEC_REPORT 분석            ← 여기 (specs-report/)
4. spec JSON 작성              (component-specs/)
5. cascade 빌드 → Figma
```

## 각 보고서 구성 (SPEC_REPORT_TEMPLATE 따름)

- § 0. 입력 요약 (입력 파일 / 모듈 / 화면·기능 수)
- § 1. 카탈로그 대조 (재사용 / 리네임 / 신규)
- § 2. DS 토큰 점검 (재사용 / 신규 / 결정 필요)
- § 3. Cascade 빌드 순서 (atom → mol → ogn → page)
- § 4. 의사결정 체크리스트 (사용자 검토)

## 참고

- 양식: `mockup/mockup-docs/SPEC_REPORT_TEMPLATE.md`
- 입력 보관소: `mockup/specs-input/`
- 빌드 도구: `mockup/scripter/bundle.js`
- 진단 도구: `mockup/scripter/audit.js`
