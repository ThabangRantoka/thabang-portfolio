import { Code2, Globe, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { sectionCopy, skillGroups } from "@/config/profile";
import { Reveal, Section } from "./Section";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  globe: Globe,
  sparkles: Sparkles,
  wrench: Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow={sectionCopy.skills.eyebrow}
      title={sectionCopy.skills.title}
      description={sectionCopy.skills.description}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? Code2;
          return (
            <Reveal key={group.category} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors duration-300 group-hover:border-primary/25"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
