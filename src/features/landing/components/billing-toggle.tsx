"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { yearlyBadge } from "../data/plans";
import type { Billing } from "../types";

export function BillingToggle({
  billing,
  onChange,
}: {
  billing: Billing;
  onChange: (billing: Billing) => void;
}) {
  const yearly = billing === "anual";
  const option = (value: Billing, label: string) => (
    <button
      type="button"
      onClick={() => onChange(value)}
      aria-pressed={billing === value}
      className={cn(
        "rounded-md px-1 text-base font-medium transition-colors",
        billing === value ? "text-coffee" : "text-muted-foreground",
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {option("mensual", "Mensual")}
      <Switch
        checked={yearly}
        onCheckedChange={(checked) => onChange(checked ? "anual" : "mensual")}
        aria-label="Pagar anual"
        className="data-checked:bg-leaf"
      />
      {option("anual", "Anual")}
      <span className="rounded-full bg-leaf-soft px-2.5 py-0.5 text-sm font-semibold text-secondary-foreground">
        {yearlyBadge}
      </span>
    </div>
  );
}
