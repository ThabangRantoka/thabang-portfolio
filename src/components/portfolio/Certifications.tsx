import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/config/profile";
import { Reveal, Section } from "./Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials & continuous learning"
      description="Verified programmes in generative AI, responsible AI practice and developer tooling."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 80}>
            <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:gradient-brand group-hover:text-primary-foreground">
                  <Award className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  Certified
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              <a
                href={cert.url}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
              >
                View Certificate <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
