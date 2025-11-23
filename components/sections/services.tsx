// components/sections/services.tsx
import { siteConfig } from "@/config/site-config"

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">우리가 하는 일</h2>
          <p className="text-lg text-gray-400">
            검색 엔진에서 먼저 발견되는 것부터 지속적인 성과 창출까지, SEOK은 데이터 기반의 블로그 SEO 전략으로 브랜드의
            온라인 가시성을 극대화합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="group p-6 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-full bg-emerald-400/50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
