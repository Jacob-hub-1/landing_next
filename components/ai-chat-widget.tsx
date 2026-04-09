"use client"

import * as React from "react"
import { Bot, Loader2, Send } from "lucide-react"
import { useAiChat } from "@/contexts/ai-chat-context"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { cleanChatResponse } from "@/lib/clean-chat-response"
import { LinkifiedChatText } from "@/components/linkified-chat-text"
import { gtagEvent } from "@/lib/gtag"

type ChatRole = "user" | "assistant"

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
}

export function AiChatWidget() {
  const { open, setOpen } = useAiChat()
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const [input, setInput] = React.useState("")
  const [pending, setPending] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const wasOpenRef = React.useRef(false)
  React.useEffect(() => {
    if (open && !wasOpenRef.current) {
      gtagEvent("ai_chat_open", { placement: "floating_launcher" })
    }
    wasOpenRef.current = open
  }, [open])

  React.useEffect(() => {
    if (!open) return
    const t = requestAnimationFrame(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    })
    return () => cancelAnimationFrame(t)
  }, [messages, open, pending])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || pending) return

    setError(null)
    gtagEvent("ai_chat_message_sent", {
      message_length: trimmed.length,
    })
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    }
    setMessages((m) => [...m, userMsg])
    setInput("")
    setPending(true)

    try {
      const apiMessages = [...messages, userMsg].map(({ role, content }) => ({
        role,
        content,
      }))

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      })

      const data = (await res.json()) as { reply?: string; error?: string }

      if (!res.ok) {
        throw new Error(data.error || "Unable to reach the assistant.")
      }

      if (!data.reply) {
        throw new Error("No reply from assistant.")
      }

      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: cleanChatResponse(data.reply!),
        },
      ])
    } catch (err) {
      gtagEvent("ai_chat_error", {
        error_type: err instanceof Error ? err.name : "unknown",
      })
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setPending(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="AI Quick Help"
        title="AI Quick Help"
        className={cn(
          "fixed z-55 flex h-9 max-w-[calc(100vw-1.5rem-env(safe-area-inset-right,0px))] items-center gap-1.5 rounded-full bg-primary py-0 pl-2 pr-2.5 text-primary-foreground shadow-md transition-[transform,box-shadow] hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:gap-2 sm:pl-2.5 sm:pr-3",
          "bottom-24 right-4 sm:bottom-28 sm:right-5 md:bottom-32 md:right-6",
        )}
      >
        <Bot className="size-[18px] shrink-0 sm:size-5" aria-hidden />
        <span className="truncate text-[11px] font-semibold leading-none tracking-tight sm:text-xs">
          <span className="sm:hidden">AI help</span>
          <span className="hidden sm:inline">AI Quick Help</span>
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex h-[min(520px,92dvh)] max-h-[92dvh] w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] flex-col gap-0 border p-0 sm:h-[min(560px,85vh)] sm:max-h-[85vh] sm:max-w-md sm:w-full"
          showCloseButton
        >
          <DialogHeader className="border-b border-border px-3 py-3 text-left sm:px-5 sm:py-4">
            <DialogTitle className="text-sm sm:text-base">Alegaby assistant</DialogTitle>
            <DialogDescription className="text-[11px] leading-snug sm:text-xs sm:leading-relaxed">
              <span className="line-clamp-2 sm:line-clamp-none">
                HVAC & building materials: products, brands, locations, and contact options.
                For pricing and stock, use the site contact details.
              </span>
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="min-h-0 flex-1 px-3 py-2 sm:px-4 sm:py-3">
            <div className="flex flex-col gap-2 pr-2 sm:gap-3 sm:pr-3">
              {messages.length === 0 && (
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  How can we help with our products or services today?
                </p>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "max-w-[92%] rounded-lg px-2.5 py-1.5 text-xs leading-relaxed sm:max-w-[90%] sm:px-3 sm:py-2 sm:text-sm",
                    m.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "mr-auto whitespace-pre-line border border-border bg-muted/40 text-foreground",
                  )}
                >
                  <LinkifiedChatText
                    text={m.content}
                    linkClassName={
                      m.role === "user"
                        ? "font-medium text-primary-foreground underline decoration-primary-foreground/70 underline-offset-2 hover:decoration-primary-foreground"
                        : "font-medium text-primary underline underline-offset-2 hover:text-primary/90"
                    }
                  />
                </div>
              ))}
              {pending && (
                <div className="mr-auto flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground sm:gap-2 sm:px-3 sm:py-2 sm:text-sm">
                  <Loader2 className="size-3.5 shrink-0 animate-spin sm:size-4" aria-hidden />
                  Checking with Alegaby assistant…
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {error && (
            <p className="px-3 text-xs text-destructive sm:px-5 sm:text-sm" role="alert">
              {error}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex gap-1.5 border-t border-border p-3 sm:gap-2 sm:p-4"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              disabled={pending}
              className="h-9 flex-1 text-sm sm:h-10"
              autoComplete="off"
              maxLength={2000}
              aria-label="Message for assistant"
            />
            <Button type="submit" size="icon" disabled={pending || !input.trim()}>
              <Send className="h-4 w-4" aria-hidden />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
