import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimelineEvent {
  id: string;
  year: string;
  era: string;
  title: string;
  source: string;
  description: string;
  significance: string;
}

const EVENTS: TimelineEvent[] = [
  {
    id: "ramayana",
    year: "~7000 BCE",
    era: "Treta Yuga",
    title: "Ramayana — Rama Setu",
    source: "Valmiki Ramayana",
    description:
      "The Valmiki Ramayana describes in extraordinary detail how Nala, the divine engineer (son of Vishwakarma), supervised the construction of a bridge across the sea from Rameswaram to Lanka for Rama's army.",
    significance:
      "First detailed engineering project description in world literature",
  },
  {
    id: "arthashastra",
    year: "321 BCE",
    era: "Maurya Empire",
    title: "Arthashastra — Bridge Engineering",
    source: "Chanakya, Arthashastra",
    description:
      "Chanakya's Arthashastra contains detailed chapters on bridge construction: materials, maintenance responsibilities, toll collection systems, and specifications for timber vs stone bridges across different river widths.",
    significance:
      "World's first known engineering code for bridge construction",
  },
  {
    id: "megasthenes",
    year: "302 BCE",
    era: "Maurya Empire",
    title: "Megasthenes Documents Indian Bridges",
    source: "Indica — Megasthenes",
    description:
      "The Greek ambassador Megasthenes, stationed at Pataliputra (modern Patna), described the bridge of boats across the Ganges — a massive pontoon structure maintained by the Mauryan state.",
    significance: "First foreign account of Indian infrastructure",
  },
  {
    id: "faxian",
    year: "400 CE",
    era: "Gupta Empire",
    title: "Fa Xian's Bridge Records",
    source: "Foguoji — Fa Xian (Faxian)",
    description:
      "The Chinese Buddhist pilgrim Fa Xian traveled across India and documented numerous bridges — wooden, stone, and rope — describing their maintenance by Buddhist monasteries and royal administration during the Gupta golden age.",
    significance: "Detailed eyewitness account of Gupta-era infrastructure",
  },
  {
    id: "xuanzang",
    year: "630 CE",
    era: "Harsha Empire",
    title: "Xuanzang — Iron Chain Bridges",
    source: "Da Tang Xiyu Ji — Xuanzang",
    description:
      "Xuanzang documented iron-chain suspension bridges in northeastern India and described them as ancient — suggesting the technology predated his 7th-century visit. He noted bridges maintained by local rulers as acts of dharmic merit.",
    significance:
      "Evidence of iron suspension bridge technology centuries before Europe",
  },
  {
    id: "alberuni",
    year: "1030 CE",
    era: "Medieval India",
    title: "Al-Biruni's India",
    source: "Kitab ul-Hind — Al-Biruni",
    description:
      "The Persian scholar Al-Biruni catalogued existing bridges across India, describing the engineering traditions of the subcontinent with admiration. He noted that bridge building was considered a sacred act of public merit.",
    significance:
      "Comprehensive survey of medieval Indian bridges and their cultural role",
  },
];

export function TimelineSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="timeline"
      className="py-20 stone-texture"
      style={{ background: "oklch(0.96 0.025 55)" }}
      data-ocid="timeline.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "oklch(0.68 0.22 65)" }}
          >
            Historical Record
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "oklch(0.32 0.12 22)" }}
          >
            Timeline of Ancient Texts
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-sm" style={{ color: "oklch(0.72 0.12 75)" }}>
              ✦ ✦ ✦
            </span>
          </div>
          <p
            className="mt-4 text-base max-w-xl mx-auto font-body leading-relaxed"
            style={{ color: "oklch(0.42 0.04 40)" }}
          >
            Ancient Indian bridges are documented across millennia — from epic
            poetry to diplomatic accounts, religious travel logs to engineering
            treatises.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.72 0.12 75 / 0.5) 10%, oklch(0.72 0.12 75 / 0.5) 90%, transparent)",
            }}
          />

          <div className="space-y-8">
            {EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <TimelineItem
                  key={event.id}
                  event={event}
                  index={i}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  index,
  isLeft,
}: { event: TimelineEvent; index: number; isLeft: boolean }) {
  const [itemRef, itemVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <div
      ref={itemRef}
      className={`relative flex items-start gap-4 md:gap-0 transition-all duration-700 ${
        itemVisible
          ? "opacity-100 translate-x-0"
          : isLeft
            ? "opacity-0 -translate-x-8"
            : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      data-ocid={`timeline.item.${index + 1}`}
    >
      {/* Left side — desktop */}
      <div
        className={`hidden md:block w-[calc(50%-2rem)] ${isLeft ? "pr-8 text-right" : "order-3 pl-8 text-left"}`}
      >
        {isLeft && <EventCard event={event} />}
        {!isLeft && <div className="h-full" />}
      </div>

      {/* Center dot — desktop */}
      <div className="hidden md:flex shrink-0 w-16 items-center justify-center order-2">
        <div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
          style={{
            background: "oklch(0.95 0.03 60)",
            borderColor: "oklch(0.72 0.12 75)",
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "oklch(0.52 0.12 30)" }}
          />
        </div>
      </div>

      {/* Right side — desktop */}
      <div
        className={`hidden md:block w-[calc(50%-2rem)] ${!isLeft ? "pl-8" : "order-3 pr-8"}`}
      >
        {!isLeft && <EventCard event={event} />}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center pt-1">
          <div
            className="w-4 h-4 rounded-full border-2 shrink-0"
            style={{
              background: "oklch(0.95 0.03 60)",
              borderColor: "oklch(0.72 0.12 75)",
            }}
          />
          <div
            className="w-0.5 flex-1 mt-2"
            style={{ background: "oklch(0.72 0.12 75 / 0.3)" }}
          />
        </div>
        <div className="flex-1 pb-4">
          <EventCard event={event} />
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: TimelineEvent }) {
  return (
    <div
      className="p-5 rounded-lg border shadow-subtle"
      style={{
        background: "oklch(0.97 0.02 58)",
        borderColor: "oklch(0.82 0.05 55)",
      }}
    >
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span
          className="text-xs font-body font-bold px-2 py-0.5 rounded-sm"
          style={{
            background: "oklch(0.52 0.12 30 / 0.12)",
            color: "oklch(0.45 0.12 28)",
          }}
        >
          {event.year}
        </span>
        <span
          className="text-xs font-body px-2 py-0.5 rounded-sm"
          style={{
            background: "oklch(0.72 0.12 75 / 0.12)",
            color: "oklch(0.52 0.10 50)",
          }}
        >
          {event.era}
        </span>
      </div>
      <h3
        className="font-display font-bold text-lg mb-1"
        style={{ color: "oklch(0.32 0.12 22)" }}
      >
        {event.title}
      </h3>
      <p
        className="text-xs font-body font-semibold mb-2 italic"
        style={{ color: "oklch(0.58 0.10 52)" }}
      >
        Source: {event.source}
      </p>
      <p
        className="text-sm font-body leading-relaxed mb-3"
        style={{ color: "oklch(0.42 0.04 40)" }}
      >
        {event.description}
      </p>
      <div
        className="text-xs font-body px-3 py-1.5 rounded border-l-2"
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
          Significance:{" "}
        </span>
        {event.significance}
      </div>
    </div>
  );
}
