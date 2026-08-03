import { ArrowUpRight, Check, Github } from "lucide-react";
import { projects, sectionCopy } from "@/config/profile";
import { Reveal, Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow={sectionCopy.projects.eyebrow}
      title={sectionCopy.projects.title}
      description={sectionCopy.projects.description}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lift sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-24 h-40 gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
              />
              <div className="relative flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug tracking-tight">
                  {project.name}
                </h3>
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

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-auto flex flex-wrap items-center gap-2 pt-6">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl gradient-brand px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface/70 px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
                  >
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                ) : null}
                {!project.liveUrl && !project.repoUrl ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                    {String(project.status) === "Coming Soon" ? "In development" : "Case study soon"}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
