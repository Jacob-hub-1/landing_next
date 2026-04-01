export type Category = {
  slug: string
  name: string
  division: 'hvac' | 'building-materials'
  image: string
  description: string
  longDescription: string
  products: string[]
  brands: string[]
}

export const hvacCategories: Category[] = [
  {
    slug: 'compressors',
    name: 'AC Compressors',
    division: 'hvac',
    image: '/hvac/copeland-compressor-alegaby.avif',
    description: 'Wholesale AC compressors in UAE — scroll, reciprocating, and semi-hermetic compressors from Copeland, Bristol, Mitsubishi, and Bitzer for residential and commercial HVAC systems.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a leading AC compressor supplier in Dubai and Sharjah. We stock original scroll compressors, reciprocating compressors, and semi-hermetic compressors from top brands including Copeland, Bristol, Mitsubishi, Danfoss, and Bitzer. Our compressor inventory covers capacities for residential split AC systems through to large commercial chillers and industrial refrigeration units. All compressors come with manufacturer warranty and are available at competitive wholesale pricing with same-day dispatch across the UAE.',
    products: ['Scroll Compressors', 'Reciprocating Compressors', 'Semi-Hermetic Compressors', 'Rotary Compressors', 'Compressor Spare Parts', 'Crankcase Heaters'],
    brands: ['Copeland', 'Bristol', 'Mitsubishi', 'Danfoss', 'Emerson'],
  },
  {
    slug: 'thermostats',
    name: 'Thermostats & Controls',
    division: 'hvac',
    image: '/hvac/honeywell-thermostat-alegaby.avif',
    description: 'HVAC thermostats and temperature controls in UAE — Honeywell, Siemens, and White-Rodgers room and programmable thermostats wholesale.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) supplies a comprehensive range of HVAC thermostats and temperature controls across the UAE. Our thermostat inventory includes Honeywell digital room thermostats, Siemens programmable thermostats, White-Rodgers fan coil controllers, and smart Wi-Fi thermostats for residential and commercial applications. We also stock humidity controllers, differential pressure switches, and building management system components. Wholesale pricing and technical support available for contractors and MEP companies in Dubai, Sharjah, and all Emirates.',
    products: ['Room Thermostats', 'Programmable Thermostats', 'Smart Thermostats', 'Fan Coil Controllers', 'Humidity Controllers', 'Pressure Switches'],
    brands: ['Honeywell', 'Siemens', 'White-Rodgers', 'Resideo'],
  },
  {
    slug: 'valves',
    name: 'HVAC Valves',
    division: 'hvac',
    image: '/hvac/valves-hvac-honeywell.avif',
    description: 'HVAC valves in UAE — solenoid, expansion, ball, and check valves from Honeywell, Danfoss, Siemens, Castel, and Parker for AC and refrigeration systems.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is your one-stop HVAC valve supplier in Dubai and Sharjah. We stock solenoid valves, expansion valves (TEV and EEV), motorized ball valves, check valves, pressure relief valves, and zone valves from top manufacturers including Honeywell, Danfoss, Siemens, Castel, and Parker. Our valves serve residential, commercial, and industrial HVAC and refrigeration systems. Wholesale pricing and immediate availability for contractors across the UAE.',
    products: ['Solenoid Valves', 'Expansion Valves', 'Ball Valves', 'Check Valves', 'Zone Valves', 'Pressure Relief Valves'],
    brands: ['Honeywell', 'Danfoss', 'Siemens', 'Castel', 'Parker'],
  },
  {
    slug: 'refrigerants',
    name: 'Refrigerant Gases',
    division: 'hvac',
    image: '/hvac/refrigerants-copeland-refron-mitsubishi-alegaby.avif',
    description: 'Refrigerant gases R410A, R134a, R22, R404A in UAE — bulk and cylinder supply from Refron, Honeywell, and Floron at wholesale prices.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a major refrigerant gas distributor in the UAE. We stock all common refrigerant types including R410A, R134a, R22, R404A, R407C, R32, and R290 from trusted brands like Refron, Honeywell Genetron, Floron, and Mafron. Available in disposable cylinders and refillable tanks for residential AC servicing, commercial refrigeration, and industrial applications. Bulk pricing and regular delivery schedules available for AC service companies and maintenance contractors across Dubai, Sharjah, Abu Dhabi, and all Emirates.',
    products: ['R410A', 'R134a', 'R22', 'R404A', 'R407C', 'R32', 'Refrigerant Recovery Cylinders'],
    brands: ['Refron', 'Honeywell', 'Floron', 'Mafron'],
  },
  {
    slug: 'copper-fittings',
    name: 'Copper Tubes & Fittings',
    division: 'hvac',
    image: '/hvac/copper-fittings-hvac-alegby.avif',
    description: 'Copper tubes and fittings for HVAC installation in UAE — ACR copper piping, elbows, tees, and line sets from Mueller, Maksal, and Halcor.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a leading copper tube and fitting supplier for HVAC and refrigeration piping in the UAE. We stock ACR copper tubes in all standard sizes from 1/4" to 4-1/8", along with copper elbows, tees, reducers, couplings, and pre-insulated line sets. Our brands include Mueller, Maksal, Halcor, and Harris brazing alloys. Whether you need soft-drawn coils for split AC installation or hard-drawn tubes for commercial chilled water systems, we have wholesale stock available for contractors in Dubai, Sharjah, and across the Emirates.',
    products: ['ACR Copper Tubes', 'Copper Elbows', 'Copper Tees', 'Reducers', 'Couplings', 'Line Sets', 'Brazing Alloys'],
    brands: ['Mueller', 'Maksal', 'Halcor', 'Harris'],
  },
  {
    slug: 'split-ac',
    name: 'Split AC Units',
    division: 'hvac',
    image: '/hvac/split-ac-hvac-alegay.avif',
    description: 'Split air conditioning units in UAE — wall-mount, cassette, and ducted split AC from Daikin, O General, Carrier, and Aux at wholesale prices.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) supplies split air conditioning units across the UAE at competitive wholesale prices. Our range includes wall-mount split AC, ceiling cassette units, and ducted split systems from premium brands including Daikin, O General, Carrier, Aux, and Sapphire. We cater to residential, commercial, and light industrial applications with capacities from 1 ton to 5+ tons. Installation accessories and spare parts also available. Wholesale pricing for contractors and project buyers in Dubai, Sharjah, and all Emirates.',
    products: ['Wall-Mount Split AC', 'Ceiling Cassette AC', 'Ducted Split AC', 'Floor Standing AC', 'AC Remote Controls'],
    brands: ['Daikin', 'O General', 'Carrier', 'Aux', 'Sapphire'],
  },
  {
    slug: 'motors',
    name: 'Electric Motors',
    division: 'hvac',
    image: '/hvac/motors-hvac-alegaby.avif',
    description: 'HVAC electric motors in UAE — condenser fan motors, blower motors, and EC motors from GE, Pioneer, and ELCO for AC and refrigeration.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) stocks a wide range of HVAC electric motors for air conditioning and refrigeration applications across the UAE. Our motor inventory includes condenser fan motors, evaporator fan motors, blower motors, EC motors, and PSC motors from GE, Pioneer, ELCO, and other trusted brands. We carry motors in all common wattages and speeds for split AC, package units, AHUs, and commercial refrigeration. Wholesale pricing and fast dispatch for technicians and contractors in Dubai, Sharjah, and across the Emirates.',
    products: ['Condenser Fan Motors', 'Evaporator Fan Motors', 'Blower Motors', 'EC Motors', 'PSC Motors', 'Motor Capacitors'],
    brands: ['GE', 'Pioneer', 'ELCO'],
  },
  {
    slug: 'hvac-accessories',
    name: 'HVAC Accessories',
    division: 'hvac',
    image: '/hvac/hvac-accesories-egaby.avif',
    description: 'HVAC accessories and spare parts in UAE — contactors, relays, capacitors, thermometers, and solenoid valves for AC repair and maintenance.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a comprehensive HVAC accessories supplier in the UAE. We stock contactors, relays, run capacitors, start capacitors, thermometers, pressure gauges, solenoid valves, filter driers, sight glasses, vibration eliminators, and more. Our accessories support AC installation, repair, and maintenance for residential, commercial, and industrial systems. Wholesale pricing for HVAC technicians, service companies, and contractors across Dubai, Sharjah, and all Emirates.',
    products: ['Contactors', 'Relays', 'Capacitors', 'Thermometers', 'Pressure Gauges', 'Filter Driers', 'Sight Glasses'],
    brands: ['Honeywell', 'Danfoss', 'Castel', 'Parker'],
  },
  {
    slug: 'insulation',
    name: 'Ducting & Insulation',
    division: 'hvac',
    image: '/hvac/hvac-alegaby.avif',
    description: 'HVAC insulation materials in UAE — pipe insulation, duct insulation, glass wool, and rubber foam from Kimmco Isover and Aerofoam.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) supplies a complete range of HVAC insulation materials across the UAE. Our insulation products include elastomeric rubber pipe insulation (Aerofoam), glass wool blankets and boards (Kimmco Isover), duct wrap, acoustic insulation, and insulation adhesives and tapes. We cater to residential, commercial, and industrial HVAC projects requiring thermal insulation for chilled water pipes, refrigerant lines, ductwork, and equipment. Wholesale pricing for MEP contractors in Dubai, Sharjah, and all Emirates.',
    products: ['Pipe Insulation', 'Duct Insulation', 'Glass Wool Blankets', 'Rubber Foam Sheets', 'Insulation Tape', 'Insulation Adhesive'],
    brands: ['Kimmco Isover', 'Aerofoam'],
  },
]

export const buildingMaterialsCategories: Category[] = [
  {
    slug: 'tools',
    name: 'Power & Hand Tools',
    division: 'building-materials',
    image: '/building-materials/tools-building-materials-alegaby.avif',
    description: 'Professional power tools and hand tools in UAE — Makita, DeWalt, Stanley, Bosch, and Uken tools supplier at wholesale prices in Dubai and Sharjah.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a leading power tools and hand tools supplier in the UAE. We carry professional-grade tools from Makita, DeWalt, Stanley, Bosch, Rothenberger, and Uken including cordless drills, angle grinders, circular saws, wrenches, pliers, screwdrivers, and measuring tools. Our tools serve construction professionals, HVAC technicians, plumbers, electricians, and maintenance teams. Wholesale pricing and full warranty support for contractors and hardware retailers across Dubai, Sharjah, and the Emirates.',
    products: ['Cordless Drills', 'Angle Grinders', 'Circular Saws', 'Wrenches', 'Pliers', 'Measuring Tools'],
    brands: ['Makita', 'DeWalt', 'Stanley', 'Bosch', 'Uken', 'Rothenberger'],
  },
  {
    slug: 'paint-coatings',
    name: 'Paint & Coatings',
    division: 'building-materials',
    image: '/building-materials/paint-building-materials-alegaby.avif',
    description: 'Paints and coatings in UAE — Jotun, National Paints, and Berger interior, exterior, and industrial paint at wholesale prices.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a major paint and coatings distributor in the UAE. We stock a comprehensive range from Jotun, National Paints, and Berger Paints including interior emulsions, exterior weather-resistant coatings, industrial protective coatings, primers, wood finishes, and painting accessories like brushes, rollers, and thinners. Our products are formulated for the demanding UAE climate and meet all regional building codes. Wholesale pricing for painting contractors, developers, and project managers in Dubai, Sharjah, and all Emirates.',
    products: ['Interior Paint', 'Exterior Paint', 'Industrial Coatings', 'Primers', 'Wood Finishes', 'Brushes & Rollers', 'Thinners'],
    brands: ['Jotun', 'National Paints', 'Berger Paints'],
  },
  {
    slug: 'construction-materials',
    name: 'Construction Materials',
    division: 'building-materials',
    image: '/building-materials/construction-building-materials-alegaby.avif',
    description: 'Construction materials in UAE — cement, white cement, gypsum board, gypsum tiles, and building aggregates wholesale supplier Dubai Sharjah.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) supplies essential construction materials across the UAE. Our range includes Portland cement, white cement, gypsum boards, gypsum panels, gypsum tiles, plaster of Paris, and waterproofing compounds. We source from trusted manufacturers to ensure consistent quality for residential, commercial, and infrastructure projects. Wholesale and bulk pricing available for contractors, developers, and construction companies in Dubai, Sharjah, and throughout the Emirates.',
    products: ['Portland Cement', 'White Cement', 'Gypsum Board', 'Gypsum Panels', 'Gypsum Tiles', 'Waterproofing Compounds'],
    brands: [],
  },
  {
    slug: 'hardware-fasteners',
    name: 'Hardware & Fasteners',
    division: 'building-materials',
    image: '/building-materials/fastners-building-materials-alegaby.avif',
    description: 'Construction hardware and fasteners in UAE — nuts, bolts, anchor bolts, threaded rods, channels, clamps, and brackets wholesale supplier.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a comprehensive hardware and fastener supplier for construction and industrial projects in the UAE. Our inventory includes nuts, bolts, washers, anchor bolts, threaded rods, strut channels, beam clamps, pipe clamps, shovel handles, plywood sheets, insulation tape, aluminum tape, aluminum glass tape, foam tape, sealants, and adhesives. We supply in bulk at wholesale prices for contractors, MEP companies, and construction firms across Dubai, Sharjah, and the Emirates.',
    products: ['Nuts & Bolts', 'Anchor Bolts', 'Threaded Rods', 'Strut Channels', 'Clamps', 'Sealants', 'Tapes'],
    brands: [],
  },
  {
    slug: 'plumbing-sanitary',
    name: 'Plumbing & Sanitary',
    division: 'building-materials',
    image: '/building-materials/plumbing-sanitary-alegaby.avif',
    description: 'Plumbing and sanitary products in UAE — pipes, fittings, faucets, water heaters, and bathroom accessories from Grohe, Pegler, Ariston, and Cosmoplast.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) supplies plumbing and sanitary products across the UAE. Our range includes UPVC pipes and fittings (Cosmoplast), brass valves and fittings (Pegler), bathroom faucets and shower systems (Grohe), water heaters (Ariston), and a full range of plumbing accessories. We serve residential and commercial construction projects with wholesale pricing for plumbing contractors, developers, and MEP companies in Dubai, Sharjah, and all Emirates.',
    products: ['UPVC Pipes', 'Brass Fittings', 'Faucets', 'Shower Systems', 'Water Heaters', 'Bathroom Accessories'],
    brands: ['Grohe', 'Pegler', 'Ariston', 'Cosmoplast'],
  },
  {
    slug: 'safety-products',
    name: 'Safety Products',
    division: 'building-materials',
    image: '/building-materials/safety-products-building-materials-alegaby.avif',
    description: 'Construction safety products in UAE — helmets, gloves, safety boots, high-visibility vests, and PPE equipment wholesale supplier.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) supplies construction safety products and personal protective equipment (PPE) across the UAE. Our safety range includes hard hats, safety glasses, work gloves, safety boots, high-visibility vests, ear protection, respiratory masks, and safety harnesses. All products meet international and UAE safety standards. Wholesale pricing for construction companies, industrial facilities, and safety managers in Dubai, Sharjah, and across the Emirates.',
    products: ['Hard Hats', 'Safety Glasses', 'Work Gloves', 'Safety Boots', 'High-Vis Vests', 'Respiratory Masks'],
    brands: [],
  },
  {
    slug: 'electrical',
    name: 'Electrical Products',
    division: 'building-materials',
    image: '/building-materials/building-materials.avif',
    description: 'Electrical products in UAE — cables, switches, circuit breakers, lighting, and cable management from Schneider, ABB, Ducab, Philips, and Osram.',
    longDescription: 'Al Egaby Gen. Tr. (L.L.C) is a major electrical products supplier in the UAE. Our range includes power cables (Ducab, Oman Cables), switches and sockets (Schneider, ABB, MK Electric), circuit breakers and distribution boards, LED lighting (Philips, Osram), cable management systems (Decoduct), and a full range of electrical accessories. We serve electrical contractors, panel builders, and construction companies with wholesale pricing and stock availability across Dubai, Sharjah, and the Emirates.',
    products: ['Power Cables', 'Switches & Sockets', 'Circuit Breakers', 'LED Lighting', 'Cable Management', 'Distribution Boards'],
    brands: ['Schneider Electric', 'ABB', 'Ducab', 'Oman Cables', 'Philips', 'Osram', 'MK Electric', 'Decoduct'],
  },
]

export const allCategories = [...hvacCategories, ...buildingMaterialsCategories]

export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find((c) => c.slug === slug)
}
