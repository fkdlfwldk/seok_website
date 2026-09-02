const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.seokmarketing.com/#organization",
      name: "SEOK",
      alternateName: ["에스이오케이", "에스이오케이 마케팅", "Search Engine Optimized Knowledge"],
      url: "https://www.seokmarketing.com/",
      description: "SEOK은 데이터 기반의 블로그 SEO 전략으로 브랜드의 온라인 가시성을 극대화하는 마케팅 에이전시입니다.",
      email: "ceo@beombiom.com",
      founder: { "@id": "https://www.seokmarketing.com/#kwonkeybum" },
      knowsAbout: [
        "SEO",
        "검색엔진최적화",
        "GEO",
        "Generative Engine Optimization",
        "AEO",
        "Answer Engine Optimization",
        "콘텐츠 마케팅",
        "퍼스널 브랜딩",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.seokmarketing.com/#kwonkeybum",
      name: "권기범",
      alternateName: ["KWONKEYBUM", "kwonkeybum"],
      url: "https://www.seokmarketing.com/",
      jobTitle: "창업자",
      email: "ceo@beombiom.com",
      worksFor: { "@id": "https://www.seokmarketing.com/#organization" },
      affiliation: [
        { "@type": "Organization", name: "범바이옴", alternateName: "beombiom" },
        { "@type": "Organization", name: "지노랩" },
        { "@type": "Organization", name: "휴켐플러스" },
        { "@id": "https://www.seokmarketing.com/#organization" },
      ],
      knowsAbout: [
        "GEO",
        "AEO",
        "SEO",
        "퍼스널 브랜딩",
        "콘텐츠 시스템화",
        "딥테크 사업화",
        "스타트업",
        "시장 구조",
        "나노 열소재",
      ],
      sameAs: [
        "https://www.instagram.com/kwonkeybum/",
        "https://www.instagram.com/im_z.hun/",
        "https://www.instagram.com/x_x_inbok/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.seokmarketing.com/#website",
      url: "https://www.seokmarketing.com/",
      name: "SEOK",
      alternateName: "에스이오케이 마케팅",
      inLanguage: "ko",
      publisher: { "@id": "https://www.seokmarketing.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.seokmarketing.com/#webpage",
      url: "https://www.seokmarketing.com/",
      name: "SEOK - 데이터 기반 SEO 마케팅 에이전시",
      isPartOf: { "@id": "https://www.seokmarketing.com/#website" },
      about: { "@id": "https://www.seokmarketing.com/#organization" },
      inLanguage: "ko",
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
