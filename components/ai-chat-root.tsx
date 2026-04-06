"use client"

import { AiChatProvider } from "@/contexts/ai-chat-context"
import { AiChatWidget } from "@/components/ai-chat-widget"

export function AiChatRoot({ children }: { children: React.ReactNode }) {
  return (
    <AiChatProvider>
      {children}
      <AiChatWidget />
    </AiChatProvider>
  )
}
