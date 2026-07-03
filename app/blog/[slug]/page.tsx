import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getPostBySlug } from "@/lib/data/posts"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} - SEOK`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="relative pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          블로그 목록으로
        </Link>

        <p className="text-sm text-muted-foreground mb-2">
          {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString("ko-KR")}
        </p>
        <h1 className="text-4xl font-bold mb-8 text-balance">{post.title}</h1>

        {post.thumbnail && (
          <img
            src={post.thumbnail || "/placeholder.svg"}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-lg mb-8"
          />
        )}

        <div className="prose prose-lg prose-invert max-w-none whitespace-pre-wrap leading-relaxed">
          {post.content}
        </div>
      </div>
    </article>
  )
}
