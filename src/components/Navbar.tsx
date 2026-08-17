import { useState, useEffect } from "react";
import { siteConfig } from "@/data/profile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, User } from "lucide-react";
import { trackNavigationClick } from "@/analytics/events";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Tech Talks", href: "#tech-talks" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (winScroll / height) * 100)));
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string, label: string, location: string) => {
    setMobileOpen(false);
    trackNavigationClick({ navigation_item: label, destination_section: href.replace("#", ""), navigation_location: location });
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "nav-blur bg-white/90 backdrop-blur-xl border-b border-white/70 shadow-[0_10px_35px_rgba(23,23,26,0.08)]"
      : "nav-blur bg-white/75 backdrop-blur-xl border-b border-white/60"
  }`}
>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo with Circular Photo Frame */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 text-[#17171A] hover:opacity-80 transition-opacity group text-left"
          aria-label="Scroll to top"
        >
          <div className="relative size-9 rounded-full p-[2px] bg-gradient-to-tr from-[#5B7CFF] via-[#8B6DFF] to-[#42C7D9] shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Avatar className="size-full">
                <AvatarImage
                  src={siteConfig.navigationProfile}
                  alt={siteConfig.name}
                  className="object-cover size-full"
                />
                <AvatarFallback className="bg-gradient-to-br from-[#F0F0ED] to-[#E7E7F5] text-[#5B7CFF] flex items-center justify-center size-full">
                  <User className="size-4 text-[#5B7CFF]" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <span className="font-bold text-[17px] tracking-tight text-[#17171A]">
            {siteConfig.name}
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.label, "header")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? "text-[#17171A]"
                    : "text-[#6B6B73] hover:text-[#17171A]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-[#5B7CFF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA removed */}

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden size-11 rounded-full bg-white/70 border border-white/80 shadow-[0_8px_24px_rgba(23,23,26,0.12)] text-[#17171A] flex items-center justify-center hover:bg-white transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white/70 backdrop-blur-xl border-white/60">
            <div className="flex flex-col h-full pt-8">
              <div className="flex items-center justify-between mb-8 px-4">
                <div className="flex items-center gap-2.5">
                  <div className="relative size-9 rounded-full p-[2px] bg-gradient-to-tr from-[#5B7CFF] via-[#8B6DFF] to-[#42C7D9] shrink-0 shadow-sm">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                      <Avatar className="size-full">
                        <AvatarImage
                          src={siteConfig.profileImage}
                          alt={siteConfig.name}
                          className="object-cover size-full"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-[#F0F0ED] to-[#E7E7F5] text-[#5B7CFF] flex items-center justify-center size-full">
                          <User className="size-4 text-[#5B7CFF]" />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <span className="font-bold text-[17px] text-[#17171A]">{siteConfig.name}</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-[#6B6B73] hover:text-[#17171A]"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col px-4 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.label, "mobile_menu")}
                    className="text-left py-3 px-3 rounded-lg text-[15px] font-medium text-[#6B6B73] hover:text-[#17171A] hover:bg-[#F0F0ED] transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Scroll progress bar with fine gradient line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#5B7CFF] via-[#8B6DFF] via-[#C875FF] to-[#42C7D9] origin-left transition-transform duration-75 ease-out pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
    </header>
  );
}
