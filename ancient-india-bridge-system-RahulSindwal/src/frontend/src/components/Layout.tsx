import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 bg-background">{children}</main>
      <Footer />
    </div>
  );
}
