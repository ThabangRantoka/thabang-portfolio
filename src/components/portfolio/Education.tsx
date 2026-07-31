import { GraduationCap } from "lucide-react";
import { education, sectionCopy } from "@/config/profile";
import { Reveal, Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow={sectionCopy.education.eyebrow}
      title={sectionCopy.education.title}
      description={sectionCopy.education.description}
    >
      <ol className="relative space-y-5 border-l border-border pl-6 sm:pl-8">
        {education.map((item, i) => (
          <li key={item.institution}>
            <Reveal delay={i * 100}>
              <span
                aria-hidden
                className="absolute -left-[9px] mt-6 h-4.5 w-4.5 rounded-full gradient-brand ring-4 ring-background"
              />
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold tracking-tight">{item.institution}</h3>
                      {item.period ? (
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.period}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-primary">{item.qualification}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
