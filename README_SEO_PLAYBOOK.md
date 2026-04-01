# Technical SEO + Brand Authority Playbook (Next.js App Router)

This file documents a reusable, production-grade implementation pattern you can apply to any future website to get strong technical SEO foundations, high crawl coverage, and local brand authority signals.

Use this as:

- An internal SOP (standard operating procedure)
- A handoff guide for other engineers
- A copy-paste prompt source for Cursor/AI

---

## 1) Goal and Outcome

The objective is to transform a typical business website into a search-optimized, entity-rich web property that signals:

- Strong **topical authority** (HVAC, building materials, etc.)
- Strong **local authority** (city/location pages + geo schema)
- Strong **technical quality** (metadata, structured data, sitemap, robots, image optimization)

Core outcomes implemented:

1. App Router pages are server-rendered by default (minimal client JS where possible)
2. Rich metadata at root + page level
3. Reusable JSON-LD schema system
4. Dynamic SEO pages (`/brands/[slug]`, `/categories/[slug]`)
5. Programmatic sitemap + robots
6. Location landing pages optimized for "near me" intent
7. Better accessibility/alt text and reduced CLS risk

---

## 2) Platform and Deployment Assumptions

This playbook assumes:

- **Framework**: Next.js App Router
- **Deployment**: **Vercel**
- **Primary domain**: `https://www.alegaby.com` (replace for new projects)

Important:

- If your `next.config.js` contains `output: 'export'`, dynamic SEO capabilities are restricted.
- For Vercel, remove `output: 'export'` to unlock full SSR, metadata, and runtime flexibility.

---

## 3) File Architecture to Reuse

Use this structure (adapt names as needed):

- `components/seo/JsonLd.tsx`
- `lib/schema.ts`
- `lib/data/brands.ts`
- `lib/data/categories.ts`
- `app/brands/page.tsx`
- `app/brands/[slug]/page.tsx`
- `app/categories/page.tsx`
- `app/categories/[slug]/page.tsx`
- `app/locations/page.tsx`
- `app/locations/sharjah-hvac-supply/page.tsx`
- `app/locations/dubai-hvac-supply/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx` (metadata + root schema injection)

---

## 4) Step-by-Step Implementation SOP

## Step 1: `next.config.js` (technical baseline)

### Do this:

- Remove static export mode for Vercel workflows:
  - Remove `output: 'export'`
- Ensure image optimization is enabled:
  - Remove `images.unoptimized: true`
  - Add:
  - `images: { formats: ['image/avif', 'image/webp'] }`
- Remove deprecated experimental font loader blocks

### Why:

- AVIF/WebP improves payload and Core Web Vitals
- Dynamic routes + metadata + sitemap behavior is cleaner on Vercel SSR

---

## Step 2: Reusable JSON-LD component

Create `components/seo/JsonLd.tsx` as a server-safe wrapper:

- Accepts object or array
- Outputs `<script type="application/ld+json">`
- Stringifies schema data once

### Why:

- Avoid repeating `dangerouslySetInnerHTML` logic
- Keep schema injection composable and consistent

---

## Step 3: Central schema library

Create `lib/schema.ts` with:

1. `organizationSchema` (`LocalBusiness` + `HVACBusiness` additionalType)
2. `buildProductSchema(...)`
3. `buildBreadcrumbSchema(...)`
4. `buildLocationSchema(...)`

Include in organization schema:

- Business name, URL, description
- Phone/email
- `areaServed`
- `openingHoursSpecification`
- Main address + geo
- Additional branch locations + geo
- `hasOfferCatalog` listing major product groups

### Why:

- Centralized schema generation prevents inconsistency
- Allows scaling page schema with low maintenance

---

## Step 4: Root metadata and schema injection

Update `app/layout.tsx`:

- Set `metadataBase` to production domain
- Use title template strategy:
  - default + `%s | Brand`
- Add canonical base in `alternates`
- Add `openGraph`, `twitter`, `robots`
- Add keyword set for core commercial intent
- Inject root LocalBusiness schema via `<JsonLd data={organizationSchema} />`
- If using fixed navbar, reserve top spacing (`pt-*`) to reduce CLS

### Why:

- Root metadata is inherited and gives consistent SERP quality
- Entity schema at root improves brand understanding by search engines

---

## Step 5: Build data-driven SEO entities

Create data modules:

- `lib/data/brands.ts`
- `lib/data/categories.ts`

Each entry should contain:

- `slug`
- `name`
- `description`
- `longDescription`
- `products`
- `brands` (for categories)
- optional `image/logo`
- optional business division tags

### Why:

- Data-driven pages scale fast
- Enables automatic sitemap + static params + schema generation

---

## Step 6: Dynamic Brands SEO routes

Implement:

- `app/brands/page.tsx` (index)
- `app/brands/[slug]/page.tsx` (detail)

In `[slug]/page.tsx`:

- `generateStaticParams()` from brand data
- `generateMetadata()` using high-intent templates
- Inject:
  - breadcrumb schema
  - product schemas (one per relevant product)

Recommended metadata pattern:

- Title: `[Brand] HVAC Spare Parts UAE | Original [Brand] Compressors Sharjah`
- Description: commercial + location + availability + trust signal

---

## Step 7: Dynamic Categories SEO routes

Implement:

- `app/categories/page.tsx`
- `app/categories/[slug]/page.tsx`

In `[slug]/page.tsx`:

- `generateStaticParams()` from category data
- `generateMetadata()` with category + "wholesale + city" terms
- Inject:
  - breadcrumb schema
  - product schema list

Recommended title pattern:

- `[Category] Wholesale Dubai | HVAC Spare Parts UAE`

---

## Step 8: Programmatic sitemap and robots

### `app/sitemap.ts`

Generate URLs for:

- static core routes
- all brand pages
- all category pages
- all location pages

Include per URL:

- `lastModified`
- `changeFrequency`
- `priority`

### `app/robots.ts`

- Allow all crawlers unless needed otherwise
- Disallow utility/internal paths (e.g. `/test/`)
- Declare sitemap URL

---

## Step 9: Location landing pages for local intent

Create:

- `/locations`
- `/locations/<city-or-area-landing>`

For each location page:

- Commercial local intent H1/H2 copy
- City + district keywords
- Contact cards (address, phone, hours)
- "areas we serve" chips/list
- strong CTA (call, WhatsApp, quote)
- location-specific LocalBusiness schema

Examples of local modifiers:

- "Near me"
- "Industrial Area 4"
- "Al Qusais"
- "Deira"
- "Al Qulayaa"

---

## Step 10: Accessibility + performance hygiene

1. Replace weak alt text (`"image"`, `"service"`, etc.) with descriptive commercial alt text
2. Ensure fixed header does not cause top jump/CLS
3. Keep client components only where interaction is necessary
4. Use `next/font` for stable font loading

---

## 5) Reusable Metadata Templates

Use these templates on future projects:

### Brand page title

`[Brand Name] HVAC Spare Parts UAE | Original [Brand Name] Compressors Sharjah`

### Brand page description

`Original [Brand Name] compressors, controls, and spare parts in Sharjah and Dubai. Wholesale pricing, in-stock inventory, and same-day dispatch from [Business Name].`

### Category page title

`[Category] Wholesale Dubai | HVAC Spare Parts UAE`

### Category page description

`Buy [Category] at wholesale prices in Dubai and Sharjah. Top brands, reliable stock, and contractor pricing from [Business Name].`

### Location page title

`HVAC Spare Parts Supplier in [City] | [District] - [Business Name]`

### Location page description

`[Business Name] supplies compressors, refrigerant gas, and HVAC spare parts in [City], near [District]. Fast delivery and trade pricing.`

---

## 6) Schema Checklist (Copy/Paste)

For each site, ensure the following schema blocks exist:

- [ ] LocalBusiness at root
- [ ] HVACBusiness typing (or relevant `additionalType`)
- [ ] Full contact details (phone/email/address)
- [ ] GeoCoordinates for each branch
- [ ] Opening hours
- [ ] OfferCatalog for top categories
- [ ] BreadcrumbList on major index/detail pages
- [ ] Product schema on brand/category detail pages
- [ ] Location-specific LocalBusiness schema on location landing pages

---

## 7) Internal Link Graph Blueprint

Design internal links intentionally:

1. Home links to:
   - brands index
   - categories index
   - location index
2. Brand page links to:
   - contact
   - relevant categories
3. Category page links to:
   - contact
   - relevant brands
4. Location pages link to:
   - contact
   - top product categories

This creates crawl paths and topical reinforcement.

---

## 8) Content Pattern for Commercial SEO Pages

Every money page should include:

1. Search-intent aligned hero (keyword + trust angle)
2. Commercial proof points (stock, brands, delivery, pricing)
3. Product/service list blocks
4. Local relevance section (if city page)
5. Strong conversion CTAs (call/quote/WhatsApp)

---

## 9) Quality Gate (Pre-Launch)

Before go-live:

- [ ] `next build` passes without errors
- [ ] `/sitemap.xml` exists and includes dynamic URLs
- [ ] `/robots.txt` exists and points to sitemap
- [ ] canonical tags resolve to production domain
- [ ] all dynamic route metadata resolves correctly
- [ ] JSON-LD validates in Rich Results Test
- [ ] no major alt text accessibility gaps
- [ ] no CLS jump from header/navbar

---

## 10) Post-Launch SEO Operations

After deployment:

1. Submit sitemap in Google Search Console
2. Inspect/index:
   - key brand pages
   - key category pages
   - location pages
3. Track:
   - branded + non-branded impressions
   - city-modified queries
   - CTR on title/description templates
4. Expand monthly:
   - new brand pages
   - new category pages
   - new location pages

---

## 11) Cursor Prompt You Can Reuse on Future Projects

Copy this prompt into Cursor (adapt industry/location):

```md
Role: You are a Senior Full Stack Engineer and SEO Specialist.
Objective: Implement high-performance technical SEO in this Next.js App Router project to improve rankings and local brand authority.

Requirements:
1) Keep Server Components by default; only use client components when needed.
2) Update next.config.js for Vercel SEO performance:
   - remove output: 'export'
   - enable AVIF/WebP image formats
3) Implement reusable JSON-LD system:
   - components/seo/JsonLd.tsx
   - lib/schema.ts with LocalBusiness + industry-specific type
4) Inject LocalBusiness schema in app/layout.tsx and improve root metadata (OG, Twitter, canonical, keywords, robots).
5) Implement dynamic routes:
   - /brands/[slug]
   - /categories/[slug]
   with generateStaticParams + generateMetadata and Product schema injection.
6) Add /locations pages with city-specific local intent and location schema.
7) Implement app/sitemap.ts and app/robots.ts for full crawl coverage.
8) Improve all next/image alt text with descriptive keyword-rich wording.
9) Fix obvious CLS risks in fixed header/nav patterns.
10) Run build and ensure all routes compile.

Output:
- Apply actual code changes.
- Provide final summary by file path and validation result.
```

---

## 12) Notes for Adapting to Another Industry

If this is not HVAC:

- Change `additionalType` to suitable Schema.org class
- Replace product/catalog taxonomy
- Replace local keyword universe (districts, industrial zones, landmarks)
- Keep architecture unchanged (it is industry-agnostic)

---

## 13) What Was Implemented in This Website (Reference Snapshot)

Implemented in this codebase:

- Config optimization in `next.config.js`
- Reusable JSON-LD component in `components/seo/JsonLd.tsx`
- Schema and builders in `lib/schema.ts`
- Root metadata + schema injection in `app/layout.tsx`
- Data-driven entities in:
  - `lib/data/brands.ts`
  - `lib/data/categories.ts`
- Dynamic SEO routes:
  - `app/brands/page.tsx`
  - `app/brands/[slug]/page.tsx`
  - `app/categories/page.tsx`
  - `app/categories/[slug]/page.tsx`
- Crawl files:
  - `app/sitemap.ts`
  - `app/robots.ts`
- Local landing pages:
  - `app/locations/page.tsx`
  - `app/locations/sharjah-hvac-supply/page.tsx`
  - `app/locations/dubai-hvac-supply/page.tsx`
- Metadata + accessibility/data updates in:
  - `app/hvac/page.tsx`
  - `app/building-materials/page.tsx`
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
  - `components/footer.tsx`
  - `components/navbar.tsx`

Build verification completed successfully after implementation.

---

If you want, I can also generate a second file: `PROMPT_TEMPLATES.md` with multiple specialized prompts (one for local SEO, one for ecommerce SEO, one for B2B lead-gen SEO) so your future setup is even faster.
