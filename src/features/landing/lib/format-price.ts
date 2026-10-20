const mxn = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 0 });

/** 3490 → "$3,490" */
export function formatPrice(amount: number): string {
  return `$${mxn.format(amount)}`;
}

/** 3490 → "$3,490 MXN" */
export function formatPriceMxn(amount: number): string {
  return `${formatPrice(amount)} MXN`;
}

/** Equivalente mensual de un precio anual, redondeado: 3490 → 291 */
export function monthlyEquivalent(yearly: number): number {
  return Math.round(yearly / 12);
}

/** { min: 30, max: 40 } → "30–40 %"; si son iguales → "30 %" */
export function formatDiscount(min: number, max: number): string {
  return min === max ? `${min} %` : `${min}–${max} %`;
}
