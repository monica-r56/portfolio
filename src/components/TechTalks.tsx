import { useReveal } from "@/hooks/use-reveal";
import { speakingEvents, communityEvents, type SpeakingItem, type EventItem } from "@/data/speaking";
import { ExternalLink, Calendar, Users } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";

function WorkshopCard({ item }: { item: SpeakingItem }) {
  return (
    <div className="reveal group relative bg-white border border-[#E7E7E2] rounded-2xl overflow-hidden card-hover shadow-[0_4px_24px_rgba(23,23,26,0.06)] hover:shadow-[0_12px_40px_rgba(91,124,255,0.12)] transition-all duration-300">
      {/* Gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B7CFF] to-[#8B6DFF] z-10" />

      {/* Image */}
      <div className="project-img-wrap relative aspect-[16/9] bg-gradient-to-br from-[#F0F0ED] to-[#E7E7F5] overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}workshop.jpeg`}
          alt={item.imageAlt || item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            const parent = t.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div class="w-16 h-16 rounded-full bg-[#5B7CFF]/10 border border-[#5B7CFF]/20 flex items-center justify-center mb-3">
                    <span class="text-2xl">🎤</span>
                  </div>
                  <span class="text-sm text-[#6B6B73] font-medium">Workshop photo</span>
                  <span class="text-xs text-[#6B6B73]/70">coming soon</span>
                </div>`;
            }
          }}
        />
        <div className="absolute top-4 left-4 bg-[#5B7CFF] text-white rounded-lg px-2.5 py-1 text-xs font-semibold">
          {item.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3 text-xs text-[#6B6B73]">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" /> {item.date}
          </span>

          {item.audience && (
            <>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Users className="size-3" /> {item.audience}
              </span>
            </>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#17171A] tracking-tight mb-2">
          {item.title}
        </h3>

        <p className="text-sm leading-[1.65] text-[#6B6B73] mb-4">
          {item.description}
        </p>

        {item.highlight && (
          <div className="mb-4 rounded-xl bg-gradient-to-br from-[#5B7CFF]/10 to-[#8B6DFF]/10 border border-[#5B7CFF]/20 p-3">
            <p className="text-xs leading-[1.6] text-[#17171A] font-medium">
              {item.highlight}
            </p>
          </div>
        )}

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.topics.map((t) => (
            <span
              key={t}
              className="text-[11px] py-0.5 px-2 rounded-full bg-white border-2 border-[#5B7CFF]/40 text-[#5B7CFF] shadow-[0_2px_8px_rgba(91,124,255,0.15)] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {item.linkedinPostUrl && (
            <a
              href={item.linkedinPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0A66C2] to-[#0077b5] rounded-full px-3.5 py-1.5 transition-all hover:shadow-lg hover:shadow-[#0A66C2]/30"
            >
              <LinkedInIcon className="size-3.5" /> View Post
            </a>
          )}

          {item.eventUrl && (
            <a
              href={item.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-[#6B6B73] hover:text-[#17171A] transition-colors"
            >
              <ExternalLink className="size-3.5" /> View Event
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function EventCard({ item, index }: { item: EventItem; index: number }) {
  return (
    <div
      className={`reveal stagger-${index + 1} group bg-white border border-[#E7E7E2] rounded-2xl p-5 card-hover shadow-[0_2px_16px_rgba(23,23,26,0.05)] hover:shadow-[0_8px_32px_rgba(91,124,255,0.10)] transition-all duration-300 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#42C7D9] to-[#5B7CFF]" />

      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-[#5B7CFF]/15 to-[#8B6DFF]/15 text-[#5B7CFF] uppercase tracking-wide border border-[#5B7CFF]/20">
          {item.type}
        </span>

        <span className="text-xs text-[#6B6B73]">{item.date}</span>
      </div>

      <h3 className="text-sm font-bold text-[#17171A] mb-1">
        {item.title}
      </h3>

      <p className="text-xs text-[#6B6B73] mb-2">
        {item.organization}
      </p>

      <p className="text-sm leading-[1.6] text-[#6B6B73] mb-3">
        {item.description}
      </p>

      {item.whatILearned && (
        <p className="text-xs leading-[1.5] text-[#6B6B73] italic border-l-2 border-[#5B7CFF]/20 pl-3 mb-3">
          {item.whatILearned}
        </p>
      )}

      {/* Topics */}
      {/* 
      <div className="flex flex-wrap gap-1.5 mb-3">
        {item.topics.map((t) => (
          <span
            key={t}
            className="text-[11px] py-0.5 px-2 rounded-full bg-white border-2 border-[#42C7D9]/50 text-[#42C7D9] shadow-[0_2px_8px_rgba(66,199,217,0.18)] font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      */}

      <div className="flex items-center gap-3">
        {item.linkedinPostUrl && (
          <a
            href={item.linkedinPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#0A66C2] to-[#0077b5] rounded-full px-3 py-1.5 transition-all hover:shadow-lg hover:shadow-[#0A66C2]/30"
          >
            <LinkedInIcon className="size-3" /> View Post
          </a>
        )}

        {item.eventUrl && (
          <a
            href={item.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-[#6B6B73] hover:text-[#17171A] transition-colors"
          >
            <ExternalLink className="size-3.5" /> View Event
          </a>
        )}
      </div>
    </div>
  );
}

export function FeaturedWorkshop() {
  const ref = useReveal<HTMLElement>();
  const featured = speakingEvents.filter((e) => e.featured);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section
      id="tech-talks"
      ref={ref}
      className="relative py-14"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#5B7CFF]" />
            <span className="section-eyebrow">Tech Talks</span>
          </div>

          <h2 className="reveal stagger-1 text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.02em] text-[#17171A]">
            I Don't Just Build AI. <br />
            <span className="gradient-text-blue-violet">
              I Explain It to Aspiring Builders.
            </span>
          </h2>

          <p className="reveal stagger-2 mt-4 text-[1rem] leading-[1.7] text-[#6B6B73] max-w-[560px]">
            I enjoy turning complex technologies into practical ideas that
            aspiring builders can understand, experiment with and use.
          </p>
        </div>

        <div className="reveal stagger-3 mb-4">
          <span className="section-eyebrow text-[#5B7CFF]">
            Featured Workshop
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {featured.map((item) => (
            <WorkshopCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechTalks() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="speaking-events"
      ref={ref}
      className="relative py-14"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <div className="reveal flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-[#5B7CFF]" />
            <span className="section-eyebrow">
              Where I Learn, Share & Connect
            </span>
          </div>

          <p className="reveal stagger-1 text-sm text-[#6B6B73] max-w-[500px] mb-6">
            Continuous learning, ecosystem participation, technical curiosity
            and community contribution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {communityEvents.map((item, i) => (
            <EventCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}