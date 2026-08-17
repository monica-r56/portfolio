import { useReveal } from "@/hooks/use-reveal";
import { experiences, type ExperienceItem } from "@/data/experience";
import { MapPin } from "lucide-react";

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative pl-12 lg:pl-16 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#5B7CFF] z-20">
        <div className="absolute inset-0.5 rounded-full bg-[#5B7CFF]/20" />
      </div>

      {/* ===================================================== */}
      {/* Card + rotating inner border */}
      {/* ===================================================== */}
      <div className="reveal card-hover relative overflow-hidden rounded-2xl p-[3px]">

        {/* ================================================= */}
        {/* Rotating gradient border */}
        {/* ================================================= */}
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            animate-[spin_14s_linear_infinite]
            pointer-events-none
          "
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 255deg, rgba(91,124,255,0.18) 285deg, rgba(139,109,255,0.30) 315deg, rgba(72,198,239,0.22) 340deg, rgba(91,124,255,0.12) 355deg, transparent 360deg)",
          }}
        />

        {/* ================================================= */}
        {/* Card interior */}
        {/* ================================================= */}
        <div
          className="
            relative
            z-10
            bg-white
            rounded-[13px]
            p-6
            lg:p-7
            overflow-hidden
          "
        >

          {/* ================================================= */}
          {/* Extremely subtle ambient light */}
          {/* ================================================= */}

          <div
            className="
              absolute
              -top-32
              -right-32
              w-80
              h-80
              rounded-full
              blur-3xl
              opacity-[0.018]
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(circle, #5B7CFF 0%, #8B6DFF 45%, transparent 70%)",
            }}
          />

          <div
            className="
              absolute
              -bottom-32
              -left-32
              w-80
              h-80
              rounded-full
              blur-3xl
              opacity-[0.012]
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(circle, #48C6EF 0%, #5B7CFF 45%, transparent 70%)",
            }}
          />

          {/* ================================================= */}
          {/* Content */}
          {/* ================================================= */}

          <div className="relative z-10">

            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-[#17171A]">
                    {item.organization}
                  </span>

                  {item.featured && (
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        px-2
                        py-0.5
                        rounded-full
                        bg-gradient-to-r
                        from-[#5B7CFF]/10
                        to-[#8B6DFF]/10
                        text-[#5B7CFF]
                        border
                        border-[#5B7CFF]/10
                        uppercase
                        tracking-wide
                      "
                    >
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-[#17171A] leading-snug">
                  {item.role}
                </h3>
              </div>

              <div className="text-right">
                <p className="text-xs font-medium text-[#6B6B73]">
                  {item.startDate} - {item.endDate}
                </p>

                <p className="text-xs text-[#6B6B73]/70 flex items-center gap-1 justify-end mt-1">
                  <MapPin className="size-3" />
                  {item.location}
                </p>
              </div>
            </div>

            {/* Story */}
            <p className="text-sm leading-[1.7] text-[#6B6B73] mb-5">
              {item.story}
            </p>

            {/* ================================================= */}
            {/* Impact callout */}
            {/* ================================================= */}
            {item.impactMetric && (
              <div
                className="
                  mb-5
                  relative
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-[#5B7CFF]/8
                  via-[#8B6DFF]/8
                  to-[#48C6EF]/6
                  border
                  border-[#5B7CFF]/15
                  p-4
                "
              >
                {/* Subtle inner glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 15%, rgba(255,255,255,0.7) 50%, transparent 85%)",
                  }}
                />

                {(() => {
                  const isLongMetric = item.impactMetric.length > 8;

                  return (
                    <div
                      className={`relative flex gap-4 ${
                        isLongMetric
                          ? "flex-col sm:flex-row sm:items-center"
                          : "items-center"
                      }`}
                    >
                      <div
                        className={`metric-number text-2xl font-bold text-[#17171A] ${
                          isLongMetric
                            ? "whitespace-normal break-words"
                            : "whitespace-nowrap"
                        }`}
                      >
                        {item.impactMetric}
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-[#6B6B73] leading-snug">
                          {item.impactLabel}
                        </p>

                        {item.impactNote && (
                          <p className="text-[10px] font-semibold text-[#F09A6A] uppercase tracking-wide mt-1">
                            {item.impactNote}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* ================================================= */}
            {/* Technologies */}
            {/* ================================================= */}
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => {
                const gradientVariants = [
                  "from-[#5B7CFF]/10 via-[#6E7FFF]/8 to-[#8B6DFF]/10",
                  "from-[#8B6DFF]/10 via-[#9B7CFF]/8 to-[#5B7CFF]/10",
                  "from-[#48C6EF]/10 via-[#5B7CFF]/8 to-[#8B6DFF]/10",
                ];

                const borderVariants = [
                  "border-[#5B7CFF]/20",
                  "border-[#8B6DFF]/20",
                  "border-[#48C6EF]/20",
                ];

                const textVariants = [
                  "text-[#4D68D8]",
                  "text-[#7057C7]",
                  "text-[#4388A8]",
                ];

                const variant = index % gradientVariants.length;

                return (
                  <span
                    key={tech}
                    className={`
                      px-3 py-1.5
                      rounded-full
                      text-xs
                      font-medium
                      bg-gradient-to-r
                      ${gradientVariants[variant]}
                      ${borderVariants[variant]}
                      ${textVariants[variant]}
                      border
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_4px_14px_rgba(91,124,255,0.12)]
                    `}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceTimeline() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-14 overflow-hidden"
      style={{ background: "var(--surface-tint)" }}
    >

      {/* Top transition gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">

          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#5B7CFF]" />

            <span className="section-eyebrow">
              Experience
            </span>
          </div>

          <h2
            className="
              reveal
              stagger-1
              text-[clamp(2rem,4vw,3rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-[#17171A]
            "
          >
            Where I've Built &{" "}
            <span className="gradient-text-blue-violet">
              Learned.
            </span>
          </h2>

          <p
            className="
              reveal
              stagger-2
              mt-4
              text-[1rem]
              leading-[1.7]
              text-[#6B6B73]
              max-w-[500px]
            "
          >
            Four roles. One trajectory - from full-stack intern to production AI engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="
              absolute
              left-[7px]
              lg:left-[7px]
              top-2
              bottom-0
              w-0.5
              timeline-line
              opacity-30
            "
          />

          {experiences.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
            />
          ))}

        </div>
      </div>

      {/* Bottom transition gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, transparent 100%)",
        }}
      />

    </section>
  );
}