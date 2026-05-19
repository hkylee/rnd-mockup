// =============================================
// AUTO-GENERATED — BATCH MODE (--library)
// component 전체 + icon 통합 — Run 1회로 전체 라이브러리 빌드
// specs: 49개 / icons: 37개
// generated at: 2026-05-19T02:27:19.121Z
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
    "name": "accordion-notice-info",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "accordion-price-info",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "accordion-product-info",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "action-button",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "app-bar",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "badge",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "badge-icon",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "banner-horizontal-medium",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "bottom-navigation",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "bottomsheet",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "button",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "button-xsmall-solid",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "card-contents-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "card-contents-line",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "card-info",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "card-section",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "card-summary",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "carousel-product-text",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "checkbox-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "checkbox-text",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "chip-image-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "chip-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "divider",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "footer",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "icon",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "info-text-list",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "list-selected",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "list-text",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "option-list",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "option-list-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "pagestack",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "pay-product-list-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "payment-logo-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "pin",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "popup-action-button",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "radio-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "radio-text",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "search-bar",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "status-bar",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "tab-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "text-button",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "text-field",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "thumbnail",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "thumbnail-item",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "title-bottom-sheet",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "title-contents",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "title-main",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "tooltip",
    "category": "component",
    "description": ""
  },
  {
    "$schema": "component-spec-v1",
    "name": "underline-tab",
    "category": "component",
    "description": ""
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
const SPEC_REGISTRY = {};

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
  if (/^#[0-9a-f]{3,8}$/i.test(v)) return { type: "color", "rgb": hexToRgb(v) };
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
      "color": { r: c.rgb.r, g: c.rgb.g, b: c.rgb.b, a: v.alpha }
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
  const paint = { type: "SOLID", "color": { r: rgbColor.r, g: rgbColor.g, b: rgbColor.b } };
  if (variableId) {
    paint.boundVariables = { "color": { type: "VARIABLE_ALIAS", id: variableId } };
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
    "color": s.color,
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
    let childNode = null;
    if (child.kind === "text") {
      childNode = buildText(child, tokens, loadedFonts);
    } else if (child.kind === "ref") {
      childNode = buildRef(child);
    } else if (child.kind === "group") {
      // 익명 서브 프레임 — child 스펙을 mini-spec 으로 재귀 빌드
      childNode = buildFrame(child, child.id || "group", tokens, loadedFonts);
    }
    if (!childNode) continue;
    f.appendChild(childNode);
    // visible: false → 노드 보이지만 hidden (auto-layout 에서 0px 차지 → 시각·공간 모두 사라짐)
    if (child.visible === false) {
      try { childNode.visible = false; }
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
      try { childNode.layoutAlign = effectiveAlign; }
      catch (e) { console.warn("layoutAlign 실패:", child.id, e.message); }
      // STRETCH 시 instance/frame 의 sizing 도 명시적으로 FILL 로 강제 (Figma v3 API).
      // layoutAlign 만으로는 instance baseline width 가 유지되는 케이스 있음 — § 12 우회책 대체.
      // 부모 VERTICAL → counter-axis 가로 → layoutSizingHorizontal
      // 부모 HORIZONTAL → counter-axis 세로 → layoutSizingVertical
      if (effectiveAlign === "STRETCH") {
        const parentMode = spec.layout && spec.layout.mode;
        try {
          if (parentMode === "VERTICAL") {
            try { childNode.setBoundVariable("width", null); } catch (ee) {}
            childNode.layoutSizingHorizontal = "FILL";
          } else if (parentMode === "HORIZONTAL") {
            try { childNode.setBoundVariable("height", null); } catch (ee) {}
            childNode.layoutSizingVertical = "FILL";
          }
        } catch (e) {
          console.warn("layoutSizing FILL 실패:", child.id, e.message);
        }
        // text 노드면 textAutoResize="HEIGHT" 도 자동 적용 — 줄글이 부모 폭에서 자동 줄바꿈
        // (autoResize 가 spec 에 명시되어 있으면 그 값을 우선; 명시 안 됐을 때만 default 적용)
        if (child.kind === "text" && !child.autoResize) {
          try { childNode.textAutoResize = "HEIGHT"; }
          catch (e) { console.warn("textAutoResize HEIGHT 자동 적용 실패:", child.id, e.message); }
        }
      }
    }
    // Growing: child takes max space on primary axis
    if (child.layoutGrow != null) {
      try { childNode.layoutGrow = child.layoutGrow; }
      catch (e) { console.warn("layoutGrow 실패:", child.id, e.message); }
    }
    // scrollBehavior — Figma prototype 에서 부모 스크롤 시 자식 동작.
    // "STICKY_SCROLLS" = sticky (footer / GNB 류), "FIXED" = 항상 고정, "SCROLLS" = 기본 (스크롤 따라 이동).
    if (child.scrollBehavior) {
      try { childNode.scrollBehavior = child.scrollBehavior; }
      catch (e) { console.warn("scrollBehavior 실패:", child.id, e.message); }
    }
    // group/frame 자식이 spec 에 width/height = "FILL" 명시한 경우 — buildFrame 안에서는 부모가 없어 throw 됐을 수 있음.
    // appendChild 이후라 이제 부모가 auto-layout 이므로 다시 시도.
    // 단, buildFrame 의 fallback 에서 width 를 resize + Variable 바인딩한 상태이므로
    // 먼저 바인딩 해제 + 리사이즈 fallback 영향 무력화 후 layoutSizingHorizontal=FILL 적용.
    if (child.kind === "group" && child.layout) {
      if (child.layout.width === "FILL") {
        try { childNode.setBoundVariable("width", null); } catch (e) {}
        try { childNode.layoutSizingHorizontal = "FILL"; }
        catch (e) { console.warn("post-append layoutSizingHorizontal FILL 실패:", child.id, e.message); }
      }
      if (child.layout.height === "FILL") {
        try { childNode.setBoundVariable("height", null); } catch (e) {}
        try { childNode.layoutSizingVertical = "FILL"; }
        catch (e) { console.warn("post-append layoutSizingVertical FILL 실패:", child.id, e.message); }
      }
    }
    // Absolute positioning: child taken out of auto-layout flow.
    // x/y 는 부모 frame 기준 좌표. constraints 로 부모 resize 시 동작 결정.
    if (child.layoutPositioning === "ABSOLUTE") {
      try { childNode.layoutPositioning = "ABSOLUTE"; }
      catch (e) { console.warn("layoutPositioning 실패:", child.id, e.message); }
      if (child.x != null) {
        try { childNode.x = child.x; } catch (e) {}
      }
      if (child.y != null) {
        try { childNode.y = child.y; } catch (e) {}
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
          childNode.constraints = {
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
        const masterNode = master.kind === "set"
          ? (master.targetNode.defaultVariant || master.targetNode.children[0])
          : master.targetNode;
        return masterNode.id;
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
  frame.fills = [{ type: "SOLID", "color": SECTION_FILL[category] || SECTION_FILL.atom }];
  frame.strokes = [{ type: "SOLID", "color": { r: 0.85, g: 0.85, b: 0.90 } }];
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
    label.fills = [{ type: "SOLID", "color": SECTION_LABEL_COLOR[category] || SECTION_LABEL_COLOR.atom }];
    frame.appendChild(label);
  } catch (e) { console.warn("section label 실패:", e.message); }

  targetPage.appendChild(frame);
  return frame;
}

// ---------- Component Property exposure ----------
// spec.base 의 children 을 재귀적으로 순회하며 exposeAs 가진 text/ref 수집
function collectExposed(specNode, acc) {
  if (!acc) acc = [];
  const children = (specNode && specNode.children) || [];
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
  const pageMap = { component: "Components", sb: "SB", atom: "Components", mol: "Components", ogn: "Components" };
  const PAGE_NAME = pageMap[firstSeg] || "Components";
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
