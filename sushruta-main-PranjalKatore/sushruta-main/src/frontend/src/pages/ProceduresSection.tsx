import { motion } from "motion/react";

const procedures = [
  {
    number: "01",
    name: "Rhinoplasty",
    sanskrit: "Nasasandhana",
    type: "Reconstructive Surgery",
    color: "border-primary",
    description:
      "World's first documented nasal reconstruction using a pedicled forehead skin flap. The nose was reconstructed by measuring the lost portion, creating a template from a leaf, cutting a pedicle flap from the forehead, and suturing it in place after freshening the wound edges.",
    steps: [
      "Measurement of defect with leaf template",
      "Forehead flap outlined maintaining pedicle",
      "Wound edges freshened and bleeding induced",
      "Flap rotated 180° to cover defect",
      "Nostril tubes (bamboo/reed) inserted to maintain patency",
      "Suturing with fine thread",
      "Pedicle divided at 10–14 days when flap viable",
    ],
    instruments: [
      "Mandalagra (crescent knife)",
      "Suchi (needles)",
      "Sandamsha (forceps)",
    ],
    outcome:
      "Functional nose with acceptable cosmesis; pedicle flap technique still used today",
  },
  {
    number: "02",
    name: "Cataract Surgery",
    sanskrit: "Timira Chikitsa",
    type: "Ophthalmic Surgery",
    color: "border-secondary",
    description:
      "Sushruta described 76 diseases of the eye, including distinct types of cataract. The couching procedure (Timiraharana) involved needling the clouded lens and depressing it below the visual axis to restore vision — an operation performed 2,500 years before the modern cataract extraction.",
    steps: [
      "Patient prepared with 3 days of restricted diet",
      "Eye anesthesia with herbal preparations and pressure",
      "Anjana Shalaka (probe) introduced at temporal canthus",
      "Needle directed to lens with steady controlled pressure",
      "Lens couched (displaced inferiorly) below the visual axis",
      "Eye irrigated with medicated milk (ksheera)",
      "Eye patched with cotton soaked in sesame oil",
    ],
    instruments: [
      "Anjana Shalaka (couching needle)",
      "Timirashashtra (eye knife)",
    ],
    outcome:
      "Restoration of functional vision; technically still performed in parts of South Asia",
  },
  {
    number: "03",
    name: "Lithotomy",
    sanskrit: "Ashmari Chedana",
    type: "Urological Surgery",
    color: "border-accent",
    description:
      "Bladder stone extraction through the perineum — one of the most technically demanding operations in ancient surgery. Sushruta's description of the lateral perineal approach anticipated the operation that European surgeons called 'lithotomy' (stone cutting) 2,000 years later.",
    steps: [
      "Rectal examination to confirm stone position",
      "Patient positioned in lithotomy position",
      "Perineal incision lateral to midline raphe",
      "Stone localized by finger in rectum guiding incision",
      "Stone extracted with forceps or sound",
      "Wound irrigated with astringent decoctions",
      "Wound managed open (secondary intention healing)",
    ],
    instruments: [
      "Sandamsha (forceps)",
      "Lekhana (scraper)",
      "Vrishmukha (cannula)",
    ],
    outcome:
      "Stone removal with functional bladder preservation; perineal approach now superseded by endoscopy",
  },
  {
    number: "04",
    name: "Intestinal Obstruction",
    sanskrit: "Udavarta Chedana",
    type: "Abdominal Surgery",
    color: "border-primary",
    description:
      "Described the management of intestinal obstruction including recognition of intussusception, volvulus, and internal herniation. Sushruta described reduction of hernias and the concept of bowel anastomosis using large black ants whose mandibles were used as natural staples.",
    steps: [
      "Clinical diagnosis by palpation and bowel sounds",
      "Supine incision in the abdominal wall",
      "Identification of obstructed bowel segment",
      "Reduction of obstruction or resection if gangrenous",
      "Bowel anastomosis using ant-bite technique (myrmecia method)",
      "Ant bodies severed leaving mandibles as clips",
      "Abdominal wall closure in layers",
    ],
    instruments: ["Mandalagra", "Kartarika (scissors)", "Suchi (needles)"],
    outcome:
      "First documented bowel anastomosis technique; ant-bite technique validated as functional by modern biomechanical studies",
  },
  {
    number: "05",
    name: "Earlobe Reconstruction",
    sanskrit: "Karna Sandhi",
    type: "Reconstructive Surgery",
    color: "border-secondary",
    description:
      "Described 15 different techniques for earlobe repair and reconstruction — ranging from simple suture repair of split earlobes to complex pedicle flap reconstruction of completely avulsed ear tissue. The classification of defects and matching repair techniques demonstrates systematic surgical thinking.",
    steps: [
      "Classification of defect (one of 15 described types)",
      "Selection of appropriate repair method",
      "Wound edges freshened to bleeding dermis",
      "Flap or direct closure as dictated by defect size",
      "Suturing with fine silk or cotton thread",
      "Earring hole reconstructed and stented",
      "Post-operative application of medicated oil",
    ],
    instruments: ["Mandalagra", "Suchi (fine suture needle)", "Anjana Shalaka"],
    outcome:
      "Functionally and cosmetically restored earlobe; Sushruta's 15-type classification remains clinically useful",
  },
  {
    number: "06",
    name: "Hemorrhoid Surgery",
    sanskrit: "Arsha Chedana",
    type: "Colorectal Surgery",
    color: "border-accent",
    description:
      "Described both conservative and surgical management of hemorrhoids including excision, cauterization, ligation, and use of kshara (caustic paste derived from plant alkalis). The kshara karma technique — using plant alkaline paste to chemically destroy hemorrhoidal tissue — remains in use in Ayurvedic surgery today.",
    steps: [
      "Classification of hemorrhoid type and grade",
      "Choice of kshara (chemical), agni (heat), or shastra (excision)",
      "Patient positioned in lithotomy position",
      "For kshara: application of alkaline paste under direct vision",
      "For surgical: excision with ligation of vascular pedicle",
      "Post-operative sitz baths in medicated decoctions",
      "Dietary management during healing",
    ],
    instruments: [
      "Lekhana (scraper)",
      "Kartarika (scissors)",
      "Upayamtika (speculum)",
    ],
    outcome:
      "Kshara sutra (alkali thread ligation) validated in modern randomized controlled trials as effective for fistula-in-ano",
  },
  {
    number: "07",
    name: "Fistula-in-Ano",
    sanskrit: "Bhagandara Chedana",
    type: "Colorectal Surgery",
    color: "border-primary",
    description:
      "Described nine types of perianal fistulae with remarkable accuracy matching modern Parks' classification. The kshara sutra technique — threading an alkaline medicated thread through the fistula tract — remains in use as a recognized treatment in the 21st century after validation in modern clinical trials.",
    steps: [
      "Probing to identify full tract anatomy",
      "Kshara sutra (medicated thread) prepared with coating of latex and turmeric",
      "Thread threaded through external to internal opening",
      "Ends tied loosely, creating gradual cutting action",
      "Thread replaced weekly as it cuts through tissue slowly",
      "Sphincter cut slowly (weeks) allowing fibrous healing in track",
      "Complete fistula cure without sphincter incontinence",
    ],
    instruments: [
      "Shalaka (probe)",
      "Suchi (needle for threading)",
      "Sandamsha",
    ],
    outcome:
      "Kshara sutra validated by multiple randomized trials; recommended in colorectal surgery guidelines",
  },
  {
    number: "08",
    name: "Amputations",
    sanskrit: "Sandhana Karma",
    type: "Traumatic / Vascular Surgery",
    color: "border-secondary",
    description:
      "Described traumatic amputations, battlefield surgery, and the management of gangrenous limbs. Sushruta distinguished between amputations for trauma, infection, and vascular compromise — and described fashioning of prosthetic limbs from wood and iron for post-amputation rehabilitation, representing the world's first prosthetics.",
    steps: [
      "Assessment of tissue viability and gangrenous extent",
      "Tourniquet application using a tight rope of bark above lesion",
      "Level selection: through viable tissue only",
      "Circular skin incision creating skin flap",
      "Bone division with Karapatra (bone saw)",
      "Wound cauterized with medicated oils and fire",
      "Prosthetic fitting: carved wooden foot or iron extension",
    ],
    instruments: ["Karapatra (bone saw)", "Mandalagra", "Sandamsha"],
    outcome:
      "Post-amputation prosthetics represent the earliest documented limb prostheses in history",
  },
];

export function ProceduresSection() {
  return (
    <section
      id="procedures"
      data-ocid="procedures.section"
      className="py-24 bg-muted/30"
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
            Ashtavidha Shastrakarma
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider mb-4">
            SURGICAL PROCEDURES
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sushruta classified surgery into 8 fundamental types (
            <em>Ashtavidha Shastrakarma</em>): Chedana (excision), Bhedana
            (incision), Lekhana (scraping), Vedhana (puncturing), Esana
            (probing), Aharya (extraction), Visravana (draining), and Sivana
            (suturing). Each procedure below represents a documented achievement
            centuries ahead of global medicine.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24 bg-border" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-24 bg-border" />
          </div>
        </motion.div>

        {/* Procedure cards */}
        <div className="space-y-8">
          {procedures.map((proc, i) => (
            <motion.div
              key={proc.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              data-ocid={`procedures.card.${i + 1}`}
              className={`bg-card border-l-4 ${proc.color} border-t border-r border-b border-border parchment-edge`}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left: identity */}
                <div className="lg:border-r border-border p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-4xl text-primary/20 leading-none">
                      {proc.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-primary tracking-wider uppercase">
                        {proc.name}
                      </h3>
                      <p className="font-display italic text-sm text-muted-foreground">
                        {proc.sanskrit}
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-xs tracking-widest uppercase text-accent mb-4">
                    {proc.type}
                  </p>
                  <p className="font-body text-sm text-foreground/75 leading-relaxed mb-4">
                    {proc.description}
                  </p>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Instruments Used:
                    </p>
                    <ul className="space-y-1">
                      {proc.instruments.map((inst) => (
                        <li
                          key={inst}
                          className="font-body text-xs text-foreground/70 flex items-center gap-2"
                        >
                          <span className="text-accent">›</span> {inst}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Middle: steps */}
                <div className="lg:border-r border-border border-t lg:border-t-0 p-6">
                  <h4 className="font-display text-sm text-primary tracking-widest uppercase mb-4">
                    Operative Steps
                  </h4>
                  <ol className="space-y-2">
                    {proc.steps.map((step, si) => (
                      <li
                        key={step}
                        className="flex gap-3 font-body text-sm text-foreground/75"
                      >
                        <span className="font-display text-accent shrink-0 min-w-[20px]">
                          {si + 1}.
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Right: outcome */}
                <div className="border-t lg:border-t-0 p-6 bg-muted/20">
                  <h4 className="font-display text-sm text-primary tracking-widest uppercase mb-4">
                    Clinical Outcome
                  </h4>
                  <p className="font-body text-sm text-foreground/75 leading-relaxed">
                    {proc.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
