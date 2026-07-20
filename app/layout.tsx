import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import JsonLd from "@/components/JsonLd"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seokmarketing.com"),
  title: "SEOK - 데이터 기반 SEO 마케팅 에이전시",
  description: "SEOK은 데이터 기반의 블로그 SEO 전략으로 브랜드의 온라인 가시성을 극대화합니다.",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "SEOK",
    title: "SEOK - 데이터 기반 SEO 마케팅 에이전시",
    description: "SEOK은 데이터 기반의 블로그 SEO 전략으로 브랜드의 온라인 가시성을 극대화합니다.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEOK - 데이터 기반 SEO 마케팅 에이전시",
    description: "SEOK은 데이터 기반의 블로그 SEO 전략으로 브랜드의 온라인 가시성을 극대화합니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "4TEEWgy8Li8Nxb4ryicYRGEehlxFA7CZa1ViT0kx4zs",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`font-sans antialiased`}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
