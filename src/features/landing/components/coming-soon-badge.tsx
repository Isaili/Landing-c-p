import { ClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { comingSoonLabel } from "../data/plans";

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-clay/30 bg-accent font-semibold tracking-normal text-clay-dark normal-case",
        className,
      )}
    >
      <ClockIcon aria-hidden="true" />
      {comingSoonLabel}
    </Badge>
  );
}
