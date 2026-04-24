import type { NavLink } from "@/types/bridge";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS: NavLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Bridges", href: "#types" },
  { label: "Notable", href: "#notable" },
  { label: "Rama Setu", href: "#ramasetu" },
  { label: "History", href: "#timeline" },
  { label: "Engineering", href: "#engineering" },
  { label: "Legacy", href: "#legacy" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-accent shadow-deep-terracotta border-b border-ring/30"
          : "bg-accent/95 backdrop-blur-sm border-b border-ring/20"
      }`}
      style={{
        backgroundColor: scrolled
          ? "oklch(0.22 0.12 20)"
          : "oklch(0.28 0.12 22)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
          className="flex items-center gap-2 group"
          data-ocid="nav.logo_link"
          aria-label="Back to top"
        >
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
            className="font-display font-bold text-lg tracking-wide group-hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.92 0.06 72)" }}
          >
            SETU
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-sm font-body font-medium rounded transition-all duration-200 hover:opacity-100"
                style={{ color: "oklch(0.85 0.06 72)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                  (e.target as HTMLElement).style.background =
                    "oklch(0.38 0.14 25)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.85 0.06 72)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded transition-smooth"
          style={{ color: "oklch(0.85 0.06 72)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          data-ocid="nav.mobile_menu_toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(0.22 0.12 20)",
            borderColor: "oklch(0.72 0.12 75 / 0.25)",
          }}
        >
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-6 py-3 text-base font-body transition-all duration-200"
                  style={{ color: "oklch(0.85 0.06 72)" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color =
                      "oklch(0.72 0.12 75)";
                    (e.target as HTMLElement).style.background =
                      "oklch(0.32 0.14 22)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color =
                      "oklch(0.85 0.06 72)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                  data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
