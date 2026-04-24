import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.05,
  });

  const scrollToOverview = () => {
    document.querySelector("#overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-ancient-bridge.dim_1400x700.jpg"
          alt="Ancient Indian Bridge"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.22 0.12 22 / 0.75) 0%, oklch(0.18 0.10 20 / 0.85) 60%, oklch(0.14 0.08 18 / 0.95) 100%)",
          }}
        />
        {/* Stone texture overlay */}
        <div className="absolute inset-0 stone-texture-dark opacity-60" />
      </div>

      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.12 75), oklch(0.68 0.22 65), oklch(0.72 0.12 75), transparent)",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto"
      >
        {/* Ornamental label */}
        <div
          className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div
            className="h-px w-12"
            style={{ background: "oklch(0.72 0.12 75 / 0.8)" }}
          />
          <span
            className="text-xs font-body font-semibold uppercase tracking-[0.25em]"
            style={{ color: "oklch(0.72 0.12 75)" }}
          >
            Ancient Engineering Marvels
          </span>
          <div
            className="h-px w-12"
            style={{ background: "oklch(0.72 0.12 75 / 0.8)" }}
          />
        </div>

        {/* Main title */}
        <h1
          className={`font-display font-bold leading-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            color: "oklch(0.96 0.03 72)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
          }}
        >
          SETU
        </h1>
        <p
          className={`font-display font-medium mb-6 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            color: "oklch(0.88 0.08 70)",
            fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)",
            lineHeight: 1.3,
          }}
        >
          Engineering Marvels of
          <br />
          Ancient India
        </p>

        {/* Description */}
        <p
          className={`font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ color: "oklch(0.78 0.04 58)" }}
        >
          Discover the extraordinary bridge-building traditions of ancient India
          — from Himalayan rope bridges and stone arch masterpieces to the
          legendary Rama Setu described in the Ramayana, spanning thousands of
          years of ingenuity.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <button
            type="button"
            onClick={scrollToOverview}
            className="px-8 py-3.5 font-body font-semibold text-sm rounded-sm transition-all duration-300 pulse-gold hover:scale-105"
            style={{
              background: "oklch(0.55 0.14 28)",
              color: "oklch(0.96 0.03 72)",
              border: "2px solid oklch(0.72 0.12 75)",
              letterSpacing: "0.08em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "oklch(0.62 0.18 30)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "oklch(0.55 0.14 28)";
            }}
            data-ocid="hero.explore_button"
          >
            Explore the Bridges
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#ramasetu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 font-body font-medium text-sm rounded-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              color: "oklch(0.88 0.06 70)",
              border: "2px solid oklch(0.72 0.12 75 / 0.5)",
              letterSpacing: "0.08em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "oklch(0.72 0.12 75)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "oklch(0.72 0.12 75 / 0.5)";
            }}
            data-ocid="hero.ramasetu_button"
          >
            Rama Setu Legend
          </button>
        </div>

        {/* Stats row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {[
            { value: "3000+", label: "Years of History" },
            { value: "5", label: "Bridge Types" },
            { value: "50+", label: "Notable Structures" },
            { value: "12+", label: "Ancient Texts" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-bold text-2xl"
                style={{ color: "oklch(0.72 0.12 75)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-body mt-0.5 uppercase tracking-widest"
                style={{ color: "oklch(0.62 0.04 52)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-70 hover:opacity-100 transition-opacity"
        onClick={scrollToOverview}
        aria-label="Scroll down"
        data-ocid="hero.scroll_indicator"
      >
        <ChevronDown size={28} style={{ color: "oklch(0.72 0.12 75)" }} />
      </button>
    </section>
  );
}
