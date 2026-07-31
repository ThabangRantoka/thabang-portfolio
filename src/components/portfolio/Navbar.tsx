import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile, initials } from "@/config/profile";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <nav
          aria-label="Primary"
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4",
            scrolled ? "glass shadow-soft" : "border border-transparent",
          )}
        >
          <a
            href="#home"
            className="flex min-w-0 items-center gap-2.5"
            aria-label={`${profile.name} — home`}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-brand text-sm font-bold text-primary-foreground shadow-soft">
              {initials}
            </span>
            <span className="truncate font-display text-sm font-semibold">{profile.name}</span>
          </a>

          <div className="flex items-center gap-1">
            <ul className="mr-1 hidden items-center gap-0.5 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active === item.id
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-surface/60 text-foreground transition-colors hover:bg-accent"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-surface/60 text-foreground transition-colors hover:bg-accent lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open ? (
          <ul className="glass mt-2 grid gap-1 rounded-2xl p-2 shadow-soft lg:hidden">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  );
}
