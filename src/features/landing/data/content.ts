import type { Role } from "../types";

/** Textos de las secciones de la landing (sin precios; esos viven en plans.ts) */

export const navItems = [
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Mercado", href: "/#mercado" },
  { label: "Precios", href: "/#precios" },
  { label: "Preguntas", href: "/#preguntas" },
] as const;

export const hero = {
  title: "Compra y vende café y pimienta con números claros",
  subtitle:
    "Calcula la merma al instante, controla tu inversión y conecta con compradores y productores de tu región.",
  primaryCta: "Descargar gratis",
  secondaryCta: "Ver planes",
  trust: ["Gratis para empezar", "Sin tarjeta", "Hecho en Chiapas"],
  mockup: {
    src: "/images/app-mockup.svg",
    alt: "Pantalla de la app Grano y Grano calculando kilos netos y total a pagar de una compra de café",
  },
};

export const problems = [
  {
    icon: "calculator",
    title: "La merma a mano sale cara",
    description:
      "Un error en la libreta o la calculadora se convierte en kilos que pagaste y nunca llegaron.",
  },
  {
    icon: "notebook",
    title: "Sin historial no hay control",
    description:
      "Compras y ventas regadas en papeles: no sabes cuánto llevas invertido ni a qué precio promedio.",
  },
  {
    icon: "handshake",
    title: "Precio a ciegas, lotes a destiempo",
    description:
      "El productor vende sin saber el precio justo y el comprador no encuentra buenos lotes a tiempo.",
  },
] as const;

/** El selector muestra "Soy …" en pantallas medianas y grandes */
export const roleLabels: Record<Role, string> = {
  comprador: "Comprador",
  productor: "Productor",
  ambos: "Ambos",
};

export const marketNote =
  "El mercado entre usuarios, las subastas y los avisos de interesados llegan pronto: necesitan conexión con nuestro servidor.";

export const benefits: Record<
  Exclude<Role, "ambos">,
  { title: string; description: string; comingSoon?: boolean }[]
> = {
  comprador: [
    {
      title: "Kilos netos y total a pagar al instante",
      description: "Registra compras en seco o verde y la app hace la cuenta de la merma por ti.",
    },
    {
      title: "Historial con filtros",
      description: "Encuentra cualquier compra por fecha, producto o proveedor.",
    },
    {
      title: "Tu inversión en un vistazo",
      description: "Dashboard con lo invertido, precio promedio por kilo y proporción seco/verde.",
    },
    {
      title: "Predicción de precio y merma",
      description: "Estimaciones basadas en tus propios datos para comprar mejor.",
    },
    {
      title: "Los mejores lotes primero",
      description: "Acceso anticipado a los lotes del mercado antes que nadie.",
      comingSoon: true,
    },
  ],
  productor: [
    {
      title: "Tu rendimiento, calculado",
      description:
        "Registra tu cosecha en verde y, al terminar el secado, captura los kilos secos o el rendimiento: la app calcula lo demás.",
    },
    {
      title: "Publica y recibe ofertas",
      description: "Anuncia tus kilos a precio fijo, con descripción. Edítalos, márcalos como vendidos o retíralos cuando quieras.",
    },
    {
      title: "Conoce tu temporada",
      description: "Rendimiento por temporada y predicción de cuántos kilos secos vas a sacar.",
    },
    {
      title: "Vende al mejor precio",
      description: "Subasta con precio mínimo y precio sugerido para saber cuándo vender.",
      comingSoon: true,
    },
  ],
};

export const features = [
  {
    id: "merma",
    eyebrow: "Cálculo de merma",
    title: "La merma, calculada sin errores",
    description:
      "Captura los kilos, elige si es seco o verde y la app te da los kilos netos y el total a pagar. Sin calculadora, sin libreta.",
    image: "/images/feature-merma.svg",
    alt: "Ejemplo de cálculo de merma: 520 kilos en verde se convierten en 426 kilos netos",
  },
  {
    id: "estadisticas",
    eyebrow: "Estadísticas e inversión",
    title: "Sabe cuánto llevas invertido",
    description:
      "Mira tu inversión total, el precio promedio por kilo y qué tanto compras en seco o en verde, semana con semana.",
    image: "/images/feature-estadisticas.svg",
    alt: "Gráfica de barras de inversión semanal y gráfica circular de proporción seco y verde",
  },
  {
    id: "prediccion",
    eyebrow: "Predicción con inteligencia artificial",
    title: "Adelántate al precio",
    description:
      "Con tus datos y los del mercado, la app estima hacia dónde va el precio y cuánta merma esperar, para que decidas cuándo comprar o vender.",
    image: "/images/feature-prediccion.svg",
    alt: "Gráfica de línea con el precio histórico y una proyección punteada de los próximos días",
  },
  {
    id: "mercado",
    eyebrow: "Mercado de lotes",
    title: "Lotes y subastas en un solo lugar",
    description:
      "Los productores publican sus lotes y los compradores pujan. Todo queda registrado y el trato se cierra dentro de la app.",
    image: "/images/feature-mercado.svg",
    comingSoon: true,
    alt: "Tarjetas de lotes de café y pimienta con tiempo restante y puja actual",
  },
  {
    id: "optimizacion",
    eyebrow: "Optimización de compras",
    title: "Te dice en qué lotes conviene pujar",
    description:
      "Le dices tu presupuesto y la app, usando algoritmos genéticos, te recomienda la mejor combinación de lotes para sacarle más a tu dinero.",
    image: "/images/feature-optimizacion.svg",
    alt: "Presupuesto disponible con tres lotes recomendados marcados",
  },
] as const;

export const marketSteps = [
  {
    title: "El productor publica su lote",
    description: "Indica producto, kilos, calidad y, si quiere, un precio mínimo.",
  },
  {
    title: "24 a 48 horas solo para Max",
    description: "Los compradores Max ven el lote primero y pueden pujar.",
  },
  {
    title: "Pasa a compradores Platino",
    description: "Si no se vende, queda disponible a precio fijo o por contacto directo.",
  },
  {
    title: "Se cierra la venta",
    description: "El comprador paga una comisión pequeña: 2 %, o 1 % si es Max.",
  },
] as const;

export const finalCta = {
  title: "Empieza hoy a comprar y vender con números claros",
  subtitle: "Descarga Grano y Grano gratis. Sin tarjeta y sin complicaciones.",
};
