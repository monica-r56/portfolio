import { useReveal } from "@/hooks/use-reveal";
import { publications, type PublicationItem } from "@/data/publications";
import { hackathons } from "@/data/speaking";
import { AnimatedSectionBackground } from "@/components/AnimatedSectionBackground";
import { ExternalLink, FileText, Trophy, Zap } from "lucide-react";

function PublicationCard({ pub, index }: { pub: PublicationItem; index: number }) {
  return (
    <div className={`reveal stagger-${index + 1} group relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 card-hover overflow-hidden`}>
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-[#8B6DFF]/15 border border-[#8B6DFF]/20 flex items-center justify-center">
          <FileText className="size-4 text-[#8B6DFF]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-[#42C7D9]">{pub.conference}</span>
            <span className="text-xs text-white/30"></span>
            <span className="text-xs text-white/40">{pub.year}</span>
          </div>
          <h3 className="text-base font-semibold text-white leading-snug mb-2">{pub.title}</h3>
          <p className="text-sm leading-[1.6] text-white/50 mb-4">{pub.description}</p>
          {pub.tags && (
          <div className="flex flex-wrap gap-1.5">
            {pub.tags.map((tag) => (
              <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                {tag}
              </span>
            ))}
          </div>
          )}
          {pub.publicationUrl && (
            <div className="mt-4">
              <a
                href={pub.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#5B7CFF] to-[#3b82f6] rounded-full px-4 py-2 transition-all hover:shadow-lg hover:shadow-[#5B7CFF]/30"
              >
                <ExternalLink className="size-3.5" /> View Publication
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ResearchSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="research"
      ref={ref}
      className="relative py-14 overflow-hidden"
      style={{ color: "var(--dark-feature-foreground)" }}
    >
      <AnimatedSectionBackground variant="research" />

      {/* Top transition: violet glow from projects */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(to bottom, rgba(139,109,255,0.08) 0%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#42C7D9]" />
            <span className="section-eyebrow text-[#42C7D9]">Research</span>
          </div>
          <h2 className="reveal stagger-1 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            From Research to <span style={{ background: "linear-gradient(135deg, #42C7D9, #8B6DFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Real-World Builds.</span>
          </h2>
          <p className="reveal stagger-2 mt-4 text-[1rem] leading-[1.7] text-white/50 max-w-[500px]">
            Research → Experimentation → Engineering → Impact.
          </p>
        </div>

        {/* Publications */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.id} pub={pub} index={i} />
          ))}
        </div>

        {/* Hackathons subsection */}
        <div className="mb-6">
          <div className="reveal flex items-center gap-3 mb-2">
            <Zap className="size-4 text-[#F09A6A]" />
            <h3 className="text-xl font-bold text-white tracking-tight">Building Under Constraints.</h3>
          </div>
          <p className="reveal stagger-1 text-sm text-white/50 max-w-[500px] mb-6">
            Hackathons demonstrate rapid prototyping, problem solving, teamwork, leadership and shipping under constraints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {hackathons.map((hack, i) => (
            <div key={hack.id} className={`reveal stagger-${i + 1} relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 card-hover overflow-hidden`}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#F09A6A]/15 border border-[#F09A6A]/20 flex items-center justify-center">
                  <Trophy className="size-4 text-[#F09A6A]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-[#F09A6A]">{hack.type}</span>
                    <span className="text-xs text-white/30">·</span>
                    <span className="text-xs text-white/40">{hack.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white leading-snug mb-1">{hack.title}</h3>
                  <p className="text-xs text-white/40 mb-3">{hack.organization}</p>
                  <p className="text-sm leading-[1.6] text-white/50 mb-3">{hack.description}</p>
                  {hack.whatILearned && (
                    <p className="text-sm leading-[1.6] text-white/40 italic border-l-2 border-[#F09A6A]/30 pl-3">
                      {hack.whatILearned}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {hack.topics?.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom transition: dark → violet → off-white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(139,109,255,0.10) 40%, rgba(248,248,245,0.15) 100%)" }}
      />
    </section>
  );
}
