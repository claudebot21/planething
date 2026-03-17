import { Github, Plane, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/[0.02] px-3 py-8 sm:px-4">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <span className="relative">
              <span className="absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-fuchsia-500/30 blur-md" />
              <span className="relative rounded-md p-1.5 ring-1 ring-white/10">
                <Plane className="h-4 w-4 text-cyan-300" />
              </span>
            </span>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-sm font-semibold tracking-wide text-transparent">
              planething
            </span>
          </div>

          {/* Center: Tech stack */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-white/40">Built with</span>
            {["Convex", "React", "Vite", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Right: Links + Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dekolor/planething"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white/60 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              aria-label="View source on GitHub"
            >
              <Github className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white/60 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-6 flex flex-col items-center justify-center gap-1 border-t border-white/5 pt-4 sm:flex-row sm:gap-2">
          <p className="text-[11px] text-white/40">
            © {currentYear} planething. All rights reserved.
          </p>
          <span className="hidden text-white/20 sm:inline">•</span>
          <p className="flex items-center gap-1 text-[11px] text-white/40">
            Made with <Heart className="h-3 w-3 text-rose-400" /> by dekolor & GPT-5
          </p>
        </div>
      </div>
    </footer>
  );
}
