import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Contenedor común de las secciones: fondo blanco, separación con línea fina */
export function LandingSection({
  id,
  labelledBy,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-16 border-t border-border/70 bg-white py-20 sm:py-28", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", containerClassName)}>{children}</div>
    </section>
  );
}
