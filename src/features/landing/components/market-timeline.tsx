import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { marketNote, marketSteps } from "../data/content";
import { LandingSection } from "./landing-section";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function MarketTimeline() {
  return (
    <LandingSection id="mercado" labelledBy="mercado-title">
      <SectionHeading
        id="mercado-title"
        eyebrow="Mercado de lotes"
        title="Cómo funciona el mercado"
        description="Un proceso claro para que el productor venda bien y el comprador encuentre buenos lotes a tiempo."
      />

      <ol className="relative mt-14 grid gap-5 lg:grid-cols-4">
        {/* Línea que une los pasos (solo escritorio) */}
        <span
          aria-hidden="true"
          className="absolute top-[2.85rem] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-leaf/10 via-leaf/40 to-leaf/10 lg:block"
        />
        {marketSteps.map((step, i) => (
          <li key={step.title} className="relative">
            <Reveal delay={i * 0.1} className="h-full">
              <Card className="h-full py-6 shadow-sm">
                <CardHeader className="gap-3 px-6">
                  <span className="relative z-10 mb-2 flex size-11 items-center justify-center rounded-full bg-leaf font-heading text-lg font-semibold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <CardTitle className="font-sans text-lg font-semibold text-coffee">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-[0.95rem] leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>

      <Alert role="note" className="mx-auto mt-10 max-w-2xl px-4 py-3">
        <InfoIcon className="text-clay-dark" aria-hidden="true" />
        <AlertDescription className="text-[0.95rem] text-foreground/80">
          {marketNote}
        </AlertDescription>
      </Alert>
    </LandingSection>
  );
}
