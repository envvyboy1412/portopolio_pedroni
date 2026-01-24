import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 md:mt-90">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-white/10 p-6">
        {/* ICONS */}
        <div className="flex gap-6 text-gray-400">
          <Link
            href="https://github.com/envvyboy1412"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <Github size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/pedroni-gilbran/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <Linkedin size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/pedroni9_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition hover:text-white"
          >
            <Instagram size={22} />
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Pedroni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
