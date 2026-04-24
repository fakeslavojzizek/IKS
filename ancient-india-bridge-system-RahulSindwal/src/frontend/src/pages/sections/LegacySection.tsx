import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ROOT_BRIDGE_PHOTO = {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Living_Root_Bridge.jpg/800px-Living_Root_Bridge.jpg",
  alt: "Living root bridge near Mawlynnong village, Meghalaya — grown from Ficus elastica tree roots, a centuries-old tradition of bio-engineering",
  caption:
    "Living root bridge near Mawlynnong village, Meghalaya — grown from Ficus elastica roots, a tradition stretching back centuries",
};

const LEGACY_ITEMS = [
  {
    id: "hydraulic-mortar",
    icon: "🧪",
    title: "Hydraulic Mortar Tradition",
    description:
      "The lime-jaggery-surkhi mortar of ancient India influenced Islamic architecture in India and eventually European builders encountered this tradition through colonial-era engineering surveys.",
    era: "400 BCE onwards",
  },
  {
    id: "arch-tradition",
    icon: "🏛️",
    title: "Arch to Mughal Architecture",
    description:
      "The pointed arch tradition in Indian bridge building flowed into the magnificent arched gateways and bridges of the Mughal period — the arched bridge at Jaunpur (1438 CE) is a direct descendant.",
    era: "Mughal Period (1526–1857)",
  },
  {
    id: "iron-tradition",
    icon: "⚙️",
    title: "Iron Metallurgy Influence",
    description:
      "India's ancient iron working tradition — producing wootz steel and high-purity wrought iron — was transmitted to Persia, the Arab world, and eventually Europe as Damascus steel and Toledo steel traditions.",
    era: "300 BCE – 1000 CE",
  },
  {
    id: "british-survey",
    icon: "📐",
    title: "British Colonial Engineering Studies",
    description:
      "British engineers in the 18th–19th centuries extensively documented surviving ancient Indian bridges. Col. Colin Mackenzie's 1820s surveys and the Archaeological Survey of India (est. 1861) catalogued hundreds of ancient bridge remains.",
    era: "18th–19th century",
  },
  {
    id: "living-bridges",
    icon: "🌿",
    title: "Living Root Bridges",
    description:
      "The Khasi tribe of Meghalaya still trains the aerial roots of the Indian rubber tree (Ficus elastica) across streams — creating living bridges. Some are 500+ years old. This bio-engineering tradition may represent the oldest continuously practiced bridge-building method.",
    era: "500 BCE? to present",
    photo: ROOT_BRIDGE_PHOTO,
  },
  {
    id: "modern",
    icon: "🔬",
    title: "Modern Archaeological Research",
    description:
      "IIT institutes, the Archaeological Survey of India, and international researchers continue to study ancient Indian bridges. The lime-jaggery mortar has been analyzed and its properties rival modern Portland cement in longevity.",
    era: "20th–21st century",
  },
];

export function LegacySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="legacy"
      className="py-20 stone-texture"
      style={{ background: "oklch(0.26 0.10 22)" }}
      data-ocid="legacy.section"
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
            Enduring Impact
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.92 0.06 70)" }}
          >
            Legacy & Influence
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-sm" style={{ color: "oklch(0.72 0.12 75)" }}>
              ✦ ✦ ✦
            </span>
          </div>
          <p
            className="mt-4 text-base max-w-xl mx-auto font-body leading-relaxed"
            style={{ color: "oklch(0.70 0.04 55)" }}
          >
            Ancient Indian bridge engineering left a profound legacy — in
            materials science, architectural tradition, living bio-engineering,
            and the enduring cultural memory of Rama Setu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEGACY_ITEMS.map((item, i) => (
            <LegacyCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <ClosingStatement isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}

function ClosingStatement({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div
        className="p-8 rounded-xl border-2"
        style={{
          background: "oklch(0.30 0.10 22)",
          borderColor: "oklch(0.72 0.12 75 / 0.35)",
        }}
      >
        <p
          className="font-display text-lg md:text-xl font-medium italic leading-relaxed"
          style={{ color: "oklch(0.82 0.06 70)" }}
        >
          "The ancient Indians built bridges not just to cross rivers, but to
          connect civilizations, enable commerce, express devotion, and
          demonstrate the highest mastery of the engineering art. Their
          knowledge, passed through texts and guild traditions, quietly shaped
          the world's built heritage."
        </p>
        <p
          className="mt-4 text-sm font-body"
          style={{ color: "oklch(0.62 0.06 58)" }}
        >
          — Paraphrased from ASI Survey Findings, 1920
        </p>
      </div>
    </div>
  );
}

type LegacyItemType = (typeof LEGACY_ITEMS)[0];

function LegacyCard({ item, index }: { item: LegacyItemType; index: number }) {
  const [cardRef, cardVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={cardRef}
      className={`rounded-xl border overflow-hidden transition-all duration-700 hover:-translate-y-1 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 0.08}s`,
        background: "oklch(0.32 0.10 22)",
        borderColor: "oklch(0.72 0.12 75 / 0.25)",
      }}
      data-ocid={`legacy.item.${index + 1}`}
    >
      {/* Real photo for the Living Root Bridges card */}
      {item.photo && (
        <div
          className="relative overflow-hidden"
          style={{ maxHeight: "160px" }}
        >
          <img
            src={item.photo.src}
            alt={item.photo.alt}
            loading="lazy"
            className="w-full object-cover"
            style={{
              maxHeight: "160px",
              filter: "sepia(15%) saturate(1.15) contrast(1.05)",
            }}
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const caption = el.nextElementSibling as HTMLElement | null;
              if (caption) caption.style.display = "none";
            }}
          />
          {/* Subtle border inset */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 0 1.5px oklch(0.72 0.12 75 / 0.35)",
            }}
          />
        </div>
      )}

      {item.photo && (
        <p
          className="text-xs font-body italic px-4 pt-2 pb-0 leading-snug"
          style={{ color: "oklch(0.62 0.06 58)" }}
        >
          {item.photo.caption}
        </p>
      )}

      <div className="p-6">
        <div className="text-3xl mb-3">{item.icon}</div>
        <h3
          className="font-display font-bold text-xl mb-1"
          style={{ color: "oklch(0.82 0.08 68)" }}
        >
          {item.title}
        </h3>
        <p
          className="text-xs font-body font-semibold mb-3"
          style={{ color: "oklch(0.68 0.12 65)" }}
        >
          {item.era}
        </p>
        <p
          className="text-sm font-body leading-relaxed"
          style={{ color: "oklch(0.70 0.04 55)" }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
