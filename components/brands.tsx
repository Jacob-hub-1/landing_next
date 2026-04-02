import type { CSSProperties } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type BrandEntry = {
  name: string
  logo: string
  alt: string
}

function chunkIntoRows<T>(items: T[], rowCount: number): T[][] {
  if (items.length === 0) return Array.from({ length: rowCount }, () => [])
  const base = Math.floor(items.length / rowCount)
  const remainder = items.length % rowCount
  const rows: T[][] = []
  let start = 0
  for (let i = 0; i < rowCount; i++) {
    const size = base + (i < remainder ? 1 : 0)
    rows.push(items.slice(start, start + size))
    start += size
  }
  return rows
}

function BrandMarqueeRow({ brands, durationSec }: { brands: BrandEntry[]; durationSec: number }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex w-max gap-4"
        style={
          {
            animation: `scroll-left ${durationSec}s linear infinite`,
          } as CSSProperties
        }
      >
        {brands.map((brand, index) => (
          <div
            key={`marquee-a-${brand.name}-${index}`}
            className="flex h-24 w-29 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 shadow-sm"
          >
            <Image
              src={brand.logo}
              alt={brand.alt}
              width={120}
              height={120}
              className="max-h-full max-w-full object-contain opacity-90"
            />
          </div>
        ))}
        <div className="flex shrink-0 gap-4" aria-hidden>
          {brands.map((brand, index) => (
            <div
              key={`marquee-b-${brand.name}-${index}`}
              className="flex h-24 w-29 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 shadow-sm"
            >
              <Image src={brand.logo} alt="" width={120} height={120} className="max-h-full max-w-full object-contain opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Brands() {
  const hvacBrands = [
    { name: "HONEYWELL", logo: "/Honeywell-hvac-building-materials.avif", alt: "Honeywell HVAC thermostats and controls supplier UAE" },
    { name: "RESIDEO", logo: "/resideo-hvac-alegaby.avif", alt: "Resideo HVAC comfort controls and smart home products UAE" },
    { name: "REFRON", logo: "/refron-hvac-building-materials.avif", alt: "Refron refrigerant gas R410A R134a wholesale supplier UAE" },
    { name: "EMERSON", logo: "/Emerson-hvac-building-materials.avif", alt: "Emerson climate technologies HVAC compressors and controls UAE" },
    { name: "COPELAND", logo: "/copeland-hvac-building-materials.avif", alt: "Copeland AC compressor supplier UAE scroll reciprocating" },
    { name: "MUELLER", logo: "/mueller-hvac-building-materials.avif", alt: "Mueller copper tubes and fittings for HVAC installation UAE" },
    { name: "JOHNSON CONTROLS", logo: "/johnson-controls-hvac-building-materials.avif", alt: "Johnson Controls HVAC building automation and York AC systems UAE" },
    { name: "DAIKIN", logo: "/DAIKIN-hvac-building-materials.avif", alt: "Daikin air conditioning split AC VRV spare parts supplier UAE" },
    { name: "KIMMCO ISOVER", logo: "/Kimmcoisover-hvac-building-materials.avif", alt: "Kimmco Isover glass wool thermal insulation for HVAC UAE" },
    { name: "MITSUBISHI", logo: "/Mitsubishi-hvac-building-materials.avif", alt: "Mitsubishi HVAC compressors and AC spare parts UAE" },
    { name: "UNIWELD", logo: "/Uniweld-hvac-building-materials.avif", alt: "Uniweld HVAC brazing tools and equipment for AC technicians UAE" },
    { name: "DANFOSS", logo: "/Danfoss-hvac-building-materials.avif", alt: "Danfoss HVAC valves compressors and refrigeration components UAE" },
    { name: "ELCO", logo: "/elco-hvac-building-materials.avif", alt: "ELCO condenser evaporator fan motors for HVAC UAE" },
    { name: "PARKER", logo: "/Parker-hvac-building-materials.avif", alt: "Parker Hannifin filter driers valves refrigeration components UAE" },
    { name: "SIEMENS", logo: "/Siemens-hvac-building-materials.avif", alt: "Siemens HVAC building automation thermostats and actuators UAE" },
    { name: "SUNISO", logo: "/suniso-hvac-building-materials.avif", alt: "Suniso compressor refrigeration oil mineral synthetic UAE" },
    { name: "YORK", logo: "/York-hvac-building-materials.avif", alt: "York AC spare parts chillers compressors AHU components UAE" },
    { name: "AEROFOAM", logo: "/aerofoam-hvac-building-materials.avif", alt: "Aerofoam rubber pipe insulation for HVAC systems UAE" },
    { name: "BRISTOL", logo: "/bristol-hvac-building-materials.avif", alt: "Bristol reciprocating compressors for HVAC and refrigeration UAE" },
    { name: "CASTEL", logo: "/castel-hvac-building-materials.avif", alt: "Castel refrigeration valves ball valves filter driers UAE" },
    { name: "KRANZLE", logo: "/kranzle-hvac-building-materials.avif", alt: "Kranzle high-pressure washers professional cleaning equipment UAE" },
  ]

  const buildingMaterialsBrands = [
    { name: "PEGLER", logo: "/pegler-hvac-building-materials.avif", alt: "Pegler plumbing valves and brass fittings supplier UAE" },
    { name: "GROHE", logo: "/Grohe-alegaby-building-materials.avif", alt: "Grohe bathroom kitchen faucets and sanitary fittings UAE" },
    { name: "UKEN", logo: "/uken-hvac-building-materials.avif", alt: "Uken professional hand tools and hardware supplier UAE" },
    { name: "JOTUN", logo: "/jotun-hvac-building-materials.avif", alt: "Jotun paints and coatings distributor UAE interior exterior" },
    { name: "MAKITA", logo: "/Makita-hvac-building-materials.avif", alt: "Makita power tools cordless drills grinders saws wholesale UAE" },
    { name: "DEWALT", logo: "/dewalt-alegaby-building-materials.avif", alt: "DeWalt professional power tools construction tools wholesale UAE" },
    { name: "STANLEY", logo: "/Stanley-alegaby-building-materials.avif", alt: "Stanley hand tools measuring equipment professional UAE" },
    { name: "HERZ", logo: "/herz-alegaby-building-materials.avif", alt: "Herz thermostatic valves and plumbing controls supplier UAE" },
    { name: "OSRAM", logo: "/Osram-alegaby-building-materials.avif", alt: "Osram LED lighting solutions bulbs tubes commercial UAE" },
    { name: "RAK CERAMICS", logo: "/RAKCERAMICS-alegaby-building-materials.avif", alt: "RAK Ceramics tiles and sanitary ware porcelain ceramic UAE" },
    { name: "DECODUCT", logo: "/decoduct-hvac-building-materials.avif", alt: "Decoduct PVC conduit cable management systems UAE" },
    { name: "ARISTON", logo: "/Ariston-alegaby-building-materials.avif", alt: "Ariston water heaters electric gas heating systems UAE" },
    { name: "SCHNEIDER", logo: "/Schneider-hvac-building-materials.avif", alt: "Schneider Electric switches MCBs distribution boards UAE" },
    { name: "ABB", logo: "/ABB-hvac-building-materials.avif", alt: "ABB circuit breakers switches automation products UAE" },
    { name: "NATIONAL PAINTS", logo: "/national-paints-alegaby.avif", alt: "National Paints interior exterior coatings distributor UAE" },
    { name: "PHILIPS", logo: "/philips-alegby.avif", alt: "Philips LED lighting bulbs panels smart lighting UAE" },
    { name: "OMAN CABLES", logo: "/Oman-Cables-alegaby.avif", alt: "Oman Cables electrical wiring power cables supplier UAE" },
    { name: "DUCAB", logo: "/ducab-alegaby.avif", alt: "Ducab power cables fire-rated industrial wiring UAE" },
    { name: "KARCHER", logo: "/karcher-alegby.avif", alt: "Karcher pressure washers cleaning equipment commercial UAE" },
    { name: "MK ELECTRIC", logo: "/honeywell-mk-alegaby.avif", alt: "MK Electric by Honeywell switches sockets wiring accessories UAE" },
    { name: "COSMOPLAST", logo: "/cosmoplast-alegaby.avif", alt: "Cosmoplast UPVC pipes storage tanks plastic products UAE" },
  ]

  const mobileMarqueeRows = chunkIntoRows([...hvacBrands, ...buildingMaterialsBrands], 3)
  const mobileRowDurationsSec = [36, 44, 52] as const

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Brands We Work With</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Authorized distributor for over 40 leading HVAC equipment and building materials brands in the UAE
          </p>
        </div>

        <div className="md:hidden space-y-5">
          {mobileMarqueeRows.map((row, rowIndex) => (
            <BrandMarqueeRow key={`marquee-row-${rowIndex}`} brands={row} durationSec={mobileRowDurationsSec[rowIndex]} />
          ))}
        </div>

        <div className="hidden md:block space-y-8">
          <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">HVAC Equipment Brands</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {hvacBrands.map((brand, index) => (
              <Card
                key={`hvac-${index}`}
                className="group border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6 h-24 flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={120}
                    height={120}
                    className="max-w-full max-h-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          </div>

          <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Building Materials Brands</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {buildingMaterialsBrands.map((brand, index) => (
              <Card
                key={`building-${index}`}
                className="group border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6 h-24 flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={120}
                    height={120}
                    className="max-w-full max-h-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
