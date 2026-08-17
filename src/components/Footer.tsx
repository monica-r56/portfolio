import { siteConfig } from "@/data/profile";

export function Footer() {
  return (
    <footer
      className="relative py-8 border-t border-white/10 bg-[#0B0D12] select-none"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-4">
        <p className="text-sm text-white/60 text-center select-none">
          © {new Date().getFullYear()} {siteConfig.name} · Crafted with ☕️ and lots of ❤️!
        </p>
      </div>
    </footer>
  );
}