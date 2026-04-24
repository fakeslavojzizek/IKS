import { BridgeTypesSection } from "@/pages/sections/BridgeTypesSection";
import { EngineeringSection } from "@/pages/sections/EngineeringSection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { LegacySection } from "@/pages/sections/LegacySection";
import { MaterialsSection } from "@/pages/sections/MaterialsSection";
import { NotableBridgesSection } from "@/pages/sections/NotableBridgesSection";
import { OverviewSection } from "@/pages/sections/OverviewSection";
import { RamaSetuSection } from "@/pages/sections/RamaSetuSection";
import { TimelineSection } from "@/pages/sections/TimelineSection";

export function HomePage() {
  return (
    <div data-ocid="home.page">
      <HeroSection />
      <OverviewSection />
      <BridgeTypesSection />
      <RamaSetuSection />
      <TimelineSection />
      <EngineeringSection />
      <NotableBridgesSection />
      <MaterialsSection />
      <LegacySection />
    </div>
  );
}
