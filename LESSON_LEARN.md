# Lesson Learn — PXDS HTML Mockup 구현 방식

> 작성일: 2026-05-18  
> 맥락: signup-flow.html / home-screen.html 을 Figma spec 기반으로 구현하면서 발견한 문제와 해결 원칙

---

## 문제: 손코딩 CSS ≠ Figma 실제 비주얼

spec JSON의 값을 기반으로 CSS를 손으로 작성하면 **반드시 시각적 오차가 발생**한다.

### 실제 발생한 오차 사례

| 컴포넌트 | 손코딩 값 | Figma 실제 값 | 원인 |
|---|---|---|---|
| `ogn/app-bar` height | 56px | **48px** | spec에 height 토큰 없음, 추정값 사용 |
| `atom/checkbox` checked fill | **purple** (#3617ce) | **dark navy** (#08002c) | DS 토큰 `dotColor` 실제값 오독 |
| `atom/btn` Large height | 52px | **48px**, cr=16 | size.input 토큰 재사용 (버튼 ≠ input) |
| `ogn/text-field` inner cr | 12px | **16px**, T14 R20 B14 L20 | spec에 radius 명시 없어 추정 |
| `ogn/bottom-nav` height | 84px | **88px** (T12+content+B36) | 패딩 합산 오류 |
| `ogn/bottom-nav` fill | white | **#ebeef6** (light blue-gray) | spec 토큰 `component.progress.small.track` 실제값 미확인 |

### 근본 원인

1. **spec JSON이 토큰 참조만 담음**: `{component.radio.default.dotColor}` 같은 alias를 실제 hex로 resolve하지 않고 추정
2. **COMPONENT_SET 이미지 = 모든 variant 합친 bbox**: API에서 COMPONENT_SET 노드를 이미지로 내보내면 모든 variant가 한 이미지에 나와서 개별 variant 모양을 알 수 없음
3. **아이콘 SVG path 없음**: `docs/input/components/atom/icon.json` 은 크기 정보만, 실제 경로 없음 → 손그림 SVG로 대체 → 디자인 불일치

---

## 해결 원칙: 3단계 접근법

### Level 1 — Figma API 이미지 임베드 (권장, 정적 컴포넌트)

```
GET /v1/images/{fileKey}?ids={nodeId}&format=png&scale=2
```

- 특정 **variant 노드 ID** (COMPONENT 레벨)로 이미지 내보내기
- HTML에 `<img>` 태그로 임베드 → **픽셀 퍼펙트 보장**
- 단점: S3 URL은 일정 시간 후 만료됨 → **base64로 인코딩해서 data URI로 embed** 필요

```bash
# 단계별 순서
# 1. COMPONENT_SET의 children으로 variant node ID 획득
GET /v1/files/{fileKey}/nodes?ids={setId}&depth=2

# 2. 원하는 variant ID로 이미지 URL 획득
GET /v1/images/{fileKey}?ids={variantId}&format=png&scale=2

# 3. URL 다운로드 → base64 변환
curl -s {url} | base64 -w 0
# → data:image/png;base64,... 로 HTML <img src> 에 사용
```

> **주의**: base64 embed는 파일 크기가 커짐. 컴포넌트 수가 많은 경우 이미지 파일로 저장 후 상대경로 참조 권장.

### Level 2 — localhost:3000/sources 레지스트리 활용 (미래 권장)

`http://localhost:3000/sources` 에 등록된 컴포넌트 카탈로그가 이미 Figma 기반 스펙을 시각적으로 보여준다. 이 레지스트리가 완성되면:

- HTML mockup 제작 시 `/sources?s=ogn` 등을 열어 **실제 렌더링 결과를 나란히 참조**
- 레지스트리 자체에 Figma 이미지를 노출하도록 개선 가능 (`figmaNodeId` 필드 → API 호출 → 이미지 캐시)
- mockup HTML과 레지스트리를 **분리된 탭으로 나란히 두고 비교하며 작업**

이렇게 되면 Figma를 매번 직접 열지 않아도 됨.

### Level 3 — 하이브리드 (현실적 타협)

| 컴포넌트 유형 | 구현 방식 |
|---|---|
| 상태 없는 정적 컴포넌트 (status-bar, app-bar, footer) | **Figma 이미지 임베드** |
| 인터랙티브 컨트롤 (checkbox, radio, text-field, btn) | **CSS + 정확한 토큰값** (API로 실측 후 적용) |
| 아이콘 | **Figma API로 variant 이미지 임베드** (SVG export 불가 시) |
| 전체 화면 레이아웃 | CSS flex (구조) + 내부 컴포넌트는 위 방식 혼합 |

---

## 실측 치수 레퍼런스 (Figma API 확인값)

> `figmaFileKey`: `wLwyHV2L5wUz0fotXmN5dK`

| 컴포넌트 | figmaNodeId | 주요 수치 |
|---|---|---|
| `ogn/status-bar` | `9343:20390` | h=59, pad T20 R24 B18 L24 |
| `ogn/app-bar` | `9343:20263` | h=**48**, pad T10 R20 B10 L20 |
| `ogn/text-field` | `9595:45900` | inner h=**48**, pad T14 R20 B14 L20, cr=**16** |
| `atom/btn` Large | `10095:100382` | h=**48**, cr=**16**, fill=#3617ce |
| `atom/btn` XLarge | `10095:100382` | h=56, cr=20 |
| `atom/btn` Small | `10095:100382` | h=28, cr=9999 (pill) |
| `atom/checkbox` checked | `9504:14553` | fill=**#08002c** (dark navy, NOT purple!) |
| `atom/radio` off | `9510:24483` | ring only, gray border |
| `atom/radio` on | `9510:24485` | dark navy ring |
| `ogn/bottom-nav` | `2927:7608` | h=**88**, pad T12 B36, fill=**#ebeef6** |
| `mol/badge-icon` | `9740:53037` | h=28, pad T6 R10 B6 L8, cr=10, fill=#fff |
| `ogn/card-section` card | `9137:105620` | pad all=28, cr=24, fill=#fff |

---

## Figma 이미지 가져오는 실제 순서 (mockup 제작 시 체크리스트)

```
1. docs/input/components/{tier}/{name}.json 에서 figmaNodeId 확인
2. COMPONENT_SET인 경우 → depth=2로 children variant ID 목록 조회
3. 원하는 variant (Default/On/Off/Logo 등) ID 특정
4. /v1/images/{fileKey}?ids={variantId}&format=png&scale=2 로 URL 획득
5. URL로 이미지 다운로드
6. base64 변환 또는 figma-previews/ 폴더에 저장
7. HTML <img src> 또는 CSS background-image로 사용
8. 인터랙션이 필요한 경우 → 이미지를 배경으로 깔고, JS로 상태별 class 교체
```

---

## 이미지 임베드 방식의 장단점

| 방식 | 장점 | 단점 |
|---|---|---|
| **Figma 이미지 직접 임베드** | 픽셀 퍼펙트, 토큰 오독 없음 | URL 만료, 인터랙션 제한 |
| **base64 data URI** | 외부 의존 없음, 오프라인 작동 | HTML 파일 크기 ↑ |
| **localhost:3000/sources 연동** | 레지스트리 일원화, 항상 최신 | 웹앱 실행 필요 |
| **CSS 손코딩** | 인터랙션 자유, 파일 가벼움 | 오차 발생, 토큰 resolve 필요 |

> **결론**: 스태틱 목업 → Figma 이미지 임베드. 클릭/인터랙션 필요 → CSS 하이브리드. 장기 운영 → localhost:3000/sources 레지스트리에 Figma 이미지 캐시 연동.

---

## 다음에 mockup HTML 만들 때 지켜야 할 규칙

1. **컴포넌트마다 figmaNodeId를 먼저 확인** → docs/input/components에 이미 다 있음
2. **variant 레벨로 이미지 내보내기** — COMPONENT_SET 전체 말고 특정 variant
3. **토큰 alias는 반드시 resolve** — `{component.X.Y.Z}` → DS JSON에서 실제 hex 추적
4. **app-bar height = 48px** (56이 아님)
5. **checkbox active = dark navy (#08002c)** (purple이 아님)
6. **text-field input cr = 16px, pad T14 R20 B14 L20**
7. **bottom-nav h = 88px, fill = #ebeef6**
