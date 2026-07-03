import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Use in Server Components (read-only). Cookie writes are no-ops here
// because Server Components can't set cookies — session refresh is
// handled by middleware.ts instead.
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll() {
        // no-op: Server Components cannot set cookies
      },
    },
  })
}

// Use in Route Handlers and Server Actions, where cookies can be
// written to refresh the session.
export async function createActionClient() {
  const cookieStore = await cookies()

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Called from a Server Component context where this isn't allowed; safe to ignore.
        }
      },
    },
  })
}
