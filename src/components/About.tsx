import { useReveal } from "@/hooks/use-reveal";
import { education } from "@/data/milestones";
import { Trophy } from "lucide-react";

const pillars = [
  {
    title: "Build With Purpose",
    description: "AI systems designed around real problems - not technology looking for a use case.",
    accent: "#5B7CFF",
  },
  {
    title: "Engineer For Scale",
    description: "APIs, workflows, cloud infrastructure and production systems built to handle real traffic.",
    accent: "#8B6DFF",
  },
  {
    title: "Share What I Learn",
    description: "Technical speaking, open-source contribution and community building with aspiring developers.",
    accent: "#42C7D9",
  },
];

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-14 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          {/* Left: heading + prose */}
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#5B7CFF]" />
              <span className="section-eyebrow">About</span>
            </div>
            <h2 className="reveal stagger-1 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[#17171A] mb-6">
              More Than a <span className="gradient-text-blue-violet">Tech Stack.</span>
            </h2>
            <div className="reveal stagger-2 space-y-4 text-[1.02rem] leading-[1.75] text-[#6B6B73] max-w-[520px]">
              <p>
                I'm an AI-focused software engineer who works across the full lifecycle - from
                research and prototyping to production deployment and measurable impact. My work
                lives at the intersection of <span className="editorial-mark text-[#17171A] font-medium">Agentic AI</span>, automation,
                and full-stack engineering.
              </p>
              <p>
                Beyond the day job, I publish IEEE research, work on real-world projects at hackathons, speak at
                workshops, and contribute to open source - because building is only half the
                story. The other half is explaining it.
              </p>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal stagger-${i + 1} group relative bg-white border border-[#E7E7E2] rounded-2xl p-6 card-hover overflow-hidden`}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: p.accent }}
                />
                <div className="pl-3">
                  <h3 className="text-base font-bold text-[#17171A] mb-2 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-[1.65] text-[#6B6B73]">{p.description}</p>
                </div>
              </div>
            ))}

            {/* Education compact card */}
            <div className="reveal stagger-4 bg-[#F0F0ED] border border-[#E7E7E2] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="section-eyebrow text-[#5B7CFF]">The Foundation</span>
              </div>
              <h3 className="text-sm font-bold text-[#17171A] leading-snug mb-1">
                {education.degree}
              </h3>
              <p className="text-xs text-[#6B6B73] mb-3">
                {education.institution}
              </p>
              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="text-lg font-bold text-[#17171A]">{education.cgpa}</span>
                  <span className="text-xs text-[#6B6B73] ml-1">CGPA</span>
                </div>
                <div className="w-px h-8 bg-[#E7E7E2]" />
                <div>
                  <span className="text-lg font-bold text-[#17171A]">{education.specializationScore}</span>
                  <span className="text-xs text-[#6B6B73] ml-1">AI & ML Specialization</span>
                </div>
              </div>

              {/* Best Outgoing Student Award */}
              <div className="mt-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fb923c] border-2 border-[#f59e0b]/40 p-4 shadow-[0_4px_20px_rgba(245,158,11,0.15)]">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#ea580c] flex items-center justify-center shadow-lg shadow-[#f59e0b]/30">
                    <Trophy className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] text-[#c2410c] uppercase mb-0.5">Award</p>
                    <p className="text-sm font-bold text-[#7c2d12] leading-snug">Best Outgoing Student</p>
                    <p className="text-xs text-[#9a3412] mt-0.5">Recognized for academic excellence, leadership, sports and all-round achievement</p>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#f59e0b]/20 blur-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
