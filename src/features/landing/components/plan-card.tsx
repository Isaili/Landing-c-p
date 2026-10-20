import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { comingSoonLabel, paymentsEnabled } from "../data/plans";
import { formatPrice, monthlyEquivalent } from "../lib/format-price";
import type { Billing, Plan } from "../types";

export function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const isFree = plan.priceMonthly === 0;
  const yearly = billing === "anual";
  const price = yearly ? plan.priceYearly : plan.priceMonthly;
  const available = isFree || paymentsEnabled;
  const titleId = `plan-${plan.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-card p-6 sm:p-7",
        plan.highlighted && "border-2 border-coffee shadow-xl shadow-coffee/10",
      )}
    >
      {plan.badge && (
        <span
          className={cn(
            "absolute -top-3.5 left-6 rounded-full px-3 py-1 text-xs font-semibold",
            plan.highlighted ? "bg-coffee text-cream" : "bg-clay text-coffee-deep",
          )}
        >
          {plan.badge}
        </span>
      )}

      <h3 id={titleId} className="text-2xl font-semibold text-coffee">
        {plan.name}
      </h3>
      <p className="mt-1 text-muted-foreground">{plan.tagline}</p>

      <div className="mt-6">
        <p className="flex items-baseline gap-1.5">
          <span className="font-heading text-4xl font-semibold text-coffee">
            {formatPrice(price)}
          </span>
          {!isFree && (
            <span className="text-muted-foreground">
              MXN<span aria-hidden="true">/</span>
              <span className="sr-only"> al </span>
              {yearly ? "año" : "mes"}
            </span>
          )}
        </p>
        <p className="mt-1 min-h-5 text-sm text-muted-foreground">
          {isFree
            ? "Gratis para siempre"
            : yearly
              ? `Equivale a ${formatPrice(monthlyEquivalent(plan.priceYearly))} al mes`
              : `O ${formatPrice(plan.priceYearly)} al año`}
        </p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.highlights.map((h) => (
          <li key={h} className="flex gap-2.5">
            <CheckIcon className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {available ? (
        <Link
          href="/#descargar"
          className={cn(
            buttonVariants({
              size: "xl",
              variant: plan.highlighted ? "default" : "outline",
            }),
            "mt-8 w-full",
          )}
        >
          {plan.cta}
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className={cn(
            buttonVariants({ size: "xl", variant: "secondary" }),
            "mt-8 w-full cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted",
          )}
        >
          {comingSoonLabel}
        </span>
      )}
    </article>
  );
}
