import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Badge
          variant="outline"
          className="mb-4 h-7 gap-1.5 border-leaf/20 bg-white px-3 text-xs font-semibold tracking-wide text-leaf uppercase"
        >
          <span className="size-1.5 rounded-full bg-leaf" aria-hidden="true" />
          {eyebrow}
        </Badge>
      )}
      <h2 id={id} className="text-3xl font-semibold text-coffee sm:text-[2.6rem] sm:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-pretty text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
