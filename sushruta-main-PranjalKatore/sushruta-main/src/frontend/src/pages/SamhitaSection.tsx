import { motion } from "motion/react";

const sectionData = [
  {
    number: "I",
    name: "Sutrasthana",
    subtitle: "General Principles",
    chapters: "46 chapters",
    description:
      "Covers the fundamental principles of surgery and medicine — the training of surgeons, conduct of physicians, definition of health and disease, classification of instruments, types of surgery, and surgical techniques including suturing, cauterization, and bandaging.",
    topics: [
      "Surgeon training (6 qualities)",
      "Instrument classification",
      "Operative techniques",
      "Wound management",
      "Bandaging (14 types)",
      "Diet and convalescence",
    ],
  },
  {
    number: "II",
    name: "Nidanasthana",
    subtitle: "Etiology & Pathology",
    chapters: "16 chapters",
    description:
      "Describes the causes, symptoms, and pathogenesis of major surgical diseases including abscesses, fistulae, urinary calculi, hemorrhoids, and tumors. Establishes diagnostic criteria that remain clinically recognizable.",
    topics: [
      "Tumor classification (7 types)",
      "Fistula-in-ano",
      "Urinary calculi",
      "Abscesses & carbuncles",
      "Hemorrhoids",
      "Hernia types",
    ],
  },
  {
    number: "III",
    name: "Sharirasthana",
    subtitle: "Anatomy",
    chapters: "10 chapters",
    description:
      "The anatomical foundation of the entire work. Describes embryology, fetal development, skeletal anatomy (300 bones identified), musculature (500 muscles), and the 107 Marma vital points — damage to which is invariably fatal.",
    topics: [
      "Embryology & fetal stages",
      "300 bones identified",
      "500 muscles catalogued",
      "700 veins described",
      "107 Marma vital points",
      "Organ anatomy",
    ],
  },
  {
    number: "IV",
    name: "Kalpasthana",
    subtitle: "Toxicology",
    chapters: "8 chapters",
    description:
      "Covers poisons from animal, vegetable, and mineral sources. Describes antidotes, management of poisoning, and medicinal uses of toxins — an early pharmacotoxicology. Includes management of snakebite with specific antidotes.",
    topics: [
      "Animal poisons (snakebite)",
      "Plant toxins",
      "Mineral poisons",
      "Compound poisons",
      "Antidotes & management",
      "Medicinal use of toxins",
    ],
  },
  {
    number: "V",
    name: "Chikitsasthana",
    subtitle: "Therapeutics",
    chapters: "40 chapters",
    description:
      "The therapeutic management of all diseases described in the Samhita. Covers post-operative care, wound healing, specific surgical treatments, and the management of complications. Includes detailed preparations of medicinal compounds.",
    topics: [
      "Wound healing protocols",
      "Post-operative care",
      "Specific surgical therapies",
      "Complication management",
      "Herbal formulations",
      "Dietary therapy",
    ],
  },
  {
    number: "VI",
    name: "Uttaratantra",
    subtitle: "Supplementary Treatise",
    chapters: "66 chapters",
    description:
      "An extensive supplementary section covering ophthalmology (76 eye diseases described), otolaryngology, pediatrics, psychiatry, and geriatrics. The 76 ocular conditions include the first systematic description of cataract surgery.",
    topics: [
      "76 eye diseases",
      "Cataract surgery (Couching)",
      "ENT conditions",
      "Pediatric medicine",
      "Psychiatric disorders",
      "Geriatric care",
    ],
  },
];

export function SamhitaSection() {
  return (
    <section
      id="samhita"
      data-ocid="samhita.section"
      className="py-24 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-3">
            The Sacred Text
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider mb-4">
            SUSHRUTA SAMHITA
          </h2>
          <p className="font-display italic text-lg text-muted-foreground">
            सुश्रुत संहिता — The Compendium of Sushruta
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24 bg-border" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-24 bg-border" />
          </div>
        </motion.div>

        {/* Manuscript image + overview */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="parchment-edge terracotta-border overflow-hidden mb-4">
              <img
                src="/assets/generated/samhita-manuscript.dim_900x500.jpg"
                alt="Sushruta Samhita palm leaf manuscript in Sanskrit"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="bg-card border border-border p-5">
              <h3 className="font-display text-lg text-primary tracking-wider uppercase mb-3">
                At a Glance
              </h3>
              {[
                ["Total Chapters", "184"],
                ["Verses (Slokas)", "~8,000"],
                ["Conditions Described", "1,120"],
                ["Surgical Procedures", "300+"],
                ["Sharp Instruments", "20 types"],
                ["Blunt Instruments", "101 types"],
                ["Medicinal Plants", "700"],
                ["Herbal Preparations", "57 formulas"],
                ["Mineral Preparations", "64 formulas"],
                ["Animal Preparations", "8 formulas"],
                ["Anatomy — Bones", "300 identified"],
                ["Anatomy — Marma Points", "107 vital points"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between text-sm font-body border-b border-border/40 py-2"
                >
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-primary font-display tracking-widest">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3 space-y-5 font-body text-foreground/80 leading-relaxed"
          >
            <h3 className="font-display text-2xl text-foreground tracking-wider uppercase">
              The World's Oldest
              <br />
              <span className="text-primary">Surgical Text</span>
            </h3>
            <p>
              The Sushruta Samhita is one of the foundational texts of Ayurveda
              and is considered the most important ancient work on surgery.
              Composed in classical Sanskrit, it predates the Hippocratic Corpus
              by at least two centuries, making Sushruta's documentation of
              surgical knowledge the oldest in the world.
            </p>
            <p>
              The text was originally transmitted orally from teacher to student
              in the Dhanvantari tradition before being committed to writing on
              palm leaves. The version we possess today was revised and expanded
              by the grammarian Nagarjuna around the 7th century CE, yet the
              core surgical content is unmistakably from a much earlier period.
            </p>
            <p>
              What makes the Samhita extraordinary is not merely its antiquity
              but its systematic rigor. Sushruta demanded evidence-based
              reasoning (<em>yuktivyapashraya</em>), anatomical precision (
              <em>sharirasthana</em>), and clinical experience before
              theoretical knowledge. His insistence that "one who knows only the
              texts but not the practical side of surgery is to be laughed at"
              prefigures modern medical education by 2,500 years.
            </p>
            <p>
              The text was translated into Arabic around 800 CE under Caliph
              Harun al-Rashid as the <em>Kitab-i-Susrud</em>. This Arabic
              translation preserved Sushruta's rhinoplasty technique, which was
              then rediscovered by European surgeons in the 18th century — who
              initially attributed the "Indian method" of nasal reconstruction
              to their own recent discovery, unaware of its 2,500-year-old
              origins.
            </p>
            <div className="bg-card border border-border p-5 parchment-edge">
              <p className="font-display italic text-foreground/70 text-sm leading-relaxed">
                "Neither the surgeon who is only theoretically trained nor the
                one who has only practical experience is competent to perform
                surgery. Only the combination of both makes the best surgeon."
              </p>
              <p className="font-body text-xs text-accent mt-2 tracking-widest uppercase">
                — Sushruta Samhita, Sutrasthana 4.7
              </p>
            </div>
          </motion.div>
        </div>

        {/* Six Sthanams */}
        <h3 className="font-display text-2xl text-center text-foreground tracking-widest uppercase mb-8">
          The Six Sections (Sthanams)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData.map((sec, i) => (
            <motion.div
              key={sec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-ocid={`samhita.section_card.${i + 1}`}
              className="bg-card border border-border p-6 parchment-edge hover:shadow-scholarly transition-smooth"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="font-display text-3xl text-primary/30 leading-none">
                  {sec.number}
                </span>
                <div>
                  <h4 className="font-display text-lg text-primary tracking-wider uppercase">
                    {sec.name}
                  </h4>
                  <p className="font-body text-xs text-accent tracking-widest uppercase">
                    {sec.subtitle} · {sec.chapters}
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4">
                {sec.description}
              </p>
              <ul className="space-y-1">
                {sec.topics.map((topic) => (
                  <li
                    key={topic}
                    className="font-body text-xs text-muted-foreground flex items-center gap-2"
                  >
                    <span className="text-accent text-xs">›</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
