/** "ambos" = Paquete Comprador + Productor */
export type Role = "comprador" | "productor" | "ambos";

export type Billing = "mensual" | "anual";

export type PlanId = "free" | "platino" | "max";

export interface Plan {
  id: PlanId;
  name: string;
  /** Frase corta bajo el nombre del plan */
  tagline: string;
  /** Precio en MXN; 0 = gratis */
  priceMonthly: number;
  priceYearly: number;
  cta: string;
  /** Resalta la tarjeta (borde y sombra) */
  highlighted?: boolean;
  /** Etiqueta sobre la tarjeta, por ejemplo "Más popular" */
  badge?: string;
  /** Puntos clave que se muestran en la tarjeta */
  highlights: string[];
}

/** true = ✓, false = —, string = texto libre */
export type ComparisonValue = boolean | string;

export interface ComparisonRow {
  feature: string;
  values: Record<PlanId, ComparisonValue>;
  /** Necesita servidor; se marca como "Próximamente" */
  comingSoon?: boolean;
}

export interface RolePricing {
  plans: Plan[];
  comparison: ComparisonRow[];
}

export interface HarvestPass {
  name: string;
  durationMonths: number;
  price: number;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  municipality: string;
  quote: string;
  /** Ruta en /public, por ejemplo "/images/testimonios/maria.jpg" */
  photo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
