"use client"

import * as React from "react"

type Match = {
  start: number
  end: number
  href: string
  label: string
  external: boolean
}

function stripTrailingPunct(s: string): { core: string; trimmed: number } {
  const core = s.replace(/[.,;:!?)'"»\]]+$/g, "")
  return { core, trimmed: s.length - core.length }
}

function collectUrlMatches(text: string): Match[] {
  const out: Match[] = []
  const http = /\bhttps?:\/\/[^\s<>\]\)}"']+/gi
  let m: RegExpExecArray | null
  while ((m = http.exec(text)) !== null) {
    const { core, trimmed } = stripTrailingPunct(m[0])
    out.push({
      start: m.index,
      end: m.index + m[0].length - trimmed,
      href: core,
      label: core,
      external: true,
    })
  }
  const www = /\bwww\.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s<>\]\)}"']*/gi
  while ((m = www.exec(text)) !== null) {
    const { core, trimmed } = stripTrailingPunct(m[0])
    out.push({
      start: m.index,
      end: m.index + m[0].length - trimmed,
      href: `https://${core}`,
      label: core,
      external: true,
    })
  }
  return out
}

function collectEmailMatches(text: string): Match[] {
  const out: Match[] = []
  const re = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    out.push({
      start: m.index,
      end: m.index + m[0].length,
      href: `mailto:${m[0]}`,
      label: m[0],
      external: false,
    })
  }
  return out
}

function telHref(raw: string): string {
  const d = raw.replace(/\D/g, "")
  if (d.startsWith("971")) return `tel:+${d}`
  if (d.startsWith("0")) return `tel:+971${d.slice(1)}`
  return `tel:+${d}`
}

function collectPhoneMatches(text: string): Match[] {
  const out: Match[] = []
  // No \b before +971 — "+" is not a word character in JS regex.
  const intl = /(?:\+971|00971)(?:[\s-]?\d){8,12}\b/g
  const local = /\b0\d{1,2}[\s-]?\d{3}[\s-]?\d{4}\b/g
  for (const re of [intl, local]) {
    let m: RegExpExecArray | null
    re.lastIndex = 0
    while ((m = re.exec(text)) !== null) {
      out.push({
        start: m.index,
        end: m.index + m[0].length,
        href: telHref(m[0]),
        label: m[0],
        external: false,
      })
    }
  }
  return out
}

/** Prefer longer / earlier-declared ranges; drop overlaps. */
function mergeMatches(matches: Match[]): Match[] {
  const sorted = [...matches].sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start
    return b.end - b.start - (a.end - a.start)
  })
  const kept: Match[] = []
  for (const cur of sorted) {
    const overlaps = kept.some(
      (k) => !(cur.end <= k.start || cur.start >= k.end),
    )
    if (!overlaps) kept.push(cur)
  }
  kept.sort((a, b) => a.start - b.start)
  return kept
}

function buildNodes(text: string, matches: Match[], linkClassName: string) {
  const nodes: React.ReactNode[] = []
  let i = 0
  let key = 0
  for (const m of matches) {
    if (m.start > i) nodes.push(text.slice(i, m.start))
    nodes.push(
      <a
        key={`lnk-${key++}`}
        href={m.href}
        className={linkClassName}
        {...(m.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {m.label}
      </a>,
    )
    i = m.end
  }
  if (i < text.length) nodes.push(text.slice(i))
  return nodes
}

export function LinkifiedChatText({
  text,
  linkClassName,
}: {
  text: string
  linkClassName: string
}) {
  const nodes = React.useMemo(() => {
    const all = [
      ...collectUrlMatches(text),
      ...collectEmailMatches(text),
      ...collectPhoneMatches(text),
    ]
    return buildNodes(text, mergeMatches(all), linkClassName)
  }, [text, linkClassName])

  return <>{nodes}</>
}
