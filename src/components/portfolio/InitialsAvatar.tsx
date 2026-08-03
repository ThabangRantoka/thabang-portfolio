import { cn } from "@/lib/utils";
import { initials, profile } from "@/config/profile";

/** Circular avatar — uses the profile photo when set, otherwise the initials. */
export function InitialsAvatar({
  size = "lg",
  className,
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const dimensions = size === "lg" ? "h-44 w-44 sm:h-56 sm:w-56" : "h-10 w-10";
  const textSize = size === "lg" ? "text-5xl sm:text-6xl" : "text-sm";
  const photo = profile.photoUrl as string;

  return (
    <div className={cn("relative grid place-items-center", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute rounded-full gradient-brand blur-2xl animate-glow-pulse",
          size === "lg" ? "h-52 w-52 sm:h-64 sm:w-64" : "h-12 w-12 blur-md",
        )}
      />
      {size === "lg" ? (
        <div
          aria-hidden
          className="absolute h-52 w-52 rounded-full border border-primary/25 sm:h-72 sm:w-72 animate-spin-slow border-dashed"
        />
      ) : null}
      <div
        className={cn(
          "relative grid place-items-center overflow-hidden rounded-full gradient-brand shadow-glow ring-1 ring-primary/30",
          dimensions,
        )}
      >
        {photo ? (
          <img
            src={photo}
            alt={`Portrait of ${profile.name}`}
            loading={size === "lg" ? "eager" : "lazy"}
            style={{ objectPosition: "48% 30%" }}
            className="h-full w-full scale-[2.1] object-cover"
          />
        ) : (
          <span
            className={cn(
              "font-display font-bold tracking-tight text-primary-foreground",
              textSize,
            )}
          >
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}

