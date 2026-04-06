/**
 * Regenerates SITE_KNOWLEDGE_FOR_LLM.md from lib data and static page copy.
 * Run from repo root: npx tsx scripts/generate-site-knowledge.ts
 */
import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { faqData } from "../lib/data/faq"
import { allCategories } from "../lib/data/categories"
import { allBrands } from "../lib/data/brands"

const SITE = "https://www.alegaby.com"

const STATIC_PAGES = `
## Site map (public URLs)

- Home: ${SITE}/
- Categories index: ${SITE}/categories
- Brands index: ${SITE}/brands
- Locations index: ${SITE}/locations
- Dubai delivery: ${SITE}/locations/dubai-hvac-supply
- Sharjah warehouse: ${SITE}/locations/sharjah-hvac-supply
- Individual category: ${SITE}/categories/{slug}
- Individual brand: ${SITE}/brands/{slug}

## Home page (hero)

- Title focus: HVAC Equipment & Building Materials Supplier in UAE
- Summary: Wholesale HVAC spare parts, compressors, refrigerants, and construction materials for contractors and developers across Dubai, Sharjah, and the Emirates.
- Primary actions: Explore products (anchor #products), About Alegaby (anchor #about)

## About section (homepage)

- Al Egaby Gen. Tr. (L.L.C) (Alegaby): trusted supplier of HVAC equipment and building materials for over 15 years; main warehouse Al Qulayaa, Sharjah.
- Serves contractors, architects, MEP companies, developers; wholesale pricing and stock availability.
- Authorized distributors for over 40 brands (examples named on site: Honeywell, Daikin, Copeland, Danfoss, Jotun, Makita, Schneider Electric, and more).
- Stats shown: 15+ years, 500+ clients, 100K+ deliveries.
- Testimonial theme: clientele includes UAE government entities, Fortune 500 contractors, regional enterprises; emphasis on quality and reliability.

## Services section (homepage)

1. HVAC Equipment Supply — compressors, refrigerants, thermostats, valves, copper fittings, insulation for commercial and residential projects across UAE.
2. Air Conditioning Parts — original spare parts from brands such as Daikin, Copeland, Honeywell, Danfoss; compressors, motors, controls, accessories; Dubai and Sharjah.
3. Building Materials Trading — tools, paint, electrical, plumbing, cables, fasteners, safety; brands such as Makita, Jotun, Schneider, and more.

## Contact section (homepage)

- Purpose: wholesale HVAC & building materials pricing; delivery across Dubai, Sharjah, Abu Dhabi, Ajman, and all UAE Emirates.
- Address: Main office — Al Qulayaa, Sharjah, United Arab Emirates
- Landline: +971 6 522 0089 (display 06 522 0089)
- Mobile / WhatsApp: +971 56 888 0263 (display 0568880263)
- Email: info@alegaby.com
- Hours: Monday–Saturday 8:00–18:00; Sunday closed (orders accepted via email)

## Footer

- Company: Al Egaby Gen. Tr. (L.L.C) — HVAC and building materials supplier in UAE since 2009.
- Tagline: HVAC Suppliers UAE | Building Materials Dubai & Sharjah

## Categories listing page

- HVAC Equipment: air conditioning and refrigeration components for installation, maintenance, repair.
- Building Materials: construction tools, hardware, paint, electrical, plumbing, safety.

## Brands listing page

- Authorized supplier / distributor for over 40 HVAC and building materials brands; wholesale, in-stock, fast delivery across Dubai, Sharjah, Abu Dhabi, and all Emirates.

## Locations hub

- Main warehouse Al Qulayaa, Sharjah; serves UAE-wide. Walk-in and delivery.
- Delivery areas listed: Dubai, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, Al Ain.
- Sharjah areas highlighted: Al Qulayaa, Industrial Area, Al Nahda, Al Khan, Muwaileh, Al Majaz.
- Same-day and scheduled delivery referenced for contractors and project buyers.

## Dubai location page

- Delivery across Dubai from Sharjah warehouse; same-day delivery for urgent needs; bulk scheduled delivery.
- Example Dubai areas served: Deira, Al Quoz, Jebel Ali, Dubai Industrial City, Al Qusais, Ras Al Khor, Al Karama, Bur Dubai, Jumeirah, Business Bay, Dubai Marina, Silicon Oasis, Dubai South, Dragon Mart.
- Product examples: compressors, refrigerants, thermostats, copper fittings, insulation, tools, paint, electrical, hardware; brands mentioned include Daikin, Copeland, Honeywell, Makita, Jotun.

## Sharjah location page

- Main warehouse and showroom Al Qulayaa; walk-in and delivery across Sharjah and UAE.
- Example Sharjah areas: Al Qulayaa, Industrial Area 1–12, Al Nahda, Al Khan, Al Majaz, Muwaileh, Al Taawun, Bu Tina, Al Ghuwair, Rolla, Al Yarmook, Sharjah Airport Free Zone.
- Geo reference (structured data): latitude 25.3573, longitude 55.3887 (approximate business location).

## Organisation (structured / schema summary)

- Business name: Al Egaby Gen. Tr. (L.L.C); brand name Alegaby
- Type: HVAC / wholesale / building materials trading
- Payment: Cash, Credit Card, Bank Transfer; currencies AED
- Price range indicator: $$
`

function formatCategories(): string {
  return allCategories
    .map((c) => {
      const url = `${SITE}/categories/${c.slug}`
      const brandLine =
        c.brands.length > 0 ? c.brands.join(", ") : "(see description)"
      return `### ${c.name}
- URL: ${url}
- Division: ${c.division === "hvac" ? "HVAC" : "Building materials"}
- Short description: ${c.description}
- Detail: ${c.longDescription}
- Example product lines: ${c.products.join(", ")}
- Brands associated (where listed on site): ${brandLine}
`
    })
    .join("\n")
}

function formatBrands(): string {
  return allBrands
    .map((b) => {
      const url = `${SITE}/brands/${b.slug}`
      return `### ${b.name}
- URL: ${url}
- Division: ${b.division === "hvac" ? "HVAC" : "Building materials"}
- Short description: ${b.description}
- Detail: ${b.longDescription}
- Product focus: ${b.products.join(", ")}
`
    })
    .join("\n")
}

function formatFaq(): string {
  return faqData
    .map((f) => `**Q:** ${f.question}\n\n**A:** ${f.answer}`)
    .join("\n\n---\n\n")
}

const header = `# Alegaby — consolidated website knowledge for the LLM

This file is generated by \`scripts/generate-site-knowledge.ts\`. Do not edit by hand; run the script after changing site copy or data modules.

_Last generated: ${new Date().toISOString()}_

`

const out =
  header +
  STATIC_PAGES.trim() +
  "\n\n## Frequently asked questions (homepage)\n\n" +
  formatFaq() +
  "\n\n## Product categories (all)\n\n" +
  formatCategories() +
  "\n\n## Brands (all)\n\n" +
  formatBrands() +
  "\n"

const outPath = join(process.cwd(), "SITE_KNOWLEDGE_FOR_LLM.md")
writeFileSync(outPath, out, "utf-8")
console.log("Wrote", outPath)
