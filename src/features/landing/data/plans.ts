import type { HarvestPass, PlanId, Role, RolePricing } from "../types";

/**
 * Precios, planes y tablas comparativas.
 * Todos los montos están en pesos mexicanos (MXN), sin decimales.
 * Cambia aquí los valores y la página se actualiza sola.
 */

/**
 * Mientras no haya forma de pagar dentro de la app, los botones de
 * Platino y Max dicen "Próximamente". Cámbialo a true cuando haya pagos.
 */
export const paymentsEnabled = false;
export const comingSoonLabel = "Próximamente";

export const pricing: Record<Role, RolePricing> = {
  comprador: {
    plans: [
      {
        id: "free",
        name: "Free",
        tagline: "Registra y controla tus compras",
        priceMonthly: 0,
        priceYearly: 0,
        cta: "Empieza gratis",
        highlights: [
          "Cálculo de merma seco/verde",
          "Historial básico",
          "Dashboard de inversión",
        ],
      },
      {
        id: "platino",
        name: "Platino",
        tagline: "Compra con datos, no a ojo",
        priceMonthly: 349,
        priceYearly: 3490,
        cta: "Prueba Platino",
        highlighted: true,
        badge: "Más popular",
        highlights: [
          "Todo lo de Free",
          "Respaldo en la nube",
          "Predicción de precio y merma",
          "Mercado de lotes después de 48 h",
        ],
      },
      {
        id: "max",
        name: "Max",
        tagline: "Los mejores lotes, primero para ti",
        priceMonthly: 999,
        priceYearly: 9990,
        cta: "Quiero Max",
        badge: "Más completo",
        highlights: [
          "Todo lo de Platino",
          "Acceso anticipado a los lotes",
          "Subastas y pujas",
          "Optimización de compras con IA",
        ],
      },
    ],
    comparison: [
      { feature: "Registro y cálculo de compras (seco/verde/merma)", values: { free: true, platino: true, max: true } },
      { feature: "Historial con filtros", values: { free: "Básico", platino: "Avanzado", max: "Avanzado" } },
      { feature: "Dashboard de estadísticas e inversión", values: { free: true, platino: true, max: true } },
      { feature: "Exportación de reportes", values: { free: "Limitada", platino: "Excel y comparativos", max: "Excel y comparativos" } },
      { feature: "Sincronización en la nube", values: { free: false, platino: true, max: true } },
      { feature: "Análisis de tendencias y mejores proveedores", values: { free: false, platino: true, max: true } },
      { feature: "Predicción de precio y merma", values: { free: false, platino: true, max: true } },
      { feature: "Alertas inteligentes", values: { free: false, platino: true, max: true } },
      { feature: "Acceso al mercado de lotes", values: { free: false, platino: "Después de 48 h", max: "Acceso anticipado" }, comingSoon: true },
      { feature: "Subastas y pujas", values: { free: false, platino: false, max: true }, comingSoon: true },
      { feature: "Notificaciones en tiempo real", values: { free: false, platino: false, max: true }, comingSoon: true },
      { feature: "Optimización de compras con IA", values: { free: false, platino: false, max: true } },
      { feature: "Comisión por venta", values: { free: false, platino: "2 %", max: "1 %" }, comingSoon: true },
    ],
  },
  productor: {
    plans: [
      {
        id: "free",
        name: "Free",
        tagline: "Registra tu producción y vende",
        priceMonthly: 0,
        priceYearly: 0,
        cta: "Empieza gratis",
        highlights: [
          "Registro de cosecha y secado",
          "Cálculo de rendimiento",
          "Hasta 2 lotes activos",
        ],
      },
      {
        id: "platino",
        name: "Platino",
        tagline: "Conoce tu rendimiento",
        priceMonthly: 89,
        priceYearly: 890,
        cta: "Prueba Platino",
        highlighted: true,
        badge: "Más popular",
        highlights: [
          "Todo lo de Free",
          "Lotes ilimitados (próximamente)",
          "Rendimiento por temporada",
          "Predicción de kilos secos",
        ],
      },
      {
        id: "max",
        name: "Max",
        tagline: "Vende al mejor precio",
        priceMonthly: 229,
        priceYearly: 2290,
        cta: "Quiero Max",
        badge: "Más completo",
        highlights: [
          "Todo lo de Platino",
          "Subasta con precio mínimo (próximamente)",
          "Lotes destacados",
          "Precio sugerido para vender",
        ],
      },
    ],
    comparison: [
      { feature: "Perfil de productor", values: { free: true, platino: true, max: true } },
      { feature: "Registro de producción en verde y secado", values: { free: true, platino: true, max: true } },
      { feature: "Cálculo automático de rendimiento", values: { free: true, platino: true, max: true } },
      { feature: "Publicación de kilos disponibles", values: { free: "Hasta 2 lotes", platino: "Ilimitados", max: "Ilimitados" }, comingSoon: true },
      { feature: "Historial de rendimiento por temporada", values: { free: false, platino: true, max: true } },
      { feature: "Predicción de kilos secos", values: { free: false, platino: true, max: true } },
      { feature: "Reportes de producción", values: { free: false, platino: true, max: true } },
      { feature: "Venta por subasta con precio mínimo", values: { free: false, platino: false, max: true }, comingSoon: true },
      { feature: "Lotes destacados", values: { free: false, platino: false, max: true }, comingSoon: true },
      { feature: "Precio sugerido y mejor momento para vender", values: { free: false, platino: false, max: true } },
      { feature: "Notificaciones en tiempo real", values: { free: false, platino: false, max: true }, comingSoon: true },
    ],
  },
  /**
   * Paquete Comprador + Productor. Incluye todo lo de ambos roles en el
   * mismo nivel; la tabla comparativa muestra las dos tablas de arriba.
   */
  ambos: {
    plans: [
      {
        id: "free",
        name: "Free",
        tagline: "Compra y produce, sin costo",
        priceMonthly: 0,
        priceYearly: 0,
        cta: "Empieza gratis",
        highlights: [
          "Free de comprador",
          "Free de productor",
          "Una sola cuenta",
        ],
      },
      {
        id: "platino",
        name: "Paquete Platino",
        tagline: "Platino en los dos roles",
        priceMonthly: 399,
        priceYearly: 3990,
        cta: "Prueba Platino",
        highlighted: true,
        badge: "Más popular",
        highlights: [
          "Platino de comprador",
          "Platino de productor",
          "Ahorras frente a pagar los dos",
        ],
      },
      {
        id: "max",
        name: "Paquete Max",
        tagline: "Max en los dos roles",
        priceMonthly: 1099,
        priceYearly: 10990,
        cta: "Quiero Max",
        badge: "Más completo",
        highlights: [
          "Max de comprador",
          "Max de productor",
          "Ahorras frente a pagar los dos",
        ],
      },
    ],
    comparison: [],
  },
};

/** Pases de Cosecha: todo lo de Max, solo durante la temporada (compradores) */
export const harvestPasses: HarvestPass[] = [
  {
    name: "Pase Max Café",
    durationMonths: 5,
    price: 4990,
    description: "Todo lo de Max durante la temporada de café.",
  },
  {
    name: "Pase Max Pimienta",
    durationMonths: 3,
    price: 2990,
    description: "Todo lo de Max durante la temporada de pimienta.",
  },
];

/** Comisión por venta cerrada, en porcentaje. La paga el comprador. */
export const commission: Record<PlanId, number> = {
  free: 2,
  platino: 2,
  max: 1,
};

export const founderOffer = {
  /** Rango de descuento de por vida; si min === max se muestra un solo número */
  discountMin: 30,
  discountMax: 40,
  seats: 50,
};

export const trialDays = 14;

/** Texto de la etiqueta del plan anual */
export const yearlyBadge = "2 meses gratis";
