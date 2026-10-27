import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ANDROID_APK_URL } from "../data/links";
import { comingSoonLabel, currency, paymentsEnabled } from "../data/plans";
import { formatPrice, monthlyEquivalent } from "../lib/format-price";
import type { Billing, Plan } from "../types";

export function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const isFree = plan.priceMonthly === 0;
  const yearly = billing === "anual";
  const price = yearly ? plan.priceYearly : plan.priceMonthly;
  const available = isFree || paymentsEnabled;
  const titleId = `plan-${plan.id}-title`;

  return (
    <Card
      aria-labelledby={titleId}
      className={cn(
        "h-full gap-6 py-7 shadow-sm",
        plan.highlighted && "shadow-xl shadow-leaf/10 ring-2 ring-leaf",
      )}
    >
      <CardHeader className="px-7">
        <CardTitle id={titleId} className="text-2xl font-semibold text-coffee">
          {plan.name}
        </CardTitle>
        <CardDescription className="text-[0.95rem]">{plan.tagline}</CardDescription>
        {plan.badge && (
          <CardAction>
            <Badge
              className={cn(
                "h-6 px-2.5 font-semibold",
                plan.highlighted
                  ? "bg-leaf text-white"
                  : "border-clay/30 bg-accent text-clay-dark",
              )}
              variant={plan.highlighted ? "default" : "outline"}
            >
              {plan.badge}
            </Badge>
          </CardAction>
        )}
      </CardHeader>

      <CardContent className="px-7">
        <p className="flex items-baseline gap-1.5">
          <span className="font-heading text-[2.6rem] leading-none font-semibold text-coffee">
            {formatPrice(price)}
          </span>
          {!isFree && (
            <span className="text-muted-foreground">
              {currency}<span aria-hidden="true">/</span>
              <span className="sr-only"> al </span>
              {yearly ? "año" : "mes"}
            </span>
          )}
        </p>
        <p className="mt-2 min-h-5 text-sm text-muted-foreground">
          {isFree
            ? "Gratis para siempre"
            : yearly
              ? `Equivale a ${formatPrice(monthlyEquivalent(plan.priceYearly))} al mes`
              : `O ${formatPrice(plan.priceYearly)} al año`}
        </p>

        <Separator className="my-6" />

        <ul className="flex flex-col gap-3 text-[0.95rem]">
          {plan.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto border-0 bg-transparent px-7 pt-2 pb-0">
        {available ? (
          <Link
            href={isFree ? ANDROID_APK_URL : "/#descargar"}
            className={cn(
              buttonVariants({ size: "xl", variant: plan.highlighted ? "default" : "outline" }),
              "w-full",
            )}
          >
            {plan.cta}
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className={cn(
              buttonVariants({ size: "xl", variant: "outline" }),
              "w-full cursor-not-allowed border-dashed text-muted-foreground hover:bg-transparent hover:text-muted-foreground",
            )}
          >
            {comingSoonLabel}
          </span>
        )}
      </CardFooter>
    </Card>
  );
}
