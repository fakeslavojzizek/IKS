import { Layout } from "./components/Layout";
import { BiographySection } from "./pages/BiographySection";
import { HeroSection } from "./pages/HeroSection";
import { InstrumentsSection } from "./pages/InstrumentsSection";
import { LegacySection } from "./pages/LegacySection";
import { ProceduresSection } from "./pages/ProceduresSection";
import { RhinoplastySection } from "./pages/RhinoplastySection";
import { SamhitaSection } from "./pages/SamhitaSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <BiographySection />
      <SamhitaSection />
      <InstrumentsSection />
      <ProceduresSection />
      <RhinoplastySection />
      <LegacySection />
    </Layout>
  );
}
