// components/ContactForm.tsx
"use client"

import { useState, type FormEvent } from "react"

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  inquiryType: string
  message: string
  privacyAgree: boolean
  marketingAgree: boolean
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "장기 블로그 운영",
    message: "",
    privacyAgree: false,
    marketingAgree: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "필수 항목을 모두 입력해주세요.",
      })
      return
    }

    if (!formData.privacyAgree) {
      setSubmitStatus({
        type: "error",
        message: "개인정보 수집 및 이용에 동의해주세요.",
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "올바른 이메일 형식을 입력해주세요.",
      })
      return
    }

    setIsSubmitting(true)

    // 콘솔에 출력
    console.log("문의 데이터:", formData)

    // 시뮬레이션: 2초 후 성공 메시지
    setTimeout(() => {
      setSubmitStatus({
        type: "success",
        message: "문의가 성공적으로 전송되었습니다! 24시간 이내에 답변드리겠습니다.",
      })
      setIsSubmitting(false)

      // 폼 초기화
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiryType: "장기 블로그 운영",
        message: "",
        privacyAgree: false,
        marketingAgree: false,
      })

      // 3초 후 메시지 제거
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 3000)
    }, 2000)
  }

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0C1F16] to-transparent border border-emerald-500/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              이름 <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-emerald-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="홍길동"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              회사명
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-emerald-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="회사명 입력"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              이메일 <span className="text-emerald-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-emerald-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              연락처
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-emerald-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder="010-0000-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
            문의 유형
          </label>
          <select
            id="inquiryType"
            value={formData.inquiryType}
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-emerald-500/20 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
          >
            <option value="장기 블로그 운영">장기 블로그 운영</option>
            <option value="단기 캠페인">단기 캠페인</option>
            <option value="SEO 진단">SEO 진단</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            문의 내용 <span className="text-emerald-400">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-emerald-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
            placeholder="프로젝트에 대해 자세히 설명해주세요"
          />
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.privacyAgree}
              onChange={(e) => setFormData({ ...formData, privacyAgree: e.target.checked })}
              className="mt-1 w-5 h-5 rounded border-emerald-500/30 bg-black/30 text-emerald-500 focus:ring-emerald-500/50 cursor-pointer"
            />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              개인정보 수집 및 이용에 동의합니다. <span className="text-emerald-400">(필수)</span>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.marketingAgree}
              onChange={(e) => setFormData({ ...formData, marketingAgree: e.target.checked })}
              className="mt-1 w-5 h-5 rounded border-emerald-500/30 bg-black/30 text-emerald-500 focus:ring-emerald-500/50 cursor-pointer"
            />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              마케팅 정보 수신에 동의합니다. (선택)
            </span>
          </label>
        </div>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg border ${
              submitStatus.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-red-500/10 border-red-500/30 text-red-300"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-0.5"
          }`}
        >
          {isSubmitting ? "전송 중..." : "문의 보내기"}
        </button>
      </form>
    </div>
  )
}
