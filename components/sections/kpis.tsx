// components/sections/kpis.tsx
import { siteConfig } from "@/config/site-config"

export default function KPIs() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">숫자로 보는 SEO 성과</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            실제 프로젝트에서 검증된 데이터 기반의 성과 지표입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.kpis.map((kpi, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20"
            >
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-4">
                {kpi.metric}
              </div>
              <div className="text-gray-400 text-sm mb-2">{kpi.label}</div>
              {kpi.description && <div className="text-gray-500 text-xs">{kpi.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
