// components/sections/cases.tsx
import Link from "next/link"
import { siteConfig } from "@/config/site-config"

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-emerald-950/10 via-transparent to-transparent"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Recent SEO Cases</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">실제 프로젝트에서 쌓은 데이터와 인사이트입니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-[#0C1F16] to-transparent border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {caseStudy.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {caseStudy.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{caseStudy.description}</p>

              <Link
                href="/cases"
                className="inline-flex items-center text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all"
              >
                자세히 보기
                <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/cases"
            className="inline-block px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            모든 케이스 스터디 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
