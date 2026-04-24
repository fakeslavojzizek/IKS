import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TECHNIQUES = [
  {
    id: "arch",
    icon: "🏛️",
    title: "Arch Mechanics",
    description:
      "Ancient Indian engineers independently discovered the semicircular and pointed arch. By distributing compressive forces along the curved arch profile to the abutments, they could span far greater widths than post-and-lintel construction.",
    detail:
      "Load converts to pure compression — no bending stress in properly shaped arch.",
  },
  {
    id: "interlocking",
    icon: "🧱",
    title: "Interlocking Stonework",
    description:
      "Stones were cut with precision to create self-locking joints. No cement required — the geometry itself held the structure together. Voussoir stones in arches were cut with diverging faces that tightened under load.",
    detail:
      "Friction and geometry provide structural integrity without mortar.",
  },
  {
    id: "mortar",
    icon: "⚗️",
    title: "Lime-Jaggery-Hemp Mortar",
    description:
      "When mortar was used, ancient Indian engineers mixed slaked lime with jaggery (raw cane sugar), hemp fiber, and sometimes egg whites or rice water. This organic-mineral composite had extraordinary compressive strength and was waterproof.",
    detail:
      "Surkhi (brick powder) + lime creates hydraulic mortar that hardens underwater.",
  },
  {
    id: "foundation",
    icon: "⚒️",
    title: "Foundation Engineering",
    description:
      "Piers were founded on bedrock wherever possible. In alluvial plains, cofferdams were built using clay embankments to dewater foundation excavations — a technique also described in Arthashastra for river engineering works.",
    detail: "Pile foundations using pointed timber stakes driven to refusal.",
  },
  {
    id: "load",
    icon: "⚖️",
    title: "Load Distribution",
    description:
      "Spandrel fill of rubble and lime concrete above arches distributed live loads across the arch barrel. Rubble fill was graded — heavier material at the crown, lighter toward the haunches — demonstrating intuitive understanding of load paths.",
    detail:
      "Triangular distribution zones recognized without formal stress analysis.",
  },
  {
    id: "iron",
    icon: "🔩",
    title: "Iron Clamps & Dowels",
    description:
      "Iron technology in India dates to 1800 BCE. Large stone blocks were connected using iron dowels set in lead. Iron butterfly clamps (similar to Roman 'crampons') were used in stone bridges, temples, and monuments across the subcontinent.",
    detail:
      "The 7-meter Delhi Iron Pillar (402 CE) demonstrates mastery of wrought iron.",
  },
];

export function EngineeringSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="engineering"
      className="py-20"
      style={{ background: "oklch(0.98 0.02 55)" }}
      data-ocid="engineering.section"
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
            Ancient Knowledge
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.32 0.12 22)" }}
          >
            Engineering Techniques
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
            Ancient Indian engineers solved complex structural problems through
            millennia of empirical knowledge, passed down in treatises, guild
            traditions, and direct apprenticeship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNIQUES.map((tech, i) => (
            <TechCard key={tech.id} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({
  tech,
  index,
}: { tech: (typeof TECHNIQUES)[0]; index: number }) {
  const [cardRef, cardVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={cardRef}
      className={`p-6 rounded-xl border-2 shadow-subtle transition-all duration-700 hover:shadow-elevated hover:-translate-y-1 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 0.08}s`,
        background: "oklch(0.96 0.025 58)",
        borderColor: "oklch(0.82 0.05 55)",
      }}
      data-ocid={`engineering.item.${index + 1}`}
    >
      <div className="text-3xl mb-3">{tech.icon}</div>
      <h3
        className="font-display font-bold text-xl mb-2"
        style={{ color: "oklch(0.35 0.12 25)" }}
      >
        {tech.title}
      </h3>
      <p
        className="text-sm font-body leading-relaxed mb-4"
        style={{ color: "oklch(0.42 0.04 40)" }}
      >
        {tech.description}
      </p>
      <div
        className="text-xs font-body px-3 py-2 rounded border-l-2"
        style={{
          background: "oklch(0.94 0.03 55)",
          borderColor: "oklch(0.52 0.12 30)",
          color: "oklch(0.42 0.06 40)",
        }}
      >
        <span className="font-mono" style={{ color: "oklch(0.45 0.12 28)" }}>
          ▸{" "}
        </span>
        {tech.detail}
      </div>
    </div>
  );
}
