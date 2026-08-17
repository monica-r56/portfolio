import { useEffect, useRef } from "react";
import { SECTION_IDS, PAGE_ID } from "@/analytics/analyticsConfig";
import { trackSectionView, trackSectionTime, trackScrollDepth, trackEndReached } from "@/analytics/events";

export function useAnalyticsTracking(): void {
  const sectionTimers = useRef<Record<string, number>>({});
  const activeSection = useRef<string | null>(null);
  const scrollMilestones = useRef<Set<number>>(new Set());
  const endReached = useRef(false);

  useEffect(() => {
    // Section view + engagement time tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;

          if (entry.isIntersecting) {
            // Start timer
            if (!sectionTimers.current[id]) {
              sectionTimers.current[id] = Date.now();
            }

            // Fire section view once per entry
            if (activeSection.current !== id) {
              if (activeSection.current && sectionTimers.current[activeSection.current]) {
                const elapsed = (Date.now() - sectionTimers.current[activeSection.current]) / 1000;
                trackSectionTime(activeSection.current, elapsed);
                sectionTimers.current[activeSection.current] = Date.now();
              }
              activeSection.current = id;
              const sectionIndex = SECTION_IDS.indexOf(id as (typeof SECTION_IDS)[number]);
              trackSectionView(id, sectionIndex >= 0 ? sectionIndex : -1, PAGE_ID);

              if (id === "contact" && !endReached.current) {
                endReached.current = true;
                trackEndReached();
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (scrollTop / docHeight) * 100;
      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach((m) => {
        if (pct >= m && !scrollMilestones.current.has(m)) {
          scrollMilestones.current.add(m);
          trackScrollDepth(m);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      // Flush remaining timer
      if (activeSection.current && sectionTimers.current[activeSection.current]) {
        const elapsed = (Date.now() - sectionTimers.current[activeSection.current]) / 1000;
        trackSectionTime(activeSection.current, elapsed);
      }
    };
  }, []);
}
