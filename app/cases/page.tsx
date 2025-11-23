export default function CasesPage() {
  const cases = [
    {
      category: "Crypto",
      title: "국내 크립토 프로젝트 브랜드 키워드 선점 사례",
      description: "신규 토큰 런칭 전 핵심 키워드 30개를 선점하여 론칭 초기 검색 유입 300% 증가를 달성했습니다.",
      kpi: "상위 노출 키워드 +120% · 검색 유입 3배 증가",
    },
    {
      category: "Finance",
      title: "핀테크 스타트업 SEO 전환율 최적화",
      description: "금융 상품 비교 키워드 중심으로 콘텐츠를 재구성하여 전환율 2.1배 향상을 이뤄냈습니다.",
      kpi: "전환율 2.1배 · CTR 4.2% 달성",
    },
    {
      category: "Business",
      title: "B2B SaaS 기업 장기 블로그 운영 프로젝트",
      description: "6개월간 120개의 롱테일 키워드 콘텐츠 발행으로 MQL 250% 증가를 기록했습니다.",
      kpi: "MQL 250% 증가 · 도메인 권위 45→62",
    },
    {
      category: "Investment",
      title: "투자 교육 플랫폼 검색 트래픽 확대",
      description: "주식, 부동산, 가상자산 등 투자 카테고리별 SEO 전략으로 월 방문자 5만 → 15만 달성",
      kpi: "검색 유입 2.3배 · 체류시간 4분 30초",
    },
  ]

  const categoryColors: Record<string, string> = {
    Crypto: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    Finance: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Business: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Investment: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  }

  return (
    <main className="min-h-screen bg-[#020714]">
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-sm text-emerald-300 font-medium">Cases</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            데이터로 증명하는
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              SEO 성과.
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            실제 프로젝트에서 쌓은 데이터와 인사이트입니다. 크립토, 금융, 비즈니스 등 다양한 산업에서 검증된 SEO 전략을
            확인하세요.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-[#0C1F16] to-transparent border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[caseItem.category]}`}
                  >
                    {caseItem.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {caseItem.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">{caseItem.description}</p>

                <div className="pt-4 border-t border-emerald-500/10">
                  <p className="text-sm font-semibold text-emerald-400">{caseItem.kpi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-emerald-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "120%", label: "평균 키워드 증가율" },
              { metric: "2.3배", label: "검색 트래픽 증가" },
              { metric: "90%+", label: "프로젝트 리텐션" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20"
              >
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-3">
                  {stat.metric}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">다음 성공 사례의 주인공은 당신입니다</h2>
          <p className="text-lg text-gray-400 mb-8">
            SEOK과 함께 검색 시장을 선점하고, 데이터로 증명되는 성과를 만들어보세요.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            프로젝트 시작하기
          </a>
        </div>
      </section>
    </main>
  )
}
