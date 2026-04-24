import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { BridgeType } from "@/types/bridge";
import type { ReactElement } from "react";

const BRIDGE_TYPES: BridgeType[] = [
  {
    id: "rope",
    name: "Rope Bridges",
    subtitle: "Jula / Jhula",
    era: "Pre-Vedic to Present",
    region: "Himalayan Regions",
    description:
      "Woven from coir (coconut fiber), jute, or bamboo, these suspension bridges spanned deep gorges in the Himalayas and northeastern India. Some could carry laden elephants. The Inca bridges were strikingly similar — suggesting parallel discovery.",
    material: ["Coir rope", "Bamboo", "Jute fiber", "Timber planks"],
    structuralFeature: "Catenary tension suspension with woven deck",
  },
  {
    id: "stone-arch",
    name: "Stone Arch Bridges",
    subtitle: "Pashaanu Setu",
    era: "300 BCE – 1200 CE",
    region: "Deccan, South India",
    description:
      "Masterworks of ancient Indian masonry. Voussoir arch construction using precisely cut interlocking stones without cement. The arch transferred compressive loads to massive stone piers. Some in South India still carry traffic today.",
    material: [
      "Granite blocks",
      "Sandstone voussoirs",
      "Lime mortar",
      "Iron clamps",
    ],
    structuralFeature:
      "Semicircular or pointed arch with interlocking voussoirs",
  },
  {
    id: "timber",
    name: "Timber Trestle Bridges",
    subtitle: "Kashtha Setu",
    era: "1500 BCE – 1000 CE",
    region: "Gangetic Plain, Assam",
    description:
      "Built from seasoned teak, sal, or bamboo on trestle supports. Referenced in the Arthashastra as structures requiring state maintenance. Used extensively for military crossings and trade routes across seasonal rivers.",
    material: ["Teak", "Sal timber", "Bamboo lashing", "Iron spikes"],
    structuralFeature: "Trestle bent construction with cross-bracing",
  },
  {
    id: "pontoon",
    name: "Pontoon Bridges",
    subtitle: "Naukasetu",
    era: "600 BCE – 1700 CE",
    region: "Gangetic Plain, Punjab",
    description:
      "Temporary or semi-permanent bridges using boats or hollow log floats lashed together as a pontoon deck. Described in Arthashastra and Mahabharata. Alexander the Great encountered such bridges crossing the Indus. Used by Mughal armies.",
    material: ["Wooden boats", "Hollow logs", "Iron chains", "Hemp rope"],
    structuralFeature: "Floating pontoon deck with tension anchor cables",
  },
  {
    id: "chain",
    name: "Chain/Iron Suspension",
    subtitle: "Loha Setu",
    era: "500 BCE – 800 CE",
    region: "Eastern India, Assam",
    description:
      "Ancient Indian smiths forged iron chain suspension bridges centuries before modern suspension bridge engineering. Described in Arthashastra. Chinese pilgrim Xuanzang documented iron-chain bridges in India in the 7th century CE.",
    material: [
      "Wrought iron chains",
      "Stone towers",
      "Timber deck",
      "Iron anchors",
    ],
    structuralFeature: "Catenary iron chain main cables with timber deck",
  },
];

// Real photo data for specific bridge types
const BRIDGE_PHOTOS: Record<
  string,
  { src: string; caption: string; alt: string }
> = {
  rope: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Traditional_cane_bridge_over_the_Rangeet_1878.jpg/800px-Traditional_cane_bridge_over_the_Rangeet_1878.jpg",
    caption:
      "Traditional cane bridge over the Rangeet River, Darjeeling — illustrated by Marianne North, 1878",
    alt: "Historical painting of a traditional cane rope bridge over the Rangeet River, Darjeeling, 1878 by Marianne North",
  },
  chain: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sringeri_Hanging_Bridge.jpg/337px-Sringeri_Hanging_Bridge.jpg",
    caption:
      "Hanging suspension bridge over the Tunga River at Sringeri, Karnataka",
    alt: "Sringeri hanging suspension bridge over the Tunga River, Karnataka",
  },
};

const ROPE_HANGERS = [0, 1, 2, 3, 4, 5, 6, 7];
const TIMBER_TRESTLES = [40, 100, 160, 200];
const PONTOON_POSITIONS = [20, 70, 120, 170, 210];
const PONTOON_DECK_PLANKS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const CHAIN_RODS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const ROPE_DECK_X = [
  22, 35, 48, 61, 74, 87, 100, 113, 126, 139, 152, 165, 178, 191, 204, 217,
];
const TIMBER_PLANK_X = [
  10, 22, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142, 154, 166, 178, 190, 202,
  214,
];

function RopeBridgeSVG() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      role="img"
      aria-label="Rope bridge illustration"
    >
      <title>Rope bridge illustration</title>
      <rect width="240" height="120" fill="oklch(0.55 0.08 210 / 0.3)" />
      <polygon
        points="0,80 40,30 80,60 120,20 160,55 200,25 240,50 240,80"
        fill="oklch(0.42 0.06 175 / 0.4)"
      />
      <rect
        x="0"
        y="80"
        width="240"
        height="40"
        fill="oklch(0.52 0.10 220 / 0.6)"
      />
      <path
        d="M 20 40 Q 120 75 220 40"
        fill="none"
        stroke="oklch(0.52 0.10 38)"
        strokeWidth="3"
      />
      <path
        d="M 20 36 Q 120 71 220 36"
        fill="none"
        stroke="oklch(0.55 0.10 40)"
        strokeWidth="2"
      />
      {ROPE_DECK_X.map((x, idx) => (
        <rect
          key={`deck-${x}`}
          x={x}
          y={55 + Math.sin(idx * 0.4) * 4}
          width="10"
          height="4"
          rx="1"
          fill="oklch(0.62 0.09 42)"
          stroke="oklch(0.52 0.08 38)"
          strokeWidth="0.5"
        />
      ))}
      {ROPE_HANGERS.map((i) => {
        const t = (i + 0.5) / 8;
        const rx = 20 + t * 200;
        const ry = 37 + Math.sin(Math.PI * t) * 38;
        return (
          <line
            key={`hanger-${i}`}
            x1={rx}
            y1={ry}
            x2={rx}
            y2={ry + 20}
            stroke="oklch(0.52 0.10 38 / 0.8)"
            strokeWidth="1.5"
          />
        );
      })}
      <rect
        x="12"
        y="28"
        width="16"
        height="55"
        fill="oklch(0.48 0.08 36)"
        rx="2"
      />
      <rect
        x="212"
        y="28"
        width="16"
        height="55"
        fill="oklch(0.48 0.08 36)"
        rx="2"
      />
    </svg>
  );
}

function StoneArchSVG() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      role="img"
      aria-label="Stone arch bridge illustration"
    >
      <title>Stone arch bridge illustration</title>
      <rect width="240" height="120" fill="oklch(0.62 0.08 210 / 0.25)" />
      <rect
        x="0"
        y="80"
        width="240"
        height="40"
        fill="oklch(0.52 0.10 220 / 0.6)"
      />
      <rect x="30" y="55" width="36" height="65" fill="oklch(0.55 0.09 40)" />
      <rect x="174" y="55" width="36" height="65" fill="oklch(0.55 0.09 40)" />
      <path
        d="M 30 60 Q 120 12 210 60"
        fill="oklch(0.60 0.10 44)"
        stroke="oklch(0.45 0.10 36)"
        strokeWidth="2"
      />
      <rect
        x="22"
        y="48"
        width="196"
        height="14"
        fill="oklch(0.65 0.08 48)"
        stroke="oklch(0.45 0.09 36)"
        strokeWidth="1.5"
      />
      <polygon
        points="116,14 124,14 122,30 118,30"
        fill="oklch(0.72 0.12 75)"
      />
      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={`joint-${t}`}
          x1={30 + t * 180}
          y1={60 - Math.sin(Math.PI * t) * 48}
          x2={30 + t * 180 + 6}
          y2={60 - Math.sin(Math.PI * t) * 36}
          stroke="oklch(0.42 0.08 35 / 0.6)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

function TimberTrestleSVG() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      role="img"
      aria-label="Timber trestle bridge illustration"
    >
      <title>Timber trestle bridge illustration</title>
      <rect width="240" height="120" fill="oklch(0.70 0.06 80 / 0.3)" />
      <rect
        x="0"
        y="78"
        width="240"
        height="42"
        fill="oklch(0.52 0.10 220 / 0.6)"
      />
      {TIMBER_TRESTLES.map((x) => (
        <g key={`trestle-${x}`}>
          <line
            x1={x - 10}
            y1={46}
            x2={x - 18}
            y2={78}
            stroke="oklch(0.52 0.14 38)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1={x + 10}
            y1={46}
            x2={x + 18}
            y2={78}
            stroke="oklch(0.52 0.14 38)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1={x - 18}
            y1={60}
            x2={x + 18}
            y2={60}
            stroke="oklch(0.48 0.12 36)"
            strokeWidth="3"
          />
        </g>
      ))}
      <rect
        x="10"
        y="40"
        width="220"
        height="10"
        fill="oklch(0.55 0.12 38)"
        rx="2"
      />
      <rect
        x="10"
        y="52"
        width="220"
        height="4"
        fill="oklch(0.50 0.12 36)"
        rx="1"
      />
      {TIMBER_PLANK_X.map((x) => (
        <rect
          key={`plank-${x}`}
          x={x}
          y={34}
          width="10"
          height="8"
          fill="oklch(0.62 0.10 44)"
          stroke="oklch(0.48 0.08 38)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}

function PontoonSVG() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      role="img"
      aria-label="Pontoon bridge illustration"
    >
      <title>Pontoon bridge illustration</title>
      <rect width="240" height="120" fill="oklch(0.52 0.10 210 / 0.4)" />
      <rect
        x="0"
        y="58"
        width="240"
        height="62"
        fill="oklch(0.50 0.12 220 / 0.7)"
      />
      {[60, 130, 200].map((x, i) => (
        <ellipse
          key={`ripple-${x}`}
          cx={x}
          cy={68 + i * 5}
          rx={24}
          ry={5}
          fill="none"
          stroke="oklch(0.75 0.04 210 / 0.5)"
          strokeWidth="1"
        />
      ))}
      {PONTOON_POSITIONS.map((x) => (
        <g key={`boat-${x}`}>
          <ellipse
            cx={x}
            cy={65}
            rx={22}
            ry={12}
            fill="oklch(0.52 0.12 38)"
            stroke="oklch(0.42 0.10 35)"
            strokeWidth="1.5"
          />
          <path
            d={`M ${x - 20} 63 Q ${x} 56 ${x + 20} 63`}
            fill="oklch(0.60 0.10 44)"
          />
        </g>
      ))}
      <line
        x1="0"
        y1="58"
        x2="240"
        y2="58"
        stroke="oklch(0.38 0.08 30)"
        strokeWidth="3"
        strokeDasharray="6,3"
      />
      {PONTOON_DECK_PLANKS.map((i) => (
        <rect
          key={`dplank-${i}`}
          x={2 + i * 12}
          y={50}
          width="10"
          height="10"
          fill="oklch(0.62 0.09 44)"
          stroke="oklch(0.48 0.08 36)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}

function ChainSuspensionSVG() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      role="img"
      aria-label="Iron chain suspension bridge illustration"
    >
      <title>Iron chain suspension bridge illustration</title>
      <rect width="240" height="120" fill="oklch(0.52 0.10 210 / 0.4)" />
      <rect
        x="0"
        y="72"
        width="240"
        height="48"
        fill="oklch(0.50 0.12 220 / 0.7)"
      />
      <rect
        x="24"
        y="22"
        width="18"
        height="68"
        fill="oklch(0.42 0.08 32)"
        rx="2"
      />
      <rect
        x="198"
        y="22"
        width="18"
        height="68"
        fill="oklch(0.42 0.08 32)"
        rx="2"
      />
      <path
        d="M 33 28 Q 120 65 207 28"
        fill="none"
        stroke="oklch(0.38 0.08 28)"
        strokeWidth="4"
        strokeDasharray="8,4"
      />
      <path
        d="M 33 34 Q 120 71 207 34"
        fill="none"
        stroke="oklch(0.40 0.06 30)"
        strokeWidth="3"
        strokeDasharray="8,4"
      />
      {CHAIN_RODS.map((i) => {
        const t = (i + 0.5) / 10;
        const rx = 33 + t * 174;
        const ry = 31 + Math.sin(Math.PI * t) * 36;
        return (
          <line
            key={`rod-${i}`}
            x1={rx}
            y1={ry}
            x2={rx}
            y2={ry + 22}
            stroke="oklch(0.38 0.06 28 / 0.8)"
            strokeWidth="2"
            strokeDasharray="4,2"
          />
        );
      })}
      <rect
        x="24"
        y="52"
        width="192"
        height="12"
        fill="oklch(0.60 0.10 44)"
        stroke="oklch(0.45 0.08 36)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const BRIDGE_SVG: Record<string, () => ReactElement> = {
  rope: RopeBridgeSVG,
  "stone-arch": StoneArchSVG,
  timber: TimberTrestleSVG,
  pontoon: PontoonSVG,
  chain: ChainSuspensionSVG,
};

function BridgePhoto({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="mb-0">
      <div
        className="relative overflow-hidden rounded-t-none"
        style={{ maxHeight: "200px" }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full object-cover rounded-none"
          style={{
            maxHeight: "200px",
            filter: "sepia(20%) contrast(1.05) saturate(1.1)",
            border: "none",
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const sibling = (e.currentTarget as HTMLImageElement)
              .nextElementSibling;
            if (sibling) (sibling as HTMLElement).style.display = "none";
          }}
        />
        {/* Gold border overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 2px oklch(0.72 0.12 75 / 0.4)",
          }}
        />
      </div>
      <p
        className="text-xs font-body italic px-3 pt-1.5 pb-0 leading-snug"
        style={{ color: "oklch(0.52 0.08 48)" }}
      >
        {caption}
      </p>
    </div>
  );
}

function BridgeCard({ bridge, index }: { bridge: BridgeType; index: number }) {
  const [cardRef, cardVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const SvgComponent = BRIDGE_SVG[bridge.id] ?? ChainSuspensionSVG;
  const photo = BRIDGE_PHOTOS[bridge.id];

  return (
    <div
      ref={cardRef}
      className={`rounded-lg overflow-hidden border-2 shadow-elevated transition-all duration-700 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: `${index * 0.1}s`,
        borderColor: "oklch(0.72 0.12 75 / 0.35)",
        background: "oklch(0.96 0.025 58)",
      }}
      data-ocid={`types.item.${index + 1}`}
    >
      {/* SVG diagram thumbnail */}
      <div
        className="h-36 relative overflow-hidden"
        style={{ background: "oklch(0.88 0.04 52)" }}
      >
        <SvgComponent />
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            background:
              "linear-gradient(to top, oklch(0.96 0.025 58), transparent)",
          }}
        />
      </div>

      {/* Real photograph (rope and chain types only) */}
      {photo && (
        <BridgePhoto src={photo.src} alt={photo.alt} caption={photo.caption} />
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="font-display font-bold text-xl"
            style={{ color: "oklch(0.35 0.12 25)" }}
          >
            {bridge.name}
          </h3>
          <span
            className="shrink-0 text-xs font-body font-semibold px-2 py-0.5 rounded-sm"
            style={{
              background: "oklch(0.72 0.12 75 / 0.15)",
              color: "oklch(0.52 0.12 50)",
            }}
          >
            {bridge.subtitle}
          </span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-body"
            style={{ color: "oklch(0.62 0.10 65)" }}
          >
            📅 {bridge.era}
          </span>
          <span
            className="text-xs font-body"
            style={{ color: "oklch(0.58 0.06 50)" }}
          >
            📍 {bridge.region}
          </span>
        </div>
        <p
          className="text-sm font-body leading-relaxed mb-4"
          style={{ color: "oklch(0.42 0.04 40)" }}
        >
          {bridge.description}
        </p>
        <div
          className="text-xs font-body px-3 py-2 rounded border-l-2 mb-4"
          style={{
            background: "oklch(0.94 0.03 55)",
            borderColor: "oklch(0.68 0.22 65)",
            color: "oklch(0.40 0.05 42)",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "oklch(0.45 0.12 30)" }}
          >
            Structure:{" "}
          </span>
          {bridge.structuralFeature}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {bridge.material.map((mat) => (
            <span
              key={mat}
              className="text-xs font-body px-2 py-0.5 rounded-sm border"
              style={{
                background: "oklch(0.98 0.01 55)",
                borderColor: "oklch(0.82 0.05 55)",
                color: "oklch(0.48 0.06 42)",
              }}
            >
              {mat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BridgeTypesSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="types"
      className="py-20"
      style={{ background: "oklch(0.98 0.02 55)" }}
      data-ocid="types.section"
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
            Five Traditions
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.32 0.12 22)" }}
          >
            Types of Ancient Indian Bridges
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-sm" style={{ color: "oklch(0.72 0.12 75)" }}>
              ✦ ✦ ✦
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {BRIDGE_TYPES.map((bridge, i) => (
            <BridgeCard key={bridge.id} bridge={bridge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
