import { createClient } from "@supabase/supabase-js"

// Read-only cross-project client pointed at the SEOK Chronicle
// Supabase project (a separate site/product this agency also
// operates). Uses SEOK Chronicle's own public anon key — protected by
// SEOK Chronicle's RLS (public read of published articles only), not
// a secret. No auth/session/cookies needed since we never sign in as
// a user on that project, only read published rows.
const chronicleUrl = process.env.NEXT_PUBLIC_CHRONICLE_SUPABASE_URL
const chronicleKey = process.env.NEXT_PUBLIC_CHRONICLE_SUPABASE_ANON_KEY

export const chronicleClient = chronicleUrl && chronicleKey ? createClient(chronicleUrl, chronicleKey) : null
