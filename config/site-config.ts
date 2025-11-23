// config/site-config.ts
export const siteConfig = {
  name: "SEOK",
  slogan: "Search Engine Optimized Knowledge",
  description: "블로그 최적화 SEO를 기반으로 한 퍼포먼스 마케팅 에이전시",
  url: "https://seok.agency",

  contact: {
    ceo: "권기범",
    email: "fkdlfwldk@naver.com",
    phone: "+82 10 8965 7458",
    telegram: "@BIOSEOK",
    telegramUrl: "https://t.me/BIOSEOK",
    address: "서울 서초구 서초동 1308-16",
    businessNumber: "849-79-00492",
  },

  nav: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Cases", href: "/cases" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  services: [
    {
      id: "seo-audit",
      title: "블로그 SEO 진단 & 전략",
      description: "현재 블로그의 검색 엔진 최적화 상태를 정밀 진단하고, 업종별 맞춤 키워드 전략을 설계합니다.",
      features: [
        "검색엔진 최적화 현황 분석",
        "경쟁사 키워드 벤치마킹",
        "니치 키워드 발굴 및 우선순위 설정",
        "블로그 구조 개선 제안",
      ],
      icon: "search",
    },
    {
      id: "content-creation",
      title: "키워드 기반 콘텐츠 제작",
      description: "검색 의도를 정확히 파악한 장기 노출형 포스팅을 템플릿 기반으로 제작합니다.",
      features: [
        "검색 의도 기반 콘텐츠 기획",
        "카테고리별 템플릿 제작",
        "SEO 친화적 본문 작성",
        "이미지 최적화 및 메타태그 설정",
      ],
      icon: "edit",
    },
    {
      id: "project-management",
      title: "장기 노출형 프로젝트 운영",
      description: "B2B 클라이언트를 위한 프로젝트 단위 마케팅 패키지로 지속적인 검색 유입을 만듭니다.",
      features: [
        "월간/분기별 콘텐츠 발행 스케줄",
        "키워드 순위 모니터링",
        "경쟁사 대응 전략 수립",
        "장기 파트너십 관리",
      ],
      icon: "rocket",
    },
    {
      id: "analytics",
      title: "성과 리포트 & 데이터 분석",
      description: "CTR, 체류시간, 전환율 등 핵심 지표를 추적하고 실시간 대시보드로 제공합니다.",
      features: ["주간/월간 성과 리포트", "GA4 데이터 분석 및 인사이트", "키워드별 ROI 추적", "개선 액션 아이템 도출"],
      icon: "chart",
    },
  ],

  process: [
    {
      step: 1,
      title: "Discovery",
      subtitle: "시장 기회 발굴",
      description: "업종·경쟁사·키워드 리서치를 통해 시장 기회를 발굴합니다.",
      details: ["타겟 고객 페르소나 정의", "경쟁사 SEO 전략 분석", "검색량 기반 키워드 발굴", "컨텐츠 갭 분석"],
    },
    {
      step: 2,
      title: "Strategy",
      subtitle: "전략 설계",
      description: "블로그 구조/카테고리/키워드 맵을 체계적으로 설계합니다.",
      details: ["키워드 클러스터링", "카테고리 구조 설계", "콘텐츠 캘린더 수립", "KPI 목표 설정"],
    },
    {
      step: 3,
      title: "Execution",
      subtitle: "콘텐츠 실행",
      description: "템플릿 기반 포스팅을 제작하고 최적의 타이밍에 발행합니다.",
      details: ["SEO 최적화 콘텐츠 작성", "내부 링크 구조 강화", "메타데이터 최적화", "정기 발행 및 업데이트"],
    },
    {
      step: 4,
      title: "Optimization",
      subtitle: "지속 개선",
      description: "CTR/체류시간/전환율 데이터를 기반으로 지속적으로 개선합니다.",
      details: ["성과 데이터 모니터링", "저성과 콘텐츠 개선", "신규 키워드 기회 발굴", "A/B 테스트 및 최적화"],
    },
  ],

  kpis: [
    {
      metric: "120%",
      label: "평균 상위노출 키워드 증가율",
      description: "3개월 평균 기준",
    },
    {
      metric: "2.3배",
      label: "블로그 유입 트래픽",
      description: "프로젝트 시작 대비",
    },
    {
      metric: "90%+",
      label: "프로젝트 리텐션율",
      description: "6개월 이상 지속",
    },
  ],

  cases: [
    {
      id: "crypto-branding",
      category: "Crypto",
      title: "국내 크립토 프로젝트, 브랜딩 키워드 선점 사례",
      description: "신규 토큰 런칭 전 핵심 키워드 30개를 선점하여 론칭 초기 검색 유입 300% 증가를 달성했습니다.",
      thumbnail: "/images/cases/crypto.jpg",
      metrics: {
        keywords: 30,
        traffic: "300%",
        duration: "3개월",
        ctr: "4.2%",
      },
      challenge: "신규 토큰 프로젝트로 브랜드 인지도가 전무한 상태에서 런칭 전 시장 선점이 필요했습니다.",
      solution:
        "토큰 이코노미, DeFi 관련 롱테일 키워드를 중심으로 교육형 콘텐츠를 선제적으로 발행하여 검색 시장을 선점했습니다.",
      results: [
        "핵심 키워드 30개 상위 5위 진입",
        "런칭 첫 주 자연 검색 유입 5,000+ 달성",
        "커뮤니티 유입 전환율 18% 기록",
      ],
    },
    {
      id: "fintech-conversion",
      category: "Finance",
      title: "핀테크 스타트업 SEO 전환율 최적화",
      description: "금융 상품 비교 키워드 중심으로 콘텐츠를 재구성하여 전환율 2.1배 향상을 이뤄냈습니다.",
      thumbnail: "/images/cases/finance.jpg",
      metrics: {
        keywords: 45,
        traffic: "180%",
        duration: "4개월",
        conversion: "2.1배",
      },
      challenge: "높은 트래픽에도 불구하고 실제 상품 가입 전환율이 저조한 상황이었습니다.",
      solution: "사용자 검색 의도를 재분석하여 비교형/추천형 콘텐츠로 전환하고, CTA를 최적화했습니다.",
      results: ["전환율 1.2% → 2.5% 향상", "상품 상세 페이지 이동률 3배 증가", "평균 체류시간 4분 30초 달성"],
    },
    {
      id: "b2b-saas-lead",
      category: "Business",
      title: "B2B SaaS 기업 장기 블로그 운영 프로젝트",
      description: "6개월간 120개의 롱테일 키워드 콘텐츠 발행으로 MQL 250% 증가를 기록했습니다.",
      thumbnail: "/images/cases/saas.jpg",
      metrics: {
        keywords: 120,
        traffic: "250%",
        duration: "6개월",
        mql: "250%",
      },
      challenge: "B2B 시장 특성상 검색량이 낮고, 전문적인 콘텐츠 제작이 필요한 상황이었습니다.",
      solution: "업계 전문가 인터뷰, 케이스 스터디, 가이드북 형식의 심층 콘텐츠로 권위성을 구축했습니다.",
      results: ["월평균 MQL 80건 → 200건 증가", "평균 콘텐츠 순위 상위 3페이지 진입", "도메인 권위 점수 45 → 62 향상"],
    },
  ],

  faqs: [
    {
      question: "SEO 효과가 나타나는 데 얼마나 걸리나요?",
      answer:
        "일반적으로 3~6개월 정도 소요됩니다. 키워드 난이도, 경쟁 상황, 콘텐츠 품질에 따라 달라질 수 있으며, 초기 2~3개월은 롱테일 키워드부터 성과가 나타나기 시작합니다.",
    },
    {
      question: "어떤 산업군에 특화되어 있나요?",
      answer:
        "크립토, 핀테크, B2B SaaS, 투자, 비즈니스 등 니치 마켓을 주로 다룹니다. 전문성이 필요한 분야일수록 SEOK의 강점이 발휘됩니다.",
    },
    {
      question: "콘텐츠는 몇 개나 제작하나요?",
      answer:
        "프로젝트 규모에 따라 다르지만, 일반적으로 월 8~12개의 심층 콘텐츠를 제작합니다. 양보다는 검색 의도에 맞는 질 높은 콘텐츠에 집중합니다.",
    },
    {
      question: "네이버 블로그만 운영하나요?",
      answer:
        "네이버 블로그 외에도 티스토리, 워드프레스, 미디엄 등 다양한 플랫폼에서 SEO 전략을 실행합니다. 클라이언트 상황에 맞는 최적의 플랫폼을 제안합니다.",
    },
    {
      question: "계약 기간은 어떻게 되나요?",
      answer:
        "최소 3개월부터 시작하며, 6개월 이상 장기 계약 시 더 안정적인 성과를 기대할 수 있습니다. 프로젝트 성격에 따라 유연하게 조정 가능합니다.",
    },
  ],

  about: {
    mission: {
      title: "우리가 믿는 것",
      description:
        "검색 엔진은 단순한 트래픽 소스가 아닙니다. 브랜드를 찾는 사람들이 가장 먼저 만나는 접점이며, 신뢰를 쌓아가는 여정의 시작입니다. SEOK은 데이터와 전략으로 그 여정을 설계합니다.",
    },
    strengths: [
      {
        title: "블로그 SEO 전문성",
        description: "5년 이상 블로그 마케팅 경험을 바탕으로 네이버, 구글 알고리즘 변화에 빠르게 대응합니다.",
      },
      {
        title: "니치 마켓 이해",
        description: "크립토, 핀테크, B2B SaaS 등 전문 지식이 필요한 산업에서 검증된 콘텐츠 전략을 보유하고 있습니다.",
      },
      {
        title: "데이터 기반 의사결정",
        description: "감이 아닌 검색량, CTR, 전환율 데이터를 기반으로 모든 전략을 수립하고 실행합니다.",
      },
      {
        title: "장기 파트너십 지향",
        description: "단발성 프로젝트가 아닌, 함께 성장하는 파트너로서 지속 가능한 SEO 구조를 만듭니다.",
      },
    ],
    workStyle: {
      title: "SEOK의 워크 스타일",
      principles: [
        {
          name: "투명한 커뮤니케이션",
          description: "주간 리포트와 월간 미팅을 통해 진행 상황과 성과를 투명하게 공유합니다.",
        },
        {
          name: "실적 중심 사고",
          description: "허례허식 없이 실제 검색 순위, 유입, 전환이라는 숫자로 말합니다.",
        },
        {
          name: "빠른 실행력",
          description: "시장 변화와 알고리즘 업데이트에 민첩하게 대응하여 기회를 놓치지 않습니다.",
        },
        {
          name: "지속적인 학습",
          description: "SEO 트렌드와 새로운 마케팅 채널을 지속적으로 학습하고 적용합니다.",
        },
      ],
    },
  },
} as const

export type SiteConfig = typeof siteConfig
