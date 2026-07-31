/**
 * ─────────────────────────────────────────────────────────────
 *  THE ONLY FILE YOU NEED TO EDIT
 * ─────────────────────────────────────────────────────────────
 *  Every section of the website reads from this file.
 *  Change a value here and it updates everywhere automatically.
 */

export const profile = {
  /* ---------- Identity ---------- */
  name: "Thabang Rantoka",
  title: "Computer Systems Engineering Student",
  subtitle: "AI & Software Developer",
  location: "Pretoria, South Africa",

  /* ---------- Contact & links ---------- */
  email: "your@email.com",
  phone: "", // optional — leave "" to hide
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",

  /* ---------- CV ---------- */
  // Put your PDF in the `public` folder and set this to "/cv.pdf"
  cvUrl: "#",

  /* ---------- Hero ---------- */
  availability: "Available for internships & collaboration",
  summary:
    "I build intelligent applications at the intersection of Artificial Intelligence, web technologies and software engineering — turning ideas into fast, reliable products while constantly learning the tools that define modern development.",

  /* ---------- About ---------- */
  bio: [
    "I'm a Computer Systems Engineering student with a deep passion for Artificial Intelligence and the craft of software development. What drives me is problem solving: breaking a messy, real-world challenge into clean, elegant systems that people actually enjoy using.",
    "My work spans modern web development — React, TypeScript and Tailwind CSS — and applied AI, from prompt engineering and automation to building assistants that remove busywork from everyday workflows.",
    "I treat continuous learning as part of the job. Every project is an excuse to go deeper, ship something real, and raise the bar on the next one.",
  ],

  /* ---------- Footer ---------- */
  footerTagline: "Built with React, Tailwind CSS and AI.",
} as const;

/** Initials are derived from `profile.name` — first + last letter. */
export const initials = profile.name
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .map((part) => part[0]!.toUpperCase())
  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
  .join("")
  .slice(0, 2);

/* ---------- Navigation ---------- */
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

/* ---------- Section headings (edit the copy of any section) ---------- */
export const sectionCopy = {
  about: {
    eyebrow: "About",
    title: "Engineering curiosity into working software",
  },
  skills: {
    eyebrow: "Skills",
    title: "The stack I build with",
    description: "Languages, frameworks and AI tooling I use to design, build and ship.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    description:
      "Products built to solve real problems — from applied AI assistants to polished web interfaces.",
  },
  education: {
    eyebrow: "Education",
    title: "Academic & professional training",
    description: "Formal engineering study paired with applied AI programmes.",
  },
  certifications: {
    eyebrow: "Certifications",
    title: "Credentials & continuous learning",
    description: "Verified programmes in generative AI, responsible AI practice and developer tooling.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something",
    description:
      "Open to internships, graduate roles, freelance work and collaboration on AI-driven products.",
  },
} as const;

/* ---------- What I do (About cards) ---------- */
/** icon options: brain | code | lightbulb | globe | graduation | rocket | sparkles | wrench */
export const strengths = [
  {
    icon: "brain",
    title: "Artificial Intelligence",
    description: "Applied AI, prompt engineering and automation that removes real friction.",
  },
  {
    icon: "code",
    title: "Software Development",
    description: "Clean, typed, maintainable code with a bias toward shipping.",
  },
  {
    icon: "lightbulb",
    title: "Problem Solving",
    description: "Decomposing messy problems into systems that hold up under pressure.",
  },
  {
    icon: "globe",
    title: "Web Development",
    description: "Responsive, accessible interfaces built with React and Tailwind CSS.",
  },
  {
    icon: "graduation",
    title: "Continuous Learning",
    description: "Always mid-course, mid-build, mid-experiment — never standing still.",
  },
  {
    icon: "rocket",
    title: "Real-World Solutions",
    description: "Projects measured by the value they create, not the lines of code.",
  },
] as const;

/* ---------- Skills ---------- */
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

/* ---------- Projects ---------- */
/** Set `liveUrl` / `repoUrl` to "" to hide that button. */
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
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "Professional Personal Portfolio",
    status: "Live",
    description:
      "This site — a fully responsive, accessible portfolio driven by a single configuration file, with semantic design tokens, scroll-reveal motion and a dark/light theme engine.",
    features: [
      "Config-driven content",
      "Dark / light theming",
      "Scroll reveal motion",
      "SEO ready",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "Future AI Project",
    status: "Coming Soon",
    description:
      "A next applied-AI build currently in research and design. Focused on automation, reasoning workflows and measurable real-world impact.",
    features: ["In research", "Applied AI", "Automation"],
    tech: ["Python", "AI APIs"],
    liveUrl: "",
    repoUrl: "",
  },
] as const;

/* ---------- Education ---------- */
export const education = [
  {
    institution: "Tshwane University of Technology",
    qualification: "Computer Systems Engineering",
    period: "",
    detail:
      "Core engineering foundations: programming, computer architecture, networks, electronics and systems design.",
  },
  {
    institution: "AI Skills Acceleration Programme",
    qualification: "Applied Artificial Intelligence",
    period: "",
    detail:
      "Intensive programme covering practical AI adoption, automation workflows and responsible deployment.",
  },
  {
    institution: "Google",
    qualification: "Google AI Essentials",
    period: "",
    detail:
      "Foundations of generative AI, prompt design and using AI responsibly to accelerate everyday work.",
  },
] as const;

/* ---------- Certifications ---------- */
/** Set `url` to your credential link — "#" keeps the button as a placeholder. */
export const certifications = [
  { name: "Google AI Essentials", issuer: "Google", year: "", url: "#" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud", year: "", url: "#" },
  { name: "Prompt Engineering", issuer: "Professional Certificate", year: "", url: "#" },
  { name: "Responsible AI", issuer: "Google Cloud", year: "", url: "#" },
  { name: "AI Productivity", issuer: "Professional Certificate", year: "", url: "#" },
  { name: "Git & GitHub", issuer: "Developer Certificate", year: "", url: "#" },
] as const;
