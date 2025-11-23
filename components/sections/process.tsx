// components/sections/process.tsx
import { siteConfig } from "@/config/site-config"

export default function Process() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">SEOK의 작업 프로세스</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            체계적인 4단계 프로세스로 검색 엔진 최적화부터 성과 분석까지 완벽하게 지원합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.process.map((step) => (
            <div
              key={step.step}
              className="relative p-6 rounded-xl bg-gradient-to-br from-[#0C1F16] to-transparent border border-emerald-500/20"
            >
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/50">
                  {step.step}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
