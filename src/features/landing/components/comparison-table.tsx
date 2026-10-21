import { CheckIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ComparisonRow, ComparisonValue, Plan, PlanId } from "../types";
import { ComingSoonBadge } from "./coming-soon-badge";

const planIds: PlanId[] = ["free", "platino", "max"];

function Cell({ value }: { value: ComparisonValue }) {
  if (value === true)
    return (
      <>
        <CheckIcon className="mx-auto size-5 text-leaf" aria-hidden="true" />
        <span className="sr-only">Incluido</span>
      </>
    );
  if (value === false)
    return (
      <>
        <span aria-hidden="true" className="text-muted-foreground">—</span>
        <span className="sr-only">No incluido</span>
      </>
    );
  return <span className="text-sm font-medium">{value}</span>;
}

export function ComparisonTable({
  caption,
  plans,
  rows,
}: {
  caption: string;
  plans: Plan[];
  rows: ComparisonRow[];
}) {
  const names = Object.fromEntries(plans.map((p) => [p.id, p.name]));

  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <Table className="min-w-[560px]">
        <caption className="border-b px-4 py-3 text-left font-heading text-lg font-semibold text-coffee">
          {caption}
        </caption>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="sticky left-0 z-10 bg-card px-4 py-3 text-coffee">
              Función
            </TableHead>
            {planIds.map((id) => (
              <TableHead key={id} className="w-28 px-3 text-center text-coffee">
                {names[id]}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.feature} className="hover:bg-cream-deep/60">
              <TableHead
                scope="row"
                className="sticky left-0 z-10 h-auto max-w-[220px] bg-card px-4 py-3 font-normal whitespace-normal text-foreground sm:max-w-none"
              >
                <span className="flex flex-wrap items-center gap-2">
                  {row.feature}
                  {row.comingSoon && <ComingSoonBadge />}
                </span>
              </TableHead>
              {planIds.map((id) => (
                <TableCell key={id} className="px-3 py-3 text-center whitespace-normal">
                  <Cell value={row.values[id]} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
