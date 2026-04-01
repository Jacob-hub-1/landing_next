"use client"

import { useState } from "react"

const WEB3FORMS_ACCESS_KEY = "908dfe81-6cb1-4179-91e6-b0950915eb79"

export function ContactForm() {
  const [result, setResult] = useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending...")

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data: { success?: boolean; message?: string } = await response.json()

    if (data.success) {
      setResult("Success! Your message has been sent.")
      form.reset()
      return
    }

    setResult(data.message || "Error sending message.")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-2 block w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-2 block w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 block w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 block w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell us about your HVAC or building materials requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Send Message
      </button>

      {result && <p className="text-sm text-muted-foreground">{result}</p>}
    </form>
  )
}
