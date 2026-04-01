"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "971568880263"
const STARTER_TEXT = "Hi Alegaby, I'm interested in your HVAC equipment and building materials. Can you help me with pricing and availability?"

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(STARTER_TEXT)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
