import { CalculatorIcon, HandshakeIcon, NotebookPenIcon } from "lucide-react";
import { problems } from "../data/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = {
  calculator: CalculatorIcon,
  notebook: NotebookPenIcon,
  handshake: HandshakeIcon,
};

export function Problem() {
  return (
    <section aria-labelledby="problema-title" className="bg-cream-deep py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="problema-title"
          eyebrow="El problema"
          title="Hacer cuentas a mano te está costando dinero"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <li key={p.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="h-full rounded-2xl border bg-white p-6">
                    <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-accent text-clay-dark">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold text-coffee">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground">{p.description}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
