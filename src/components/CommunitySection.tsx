import { useReveal } from "@/hooks/use-reveal";
import { communityItems, type CommunityItem } from "@/data/community";
import { ArrowUpRight } from "lucide-react";

function CommunityCard({ item, index }: { item: CommunityItem; index: number }) {
  const variant = index % 4;

  return (
    <div
      className={`reveal stagger-${index + 1} group community-card community-card--${variant} relative border rounded-2xl p-6 card-hover transition-all duration-300 overflow-hidden`}
    >
      <div
        className={`community-card-fill community-card-fill--${variant}`}
        aria-hidden="true"
      />
      <div
        className={`absolute top-0 left-0 right-0 h-1 z-[2] community-card-bar--${variant}`}
      />
      <div className="relative z-[3]">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-[#17171A] tracking-tight">{item.title}</h3>
            <p className="text-sm text-[#5B7CFF] font-medium mt-0.5">{item.role}</p>
          </div>
          <span className="text-xs text-[#6B6B73] whitespace-nowrap">{item.year}</span>
        </div>
        <p className="text-sm leading-[1.65] text-[#6B6B73] mb-3">{item.description}</p>
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
    </div>
  );
}

export function CommunitySection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="community"
      ref={ref}
      className="relative py-14"
    >
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
    </section>
  );
}
