import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10" id="contact">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white/80">Picxel-AI</span>
          <span aria-hidden="true" className="text-white/20">
            /
          </span>
          <span>Create with intention.</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/siddheshkr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            aria-label="View Siddhesh KR's GitHub profile"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <span>© {new Date().getFullYear()} Picxel-AI</span>
        </div>
      </div>
    </footer>
  );
}
