// =============================================
// AUTO-GENERATED — BATCH MODE (--all)
// 전체 통합 — atom + icon + mol + ogn + page
// Run 1회로 카탈로그 + 화면 전부 빌드
// specs: 189개 / icons: 37개
// generated at: 2026-05-06T07:50:48.254Z
// Requires: --sync 가 먼저 실행되어 있어야 Variable 바인딩 작동
// =============================================

const DS_TOKENS = {
  "foundation": {
    "color": {
      "purple": {
        "300": {
          "value": "#ece8fb",
          "type": "color"
        },
        "500": {
          "value": "#3617ce",
          "type": "color"
        },
        "700": {
          "value": "#2a10a8",
          "type": "color"
        }
      },
      "gray": {
        "0": {
          "value": "#ffffff",
          "type": "color"
        },
        "50": {
          "value": "#f5f6fa",
          "type": "color"
        },
        "100": {
          "value": "#f2f2f7",
          "type": "color"
        },
        "150": {
          "value": "#eef0f7",
          "type": "color"
        },
        "200": {
          "value": "#ebeef6",
          "type": "color"
        },
        "250": {
          "value": "#ecedef",
          "type": "color"
        },
        "300": {
          "value": "#e8e8f0",
          "type": "color"
        },
        "350": {
          "value": "#e0e0e8",
          "type": "color"
        },
        "400": {
          "value": "#cfd5e5",
          "type": "color"
        },
        "500": {
          "value": "#c2c4cc",
          "type": "color"
        },
        "600": {
          "value": "#8e8ea8",
          "type": "color"
        },
        "700": {
          "value": "#4a4a68",
          "type": "color"
        },
        "900": {
          "value": "#08002c",
          "type": "color"
        }
      },
      "black": {
        "default": {
          "value": "#000000",
          "type": "color"
        }
      },
      "red": {
        "50": {
          "value": "#fff0f3",
          "type": "color"
        },
        "500": {
          "value": "#e5003b",
          "type": "color"
        }
      },
      "green": {
        "50": {
          "value": "#edfaf4",
          "type": "color"
        },
        "500": {
          "value": "#00a86b",
          "type": "color"
        }
      },
      "orange": {
        "50": {
          "value": "#fff8ec",
          "type": "color"
        },
        "500": {
          "value": "#f5a623",
          "type": "color"
        }
      }
    },
    "dimension": {
      "radius": {
        "sm": {
          "value": "8px",
          "type": "dimension"
        },
        "md": {
          "value": "16px",
          "type": "dimension"
        },
        "lg": {
          "value": "20px",
          "type": "dimension"
        },
        "xl": {
          "value": "24px",
          "type": "dimension"
        },
        "pill": {
          "value": "999px",
          "type": "dimension"
        },
        "chip": {
          "value": "22px",
          "type": "dimension",
          "description": "검색/필터 칩 전용 radius"
        },
        "button": {
          "value": "12px",
          "type": "dimension",
          "description": "Primary 버튼 (oganism CTA) 라운드"
        },
        "xs": {
          "value": "4px",
          "type": "dimension",
          "description": "체크박스 등 작은 컴포넌트 라운드"
        }
      },
      "spacing": {
        "none": {
          "value": "0px",
          "type": "dimension",
          "description": "여백 없음 — 외피 padding / 평면 stacking 등 모든 raw 0 대체"
        },
        "xs": {
          "value": "4px",
          "type": "dimension"
        },
        "sm": {
          "value": "8px",
          "type": "dimension"
        },
        "md": {
          "value": "12px",
          "type": "dimension"
        },
        "lg": {
          "value": "16px",
          "type": "dimension"
        },
        "xl": {
          "value": "20px",
          "type": "dimension"
        },
        "2xl": {
          "value": "24px",
          "type": "dimension"
        },
        "3xl": {
          "value": "32px",
          "type": "dimension"
        }
      },
      "size": {
        "icon-sm": {
          "value": "16px",
          "type": "dimension"
        },
        "icon-md": {
          "value": "20px",
          "type": "dimension"
        },
        "icon-lg": {
          "value": "24px",
          "type": "dimension"
        },
        "icon-xl": {
          "value": "32px",
          "type": "dimension"
        },
        "icon-container": {
          "value": "40px",
          "type": "dimension"
        },
        "thumbnail-sm": {
          "value": "48px",
          "type": "dimension"
        },
        "thumbnail-md": {
          "value": "64px",
          "type": "dimension"
        },
        "thumbnail-lg": {
          "value": "80px",
          "type": "dimension"
        },
        "thumbnail-portrait-h-sm": {
          "value": "72px",
          "type": "dimension",
          "description": "세로 포스터 썸네일 높이 (sm, 2:3 비율)"
        },
        "thumbnail-portrait-h-md": {
          "value": "96px",
          "type": "dimension",
          "description": "세로 포스터 썸네일 높이 (md, 2:3 비율)"
        },
        "thumbnail-portrait-h-lg": {
          "value": "120px",
          "type": "dimension",
          "description": "세로 포스터 썸네일 높이 (lg, 2:3 비율)"
        },
        "button-xs": {
          "value": "22px",
          "type": "dimension",
          "description": "인라인 tag-sized 버튼 (행 내 부수 CTA)"
        },
        "button-sm": {
          "value": "36px",
          "type": "dimension"
        },
        "button-md": {
          "value": "44px",
          "type": "dimension"
        },
        "button-lg": {
          "value": "52px",
          "type": "dimension"
        },
        "chip": {
          "value": "34px",
          "type": "dimension"
        },
        "input": {
          "value": "52px",
          "type": "dimension"
        },
        "search-bar": {
          "value": "48px",
          "type": "dimension"
        },
        "header": {
          "value": "116px",
          "type": "dimension"
        },
        "tab-bar": {
          "value": "84px",
          "type": "dimension"
        },
        "list-item-min": {
          "value": "52px",
          "type": "dimension",
          "description": "리스트 아이템 최소 높이 — 수직 center 보장"
        },
        "numbered-badge": {
          "value": "32px",
          "type": "dimension",
          "description": "번호 뱃지 크기 (정사각형)"
        },
        "progress-height-sm": {
          "value": "4px",
          "type": "dimension",
          "description": "ProgressBar 얇은 높이"
        },
        "progress-height-md": {
          "value": "8px",
          "type": "dimension",
          "description": "ProgressBar 기본 높이"
        },
        "divider-weight-hairline": {
          "value": "1px",
          "type": "dimension",
          "description": "얇은 구분선"
        },
        "divider-weight-thick": {
          "value": "8px",
          "type": "dimension",
          "description": "섹션 구분용 두꺼운 divider"
        },
        "banner-height": {
          "value": "72px",
          "type": "dimension",
          "description": "Banner 기본 높이"
        },
        "thumb-radius-default": {
          "value": "8px",
          "type": "dimension",
          "description": "Thumbnail 기본 radius"
        },
        "textarea-min-height": {
          "value": "96px",
          "type": "dimension",
          "description": "TextArea 최소 높이"
        },
        "barcode-height": {
          "value": "80px",
          "type": "dimension",
          "description": "Barcode 캔버스 높이"
        },
        "sticky-footer-height": {
          "value": "72px",
          "type": "dimension",
          "description": "Sticky footer 고정 높이 — 하단 CTA 영역"
        },
        "tab-height": {
          "value": "48px",
          "type": "dimension",
          "description": "탭 바 높이 (콘텐츠 전환용)"
        },
        "tab-indicator-height": {
          "value": "2px",
          "type": "dimension",
          "description": "탭 active indicator 두께"
        },
        "header-compact": {
          "value": "56px",
          "type": "dimension",
          "description": "압축형 상단 헤더 높이 (상품상세 등) — ogn/GNB 의 header 116 과 구분"
        },
        "screen-mobile": {
          "value": "375px",
          "type": "dimension",
          "description": "모바일 화면 baseline width (iPhone 기본)"
        },
        "screen-content-width": {
          "value": "327px",
          "type": "dimension",
          "description": "기본 화면 content 영역 width (screen-mobile - 좌우 screen-padding 각 24)"
        },
        "screen-content-width-home": {
          "value": "351px",
          "type": "dimension",
          "description": "홈 화면 전용 content 영역 width (screen-mobile - 좌우 screen-padding 각 12) — home 만 예외적으로 좁은 padding"
        },
        "card-inner-width": {
          "value": "279px",
          "type": "dimension",
          "description": "카드 안쪽 content width — screen-content-width(327) - card padding(24×2). info-row · divider 가 카드 inner 에 fill 될 때 사용."
        },
        "input-control": {
          "value": "24px",
          "type": "dimension",
          "description": "Checkbox / Radio 등 form 컨트롤 사이즈"
        },
        "screen-mobile-height": {
          "value": "812px",
          "type": "dimension",
          "description": "모바일 화면 baseline height — page 의 minHeight (iPhone 13/14 기준). 콘텐츠 적어도 viewport 채움."
        }
      }
    },
    "typography": {
      "fontFamily": {
        "primary": {
          "value": "Pretendard",
          "type": "fontFamily",
          "description": "주 폰트 — 한글 최적화. 모든 본문/라벨/제목 기본값"
        },
        "fallback": {
          "value": "Inter",
          "type": "fontFamily",
          "description": "fallback — Pretendard 미설치 환경에서 영문 표시용"
        }
      },
      "fontSize": {
        "tab-label": {
          "value": "9px",
          "type": "fontSize"
        },
        "sub-label": {
          "value": "12px",
          "type": "fontSize"
        },
        "card-label": {
          "value": "13px",
          "type": "fontSize"
        },
        "chip-badge": {
          "value": "13px",
          "type": "fontSize"
        },
        "insight": {
          "value": "13px",
          "type": "fontSize"
        },
        "body": {
          "value": "15px",
          "type": "fontSize"
        },
        "home-md": {
          "value": "18px",
          "type": "fontSize",
          "description": "홈 강조 카드 안 라벨/메시지/버튼 라벨 (page/MBR/main 같은 home 페이지 전용)"
        },
        "title": {
          "value": "20px",
          "type": "fontSize"
        },
        "number-emphasis": {
          "value": "28px",
          "type": "fontSize"
        }
      },
      "lineHeight": {
        "120": {
          "value": "120%",
          "type": "lineHeight",
          "description": "폰트 크기 120% 비율 행간 (tight)"
        },
        "140": {
          "value": "140%",
          "type": "lineHeight",
          "description": "폰트 크기 140% 비율 행간 (normal)"
        },
        "xs": {
          "value": "12px",
          "type": "lineHeight"
        },
        "sm": {
          "value": "16px",
          "type": "lineHeight"
        },
        "md": {
          "value": "18px",
          "type": "lineHeight"
        },
        "lg": {
          "value": "22px",
          "type": "lineHeight"
        },
        "xl": {
          "value": "28px",
          "type": "lineHeight"
        },
        "2xl": {
          "value": "36px",
          "type": "lineHeight"
        }
      },
      "fontWeight": {
        "regular": {
          "value": "400",
          "type": "fontWeight"
        },
        "medium": {
          "value": "500",
          "type": "fontWeight"
        },
        "semibold": {
          "value": "600",
          "type": "fontWeight"
        },
        "bold": {
          "value": "700",
          "type": "fontWeight"
        }
      },
      "letterSpacing": {
        "default": {
          "value": "0px",
          "type": "letterSpacing"
        },
        "tight-sm": {
          "value": "-0.3px",
          "type": "letterSpacing"
        },
        "tight-md": {
          "value": "-0.5px",
          "type": "letterSpacing"
        }
      }
    },
    "shadow": {
      "sm": {
        "value": {
          "x": "0px",
          "y": "2px",
          "blur": "8px",
          "spread": "0px",
          "color": "{foundation.color.black.default}",
          "alpha": 0.06
        },
        "type": "shadow"
      },
      "md": {
        "value": {
          "x": "0px",
          "y": "4px",
          "blur": "16px",
          "spread": "0px",
          "color": "{foundation.color.black.default}",
          "alpha": 0.1
        },
        "type": "shadow"
      },
      "lg": {
        "value": {
          "x": "0px",
          "y": "8px",
          "blur": "32px",
          "spread": "0px",
          "color": "{foundation.color.black.default}",
          "alpha": 0.16
        },
        "type": "shadow"
      },
      "elevated": {
        "value": {
          "x": "0px",
          "y": "8px",
          "blur": "16px",
          "spread": "0px",
          "color": "#1b0b66",
          "alpha": 0.16
        },
        "type": "shadow",
        "description": "홈 강조 버튼 elevation — 진한 navy 16% alpha"
      }
    },
    "motion": {
      "duration": {
        "fast": {
          "value": "150ms",
          "type": "duration"
        },
        "base": {
          "value": "250ms",
          "type": "duration"
        },
        "slow": {
          "value": "400ms",
          "type": "duration"
        },
        "loading": {
          "value": "1200ms",
          "type": "duration"
        }
      },
      "easing": {
        "default": {
          "value": "cubic-bezier(0.4, 0, 0.2, 1)",
          "type": "cubicBezier"
        },
        "enter": {
          "value": "cubic-bezier(0, 0, 0.2, 1)",
          "type": "cubicBezier"
        },
        "exit": {
          "value": "cubic-bezier(0.4, 0, 1, 1)",
          "type": "cubicBezier"
        }
      }
    }
  },
  "semantic": {
    "color": {
      "brand": {
        "primary": {
          "value": "{foundation.color.purple.500}",
          "type": "color",
          "description": "브랜드 메인 컬러"
        },
        "light": {
          "value": "{foundation.color.purple.300}",
          "type": "color",
          "description": "브랜드 연한 배경"
        },
        "dark": {
          "value": "{foundation.color.purple.700}",
          "type": "color",
          "description": "브랜드 진한 / pressed"
        },
        "on-brand": {
          "value": "{foundation.color.gray.0}",
          "type": "color",
          "description": "브랜드 컬러 위 텍스트/아이콘"
        }
      },
      "background": {
        "default": {
          "value": "{foundation.color.gray.100}",
          "type": "color",
          "description": "기본 페이지 배경 (legacy)"
        },
        "subtle": {
          "value": "{foundation.color.gray.200}",
          "type": "color",
          "description": "보조 페이지 배경 (legacy)"
        },
        "overlay": {
          "value": "{foundation.color.black.default}",
          "type": "color",
          "description": "딤 배경 (opacity 0.4)"
        },
        "page-home": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color",
          "description": "홈 페이지 배경 — 그레이. 카드(흰)와 시각 분리. page/{MODULE}/main 만."
        },
        "page-sub": {
          "value": "{semantic.color.surface.primary}",
          "type": "color",
          "description": "서브 페이지 배경 — 화이트. flat 배경, 단일 task 흐름. 그 외 모든 page."
        }
      },
      "surface": {
        "primary": {
          "value": "{foundation.color.gray.0}",
          "type": "color",
          "description": "기본 카드/표면 배경"
        },
        "secondary": {
          "value": "{foundation.color.gray.50}",
          "type": "color",
          "description": "중첩된 내부 표면"
        },
        "tooltip": {
          "value": "{foundation.color.gray.900}",
          "type": "color",
          "description": "툴팁 배경"
        }
      },
      "text": {
        "primary": {
          "value": "{foundation.color.black.default}",
          "type": "color",
          "description": "본문 주요 텍스트"
        },
        "strong": {
          "value": "{foundation.color.gray.900}",
          "type": "color",
          "description": "강조 헤딩/가격"
        },
        "secondary": {
          "value": "{foundation.color.gray.700}",
          "type": "color",
          "description": "보조 텍스트"
        },
        "muted": {
          "value": "{foundation.color.gray.600}",
          "type": "color",
          "description": "힌트/비활성 계열"
        },
        "brand": {
          "value": "{semantic.color.brand.primary}",
          "type": "color",
          "description": "링크/강조 텍스트"
        },
        "on-dark": {
          "value": "{foundation.color.gray.0}",
          "type": "color",
          "description": "어두운 배경 위 텍스트 (툴팁 등)"
        },
        "disabled": {
          "value": "{foundation.color.gray.500}",
          "type": "color",
          "description": "비활성 텍스트"
        },
        "price-original": {
          "value": "{foundation.color.gray.600}",
          "type": "color",
          "description": "취소선 원가 텍스트"
        },
        "emphasis": {
          "value": "{semantic.color.brand.primary}",
          "type": "color",
          "description": "본문 안 강조 텍스트 (ex. 숫자 65,300P)"
        }
      },
      "border": {
        "default": {
          "value": "{foundation.color.gray.350}",
          "type": "color",
          "description": "기본 테두리"
        },
        "subtle": {
          "value": "{foundation.color.gray.50}",
          "type": "color",
          "description": "약한 구분선"
        },
        "focus": {
          "value": "{semantic.color.brand.primary}",
          "type": "color",
          "description": "포커스 테두리"
        },
        "active": {
          "value": "{semantic.color.brand.primary}",
          "type": "color",
          "description": "선택된 상태 테두리"
        }
      },
      "state": {
        "disabled-bg": {
          "value": "{foundation.color.gray.300}",
          "type": "color"
        },
        "disabled-text": {
          "value": "{semantic.color.text.disabled}",
          "type": "color"
        },
        "pressed": {
          "value": "{semantic.color.brand.dark}",
          "type": "color"
        },
        "hover-bg": {
          "value": "{foundation.color.purple.300}",
          "type": "color"
        },
        "selected-bg": {
          "value": "{semantic.color.brand.light}",
          "type": "color"
        }
      },
      "feedback": {
        "error": {
          "value": "{foundation.color.red.500}",
          "type": "color"
        },
        "error-bg": {
          "value": "{foundation.color.red.50}",
          "type": "color"
        },
        "success": {
          "value": "{foundation.color.green.500}",
          "type": "color"
        },
        "success-bg": {
          "value": "{foundation.color.green.50}",
          "type": "color"
        },
        "warning": {
          "value": "{foundation.color.orange.500}",
          "type": "color"
        },
        "warning-bg": {
          "value": "{foundation.color.orange.50}",
          "type": "color"
        },
        "info": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "info-bg": {
          "value": "{semantic.color.brand.light}",
          "type": "color"
        }
      },
      "icon": {
        "container-default": {
          "value": "{foundation.color.gray.250}",
          "type": "color"
        },
        "container-document": {
          "value": "{foundation.color.gray.150}",
          "type": "color"
        },
        "container-brand": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "default": {
          "value": "{foundation.color.gray.900}",
          "type": "color"
        },
        "muted": {
          "value": "{foundation.color.gray.600}",
          "type": "color"
        },
        "on-gray": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "on-brand": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "quick-action": {
          "value": "{foundation.color.gray.400}",
          "type": "color"
        }
      },
      "page": {
        "my-home-background": {
          "value": "{foundation.color.gray.100}",
          "type": "color"
        },
        "shopping-background": {
          "value": "{foundation.color.gray.200}",
          "type": "color"
        },
        "search-background": {
          "value": "{foundation.color.gray.200}",
          "type": "color"
        }
      },
      "chip": {
        "default-bg": {
          "value": "{foundation.color.gray.0}",
          "type": "color"
        },
        "selected-bg": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        }
      },
      "tab": {
        "divider": {
          "value": "#ecf1ff",
          "type": "color"
        }
      },
      "skeleton": {
        "base": {
          "value": "{foundation.color.gray.200}",
          "type": "color",
          "description": "스켈레톤 기본 배경"
        },
        "shimmer": {
          "value": "{foundation.color.gray.100}",
          "type": "color",
          "description": "스켈레톤 shimmer 하이라이트"
        }
      },
      "progress": {
        "track": {
          "value": "{foundation.color.gray.200}",
          "type": "color",
          "description": "ProgressBar 배경 트랙"
        },
        "fill": {
          "value": "{semantic.color.brand.primary}",
          "type": "color",
          "description": "ProgressBar 채워진 영역"
        }
      },
      "link": {
        "default": {
          "value": "{semantic.color.brand.primary}",
          "type": "color",
          "description": "기본 링크 컬러"
        },
        "pressed": {
          "value": "{semantic.color.brand.dark}",
          "type": "color",
          "description": "링크 pressed"
        },
        "visited": {
          "value": "{foundation.color.purple.700}",
          "type": "color",
          "description": "방문한 링크"
        }
      },
      "banner": {
        "info-bg": {
          "value": "{semantic.color.brand.light}",
          "type": "color"
        },
        "warning-bg": {
          "value": "{foundation.color.orange.50}",
          "type": "color"
        },
        "error-bg": {
          "value": "{foundation.color.red.50}",
          "type": "color"
        },
        "success-bg": {
          "value": "{foundation.color.green.50}",
          "type": "color"
        }
      },
      "divider": {
        "hairline": {
          "value": "{semantic.color.border.subtle}",
          "type": "color",
          "description": "얇은 구분선 색"
        },
        "section": {
          "value": "{foundation.color.gray.150}",
          "type": "color",
          "description": "섹션 구분용 두꺼운 divider"
        }
      }
    },
    "typography": {
      "hero-headline": {
        "fontSize": "{foundation.typography.fontSize.number-emphasis}",
        "lineHeight": "{foundation.typography.lineHeight.xl}",
        "fontWeight": "{foundation.typography.fontWeight.bold}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}",
        "type": "typography",
        "description": "Result Hero / 페이지 최상위 강조 — 28bold"
      },
      "card-title": {
        "fontSize": "{foundation.typography.fontSize.title}",
        "lineHeight": "{foundation.typography.lineHeight.120}",
        "fontWeight": "{foundation.typography.fontWeight.bold}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-md}",
        "type": "typography"
      },
      "number-emphasis": {
        "fontSize": "{foundation.typography.fontSize.number-emphasis}",
        "lineHeight": "{foundation.typography.lineHeight.2xl}",
        "fontWeight": "{foundation.typography.fontWeight.bold}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-md}",
        "type": "typography",
        "description": "요금/금액 강조 숫자"
      },
      "price-original": {
        "fontSize": "{foundation.typography.fontSize.card-label}",
        "lineHeight": "{foundation.typography.lineHeight.md}",
        "fontWeight": "{foundation.typography.fontWeight.regular}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "textDecoration": "line-through",
        "type": "typography",
        "description": "취소선 원가 — color: semantic.color.text.price-original"
      },
      "body": {
        "fontSize": "{foundation.typography.fontSize.body}",
        "lineHeight": "{foundation.typography.lineHeight.lg}",
        "fontWeight": "{foundation.typography.fontWeight.regular}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography"
      },
      "body-medium": {
        "fontSize": "{foundation.typography.fontSize.body}",
        "lineHeight": "{foundation.typography.lineHeight.lg}",
        "fontWeight": "{foundation.typography.fontWeight.medium}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}",
        "type": "typography"
      },
      "body-bold": {
        "fontSize": "{foundation.typography.fontSize.body}",
        "lineHeight": "{foundation.typography.lineHeight.lg}",
        "fontWeight": "{foundation.typography.fontWeight.bold}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}",
        "type": "typography",
        "description": "본문 사이즈(15) + bold — body-medium 과 같은 사이즈에 강조 헤딩. notice-card title 등 카드 안 작은 헤딩."
      },
      "button": {
        "fontSize": "{foundation.typography.fontSize.body}",
        "lineHeight": "{foundation.typography.lineHeight.lg}",
        "fontWeight": "{foundation.typography.fontWeight.semibold}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography"
      },
      "card-label": {
        "fontSize": "{foundation.typography.fontSize.card-label}",
        "lineHeight": "{foundation.typography.lineHeight.md}",
        "fontWeight": "{foundation.typography.fontWeight.regular}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography"
      },
      "chip-badge": {
        "fontSize": "{foundation.typography.fontSize.chip-badge}",
        "lineHeight": "{foundation.typography.lineHeight.md}",
        "fontWeight": "{foundation.typography.fontWeight.medium}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography"
      },
      "sub-label": {
        "fontSize": "{foundation.typography.fontSize.sub-label}",
        "lineHeight": "{foundation.typography.lineHeight.sm}",
        "fontWeight": "{foundation.typography.fontWeight.regular}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}",
        "type": "typography"
      },
      "card-header-label": {
        "fontSize": "{foundation.typography.fontSize.sub-label}",
        "lineHeight": "{foundation.typography.lineHeight.sm}",
        "fontWeight": "{foundation.typography.fontWeight.semibold}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}",
        "type": "typography",
        "description": "카드 상단 카테고리 라벨 — 12px semibold muted, 큰 타이틀에 양보"
      },
      "insight": {
        "fontSize": "{foundation.typography.fontSize.insight}",
        "lineHeight": "{foundation.typography.lineHeight.md}",
        "fontWeight": "{foundation.typography.fontWeight.regular}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography"
      },
      "tab-label": {
        "fontSize": "{foundation.typography.fontSize.tab-label}",
        "lineHeight": "{foundation.typography.lineHeight.xs}",
        "fontWeight": "{foundation.typography.fontWeight.medium}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography"
      },
      "list-label": {
        "fontSize": "{foundation.typography.fontSize.body}",
        "lineHeight": "{foundation.typography.lineHeight.lg}",
        "fontWeight": "{foundation.typography.fontWeight.regular}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography",
        "description": "리스트 아이템 텍스트"
      },
      "home-emphasis": {
        "fontSize": "{foundation.typography.fontSize.home-md}",
        "lineHeight": "{foundation.typography.lineHeight.lg}",
        "fontWeight": "{foundation.typography.fontWeight.bold}",
        "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}",
        "type": "typography",
        "description": "홈 강조 카드 안 라벨/메시지 (18 Bold) — page/MBR/main 등 home 페이지 예외 톤"
      },
      "btn-small": {
        "fontSize": "{foundation.typography.fontSize.sub-label}",
        "lineHeight": "{foundation.typography.lineHeight.sm}",
        "fontWeight": "{foundation.typography.fontWeight.semibold}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography",
        "description": "작은 강조 버튼 라벨 (12 SemiBold) — atom/btn type=small-elevated 에서 사용"
      },
      "home-button": {
        "fontSize": "{foundation.typography.fontSize.home-md}",
        "lineHeight": "{foundation.typography.lineHeight.lg}",
        "fontWeight": "{foundation.typography.fontWeight.semibold}",
        "letterSpacing": "{foundation.typography.letterSpacing.default}",
        "type": "typography",
        "description": "홈 강조 카드 안 버튼 라벨 (18 SemiBold) — atom/btn size=lg 에서 사용"
      }
    },
    "motion": {
      "fast": {
        "value": "{foundation.motion.duration.fast}",
        "type": "duration"
      },
      "base": {
        "value": "{foundation.motion.duration.base}",
        "type": "duration"
      },
      "slow": {
        "value": "{foundation.motion.duration.slow}",
        "type": "duration"
      },
      "loading": {
        "value": "{foundation.motion.duration.loading}",
        "type": "duration"
      },
      "easing-default": {
        "value": "{foundation.motion.easing.default}",
        "type": "cubicBezier"
      },
      "easing-enter": {
        "value": "{foundation.motion.easing.enter}",
        "type": "cubicBezier"
      },
      "easing-exit": {
        "value": "{foundation.motion.easing.exit}",
        "type": "cubicBezier"
      }
    },
    "layout": {
      "screen-padding-default": {
        "value": "{foundation.dimension.spacing.2xl}",
        "type": "dimension",
        "description": "기본 화면 좌/우 padding 24 — 일반 페이지"
      },
      "screen-padding-home": {
        "value": "{foundation.dimension.spacing.md}",
        "type": "dimension",
        "description": "홈 화면 전용 padding 12 — home 만 예외적"
      },
      "screen-padding-search": {
        "value": "{foundation.dimension.spacing.xl}",
        "type": "dimension"
      },
      "card-gap": {
        "value": "{foundation.dimension.spacing.xs}",
        "type": "dimension",
        "description": "카드 간 상하 간격 (페이지 안 카드 스택)"
      },
      "section-gap": {
        "value": "{foundation.dimension.spacing.3xl}",
        "type": "dimension"
      },
      "inner-gap-sm": {
        "value": "{foundation.dimension.spacing.sm}",
        "type": "dimension"
      },
      "inner-gap-md": {
        "value": "{foundation.dimension.spacing.md}",
        "type": "dimension"
      },
      "inner-gap-lg": {
        "value": "{foundation.dimension.spacing.lg}",
        "type": "dimension"
      }
    }
  },
  "component": {
    "page": {
      "my-home": {
        "background": {
          "value": "{semantic.color.page.my-home-background}",
          "type": "color"
        }
      },
      "shopping": {
        "background": {
          "value": "{semantic.color.page.shopping-background}",
          "type": "color"
        }
      },
      "search": {
        "background": {
          "value": "{semantic.color.page.search-background}",
          "type": "color"
        }
      }
    },
    "card": {
      "default": {
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.md}",
          "type": "dimension"
        },
        "padding": {
          "value": "{foundation.dimension.spacing.2xl}",
          "type": "dimension"
        },
        "shadow": {
          "value": "{foundation.shadow.sm}",
          "type": "shadow"
        },
        "main-title": {
          "fontSize": {
            "value": "{foundation.typography.fontSize.title}",
            "type": "fontSize",
            "description": "카드 메인 타이틀 fontSize — 20"
          },
          "lineHeight": {
            "value": "{foundation.typography.lineHeight.120}",
            "type": "lineHeight",
            "description": "카드 메인 타이틀 lineHeight — 120%"
          },
          "fontWeight": {
            "value": "{foundation.typography.fontWeight.bold}",
            "type": "fontWeight",
            "description": "카드 메인 타이틀 fontWeight — bold (700)"
          },
          "letterSpacing": {
            "value": "{foundation.typography.letterSpacing.tight-md}",
            "type": "letterSpacing",
            "description": "카드 메인 타이틀 letterSpacing — tight-md"
          }
        },
        "main-titleStyle": {
          "value": {
            "fontSize": "{component.card.default.main-title.fontSize}",
            "lineHeight": "{component.card.default.main-title.lineHeight}",
            "fontWeight": "{component.card.default.main-title.fontWeight}",
            "letterSpacing": "{component.card.default.main-title.letterSpacing}"
          },
          "type": "typography",
          "description": "카드 메인 타이틀 composite — 서브 페이지 카드 컴포넌트 공통"
        },
        "main-titleColor": {
          "value": "{semantic.color.text.primary}",
          "type": "color",
          "description": "카드 메인 타이틀 색"
        }
      },
      "shopping-outer": {
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.xl}",
          "type": "dimension"
        }
      },
      "shopping-inner": {
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.lg}",
          "type": "dimension"
        }
      },
      "content": {
        "background": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color"
        }
      }
    },
    "result": {
      "default": {
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color",
          "description": "Result Hero 카드 배경"
        },
        "radius": {
          "value": "{foundation.dimension.radius.lg}",
          "type": "dimension",
          "description": "Result Hero 라운드 — 20"
        },
        "shadow": {
          "value": "{foundation.shadow.sm}",
          "type": "shadow",
          "description": "Result Hero 그림자"
        },
        "paddingY": {
          "value": "{foundation.dimension.spacing.3xl}",
          "type": "dimension",
          "description": "Hero 위/아래 padding — 32"
        },
        "paddingX": {
          "value": "{foundation.dimension.spacing.2xl}",
          "type": "dimension",
          "description": "Hero 좌/우 padding — 24"
        },
        "itemSpacing": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension",
          "description": "headline ↔ description 간격"
        },
        "description": {
          "fontSize": {
            "value": "{foundation.typography.fontSize.body}",
            "type": "fontSize",
            "description": "Hero description — 15"
          },
          "lineHeight": {
            "value": "{foundation.typography.lineHeight.lg}",
            "type": "lineHeight",
            "description": "Hero description lineHeight"
          },
          "fontWeight": {
            "value": "{foundation.typography.fontWeight.regular}",
            "type": "fontWeight",
            "description": "Hero description — regular (400)"
          },
          "letterSpacing": {
            "value": "{foundation.typography.letterSpacing.default}",
            "type": "letterSpacing",
            "description": "Hero description letterSpacing"
          }
        },
        "descriptionStyle": {
          "value": {
            "fontSize": "{component.result.default.description.fontSize}",
            "lineHeight": "{component.result.default.description.lineHeight}",
            "fontWeight": "{component.result.default.description.fontWeight}",
            "letterSpacing": "{component.result.default.description.letterSpacing}"
          },
          "type": "typography",
          "description": "Result Hero description composite"
        },
        "descriptionColor": {
          "value": "{semantic.color.text.secondary}",
          "type": "color",
          "description": "Hero description 색"
        }
      }
    },
    "button": {
      "primary": {
        "height": {
          "value": "{foundation.dimension.size.button-lg}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.button}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.2xl}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.button}",
          "type": "typography"
        },
        "pressedBackground": {
          "value": "{semantic.color.state.pressed}",
          "type": "color"
        },
        "disabledBackground": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "disabledText": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        }
      },
      "small-elevated": {
        "height": {
          "value": "{foundation.dimension.size.button-sm}",
          "type": "dimension",
          "description": "small 과 height 통일 (36) — 카드 안 inline 강조 CTA"
        },
        "radius": {
          "value": "{foundation.dimension.radius.button}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension",
          "description": "small 보다 약간 큼 (16) — 강조 버튼"
        },
        "background": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.btn-small}",
          "type": "typography",
          "description": "12 SemiBold — chip-badge(13 Medium) 보다 작고 더 강조"
        },
        "pressedBackground": {
          "value": "{semantic.color.state.pressed}",
          "type": "color"
        },
        "disabledBackground": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "disabledText": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        },
        "shadow": {
          "value": "{foundation.shadow.elevated}",
          "type": "shadow",
          "description": "elevation — primary-elevated 와 동일 톤"
        }
      },
      "primary-elevated": {
        "height": {
          "value": "{foundation.dimension.size.button-lg}",
          "type": "dimension",
          "description": "primary 와 height 통일 (52)"
        },
        "radius": {
          "value": "{foundation.dimension.radius.button}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.xl}",
          "type": "dimension",
          "description": "primary 보다 약간 좁음 (20) — 홈 카드 안 강조 buttons"
        },
        "background": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.home-button}",
          "type": "typography",
          "description": "18 SemiBold — primary (15 SemiBold) 보다 큼"
        },
        "pressedBackground": {
          "value": "{semantic.color.state.pressed}",
          "type": "color"
        },
        "disabledBackground": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "disabledText": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        },
        "shadow": {
          "value": "{foundation.shadow.elevated}",
          "type": "shadow",
          "description": "elevation — page 위 떠 있는 강조 톤"
        }
      },
      "secondary": {
        "height": {
          "value": "{foundation.dimension.size.button-lg}",
          "type": "dimension",
          "description": "primary 와 height 통일 (button-lg 52). dialog action pair 시 시각 균형."
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.2xl}",
          "type": "dimension",
          "description": "primary 와 paddingHorizontal 통일 (24)."
        },
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "border": {
          "value": "{semantic.color.border.default}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.button}",
          "type": "typography"
        }
      },
      "small": {
        "height": {
          "value": "{foundation.dimension.size.button-sm}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "textStyle": {
          "value": "{semantic.typography.chip-badge}",
          "type": "typography"
        }
      },
      "inline": {
        "height": {
          "value": "{foundation.dimension.size.button-xs}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.sm}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.sub-label}",
          "type": "typography"
        },
        "pressedBackground": {
          "value": "{semantic.color.state.pressed}",
          "type": "color"
        },
        "disabledBackground": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "disabledText": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        }
      },
      "destructive": {
        "height": {
          "value": "{foundation.dimension.size.button-lg}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.button}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.2xl}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.feedback.error}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.button}",
          "type": "typography"
        },
        "pressedBackground": {
          "value": "{semantic.color.feedback.error}",
          "type": "color"
        },
        "disabledBackground": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "disabledText": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        }
      }
    },
    "chip": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.chip}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.chip.default-bg}",
          "type": "color"
        },
        "border": {
          "value": "{semantic.color.border.default}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.secondary}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.chip-badge}",
          "type": "typography"
        }
      },
      "selected": {
        "height": {
          "value": "{foundation.dimension.size.chip}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.chip.selected-bg}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.chip-badge}",
          "type": "typography"
        }
      },
      "search": {
        "height": {
          "value": "{foundation.dimension.size.chip}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.chip}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        }
      }
    },
    "list-item": {
      "description": "수직 center 정렬이 항상 보장되는 리스트 아이템 규격",
      "default": {
        "minHeight": {
          "value": "{foundation.dimension.size.list-item-min}",
          "type": "dimension",
          "description": "최소 높이 52px — 콘텐츠가 짧아도 터치 영역과 정렬 보장"
        },
        "paddingVertical": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "gap": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension",
          "description": "아이콘/뱃지와 텍스트 사이 간격"
        },
        "alignItems": {
          "value": "center",
          "type": "other",
          "description": "수직 정렬 — 항상 center 고정"
        },
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.list-label}",
          "type": "typography"
        },
        "divider": {
          "value": "{semantic.color.border.subtle}",
          "type": "color"
        }
      },
      "numbered": {
        "description": "번호 뱃지 + 텍스트 구성 — 주요 혜택 리스트 등",
        "minHeight": {
          "value": "{foundation.dimension.size.list-item-min}",
          "type": "dimension"
        },
        "paddingVertical": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "gap": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "alignItems": {
          "value": "center",
          "type": "other",
          "description": "뱃지와 텍스트 수직 center 고정"
        },
        "badge": {
          "size": {
            "value": "{foundation.dimension.size.numbered-badge}",
            "type": "dimension",
            "description": "32x32px 정사각형"
          },
          "radius": {
            "value": "{foundation.dimension.radius.pill}",
            "type": "dimension"
          },
          "background": {
            "value": "{semantic.color.brand.light}",
            "type": "color"
          },
          "text": {
            "value": "{semantic.color.brand.primary}",
            "type": "color"
          },
          "textStyle": {
            "value": "{semantic.typography.chip-badge}",
            "type": "typography"
          }
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.list-label}",
          "type": "typography"
        }
      },
      "icon": {
        "description": "아이콘 + 텍스트 구성",
        "minHeight": {
          "value": "{foundation.dimension.size.list-item-min}",
          "type": "dimension"
        },
        "paddingVertical": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "gap": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "alignItems": {
          "value": "center",
          "type": "other"
        },
        "iconSize": {
          "value": "{foundation.dimension.size.icon-md}",
          "type": "dimension"
        },
        "iconColor": {
          "value": "{semantic.color.icon.default}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.list-label}",
          "type": "typography"
        }
      }
    },
    "badge": {
      "default": {
        "description": "D-2, 45% 같은 인라인 뱃지",
        "height": {
          "value": "20px",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.xs}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.brand.light}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.sub-label}",
          "type": "typography"
        }
      },
      "emphasis": {
        "description": "강조 뱃지 — 최근본, 다이렉트5G 태그",
        "height": {
          "value": "22px",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.sm}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.sub-label}",
          "type": "typography"
        }
      },
      "neutral": {
        "description": "256G 같은 중립 태그",
        "height": {
          "value": "22px",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.sm}",
          "type": "dimension"
        },
        "background": {
          "value": "{foundation.color.gray.200}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.secondary}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.sub-label}",
          "type": "typography"
        }
      }
    },
    "input": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.input}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.md}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "placeholder": {
          "value": "{semantic.color.text.muted}",
          "type": "color"
        },
        "border": {
          "value": "{semantic.color.border.default}",
          "type": "color"
        },
        "focusBorder": {
          "value": "{semantic.color.border.focus}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        }
      },
      "error": {
        "border": {
          "value": "{semantic.color.feedback.error}",
          "type": "color"
        }
      },
      "disabled": {
        "background": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        },
        "border": {
          "value": "{semantic.color.border.subtle}",
          "type": "color"
        }
      }
    },
    "search-bar": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.search-bar}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "placeholder": {
          "value": "{semantic.color.text.muted}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        }
      }
    },
    "tab-bar": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.tab-bar}",
          "type": "dimension"
        },
        "divider": {
          "value": "{semantic.color.tab.divider}",
          "type": "color"
        },
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "labelStyle": {
          "value": "{semantic.typography.tab-label}",
          "type": "typography"
        },
        "iconActive": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "iconDefault": {
          "value": "{semantic.color.icon.muted}",
          "type": "color"
        }
      }
    },
    "header": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.header}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "titleStyle": {
          "value": {
            "fontSize": "{foundation.typography.fontSize.title}",
            "lineHeight": "{foundation.typography.lineHeight.120}",
            "fontWeight": "{foundation.typography.fontWeight.medium}",
            "letterSpacing": "{foundation.typography.letterSpacing.tight-sm}"
          },
          "type": "typography",
          "description": "헤더 타이틀 — 20 medium. 모든 chrome 헤더 (page header, bottomsheet header) 공통"
        },
        "titleColor": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        }
      }
    },
    "icon": {
      "container": {
        "size": {
          "value": "{foundation.dimension.size.icon-container}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.lg}",
          "type": "dimension"
        },
        "background-default": {
          "value": "{semantic.color.icon.container-default}",
          "type": "color"
        },
        "background-document": {
          "value": "{semantic.color.icon.container-document}",
          "type": "color"
        },
        "background-brand": {
          "value": "{semantic.color.icon.container-brand}",
          "type": "color"
        }
      },
      "symbol": {
        "sm": {
          "value": "{foundation.dimension.size.icon-sm}",
          "type": "dimension"
        },
        "md": {
          "value": "{foundation.dimension.size.icon-md}",
          "type": "dimension"
        },
        "lg": {
          "value": "{foundation.dimension.size.icon-lg}",
          "type": "dimension"
        },
        "xl": {
          "value": "{foundation.dimension.size.icon-xl}",
          "type": "dimension"
        },
        "default": {
          "value": "{semantic.color.icon.default}",
          "type": "color"
        },
        "muted": {
          "value": "{semantic.color.icon.muted}",
          "type": "color"
        },
        "on-gray": {
          "value": "{semantic.color.icon.on-gray}",
          "type": "color"
        },
        "on-brand": {
          "value": "{semantic.color.icon.on-brand}",
          "type": "color"
        }
      }
    },
    "tooltip": {
      "default": {
        "background": {
          "value": "{semantic.color.surface.tooltip}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.on-dark}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.sm}",
          "type": "dimension"
        },
        "padding": {
          "value": "{foundation.dimension.spacing.sm}",
          "type": "dimension"
        },
        "textStyle": {
          "value": "{semantic.typography.sub-label}",
          "type": "typography"
        }
      }
    },
    "bottom-sheet": {
      "default": {
        "radius-top": {
          "value": "{foundation.dimension.radius.xl}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "shadow": {
          "value": "{foundation.shadow.lg}",
          "type": "shadow"
        },
        "overlay": {
          "value": "{semantic.color.background.overlay}",
          "type": "color"
        }
      }
    },
    "skeleton": {
      "default": {
        "background": {
          "value": "{semantic.color.skeleton.base}",
          "type": "color"
        },
        "shimmer": {
          "value": "{semantic.color.skeleton.shimmer}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.sm}",
          "type": "dimension"
        },
        "animationDuration": {
          "value": "{semantic.motion.loading}",
          "type": "duration"
        }
      }
    },
    "progress": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.progress-height-md}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "track": {
          "value": "{semantic.color.progress.track}",
          "type": "color"
        },
        "fill": {
          "value": "{semantic.color.progress.fill}",
          "type": "color"
        }
      },
      "small": {
        "height": {
          "value": "{foundation.dimension.size.progress-height-sm}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "track": {
          "value": "{semantic.color.progress.track}",
          "type": "color"
        },
        "fill": {
          "value": "{semantic.color.progress.fill}",
          "type": "color"
        }
      }
    },
    "divider": {
      "default": {
        "thickness": {
          "value": "{foundation.dimension.size.divider-weight-hairline}",
          "type": "dimension"
        },
        "color": {
          "value": "{semantic.color.border.subtle}",
          "type": "color"
        }
      }
    },
    "banner": {
      "info": {
        "height": {
          "value": "{foundation.dimension.size.banner-height}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.banner.info-bg}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.md}",
          "type": "dimension"
        },
        "padding": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "textStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        }
      },
      "warning": {
        "height": {
          "value": "{foundation.dimension.size.banner-height}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.banner.warning-bg}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.md}",
          "type": "dimension"
        },
        "padding": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "textStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        }
      },
      "error": {
        "height": {
          "value": "{foundation.dimension.size.banner-height}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.banner.error-bg}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.feedback.error}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.md}",
          "type": "dimension"
        },
        "padding": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "textStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        }
      },
      "success": {
        "height": {
          "value": "{foundation.dimension.size.banner-height}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.banner.success-bg}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.feedback.success}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.md}",
          "type": "dimension"
        },
        "padding": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "textStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        }
      }
    },
    "link": {
      "default": {
        "text": {
          "value": "{semantic.color.link.default}",
          "type": "color"
        },
        "pressed": {
          "value": "{semantic.color.link.pressed}",
          "type": "color"
        },
        "visited": {
          "value": "{semantic.color.link.visited}",
          "type": "color"
        },
        "textStyle": {
          "value": "{semantic.typography.body-medium}",
          "type": "typography"
        }
      }
    },
    "thumb": {
      "default": {
        "radius": {
          "value": "{foundation.dimension.size.thumb-radius-default}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color"
        },
        "size-sm": {
          "value": "{foundation.dimension.size.thumbnail-sm}",
          "type": "dimension"
        },
        "size-md": {
          "value": "{foundation.dimension.size.thumbnail-md}",
          "type": "dimension"
        },
        "size-lg": {
          "value": "{foundation.dimension.size.thumbnail-lg}",
          "type": "dimension"
        }
      },
      "portrait": {
        "radius": {
          "value": "{foundation.dimension.size.thumb-radius-default}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color"
        },
        "width-sm": {
          "value": "{foundation.dimension.size.thumbnail-sm}",
          "type": "dimension"
        },
        "height-sm": {
          "value": "{foundation.dimension.size.thumbnail-portrait-h-sm}",
          "type": "dimension"
        },
        "width-md": {
          "value": "{foundation.dimension.size.thumbnail-md}",
          "type": "dimension"
        },
        "height-md": {
          "value": "{foundation.dimension.size.thumbnail-portrait-h-md}",
          "type": "dimension"
        },
        "width-lg": {
          "value": "{foundation.dimension.size.thumbnail-lg}",
          "type": "dimension"
        },
        "height-lg": {
          "value": "{foundation.dimension.size.thumbnail-portrait-h-lg}",
          "type": "dimension"
        }
      }
    },
    "textarea": {
      "default": {
        "minHeight": {
          "value": "{foundation.dimension.size.textarea-min-height}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.md}",
          "type": "dimension"
        },
        "background": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color"
        },
        "text": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "placeholder": {
          "value": "{semantic.color.text.muted}",
          "type": "color"
        },
        "border": {
          "value": "{semantic.color.border.default}",
          "type": "color"
        },
        "focusBorder": {
          "value": "{semantic.color.border.focus}",
          "type": "color"
        },
        "padding": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "textStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        }
      }
    },
    "barcode": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.barcode-height}",
          "type": "dimension"
        },
        "background": {
          "value": "{foundation.color.gray.0}",
          "type": "color"
        },
        "stripe": {
          "value": "{foundation.color.black.default}",
          "type": "color"
        },
        "radius": {
          "value": "{foundation.dimension.radius.sm}",
          "type": "dimension"
        }
      }
    },
    "accordion": {
      "default": {
        "headerMinHeight": {
          "value": "{foundation.dimension.size.list-item-min}",
          "type": "dimension",
          "description": "Accordion 헤더 최소 높이 — 수직 center 정렬 보장"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.2xl}",
          "type": "dimension",
          "description": "카드 안 padding 24 표준 (DP § 2.5)"
        },
        "paddingVertical": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension"
        },
        "itemSpacing": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension",
          "description": "title ↔ chevron 사이 간격"
        },
        "background": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "titleStyle": {
          "value": "{semantic.typography.body-medium}",
          "type": "typography"
        },
        "titleColor": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "chevronSize": {
          "value": "{foundation.dimension.size.icon-md}",
          "type": "dimension"
        },
        "chevronColor": {
          "value": "{semantic.color.icon.default}",
          "type": "color"
        },
        "dividerColor": {
          "value": "{semantic.color.divider.hairline}",
          "type": "color"
        },
        "dividerWeight": {
          "value": "{foundation.dimension.size.divider-weight-hairline}",
          "type": "dimension"
        },
        "bodyPaddingTop": {
          "value": "{foundation.dimension.spacing.xs}",
          "type": "dimension"
        },
        "bodyPaddingBottom": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "bodyStyle": {
          "value": "{semantic.typography.body}",
          "type": "typography"
        },
        "bodyColor": {
          "value": "{semantic.color.text.secondary}",
          "type": "color"
        }
      }
    },
    "btn-icon": {
      "default": {
        "containerSize": {
          "value": "{foundation.dimension.size.icon-container}",
          "type": "dimension",
          "description": "40x40 클릭 영역 (hit target 보장)"
        },
        "iconSize": {
          "value": "{foundation.dimension.size.icon-lg}",
          "type": "dimension",
          "description": "24x24 아이콘 기본"
        },
        "radius": {
          "value": "{foundation.dimension.radius.pill}",
          "type": "dimension"
        },
        "iconColor": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "pressedBackground": {
          "value": "{foundation.color.gray.100}",
          "type": "color"
        },
        "pressedIconColor": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "disabledIconColor": {
          "value": "{semantic.color.text.disabled}",
          "type": "color"
        }
      }
    },
    "tab": {
      "default": {
        "height": {
          "value": "{foundation.dimension.size.tab-height}",
          "type": "dimension"
        },
        "paddingHorizontal": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension"
        },
        "labelStyle": {
          "value": "{semantic.typography.body-medium}",
          "type": "typography"
        },
        "labelDefault": {
          "value": "{semantic.color.text.muted}",
          "type": "color"
        },
        "labelActive": {
          "value": "{semantic.color.text.primary}",
          "type": "color"
        },
        "indicatorHeight": {
          "value": "{foundation.dimension.size.tab-indicator-height}",
          "type": "dimension"
        },
        "indicatorColor": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "dividerColor": {
          "value": "{semantic.color.divider.hairline}",
          "type": "color"
        }
      }
    },
    "feedback": {
      "error": {
        "text": {
          "value": "{semantic.color.feedback.error}",
          "type": "color"
        },
        "background": {
          "value": "{semantic.color.feedback.error-bg}",
          "type": "color"
        }
      },
      "success": {
        "text": {
          "value": "{semantic.color.feedback.success}",
          "type": "color"
        },
        "background": {
          "value": "{semantic.color.feedback.success-bg}",
          "type": "color"
        }
      },
      "warning": {
        "text": {
          "value": "{semantic.color.feedback.warning}",
          "type": "color"
        },
        "background": {
          "value": "{semantic.color.feedback.warning-bg}",
          "type": "color"
        }
      },
      "info": {
        "text": {
          "value": "{semantic.color.feedback.info}",
          "type": "color"
        },
        "background": {
          "value": "{semantic.color.feedback.info-bg}",
          "type": "color"
        }
      }
    },
    "checkbox": {
      "default": {
        "size": {
          "value": "{foundation.dimension.size.input-control}",
          "type": "dimension"
        },
        "radius": {
          "value": "{foundation.dimension.radius.xs}",
          "type": "dimension"
        },
        "border": {
          "value": "{semantic.color.border.default}",
          "type": "color"
        },
        "fillUnchecked": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "fillChecked": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "iconColor": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        }
      },
      "disabled": {
        "background": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "iconColor": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        }
      }
    },
    "radio": {
      "default": {
        "size": {
          "value": "{foundation.dimension.size.input-control}",
          "type": "dimension"
        },
        "border": {
          "value": "{semantic.color.border.default}",
          "type": "color"
        },
        "fillUnselected": {
          "value": "{semantic.color.surface.primary}",
          "type": "color"
        },
        "fillSelected": {
          "value": "{semantic.color.brand.primary}",
          "type": "color"
        },
        "dotColor": {
          "value": "{semantic.color.brand.on-brand}",
          "type": "color"
        }
      },
      "disabled": {
        "background": {
          "value": "{semantic.color.state.disabled-bg}",
          "type": "color"
        },
        "dotColor": {
          "value": "{semantic.color.state.disabled-text}",
          "type": "color"
        }
      }
    },
    "checkbox-list": {
      "default": {
        "itemSpacing": {
          "value": "{foundation.dimension.spacing.md}",
          "type": "dimension",
          "description": "checkbox-item 또는 radio-item N개 묶음의 row 사이 간격 — 가변 N row list 패턴 표준"
        },
        "paddingY": {
          "value": "{semantic.layout.screen-padding-default}",
          "type": "dimension",
          "description": "list 외피 상하 padding (= ogn content 표준)"
        },
        "paddingX": {
          "value": "{semantic.layout.screen-padding-default}",
          "type": "dimension",
          "description": "list 외피 좌우 padding (= ogn content 표준)"
        }
      }
    },
    "notice-card-list": {
      "default": {
        "padding": {
          "value": "{component.card.default.padding}",
          "type": "dimension",
          "description": "외피 + N개 mol/notice-block stack 패턴의 외피 padding (= card 표준)"
        },
        "itemSpacing": {
          "value": "{foundation.dimension.spacing.lg}",
          "type": "dimension",
          "description": "notice-block 사이 간격"
        },
        "radius": {
          "value": "{component.card.default.radius}",
          "type": "dimension",
          "description": "외피 cornerRadius (= card 표준)"
        },
        "fill": {
          "value": "{semantic.color.surface.secondary}",
          "type": "color",
          "description": "외피 fill (= surface.secondary 회색 카드)"
        }
      }
    }
  }
};

const SPECS = [
  {
    "$schema": "component-spec-v1",
    "name": "atom/banner",
    "category": "atom",
    "description": "페이지 수준 중요 메시지 배너. 3 톤 (info / warning / error) variants. info=brand-light bg + primary text / warning=orange-50 bg + primary text / error=red-50 bg + feedback.error text. component.banner.{tone}.* 토큰 활용. message exposeAs.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{component.banner.info.padding}",
        "paddingBottom": "{component.banner.info.padding}",
        "paddingLeft": "{component.banner.info.padding}",
        "paddingRight": "{component.banner.info.padding}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": "{component.banner.info.radius}",
        "fill": "{component.banner.info.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "message",
          "content": "배너 메시지",
          "textStyle": "{component.banner.info.textStyle}",
          "color": "{component.banner.info.text}",
          "layoutGrow": 1,
          "autoResize": "HEIGHT",
          "exposeAs": "message",
          "layoutAlign": "STRETCH"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "tone",
          "values": [
            "info",
            "warning",
            "error"
          ]
        }
      ],
      "overrides": {
        "tone=info": {
          "visual": {
            "cornerRadius": "{component.banner.info.radius}",
            "fill": "{component.banner.info.background}"
          },
          "children[message].textStyle": "{component.banner.info.textStyle}",
          "children[message].color": "{component.banner.info.text}"
        },
        "tone=warning": {
          "visual": {
            "cornerRadius": "{component.banner.warning.radius}",
            "fill": "{component.banner.warning.background}"
          },
          "children[message].textStyle": "{component.banner.warning.textStyle}",
          "children[message].color": "{component.banner.warning.text}"
        },
        "tone=error": {
          "visual": {
            "cornerRadius": "{component.banner.error.radius}",
            "fill": "{component.banner.error.background}"
          },
          "children[message].textStyle": "{component.banner.error.textStyle}",
          "children[message].color": "{component.banner.error.text}"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/barcode",
    "category": "atom",
    "description": "바코드 placeholder — 회색 박스. 향후 실제 바코드 렌더링으로 대체 가능.",
    "base": {
      "layout": {
        "mode": "NONE",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": 327,
        "height": 80
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.sm}",
        "fill": "{semantic.color.skeleton.base}",
        "stroke": null,
        "shadow": null
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/btn",
    "category": "atom",
    "description": "주요 액션 버튼. Pill radius, semibold label, type별로 height가 달라짐.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{component.button.primary.paddingHorizontal}",
        "paddingRight": "{component.button.primary.paddingHorizontal}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "height": "{component.button.primary.height}",
        "width": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.button.primary.radius}",
        "fill": "{component.button.primary.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "버튼",
          "textStyle": "{component.button.primary.textStyle}",
          "color": "{component.button.primary.text}",
          "exposeAs": "label"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "type",
          "values": [
            "primary",
            "primary-elevated",
            "secondary",
            "small",
            "small-elevated",
            "destructive"
          ]
        },
        {
          "name": "state",
          "values": [
            "default",
            "pressed",
            "disabled",
            "loading"
          ]
        }
      ],
      "overrides": {
        "type=primary,state=default": {},
        "type=primary-elevated,state=default": {
          "layout": {
            "height": "{component.button.primary-elevated.height}",
            "paddingLeft": "{component.button.primary-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.primary-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.primary-elevated.radius}",
            "fill": "{component.button.primary-elevated.background}",
            "stroke": null,
            "shadow": "{component.button.primary-elevated.shadow}"
          },
          "children[label].color": "{component.button.primary-elevated.text}",
          "children[label].textStyle": "{component.button.primary-elevated.textStyle}"
        },
        "type=primary-elevated,state=pressed": {
          "layout": {
            "height": "{component.button.primary-elevated.height}",
            "paddingLeft": "{component.button.primary-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.primary-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.primary-elevated.radius}",
            "fill": "{component.button.primary-elevated.pressedBackground}",
            "stroke": null,
            "shadow": "{component.button.primary-elevated.shadow}"
          },
          "children[label].color": "{component.button.primary-elevated.text}",
          "children[label].textStyle": "{component.button.primary-elevated.textStyle}"
        },
        "type=primary-elevated,state=disabled": {
          "layout": {
            "height": "{component.button.primary-elevated.height}",
            "paddingLeft": "{component.button.primary-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.primary-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.primary-elevated.radius}",
            "fill": "{component.button.primary-elevated.disabledBackground}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.primary-elevated.disabledText}",
          "children[label].textStyle": "{component.button.primary-elevated.textStyle}"
        },
        "type=primary-elevated,state=loading": {
          "layout": {
            "height": "{component.button.primary-elevated.height}",
            "paddingLeft": "{component.button.primary-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.primary-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.primary-elevated.radius}",
            "fill": "{component.button.primary-elevated.disabledBackground}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.primary-elevated.disabledText}",
          "children[label].textStyle": "{component.button.primary-elevated.textStyle}",
          "children[label].content": "처리 중…"
        },
        "type=primary,state=pressed": {
          "visual": {
            "fill": "{component.button.primary.pressedBackground}"
          }
        },
        "type=primary,state=disabled": {
          "visual": {
            "fill": "{component.button.primary.disabledBackground}"
          },
          "children[label].color": "{component.button.primary.disabledText}"
        },
        "type=secondary,state=default": {
          "layout": {
            "height": "{component.button.secondary.height}",
            "paddingLeft": "{component.button.secondary.paddingHorizontal}",
            "paddingRight": "{component.button.secondary.paddingHorizontal}"
          },
          "visual": {
            "fill": "{component.button.secondary.background}",
            "stroke": {
              "color": "{component.button.secondary.border}",
              "weight": 1
            }
          },
          "children[label].color": "{component.button.secondary.text}",
          "children[label].textStyle": "{component.button.secondary.textStyle}"
        },
        "type=secondary,state=pressed": {
          "layout": {
            "height": "{component.button.secondary.height}",
            "paddingLeft": "{component.button.secondary.paddingHorizontal}",
            "paddingRight": "{component.button.secondary.paddingHorizontal}"
          },
          "visual": {
            "fill": "{semantic.color.state.hover-bg}",
            "stroke": {
              "color": "{semantic.color.border.active}",
              "weight": 1
            }
          },
          "children[label].color": "{semantic.color.brand.primary}",
          "children[label].textStyle": "{component.button.secondary.textStyle}"
        },
        "type=secondary,state=disabled": {
          "layout": {
            "height": "{component.button.secondary.height}",
            "paddingLeft": "{component.button.secondary.paddingHorizontal}",
            "paddingRight": "{component.button.secondary.paddingHorizontal}"
          },
          "visual": {
            "fill": "{semantic.color.state.disabled-bg}",
            "stroke": null
          },
          "children[label].color": "{semantic.color.state.disabled-text}",
          "children[label].textStyle": "{component.button.secondary.textStyle}"
        },
        "type=small,state=default": {
          "layout": {
            "height": "{component.button.small.height}",
            "paddingLeft": "{component.button.small.paddingHorizontal}",
            "paddingRight": "{component.button.small.paddingHorizontal}"
          },
          "children[label].textStyle": "{component.button.small.textStyle}"
        },
        "type=small,state=pressed": {
          "layout": {
            "height": "{component.button.small.height}",
            "paddingLeft": "{component.button.small.paddingHorizontal}",
            "paddingRight": "{component.button.small.paddingHorizontal}"
          },
          "visual": {
            "fill": "{component.button.primary.pressedBackground}"
          },
          "children[label].textStyle": "{component.button.small.textStyle}"
        },
        "type=small,state=disabled": {
          "layout": {
            "height": "{component.button.small.height}",
            "paddingLeft": "{component.button.small.paddingHorizontal}",
            "paddingRight": "{component.button.small.paddingHorizontal}"
          },
          "visual": {
            "fill": "{component.button.primary.disabledBackground}"
          },
          "children[label].color": "{component.button.primary.disabledText}",
          "children[label].textStyle": "{component.button.small.textStyle}"
        },
        "type=small-elevated,state=default": {
          "layout": {
            "height": "{component.button.small-elevated.height}",
            "paddingLeft": "{component.button.small-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.small-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.small-elevated.radius}",
            "fill": "{component.button.small-elevated.background}",
            "stroke": null,
            "shadow": "{component.button.small-elevated.shadow}"
          },
          "children[label].color": "{component.button.small-elevated.text}",
          "children[label].textStyle": "{component.button.small-elevated.textStyle}"
        },
        "type=small-elevated,state=pressed": {
          "layout": {
            "height": "{component.button.small-elevated.height}",
            "paddingLeft": "{component.button.small-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.small-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.small-elevated.radius}",
            "fill": "{component.button.small-elevated.pressedBackground}",
            "stroke": null,
            "shadow": "{component.button.small-elevated.shadow}"
          },
          "children[label].color": "{component.button.small-elevated.text}",
          "children[label].textStyle": "{component.button.small-elevated.textStyle}"
        },
        "type=small-elevated,state=disabled": {
          "layout": {
            "height": "{component.button.small-elevated.height}",
            "paddingLeft": "{component.button.small-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.small-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.small-elevated.radius}",
            "fill": "{component.button.small-elevated.disabledBackground}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.small-elevated.disabledText}",
          "children[label].textStyle": "{component.button.small-elevated.textStyle}"
        },
        "type=small-elevated,state=loading": {
          "layout": {
            "height": "{component.button.small-elevated.height}",
            "paddingLeft": "{component.button.small-elevated.paddingHorizontal}",
            "paddingRight": "{component.button.small-elevated.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.small-elevated.radius}",
            "fill": "{component.button.small-elevated.disabledBackground}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.small-elevated.disabledText}",
          "children[label].textStyle": "{component.button.small-elevated.textStyle}",
          "children[label].content": "처리 중…"
        },
        "type=destructive,state=default": {
          "layout": {
            "height": "{component.button.destructive.height}",
            "paddingLeft": "{component.button.destructive.paddingHorizontal}",
            "paddingRight": "{component.button.destructive.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.destructive.radius}",
            "fill": "{component.button.destructive.background}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.destructive.text}",
          "children[label].textStyle": "{component.button.destructive.textStyle}"
        },
        "type=destructive,state=pressed": {
          "layout": {
            "height": "{component.button.destructive.height}",
            "paddingLeft": "{component.button.destructive.paddingHorizontal}",
            "paddingRight": "{component.button.destructive.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.destructive.radius}",
            "fill": "{component.button.destructive.pressedBackground}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.destructive.text}",
          "children[label].textStyle": "{component.button.destructive.textStyle}"
        },
        "type=destructive,state=disabled": {
          "layout": {
            "height": "{component.button.destructive.height}",
            "paddingLeft": "{component.button.destructive.paddingHorizontal}",
            "paddingRight": "{component.button.destructive.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.destructive.radius}",
            "fill": "{component.button.destructive.disabledBackground}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.destructive.disabledText}",
          "children[label].textStyle": "{component.button.destructive.textStyle}"
        },
        "type=primary,state=loading": {
          "visual": {
            "fill": "{component.button.primary.disabledBackground}"
          },
          "children[label].color": "{component.button.primary.disabledText}",
          "children[label].content": "처리 중…"
        },
        "type=secondary,state=loading": {
          "layout": {
            "height": "{component.button.secondary.height}",
            "paddingLeft": "{component.button.secondary.paddingHorizontal}",
            "paddingRight": "{component.button.secondary.paddingHorizontal}"
          },
          "visual": {
            "fill": "{semantic.color.state.disabled-bg}",
            "stroke": null
          },
          "children[label].color": "{semantic.color.state.disabled-text}",
          "children[label].textStyle": "{component.button.secondary.textStyle}",
          "children[label].content": "처리 중…"
        },
        "type=small,state=loading": {
          "layout": {
            "height": "{component.button.small.height}",
            "paddingLeft": "{component.button.small.paddingHorizontal}",
            "paddingRight": "{component.button.small.paddingHorizontal}"
          },
          "visual": {
            "fill": "{component.button.primary.disabledBackground}"
          },
          "children[label].color": "{component.button.primary.disabledText}",
          "children[label].textStyle": "{component.button.small.textStyle}",
          "children[label].content": "처리 중…"
        },
        "type=destructive,state=loading": {
          "layout": {
            "height": "{component.button.destructive.height}",
            "paddingLeft": "{component.button.destructive.paddingHorizontal}",
            "paddingRight": "{component.button.destructive.paddingHorizontal}"
          },
          "visual": {
            "cornerRadius": "{component.button.destructive.radius}",
            "fill": "{component.button.destructive.disabledBackground}",
            "stroke": null,
            "shadow": null
          },
          "children[label].color": "{component.button.destructive.disabledText}",
          "children[label].textStyle": "{component.button.destructive.textStyle}",
          "children[label].content": "처리 중…"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/btn-icon",
    "category": "atom",
    "description": "아이콘 전용 버튼. 40x40 클릭 컨테이너 + 24x24 icon (INSTANCE_SWAP property 'icon'). 사용처에서 props.icon 으로 swap (예: \"atom/icon/heart\"). state = default/pressed/disabled.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{component.btn-icon.default.containerSize}",
        "height": "{component.btn-icon.default.containerSize}"
      },
      "visual": {
        "cornerRadius": "{component.btn-icon.default.radius}",
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/menu",
          "exposeAs": "icon"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "pressed",
            "disabled"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=pressed": {
          "visual": {
            "fill": "{component.btn-icon.default.pressedBackground}"
          }
        },
        "state=disabled": {}
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/btn-inline",
    "category": "atom",
    "description": "인라인 tag-sized CTA 버튼 — 22px pill, 행 내 부수 action (예: 쿠폰 받기). component.button.inline 토큰 재활용. state = default/pressed/disabled.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{component.button.inline.paddingHorizontal}",
        "paddingRight": "{component.button.inline.paddingHorizontal}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "{component.button.inline.height}",
        "width": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.button.inline.radius}",
        "fill": "{component.button.inline.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "버튼",
          "textStyle": "{component.button.inline.textStyle}",
          "color": "{component.button.inline.text}",
          "exposeAs": "label"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "pressed",
            "disabled"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=pressed": {
          "visual": {
            "fill": "{component.button.inline.pressedBackground}"
          }
        },
        "state=disabled": {
          "visual": {
            "fill": "{component.button.inline.disabledBackground}"
          },
          "children[label].color": "{component.button.inline.disabledText}"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/checkbox",
    "category": "atom",
    "description": "체크박스. 24x24 정사각, radius 4. state = default/checked/disabled/indeterminate. 체크/dash 아이콘은 추후 SVG 추가 예정 (현재 visual fill/stroke 만으로 분기).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{component.checkbox.default.size}",
        "height": "{component.checkbox.default.size}"
      },
      "visual": {
        "cornerRadius": "{component.checkbox.default.radius}",
        "fill": "{component.checkbox.default.fillUnchecked}",
        "stroke": {
          "color": "{component.checkbox.default.border}",
          "weight": 1
        },
        "shadow": null
      },
      "children": []
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "checked",
            "disabled",
            "indeterminate"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=checked": {
          "visual": {
            "cornerRadius": "{component.checkbox.default.radius}",
            "fill": "{component.checkbox.default.fillChecked}",
            "stroke": null,
            "shadow": null
          }
        },
        "state=disabled": {
          "visual": {
            "cornerRadius": "{component.checkbox.default.radius}",
            "fill": "{component.checkbox.disabled.background}",
            "stroke": null,
            "shadow": null
          }
        },
        "state=indeterminate": {
          "visual": {
            "cornerRadius": "{component.checkbox.default.radius}",
            "fill": "{component.checkbox.default.fillChecked}",
            "stroke": null,
            "shadow": null
          }
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/divider",
    "category": "atom",
    "description": "수평 구분선. thickness 1px. width 는 사용처에서 layoutAlign STRETCH 로 늘림.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "{component.divider.default.thickness}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{component.divider.default.color}",
        "stroke": null,
        "shadow": null
      },
      "children": []
    },
    "widthFallback": "{foundation.dimension.size.card-inner-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/icon-bubble",
    "category": "atom",
    "description": "외피 wrapper + INSTANCE_SWAP 가능한 아이콘. size variants — md (32 컨테이너 + 24 icon, default) / sm (20 컨테이너 + 16 icon). fill/stroke 없는 투명 외피 — 단순 wrapper 역할 (icon 정렬·size 통일). icon 은 props.icon 으로 swap.",
    "widthFallback": "{foundation.dimension.size.icon-xl}",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.xs}",
        "paddingBottom": "{foundation.dimension.spacing.xs}",
        "paddingLeft": "{foundation.dimension.spacing.xs}",
        "paddingRight": "{foundation.dimension.spacing.xs}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.icon-xl}",
        "height": "{foundation.dimension.size.icon-xl}"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.sm}",
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/sparkle",
          "exposeAs": "icon"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "size",
          "values": [
            "sm",
            "md"
          ]
        }
      ],
      "overrides": {
        "size=md": {},
        "size=sm": {
          "layout": {
            "width": "{foundation.dimension.size.icon-md}",
            "height": "{foundation.dimension.size.icon-md}"
          },
          "visual": {
            "cornerRadius": "{foundation.dimension.radius.xs}",
            "fill": null,
            "stroke": null,
            "shadow": null
          }
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/link",
    "category": "atom",
    "description": "텍스트 링크 — 외피 투명 + 텍스트 + underline. 보조 액션·탐색 링크 시각 (예: '자세히', '전체 삭제'). atom/btn-inline (fill 강조 액션) 과 의미·시각 분리. state = default/pressed/disabled.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "HUG",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "링크",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.secondary}",
          "exposeAs": "label",
          "textDecoration": "UNDERLINE"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "pressed",
            "disabled"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=pressed": {
          "children[label].color": "{semantic.color.text.primary}"
        },
        "state=disabled": {
          "children[label].color": "{semantic.color.text.muted}"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/radio",
    "category": "atom",
    "description": "라디오 버튼. 24x24 원형. state = default/selected/disabled. inner dot 은 추후 nested group 으로 추가 (현재 visual fill 만).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{component.radio.default.size}",
        "height": "{component.radio.default.size}"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.pill}",
        "fill": "{component.radio.default.fillUnselected}",
        "stroke": {
          "color": "{component.radio.default.border}",
          "weight": 1
        },
        "shadow": null
      },
      "children": []
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "selected",
            "disabled"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=selected": {
          "visual": {
            "cornerRadius": "{foundation.dimension.radius.pill}",
            "fill": "{component.radio.default.fillSelected}",
            "stroke": null,
            "shadow": null
          }
        },
        "state=disabled": {
          "visual": {
            "cornerRadius": "{foundation.dimension.radius.pill}",
            "fill": "{component.radio.disabled.background}",
            "stroke": null,
            "shadow": null
          }
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/skeleton",
    "category": "atom",
    "description": "Loading placeholder — 데이터 로딩 중 콘텐츠 자리 표시 회색 박스. component.skeleton.default 토큰 (background / radius) 재활용. shape variants 3종 — line (긴 텍스트 라인) / rect (카드/이미지) / circle (아바타). 사용처에서 figma instance width/height 별 변경. shimmer 애니메이션은 figma prototype 으로 후속.",
    "base": {
      "layout": {
        "mode": "NONE",
        "width": "{foundation.dimension.size.thumbnail-lg}",
        "height": "{foundation.dimension.spacing.xl}"
      },
      "visual": {
        "cornerRadius": "{component.skeleton.default.radius}",
        "fill": "{component.skeleton.default.background}",
        "stroke": null,
        "shadow": null
      },
      "children": []
    },
    "variants": {
      "axes": [
        {
          "name": "shape",
          "values": [
            "line",
            "rect",
            "circle"
          ]
        }
      ],
      "overrides": {
        "shape=line": {},
        "shape=rect": {
          "layout": {
            "mode": "NONE",
            "width": "{foundation.dimension.size.thumbnail-lg}",
            "height": "{foundation.dimension.size.thumbnail-lg}"
          }
        },
        "shape=circle": {
          "layout": {
            "mode": "NONE",
            "width": "{foundation.dimension.size.thumbnail-md}",
            "height": "{foundation.dimension.size.thumbnail-md}"
          },
          "visual": {
            "cornerRadius": "{foundation.dimension.radius.full}",
            "fill": "{component.skeleton.default.background}",
            "stroke": null,
            "shadow": null
          }
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/spinner",
    "category": "atom",
    "description": "로딩 spinner placeholder — 24x24 도넛 (stroke brand primary, weight 3). 실제 회전 애니메이션은 Figma prototype 단에서. 처리/대기 화면용.",
    "base": {
      "layout": {
        "mode": "NONE",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "width": "{foundation.dimension.size.icon-lg}",
        "height": "{foundation.dimension.size.icon-lg}"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.pill}",
        "fill": null,
        "stroke": {
          "color": "{semantic.color.brand.primary}",
          "weight": 3
        },
        "shadow": null
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/tab-item",
    "category": "atom",
    "description": "탭 아이템 — label + bottom indicator. state=default/active. ogn/tab 에서 3개 ref 로 조립.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{component.tab.default.paddingHorizontal}",
        "paddingRight": "{component.tab.default.paddingHorizontal}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "{component.tab.default.height}",
        "width": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "탭",
          "textStyle": "{component.tab.default.labelStyle}",
          "color": "{component.tab.default.labelDefault}",
          "exposeAs": "label"
        },
        {
          "kind": "group",
          "id": "indicator",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "NONE",
            "height": "{component.tab.default.indicatorHeight}",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": []
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "active"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=active": {
          "children[label].color": "{component.tab.default.labelActive}",
          "children[indicator].visual": {
            "cornerRadius": 0,
            "fill": "{component.tab.default.indicatorColor}",
            "stroke": null,
            "shadow": null
          }
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/tag",
    "category": "atom",
    "description": "속성·상태·카운트 레이블. component.badge 토큰 재활용 (default/emphasis/neutral).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{component.badge.default.paddingHorizontal}",
        "paddingRight": "{component.badge.default.paddingHorizontal}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "{component.badge.default.height}",
        "width": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.badge.default.radius}",
        "fill": "{component.badge.default.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "태그",
          "textStyle": "{component.badge.default.textStyle}",
          "color": "{component.badge.default.text}",
          "exposeAs": "label"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "type",
          "values": [
            "default",
            "emphasis",
            "neutral"
          ]
        }
      ],
      "overrides": {
        "type=default": {},
        "type=emphasis": {
          "layout": {
            "paddingLeft": "{component.badge.emphasis.paddingHorizontal}",
            "paddingRight": "{component.badge.emphasis.paddingHorizontal}",
            "height": "{component.badge.emphasis.height}"
          },
          "visual": {
            "fill": "{component.badge.emphasis.background}"
          },
          "children[label].color": "{component.badge.emphasis.text}",
          "children[label].textStyle": "{component.badge.emphasis.textStyle}"
        },
        "type=neutral": {
          "layout": {
            "paddingLeft": "{component.badge.neutral.paddingHorizontal}",
            "paddingRight": "{component.badge.neutral.paddingHorizontal}",
            "height": "{component.badge.neutral.height}"
          },
          "visual": {
            "fill": "{component.badge.neutral.background}"
          },
          "children[label].color": "{component.badge.neutral.text}",
          "children[label].textStyle": "{component.badge.neutral.textStyle}"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/text-area",
    "category": "atom",
    "description": "멀티라인 입력 필드. component.textarea 토큰 재활용. state = default/focused/disabled/error.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{component.textarea.default.padding}",
        "paddingBottom": "{component.textarea.default.padding}",
        "paddingLeft": "{component.textarea.default.padding}",
        "paddingRight": "{component.textarea.default.padding}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "{component.textarea.default.minHeight}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": "{component.textarea.default.radius}",
        "fill": "{component.textarea.default.background}",
        "stroke": {
          "color": "{component.textarea.default.border}",
          "weight": 1
        },
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "placeholder",
          "content": "내용을 입력해 주세요",
          "textStyle": "{component.textarea.default.textStyle}",
          "color": "{component.textarea.default.placeholder}",
          "exposeAs": "placeholder"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "focused",
            "disabled",
            "error"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=focused": {
          "visual": {
            "cornerRadius": "{component.textarea.default.radius}",
            "fill": "{component.textarea.default.background}",
            "stroke": {
              "color": "{component.textarea.default.focusBorder}",
              "weight": 1
            },
            "shadow": null
          }
        },
        "state=disabled": {
          "visual": {
            "cornerRadius": "{component.textarea.default.radius}",
            "fill": "{semantic.color.state.disabled-bg}",
            "stroke": null,
            "shadow": null
          },
          "children[placeholder].color": "{semantic.color.text.disabled}"
        },
        "state=error": {
          "visual": {
            "cornerRadius": "{component.textarea.default.radius}",
            "fill": "{semantic.color.feedback.error-bg}",
            "stroke": {
              "color": "{semantic.color.feedback.error}",
              "weight": 1
            },
            "shadow": null
          },
          "children[placeholder].color": "{semantic.color.feedback.error}"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/text-input",
    "category": "atom",
    "description": "단일 라인 입력 필드. component.input 토큰 재활용. state = default/focused/disabled/error.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{component.input.default.paddingHorizontal}",
        "paddingRight": "{component.input.default.paddingHorizontal}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "{component.input.default.height}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": "{component.input.default.radius}",
        "fill": "{component.input.default.background}",
        "stroke": {
          "color": "{component.input.default.border}",
          "weight": 1
        },
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "placeholder",
          "content": "내용을 입력해 주세요",
          "textStyle": "{component.input.default.textStyle}",
          "color": "{component.input.default.placeholder}",
          "exposeAs": "placeholder"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "default",
            "focused",
            "disabled",
            "error"
          ]
        }
      ],
      "overrides": {
        "state=default": {},
        "state=focused": {
          "visual": {
            "cornerRadius": "{component.input.default.radius}",
            "fill": "{component.input.default.background}",
            "stroke": {
              "color": "{component.input.default.focusBorder}",
              "weight": 1
            },
            "shadow": null
          }
        },
        "state=disabled": {
          "visual": {
            "cornerRadius": "{component.input.default.radius}",
            "fill": "{component.input.disabled.background}",
            "stroke": {
              "color": "{component.input.disabled.border}",
              "weight": 1
            },
            "shadow": null
          },
          "children[placeholder].color": "{component.input.disabled.text}"
        },
        "state=error": {
          "visual": {
            "cornerRadius": "{component.input.default.radius}",
            "fill": "{component.input.default.background}",
            "stroke": {
              "color": "{component.input.error.border}",
              "weight": 1
            },
            "shadow": null
          },
          "children[placeholder].color": "{semantic.color.feedback.error}"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/text-label",
    "category": "atom",
    "description": "단일 라벨 텍스트 — 카드/섹션 헤더 라벨 위계. card-header-label 토큰 + text.muted 컬러. ogn/page 안 단일 라벨 ref 단위 (mol/card-header-label-only 흡수, 2026-05-01).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "T멤버십",
          "textStyle": "{semantic.typography.card-header-label}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "label"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/thumb",
    "category": "atom",
    "description": "썸네일 placeholder — 회색 박스. 실제 이미지는 Figma 에서 fill 로 교체.",
    "base": {
      "layout": {
        "mode": "NONE",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{component.thumb.default.size-md}",
        "height": "{component.thumb.default.size-md}"
      },
      "visual": {
        "cornerRadius": "{component.thumb.default.radius}",
        "fill": "{component.thumb.default.background}",
        "stroke": null,
        "shadow": null
      }
    },
    "variants": {
      "axes": [
        {
          "name": "size",
          "values": [
            "sm",
            "md",
            "lg"
          ]
        }
      ],
      "overrides": {
        "size=sm": {
          "layout": {
            "width": "{component.thumb.default.size-sm}",
            "height": "{component.thumb.default.size-sm}"
          }
        },
        "size=md": {},
        "size=lg": {
          "layout": {
            "width": "{component.thumb.default.size-lg}",
            "height": "{component.thumb.default.size-lg}"
          }
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/thumb-portrait",
    "category": "atom",
    "description": "세로 포스터 썸네일 placeholder — 2:3 비율. 영화 포스터 등. 실제 이미지는 Figma 에서 fill 로 교체.",
    "base": {
      "layout": {
        "mode": "NONE",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{component.thumb.portrait.width-md}",
        "height": "{component.thumb.portrait.height-md}"
      },
      "visual": {
        "cornerRadius": "{component.thumb.portrait.radius}",
        "fill": "{component.thumb.portrait.background}",
        "stroke": null,
        "shadow": null
      }
    },
    "variants": {
      "axes": [
        {
          "name": "size",
          "values": [
            "sm",
            "md",
            "lg"
          ]
        }
      ],
      "overrides": {
        "size=sm": {
          "layout": {
            "width": "{component.thumb.portrait.width-sm}",
            "height": "{component.thumb.portrait.height-sm}"
          }
        },
        "size=md": {},
        "size=lg": {
          "layout": {
            "width": "{component.thumb.portrait.width-lg}",
            "height": "{component.thumb.portrait.height-lg}"
          }
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "atom/tooltip",
    "category": "atom",
    "description": "호버 시 보조 정보 버블. dark bg + sub-label text. TODO: arrow(꼬리) 렌더링 — direction=top|bottom 에 따라 하단/상단 부착.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{component.tooltip.default.padding}",
        "paddingBottom": "{component.tooltip.default.padding}",
        "paddingLeft": "{component.tooltip.default.padding}",
        "paddingRight": "{component.tooltip.default.padding}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "HUG",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.tooltip.default.radius}",
        "fill": "{component.tooltip.default.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "message",
          "content": "툴팁 메시지",
          "textStyle": "{component.tooltip.default.textStyle}",
          "color": "{component.tooltip.default.text}",
          "exposeAs": "message",
          "layoutAlign": "STRETCH"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "direction",
          "values": [
            "top",
            "bottom"
          ]
        }
      ],
      "overrides": {
        "direction=top": {},
        "direction=bottom": {}
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/accordion",
    "category": "mol",
    "description": "접힘 가능한 상세 내용 — header(title + chevron icon) + divider + body. 현재는 expanded 상태만 표현 (state 축은 TODO).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{component.accordion.default.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "header",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "SPACE_BETWEEN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{component.accordion.default.paddingVertical}",
            "paddingBottom": "{component.accordion.default.paddingVertical}",
            "paddingLeft": "{component.accordion.default.paddingHorizontal}",
            "paddingRight": "{component.accordion.default.paddingHorizontal}",
            "itemSpacing": "{component.accordion.default.itemSpacing}",
            "height": "{component.accordion.default.headerMinHeight}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "title",
              "content": "타이틀",
              "textStyle": "{component.accordion.default.titleStyle}",
              "color": "{component.accordion.default.titleColor}",
              "exposeAs": "title"
            },
            {
              "kind": "ref",
              "id": "chevron",
              "component": "atom/icon/chevron-down"
            }
          ]
        },
        {
          "kind": "group",
          "id": "divider",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "NONE",
            "height": "{component.accordion.default.dividerWeight}",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": "{component.accordion.default.dividerColor}",
            "stroke": null,
            "shadow": null
          },
          "children": []
        },
        {
          "kind": "group",
          "id": "body",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.accordion.default.bodyPaddingTop}",
            "paddingBottom": "{component.accordion.default.bodyPaddingBottom}",
            "paddingLeft": "{component.accordion.default.paddingHorizontal}",
            "paddingRight": "{component.accordion.default.paddingHorizontal}",
            "itemSpacing": "{foundation.dimension.spacing.none}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "body-text",
              "content": "접힘 가능한 상세 내용 영역",
              "textStyle": "{component.accordion.default.bodyStyle}",
              "color": "{component.accordion.default.bodyColor}",
              "exposeAs": "body",
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/accordion-list",
    "category": "mol",
    "description": "mol/accordion × 3 묶음 — 정보 그룹별 펼침. 탈퇴 영향 안내 / FAQ 등 공유. 사용처에서 props 로 acc-1/2/3 의 title/body 주입.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "acc-1",
          "component": "mol/accordion",
          "props": {
            "title": "항목 1",
            "body": "내용 1"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "acc-2",
          "component": "mol/accordion",
          "props": {
            "title": "항목 2",
            "body": "내용 2"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "acc-3",
          "component": "mol/accordion",
          "props": {
            "title": "항목 3",
            "body": "내용 3"
          },
          "layoutAlign": "STRETCH"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/ai-insight",
    "category": "mol",
    "description": "AI 인사이트 한 줄 — icon-bubble + prefix(text.primary) + value(text.emphasis, optional). type variants — message-only(value 숨김) / with-value(3색 prefix+value). 홈 카드 안 분석 코멘트 / 포인트 잔액 같은 패턴 통합 (mol/value-row 흡수, 2026-05-03). icon 은 INSTANCE_SWAP (props.icon).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon-bubble",
          "variant": {
            "size": "sm"
          },
          "props": {
            "icon": "atom/icon/sparkle"
          },
          "exposeAs": "icon"
        },
        {
          "kind": "text",
          "id": "prefix",
          "content": "T 멤버십 사용 가능 포인트",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "prefix",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "autoResize": "HEIGHT"
        },
        {
          "kind": "text",
          "id": "value",
          "content": "65,300P",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.emphasis}",
          "exposeAs": "value"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "type",
          "values": [
            "message-only",
            "with-value"
          ]
        }
      ],
      "overrides": {
        "type=message-only": {
          "children[value].visible": false
        },
        "type=with-value": {}
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/all-agree-row",
    "category": "mol",
    "description": "전체 동의 row — checkbox + 라벨, 둥근 연한 그레이 카드 (surface.secondary). 화이트 페이지 위에서 시각 분리. term-section · bottomsheet · leave-confirm 공유.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.md}",
        "paddingRight": "{foundation.dimension.spacing.md}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.sm}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "checkbox",
          "component": "atom/checkbox",
          "variant": {
            "state": "default"
          }
        },
        {
          "kind": "text",
          "id": "label",
          "content": "전체 동의",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "layoutGrow": 1,
          "exposeAs": "label"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/amount-row",
    "category": "mol",
    "description": "금액 표시 행 — 항목명(좌, muted) + 금액(우, primary, number-emphasis 폰트). info-row 와 비슷하지만 우측 값이 금액 강조 typography. BIL 도메인의 청구 항목 / 합계 항목 / 환불 대상 / 변동 금액 등 다수 화면에서 재사용.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "BASELINE",
        "paddingTop": "{foundation.dimension.spacing.sm}",
        "paddingBottom": "{foundation.dimension.spacing.sm}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "기본료",
          "textStyle": "{semantic.typography.body}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "label"
        },
        {
          "kind": "text",
          "id": "amount",
          "content": "55,000원",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "amount"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.card-inner-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/auth-method-item",
    "category": "mol",
    "description": "본인인증 수단 row — leading icon (휴대폰/PASS/공동인증서/아이핀 아이콘) + label (FILL grow) + trailing chevron-right. signup-auth / dormant-auth / leave-auth / rejoin-auth 의 인증수단 list 에 사용. mol/list-item 과 다른 구조 (thumb 정사각 X, action btn X). props 로 label 주입.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/lock-closed",
          "exposeAs": "icon"
        },
        {
          "kind": "text",
          "id": "label",
          "content": "휴대폰 본인인증",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "layoutGrow": 1,
          "exposeAs": "label"
        },
        {
          "kind": "ref",
          "id": "chevron",
          "component": "atom/icon/chevron-right"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/banner-padded",
    "category": "mol",
    "description": "atom/banner 를 좌/우/상/하 12 padding 으로 감싼 wrapper mol — 페이지에서 화면 양쪽 breathing room 확보용. promo / notice 등 페이지 단위 banner 공유.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.md}",
        "paddingRight": "{foundation.dimension.spacing.md}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "banner",
          "component": "atom/banner",
          "layoutAlign": "STRETCH",
          "props": {
            "message": "지금 구독하면 첫 달 50% 할인!"
          }
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/barcode-footer",
    "category": "mol",
    "description": "바코드 하단 — 4그룹 숫자 (좌측 묶음) + 타이머 (우측). weight=semibold.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": 327,
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "digits-wrap",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "d1",
              "content": "1234",
              "textStyle": "{semantic.typography.card-header-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "d1"
            },
            {
              "kind": "text",
              "id": "d2",
              "content": "4561",
              "textStyle": "{semantic.typography.card-header-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "d2"
            },
            {
              "kind": "text",
              "id": "d3",
              "content": "1506",
              "textStyle": "{semantic.typography.card-header-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "d3"
            },
            {
              "kind": "text",
              "id": "d4",
              "content": "4932",
              "textStyle": "{semantic.typography.card-header-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "d4"
            }
          ]
        },
        {
          "kind": "text",
          "id": "timer",
          "content": "19:58",
          "textStyle": "{semantic.typography.card-header-label}",
          "color": "{semantic.color.brand.primary}",
          "exposeAs": "timer"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/barcode-display",
    "category": "mol",
    "description": "바코드 + 하단 footer (digits/timer) 세로 묶음. 내부 gap = spacing.xs (4px).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "width": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "barcode",
          "component": "atom/barcode",
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "footer",
          "component": "mol/barcode-footer",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/section-header",
    "category": "mol",
    "description": "섹션 헤더 — 타이틀(card-title) + 설명(body) 텍스트 묶음. 폼/안내 섹션의 본문 위 도입부 공유. 8+ ogn 에서 재사용.\n\n옵셔널 자식 패턴 (CONVENTIONS § 8.5) — `headline` / `description` 각각 with/without toggle. 기본 둘 다 with. 사용처에서 빈 텍스트 대신 variant 로 명시적으로 숨김 처리.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "headline",
          "content": "섹션 타이틀",
          "textStyle": "{component.card.default.main-titleStyle}",
          "color": "{semantic.color.text.primary}",
          "layoutAlign": "STRETCH",
          "exposeAs": "headline"
        },
        {
          "kind": "text",
          "id": "description",
          "content": "섹션 설명 텍스트",
          "textStyle": "{semantic.typography.body}",
          "color": "{semantic.color.text.secondary}",
          "layoutAlign": "STRETCH",
          "exposeAs": "description"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "headline",
          "values": [
            "with",
            "without"
          ]
        },
        {
          "name": "description",
          "values": [
            "with",
            "without"
          ]
        }
      ],
      "overrides": {
        "headline=with,description=with": {},
        "headline=with,description=without": {
          "children[description].visible": false
        },
        "headline=without,description=with": {
          "children[headline].visible": false
        },
        "headline=without,description=without": {
          "children[headline].visible": false,
          "children[description].visible": false
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/card",
    "category": "mol",
    "description": "범용 카드 컨테이너 — 외피 (radius/shadow/surface) + mol/section-header. headline/description 으로 텍스트 주입.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{component.card.default.padding}",
        "paddingBottom": "{component.card.default.padding}",
        "paddingLeft": "{component.card.default.padding}",
        "paddingRight": "{component.card.default.padding}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{component.card.default.shadow}"
      },
      "children": [
        {
          "kind": "ref",
          "id": "header",
          "component": "mol/section-header",
          "props": {
            "headline": "카드 제목",
            "description": "카드 본문 내용"
          },
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/card-header",
    "category": "mol",
    "description": "카드 상단 헤더 — 작은 label(hug) + 큰 타이틀(fill, 2줄 가능).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "width": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "T멤버십 포인트",
          "textStyle": "{semantic.typography.card-header-label}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "label"
        },
        {
          "kind": "text",
          "id": "title",
          "content": "보유 포인트로 이번 달\n요금 줄일 수 있어요",
          "textStyle": "{semantic.typography.card-title}",
          "color": "{semantic.color.text.strong}",
          "exposeAs": "title",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/logo-grid",
    "category": "mol",
    "description": "브랜드 아이콘 2x2 그리드. 각 slot 32x32 회색 placeholder — 실제 로고 이미지로 fill 교체.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "width": "HUG",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "row1",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "slot-1",
              "layout": {
                "mode": "NONE",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": 32,
                "height": 32
              },
              "visual": {
                "cornerRadius": "{foundation.dimension.radius.sm}",
                "fill": "{semantic.color.skeleton.base}",
                "stroke": null,
                "shadow": null
              }
            },
            {
              "kind": "group",
              "id": "slot-2",
              "layout": {
                "mode": "NONE",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": 32,
                "height": 32
              },
              "visual": {
                "cornerRadius": "{foundation.dimension.radius.sm}",
                "fill": "{semantic.color.skeleton.base}",
                "stroke": null,
                "shadow": null
              }
            }
          ]
        },
        {
          "kind": "group",
          "id": "row2",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "slot-3",
              "layout": {
                "mode": "NONE",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": 32,
                "height": 32
              },
              "visual": {
                "cornerRadius": "{foundation.dimension.radius.sm}",
                "fill": "{semantic.color.skeleton.base}",
                "stroke": null,
                "shadow": null
              }
            },
            {
              "kind": "group",
              "id": "slot-4",
              "layout": {
                "mode": "NONE",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": 32,
                "height": 32
              },
              "visual": {
                "cornerRadius": "{foundation.dimension.radius.sm}",
                "fill": "{semantic.color.skeleton.base}",
                "stroke": null,
                "shadow": null
              }
            }
          ]
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/card-info-split",
    "category": "mol",
    "description": "카드 content — 왼쪽 card-header(grow) + 오른쪽 brand-grid. HORIZONTAL split. card-info-stack 의 horizontal 버전.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": 327,
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "header",
          "component": "mol/card-header",
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "brand-grid",
          "component": "mol/logo-grid"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/card-info-stack",
    "category": "mol",
    "description": "카드 상단 정보 덩어리 — card-header + ai-insight (with-value 톤, 잔액·포인트 등) 세로 묶음. 카드 안에서 STRETCH 로 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.lg}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "header",
          "component": "mol/card-header",
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "balance",
          "component": "mol/ai-insight",
          "variant": {
            "type": "with-value"
          },
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/checkbox-item",
    "category": "mol",
    "description": "범용 입력 list row — input(checkbox/radio/none) + tone(필수/선택/none) prefix + 라벨 + 자세히 보기 액션. 약관 동의 / 라디오 선택지 / 일반 체크 / 안내 항목 공유. variants axes 3종 (18 조합) — input(체크박스/라디오/미노출), tone(필수/선택/미노출), action(with/without). state(off/on) 은 atom/checkbox 또는 atom/radio 의 nested instance property 로 instance 시점 토글. props 로 label·action 텍스트 제어. 약관 도메인의 list-item-terms 시리즈 흡수 (2026-04-30).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.sm}",
        "paddingBottom": "{foundation.dimension.spacing.sm}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "input",
          "component": "atom/checkbox",
          "variant": {
            "state": "default"
          }
        },
        {
          "kind": "text",
          "id": "prefix",
          "content": "(필수)",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.secondary}"
        },
        {
          "kind": "text",
          "id": "label",
          "content": "약관 제목",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "layoutGrow": 1,
          "exposeAs": "label"
        },
        {
          "kind": "text",
          "id": "action",
          "content": "자세히",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "action"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "input",
          "values": [
            "checkbox",
            "radio",
            "none"
          ]
        },
        {
          "name": "tone",
          "values": [
            "required",
            "optional",
            "none"
          ]
        },
        {
          "name": "action",
          "values": [
            "with",
            "without"
          ]
        }
      ],
      "overrides": {
        "input=checkbox": {
          "children[input].component": "atom/checkbox"
        },
        "input=radio": {
          "children[input].component": "atom/radio"
        },
        "input=none": {
          "children[input].visible": false
        },
        "tone=required": {
          "children[prefix].content": "(필수)"
        },
        "tone=optional": {
          "children[prefix].content": "(선택)"
        },
        "tone=none": {
          "children[prefix].visible": false
        },
        "action=without": {
          "children[action].visible": false
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/cta-pair",
    "category": "mol",
    "description": "취소·확인 CTA 페어 — atom/btn × 2 (secondary + primary) 50/50 분할. dialog / bottomsheet 의 하단 액션 영역 공유.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "btn-cancel",
          "component": "atom/btn",
          "variant": {
            "type": "secondary",
            "state": "default"
          },
          "props": {
            "label": "취소"
          },
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "btn-confirm",
          "component": "atom/btn",
          "variant": {
            "type": "primary",
            "state": "default"
          },
          "props": {
            "label": "확인"
          },
          "layoutGrow": 1
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/document-item",
    "category": "mol",
    "description": "요금안내서 청구월 row — 청구월 (상) + 발송 상태·발송일 (하, sub) + trailing 재발행 btn-inline. bill-document 화면의 월별 list 에 사용. 발송 실패 시 sub 색상이 warning 톤으로 override 가능 (variant overrides 또는 props).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "text-stack",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "height": "HUG",
            "width": "FILL"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "title",
              "content": "11월 청구월",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "title"
            },
            {
              "kind": "text",
              "id": "sub",
              "content": "이메일 발송 완료 · 11/01",
              "textStyle": "{semantic.typography.sub-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "sub"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "action",
          "component": "atom/btn-inline",
          "props": {
            "label": "재발행"
          }
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/form-row",
    "category": "mol",
    "description": "라벨 + atom/text-input + 보조 텍스트 (helper / error) 결합. 회원정보 입력 폼의 row 단위. helper 가 없는 row 는 variant: helper=without 명시 (helper 자식 visible:false → layout collapse).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "라벨",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.text.secondary}",
          "exposeAs": "label"
        },
        {
          "kind": "ref",
          "id": "input",
          "component": "atom/text-input",
          "variant": {
            "state": "default"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "text",
          "id": "helper",
          "content": "도움말 또는 오류 메시지",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "helper"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "helper",
          "values": [
            "with",
            "without"
          ]
        },
        {
          "name": "tone",
          "values": [
            "default",
            "error"
          ]
        }
      ],
      "overrides": {
        "helper=with": {},
        "helper=without": {
          "children[helper].visible": false
        },
        "tone=default": {
          "children[helper].color": "{semantic.color.text.muted}"
        },
        "tone=error": {
          "children[helper].color": "{semantic.color.feedback.error}"
        }
      }
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/info-row",
    "category": "mol",
    "description": "정보 행 — 라벨(좌, muted) + 값(우, primary). label hug, value layoutGrow=1 우측 텍스트 우측 정렬. 결과 화면 메타데이터 / 이력 정보 표시 용.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.sm}",
        "paddingBottom": "{foundation.dimension.spacing.sm}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "라벨",
          "textStyle": "{semantic.typography.body}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "label"
        },
        {
          "kind": "text",
          "id": "value",
          "content": "값",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "value"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.card-inner-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/info-stack",
    "category": "mol",
    "description": "줄글 N개 stack. 안내 메타데이터 (제한 사유 / 해제 예상 / 문의처 등) 표시용. 3 line 고정 — 부족한 line 은 props 빈 문자열로 hide. 모두 sub-label / text.secondary 톤. itemSpacing xs (4).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "row-1",
          "content": "제한 사유: -",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.text.secondary}",
          "layoutAlign": "STRETCH",
          "exposeAs": "row-1"
        },
        {
          "kind": "text",
          "id": "row-2",
          "content": "해제 예상: -",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.text.secondary}",
          "layoutAlign": "STRETCH",
          "exposeAs": "row-2"
        },
        {
          "kind": "text",
          "id": "row-3",
          "content": "문의: 고객센터 1644-0009",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.text.secondary}",
          "layoutAlign": "STRETCH",
          "exposeAs": "row-3"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/line-item",
    "category": "mol",
    "description": "회선 정보 행 — 좌측 stack (회선 번호 + 관계/메타) + 우측 금액 또는 배지. 가족 회선 / 위임 회선 / 휴대폰 결제 이용내역 등 BIL 도메인 다수 화면에서 재사용. 우측은 amount 또는 status 배지 (variant). variant axes: trailing(amount/status).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "text-stack",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "title",
              "content": "010-1234-5678",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "title"
            },
            {
              "kind": "text",
              "id": "sub",
              "content": "자녀",
              "textStyle": "{semantic.typography.sub-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "sub"
            }
          ]
        },
        {
          "kind": "text",
          "id": "trailing",
          "content": "78,300원",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "trailing"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/list-item",
    "category": "mol",
    "description": "범용 리스트 아이템 — thumb (variant square/portrait) + title/sub 텍스트 블록(layoutGrow=1) + action 버튼. 쿠폰/영화/일반 리스트 공유. props 로 title·sub·action.label 주입. mol/list-item-coupon · list-item-movie · list-item-title-sub-default 흡수 (2026-04-30).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "thumb",
          "component": "atom/thumb",
          "variant": {
            "size": "sm"
          }
        },
        {
          "kind": "group",
          "id": "text",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "title",
              "content": "제목",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "title",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "text",
              "id": "sub",
              "content": "부가 설명",
              "textStyle": "{semantic.typography.card-label}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "sub",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "action",
          "component": "atom/btn",
          "variant": {
            "type": "secondary",
            "state": "default"
          },
          "props": {
            "label": "상세"
          }
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "thumb",
          "values": [
            "square",
            "portrait"
          ]
        }
      ],
      "overrides": {
        "thumb=square": {
          "children[thumb].component": "atom/thumb",
          "children[thumb].variant": {
            "size": "sm"
          }
        },
        "thumb=portrait": {
          "children[thumb].component": "atom/thumb-portrait",
          "children[thumb].variant": {
            "size": "sm"
          }
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/notice-block",
    "category": "mol",
    "description": "정적 고지 항목 1개 — 제목(title) + 본문(body) 줄글. 외피 없음 (사용처 ogn/카드 외피가 감쌈). variants 축 `size`: lg=card-title 20 (큰 카테고리 헤딩) / sm=body-bold 15 (작은 헤딩, notice-card 안 nested 용). ogn 차원에서 N 개 vertical stack 또는 mol/notice-card 안 단독.",
    "_comment": "고지·안내 정적 표시 패턴 — 인터랙션 없이 항상 노출되어야 하는 고지 (탈퇴 영향, 약관 변경 등) 에 사용. accordion 대체.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "title",
          "content": "카테고리 제목",
          "textStyle": "{semantic.typography.card-title}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "title",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT"
        },
        {
          "kind": "text",
          "id": "body",
          "content": "본문 안내 줄글이 여기에 표시됩니다. 사용자가 인지해야 할 정적 고지 내용.",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.secondary}",
          "exposeAs": "body",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "size",
          "values": [
            "lg",
            "sm"
          ]
        }
      ],
      "overrides": {
        "size=sm": {
          "children[title].textStyle": "{semantic.typography.body-bold}",
          "children[title].color": "{semantic.color.text.muted}",
          "children[body].color": "{semantic.color.text.muted}"
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/notice-card",
    "category": "mol",
    "description": "안내 문구 박스. 4 타입 — message (회색 외피 + 메시지 한 줄) / title-body (회색 외피 + mol/notice-block size=sm) / plain (gray stroke 외피 + 그레이 메시지, outline 톤) / emphasis (info-bg 외피 + 브랜드 컬러 메시지, info card 톤). 휴면/탈퇴 후 안내, 정보 박스, 본문 강조 안내 등에 사용.\n\n⚠️ variant 별 valid props 키 (헷갈리기 쉬움 — 잘못된 키 박으면 visible:false 된 child 에 매칭되어 시각 안 나옴):\n  • type=message  → props.message (한 줄)\n  • type=title-body → props.title + props.body (mol/notice-block 의 nested exposeAs)\n  • type=plain    → props.message (stroke 외피, 텍스트 동일 키)\n  • type=emphasis → props.message",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{component.card.default.padding}",
        "paddingBottom": "{component.card.default.padding}",
        "paddingLeft": "{component.card.default.padding}",
        "paddingRight": "{component.card.default.padding}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "message",
          "content": "안내 문구가 여기에 표시됩니다.",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.secondary}",
          "exposeAs": "message",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT"
        },
        {
          "kind": "ref",
          "id": "block",
          "component": "mol/notice-block",
          "variant": {
            "size": "sm"
          },
          "layoutAlign": "STRETCH"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "type",
          "values": [
            "message",
            "title-body",
            "plain",
            "emphasis"
          ]
        }
      ],
      "overrides": {
        "type=message": {
          "children[block].visible": false
        },
        "type=title-body": {
          "children[message].visible": false
        },
        "type=plain": {
          "visual": {
            "fill": null,
            "stroke": {
              "color": "{semantic.color.border.default}",
              "weight": 1
            }
          },
          "children[block].visible": false
        },
        "type=emphasis": {
          "visual": {
            "fill": "{semantic.color.feedback.info-bg}"
          },
          "children[message].color": "{semantic.color.text.brand}",
          "children[block].visible": false
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/payment-history-item",
    "category": "mol",
    "description": "납부 이력 행 — 좌측 stack (일시 + 수단 마스킹) + 우측 stack (금액 + 상태 배지). payment-history list 에 사용. 행 tap → 증빙 발급 BS 진입. 상태 배지: atom/tag (success/warning/info — 완료/대기/실패).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "left",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "datetime",
              "content": "2026.11.15 14:35",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "datetime"
            },
            {
              "kind": "text",
              "id": "method",
              "content": "카드 ****-7890",
              "textStyle": "{semantic.typography.sub-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "method"
            }
          ]
        },
        {
          "kind": "group",
          "id": "right",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MAX",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "amount",
              "content": "78,300원",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "amount"
            },
            {
              "kind": "ref",
              "id": "status",
              "component": "atom/tag",
              "variant": {
                "type": "default"
              },
              "props": {
                "label": "완료"
              }
            }
          ]
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/payment-method-item",
    "category": "mol",
    "description": "납부수단 row — leading icon (카드/계좌/가상계좌/자동납부 아이콘) + label + 마스킹 정보 (sub) + trailing radio. payment-method-select 의 수단 list 에 사용. auth-method-item 패턴 + 라디오 + sub 라인. 다른 도메인 (예: 환불 수단 선택) 도 재사용 가능 — generic mol.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/card",
          "exposeAs": "icon"
        },
        {
          "kind": "group",
          "id": "text-stack",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "height": "HUG",
            "width": "FILL"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "label",
              "content": "신용카드",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "label"
            },
            {
              "kind": "text",
              "id": "sub",
              "content": "1234-****-****-7890",
              "textStyle": "{semantic.typography.sub-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "sub"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "radio",
          "component": "atom/radio"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/payment-target-item",
    "category": "mol",
    "description": "납부 대상 선택 row — leading checkbox + label stack (제목 + 부가 메타) + trailing 금액. payment-target-select 의 회선/항목/미납 list 에 사용. checkbox state 는 atom/checkbox 의 nested property 로 toggle.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "checkbox",
          "component": "atom/checkbox",
          "variant": {
            "state": "default"
          }
        },
        {
          "kind": "group",
          "id": "text-stack",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "label",
              "content": "당월 청구액",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "label"
            },
            {
              "kind": "text",
              "id": "sub",
              "content": "11/25 납부 기한",
              "textStyle": "{semantic.typography.sub-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "sub"
            }
          ]
        },
        {
          "kind": "text",
          "id": "amount",
          "content": "78,300원",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "amount"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/post-action-card",
    "category": "mol",
    "description": "후속 액션 카드 — 좌측 sparkle icon + headline/description text-stack (inline) + 우측 chevron-right. signup/dormant/rejoin -complete 의 후속 액션 가이드. text-stack 을 inline 으로 직접 풀음 — mol/section-header ref 시 instance baseline width(327) 가 카드 inner(263) 보다 커서 figma 가 layoutGrow 무시하는 한계 회피.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{component.card.default.padding}",
        "paddingBottom": "{component.card.default.padding}",
        "paddingLeft": "{component.card.default.padding}",
        "paddingRight": "{component.card.default.padding}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{component.card.default.shadow}"
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/sparkle",
          "exposeAs": "icon"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "headline",
              "content": "후속 액션 헤딩",
              "textStyle": "{component.card.default.main-titleStyle}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "headline",
              "layoutAlign": "STRETCH",
              "autoResize": "HEIGHT"
            },
            {
              "kind": "text",
              "id": "description",
              "content": "후속 액션 본문 안내.",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "description",
              "layoutAlign": "STRETCH",
              "autoResize": "HEIGHT"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "chevron",
          "component": "atom/icon/chevron-right"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/timer-banner",
    "category": "mol",
    "description": "카운트다운 타이머 banner — leading icon (timer) + label stack (제목 + 카운트다운 시간). 가상계좌 입금 기한 / 예약 만료 임박 / 본인인증 유효시간 등 일정 만료 안내에 사용. 시각 톤: warning bg + warning text.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.md}",
        "paddingRight": "{foundation.dimension.spacing.md}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.md}",
        "fill": "{semantic.color.feedback.warning-bg}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/timer"
        },
        {
          "kind": "group",
          "id": "text-stack",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "title",
              "content": "입금 기한",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.feedback.warning}",
              "exposeAs": "title"
            },
            {
              "kind": "text",
              "id": "countdown",
              "content": "11/16 23:59 까지 (23시간 45분 남음)",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "countdown"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.card-inner-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/total-amount",
    "category": "mol",
    "description": "합계 금액 강조 — 라벨(상, sub) + 큰 금액(하, number-emphasis). bill-summary 의 당월 청구액 / payment-target 의 sticky 합계 / payment-confirm 의 결제 금액 등에서 사용. 큰 시각 강조용 stack 형태.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.xs}",
        "width": "HUG",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "11월 청구 요금",
          "textStyle": "{semantic.typography.card-label}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "label"
        },
        {
          "kind": "text",
          "id": "amount",
          "content": "78,300원",
          "textStyle": "{semantic.typography.number-emphasis}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "amount"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "mol/variation-row",
    "category": "mol",
    "description": "변동 사유 row — 사유명(좌, body) + 우측 그룹 (방향 icon arrow-up/down + 금액). bill-detail 의 변동 사유 list 에 사용. 증가시 arrow-up + error tone, 감소시 arrow-down + success tone. variant axes: direction(up/down).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.sm}",
        "paddingBottom": "{foundation.dimension.spacing.sm}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "요금제 변경 (10/15)",
          "textStyle": "{semantic.typography.body}",
          "color": "{semantic.color.text.primary}",
          "layoutGrow": 1,
          "exposeAs": "label"
        },
        {
          "kind": "group",
          "id": "amount-group",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "arrow",
              "component": "atom/icon/arrow-up"
            },
            {
              "kind": "text",
              "id": "amount",
              "content": "+5,000원",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.feedback.error}",
              "exposeAs": "amount"
            }
          ]
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "direction",
          "values": [
            "up",
            "down"
          ]
        }
      ],
      "overrides": {
        "direction=up": {
          "children[amount-group].children[arrow].component": "atom/icon/arrow-up",
          "children[amount-group].children[amount].color": "{semantic.color.feedback.error}"
        },
        "direction=down": {
          "children[amount-group].children[arrow].component": "atom/icon/arrow-down",
          "children[amount-group].children[amount].color": "{semantic.color.feedback.success}"
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.card-inner-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/bill-detail-list",
    "category": "ogn",
    "description": "청구 항목 리스트 외피 — 외피 + content (section-header + 항목 row 영역 placeholder + atom/divider + 합계 row). 항목 row 들 (mol/amount-row × N, mol/discount-row × M) 는 page 에서 직접 N ref (props 충돌 방지 — 같은 'label' 키 다중 자식 시 첫 매칭 만 적용 함정).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "청구 항목"
              }
            },
            {
              "kind": "ref",
              "id": "sample-row",
              "component": "mol/amount-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "기본료",
                "amount": "55,000원"
              }
            },
            {
              "kind": "ref",
              "id": "divider",
              "component": "atom/divider",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "total",
              "component": "mol/amount-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "합계",
                "amount": "78,300원"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/bill-document-list",
    "category": "ogn",
    "description": "요금안내서 청구월 리스트 외피 — section-header + document-item 영역 placeholder. 실제 청구월 row 들 (mol/document-item × N) 은 page 에서 직접 N ref. bill-document 화면에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "요금안내서 (월별)"
              }
            },
            {
              "kind": "ref",
              "id": "sample-row",
              "component": "mol/document-item",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "11월 청구월",
                "sub": "이메일 발송 완료 · 11/01"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/bill-summary-card",
    "category": "ogn",
    "description": "BIL 청구 요약 카드 — 홈/메인 핵심 카드. 외피 + content 안에 mol/total-amount (큰 금액) + mol/info-row (납부 기한 / 자동납부 예정) + (조건부) mol/notice-card (미납 강조). page/BIL/bill-summary 의 메인 영역. 미납 시 카드 톤 변경은 page-level variant.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.xl}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "11월 청구 요금",
                "amount": "78,300원"
              }
            },
            {
              "kind": "ref",
              "id": "due",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "납부 기한",
                "value": "11/25"
              }
            },
            {
              "kind": "ref",
              "id": "autopay",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "자동납부 예정",
                "value": "카드 ****-7890"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/bill-variation-list",
    "category": "ogn",
    "description": "청구 변동 사유 리스트 외피 — section-header + 변동 row 영역 placeholder. 실제 변동 row 들 (mol/variation-row × N) 은 page 에서 직접 N ref. bill-detail 의 변동 사유 탭에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "전월 대비 변동 사유"
              }
            },
            {
              "kind": "ref",
              "id": "sample-row",
              "component": "mol/variation-row",
              "layoutAlign": "STRETCH",
              "variant": {
                "direction": "up"
              },
              "props": {
                "label": "요금제 변경 (10/15)",
                "amount": "+5,000원"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/cancel-warning-sheet",
    "category": "ogn",
    "description": "납부방법 해지 BS 외피 — mol/notice-card (warning: 미납 위험) + mol/checkbox-item (해지 동의). PG-BIL-SET-001 미납 위험 강조. page/BIL/setting-method-cancel 에 사용 (실제는 BottomSheet).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "warning",
              "component": "mol/notice-card",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "11/25 자동 출금 예정",
                "body": "해지 시 별도 납부가 필요해요"
              },
              "_comment": "[고지·필수] PG-BIL-SET-001 — 미납 위험"
            },
            {
              "kind": "ref",
              "id": "terms",
              "component": "mol/checkbox-item",
              "layoutAlign": "STRETCH",
              "variant": {
                "input": "checkbox",
                "tone": "필수",
                "action": "without"
              },
              "props": {
                "label": "위 안내를 확인했고 해지에 동의합니다"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/delegate-record-card",
    "category": "ogn",
    "description": "대리 납부 분리 기록 카드 — section-header + mol/info-row × 4 (대상 회선 / 청구 명의 / 납부 실행자 / 수단 명의). PG-BIL-AGT-001 분리 기록 강제. page/BIL/payment-delegate 에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.2xl}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "분리 기록"
              },
              "_comment": "[고지·필수] PG-BIL-AGT-001 — 대리 납부 결과 분리 저장 (§ 1.8 #4)"
            },
            {
              "kind": "ref",
              "id": "row-target",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "대상 회선",
                "value": "010-1234-5678"
              }
            },
            {
              "kind": "ref",
              "id": "row-owner",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "청구 명의",
                "value": "자녀"
              }
            },
            {
              "kind": "ref",
              "id": "row-payer",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "납부 실행자",
                "value": "본인"
              }
            },
            {
              "kind": "ref",
              "id": "row-method",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "수단 명의",
                "value": "본인"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/delegate-target-list",
    "category": "ogn",
    "description": "대리 납부 대상 회선 리스트 외피 — 안내 카드 + section-header + line-item × N (page 에서 직접 N ref). PG-BIL-AGT-001 — 대리 납부 안내 + 분리 기록. page/BIL/payment-delegate-auth 에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "info",
              "component": "mol/notice-card",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "대리 납부 안내",
                "body": "가족 회선의 요금을 대신 납부하실 수 있어요. 납부 결과는 별도 기록됩니다."
              },
              "_comment": "[고지·필수] PG-BIL-AGT-001 — 대리 납부 안내 (§ 1.8 #4)"
            },
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "관리 가능한 회선"
              }
            },
            {
              "kind": "ref",
              "id": "sample-line",
              "component": "mol/line-item",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "010-1234-5678",
                "sub": "자녀",
                "trailing": "78,300원"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/limit-status-card",
    "category": "ogn",
    "description": "한도 현황 카드 — 외피 + content. 현재 한도 (total-amount) + 사용/잔여 info-row × 2 + 진행 표시 (text or atom/skeleton 추후). page/BIL/setting-mobile-limit + setting-content-limit 양쪽 재사용. PG-BIL-MOB-001.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "현재 한도",
                "amount": "500,000원 / 월"
              }
            },
            {
              "kind": "ref",
              "id": "used",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "사용",
                "value": "120,000원"
              }
            },
            {
              "kind": "ref",
              "id": "remain",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "잔여",
                "value": "380,000원"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/method-action-pair",
    "category": "ogn",
    "description": "납부방법 관리 inline 액션 — 변경 + 해지 버튼 2개. 외피 fill null + radius 0 (transparent wrapper). content HORIZONTAL + 양 버튼 layoutGrow 1. page/BIL/setting-payment-method 에 사용. cta-pair 가 단일 label expose 라 별도 ogn 으로 분리.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "btn-edit",
              "component": "atom/btn",
              "variant": {
                "type": "secondary",
                "state": "default"
              },
              "props": {
                "label": "변경"
              },
              "layoutGrow": 1
            },
            {
              "kind": "ref",
              "id": "btn-cancel",
              "component": "atom/btn",
              "variant": {
                "type": "secondary",
                "state": "default"
              },
              "props": {
                "label": "해지"
              },
              "layoutGrow": 1
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/payment-confirm-card",
    "category": "ogn",
    "description": "납부 최종 확인 카드 — 외피 + content. mol/total-amount (결제 금액) + mol/info-row (결제 수단 마스킹) + mol/checkbox-item (필수 약관). page/BIL/payment-confirm 의 본문.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.2xl}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "결제 금액",
                "amount": "78,300원"
              }
            },
            {
              "kind": "ref",
              "id": "method",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "결제 수단",
                "value": "카드 ****-7890"
              }
            },
            {
              "kind": "ref",
              "id": "terms",
              "component": "mol/checkbox-item",
              "layoutAlign": "STRETCH",
              "variant": {
                "input": "checkbox",
                "tone": "필수",
                "action": "without"
              },
              "props": {
                "label": "결제 약관에 동의합니다"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/payment-failure-card",
    "category": "ogn",
    "description": "납부 실패 사유 카드 — 외피 (warning bg) + content. 헤드라인 + 사유 + (조건부) 재시도 가능 안내. page/BIL/payment-failure 에 사용. PG-BIL-EXC-001 — 사유 분류 + 후속 안내. 톤: 경고·강.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.feedback.error-bg}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "headline",
              "layoutAlign": "STRETCH",
              "content": "납부에 실패했어요",
              "textStyle": "{semantic.typography.card-title}",
              "color": "{semantic.color.feedback.error}",
              "exposeAs": "headline"
            },
            {
              "kind": "text",
              "id": "reason",
              "content": "사유: 카드 한도 초과",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "reason"
            },
            {
              "kind": "text",
              "id": "guidance",
              "content": "재시도하거나 다른 수단을 선택하실 수 있습니다.",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "guidance"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/payment-history-list",
    "category": "ogn",
    "description": "납부 이력 list 외피 (transparent wrapper) — section-header + payment-history-item 영역 placeholder. 실제 이력 row 들 (mol/payment-history-item × N) 은 page 에서 직접 N ref. payment-history 화면에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "납부 이력"
              }
            },
            {
              "kind": "ref",
              "id": "sample-row",
              "component": "mol/payment-history-item",
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/payment-method-list",
    "category": "ogn",
    "description": "납부수단 카탈로그 — 외피 + content. section-header + payment-method-item 영역 placeholder + 새 카드 등록 진입 (atom/btn-inline) + atom/banner (info: 본인 명의 권장, PG-BIL-AUTH-001). 실제 수단 row 들 (mol/payment-method-item × N) 은 page 에서 직접 N ref.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "납부수단 선택"
              }
            },
            {
              "kind": "ref",
              "id": "sample-method",
              "component": "mol/payment-method-item",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "신용카드",
                "sub": "1234-****-****-7890"
              }
            },
            {
              "kind": "ref",
              "id": "register",
              "component": "atom/btn-inline",
              "props": {
                "label": "+ 새 카드 등록"
              }
            },
            {
              "kind": "ref",
              "id": "notice",
              "component": "atom/banner",
              "layoutAlign": "STRETCH",
              "props": {
                "message": "안전한 결제를 위해 본인 명의 카드·계좌 사용을 권장해요"
              },
              "_comment": "[고지·필수] PG-BIL-AUTH-001 — 본인 명의 권장 (§ 1.8 #2)"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/payment-result-card",
    "category": "ogn",
    "description": "납부 결과 카드 — 외피 + content. 상태 아이콘 + 헤드라인 + 금액 + 결과 메타 (일시/수단/잔액). variant axes: state(success/pending/failure). page/BIL/payment-immediate, payment-delegate-complete 에 사용. PG-BIL-STAT-001 (수납완료/대기/실패) + PG-BIL-EXC-001 (실패 사유).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "headline",
              "layoutAlign": "STRETCH",
              "content": "납부 완료",
              "textStyle": "{semantic.typography.card-title}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "headline"
            },
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "결제 금액",
                "amount": "78,300원"
              }
            },
            {
              "kind": "ref",
              "id": "datetime",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "결제 일시",
                "value": "2026.11.15 14:35"
              }
            },
            {
              "kind": "ref",
              "id": "method",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "결제 수단",
                "value": "카드 ****-7890"
              }
            }
          ]
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "state",
          "values": [
            "success",
            "pending",
            "failure"
          ]
        }
      ],
      "overrides": {
        "state=success": {
          "children[content].children[headline].content": "납부 완료",
          "children[content].children[headline].color": "{semantic.color.text.primary}"
        },
        "state=pending": {
          "children[content].children[headline].content": "납부 처리 중",
          "children[content].children[headline].color": "{semantic.color.feedback.warning}"
        },
        "state=failure": {
          "children[content].children[headline].content": "납부 실패",
          "children[content].children[headline].color": "{semantic.color.feedback.error}"
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/prepay-result-card",
    "category": "ogn",
    "description": "선결제 결과 카드 — 외피 + content. 헤드라인 + total-amount (선결제 금액) + 차감 안내 (notice-card). page/BIL/payment-prepay-complete 에 사용. PG-BIL-PAY-003 — 청구 차감 시점 명시.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "headline",
              "layoutAlign": "STRETCH",
              "content": "선결제 완료",
              "textStyle": "{semantic.typography.card-title}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "headline"
            },
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "선결제 금액",
                "amount": "21,400원"
              }
            },
            {
              "kind": "ref",
              "id": "deduct-notice",
              "component": "mol/notice-card",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "청구 차감 예정",
                "body": "11월 청구에서 21,400원 차감됩니다."
              },
              "_comment": "[고지·필수] PG-BIL-PAY-003 — 청구 차감 시점"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/prepay-target-list",
    "category": "ogn",
    "description": "선결제 대상 리스트 외피 — section-header + payment-target-item × N (page 에서 직접 N ref). 휴대폰결제·콘텐츠 항목 중 선결제 가능 + 한도 초과 disabled 처리. page/BIL/payment-prepay-target 에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "선결제 가능 항목"
              }
            },
            {
              "kind": "ref",
              "id": "sample-target",
              "component": "mol/payment-target-item",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "쿠팡",
                "sub": "11/14",
                "amount": "12,500원"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/refund-target-card",
    "category": "ogn",
    "description": "환불 대상 카드 — 외피 + content. 환불 대상 정보 (info-row) + 환불 가능 금액 강조 (total-amount) + 처리 기간 안내 (notice-card). page/BIL/payment-refund-request 에 사용. PG-BIL-EXC-001 — 환불 가능 금액 + 처리 기간.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "target",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "환불 대상",
                "value": "11/14 78,300원 (중복 납부)"
              }
            },
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "환불 가능 금액",
                "amount": "78,300원"
              },
              "_comment": "[고지·필수] PG-BIL-EXC-001 — 환불 가능 금액 (§ 1.8 #12)"
            },
            {
              "kind": "ref",
              "id": "period",
              "component": "mol/notice-card",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "처리 기간 안내",
                "body": "환불 완료까지 영업일 기준 3~5일이 걸릴 수 있어요."
              },
              "_comment": "[고지·필수] PG-BIL-EXC-001 — 처리 기간 (§ 1.8 #13)"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/reserve-form",
    "category": "ogn",
    "description": "예약·선납 입력 폼 — 외피 + content. section-header + 예약일 form-row + 금액 form-row + 수단 진입 form-row + 약관 안내. page/BIL/payment-reserve 에 사용. 실제 form-row 별 input 은 page 레벨에서 props 또는 mol/form-row 인스턴스화.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "예약·선납 신청"
              }
            },
            {
              "kind": "ref",
              "id": "date",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "예약일",
                "placeholder": "12월 25일"
              }
            },
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "금액",
                "placeholder": "78,300원"
              }
            },
            {
              "kind": "ref",
              "id": "method",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "수단",
                "placeholder": "카드 ****-7890"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/reserve-result-card",
    "category": "ogn",
    "description": "예약 접수 결과 카드 — 외피 + content. 헤드라인 + 예약일·금액·수단 info-row × 3 + 변경/취소 가능 시점 안내 (notice-card). page/BIL/payment-reserve 결과 단계.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "headline",
              "layoutAlign": "STRETCH",
              "content": "예약이 접수되었습니다",
              "textStyle": "{semantic.typography.card-title}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "headline"
            },
            {
              "kind": "ref",
              "id": "date",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "예약일",
                "value": "12월 25일"
              }
            },
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "금액",
                "value": "78,300원"
              }
            },
            {
              "kind": "ref",
              "id": "method",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "수단",
                "value": "카드 ****-7890"
              }
            },
            {
              "kind": "ref",
              "id": "change-notice",
              "component": "mol/notice-card",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "변경·취소 안내",
                "body": "예약 실행일 1일 전까지 변경·취소가 가능합니다."
              },
              "_comment": "[고지·필수] PG-BIL-PAY-003 — 변경/취소 가능 시점"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/setting-auto-prepay-form",
    "category": "ogn",
    "description": "자동 선결제 신청·변경 폼 — 외피 + content. section-header + 적용 대상 (form-row) + 실행 조건 (form-row) + 납부수단 (form-row) + 약관 동의 (mol/checkbox-item, 필수). page/BIL/setting-auto-prepay 에 사용. PG-BIL-AUTO-001 — 신청 가능 조건 + 약관 (§ 1.8 #5).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "자동 선결제 신청"
              }
            },
            {
              "kind": "ref",
              "id": "target",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "적용 대상",
                "placeholder": "휴대폰결제 + 콘텐츠 이용료"
              }
            },
            {
              "kind": "ref",
              "id": "condition",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "실행 조건",
                "placeholder": "한도 80% 도달 시"
              }
            },
            {
              "kind": "ref",
              "id": "method",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "납부수단",
                "placeholder": "카드 ****-7890"
              }
            },
            {
              "kind": "ref",
              "id": "terms",
              "component": "mol/checkbox-item",
              "layoutAlign": "STRETCH",
              "variant": {
                "input": "checkbox",
                "tone": "필수",
                "action": "with"
              },
              "props": {
                "label": "자동 선결제 약관에 동의합니다",
                "action": "전문보기"
              },
              "_comment": "[고지·필수] PG-BIL-AUTO-001 — 약관 필수 동의 (§ 1.8 #5)"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/setting-document-form",
    "category": "ogn",
    "description": "요금안내서 수신 설정 폼 — 외피 + content. section-header + 현재 수신처 info-row + 변경 form-row × 2 (방식/수신처) + 적용 시점 안내. page/BIL/setting-document 에 사용. PG-BIL-SET-001 — 다음 청구월부터 적용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "수신 설정"
              }
            },
            {
              "kind": "ref",
              "id": "current",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "현재 수신처",
                "value": "이메일 a***@b.com"
              },
              "_comment": "[고지·필수] PG-BIL-SEC-001 — 수신처 마스킹"
            },
            {
              "kind": "ref",
              "id": "method",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "수신 방식",
                "placeholder": "이메일"
              }
            },
            {
              "kind": "ref",
              "id": "recipient",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "수신처",
                "placeholder": "변경할 이메일을 입력해 주세요"
              }
            },
            {
              "kind": "ref",
              "id": "apply-notice",
              "component": "mol/notice-card",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "적용 시점",
                "body": "다음 청구월부터 적용됩니다."
              },
              "_comment": "[고지·필수] PG-BIL-SET-001 — 적용 시점"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/setting-limit-form",
    "category": "ogn",
    "description": "한도 변경 폼 — 외피 + content. section-header + 한도 form-row + 차단 신청 btn-inline + 인증 안내 banner. setting-mobile-limit + setting-content-limit 양 화면 재사용. PG-BIL-MOB-001 — 한도 변경 인증 (한도 상향).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "한도 변경"
              }
            },
            {
              "kind": "ref",
              "id": "input",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "변경 한도",
                "placeholder": "200,000원 / 월"
              }
            },
            {
              "kind": "ref",
              "id": "auth-notice",
              "component": "atom/banner",
              "layoutAlign": "STRETCH",
              "props": {
                "message": "한도 상향은 본인인증 후 적용돼요"
              },
              "_comment": "[고지·필수] PG-BIL-MOB-001 — 한도 변경 인증 (§ 1.8 #6)"
            },
            {
              "kind": "ref",
              "id": "block",
              "component": "atom/btn-inline",
              "props": {
                "label": "결제 차단 신청"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/setting-method-card",
    "category": "ogn",
    "description": "현재 납부방법 카드 (조회) — 외피 + content. section-header + 카드/계좌 (마스킹) + 납부일 + 다음 출금 정보. page/BIL/setting-payment-method 의 조회 영역에 사용. PG-BIL-SEC-001 — 카드/계좌 마스킹.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "자동납부"
              }
            },
            {
              "kind": "ref",
              "id": "card",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "결제 수단",
                "value": "카드 ****-****-7890"
              },
              "_comment": "[고지·필수] PG-BIL-SEC-001 — 카드 마스킹"
            },
            {
              "kind": "ref",
              "id": "day",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "납부일",
                "value": "매월 25일"
              }
            },
            {
              "kind": "ref",
              "id": "next",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "다음 출금",
                "value": "11/25"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/setting-method-form",
    "category": "ogn",
    "description": "납부방법 신청·변경 폼 — 외피 + content. section-header + 수단 라디오 영역 (mol/payment-method-item × N — page 에서 ref) + 새 수단 등록 + 납부일 form-row + 약관 안내. page/BIL/setting-payment-method-edit 에 사용. PG-BIL-AUTH-001 + PG-BIL-AGT-001 — 카드/계좌 인증·타인 명의 동의.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "납부방법 변경"
              }
            },
            {
              "kind": "ref",
              "id": "sample-method",
              "component": "mol/payment-method-item",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "신용카드",
                "sub": "1234-****-****-7890"
              }
            },
            {
              "kind": "ref",
              "id": "register",
              "component": "atom/btn-inline",
              "props": {
                "label": "+ 새 카드 등록"
              }
            },
            {
              "kind": "ref",
              "id": "day",
              "component": "mol/form-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "납부일",
                "placeholder": "매월 25일"
              }
            },
            {
              "kind": "ref",
              "id": "auth-notice",
              "component": "atom/banner",
              "layoutAlign": "STRETCH",
              "props": {
                "message": "본인 명의 권장 · 새 수단은 본인인증 후 적용"
              },
              "_comment": "[고지·필수] PG-BIL-AUTH-001 + PG-BIL-AGT-001"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/third-party-consent-sheet",
    "category": "ogn",
    "description": "타인 명의 동의 sheet 외피 — mol/notice-card (안내) + mol/info-row × 2 (명의자 / 카드) + mol/checkbox-item (결의 약관). PG-BIL-AGT-001 명의자 동의 (§ 1.8 #3). page/BIL/payment-third-party 에 사용 (실제는 BottomSheet 형태).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "info",
              "component": "mol/notice-card",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "명의자 동의가 필요해요",
                "body": "본인 명의가 아닌 카드는 명의자 동의가 필요합니다."
              },
              "_comment": "[고지·필수] PG-BIL-AGT-001 (§ 1.8 #3)"
            },
            {
              "kind": "ref",
              "id": "name-row",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "명의자",
                "value": "***홍 (010-***-5678)"
              }
            },
            {
              "kind": "ref",
              "id": "card-row",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "카드",
                "value": "****-****-7890"
              }
            },
            {
              "kind": "ref",
              "id": "terms",
              "component": "mol/checkbox-item",
              "layoutAlign": "STRETCH",
              "variant": {
                "input": "checkbox",
                "tone": "필수",
                "action": "without"
              },
              "props": {
                "label": "본 정보를 정확히 알고 동의 요청합니다"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/usage-forecast-card",
    "category": "ogn",
    "description": "예상 청구 카드 — 외피 + content. mol/total-amount (예상 청구) + 변동 사유 메모 (text or notice-block) + mol/notice-block (미확정 안내, info 톤). page/BIL/usage-realtime 탭2 에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "예상 청구 금액",
                "amount": "약 81,500원"
              }
            },
            {
              "kind": "ref",
              "id": "uncertainty",
              "component": "mol/notice-block",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "사용량은 실시간 갱신됩니다",
                "body": "청구 확정 시점에 변동될 수 있어요. (PG-BIL-RT-001)"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/usage-line-list",
    "category": "ogn",
    "description": "휴대폰결제·콘텐츠 이용내역 리스트 외피 — section-header + line-item 영역 placeholder. 실제 내역 row 들 (mol/line-item × N) 은 page 에서 직접 N ref. usage-line 화면에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "layoutAlign": "STRETCH",
              "props": {
                "headline": "이용 내역"
              }
            },
            {
              "kind": "ref",
              "id": "sample-row",
              "component": "mol/line-item",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "쿠팡",
                "sub": "11/14 · 청구 반영",
                "trailing": "12,500원"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/BIL/usage-realtime-card",
    "category": "ogn",
    "description": "실시간 이용요금 카드 — 외피 + content. mol/total-amount (현재까지 사용) + mol/amount-row (잔여) + 갱신 시각 (sub-label). page/BIL/usage-realtime 탭1 에 사용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.2xl}",
            "paddingLeft": "{foundation.dimension.spacing.2xl}",
            "paddingRight": "{foundation.dimension.spacing.2xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "amount",
              "component": "mol/total-amount",
              "props": {
                "label": "현재까지 사용",
                "amount": "42,300원"
              }
            },
            {
              "kind": "ref",
              "id": "remain",
              "component": "mol/info-row",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "잔여 이용요금",
                "value": "3,200원"
              }
            },
            {
              "kind": "text",
              "id": "updated",
              "content": "마지막 갱신: 11/15 14:30",
              "textStyle": "{semantic.typography.sub-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "updated"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/bottomsheet",
    "category": "ogn",
    "description": "범용 약관 동의 BottomSheet — all-agree-row + checkbox-item × 3 + CTA. term-section 의 모달 버전. 휴면 해제·재가입·약관 갱신 등 동의 수집 플로우에서 공유.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.checkbox-list.default.paddingY}",
            "paddingBottom": "{component.checkbox-list.default.paddingY}",
            "paddingLeft": "{component.checkbox-list.default.paddingX}",
            "paddingRight": "{component.checkbox-list.default.paddingX}",
            "itemSpacing": "{component.checkbox-list.default.itemSpacing}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "title",
              "content": "약관에 동의해 주세요",
              "textStyle": "{component.header.default.titleStyle}",
              "color": "{component.header.default.titleColor}",
              "exposeAs": "title"
            },
            {
              "kind": "ref",
              "id": "all-agree",
              "component": "mol/all-agree-row",
              "props": {
                "label": "전체 동의"
              }
            },
            {
              "kind": "ref",
              "id": "term-1",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "checkbox",
                "tone": "required"
              },
              "props": {
                "label": "이용약관 동의"
              }
            },
            {
              "kind": "ref",
              "id": "term-2",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "checkbox",
                "tone": "required"
              },
              "props": {
                "label": "개인정보 수집·이용 동의"
              }
            },
            {
              "kind": "ref",
              "id": "term-3",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "checkbox",
                "tone": "optional"
              },
              "props": {
                "label": "마케팅 정보 수신 동의"
              }
            },
            {
              "kind": "ref",
              "id": "btn-agree",
              "component": "atom/btn",
              "variant": {
                "type": "primary"
              },
              "props": {
                "label": "동의하고 계속"
              },
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/footer-cs",
    "category": "ogn",
    "description": "고객센터 footer — 전기통신사업법 § 22-2 의무 표시. 모든 에러·완료·제한 화면 하단에 sticky 고정. 좌측 고객센터 번호 + 우측 1:1 문의 link.",
    "_comment": "[고지·필수] 전기통신사업법 § 22-2 의무 표시 — POLICY_REPORT § 1.8",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{semantic.layout.screen-padding-default}",
        "paddingRight": "{semantic.layout.screen-padding-default}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "cs-number",
          "content": "고객센터 1644-0009",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.text.secondary}",
          "exposeAs": "csNumber",
          "_comment": "[고지·필수] 전기통신사업법 § 22-2 — 분쟁 발생 시 연락처 표시 의무"
        },
        {
          "kind": "ref",
          "id": "inquiry-btn",
          "component": "atom/btn-inline",
          "props": {
            "label": "1:1 문의"
          },
          "_comment": "[고지·필수] 1:1 문의 채널 — 전기통신사업법 § 22-2 의무"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/gnb",
    "category": "ogn",
    "description": "Global Navigation Bar — T 로고 (좌) / QR·쇼핑백·햄버거 (우).",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.xl}",
        "paddingRight": "{foundation.dimension.spacing.xl}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": 56
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "logo",
          "component": "atom/logo/T"
        },
        {
          "kind": "group",
          "id": "actions",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "qr",
              "component": "atom/icon/qr-scan"
            },
            {
              "kind": "ref",
              "id": "bag",
              "component": "atom/icon/bag"
            },
            {
              "kind": "ref",
              "id": "menu",
              "component": "atom/icon/menu"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/header",
    "category": "ogn",
    "description": "공통 화면 헤더 — 좌측 back + 좌측 title (옵션) + 우측 actions (옵션). compact 56 높이. chrome ogn (flat 구조 — 외피 wrapper 예외).\n\nVariants — title (with/without) × actions (none / share-cart). 기본 = title=with, actions=none → 일반 sub-page 헤더 (현 ogn/header 동작 호환). 상품상세 같이 우측 액션 노출 시 actions=share-cart.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.xs}",
        "paddingRight": "{foundation.dimension.spacing.xs}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "width": "FILL",
        "height": "{foundation.dimension.size.header-compact}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{component.header.default.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "btn-back",
          "component": "atom/btn-icon",
          "variant": {
            "state": "default"
          },
          "props": {
            "icon": "atom/icon/chevron-left"
          }
        },
        {
          "kind": "text",
          "id": "title",
          "content": "타이틀",
          "textStyle": "{component.header.default.titleStyle}",
          "color": "{component.header.default.titleColor}",
          "exposeAs": "title",
          "layoutGrow": 1
        },
        {
          "kind": "group",
          "id": "right-actions",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "btn-share",
              "component": "atom/btn-icon",
              "variant": {
                "state": "default"
              },
              "props": {
                "icon": "atom/icon/share"
              }
            },
            {
              "kind": "ref",
              "id": "btn-cart",
              "component": "atom/btn-icon",
              "variant": {
                "state": "default"
              },
              "props": {
                "icon": "atom/icon/bag"
              }
            }
          ]
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "title",
          "values": [
            "with",
            "without"
          ]
        },
        {
          "name": "actions",
          "values": [
            "none",
            "share-cart"
          ]
        }
      ],
      "overrides": {
        "title=with,actions=none": {
          "children[right-actions].visible": false
        },
        "title=with,actions=share-cart": {},
        "title=without,actions=none": {
          "children[title].visible": false,
          "children[right-actions].visible": false
        },
        "title=without,actions=share-cart": {
          "children[title].visible": false
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/auth-code-input",
    "category": "ogn",
    "description": "인증번호 입력 영역 — mol/form-row (인증번호 input) + 하단 timer 텍스트 + 재요청 btn (inline). 4 *-auth 화면의 수단 선택 후 단계 공유. POL-AUTH-003 (자리수·유효시간) + POL-AUTH-004 (재요청).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "code-row",
              "component": "mol/form-row",
              "variant": {
                "helper": "with",
                "tone": "default"
              },
              "props": {
                "label": "인증번호",
                "helper": "6자리 입력"
              }
            },
            {
              "kind": "group",
              "id": "footer",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.sm}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "text",
                  "id": "timer",
                  "content": "남은 시간 03:00",
                  "textStyle": "{semantic.typography.sub-label}",
                  "color": "{semantic.color.text.brand}",
                  "exposeAs": "timer"
                },
                {
                  "kind": "ref",
                  "id": "btn-resend",
                  "component": "atom/btn-inline",
                  "props": {
                    "label": "재요청"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/auth-method-list",
    "category": "ogn",
    "description": "본인인증 수단 list — mol/auth-method-item × 4 (휴대폰 본인인증 / PASS / 공동인증서 / 아이핀). 4 *-auth 화면 공유 (signup / dormant / leave / rejoin). 각 row 별 leading icon + label + chevron — 사용자 결정에 따라 mol/list-item 흡수 X (구조 다름).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "method-1",
              "component": "mol/auth-method-item",
              "props": {
                "label": "휴대폰 본인인증"
              }
            },
            {
              "kind": "ref",
              "id": "divider-1",
              "component": "atom/divider"
            },
            {
              "kind": "ref",
              "id": "method-2",
              "component": "mol/auth-method-item",
              "props": {
                "label": "PASS 인증"
              }
            },
            {
              "kind": "ref",
              "id": "divider-2",
              "component": "atom/divider"
            },
            {
              "kind": "ref",
              "id": "method-3",
              "component": "mol/auth-method-item",
              "props": {
                "label": "공동인증서"
              }
            },
            {
              "kind": "ref",
              "id": "divider-3",
              "component": "atom/divider"
            },
            {
              "kind": "ref",
              "id": "method-4",
              "component": "mol/auth-method-item",
              "props": {
                "label": "아이핀"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/auth-widget",
    "category": "ogn",
    "description": "본인인증 위젯 placeholder. 자체 UI 형태 — 헤드라인 + 안내 + 인증수단 2개 (휴대폰 / PASS). 외부 SDK 결정 시 재설계.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "본인인증",
                "description": "인증수단을 선택해 주세요."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "buttons",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.sm}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "btn-phone",
                  "component": "atom/btn",
                  "variant": {
                    "type": "primary",
                    "state": "default"
                  },
                  "props": {
                    "label": "휴대폰 본인인증"
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "text",
                  "id": "phone-info",
                  "content": "수집 정보: 이름, 생년월일, 휴대폰번호, CI",
                  "textStyle": "{semantic.typography.sub-label}",
                  "color": "{semantic.color.text.muted}",
                  "exposeAs": "phoneInfo",
                  "layoutAlign": "STRETCH",
                  "autoResize": "HEIGHT",
                  "_comment": "[고지·필수] PG-MBR-AUTH-002 + 개인정보보호법 § 15 — 휴대폰 인증 시 수집 정보 고지 의무"
                },
                {
                  "kind": "ref",
                  "id": "btn-pass",
                  "component": "atom/btn",
                  "variant": {
                    "type": "secondary",
                    "state": "default"
                  },
                  "props": {
                    "label": "PASS 인증"
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "text",
                  "id": "pass-info",
                  "content": "수집 정보: PASS 인증서 정보 (이름, 생년월일, CI)",
                  "textStyle": "{semantic.typography.sub-label}",
                  "color": "{semantic.color.text.muted}",
                  "exposeAs": "passInfo",
                  "layoutAlign": "STRETCH",
                  "autoResize": "HEIGHT",
                  "_comment": "[고지·필수] PG-MBR-AUTH-002 + 개인정보보호법 § 15 — PASS 인증 시 수집 정보 고지 의무"
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/tab",
    "category": "ogn",
    "description": "콘텐츠 전환용 탭 — 3개 tab-item 균등 분배 (layoutGrow). variants: active = 0 / 1 / 2.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "{component.tab.default.height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "tab-1",
          "component": "atom/tab-item",
          "variant": {
            "state": "active"
          },
          "props": {
            "label": "탭 1"
          },
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "tab-2",
          "component": "atom/tab-item",
          "variant": {
            "state": "default"
          },
          "props": {
            "label": "탭 2"
          },
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "tab-3",
          "component": "atom/tab-item",
          "variant": {
            "state": "default"
          },
          "props": {
            "label": "탭 3"
          },
          "layoutGrow": 1
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "active",
          "values": [
            "0",
            "1",
            "2"
          ]
        }
      ],
      "overrides": {
        "active=0": {},
        "active=1": {
          "children[tab-1].variant": {
            "state": "default"
          },
          "children[tab-2].variant": {
            "state": "active"
          }
        },
        "active=2": {
          "children[tab-1].variant": {
            "state": "default"
          },
          "children[tab-3].variant": {
            "state": "active"
          }
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/bottomsheet-terms-detail",
    "category": "ogn",
    "description": "약관 전문 BottomSheet — 헤더(타이틀+close) + 탭(전문/요약/개정) + 본문 placeholder. POL-MBR-TERM-001-11.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "header",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "text",
                  "id": "title",
                  "content": "약관 상세",
                  "textStyle": "{component.header.default.titleStyle}",
                  "color": "{component.header.default.titleColor}",
                  "exposeAs": "title"
                },
                {
                  "kind": "ref",
                  "id": "btn-close",
                  "component": "atom/btn-icon",
                  "variant": {
                    "state": "default"
                  },
                  "props": {
                    "icon": "atom/icon/close"
                  }
                }
              ]
            },
            {
              "kind": "ref",
              "id": "tab",
              "component": "ogn/tab",
              "variant": {
                "active": "0"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "text",
              "id": "body",
              "content": "약관 본문이 표시됩니다. 전문 / 핵심 요약 / 개정 이력 탭별로 콘텐츠가 전환됩니다.",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.secondary}",
              "layoutAlign": "STRETCH",
              "exposeAs": "body"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/card-bill-summary",
    "category": "ogn",
    "description": "홈 강조 카드 — '이번 달 요금' 안내. 외피 (radius xl + glass fill + 32 padding) + content (라벨 + 강조 금액 + AI 인사이트 + CTA). page/MBR/main 같은 home 페이지에 배치 — Pattern A 의 홈 예외 패턴 (외피 padding 32 / 18px home typography / shadow elevated CTA).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.xl}",
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.3xl}",
            "paddingBottom": "{foundation.dimension.spacing.3xl}",
            "paddingLeft": "{foundation.dimension.spacing.3xl}",
            "paddingRight": "{foundation.dimension.spacing.3xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "headline",
              "component": "mol/card-header",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "요금안내서",
                "title": "3월 요금\n64,000원"
              }
            },
            {
              "kind": "ref",
              "id": "insight",
              "component": "mol/ai-insight",
              "variant": {
                "type": "message-only"
              },
              "props": {
                "icon": "atom/icon/search",
                "prefix": "콘텐츠 이용료가 지난달보다 늘었어요"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "cta-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MAX",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "cta",
                  "component": "atom/btn",
                  "variant": {
                    "type": "primary-elevated",
                    "state": "default"
                  },
                  "props": {
                    "label": "상세내역 살펴보기"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/card-device-recall",
    "category": "ogn",
    "description": "홈 카드 — 매장에서 본 단말기 다시 확인하기. card-bill-summary 와 동일 외피 패턴 (radius xl + padding 32 + surface.primary). content: 라벨+제목 (mol/card-header) + AI 인사이트 (mol/ai-insight, icon-bubble size=sm) + 우측정렬 작은 CTA (atom/btn type=small-elevated). page/MBR/main 등 home 페이지 배치.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.xl}",
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.3xl}",
            "paddingBottom": "{foundation.dimension.spacing.3xl}",
            "paddingLeft": "{foundation.dimension.spacing.3xl}",
            "paddingRight": "{foundation.dimension.spacing.3xl}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "headline",
              "component": "mol/card-header",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "단말기",
                "title": "매장에서 보신 갤럭시 S26\n다시 확인해보세요"
              }
            },
            {
              "kind": "ref",
              "id": "insight",
              "component": "mol/ai-insight",
              "variant": {
                "type": "message-only"
              },
              "props": {
                "icon": "atom/icon/search",
                "prefix": "SK텔레콤 논현대리점에서 상담완료"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "cta-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MAX",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "cta",
                  "component": "atom/btn",
                  "variant": {
                    "type": "small-elevated",
                    "state": "default"
                  },
                  "props": {
                    "label": "갤럭시 S26 상세보기"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/meta",
    "category": "ogn",
    "description": "메타데이터 카드 (signup/dormant/leave/rejoin/history 5 case). 외피(radius md surface.secondary, padding 24) + info-row × 4 + divider × 3. case 별 row 라벨/값은 variants 로 분기. row 부족 case 는 빈값.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{semantic.layout.screen-padding-default}",
        "paddingBottom": "{semantic.layout.screen-padding-default}",
        "paddingLeft": "{semantic.layout.screen-padding-default}",
        "paddingRight": "{semantic.layout.screen-padding-default}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.md}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "row-1",
          "component": "mol/info-row",
          "props": {
            "label": "라벨 1",
            "value": "값 1"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "divider-1",
          "component": "atom/divider",
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "row-2",
          "component": "mol/info-row",
          "props": {
            "label": "라벨 2",
            "value": "값 2"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "divider-2",
          "component": "atom/divider",
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "row-3",
          "component": "mol/info-row",
          "props": {
            "label": "라벨 3",
            "value": "값 3"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "divider-3",
          "component": "atom/divider",
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "row-4",
          "component": "mol/info-row",
          "props": {
            "label": "라벨 4",
            "value": "값 4"
          },
          "layoutAlign": "STRETCH"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "case",
          "values": [
            "signup",
            "dormant",
            "leave",
            "rejoin",
            "history"
          ]
        }
      ],
      "overrides": {
        "case=signup": {
          "children[row-1].props.label": "회원ID",
          "children[row-1].props.value": "NC2026042800123",
          "children[row-2].props.label": "가입일",
          "children[row-2].props.value": "2026.04.28",
          "children[row-3].props.label": "",
          "children[row-3].props.value": "",
          "children[row-4].props.label": "",
          "children[row-4].props.value": ""
        },
        "case=dormant": {
          "children[row-1].props.label": "해제일",
          "children[row-1].props.value": "2026.04.28",
          "children[row-2].props.label": "복원 항목",
          "children[row-2].props.value": "등급 / 포인트 / 구독",
          "children[row-3].props.label": "",
          "children[row-3].props.value": "",
          "children[row-4].props.label": "",
          "children[row-4].props.value": ""
        },
        "case=leave": {
          "children[row-1].props.label": "탈퇴 처리일",
          "children[row-1].props.value": "2026.04.28",
          "children[row-2].props.label": "유예 종료일",
          "children[row-2].props.value": "2026.05.05",
          "children[row-3].props.label": "철회 가능 여부",
          "children[row-3].props.value": "가능 (7일 이내)",
          "children[row-4].props.label": "",
          "children[row-4].props.value": ""
        },
        "case=rejoin": {
          "children[row-1].props.label": "재가입일",
          "children[row-1].props.value": "2026.04.28",
          "children[row-2].props.label": "복원 항목",
          "children[row-2].props.value": "등급 / 포인트",
          "children[row-3].props.label": "복원 제외",
          "children[row-3].props.value": "결제 수단 / 알림 설정",
          "children[row-4].props.label": "",
          "children[row-4].props.value": ""
        },
        "case=history": {
          "children[row-1].props.label": "탈퇴일",
          "children[row-1].props.value": "2025.12.01",
          "children[row-2].props.label": "재가입 가능일",
          "children[row-2].props.value": "2025.12.08 (제한 종료)",
          "children[row-3].props.label": "복원 항목",
          "children[row-3].props.value": "등급 / 포인트",
          "children[row-4].props.label": "복원 제외",
          "children[row-4].props.value": "결제 수단 / 알림 설정"
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/history-summary",
    "category": "ogn",
    "description": "재가입 — 기존 회원 이력 + 복원 범위 미리보기. PR-MBR-CS-004-02 + FN-REJOIN-001/003 출력 기반. section-header + ogn/MBR/meta(case=history). lead notice (재가입 가능 안내) 는 page 레벨에서 mol/notice-card type=plain 으로 박음.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "이전 이용 정보를 확인해 주세요",
                "description": "복원되는 항목과 새로 입력해야 하는 항목을 안내드립니다."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "meta",
              "component": "ogn/MBR/meta",
              "variant": {
                "case": "history"
              },
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/info-form",
    "category": "ogn",
    "description": "회원정보 입력 폼 — headline + description + form-row × 5. signup-info / rejoin-info 공유.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "회원 정보를 입력해 주세요",
                "description": "안전한 가입을 위해 아래 정보가 필요합니다."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "row-name",
              "component": "mol/form-row",
              "variant": {
                "helper": "without"
              },
              "props": {
                "label": "이름 (본인인증 정보로 변경 불가)",
                "placeholder": "본인인증 정보로 자동 입력됩니다"
              },
              "_comment": "[고지·필수] PG-MBR-INFO-002 — 본인인증 연계 항목 수정 잠금 고지"
            },
            {
              "kind": "ref",
              "id": "row-id",
              "component": "mol/form-row",
              "variant": {
                "helper": "with"
              },
              "props": {
                "label": "아이디",
                "placeholder": "영문/숫자 6~20자",
                "helper": "사용 가능한 아이디인지 확인합니다"
              }
            },
            {
              "kind": "ref",
              "id": "row-password",
              "component": "mol/form-row",
              "variant": {
                "helper": "without"
              },
              "props": {
                "label": "비밀번호",
                "placeholder": "영문·숫자·특수문자 조합 8자 이상"
              }
            },
            {
              "kind": "ref",
              "id": "row-email",
              "component": "mol/form-row",
              "variant": {
                "helper": "with"
              },
              "props": {
                "label": "이메일",
                "placeholder": "example@nc.com",
                "helper": "공지/혜택 안내 수신용"
              }
            },
            {
              "kind": "ref",
              "id": "row-phone",
              "component": "mol/form-row",
              "variant": {
                "helper": "without"
              },
              "props": {
                "label": "연락처 (본인인증 정보로 변경 불가)",
                "placeholder": "본인인증 정보로 자동 입력됩니다"
              },
              "_comment": "[고지·필수] PG-MBR-INFO-002 — 본인인증 연계 항목 수정 잠금 고지"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/info-input",
    "category": "ogn",
    "description": "회원정보 입력 영역 — mol/form-row × 5 (이름·아이디·비밀번호·이메일·연락처). signup-info baseline. rejoin-info 는 일부 row visible 토글. 외피 padding 24, row 간 간격 lg. label / placeholder / helper 텍스트는 page 시점 row 별 직접 박음 (메모리 룰 — 같은 키 여러 자식 시 첫 거만 매칭).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "row-name",
              "component": "mol/form-row",
              "variant": {
                "helper": "without",
                "tone": "default"
              },
              "props": {
                "label": "이름"
              }
            },
            {
              "kind": "ref",
              "id": "row-id",
              "component": "mol/form-row",
              "variant": {
                "helper": "with",
                "tone": "default"
              },
              "props": {
                "label": "아이디",
                "helper": "4~12자, 영문·숫자"
              }
            },
            {
              "kind": "ref",
              "id": "row-password",
              "component": "mol/form-row",
              "variant": {
                "helper": "with",
                "tone": "default"
              },
              "props": {
                "label": "비밀번호",
                "helper": "8자 이상, 영문·숫자 조합"
              }
            },
            {
              "kind": "ref",
              "id": "row-email",
              "component": "mol/form-row",
              "variant": {
                "helper": "without",
                "tone": "default"
              },
              "props": {
                "label": "이메일"
              }
            },
            {
              "kind": "ref",
              "id": "row-phone",
              "component": "mol/form-row",
              "variant": {
                "helper": "without",
                "tone": "default"
              },
              "props": {
                "label": "휴대폰 번호"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/leave-block-check",
    "category": "ogn",
    "description": "탈퇴 차단 사유 안내 — 미납·미완료 거래·구독 등으로 탈퇴 진행 불가 시 노출. banner(warning) + headline + description + notice-block × 3 (차단 사유 + 해결 경로). NOVA-MBR-PG-003 의 ogn-MBR-leave-block-check 매핑. 0/1 노출 (조건부).",
    "_comment": "[고지·필수] PG-MBR-LEAVE-002 — 탈퇴 차단 사유 + 해결 경로 안내 (사용자 잔여 의무 인지 필수)",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "확인이 필요한 항목",
                "description": "각 항목의 해결 경로를 확인하고 처리한 후 탈퇴를 다시 시도해 주세요."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "block-list",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{component.notice-card-list.default.padding}",
                "paddingBottom": "{component.notice-card-list.default.padding}",
                "paddingLeft": "{component.notice-card-list.default.padding}",
                "paddingRight": "{component.notice-card-list.default.padding}",
                "itemSpacing": "{component.notice-card-list.default.itemSpacing}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": "{component.notice-card-list.default.radius}",
                "fill": "{component.notice-card-list.default.fill}",
                "stroke": null,
                "shadow": null
              },
              "_comment": "외피 + N 개 mol/notice-block (size=sm) stack — DP § 6.5 재사용 패턴 (notice-card-list). 가변 N 은 mol 로 묶지 않고 ogn 단에서 group + ref 직접 처리 (mol/checkbox-list 폐기 정책). 시각 일관성은 component.notice-card-list.* 토큰이 보장.",
              "children": [
                {
                  "kind": "ref",
                  "id": "block-1",
                  "component": "mol/notice-block",
                  "variant": {
                    "size": "sm"
                  },
                  "props": {
                    "title": "미납 요금",
                    "body": "결제 정보 확인 후 납부를 완료해야 탈퇴할 수 있습니다. ▶ 결제 내역에서 확인"
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "block-2",
                  "component": "mol/notice-block",
                  "variant": {
                    "size": "sm"
                  },
                  "props": {
                    "title": "진행 중인 거래",
                    "body": "구매·환불·교환 등 진행 중인 거래가 모두 완료되면 탈퇴할 수 있습니다. ▶ 주문 내역에서 확인"
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "block-3",
                  "component": "mol/notice-block",
                  "variant": {
                    "size": "sm"
                  },
                  "props": {
                    "title": "정기결제·구독",
                    "body": "구독을 해지한 뒤 다음 결제 주기 시작 전까지 탈퇴할 수 있습니다. ▶ 구독 관리에서 확인"
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/leave-confirm-card",
    "category": "ogn",
    "description": "회원 탈퇴 — 최종 동의 카드. headline + description + all-agree-row + 철회 안내.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "탈퇴 최종 동의",
                "description": "위 내용을 모두 확인하셨다면 동의해 주세요."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "consent",
              "component": "mol/all-agree-row",
              "props": {
                "label": "위 내용을 모두 확인했으며 탈퇴에 동의합니다."
              }
            },
            {
              "kind": "text",
              "id": "rollback-notice",
              "content": "탈퇴 후 N일 이내에 한해 철회가 가능합니다.",
              "textStyle": "{semantic.typography.sub-label}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "rollback-notice",
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/leave-impact-list",
    "category": "ogn",
    "description": "탈퇴 전 영향 안내 묶음 — mol/notice-card × 3 (자산 소멸 emphasis · 연계 서비스 message · 데이터 보관 message). leave-impact 화면 본문. POL-LEAVE-004/005/010 영향 안내 강제. 카드 별 unique id (card-asset / card-related / card-data) — props 키 unique 처리 위해 page 시점 직접 nested ref.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "card-asset",
              "component": "mol/notice-card",
              "variant": {
                "type": "emphasis"
              },
              "props": {
                "message": "보유 포인트, 쿠폰, 멤버십 혜택이 탈퇴 즉시 소멸됩니다."
              }
            },
            {
              "kind": "ref",
              "id": "card-related",
              "component": "mol/notice-card",
              "variant": {
                "type": "message"
              },
              "props": {
                "message": "구독·결합·멤버십 등 연계 서비스가 함께 종료되거나 별도 해지가 필요할 수 있습니다."
              }
            },
            {
              "kind": "ref",
              "id": "card-data",
              "component": "mol/notice-card",
              "variant": {
                "type": "message"
              },
              "props": {
                "message": "거래 기록 일부는 법령에 따라 정해진 기간 동안 분리 보관됩니다."
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/leave-impact-notice",
    "category": "ogn",
    "description": "회원 탈퇴 — 영향 안내. banner(경고) + headline + description + accordion × 3 (소멸 / 해지 / 보관).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "탈퇴 시 처리되는 정보",
                "description": "탈퇴 시 자산은 소멸되고 데이터는 영구 삭제됩니다. 법정 의무 보관 항목 외에는 복구할 수 없습니다."
              },
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] PR-MBR-CS-003-03 — 탈퇴 영향 (자산 소멸·법적 책임)"
            },
            {
              "kind": "group",
              "id": "notice-list",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{component.notice-card-list.default.padding}",
                "paddingBottom": "{component.notice-card-list.default.padding}",
                "paddingLeft": "{component.notice-card-list.default.padding}",
                "paddingRight": "{component.notice-card-list.default.padding}",
                "itemSpacing": "{component.notice-card-list.default.itemSpacing}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": "{component.notice-card-list.default.radius}",
                "fill": "{component.notice-card-list.default.fill}",
                "stroke": null,
                "shadow": null
              },
              "_comment": "[고지·필수] PR-MBR-CS-003-03 — 탈퇴 영향 항목별 안내. 외피 + N개 mol/notice-block (size=sm) stack 표준 패턴 (DP § 6.5.5 / component.notice-card-list.* 토큰).",
              "children": [
                {
                  "kind": "ref",
                  "id": "notice-1",
                  "component": "mol/notice-block",
                  "variant": {
                    "size": "sm"
                  },
                  "props": {
                    "title": "소멸 정보 (복구 불가)",
                    "body": "포인트 / 적립금 / 임시 데이터 / 등급 등 — 탈퇴 즉시 영구 삭제되며 복구할 수 없습니다."
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "notice-2",
                  "component": "mol/notice-block",
                  "variant": {
                    "size": "sm"
                  },
                  "props": {
                    "title": "해지 정보",
                    "body": "구독 / 정기결제 / 자동이체 등 — 탈퇴 시 자동 해지 처리됩니다. 미납 잔액은 별도 정산이 필요합니다."
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "notice-3",
                  "component": "mol/notice-block",
                  "variant": {
                    "size": "sm"
                  },
                  "props": {
                    "title": "보관 정보 (법정 의무)",
                    "body": "전자상거래법 / 통신비밀보호법 등에 의해 일정 기간 보관되는 항목 — 거래 기록·접속 로그 등."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/leave-processing",
    "category": "ogn",
    "description": "탈퇴 처리 중 안내 — atom/spinner + headline + description. 처리 시간 동안 사용자에게 진행 중 상태 노출. NOVA-MBR-PG-003 의 ogn-MBR-leave-processing 매핑.",
    "_comment": "[고지·사용성] PG-MBR-LEAVE-004 — 처리 진행 상태 안내 (대기 시간 인지)",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "CENTER",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "spinner",
              "component": "atom/spinner"
            },
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "탈퇴를 처리하고 있어요",
                "description": "잠시만 기다려 주세요. 화면을 닫으면 처리가 중단될 수 있습니다."
              },
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/leave-reason-form",
    "category": "ogn",
    "description": "회원 탈퇴 — 사유 입력 폼. headline + description + checkbox-item(radio) × 5 + text-area.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.checkbox-list.default.paddingY}",
            "paddingBottom": "{component.checkbox-list.default.paddingY}",
            "paddingLeft": "{component.checkbox-list.default.paddingX}",
            "paddingRight": "{component.checkbox-list.default.paddingX}",
            "itemSpacing": "{component.checkbox-list.default.itemSpacing}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "탈퇴 사유를 알려주세요",
                "description": "더 나은 서비스를 위해 의견 부탁드립니다."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "radio-1",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "radio",
                "tone": "none",
                "action": "without"
              },
              "props": {
                "label": "서비스를 잘 이용하지 않아요"
              }
            },
            {
              "kind": "ref",
              "id": "radio-2",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "radio",
                "tone": "none",
                "action": "without"
              },
              "props": {
                "label": "사용이 어려워요"
              }
            },
            {
              "kind": "ref",
              "id": "radio-3",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "radio",
                "tone": "none",
                "action": "without"
              },
              "props": {
                "label": "다른 서비스를 이용해요"
              }
            },
            {
              "kind": "ref",
              "id": "radio-4",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "radio",
                "tone": "none",
                "action": "without"
              },
              "props": {
                "label": "개인정보가 우려돼요"
              }
            },
            {
              "kind": "ref",
              "id": "radio-other",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "radio",
                "tone": "none",
                "action": "without"
              },
              "props": {
                "label": "기타"
              }
            },
            {
              "kind": "ref",
              "id": "text-area-other",
              "component": "atom/text-area",
              "variant": {
                "state": "default"
              },
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/loading-screen",
    "category": "ogn",
    "description": "BSS 처리 중 진행 표시 full-screen ogn — atom/spinner + headline + description (sub). 4 *-loading page 공유. signup-loading (친절 톤) / dormant-loading (차분) / leave-loading (신중) / rejoin-loading (환영). page 가 ref 시 props 로 headline / description 직접 주입.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.3xl}",
        "paddingBottom": "{foundation.dimension.spacing.3xl}",
        "paddingLeft": "{semantic.layout.screen-padding-default}",
        "paddingRight": "{semantic.layout.screen-padding-default}",
        "itemSpacing": "{foundation.dimension.spacing.lg}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "spinner",
          "component": "atom/spinner"
        },
        {
          "kind": "text",
          "id": "headline",
          "content": "처리하고 있어요",
          "textStyle": "{semantic.typography.card-title}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "headline",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT",
          "textAlignHorizontal": "CENTER"
        },
        {
          "kind": "text",
          "id": "description",
          "content": "잠시만 기다려 주세요",
          "textStyle": "{semantic.typography.body}",
          "color": "{semantic.color.text.secondary}",
          "exposeAs": "description",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT",
          "textAlignHorizontal": "CENTER"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/login-form",
    "category": "ogn",
    "description": "로그인 폼 — headline + description + form-row × 2 (아이디 / 비밀번호). page/MBR/login 전용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "로그인",
                "description": "아이디와 비밀번호를 입력해 주세요."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "row-id",
              "component": "mol/form-row",
              "variant": {
                "helper": "without"
              },
              "props": {
                "label": "아이디",
                "placeholder": "아이디를 입력해 주세요"
              }
            },
            {
              "kind": "ref",
              "id": "row-password",
              "component": "mol/form-row",
              "variant": {
                "helper": "without"
              },
              "props": {
                "label": "비밀번호",
                "placeholder": "비밀번호를 입력해 주세요"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/notice-bottomsheet",
    "category": "ogn",
    "description": "범용 분기 안내 BottomSheet — 헤드라인 + 본문 + 1~2 CTA. 휴면 감지 / 재가입 제한 / 탈퇴 차단 등 다용도.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{foundation.dimension.radius.lg}",
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "title",
              "content": "안내",
              "textStyle": "{component.header.default.titleStyle}",
              "color": "{component.header.default.titleColor}",
              "exposeAs": "title",
              "_comment": "[고지·필수] PG-MBR-STAT-001 — 분기/제한 안내 헤드라인 (가입제한, 탈퇴차단 등)"
            },
            {
              "kind": "text",
              "id": "description",
              "content": "여기에 안내 메시지가 표시됩니다.",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "description",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "details",
              "component": "mol/info-stack",
              "layoutAlign": "STRETCH",
              "props": {
                "row-1": "제한 사유: -",
                "row-2": "해제 예상: -",
                "row-3": "문의: 고객센터 1644-0009"
              },
              "_comment": "[고지·필수] PG-MBR-STAT-001 — 제한/차단 사유 명시"
            },
            {
              "kind": "ref",
              "id": "actions",
              "component": "mol/cta-pair",
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/post-actions",
    "category": "ogn",
    "description": "완료 후 후속 액션 카드 묶음 — mol/section-header (옵션) + mol/post-action-card × 3. baseline = signup-complete (가장 일반적 case): 내 정보 점검 / 마케팅 설정 / 첫 혜택. dormant·rejoin 의 경우 카드 텍스트는 figma 시점 instance 변경 또는 page 가 직접 mol/post-action-card × N 조립 (메모리 룰 회피 — 같은 키 nested 첫 거만 매칭).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "title",
              "component": "mol/section-header",
              "variant": {
                "headline": "with",
                "description": "without"
              },
              "props": {
                "headline": "다음에 해볼까요?"
              }
            },
            {
              "kind": "ref",
              "id": "card-1",
              "component": "mol/post-action-card",
              "props": {
                "headline": "내 정보 점검",
                "description": "회원정보를 확인하고 업데이트해 보세요"
              }
            },
            {
              "kind": "ref",
              "id": "card-2",
              "component": "mol/post-action-card",
              "props": {
                "headline": "마케팅 설정",
                "description": "관심 혜택 알림을 받을지 선택해 주세요"
              }
            },
            {
              "kind": "ref",
              "id": "card-3",
              "component": "mol/post-action-card",
              "props": {
                "headline": "첫 혜택 받기",
                "description": "신규 회원 전용 혜택을 받아 보세요"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/restored-summary",
    "category": "ogn",
    "description": "재가입 완료 후 연계 / 제외 항목 list — section-header '복원된 항목' + info-row × N + section-header '제외 항목' + info-row × N. rejoin-complete 화면 본문. FN-REJOIN-006 연계 항목 / 복원 제외 항목 안내.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header-restored",
              "component": "mol/section-header",
              "variant": {
                "headline": "with",
                "description": "without"
              },
              "props": {
                "headline": "복원된 항목"
              }
            },
            {
              "kind": "ref",
              "id": "row-restored-1",
              "component": "mol/info-row",
              "props": {
                "label": "회원 ID",
                "value": "(이전과 동일)"
              }
            },
            {
              "kind": "ref",
              "id": "row-restored-2",
              "component": "mol/info-row",
              "props": {
                "label": "이전 가입일",
                "value": "(자동 표시)"
              }
            },
            {
              "kind": "ref",
              "id": "row-restored-3",
              "component": "mol/info-row",
              "props": {
                "label": "혜택 이력",
                "value": "일부 복원됨"
              }
            },
            {
              "kind": "ref",
              "id": "header-excluded",
              "component": "mol/section-header",
              "variant": {
                "headline": "with",
                "description": "without"
              },
              "props": {
                "headline": "복원 제외 항목"
              }
            },
            {
              "kind": "ref",
              "id": "row-excluded-1",
              "component": "mol/info-row",
              "props": {
                "label": "보관 만료 데이터",
                "value": "신규로 시작"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/result-block",
    "category": "ogn",
    "description": "결과 화면 hero 묶음 — mol/section-header(헤드라인+설명) + ogn/MBR/meta(메타 카드). 4 case 분기 (signup/dormant/leave/rejoin). complete 화면 공유.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{semantic.layout.screen-padding-default}",
        "paddingBottom": "{semantic.layout.screen-padding-default}",
        "paddingLeft": "{semantic.layout.screen-padding-default}",
        "paddingRight": "{semantic.layout.screen-padding-default}",
        "itemSpacing": "{foundation.dimension.spacing.2xl}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "result",
          "component": "mol/section-header",
          "props": {
            "headline": "결과 헤드라인",
            "description": "결과 설명"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "meta",
          "component": "ogn/MBR/meta",
          "variant": {
            "case": "signup"
          },
          "layoutAlign": "STRETCH"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "case",
          "values": [
            "signup",
            "dormant",
            "leave",
            "rejoin"
          ]
        }
      ],
      "overrides": {
        "case=signup": {
          "children[result].props.headline": "환영합니다, 회원이 되셨습니다",
          "children[result].props.description": "NC의 모든 서비스를 이용하실 수 있습니다. 첫 가입 혜택도 확인해 보세요.",
          "children[meta].variant.case": "signup"
        },
        "case=dormant": {
          "children[result].props.headline": "다시 돌아오신 것을 환영합니다",
          "children[result].props.description": "정상 이용이 재개되었습니다. 이전 정보가 복원되었는지 확인해 보세요.",
          "children[meta].variant.case": "dormant"
        },
        "case=leave": {
          "children[result].props.headline": "탈퇴가 완료되었습니다",
          "children[result].props.description": "7일 이내에는 탈퇴를 철회하실 수 있습니다. 기간이 지나면 취소가 불가합니다.",
          "children[meta].variant.case": "leave"
        },
        "case=rejoin": {
          "children[result].props.headline": "다시 만나서 반갑습니다",
          "children[result].props.description": "이전에 이용하셨던 정보 일부가 복원되었습니다. 내 정보에서 확인해 보세요.",
          "children[meta].variant.case": "rejoin"
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/result-summary",
    "category": "ogn",
    "description": "완료·결과 요약 — full-width 외피 + 상단 큰 아이콘 (톤별 swap) + 강조 headline + description + (옵션) sub-info countdown. 4 톤 variants (welcome / re-welcome / calm / warning). 톤별 차별화: 아이콘 + headline 색 + sub-info visible. signup-complete (welcome) / dormant-complete (re-welcome) / leave-complete (calm + countdown) / rejoin-complete (re-welcome) / rejoin-blocked (warning).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.3xl}",
        "paddingBottom": "{foundation.dimension.spacing.2xl}",
        "paddingLeft": "{semantic.layout.screen-padding-default}",
        "paddingRight": "{semantic.layout.screen-padding-default}",
        "itemSpacing": "{foundation.dimension.spacing.lg}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/sparkle",
          "exposeAs": "icon"
        },
        {
          "kind": "text",
          "id": "headline",
          "content": "환영합니다, 회원이 되셨습니다",
          "textStyle": "{semantic.typography.card-title}",
          "color": "{semantic.color.text.brand}",
          "exposeAs": "headline",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT",
          "textAlignHorizontal": "CENTER"
        },
        {
          "kind": "text",
          "id": "description",
          "content": "이제 NC 의 모든 서비스를 이용하실 수 있습니다.",
          "textStyle": "{semantic.typography.body}",
          "color": "{semantic.color.text.secondary}",
          "exposeAs": "description",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT",
          "textAlignHorizontal": "CENTER"
        },
        {
          "kind": "text",
          "id": "sub-info",
          "content": "유예 종료까지 D-7",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.feedback.warning}",
          "exposeAs": "sub-info",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT",
          "textAlignHorizontal": "CENTER"
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "tone",
          "values": [
            "welcome",
            "re-welcome",
            "calm",
            "warning"
          ]
        }
      ],
      "overrides": {
        "tone=welcome": {
          "children[icon].component": "atom/icon/sparkle",
          "children[headline].color": "{semantic.color.text.brand}",
          "children[sub-info].visible": false
        },
        "tone=re-welcome": {
          "children[icon].component": "atom/icon/heart",
          "children[headline].color": "{semantic.color.text.brand}",
          "children[sub-info].visible": false
        },
        "tone=calm": {
          "children[icon].component": "atom/icon/lock-closed",
          "children[headline].color": "{semantic.color.text.primary}",
          "children[sub-info].color": "{semantic.color.feedback.warning}"
        },
        "tone=warning": {
          "children[icon].component": "atom/icon/x-circle",
          "children[headline].color": "{semantic.color.feedback.warning}",
          "children[sub-info].visible": false
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/term-list",
    "category": "ogn",
    "description": "약관 동의 영역 — mol/all-agree-row + 필수 약관 N개 + divider + 선택 약관 N개. signup-terms / dormant-terms / rejoin-terms 공유. baseline = 가입 케이스 (필수 2 + 선택 2). page 가 ref 시 약관 row visible 토글 + 텍스트 props 주입.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.checkbox-list.default.paddingY}",
            "paddingBottom": "{component.checkbox-list.default.paddingY}",
            "paddingLeft": "{component.checkbox-list.default.paddingX}",
            "paddingRight": "{component.checkbox-list.default.paddingX}",
            "itemSpacing": "{component.checkbox-list.default.itemSpacing}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "all-agree",
              "component": "mol/all-agree-row",
              "props": {
                "label": "전체 동의 (필수 + 선택)"
              }
            },
            {
              "kind": "ref",
              "id": "term-required-1",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "checkbox",
                "tone": "required",
                "action": "with"
              },
              "props": {
                "label": "서비스 이용약관",
                "action": "자세히"
              }
            },
            {
              "kind": "ref",
              "id": "term-required-2",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "checkbox",
                "tone": "required",
                "action": "with"
              },
              "props": {
                "label": "개인정보 수집·이용 동의",
                "action": "자세히"
              }
            },
            {
              "kind": "ref",
              "id": "term-optional-1",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "checkbox",
                "tone": "optional",
                "action": "with"
              },
              "props": {
                "label": "마케팅 정보 수신 동의",
                "action": "자세히"
              }
            },
            {
              "kind": "ref",
              "id": "term-optional-2",
              "component": "mol/checkbox-item",
              "variant": {
                "input": "checkbox",
                "tone": "optional",
                "action": "with"
              },
              "props": {
                "label": "맞춤형 혜택 제공 동의",
                "action": "자세히"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/term-section",
    "category": "ogn",
    "description": "약관 동의 섹션 — headline + description + all-agree-row + checkbox-item × 4. signup-terms / rejoin-terms 공유.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.checkbox-list.default.paddingY}",
            "paddingBottom": "{component.checkbox-list.default.paddingY}",
            "paddingLeft": "{component.checkbox-list.default.paddingX}",
            "paddingRight": "{component.checkbox-list.default.paddingX}",
            "itemSpacing": "{component.checkbox-list.default.itemSpacing}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "약관에 동의해 주세요",
                "description": "필수 약관에 동의하면 다음 단계로 진행할 수 있어요."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "consent-all",
              "component": "mol/all-agree-row",
              "props": {
                "label": "전체 동의 (필수+선택 모두)"
              },
              "_comment": "[고지·필수] PG-MBR-TERM-001 — 전체동의 적용 범위 명시 (필수+선택 모두 vs 필수만)"
            },
            {
              "kind": "ref",
              "id": "term-tos",
              "component": "mol/checkbox-item",
              "props": {
                "label": "이용약관 동의"
              },
              "_comment": "[고지·필수] PG-MBR-TERM-001 — 필수 약관 (전기통신사업법 § 22-2)",
              "variant": {
                "input": "checkbox",
                "tone": "required"
              }
            },
            {
              "kind": "ref",
              "id": "term-pii",
              "component": "mol/checkbox-item",
              "props": {
                "label": "개인정보 수집·이용 동의"
              },
              "_comment": "[고지·필수] PG-MBR-TERM-001 + 개인정보보호법 § 15 — 필수 약관",
              "variant": {
                "input": "checkbox",
                "tone": "required"
              }
            },
            {
              "kind": "ref",
              "id": "term-mkt",
              "component": "mol/checkbox-item",
              "props": {
                "label": "마케팅 정보 수신 동의"
              },
              "_comment": "[고지·필수] PG-MBR-PROF-001 — 마케팅 동의 (필수 약관과 시각 분리, 선택 항목)",
              "variant": {
                "input": "checkbox",
                "tone": "optional"
              }
            },
            {
              "kind": "ref",
              "id": "term-perks",
              "component": "mol/checkbox-item",
              "props": {
                "label": "맞춤형 혜택 제공 동의"
              },
              "_comment": "[고지·필수] PG-MBR-TERM-001 — 선택 약관",
              "variant": {
                "input": "checkbox",
                "tone": "optional"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MBR/term-section-dormant",
    "category": "ogn",
    "description": "휴면 해제 — 약관 재동의 섹션. headline + description + all-agree-row + checkbox-item × 3 (개정 필수 2 + 선택 1). dormant-terms 전용.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.checkbox-list.default.paddingY}",
            "paddingBottom": "{component.checkbox-list.default.paddingY}",
            "paddingLeft": "{component.checkbox-list.default.paddingX}",
            "paddingRight": "{component.checkbox-list.default.paddingX}",
            "itemSpacing": "{component.checkbox-list.default.itemSpacing}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "변경된 약관에 동의해 주세요",
                "description": "휴면 기간 동안 개정된 필수 약관입니다. 동의하면 휴면 해제가 완료됩니다."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "consent-all",
              "component": "mol/all-agree-row",
              "props": {
                "label": "재동의 약관 전체 동의"
              },
              "_comment": "[고지·필수] PG-MBR-TERM-001 — 휴면 해제 시 재동의 범위 (개정된 필수 약관만)"
            },
            {
              "kind": "ref",
              "id": "term-tos-revised",
              "component": "mol/checkbox-item",
              "props": {
                "label": "이용약관 (개정) 재동의"
              },
              "_comment": "[고지·필수] PG-MBR-TERM-001 — 휴면 중 개정된 필수 약관",
              "variant": {
                "input": "checkbox",
                "tone": "required"
              }
            },
            {
              "kind": "ref",
              "id": "term-pii-revised",
              "component": "mol/checkbox-item",
              "props": {
                "label": "개인정보 수집·이용 (개정) 재동의"
              },
              "_comment": "[고지·필수] PG-MBR-TERM-001 + 개인정보보호법 § 15 — 휴면 중 개정된 필수 약관",
              "variant": {
                "input": "checkbox",
                "tone": "required"
              }
            },
            {
              "kind": "ref",
              "id": "term-mkt",
              "component": "mol/checkbox-item",
              "props": {
                "label": "마케팅 정보 수신 동의"
              },
              "_comment": "[고지·필수] PG-MBR-PROF-001 — 마케팅 동의 (선택 항목)",
              "variant": {
                "input": "checkbox",
                "tone": "optional"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MYBEN/card-barcode",
    "category": "ogn",
    "description": "MYBEN — T멤버십 바코드 카드. label(only) + barcode + digits/timer footer.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.card.default.padding}",
            "paddingRight": "{component.card.default.padding}",
            "paddingBottom": "{component.card.default.padding}",
            "paddingLeft": "{component.card.default.padding}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "{foundation.dimension.size.screen-content-width-home}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "atom/text-label",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "T멤버십"
              }
            },
            {
              "kind": "ref",
              "id": "barcode-display",
              "component": "mol/barcode-display",
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MYBEN/card-brand-list",
    "category": "ogn",
    "description": "MYBEN — 혜택 브랜드 카드. card-header(좌측 grow) + brand-grid 2x2(우측).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{component.card.default.padding}",
            "paddingRight": "{component.card.default.padding}",
            "paddingBottom": "{component.card.default.padding}",
            "paddingLeft": "{component.card.default.padding}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-content-width-home}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "info-brand",
              "component": "mol/card-info-split",
              "layoutGrow": 1,
              "props": {
                "label": "혜택 브랜드",
                "title": "5곳에서 사용가능"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MYBEN/card-coupon-list",
    "category": "ogn",
    "description": "MYBEN — 쿠폰함 카드. label+title header + list-item × 2 (media 패턴, 상세 버튼).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.card.default.padding}",
            "paddingRight": "{component.card.default.padding}",
            "paddingBottom": "{component.card.default.padding}",
            "paddingLeft": "{component.card.default.padding}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-content-width-home}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/card-header",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "쿠폰함",
                "title": "7장 보유 중"
              }
            },
            {
              "kind": "ref",
              "id": "item-1",
              "component": "mol/list-item",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "VIPS 50% 할인쿠폰",
                "sub": "D-2",
                "label": "상세"
              },
              "variant": {
                "thumb": "square"
              }
            },
            {
              "kind": "ref",
              "id": "item-2",
              "component": "mol/list-item",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "파리바게뜨 10% 할인 쿠폰",
                "sub": "D-2",
                "label": "상세"
              },
              "variant": {
                "thumb": "square"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MYBEN/card-movie-list",
    "category": "ogn",
    "description": "MYBEN — 영화예매 리스트 카드. label-only header + list-item × 2 (media 패턴).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.card.default.padding}",
            "paddingRight": "{component.card.default.padding}",
            "paddingBottom": "{component.card.default.padding}",
            "paddingLeft": "{component.card.default.padding}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-content-width-home}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "atom/text-label",
              "layoutAlign": "STRETCH",
              "props": {
                "label": "영화예매"
              }
            },
            {
              "kind": "ref",
              "id": "item-1",
              "component": "mol/list-item",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "왕과 사는 남자",
                "sub": "VVIP CGV 1인 무료 이용",
                "label": "예매"
              },
              "variant": {
                "thumb": "portrait"
              }
            },
            {
              "kind": "ref",
              "id": "item-2",
              "component": "mol/list-item",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "만약에 우리",
                "sub": "메가박스 본인 50%, 동반1인 20%할인",
                "label": "예매"
              },
              "variant": {
                "thumb": "portrait"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MYBEN/card-points",
    "category": "ogn",
    "description": "MYBEN — 멤버십 포인트 카드. info-stack(STRETCH) + 우측정렬 CTA, 사이 gap 2xl.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{component.card.default.padding}",
            "paddingRight": "{component.card.default.padding}",
            "paddingBottom": "{component.card.default.padding}",
            "paddingLeft": "{component.card.default.padding}",
            "itemSpacing": "{foundation.dimension.spacing.2xl}",
            "width": "{foundation.dimension.size.screen-content-width-home}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "info-stack",
              "component": "mol/card-info-stack",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "cta-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MAX",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "HUG",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "cta",
                  "component": "atom/btn",
                  "variant": {
                    "type": "primary",
                    "state": "default"
                  },
                  "props": {
                    "label": "3월 요금에 포인트 적용하기"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MYBEN/card-promo",
    "category": "ogn",
    "description": "MYBEN — 단일 프로모 카드 (카드 내용 없이 텍스트 한 줄 + 썸네일).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{foundation.shadow.sm}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{component.card.default.padding}",
            "paddingRight": "{component.card.default.padding}",
            "paddingBottom": "{component.card.default.padding}",
            "paddingLeft": "{component.card.default.padding}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-content-width-home}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "promo-text",
              "content": "신혼부부 프랜차이즈 무조건 할인",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "promoText",
              "layoutGrow": 1,
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "thumb",
              "component": "atom/thumb",
              "variant": {
                "size": "md"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/MYBEN/promo-banner",
    "category": "ogn",
    "description": "MYBEN — 최상단 프로모 배너. 좌측 텍스트(grow) + 우측 카드 썸네일.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.sm}",
            "paddingRight": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.sm}",
            "paddingLeft": "{foundation.dimension.spacing.lg}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-content-width-home}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "promo-text",
              "content": "최대 50% 적립 T 멤버십 라이프 신한카드",
              "textStyle": "{semantic.typography.card-label}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "promoText",
              "layoutGrow": 1,
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "thumb",
              "component": "atom/thumb",
              "variant": {
                "size": "sm"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-content-width-home}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/PRDD/discount-box",
    "category": "ogn",
    "description": "최대 할인 구독가 아코디언 박스 — title + tooltip trigger + chevron. body 는 할인 조건 placeholder.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{component.accordion.default.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "header",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "SPACE_BETWEEN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{component.accordion.default.paddingVertical}",
                "paddingBottom": "{component.accordion.default.paddingVertical}",
                "paddingLeft": "{component.accordion.default.paddingHorizontal}",
                "paddingRight": "{component.accordion.default.paddingHorizontal}",
                "itemSpacing": "{component.accordion.default.itemSpacing}",
                "height": "{component.accordion.default.headerMinHeight}"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "group",
                  "id": "title-wrap",
                  "layout": {
                    "mode": "HORIZONTAL",
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "MIN",
                    "counterAxisAlignItems": "CENTER",
                    "paddingTop": "{foundation.dimension.spacing.none}",
                    "paddingBottom": "{foundation.dimension.spacing.none}",
                    "paddingLeft": "{foundation.dimension.spacing.none}",
                    "paddingRight": "{foundation.dimension.spacing.none}",
                    "itemSpacing": "{foundation.dimension.spacing.xs}",
                    "width": "HUG",
                    "height": "HUG"
                  },
                  "visual": {
                    "cornerRadius": 0,
                    "fill": null,
                    "stroke": null,
                    "shadow": null
                  },
                  "children": [
                    {
                      "kind": "text",
                      "id": "title",
                      "content": "최대 할인 구독가",
                      "textStyle": "{component.accordion.default.titleStyle}",
                      "color": "{component.accordion.default.titleColor}",
                      "exposeAs": "title"
                    },
                    {
                      "kind": "group",
                      "id": "tooltip-trigger",
                      "layout": {
                        "mode": "NONE",
                        "width": "{foundation.dimension.size.icon-sm}",
                        "height": "{foundation.dimension.size.icon-sm}",
                        "paddingTop": "{foundation.dimension.spacing.none}",
                        "paddingBottom": "{foundation.dimension.spacing.none}",
                        "paddingLeft": "{foundation.dimension.spacing.none}",
                        "paddingRight": "{foundation.dimension.spacing.none}",
                        "itemSpacing": "{foundation.dimension.spacing.none}"
                      },
                      "visual": {
                        "cornerRadius": 8,
                        "fill": "{semantic.color.icon.muted}",
                        "stroke": null,
                        "shadow": null
                      },
                      "children": []
                    }
                  ]
                },
                {
                  "kind": "group",
                  "id": "chevron",
                  "layout": {
                    "mode": "NONE",
                    "width": "{component.accordion.default.chevronSize}",
                    "height": "{component.accordion.default.chevronSize}",
                    "paddingTop": "{foundation.dimension.spacing.none}",
                    "paddingBottom": "{foundation.dimension.spacing.none}",
                    "paddingLeft": "{foundation.dimension.spacing.none}",
                    "paddingRight": "{foundation.dimension.spacing.none}",
                    "itemSpacing": "{foundation.dimension.spacing.none}"
                  },
                  "visual": {
                    "cornerRadius": 2,
                    "fill": "{component.accordion.default.chevronColor}",
                    "stroke": null,
                    "shadow": null
                  },
                  "children": []
                }
              ]
            },
            {
              "kind": "group",
              "id": "divider",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "NONE",
                "height": "{component.accordion.default.dividerWeight}",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.none}"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": "{component.accordion.default.dividerColor}",
                "stroke": null,
                "shadow": null
              },
              "children": []
            },
            {
              "kind": "group",
              "id": "body",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{component.accordion.default.bodyPaddingTop}",
                "paddingBottom": "{component.accordion.default.bodyPaddingBottom}",
                "paddingLeft": "{component.accordion.default.paddingHorizontal}",
                "paddingRight": "{component.accordion.default.paddingHorizontal}",
                "itemSpacing": "{foundation.dimension.spacing.xs}"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "text",
                  "id": "body-1",
                  "content": "첫 달 할인 -50%",
                  "textStyle": "{component.accordion.default.bodyStyle}",
                  "color": "{component.accordion.default.bodyColor}",
                  "exposeAs": "body-1",
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "text",
                  "id": "body-2",
                  "content": "멤버십 할인 -10%",
                  "textStyle": "{component.accordion.default.bodyStyle}",
                  "color": "{component.accordion.default.bodyColor}",
                  "exposeAs": "body-2",
                  "layoutAlign": "STRETCH"
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/PRDD/footer-cta",
    "category": "ogn",
    "description": "하단 CTA 영역 — 좋아요·선물하기 btn-icon + 구독하기 primary btn (남은 공간 차지).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "{foundation.dimension.size.sticky-footer-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.sm}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{foundation.dimension.spacing.sm}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "{foundation.dimension.size.sticky-footer-height}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "left-actions",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.xs}",
                "width": "HUG",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "btn-favorite",
                  "component": "atom/btn-icon",
                  "variant": {
                    "state": "default"
                  },
                  "props": {
                    "icon": "atom/icon/heart"
                  }
                },
                {
                  "kind": "ref",
                  "id": "btn-gift",
                  "component": "atom/btn-icon",
                  "variant": {
                    "state": "default"
                  },
                  "props": {
                    "icon": "atom/icon/gift"
                  }
                }
              ]
            },
            {
              "kind": "ref",
              "id": "btn-subscribe",
              "component": "atom/btn",
              "variant": {
                "type": "primary",
                "state": "default"
              },
              "props": {
                "label": "구독하기"
              },
              "layoutGrow": 1
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/PRDD/gallery",
    "category": "ogn",
    "description": "상품 이미지 갤러리 — 375×375 정사각 placeholder + 하단 카운터 텍스트. 실제 이미지는 Figma 에서 fill 로 교체.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "image",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "NONE",
            "height": "{foundation.dimension.size.screen-mobile}",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": "{semantic.color.surface.secondary}",
            "stroke": null,
            "shadow": null
          },
          "children": []
        },
        {
          "kind": "text",
          "id": "counter",
          "content": "1 / 5",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "counter"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/PRDD/product-info",
    "category": "ogn",
    "description": "상품 기본 정보 블록 — 외피 + content (태그 × 2 + 상품명 + 가격(할인율·최종가·원가) + 쿠폰 받기 인라인 버튼).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "tags",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.xs}",
                "width": "HUG",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "tag-1",
                  "component": "atom/tag",
                  "variant": {
                    "type": "default"
                  },
                  "props": {
                    "label": "사은품"
                  }
                },
                {
                  "kind": "ref",
                  "id": "tag-2",
                  "component": "atom/tag",
                  "variant": {
                    "type": "neutral"
                  },
                  "props": {
                    "label": "반품무료"
                  }
                }
              ]
            },
            {
              "kind": "text",
              "id": "title",
              "content": "상품 이름이 들어가는 영역입니다",
              "textStyle": "{component.card.default.main-titleStyle}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "title"
            },
            {
              "kind": "group",
              "id": "price-cta-row",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.md}",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "group",
                  "id": "price-group",
                  "layout": {
                    "mode": "HORIZONTAL",
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "MIN",
                    "counterAxisAlignItems": "CENTER",
                    "paddingTop": "{foundation.dimension.spacing.none}",
                    "paddingBottom": "{foundation.dimension.spacing.none}",
                    "paddingLeft": "{foundation.dimension.spacing.none}",
                    "paddingRight": "{foundation.dimension.spacing.none}",
                    "itemSpacing": "{foundation.dimension.spacing.sm}",
                    "width": "HUG",
                    "height": "HUG"
                  },
                  "visual": {
                    "cornerRadius": 0,
                    "fill": null,
                    "stroke": null,
                    "shadow": null
                  },
                  "children": [
                    {
                      "kind": "text",
                      "id": "discount-rate",
                      "content": "30%",
                      "textStyle": "{semantic.typography.hero-headline}",
                      "color": "{semantic.color.text.emphasis}",
                      "exposeAs": "discount-rate"
                    },
                    {
                      "kind": "text",
                      "id": "final-price",
                      "content": "35,000원",
                      "textStyle": "{semantic.typography.hero-headline}",
                      "color": "{semantic.color.text.primary}",
                      "exposeAs": "final-price"
                    },
                    {
                      "kind": "text",
                      "id": "original-price",
                      "content": "50,000원",
                      "textStyle": "{semantic.typography.price-original}",
                      "color": "{semantic.color.text.price-original}",
                      "exposeAs": "original-price"
                    }
                  ]
                },
                {
                  "kind": "ref",
                  "id": "coupon-btn",
                  "component": "atom/btn-inline",
                  "variant": {
                    "state": "default"
                  },
                  "props": {
                    "label": "쿠폰 받기"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/PRDD/recommend-list",
    "category": "ogn",
    "description": "추천 상품 리스트 — 섹션 헤더 + mol/card × 3 수직 나열.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "{foundation.dimension.size.screen-mobile}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "header",
              "content": "추천 상품",
              "textStyle": "{component.card.default.main-titleStyle}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "header"
            },
            {
              "kind": "ref",
              "id": "card-1",
              "component": "mol/card",
              "props": {
                "headline": "추천 상품 1",
                "description": "상품 설명 텍스트"
              }
            },
            {
              "kind": "ref",
              "id": "card-2",
              "component": "mol/card",
              "props": {
                "headline": "추천 상품 2",
                "description": "상품 설명 텍스트"
              }
            },
            {
              "kind": "ref",
              "id": "card-3",
              "component": "mol/card",
              "props": {
                "headline": "추천 상품 3",
                "description": "상품 설명 텍스트"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/answer-card",
    "category": "ogn",
    "description": "Answer Card — 검색 결과 안 1순위 노출되는 상태 기반 응답 카드. 외피 (surface.secondary 회색) + headline + status-summary (강조) + cta-row (button + 자세히 link). '이번 달 요금 73,500원' 류 즉시 응답 화면. 검색 도메인 전용 (mol/answer-card 에서 ogn 승격, 2026-05-01).",
    "_comment": "[UX] UXL_SCH_3 — 검색 결과 1순위 즉시 응답. 정책 F06.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{component.card.default.padding}",
        "paddingBottom": "{component.card.default.padding}",
        "paddingLeft": "{component.card.default.padding}",
        "paddingRight": "{component.card.default.padding}",
        "itemSpacing": "{foundation.dimension.spacing.sm}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{semantic.color.surface.secondary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "headline",
          "content": "이번 달 요금",
          "textStyle": "{semantic.typography.card-header-label}",
          "color": "{semantic.color.text.muted}",
          "exposeAs": "headline",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT"
        },
        {
          "kind": "text",
          "id": "status-summary",
          "content": "73,500원 (납부 예정 7월 25일)",
          "textStyle": "{semantic.typography.card-title}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "summary",
          "layoutAlign": "STRETCH",
          "autoResize": "HEIGHT"
        },
        {
          "kind": "group",
          "id": "cta-row",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "SPACE_BETWEEN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "cta",
              "component": "atom/btn-inline",
              "props": {
                "label": "바로 처리하기"
              }
            },
            {
              "kind": "ref",
              "id": "detail-link",
              "component": "atom/link",
              "props": {
                "label": "자세히"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/category-card",
    "category": "ogn",
    "description": "검색 제로결과 인기 카테고리 — label + mol/post-action-card × 2 (대체 탐색 동선). UXL_SCH_4 안내 우선. 외피 + content wrapper 패턴. quick-entry-card 와 시각 유사하나 의미 분리 (대체 탐색 vs 빠른 진입).",
    "_comment": "[UX] UXL_SCH_4 — 빈 결과 fallback 카테고리",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "label",
              "content": "인기 카테고리",
              "textStyle": "{semantic.typography.card-header-label}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "label"
            },
            {
              "kind": "ref",
              "id": "card-1",
              "component": "mol/post-action-card",
              "props": {
                "icon": "atom/icon/lightning",
                "headline": "요금제 둘러보기",
                "description": "5G·청년·시니어 요금제 비교"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "card-2",
              "component": "mol/post-action-card",
              "props": {
                "icon": "atom/icon/gift",
                "headline": "T멤버십 혜택",
                "description": "지금 사용 가능한 할인·이벤트"
              },
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/compare-tray",
    "category": "ogn",
    "description": "검색 결과 비교 모드 하단 sticky tray. 외피 + content wrapper 패턴 (DP § 4.3, sticky-footer-cta 와 동일 padding 으로 chrome 높이 일관). 선택 카운트 + 비교하기 버튼. 정책 F07.",
    "_comment": "[고지·사용성] F07 — 비교 진입 trigger (2~4 선택 시 활성)",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": "{component.card.default.shadow}"
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "SPACE_BETWEEN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "count",
              "content": "2개 선택됨",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "count"
            },
            {
              "kind": "ref",
              "id": "btn-compare",
              "component": "atom/btn",
              "variant": {
                "type": "primary",
                "state": "default"
              },
              "props": {
                "label": "비교하기"
              }
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/empty-hero",
    "category": "ogn",
    "description": "검색 제로결과 hero — center 정렬 (search-empty icon + headline + description). UXL_SCH_4 안내 우선 (단순 빈 화면 금지). 외피 + content wrapper 패턴.",
    "_comment": "[UX] UXL_SCH_4 — 빈 결과를 단순 noop 으로 두지 말고 hero 강조",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "CENTER",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.2xl}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "icon",
              "component": "atom/icon/search-empty"
            },
            {
              "kind": "text",
              "id": "headline",
              "content": "'존재하지 않는 검색어' 결과가 없어요",
              "textStyle": "{semantic.typography.card-title}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "headline",
              "layoutAlign": "STRETCH",
              "autoResize": "HEIGHT",
              "textAlignHorizontal": "CENTER"
            },
            {
              "kind": "text",
              "id": "description",
              "content": "다른 검색어로 시도하거나 아래에서 빠르게 찾아보세요",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "description",
              "layoutAlign": "STRETCH",
              "autoResize": "HEIGHT",
              "textAlignHorizontal": "CENTER"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/keyword-chips",
    "category": "ogn",
    "description": "검색어 chip 묶음 — header (라벨 + 선택적 link) + chip wrap. recent + similar 통합. variants type=recent|similar.\n\n⚠️ variant 별 valid props 키:\n  • type=recent  → props.label (= '최근 검색어'), clear-link visible (atom/link '전체 삭제'), chip-1~4 props\n  • type=similar → props.label (= '이런 검색어는 어떠세요'), clear-link hidden, chip-1~4 props\n\nempty 시 (recent 0개) → 사용처에서 mol/notice-card (variant=plain, '최근 검색어가 없습니다') 로 대체. loading 시 → atom/skeleton (shape=line) chip × 4 권장.",
    "_comment": "[UX] UXL_SCH_4 — 안내 우선 (단순 빈 화면 금지, 대체 검색어 제공)",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "header-row",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.md}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "text",
                  "id": "label",
                  "content": "최근 검색어",
                  "textStyle": "{semantic.typography.card-header-label}",
                  "color": "{semantic.color.text.secondary}",
                  "exposeAs": "label"
                },
                {
                  "kind": "ref",
                  "id": "clear-link",
                  "component": "atom/link",
                  "props": {
                    "label": "전체 삭제"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "chips-row",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.sm}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "chip-1",
                  "component": "atom/tag",
                  "variant": {
                    "type": "neutral"
                  },
                  "props": {
                    "label": "5G 요금제"
                  }
                },
                {
                  "kind": "ref",
                  "id": "chip-2",
                  "component": "atom/tag",
                  "variant": {
                    "type": "neutral"
                  },
                  "props": {
                    "label": "데이터 리필"
                  }
                },
                {
                  "kind": "ref",
                  "id": "chip-3",
                  "component": "atom/tag",
                  "variant": {
                    "type": "neutral"
                  },
                  "props": {
                    "label": "멤버십"
                  }
                },
                {
                  "kind": "ref",
                  "id": "chip-4",
                  "component": "atom/tag",
                  "variant": {
                    "type": "neutral"
                  },
                  "props": {
                    "label": "갤럭시"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "type",
          "values": [
            "recent",
            "similar"
          ]
        }
      ],
      "overrides": {
        "type=recent": {},
        "type=similar": {
          "children[content].children[header-row].children[clear-link].visible": false
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/popular-card",
    "category": "ogn",
    "description": "검색 진입 화면 인기 검색어 카드 — section-header + 회색 외피 카드 안 rank list 5 (1위만 body-bold 강조). 정책 F03 (1시간 단위 갱신). empty 시 (집계 미준비) → mol/notice-card (variant=plain) 로 대체. loading 시 → atom/skeleton (shape=line) × 5 행 권장.",
    "_comment": "[UX] UXL_SCH_3 — 비교·판단 보조 (사용자가 트렌드 파악 후 선택)",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "지금 인기 🔥",
                "description": "1시간마다 업데이트"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "rank-list",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{component.notice-card-list.default.padding}",
                "paddingBottom": "{component.notice-card-list.default.padding}",
                "paddingLeft": "{component.notice-card-list.default.padding}",
                "paddingRight": "{component.notice-card-list.default.padding}",
                "itemSpacing": "{component.notice-card-list.default.itemSpacing}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": "{component.notice-card-list.default.radius}",
                "fill": "{component.notice-card-list.default.fill}",
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "text",
                  "id": "rank-1",
                  "content": "1. 5G 프리미어 슈퍼",
                  "textStyle": "{semantic.typography.body-bold}",
                  "color": "{semantic.color.text.primary}",
                  "exposeAs": "rank-1",
                  "layoutAlign": "STRETCH",
                  "autoResize": "HEIGHT"
                },
                {
                  "kind": "text",
                  "id": "rank-2",
                  "content": "2. T멤버십 카페 혜택",
                  "textStyle": "{semantic.typography.body-medium}",
                  "color": "{semantic.color.text.primary}",
                  "exposeAs": "rank-2",
                  "layoutAlign": "STRETCH",
                  "autoResize": "HEIGHT"
                },
                {
                  "kind": "text",
                  "id": "rank-3",
                  "content": "3. 갤럭시 S24 Ultra",
                  "textStyle": "{semantic.typography.body-medium}",
                  "color": "{semantic.color.text.primary}",
                  "exposeAs": "rank-3",
                  "layoutAlign": "STRETCH",
                  "autoResize": "HEIGHT"
                },
                {
                  "kind": "text",
                  "id": "rank-4",
                  "content": "4. 데이터 리필",
                  "textStyle": "{semantic.typography.body-medium}",
                  "color": "{semantic.color.text.primary}",
                  "exposeAs": "rank-4",
                  "layoutAlign": "STRETCH",
                  "autoResize": "HEIGHT"
                },
                {
                  "kind": "text",
                  "id": "rank-5",
                  "content": "5. 청년 요금제 비교",
                  "textStyle": "{semantic.typography.body-medium}",
                  "color": "{semantic.color.text.primary}",
                  "exposeAs": "rank-5",
                  "layoutAlign": "STRETCH",
                  "autoResize": "HEIGHT"
                }
              ]
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/quick-action-card",
    "category": "ogn",
    "description": "Quick Action 카드 — 검색 결과 안 2순위 노출되는 바로 처리 카드. 외피 (card.default — 흰 카드 + shadow) + lightning icon + headline/description text-stack (inline) + button. text-stack inline — section-header instance baseline 충돌 회피 (post-action-card 와 동일 패턴). 검색 도메인 전용 (mol/quick-action-card 에서 ogn 승격, 2026-05-01).",
    "_comment": "[UX] UXL_SCH_3 — 검색 결과 2순위 바로 처리. 정책 F05.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{component.card.default.padding}",
        "paddingBottom": "{component.card.default.padding}",
        "paddingLeft": "{component.card.default.padding}",
        "paddingRight": "{component.card.default.padding}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": "{component.card.default.radius}",
        "fill": "{component.card.default.background}",
        "stroke": null,
        "shadow": "{component.card.default.shadow}"
      },
      "children": [
        {
          "kind": "ref",
          "id": "icon",
          "component": "atom/icon/lightning",
          "exposeAs": "icon"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "text",
              "id": "headline",
              "content": "데이터 리필 받기",
              "textStyle": "{component.card.default.main-titleStyle}",
              "color": "{semantic.color.text.primary}",
              "exposeAs": "headline",
              "layoutAlign": "STRETCH",
              "autoResize": "HEIGHT"
            },
            {
              "kind": "text",
              "id": "description",
              "content": "이번 달 데이터 리필권 1회 사용 가능",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "description",
              "layoutAlign": "STRETCH",
              "autoResize": "HEIGHT"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "cta",
          "component": "atom/btn",
          "variant": {
            "type": "secondary",
            "state": "default"
          },
          "props": {
            "label": "리필"
          }
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/quick-entry-card",
    "category": "ogn",
    "description": "검색 진입 화면 빠른 진입 4 카드 — section-header + mol/post-action-card × 4 (icon + headline + description). UXL_SCH_2 실행 우선 + UXL_SCH_6 행위 중심 명칭. 외피 + content wrapper 패턴.",
    "_comment": "[UX] UXL_SCH_2 — 검색 결과 탐색 전 자주 쓰는 액션 즉시 진입",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.md}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "header",
              "component": "mol/section-header",
              "props": {
                "headline": "빠른 진입",
                "description": "자주 사용하는 기능에 바로 접근하세요"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "card-1",
              "component": "mol/post-action-card",
              "props": {
                "icon": "atom/icon/lightning",
                "headline": "데이터 리필 받기",
                "description": "이번 달 리필권 1회 사용 가능"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "card-2",
              "component": "mol/post-action-card",
              "props": {
                "icon": "atom/icon/gift",
                "headline": "T멤버십 혜택",
                "description": "내 주변 사용처와 할인 안내"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "card-3",
              "component": "mol/post-action-card",
              "props": {
                "icon": "atom/icon/lock-closed",
                "headline": "비밀번호 변경",
                "description": "보안을 위해 90일마다 갱신 권장"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "card-4",
              "component": "mol/post-action-card",
              "props": {
                "icon": "atom/icon/user",
                "headline": "내 정보 확인",
                "description": "프로필·연락처·결제 정보"
              },
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/result-list",
    "category": "ogn",
    "description": "검색 결과 list 묶음 — atom/text-label (섹션 라벨) + mol/list-item × 2 baseline (정확일치 컨텐츠). 정통 룰 회복 (atom page 직접 박힘 X) 위해 추출 (2026-05-01). 화면 사용 — 'props.label' 로 라벨 분기 (정확일치 / 연관 결과). list-item 컨텐츠는 baseline 그대로 노출되며 화면별로 다른 컨텐츠 필요 시 Figma 단 instance override 로 디자이너가 직접 변경.",
    "_comment": "[UX] UXL_SCH_3 — 검색 결과 카테고리별 list (정확일치 / 연관 결과). 정책 F04.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "label",
              "component": "atom/text-label",
              "props": {
                "label": "정확일치"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "list-item-1",
              "component": "mol/list-item",
              "variant": {
                "thumb": "square"
              },
              "props": {
                "title": "5G 프리미어 슈퍼",
                "sub": "월 89,000원 / 데이터 무제한",
                "label": "상세"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "list-item-2",
              "component": "mol/list-item",
              "variant": {
                "thumb": "square"
              },
              "props": {
                "title": "5G 슈퍼",
                "sub": "월 75,000원 / 데이터 무제한 (속도 제한)",
                "label": "상세"
              },
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/search-bar",
    "category": "ogn",
    "description": "검색 입력창 chrome — 외피 + content wrapper 패턴 (DP § 4.3). 외피는 chrome margin (좌우 24 + 상하 8), content 는 pill radius 둥근 입력창 (icon + text + clear). 검색 use case 의 chrome 위치 (page 직접 박힘 OK, DP § 4.4). (mol/search-bar 에서 ogn 승격 — 검색 도메인 chrome).",
    "_comment": "[UX] UXL_SCH_1 — 검색어 입력 진입점. SCH 도메인 전용 chrome.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.sm}",
        "paddingBottom": "{foundation.dimension.spacing.sm}",
        "paddingLeft": "{semantic.layout.screen-padding-default}",
        "paddingRight": "{semantic.layout.screen-padding-default}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "input-box",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.md}",
            "paddingBottom": "{foundation.dimension.spacing.md}",
            "paddingLeft": "{foundation.dimension.spacing.md}",
            "paddingRight": "{foundation.dimension.spacing.md}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": "{foundation.dimension.radius.pill}",
            "fill": "{semantic.color.surface.secondary}",
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "icon-search",
              "component": "atom/icon/search"
            },
            {
              "kind": "text",
              "id": "placeholder",
              "content": "무엇이든 검색해 주세요",
              "textStyle": "{semantic.typography.body-medium}",
              "color": "{semantic.color.text.muted}",
              "exposeAs": "placeholder",
              "layoutGrow": 1,
              "autoResize": "NONE"
            },
            {
              "kind": "ref",
              "id": "icon-clear",
              "component": "atom/icon/x-circle"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/SCH/tabs",
    "category": "ogn",
    "description": "검색 결과 탭 — atom/tab-item × 4 (전체 / 상품 / 혜택 / FAQ). 정책서 § 3.2 F04 — 7 탭 중 자주 쓰는 4 탭 sample. variants active=0/1/2/3 으로 활성 탭 분기.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "{component.tab.default.height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "tab-all",
          "component": "atom/tab-item",
          "variant": {
            "state": "active"
          },
          "props": {
            "label": "전체"
          },
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "tab-product",
          "component": "atom/tab-item",
          "variant": {
            "state": "default"
          },
          "props": {
            "label": "상품"
          },
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "tab-benefit",
          "component": "atom/tab-item",
          "variant": {
            "state": "default"
          },
          "props": {
            "label": "혜택"
          },
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "tab-faq",
          "component": "atom/tab-item",
          "variant": {
            "state": "default"
          },
          "props": {
            "label": "FAQ"
          },
          "layoutGrow": 1
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "active",
          "values": [
            "0",
            "1",
            "2",
            "3"
          ]
        }
      ],
      "overrides": {
        "active=0": {},
        "active=1": {
          "children[tab-all].variant": {
            "state": "default"
          },
          "children[tab-product].variant": {
            "state": "active"
          }
        },
        "active=2": {
          "children[tab-all].variant": {
            "state": "default"
          },
          "children[tab-benefit].variant": {
            "state": "active"
          }
        },
        "active=3": {
          "children[tab-all].variant": {
            "state": "default"
          },
          "children[tab-faq].variant": {
            "state": "active"
          }
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/snack-bar",
    "category": "ogn",
    "description": "하단 플로팅 토스트. 외피 padding 12 (좌우상하) + inner dark bubble (surface.tooltip, radius sm). 외피·bubble 모두 width fill / height hug.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.md}",
        "paddingRight": "{foundation.dimension.spacing.md}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "bubble",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.md}",
            "paddingBottom": "{foundation.dimension.spacing.md}",
            "paddingLeft": "{foundation.dimension.spacing.lg}",
            "paddingRight": "{foundation.dimension.spacing.lg}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": "{foundation.dimension.radius.sm}",
            "fill": "{semantic.color.surface.tooltip}",
            "stroke": null,
            "shadow": "{foundation.shadow.md}"
          },
          "children": [
            {
              "kind": "text",
              "id": "message",
              "content": "스낵바 메시지",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.on-dark}",
              "layoutGrow": 1,
              "exposeAs": "message",
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/status-bar",
    "category": "ogn",
    "description": "iOS 상태 바 — 시간 (좌) / signal·wifi·battery (우). skeleton 아이콘 사용 중.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": 12,
        "paddingBottom": 8,
        "paddingLeft": "{foundation.dimension.spacing.xl}",
        "paddingRight": "{foundation.dimension.spacing.xl}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": 44
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "time",
          "content": "7:28",
          "textStyle": "{semantic.typography.body-medium}",
          "color": "{semantic.color.text.primary}",
          "exposeAs": "time"
        },
        {
          "kind": "group",
          "id": "icons",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": "HUG",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "signal",
              "component": "atom/icon/signal"
            },
            {
              "kind": "ref",
              "id": "wifi",
              "component": "atom/icon/wifi"
            },
            {
              "kind": "ref",
              "id": "battery",
              "component": "atom/icon/battery"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/step-indicator",
    "category": "ogn",
    "description": "진행 단계 표시 chrome — 'N / M' 텍스트. 회원가입·탈퇴·휴면해제·재가입 등 다단계 흐름의 화면 상단 chrome 자리. label prop 으로 단계 텍스트 주입. (mol/step-indicator 에서 ogn 승격 — page 직접 박힘 chrome 격, DP § 4.4)",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.sm}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{semantic.layout.screen-padding-default}",
        "paddingRight": "{semantic.layout.screen-padding-default}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "height": "HUG",
        "width": "FILL"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": null,
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "text",
          "id": "label",
          "content": "1 / 4",
          "textStyle": "{semantic.typography.sub-label}",
          "color": "{semantic.color.brand.primary}",
          "exposeAs": "label"
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/sticky-footer",
    "category": "ogn",
    "description": "하단 고정 영역 중립 컨테이너. SPACE_BETWEEN 으로 left/right 2 slot placeholder. 사용처에서 slot 에 btn-icon / btn 등 조합.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "SPACE_BETWEEN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.md}",
        "paddingBottom": "{foundation.dimension.spacing.md}",
        "paddingLeft": "{foundation.dimension.spacing.lg}",
        "paddingRight": "{foundation.dimension.spacing.lg}",
        "itemSpacing": "{foundation.dimension.spacing.md}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "height": "{foundation.dimension.size.sticky-footer-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "left-slot",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "{foundation.dimension.size.icon-container}",
            "height": "{foundation.dimension.size.icon-container}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": []
        },
        {
          "kind": "group",
          "id": "right-slot",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "{foundation.dimension.size.icon-container}",
            "height": "{foundation.dimension.size.icon-container}"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": []
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/sticky-footer-cta",
    "category": "ogn",
    "description": "하단 고정 CTA. variants 로 버튼 패턴 분기 — single(원버튼 primary 만) / with-icons(보조 icon × 2 + primary) / pair(취소 secondary + 확인 primary). 페이지마다 props 로 icon · label override.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "AUTO",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "HUG"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.surface.primary}",
        "stroke": {
          "color": "{semantic.color.border.subtle}",
          "weight": 1
        },
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "HORIZONTAL",
            "primaryAxisSizingMode": "FIXED",
            "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.sm}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "left-actions",
              "layout": {
                "mode": "HORIZONTAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "CENTER",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.none}",
                "paddingRight": "{foundation.dimension.spacing.none}",
                "itemSpacing": "{foundation.dimension.spacing.xs}",
                "width": "HUG",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "btn-icon-1",
                  "component": "atom/btn-icon",
                  "variant": {
                    "state": "default"
                  },
                  "props": {
                    "icon": "atom/icon/heart"
                  }
                },
                {
                  "kind": "ref",
                  "id": "btn-icon-2",
                  "component": "atom/btn-icon",
                  "variant": {
                    "state": "default"
                  },
                  "props": {
                    "icon": "atom/icon/gift"
                  }
                }
              ]
            },
            {
              "kind": "ref",
              "id": "btn-cta",
              "component": "atom/btn",
              "variant": {
                "type": "primary",
                "state": "default"
              },
              "props": {
                "label": "확인"
              },
              "layoutGrow": 1
            }
          ]
        }
      ]
    },
    "variants": {
      "axes": [
        {
          "name": "pattern",
          "values": [
            "single",
            "with-icons",
            "pair"
          ]
        }
      ],
      "overrides": {
        "pattern=single": {
          "children[content].children": [
            {
              "kind": "ref",
              "id": "btn-cta",
              "component": "atom/btn",
              "variant": {
                "type": "primary",
                "state": "default"
              },
              "props": {
                "label": "확인"
              },
              "layoutGrow": 1
            }
          ]
        },
        "pattern=with-icons": {},
        "pattern=pair": {
          "children[content].children": [
            {
              "kind": "ref",
              "id": "btn-cancel",
              "component": "atom/btn",
              "variant": {
                "type": "secondary",
                "state": "default"
              },
              "props": {
                "label": "취소"
              },
              "layoutGrow": 1
            },
            {
              "kind": "ref",
              "id": "btn-confirm",
              "component": "atom/btn",
              "variant": {
                "type": "primary",
                "state": "default"
              },
              "props": {
                "label": "확인"
              },
              "layoutGrow": 1
            }
          ]
        }
      }
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "ogn/tab-bar",
    "category": "ogn",
    "description": "하단 탭 바 — MY(활성) / 검색 / 쇼핑. 아이콘 색상은 import 시 brand 바인딩, 라벨만 active/muted 구분.",
    "base": {
      "layout": {
        "mode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.sm}",
        "paddingBottom": "{foundation.dimension.spacing.2xl}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "FILL",
        "height": "{component.tab-bar.default.height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{component.tab-bar.default.background}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "group",
          "id": "tab-my",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": 100,
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "icon-my",
              "component": "atom/icon/home-fill"
            },
            {
              "kind": "text",
              "id": "label-my",
              "content": "MY",
              "textStyle": "{component.tab-bar.default.labelStyle}",
              "color": "{component.tab-bar.default.iconActive}",
              "exposeAs": "label-my"
            }
          ]
        },
        {
          "kind": "group",
          "id": "tab-search",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": 100,
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "icon-search",
              "component": "atom/icon/search"
            },
            {
              "kind": "text",
              "id": "label-search",
              "content": "검색",
              "textStyle": "{component.tab-bar.default.labelStyle}",
              "color": "{component.tab-bar.default.iconDefault}",
              "exposeAs": "label-search"
            }
          ]
        },
        {
          "kind": "group",
          "id": "tab-shop",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.xs}",
            "width": 100,
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "icon-shop",
              "component": "atom/icon/bag"
            },
            {
              "kind": "text",
              "id": "label-shop",
              "content": "쇼핑",
              "textStyle": "{component.tab-bar.default.labelStyle}",
              "color": "{component.tab-bar.default.iconDefault}",
              "exposeAs": "label-shop"
            }
          ]
        }
      ]
    },
    "widthFallback": "{foundation.dimension.size.screen-mobile}"
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/signup-terms",
    "category": "page",
    "description": "회원 가입 1/5 — 약관 동의. POL-MBR-TERM-001. Pattern B (DP § 9.1.1) — page content padding 0 + ogn 자체 padding 24. 14세 미만 분기는 BottomSheet.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "회원 가입"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "1 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "약관에 동의해 주세요",
                    "description": "서비스 이용을 위해 필수 약관에 동의가 필요합니다."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "term-list",
              "component": "ogn/MBR/term-list",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-TERM-001-01,02,06,08,11"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS",
          "_comment": "[고지·필수] 전기통신사업법 § 22-2"
        }
      ]
    },
    "_layout_row": 0,
    "_layout_col": 0
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/signup-info",
    "category": "page",
    "description": "회원 가입 2/5 — 개인정보 입력. POL-MBR-INFO-001~003. Pattern B — page content padding 0 + ogn/wrap padding 24.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "회원 가입"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "2 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "기본 정보를 입력해 주세요",
                    "description": "본인 확인을 위해 정확하게 입력해 주세요."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "info-input",
              "component": "ogn/MBR/info-input",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-INFO-001/002/003"
            },
            {
              "kind": "group",
              "id": "purpose-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "purpose-notice",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "plain"
                  },
                  "props": {
                    "message": "입력하신 정보는 회원 식별과 서비스 제공 목적으로 사용됩니다."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-INFO-001 — 수집 목적 안내"
                }
              ]
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 0,
    "_layout_col": 1
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/signup-auth",
    "category": "page",
    "description": "회원 가입 3/5 — 본인인증. POL-MBR-AUTH-001~007. Pattern B.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "회원 가입"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "3 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.lg}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "본인인증을 진행해 주세요",
                    "description": "안전한 가입을 위해 본인 확인이 필요합니다."
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "auth-notice",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "plain"
                  },
                  "props": {
                    "message": "선택한 수단으로 본인 확인을 진행합니다."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-AUTH-001"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "auth-method-list",
              "component": "ogn/MBR/auth-method-list",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-AUTH-002 — 인증수단 노출 순서"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "인증"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 0,
    "_layout_col": 2
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/signup-loading",
    "category": "page",
    "description": "회원 가입 4/5 — BSS 검증·생성 처리 중. PR-MBR-CS-001-04 + PR-005 자동. ogn/MBR/loading-screen full-screen. back 차단. 결과에 따라 signup-complete 또는 BottomSheet 분기.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "loading",
          "component": "ogn/MBR/loading-screen",
          "props": {
            "headline": "회원 가입을 처리하고 있어요",
            "description": "잠시만 기다려 주세요"
          },
          "layoutAlign": "STRETCH",
          "layoutGrow": 1
        }
      ]
    },
    "_layout_row": 0,
    "_layout_col": 3
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/signup-complete",
    "category": "page",
    "description": "회원 가입 5/5 — 가입 완료. FN-JOIN-005 + POL-SESS-001 자동 로그인. 환영 톤 result-summary + 후속 액션 카드 3 + 홈으로 CTA.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "result",
              "component": "ogn/MBR/result-summary",
              "variant": {
                "tone": "welcome"
              },
              "props": {
                "headline": "환영합니다, 회원이 되셨습니다",
                "description": "이제 NC 의 모든 서비스를 이용하실 수 있습니다."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "post-actions",
              "component": "ogn/MBR/post-actions",
              "layoutAlign": "STRETCH",
              "_comment": "후속 액션 baseline = 가입 케이스 (내 정보 점검 / 마케팅 설정 / 첫 혜택)"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "홈으로"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 0,
    "_layout_col": 4
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/dormant-auth",
    "category": "page",
    "description": "휴면 해제 1/3 — 본인인증. PR-MBR-CS-002-03. Pattern B.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "휴면 해제"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "1 / 3"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "본인인증을 진행해 주세요",
                    "description": "휴면 해제를 위해 본인 확인이 필요합니다."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "auth-method-list",
              "component": "ogn/MBR/auth-method-list",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-AUTH-001/002"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "인증"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 1,
    "_layout_col": 0
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/dormant-terms",
    "category": "page",
    "description": "휴면 해제 2/3 — 약관 재동의. POL-TERM-001-03. Pattern B.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "휴면 해제"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "2 / 3"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.lg}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "약관이 일부 개정되었어요",
                    "description": "서비스 이용을 재개하기 위해 변경된 약관을 다시 확인해 주세요."
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "revision-notice",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "message"
                  },
                  "props": {
                    "message": "휴면 기간 동안 일부 필수 약관이 개정되었습니다."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-TERM-001-03,12"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "term-list",
              "component": "ogn/MBR/term-list",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-TERM-001-03"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "완료"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 1,
    "_layout_col": 1
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/dormant-loading",
    "category": "page",
    "description": "휴면 해제 처리 중. PR-MBR-CS-002-05 BSS 자동 — FN-DORM-003 + 분리보관 데이터 복원. 차분 톤 loading.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "loading",
          "component": "ogn/MBR/loading-screen",
          "props": {
            "headline": "휴면을 해제하고 있어요",
            "description": "분리 보관된 정보를 복원하는 중입니다."
          },
          "layoutAlign": "STRETCH",
          "layoutGrow": 1
        }
      ]
    },
    "_layout_row": 1,
    "_layout_col": 2
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/dormant-complete",
    "category": "page",
    "description": "휴면 해제 완료. FN-DORM-004. re-welcome 톤 + 복원 범위 안내 + 후속 액션 (내 정보 점검).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "result",
              "component": "ogn/MBR/result-summary",
              "variant": {
                "tone": "re-welcome"
              },
              "props": {
                "headline": "다시 돌아오신 것을 환영합니다",
                "description": "정상 이용이 재개되었습니다. 이전 정보를 확인해 보세요."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "scope-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.lg}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "scope-card",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "message"
                  },
                  "props": {
                    "message": "회원 정보, 이전 이용 내역, 일부 혜택이 복원되었습니다."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·사용성] FN-MBR-DORM-004 — 복원 범위 안내"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "post-actions",
              "component": "ogn/MBR/post-actions",
              "layoutAlign": "STRETCH",
              "_comment": "후속 액션 — figma 시점 카드 텍스트 변경 (내 정보 점검 위주)"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "홈으로"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 1,
    "_layout_col": 3
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/leave-auth",
    "category": "page",
    "description": "회원 탈퇴 1/5 — 본인인증 (고위험 추가 인증). POL-MBR-AUTH-008. Pattern B.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "회원 탈퇴"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "1 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.lg}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "본인인증이 필요해요",
                    "description": "고객 보호를 위해 추가 인증을 진행합니다."
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "high-risk-warn",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "emphasis"
                  },
                  "props": {
                    "message": "탈퇴는 고객 보호를 위해 추가 본인 확인이 필요해요."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-AUTH-008 — 고위험 업무 추가 인증"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "auth-method-list",
              "component": "ogn/MBR/auth-method-list",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-AUTH-002"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "인증"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 2,
    "_layout_col": 0
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/leave-reason",
    "category": "page",
    "description": "회원 탈퇴 2/5 — 사유 입력. POL-MBR-LEAVE-001. Pattern B. 5 사유 (mol/checkbox-item input=radio) + 직접 입력 form-row.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "회원 탈퇴"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "2 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "탈퇴 사유를 알려주세요",
                    "description": "더 나은 서비스를 만드는 데 도움이 됩니다."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "group",
              "id": "reason-list",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{component.checkbox-list.default.paddingY}",
                "paddingBottom": "{component.checkbox-list.default.paddingY}",
                "paddingLeft": "{component.checkbox-list.default.paddingX}",
                "paddingRight": "{component.checkbox-list.default.paddingX}",
                "itemSpacing": "{component.checkbox-list.default.itemSpacing}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "reason-1",
                  "component": "mol/checkbox-item",
                  "variant": {
                    "input": "radio",
                    "tone": "none",
                    "action": "without"
                  },
                  "props": {
                    "label": "사용 빈도가 낮아요"
                  }
                },
                {
                  "kind": "ref",
                  "id": "reason-2",
                  "component": "mol/checkbox-item",
                  "variant": {
                    "input": "radio",
                    "tone": "none",
                    "action": "without"
                  },
                  "props": {
                    "label": "다른 서비스를 이용해요"
                  }
                },
                {
                  "kind": "ref",
                  "id": "reason-3",
                  "component": "mol/checkbox-item",
                  "variant": {
                    "input": "radio",
                    "tone": "none",
                    "action": "without"
                  },
                  "props": {
                    "label": "개인정보가 우려돼요"
                  }
                },
                {
                  "kind": "ref",
                  "id": "reason-4",
                  "component": "mol/checkbox-item",
                  "variant": {
                    "input": "radio",
                    "tone": "none",
                    "action": "without"
                  },
                  "props": {
                    "label": "서비스 만족도가 낮아요"
                  }
                },
                {
                  "kind": "ref",
                  "id": "reason-5",
                  "component": "mol/checkbox-item",
                  "variant": {
                    "input": "radio",
                    "tone": "none",
                    "action": "without"
                  },
                  "props": {
                    "label": "기타"
                  }
                },
                {
                  "kind": "ref",
                  "id": "etc-text-area",
                  "component": "atom/text-area",
                  "layoutAlign": "STRETCH",
                  "_comment": "기타 선택 시 visible. POL-LEAVE-001 기타 의견 자유 서술"
                }
              ],
              "_comment": "[고지·필수] POL-MBR-LEAVE-001"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 2,
    "_layout_col": 1
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/leave-impact",
    "category": "page",
    "description": "회원 탈퇴 3/5 — 영향 안내. FN-LEAVE-001/002 + POL-LEAVE-002~006. ogn/MBR/leave-impact-list (자산/연계/보관) + 확인 체크.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "회원 탈퇴"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "3 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "탈퇴 전 꼭 확인해 주세요",
                    "description": "탈퇴 시 다음 정보가 소멸되거나 보관됩니다."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "impact-list",
              "component": "ogn/MBR/leave-impact-list",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-LEAVE-004/005/010 — 자산 소멸 / 연계 영향 / 데이터 보관"
            },
            {
              "kind": "group",
              "id": "confirm-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "confirm-check",
                  "component": "mol/checkbox-item",
                  "variant": {
                    "input": "checkbox",
                    "tone": "none",
                    "action": "without"
                  },
                  "props": {
                    "label": "위 내용을 모두 확인했습니다"
                  },
                  "_comment": "[고지·필수] POL-MBR-LEAVE-006 — 영향 안내 확인 증적"
                }
              ]
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 2,
    "_layout_col": 2
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/leave-confirm",
    "category": "page",
    "description": "회원 탈퇴 4/5 — 최종 동의. POL-LEAVE-007. Pattern B.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "회원 탈퇴"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "4 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "정말 탈퇴하시겠어요?",
                    "description": "탈퇴 후 7일 이내 철회하지 않으면 모든 자격이 종료됩니다."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "confirm-card",
              "component": "ogn/MBR/leave-confirm-card",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-LEAVE-007/011"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "탈퇴 확정"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 2,
    "_layout_col": 3
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/leave-loading",
    "category": "page",
    "description": "회원 탈퇴 처리 중. PR-MBR-CS-003-05 BSS 자동 — FN-LEAVE-005 + POL-LEAVE-009 세션·토큰 종료. 차분 톤.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "loading",
          "component": "ogn/MBR/loading-screen",
          "props": {
            "headline": "탈퇴를 처리하고 있어요",
            "description": "잠시만 기다려 주세요."
          },
          "layoutAlign": "STRETCH",
          "layoutGrow": 1
        }
      ]
    },
    "_layout_row": 2,
    "_layout_col": 4
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/leave-complete",
    "category": "page",
    "description": "회원 탈퇴 완료. FN-LEAVE-006 + TM-029 7일 유예 + POL-LEAVE-011. calm 톤 result-summary + 철회 안내 카드 + 보관 안내 + 2 CTA ([철회하기] / [확인]).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "result",
              "component": "ogn/MBR/result-summary",
              "variant": {
                "tone": "calm"
              },
              "props": {
                "headline": "탈퇴가 완료되었습니다",
                "description": "유예 종료일까지 탈퇴를 철회하실 수 있습니다.",
                "sub-info": "유예 종료까지 D-7"
              },
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-LEAVE-011 / TM-MBR-029 — 7일 유예 + 철회 가능"
            },
            {
              "kind": "group",
              "id": "notice-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.lg}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.md}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "recall-notice",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "message"
                  },
                  "props": {
                    "message": "그 전까지 1:1 문의로 탈퇴를 철회하실 수 있어요."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-LEAVE-011 — 철회 가능 조건 / 채널"
                },
                {
                  "kind": "ref",
                  "id": "data-notice",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "message"
                  },
                  "props": {
                    "message": "일부 데이터는 법령에 따라 정해진 기간 동안 보관됩니다."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-LEAVE-010 — 데이터 보관·파기"
                }
              ]
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "확인"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS",
          "_comment": "[고지·필수] POL-MBR-LEAVE-012 — 후속 문의 경로 강조"
        }
      ]
    },
    "_layout_row": 2,
    "_layout_col": 5
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/rejoin-auth",
    "category": "page",
    "description": "재가입 1/5 — 본인인증. PR-MBR-CS-004-01. Pattern B.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "재가입"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "1 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.lg}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "다시 만나기 전, 본인인증을 진행해 주세요",
                    "description": "이전 가입 이력이 확인되었어요."
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "history-notice",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "plain"
                  },
                  "props": {
                    "message": "본인 확인 후 다시 가입을 진행해 주세요."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·사용성] FN-MBR-REJOIN-001"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "auth-method-list",
              "component": "ogn/MBR/auth-method-list",
              "layoutAlign": "STRETCH"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "인증"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 3,
    "_layout_col": 0
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/rejoin-blocked",
    "category": "page",
    "description": "재가입 분기 — 제한 안내. POL-REJOIN-002/003. warning 톤 result-summary + 사유 카드 + 예외 안내 + 2 CTA ([고객센터] / [홈으로]).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "재가입"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "result",
              "component": "ogn/MBR/result-summary",
              "variant": {
                "tone": "warning"
              },
              "props": {
                "headline": "재가입이 어려워요",
                "description": "아래 사유로 인해 재가입이 제한되었습니다."
              },
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-REJOIN-002 — 재가입 가능 / 불가 안내"
            },
            {
              "kind": "group",
              "id": "reason-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.lg}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.md}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "reason-card",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "emphasis"
                  },
                  "props": {
                    "message": "탈퇴 후 30일 미경과로 재가입이 제한됩니다. 종료일: 2026-06-01"
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-REJOIN-003 — 제한 대상·기준·기간"
                },
                {
                  "kind": "ref",
                  "id": "exception-card",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "message"
                  },
                  "props": {
                    "message": "특별한 사유가 있다면 고객센터에 문의해 주세요."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·사용성] POL-MBR-REJOIN-003 — 예외 승인 안내"
                }
              ]
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "홈으로"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 3,
    "_layout_col": 1
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/rejoin-info",
    "category": "page",
    "description": "재가입 2/5 — 정보 입력 (약관 분리됨). POL-INFO-004. Pattern B. 이력 복원 안내 + 기존 정보 표시 (mol/info-row × 3).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "재가입"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "2 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "main-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.lg}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "정보를 확인해 주세요",
                    "description": "이전 사용 정보 일부를 그대로 사용하실 수 있어요."
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "restore-notice",
                  "component": "mol/notice-card",
                  "variant": {
                    "type": "message"
                  },
                  "props": {
                    "message": "다음 정보는 이전 가입 정보에서 자동 복원됩니다. 변경하려면 [수정] 을 눌러주세요."
                  },
                  "layoutAlign": "STRETCH",
                  "_comment": "[고지·필수] POL-MBR-INFO-004"
                },
                {
                  "kind": "ref",
                  "id": "row-name",
                  "component": "mol/info-row",
                  "props": {
                    "label": "이름",
                    "value": "홍길동"
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "row-email",
                  "component": "mol/info-row",
                  "props": {
                    "label": "이메일",
                    "value": "user@example.com"
                  },
                  "layoutAlign": "STRETCH"
                },
                {
                  "kind": "ref",
                  "id": "row-phone",
                  "component": "mol/info-row",
                  "props": {
                    "label": "휴대폰 번호",
                    "value": "010-XXXX-XXXX"
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 3,
    "_layout_col": 2
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/rejoin-terms",
    "category": "page",
    "description": "재가입 3/5 — 약관 동의. POL-TERM-001-04,05. Pattern B.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "재가입"
          }
        },
        {
          "kind": "ref",
          "id": "step",
          "component": "ogn/step-indicator",
          "props": {
            "label": "3 / 5"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "headline-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{semantic.layout.screen-padding-default}",
                "paddingRight": "{semantic.layout.screen-padding-default}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "section-headline",
                  "component": "mol/section-header",
                  "props": {
                    "headline": "약관에 동의해 주세요",
                    "description": "다시 만나기 전 재가입 약관을 확인해 주세요."
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "term-list",
              "component": "ogn/MBR/term-list",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] POL-MBR-TERM-001-04,05"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "재가입 완료"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 3,
    "_layout_col": 3
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/rejoin-loading",
    "category": "page",
    "description": "재가입 처리 중. PR-MBR-CS-004-05 BSS 자동 — FN-REJOIN-005 계정 복원/신규 생성 + 식별정보 재연결. 환영 톤.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "loading",
          "component": "ogn/MBR/loading-screen",
          "props": {
            "headline": "재가입을 처리하고 있어요",
            "description": "이전 정보를 복원하는 중입니다."
          },
          "layoutAlign": "STRETCH",
          "layoutGrow": 1
        }
      ]
    },
    "_layout_row": 3,
    "_layout_col": 4
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MBR/rejoin-complete",
    "category": "page",
    "description": "재가입 완료. FN-REJOIN-006. re-welcome 톤 + 연계/제외 항목 (ogn/MBR/restored-summary) + 후속 액션.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.none}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "result",
              "component": "ogn/MBR/result-summary",
              "variant": {
                "tone": "re-welcome"
              },
              "props": {
                "headline": "다시 만나서 반갑습니다",
                "description": "이전 이용 정보 일부가 복원되었습니다."
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "restored",
              "component": "ogn/MBR/restored-summary",
              "layoutAlign": "STRETCH",
              "_comment": "[고지·필수] FN-MBR-REJOIN-006 — 연계 / 제외 항목"
            },
            {
              "kind": "ref",
              "id": "post-actions",
              "component": "ogn/MBR/post-actions",
              "layoutAlign": "STRETCH",
              "_comment": "후속 액션 — figma 시점 카드 텍스트 변경 (내 정보 확인 / 첫 혜택)"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "sticky-footer",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "홈으로"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    },
    "_layout_row": 3,
    "_layout_col": 5
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/bill-detail",
    "category": "page",
    "description": "청구 상세 + 변동 사유 — 탭 2 (항목/변동). US-BIL-CHK-002. ogn/tab + bill-detail-list + bill-variation-list 양쪽 표시 (실제 노출은 page-level state). sticky-footer 로 [납부하기] 진입.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "청구 상세 (11월)"
          }
        },
        {
          "kind": "ref",
          "id": "tabs",
          "component": "ogn/tab",
          "variant": {
            "active": "0"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "detail-list",
              "component": "ogn/BIL/bill-detail-list",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "variation-list",
              "component": "ogn/BIL/bill-variation-list",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "납부하기"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/bill-document",
    "category": "page",
    "description": "요금안내서 (월별 리스트). US-BIL-CHK-005. ogn/BIL/bill-document-list + 수신 설정 변경 link.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "요금안내서"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "document-list",
              "component": "ogn/BIL/bill-document-list",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "setting-link",
              "component": "atom/link",
              "props": {
                "label": "수신 설정 변경"
              }
            }
          ]
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/bill-summary",
    "category": "page",
    "description": "BIL 모듈 홈/메인 — 청구 요약 + 다음 행동 카드 4개. US-BIL-CHK-001. status-bar + GNB + bill-summary-card + post-action-card × 4 + footer-cs. 톤: 친절·간결 (정상) / 경고·강 (미납).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-home}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "gnb",
          "component": "ogn/gnb"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "summary-card-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "summary-card",
                  "component": "ogn/BIL/bill-summary-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-pay-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-pay",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "납부하기",
                    "description": "납부 대상을 선택해 결제하실 수 있어요"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-detail-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-detail",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "청구 상세 보기",
                    "description": "항목별 금액과 변동 사유 확인"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-history-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-history",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "납부 이력",
                    "description": "영수증·증빙 발급 가능"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-resolved-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-resolved",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "미납 해소 확인",
                    "description": "정지 해제 상태 확인"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-confirm",
    "category": "page",
    "description": "납부 최종 확인. US-BIL-PAY-001 step 3. mol/total-amount + 수단 요약 + 약관 + sticky CTA 납부하기.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부 확인"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "confirm-card-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "confirm-card",
                  "component": "ogn/BIL/payment-confirm-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "납부하기"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-delegate",
    "category": "page",
    "description": "대리 납부 실행 결과. US-BIL-PAY-005. ogn/BIL/payment-result-card (variant=success) + 분리 기록 표 (mol/info-row × 4).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "대리 납부 완료"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "result-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "result",
                  "component": "ogn/BIL/payment-result-card",
                  "variant": {
                    "state": "success"
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "group",
              "id": "record-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "record",
                  "component": "ogn/BIL/delegate-record-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "확인"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-delegate-auth",
    "category": "page",
    "description": "대리 납부 권한 확인 (대상 선택). US-BIL-PAY-004. ogn/BIL/delegate-target-list + sticky CTA 다음.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "대리 납부"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "target-list",
              "component": "ogn/BIL/delegate-target-list",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-failure",
    "category": "page",
    "description": "납부 실패 후속 처리. US-BIL-PAY-008. ogn/BIL/payment-failure-card + 후속 액션 (재시도 / 다른 수단 / 환불 요청). 톤: 경고·강. footer-cs 강조.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부 실패"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "failure-card-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "failure-card",
                  "component": "ogn/BIL/payment-failure-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-retry-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-retry",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "재시도",
                    "description": "같은 수단으로 다시 시도"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-other-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-other",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "다른 수단으로 납부",
                    "description": "수단 선택 화면 이동"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-refund-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-refund",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "환불 요청",
                    "description": "중복·과오납 환불 진입"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-history",
    "category": "page",
    "description": "납부 이력. US-BIL-CHK-007. 필터 (기간/상태) + payment-history-item × N. 행 tap → 증빙 발급 BS 진입.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부 이력"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "history-list",
              "component": "ogn/BIL/payment-history-list",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-immediate",
    "category": "page",
    "description": "즉시 납부 결과 (variant: success). US-BIL-PAY-002. ogn/BIL/payment-result-card + 후속 액션 (영수증 / 미납 해소). loading 단계는 별도 (ogn/loading-screen 재사용 또는 동일 페이지에 spinner).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부 결과"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "result-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "result",
                  "component": "ogn/BIL/payment-result-card",
                  "variant": {
                    "state": "success"
                  },
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-receipt-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-receipt",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "영수증 보기",
                    "description": "납부 영수증·증빙 발급"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-resolved-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-resolved",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "미납 해소 확인",
                    "description": "정지 해제 상태 확인"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "확인"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-method",
    "category": "page",
    "description": "납부수단 선택. US-BIL-PAY-001. ogn/BIL/payment-method-list + sticky CTA 다음.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부수단 선택"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "method-list",
              "component": "ogn/BIL/payment-method-list",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-prepay",
    "category": "page",
    "description": "휴대폰결제·콘텐츠 선결제 (대상 선택). US-BIL-PAY-007. ogn/BIL/prepay-target-list + sticky CTA 선결제하기. confirm·complete 단계는 별도 page 또는 후속 흐름.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "선결제"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "target-list",
              "component": "ogn/BIL/prepay-target-list",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "선결제하기"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-reserve",
    "category": "page",
    "description": "납부 예약·선납 입력. US-BIL-PAY-003. ogn/BIL/reserve-form + (접수 후) reserve-result-card. sticky CTA 예약하기.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부 예약"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "form",
              "component": "ogn/BIL/reserve-form",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "예약하기"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-resolved",
    "category": "page",
    "description": "미납 해소 / 정지 해제 후속. US-BIL-CHK-008. ogn/BIL/payment-result-card (variant=success) + (조건부) 후속 액션. 톤: 차분 (정상) / 경고·강 (지연/실패).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "미납 해소 확인"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "result-card-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "result-card",
                  "component": "ogn/BIL/payment-result-card",
                  "variant": {
                    "state": "success"
                  },
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "납부가 정상 반영되었습니다"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "확인"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-target",
    "category": "page",
    "description": "납부 대상 선택. US-BIL-CHK-006. ogn/BIL/prepay-target-list 패턴 재활용 — payment-target-item × N + 합계 + sticky CTA. (실제로는 자체 ogn payment-target-list 가 더 적절하지만 prepay-target-list 와 구조 동일하므로 재사용).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부 대상 선택"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "target-list",
              "component": "ogn/BIL/prepay-target-list",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "다음"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/payment-third-party",
    "category": "page",
    "description": "타인 명의 납부수단 동의 (BS placeholder — page 시뮬레이션). US-BIL-PAY-006. 안내 + 명의자 정보 + 약관 + 요청 CTA. 실제 운영은 BottomSheet 형태 (ogn/bottomsheet).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "타인 명의 동의"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "consent-sheet",
              "component": "ogn/BIL/third-party-consent-sheet",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "동의 요청 보내기"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/setting-auto-prepay",
    "category": "page",
    "description": "자동 선결제 설정. US-BIL-SET-006. ogn/BIL/setting-auto-prepay-form + sticky CTA 신청.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "자동 선결제"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "form",
              "component": "ogn/BIL/setting-auto-prepay-form",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "신청"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/setting-content-limit",
    "category": "page",
    "description": "콘텐츠 이용료 한도 변경. US-BIL-SET-005. ogn/BIL/limit-status-card + setting-limit-form 양 화면 재사용. SET-004 와 동일 구조.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "콘텐츠 이용료 한도"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "status-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "status",
                  "component": "ogn/BIL/limit-status-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "form",
              "component": "ogn/BIL/setting-limit-form",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "저장"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/setting-document",
    "category": "page",
    "description": "요금안내서 수신 설정. US-BIL-SET-001. ogn/BIL/setting-document-form + sticky CTA 저장.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "요금안내서 수신 설정"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "form",
              "component": "ogn/BIL/setting-document-form",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "저장"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/setting-method-cancel",
    "category": "page",
    "description": "납부방법 해지 BS placeholder. US-BIL-SET-003. mol/notice-card (warning) + mol/info-stack (다음 납부 안내) + 약관 + cta-pair 닫기/해지.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부방법 해지"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "warning-sheet",
              "component": "ogn/BIL/cancel-warning-sheet",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "해지하기"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/setting-mobile-limit",
    "category": "page",
    "description": "휴대폰결제 이용한도 변경. US-BIL-SET-004. ogn/BIL/limit-status-card + setting-limit-form + sticky CTA 저장.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "휴대폰결제 한도"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "status-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "status",
                  "component": "ogn/BIL/limit-status-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "form",
              "component": "ogn/BIL/setting-limit-form",
              "layoutAlign": "STRETCH"
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "저장"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/setting-payment-method",
    "category": "page",
    "description": "납부방법 관리 (조회 + 변경 진입). US-BIL-SET-002. ogn/BIL/setting-method-card + cta-pair 변경/해지.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "납부방법 관리"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "current-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "current",
                  "component": "ogn/BIL/setting-method-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "ref",
              "id": "actions",
              "component": "ogn/BIL/method-action-pair",
              "layoutAlign": "STRETCH"
            }
          ]
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/usage-line",
    "category": "page",
    "description": "휴대폰결제·콘텐츠 이용내역. US-BIL-CHK-004. ogn/BIL/usage-line-list + (조건부) 차단 안내 카드 + 후속 액션 (한도 변경 / 선결제). sticky-footer 로 [선택 N건 선결제하기].",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "휴대폰결제·콘텐츠 이용내역"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "line-list",
              "component": "ogn/BIL/usage-line-list",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "group",
              "id": "action-limit-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-limit",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "한도 변경",
                    "description": "결제 한도를 조정하실 수 있어요"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "sticky-cta",
          "component": "ogn/sticky-footer-cta",
          "props": {
            "label": "선결제하기"
          },
          "scrollBehavior": "STICKY_SCROLLS",
          "layoutAlign": "STRETCH"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/BIL/usage-realtime",
    "category": "page",
    "description": "실시간·예상 이용요금 — 탭 2 (실시간/예상). US-BIL-CHK-003. ogn/tab + usage-realtime-card + usage-forecast-card + 후속 액션 카드 (선결제/한도/상담).",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "props": {
            "title": "실시간·예상 요금"
          }
        },
        {
          "kind": "ref",
          "id": "tabs",
          "component": "ogn/tab",
          "variant": {
            "active": "0"
          },
          "layoutAlign": "STRETCH"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layoutGrow": 1,
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{foundation.dimension.spacing.lg}",
            "paddingBottom": "{foundation.dimension.spacing.lg}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "group",
              "id": "realtime-card-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "realtime-card",
                  "component": "ogn/BIL/usage-realtime-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "group",
              "id": "forecast-card-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "forecast-card",
                  "component": "ogn/BIL/usage-forecast-card",
                  "layoutAlign": "STRETCH"
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-prepay-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-prepay",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "선결제하기",
                    "description": "휴대폰결제·콘텐츠 이용료 미리 결제"
                  }
                }
              ]
            },
            {
              "kind": "group",
              "id": "action-limit-wrap",
              "layoutAlign": "STRETCH",
              "layout": {
                "mode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN",
                "counterAxisAlignItems": "MIN",
                "paddingTop": "{foundation.dimension.spacing.none}",
                "paddingBottom": "{foundation.dimension.spacing.none}",
                "paddingLeft": "{foundation.dimension.spacing.2xl}",
                "paddingRight": "{foundation.dimension.spacing.2xl}",
                "itemSpacing": "{foundation.dimension.spacing.none}",
                "width": "FILL",
                "height": "HUG"
              },
              "visual": {
                "cornerRadius": 0,
                "fill": null,
                "stroke": null,
                "shadow": null
              },
              "children": [
                {
                  "kind": "ref",
                  "id": "action-limit",
                  "component": "mol/post-action-card",
                  "layoutAlign": "STRETCH",
                  "props": {
                    "headline": "한도 변경",
                    "description": "휴대폰결제·콘텐츠 한도 관리"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/MYBEN/main",
    "category": "page",
    "description": "MY 혜택 메인 화면 — status-bar + GNB + 카드 스택 + tab-bar.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-home}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "gnb",
          "component": "ogn/gnb"
        },
        {
          "kind": "group",
          "id": "content",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.xs}",
            "paddingLeft": "{foundation.dimension.spacing.md}",
            "paddingRight": "{foundation.dimension.spacing.md}",
            "itemSpacing": "{semantic.layout.card-gap}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "promo-banner",
              "component": "ogn/MYBEN/promo-banner"
            },
            {
              "kind": "ref",
              "id": "card-points",
              "component": "ogn/MYBEN/card-points"
            },
            {
              "kind": "ref",
              "id": "card-barcode",
              "component": "ogn/MYBEN/card-barcode"
            },
            {
              "kind": "ref",
              "id": "card-brand-list",
              "component": "ogn/MYBEN/card-brand-list"
            },
            {
              "kind": "ref",
              "id": "card-promo",
              "component": "ogn/MYBEN/card-promo"
            },
            {
              "kind": "ref",
              "id": "card-movie-list",
              "component": "ogn/MYBEN/card-movie-list"
            },
            {
              "kind": "ref",
              "id": "card-coupon-list",
              "component": "ogn/MYBEN/card-coupon-list"
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "tab-bar",
          "component": "ogn/tab-bar"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/PRDD/case1-standalone",
    "category": "page",
    "description": "상품상세 case1 단독상품 화면 — status-bar + header + gallery + product-info + 할인/배송/프로모션/탭/추천/문의/기타 + footer-cta.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "CENTER",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "header",
          "component": "ogn/header",
          "variant": {
            "title": "without",
            "actions": "share-cart"
          }
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "CENTER",
            "paddingTop": "{foundation.dimension.spacing.none}",
            "paddingBottom": "{foundation.dimension.spacing.none}",
            "paddingLeft": "{foundation.dimension.spacing.none}",
            "paddingRight": "{foundation.dimension.spacing.none}",
            "itemSpacing": "{semantic.layout.card-gap}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "notice-banner",
              "component": "mol/banner-padded",
              "props": {
                "message": "공지사항 — 상품 관련 중요 안내입니다."
              }
            },
            {
              "kind": "ref",
              "id": "gallery",
              "component": "ogn/PRDD/gallery"
            },
            {
              "kind": "ref",
              "id": "product-info",
              "component": "ogn/PRDD/product-info"
            },
            {
              "kind": "ref",
              "id": "discount-box",
              "component": "ogn/PRDD/discount-box"
            },
            {
              "kind": "ref",
              "id": "accordion-shipping",
              "component": "mol/accordion",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "배송 정보",
                "body": "기본 배송비 3,000원 / 50,000원 이상 무료배송"
              }
            },
            {
              "kind": "ref",
              "id": "promo-banner",
              "component": "mol/banner-padded",
              "props": {
                "message": "지금 구독하면 첫 달 50% 할인!"
              }
            },
            {
              "kind": "ref",
              "id": "content-tab",
              "component": "ogn/tab",
              "variant": {
                "active": "0"
              }
            },
            {
              "kind": "text",
              "id": "tab-content",
              "content": "상품 정보 콘텐츠 영역 — 상세 설명이 들어가는 블록입니다.",
              "textStyle": "{semantic.typography.body}",
              "color": "{semantic.color.text.secondary}",
              "exposeAs": "tab-content",
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "recommend-list",
              "component": "ogn/PRDD/recommend-list"
            },
            {
              "kind": "ref",
              "id": "accordion-inquiry",
              "component": "mol/accordion",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "상품 문의",
                "body": "등록된 상품 문의 내역이 여기에 표시됩니다."
              }
            },
            {
              "kind": "ref",
              "id": "accordion-other",
              "component": "mol/accordion",
              "layoutAlign": "STRETCH",
              "props": {
                "title": "기타 정보",
                "body": "상품 정보 고시 및 법적 고지사항 영역입니다."
              }
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "footer-cta",
          "component": "ogn/PRDD/footer-cta",
          "scrollBehavior": "STICKY_SCROLLS"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/SCH/input",
    "category": "page",
    "description": "통합 검색 — 진입+입력 화면. status-bar + sticky search-bar + 빠른 진입 카드 + 인기 검색어 카드 + 최근 검색어 chips. 입력 0자 시 사용자 다음 행동 가이드 (UXL_SCH_4 안내 우선). F01·F02·F03.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "search-bar",
          "component": "ogn/SCH/search-bar",
          "props": {
            "placeholder": "무엇이든 검색해 주세요"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.2xl}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "section-quick-entry",
              "component": "ogn/SCH/quick-entry-card",
              "layoutAlign": "STRETCH",
              "_comment": "빠른 진입 — 검색 없이도 자주 쓰는 행동 4 가지로 즉시 이동. UXL_SCH_2 실행 우선 + UXL_SCH_6 행위 중심 명칭."
            },
            {
              "kind": "ref",
              "id": "section-popular",
              "component": "ogn/SCH/popular-card",
              "layoutAlign": "STRETCH",
              "_comment": "인기 검색어 — 1시간 단위 갱신 (F03)."
            },
            {
              "kind": "ref",
              "id": "section-recent",
              "component": "ogn/SCH/keyword-chips",
              "variant": {
                "type": "recent"
              },
              "layoutAlign": "STRETCH",
              "_comment": "최근 검색어 — 최대 20건, 30일 자동 삭제, chip 형태 (F03)."
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS",
          "_comment": "[고지·필수] 전기통신사업법 § 22-2 — 분쟁 발생 시 연락처 표시 의무"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/SCH/results",
    "category": "page",
    "description": "통합 검색 — 결과 화면. status-bar + search-bar + tabs + Answer Card + Quick Action + 결과 list × 2 (정확일치 / 연관 결과) + compare-tray. F04·F05·F06·F08.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "search-bar",
          "component": "ogn/SCH/search-bar",
          "props": {
            "placeholder": "5G 요금제"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "tabs",
          "component": "ogn/SCH/tabs",
          "variant": {
            "active": "0"
          },
          "layoutAlign": "STRETCH",
          "_comment": "검색 결과 탭 — 정책서 § 3.2 F04 (전체/상품/혜택/FAQ)."
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.lg}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "answer-card",
              "component": "ogn/SCH/answer-card",
              "props": {
                "headline": "이번 달 요금",
                "summary": "73,500원 (납부 예정 7월 25일)"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "quick-action",
              "component": "ogn/SCH/quick-action-card",
              "props": {
                "headline": "데이터 리필 받기",
                "description": "이번 달 데이터 리필권 1회 사용 가능"
              },
              "layoutAlign": "STRETCH"
            },
            {
              "kind": "ref",
              "id": "result-list-exact",
              "component": "ogn/SCH/result-list",
              "layoutAlign": "STRETCH",
              "_comment": "정확일치 결과 list (baseline 그대로 — 정확일치 라벨 + list-item × 2)"
            },
            {
              "kind": "ref",
              "id": "result-list-related",
              "component": "ogn/SCH/result-list",
              "props": {
                "label": "연관 결과"
              },
              "layoutAlign": "STRETCH",
              "_comment": "연관 결과 list — 라벨만 props 변경. list-item 컨텐츠는 baseline 그대로 노출되며 디자이너가 instance override 로 변경 권장."
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "compare-tray",
          "component": "ogn/SCH/compare-tray",
          "props": {
            "count": "2개 선택됨"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS",
          "_comment": "[고지·필수] 전기통신사업법 § 22-2 — 분쟁 발생 시 연락처 표시 의무"
        }
      ]
    }
  },
  {
    "$schema": "component-spec-v1",
    "name": "page/SCH/zero",
    "category": "page",
    "description": "통합 검색 — 제로결과 폴백 (F09). 정책 5 영역 순서 — ① 오타 교정 ② 유사어 chip ③ 인기 카테고리 ④ FAQ (생략) ⑤ 상담 CTA. 시각 균형 — empty hero 강조 / 가운데 작은 시각 / 끝 emphasis 강조 (상담 동선). UXL_SCH_4 안내 우선.",
    "base": {
      "layout": {
        "mode": "VERTICAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "paddingTop": "{foundation.dimension.spacing.none}",
        "paddingBottom": "{foundation.dimension.spacing.none}",
        "paddingLeft": "{foundation.dimension.spacing.none}",
        "paddingRight": "{foundation.dimension.spacing.none}",
        "itemSpacing": "{foundation.dimension.spacing.none}",
        "width": "{foundation.dimension.size.screen-mobile}",
        "minHeight": "{foundation.dimension.size.screen-mobile-height}",
        "height": "{foundation.dimension.size.screen-mobile-height}"
      },
      "visual": {
        "cornerRadius": 0,
        "fill": "{semantic.color.background.page-sub}",
        "stroke": null,
        "shadow": null
      },
      "children": [
        {
          "kind": "ref",
          "id": "status-bar",
          "component": "ogn/status-bar"
        },
        {
          "kind": "ref",
          "id": "search-bar",
          "component": "ogn/SCH/search-bar",
          "props": {
            "placeholder": "존재하지 않는 검색어"
          },
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS"
        },
        {
          "kind": "group",
          "id": "content",
          "layoutAlign": "STRETCH",
          "layout": {
            "mode": "VERTICAL",
            "primaryAxisSizingMode": "AUTO",
            "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN",
            "counterAxisAlignItems": "MIN",
            "paddingTop": "{semantic.layout.screen-padding-default}",
            "paddingBottom": "{semantic.layout.screen-padding-default}",
            "paddingLeft": "{semantic.layout.screen-padding-default}",
            "paddingRight": "{semantic.layout.screen-padding-default}",
            "itemSpacing": "{foundation.dimension.spacing.2xl}",
            "width": "FILL",
            "height": "HUG"
          },
          "visual": {
            "cornerRadius": 0,
            "fill": null,
            "stroke": null,
            "shadow": null
          },
          "children": [
            {
              "kind": "ref",
              "id": "section-empty-hero",
              "component": "ogn/SCH/empty-hero",
              "layoutAlign": "STRETCH",
              "_comment": "section 1 — empty-state hero. 큰 시각 강조 (icon + 헤딩 + 설명). UXL_SCH_4 안내 우선."
            },
            {
              "kind": "ref",
              "id": "typo-correction",
              "component": "mol/notice-card",
              "variant": {
                "type": "plain"
              },
              "props": {
                "message": "혹시 '존재하는 검색어' 를 찾으셨나요?  탭하여 재검색"
              },
              "layoutAlign": "STRETCH",
              "_comment": "section 2 — F09 ① 오타 교정. 작은 시각 (plain). UXL_SCH_4."
            },
            {
              "kind": "ref",
              "id": "section-similar",
              "component": "ogn/SCH/keyword-chips",
              "variant": {
                "type": "similar"
              },
              "props": {
                "label": "이런 검색어는 어떠세요"
              },
              "layoutAlign": "STRETCH",
              "_comment": "section 3 — F09 ② 유사어 chip. 작은 시각."
            },
            {
              "kind": "ref",
              "id": "section-categories",
              "component": "ogn/SCH/category-card",
              "layoutAlign": "STRETCH",
              "_comment": "section 4 — F09 ③ 인기 카테고리. 중간 시각 (post-action-card × 2 — input 화면과 시각 통일)."
            },
            {
              "kind": "ref",
              "id": "cs-cta",
              "component": "mol/notice-card",
              "variant": {
                "type": "title-body"
              },
              "props": {
                "title": "원하는 결과가 없으신가요?",
                "body": "상담사가 빠르게 도와드릴게요. 1:1 채팅으로 문의해 주세요."
              },
              "layoutAlign": "STRETCH",
              "_comment": "section 5 — F09 ⑤ 상담 CTA. 끝 동선 강조 (title-body 외피). UXL_SCH_2 실행 우선."
            }
          ],
          "layoutGrow": 1
        },
        {
          "kind": "ref",
          "id": "footer-cs",
          "component": "ogn/footer-cs",
          "layoutAlign": "STRETCH",
          "scrollBehavior": "STICKY_SCROLLS",
          "_comment": "[고지·필수] 전기통신사업법 § 22-2 — 분쟁 발생 시 연락처 표시 의무"
        }
      ]
    }
  }
];

const ICONS = [
  {
    "name": "atom/icon/sparkle",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.73674 12.707C7.30966 12.3496 6.68794 12.3496 6.26086 12.707C6.07424 12.8631 5.96985 13.0743 5.86933 13.2898C5.59584 13.8758 5.4923 14.0933 5.36879 14.2854C5.08976 14.7197 4.72063 15.0888 4.28642 15.3678C4.09423 15.4913 3.87681 15.5949 3.29082 15.8684C3.07532 15.9689 2.86407 16.0733 2.70793 16.2599C2.35061 16.687 2.35061 17.3087 2.70793 17.7358C2.86407 17.9224 3.07532 18.0268 3.29082 18.1273C3.87681 18.4008 4.09423 18.5043 4.28642 18.6278C4.72063 18.9069 5.08976 19.276 5.36879 19.7102C5.4923 19.9024 5.59584 20.1198 5.86933 20.7058C5.96983 20.9213 6.07425 21.1326 6.26086 21.2887C6.68794 21.646 7.30966 21.646 7.73674 21.2887C7.92336 21.1326 8.02776 20.9213 8.12828 20.7058C8.40176 20.1198 8.5053 19.9024 8.62881 19.7102C8.90784 19.276 9.27697 18.9069 9.71118 18.6278C9.90338 18.5043 10.1208 18.4008 10.7068 18.1273C10.9223 18.0268 11.1335 17.9224 11.2897 17.7358C11.647 17.3087 11.647 16.687 11.2897 16.2599C11.1335 16.0733 10.9223 15.9689 10.7068 15.8684C10.1208 15.5949 9.90338 15.4913 9.71118 15.3678C9.27697 15.0888 8.90784 14.7197 8.62881 14.2854C8.5053 14.0933 8.40176 13.8758 8.12828 13.2898C8.02776 13.0743 7.92336 12.8631 7.73674 12.707ZM6.88308 15.2586C6.923 15.1964 6.96124 15.1332 6.9988 15.0676C7.03637 15.1332 7.0746 15.1964 7.11453 15.2586C7.53307 15.9099 8.08676 16.4636 8.73807 16.8821C8.80021 16.922 8.86345 16.9603 8.92906 16.9978C8.86345 17.0354 8.80021 17.0736 8.73807 17.1135C8.08676 17.5321 7.53307 18.0858 7.11453 18.7371C7.0746 18.7992 7.03637 18.8625 6.9988 18.9281C6.96124 18.8625 6.923 18.7992 6.88308 18.7371C6.46454 18.0858 5.91084 17.5321 5.25953 17.1135C5.1974 17.0736 5.13415 17.0354 5.06854 16.9978C5.13415 16.9603 5.1974 16.922 5.25953 16.8821C5.91084 16.4636 6.46454 15.9099 6.88308 15.2586Z\" fill=\"#171719\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.78191 7.51872C8.4527 7.6828 8.01901 7.9319 7.7885 8.37678C7.64652 8.6508 7.57552 8.95077 7.5755 9.25074C7.57552 9.55072 7.64652 9.85069 7.7885 10.1247C8.01901 10.5696 8.4527 10.8187 8.78191 10.9828C9.07731 11.13 9.45768 11.2851 9.90149 11.4609L10.9448 11.8724C11.486 12.0858 11.9144 12.5142 12.1279 13.0555L12.4743 13.9339C12.6775 14.4488 12.8526 14.8872 13.0177 15.2186C13.1818 15.5478 13.4309 15.9815 13.8758 16.212C14.1498 16.354 14.4498 16.4248 14.7499 16.4248C15.05 16.4248 15.3499 16.354 15.624 16.212C16.0689 15.9815 16.318 15.5478 16.482 15.2186C16.6472 14.8872 16.8222 14.4488 17.0254 13.9339L17.3719 13.0555C17.5853 12.5142 18.0138 12.0858 18.555 11.8724L19.5983 11.4609C20.0421 11.2851 20.4225 11.13 20.7179 10.9828C21.0471 10.8187 21.4808 10.5696 21.7113 10.1247C21.8532 9.85069 21.9242 9.55072 21.9243 9.25074C21.9242 8.95077 21.8532 8.6508 21.7113 8.37678C21.4808 7.9319 21.0471 7.6828 20.7179 7.51872C20.4225 7.37149 20.0421 7.21644 19.5983 7.04059L18.555 6.62911C18.0138 6.41566 17.5853 5.98725 17.3719 5.44603L17.0254 4.56758C16.8222 4.05268 16.6472 3.6143 16.482 3.28289C16.318 2.95368 16.0689 2.52 15.624 2.28949C15.3499 2.14749 15.05 2.07665 14.7499 2.07666C14.4498 2.07665 14.1498 2.14749 13.8758 2.28949C13.4309 2.52 13.1818 2.95368 13.0177 3.28289C12.8526 3.6143 12.6775 4.05268 12.4743 4.56758L12.1279 5.44603C11.9144 5.98725 11.486 6.41566 10.9448 6.62911L9.90149 7.04059C9.45768 7.21644 9.07731 7.37149 8.78191 7.51872ZM13.9725 5.67505L14.6569 3.93978C14.6736 3.89722 14.7037 3.87646 14.7499 3.87646C14.7961 3.87646 14.8261 3.89722 14.8429 3.93978L15.5273 5.67505C15.7286 6.18251 15.8948 6.57349 16.1321 6.91434C16.3939 7.28776 16.7194 7.6125 17.0934 7.87354C17.4265 8.10412 17.8078 8.26765 18.2988 8.46284L20.061 9.15783C20.1035 9.17462 20.1243 9.20469 20.1243 9.25086C20.1243 9.29703 20.1035 9.3271 20.061 9.34388L18.2988 10.0389C17.8078 10.2341 17.4265 10.3976 17.0934 10.6282C16.7194 10.8892 16.3939 11.214 16.1321 11.5874C15.8948 11.9282 15.7286 12.3192 15.5273 12.8267L14.8429 14.5619C14.8261 14.6045 14.7961 14.6253 14.7499 14.6253C14.7037 14.6253 14.6736 14.6045 14.6569 14.5619L13.9725 12.8267C13.7711 12.3192 13.605 11.9282 13.3677 11.5874C13.1058 11.214 12.7804 10.8892 12.4064 10.6282C12.0732 10.3976 11.692 10.2341 11.201 10.0389L9.4388 9.34388C9.39624 9.3271 9.37549 9.29703 9.37549 9.25086C9.37549 9.20469 9.39624 9.17462 9.4388 9.15783L11.201 8.46284C11.692 8.26765 12.0732 8.10412 12.4064 7.87354C12.7804 7.6125 13.1058 7.28776 13.3677 6.91434C13.605 6.57349 13.7711 6.18251 13.9725 5.67505Z\" fill=\"#171719\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/menu",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.00031 4.84961C3.50325 4.84961 3.10031 5.25255 3.10031 5.74961C3.10031 6.24667 3.50325 6.64961 4.00031 6.64961H20.0002C20.4973 6.64961 20.9002 6.24667 20.9002 5.74961C20.9002 5.25255 20.4973 4.84961 20.0002 4.84961H4.00031Z\" fill=\"#171719\"/>\n<path d=\"M3.10032 11.9998C3.10032 11.5027 3.50327 11.0998 4.00032 11.0998H20.0003C20.4973 11.0998 20.9003 11.5027 20.9003 11.9998C20.9003 12.4969 20.4973 12.8998 20.0003 12.8998H4.00032C3.50327 12.8998 3.10032 12.4969 3.10032 11.9998Z\" fill=\"#171719\"/>\n<path d=\"M3.10032 18.2495C3.10032 17.7525 3.50326 17.3495 4.00032 17.3495H20.0003C20.4973 17.3495 20.9003 17.7525 20.9003 18.2495C20.9003 18.7466 20.4973 19.1495 20.0003 19.1495H4.00032C3.50326 19.1495 3.10032 18.7466 3.10032 18.2495Z\" fill=\"#171719\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/home",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.3616 2.27647C12.1248 2.21318 11.8755 2.21318 11.6387 2.27647C11.3579 2.3515 11.1251 2.5333 11.0025 2.62905L10.9675 2.65625L4.13427 7.88153C3.74746 8.17676 3.42128 8.42572 3.17853 8.75002C2.96523 9.03498 2.80621 9.35676 2.70942 9.69929C2.59927 10.0891 2.59965 10.4995 2.60009 10.9861L2.60015 17.335C2.60014 17.8648 2.60012 18.316 2.63039 18.6865C2.66218 19.0756 2.73182 19.4542 2.91623 19.8161C3.19426 20.3618 3.6379 20.8055 4.18357 21.0835C4.5455 21.2679 4.9241 21.3375 5.31326 21.3693C5.68367 21.3996 6.13483 21.3996 6.66467 21.3996H11.9898C11.9933 21.3996 11.9969 21.3996 12.0004 21.3996C12.0039 21.3996 12.0075 21.3996 12.011 21.3996H17.3355C17.8653 21.3996 18.3166 21.3996 18.687 21.3693C19.0761 21.3375 19.4547 21.2679 19.8167 21.0835C20.3623 20.8055 20.806 20.3618 21.084 19.8161C21.2684 19.4542 21.338 19.0756 21.3698 18.6865C21.4001 18.316 21.4001 17.8649 21.4001 17.335L21.4001 10.9861C21.4006 10.4994 21.401 10.0891 21.2908 9.69929C21.194 9.35676 21.035 9.03498 20.8217 8.75002C20.5789 8.42572 20.2528 8.17677 19.866 7.88153L13.0328 2.65625L12.9977 2.62905C12.8751 2.5333 12.6423 2.3515 12.3616 2.27647ZM12.9004 19.5994H17.7001C18.5147 19.5994 18.7085 19.5883 18.84 19.5456C19.1749 19.4368 19.4374 19.1742 19.5463 18.8393C19.589 18.7078 19.6001 18.514 19.6001 17.6994V10.883C19.6001 10.4628 19.5965 10.3673 19.5816 10.2869C19.5445 10.0871 19.4528 9.90143 19.3166 9.75057C19.2618 9.68986 19.1881 9.62903 18.8542 9.37376L12.0001 4.1324L5.146 9.37376C4.81217 9.62903 4.73848 9.68986 4.68367 9.75057C4.54748 9.90143 4.45574 10.0871 4.41864 10.2869C4.4037 10.3673 4.40015 10.4628 4.40015 10.883V17.6994C4.40015 18.514 4.41126 18.7078 4.45399 18.8393C4.5628 19.1742 4.82535 19.4368 5.16023 19.5456C5.29175 19.5883 5.48559 19.5994 6.30014 19.5994H11.1004V13.9996C11.1004 13.5026 11.5033 13.0996 12.0004 13.0996C12.4975 13.0996 12.9004 13.5026 12.9004 13.9996V19.5994Z\" fill=\"#171719\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/home-fill",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.6386 2.27647C11.8754 2.21318 12.1247 2.21318 12.3615 2.27647C12.6423 2.3515 12.8751 2.5333 12.9977 2.62905L13.0327 2.65625L19.8659 7.88153C20.2527 8.17677 20.5789 8.42572 20.8216 8.75002C21.0349 9.03498 21.194 9.35676 21.2907 9.69929C21.4009 10.0891 21.4005 10.4994 21.4001 10.9861L21.4 17.335C21.4 17.8648 21.4 18.316 21.3698 18.6865C21.338 19.0756 21.2684 19.4542 21.0839 19.8161C20.8059 20.3618 20.3623 20.8055 19.8166 21.0835C19.4547 21.2679 19.0761 21.3375 18.6869 21.3693C18.3165 21.3996 17.8653 21.3996 17.3355 21.3996H12.9003V13.9996C12.9003 13.5026 12.4974 13.0996 12.0003 13.0996C11.5033 13.0996 11.1003 13.5026 11.1003 13.9996V21.3996H6.66467C6.13482 21.3996 5.68361 21.3996 5.31319 21.3693C4.92403 21.3375 4.54544 21.2679 4.18351 21.0835C3.63784 20.8055 3.1942 20.3618 2.91617 19.8161C2.73176 19.4542 2.66212 19.0756 2.63033 18.6865C2.60006 18.316 2.60007 17.8648 2.60009 17.335L2.60003 10.9861C2.59958 10.4995 2.59921 10.0891 2.70936 9.69929C2.80615 9.35676 2.96517 9.03498 3.17846 8.75002C3.42122 8.42572 3.7474 8.17676 4.13421 7.88153L10.9674 2.65625L11.0024 2.62905C11.1251 2.5333 11.3578 2.3515 11.6386 2.27647Z\" fill=\"#171719\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/search",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.9997 2.1001C5.63667 2.1001 2.09973 5.63705 2.09973 10.0001C2.09973 14.3631 5.63667 17.9001 9.9997 17.9001C11.857 17.9001 13.5646 17.2592 14.9134 16.1864L19.8634 21.1365C20.2149 21.4879 20.7847 21.4879 21.1362 21.1365C21.4877 20.785 21.4877 20.2151 21.1362 19.8637L16.1861 14.9136C17.2588 13.5648 17.8997 11.8573 17.8997 10.0001C17.8997 5.63705 14.3627 2.1001 9.9997 2.1001ZM3.89972 10.0001C3.89972 6.63116 6.63078 3.9001 9.9997 3.9001C13.3686 3.9001 16.0997 6.63116 16.0997 10.0001C16.0997 13.369 13.3686 16.1001 9.9997 16.1001C6.63078 16.1001 3.89972 13.369 3.89972 10.0001Z\" fill=\"#171719\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/bag",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.99986 10.1C8.5028 10.1 8.09986 10.5029 8.09986 11C8.09986 11.4971 8.5028 11.9 8.99986 11.9H14.9998C15.4969 11.9 15.8998 11.4971 15.8998 11C15.8998 10.5029 15.4969 10.1 14.9998 10.1H8.99986Z\" fill=\"#171719\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5702 2.09998H14.4297C14.684 2.09995 14.9261 2.09993 15.13 2.11659C15.3524 2.13476 15.6075 2.17715 15.8625 2.30707C16.22 2.48923 16.5107 2.77989 16.6928 3.1374C16.8228 3.39237 16.8651 3.64748 16.8833 3.86989C16.9 4.07385 16.9 4.3159 16.8999 4.57022L16.8999 5.59998L17.8353 5.59998C18.3652 5.59996 18.8164 5.59995 19.1868 5.63022C19.576 5.66201 19.9545 5.73165 20.3165 5.91606C20.8621 6.19409 21.3058 6.63774 21.5838 7.18341C21.7682 7.54534 21.8379 7.92393 21.8697 8.31309C21.8999 8.68351 21.8999 9.13466 21.8999 9.6645V16.8354C21.8999 17.3652 21.8999 17.8165 21.8697 18.1869C21.8379 18.576 21.7682 18.9546 21.5838 19.3166C21.3058 19.8622 20.8621 20.3059 20.3165 20.5839C19.9545 20.7683 19.576 20.8379 19.1868 20.8697C18.8164 20.9 18.3652 20.9 17.8354 20.9H6.16456C5.63472 20.9 5.1835 20.9 4.81308 20.8697C4.42393 20.8379 4.04533 20.7683 3.6834 20.5839C3.13773 20.3059 2.69409 19.8622 2.41606 19.3166C2.23165 18.9546 2.16201 18.576 2.13022 18.1869C2.09995 17.8165 2.09996 17.3653 2.09998 16.8355V9.66458C2.09996 9.13474 2.09995 8.68351 2.13022 8.31309C2.16201 7.92393 2.23165 7.54534 2.41606 7.18341C2.69409 6.63774 3.13773 6.19409 3.6834 5.91606C4.04533 5.73165 4.42393 5.66201 4.81309 5.63022C5.18352 5.59995 5.6347 5.59996 6.16456 5.59998L7.09997 5.59998L7.09996 4.57022C7.09994 4.3159 7.09991 4.07385 7.11658 3.86989C7.13475 3.64748 7.17714 3.39237 7.30705 3.1374C7.48921 2.77989 7.77987 2.48923 8.13738 2.30707C8.39236 2.17715 8.64747 2.13476 8.86987 2.11659C9.07384 2.09993 9.31588 2.09995 9.5702 2.09998ZM15.0999 4.00002V5.60002H8.89995V4.00002C8.89995 3.9448 8.94472 3.90002 8.99995 3.90002H14.9999C15.0551 3.90002 15.0999 3.94479 15.0999 4.00002ZM5.79995 7.40002C4.98539 7.40002 4.79156 7.41113 4.66004 7.45386C4.32516 7.56267 4.06261 7.82522 3.9538 8.16011C3.91106 8.29163 3.89996 8.48546 3.89996 9.30002V17.2C3.89996 18.0146 3.91106 18.2084 3.9538 18.3399C4.06261 18.6748 4.32516 18.9374 4.66004 19.0462C4.79156 19.0889 4.98539 19.1 5.79995 19.1H18.1999C19.0145 19.1 19.2083 19.0889 19.3398 19.0462C19.6747 18.9374 19.9372 18.6748 20.0461 18.3399C20.0888 18.2084 20.0999 18.0146 20.0999 17.2V9.30002C20.0999 8.48546 20.0888 8.29163 20.0461 8.16011C19.9372 7.82522 19.6747 7.56267 19.3398 7.45386C19.2083 7.41113 19.0145 7.40002 18.1999 7.40002H5.79995Z\" fill=\"#171719\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/bag-fill",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.57014 2.09998H14.4296C14.684 2.09995 14.926 2.09993 15.13 2.11659C15.3524 2.13476 15.6075 2.17715 15.8625 2.30707C16.22 2.48923 16.5106 2.77989 16.6928 3.1374C16.8227 3.39237 16.8651 3.64748 16.8833 3.86989C16.8999 4.07385 16.8999 4.3159 16.8999 4.57022L16.8999 5.59998L17.8353 5.59998C18.3651 5.59996 18.8163 5.59995 19.1867 5.63022C19.5759 5.66201 19.9545 5.73165 20.3164 5.91606C20.8621 6.19409 21.3057 6.63774 21.5838 7.18341C21.7682 7.54534 21.8378 7.92393 21.8696 8.31309C21.8999 8.68351 21.8999 9.13466 21.8998 9.6645V16.8354C21.8999 17.3652 21.8999 17.8165 21.8696 18.1869C21.8378 18.576 21.7682 18.9546 21.5838 19.3166C21.3057 19.8622 20.8621 20.3059 20.3164 20.5839C19.9545 20.7683 19.5759 20.8379 19.1867 20.8697C18.8163 20.9 18.3652 20.9 17.8353 20.9H6.1645C5.63466 20.9 5.18344 20.9 4.81302 20.8697C4.42386 20.8379 4.04527 20.7683 3.68334 20.5839C3.13767 20.3059 2.69403 19.8622 2.416 19.3166C2.23158 18.9546 2.16195 18.576 2.13015 18.1869C2.09989 17.8165 2.0999 17.3653 2.09992 16.8355V9.66458C2.0999 9.13474 2.09989 8.68351 2.13015 8.31309C2.16195 7.92393 2.23158 7.54534 2.416 7.18341C2.69403 6.63774 3.13767 6.19409 3.68334 5.91606C4.04527 5.73165 4.42387 5.66201 4.81303 5.63022C5.18346 5.59995 5.63464 5.59996 6.1645 5.59998L7.09991 5.59998L7.0999 4.57022C7.09988 4.3159 7.09985 4.07385 7.11652 3.86989C7.13469 3.64748 7.17708 3.39237 7.30699 3.1374C7.48915 2.77989 7.77981 2.48923 8.13732 2.30707C8.3923 2.17715 8.64741 2.13476 8.86981 2.11659C9.07377 2.09993 9.31582 2.09995 9.57014 2.09998ZM8.89978 5.60004H15.0998V3.99992C15.0998 3.94469 15.055 3.89992 14.9998 3.89992H8.99978C8.94456 3.89992 8.89978 3.94469 8.89978 3.99992V5.60004ZM8.9998 10.1C8.50274 10.1 8.0998 10.5029 8.0998 11C8.0998 11.4971 8.50274 11.9 8.9998 11.9H14.9998C15.4968 11.9 15.8998 11.4971 15.8998 11C15.8998 10.5029 15.4968 10.1 14.9998 10.1H8.9998Z\" fill=\"#171719\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/qr-scan",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path d=\"M4.75 4.25a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z\"/>\n  <path fill-rule=\"evenodd\" d=\"M2 3.5A1.5 1.5 0 0 1 3.5 2H6a1.5 1.5 0 0 1 1.5 1.5V6A1.5 1.5 0 0 1 6 7.5H3.5A1.5 1.5 0 0 1 2 6V3.5Zm1.5 0H6V6H3.5V3.5Z\" clip-rule=\"evenodd\"/>\n  <path d=\"M4.25 11.25a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z\"/>\n  <path fill-rule=\"evenodd\" d=\"M2 10a1.5 1.5 0 0 1 1.5-1.5H6A1.5 1.5 0 0 1 7.5 10v2.5A1.5 1.5 0 0 1 6 14H3.5A1.5 1.5 0 0 1 2 12.5V10Zm1.5 2.5V10H6v2.5H3.5Z\" clip-rule=\"evenodd\"/>\n  <path d=\"M11.25 4.25a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z\"/>\n  <path fill-rule=\"evenodd\" d=\"M10 2a1.5 1.5 0 0 0-1.5 1.5V6A1.5 1.5 0 0 0 10 7.5h2.5A1.5 1.5 0 0 0 14 6V3.5A1.5 1.5 0 0 0 12.5 2H10Zm2.5 1.5H10V6h2.5V3.5Z\" clip-rule=\"evenodd\"/>\n  <path d=\"M8.5 9.417a.917.917 0 1 1 1.833 0 .917.917 0 0 1-1.833 0ZM8.5 13.083a.917.917 0 1 1 1.833 0 .917.917 0 0 1-1.833 0ZM13.083 8.5a.917.917 0 1 0 0 1.833.917.917 0 0 0 0-1.833ZM12.166 13.084a.917.917 0 1 1 1.833 0 .917.917 0 0 1-1.833 0ZM11.25 10.333a.917.917 0 1 0 0 1.833.917.917 0 0 0 0-1.833Z\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/signal",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path d=\"M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"/>\n  <path fill-rule=\"evenodd\" d=\"M9.68 5.26a.75.75 0 0 1 1.06 0 3.875 3.875 0 0 1 0 5.48.75.75 0 1 1-1.06-1.06 2.375 2.375 0 0 0 0-3.36.75.75 0 0 1 0-1.06Zm-3.36 0a.75.75 0 0 1 0 1.06 2.375 2.375 0 0 0 0 3.36.75.75 0 1 1-1.06 1.06 3.875 3.875 0 0 1 0-5.48.75.75 0 0 1 1.06 0Z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M11.89 3.05a.75.75 0 0 1 1.06 0 7 7 0 0 1 0 9.9.75.75 0 1 1-1.06-1.06 5.5 5.5 0 0 0 0-7.78.75.75 0 0 1 0-1.06Zm-7.78 0a.75.75 0 0 1 0 1.06 5.5 5.5 0 0 0 0 7.78.75.75 0 1 1-1.06 1.06 7 7 0 0 1 0-9.9.75.75 0 0 1 1.06 0Z\" clip-rule=\"evenodd\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/wifi",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path fill-rule=\"evenodd\" d=\"M14.188 7.063a8.75 8.75 0 0 0-12.374 0 .75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06Zm-2.121 2.121a5.75 5.75 0 0 0-8.132 0 .75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 1 10.252 0 .75.75 0 0 1-1.06 1.06Zm-2.122 2.122a2.75 2.75 0 0 0-3.889 0 .75.75 0 1 1-1.06-1.061 4.25 4.25 0 0 1 6.01 0 .75.75 0 0 1-1.06 1.06Zm-2.828 1.06a1.25 1.25 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/battery",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path d=\"M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z\"/>\n  <path fill-rule=\"evenodd\" d=\"M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z\" clip-rule=\"evenodd\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/arrow-left",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path fill-rule=\"evenodd\" d=\"M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z\" clip-rule=\"evenodd\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/share",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path d=\"M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/heart",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path d=\"M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/gift",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path fill-rule=\"evenodd\" d=\"M3.75 3.505c0 .562.186 1.082.5 1.5H2a1 1 0 1 0 0 2h5.25v-2h1.5v2H14a1 1 0 1 0 0-2h-2.25A2.5 2.5 0 0 0 8 1.719a2.5 2.5 0 0 0-4.25 1.786Zm3.499 0v-.038a1 1 0 1 0-.999 1.038h1l-.001-1Zm2.5-1a1 1 0 0 0-1 .962l.001.038v1h.999a1 1 0 0 0 0-2Z\" clip-rule=\"evenodd\"/>\n  <path d=\"M7.25 8.505H2v3.5a2 2 0 0 0 2 2h3.25v-5.5ZM8.75 14.005v-5.5H14v3.5a2 2 0 0 1-2 2H8.75Z\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/close",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path d=\"M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/chevron-down",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.21967 6.21967C4.51256 5.92678 4.98744 5.92678 5.28033 6.21967L8 8.93934L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L4.21967 7.28033C3.92678 6.98744 3.92678 6.51256 4.21967 6.21967Z\" fill=\"black\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/chevron-up",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.7803 9.78033C11.4874 10.0732 11.0126 10.0732 10.7197 9.78033L8 7.06066L5.28033 9.78033C4.98744 10.0732 4.51256 10.0732 4.21967 9.78033C3.92678 9.48744 3.92678 9.01256 4.21967 8.71967L7.46967 5.46967C7.76256 5.17678 8.23744 5.17678 8.53033 5.46967L11.7803 8.71967C12.0732 9.01256 12.0732 9.48744 11.7803 9.78033Z\" fill=\"black\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/chevron-left",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path fill-rule=\"evenodd\" d=\"M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z\" clip-rule=\"evenodd\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/chevron-right",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" data-slot=\"icon\">\n  <path fill-rule=\"evenodd\" d=\"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/gift",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.75 3.50464C3.75 4.06744 3.93597 4.58681 4.24982 5.00464H2C1.44772 5.00464 1 5.45235 1 6.00464C1 6.55692 1.44772 7.00464 2 7.00464H7.25V5.00464H8.75V7.00464H14C14.5523 7.00464 15 6.55692 15 6.00464C15 5.45235 14.5523 5.00464 14 5.00464H11.7492C12.0631 4.58681 12.249 4.06744 12.249 3.50464C12.249 2.12393 11.1297 1.00464 9.74902 1.00464C9.06791 1.00464 8.45041 1.27702 7.99951 1.7188C7.54862 1.27702 6.93112 1.00464 6.25 1.00464C4.86929 1.00464 3.75 2.12393 3.75 3.50464ZM7.24902 3.50464L7.2493 3.46693C7.22947 2.93212 6.78966 2.50464 6.25 2.50464C5.69772 2.50464 5.25 2.95235 5.25 3.50464C5.25 4.05692 5.69772 4.50464 6.25 4.50464H7.24936L7.24902 3.50464ZM9.74902 2.50464C9.20937 2.50464 8.76955 2.93212 8.74972 3.46693L8.75 3.50464V4.50464H9.74902C10.3013 4.50464 10.749 4.05692 10.749 3.50464C10.749 2.95235 10.3013 2.50464 9.74902 2.50464Z\" fill=\"#0F172A\"/>\n<path d=\"M7.25 8.50464H2V12.0046C2 13.1092 2.89543 14.0046 4 14.0046H7.25V8.50464Z\" fill=\"#0F172A\"/>\n<path d=\"M8.75 14.0046V8.50464H14V12.0046C14 13.1092 13.1046 14.0046 12 14.0046H8.75Z\" fill=\"#0F172A\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/user",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z\" fill=\"#0F172A\"/>\n<path d=\"M12.7347 14C13.3531 14 13.8275 13.439 13.607 12.8613C12.7455 10.6036 10.5597 9 7.99942 9C5.43913 9 3.25338 10.6036 2.39182 12.8613C2.17134 13.439 2.64575 14 3.26412 14H12.7347Z\" fill=\"#0F172A\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/lock-closed",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 1C6.067 1 4.5 2.567 4.5 4.5L4.5 7C3.67157 7 3 7.67157 3 8.5V13.5C3 14.3284 3.67157 15 4.5 15H11.5C12.3284 15 13 14.3284 13 13.5V8.5C13 7.67157 12.3284 7 11.5 7V4.5C11.5 2.567 9.933 1 8 1ZM10 7V4.5C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5V7H10Z\" fill=\"black\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/arrow-path",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8356 2.47703C14.2498 2.47703 14.5856 2.81282 14.5856 3.22703V6.40901C14.5856 6.82322 14.2498 7.15901 13.8356 7.15901H10.6536C10.2394 7.15901 9.90362 6.82322 9.90362 6.40901C9.90362 5.9948 10.2394 5.65901 10.6536 5.65901H12.0249L11.1839 4.81802C9.42659 3.06066 6.57734 3.06066 4.81999 4.81802C4.53421 5.10379 4.29556 5.41752 4.10337 5.74996C3.89606 6.10855 3.43729 6.23119 3.07869 6.02388C2.7201 5.81656 2.59746 5.3578 2.80477 4.9992C3.06184 4.55455 3.38024 4.13644 3.75933 3.75736C6.10247 1.41421 9.90146 1.41421 12.2446 3.75736L13.0856 4.59835V3.22703C13.0856 2.81282 13.4214 2.47703 13.8356 2.47703ZM12.925 9.97662C13.2836 10.184 13.4062 10.6427 13.1989 11.0013C12.9418 11.4458 12.6235 11.8637 12.2446 12.2426C9.90146 14.5858 6.10247 14.5858 3.75933 12.2426L2.91833 11.4017V12.773C2.91833 13.1872 2.58255 13.523 2.16834 13.523C1.75412 13.523 1.41834 13.1872 1.41834 12.773L1.41833 9.59099C1.41833 9.17678 1.75412 8.84099 2.16833 8.84099H5.35031C5.76453 8.84099 6.10032 9.17678 6.10032 9.59099C6.10032 10.0052 5.76453 10.341 5.35032 10.341H3.97899L4.81999 11.182C6.57734 12.9393 9.42659 12.9393 11.1839 11.182C11.4696 10.8963 11.7082 10.5827 11.9003 10.2504C12.1077 9.89186 12.5665 9.76927 12.925 9.97662Z\" fill=\"#0F172A\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/lightning",
    "color": "semantic.color.brand.primary",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.58011 1.07655C9.88578 1.22638 10.0522 1.56328 9.98545 1.89709L9.16486 6H13.25C13.5437 6 13.8103 6.17136 13.9323 6.43847C14.0542 6.70558 14.0091 7.0193 13.8168 7.2412L7.31678 14.7412C7.09383 14.9984 6.72559 15.0733 6.41991 14.9234C6.11424 14.7736 5.94781 14.4367 6.01458 14.1029L6.83516 10H2.75001C2.45637 10 2.18974 9.82864 2.06777 9.56153C1.9458 9.29442 1.99093 8.9807 2.18324 8.7588L8.68324 1.2588C8.90619 1.00155 9.27444 0.92672 9.58011 1.07655Z\" fill=\"#0F172A\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/search-empty",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.9393 8.06066C5.35352 7.47487 5.35352 6.52513 5.9393 5.93934C6.52509 5.35355 7.47484 5.35355 8.06063 5.93934C8.64641 6.52513 8.64641 7.47487 8.06063 8.06066C7.47484 8.64645 6.52509 8.64645 5.9393 8.06066Z\" fill=\"#0F172A\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM4.87864 4.87868C3.70707 6.05025 3.70707 7.94975 4.87864 9.12132C5.86708 10.1098 7.37364 10.2643 8.52406 9.58486L9.71924 10.7803C10.0121 11.0732 10.487 11.0732 10.7799 10.7804C11.0728 10.4875 11.0729 10.0126 10.78 9.71972L9.58475 8.52422C10.2642 7.37378 10.1098 5.86715 9.12129 4.87868C7.94971 3.70711 6.05022 3.70711 4.87864 4.87868Z\" fill=\"#0F172A\"/>\n</svg>\n"
  },
  {
    "name": "atom/icon/x-circle",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": false,
    "svgContent": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM10.7803 10.7803C10.4874 11.0732 10.0126 11.0732 9.71967 10.7803L8 9.06066L6.28033 10.7803C5.98744 11.0732 5.51256 11.0732 5.21967 10.7803C4.92678 10.4874 4.92678 10.0126 5.21967 9.71967L6.93934 8L5.21967 6.28033C4.92678 5.98744 4.92678 5.51256 5.21967 5.21967C5.51256 4.92678 5.98744 4.92678 6.28033 5.21967L8 6.93934L9.71967 5.21967C10.0126 4.92678 10.4874 4.92678 10.7803 5.21967C11.0732 5.51256 11.0732 5.98744 10.7803 6.28033L9.06066 8L10.7803 9.71967C11.0732 10.0126 11.0732 10.4874 10.7803 10.7803Z\" fill=\"black\"/>\n</svg>\n"
  },
  {
    "name": "atom/logo/T",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/card",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/wallet",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/bank",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/receipt",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/refund",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/calendar-bill",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/timer",
    "color": "semantic.color.icon.default",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/arrow-up",
    "color": "semantic.color.feedback.error",
    "size": 20,
    "skeleton": true
  },
  {
    "name": "atom/icon/arrow-down",
    "color": "semantic.color.feedback.success",
    "size": 20,
    "skeleton": true
  }
];

// ref 자동 STRETCH 추론용 — generator-core 가 참조
const SPEC_REGISTRY = {
  "atom/banner": {
    "width": "FILL",
    "height": "HUG"
  },
  "atom/barcode": {
    "width": 327,
    "height": 80
  },
  "atom/btn-icon": {
    "width": "{component.btn-icon.default.containerSize}",
    "height": "{component.btn-icon.default.containerSize}"
  },
  "atom/btn-inline": {
    "width": "HUG",
    "height": "{component.button.inline.height}"
  },
  "atom/btn": {
    "width": "HUG",
    "height": "{component.button.primary.height}"
  },
  "atom/checkbox": {
    "width": "{component.checkbox.default.size}",
    "height": "{component.checkbox.default.size}"
  },
  "atom/divider": {
    "width": "FILL",
    "height": "{component.divider.default.thickness}"
  },
  "atom/icon-bubble": {
    "width": "{foundation.dimension.size.icon-xl}",
    "height": "{foundation.dimension.size.icon-xl}"
  },
  "atom/link": {
    "width": "HUG",
    "height": "HUG"
  },
  "atom/radio": {
    "width": "{component.radio.default.size}",
    "height": "{component.radio.default.size}"
  },
  "atom/skeleton": {
    "width": "{foundation.dimension.size.thumbnail-lg}",
    "height": "{foundation.dimension.spacing.xl}"
  },
  "atom/spinner": {
    "width": "{foundation.dimension.size.icon-lg}",
    "height": "{foundation.dimension.size.icon-lg}"
  },
  "atom/tab-item": {
    "width": "HUG",
    "height": "{component.tab.default.height}"
  },
  "atom/tag": {
    "width": "HUG",
    "height": "{component.badge.default.height}"
  },
  "atom/text-area": {
    "width": "FILL",
    "height": "{component.textarea.default.minHeight}"
  },
  "atom/text-input": {
    "width": "FILL",
    "height": "{component.input.default.height}"
  },
  "atom/text-label": {
    "width": "HUG",
    "height": null
  },
  "atom/thumb-portrait": {
    "width": "{component.thumb.portrait.width-md}",
    "height": "{component.thumb.portrait.height-md}"
  },
  "atom/thumb": {
    "width": "{component.thumb.default.size-md}",
    "height": "{component.thumb.default.size-md}"
  },
  "atom/tooltip": {
    "width": "HUG",
    "height": "HUG"
  },
  "mol/accordion-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/accordion": {
    "width": "FILL",
    "height": null
  },
  "mol/ai-insight": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/all-agree-row": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/amount-row": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/auth-method-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/banner-padded": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/barcode-display": {
    "width": "HUG",
    "height": null
  },
  "mol/barcode-footer": {
    "width": 327,
    "height": "HUG"
  },
  "mol/card-header": {
    "width": "HUG",
    "height": null
  },
  "mol/card-info-split": {
    "width": 327,
    "height": "HUG"
  },
  "mol/card-info-stack": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/card": {
    "width": "FILL",
    "height": null
  },
  "mol/checkbox-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/cta-pair": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/document-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/form-row": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/info-row": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/info-stack": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/line-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/list-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/logo-grid": {
    "width": "HUG",
    "height": "HUG"
  },
  "mol/notice-block": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/notice-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/payment-history-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/payment-method-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/payment-target-item": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/post-action-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/section-header": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/timer-banner": {
    "width": "FILL",
    "height": "HUG"
  },
  "mol/total-amount": {
    "width": "HUG",
    "height": "HUG"
  },
  "mol/variation-row": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/bill-detail-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/bill-document-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/bill-summary-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/bill-variation-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/cancel-warning-sheet": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/delegate-record-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/delegate-target-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/limit-status-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/method-action-pair": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/payment-confirm-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/payment-failure-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/payment-history-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/payment-method-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/payment-result-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/prepay-result-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/prepay-target-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/refund-target-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/reserve-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/reserve-result-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/setting-auto-prepay-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/setting-document-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/setting-limit-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/setting-method-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/setting-method-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/third-party-consent-sheet": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/usage-forecast-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/usage-line-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/BIL/usage-realtime-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/auth-code-input": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/auth-method-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/auth-widget": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/bottomsheet-terms-detail": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/card-bill-summary": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/card-device-recall": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/history-summary": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/info-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/info-input": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/leave-block-check": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/leave-confirm-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/leave-impact-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/leave-impact-notice": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/leave-processing": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/leave-reason-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/loading-screen": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/login-form": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/meta": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/notice-bottomsheet": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/post-actions": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/restored-summary": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/result-block": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/result-summary": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/term-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/term-section-dormant": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MBR/term-section": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MYBEN/card-barcode": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MYBEN/card-brand-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MYBEN/card-coupon-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MYBEN/card-movie-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MYBEN/card-points": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MYBEN/card-promo": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/MYBEN/promo-banner": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/PRDD/discount-box": {
    "width": "FILL",
    "height": null
  },
  "ogn/PRDD/footer-cta": {
    "width": "FILL",
    "height": "{foundation.dimension.size.sticky-footer-height}"
  },
  "ogn/PRDD/gallery": {
    "width": "FILL",
    "height": null
  },
  "ogn/PRDD/product-info": {
    "width": "FILL",
    "height": null
  },
  "ogn/PRDD/recommend-list": {
    "width": "FILL",
    "height": null
  },
  "ogn/SCH/answer-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/category-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/compare-tray": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/empty-hero": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/keyword-chips": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/popular-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/quick-action-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/quick-entry-card": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/result-list": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/search-bar": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/SCH/tabs": {
    "width": "FILL",
    "height": "{component.tab.default.height}"
  },
  "ogn/bottomsheet": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/footer-cs": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/gnb": {
    "width": "FILL",
    "height": 56
  },
  "ogn/header": {
    "width": "FILL",
    "height": "{foundation.dimension.size.header-compact}"
  },
  "ogn/snack-bar": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/status-bar": {
    "width": "FILL",
    "height": 44
  },
  "ogn/step-indicator": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/sticky-footer-cta": {
    "width": "FILL",
    "height": "HUG"
  },
  "ogn/sticky-footer": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.sticky-footer-height}"
  },
  "ogn/tab-bar": {
    "width": "FILL",
    "height": "{component.tab-bar.default.height}"
  },
  "ogn/tab": {
    "width": "FILL",
    "height": "{component.tab.default.height}"
  },
  "page/BIL/bill-detail": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/bill-document": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/bill-summary": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-confirm": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-delegate-auth": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-delegate": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-failure": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-history": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-immediate": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-method": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-prepay": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-reserve": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-resolved": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-target": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/payment-third-party": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/setting-auto-prepay": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/setting-content-limit": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/setting-document": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/setting-method-cancel": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/setting-mobile-limit": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/setting-payment-method": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/usage-line": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/BIL/usage-realtime": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/dormant-auth": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/dormant-complete": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/dormant-loading": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/dormant-terms": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/leave-auth": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/leave-complete": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/leave-confirm": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/leave-impact": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/leave-loading": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/leave-reason": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/rejoin-auth": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/rejoin-blocked": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/rejoin-complete": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/rejoin-info": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/rejoin-loading": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/rejoin-terms": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/signup-auth": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/signup-complete": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/signup-info": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/signup-loading": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MBR/signup-terms": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/MYBEN/main": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/PRDD/case1-standalone": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/SCH/input": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/SCH/results": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  },
  "page/SCH/zero": {
    "width": "{foundation.dimension.size.screen-mobile}",
    "height": "{foundation.dimension.size.screen-mobile-height}"
  }
};

// =============================================
// SKT Genui — Generator Core
// scripter/bundle.js 가 이 파일 내용을 .generated.js 로 합침.
// DS_TOKENS, COMPONENT_SPEC 변수는 bundler 가 상단에 주입.
// =============================================

// ---------- 1. Token Resolver ----------
function hexToRgb(s) {
  s = s.replace("#", "");
  if (s.length === 3) s = s.split("").map((c) => c + c).join("");
  const n = parseInt(s.slice(0, 6), 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
}

function parseLiteral(v) {
  if (typeof v === "number") return { type: "dimension", px: v };
  if (typeof v !== "string") return v;
  if (/^#[0-9a-f]{3,8}$/i.test(v)) return { type: "color", rgb: hexToRgb(v) };
  if (/^-?\d+(\.\d+)?(px|ms)$/.test(v)) return { type: "dimension", px: parseFloat(v) };
  if (/^-?\d+(\.\d+)?%$/.test(v)) return { type: "percent", value: parseFloat(v) };
  return v;
}

// Returns the original token path if ref looks like "{a.b.c}", else null.
function tokenPathOf(ref) {
  if (typeof ref !== "string") return null;
  const m = ref.match(/^\{(.+)\}$/);
  return m ? m[1] : null;
}

function resolveToken(tokens, ref, seen) {
  if (!seen) seen = new Set();
  if (typeof ref !== "string") return ref;
  const m = ref.match(/^\{(.+)\}$/);
  if (!m) return parseLiteral(ref);
  const path = m[1];
  if (seen.has(path)) throw new Error("Token cycle: " + path);
  seen.add(path);
  const dsNode = path.split(".").reduce((o, k) => (o == null ? o : o[k]), tokens);
  if (!dsNode) throw new Error("Token missing: " + path);
  const v = dsNode.value !== undefined ? dsNode.value : dsNode;
  if (typeof v === "string" && /^\{.+\}$/.test(v)) return resolveToken(tokens, v, seen);
  // shadow composite
  if (v && typeof v === "object" && "blur" in v && "color" in v) {
    const c = resolveToken(tokens, v.color, new Set());
    return {
      type: "shadow",
      offset: { x: parseFloat(v.x), y: parseFloat(v.y) },
      radius: parseFloat(v.blur),
      spread: parseFloat(v.spread),
      color: { r: c.rgb.r, g: c.rgb.g, b: c.rgb.b, a: v.alpha }
    };
  }
  // typography composite
  if (v && typeof v === "object" && "fontSize" in v) {
    const fs = resolveToken(tokens, v.fontSize, new Set());
    const lh = resolveToken(tokens, v.lineHeight, new Set());
    const fw = resolveToken(tokens, v.fontWeight, new Set());
    const ls = resolveToken(tokens, v.letterSpacing, new Set());
    // lineHeight 는 PIXELS 또는 PERCENT — unit 정보 보존
    let lineHeightObj;
    if (lh && lh.type === "percent") {
      lineHeightObj = { value: lh.value, unit: "PERCENT" };
    } else if (lh && lh.px != null) {
      lineHeightObj = { value: lh.px, unit: "PIXELS" };
    } else if (typeof lh === "number") {
      lineHeightObj = { value: lh, unit: "PIXELS" };
    } else {
      lineHeightObj = null;
    }
    return {
      type: "typography",
      fontSize: fs.px != null ? fs.px : parseFloat(fs),
      lineHeight: lineHeightObj,
      fontWeight: Number(fw.px != null ? fw : fw),
      letterSpacing: ls.px != null ? ls.px : parseFloat(ls || 0),
      // 각 필드가 참조하는 토큰 경로 (Variable 바인딩에 쓰임)
      bindings: {
        fontSize:      tokenPathOf(v.fontSize),
        lineHeight:    tokenPathOf(v.lineHeight),
        fontWeight:    tokenPathOf(v.fontWeight),
        letterSpacing: tokenPathOf(v.letterSpacing)
      }
    };
  }
  return parseLiteral(v);
}

// ---------- 2. Spec merge (base + override) ----------
function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

function setDeep(obj, path, val) {
  const parts = path.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    const m = part.match(/^children\[(.+?)\]$/);
    if (m && cur.children) {
      // children[id] 패턴 — 배열 안 id 자식으로 진입
      const child = cur.children.find((c) => c.id === m[1]);
      if (!child) return; // path 매칭 실패 — silent skip
      cur = child;
    } else {
      cur = cur[part] = cur[part] || {};
    }
  }
  cur[parts[parts.length - 1]] = val;
}

function mergeSpec(base, override) {
  const out = deepClone(base);
  for (const key in override) {
    if (key.indexOf("children[") === 0) {
      const m = key.match(/^children\[(.+?)\]\.(.+)$/);
      if (m && out.children) {
        const child = out.children.find((c) => c.id === m[1]);
        if (child) setDeep(child, m[2], override[key]);
      }
    } else if (override[key] !== null && typeof override[key] === "object" && !Array.isArray(override[key])) {
      out[key] = Object.assign({}, out[key] || {}, override[key]);
    } else {
      out[key] = override[key];
    }
  }
  return out;
}

// ---------- 3. Spec validation (Figma 호출 전) ----------
function collectTokenRefs(obj, acc) {
  if (acc == null) acc = [];
  if (typeof obj === "string") {
    const m = obj.match(/^\{(.+)\}$/);
    if (m) acc.push(m[1]);
  } else if (Array.isArray(obj)) {
    obj.forEach((x) => collectTokenRefs(x, acc));
  } else if (obj && typeof obj === "object") {
    Object.values(obj).forEach((x) => collectTokenRefs(x, acc));
  }
  return acc;
}

function validateSpec(spec, tokens) {
  const refs = collectTokenRefs(spec);
  const missing = [];
  for (const r of refs) {
    const dsNode = r.split(".").reduce((o, k) => (o == null ? o : o[k]), tokens);
    if (!dsNode) missing.push(r);
  }
  if (missing.length) throw new Error("Missing tokens:\n  - " + Array.from(new Set(missing)).join("\n  - "));
}

// ---------- 4. Variant combinatorics ----------
function enumerateVariants(axes) {
  return axes.reduce(function (acc, ax) {
    const next = [];
    for (let i = 0; i < acc.length; i++) {
      const combo = acc[i];
      for (let j = 0; j < ax.values.length; j++) {
        const val = ax.values[j];
        const merged = Object.assign({}, combo);
        merged[ax.name] = val;
        next.push(merged);
      }
    }
    return next;
  }, [{}]);
}

function variantKey(combo) {
  return Object.keys(combo).map((k) => k + "=" + combo[k]).join(",");
}

function variantFigmaName(combo) {
  return Object.keys(combo).map((k) => k + "=" + combo[k]).join(", ");
}

// ---------- 5. Figma node builders ----------
function toFontStyle(weight) {
  if (weight >= 700) return "Bold";
  if (weight >= 600) return "SemiBold";
  if (weight >= 500) return "Medium";
  return "Regular";
}

function hasHangul(s) { return /[\uAC00-\uD7A3]/.test(s); }

async function preloadFonts() {
  const families = [
    { family: "Inter", style: "Regular" },
    { family: "Inter", style: "Medium" },
    { family: "Inter", style: "Semi Bold" },
    { family: "Inter", style: "Bold" },
    { family: "Pretendard", style: "Regular" },
    { family: "Pretendard", style: "Medium" },
    { family: "Pretendard", style: "SemiBold" },
    { family: "Pretendard", style: "Bold" }
  ];
  const loaded = [];
  const failed = [];
  for (const f of families) {
    try {
      await figma.loadFontAsync(f);
      loaded.push(f);
    } catch (e) {
      failed.push(f);
    }
  }
  return { loaded, failed };
}

function pickFont(textContent, weight, loadedFamilies) {
  const style = toFontStyle(weight);
  const needKorean = hasHangul(textContent);
  const want = needKorean ? "Pretendard" : "Inter";
  // Pretendard uses "SemiBold" (no space), Inter uses "Semi Bold"
  const wantStyle = want === "Pretendard" && style === "SemiBold" ? "SemiBold" : (want === "Inter" && style === "SemiBold" ? "Semi Bold" : style);
  const hit = loadedFamilies.find((f) => f.family === want && f.style === wantStyle);
  if (hit) return hit;
  // Fallback: try the other family with corresponding style
  const fallbackFamily = want === "Pretendard" ? "Inter" : "Pretendard";
  const fallbackStyle = fallbackFamily === "Inter" && style === "SemiBold" ? "Semi Bold" : (fallbackFamily === "Pretendard" && style === "SemiBold" ? "SemiBold" : style);
  const fb = loadedFamilies.find((f) => f.family === fallbackFamily && f.style === fallbackStyle);
  if (fb) return fb;
  return { family: "Inter", style: "Regular" };
}

// ---------- Variable binding helpers ----------
let _varMapCache = null;
function getVariableMap() {
  if (_varMapCache) return _varMapCache;
  try {
    const raw = figma.root.getPluginData("skt-vars");
    _varMapCache = raw ? JSON.parse(raw) : {};
  } catch (e) { _varMapCache = {}; }
  return _varMapCache;
}

// id → Variable 객체 cache (dynamic-page documentAccess 호환 위해 async init)
let _varObjCache = null;
async function ensureVariableObjects() {
  if (_varObjCache !== null) return;
  _varObjCache = {};
  try {
    const cols = await figma.variables.getLocalVariableCollectionsAsync();
    for (let i = 0; i < cols.length; i++) {
      const c = cols[i];
      for (let j = 0; j < c.variableIds.length; j++) {
        const vid = c.variableIds[j];
        try {
          const v = await figma.variables.getVariableByIdAsync(vid);
          if (v) _varObjCache[vid] = v;
        } catch (e) {}
      }
    }
  } catch (e) { console.warn("ensureVariableObjects fail:", e.message); }
}

function findVariable(path) {
  if (!_varObjCache) return null;
  const varMap = getVariableMap();
  const id = varMap[path];
  if (!id) return null;
  return _varObjCache[id] || null;
}

// Set a FLOAT field; bind to variable if available, else raw assign.
function setFloatField(tgt, field, ref, tokens) {
  if (ref == null) return;
  const resolved = resolveToken(tokens, ref);
  const value = resolved && resolved.px != null ? resolved.px : (typeof resolved === "number" ? resolved : 0);
  try { tgt[field] = value; } catch (e) {}
  const path = tokenPathOf(ref);
  if (!path) return;
  const v = findVariable(path);
  if (!v) return;
  try { tgt.setBoundVariable(field, v); }
  catch (e) { console.warn("bind fail:", field, "→", path, e.message); }
}

function buildSolidPaint(rgbColor, variableId) {
  const paint = { type: "SOLID", color: { r: rgbColor.r, g: rgbColor.g, b: rgbColor.b } };
  if (variableId) {
    paint.boundVariables = { color: { type: "VARIABLE_ALIAS", id: variableId } };
  }
  return paint;
}

function applyFills(tgt, resolvedColor, variableId) {
  if (!resolvedColor) { tgt.fills = []; return; }
  tgt.fills = [buildSolidPaint(resolvedColor.rgb, variableId)];
}

function applyFillsRef(tgt, fillRef, tokens) {
  if (fillRef == null) { tgt.fills = []; return; }
  const resolvedColor = resolveToken(tokens, fillRef);
  const path = tokenPathOf(fillRef);
  const vid = path ? (getVariableMap()[path] || null) : null;
  applyFills(tgt, resolvedColor, vid);
}

function applyStrokeResolved(tgt, strokeSpec, tokens) {
  if (!strokeSpec) { tgt.strokes = []; return; }
  const c = resolveToken(tokens, strokeSpec.color);
  const path = tokenPathOf(strokeSpec.color);
  const vid = path ? (getVariableMap()[path] || null) : null;
  tgt.strokes = [buildSolidPaint(c.rgb, vid)];
  // strokeWeight: bind if possible (usually a raw number in spec)
  const w = strokeSpec.weight != null ? strokeSpec.weight : 1;
  tgt.strokeWeight = typeof w === "number" ? w : (resolveToken(tokens, w).px || 1);
}

function applyShadow(tgt, shadowRef, tokens) {
  if (!shadowRef) { tgt.effects = []; return; }
  const s = resolveToken(tokens, shadowRef);
  tgt.effects = [{
    type: "DROP_SHADOW",
    visible: true,
    blendMode: "NORMAL",
    color: s.color,
    offset: s.offset,
    radius: s.radius,
    spread: s.spread
  }];
}

function px(resolved) {
  if (resolved == null) return 0;
  if (typeof resolved === "number") return resolved;
  if (typeof resolved === "object" && "px" in resolved) return resolved.px;
  if (typeof resolved === "string") return parseFloat(resolved);
  return 0;
}

function bindTextField(textNode, field, path) {
  if (!path) return;
  const v = findVariable(path);
  if (!v) return;
  try { textNode.setBoundVariable(field, v); }
  catch (e) { console.warn("bind " + field + " (" + path + "):", e.message); }
}

function buildText(childSpec, tokens, loadedFonts) {
  const t = figma.createText();
  t.name = childSpec.id || "text";
  const ts = resolveToken(tokens, childSpec.textStyle);
  const font = pickFont(childSpec.content || "", ts.fontWeight, loadedFonts);
  t.fontName = font;
  t.characters = childSpec.content || "";

  // fontFamily Variable 바인딩 — DS 의 foundation.typography.fontFamily.primary/fallback 에 묶음.
  // pickFont 가 선택한 family 에 맞는 Variable 로 연결 (Pretendard → primary, Inter → fallback).
  // style suffix 차이 (Pretendard "SemiBold" vs Inter "Semi Bold") 때문에 각자 매칭 필수.
  const familyVarPath = font.family === "Pretendard"
    ? "foundation.typography.fontFamily.primary"
    : "foundation.typography.fontFamily.fallback";
  const familyVar = findVariable(familyVarPath);
  if (familyVar) {
    try { t.setBoundVariable("fontFamily", familyVar); }
    catch (e) { console.warn("bind fontFamily " + font.family + " 실패:", e.message); }
  }

  // Raw 값 먼저 적용
  t.fontSize = ts.fontSize;
  if (ts.lineHeight) {
    // ts.lineHeight 는 {value, unit} 객체 ("PIXELS" 또는 "PERCENT")
    t.lineHeight = { value: ts.lineHeight.value, unit: ts.lineHeight.unit };
  }
  if (ts.letterSpacing != null) t.letterSpacing = { value: ts.letterSpacing, unit: "PIXELS" };

  // Variable 바인딩 (tokens 에 매핑 존재 시)
  if (ts.bindings) {
    bindTextField(t, "fontSize",      ts.bindings.fontSize);
    // lineHeight: PERCENT unit 일 땐 Figma 가 Variable 바인딩 시 unit 을 PIXELS 로 강제하는 문제가 있어
    //            raw 값만 적용하고 Variable 바인딩은 skip. PIXELS 일 때만 binding 시도.
    if (ts.lineHeight && ts.lineHeight.unit === "PIXELS") {
      bindTextField(t, "lineHeight", ts.bindings.lineHeight);
    }
    bindTextField(t, "letterSpacing", ts.bindings.letterSpacing);
    // fontWeight: Figma 가 FLOAT Variable 을 fontName.style 로 매핑해줌 (Pretendard SemiBold / Inter Semi Bold 둘 다 600 으로 호환).
    bindTextField(t, "fontWeight",    ts.bindings.fontWeight);
  }

  // Text color with variable binding
  applyFillsRef(t, childSpec.color, tokens);

  // textAutoResize — "HEIGHT" 면 width 고정 + height 자동 (긴 문장 자동 줄바꿈)
  // "NONE" 면 양축 고정, 미지정이면 Figma 기본 (WIDTH_AND_HEIGHT)
  if (childSpec.autoResize) {
    try { t.textAutoResize = childSpec.autoResize; }
    catch (e) { console.warn("textAutoResize " + childSpec.autoResize + " 실패:", e.message); }
  }

  // textDecoration — "UNDERLINE" / "STRIKETHROUGH" / "NONE". atom/link 같은 link 시각 용.
  if (childSpec.textDecoration) {
    try { t.textDecoration = childSpec.textDecoration; }
    catch (e) { console.warn("textDecoration " + childSpec.textDecoration + " 실패:", e.message); }
  }

  // textAlignHorizontal — "LEFT" / "CENTER" / "RIGHT" / "JUSTIFIED". result-summary 같이 중앙 정렬 텍스트용.
  if (childSpec.textAlignHorizontal) {
    try { t.textAlignHorizontal = childSpec.textAlignHorizontal; }
    catch (e) { console.warn("textAlignHorizontal " + childSpec.textAlignHorizontal + " 실패:", e.message); }
  }
  return t;
}

function buildFrame(spec, variantName, tokens, loadedFonts) {
  const f = figma.createFrame();
  f.name = variantName;
  const L = spec.layout || {};
  const V = spec.visual || {};

  // layout mode + alignment (non-bindable)
  // NONE 모드면 auto-layout 전용 속성은 모두 skip — Figma API 가 throw
  if (L.mode) {
    try { f.layoutMode = L.mode; } catch (e) { console.warn("layoutMode 실패:", e.message); }
  }
  const isAutoLayout = L.mode === "VERTICAL" || L.mode === "HORIZONTAL";
  if (isAutoLayout) {
    if (L.primaryAxisSizingMode) {
      try { f.primaryAxisSizingMode = L.primaryAxisSizingMode; } catch (e) { console.warn("primaryAxisSizingMode 실패:", e.message); }
    }
    if (L.counterAxisSizingMode) {
      try { f.counterAxisSizingMode = L.counterAxisSizingMode; } catch (e) { console.warn("counterAxisSizingMode 실패:", e.message); }
    }
    if (L.primaryAxisAlignItems) {
      try { f.primaryAxisAlignItems = L.primaryAxisAlignItems; } catch (e) { console.warn("primaryAxisAlignItems 실패:", e.message); }
    }
    if (L.counterAxisAlignItems) {
      try { f.counterAxisAlignItems = L.counterAxisAlignItems; } catch (e) { console.warn("counterAxisAlignItems 실패:", e.message); }
    }
  }

  // Bindable scalars: padding, itemSpacing — auto-layout 일 때만 의미 있음
  if (isAutoLayout) {
    setFloatField(f, "paddingTop",    L.paddingTop,    tokens);
    setFloatField(f, "paddingRight",  L.paddingRight,  tokens);
    setFloatField(f, "paddingBottom", L.paddingBottom, tokens);
    setFloatField(f, "paddingLeft",   L.paddingLeft,   tokens);
    if (L.itemSpacing != null) setFloatField(f, "itemSpacing", L.itemSpacing, tokens);
  }

  // Sizing — width/height 에 숫자 또는 token 이 있으면 resize + bind
  function resolveDim(val) {
    if (val == null || val === "HUG" || val === "FILL") return null;
    if (typeof val === "number") return val;
    const r = resolveToken(tokens, val);
    if (r && r.px != null) return r.px;
    if (typeof r === "number") return r;
    return null;
  }
  const targetW = resolveDim(L.width);
  const targetH = resolveDim(L.height);
  if (targetW != null || targetH != null) {
    f.resize(
      targetW != null ? targetW : f.width,
      targetH != null ? targetH : f.height
    );
  }
  // Variable 바인딩 (토큰 경로가 있을 때만)
  const wpath = tokenPathOf(L.width);
  if (wpath) {
    const vw = findVariable(wpath);
    if (vw) {
      try { f.setBoundVariable("width", vw); }
      catch (e) { console.warn("bind width:", e.message); }
    }
  }
  const hpath = tokenPathOf(L.height);
  if (hpath) {
    const vh = findVariable(hpath);
    if (vh) {
      try { f.setBoundVariable("height", vh); }
      catch (e) { console.warn("bind height:", e.message); }
    }
  }

  // width/height = "FILL" or "HUG" → layoutSizingHorizontal / Vertical 직접 설정
  // (parent auto-layout 안에서만 FILL 유효. top-level Component 빌드 시 throw → fallback width 토큰 자동 적용)
  if (isAutoLayout) {
    if (L.width === "FILL") {
      let filled = false;
      try { f.layoutSizingHorizontal = "FILL"; filled = true; }
      catch (e) { /* top-level — fallback below */ }
      if (!filled) {
        const fbToken = spec.widthFallback || "{foundation.dimension.size.screen-content-width}";
        const fb = resolveToken(tokens, fbToken);
        if (fb && fb.px != null) {
          f.resize(fb.px, f.height);
          const fbPath = tokenPathOf(fbToken);
          if (fbPath) {
            const vw = findVariable(fbPath);
            if (vw) { try { f.setBoundVariable("width", vw); } catch (e) {} }
          }
        }
      }
    } else if (L.width === "HUG") {
      try { f.layoutSizingHorizontal = "HUG"; }
      catch (e) { console.warn("layoutSizingHorizontal HUG 실패:", e.message); }
    }
    if (L.height === "FILL" || L.height === "HUG") {
      try { f.layoutSizingVertical = L.height; }
      catch (e) { console.warn("layoutSizingVertical " + L.height + " 실패:", e.message); }
    }
  }

  // minHeight — auto-layout primary AUTO 모드일 때 콘텐츠 적어도 baseline 보장
  if (L.minHeight != null) {
    const minH = resolveDim(L.minHeight);
    if (minH != null) {
      try { f.minHeight = minH; }
      catch (e) { console.warn("minHeight 실패:", e.message); }
    }
    const mhpath = tokenPathOf(L.minHeight);
    if (mhpath) {
      const vmh = findVariable(mhpath);
      if (vmh) {
        try { f.setBoundVariable("minHeight", vmh); }
        catch (e) { /* Figma 가 minHeight binding 미지원할 수 있음 — silent */ }
      }
    }
  }

  // visual — cornerRadius (bindable)
  if (V.cornerRadius != null) setFloatField(f, "cornerRadius", V.cornerRadius, tokens);
  // fill (bindable via paint.boundVariables)
  if (V.fill != null) applyFillsRef(f, V.fill, tokens);
  else f.fills = [];
  // stroke
  applyStrokeResolved(f, V.stroke, tokens);
  // shadow (non-bindable — no Variable type for composite shadow)
  applyShadow(f, V.shadow, tokens);
  if (V.opacity != null) f.opacity = V.opacity;

  // children
  const childList = spec.children || [];
  for (let i = 0; i < childList.length; i++) {
    const child = childList[i];
    let node = null;
    if (child.kind === "text") {
      node = buildText(child, tokens, loadedFonts);
    } else if (child.kind === "ref") {
      node = buildRef(child);
    } else if (child.kind === "group") {
      // 익명 서브 프레임 — child 스펙을 mini-spec 으로 재귀 빌드
      node = buildFrame(child, child.id || "group", tokens, loadedFonts);
    }
    if (!node) continue;
    f.appendChild(node);
    // visible: false → 노드 보이지만 hidden (auto-layout 에서 0px 차지 → 시각·공간 모두 사라짐)
    if (child.visible === false) {
      try { node.visible = false; }
      catch (e) { console.warn("visible=false 실패:", child.id, e.message); }
    }
    // Per-child alignment: 명시된 layoutAlign 우선, 미지정 시 ref 대상 spec 의 layout 의도로 자동 추론.
    //   - 부모 VERTICAL + 자식 ref spec.width === "FILL"  → STRETCH 자동 부여
    //   - 부모 HORIZONTAL + 자식 ref spec.height === "FILL" → STRETCH 자동 부여
    //   - 자동화 명시적 skip 하려면 spec 에 layoutAlign: "INHERIT" 적기 (아무것도 안 함)
    // SPEC_REGISTRY 는 bundle.js 가 wrapper 로 주입하는 const ({ "atom/banner": { width, height }, ... }).
    // 단독 사용 시 미정의 → typeof 가드.
    let effectiveAlign = child.layoutAlign;
    if (effectiveAlign === "INHERIT") {
      effectiveAlign = null;
    } else if (!effectiveAlign && child.kind === "ref" && child.component) {
      const refMeta = (typeof SPEC_REGISTRY !== "undefined") ? SPEC_REGISTRY[child.component] : null;
      if (refMeta) {
        const parentMode = spec.layout && spec.layout.mode;
        if (parentMode === "VERTICAL" && refMeta.width === "FILL") effectiveAlign = "STRETCH";
        else if (parentMode === "HORIZONTAL" && refMeta.height === "FILL") effectiveAlign = "STRETCH";
      }
    }
    if (effectiveAlign) {
      try { node.layoutAlign = effectiveAlign; }
      catch (e) { console.warn("layoutAlign 실패:", child.id, e.message); }
      // STRETCH 시 instance/frame 의 sizing 도 명시적으로 FILL 로 강제 (Figma v3 API).
      // layoutAlign 만으로는 instance baseline width 가 유지되는 케이스 있음 — § 12 우회책 대체.
      // 부모 VERTICAL → counter-axis 가로 → layoutSizingHorizontal
      // 부모 HORIZONTAL → counter-axis 세로 → layoutSizingVertical
      if (effectiveAlign === "STRETCH") {
        const parentMode = spec.layout && spec.layout.mode;
        try {
          if (parentMode === "VERTICAL") {
            try { node.setBoundVariable("width", null); } catch (ee) {}
            node.layoutSizingHorizontal = "FILL";
          } else if (parentMode === "HORIZONTAL") {
            try { node.setBoundVariable("height", null); } catch (ee) {}
            node.layoutSizingVertical = "FILL";
          }
        } catch (e) {
          console.warn("layoutSizing FILL 실패:", child.id, e.message);
        }
        // text 노드면 textAutoResize="HEIGHT" 도 자동 적용 — 줄글이 부모 폭에서 자동 줄바꿈
        // (autoResize 가 spec 에 명시되어 있으면 그 값을 우선; 명시 안 됐을 때만 default 적용)
        if (child.kind === "text" && !child.autoResize) {
          try { node.textAutoResize = "HEIGHT"; }
          catch (e) { console.warn("textAutoResize HEIGHT 자동 적용 실패:", child.id, e.message); }
        }
      }
    }
    // Growing: child takes max space on primary axis
    if (child.layoutGrow != null) {
      try { node.layoutGrow = child.layoutGrow; }
      catch (e) { console.warn("layoutGrow 실패:", child.id, e.message); }
    }
    // scrollBehavior — Figma prototype 에서 부모 스크롤 시 자식 동작.
    // "STICKY_SCROLLS" = sticky (footer / GNB 류), "FIXED" = 항상 고정, "SCROLLS" = 기본 (스크롤 따라 이동).
    if (child.scrollBehavior) {
      try { node.scrollBehavior = child.scrollBehavior; }
      catch (e) { console.warn("scrollBehavior 실패:", child.id, e.message); }
    }
    // group/frame 자식이 spec 에 width/height = "FILL" 명시한 경우 — buildFrame 안에서는 부모가 없어 throw 됐을 수 있음.
    // appendChild 이후라 이제 부모가 auto-layout 이므로 다시 시도.
    // 단, buildFrame 의 fallback 에서 width 를 resize + Variable 바인딩한 상태이므로
    // 먼저 바인딩 해제 + 리사이즈 fallback 영향 무력화 후 layoutSizingHorizontal=FILL 적용.
    if (child.kind === "group" && child.layout) {
      if (child.layout.width === "FILL") {
        try { node.setBoundVariable("width", null); } catch (e) {}
        try { node.layoutSizingHorizontal = "FILL"; }
        catch (e) { console.warn("post-append layoutSizingHorizontal FILL 실패:", child.id, e.message); }
      }
      if (child.layout.height === "FILL") {
        try { node.setBoundVariable("height", null); } catch (e) {}
        try { node.layoutSizingVertical = "FILL"; }
        catch (e) { console.warn("post-append layoutSizingVertical FILL 실패:", child.id, e.message); }
      }
    }
    // Absolute positioning: child taken out of auto-layout flow.
    // x/y 는 부모 frame 기준 좌표. constraints 로 부모 resize 시 동작 결정.
    if (child.layoutPositioning === "ABSOLUTE") {
      try { node.layoutPositioning = "ABSOLUTE"; }
      catch (e) { console.warn("layoutPositioning 실패:", child.id, e.message); }
      if (child.x != null) {
        try { node.x = child.x; } catch (e) {}
      }
      if (child.y != null) {
        try { node.y = child.y; } catch (e) {}
      }
      if (child.constraints) {
        // 직관적 표현 (TOP/BOTTOM/LEFT/RIGHT) 을 Figma constraint (MIN/MAX) 로 매핑
        // — sticky-footer / snack-bar 같은 floating chrome 작성 시 사용자 친화
        function mapConstraint(v) {
          if (v === "TOP" || v === "LEFT") return "MIN";
          if (v === "BOTTOM" || v === "RIGHT") return "MAX";
          return v || "MIN";
        }
        try {
          node.constraints = {
            horizontal: mapConstraint(child.constraints.horizontal),
            vertical: mapConstraint(child.constraints.vertical),
          };
        } catch (e) { console.warn("constraints 실패:", child.id, e.message); }
      }
    }
  }

  return f;
}

// ---------- Ref child: atom/mol 인스턴스 참조 ----------
function matchVariantByName(componentName, variantProps) {
  for (const key in variantProps) {
    if (componentName.indexOf(key + "=" + variantProps[key]) === -1) return false;
  }
  return true;
}

function findMasterForRef(setName) {
  // Component Set 우선, 없으면 단일 Component
  const sets = figma.root.findAll(function (n) {
    return n.type === "COMPONENT_SET" && n.name === setName;
  });
  if (sets.length > 0) return { kind: "set", targetNode: sets[0] };
  const comps = figma.root.findAll(function (n) {
    return n.type === "COMPONENT" && n.name === setName;
  });
  if (comps.length > 0) return { kind: "comp", targetNode: comps[0] };
  return null;
}

function applyInstanceProps(instance, props) {
  if (!props) return;
  const processedKeys = {};

  function countUnprocessed() {
    let c = 0;
    for (const k in props) if (!processedKeys[k]) c++;
    return c;
  }

  // INSTANCE_SWAP 의 value 는 component id — path 형태("atom/icon/heart")이면 자동 변환
  function resolvePropValue(val, propType) {
    if (propType === "INSTANCE_SWAP" && typeof val === "string" && val.indexOf("/") !== -1) {
      const master = findMasterForRef(val);
      if (master) {
        const node = master.kind === "set"
          ? (master.targetNode.defaultVariant || master.targetNode.children[0])
          : master.targetNode;
        return node.id;
      }
      console.warn("INSTANCE_SWAP path resolve 실패:", val);
    }
    return val;
  }

  function tryApplyOn(targetInst) {
    const defs = targetInst.componentProperties || {};
    const setProps = {};
    for (const key in props) {
      if (processedKeys[key]) continue;
      for (const pid in defs) {
        if (pid === key || pid.indexOf(key + "#") === 0) {
          const propType = defs[pid] && defs[pid].type;
          setProps[pid] = resolvePropValue(props[key], propType);
          processedKeys[key] = true;
          break;
        }
      }
    }
    if (Object.keys(setProps).length > 0) {
      try { targetInst.setProperties(setProps); }
      catch (e) { console.warn("setProperties 실패 (" + targetInst.name + "):", e.message); }
    }
  }

  // 1) outer instance 자체에서 매칭
  tryApplyOn(instance);

  // 2) 남은 props 가 있으면 하위 instance 들 탐색
  if (countUnprocessed() > 0) {
    const innerInstances = instance.findAll(function (n) { return n.type === "INSTANCE"; });
    for (let i = 0; i < innerInstances.length; i++) {
      tryApplyOn(innerInstances[i]);
      if (countUnprocessed() === 0) break;
    }
  }

  // 3) 그래도 남으면 경고
  if (countUnprocessed() > 0) {
    const left = [];
    for (const k in props) if (!processedKeys[k]) left.push(k);
    console.warn("prop 매칭 실패 (어떤 instance property 에도 매칭 안됨):", left.join(", "));
  }
}

function buildRef(childSpec) {
  const setName = childSpec.component;
  if (!setName) { console.warn("ref 에 component 이름 없음"); return null; }
  const master = findMasterForRef(setName);
  if (!master) {
    console.warn("참조 대상 없음: " + setName + " — 이 컴포넌트가 먼저 생성되어야 함");
    return null;
  }
  let instance;
  if (master.kind === "set") {
    // Variant 선택
    let chosen = null;
    if (childSpec.variant) {
      chosen = master.targetNode.children.find(function (c) {
        return matchVariantByName(c.name, childSpec.variant);
      });
    }
    if (!chosen) chosen = master.targetNode.defaultVariant || master.targetNode.children[0];
    instance = chosen.createInstance();
  } else {
    instance = master.targetNode.createInstance();
  }
  if (childSpec.id) instance.name = childSpec.id;
  applyInstanceProps(instance, childSpec.props);
  return instance;
}

// ---------- Auto-create missing section frame ----------
const SECTION_FILL = {
  atom: { r: 0.933, g: 0.929, b: 0.996 },
  mol:  { r: 1.0,   g: 0.957, b: 0.878 },
  ogn:  { r: 1.0,   g: 0.918, b: 0.839 }
};
const SECTION_LABEL_COLOR = {
  atom: { r: 0.212, g: 0.090, b: 0.808 },
  mol:  { r: 0.627, g: 0.373, b: 0.051 },
  ogn:  { r: 0.557, g: 0.263, b: 0.043 }
};

async function createSectionAutoAsync(targetPage, specName, category, loadedFonts) {
  const frame = figma.createFrame();
  frame.name = specName;

  // Placement: 기존 프레임들 아래에 100px 간격으로
  const frames = targetPage.children.filter(function (c) { return c.type === "FRAME"; });
  if (frames.length === 0) {
    frame.x = 80;
    frame.y = 80;
  } else {
    let maxBottom = 0;
    for (let i = 0; i < frames.length; i++) {
      const b = frames[i].y + frames[i].height;
      if (b > maxBottom) maxBottom = b;
    }
    frame.x = 80;
    frame.y = maxBottom + 100;
  }

  frame.cornerRadius = 16;
  frame.fills = [{ type: "SOLID", color: SECTION_FILL[category] || SECTION_FILL.atom }];
  frame.strokes = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.90 } }];
  frame.strokeWeight = 1;
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.minWidth = 800;
  frame.minHeight = 600;
  frame.paddingTop = 24;
  frame.paddingRight = 24;
  frame.paddingBottom = 24;
  frame.paddingLeft = 24;
  frame.itemSpacing = 12;

  // 라벨 + 힌트 (figma-create-sections.js 패턴)
  try {
    const labelFont = loadedFonts.find(function (f) { return f.family === "Inter" && f.style === "Semi Bold"; }) || { family: "Inter", style: "Semi Bold" };
    const label = figma.createText();
    label.fontName = labelFont;
    label.characters = specName;
    label.fontSize = 18;
    label.fills = [{ type: "SOLID", color: SECTION_LABEL_COLOR[category] || SECTION_LABEL_COLOR.atom }];
    frame.appendChild(label);
  } catch (e) { console.warn("section label 실패:", e.message); }

  targetPage.appendChild(frame);
  return frame;
}

// ---------- Component Property exposure ----------
// spec.base 의 children 을 재귀적으로 순회하며 exposeAs 가진 text/ref 수집
function collectExposed(node, acc) {
  if (!acc) acc = [];
  const children = (node && node.children) || [];
  for (let i = 0; i < children.length; i++) {
    const ch = children[i];
    if (ch.exposeAs && (ch.kind === "text" || ch.kind === "ref")) {
      acc.push(ch);
    }
    if (ch.kind === "group") {
      collectExposed(ch, acc);
    }
  }
  return acc;
}

function exposeComponentProperties(mainNode, figmaComponents, base) {
  const exposed = collectExposed(base);
  for (let i = 0; i < exposed.length; i++) {
    const childSpec = exposed[i];
    try {
      if (childSpec.kind === "text") {
        const propId = mainNode.addComponentProperty(childSpec.exposeAs, "TEXT", childSpec.content || "");
        for (let j = 0; j < figmaComponents.length; j++) {
          const comp = figmaComponents[j];
          const txt = comp.findOne(function (n) { return n.type === "TEXT" && n.name === childSpec.id; });
          if (txt) txt.componentPropertyReferences = { characters: propId };
        }
      } else if (childSpec.kind === "ref") {
        // INSTANCE_SWAP property — defaultValue = ref 대상 component 의 key
        console.log("[INSTANCE_SWAP] start", childSpec.exposeAs, "→", childSpec.component);
        const master = findMasterForRef(childSpec.component);
        if (!master) {
          console.warn("[INSTANCE_SWAP] master 없음:", childSpec.component);
          continue;
        }
        const defaultNode = master.kind === "set"
          ? (master.targetNode.defaultVariant || master.targetNode.children[0])
          : master.targetNode;
        // Figma plugin API quirk: INSTANCE_SWAP defaultValue 는 component **id** 사용 (key 는 거부됨)
        console.log("[INSTANCE_SWAP] master.kind=" + master.kind + " defaultNode.type=" + defaultNode.type + " id=" + defaultNode.id);
        let propId;
        try {
          propId = mainNode.addComponentProperty(childSpec.exposeAs, "INSTANCE_SWAP", defaultNode.id);
          console.log("[INSTANCE_SWAP] addComponentProperty OK propId=" + propId);
        } catch (e) {
          console.error("[INSTANCE_SWAP] addComponentProperty FAILED:", e.message);
          continue;
        }
        let attached = 0;
        for (let j = 0; j < figmaComponents.length; j++) {
          const comp = figmaComponents[j];
          const inst = comp.findOne(function (n) { return n.type === "INSTANCE" && n.name === childSpec.id; });
          if (inst) {
            try {
              inst.componentPropertyReferences = { mainComponent: propId };
              attached++;
            } catch (e) {
              console.error("[INSTANCE_SWAP] propRef FAILED on " + comp.name + ":", e.message);
            }
          } else {
            console.warn("[INSTANCE_SWAP] instance '" + childSpec.id + "' not found in", comp.name);
          }
        }
        console.log("[INSTANCE_SWAP] attached " + attached + "/" + figmaComponents.length + " variants");
      }
    } catch (e) {
      console.warn("Component Property 실패 (" + childSpec.exposeAs + "):", e.message);
    }
  }
}

// ---------- 6. Idempotency ----------
async function purgeExistingByName(scopeNode, name) {
  const hits = scopeNode.findAll((n) =>
    (n.type === "COMPONENT_SET" || n.type === "COMPONENT") && n.name === name
  );
  let count = 0;
  for (const hit of hits) {
    try {
      hit.remove();
      count++;
    } catch (e) {
      console.warn("remove 실패:", hit.id, e.message);
    }
  }
  return count;
}

// ---------- 6.5 Instance swap (Figma 마스터·인스턴스 모델 보존) ----------
// 컴포넌트 재생성 시: old 삭제하기 전에 모든 instance 의 mainComponent 를 new 로 swap.
// → 인스턴스 살아있고 override 도 보존됨 → 이걸 ref 하는 ogn/page 의 instance 들도 끊기지 않음
// → cascade 재빌드 불필요 (구조 변경 외 visual-only edit 의 경우)
//
// ⚠️ Figma dynamic-page mode 대응: instance.mainComponent 동기 접근 금지 → getMainComponentAsync 사용.
async function swapInstancesToNewMaster(oldNodes, newNode) {
  if (!oldNodes || oldNodes.length === 0 || !newNode) return 0;

  // old 의 모든 variant Component 평탄화 (Set 일 경우 자식 풀고, single 이면 자기 자신)
  const oldComponents = [];
  for (let i = 0; i < oldNodes.length; i++) {
    const o = oldNodes[i];
    if (o.type === "COMPONENT_SET") {
      for (let j = 0; j < o.children.length; j++) oldComponents.push(o.children[j]);
    } else if (o.type === "COMPONENT") {
      oldComponents.push(o);
    }
  }
  if (oldComponents.length === 0) return 0;

  // new 의 variant 명 → Component 매핑
  const newIsSet = newNode.type === "COMPONENT_SET";
  const newVariants = newIsSet ? newNode.children : [newNode];
  const newByName = {};
  for (let i = 0; i < newVariants.length; i++) newByName[newVariants[i].name] = newVariants[i];

  // old (id) → new 매핑 — instance.getMainComponentAsync 결과의 id 와 비교용
  const oldIdToNew = new Map();
  for (let i = 0; i < oldComponents.length; i++) {
    const oc = oldComponents[i];
    const nc = newIsSet ? (newByName[oc.name] || newVariants[0]) : newNode;
    oldIdToNew.set(oc.id, nc);
  }

  // 파일 전체 instance 순회 → mainComponent 가 swapMap 에 있으면 swap
  // findAllWithCriteria 는 모든 페이지 (loadAllPagesAsync 가 먼저 호출됨)
  const allInstances = (figma.root.findAllWithCriteria
    ? figma.root.findAllWithCriteria({ types: ["INSTANCE"] })
    : figma.root.findAll(function (n) { return n.type === "INSTANCE"; }));

  let swapped = 0;
  for (let i = 0; i < allInstances.length; i++) {
    const inst = allInstances[i];
    let oldMain = null;
    try {
      // Figma 신 API — dynamic-page mode 강제
      oldMain = inst.getMainComponentAsync ? await inst.getMainComponentAsync() : inst.mainComponent;
    } catch (e) {
      continue;
    }
    if (!oldMain) continue;
    const newMain = oldIdToNew.get(oldMain.id);
    if (!newMain) continue;
    try {
      inst.swapComponent(newMain);
      swapped++;
    } catch (e) {
      console.warn("swapComponent 실패:", inst.name, e.message);
    }
  }
  return swapped;
}

// ---------- 7. Main orchestrator ----------
async function generateComponentSet(spec, tokens) {
  validateSpec(spec, tokens);

  if (figma.loadAllPagesAsync) await figma.loadAllPagesAsync();
  await ensureVariableObjects();

  // Variable map (if sync-tokens 이 실행된 적 있으면 채워짐)
  const varMap = getVariableMap();
  const varCount = Object.keys(varMap).length;
  if (varCount === 0) {
    console.warn("⚠ Variable map 비어있음 — sync-tokens 먼저 실행하세요. 지금은 raw 값으로 생성됩니다.");
  } else {
    console.log("✓ Variable map loaded: " + varCount + "개 토큰 바인딩 가능");
  }

  const fontResult = await preloadFonts();
  if (fontResult.failed.length) {
    console.warn("누락된 폰트:", fontResult.failed.map((f) => f.family + " " + f.style).join(", "));
  }

  const category = spec.name.split("/")[0];
  if (category === "page") {
    return generateScreen(spec, tokens, fontResult);
  }
  const pageMap = { atom: "Atom", mol: "Molecule", ogn: "Organism", sb: "SB" };
  const pageName = pageMap[category];
  if (!pageName) throw new Error("Unknown category: " + category);

  const targetPage = figma.root.children.find((p) => p.name === pageName);
  if (!targetPage) throw new Error("페이지 없음: " + pageName);
  await figma.setCurrentPageAsync(targetPage);

  // 기존 같은 이름 Component/Set 찾기 (섹션 안에 있든, 페이지 직접 자식이든)
  const existing = targetPage.findAll(function (n) {
    return (n.type === "COMPONENT" || n.type === "COMPONENT_SET") && n.name === spec.name;
  });

  // 배치 위치 결정 — 기존 있으면 그 좌표 이어받기, 없으면 페이지 하단에 추가
  let targetX = 80, targetY = 80;
  const sectionsToRemove = [];
  if (existing.length > 0) {
    const first = existing[0];
    // absolute x/y 계산 (섹션 안에 있을 수 있음)
    let ax = first.x, ay = first.y;
    let p = first.parent;
    while (p && p.type !== "PAGE") {
      ax += p.x; ay += p.y;
      p = p.parent;
    }
    targetX = ax;
    targetY = ay;
    // 기존 wrapper section frame 이 있으면 같이 제거 (name 이 spec.name 과 일치할 때)
    const imm = first.parent;
    if (imm && imm.type === "FRAME" && imm.name === spec.name && imm.parent && imm.parent.type === "PAGE") {
      // 섹션의 절대 위치로 덮어쓰기 (component 가 섹션 안에 있었으니)
      targetX = imm.x;
      targetY = imm.y;
      sectionsToRemove.push(imm);
    }
  } else {
    // 페이지에서 기존 Component/Set 들 중 가장 아래 + 오른쪽 찾기
    const allComps = targetPage.findAll(function (n) {
      return n.type === "COMPONENT" || n.type === "COMPONENT_SET";
    });
    if (allComps.length > 0) {
      let maxBottom = 0;
      for (let i = 0; i < allComps.length; i++) {
        const c = allComps[i];
        // absolute y
        let ay = c.y;
        let p = c.parent;
        while (p && p.type !== "PAGE") { ay += p.y; p = p.parent; }
        const b = ay + c.height;
        if (b > maxBottom) maxBottom = b;
      }
      targetY = maxBottom + 80;
    }
  }

  // ⚠️ old 삭제는 new 생성 + instance swap 이후로 연기 (마스터·인스턴스 보존 패턴)
  // 여기서 삭제하면 원래 동작 — 일단 보류만 하고 아래 swap 후 제거.

  // enumerate + build
  const axes = spec.variants && spec.variants.axes ? spec.variants.axes : [];
  const overrides = (spec.variants && spec.variants.overrides) || {};
  const combos = axes.length > 0 ? enumerateVariants(axes) : [{}];

  const components = [];
  for (const combo of combos) {
    // overrides 키는 풀 조합 또는 부분 키 ("tone=required" 처럼 일부 axis 만)
    // combo 와 일치하는 모든 키를 누적 merge — 풀 조합도 동일 로직으로 처리됨 (backward compatible)
    let merged = spec.base;
    for (const ovKey in overrides) {
      const pairs = ovKey.split(",").map(function (p) { return p.split("="); });
      const allMatch = pairs.every(function (kv) { return combo[kv[0]] === kv[1]; });
      if (allMatch) merged = mergeSpec(merged, overrides[ovKey]);
    }
    // widthFallback 은 spec top-level 필드 — buildFrame 의 spec 인자(=base)에서 lookup 가능하도록 주입.
    if (spec.widthFallback) merged.widthFallback = spec.widthFallback;
    const frame = buildFrame(merged, variantFigmaName(combo) || "Default", tokens, fontResult.loaded);
    const comp = figma.createComponentFromNode(frame);
    comp.name = variantFigmaName(combo) || "Default";
    components.push(comp);
  }

  // 페이지에 직접 배치
  let resultNode;
  if (combos.length > 1) {
    const set = figma.combineAsVariants(components, targetPage);
    set.name = spec.name;
    set.layoutMode = "HORIZONTAL";
    set.itemSpacing = 24;
    set.paddingTop = 24;
    set.paddingBottom = 24;
    set.paddingLeft = 24;
    set.paddingRight = 24;
    set.primaryAxisSizingMode = "AUTO";
    set.counterAxisSizingMode = "AUTO";
    resultNode = set;
    exposeComponentProperties(set, components, spec.base);
  } else {
    targetPage.appendChild(components[0]);
    components[0].name = spec.name;
    exposeComponentProperties(components[0], [components[0]], spec.base);
    resultNode = components[0];
  }

  // 위치 설정 (old 위치 이어받기 — old 가 아직 살아있어도 같은 좌표 OK, 곧 제거됨)
  try {
    resultNode.x = targetX;
    resultNode.y = targetY;
  } catch (e) { console.warn("위치 설정 실패:", e.message); }

  // ⭐ instance swap — old 의 마스터를 참조하던 모든 instance 를 new 로 redirect
  // 이게 핵심: old 가 삭제돼도 instance 들은 new 마스터를 가리키므로 끊기지 않음
  // → ogn/page 들이 mol/* 을 ref 하고 있어도 cascade 재빌드 불필요 (visual-only 변경 시)
  let swappedInstances = 0;
  if (existing.length > 0) {
    swappedInstances = await swapInstancesToNewMaster(existing, resultNode);
  }

  // 이제 안전하게 old 제거 (instance 다 swap 됐으니 끊기지 않음)
  for (let i = 0; i < existing.length; i++) {
    try { existing[i].remove(); } catch (err) {}
  }
  for (let i = 0; i < sectionsToRemove.length; i++) {
    try { sectionsToRemove[i].remove(); } catch (err) {}
  }

  figma.notify("✓ " + spec.name + " — " + components.length + " variants, " + swappedInstances + " instances swapped");
  console.log("✓ " + spec.name + ": " + components.length + " variants, " + existing.length + " replaced, " + swappedInstances + " instances kept linked, " + sectionsToRemove.length + " sections removed");
  return resultNode;
}

// ---------- 8. Screen/Page generator ----------
// page/* category 를 위한 별도 경로. Component 가 아닌 일반 Frame 으로 생성해서
// "Page" Figma 페이지에 top-level frame 으로 배치.
async function generateScreen(spec, tokens, fontResult) {
  await ensureVariableObjects();

  // "Page" Figma 페이지 찾기 or 생성
  let targetPage = figma.root.children.find(function (p) { return p.name === "Page"; });
  if (!targetPage) {
    targetPage = figma.createPage();
    targetPage.name = "Page";
  }
  await figma.setCurrentPageAsync(targetPage);

  // 기존 같은 이름 top-level FRAME 찾기
  const existing = targetPage.children.filter(function (n) {
    return n.type === "FRAME" && n.name === spec.name;
  });

  let targetX = 80, targetY = 80;
  let useGridLayout = false;
  if (existing.length > 0) {
    // 기존 frame 위치 유지 (사용자가 수동 정렬한 가능성)
    targetX = existing[0].x;
    targetY = existing[0].y;
    for (let i = 0; i < existing.length; i++) {
      try { existing[i].remove(); } catch (err) {}
    }
  } else if (typeof spec._layout_col === "number" && typeof spec._layout_row === "number") {
    // bundle.js 가 PAGE_FLOW_ORDER 로 _layout_col / _layout_row 주입한 경우 — UC × step grid 배치
    // X 는 col, Y 는 row. 같은 col 의 다른 frame 들 폭 측정해서 X 정렬.
    useGridLayout = true;
  } else {
    // 기본: 다른 Page 들이 있으면 오른쪽에 80px 간격으로 배치 (가로 한 줄)
    const allFrames = targetPage.children.filter(function (n) { return n.type === "FRAME"; });
    if (allFrames.length > 0) {
      let maxRight = 0;
      for (let i = 0; i < allFrames.length; i++) {
        const r = allFrames[i].x + allFrames[i].width;
        if (r > maxRight) maxRight = r;
      }
      targetX = maxRight + 80;
      targetY = 80;
    }
  }

  // Frame 으로 생성 (Component 아님)
  // widthFallback 은 spec top-level 필드 — buildFrame 의 spec 인자(=base)에서 lookup 가능하도록 주입.
  const baseToBuild = spec.widthFallback
    ? Object.assign({}, spec.base, { widthFallback: spec.widthFallback })
    : spec.base;
  const frame = buildFrame(baseToBuild, spec.name, tokens, fontResult.loaded);
  frame.name = spec.name;
  targetPage.appendChild(frame);

  if (useGridLayout) {
    // Grid 좌표 계산 (frame.height / frame.width 가 확정된 후)
    // X: col 별로 같은 col 의 다른 frame 들 우측 max 추적 — 같은 col 끼리 같은 X 보장 안 함, 첫 frame 의 X 가 col base
    // 단순화: col 별 X = 80 + col * (FRAME_W + 80), row 별 Y = 80 + row * (FRAME_H + 80)
    const FRAME_W = frame.width || 375;
    const FRAME_H = frame.height || 812;
    const GAP = 80;
    targetX = 80 + spec._layout_col * (FRAME_W + GAP);
    targetY = 80 + spec._layout_row * (FRAME_H + GAP);
  }
  frame.x = targetX;
  frame.y = targetY;

  figma.notify("✓ Screen: " + spec.name);
  console.log("✓ Screen generated: " + spec.name + " at (" + targetX + ", " + targetY + "), replaced " + existing.length);
  return frame;
}



async function importIconBatch(iconConfig) {
  const ICON_NAME = iconConfig.name;
  const SIZE_W = iconConfig.size;
  const SIZE_H = iconConfig.size;
  const COLOR_TOKEN = iconConfig.color;

  const firstSeg = ICON_NAME.split("/")[0];
  const pageMap = { atom: "Atom", mol: "Molecule", ogn: "Organism", sb: "SB" };
  const PAGE_NAME = pageMap[firstSeg] || "Atom";
  const targetPage = figma.root.children.find(function(p) { return p.name === PAGE_NAME; });
  if (!targetPage) throw new Error(PAGE_NAME + " 페이지 없음 — figma-create-sections.js 먼저 실행");
  await figma.setCurrentPageAsync(targetPage);

  const existing = targetPage.findAll(function(n) {
    return (n.type === "COMPONENT" || n.type === "COMPONENT_SET") && n.name === ICON_NAME;
  });
  let prevX = null, prevY = null;
  if (existing.length > 0) {
    const first = existing[0];
    let ax = first.x, ay = first.y;
    let p = first.parent;
    while (p && p.type !== "PAGE") { ax += p.x; ay += p.y; p = p.parent; }
    prevX = ax; prevY = ay;
  }
  for (let i = 0; i < existing.length; i++) {
    try { existing[i].remove(); } catch (e) {}
  }

  const raw = figma.root.getPluginData("skt-vars");
  const varMap = raw ? JSON.parse(raw) : {};
  const vid = varMap[COLOR_TOKEN];
  const colorVar = vid ? await figma.variables.getVariableByIdAsync(vid) : null;

  let comp;
  if (iconConfig.skeleton) {
    const frame = figma.createFrame();
    frame.name = ICON_NAME;
    frame.resize(SIZE_W, SIZE_H);
    frame.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
    frame.cornerRadius = 4;
    comp = figma.createComponentFromNode(frame);
  } else {
    const svgFrame = figma.createNodeFromSvg(iconConfig.svgContent);
    svgFrame.name = ICON_NAME;
    function buildPaint() {
      const p = { type: "SOLID", color: { r: 0, g: 0, b: 0 } };
      if (colorVar) p.boundVariables = { color: { type: "VARIABLE_ALIAS", id: colorVar.id } };
      return p;
    }
    const vectors = svgFrame.findAll(function(n) {
      return n.type === "VECTOR" || n.type === "BOOLEAN_OPERATION";
    });
    for (let i = 0; i < vectors.length; i++) {
      const v = vectors[i];
      if (v.fills && v.fills.length > 0) v.fills = [buildPaint()];
      if (v.strokes && v.strokes.length > 0) v.strokes = [buildPaint()];
    }
    if (svgFrame.width !== SIZE_W || svgFrame.height !== SIZE_H) {
      svgFrame.resize(SIZE_W, SIZE_H);
    }
    comp = figma.createComponentFromNode(svgFrame);
  }

  comp.name = ICON_NAME;
  targetPage.appendChild(comp);

  if (prevX !== null && prevY !== null) {
    try { comp.x = prevX; comp.y = prevY; } catch (e) {}
  } else {
    const allComps = targetPage.findAll(function(n) {
      return n.type === "COMPONENT" || n.type === "COMPONENT_SET";
    });
    let maxBottom = 0;
    for (let i = 0; i < allComps.length; i++) {
      const c = allComps[i];
      if (c === comp) continue;
      let ay = c.y;
      let p = c.parent;
      while (p && p.type !== "PAGE") { ay += p.y; p = p.parent; }
      const b = ay + c.height;
      if (b > maxBottom) maxBottom = b;
    }
    try { comp.x = 80; comp.y = maxBottom + 80; } catch (e) {}
  }
  console.log("✓ icon: " + ICON_NAME + (iconConfig.skeleton ? " (skeleton)" : ""));
}

async function runBatch() {
  if (figma.loadAllPagesAsync) await figma.loadAllPagesAsync();

  let okIcons = 0, failIcons = 0;
  if (ICONS && ICONS.length > 0) {
    console.log("=== Phase 1: Icons (" + ICONS.length + "개) ===");
    for (let i = 0; i < ICONS.length; i++) {
      try { await importIconBatch(ICONS[i]); okIcons++; }
      catch (e) { failIcons++; console.error("✗ icon 실패:", ICONS[i].name, e.message); }
    }
  }

  let okSpecs = 0, failSpecs = 0;
  if (SPECS && SPECS.length > 0) {
    console.log("=== Phase 2: Components (" + SPECS.length + "개) ===");
    for (let i = 0; i < SPECS.length; i++) {
      try { await generateComponentSet(SPECS[i], DS_TOKENS); okSpecs++; }
      catch (e) { failSpecs++; console.error("✗ spec 실패:", SPECS[i].name, e.message); }
    }
  }

  const total = okIcons + okSpecs;
  const fails = failIcons + failSpecs;
  const msg = "✓ Batch 완료 — " + total + "개" + (fails > 0 ? " (" + fails + "개 실패)" : "");
  figma.notify(msg);
  console.log("=== " + msg + " ===");
}


runBatch().then(function() {
  const __counts = {};
  for (const __s of SPECS) {
    const __seg = (__s.name || '').split('/')[0];
    const __page = __seg === 'atom' ? 'Atom' : __seg === 'mol' ? 'Molecule' : __seg === 'ogn' ? 'Organism' : __seg === 'page' ? 'Page' : __seg;
    __counts[__page] = (__counts[__page] || 0) + 1;
  }
  if (typeof ICONS !== 'undefined' && ICONS.length > 0) __counts['Atom'] = (__counts['Atom'] || 0) + ICONS.length;
  const __summary = Object.keys(__counts).map(function(p) { return p + ' ' + __counts[p] + '개'; }).join(', ') + ' changed';
  figma.notify(__summary, { timeout: 2000 });
}).catch(function(e) {
  console.error('에러:', e);
  figma.notify('에러: ' + (e && e.message ? e.message : e), { error: true });
});
