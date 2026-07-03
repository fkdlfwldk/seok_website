export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  thumbnail: string | null
  status: "draft" | "published"
  createdAt: string
  updatedAt: string
  publishedAt: string | null
}
