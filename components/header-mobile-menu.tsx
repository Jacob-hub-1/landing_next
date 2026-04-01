"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

type HeaderMobileMenuProps = {
  navLinks: Array<{ href: string; label: string }>
}

export function HeaderMobileMenu({ navLinks }: HeaderMobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", onResize)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="p-2 text-foreground"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav-menu"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-border bg-background p-4 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
