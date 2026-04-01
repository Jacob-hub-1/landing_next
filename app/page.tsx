import { Hero } from "@/components/hero"
import { Brands } from "@/components/brands"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Brands />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
