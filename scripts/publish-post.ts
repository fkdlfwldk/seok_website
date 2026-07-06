/**
 * SEOK Marketing — 블로그 발행 CLI
 *
 * 마크다운 본문을 받아 slug/excerpt를 자동 계산하고 Supabase posts 테이블에
 * status='published'로 즉시 발행한다. 서비스 롤 키로 RLS를 우회하므로
 * (이 프로젝트는 profiles/role 테이블 없이 "인증된 사용자 = 관리자" 단일
 * 관리자 모델이라 로그인 세션 자체가 불필요) 로그인 절차가 없다.
 *
 * 실행 예시:
 *   npx tsx scripts/publish-post.ts \
 *     --title "SEO 대행 시작 전 꼭 확인해야 할 5가지" \
 *     --content ./sources/draft.md \
 *     --thumbnail "https://example.com/thumb.jpg"
 *
 * 필수 인자: --title, --content(마크다운 파일 경로)
 * 선택 인자: --thumbnail, --excerpt(생략 시 본문 앞부분에서 자동 생성)
 *
 * 필요 환경변수 (Infisical 등 시크릿 매니저로 주입 권장):
 *   NEXT_PUBLIC_SUPABASE_URL   — 이미 .env.local에 있음
 *   SUPABASE_SERVICE_ROLE_KEY — RLS를 우회하는 관리자 키. Supabase 대시보드 →
 *                               이 프로젝트 → Settings → API에서 발급.
 *                               .env.local 등 커밋되는 파일에 넣지 말 것.
 */

import { parseArgs } from "node:util"
import { readFileSync, existsSync } from "node:fs"
import { resolve } from "node:path"
import { createClient } from "@supabase/supabase-js"

import { generateSlug } from "../lib/slug"

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local")
  if (!existsSync(envPath)) return

  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue

    const eq = trimmed.indexOf("=")
    if (eq === -1) continue

    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = value
  }
}

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Heuristic: walk sentence-ending punctuation (Korean and ASCII) and stop
// once we've accumulated a reasonable excerpt length. Falls back to a hard
// truncate if the text has no clear sentence breaks in range.
function buildExcerpt(plainText: string, minLen = 60, maxLen = 220): string {
  const sentenceEnds = /[.!?](?:\s|$)/g
  let match: RegExpExecArray | null
  let end = -1

  while ((match = sentenceEnds.exec(plainText))) {
    const candidateEnd = match.index + 1
    if (candidateEnd >= minLen) {
      end = candidateEnd
      break
    }
  }

  if (end === -1 || end > maxLen) {
    if (plainText.length <= maxLen) return plainText
    return `${plainText.slice(0, maxLen).trim()}…`
  }

  return plainText.slice(0, end).trim()
}

async function main() {
  loadEnvLocal()

  const { values } = parseArgs({
    options: {
      title: { type: "string" },
      content: { type: "string" },
      thumbnail: { type: "string" },
      excerpt: { type: "string" },
    },
  })

  const { title, content, thumbnail, excerpt: excerptArg } = values

  if (!title || !content) {
    console.error("사용법: npx tsx scripts/publish-post.ts --title <제목> --content <마크다운 파일>")
    process.exit(1)
  }

  const contentPath = resolve(process.cwd(), content)
  if (!existsSync(contentPath)) {
    console.error(`본문 파일을 찾을 수 없습니다: ${contentPath}`)
    process.exit(1)
  }
  const contentMd = readFileSync(contentPath, "utf-8").trim()
  if (!contentMd) {
    console.error("본문이 비어 있습니다.")
    process.exit(1)
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceRoleKey) {
    console.error(
      "NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY가 없습니다. " +
        "시크릿 매니저로 주입하세요 (예: infisical run -- npm run publish-post -- ...).",
    )
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey)

  const slug = generateSlug(title)
  const excerpt = excerptArg ?? buildExcerpt(stripMarkdown(contentMd))
  const now = new Date().toISOString()

  const { data: inserted, error: insertError } = await supabase
    .from("posts")
    .insert({
      slug,
      title,
      excerpt,
      content: contentMd,
      thumbnail: thumbnail ?? null,
      status: "published",
      published_at: now,
    })
    .select("id, slug")
    .single()

  if (insertError || !inserted) {
    console.error("[insert] 게시글 저장 실패:", insertError?.message)
    process.exit(1)
  }

  console.log(`[publish] 발행 완료: slug=${inserted.slug} (id=${inserted.id})`)
}

main().catch((err) => {
  console.error("[fatal]", err)
  process.exit(1)
})
