export default function AboutPage() {
  const beliefs = [
    {
      title: "검색 노출의 복리 효과",
      description:
        "한 번 작성한 콘텐츠는 몇 년간 검색 유입을 만듭니다. 꾸준히 쌓인 콘텐츠는 복리처럼 브랜드 자산이 됩니다.",
    },
    {
      title: "장기 운영 중심 전략",
      description:
        "단발성 캠페인이 아닌, 지속 가능한 검색 유입 구조를 설계합니다. 6개월, 1년 후를 바라보고 움직입니다.",
    },
    {
      title: "데이터 기반 의사결정",
      description: "감이 아닌 검색량, CTR, 전환율 데이터를 기반으로 모든 전략을 수립하고 실행합니다.",
    },
  ]

  const strengths = [
    {
      title: "니치 키워드 전문성",
      icon: "🎯",
      description: "크립토, 투자, 핀테크, B2B SaaS 등 전문 지식이 필요한 산업에서 검증된 SEO 경험을 보유하고 있습니다.",
    },
    {
      title: "블로그 작업 템플릿화",
      icon: "📋",
      description: "카테고리별 최적화된 포스팅 템플릿으로 효율적이면서도 높은 품질의 콘텐츠를 빠르게 제작합니다.",
    },
    {
      title: "스타트업 생태계 이해",
      icon: "🚀",
      description:
        "정부지원사업 레퍼런스부터 초기 스타트업의 제한된 리소스까지, 실무 경험을 바탕으로 현실적인 전략을 제안합니다.",
    },
    {
      title: "성과 투명성",
      icon: "📊",
      description: "주간/월간 리포트와 실시간 대시보드로 키워드 순위, 유입, 전환 등 모든 성과를 투명하게 공유합니다.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#020714]">
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-sm text-emerald-300 font-medium">About SEOK</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Search Engine
              <br />
              Optimized Knowledge.
            </span>
          </h1>

          <div className="max-w-3xl space-y-4 text-lg text-gray-400 leading-relaxed">
            <p>
              SEOK은 블로그 최적화 SEO를 기반으로 한 퍼포먼스 마케팅 에이전시입니다. 검색 엔진에서 먼저 발견되는 것,
              그것이 곧 브랜드의 경쟁력이라고 믿습니다.
            </p>
            <p>
              우리는 단순히 글을 쓰는 것이 아니라, 검색 시장을 분석하고 키워드를 선점하며, 장기적으로 누적되는 검색 유입
              구조를 설계합니다.
            </p>
            <p>
              크립토, 투자, 비즈니스 등 전문성이 요구되는 니치 마켓에서 데이터 기반의 SEO 전략으로 브랜드가 성장하도록
              돕습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">우리가 믿는 것</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{belief.title}</h3>
                <p className="text-gray-400 leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-emerald-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">SEOK의 강점</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#0C1F16] to-transparent border border-emerald-500/20"
              >
                <div className="text-4xl mb-4">{strength.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{strength.title}</h3>
                <p className="text-gray-400 leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <span className="text-5xl font-bold text-white">K</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">권기범</h3>
                <p className="text-emerald-400 mb-4">Founder & CEO</p>
                <p className="text-gray-400 leading-relaxed">
                  5년 이상 블로그 SEO와 콘텐츠 마케팅 경험을 바탕으로 SEOK을 설립했습니다. 니치 마켓 키워드 전략과 장기
                  운영형 블로그 구축에 강점을 가지고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">함께 성장할 준비가 되셨나요?</h2>
          <p className="text-lg text-gray-400 mb-8">
            SEOK과 함께 검색 시장을 선점하고, 지속 가능한 성장을 만들어가세요.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            파트너십 문의하기
          </a>
        </div>
      </section>
    </main>
  )
}
