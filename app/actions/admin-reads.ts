"use server"

// Thin Server Action wrapper so the admin list page (a client component
// with interactive filters) can re-fetch after a mutation without a
// full page reload. RLS scopes this to the logged-in admin session —
// a logged-out caller just gets an empty array back.

import { getAllPostsForAdmin } from "@/lib/data/posts"

export async function getAllPostsForAdminAction() {
  return getAllPostsForAdmin()
}
