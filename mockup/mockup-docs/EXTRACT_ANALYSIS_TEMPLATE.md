# Extract 분석 보고서 양식

> Figma plugin (`Genui Spec Extractor`) 으로 추출한 raw spec JSON 을 받아 **분해 → 카탈로그 매칭 → DP 룰 검수 → 적용 계획** 을 정형으로 보고하는 양식.
>
> **사용 흐름** — 사용자가 plugin extract 결과 (spec JSON) 를 채팅에 paste → Claude 가 이 양식으로 자동 응답 → 사용자가 § 6 의 결정 사항에 답 → spec 작성 진입.

---

## 0. 요약 표

| 항목 | 값 |
|---|---|
| 입력 | `<category>` `<name>` (W×H, padding, 의도 추정 한 줄) |
| 의도 추정 | `<한 문장>` |
| 결과 | 신규 ogn `<N>` + 재사용 atom/mol `<N>` + 신규 mol 후보 `<N>` + 사용자 결정 `<N>` 건 |

## 1. 위계 분해 (제안)

```
신규 또는 재사용 ogn path
├── (외피: padding/radius/fill/stroke/shadow 요약)
└── content wrapper
    ├── 분해 단위 1                        ← 재사용/신규 표시
    ├── 분해 단위 2 (신규 mol/...)         ← 🆕
    └── 분해 단위 3 (atom/...)             ← ✅ 재사용
```

> **분해 원칙** (DP § 4·5 + CLAUDE.md):
> - 단일 위치에서만 쓰는 묶음은 별도 mol 분리 X — inline group 으로
> - 재사용 가능성이 보이면 신규 mol 후보로 (사용자에게 다른 화면 쓰임 확인)
> - atom 의 원자 속성 (type/state/size) 만 variants. mol 레벨 분기는 별개 mol 로

## 2. 카탈로그 매칭

| # | 분해 단위 | 후보 spec | 일치도 | 액션 |
|---|---|---|---|---|
| 1 | `<단위 설명>` | `<path>` 또는 (신규) | high / medium / low / — | ✅ 재사용 / 🆕 신규 / inline |

**일치도 기준**:
- **high** — 구조 + props 거의 동일, 그대로 재사용
- **medium** — 구조 비슷, typography/색/spacing 일부 다름. 토큰 통일 후 재사용 또는 variant 추가
- **low** — 의도는 비슷하나 구조 달라 신규 분리 권장
- **—** — 비교 대상 없음 (신규 ogn 자체 등)

## 3. Variable 매칭

| 항목 | raw | DS 토큰 | 신뢰도 / 비고 |
|---|---|---|---|
| `<속성 명>` | `<원본 값>` | `<토큰 path>` 또는 ❌ 없음 | ✅ / ⚠️ 사용자 결정 / (재사용으로 해소) |

> **카테고리** (참고): color (text / surface / border / other) · dimension (radius / spacing / size) · typography (composite + 4 field) · shadow

> **❌ 없음** 케이스 처리:
> - 가까운 후보 1~2개 같이 제시 (값 거리, 의도)
> - 사용자에게 "DS 추가 vs 가까운 토큰으로 통일" 결정 묻기

## 4. DP 룰 검수

- ✅ `<통과 룰>` — 근거 (DP 섹션 또는 메모리 / CLAUDE.md 참조)
- ⚠️ `<경고 (수정 권장)>` — 이유 + 권장 조치
- ❌ `<위반 (수정 필요)>` — 이유 + 필수 조치

> **자주 검수하는 룰**:
> - 외피 + content wrapper (DP § 4.3)
> - 외피 padding 24 baseline (DP § 9, 메모리 baselines)
> - Pattern A/B 페이지 padding (DP § 9.1.1, 메모리 subpage_pattern_b) — 소속 페이지 확인 필요
> - baseline width FILL/HUG (CONVENTIONS § 6.3)
> - center align — result-summary 등 강조 ogn (메모리 baselines)
> - 도메인 텍스트 기준 (메모리 baselines)
> - group id unique (extractor 가 중복 만들 수 있음)
> - slug 의미 보존 (한글 손실 케이스 보고)
> - ref `component` path prefix (atom/mol/ogn) 누락 보강
> - 법적 고지 마킹 🔴/🟡 (AUDIT_RULES Rule 12)

## 5. 적용 계획 (사용자 승인 후)

1. 신규 spec 작성 — `<path>` (이름 확정 시)
2. 재사용 단위 — 어떤 spec, 어떤 props 주입
3. Variable 박기 — § 3 의 ✅ 자동, ⚠️ 사용자 결정 후 반영
4. bundle 범위 — 단일 spec? `--changed` cascade? `--group <cat>`?
5. Scripter run 후 시각 검증

## 6. 미해결 — 사용자 결정 필요

> _아래 답 주시면 spec 작성 진입 가능_

1. **이름 / 모듈 코드** — `<제안 path>` OK?
2. **typography 외 raw** — DS 추가 vs 가까운 토큰으로 통일?
3. **신규 mol 분리 여부** — 다른 화면에서도 쓸 패턴인가?
4. **소속 페이지** — 홈/sub (Pattern A/B 결정)
5. ... (extract 별로 다름 — 케이스마다 추가)

---

## 양식 사용 규칙

- **§ 0~6 순서 고정** — 사용자가 어디서 무엇을 보는지 알도록
- **표 우선** — 줄글보다 표가 비교/스캔에 빠름
- **결정 항목은 모두 § 6 모음** — 사용자가 답할 곳을 한 군데로
- **링크는 `[name](path)` markdown 형식** (VSCode 클릭 가능)
- **이모지 ✅⚠️❌🆕** — 빠른 시각 분류용, 다른 위치에선 자제
