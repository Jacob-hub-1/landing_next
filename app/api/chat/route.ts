import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { NextResponse } from "next/server"
import { z } from "zod"
import { buildFullSystemPrompt } from "@/lib/ai-chat-system-prompt"
import { OPENROUTER_FALLBACK_MODEL_IDS } from "@/lib/openrouter-fallback-models"

const KNOWLEDGE_FILENAME = "SITE_KNOWLEDGE_FOR_LLM.md"

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(8000),
      }),
    )
    .min(1)
    .max(24),
})

let cachedKnowledge: string | null = null

async function loadKnowledge(): Promise<string> {
  if (cachedKnowledge !== null) return cachedKnowledge
  const path = join(process.cwd(), KNOWLEDGE_FILENAME)
  try {
    cachedKnowledge = await readFile(path, "utf-8")
  } catch {
    cachedKnowledge = ""
  }
  return cachedKnowledge
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Assistant is not configured yet. Add OPENROUTER_API_KEY to the server environment.",
      },
      { status: 503 },
    )
  }

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const knowledge = await loadKnowledge()
  if (!knowledge.trim()) {
    return NextResponse.json(
      { error: "Knowledge file is missing or empty. Run the site knowledge generator." },
      { status: 500 },
    )
  }

  const systemPrompt = buildFullSystemPrompt(knowledge)
  const primaryModel =
    process.env.OPENROUTER_MODEL?.trim() || "openai/gpt-4o-mini"
  const models = [primaryModel, ...OPENROUTER_FALLBACK_MODEL_IDS]

  const openRouterMessages = [
    { role: "system" as const, content: systemPrompt },
    ...parsed.data.messages.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ]

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://www.alegaby.com",
        "X-Title": "Alegaby Website Assistant",
      },
      body: JSON.stringify({
        models,
        messages: openRouterMessages,
        temperature: 0.3,
        max_tokens: 1024,
      }),
    })

    const data = (await res.json()) as {
      error?: { message?: string }
      choices?: { message?: { content?: string } }[]
    }

    if (!res.ok) {
      const msg = data.error?.message || "OpenRouter request failed."
      return NextResponse.json({ error: msg }, { status: 502 })
    }

    const reply = data.choices?.[0]?.message?.content?.trim()
    if (!reply) {
      return NextResponse.json({ error: "Empty model response." }, { status: 502 })
    }

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({ error: "Network error calling assistant." }, { status: 502 })
  }
}
