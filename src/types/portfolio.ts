import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  timeframe: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ProjectItem = {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  impact: string;
  featured?: boolean;
  link?: string;
};

export type ContactItem = {
  title: string;
  value: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
