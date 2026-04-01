import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Alegaby
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              Al Egaby Gen. Tr. (L.L.C) — HVAC equipment and building materials supplier in UAE since 2009.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Company</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Products</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/brands" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Brands
              </Link>
              <Link href="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link href="/locations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Locations
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <div className="mt-3 flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Al Qulayaa, Sharjah, UAE</p>
              <a href="tel:+97165220089" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                06 522 0089
              </a>
              <a href="tel:+971568880263" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                0568880263
              </a>
              <a href="mailto:info@alegaby.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                info@alegaby.com
              </a>
              <p className="text-xs text-muted-foreground">Mon–Sat 8AM–6PM | Sun: Email only</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Al Egaby Gen. Tr. (L.L.C) (Alegaby). All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            HVAC Suppliers UAE | Building Materials Dubai & Sharjah
          </p>
        </div>
      </div>
    </footer>
  )
}
