import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getLatestChronicleArticles, chronicleArticleUrl } from "@/lib/data/chronicle"

export const metadata = {
  title: "SEOK Network - SEOK",
  description: "SEOK이 직접 운영하는 미디어, SEOK Chronicle을 소개합니다.",
}

export default async function NetworkPage() {
  const articles = await getLatestChronicleArticles(6)

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">SEOK Network</h1>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          SEOK은 크립토·비즈니스 분야의 SEO 전략을 클라이언트에게 제안하는 데 그치지 않고, 자체 미디어를 직접
          운영하며 검증합니다.{" "}
          <Link
            href="https://www.seokchronicle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            SEOK Chronicle
          </Link>
          은 해외 크립토·블록체인·비즈니스 뉴스를 다루는 저널형 매체로, SEOK이 직접 기획·발행합니다.
        </p>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">SEOK Chronicle 최신 기사</h2>
          <Link
            href="https://www.seokchronicle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            전체 보기
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground">불러올 기사가 없습니다.</div>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={chronicleArticleUrl(article.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b border-border pb-6 last:border-0 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-md bg-muted uppercase">
                    {article.category}
                  </span>
                  {article.publishedAt && (
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.publishedAt).toLocaleDateString("ko-KR")}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
