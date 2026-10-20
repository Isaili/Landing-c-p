import { cn } from "@/lib/utils";

/** Isotipo: un grano de café y un grano de pimienta */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-8 shrink-0", className)}
    >
      <ellipse cx="13" cy="16" rx="8.5" ry="11" transform="rotate(-20 13 16)" fill="var(--coffee)" />
      <path
        d="M10.2 6.4c3.6 3.4 4.4 7.6 2.4 10.4s-2.2 6.6.8 9.6"
        fill="none"
        stroke="var(--cream)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="25" cy="22" r="5" fill="var(--leaf)" />
      <circle cx="23.6" cy="20.6" r="1.4" fill="var(--leaf-soft)" opacity=".6" />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-heading text-xl font-semibold tracking-tight",
          tone === "light" ? "text-cream" : "text-coffee",
        )}
      >
        Grano y Grano
      </span>
    </span>
  );
}
