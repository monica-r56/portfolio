import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { siteConfig } from "@/data/profile";
import { Mail, FileDown, ArrowRight, Loader2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/BrandIcons";
import { trackButtonClick, trackResumeDownload } from "@/analytics/events";

const contactOptions = [
  {
    label: "Email",
    value: siteConfig.email,
    description: "Primary contact",
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Hello Monica - Portfolio"
    )}&body=${encodeURIComponent(
      "Hi Monica,\n\nI came across your portfolio and would like to connect regarding..."
    )}`,
    icon: Mail,
    accent: "#4285F4",
    isExternal: false,
  },
  {
    label: "LinkedIn",
    value: "Monica R",
    description: "Connect on LinkedIn",
    href: siteConfig.linkedin,
    icon: LinkedInIcon,
    accent: "#0A66C2",
    isExternal: true,
  },
  {
    label: "GitHub",
    value: "monica-r56",
    description: "Explore the work",
    href: siteConfig.github,
    icon: GitHubIcon,
    accent: "#42C7D9",
    isExternal: true,
  },
  {
    label: "Resume",
    value: "View resume",
    href: siteConfig.resume,
    icon: FileDown,
    accent: "#F09A6A",
    isExternal: false,
    isResume: true,
  },
];

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [resumeLoading, setResumeLoading] = useState(false);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();

    trackResumeDownload({
      location: "contact",
      button_label: "Download resume",
      section: "contact",
    });

    if (
      siteConfig.resume &&
      siteConfig.resume !== "#" &&
      !siteConfig.resume.includes("placeholder")
    ) {
      window.open(siteConfig.resume, "_blank", "noopener,noreferrer");
    } else {
      setResumeLoading(true);
      setTimeout(() => setResumeLoading(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-12 sm:py-14 overflow-hidden"
      style={{
        background: "var(--dark-feature)",
        color: "var(--dark-feature-foreground)",
      }}
    >
      {/* ------------------------------------------------ */}
      {/* Ambient background */}
      {/* ------------------------------------------------ */}

      <div
        className="ambient-blob absolute top-0 left-1/4 w-[500px] h-[500px] opacity-[0.07] animate-ambient pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #5B7CFF 0%, transparent 70%)",
        }}
      />

      <div
        className="ambient-blob absolute bottom-0 right-1/4 w-[450px] h-[450px] opacity-[0.05] animate-ambient pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #8B6DFF 0%, transparent 70%)",
          animationDelay: "10s",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* ------------------------------------------------ */}
        {/* Section label */}
        {/* ------------------------------------------------ */}

        <div className="reveal flex items-center justify-center gap-3 mb-4 sm:mb-5">
          <div className="w-7 sm:w-8 h-px bg-[#42C7D9]" />

          <span className="section-eyebrow text-[#42C7D9]">
            Contact
          </span>

          <div className="w-7 sm:w-8 h-px bg-[#42C7D9]" />
        </div>

        {/* ------------------------------------------------ */}
        {/* Heading */}
        {/* ------------------------------------------------ */}

        <h2 className="reveal stagger-1 text-[clamp(2.2rem,6vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-4 sm:mb-5">
          Let's{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #42C7D9, #8B6DFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Connect.
          </span>
        </h2>

        {/* ------------------------------------------------ */}
        {/* Main description */}
        {/* ------------------------------------------------ */}

        <p className="reveal stagger-2 text-[0.95rem] sm:text-[1.05rem] leading-[1.65] text-white/50 max-w-[560px] mx-auto mb-5 sm:mb-6">
          Whether you're hiring, building, collaborating or simply want to
          talk about AI and technology - I'd love to hear from you.
        </p>

        {/* ------------------------------------------------ */}
        {/* Opportunity statement */}
        {/* ------------------------------------------------ */}

        <p className="reveal stagger-3 text-[0.85rem] sm:text-[0.95rem] leading-[1.6] max-w-[520px] mx-auto mb-8 sm:mb-10 italic bg-gradient-to-r from-cyan-300/80 via-blue-300/80 to-violet-300/80 bg-clip-text text-transparent">
          Open to meaningful opportunities, wherever great ideas are being
          built.
        </p>

        {/* ------------------------------------------------ */}
        {/* Contact options */}
        {/* ------------------------------------------------ */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {contactOptions.map((opt, i) => {
            const Icon = opt.icon;
            const isResumeLoading = opt.isResume && resumeLoading;

            /*
             * Mobile:
             * icon | label/value/description | arrow
             *
             * Desktop:
             * icon
             * label
             * value
             * description
             */
            const cardContent = (
              <>
                {/* Icon */}
                <div
                  className="
                    shrink-0
                    w-11 h-11
                    sm:w-10 sm:h-10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                  style={{
                    background: `${opt.accent}20`,
                    border: `1px solid ${opt.accent}45`,
                  }}
                >
                  {isResumeLoading ? (
                    <Loader2
                      className="size-4 animate-spin"
                      style={{ color: opt.accent }}
                    />
                  ) : (
                    <Icon
                      className="size-4"
                      style={{ color: opt.accent }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="
                    min-w-0
                    flex-1
                    text-left
                    lg:flex-none
                    lg:w-full
                  "
                >
                  <p className="text-xs sm:text-[11px] text-white/60 mb-0.5">
                    {opt.label}
                  </p>

                  <p
                    className="
                      text-sm
                      sm:text-sm
                      font-semibold
                      text-white
                      leading-snug
                      truncate
                      sm:truncate
                      lg:whitespace-normal
                      lg:break-words
                      mb-0.5
                    "
                  >
                    {isResumeLoading ? "Loading resume..." : opt.value}
                  </p>

                  <p className="text-[11px] sm:text-xs text-white/45 leading-snug">
                    {opt.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className="
                    shrink-0
                    size-4
                    text-white/30
                    transition-all
                    duration-300
                    group-hover:text-white/80
                    group-hover:translate-x-1
                    lg:absolute
                    lg:top-5
                    lg:right-5
                    lg:size-3.5
                  "
                />
              </>
            );

            const cardClasses = `
              reveal
              stagger-${i + 1}
              group
              relative
              rounded-2xl
              p-4
              sm:p-5
              text-left
              card-hover
              overflow-hidden
              backdrop-blur-sm
              border-2
              transition-all
              duration-300

              flex
              items-center
              gap-4

              lg:flex-col
              lg:items-start
              lg:gap-0
              min-h-[92px]
              lg:min-h-[210px]
            `;

            const cardStyle = {
              background: `linear-gradient(
                135deg,
                ${opt.accent}18,
                ${opt.accent}06
              )`,
              borderColor: `${opt.accent}40`,
            };

            if (opt.isResume) {
              return (
                <button
                  key={opt.label}
                  onClick={handleResumeClick}
                  className={cardClasses}
                  style={cardStyle}
                >
                  {cardContent}
                </button>
              );
            }

            return (
              <a
                key={opt.label}
                href={opt.href}
                target={opt.isExternal ? "_blank" : undefined}
                rel={
                  opt.isExternal
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() =>
                  trackButtonClick({
                    button_id: `contact_${opt.label.toLowerCase()}`,
                    button_label: opt.label,
                    section: "contact",
                    destination: opt.isExternal
                      ? opt.label.toLowerCase()
                      : "email",
                  })
                }
                className={cardClasses}
                style={cardStyle}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}