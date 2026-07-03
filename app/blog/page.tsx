import Link from "next/link"
import { getPublishedPosts } from "@/lib/data/posts"

export default async function BlogListPage() {
  const posts = await getPublishedPosts()

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">블로그</h1>
        <p className="text-muted-foreground mb-12">SEOK이 전하는 SEO 인사이트와 소식입니다</p>

        {posts.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground">아직 등록된 글이 없습니다.</div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block border-b border-border pb-8 last:border-0 group"
              >
                {post.thumbnail && (
                  <img
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full aspect-[16/9] object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-sm text-muted-foreground mb-2">
                  {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString("ko-KR")}
                </p>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
