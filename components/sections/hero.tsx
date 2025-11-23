// components/sections/hero.tsx
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-emerald-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-300 font-medium">Blog SEO & Content Performance</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Search Engine
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Key to Your Next Market.
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              SEOK은 블로그 최적화 SEO를 기반으로, 브랜드가 선점해야 할 키워드를 대신 찾아 쓰고 쌓아주는 마케팅
              에이전시입니다.
              <br />
              검색 시장에서 먼저 발견되는 것, 그것이 곧 경쟁력입니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                파트너십 문의하기
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/cases"
                className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                케이스 스터디 보기
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl blur-xl" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    SEOK
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Performance Metrics</div>
                  <div className="text-3xl font-bold text-white">SEO PERFORMANCE</div>
                  <div className="text-emerald-400 font-mono text-lg">Search Engine Optimized Knowledge</div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">120%</div>
                    <div className="text-xs text-gray-500">키워드</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">2.3x</div>
                    <div className="text-xs text-gray-500">트래픽</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">90%</div>
                    <div className="text-xs text-gray-500">리텐션</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
