import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { profile } from "@/config/profile";
import { Reveal, Section } from "./Section";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more (10+ characters)")
    .max(1000, "Message must be under 1000 characters"),
});

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", value: profile.github.replace(/^https?:\/\//, ""), href: profile.github, Icon: Github },
  { label: "LinkedIn", value: profile.linkedin.replace(/^https?:\/\//, ""), href: profile.linkedin, Icon: Linkedin },
  { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
];

const inputClass =
  "w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/25";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const subject = encodeURIComponent(`Portfolio enquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    form.reset();
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Open to internships, graduate roles, freelance work and collaboration on AI-driven products."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass h-full rounded-3xl p-6 shadow-soft sm:p-8">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-6 space-y-4">
              {details.map(({ label, value, href, Icon }) => (
                <li key={label} className="flex min-w-0 items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="block truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" maxLength={100} className={inputClass} placeholder="Your name" />
                {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className={inputClass}
                  placeholder="you@example.com"
                />
                {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={1000}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about the role, project or idea…"
              />
              {errors.message ? (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
            >
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
