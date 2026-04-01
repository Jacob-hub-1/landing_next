import { MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              Contact Us
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Get Wholesale HVAC & Building Materials Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Contact Al Egaby Gen. Tr. (L.L.C) for competitive wholesale pricing on HVAC 
              equipment, AC spare parts, and building materials. We deliver across 
              Dubai, Sharjah, Abu Dhabi, Ajman, and all UAE Emirates.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Main Office — Sharjah</p>
                  <p className="mt-1 text-muted-foreground">
                    Al Qulayaa, Sharjah, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Landline</p>
                  <a href="tel:+97165220089" className="mt-1 text-muted-foreground hover:text-foreground transition-colors block">
                    06 522 0089
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Mobile</p>
                  <a href="tel:+971568880263" className="mt-1 text-muted-foreground hover:text-foreground transition-colors block">
                    0568880263
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:info@alegaby.com" className="mt-1 text-muted-foreground hover:text-foreground transition-colors block">
                    info@alegaby.com
                  </a>
                </div>
              </div>

              <div className="pt-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Working Hours</p>
                <p className="mt-1">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                <p>Sunday: Closed (orders accepted via email)</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-2 block w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-2 block w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
