import { useReveal } from "@/hooks/use-reveal";
import { philosophy } from "@/data/profile";

export function Philosophy() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative pb-10 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Subtle ambient */}
      <div className="ambient-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse, #8B6DFF 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#5B7CFF]" />
          <span className="section-eyebrow">Philosophy</span>
          <div className="w-8 h-px bg-[#5B7CFF]" />
        </div>

        <h2 className="reveal stagger-1 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-[#17171A] mb-8">
          I Like AI When <br className="hidden sm:block" />
          It Becomes <span className="gradient-text-blue-violet">Useful.</span>
        </h2>

        <div className="reveal stagger-2 space-y-5 max-w-2xl mx-auto">
          {philosophy.body.map((para, i) => (
            <p key={i} className="text-[1.1rem] leading-[1.8] text-[#6B6B73]">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
