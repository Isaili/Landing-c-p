import { InfoIcon } from "lucide-react";
import { marketNote, marketSteps } from "../data/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function MarketTimeline() {
  return (
    <section
      id="mercado"
      aria-labelledby="mercado-title"
      className="scroll-mt-16 bg-coffee-deep py-20 text-cream sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="mercado-title"
          eyebrow="Mercado de lotes"
          title="Cómo funciona el mercado"
          description="Un proceso claro para que el productor venda bien y el comprador encuentre buenos lotes a tiempo."
          tone="light"
        />

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {/* Línea que une los pasos */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-6 w-px bg-cream/20 lg:top-6 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full"
          />
          {marketSteps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.1} className="flex gap-5 lg:flex-col">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-clay font-heading text-xl font-semibold text-coffee-deep ring-8 ring-coffee-deep">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-cream/75">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-14 flex max-w-2xl items-start gap-3 rounded-2xl border border-cream/15 bg-cream/5 p-4 text-sm text-cream/85">
          <InfoIcon className="mt-0.5 size-5 shrink-0 text-clay" aria-hidden="true" />
          {marketNote}
        </p>
      </div>
    </section>
  );
}
