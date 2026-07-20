import type { MetadataRoute } from "next"
import { getPublishedPosts } from "@/lib/data/posts"

const BASE = "https://www.seokmarketing.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/cases`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/network`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ]

  const posts = await getPublishedPosts()
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
