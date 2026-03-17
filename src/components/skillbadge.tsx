import type { IconType } from "react-icons";

type SkillBadgeProps = {
  label: string;
  icon: IconType;
  color: string;
};

export function SkillBadge({ label, icon: Icon, color }: SkillBadgeProps) {
  return (
    <div
      className="group relative flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2
      bg-white/5 text-sky-200 text-shadow-sm text-shadow-sky-400/40 transition
      hover:bg-[#629FAD]"
    >
      <Icon className={`h-5 w-5 ${color} transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_currentColor]`}/>

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
