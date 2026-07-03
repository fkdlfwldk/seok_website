"use client"

import { useMemo, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { createPost, updatePost } from "@/app/actions/posts"
import type { Post } from "@/lib/types"
import { Button } from "@/components/ui/button"

type Props = {
  initial?: Post | null
}

export default function PostEditor({ initial }: Props) {
  const router = useRouter()
  const isEdit = !!initial?.id
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState("")

  const [title, setTitle] = useState(initial?.title ?? "")
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "")
  const [content, setContent] = useState(initial?.content ?? "")
  const [thumbnail, setThumbnail] = useState(initial?.thumbnail ?? "")

  const preview = useMemo(() => ({ title, excerpt, content, thumbnail }), [title, excerpt, content, thumbnail])

  function onSave(status: "draft" | "published") {
    setError("")
    const input = {
      title: title.trim(),
      excerpt: excerpt.trim(),
      content,
      thumbnail: thumbnail.trim() || undefined,
    }

    startTransition(async () => {
      const result = isEdit ? await updatePost(initial!.id, input, status) : await createPost(input, status)

      if (result.error) {
        setError(result.error)
        return
      }
      router.push("/admin/posts")
    })
  }

  return (
    <div>
      <Button variant="ghost" size="sm" className="mb-4" onClick={() => router.back()}>
        뒤로 가기
      </Button>

      {error && <div className="mb-4 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded text-sm">{error}</div>}

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">{isEdit ? "글 수정" : "새 글 작성"}</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => onSave("draft")} disabled={isPending}>
                초안 저장
              </Button>
              <Button size="sm" onClick={() => onSave("published")} disabled={isPending}>
                발행
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold">제목 *</label>
            <input
              className="border border-input rounded-lg px-3 py-2 bg-background"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="글 제목을 입력하세요"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold">요약 (목록 노출) *</label>
            <textarea
              className="border border-input rounded-lg px-3 py-2 bg-background min-h-[80px]"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="목록에 보여질 요약을 입력하세요"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold">대표 이미지 URL (선택)</label>
            <input
              className="border border-input rounded-lg px-3 py-2 bg-background"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold">본문 *</label>
            <textarea
              className="border border-input rounded-lg px-3 py-2 bg-background min-h-[300px] font-mono text-sm"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="본문을 작성하세요..."
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="text-xs text-muted-foreground mb-4">미리보기</div>

          {preview.thumbnail && (
            <img
              src={preview.thumbnail || "/placeholder.svg"}
              alt="Cover"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}

          <h1 className="text-3xl font-extrabold leading-tight mb-3">{preview.title || "제목"}</h1>
          <p className="text-foreground/80 mb-6">{preview.excerpt || "요약"}</p>
          <hr className="my-6 border-border" />
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{preview.content || "본문"}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
