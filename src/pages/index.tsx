import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "@/components/experiencecard";
import { skills } from "@/data/skill";
import { SkillBadge } from "@/components/skillbadge";

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
            <h1 className="text-3xl md:text-5xl font-bold text-slate-100">
              PEDRONI GILBRAN
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-sky-200 text-shadow-sm text-shadow-sky-400/40">
              Frontend Development
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              Saya membangun aplikasi web yang{" "}
              <span className="text-cyan-400 font-semibold">cepat</span>,{" "}
              <span className="text-cyan-400 font-semibold">responsif</span>,
              dan <span className="text-cyan-400 font-semibold">modern</span>{" "}
              menggunakan{" "}
              <span className="text-white font-semibold">React</span> dan{" "}
              <span className="text-white font-semibold">Next.js</span>.
            </p>

            {/* BUTTON */}
            <div className="flex flex-row gap-8">
              <div className="flex justify-center md:justify-start">
                <Link href="/viewproject">
                  <button className="group relative h-12 overflow-hidden hover:font-bold rounded bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-8 py-2 text-white shadow-lg shadow-cyan-500/50 transition">
                    <span className="relative z-10 font-semibold text-sm leading-5 text-white text-shadow-2xs text-shadow-black/40">
                      My Project
                    </span>

                    <span className="absolute inset-0 overflow-hidden rounded">
                      <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-cyan-800 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="https://drive.google.com/file/d/1eIz9W6O8gK_PhCtVlCOb5LMC2ctidWWq/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="group relative h-12 overflow-hidden hover:font-bold rounded bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-8 py-2 text-white shadow-lg shadow-cyan-500/50 transition">
                    <span className="relative z-10 font-semibold text-sm leading-5 text-white text-shadow-2xs text-shadow-black/40">
                      Download CV.
                    </span>

                    <span className="absolute inset-0 overflow-hidden rounded">
                      <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-cyan-800 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

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
          <div className="grid gap-24 md:grid-cols-2 items-start">
            <div className="space-y-3">
              <h3 className="text-lg md:text-4xl font-semibold text-slate-100">
                About Me
              </h3>

              <p className="text-slate-300 text-sm md:text-2xl leading-relaxed text-justify">
                Saya adalah Frontend Developer yang berfokus pada pembuatan
                aplikasi web yang cepat, responsif, dan mudah digunakan. Saya
                terbiasa menggunakan React, Next.js, dan Tailwind CSS untuk
                membangun tampilan yang clean dan modern. Saat ini, saya terus
                mengembangkan kemampuan melalui berbagai project untuk
                menghasilkan aplikasi yang stabil dan berkualitas.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-4xl font-semibold text-slate-100">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill.label} {...skill} />
                ))}
              </div>
            </div>

            <div className="md:col-span-2 md:justify-self-center w-full max-w-xl space-y-10">
              <div className="space-y-4">
                <h3 className="text-lg md:text-4xl font-semibold text-slate-100">
                  Experience
                </h3>

                <div className="space-y-4">
                  {experiences.map((experience) => (
                    <ExperienceCard key={experience.role} {...experience} />
                  ))}
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
