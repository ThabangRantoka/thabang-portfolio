/**
 * ─────────────────────────────────────────────────────────────
 *  THE ONLY FILE YOU NEED TO EDIT
 * ─────────────────────────────────────────────────────────────
 *  Every section of the website reads from this file.
 *  Change a value here and it updates everywhere automatically.
 */

import cvAsset from "@/assets/cv.pdf.asset.json";
import photoAsset from "@/assets/thabang-profile.jpg.asset.json";

export const profile = {
  /* ---------- Identity ---------- */
  name: "Moyahabo Thabang Rantoka",
  title: "Final-Year Computer Systems Engineering Student",
  subtitle: "Embedded Systems & Software Developer",
  location: "Pretoria, Gauteng, South Africa",

  /* ---------- Contact & links ---------- */
  email: "thabangrantoka@gmail.com",
  phone: "076 364 9536", // optional — leave "" to hide
  github: "https://github.com/ThabangRantoka",
  linkedin: "https://www.linkedin.com/in/moyahabo-thabang-95a036275",
  website: "https://thabangrantoka.github.io/portfolio/",

  /* ---------- Photo ---------- */
  photoUrl: photoAsset.url,

  /* ---------- CV ---------- */
  cvUrl: cvAsset.url,

  /* ---------- Hero ---------- */
  availability: "Available for internships, graduate roles & collaboration",
  summary:
    "Final-year Computer Systems Engineering student at Tshwane University of Technology with hands-on project experience in embedded systems, automation, robotics, machine learning and software applications — building systems that bridge hardware and clean, reliable code.",

  /* ---------- About ---------- */
  bio: [
    "I'm a final-year Computer Systems Engineering student at Tshwane University of Technology, working across embedded systems, automation, robotics and software development.",
    "My project work ranges from a Raspberry Pi home-automation system and a PCB-based fire detection board to Unity ML-Agents training and a C++ municipal billing system — hardware and software, end to end.",
    "I'm keen to pursue a career in system development, embedded systems, electronics and software engineering, and I treat every build as a chance to go deeper and raise the bar on the next one.",
  ],

  /* ---------- Footer ---------- */
  footerTagline: "Built with React, TypeScript and Tailwind CSS.",
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
    title: "Engineering curiosity into working systems",
  },
  skills: {
    eyebrow: "Skills",
    title: "The stack I build with",
    description:
      "Programming languages, hardware platforms and tools I use to design, build and ship.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    description:
      "Embedded, robotics and software projects built through my engineering studies.",
  },
  education: {
    eyebrow: "Education",
    title: "Academic background",
    description: "Formal engineering study with a strong systems and electronics foundation.",
  },
  certifications: {
    eyebrow: "Certifications",
    title: "Certificates & licences",
    description: "Credentials and continuous learning alongside my qualification.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something",
    description:
      "Open to internships, graduate roles and collaboration on embedded, robotics and software projects.",
  },
} as const;

/* ---------- What I do (About cards) ---------- */
/** icon options: brain | code | lightbulb | globe | graduation | rocket | sparkles | wrench */
export const strengths = [
  {
    icon: "wrench",
    title: "Embedded Systems",
    description: "Microcontrollers, sensors, PCB logic and Raspberry Pi / Arduino builds.",
  },
  {
    icon: "rocket",
    title: "Automation & Robotics",
    description: "Obstacle avoidance, wall-following and remote device control systems.",
  },
  {
    icon: "brain",
    title: "Machine Learning",
    description: "Unity ML-Agents training and applied AI experimentation.",
  },
  {
    icon: "code",
    title: "Software Development",
    description: "C++, Python, JavaScript and SQL — clean, maintainable, tested code.",
  },
  {
    icon: "globe",
    title: "Web Development",
    description: "Responsive interfaces with HTML, CSS, JavaScript and Flask back-ends.",
  },
  {
    icon: "lightbulb",
    title: "Problem Solving",
    description: "Analytical thinking, fast learning and calm debugging under pressure.",
  },
] as const;

/* ---------- Skills ---------- */
export const skillGroups = [
  {
    category: "Programming",
    icon: "code",
    skills: ["C++", "Python", "JavaScript", "SQL", "PHP"],
  },
  {
    category: "Web",
    icon: "globe",
    skills: ["HTML5", "CSS3", "Flask", "Databases"],
  },
  {
    category: "Engineering",
    icon: "sparkles",
    skills: [
      "Embedded Systems",
      "8051 Microcontrollers",
      "Assembly",
      "Electronics",
      "Mobile Robotics",
      "PLCs",
      "Digital Process Control",
      "Machine Learning",
    ],
  },
  {
    category: "Tools",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Raspberry Pi",
      "Arduino",
      "ESP32",
      "Proteus",
      "Embarcadero C++ Builder",
      "Unity ML-Agents",
    ],
  },
] as const;

/* ---------- Projects ---------- */
/** Set `liveUrl` / `repoUrl` to "" to hide that button. */
export const projects = [
  {
    name: "Program Manager Web Application",
    status: "Completed",
    description:
      "A responsive Program Manager web application built with HTML, CSS and JavaScript, featuring LocalStorage persistence, search, edit/delete actions and a modern UI.",
    features: ["LocalStorage persistence", "Search & filtering", "Edit / delete records"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "",
    repoUrl: "https://github.com/ThabangRantoka/Program-Manager-Web-Application",
  },
  {
    name: "ESP32 Smart Home Automation",
    status: "Completed",
    description:
      "An ESP32-based smart home automation system running a built-in web server for wireless control of room lighting from any device on the network.",
    features: ["ESP32 web server", "Wireless light control", "Responsive control UI"],
    tech: ["ESP32", "C++", "Embedded Web Server"],
    liveUrl: "",
    repoUrl: "https://github.com/ThabangRantoka/ESP32-Smart-Home-Automation-System",
  },
  {
    name: "Raspberry Pi Home Automation",
    status: "Completed",
    description:
      "A Raspberry Pi-based home automation system using Flask, Python and GPIO-controlled relays to remotely control electrical devices from a web interface.",
    features: ["Flask web interface", "GPIO relay control", "Remote device switching"],
    tech: ["Python", "Flask", "Raspberry Pi", "GPIO"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "PCB Fire Detection System",
    status: "Completed",
    description:
      "A PCB-based fire detection system built around sensor input and microcontroller logic for early warning in enclosed spaces.",
    features: ["Custom PCB design", "Sensor integration", "Microcontroller logic"],
    tech: ["Electronics", "PCB Design", "Embedded C"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "Ultrasonic Distance Measurement",
    status: "Completed",
    description:
      "An Arduino-based ultrasonic distance measurement system with sensor accuracy analysis for real-time obstacle detection.",
    features: ["Real-time sensing", "Accuracy analysis", "Obstacle detection"],
    tech: ["Arduino", "C++", "Sensors"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "ML Stealth Navigation Agent",
    status: "Completed",
    description:
      "A Unity ML-Agents model trained for autonomous stealth navigation, using reinforcement learning to reach goals while avoiding detection.",
    features: ["Reinforcement learning", "Autonomous navigation", "Simulation training"],
    tech: ["Unity", "ML-Agents", "Python"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "Autonomous Mobile Robot",
    status: "Completed",
    description:
      "Obstacle-avoidance and wall-following logic implemented on a mobile robot platform for reliable autonomous movement.",
    features: ["Obstacle avoidance", "Wall following", "Sensor fusion"],
    tech: ["Robotics", "C++", "Sensors"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "Municipal Billing System",
    status: "Completed",
    description:
      "A C++ municipal billing system automating customer billing, tariff calculations and account management processes.",
    features: ["Tariff calculation", "Account management", "Automated billing"],
    tech: ["C++", "Data Structures"],
    liveUrl: "",
    repoUrl: "",
  },
] as const;

/* ---------- Education ---------- */
export const education = [
  {
    institution: "Tshwane University of Technology",
    qualification: "Diploma in Computer Systems Engineering",
    period: "Jan 2022 – Dec 2026",
    detail:
      "Key modules: Software Engineering, Embedded Systems, Programming, Artificial Intelligence, Network Systems, Mobile Robotics, Databases, Digital Process Control, PLCs, Electronics, Operating Systems, Logic Design and Project Design.",
  },
  {
    institution: "George Tladi Technical High School",
    qualification: "National Senior Certificate (Grade 12)",
    period: "Jan 2016 – Dec 2020",
    detail:
      "Key subjects: Mathematics, Physical Sciences, Mechanical Technology and Engineering Graphics & Design.",
  },
] as const;

/* ---------- Certifications ---------- */
/** Set `url` to your credential link — "#" keeps the button as a placeholder. */
export const certifications = [
  { name: "Code 10 Driver's Licence", issuer: "Department of Transport", year: "", url: "#" },
] as const;

/* ---------- Languages ---------- */
export const languages = ["English", "Sepedi", "isiZulu"] as const;
