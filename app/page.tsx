import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Brands } from "@/components/brands"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { JsonLd } from "@/components/seo/JsonLd"
import { buildFAQSchema } from "@/lib/schema"
import { faqData } from "@/lib/data/faq"

export const metadata: Metadata = {
  title: "Al Egaby Gen. Tr. (L.L.C) | HVAC Suppliers & Building Materials UAE",
  description:
    "Wholesale HVAC spare parts, compressors, refrigerants, and building materials supplier in UAE with fast delivery across the Emirates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Al Egaby Gen. Tr. (L.L.C) | HVAC Suppliers & Building Materials UAE",
    description:
      "Wholesale HVAC spare parts, compressors, refrigerants, and building materials supplier in UAE with fast delivery across the Emirates.",
    url: "/",
    images: [{ url: "/hero-image.avif", alt: "Alegaby HVAC and building materials supplier in UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Egaby Gen. Tr. (L.L.C) | HVAC Suppliers & Building Materials UAE",
    description:
      "Wholesale HVAC spare parts, compressors, refrigerants, and building materials supplier in UAE with fast delivery across the Emirates.",
    images: ["/hero-image.avif"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={buildFAQSchema(faqData)} />
      <Hero />
      <Brands />
      <Services />
      <About />
      <Contact />
      <FAQ />
    </main>
  )
}
