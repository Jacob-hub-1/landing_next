import { MapPin, Phone, Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

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
                  <a href="tel:+97165220089" className="mt-1 text-blue-600 underline hover:text-blue-700 transition-colors block">
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
                  <a href="tel:+971568880263" className="mt-1 text-blue-600 underline hover:text-blue-700 transition-colors block">
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
                  <a href="mailto:info@alegaby.com" className="mt-1 text-blue-600 underline hover:text-blue-700 transition-colors block">
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
