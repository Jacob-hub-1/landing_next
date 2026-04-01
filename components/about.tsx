const stats = [
  { value: "15+", label: "Years in HVAC & Building Materials" },
  { value: "500+", label: "Clients Served Across UAE" },
  { value: "100K+", label: "Deliveries Completed" },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              About Al Egaby Gen. Tr. (L.L.C)
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Trusted HVAC & Building Materials Supplier in the UAE
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded in Sharjah, Al Egaby Gen. Tr. (L.L.C) (Alegaby) has been a trusted 
              supplier of HVAC equipment and building materials for over 15 years. 
              From our main warehouse in Al Qulayaa, Sharjah, we serve contractors, 
              architects, MEP companies, and developers with wholesale pricing and 
              immediate stock availability.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We are authorized distributors for over 40 brands including Honeywell, 
              Daikin, Copeland, Danfoss, Jotun, Makita, Schneider Electric, and many more. 
              Our commitment to quality, competitive pricing, and same-day delivery has 
              made us a preferred partner for construction projects of all scales — from 
              residential villas to commercial towers across Dubai, Sharjah, Abu Dhabi, 
              and the wider Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-black px-8 py-10 sm:px-12 sm:py-14">
          <p className="text-lg sm:text-xl lg:text-2xl italic text-white/90 leading-relaxed max-w-4xl mx-auto text-center">
            &ldquo;Our clientele includes UAE government entities, Fortune 500 contractors, and
            some of the region&rsquo;s top 50 enterprises. When organisations of this calibre
            depend on us for mission-critical HVAC equipment and building materials, it is a
            testament to the uncompromising quality, reliability, and trust we deliver with
            every order. Your projects deserve the same standard.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
