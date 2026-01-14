import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="flex flex-row justify-between max-w-6xl mx-auto p-6">
        <div className="text-white font-bold text-2xl md:text-xl">Pedroni</div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-24 text-sm text-gray-300">
          <div className="relative font-bold cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/">Home</Link>
          </div>

          <div className="relative font-bold cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/viewproject">Project</Link>
          </div>

          <div className="relative font-bold cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/experience">Experience</Link>
          </div>
        </div>

        {/* HAMBURGER ⇄ X */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl transition-transform duration-200"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU (DIBAWAH NAVBAR) */}
      <div
        className={`
          absolute top-full left-0 w-full bg-[#629FAD] md:hidden border-t
          overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="max-w-6xl mx-auto p-6 flex flex-col gap-4 text-white text-lg">
          <Link
            href="/"
            className="hover:underline hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/viewproject"
            className="hover:underline hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Project
          </Link>
          <Link
            href="/"
            className="hover:underline hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}
