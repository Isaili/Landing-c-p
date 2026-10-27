import { currency } from "../data/plans";

const withCents = new Intl.NumberFormat("es-MX", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const whole = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 0 });

/** 19.99 → "$19.99" · 0 → "$0" · 1200 → "$1,200" */
export function formatPrice(amount: number): string {
  return `$${Number.isInteger(amount) ? whole.format(amount) : withCents.format(amount)}`;
}

/** 19.99 → "$19.99 USD" */
export function formatPriceWithCurrency(amount: number): string {
  return `${formatPrice(amount)} ${currency}`;
}

/** Equivalente mensual de un precio anual, a centavos: 199.99 → 16.67 */
export function monthlyEquivalent(yearly: number): number {
  return Math.round((yearly / 12) * 100) / 100;
}

/** { min: 30, max: 40 } → "30–40 %"; si son iguales → "30 %" */
export function formatDiscount(min: number, max: number): string {
  return min === max ? `${min} %` : `${min}–${max} %`;
}
