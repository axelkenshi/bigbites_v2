
import { HeroSection } from "./components/HeroSection";
import { BentoGridDemo } from "./components/BentoGridDemo";
import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";

export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <GridBackgroundDemo />
      <BentoGridDemo />
      <StickyScrollRevealDemo />
    </div>
  );
}
