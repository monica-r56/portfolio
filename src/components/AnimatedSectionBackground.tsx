type SectionBackgroundVariant =
  | "hero"
  | "journey"
  | "about-talks"
  | "experience"
  | "projects"
  | "research"
  | "contact"
  | "tech-talks"
  | "community"
  | "skills";

interface AnimatedSectionBackgroundProps {
  variant: SectionBackgroundVariant;
  className?: string;
}

function JourneySectionBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`journey-section-bg ${className}`.trim()} aria-hidden="true">
      <div className="journey-section-bg__base" />
      <div className="journey-section-bg__side journey-section-bg__side--left" />
      <div className="journey-section-bg__side journey-section-bg__side--right" />
      <div className="journey-section-bg__roll journey-section-bg__roll--left" />
      <div className="journey-section-bg__roll journey-section-bg__roll--right" />
    </div>
  );
}

export function AnimatedSectionBackground({
  variant,
  className = "",
}: AnimatedSectionBackgroundProps) {
  if (variant === "journey") {
    return <JourneySectionBackground className={className} />;
  }

  return (
    <div
      aria-hidden="true"
      className={`section-bg-animate section-bg-animate--${variant} ${className}`.trim()}
    />
  );
}
