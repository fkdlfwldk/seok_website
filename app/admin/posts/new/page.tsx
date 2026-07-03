import PostEditor from "@/components/admin/PostEditor"

export default function NewPostPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">새 글 작성</h1>
      <PostEditor />
    </div>
  )
}
