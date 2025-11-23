import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020714]">
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">파트너십 문의</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            SEOK과 함께 검색 시장을 선점하고 싶다면, 아래 양식으로 편하게 문의 주세요.
            <br />
            24시간 이내에 맞춤형 제안서와 함께 답변드리겠습니다.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">SEOK과 함께 시장을 선점하세요</h2>
                  <p className="text-gray-400 leading-relaxed">
                    검색 엔진 최적화부터 콘텐츠 전략, 성과 분석까지. SEOK이 브랜드의 온라인 가시성을 극대화합니다.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-white">무료 SEO 진단 제공</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-white">맞춤형 제안서 작성</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-white">24시간 이내 답변</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">연락처 정보</h3>

                <a
                  href="https://t.me/BIOSEOK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">텔레그램 (추천)</div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors">@BIOSEOK</div>
                    <div className="text-xs text-gray-400 mt-1">가장 빠른 답변</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">E</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">이메일</div>
                    <a
                      href="mailto:fkdlfwldk@naver.com"
                      className="text-white hover:text-emerald-400 transition-colors"
                    >
                      fkdlfwldk@naver.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">T</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">연락처</div>
                    <a href="tel:010-8965-7458" className="text-white hover:text-emerald-400 transition-colors">
                      010-8965-7458
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">A</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">주소</div>
                    <div className="text-white">서울 서초구 서초동 1308-16</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">BN</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">사업자등록번호</div>
                    <div className="text-white">849-79-00492</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
