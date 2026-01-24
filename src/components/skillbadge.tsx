import type { LucideIcon } from "lucide-react";

type SkillBadgeProps = {
  label: string;
  icon: LucideIcon;
};

export function SkillBadge({ label, icon: Icon }: SkillBadgeProps) {
  return (
    <div
      className="group relative flex items-center gap-2 overflow-hidden rounded px-4 py-2
      bg-white/5 text-sky-200 text-shadow-sm text-shadow-sky-400/40 transition hover:bg-[#629FAD]"
    >
      <Icon className="h-5 w-5 text-emerald-300 transition group-hover:text-white" />

      <span className="relative z-10 text-sm md:text-base transition md:group-hover:font-bold">
        {label}
      </span>

      {/* Shine effect */}
      <span className="pointer-events-none absolute inset-0 -top-5 flex h-[calc(100%+40px)] w-full justify-center blur-md opacity-30 animate-shine-slow group-hover:opacity-80">
        <span className="relative h-full w-8 bg-white/40"></span>
      </span>
    </div>
  );
}
