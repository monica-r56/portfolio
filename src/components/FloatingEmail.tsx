import { useState } from "react";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/profile";
import { trackEmailClick } from "@/analytics/events";

export function FloatingEmail() {
  const [hovered, setHovered] = useState(false);

  const subject = encodeURIComponent("Hello Monica - Portfolio");
  const body = encodeURIComponent(
    "Hi Monica,\n\nI came across your portfolio and would like to connect regarding..."
  );
  const href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

  return (
    <a
      href={href}
      aria-label="Let's connect - send Monica an email"
      title="Reach out!"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => trackEmailClick({ location: "floating_button", button_id: "floating_email", section: "global" })}
      className="floating-btn fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC04 75%, #EA4335 100%)",
        color: "#fff",
      }}
    >
      <Mail className="size-4 shrink-0" />
      <span
        className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
          hovered ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0"
        }`}
        aria-hidden={!hovered}
      >
        Reach out!
      </span>
    </a>
  );
}
