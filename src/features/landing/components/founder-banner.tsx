import { SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { founderOffer } from "../data/plans";
import { formatDiscount } from "../lib/format-price";

export const founderText = `Precio de fundador: ${formatDiscount(
  founderOffer.discountMin,
  founderOffer.discountMax,
)} menos de por vida para los primeros ${founderOffer.seats} usuarios`;

export function FounderBanner({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center justify-center gap-3 rounded-2xl bg-clay px-5 py-4 text-center font-semibold text-coffee-deep",
        className,
      )}
    >
      <SparklesIcon className="size-5 shrink-0" aria-hidden="true" />
      {founderText}
    </p>
  );
}
