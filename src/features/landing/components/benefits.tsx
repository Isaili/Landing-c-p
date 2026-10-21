"use client";

import { CircleCheckIcon } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { benefits } from "../data/content";
import { ComingSoonBadge } from "./coming-soon-badge";
import { RoleTabs } from "./role-switcher";
import { SectionHeading } from "./section-heading";

type BenefitRole = keyof typeof benefits;

function BenefitList({ role }: { role: BenefitRole }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {benefits[role].map((b) => (
        <li key={b.title} className="flex gap-4 rounded-2xl border bg-card p-5">
          <CircleCheckIcon className="mt-0.5 size-6 shrink-0 text-leaf" aria-hidden="true" />
          <div>
            <h3 className="flex flex-wrap items-center gap-2 font-sans text-lg font-semibold text-coffee">
              {b.title}
              {b.comingSoon && <ComingSoonBadge />}
            </h3>
            <p className="mt-1 text-muted-foreground">{b.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-title"
      className="scroll-mt-16 bg-cream-deep py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
              {(["comprador", "productor"] as const).map((r) => (
                <div key={r}>
                  <h3 className="mb-4 text-2xl font-semibold text-coffee">
                    Como {r}
                  </h3>
                  <BenefitList role={r} />
                </div>
              ))}
            </div>
          </TabsContent>
        </RoleTabs>
      </div>
    </section>
  );
}
