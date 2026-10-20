import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { comingSoonLabel } from "../data/plans";

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-clay/40 bg-accent text-[0.7rem] font-semibold text-clay-dark",
        className,
      )}
    >
      {comingSoonLabel}
    </Badge>
  );
}
