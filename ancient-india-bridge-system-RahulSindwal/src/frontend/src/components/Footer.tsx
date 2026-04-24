const EXPLORE_LINKS: { label: string; href: string }[] = [
  { label: "Overview", href: "#overview" },
  { label: "Bridge Types", href: "#types" },
  { label: "Notable Bridges", href: "#notable" },
  { label: "Rama Setu", href: "#ramasetu" },
  { label: "Historical Timeline", href: "#timeline" },
  { label: "Engineering", href: "#engineering" },
  { label: "Legacy", href: "#legacy" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer
      className="border-t stone-texture"
      style={{
        background: "oklch(0.22 0.10 22)",
        borderColor: "oklch(0.72 0.12 75 / 0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                style={{
                  borderColor: "oklch(0.72 0.12 75)",
                  background: "oklch(0.45 0.16 28)",
                }}
              >
                <span
                  className="font-display font-bold text-sm"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  S
                </span>
              </div>
              <span
                className="font-display font-bold text-xl"
                style={{ color: "oklch(0.92 0.06 72)" }}
              >
                SETU
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.68 0.04 55)" }}
            >
              Exploring the engineering marvels of Ancient Indian bridge
              construction — from the Himalayas to the Deccan Plateau.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h3
              className="font-display font-semibold mb-3 text-sm uppercase tracking-widest"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Explore
            </h3>
            <ul className="space-y-1.5">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.href)}
                    className="text-sm transition-smooth cursor-pointer hover:opacity-80 text-left"
                    style={{ color: "oklch(0.72 0.06 58)" }}
                    data-ocid={`footer.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h3
              className="font-display font-semibold mb-3 text-sm uppercase tracking-widest"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              Primary Sources
            </h3>
            <ul className="space-y-1.5">
              {[
                "Valmiki Ramayana",
                "Arthashastra — Chanakya",
                "Indica — Megasthenes",
                "Faxian Travel Records",
                "Xuanzang's Journey",
                "Archaeological Survey of India",
              ].map((source) => (
                <li
                  key={source}
                  className="text-sm"
                  style={{ color: "oklch(0.62 0.04 50)" }}
                >
                  {source}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "oklch(0.72 0.12 75 / 0.2)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.55 0.03 50)" }}>
            © {year} SETU — Ancient India Bridge System. Educational resource.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.52 0.03 48)" }}>
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-smooth"
              style={{ color: "oklch(0.68 0.10 68)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
