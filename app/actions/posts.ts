"use server"

import { revalidatePath } from "next/cache"
import { createActionClient } from "@/lib/supabase/server"
import { generateSlug } from "@/lib/slug"

export type PostFormInput = {
  title: string
  excerpt: string
  content: string
  thumbnail?: string
}

async function requireAuth() {
  const supabase = await createActionClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return { supabase, user }
}

function validate(input: PostFormInput) {
  if (!input.title.trim() || !input.excerpt.trim() || !input.content.trim()) {
    return "제목, 요약, 본문은 필수입니다."
  }
  return null
}

export async function createPost(input: PostFormInput, status: "draft" | "published") {
  const { supabase, user } = await requireAuth()
  if (!user) return { error: "로그인이 필요합니다." }

  const validationError = validate(input)
  if (validationError) return { error: validationError }

  const slug = generateSlug(input.title)
  const now = new Date().toISOString()

  const { data, error } = await supabase
    .from("posts")
    .insert({
      slug,
      title: input.title.trim(),
      excerpt: input.excerpt.trim(),
      content: input.content,
      thumbnail: input.thumbnail?.trim() || null,
      status,
      published_at: status === "published" ? now : null,
    })
    .select("id, slug")
    .single()

  if (error) {
    console.error("[createPost]", error.message)
    return { error: "게시글 저장 중 오류가 발생했습니다." }
  }

  revalidatePath("/blog")
  revalidatePath("/admin/posts")
  return { success: true as const, id: data.id, slug: data.slug }
}

export async function updatePost(id: string, input: PostFormInput, status: "draft" | "published") {
  const { supabase, user } = await requireAuth()
  if (!user) return { error: "로그인이 필요합니다." }

  const validationError = validate(input)
  if (validationError) return { error: validationError }

  const { data: existing } = await supabase.from("posts").select("published_at, slug").eq("id", id).single()
  if (!existing) return { error: "게시글을 찾을 수 없습니다." }

  const publishedAt = status === "published" ? (existing.published_at ?? new Date().toISOString()) : existing.published_at

  const { error } = await supabase
    .from("posts")
    .update({
      title: input.title.trim(),
      excerpt: input.excerpt.trim(),
      content: input.content,
      thumbnail: input.thumbnail?.trim() || null,
      status,
      published_at: publishedAt,
    })
    .eq("id", id)

  if (error) {
    console.error("[updatePost]", error.message)
    return { error: "게시글 수정 중 오류가 발생했습니다." }
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${existing.slug}`)
  revalidatePath("/admin/posts")
  return { success: true as const, slug: existing.slug }
}

export async function setPostStatus(id: string, status: "draft" | "published") {
  const { supabase, user } = await requireAuth()
  if (!user) return { error: "로그인이 필요합니다." }

  const { data: existing } = await supabase.from("posts").select("published_at, slug").eq("id", id).single()
  if (!existing) return { error: "게시글을 찾을 수 없습니다." }

  const { error } = await supabase
    .from("posts")
    .update({
      status,
      published_at: status === "published" ? (existing.published_at ?? new Date().toISOString()) : existing.published_at,
    })
    .eq("id", id)

  if (error) {
    console.error("[setPostStatus]", error.message)
    return { error: "상태 변경 중 오류가 발생했습니다." }
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${existing.slug}`)
  revalidatePath("/admin/posts")
  return { success: true as const }
}

export async function deletePost(id: string) {
  const { supabase, user } = await requireAuth()
  if (!user) return { error: "로그인이 필요합니다." }

  const { error } = await supabase.from("posts").delete().eq("id", id)
  if (error) {
    console.error("[deletePost]", error.message)
    return { error: "삭제 중 오류가 발생했습니다." }
  }

  revalidatePath("/blog")
  revalidatePath("/admin/posts")
  return { success: true as const }
}
