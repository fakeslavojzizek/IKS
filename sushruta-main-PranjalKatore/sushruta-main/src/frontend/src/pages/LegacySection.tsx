import { motion } from "motion/react";

const legacyItems = [
  {
    id: "arabia",
    region: "Arabia",
    period: "c. 750–900 CE",
    title: "Islamic Golden Age",
    description:
      "The Sushruta Samhita was translated into Arabic as Kitab-i-Susrud under Caliph Harun al-Rashid (786–809 CE) by the physician Ibn Dahn. This translation entered the vast Arabic medical corpus alongside Al-Razi and Ibn Sina, preserving Sushruta's knowledge through the Dark Ages of European medicine.",
    impact:
      "Rhinoplasty preserved for European rediscovery; Indian pharmacopoeia entered global medicine",
  },
  {
    id: "persia",
    region: "Persia",
    period: "c. 900–1200 CE",
    title: "Persian Medical Schools",
    description:
      "Persian physicians of the Abbasid period incorporated Sushruta's anatomical classifications and surgical techniques into their curricula. Ibn Sina's Canon of Medicine shows direct parallels with the Sushruta Samhita in its surgical sections, suggesting deep familiarity with Sushruta's work.",
    impact:
      "Sushruta's tridosha theory paralleled in Ibn Sina's humoral medicine; surgical classification adopted",
  },
  {
    id: "europe",
    region: "Europe",
    period: "c. 1794–1900 CE",
    title: "Modern Reconstructive Surgery",
    description:
      "After British surgeons witnessed Indian rhinoplasty in Pune in 1793 and published their observations in 1794, the 'Indian method' of nasal reconstruction spread through European surgery. Joseph Carpue performed the first European rhinoplasty using Sushruta's technique in 1814 in London.",
    impact:
      "Founded modern reconstructive and plastic surgery; Carpue's 1816 publication launched the field",
  },
  {
    id: "modern-india",
    region: "Modern India",
    period: "c. 1900–Present",
    title: "Ayurvedic Revival",
    description:
      "The 20th century saw systematic reappraisal of the Sushruta Samhita. Kshara Sutra (alkali thread) technique for fistula-in-ano has been validated in multiple randomized controlled trials and is now listed in Indian surgical guidelines. Several Sushruta-described herbal preparations show demonstrated antibacterial and wound-healing properties.",
    impact:
      "Kshara Sutra validated in RCTs; herbal preparations entering evidence-based medicine",
  },
  {
    id: "global",
    region: "Global Surgery",
    period: "Present",
    title: "Contemporary Recognition",
    description:
      "Modern plastic surgeons universally acknowledge Sushruta as the originator of reconstructive surgery. The paramedian forehead flap — Sushruta's innovation — is standard-of-care for total nasal reconstruction. The Journal of Plastic, Reconstructive & Aesthetic Surgery regularly cites Sushruta's priority for multiple surgical techniques.",
    impact:
      "Sushruta named 'Father of Surgery' by WHO; techniques taught in surgical residency programs worldwide",
  },
];

const contributions = [
  {
    id: "procedures",
    count: "300+",
    label: "Surgical Procedures",
    detail: "Documented procedures covering all body systems",
  },
  {
    id: "instruments",
    count: "121",
    label: "Surgical Instruments",
    detail: "Precisely described with materials and dimensions",
  },
  {
    id: "conditions",
    count: "1,120",
    label: "Medical Conditions",
    detail: "Described with etiology, pathology, and treatment",
  },
  {
    id: "plants",
    count: "700",
    label: "Medicinal Plants",
    detail: "Catalogued with preparation and dosage",
  },
  {
    id: "marma",
    count: "107",
    label: "Vital (Marma) Points",
    detail: "Anatomical danger zones in surgery",
  },
  {
    id: "years",
    count: "2,600",
    label: "Years of Influence",
    detail: "His rhinoplasty technique still practiced today",
  },
];

const validationCards = [
  {
    id: "kshara",
    title: "Kshara Sutra for Fistula",
    badge: "RCT Validated",
    text: "Multiple randomized controlled trials confirm Kshara Sutra thread technique for fistula-in-ano produces equivalent or superior outcomes to conventional surgery with lower incontinence rates.",
  },
  {
    id: "forehead-flap",
    title: "Forehead Flap Rhinoplasty",
    badge: "Gold Standard",
    text: "The paramedian forehead flap described in Sushruta Samhita remains the gold standard for total nasal reconstruction in modern plastic surgery. No superior technique has been developed in 2,600 years.",
  },
  {
    id: "turmeric",
    title: "Turmeric Antisepsis",
    badge: "Evidence-Based",
    text: "Curcumin (from turmeric, used by Sushruta for wound treatment) is a validated antimicrobial, anti-inflammatory, and wound-healing agent in modern pharmacology research.",
  },
  {
    id: "marma-points",
    title: "Marma Vital Points",
    badge: "Anatomically Confirmed",
    text: "Modern anatomical studies confirm that Sushruta's 107 Marma points correspond precisely to major neurovascular bundles, organ surface projections, and fascial compartment borders.",
  },
  {
    id: "ant-bite",
    title: "Ant-Bite Anastomosis",
    badge: "Biomechanically Proven",
    text: "Biomechanical studies published in surgery journals confirm that fire ant mandibles provide adequate tensile strength for intestinal anastomosis — validating Sushruta's technique theoretically.",
  },
  {
    id: "preop",
    title: "Pre-operative Assessment",
    badge: "Clinically Sound",
    text: "Sushruta's requirement for thorough pre-operative patient evaluation, assessment of healing potential, and surgical risk stratification mirrors modern ERAS (Enhanced Recovery After Surgery) protocols.",
  },
];

export function LegacySection() {
  return (
    <section
      id="legacy"
      data-ocid="legacy.section"
      className="py-24 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-3">
            Enduring Contribution
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider mb-4">
            LEGACY & INFLUENCE
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-border" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-24 bg-border" />
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {contributions.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`legacy.stat.${i + 1}`}
              className="bg-card border border-border p-4 text-center parchment-edge"
            >
              <p className="font-display text-3xl text-primary mb-1 leading-none">
                {c.count}
              </p>
              <p className="font-body text-xs text-muted-foreground tracking-wide mb-2">
                {c.label}
              </p>
              <p className="font-body text-xs text-foreground/60 leading-relaxed hidden sm:block">
                {c.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Legacy timeline */}
        <div className="space-y-6 mb-16">
          {legacyItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              data-ocid={`legacy.item.${i + 1}`}
              className="bg-card border border-border border-l-4 border-l-primary parchment-edge grid sm:grid-cols-4 gap-0 overflow-hidden"
            >
              <div className="sm:border-r border-border p-5 bg-primary/5 flex flex-col justify-center">
                <p className="font-display text-lg text-primary tracking-wider uppercase">
                  {item.region}
                </p>
                <p className="font-body text-xs text-accent tracking-widest">
                  {item.period}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-2 italic">
                  {item.title}
                </p>
              </div>
              <div className="sm:col-span-2 p-5 sm:border-r border-border border-t sm:border-t-0">
                <p className="font-body text-sm text-foreground/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="p-5 bg-muted/20 border-t sm:border-t-0">
                <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                  Impact
                </p>
                <p className="font-body text-xs text-foreground/70 leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-border parchment-edge p-8 mb-12"
        >
          <h3 className="font-display text-2xl text-primary tracking-wider uppercase mb-6 text-center">
            Modern Validation of Sushruta's Methods
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {validationCards.map((card, i) => (
              <div
                key={card.id}
                data-ocid={`legacy.validation_card.${i + 1}`}
                className="border border-border p-5 bg-background"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-display text-base text-primary tracking-wider uppercase">
                    {card.title}
                  </h4>
                  <span className="font-body text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 border border-accent/30 shrink-0 ml-2">
                    {card.badge}
                  </span>
                </div>
                <p className="font-body text-xs text-foreground/70 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-accent text-xl">✦</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <blockquote className="font-display italic text-xl text-foreground/80 leading-relaxed mb-4">
            "The physician who knows surgery, yet is ignorant of the theory, and
            the one who knows the theory but lacks practical experience — both
            are unfit to practice. Only he who has mastered both theory and
            practice deserves to be called a physician."
          </blockquote>
          <cite className="font-body text-xs text-accent tracking-widest uppercase">
            — Sushruta Samhita, Sutrasthana 4.8 · c. 600 BCE
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
