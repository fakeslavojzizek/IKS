import { Link, useRouter } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/techniques" as const, label: "Techniques" },
  { to: "/knowledge" as const, label: "Knowledge Hub" },
  { to: "/founder" as const, label: "Founder" },
];

const presenters = [
  "Hitesh Thanke",
  "Onkar Tambe",
  "Suyash Talekar",
  "Pavan Torne",
  "Sarthak Warghade",
  "Aditya Thete",
  "Avishkar Sutar",
  "Onkar Zate",
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              data-ocid="nav.logo"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <Leaf size={18} className="text-primary" />
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-sm text-primary leading-tight">
                  मन शासन
                </p>
                <p className="font-body text-xs text-muted-foreground leading-tight">
                  Ancient Mind Control
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                    className={`px-4 py-2 rounded-lg font-body text-sm transition-smooth ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-muted transition-smooth"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              data-ocid="nav.mobile_menu_toggle"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card py-2 px-4">
            {navLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  data-ocid={`nav.mobile.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  className={`block px-3 py-2.5 rounded-lg font-body text-sm transition-smooth my-0.5 ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Leaf size={16} className="text-primary" />
                <span className="font-display text-primary text-sm">
                  मन शासन
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Authentic mind control techniques from the ancient Indian
                tradition, drawing from the Vedas, Yoga Sutras, and Charaka
                Samhita.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display text-sm text-foreground mb-3">
                Explore
              </h4>
              <ul className="space-y-1.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Presenters */}
            <div>
              <h4 className="font-display text-sm text-foreground mb-3">
                Presented By
              </h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                {presenters.map((name) => (
                  <li
                    key={name}
                    className="font-body text-xs text-muted-foreground"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.hostname : "",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            <p className="font-body text-xs text-muted-foreground italic">
              सर्वे भवन्तु सुखिनः — May all beings be happy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
