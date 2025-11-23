export default function ServicesPage() {
  const services = [
    {
      title: "SEO Audit & Strategy",
      description:
        "블로그/웹사이트의 현재 SEO 상태를 정밀 진단하고, 검색 시장에서 선점할 키워드 전략을 체계적으로 설계합니다.",
      icon: "🔍",
    },
    {
      title: "Content Production",
      description:
        "검색 의도에 최적화된 카테고리별 템플릿을 기반으로 장기 노출형 포스팅을 제작하여 지속적인 검색 유입을 만듭니다.",
      icon: "✍️",
    },
    {
      title: "Long-Term Blog Operation",
      description: "장기 운영 대행을 통해 콘텐츠 업로드 캘린더를 관리하고, 꾸준한 포스팅으로 도메인 권위를 높입니다.",
      icon: "📅",
    },
    {
      title: "Performance Reporting",
      description:
        "검색 유입, CTR, 전환율 등 핵심 지표를 추적하고 실시간 대시보드와 정기 리포트로 성과를 투명하게 공유합니다.",
      icon: "📊",
    },
  ]

  return (
    <main className="min-h-screen bg-[#020714]">
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-sm text-emerald-300 font-medium">Services</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            블로그 SEO,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              구조부터 콘텐츠까지 한 번에.
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            SEOK은 검색 엔진 최적화의 모든 과정을 데이터 기반으로 설계하고 실행합니다. 키워드 리서치부터 콘텐츠 제작,
            성과 분석까지 통합된 SEO 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-emerald-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">체계적인 프로세스</h2>
            <p className="text-lg text-gray-400">Discovery → Strategy → Execution → Optimization</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "시장 기회 발굴" },
              { step: "02", title: "Strategy", desc: "키워드 전략 설계" },
              { step: "03", title: "Execution", desc: "콘텐츠 제작·발행" },
              { step: "04", title: "Optimization", desc: "성과 분석·개선" },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-xl bg-gradient-to-br from-[#0C1F16] to-transparent border border-emerald-500/20"
              >
                <div className="text-5xl font-bold text-emerald-400/20 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">프로젝트를 시작할 준비가 되셨나요?</h2>
          <p className="text-lg text-gray-400 mb-8">무료 SEO 진단과 맞춤 제안서로 시작하세요.</p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            무료 상담 신청하기
          </a>
        </div>
      </section>
    </main>
  )
}
