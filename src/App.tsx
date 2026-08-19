import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactSnapshot } from "@/components/ImpactSnapshot";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { ResearchSection } from "@/components/ResearchSection";
import { TechTalks, FeaturedWorkshop } from "@/components/TechTalks";
import { CommunitySection } from "@/components/CommunitySection";
import { EngagementSectionBackground } from "@/components/EngagementSectionBackground";
import { Technology } from "@/components/Technology";
import { Philosophy } from "@/components/Philosophy";
import { AnimatedSectionBackground } from "@/components/AnimatedSectionBackground";
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
        <div className="relative overflow-hidden">
          <AnimatedSectionBackground variant="journey" />
          <ImpactSnapshot />
          <About />
          <FeaturedWorkshop />
          <ExperienceTimeline />
          <Projects />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(139,109,255,0.06) 100%)",
            }}
          />
        </div>
        <ResearchSection />
        <div className="relative overflow-hidden">
          <EngagementSectionBackground />
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(139,109,255,0.08) 0%, transparent 100%)",
            }}
          />
          <TechTalks />
          <CommunitySection />
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to top, var(--background) 0%, transparent 100%)",
            }}
          />
        </div>
        <div className="relative overflow-hidden">
          <AnimatedSectionBackground variant="skills" />
          <Technology />
          <Philosophy />
        </div>
        <Contact />
      </main>
      <Footer />
      <FloatingEmail />
    </div>
  );
}

export default App;
