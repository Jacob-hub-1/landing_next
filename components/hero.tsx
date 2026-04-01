import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.avif"
          alt="HVAC equipment and building materials warehouse in UAE - Al Egaby Gen. Tr. (L.L.C) wholesale supplier"
          fill
          priority
          className="object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground text-balance leading-tight">
            HVAC Equipment & Building Materials Supplier in UAE
          </h1>
          
          <p className="mt-6 text-lg lg:text-xl text-black max-w-2xl text-pretty leading-relaxed">
            Wholesale HVAC spare parts, compressors, refrigerants, and construction materials 
            for contractors and developers across Dubai, Sharjah, and the Emirates.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black border border-black rounded-md hover:bg-black/85 transition-colors"
            >
              About Alegaby
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
