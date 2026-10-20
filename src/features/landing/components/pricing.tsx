"use client";

import { useState } from "react";
import { GiftIcon, PercentIcon } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { commission, pricing, trialDays } from "../data/plans";
import type { Billing, Role } from "../types";
import { BillingToggle } from "./billing-toggle";
import { BundleCard } from "./bundle-card";
import { ComparisonTable } from "./comparison-table";
import { FounderBanner } from "./founder-banner";
import { HarvestPasses } from "./harvest-passes";
import { PlanCard } from "./plan-card";
import { RoleTabs } from "./role-switcher";
import { SectionHeading } from "./section-heading";

const roles: Role[] = ["comprador", "productor", "ambos"];

function RolePricing({ role, billing }: { role: Role; billing: Billing }) {
  const { plans, comparison } = pricing[role];

  return (
    <div className="flex flex-col gap-12">
      <ul className="grid gap-8 pt-4 md:grid-cols-3 md:gap-6">
        {plans.map((plan) => (
          <li key={plan.id}>
            <PlanCard plan={plan} billing={billing} />
          </li>
        ))}
      </ul>

      {role === "ambos" ? (
        <div className="grid gap-6">
          <ComparisonTable
            caption="Lo que incluye como comprador"
            plans={pricing.comprador.plans}
            rows={pricing.comprador.comparison}
          />
          <ComparisonTable
            caption="Lo que incluye como productor"
            plans={pricing.productor.plans}
            rows={pricing.productor.comparison}
          />
        </div>
      ) : (
        <ComparisonTable
          caption={`Comparativa completa para ${role}`}
          plans={plans}
          rows={comparison}
        />
      )}

      {role !== "ambos" && <BundleCard billing={billing} />}
      {role !== "productor" && <HarvestPasses />}
    </div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("mensual");

  return (
    <section
      id="precios"
      aria-labelledby="precios-title"
      className="scroll-mt-16 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="precios-title"
          eyebrow="Precios"
          title="Empieza gratis y crece cuando lo necesites"
          description="Precios en pesos mexicanos. Cambia de plan o cancela cuando quieras."
        />

        <RoleTabs label="Ver precios para" className="mt-10">
          <BillingToggle billing={billing} onChange={setBilling} />
          {roles.map((role) => (
            <TabsContent key={role} value={role} className="w-full">
              <RolePricing role={role} billing={billing} />
            </TabsContent>
          ))}
        </RoleTabs>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <p className="flex items-start gap-3 rounded-2xl border bg-card p-5">
            <PercentIcon className="mt-0.5 size-5 shrink-0 text-clay-dark" aria-hidden="true" />
            <span>
              <strong className="text-coffee">Comisión por venta cerrada.</strong>{" "}
              La paga el comprador solo cuando se cierra un trato en el mercado:{" "}
              {commission.free} % en Free y Platino, {commission.max} % en Max.
            </span>
          </p>
          <p className="flex items-start gap-3 rounded-2xl border bg-card p-5">
            <GiftIcon className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
            <span>
              <strong className="text-coffee">
                {trialDays} días de prueba de Platino y Max, sin tarjeta.
              </strong>{" "}
              Pruébalos desde la app antes de decidir.
            </span>
          </p>
        </div>

        <FounderBanner className="mt-6" />
      </div>
    </section>
  );
}
