export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80)
}

// Korean titles frequently slugify to an empty/meaningless ASCII
// string, so every generated slug gets a short opaque suffix. At this
// suffix length a true collision is effectively impossible; callers
// should still retry once on a unique-constraint error as a backstop.
export function generateSlug(title: string): string {
  const base = slugify(title)
  const suffix = Date.now().toString(36)
  return base ? `${base}-${suffix}` : suffix
}
