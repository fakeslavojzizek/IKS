import { motion } from "motion/react";

const timelineEvents = [
  {
    period: "c. 800–600 BCE",
    title: "Birth & Early Education",
    description:
      "Born in Varanasi (Kashi) to the sage Visvamitra. Trained under the renowned physician Dhanvantari at the ancient gurukula system of education, mastering both theoretical medicine (Ayurveda) and surgical practice.",
  },
  {
    period: "c. 600 BCE",
    title: "The Sushruta Samhita",
    description:
      "Compiled and authored the Sushruta Samhita, an encyclopedic medical text containing 184 chapters, 1,120 conditions described, 700 medicinal plants catalogued, 57 herbal preparations, 64 mineral preparations, and 8 primary surgical procedures (Ashtavidha Shastrakarma).",
  },
  {
    period: "Practice Era",
    title: "Surgical Innovation",
    description:
      "Performed the world's first documented rhinoplasty, cataract surgery, lithotomy (bladder stone removal), intestinal obstruction surgery, and limb prosthetics. Described 101 types of blunt instruments and 20 types of sharp instruments.",
  },
  {
    period: "Teaching Era",
    title: "Medical Education",
    description:
      "Established a comprehensive curriculum requiring students to practice on vegetables, leather bags, and cadavers before operating on humans. Defined 6 essential qualities of a surgeon: clear vision, steady hand, courage, knowledge of anatomy, experience, and compassion.",
  },
  {
    period: "Legacy",
    title: "Global Influence",
    description:
      "The Sushruta Samhita was translated into Arabic (c. 800 CE) as Kitab-i-Susrud, influencing medieval Islamic medicine. European surgeons learned rhinoplasty from Arabic translations of Sushruta's methods 14 centuries after his death.",
  },
];

export function BiographySection() {
  return (
    <section
      id="biography"
      data-ocid="biography.section"
      className="py-24 bg-background"
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
            The Ancient Sage
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider mb-4">
            BIOGRAPHY OF SUSHRUTA
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-border" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-24 bg-border" />
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Portrait + key facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="parchment-edge terracotta-border overflow-hidden mb-6">
              <img
                src="/assets/generated/sushruta-portrait.dim_800x600.jpg"
                alt="Sushruta, the ancient Indian physician and Father of Surgery"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="bg-card border border-border p-6">
              <h3 className="font-display text-xl text-primary tracking-wider mb-4 uppercase">
                Key Historical Facts
              </h3>
              <dl className="space-y-3">
                {[
                  ["Full Name", "Maharshi Sushruta (महर्षि सुश्रुत)"],
                  ["Period", "c. 800–600 BCE (Pre-Buddhist era)"],
                  ["Birthplace", "Varanasi (Kashi), ancient India"],
                  ["Lineage", "Son of sage Visvamitra"],
                  ["Guru", "Dhanvantari — god of medicine"],
                  ["School", "Dhanvantari School of Medicine"],
                  ["Language", "Sanskrit — primary language of the Samhita"],
                  ["Specialization", "Shalya Tantra (Surgery)"],
                  ["Major Work", "Sushruta Samhita (सुश्रुत संहिता)"],
                ].map(([term, def]) => (
                  <div
                    key={term}
                    className="flex gap-3 text-sm font-body border-b border-border/40 pb-2"
                  >
                    <dt className="text-muted-foreground tracking-wide min-w-[110px] shrink-0">
                      {term}:
                    </dt>
                    <dd className="text-foreground">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Narrative text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 font-body text-foreground/80 leading-relaxed text-base"
          >
            <h3 className="font-display text-2xl text-foreground tracking-wider uppercase">
              The Sushruta Samhita:
              <br />
              <span className="text-primary">A Legacy of Healing</span>
            </h3>

            <p>
              Sushruta's Samhita stands as one of humanity's most extraordinary
              intellectual achievements — a comprehensive surgical encyclopedia
              authored at a time when most civilizations lacked even basic
              anatomical knowledge. Written in classical Sanskrit, the text
              demonstrates a command of human anatomy so precise that modern
              surgeons recognize its descriptions of blood vessels, nerves, and
              tissue planes.
            </p>

            <p>
              The text is organized into five major sections (<em>Sthanams</em>
              ): Sutrasthana (general principles), Nidanasthana (pathology),
              Sharirasthana (anatomy), Kalpasthana (toxicology), and
              Chikitsasthana (therapeutics). A sixth section, the Uttaratantra,
              covers ophthalmology, ear-nose-throat conditions, pediatrics, and
              psychiatry — remarkable specializations for the ancient world.
            </p>

            <p>
              Sushruta classified diseases into two categories:{" "}
              <em>Agantuka</em> (external, requiring surgery) and{" "}
              <em>Sharira</em> (internal, requiring medicine). His definition of
              surgery — "the art that delivers immediate results through the
              direct application of instruments" — remains philosophically sound
              to this day.
            </p>

            <p>
              His anatomical studies, conducted on cadavers preserved in water
              and dissected layer by layer, revealed an understanding of 300
              distinct bones, 500 muscles, 700 veins, and 107 <em>Marma</em>{" "}
              (vital points) whose damage causes instant death. This knowledge
              of Marma points informed both surgical caution and, later, the
              martial art of Kalaripayattu.
            </p>

            <blockquote className="border-l-2 border-accent pl-4 italic text-foreground/70">
              "A physician who fails to enter the body of a patient with the
              light of knowledge and understanding can never treat diseases. He
              should first study carefully the entire body of his patient." —
              Sushruta Samhita, Sutrasthana
            </blockquote>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <h3 className="font-display text-2xl text-center text-foreground tracking-widest uppercase mb-10">
            Historical Timeline
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {timelineEvents.map((evt, i) => (
                <motion.div
                  key={evt.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} flex-row`}
                  data-ocid={`biography.timeline.item.${i + 1}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary border-2 border-accent rounded-full mt-2" />

                  {/* Content — left or right */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}
                  >
                    <div className="bg-card border border-border p-5 parchment-edge">
                      <span className="font-body text-xs tracking-widest uppercase text-accent block mb-1">
                        {evt.period}
                      </span>
                      <h4 className="font-display text-lg text-primary tracking-wider mb-2 uppercase">
                        {evt.title}
                      </h4>
                      <p className="font-body text-sm text-foreground/75 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
