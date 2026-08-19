import { useReveal } from "@/hooks/use-reveal";
import { skillCategories, type SkillCategory } from "@/data/skills";

const accentMap: Record<string, { color: string; bg: string; border: string }> = {
  blue: { color: "#5B7CFF", bg: "rgba(91,124,255,0.06)", border: "rgba(91,124,255,0.15)" },
  violet: { color: "#8B6DFF", bg: "rgba(139,109,255,0.06)", border: "rgba(139,109,255,0.15)" },
  cyan: { color: "#42C7D9", bg: "rgba(66,199,217,0.06)", border: "rgba(66,199,217,0.15)" },
  warm: { color: "#F09A6A", bg: "rgba(240,154,106,0.06)", border: "rgba(240,154,106,0.15)" },
  magenta: { color: "#C875FF", bg: "rgba(200,117,255,0.06)", border: "rgba(200,117,255,0.15)" },
};

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const accent = accentMap[category.accent] || accentMap.blue;

  return (
    <div className={`reveal stagger-${index + 1} group relative bg-white border border-[#E7E7E2] rounded-2xl p-6 card-hover overflow-hidden`}>
      {/* Accent left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: accent.color }} />

      <div className="pl-3">
        <h3 className="text-base font-bold text-[#17171A] tracking-tight mb-1">{category.category}</h3>
        <p className="text-xs text-[#6B6B73] mb-4">{category.description}</p>

        {/* Technology pills */}
        <div className="flex flex-wrap gap-2">
          {category.technologies.map((tech) => (
            <span
              key={tech.name}
              className="tech-pill group-hover:border-[#E7E7E2]"
              style={{ borderColor: undefined }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Ambient hover glow */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 opacity-10 transition-opacity duration-500"
        style={{ background: accent.color }} />
    </div>
  );
}

export function Technology() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="technology"
      ref={ref}
      className="relative py-10"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#5B7CFF]" />
            <span className="section-eyebrow">Skills / Tech Stack</span>
          </div>
          <h2 className="reveal stagger-1 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#17171A]">
            From Models to <span className="gradient-text-blue-violet">Production.</span>
          </h2>
          <p className="reveal stagger-2 mt-4 text-[1rem] leading-[1.7] text-[#6B6B73] max-w-[500px]">
            The tools I work with across AI, software engineering, automation and infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
