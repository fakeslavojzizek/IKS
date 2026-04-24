import { useEffect, useState } from "react";

const navItems = [
  { label: "Biography", href: "#biography" },
  { label: "Samhita", href: "#samhita" },
  { label: "Instruments", href: "#instruments" },
  { label: "Procedures", href: "#procedures" },
  { label: "Rhinoplasty", href: "#rhinoplasty" },
  { label: "Legacy", href: "#legacy" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-scholarly"
          : "bg-card/95 border-b border-border/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              document
                .querySelector("#hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-display text-2xl text-primary tracking-widest hover:text-accent transition-smooth"
            data-ocid="nav.logo_link"
          >
            ✦ SUSHRUTA ✦
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                data-ocid={`nav.${item.label.toLowerCase()}_link`}
                className="px-3 py-2 text-xs tracking-widest uppercase font-body text-foreground/70 hover:text-primary hover:bg-muted/40 transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-smooth"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.mobile_menu_toggle"
          >
            <span className="font-display text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t border-border py-2 bg-card"
            data-ocid="nav.mobile_menu"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                data-ocid={`nav.mobile.${item.label.toLowerCase()}_link`}
                className="block px-4 py-3 text-xs tracking-widest uppercase font-body text-foreground/70 hover:text-primary hover:bg-muted/30 transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
