import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Material } from "@/types/bridge";

const MATERIALS: Material[] = [
  {
    id: "stone",
    name: "Stone",
    category: "Primary Structure",
    uses: "Arches, piers, foundations, parapets",
    description:
      "Granite, sandstone, and schist were quarried and dressed to precise dimensions. Granite was preferred for structural elements due to compressive strength of 100–250 MPa. Stone from distant quarries was transported on timber rollers and river barges.",
  },
  {
    id: "timber",
    name: "Timber",
    category: "Primary Structure",
    uses: "Trestle frames, decking, falsework, piling",
    description:
      "Teak and sal were the premium timbers — naturally oiled and rot-resistant. Bamboo served as light structural framing. Ancient texts specify seasoning requirements: timber should be dried for 2–3 years before structural use.",
  },
  {
    id: "lime-mortar",
    name: "Lime-Jaggery Mortar",
    category: "Binding Agent",
    uses: "Masonry joints, waterproofing, plaster",
    description:
      "Slaked lime mixed with jaggery (raw cane sugar), hemp fiber, and rice water created an extraordinarily durable mortar. The sugar accelerates carbonation while fiber provides tensile reinforcement. Surkhi (ground brick) added made it hydraulic — it hardened underwater.",
  },
  {
    id: "iron",
    name: "Wrought Iron",
    category: "Connectors & Cables",
    uses: "Clamps, dowels, chain cables, anchors",
    description:
      "India's iron working tradition dates to 1800 BCE in the Gangetic plain. Wrought iron with very low phosphorus content (unlike many ancient irons) showed excellent corrosion resistance. The 1,600-year-old Delhi Iron Pillar proves the mastery of Indian metallurgy.",
  },
  {
    id: "rope",
    name: "Fiber Rope",
    category: "Suspension Elements",
    uses: "Main cables, lashing, railings, deck support",
    description:
      "Coir (coconut husk fiber) was the premier rope material — naturally waterproof, salt-resistant, and flexible. Three-strand twisted coir ropes of 50mm diameter could sustain several tonnes. Jute, hemp, and bamboo strips were also widely used for lashing.",
  },
  {
    id: "bamboo",
    name: "Bamboo",
    category: "Versatile Material",
    uses: "Scaffolding, light deck, framing, falsework",
    description:
      "Bamboo's tensile strength rivals mild steel at 400 MPa ultimate tensile strength. Used as scaffolding during construction of stone bridges, as deck planking for temporary crossings, and as complete structural framing in Himalayan rope bridges.",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Primary Structure": "oklch(0.52 0.12 30)",
  "Binding Agent": "oklch(0.58 0.10 68)",
  "Connectors & Cables": "oklch(0.42 0.08 30)",
  "Suspension Elements": "oklch(0.52 0.10 220)",
  "Versatile Material": "oklch(0.55 0.12 72)",
};

function MaterialCard({
  material,
  index,
}: { material: Material; index: number }) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex gap-4 p-5 rounded-xl border shadow-subtle transition-all duration-700 hover:shadow-elevated ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: `${index * 0.08}s`,
        background: "oklch(0.97 0.02 58)",
        borderColor: "oklch(0.82 0.05 55)",
      }}
      data-ocid={`materials.item.${index + 1}`}
    >
      {/* Color indicator */}
      <div
        className="shrink-0 w-1 self-stretch rounded-full"
        style={{
          background:
            CATEGORY_COLORS[material.category] ?? "oklch(0.52 0.12 30)",
        }}
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3
            className="font-display font-bold text-lg"
            style={{ color: "oklch(0.35 0.12 25)" }}
          >
            {material.name}
          </h3>
          <span
            className="text-xs font-body font-semibold px-2 py-0.5 rounded-sm"
            style={{
              background: `${CATEGORY_COLORS[material.category] ?? "oklch(0.52 0.12 30)"}/12`,
              color:
                CATEGORY_COLORS[material.category] ?? "oklch(0.52 0.12 30)",
            }}
          >
            {material.category}
          </span>
        </div>
        <p
          className="text-xs font-body font-semibold mb-2"
          style={{ color: "oklch(0.58 0.08 52)" }}
        >
          Uses: {material.uses}
        </p>
        <p
          className="text-sm font-body leading-relaxed"
          style={{ color: "oklch(0.42 0.04 40)" }}
        >
          {material.description}
        </p>
      </div>
    </div>
  );
}

export function MaterialsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="materials"
      className="py-20"
      style={{ background: "oklch(0.98 0.02 55)" }}
      data-ocid="materials.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "oklch(0.68 0.22 65)" }}
          >
            Raw Materials
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.32 0.12 22)" }}
          >
            Materials Used
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-sm" style={{ color: "oklch(0.72 0.12 75)" }}>
              ✦ ✦ ✦
            </span>
          </div>
          <p
            className="mt-4 text-base max-w-xl mx-auto font-body"
            style={{ color: "oklch(0.42 0.04 40)" }}
          >
            Ancient Indian bridge builders worked with a sophisticated palette
            of materials — combining stone, timber, iron, fiber, and mineral
            compounds in ways that produced remarkably durable structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MATERIALS.map((mat, i) => (
            <MaterialCard key={mat.id} material={mat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
