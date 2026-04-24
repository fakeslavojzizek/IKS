import { motion } from "motion/react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "oklch(0.91 0.05 68)" }}
    >
      {/* Parchment texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 20%, oklch(0.88 0.06 65 / 0.6) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 80%, oklch(0.85 0.08 40 / 0.4) 0%, transparent 50%)`,
        }}
      />

      {/* Hero image background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-instruments.dim_1400x700.jpg"
          alt="Ancient Indian surgical instruments on parchment"
          className="w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.91 0.05 68 / 0.7) 0%, oklch(0.91 0.05 68 / 0.85) 60%, oklch(0.91 0.05 68) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Sanskrit ornament */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-primary text-sm tracking-[0.4em] uppercase mb-6"
        >
          ॐ — Circa 600 BCE — ॐ
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-7xl sm:text-8xl md:text-9xl text-primary tracking-[0.15em] mb-4 leading-none"
          style={{ textShadow: "0 2px 20px oklch(0.50 0.12 70 / 0.3)" }}
        >
          SUSHRUTA
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-3 my-6"
        >
          <div className="h-px w-32 bg-accent" />
          <span className="text-accent text-lg">✦</span>
          <div className="h-px w-32 bg-accent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display italic text-xl sm:text-2xl text-foreground/75 tracking-widest uppercase mb-8"
        >
          Father of Surgery · Founder of Ayurvedic Medicine
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="font-body text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Twenty-six centuries before the modern operating theatre, Sushruta of
          Varanasi codified over 300 surgical procedures, 120 surgical
          instruments, and the world's first systematic treatise on medicine —
          the <em>Sushruta Samhita</em>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            type="button"
            onClick={() => scrollTo("#biography")}
            data-ocid="hero.explore_button"
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase transition-smooth hover:bg-primary/80 shadow-scholarly"
          >
            Explore His Life
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#instruments")}
            data-ocid="hero.instruments_button"
            className="px-8 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase transition-smooth hover:bg-muted/40"
          >
            View Instruments
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-10 bg-border" />
      </motion.div>
    </section>
  );
}
