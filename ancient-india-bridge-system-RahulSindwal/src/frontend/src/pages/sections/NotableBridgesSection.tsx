import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { NotableBridge } from "@/types/bridge";

const NOTABLE_BRIDGES: NotableBridge[] = [
  {
    id: "katni",
    name: "Katni River Stone Bridge",
    location: "Katni, Madhya Pradesh",
    period: "5th–7th century CE",
    type: "Stone Arch",
    description:
      "One of India's oldest documented stone arch bridges, spanning the Katni River. Remarkably well-preserved arch sections still visible.",
    significance:
      "Evidence of sophisticated masonry in Gupta-period central India",
  },
  {
    id: "kulhan",
    name: "Kulhan Bridge",
    location: "Near Varanasi, Uttar Pradesh",
    period: "6th century CE",
    type: "Stone Arch",
    description:
      "Ancient multi-arch stone bridge near the sacred city of Varanasi, connecting trade routes along the Gangetic plain.",
    significance: "Key trade and pilgrimage infrastructure of the Gupta era",
  },
  {
    id: "adi",
    name: "Adi Chunchanagiri Bridge",
    location: "Karnataka",
    period: "10th–12th century CE",
    type: "Stone Arch",
    description:
      "Remarkable Hoysala-era stone bridge with ornamental carvings on piers and parapets — combining engineering with artistic expression typical of the period.",
    significance:
      "Integration of structural and decorative arts in bridge design",
  },
  {
    id: "namdang",
    name: "Namdang Stone Bridge",
    location: "Sivasagar, Assam",
    period: "1703 CE (Ahom Kingdom)",
    type: "Stone Arch",
    description:
      "An extraordinary feat of Ahom engineering — this bridge was reportedly carved from a single piece of stone spanning the Namdang River. Built under King Sukhrungphaa, it still stands today.",
    significance:
      "One of the largest single-stone bridge constructions in India; engineering marvel of the Ahom Kingdom",
    photo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Namdang_stone_bridge.JPG/800px-Namdang_stone_bridge.JPG",
      alt: "Namdang Stone Bridge over the Namdang River in Sivasagar, Assam — an Ahom Kingdom engineering marvel from 1703 CE",
      caption:
        "Namdang Stone Bridge, Sivasagar, Assam — carved from a single piece of stone, 1703 CE (Ahom Kingdom)",
    },
  },
  {
    id: "gandak",
    name: "Gandak Pontoon Bridge",
    location: "Bihar/Nepal border",
    period: "300 BCE – 200 CE",
    type: "Pontoon",
    description:
      "Documented in Arthashastra as a critical crossing point for Mauryan trade and military operations. Maintained by the state at royal expense.",
    significance:
      "State-maintained infrastructure referenced in Chanakya's economic treatise",
  },
  {
    id: "jhelum",
    name: "Jhelum Boat Bridge",
    location: "Punjab (modern Pakistan)",
    period: "326 BCE",
    type: "Pontoon",
    description:
      "The bridge of boats that Alexander the Great encountered and reportedly used to cross the Jhelum River. Described by Arrian in his account of Alexander's Indian campaign.",
    significance:
      "Earliest foreign-documented Indian bridge — Alexander's crossing of the Hydaspes",
  },
  {
    id: "assam-chain",
    name: "Assam Iron Chain Bridge",
    location: "Assam, Northeast India",
    period: "5th–7th century CE",
    type: "Iron Chain Suspension",
    description:
      "Documented by Xuanzang (630 CE) as an ancient iron-chain suspension bridge. Maintained by local Ahom tradition. Technology predates Western iron suspension bridges by over 1,000 years.",
    significance:
      "Earliest documented iron-chain suspension bridge in world history",
  },
  {
    id: "godavari",
    name: "Godavari Timber Bridge",
    location: "Andhra Pradesh / Telangana",
    period: "200 BCE – 300 CE",
    type: "Timber Trestle",
    description:
      "Satavahana-period timber bridge across the Godavari delta, facilitating the Deccan trade routes that connected northern India with the southern ports.",
    significance:
      "Critical link in India's ancient maritime spice trade network",
  },
  {
    id: "rama-setu-rameswaram",
    name: "Rama Setu / Adam's Bridge",
    location: "Rameswaram, Tamil Nadu",
    period: "Mythological / Pre-Historic",
    type: "Natural/Legendary",
    description:
      "The chain of limestone shoals between India and Sri Lanka, described in detail in the Valmiki Ramayana as a man-made bridge constructed by Nala under Rama's direction.",
    significance:
      "World's most ancient engineering legend — geological evidence supports land connection",
  },
];

export function NotableBridgesSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="notable"
      className="py-20 stone-texture"
      style={{ background: "oklch(0.96 0.025 55)" }}
      data-ocid="notable.section"
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
            Documented Structures
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.32 0.12 22)" }}
          >
            Notable Ancient Bridges
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-sm" style={{ color: "oklch(0.72 0.12 75)" }}>
              ✦ ✦ ✦
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NOTABLE_BRIDGES.map((bridge, i) => (
            <NotableBridgeCard key={bridge.id} bridge={bridge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TYPE_COLORS: Record<string, string> = {
  "Stone Arch": "oklch(0.52 0.12 30)",
  Pontoon: "oklch(0.52 0.10 220)",
  "Iron Chain Suspension": "oklch(0.42 0.08 30)",
  "Timber Trestle": "oklch(0.55 0.12 70)",
  "Natural/Legendary": "oklch(0.58 0.12 75)",
};

function NotableBridgeCard({
  bridge,
  index,
}: { bridge: NotableBridge; index: number }) {
  const [cardRef, cardVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const typeColor = TYPE_COLORS[bridge.type] ?? "oklch(0.52 0.12 30)";

  return (
    <div
      ref={cardRef}
      className={`rounded-lg overflow-hidden border shadow-subtle transition-all duration-700 hover:shadow-elevated hover:-translate-y-1 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 0.07}s`,
        background: "oklch(0.97 0.02 58)",
        borderColor: "oklch(0.82 0.05 55)",
      }}
      data-ocid={`notable.item.${index + 1}`}
    >
      {/* Type color band */}
      <div className="h-1.5" style={{ background: typeColor }} />

      {/* Real photo for Namdang bridge */}
      {bridge.photo && (
        <div
          className="relative overflow-hidden"
          style={{ maxHeight: "160px" }}
        >
          <img
            src={bridge.photo.src}
            alt={bridge.photo.alt}
            loading="lazy"
            className="w-full object-cover"
            style={{
              maxHeight: "160px",
              filter: "sepia(20%) contrast(1.05) saturate(1.1)",
            }}
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const captionEl = el.nextElementSibling as HTMLElement | null;
              if (captionEl) captionEl.style.display = "none";
            }}
          />
          {/* Subtle gold border inset */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 0 1.5px oklch(0.72 0.12 75 / 0.35)",
            }}
          />
        </div>
      )}

      {bridge.photo && (
        <p
          className="text-xs font-body italic px-3 pt-1.5 pb-0 leading-snug"
          style={{ color: "oklch(0.52 0.08 48)" }}
        >
          {bridge.photo.caption}
        </p>
      )}

      <div className="p-4">
        <div className="mb-2">
          <span
            className="text-xs font-body font-semibold px-2 py-0.5 rounded-sm"
            style={{
              background: `${typeColor}/15`,
              color: typeColor,
            }}
          >
            {bridge.type}
          </span>
        </div>

        <h3
          className="font-display font-bold text-base mb-1 leading-snug"
          style={{ color: "oklch(0.35 0.12 25)" }}
        >
          {bridge.name}
        </h3>

        <p
          className="text-xs font-body mb-0.5"
          style={{ color: "oklch(0.58 0.08 52)" }}
        >
          📍 {bridge.location}
        </p>
        <p
          className="text-xs font-body mb-3"
          style={{ color: "oklch(0.55 0.06 48)" }}
        >
          📅 {bridge.period}
        </p>

        <p
          className="text-xs font-body leading-relaxed mb-3"
          style={{ color: "oklch(0.44 0.04 42)" }}
        >
          {bridge.description}
        </p>

        <div
          className="text-xs font-body italic px-2 py-1.5 rounded border-l-2"
          style={{
            background: "oklch(0.94 0.03 55)",
            borderColor: "oklch(0.72 0.12 75 / 0.5)",
            color: "oklch(0.42 0.06 42)",
          }}
        >
          {bridge.significance}
        </div>
      </div>
    </div>
  );
}
