type ExperienceCardProps = {
  role: string;
  place: string;
  date: string;
  tech?: string[];
  points?: string[];
};

export function ExperienceCard({
  role,
  place,
  date,
  tech = [],
  points = [],
}: ExperienceCardProps) {
  return (
    <div className="rounded-2xl bg-linear-to-b from-white/10 to-white/5 p-5 shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm md:text-xl font-semibold text-white">{role}</p>
          <p className="mt-1 text-xs font-bold text-slate-300">{place}</p>
        </div>

        <p className="text-xs text-slate-400 whitespace-nowrap">{date}</p>
      </div>

      {/* Tech (Hover Border Animation) */}
      {tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
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

              {item}
            </span>
          ))}
        </div>
      )}

      {/* Points */}
      {points.length > 0 && (
        <ul className="mt-4 space-y-2 text-lg md:text-lg text-slate-300 leading-relaxed list-disc pl-5">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
