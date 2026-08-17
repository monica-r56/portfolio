import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { projects, type ProjectItem } from "@/data/projects";
import { Play, Globe, ChevronDown } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { trackProjectView, trackProjectLink } from "@/analytics/events";

function ProjectCard({ project }: { project: ProjectItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      trackProjectView({ project_id: project.id, project_name: project.title, section: "projects" });
    }
  };

  const sections = [
    { label: "WHY", heading: "What problem?", content: project.problem },
    { label: "HOW", heading: "How did I approach it?", content: project.approach },
    { label: "BUILT WITH", heading: "What technologies?", content: project.technologies.join(" · ") },
    { label: "RESULT", heading: "What did it enable?", content: project.result },
  ];

  return (
    <div
      className="reveal group relative bg-white border border-[#E7E7E2] rounded-2xl overflow-hidden card-hover"
    >
      {/* Image area - smaller */}
      <div className="project-img-wrap relative aspect-[16/8] bg-gradient-to-br from-[#F0F0ED] to-[#E7E7F5] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            const parent = t.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <span class="text-4xl font-bold text-[#5B7CFF]/20 mb-1">${project.number}</span>
                  <span class="text-sm text-[#6B6B73] font-medium">${project.category}</span>
                </div>`;
            }
          }}
        />
        {/* Number badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-bold text-[#17171A]">
          {project.number}
        </div>
        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-[#17171A]/80 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-medium text-white">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-lg font-bold text-[#17171A] tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-[#5B7CFF] font-medium">{project.subtitle}</p>
          </div>
          <span className="text-xs text-[#6B6B73] whitespace-nowrap mt-0.5">{project.year}</span>
        </div>

        <p className="text-sm leading-[1.6] text-[#6B6B73] mb-4">{project.positioning}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tech-pill text-[11px] py-0.5 px-2">{tag}</span>
          ))}
        </div>

        {/* Action row: How it works + link buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleToggle}
            className="flex items-center gap-2 text-sm font-medium text-[#17171A] bg-[#F0F0ED] hover:bg-[#E7E7F5] rounded-lg px-4 py-2 transition-colors"
          >
            {isOpen ? "Hide details" : "How it works"}
            <ChevronDown className={`size-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectLink({ project_id: project.id, project_name: project.title, destination: "github", section: "projects" })}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#17171A] bg-white border border-[#E7E7E2] hover:border-[#17171A] rounded-full px-3.5 py-2 transition-all hover:shadow-md"
            >
              <GitHubIcon className="size-3.5" /> GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectLink({ project_id: project.id, project_name: project.title, destination: "demo", section: "projects" })}
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#10b981] to-[#22c55e] rounded-full px-3.5 py-2 transition-all hover:shadow-md hover:shadow-[#22c55e]/30"
            >
              <Play className="size-3.5 fill-white" /> Demo
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectLink({ project_id: project.id, project_name: project.title, destination: "website", section: "projects" })}
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#5B7CFF] to-[#3b82f6] rounded-full px-3.5 py-2 transition-all hover:shadow-md hover:shadow-[#5B7CFF]/30"
            >
              <Globe className="size-3.5" /> Website
            </a>
          )}
        </div>

        {/* Accordion content */}
        {isOpen && (
          <div className="mt-4 space-y-4 animate-fade-up">
            <p className="text-sm leading-[1.7] text-[#6B6B73]">{project.description}</p>

            {sections.map((s) => (
              <div key={s.label} className="border-l-2 border-[#E7E7E2] pl-4">
                <p className="text-[10px] font-bold tracking-[0.15em] text-[#5B7CFF] uppercase mb-1">{s.label}</p>
                <p className="text-sm font-semibold text-[#17171A] mb-1">{s.heading}</p>
                <p className="text-sm leading-[1.65] text-[#6B6B73]">{s.content}</p>
              </div>
            ))}

          </div>
        )}
      </div>

      {/* Border highlight on hover */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-[#5B7CFF]/0 group-hover:ring-[#5B7CFF]/30 transition-all duration-300 pointer-events-none" />
    </div>
  );
}

export function Projects() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-14 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#5B7CFF]" />
            <span className="section-eyebrow">Projects</span>
          </div>
          <h2 className="reveal stagger-1 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#17171A]">
            Things I've <span className="gradient-text-blue-violet">Built.</span>
          </h2>
          <p className="reveal stagger-2 mt-4 text-[1rem] leading-[1.7] text-[#6B6B73] max-w-[500px]">
            From voice-native AI agents to intelligent travel systems and real-world AI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Bottom violet glow transition to dark research */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(139,109,255,0.06) 100%)" }}
      />
    </section>
  );
}
