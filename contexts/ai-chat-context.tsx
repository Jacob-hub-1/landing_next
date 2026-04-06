"use client"

import * as React from "react"

type AiChatContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  toggle: () => void
}

const AiChatContext = React.createContext<AiChatContextValue | null>(null)

export function AiChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  const value = React.useMemo<AiChatContextValue>(
    () => ({
      open,
      setOpen,
      toggle: () => setOpen((o) => !o),
    }),
    [open],
  )

  return <AiChatContext.Provider value={value}>{children}</AiChatContext.Provider>
}

export function useAiChat() {
  const ctx = React.useContext(AiChatContext)
  if (!ctx) {
    throw new Error("useAiChat must be used within AiChatProvider")
  }
  return ctx
}
