import {
  BadgeCheck,
  Code2,
  Database,
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

import { GithubIcon } from "@/components/ui/GithubIcon";

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
  email: "kelvinmwania47@gmail.com",
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
    title: "Languages",
    icon: Monitor,
    skills: ["JavaScript", "TypeScript", "Python", "Kotlin", "C++"],
  },
  {
    title: "Frontend/Mobile",
    icon: Server,
    skills: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Vue.js",
      "React Query",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "Firebase", "REST APIs", "JWT auth", "Socket.IO"],
  },
  {
    title: "Databases",
    icon: Code2,
    skills: ["PostgreSQL/Supabase", "MongoDB", "Firestore"],
  },
  {
    title: "ML/Data",
    icon: Globe,
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Payments",
    icon: ShieldCheck,
    skills: ["IntaSend", "M-Pesa STK Push"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Qt6", "CMake", "Git/GitHub", "Linux", "Agile/Scrum"],
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
    name: "QuickFix — Full-Stack Home Service Platform",
    tagline: "Cross-platform app connecting customers with vetted technicians.",
    problem:
      "Customers and service providers need a reliable, real-time way to coordinate home repairs across mobile and web.",
    solution:
      "Built a React Native/Expo mobile app and Next.js web app with real-time job-to-technician matching, live status tracking, and escrow-style payments.",
    features: [
      "Real-time job-to-technician matching with Socket.IO",
      "Live repair-status tracking for customers and technicians",
      "Escrow-style wallet that holds funds until job completion",
      "Integrated M-Pesa STK Push and IntaSend payment flows",
    ],
    tech: ["React Native", "Expo", "Next.js", "Socket.IO", "M-Pesa STK Push", "IntaSend"],
    impact:
      "Enabled practical home-service dispatch and payment handling tailored for Kenyan payment rails.",
    featured: true,
    link: "https://github.com/InjiniaKelvin/Projo",
  },
  {
    name: "MindGuard AI — Student Mental Health Risk Classifier",
    tagline: "ML pipeline for identifying at-risk students.",
    problem:
      "Institutions need early, data-driven identification of students at mental-health risk.",
    solution:
      "Trained and compared four classifiers using attendance, sleep, and stress-related indicators to flag risk levels.",
    features: [
      "Compared Logistic Regression, SVM, Random Forest, and Gradient Boosting",
      "Logistic Regression achieved 85.8% test accuracy",
      "End-to-end reproducible and documented ML pipeline",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    impact:
      "Provided a reproducible baseline model for proactive mental-health risk screening.",
    link: "https://github.com/InjiniaKelvin/MINDGUARDAI",
  },
  {
    name: "KevTecH Net — Linux Hotspot Manager",
    tagline: "Desktop tool for managed Linux WiFi hotspot operations.",
    problem:
      "Linux users need a reliable way to manage hotspot sharing with automatic recovery and onboarding support.",
    solution:
      "Built a C++/Qt6 desktop manager for hotspot provisioning, internet sharing, and resilient reconnection workflows.",
    features: [
      "NAT forwarding and internet sharing controls",
      "Ethernet/mobile-data fallback support",
      "QR-code onboarding for connecting devices",
      "Automatic recovery after connection drops",
    ],
    tech: ["C++", "Qt6", "CMake", "Linux"],
    impact:
      "Improved reliability and usability for Linux hotspot management.",
    link: "https://github.com/InjiniaKelvin/KevTecH-Net-Hotspot-Manager",
  },
  {
    name: "WekaCert — Certificate & Document Verification Platform",
    tagline: "Planned platform for secure certificate and document verification.",
    problem:
      "Organizations and individuals need secure, trackable verification for certificates and personal documents.",
    solution:
      "Designing a platform for verification workflows, secure document storage, expiry tracking, and auditability.",
    features: [
      "Certificate and document verification workflows",
      "Secure personal document storage",
      "Document expiry tracking",
      "Audit trail for document access",
    ],
    tech: ["Vue.js", "Node.js", "MongoDB"],
    status: "In Development",
    link: "https://github.com/InjiniaKelvin/WekaCert",
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
    icon: GithubIcon,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: GithubIcon,
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
