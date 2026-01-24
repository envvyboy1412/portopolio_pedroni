import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  linkdemo: string;
  buttonProject?: string;
  buttonDemo?: string;
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  linkdemo,
  buttonProject = "View Project", buttonDemo = "Demo Project",
}: ProjectCardProps) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-linear-to-b from-white/10 to-white/5 p-5 shadow-lg">
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="h-48 w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm text-justify leading-relaxed text-slate-300">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="group relative inline-block overflow-hidden rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 transition hover:font-bold"
            >
              {/* top */}
              <span className="absolute left-0 top-0 h-0 w-0 border-t border-emerald-400 transition-all duration-200 group-hover:w-full"></span>

              {/* right */}
              <span className="absolute right-0 top-0 h-0 w-0 border-r border-emerald-400 transition-all duration-200 group-hover:h-full"></span>

              {/* bottom */}
              <span className="absolute bottom-0 right-0 h-0 w-0 border-b border-emerald-400 transition-all duration-200 group-hover:w-full"></span>

              {/* left */}
              <span className="absolute bottom-0 left-0 h-0 w-0 border-l border-emerald-400 transition-all duration-200 group-hover:h-full"></span>

              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="mt-auto pt-4 flex flex-col gap-2">
          <Link
            href={link}
            target="_blank"
            className="block rounded-lg bg-teal-600 py-2 text-center text-sm font-medium text-white transition hover:bg-teal-500"
          >
            {buttonProject}
          </Link>

          <Link
            href={linkdemo}
            target="_blank"
            className="block rounded-lg bg-teal-600 py-2 text-center text-sm font-medium text-white transition hover:bg-teal-500"
          >
            {buttonDemo}
          </Link>
        </div>
      </div>
    </div>
  );
}
