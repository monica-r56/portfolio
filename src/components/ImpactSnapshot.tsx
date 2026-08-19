import { useEffect, useRef } from "react";
import { impactMetrics } from "@/data/milestones";
import { TrendingUp, Activity, Gauge, Sparkles } from "lucide-react";

const iconMap = [TrendingUp, Activity, Gauge, Sparkles];
const accentMap = [
  { from: "#5B7CFF", to: "#8B6DFF", glow: "rgba(91,124,255,0.15)" },
  { from: "#42C7D9", to: "#5B7CFF", glow: "rgba(66,199,217,0.15)" },
  { from: "#8B6DFF", to: "#C875FF", glow: "rgba(139,109,255,0.15)" },
  { from: "#F09A6A", to: "#C875FF", glow: "rgba(240,154,106,0.15)" },
];

export function ImpactSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-scale").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#5B7CFF]" />
            <span className="section-eyebrow">Impact</span>
          </div>
          <h2 className="reveal stagger-1 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#17171A]">
            What My Work Changes.
          </h2>
          <p className="reveal stagger-2 mt-4 text-[1rem] leading-[1.7] text-[#6B6B73] max-w-[500px]">
            Engineering decisions that produce measurable outcomes - not just shipped features.
          </p>
        </div>

        {/* Metrics grid - bold, highlighted cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactMetrics.map((metric, i) => {
            const Icon = iconMap[i % iconMap.length];
            const accent = accentMap[i % accentMap.length];
            return (
              <div
                key={metric.id}
                className={`reveal card-hover stagger-${i + 1} relative group rounded-2xl p-6 overflow-hidden border border-white/40 backdrop-blur-sm`}
                style={{
                  background: `linear-gradient(135deg, ${accent.glow} 0%, rgba(255,255,255,0.9) 100%)`,
                }}
              >
                {/* Bold gradient top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
                  }}
                />

                {/* Icon with gradient background */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mt-2"
                  style={{
                    background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                    boxShadow: `0 8px 24px ${accent.glow}`,
                  }}
                >
                  <Icon className="size-5 text-white" />
                </div>

                {/* Metric - bold and large */}
                <div
                  className="metric-number text-[2.75rem] font-bold leading-none tracking-tight mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {metric.value}
                </div>

                {/* Label */}
                <p className="text-sm font-bold text-[#17171A] mb-2 leading-snug">
                  {metric.label}
                </p>

                {/* Description */}
                <p className="text-xs leading-[1.6] text-[#6B6B73]">{metric.description}</p>

                {/* Projected badge */}
                {metric.isProjected && (
                  <div
                    className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                    style={{
                      background: `${accent.from}15`,
                      border: `1px solid ${accent.from}30`,
                    }}
                  >
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide"
                      style={{ color: accent.from }}
                    >
                      Projected impact
                    </span>
                  </div>
                )}

                {/* Ambient hover glow */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${accent.from} 0%, transparent 70%)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
