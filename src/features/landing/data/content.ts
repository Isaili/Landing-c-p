import type { Role } from "../types";
import { photos, type Photo } from "./photos";

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
  primaryCta: "Descargar para Android",
  secondaryCta: "Ver planes",
  trust: ["Gratis para empezar", "Sin tarjeta", "Hecho en Chiapas"],
  /** Nota bajo los botones del hero */
  storesNote: "iPhone y Google Play: muy pronto",
  mockup: {
    src: "/images/app-mockup.svg",
    alt: "Pantalla de la app Grano y Grano calculando kilos netos y total a pagar de una compra de café",
  },
};

/** Sección "Hecho en Chiapas": conecta la app con la región */
export const chiapas = {
  eyebrow: "Hecho en Chiapas",
  title: "Pensada para cómo se trabaja el café y la pimienta aquí",
  description:
    "Del corte y el secado en patio hasta la venta en el acopio: Grano y Grano hace las cuentas como tú las haces, por kilo, en seco o en verde.",
  producer: {
    title: "Si produces",
    description:
      "Registra tu cosecha y tu secado, conoce tu rendimiento y publica tus kilos para que los compradores de tu región te encuentren.",
  },
  buyer: {
    title: "Si compras",
    description:
      "Lleva el control de cada compra, paga lo justo con la merma bien calculada y encuentra buenos lotes cerca de ti.",
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

/**
 * Imagen de cada función:
 * - "app": captura real de la app (public/images/app/, sacadas de los goldens de pimez/test)
 * - "representativa": foto de apoyo cuando la función aún no tiene pantalla; se marca como tal
 */
export type FeatureMedia =
  | { kind: "app"; src: string; alt: string; width: number; height: number }
  | { kind: "representativa"; photo: Photo; fit?: "cover" | "contain" };

export const features: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  media: FeatureMedia;
  comingSoon?: boolean;
}[] = [
  {
    id: "merma",
    eyebrow: "Cálculo de merma",
    title: "La merma, calculada sin errores",
    description:
      "Captura los kilos, elige si es seco o verde y la app te da los kilos netos y el total a pagar. Sin calculadora, sin libreta.",
    media: {
      kind: "app",
      src: "/images/app/merma.png",
      alt: "Pantalla Nueva compra de la app: café seco, 320 kg brutos a $88 por kilo, 18 kg de merma y total a pagar de $26,846",
      width: 390,
      height: 780,
    },
  },
  {
    id: "estadisticas",
    eyebrow: "Estadísticas e inversión",
    title: "Sabe cuánto llevas invertido",
    description:
      "Mira tu inversión total, el precio promedio por kilo y qué tanto compras en seco o en verde, semana con semana.",
    media: {
      kind: "app",
      src: "/images/app/dashboard.png",
      alt: "Pantalla de inicio de la app con inversión total de $71,632 en 30 días, gráfica de crecimiento, 930 kg netos y precio promedio de $77.02 por kilo",
      width: 390,
      height: 780,
    },
  },
  {
    id: "prediccion",
    eyebrow: "Predicción con inteligencia artificial",
    title: "Adelántate al precio",
    description:
      "El precio del café sube y baja todo el tiempo. Con tus datos y los del mercado, la app estima hacia dónde va el precio y cuánta merma esperar, para que decidas cuándo comprar o vender.",
    media: { kind: "representativa", photo: photos.precioCafe, fit: "contain" },
  },
  {
    id: "mercado",
    eyebrow: "Mercado de lotes",
    title: "Lotes y subastas en un solo lugar",
    description:
      "Los productores publican sus lotes con kilos, precio y descripción. Pronto los compradores podrán pujar y el trato se cerrará dentro de la app.",
    comingSoon: true,
    media: {
      kind: "app",
      src: "/images/app/lotes.png",
      alt: "Pantalla Mis lotes de la app: lote activo de 250 kg de café seco a $92 por kilo y lote vendido de 180 kg de pimienta",
      width: 390,
      height: 780,
    },
  },
  {
    id: "optimizacion",
    eyebrow: "Optimización de compras",
    title: "Te dice en qué lotes conviene pujar",
    description:
      "Le dices tu presupuesto y la app, usando algoritmos genéticos, te recomienda la mejor combinación de lotes para sacarle más a tu dinero.",
    media: { kind: "representativa", photo: photos.seleccionCafe },
  },
];

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
