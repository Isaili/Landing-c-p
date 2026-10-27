import { CalendarRangeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { harvestPasses } from "../data/plans";
import { formatPriceWithCurrency } from "../lib/format-price";

export function HarvestPasses() {
  return (
    <section aria-labelledby="pases-title">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 id="pases-title" className="text-2xl font-semibold text-coffee">
            Pases de Cosecha
          </h3>
          <p className="mt-1 text-muted-foreground">
            Para compradores: todo lo de Max, solo durante la temporada. Un solo pago, sin
            renovación.
          </p>
        </div>
      </div>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {harvestPasses.map((pass) => (
          <li key={pass.name}>
            <Card className="h-full py-6 shadow-sm">
              <CardHeader className="px-6">
                <CardTitle className="flex items-center gap-2 font-sans text-lg font-semibold text-coffee">
                  <CalendarRangeIcon className="size-5 text-leaf" aria-hidden="true" />
                  {pass.name}
                </CardTitle>
                <CardDescription>{pass.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-baseline justify-between gap-3 px-6">
                <span className="font-heading text-3xl font-semibold text-coffee">
                  {formatPriceWithCurrency(pass.price)}
                </span>
                <Badge variant="outline" className="h-6 px-2.5">
                  {pass.durationMonths} meses
                </Badge>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
