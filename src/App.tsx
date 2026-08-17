import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactSnapshot } from "@/components/ImpactSnapshot";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { ResearchSection } from "@/components/ResearchSection";
import { TechTalks } from "@/components/TechTalks";
import { CommunitySection } from "@/components/CommunitySection";
import { Technology } from "@/components/Technology";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingEmail } from "@/components/FloatingEmail";
import { initAnalytics } from "@/analytics/analytics";
import { useAnalyticsTracking } from "@/hooks/use-analytics-tracking";

export function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  useAnalyticsTracking();

  return (
    <div className="relative min-h-screen bg-[#F8F8F5] text-[#17171A] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ImpactSnapshot />
        <About />
        <ExperienceTimeline />
        <Projects />
        <ResearchSection />
        <TechTalks />
        <CommunitySection />
        <Technology />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <FloatingEmail />
    </div>
  );
}

export default App;
