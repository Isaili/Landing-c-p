import { CalculatorIcon, HandshakeIcon, NotebookPenIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { problems } from "../data/content";
import { LandingSection } from "./landing-section";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = {
  calculator: CalculatorIcon,
  notebook: NotebookPenIcon,
  handshake: HandshakeIcon,
};

export function Problem() {
  return (
    <LandingSection labelledBy="problema-title">
      <SectionHeading
        id="problema-title"
        eyebrow="El problema"
        title="Hacer cuentas a mano te está costando dinero"
      />
      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {problems.map((p, i) => {
          const Icon = icons[p.icon];
          return (
            <li key={p.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <Card className="h-full gap-5 py-7 shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader className="gap-3 px-7">
                    <span className="mb-2 inline-flex size-11 items-center justify-center rounded-lg border border-clay/25 bg-accent text-clay-dark">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-xl font-semibold text-coffee">{p.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {p.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </LandingSection>
  );
}
