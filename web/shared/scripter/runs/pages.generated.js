// =============================================
// AUTO-GENERATED — BATCH MODE (--pages)
// 모든 page 통합 — Run 1회로 전체 page 조립
// specs: 49개
// generated at: 2026-05-18T08:09:38.163Z
// Requires: --library (또는 개별 컴포넌트들) 가 먼저 실행되어 있어야 함
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

const ICONS = [];

// ref 자동 STRETCH 추론용 — generator-core 가 참조
const SPEC_REGISTRY = {
  "atom/badge": {
    "width": "HUG",
    "height": null
  },
  "atom/btn-xsmall": {
    "width": "HUG",
    "height": null
  },
  "atom/btn": {
    "width": "HUG",
    "height": null
  },
  "atom/checkbox": {
    "width": "HUG",
    "height": null
  },
  "atom/chip-image": {
    "width": "HUG",
    "height": null
  },
  "atom/chip": {
    "width": "HUG",
    "height": null
  },
  "atom/divider": {
    "width": "FILL",
    "height": null
  },
  "atom/icon": {
    "width": "HUG",
    "height": null
  },
  "atom/payment-logo": {
    "width": "HUG",
    "height": null
  },
  "atom/pin": {
    "width": "HUG",
    "height": null
  },
  "atom/radio": {
    "width": "HUG",
    "height": null
  },
  "atom/tab-item": {
    "width": "HUG",
    "height": null
  },
  "mol/action-button": {
    "width": "FILL",
    "height": null
  },
  "mol/badge-icon": {
    "width": "HUG",
    "height": null
  },
  "mol/banner-horizontal": {
    "width": "HUG",
    "height": null
  },
  "mol/card-contents-line": {
    "width": "HUG",
    "height": null
  },
  "mol/card-info": {
    "width": "HUG",
    "height": null
  },
  "mol/card-item": {
    "width": "HUG",
    "height": null
  },
  "mol/card-summary": {
    "width": "HUG",
    "height": null
  },
  "mol/carousel-product-text": {
    "width": "HUG",
    "height": null
  },
  "mol/checkbox-text": {
    "width": "HUG",
    "height": null
  },
  "mol/info-text-list": {
    "width": "HUG",
    "height": null
  },
  "mol/list-selected": {
    "width": "FILL",
    "height": null
  },
  "mol/list-text": {
    "width": "FILL",
    "height": null
  },
  "mol/option-list-item": {
    "width": "HUG",
    "height": null
  },
  "mol/popup-action-btn": {
    "width": "HUG",
    "height": null
  },
  "mol/radio-text": {
    "width": "HUG",
    "height": null
  },
  "mol/thumb-item": {
    "width": "HUG",
    "height": null
  },
  "mol/title-bottomsheet": {
    "width": "HUG",
    "height": null
  },
  "mol/title-contents": {
    "width": "HUG",
    "height": null
  },
  "mol/title-main": {
    "width": "FILL",
    "height": null
  },
  "mol/tooltip": {
    "width": "HUG",
    "height": null
  },
  "ogn/accordion-notice": {
    "width": "HUG",
    "height": null
  },
  "ogn/accordion-price": {
    "width": "HUG",
    "height": null
  },
  "ogn/accordion-product": {
    "width": "HUG",
    "height": null
  },
  "ogn/app-bar": {
    "width": "FILL",
    "height": null
  },
  "ogn/bottom-nav": {
    "width": "FILL",
    "height": null
  },
  "ogn/bottomsheet": {
    "width": "FILL",
    "height": null
  },
  "ogn/card-section": {
    "width": "HUG",
    "height": null
  },
  "ogn/footer": {
    "width": "FILL",
    "height": null
  },
  "ogn/option-list": {
    "width": "HUG",
    "height": null
  },
  "ogn/pagestack": {
    "width": "FILL",
    "height": null
  },
  "ogn/pay-product-item": {
    "width": "HUG",
    "height": null
  },
  "ogn/search-bar": {
    "width": "HUG",
    "height": null
  },
  "ogn/status-bar": {
    "width": "FILL",
    "height": null
  },
  "ogn/tab": {
    "width": "FILL",
    "height": null
  },
  "ogn/text-field": {
    "width": "HUG",
    "height": null
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
