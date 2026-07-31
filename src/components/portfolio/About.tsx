import { Brain, Code2, Globe, GraduationCap, Lightbulb, Rocket } from "lucide-react";
import { profile } from "@/config/profile";
import { Reveal, Section } from "./Section";

const pillars = [
  { icon: Brain, title: "Artificial Intelligence", copy: "Applied AI, prompt engineering and automation that removes real friction." },
  { icon: Code2, title: "Software Development", copy: "Clean, typed, maintainable code with a bias toward shipping." },
  { icon: Lightbulb, title: "Problem Solving", copy: "Decomposing messy problems into systems that hold up under pressure." },
  { icon: Globe, title: "Web Development", copy: "Responsive, accessible interfaces built with React and Tailwind CSS." },
  { icon: GraduationCap, title: "Continuous Learning", copy: "Always mid-course, mid-build, mid-experiment — never standing still." },
  { icon: Rocket, title: "Real-World Solutions", copy: "Projects measured by the value they create, not the lines of code." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering curiosity into working software"
      description={`${profile.title} based in ${profile.location}.`}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 90}>
              <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:gradient-brand group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
