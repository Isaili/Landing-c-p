import { SparklesIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { founderOffer } from "../data/plans";
import { formatDiscount } from "../lib/format-price";

const discount = formatDiscount(founderOffer.discountMin, founderOffer.discountMax);

export const founderText = `Precio de fundador: ${discount} menos de por vida para los primeros ${founderOffer.seats} usuarios`;

export function FounderBanner({ className }: { className?: string }) {
  return (
    <Alert role="note" className={cn("border-clay/30 bg-accent px-5 py-4", className)}>
      <SparklesIcon className="text-clay-dark" aria-hidden="true" />
      <AlertTitle className="text-base font-semibold text-coffee">
        Precio de fundador: {discount} menos de por vida
      </AlertTitle>
      <AlertDescription className="text-[0.95rem] text-coffee/80">
        Solo para los primeros {founderOffer.seats} usuarios que se suscriban.
      </AlertDescription>
    </Alert>
  );
}
