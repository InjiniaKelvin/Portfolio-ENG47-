import {
  BadgeCheck,
  Code2,
  Database,
  Github,
  Globe,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import type {
  AboutHighlight,
  ContactItem,
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Kelvin Mwania",
  role: "Software Engineer",
  location: "Nairobi, Kenya",
  email: "engineerjuliusjr47@gmail.com",
  phones: ["0794536984", "0117224394"],
  github: "https://github.com/InjiniaKelvin",
  headline: "Software Engineer & System Builder",
  subheadline:
    "Building scalable digital systems, intelligent platforms, and real-world software solutions focused on impact, performance, and usability.",
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I craft premium software systems that solve complex operational challenges, blending strong engineering fundamentals with high-end product execution.",
  "My focus is on building scalable platforms, resilient APIs, and seamless user experiences that move fast, stay reliable, and feel effortless for end users.",
  "I thrive in environments where engineering meets entrepreneurship—turning vision into production-ready systems with measurable impact.",
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Engineering backbone",
    description:
      "Designing modular architectures with clean interfaces, smart automation, and long-term maintainability.",
  },
  {
    title: "Systems thinking",
    description:
      "Optimizing performance, reliability, and developer experience across full-stack workflows.",
  },
  {
    title: "Real-world impact",
    description:
      "Delivering digital solutions that improve operational efficiency and user satisfaction.",
  },
  {
    title: "Entrepreneurial drive",
    description:
      "Building future-facing products with bold execution and a data-driven mindset.",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["Next.js", "Vue.js", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Firebase", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Supabase", "Firestore"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Kotlin", "JavaScript"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "Linux", "Agile workflows"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Taquana",
    role: "Software Engineering Attachment",
    timeframe: "2024",
    location: "Nairobi, Kenya",
    summary:
      "Delivered production-ready modules for a transportation management platform focused on ticketing, dispatch, and operational visibility.",
    highlights: [
      "Built the Nganya Management System ticketing workflow with Vue.js and modular UI components.",
      "Implemented Node.js APIs for real-time ticket validation and route scheduling.",
      "Integrated Supabase for reliable data storage, authentication, and audit trails.",
      "Collaborated in Agile sprints with GitHub-based reviews and delivery cycles.",
    ],
    stack: ["Vue.js", "Node.js", "Supabase", "GitHub", "Agile"],
  },
  {
    company: "KMTC Mathari",
    role: "Industrial Attachment",
    timeframe: "2023",
    location: "Nairobi, Kenya",
    summary:
      "Supported ERP and IT infrastructure operations while contributing to user-facing improvements and data analysis workflows.",
    highlights: [
      "Provided ERP system support, troubleshooting, and user enablement for clinical teams.",
      "Executed network diagnostics, system installation, and configuration tasks.",
      "Delivered data analysis insights using Excel and SPSS for operational reporting.",
      "Assisted with front-end development exposure and technical support workflows.",
    ],
    stack: ["ERP", "Networking", "Excel", "SPSS", "Support"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "QuickFix",
    tagline: "Flagship on-demand service dispatch platform.",
    problem:
      "Service businesses lose revenue when job requests are managed manually across fragmented channels.",
    solution:
      "A real-time dispatch system that centralizes requests, automates scheduling, and tracks field execution with full visibility.",
    features: [
      "Smart job routing with priority-based queues",
      "Live technician status tracking and SLA monitoring",
      "Customer portals for updates, approvals, and feedback",
      "Operational analytics dashboards for performance tuning",
    ],
    tech: ["Next.js", "Node.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    impact:
      "Improved dispatch turnaround and provided an enterprise-ready experience for service teams.",
    featured: true,
  },
  {
    name: "MindGuard AI",
    tagline: "Intelligent mental wellness companion.",
    problem:
      "Users need discreet, always-available support for stress management and emotional wellness.",
    solution:
      "An AI-assisted platform that offers daily check-ins, supportive insights, and guided wellness routines.",
    features: [
      "Sentiment-aware journaling insights",
      "Personalized wellness routines",
      "Confidential data handling and encrypted storage",
    ],
    tech: ["Next.js", "Python", "AI APIs", "Supabase"],
    impact:
      "Enabled proactive mental wellness support and improved daily user engagement.",
  },
  {
    name: "C-Wallet",
    tagline: "Modern fintech wallet for everyday payments.",
    problem:
      "Users need faster, secure digital payment workflows without complex onboarding.",
    solution:
      "A lightweight wallet that offers instant transfers, smart budgeting, and transaction insights.",
    features: [
      "Instant peer-to-peer transfers",
      "Real-time balance and spend analytics",
      "Secure authentication and audit logs",
    ],
    tech: ["Kotlin", "Firebase", "Node.js"],
    impact:
      "Streamlined digital payments and improved user trust with transparent reporting.",
  },
  {
    name: "WekaCert",
    tagline: "Digital certification issuance and verification.",
    problem:
      "Institutions struggle with manual certificate issuance and verification delays.",
    solution:
      "An automated certification platform with secure verification and branded delivery.",
    features: [
      "Automated issuance workflows",
      "Verification portal with QR access",
      "Custom branding for institutions",
    ],
    tech: ["Vue.js", "Node.js", "MongoDB"],
    impact:
      "Reduced verification time and enhanced trust in credential authenticity.",
  },
  {
    name: "Livestock Management System",
    tagline: "Farm operations and livestock tracking suite.",
    problem:
      "Farmers need visibility into livestock health, inventory, and performance metrics.",
    solution:
      "A management suite for tracking livestock records, feed cycles, and health alerts.",
    features: [
      "Livestock record management",
      "Health and vaccination reminders",
      "Production and growth analytics",
    ],
    tech: ["Next.js", "Firestore", "Tailwind CSS"],
    impact:
      "Improved operational oversight and reduced loss through timely alerts.",
  },
];

export const contactItems: ContactItem[] = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Reach out for collaborations or system builds.",
    icon: Mail,
  },
  {
    title: "Phone",
    value: siteConfig.phones.join(" / "),
    href: `tel:${siteConfig.phones[0]}`,
    description: "Available for project discussions and consultations.",
    icon: Phone,
  },
  {
    title: "Location",
    value: siteConfig.location,
    href: "https://maps.google.com/?q=Nairobi,Kenya",
    description: "Based in Nairobi, working with teams worldwide.",
    icon: MapPin,
  },
  {
    title: "GitHub",
    value: "InjiniaKelvin",
    href: siteConfig.github,
    description: "Explore open-source work and code samples.",
    icon: Github,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Nairobi,Kenya",
    icon: Globe,
  },
];

export const heroBadges = [
  { icon: Sparkles, label: "Premium systems" },
  { icon: ShieldCheck, label: "Reliable delivery" },
  { icon: BadgeCheck, label: "Production ready" },
];
