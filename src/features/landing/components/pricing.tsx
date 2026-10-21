"use client";

import { useState } from "react";
import { GiftIcon, PercentIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TabsContent } from "@/components/ui/tabs";
import { commission, pricing, trialDays } from "../data/plans";
import type { Billing, Role } from "../types";
import { BillingToggle } from "./billing-toggle";
import { BundleCard } from "./bundle-card";
import { ComparisonTable } from "./comparison-table";
import { FounderBanner } from "./founder-banner";
import { HarvestPasses } from "./harvest-passes";
import { LandingSection } from "./landing-section";
import { PlanCard } from "./plan-card";
import { RoleTabs } from "./role-switcher";
import { SectionHeading } from "./section-heading";

const roles: Role[] = ["comprador", "productor", "ambos"];

function RolePricing({ role, billing }: { role: Role; billing: Billing }) {
  const { plans, comparison } = pricing[role];

  return (
    <div className="flex flex-col gap-12">
      <ul className="grid gap-6 md:grid-cols-3">
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
    <LandingSection id="precios" labelledBy="precios-title">
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
        <Alert role="note" className="px-5 py-4">
          <PercentIcon className="text-clay-dark" aria-hidden="true" />
          <AlertTitle className="text-base font-semibold text-coffee">
            Comisión por venta cerrada
          </AlertTitle>
          <AlertDescription className="text-[0.95rem]">
            La paga el comprador solo cuando se cierra un trato en el mercado:{" "}
            {commission.free} % en Free y Platino, {commission.max} % en Max.
          </AlertDescription>
        </Alert>
        <Alert role="note" className="px-5 py-4">
          <GiftIcon className="text-leaf" aria-hidden="true" />
          <AlertTitle className="text-base font-semibold text-coffee">
            {trialDays} días de prueba de Platino y Max, sin tarjeta
          </AlertTitle>
          <AlertDescription className="text-[0.95rem]">
            Pruébalos desde la app antes de decidir.
          </AlertDescription>
        </Alert>
      </div>

      <FounderBanner className="mt-4" />
    </LandingSection>
  );
}
