// components/sections/contact.tsx
import Link from "next/link"
import { siteConfig } from "@/config/site-config"

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 lg:py-32 border-t border-emerald-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-sm text-emerald-300 font-medium">Contact Us</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">함께 성장할 파트너를 찾습니다</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            B2B 도입, 장기 블로그 운영, 프로젝트 단위 마케팅 등 다양한 형태의 파트너십을 통해 검색 유입 구조를 함께
            설계합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-emerald-400 font-bold text-sm">E</span>
            </div>
            <h3 className="text-white font-semibold mb-2">이메일</h3>

            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {siteConfig.contact.email}
            </Link>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-emerald-400 font-bold text-sm">T</span>
            </div>
            <h3 className="text-white font-semibold mb-2">전화</h3>

            <Link
              href={`tel:${siteConfig.contact.phone}`}
              className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {siteConfig.contact.phone}
            </Link>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-emerald-400 font-bold text-sm">A</span>
            </div>
            <h3 className="text-white font-semibold mb-2">오피스</h3>
            <p className="text-sm text-gray-400">{siteConfig.contact.address}</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            파트너십 문의하기
          </Link>
        </div>
      </div>
    </section>
  )
}
