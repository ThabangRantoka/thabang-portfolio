import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/config/profile";
import { Reveal, Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Products built to solve real problems — from applied AI assistants to polished web interfaces."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lift">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-24 h-40 gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
              />
              <div className="relative flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
                <span className="shrink-0 rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {project.status}
                </span>
              </div>

              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="relative mt-5 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 flex flex-wrap gap-2 pt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-auto pt-6">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  {project.status === "Coming Soon" ? "In development" : "Case study soon"}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
