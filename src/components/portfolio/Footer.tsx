import { profile, initials } from "@/config/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 sm:px-8 sm:flex sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-brand text-sm font-bold text-primary-foreground">
            {initials}
          </span>
          <p className="truncate text-sm text-muted-foreground">
            © {year} {profile.name}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Built with React, Tailwind CSS and AI.
        </p>
      </div>
    </footer>
  );
}
