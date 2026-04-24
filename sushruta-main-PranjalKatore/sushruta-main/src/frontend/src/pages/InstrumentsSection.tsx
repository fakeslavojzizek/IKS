import { motion } from "motion/react";

const instruments = [
  {
    id: "mandalagra",
    name: "Mandalagra",
    sanskrit: "मण्डलाग्र",
    category: "Sharp — Knife (Shastra)",
    imageUrl: "/assets/generated/instrument-mandalagra.dim_600x400.jpg",
    description:
      "A round-headed surgical knife with a crescent-shaped blade. The Mandalagra was used for incisions requiring circular cuts, such as opening abscesses, excising tumors, and cutting circular flaps of skin during reconstructive procedures including rhinoplasty.",
    purpose:
      "Circular incisions, tumor excision, abscess drainage, skin flap creation",
    material: "Iron or bronze with ivory or ebony handle",
    dimensions: "~18–22 cm total length, blade 4–6 cm",
    modernEquivalent:
      "Corresponds to the modern circular scalpel / crescent knife",
    technique:
      "Held between thumb and first two fingers; blade angle adjusted by rotating wrist",
  },
  {
    id: "sandamsha",
    name: "Sandamsha",
    sanskrit: "सन्दंश",
    category: "Blunt — Forceps (Yantra)",
    imageUrl: "/assets/generated/instrument-sandamsha.dim_600x400.jpg",
    description:
      "Scissor-like forceps with flat, blunt ends used for grasping and extracting foreign bodies embedded in wounds. Sushruta described multiple variants including the Svamukha (natural-mouth) for general use and the Simhamukha (lion-mouth) for deep wounds.",
    purpose: "Foreign body extraction, tissue grasping, wound management",
    material: "Bronze alloy with knurled gripping surface on arms",
    dimensions: "25–35 cm length for deep extraction variants",
    modernEquivalent:
      "Corresponds to Kocher's forceps and Allis tissue forceps",
    technique:
      "Inserted closed into wound tract; opened to grasp foreign body; extracted with controlled steady traction",
  },
  {
    id: "suchi",
    name: "Suchi",
    sanskrit: "सूची",
    category: "Sharp — Needle (Shastra)",
    imageUrl: "/assets/generated/instrument-suchi.dim_600x400.jpg",
    description:
      "Surgical needles of varying curvature and thickness. Sushruta described six types: Rikhini (for muscles), Trivritta (for skin), Karnapali (for ear lobes), Gauramukhī (for bone sutures), Suchi (straight needle), and Bahumukhi (multi-pointed needle for complex closures).",
    purpose:
      "Wound closure, suturing, intestinal anastomosis, vascular ligation",
    material: "Iron, copper, bronze; some needle holders had bone handles",
    dimensions: "2–8 cm blade length depending on application",
    modernEquivalent:
      "Corresponds to modern surgical needles (cutting and round-bodied)",
    technique:
      "Suturing with various materials — tree bark fibers, horse hair, sinew, hemp thread, and cotton",
  },
  {
    id: "kartarika",
    name: "Kartarika",
    sanskrit: "कर्तरिका",
    category: "Sharp — Scissors (Shastra)",
    imageUrl: "/assets/generated/instrument-kartarika.dim_600x400.jpg",
    description:
      "Surgical scissors with curved or straight blades, described for cutting tissue, separating planes, and trimming wound edges. The Shararimukha variant featured serrated edges for cutting tougher fibrous tissues and cartilage.",
    purpose:
      "Tissue cutting, wound debridement, cartilage and fascial dissection",
    material: "High-carbon iron with bronze loop handles",
    dimensions: "15–25 cm overall length",
    modernEquivalent: "Corresponds to Metzenbaum scissors and Mayo scissors",
    technique:
      "Thumb and ring finger in loops; index finger on outer blade for control and stability",
  },
  {
    id: "vrishmukha",
    name: "Vrishmukha",
    sanskrit: "वृषमुख",
    category: "Blunt — Cannula (Yantra)",
    imageUrl: "/assets/generated/instrument-vrishmukha.dim_600x400.jpg",
    description:
      "A hollow cylindrical tube with a bull-head shaped tip, used as a trocar and cannula for drainage of fluid collections. Was inserted into cavities to create a conduit for fluid drainage or injection of medicinal fluids.",
    purpose:
      "Abscess drainage, pleural drainage, peritoneal drainage, enema delivery",
    material: "Bronze with smooth interior bore, polished exterior",
    dimensions: "10–30 cm length, 0.5–1.5 cm bore diameter",
    modernEquivalent:
      "Corresponds to modern surgical drains and trocar-cannula systems",
    technique:
      "Trocar inserted first to create track; cannula slid over trocar; trocar withdrawn leaving hollow tube",
  },
  {
    id: "upayamtika",
    name: "Upayamtika",
    sanskrit: "उपयन्त्रिका",
    category: "Blunt — Speculum (Yantra)",
    imageUrl: "/assets/generated/instrument-vrishmukha.dim_600x400.jpg",
    description:
      "A bivalve speculum for examining and operating within body orifices — ears, nose, rectum, vagina, and urethra. One of the earliest documented specula in medical history, predating the Greco-Roman speculum by centuries.",
    purpose:
      "Examination and surgery within body orifices, foreign body removal",
    material: "Bronze or ivory with hinged joint and locking mechanism",
    dimensions: "8–15 cm depending on body orifice",
    modernEquivalent:
      "Corresponds to modern Cusco's speculum and nasal speculum",
    technique:
      "Inserted closed, gently opened to expose internal surfaces; oil-lubricated before insertion",
  },
  {
    id: "anjana",
    name: "Anjana Shalaka",
    sanskrit: "अञ्जन शलाका",
    category: "Blunt — Probe / Rod (Yantra)",
    imageUrl: "/assets/generated/instrument-suchi.dim_600x400.jpg",
    description:
      "A thin rod-like probe used for exploring wound depth, applying medicinal salves to deep structures, and removing cataracts (couching). The cataract operation described by Sushruta used the Anjana Shalaka to depress the opaque lens below the visual axis.",
    purpose:
      "Wound probing, cataract couching (needling), medicinal application",
    material: "Iron, bone, or ivory depending on application",
    dimensions: "10–20 cm length, tapered to ~1 mm tip",
    modernEquivalent: "Corresponds to modern cataract needles and sinus probes",
    technique:
      "For cataracts: inserted at lateral canthus, directed to lens, gentle depression to displace opacity inferiorly",
  },
  {
    id: "lekhana",
    name: "Lekhana",
    sanskrit: "लेखन",
    category: "Sharp — Scraper (Shastra)",
    imageUrl: "/assets/generated/instrument-mandalagra.dim_600x400.jpg",
    description:
      "A flat-bladed scraping instrument used for debridement of necrotic tissue, scraping bone in orthopedic procedures, and removing callosities. Different blade widths accommodated surface debriding versus deep bone work.",
    purpose: "Wound debridement, bone scraping, callosity removal",
    material: "Iron with slightly flexible blade mounted on bone handle",
    dimensions: "12–20 cm total; blade width 0.8–2 cm",
    modernEquivalent:
      "Corresponds to modern surgical curettes and periosteal elevators",
    technique:
      "Short controlled strokes under direct vision; pressure varied with wrist rather than arm",
  },
];

export function InstrumentsSection() {
  return (
    <section
      id="instruments"
      data-ocid="instruments.section"
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-3">
            Yantras & Shastras
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider mb-4">
            SURGICAL INSTRUMENTS
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sushruta described 121 instruments in detail — 101 blunt (
            <em>Yantras</em>) and 20 sharp (<em>Shastras</em>). Each instrument
            was precisely calibrated for its specific surgical application.
            Below are the most significant instruments of his surgical practice.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24 bg-border" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-24 bg-border" />
          </div>
        </motion.div>

        {/* Classification note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border p-6 mb-12 grid sm:grid-cols-2 gap-6 parchment-edge"
        >
          <div>
            <h3 className="font-display text-lg text-primary tracking-wider uppercase mb-3">
              Yantra — Blunt Instruments (101 Types)
            </h3>
            <p className="font-body text-sm text-foreground/75 leading-relaxed">
              Non-cutting instruments used for grasping, probing, dilating,
              extracting, supporting, and examining. Sub-classified by shape:
              Svastika (cross-shaped), Sandamsha (forceps), Tala (flat), Nadi
              (tubular), Shalaka (rod), Upayantrika (speculum), Karnapali (ear
              instruments), and Arani (for fire application).
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-primary tracking-wider uppercase mb-3">
              Shastra — Sharp Instruments (20 Types)
            </h3>
            <p className="font-body text-sm text-foreground/75 leading-relaxed">
              Cutting and piercing instruments requiring meticulous sharpening
              and maintenance. Sub-classified as: Mandalagra (crescent knife),
              Karapatra (saw), Vrihimukha (needles), Ara (awl), Suchi (needles),
              Mudrika (ring knife), Utpalapatra (lancet), Ardhadhara
              (single-edge knife), Suparnapatrika (feather-shaped), and others.
            </p>
          </div>
        </motion.div>

        {/* Instrument cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {instruments.map((inst, i) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              data-ocid={`instruments.card.${i + 1}`}
              className="bg-card border border-border overflow-hidden parchment-edge hover:shadow-scholarly transition-smooth"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={inst.imageUrl}
                  alt={`${inst.name} — ancient Indian surgical instrument`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl text-primary tracking-wider uppercase">
                      {inst.name}
                    </h3>
                    <p className="font-display italic text-sm text-muted-foreground">
                      {inst.sanskrit}
                    </p>
                  </div>
                  <span className="font-body text-xs tracking-wide bg-secondary/20 text-secondary-foreground px-2 py-1 border border-secondary/30 shrink-0">
                    {inst.category.split(" — ")[0]}
                  </span>
                </div>
                <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                  {inst.category}
                </p>
                <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4">
                  {inst.description}
                </p>
                <dl className="space-y-2 text-sm">
                  {[
                    ["Purpose", inst.purpose],
                    ["Material", inst.material],
                    ["Dimensions", inst.dimensions],
                    ["Modern Equivalent", inst.modernEquivalent],
                    ["Technique", inst.technique],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      className="flex gap-2 border-t border-border/40 pt-2"
                    >
                      <dt className="font-body text-xs text-muted-foreground shrink-0 min-w-[90px]">
                        {label}:
                      </dt>
                      <dd className="font-body text-xs text-foreground/80 leading-relaxed">
                        {val}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maintenance note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-muted/30 border border-border p-8 parchment-edge"
        >
          <h3 className="font-display text-xl text-primary tracking-wider uppercase mb-4">
            Instrument Preparation & Sterilization
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 font-body text-sm text-foreground/75 leading-relaxed">
            <div>
              <h4 className="text-foreground font-body font-medium mb-2 tracking-wide">
                Sharpening Protocol
              </h4>
              <p>
                Sharp instruments were sharpened on whetstones of varying
                grades, finishing with leather strops. Sushruta specified that a
                blade should be able to cut a hair split lengthwise — a standard
                demanding a cutting edge of less than 5 microns, equivalent to
                modern surgical steel.
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-body font-medium mb-2 tracking-wide">
                Pre-operative Purification
              </h4>
              <p>
                Instruments were purified (<em>shodhana</em>) before use by
                exposure to fire, immersion in medicinal decoctions, and
                fumigation with specific herbs. The antiseptic properties of
                many plants used — turmeric, neem, sesame oil — have since been
                validated by modern phytochemistry.
              </p>
            </div>
            <div>
              <h4 className="text-foreground font-body font-medium mb-2 tracking-wide">
                Storage & Maintenance
              </h4>
              <p>
                Instruments were stored in individual leather cases lined with
                silk, kept dry and oiled with sesame oil between uses. The
                treatment regime — oil coating on metal — prevented oxidation
                and maintained the fine edge. Each instrument box was sealed
                with wax imprinted with the surgeon's seal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
