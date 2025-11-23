import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Process from "@/components/sections/process"
import KPIs from "@/components/sections/kpis"
import Cases from "@/components/sections/cases"
import ContactSection from "@/components/sections/contact"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <KPIs />
      <Cases />
      <ContactSection />
    </main>
  )
}
