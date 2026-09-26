import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
}

export interface Knowledge {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Education {
  institution: string;
  program: string;
  date: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  theme: "violet" | "mint" | "coral";
}

export interface SocialProfile {
  label: string;
  href: string;
  icon: LucideIcon;
}
