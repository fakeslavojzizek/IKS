import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

// ── Pre-computed geometry ──────────────────────────────────────────────────
const VOUSSOIR_T = [0.2, 0.35, 0.5, 0.65, 0.8];
const WATER_RIPPLE_X = [200, 350, 500, 650];
const GROUND_LINES_Y = [260, 270, 278];
const PIER_STONE_Y = [215, 230, 245];
const PARAPET_INDICES = Array.from({ length: 16 }, (_, i) => i);
const PONTOON_DECK_PLANKS = Array.from({ length: 18 }, (_, i) => i);
const PONTOON_BOATS = [90, 200, 310, 420, 530, 640, 710];

// ── Bridge type definitions ────────────────────────────────────────────────
type BridgeTypeKey = "stone-arch" | "rope" | "pontoon";

interface BridgeTypeInfo {
  key: BridgeTypeKey;
  label: string;
  subtitle: string;
  labels: { id: string; label: string; description: string }[];
}

const BRIDGE_TYPES: BridgeTypeInfo[] = [
  {
    key: "stone-arch",
    label: "Stone Arch",
    subtitle: "Masonry arch — the most enduring form",
    labels: [
      {
        id: "keystone",
        label: "Keystone",
        description: "Central wedge-shaped stone locking the arch",
      },
      {
        id: "voussoir",
        label: "Voussoir Stones",
        description: "Interlocking wedge blocks distributing load",
      },
      {
        id: "spandrel",
        label: "Spandrel Fill",
        description: "Rubble & lime mortar fill above arch",
      },
      {
        id: "pier",
        label: "Stone Piers",
        description: "Massive masonry piers resisting lateral thrust",
      },
      {
        id: "foundation",
        label: "Rock Foundation",
        description: "Bedrock anchoring for flood resistance",
      },
      {
        id: "deck",
        label: "Stone Deck",
        description: "Flat stone slabs forming the roadway",
      },
    ],
  },
  {
    key: "rope",
    label: "Rope Bridge",
    subtitle: "Jhula — Himalayan coir & bamboo suspension",
    labels: [
      {
        id: "anchor",
        label: "Rock Anchors",
        description: "Iron rings driven into cliff face",
      },
      {
        id: "main-cable",
        label: "Main Cables",
        description: "Twisted coir or bamboo load cables",
      },
      {
        id: "handrail",
        label: "Handrail Ropes",
        description: "Side ropes for lateral stability",
      },
      {
        id: "deck-plank",
        label: "Bamboo Planks",
        description: "Cross-lashed bamboo deck planking",
      },
      {
        id: "lashing",
        label: "Jute Lashings",
        description: "Binding knots securing planks to cables",
      },
      {
        id: "tower",
        label: "Timber Tower",
        description: "Wooden gantry elevating cable angle",
      },
    ],
  },
  {
    key: "pontoon",
    label: "Pontoon Bridge",
    subtitle: "Nauka-Setu — boat bridge for river crossings",
    labels: [
      {
        id: "boat",
        label: "Boat Hulls",
        description: "Wooden flat-bottomed boats as floating piers",
      },
      {
        id: "anchor-chain",
        label: "Anchor Chains",
        description: "Iron chains mooring boats against current",
      },
      {
        id: "cross-beam",
        label: "Cross Beams",
        description: "Heavy timbers bridging adjacent boats",
      },
      {
        id: "plank",
        label: "Deck Planks",
        description: "Longitudinal planks forming the road surface",
      },
      {
        id: "railing",
        label: "Rope Railings",
        description: "Hemp rope side-barriers for safety",
      },
      {
        id: "mooring",
        label: "Upstream Mooring",
        description: "Upstream anchor lines absorbing current force",
      },
    ],
  },
];

// ── SVG Diagrams ────────────────────────────────────────────────────────────
function StoneArchSVG({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Stone arch bridge cross-section"
    >
      <defs>
        <linearGradient id="sa-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.06 210)" />
          <stop offset="100%" stopColor="oklch(0.88 0.04 200)" />
        </linearGradient>
        <linearGradient id="sa-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.08 225)" />
          <stop offset="100%" stopColor="oklch(0.42 0.10 230)" />
        </linearGradient>
        <linearGradient id="sa-stone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.07 48)" />
          <stop offset="100%" stopColor="oklch(0.58 0.09 42)" />
        </linearGradient>
        <linearGradient id="sa-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.09 40)" />
          <stop offset="100%" stopColor="oklch(0.45 0.10 35)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="800" height="280" fill="url(#sa-sky)" />
      <polygon
        points="0,200 80,100 180,160 280,80 360,140 440,70 520,130 620,90 720,150 800,110 800,200"
        fill="oklch(0.55 0.04 180 / 0.4)"
      />
      <rect x="0" y="280" width="800" height="120" fill="url(#sa-water)" />
      {WATER_RIPPLE_X.map((x, i) => (
        <ellipse
          key={`r-${x}`}
          cx={x}
          cy={295 + i * 5}
          rx={30 + i * 10}
          ry={4}
          fill="none"
          stroke="oklch(0.82 0.05 210 / 0.5)"
          strokeWidth="1.5"
        />
      ))}
      <rect x="0" y="250" width="160" height="150" fill="oklch(0.58 0.09 78)" />
      <rect
        x="640"
        y="250"
        width="160"
        height="150"
        fill="oklch(0.58 0.09 78)"
      />
      {GROUND_LINES_Y.map((y) => (
        <line
          key={`g-${y}`}
          x1="0"
          y1={y}
          x2="160"
          y2={y}
          stroke="oklch(0.48 0.08 72 / 0.5)"
          strokeWidth="1"
        />
      ))}
      <rect
        x="155"
        y="200"
        width="50"
        height="100"
        fill="url(#sa-dark)"
        stroke="oklch(0.45 0.08 35)"
        strokeWidth="1.5"
      />
      <rect
        x="595"
        y="200"
        width="50"
        height="100"
        fill="url(#sa-dark)"
        stroke="oklch(0.45 0.08 35)"
        strokeWidth="1.5"
      />
      {PIER_STONE_Y.map((y) => (
        <g key={`pj-${y}`}>
          <line
            x1="155"
            y1={y}
            x2="205"
            y2={y}
            stroke="oklch(0.42 0.08 35 / 0.6)"
            strokeWidth="0.8"
          />
          <line
            x1="595"
            y1={y}
            x2="645"
            y2={y}
            stroke="oklch(0.42 0.08 35 / 0.6)"
            strokeWidth="0.8"
          />
        </g>
      ))}
      <path
        className={`draw-stroke-path ${visible ? "is-visible" : ""}`}
        d="M 155 210 Q 400 50 645 210"
        fill="none"
        stroke="oklch(0.55 0.10 40)"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        className={`draw-stroke-path ${visible ? "is-visible" : ""}`}
        style={{ animationDelay: "0.3s" }}
        d="M 175 210 Q 400 72 625 210"
        fill="none"
        stroke="oklch(0.68 0.08 50)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M 155 210 Q 400 50 645 210 L 645 190 L 155 190 Z"
        fill="url(#sa-stone)"
        opacity="0.7"
      />
      <rect
        x="145"
        y="185"
        width="510"
        height="20"
        fill="url(#sa-stone)"
        stroke="oklch(0.48 0.10 38)"
        strokeWidth="2"
      />
      <path
        d="M 385 58 L 400 50 L 415 58 L 410 78 L 390 78 Z"
        fill="oklch(0.72 0.12 75)"
        stroke="oklch(0.62 0.12 68)"
        strokeWidth="1.5"
      />
      {VOUSSOIR_T.map((t) => {
        const x = 155 + (645 - 155) * t;
        const y = 210 - Math.sin(Math.PI * t) * 160;
        const angle =
          Math.atan2(-Math.cos(Math.PI * t) * 160 * Math.PI, 490) *
          (180 / Math.PI);
        return (
          <line
            key={`v-${t}`}
            x1={x - Math.cos(((angle + 90) * Math.PI) / 180) * 14}
            y1={y - Math.sin(((angle + 90) * Math.PI) / 180) * 14}
            x2={x + Math.cos(((angle + 90) * Math.PI) / 180) * 14}
            y2={y + Math.sin(((angle + 90) * Math.PI) / 180) * 14}
            stroke="oklch(0.42 0.08 35 / 0.7)"
            strokeWidth="1.5"
          />
        );
      })}
      {PARAPET_INDICES.map((i) => (
        <rect
          key={`p-${i}`}
          x={155 + i * 31 + 2}
          y={178}
          width={18}
          height={10}
          fill="oklch(0.62 0.09 44)"
          stroke="oklch(0.48 0.08 38)"
          strokeWidth="0.8"
          rx="1"
        />
      ))}
      {visible && (
        <g className="fade-in" style={{ animationDelay: "1.2s" }}>
          <circle cx="400" cy="64" r="4" fill="oklch(0.72 0.12 75)" />
          <line
            x1="400"
            y1="64"
            x2="480"
            y2="45"
            stroke="oklch(0.72 0.12 75 / 0.8)"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <circle cx="480" cy="45" r="2.5" fill="oklch(0.72 0.12 75)" />
          <circle cx="180" cy="240" r="4" fill="oklch(0.68 0.22 65)" />
          <line
            x1="180"
            y1="240"
            x2="120"
            y2="260"
            stroke="oklch(0.68 0.22 65 / 0.8)"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <circle cx="120" cy="260" r="2.5" fill="oklch(0.68 0.22 65)" />
          <circle cx="300" cy="193" r="4" fill="oklch(0.55 0.12 30)" />
          <line
            x1="300"
            y1="193"
            x2="220"
            y2="160"
            stroke="oklch(0.55 0.12 30 / 0.8)"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <circle cx="220" cy="160" r="2.5" fill="oklch(0.55 0.12 30)" />
        </g>
      )}
    </svg>
  );
}

function RopeBridgeSVG({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Rope bridge (Jhula) cross-section"
    >
      <defs>
        <linearGradient id="rb-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.05 195)" />
          <stop offset="100%" stopColor="oklch(0.84 0.04 200)" />
        </linearGradient>
        <linearGradient id="rb-rock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.52 0.07 50)" />
          <stop offset="100%" stopColor="oklch(0.42 0.08 44)" />
        </linearGradient>
      </defs>
      {/* Sky + mountains */}
      <rect x="0" y="0" width="800" height="400" fill="url(#rb-sky)" />
      <polygon
        points="0,260 100,80 200,160 300,60 400,140 500,70 600,150 700,100 800,180 800,260"
        fill="oklch(0.58 0.06 190 / 0.6)"
      />
      <polygon
        points="0,260 60,140 130,180 200,100 270,160 800,260"
        fill="oklch(0.52 0.05 185 / 0.4)"
      />
      {/* Gorge walls */}
      <rect x="0" y="100" width="130" height="300" fill="url(#rb-rock)" />
      <rect x="670" y="100" width="130" height="300" fill="url(#rb-rock)" />
      {/* Rock texture lines */}
      {[120, 150, 180, 210, 240].map((y) => (
        <line
          key={`rl-${y}`}
          x1="0"
          y1={y}
          x2="130"
          y2={y + 10}
          stroke="oklch(0.38 0.07 42 / 0.5)"
          strokeWidth="1"
        />
      ))}
      {[120, 150, 180, 210, 240].map((y) => (
        <line
          key={`rr-${y}`}
          x1="670"
          y1={y}
          x2="800"
          y2={y + 8}
          stroke="oklch(0.38 0.07 42 / 0.5)"
          strokeWidth="1"
        />
      ))}
      {/* Timber towers */}
      <rect
        x="100"
        y="60"
        width="18"
        height="180"
        fill="oklch(0.50 0.08 52)"
        stroke="oklch(0.40 0.07 45)"
        strokeWidth="1.5"
        rx="2"
      />
      <rect
        x="682"
        y="60"
        width="18"
        height="180"
        fill="oklch(0.50 0.08 52)"
        stroke="oklch(0.40 0.07 45)"
        strokeWidth="1.5"
        rx="2"
      />
      {/* Cross-braces */}
      <line
        x1="102"
        y1="80"
        x2="116"
        y2="130"
        stroke="oklch(0.42 0.07 48)"
        strokeWidth="2"
      />
      <line
        x1="116"
        y1="80"
        x2="102"
        y2="130"
        stroke="oklch(0.42 0.07 48)"
        strokeWidth="2"
      />
      <line
        x1="684"
        y1="80"
        x2="698"
        y2="130"
        stroke="oklch(0.42 0.07 48)"
        strokeWidth="2"
      />
      <line
        x1="698"
        y1="80"
        x2="684"
        y2="130"
        stroke="oklch(0.42 0.07 48)"
        strokeWidth="2"
      />
      {/* Main load cables (catenary curve) */}
      <path
        className={`draw-stroke-path ${visible ? "is-visible" : ""}`}
        d="M 109 70 Q 400 260 691 70"
        fill="none"
        stroke="oklch(0.42 0.10 50)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        className={`draw-stroke-path ${visible ? "is-visible" : ""}`}
        style={{ animationDelay: "0.2s" }}
        d="M 109 78 Q 400 270 691 78"
        fill="none"
        stroke="oklch(0.55 0.09 54)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Handrail ropes */}
      <path
        className={`draw-stroke-path ${visible ? "is-visible" : ""}`}
        style={{ animationDelay: "0.4s" }}
        d="M 109 65 Q 400 230 691 65"
        fill="none"
        stroke="oklch(0.62 0.12 72)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6,4"
      />
      <path
        className={`draw-stroke-path ${visible ? "is-visible" : ""}`}
        style={{ animationDelay: "0.5s" }}
        d="M 109 83 Q 400 280 691 83"
        fill="none"
        stroke="oklch(0.62 0.12 72)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6,4"
      />
      {/* Vertical hangers */}
      {Array.from({ length: 14 }, (_, i) => {
        const t = (i + 1) / 15;
        const x = 109 + (691 - 109) * t;
        const y = 74 + Math.sin(Math.PI * t) * 192;
        return (
          <line
            key={`h-${t.toFixed(3)}`}
            x1={x}
            y1={y - 4}
            x2={x}
            y2={y + 22}
            stroke="oklch(0.48 0.08 50)"
            strokeWidth="1.5"
          />
        );
      })}
      {/* Deck planks */}
      {Array.from({ length: 14 }, (_, i) => {
        const t = (i + 1) / 15;
        const x = 109 + (691 - 109) * t;
        const y = 74 + Math.sin(Math.PI * t) * 192 + 18;
        return (
          <rect
            key={`dp-${t.toFixed(3)}`}
            x={x - 14}
            y={y}
            width={28}
            height={7}
            fill="oklch(0.58 0.09 54)"
            stroke="oklch(0.44 0.07 48)"
            strokeWidth="0.8"
            rx="1"
          />
        );
      })}
      {/* Iron ring anchors */}
      <circle
        cx="90"
        cy="90"
        r="7"
        fill="none"
        stroke="oklch(0.35 0.05 30)"
        strokeWidth="3"
      />
      <circle
        cx="710"
        cy="90"
        r="7"
        fill="none"
        stroke="oklch(0.35 0.05 30)"
        strokeWidth="3"
      />
      {/* Abyss / gorge bottom */}
      <rect
        x="130"
        y="300"
        width="540"
        height="100"
        fill="oklch(0.22 0.05 30 / 0.6)"
      />
      {/* Callout lines */}
      {visible && (
        <g className="fade-in" style={{ animationDelay: "1s" }}>
          <circle cx="400" cy="266" r="4" fill="oklch(0.72 0.12 75)" />
          <line
            x1="400"
            y1="266"
            x2="470"
            y2="295"
            stroke="oklch(0.72 0.12 75 / 0.8)"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <circle cx="470" cy="295" r="2.5" fill="oklch(0.72 0.12 75)" />
          <circle cx="91" cy="91" r="4" fill="oklch(0.68 0.22 65)" />
          <line
            x1="91"
            y1="91"
            x2="50"
            y2="75"
            stroke="oklch(0.68 0.22 65 / 0.8)"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <circle cx="50" cy="75" r="2.5" fill="oklch(0.68 0.22 65)" />
        </g>
      )}
    </svg>
  );
}

function PontoonBridgeSVG({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Pontoon (boat) bridge cross-section"
    >
      <defs>
        <linearGradient id="pb-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.80 0.06 205)" />
          <stop offset="100%" stopColor="oklch(0.88 0.04 200)" />
        </linearGradient>
        <linearGradient id="pb-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.52 0.10 228)" />
          <stop offset="100%" stopColor="oklch(0.40 0.12 232)" />
        </linearGradient>
        <linearGradient id="pb-bank" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.60 0.09 76)" />
          <stop offset="100%" stopColor="oklch(0.50 0.08 70)" />
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect x="0" y="0" width="800" height="220" fill="url(#pb-sky)" />
      <polygon
        points="0,160 100,80 200,120 350,60 500,110 650,75 800,120 800,160"
        fill="oklch(0.60 0.05 185 / 0.4)"
      />
      {/* River */}
      <rect x="0" y="220" width="800" height="180" fill="url(#pb-water)" />
      {/* Water ripples */}
      {[150, 300, 450, 600].map((x, i) => (
        <ellipse
          key={`wr-${x}`}
          cx={x}
          cy={240 + i * 8}
          rx={40 + i * 8}
          ry={5}
          fill="none"
          stroke="oklch(0.80 0.06 210 / 0.45)"
          strokeWidth="1.5"
        />
      ))}
      {/* Banks */}
      <rect x="0" y="195" width="50" height="205" fill="url(#pb-bank)" />
      <rect x="750" y="195" width="50" height="205" fill="url(#pb-bank)" />
      {/* Anchor chains going down from boats */}
      {PONTOON_BOATS.slice(1, -1).map((bx) => (
        <line
          key={`ac-${bx}`}
          x1={bx + 35}
          y1={250}
          x2={bx + 30}
          y2={340}
          stroke="oklch(0.35 0.06 30)"
          strokeWidth="2"
          strokeDasharray="5,3"
        />
      ))}
      {/* Boats */}
      {PONTOON_BOATS.map((bx) => (
        <g key={`boat-${bx}`}>
          {/* hull */}
          <path
            d={`M ${bx},${235} L ${bx + 70},${235} L ${bx + 62},${265} L ${bx + 8},${265} Z`}
            fill="oklch(0.50 0.10 52)"
            stroke="oklch(0.40 0.09 46)"
            strokeWidth="1.5"
          />
          {/* hull inside */}
          <path
            d={`M ${bx + 8},${238} L ${bx + 62},${238} L ${bx + 56},${260} L ${bx + 14},${260} Z`}
            fill="oklch(0.44 0.09 50)"
          />
          {/* mast stub */}
          <line
            x1={bx + 35}
            y1={238}
            x2={bx + 35}
            y2={210}
            stroke="oklch(0.48 0.08 52)"
            strokeWidth="2"
          />
        </g>
      ))}
      {/* Cross-beams on top of boats */}
      {PONTOON_BOATS.slice(0, -1).map((bx) => {
        const nextBx = PONTOON_BOATS[PONTOON_BOATS.indexOf(bx) + 1];
        return (
          <rect
            key={`cb-${bx}`}
            x={bx + 58}
            y={222}
            width={nextBx - bx - 46}
            height={14}
            fill="oklch(0.55 0.09 54)"
            stroke="oklch(0.42 0.08 48)"
            strokeWidth="1"
            rx="1"
          />
        );
      })}
      {/* Deck planks */}
      {PONTOON_DECK_PLANKS.map((i) => (
        <rect
          key={`pl-${i}`}
          x={50 + i * 38}
          y={210}
          width={34}
          height={14}
          fill="oklch(0.60 0.08 56)"
          stroke="oklch(0.45 0.07 50)"
          strokeWidth="0.8"
          rx="1"
        />
      ))}
      {/* Rope railings */}
      <line
        x1="50"
        y1="195"
        x2="750"
        y2="195"
        stroke="oklch(0.62 0.10 68)"
        strokeWidth="2.5"
        strokeDasharray="8,4"
      />
      <line
        x1="50"
        y1="200"
        x2="750"
        y2="200"
        stroke="oklch(0.55 0.09 62)"
        strokeWidth="1.5"
        strokeDasharray="8,4"
      />
      {/* Railing posts */}
      {[100, 200, 300, 400, 500, 600, 700].map((x) => (
        <line
          key={`rp-${x}`}
          x1={x}
          y1={185}
          x2={x}
          y2={210}
          stroke="oklch(0.48 0.08 50)"
          strokeWidth="2"
        />
      ))}
      {/* Upstream mooring lines */}
      {PONTOON_BOATS.slice(1, -1).map((bx) => (
        <line
          key={`ml-${bx}`}
          x1={bx + 35}
          y1={235}
          x2={bx}
          y2={180}
          stroke="oklch(0.55 0.08 58)"
          strokeWidth="1.5"
          strokeDasharray="4,3"
          opacity="0.7"
        />
      ))}
      {/* Callout lines */}
      {visible && (
        <g className="fade-in" style={{ animationDelay: "1s" }}>
          <circle cx="200" cy="250" r="4" fill="oklch(0.72 0.12 75)" />
          <line
            x1="200"
            y1="250"
            x2="150"
            y2="290"
            stroke="oklch(0.72 0.12 75 / 0.8)"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <circle cx="150" cy="290" r="2.5" fill="oklch(0.72 0.12 75)" />
          <circle cx="400" cy="212" r="4" fill="oklch(0.68 0.22 65)" />
          <line
            x1="400"
            y1="212"
            x2="450"
            y2="180"
            stroke="oklch(0.68 0.22 65 / 0.8)"
            strokeWidth="1"
            strokeDasharray="4,3"
          />
          <circle cx="450" cy="180" r="2.5" fill="oklch(0.68 0.22 65)" />
        </g>
      )}
    </svg>
  );
}

// ── Main section ────────────────────────────────────────────────────────────
export function OverviewSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const [svgRef, svgVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.15,
  });
  const [activeType, setActiveType] = useState<BridgeTypeKey>("stone-arch");

  const currentBridge = BRIDGE_TYPES.find((b) => b.key === activeType)!;

  return (
    <section
      id="overview"
      className="py-20 stone-texture"
      style={{ background: "oklch(0.96 0.025 55)" }}
      data-ocid="overview.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "oklch(0.68 0.22 65)" }}
          >
            Structural Overview
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.32 0.12 22)" }}
          >
            Anatomy of an Ancient Bridge
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span
              className="text-sm font-body"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              ✦ ✦ ✦
            </span>
          </div>
          <p
            className="mt-4 text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed"
            style={{ color: "oklch(0.42 0.04 40)" }}
          >
            Ancient Indian bridge engineers mastered structural principles
            centuries before they were formally described in Western engineering
            — using interlocking stone, arch mechanics, and natural materials.
          </p>
        </div>

        {/* Bridge type selector tabs */}
        <div
          className="flex justify-center gap-2 mb-8 flex-wrap"
          role="tablist"
          aria-label="Bridge type selector"
        >
          {BRIDGE_TYPES.map((bt) => (
            <button
              key={bt.key}
              type="button"
              role="tab"
              aria-selected={activeType === bt.key}
              onClick={() => setActiveType(bt.key)}
              className="px-5 py-2.5 rounded-full text-sm font-display font-semibold border-2 transition-all duration-200"
              style={
                activeType === bt.key
                  ? {
                      background: "oklch(0.45 0.16 28)",
                      borderColor: "oklch(0.72 0.12 75)",
                      color: "oklch(0.92 0.06 72)",
                    }
                  : {
                      background: "oklch(0.92 0.025 55)",
                      borderColor: "oklch(0.75 0.08 58)",
                      color: "oklch(0.42 0.08 38)",
                    }
              }
              data-ocid={`overview.${bt.key}_tab`}
            >
              {bt.label}
            </button>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className="text-center text-sm font-body italic mb-6"
          style={{ color: "oklch(0.55 0.06 50)" }}
        >
          {currentBridge.subtitle}
        </p>

        {/* SVG Diagram + labels */}
        <div ref={svgRef} className="relative max-w-4xl mx-auto">
          <div
            className={`rounded-lg border-2 overflow-hidden shadow-elevated transition-all duration-700 ${svgVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{
              borderColor: "oklch(0.72 0.12 75 / 0.4)",
              background: "oklch(0.94 0.03 58)",
            }}
          >
            {activeType === "stone-arch" && (
              <StoneArchSVG visible={svgVisible} />
            )}
            {activeType === "rope" && <RopeBridgeSVG visible={svgVisible} />}
            {activeType === "pontoon" && (
              <PontoonBridgeSVG visible={svgVisible} />
            )}
          </div>

          {/* Label cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {currentBridge.labels.map((comp, i) => (
              <div
                key={comp.id}
                className={`p-3 rounded-md border transition-all duration-500 ${svgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  transitionDelay: `${0.8 + i * 0.1}s`,
                  background: "oklch(0.97 0.02 58)",
                  borderColor: "oklch(0.82 0.06 58)",
                }}
              >
                <div
                  className="font-display font-semibold text-sm mb-1"
                  style={{ color: "oklch(0.45 0.12 30)" }}
                >
                  {comp.label}
                </div>
                <div
                  className="text-xs font-body leading-snug"
                  style={{ color: "oklch(0.52 0.04 45)" }}
                >
                  {comp.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
