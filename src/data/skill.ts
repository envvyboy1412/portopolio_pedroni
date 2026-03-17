import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import type { IconType } from "react-icons";

type Skill = {
  label: string;
  icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  //Basic
  { label: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { label: "CSS", icon: SiCss, color: "text-blue-500" },

  //Language
  { label: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { label: "TypeScript", icon: SiTypescript, color: "text-blue-600" },

  //Framework & Library
  { label: "React", icon: SiReact, color: "text-cyan-400" },
  { label: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },

  //Tools
  { label: "GitHub", icon: SiGithub, color: "text-gray-300" },
  { label: "Postman", icon: SiPostman, color: "text-orange-400" },
];