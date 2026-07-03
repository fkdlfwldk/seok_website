import PostEditor from "@/components/admin/PostEditor"
import { getPostById } from "@/lib/data/posts"

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getPostById(id)

  if (!post) {
    return <div className="text-sm text-muted-foreground">글을 찾을 수 없습니다.</div>
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">글 수정</h1>
      <PostEditor initial={post} />
    </div>
  )
}
