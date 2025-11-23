// components/layout/footer.tsx
import Link from "next/link"
import { siteConfig } from "@/config/site-config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-emerald-500/10 bg-gradient-to-b from-transparent to-emerald-950/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">{siteConfig.slogan}</p>
            <p className="text-sm text-gray-500">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li className="text-gray-400">{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
