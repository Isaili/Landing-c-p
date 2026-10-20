import { CalendarRangeIcon } from "lucide-react";
import { harvestPasses } from "../data/plans";
import { formatPriceMxn } from "../lib/format-price";

export function HarvestPasses() {
  return (
    <section aria-labelledby="pases-title" className="rounded-3xl bg-cream-deep p-6 sm:p-8">
      <h3 id="pases-title" className="text-2xl font-semibold text-coffee">
        Pases de Cosecha
      </h3>
      <p className="mt-1 text-muted-foreground">
        Para compradores: todo lo de Max, solo durante la temporada. Un solo pago, sin renovación.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {harvestPasses.map((pass) => (
          <li key={pass.name} className="flex gap-4 rounded-2xl border bg-card p-5">
            <CalendarRangeIcon className="mt-1 size-6 shrink-0 text-clay-dark" aria-hidden="true" />
            <div>
              <p className="font-semibold text-coffee">
                {pass.name} · {pass.durationMonths} meses
              </p>
              <p className="mt-1 font-heading text-2xl font-semibold text-coffee">
                {formatPriceMxn(pass.price)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{pass.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
