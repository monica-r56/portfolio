import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/profile";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  Trophy,
  BookOpen,
  Mic2,
  Sparkles,
  Globe2,
  GitBranch,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/BrandIcons";
import { AnimatedSectionBackground } from "@/components/AnimatedSectionBackground";
import { credibilityItems } from "@/data/milestones";
import { CredibilitySectionBackground } from "@/components/CredibilitySectionBackground";
import { trackButtonClick } from "@/analytics/events";

const PROFILE_IMG = siteConfig.profileImage;

const credIcons = {
  impact: Sparkles,
  global: Globe2,
  speaker: Mic2,
  hackathons: Trophy,
  ieee: BookOpen,
  gssoc: GitBranch,
};
const credAccents = [
  { from: "#5B7CFF", to: "#8B6DFF", glow: "rgba(91,124,255,0.18)" },
  { from: "#42C7D9", to: "#5B7CFF", glow: "rgba(66,199,217,0.18)" },
  { from: "#8B6DFF", to: "#C875FF", glow: "rgba(139,109,255,0.18)" },
  { from: "#F09A6A", to: "#C875FF", glow: "rgba(240,154,106,0.18)" },
  { from: "#5B7CFF", to: "#42C7D9", glow: "rgba(91,124,255,0.18)" },
];

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add("visible");
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    trackButtonClick({ button_id: "hero_explore_work", button_label: "Explore My Work", section: "hero" });
    document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    trackButtonClick({ button_id: "hero_lets_connect", button_label: "Let's Connect", section: "hero" });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
    >
      <AnimatedSectionBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center min-h-[calc(100vh-72px)] py-16">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#5B7CFF]" />
              <span className="section-eyebrow text-[#5B7CFF]">Software Engineer · AI</span>
            </div>

            {/* Headline */}
            <h1 className="stagger-1 text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.06] tracking-[-0.02em] mb-6">
              <span className="hero-headline-shimmer hero-headline-shimmer--dark">I Build AI for </span>
              <br className="hidden sm:block" />
              <span className="hero-headline-shimmer hero-headline-shimmer--gradient">A Smarter Tomorrow. </span>
              {/* <br className="hidden sm:block" />
              <span className="hero-headline-shimmer hero-headline-shimmer--dark">the Demo.</span> */}
            </h1>

            {/* Tagline */}
            <p className="stagger-2 text-[1.05rem] leading-[1.7] text-[#6B6B73] max-w-[520px] mb-8">
              {siteConfig.tagline}
            </p>

            {/* CTAs - Explore My Work + Let's Connect with inline icon buttons */}
            <div className="stagger-3 flex flex-wrap items-center gap-3 mb-10">
              <Button
                onClick={scrollToWork}
                className="gap-2 bg-[#17171A] text-[#F8F8F5] hover:bg-[#2a2a30] px-6 h-11 text-sm font-medium rounded-full"
              >
                Explore My Work
                <ArrowDown className="size-4" />
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  onClick={scrollToContact}
                  className="gap-2 bg-[#5B7CFF] text-white hover:bg-[#4a6df0] px-6 h-11 text-sm font-medium rounded-full"
                >
                  Let's Connect
                  <ArrowRight className="size-4" />
                </Button>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Monica R. on LinkedIn"
                  onClick={() => trackButtonClick({ button_id: "hero_linkedin", button_label: "LinkedIn", section: "hero", destination: "linkedin" })}
                  className="size-11 flex items-center justify-center rounded-full bg-white border border-[#E7E7E2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                >
                  <LinkedInIcon className="size-[18px]" />
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Monica R. on GitHub"
                  onClick={() => trackButtonClick({ button_id: "hero_github", button_label: "GitHub", section: "hero", destination: "github" })}
                  className="size-11 flex items-center justify-center rounded-full bg-white border border-[#E7E7E2] text-[#17171A] hover:bg-[#17171A] hover:text-white hover:border-[#17171A] transition-all"
                >
                  <GitHubIcon className="size-[18px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Portrait container */}
            <div
              ref={imgRef}
              className="reveal-scale relative w-[320px] lg:w-[380px] aspect-[4/5]"
            >
              {/* Bottom-right cast shadow */}
              <div
                className="absolute left-3 top-4 right-0 bottom-0 rounded-br-[10px] bg-gradient-to-br from-[#C9A87A]/30 to-[#A67C52]/22 blur-lg opacity-85"
                style={{ transform: "translate(8px, 10px)" }}
                aria-hidden="true"
              />

              {/* Frame: open on top & left, tinted mat on bottom & right */}
              <div className="hero-portrait-frame relative z-[1] h-full pr-3 pb-3">
                <div className="hero-portrait-frame__glow" aria-hidden="true" />
                <div className="hero-portrait-frame__shimmer" aria-hidden="true" />

                <div className="relative z-[2] h-full rounded-lg bg-[#F0F0ED]">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <img
                      src={PROFILE_IMG}
                      alt="Monica R. - AI-focused Software Engineer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F0F0ED] to-[#E7E7F5] text-center p-8">
                          <div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#5B7CFF]/20 to-[#8B6DFF]/20 flex items-center justify-center mb-4 border border-[#5B7CFF]/20">
                            <span class="text-3xl font-bold text-[#5B7CFF]">MR</span>
                          </div>
                          <p class="text-xs text-[#6B6B73] font-medium">Professional portrait</p>
                          <p class="text-xs text-[#6B6B73]">coming soon</p>
                        </div>
                      `;
                        }
                      }}
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#17171A]/10 to-transparent" />
                  </div>

                  {/* Floating metadata chip — on top of the image */}
                  <div className="absolute -bottom-5 -left-6 z-20 bg-white/60 backdrop-blur-xl border border-white/50 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(23,23,26,0.12)]">
                    <p className="text-xs text-[#6B6B73] font-medium mb-0.5">Currently</p>
                    <p className="text-sm font-semibold text-[#17171A]">SDE - AI, Data & Automation</p>
                    <img
                      src={`${import.meta.env.BASE_URL}adsk.png`}
                      alt="Autodesk"
                      className="h-4 w-auto mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility strip - eye-catchy highlighted cards */}
      <div className="relative z-10 w-full">
        <div className="relative overflow-hidden border-t border-[#5B7CFF]/20">
          <CredibilitySectionBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {credibilityItems.map((item, i) => {
                const Icon = credIcons[item.id as keyof typeof credIcons];
                const accent = credAccents[i % credAccents.length];
                return (
                  <div
                    key={item.id}
                    className="group relative rounded-xl p-4 overflow-hidden border border-white/10 backdrop-blur-sm hover:border-white/25 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${accent.glow} 0%, rgba(255,255,255,0.03) 100%)`,
                    }}
                  >
                    {/* Gradient top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                    />
                    {/* Icon */}
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                      style={{
                        background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                        boxShadow: `0 4px 16px ${accent.glow}`,
                      }}
                    >
                      <Icon className="size-4 text-white" />
                    </div>
                    {/* Value */}
                    <p
                      className="text-base font-bold leading-tight mb-1"
                      style={{
                        background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.value}
                    </p>
                    {/* Label */}
                    <p className="text-xs font-semibold text-white/80 leading-snug">
                      {item.label}
                    </p>
                    {item.sublabel && (
                      <p className="text-[10px] text-white/40 mt-0.5">{item.sublabel}</p>
                    )}
                    {/* Hover glow */}
                    <div
                      className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${accent.from} 0%, transparent 70%)` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
