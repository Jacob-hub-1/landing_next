"use client"

import { MessageCircle } from "lucide-react"
import { gtagEvent } from "@/lib/gtag"

const WHATSAPP_NUMBER = "971568880263"
const STARTER_TEXT = "Hi Alegaby, I'm interested in your HVAC equipment and building materials. Can you help me with pricing and availability?"

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(STARTER_TEXT)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        gtagEvent("whatsapp_click", {
          link_url: "wa.me",
          placement: "floating_button",
        })
      }
      aria-label="Chat with us on Whatsapp"
      title="Chat with us on Whatsapp"
      className="fixed bottom-4 right-4 z-50 flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-[transform,box-shadow] hover:bg-[#20bd5a] hover:shadow-xl active:scale-[0.97] sm:bottom-6 sm:right-6 sm:size-17 md:size-18"
    >
      <MessageCircle
        className="size-8 stroke-[1.75] sm:size-9 md:size-10"
        aria-hidden
      />
    </a>
  )
}
