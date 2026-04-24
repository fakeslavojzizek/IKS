import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>

      {/* Team Credits Footer */}
      <footer className="bg-card border-t border-border" data-ocid="footer">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Divider ornament */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <span className="font-display text-primary text-lg tracking-widest">
              ✦ ✦ ✦
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Team credits */}
          <div className="text-center mb-6">
            <p className="font-display text-sm tracking-widest uppercase text-muted-foreground mb-4">
              — Presented by —
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-w-3xl mx-auto">
              {[
                "Katore Pranjal Pradip",
                "Khatavkar Tejal Rahul",
                "Kenadkar Sayali Pradip",
                "Kokare Aniruddha Satish",
                "Kambale Shravani Suresh",
                "Jadhav Adesh Yuvraj",
                "Katkar Swamini Dinkar",
                "Lohakare Saksham Mohan",
              ].map((name) => (
                <span
                  key={name}
                  className="text-xs font-body text-muted-foreground tracking-wide py-1"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-border/50" />
          </div>

          <div className="text-center">
            <p className="text-xs font-body text-muted-foreground tracking-wide">
              © {year}. Built with love using{" "}
              <a
                href={utm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
