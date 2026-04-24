import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NASA_IMAGE = {
  src: "https://photojournal.jpl.nasa.gov/jpeg/PIA24949.jpg",
  alt: "NASA ASTER satellite image of Rama Setu (Adam's Bridge) — a 48km chain of limestone shoals connecting India and Sri Lanka, 2020",
  caption:
    "Rama Setu (Adam's Bridge) — NASA/ASTER satellite image, 2020. A 48km chain of limestone shoals between India and Sri Lanka.",
  attribution:
    "Image credit: NASA/METI/AIST/Japan Space Systems, and U.S./Japan ASTER Science Team",
};

export function RamaSetuSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const [mapRef, mapVisible] = useScrollAnimation<SVGSVGElement>({
    threshold: 0.2,
  });
  const [satRef, satVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <section
      id="ramasetu"
      className="py-20"
      style={{ background: "oklch(0.26 0.10 22)" }}
      data-ocid="ramasetu.section"
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
            The Legend
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.92 0.06 70)" }}
          >
            Rama Setu
          </h2>
          <p
            className="font-display text-lg md:text-xl mb-2"
            style={{ color: "oklch(0.72 0.12 75)" }}
          >
            Adam's Bridge — The Bridge of Sri Rama
          </p>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-sm" style={{ color: "oklch(0.72 0.12 75)" }}>
              ✦ ✦ ✦
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Animated Map SVG */}
          <div
            className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div
              className="rounded-xl overflow-hidden border-2 shadow-elevated"
              style={{
                borderColor: "oklch(0.72 0.12 75 / 0.4)",
                background: "oklch(0.30 0.10 200)",
              }}
            >
              <svg
                ref={mapRef}
                viewBox="0 0 400 340"
                className="w-full h-auto"
                role="img"
                aria-labelledby="ramasetu-map-title"
              >
                <title id="ramasetu-map-title">
                  Map showing Rama Setu connecting India to Sri Lanka
                </title>
                <defs>
                  <radialGradient id="sea-radial" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="oklch(0.45 0.10 225)" />
                    <stop offset="100%" stopColor="oklch(0.32 0.12 215)" />
                  </radialGradient>
                  <linearGradient id="india-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.58 0.10 80)" />
                    <stop offset="100%" stopColor="oklch(0.50 0.12 72)" />
                  </linearGradient>
                  <linearGradient id="lanka-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.55 0.12 78)" />
                    <stop offset="100%" stopColor="oklch(0.48 0.10 68)" />
                  </linearGradient>
                </defs>

                {/* Sea background */}
                <rect width="400" height="340" fill="url(#sea-radial)" />

                {/* Wave lines */}
                {[80, 130, 180, 230, 280].map((y) => (
                  <path
                    key={`wave-${y}`}
                    d={`M 0 ${y} Q 100 ${y - 8} 200 ${y} Q 300 ${y + 8} 400 ${y}`}
                    fill="none"
                    stroke="oklch(0.62 0.06 215 / 0.3)"
                    strokeWidth="1.5"
                  />
                ))}

                {/* India outline (simplified) */}
                <path
                  d="M 80 10 L 160 10 L 200 30 L 220 60 L 210 100 L 190 130 L 175 155 L 160 175 L 145 165 L 130 140 L 110 110 L 90 70 L 70 40 Z"
                  fill="url(#india-grad)"
                  stroke="oklch(0.48 0.10 62)"
                  strokeWidth="1.5"
                />
                {/* India label */}
                <text
                  x="145"
                  y="85"
                  textAnchor="middle"
                  className="font-display"
                  fontSize="14"
                  fill="oklch(0.26 0.08 28)"
                  fontWeight="bold"
                >
                  India
                </text>
                <text
                  x="145"
                  y="100"
                  textAnchor="middle"
                  fontSize="9"
                  fill="oklch(0.36 0.06 32)"
                >
                  Tamil Nadu
                </text>

                {/* Rameswaram */}
                <circle
                  cx="165"
                  cy="172"
                  r="5"
                  fill="oklch(0.68 0.22 65)"
                  stroke="oklch(0.55 0.18 60)"
                  strokeWidth="1.5"
                />
                <text
                  x="165"
                  y="188"
                  textAnchor="middle"
                  fontSize="8"
                  fill="oklch(0.82 0.08 70)"
                  fontWeight="bold"
                >
                  Rameswaram
                </text>

                {/* Rama Setu — animated chain of stones */}
                <path
                  className={`draw-stroke-path ${mapVisible ? "is-visible" : ""}`}
                  d="M 165 172 Q 195 185 210 200 Q 225 212 230 225"
                  fill="none"
                  stroke="oklch(0.72 0.12 75)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                />
                {/* Stone dots along bridge */}
                {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map((t) => {
                  const x = 165 + t * 65;
                  const y = 172 + t * 53 + Math.sin(t * Math.PI) * 8;
                  return (
                    <ellipse
                      key={`stone-${t}`}
                      cx={x}
                      cy={y}
                      rx="6"
                      ry="4"
                      fill={
                        mapVisible ? "oklch(0.72 0.12 75 / 0.8)" : "transparent"
                      }
                      stroke="oklch(0.62 0.12 68)"
                      strokeWidth="1"
                      className="transition-all duration-500"
                      style={{ transitionDelay: `${t * 0.8 + 0.5}s` }}
                    />
                  );
                })}

                {/* Bridge label */}
                {mapVisible && (
                  <g className="fade-in" style={{ animationDelay: "1.5s" }}>
                    <line
                      x1="200"
                      y1="195"
                      x2="285"
                      y2="165"
                      stroke="oklch(0.72 0.12 75 / 0.7)"
                      strokeWidth="1"
                      strokeDasharray="4,3"
                    />
                    <text
                      x="290"
                      y="162"
                      fontSize="10"
                      fill="oklch(0.82 0.08 72)"
                      fontWeight="bold"
                    >
                      Rama Setu
                    </text>
                    <text
                      x="290"
                      y="174"
                      fontSize="8"
                      fill="oklch(0.65 0.05 58)"
                    >
                      ~48 km length
                    </text>
                  </g>
                )}

                {/* Sri Lanka */}
                <path
                  d="M 205 230 L 225 226 L 245 235 L 255 260 L 250 290 L 235 310 L 218 315 L 205 300 L 198 275 L 200 250 Z"
                  fill="url(#lanka-grad)"
                  stroke="oklch(0.48 0.10 62)"
                  strokeWidth="1.5"
                />
                <text
                  x="226"
                  y="275"
                  textAnchor="middle"
                  fontSize="11"
                  fill="oklch(0.26 0.08 28)"
                  fontWeight="bold"
                >
                  Sri Lanka
                </text>
                <text
                  x="226"
                  y="288"
                  textAnchor="middle"
                  fontSize="8"
                  fill="oklch(0.36 0.06 32)"
                >
                  Lanka (ancient)
                </text>

                {/* Compass rose */}
                <g transform="translate(355, 30)">
                  <circle
                    cx="0"
                    cy="0"
                    r="18"
                    fill="oklch(0.30 0.08 22 / 0.7)"
                    stroke="oklch(0.62 0.10 68)"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="-8"
                    textAnchor="middle"
                    fontSize="9"
                    fill="oklch(0.82 0.08 70)"
                    fontWeight="bold"
                  >
                    N
                  </text>
                  <line
                    x1="0"
                    y1="-6"
                    x2="0"
                    y2="6"
                    stroke="oklch(0.72 0.12 75)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="-6"
                    y1="0"
                    x2="6"
                    y2="0"
                    stroke="oklch(0.72 0.12 75)"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
            <p
              className="text-center text-xs mt-2 font-body italic"
              style={{ color: "oklch(0.60 0.04 50)" }}
            >
              Approximate location based on satellite imagery & Ramayana
              geography
            </p>
          </div>

          {/* Text content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {[
              {
                title: "The Legend in Valmiki Ramayana",
                text: "Book 6 (Yuddha Kanda) of Valmiki's Ramayana describes how Prince Rama needed to cross the sea to reach Lanka and rescue Sita from Ravana. The divine architect Nala (son of Vishwakarma, celestial engineer) designed the bridge using floating stones inscribed with Rama's name.",
              },
              {
                title: "Engineering Description",
                text: "The Ramayana describes the bridge in remarkable technical detail: 100 yojanas long (~800 km, though debated), 10 yojanas wide, built in five days by 10 million vanara (monkey) workers. Stones, timber, boulders from the Himalayas, and medicinal herbs were used.",
              },
              {
                title: "Modern Archaeological Evidence",
                text: "NASA satellite imagery revealed a 48 km chain of limestone shoals between Rameswaram (India) and Mannar Island (Sri Lanka). Core samples show the shoals are composed of coral and sand atop ancient limestone ridges. Geological studies suggest the land bridge was walkable 7,000–18,000 years ago.",
              },
              {
                title: "Cultural Significance",
                text: "Rama Setu remains the world's most ancient engineering reference. The National Remote Sensing Agency (India) and several geological surveys have studied it. It represents the intersection of mythology, cultural memory, and pre-historical geography.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border"
                style={{
                  background: "oklch(0.32 0.10 22)",
                  borderColor: "oklch(0.72 0.12 75 / 0.25)",
                }}
              >
                <h3
                  className="font-display font-bold text-base mb-2"
                  style={{ color: "oklch(0.82 0.10 68)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm font-body leading-relaxed"
                  style={{ color: "oklch(0.72 0.04 55)" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NASA Satellite View — full width below the grid */}
        <div
          ref={satRef}
          className={`mt-16 transition-all duration-700 ${satVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          data-ocid="ramasetu.satellite_view"
        >
          {/* Section heading */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="flex-1 h-px"
              style={{ background: "oklch(0.72 0.12 75 / 0.25)" }}
            />
            <h3
              className="font-display font-bold text-2xl md:text-3xl text-center px-4"
              style={{ color: "oklch(0.82 0.10 68)" }}
            >
              🛰 Satellite View
            </h3>
            <div
              className="flex-1 h-px"
              style={{ background: "oklch(0.72 0.12 75 / 0.25)" }}
            />
          </div>

          {/* Satellite image frame */}
          <div
            className="relative rounded-2xl overflow-hidden border-2 shadow-elevated"
            style={{
              borderColor: "oklch(0.72 0.12 75 / 0.5)",
              background: "oklch(0.20 0.08 220)",
            }}
          >
            {/* Decorative gold corner accents */}
            {[
              "top-0 left-0",
              "top-0 right-0",
              "bottom-0 left-0",
              "bottom-0 right-0",
            ].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-6 h-6 pointer-events-none z-10`}
                style={{
                  background:
                    "radial-gradient(circle at center, oklch(0.72 0.12 75 / 0.6), transparent 70%)",
                }}
              />
            ))}

            <img
              src={NASA_IMAGE.src}
              alt={NASA_IMAGE.alt}
              loading="lazy"
              className="w-full object-cover"
              style={{ maxHeight: "520px" }}
              onError={(e) => {
                const wrapper = (e.currentTarget as HTMLImageElement).closest(
                  "[data-sat-wrapper]",
                ) as HTMLElement | null;
                if (wrapper) wrapper.style.display = "none";
              }}
              data-sat-wrapper=""
            />

            {/* Overlay label badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-body font-semibold backdrop-blur-sm border"
              style={{
                background: "oklch(0.20 0.08 22 / 0.85)",
                borderColor: "oklch(0.72 0.12 75 / 0.5)",
                color: "oklch(0.82 0.08 70)",
              }}
            >
              🛰 NASA / ASTER · 2020
            </div>
          </div>

          {/* Caption and attribution */}
          <div className="mt-3 text-center space-y-1">
            <p
              className="text-sm font-body font-medium"
              style={{ color: "oklch(0.72 0.06 58)" }}
            >
              {NASA_IMAGE.caption}
            </p>
            <p
              className="text-xs font-body italic"
              style={{ color: "oklch(0.55 0.04 50)" }}
            >
              {NASA_IMAGE.attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
