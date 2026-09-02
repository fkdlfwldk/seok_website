"use server"

import { randomUUID } from "node:crypto"

import { createActionClient } from "@/lib/supabase/server"

export type InquiryInput = {
  name: string
  email: string
  phone?: string
  company?: string
  contactType?: string
  inquiryType?: string
  message: string
  privacyAgree?: boolean
  marketingAgree?: boolean
  sourcePage?: string
  /** 봇 트랩. 사람이 채울 수 없는 숨김 필드이므로 값이 있으면 스팸으로 간주한다. */
  honeypot?: string
}

const NOTIFY_TO = process.env.INQUIRY_NOTIFY_TO || "ceo@beombiom.com"
const NOTIFY_FROM = process.env.INQUIRY_NOTIFY_FROM || "no-reply@send.beombiom.com"
const SITE_LABEL = "SEOK 마케팅"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(input: InquiryInput) {
  if (!input.name?.trim() || !input.email?.trim() || !input.message?.trim()) {
    return "이름, 이메일, 문의 내용은 필수입니다."
  }
  if (!EMAIL_RE.test(input.email.trim())) {
    return "올바른 이메일 형식을 입력해주세요."
  }
  if (input.message.trim().length > 5000) {
    return "문의 내용이 너무 깁니다. 5000자 이내로 작성해주세요."
  }
  return null
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/**
 * Resend REST API로 알림 메일을 보낸다. SDK를 추가하지 않고 fetch만 쓴다.
 * 실패는 호출부에서 삼키고 DB에 사유만 기록한다 — 접수 자체를 막지 않기 위함.
 */
async function sendNotification(input: InquiryInput) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY 미설정")
  }

  const rows: Array<[string, string | undefined]> = [
    ["이름", input.name],
    ["이메일", input.email],
    ["연락처", input.phone],
    ["회사", input.company],
    ["폼 종류", input.contactType],
    ["문의 유형", input.inquiryType],
    ["제출 페이지", input.sourcePage],
    ["마케팅 수신동의", input.marketingAgree ? "동의" : "미동의"],
  ]

  const html = [
    `<h2>${SITE_LABEL} 새 문의</h2>`,
    "<table cellpadding='6' style='border-collapse:collapse'>",
    ...rows
      .filter(([, v]) => v && String(v).trim())
      .map(
        ([k, v]) =>
          `<tr><td style="border:1px solid #ddd"><b>${k}</b></td><td style="border:1px solid #ddd">${escapeHtml(String(v))}</td></tr>`,
      ),
    "</table>",
    "<h3>문의 내용</h3>",
    `<pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(input.message)}</pre>`,
  ].join("")

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${SITE_LABEL} 문의 <${NOTIFY_FROM}>`,
      to: [NOTIFY_TO],
      // 메일에서 바로 회신하면 문의자에게 가도록
      reply_to: input.email.trim(),
      subject: `[${SITE_LABEL}] ${input.name.trim()}님의 문의${input.inquiryType ? ` — ${input.inquiryType}` : ""}`,
      html,
    }),
  })

  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`)
  }
}

export async function submitInquiry(input: InquiryInput) {
  // 봇 트랩에 걸리면 조용히 성공 응답만 돌려준다 (봇에게 탐지 사실을 알리지 않음)
  if (input.honeypot?.trim()) {
    return { ok: true as const }
  }

  const validationError = validate(input)
  if (validationError) return { error: validationError }

  const supabase = await createActionClient()

  // 방문자는 anon 역할이고 inquiries에 SELECT 정책이 없다(접수 내용 노출 방지).
  // 그래서 insert에 RETURNING(.select())을 붙이면 권한 부족으로 실패한다.
  // id를 미리 만들어 넣고 RETURNING 없이 저장한 뒤, 그 id로 알림 결과를 기록한다.
  const id = randomUUID()

  const { error } = await supabase
    .from("inquiries")
    .insert({
      id,
      name: input.name.trim(),
      email: input.email.trim(),
      phone: input.phone?.trim() || null,
      company: input.company?.trim() || null,
      contact_type: input.contactType || null,
      inquiry_type: input.inquiryType || null,
      message: input.message.trim(),
      privacy_agree: !!input.privacyAgree,
      marketing_agree: !!input.marketingAgree,
      source_page: input.sourcePage || null,
    })

  if (error) {
    console.error("[inquiries] insert 실패:", error.message)
    return { error: "문의 저장에 실패했습니다. 잠시 후 다시 시도해주세요." }
  }

  // 여기부터는 best-effort. 메일이 실패해도 접수는 이미 성공했으므로 사용자에겐 성공으로 응답한다.
  // 기록은 mark_inquiry_notified()로 한다 — 방문자는 anon이라 inquiries를 직접 UPDATE할 수 없다.
  try {
    await sendNotification(input)
    await supabase.rpc("mark_inquiry_notified", { p_id: id, p_error: null })
  } catch (e) {
    const reason = e instanceof Error ? e.message : String(e)
    console.error("[inquiries] 알림 메일 실패:", reason)
    await supabase.rpc("mark_inquiry_notified", { p_id: id, p_error: reason.slice(0, 500) })
  }

  return { ok: true as const }
}
