import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/config/profile";
import { InitialsAvatar } from "./InitialsAvatar";
import { Reveal } from "./Section";

const socials = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
].filter((s) => Boolean(s.href));

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] sm:h-[38rem] sm:w-[38rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-primary-glow/20 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Hello, I&apos;m <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 font-display text-base font-medium leading-snug text-foreground/85 sm:text-xl">
              {profile.title} <span className="text-muted-foreground">|</span> {profile.subtitle}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted-foreground sm:text-base">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/70 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-soft"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="order-1 justify-self-center lg:order-2">
          <div className="animate-float">
            <InitialsAvatar />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
