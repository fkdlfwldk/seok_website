import { chronicleClient } from "@/lib/supabase/chronicle"

export interface ChronicleArticleSummary {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string | null
}

const CHRONICLE_BASE_URL = "https://www.seokchronicle.com"

export function chronicleArticleUrl(slug: string) {
  return `${CHRONICLE_BASE_URL}/news/${slug}`
}

export async function getLatestChronicleArticles(limit = 6): Promise<ChronicleArticleSummary[]> {
  if (!chronicleClient) return []

  const { data, error } = await chronicleClient
    .from("articles")
    .select("slug, title, excerpt, category, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("[getLatestChronicleArticles]", error.message)
    return []
  }

  return (data ?? []).map((row) => ({
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    publishedAt: row.published_at,
  }))
}
