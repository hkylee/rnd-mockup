# Description 구조화 포맷 규칙

화면설계서(Storyboard) Description에서 마크다운 대신 **태그 기반 구조화 포맷**을 사용한다.

> 📍 **어휘 source-of-truth**: 본 문서의 `[고지:]` / `[상태:]` 태그는 mockup 영역의 가이드와 어휘 일치 — 두 시스템이 같은 정책서를 다른 산출물 (SB HTML / figma component) 로 분기하는 한 흐름이라 어휘 drift 방지 위해 mockup 을 source 로 함.
> - 마킹 (필수/사용성) → `mockup/mockup-docs/POLICY_REPORT_TEMPLATE.md § 1.8` (source-of-truth)
> - 상태 (default/loading/empty/error/partial/branch) → `mockup/mockup-docs/SPEC_REPORT_TEMPLATE.md § 1.6` + `SPEC_INPUT_TEMPLATE.md § 컨텍스트 > 상태 시나리오`
>
> ⚠️ **`[톤:]` 태그 폐기 (2026-05-01)** — SB 의 역할은 "기능 정의" 이지 "디자인 톤" 이 아님. 톤은 시각 디자인 단계 산출물 (POLICY_REPORT § 1.9 그대로 유지하되 SB description 에선 사용 금지).

## 태그 종류

| 태그 | 용도 | 예시 |
|------|------|------|
| `[영역명]` | 영역의 이름/타이틀 | `[영역명] 개인화 컨텍스트 카드` |
| `[규칙:카테고리]` | 상세 규칙 설명 | `[규칙:노출순서] 어드민 지정순` |
| `[조건:조건명]` | 조건별 동작 설명 | `[조건:배너1개] 고정 노출 \| 인디케이터 미노출` |
| `[이동:트리거]` | 이동 대상 화면/기능 | `[이동:a영역선택] 해당 상품 상세 이동` |
| `[노출:범위]` | 최소/최대 노출 개수 등 | `[노출:개수] 최소 5개, 최대 20개` |
| `[고지:마킹\|정책ID]` ⭐ | 법적 고지·안내 텍스트 (정책 ID + 마킹) | `[고지:필수\|PG-MBR-TERM-001] 필수 약관 동의 — 전기통신사업법 § 22-2` |
| `[상태:케이스]` ⭐ | 상태별 동작 (default/loading/empty/error/partial/branch) | `[상태:loading] skeleton row × 3 \| CTA disabled` |
| `[액션:타입]` ⭐ | 사용자 인터랙션 (tap/long-tap/swipe/pull-to-refresh/focus/input/submit/paste/voice/share) | `[액션:tap row] 약관 BottomSheet open` |
| `[권한:종류]` | 시스템 권한 요청 (location/camera/notification/microphone/contacts) | `[권한:notification] 가입 완료 후 푸시 알림 권한 요청` |
| `[자동:trigger]` | 자동 trigger (timer/timeout/auto-refresh/deep-link/notification-tap/background-resume) | `[자동:timer 3분] 인증번호 만료 → snack-bar` |

> ⭐ **마킹 표준** (`[고지:]` 태그 첫 항목):
> - `필수` → 법적 의무 (전기통신사업법 § 22-2 / 개인정보보호법 등) **또는** 정책서에 "안내·고지" 형태로 명시. 누락 시 컴플라이언스 위반.
> - `사용성` → 정책서엔 추상적 ("여부", "이동 경로"), UX 보완 차원. 누락 시 리뷰 권장.

> ⭐ **상태 케이스 표준** (`[상태:]` 태그):
> - `default` (정상) / `loading` (API 호출 중) / `empty` (데이터 없음) / `error` (실패) / `partial` (일부 입력) / `branch` (분기 — 미성년/제한 등)

> ⭐ **액션 표준** (`[액션:]` 태그 — 사용자 인터랙션):
> - **기본**: `tap` / `long-tap` / `swipe-left|right|up|down` / `pull-to-refresh` / `scroll` / `pinch` / `drag`
> - **입력**: `focus` / `blur` / `input` / `submit` / `paste` / `voice`
> - **시스템**: `share` / `permission-request` / `notification-tap` / `deep-link` / `background-resume`
> - 형식: `[액션:tap {대상}] {결과}` 또는 `[액션:long-tap row] 컨텍스트 메뉴`

> ⭐ **권한 / 자동 trigger 별도 태그**:
> - `[권한:]` — `location` / `camera` / `notification` / `microphone` / `contacts`
> - `[자동:]` — `timer N분` / `timeout` / `auto-refresh N초` / `deep-link {scheme}` / `notification-tap`

## 작성 규칙

1. 각 줄은 하나의 태그로 시작
2. 태그 뒤 공백 한 칸 후 내용 기술
3. 조건 내 복수 속성은 `|`로 구분
4. 영역명은 영역당 첫 줄에 반드시 포함
5. 기존 `#`/`##`/`###` 마크다운 헤딩 사용 금지
6. ⭐ 동의·법적 고지 영역엔 **`[고지:]` 태그 필수** (마킹 + 정책 ID)
7. ⭐ 상태 분기가 있는 영역엔 **`[상태:]` 태그 권장** — `[조건:]` 과 짝으로 작성

## 변환 예시

### Static 영역 (dynamic=no)

**AS-IS (마크다운):**
```
#개인화 컨텍스트 카드
##a영역 선택 시 해당 상품 상세 이동
최소 5개 노출, 최대 20개 노출
```

**TO-BE (구조화):**
```
[영역명] 개인화 컨텍스트 카드
[이동:a영역선택] 해당 상품 상세 이동
[노출:개수] 최소 5개, 최대 20개
```

### Dynamic 영역 (dynamic=yes)

**AS-IS (마크다운):**
```
#이벤트/프로모션 배너_빅 배너
##노출 순서
어드민 지정순으로 노출
##노출 방식
배너 1개: 고정 노출, 인디케이터 미노출, 스와이프 불가
배너 2개 이상: 무한 로테이션, 3초 자동 롤링, 인디케이터 노출, 스와이프 가능
```

**TO-BE (구조화):**
```
[영역명] 이벤트/프로모션 배너_빅 배너
[규칙:노출순서] 어드민 지정순
[조건:배너1개] 고정 노출 | 인디케이터 미노출 | 스와이프 불가
[조건:배너2개+] 무한 로테이션 | 3초 자동 롤링 | 인디케이터 노출 | 스와이프 가능
```

## 어노테이션 리뷰와의 호환

- 구조화 포맷은 어노테이션 리뷰 시 Policy diff 비교에 직접 활용 가능
- `[규칙:]`, `[조건:]` 태그를 Policy 원문의 해당 섹션과 1:1 매핑하여 비교
- 누락된 태그 → `누락` 어노테이션, 불일치 태그 → `정책위반` 어노테이션
