import type { Post } from "@/lib/types"
import { createClient } from "@/lib/supabase/server"

type PostRow = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  thumbnail: string | null
  status: "draft" | "published"
  created_at: string
  updated_at: string
  published_at: string | null
}

function fromRow(row: PostRow): Post {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    thumbnail: row.thumbnail,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
  }
}

// Public reads — RLS also restricts these to status='published' for
// unauthenticated visitors, but the explicit filter keeps intent clear.

export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })

  if (error) {
    console.error("[getPublishedPosts]", error.message)
    return []
  }
  return (data as PostRow[]).map(fromRow)
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle()

  if (error || !data) return undefined
  return fromRow(data as PostRow)
}

// Admin reads — RLS's "authenticated read all" policy scopes these to
// the logged-in admin session; a logged-out caller just gets [].

export async function getAllPostsForAdmin(): Promise<Post[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("posts").select("*").order("updated_at", { ascending: false })

  if (error) {
    console.error("[getAllPostsForAdmin]", error.message)
    return []
  }
  return (data as PostRow[]).map(fromRow)
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("posts").select("*").eq("id", id).maybeSingle()

  if (error || !data) return undefined
  return fromRow(data as PostRow)
}
