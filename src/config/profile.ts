/**
 * Single source of truth for all personal information.
 * Edit this file only — every section of the site reads from here.
 */

export const profile = {
  name: "Thabang Rantoka",
  title: "Computer Systems Engineering Student",
  subtitle: "AI & Software Developer",
  location: "Pretoria, South Africa",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  cvUrl: "#",
  summary:
    "I build intelligent applications at the intersection of Artificial Intelligence, web technologies and software engineering — turning ideas into fast, reliable products while constantly learning the tools that define modern development.",
  bio: [
    "I'm a Computer Systems Engineering student with a deep passion for Artificial Intelligence and the craft of software development. What drives me is problem solving: breaking a messy, real-world challenge into clean, elegant systems that people actually enjoy using.",
    "My work spans modern web development — React, TypeScript and Tailwind CSS — and applied AI, from prompt engineering and automation to building assistants that remove busywork from everyday workflows.",
    "I treat continuous learning as part of the job. Every project is an excuse to go deeper, ship something real, and raise the bar on the next one.",
  ],
} as const;

/** Initials are derived from the name, so changing `name` is enough. */
export const initials = profile.name
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .map((part) => part[0]!.toUpperCase())
  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
  .join("")
  .slice(0, 2);

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    category: "Programming",
    icon: "code",
    skills: ["C++", "Java", "JavaScript", "PHP", "Python"],
  },
  {
    category: "Web",
    icon: "globe",
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS"],
  },
  {
    category: "AI",
    icon: "sparkles",
    skills: [
      "ChatGPT",
      "Prompt Engineering",
      "Google AI Essentials",
      "AI Productivity",
      "AI Automation",
    ],
  },
  {
    category: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Bolt.new", "Lovable", "Vercel"],
  },
] as const;

export const projects = [
  {
    name: "ProductivityOS AI",
    status: "Live",
    description:
      "An AI-powered workplace productivity assistant that consolidates the everyday knowledge work of a modern team into one intelligent workspace.",
    features: [
      "AI Email Generator",
      "Meeting Notes Summarizer",
      "AI Task Planner",
      "AI Research Assistant",
      "AI Chat Interface",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "AI APIs"],
  },
  {
    name: "Professional Personal Portfolio",
    status: "Live",
    description:
      "This site — a fully responsive, accessible portfolio built with a single configuration object, semantic design tokens, scroll-reveal motion and a dark/light theme engine.",
    features: ["Config-driven content", "Dark / light theming", "Scroll reveal motion", "SEO ready"],
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Future AI Project",
    status: "Coming Soon",
    description:
      "A next applied-AI build currently in research and design. Focused on automation, reasoning workflows and measurable real-world impact.",
    features: ["In research", "Applied AI", "Automation"],
    tech: ["Python", "AI APIs"],
  },
] as const;

export const education = [
  {
    institution: "Tshwane University of Technology",
    qualification: "Computer Systems Engineering",
    detail:
      "Core engineering foundations: programming, computer architecture, networks, electronics and systems design.",
  },
  {
    institution: "AI Skills Acceleration Programme",
    qualification: "Applied Artificial Intelligence",
    detail:
      "Intensive programme covering practical AI adoption, automation workflows and responsible deployment.",
  },
  {
    institution: "Google",
    qualification: "Google AI Essentials",
    detail:
      "Foundations of generative AI, prompt design and using AI responsibly to accelerate everyday work.",
  },
] as const;

export const certifications = [
  { name: "Google AI Essentials", issuer: "Google", url: "#" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud", url: "#" },
  { name: "Prompt Engineering", issuer: "Professional Certificate", url: "#" },
  { name: "Responsible AI", issuer: "Google Cloud", url: "#" },
  { name: "AI Productivity", issuer: "Professional Certificate", url: "#" },
  { name: "Git & GitHub", issuer: "Developer Certificate", url: "#" },
] as const;
