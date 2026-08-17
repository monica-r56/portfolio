import { useReveal } from "@/hooks/use-reveal";
import { communityItems, type CommunityItem } from "@/data/community";
import { ArrowUpRight } from "lucide-react";

function CommunityCard({ item, index }: { item: CommunityItem; index: number }) {
  return (
    <div className={`reveal stagger-${index + 1} group relative bg-white border border-[#E7E7E2] rounded-2xl p-6 card-hover shadow-[0_4px_24px_rgba(23,23,26,0.06)] hover:shadow-[0_12px_40px_rgba(139,109,255,0.12)] transition-all duration-300 overflow-hidden`}>
      {/* Gradient accent bar - always visible for contrast */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #5B7CFF, #8B6DFF)" }} />
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-base font-bold text-[#17171A] tracking-tight">{item.title}</h3>
          <p className="text-sm text-[#5B7CFF] font-medium mt-0.5">{item.role}</p>
        </div>
        <span className="text-xs text-[#6B6B73] whitespace-nowrap">{item.year}</span>
      </div>
      <p className="text-sm leading-[1.65] text-[#6B6B73] mb-3">{item.description}</p>
      {/* <div className="border-l-2 border-[#5B7CFF]/30 bg-[#5B7CFF]/5 rounded-r-lg pl-3 pr-2 py-2 mb-4">
        <p className="text-xs leading-[1.6] text-[#17171A] font-medium">{item.contribution}</p>
      </div> */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {item.tags.map((t) => (
          <span key={t} className="tech-pill text-[11px] py-0.5 px-2">{t}</span>
        ))}
      </div>
      {item.link && (
        <a href={item.link} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-[#5B7CFF] hover:text-[#8B6DFF] transition-colors">
          Learn more <ArrowUpRight className="size-3.5" />
        </a>
      )}
    </div>
  );
}

export function CommunitySection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="community"
      ref={ref}
      className="relative py-14 overflow-hidden"
      style={{ background: "var(--surface-tint)" }}
    >
      {/* Top transition */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--background) 0%, transparent 100%)" }}
      />

      {/* Ambient blob */}
      <div className="ambient-blob absolute top-1/3 right-0 w-[400px] h-[400px] opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #8B6DFF 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#5B7CFF]" />
            <span className="section-eyebrow">Community</span>
          </div>
          <h2 className="reveal stagger-1 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#17171A]">
            I Build With <span className="gradient-text-blue-violet">People, Too.</span>
          </h2>
          <p className="reveal stagger-2 mt-4 text-[1rem] leading-[1.7] text-[#6B6B73] max-w-[500px]">
            Open source, mentoring, and developer ecosystem participation - because the best work happens in community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {communityItems.map((item, i) => (
            <CommunityCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
      />
    </section>
  );
}
