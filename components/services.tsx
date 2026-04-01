import { Wind, Thermometer, Building2 } from "lucide-react"

const services = [
  {
    icon: Wind,
    title: "HVAC Equipment Supply",
    description:
      "Complete HVAC solutions including compressors, refrigerants, thermostats, valves, copper fittings, and insulation materials for commercial and residential projects across the UAE.",
  },
  {
    icon: Thermometer,
    title: "Air Conditioning Parts",
    description:
      "Original AC spare parts from Daikin, Copeland, Honeywell, and Danfoss compressors, motors, controls, and accessories for installation and maintenance in Dubai and Sharjah.",
  },
  {
    icon: Building2,
    title: "Building Materials Trading",
    description:
      "Wholesale construction materials including tools, paint, electrical products, plumbing, cables, fasteners, and safety equipment from Makita, Jotun, Schneider, and more.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Comprehensive HVAC & Building Materials Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From HVAC spare parts to construction hardware, we supply contractors, MEP companies, and developers across the UAE with wholesale pricing and fast delivery.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-secondary">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
