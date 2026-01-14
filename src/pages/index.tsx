import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const heroText = useScrollReveal();
  const heroImage = useScrollReveal();
  const aboutSection = useScrollReveal();

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <main className="max-w-6xl mx-auto p-6">
        <section className="grid gap-10 md:grid-cols-2 items-center text-center md:text-left">
          {/* TEXT HERO */}
          <div
            ref={heroText.ref}
            className={`flex flex-col gap-6 order-2 md:order-1
            transition-all duration-700 ease-out
            ${
              heroText.isVisible
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
          >
            <h1 className="text-3xl md:text-6xl font-bold text-slate-100">
              Frontend Developer
            </h1>

            <p className="text-sm text-slate-300 font-semibold text-justify leading-relaxed max-w-md mx-auto md:mx-0">
              I build fast, responsive, and scalable web applications using
              React, Next.js, and Tailwind CSS, focusing on clean UI and great
              user experience.
            </p>

            {/* BUTTON (TIDAK DIUBAH) */}
            <div className="flex justify-center md:justify-start">
              <Link href="/viewproject">
                <button className="group relative h-12 overflow-hidden rounded bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-8 py-2 text-white shadow-lg shadow-cyan-500/50 transition">
                  <span className="relative z-10 font-medium text-sm leading-5">
                    View My Work
                  </span>

                  <span className="absolute inset-0 overflow-hidden rounded">
                    <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-cyan-800 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* IMAGE HERO */}
          <div
            ref={heroImage.ref}
            className={`flex justify-center md:justify-end order-1 md:order-2
            transition-all duration-700 ease-out
            ${
              heroImage.isVisible
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
              <Image
                src="/img/me-new.png"
                alt="Foto Pedroni"
                width={288}
                height={288}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section
          ref={aboutSection.ref}
          className={`mt-20 md:mt-40
          transition-all duration-700 ease-out
          ${
            aboutSection.isVisible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-12 pointer-events-none"
          }`}
        >
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-xl font-bold text-slate-100">About Me</h2>

              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                A brief intro to my background, skills, and what drives my
                passion for creating exceptional digital products.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-12">
              {/* BACKGROUND */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  Professional Background
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed text-justify">
                  With experience in modern web development, I focus on building
                  clean, scalable, and maintainable interfaces. My journey
                  started from learning basic web technologies and evolved into
                  working with React ecosystems and modern tooling.
                </p>
              </div>

              {/* SKILLS */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-100">
                  Skills & Expertise
                </h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Frontend Development",
                    "React & Next.js",
                    "Tailwind CSS",
                    "Responsive Design",
                    "API Integration",
                    "UI Implementation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="group relative overflow-hidden rounded px-4 py-2 text-sm
                      bg-white/5 text-slate-200
                      transition hover:bg-[#629FAD] hover:font-bold"
                    >
                      <span className="relative z-10">{skill}</span>

                      <span className="pointer-events-none absolute inset-0 -top-5 flex h-[calc(100%+40px)] w-full justify-center blur-md opacity-30 animate-shine-slow group-hover:opacity-80 group-hover:animate-shine-slow">
                        <span className="relative h-full w-8 bg-white/40"></span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-100">
                  Experience
                </h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-slate-100 text-sm font-medium">
                      Frontend Developer
                    </p>
                    <p className="text-slate-400 text-xs">
                      Personal & Learning Projects
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-100 text-sm font-medium">
                      Web Development Practice
                    </p>
                    <p className="text-slate-400 text-xs">
                      React, Next.js, Tailwind CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
