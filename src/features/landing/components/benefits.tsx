"use client";

import { CircleCheckIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";
import { benefits } from "../data/content";
import { ComingSoonBadge } from "./coming-soon-badge";
import { LandingSection } from "./landing-section";
import { RoleTabs } from "./role-switcher";
import { SectionHeading } from "./section-heading";

type BenefitRole = keyof typeof benefits;

function BenefitList({ role }: { role: BenefitRole }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {benefits[role].map((b) => (
        <li key={b.title}>
          <Card className="h-full py-5 shadow-sm">
            <CardHeader className="grid-cols-[auto_1fr] items-start gap-x-4 px-5">
              <CircleCheckIcon className="row-span-2 mt-0.5 size-6 text-leaf" aria-hidden="true" />
              <CardTitle className="flex flex-wrap items-center gap-2 font-sans text-base font-semibold text-coffee sm:text-lg">
                {b.title}
                {b.comingSoon && <ComingSoonBadge />}
              </CardTitle>
              <CardDescription className="text-[0.95rem] leading-relaxed">
                {b.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function Benefits() {
  return (
    <LandingSection id="beneficios" labelledBy="beneficios-title">
      <SectionHeading
        id="beneficios-title"
        eyebrow="Beneficios"
        title="Hecha para quien compra y para quien produce"
        description="Elige cómo usarás la app. Puedes cambiar de rol cuando quieras desde tu perfil."
      />
      <RoleTabs label="¿Cómo usarás la app?" className="mt-10">
        <TabsContent value="comprador" className="w-full">
          <BenefitList role="comprador" />
        </TabsContent>
        <TabsContent value="productor" className="w-full">
          <BenefitList role="productor" />
        </TabsContent>
        <TabsContent value="ambos" className="w-full">
          <div className="grid gap-10">
            {(["comprador", "productor"] as const).map((r, i) => (
              <div key={r}>
                {i > 0 && <Separator className="mb-10" />}
                <h3 className="mb-5 text-2xl font-semibold text-coffee">Como {r}</h3>
                <BenefitList role={r} />
              </div>
            ))}
          </div>
        </TabsContent>
      </RoleTabs>
    </LandingSection>
  );
}
