"use client"

import { useState, useEffect, useTransition } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { deletePost, setPostStatus } from "@/app/actions/posts"
import { getAllPostsForAdminAction } from "@/app/actions/admin-reads"
import type { Post } from "@/lib/types"

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all")
  const [isPending, startTransition] = useTransition()

  const loadPosts = async () => {
    setPosts(await getAllPostsForAdminAction())
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const filteredPosts = posts.filter((p) => filter === "all" || p.status === filter)

  const onDelete = (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return
    startTransition(async () => {
      await deletePost(id)
      loadPosts()
    })
  }

  const onToggleStatus = (post: Post) => {
    startTransition(async () => {
      await setPostStatus(post.id, post.status === "published" ? "draft" : "published")
      loadPosts()
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">블로그 관리</h1>
        <Link href="/admin/posts/new">
          <Button>새 글 작성</Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
          전체 ({posts.length})
        </Button>
        <Button
          variant={filter === "published" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("published")}
        >
          발행됨 ({posts.filter((p) => p.status === "published").length})
        </Button>
        <Button variant={filter === "draft" ? "default" : "outline"} size="sm" onClick={() => setFilter("draft")}>
          초안 ({posts.filter((p) => p.status === "draft").length})
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 px-4 py-3 text-xs font-bold text-muted-foreground border-b border-border">
          <div className="col-span-6">제목</div>
          <div className="col-span-2">상태</div>
          <div className="col-span-2">수정일</div>
          <div className="col-span-2 text-right">액션</div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="p-8 text-center text-sm text-muted-foreground">
            {filter === "all" ? "아직 글이 없습니다. 새 글 작성으로 시작하세요." : "해당하는 글이 없습니다."}
          </div>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="grid grid-cols-12 px-4 py-3 border-b border-border items-center hover:bg-muted/50"
            >
              <div className="col-span-6 font-semibold truncate">{post.title}</div>
              <div className="col-span-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-md ${
                    post.status === "published"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {post.status === "published" ? "발행됨" : "초안"}
                </span>
              </div>
              <div className="col-span-2 text-sm">{new Date(post.updatedAt).toLocaleDateString("ko-KR")}</div>
              <div className="col-span-2 flex justify-end gap-1">
                <Button variant="ghost" size="sm" onClick={() => onToggleStatus(post)} disabled={isPending}>
                  {post.status === "published" ? "초안으로" : "발행"}
                </Button>
                <Link href={`/admin/posts/${post.id}/edit`}>
                  <Button variant="ghost" size="sm">
                    수정
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => onDelete(post.id)} disabled={isPending}>
                  <span className="text-red-500">삭제</span>
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
