/**
 * Normalises assistant reply text for plain-text chat bubbles: line breaks,
 * light markdown removal, and spacing. Safe for user-facing display only.
 */
export function cleanChatResponse(raw: string): string {
  let s = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim()

  // Model or transport sometimes leaves literal "\n" sequences
  s = s.replace(/\\n/g, "\n")

  // Trim each line; drop spaces that break paragraph flow
  s = s
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, "").trimEnd())
    .join("\n")

  // At most one blank line between paragraphs
  s = s.replace(/\n{3,}/g, "\n\n")

  // **bold** and __bold__
  s = s.replace(/\*\*([\s\S]*?)\*\*/g, "$1")
  s = s.replace(/__([\s\S]*?)__/g, "$1")

  // *italic* or _italic_ (single delimiters, non-greedy; run twice for adjacent spans)
  for (let i = 0; i < 2; i++) {
    s = s.replace(/(^|[\s(])\*([^*\n]+)\*([\s).,;:!?]|$)/g, "$1$2$3")
    s = s.replace(/(^|[\s(])_([^_\n]+)_([\s).,;:!?]|$)/g, "$1$2$3")
  }

  // Markdown headings at line start → plain line
  s = s.replace(/^#{1,6}\s+/gm, "")

  // Bullet lines: normalise "- item" / "* item"
  s = s.replace(/^[\t ]*[*•-][\t ]+/gm, "• ")

  return s.trim()
}
