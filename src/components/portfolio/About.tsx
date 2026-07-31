import { Brain, Code2, Globe, GraduationCap, Lightbulb, Rocket, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile, sectionCopy, strengths } from "@/config/profile";
import { Reveal, Section } from "./Section";

export const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  code: Code2,
  lightbulb: Lightbulb,
  globe: Globe,
  graduation: GraduationCap,
  rocket: Rocket,
  sparkles: Sparkles,
  wrench: Wrench,
};

export function About() {
  return (
    <Section
      id="about"
      eyebrow={sectionCopy.about.eyebrow}
      title={sectionCopy.about.title}
      description={`${profile.title} based in ${profile.location}.`}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 90}>
              <p className="text-[15px] leading-[1.75] text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:gradient-brand group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
