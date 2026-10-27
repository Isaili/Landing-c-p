"use client";

import { PackageIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRole } from "../context/role-context";
import { currency, pricing } from "../data/plans";
import { formatPrice } from "../lib/format-price";
import type { Billing } from "../types";

/** Invita a ver el Paquete Comprador + Productor (cambia el rol a "ambos") */
export function BundleCard({ billing }: { billing: Billing }) {
  const { setRole } = useRole();
  const bundlePlans = pricing.ambos.plans.filter((p) => p.priceMonthly > 0);
  const yearly = billing === "anual";

  return (
    <Card className="py-6 shadow-sm sm:py-8">
      <CardContent className="flex flex-col gap-6 px-6 sm:flex-row sm:items-center sm:px-8">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf">
          <PackageIcon className="size-6" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-coffee sm:text-2xl">
            Paquete Comprador + Productor
          </h3>
          <p className="mt-1 text-muted-foreground">
            ¿Compras y también produces? Usa los dos roles con una sola cuenta y paga menos.
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[0.95rem] font-medium text-coffee">
            {bundlePlans.map((p) => (
              <li key={p.id}>
                {p.name.replace("Paquete ", "")}:{" "}
                {formatPrice(yearly ? p.priceYearly : p.priceMonthly)} {currency}/
                {yearly ? "año" : "mes"}
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#precios"
          onClick={() => setRole("ambos")}
          className={cn(buttonVariants({ size: "xl", variant: "outline" }), "border-leaf/40")}
        >
          Ver paquete
        </a>
      </CardContent>
    </Card>
  );
}
