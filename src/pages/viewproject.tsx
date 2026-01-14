import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/projectcard";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Project() {
  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        {/* Title */}
        <h1 className="mb-12 text-4xl font-bold text-white">
          Selected Work
        </h1>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const reveal = useScrollReveal();

            return (
              <div
                key={project.title}
                ref={reveal.ref}
                className={`transition-all duration-700 ease-out
                ${
                  reveal.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
