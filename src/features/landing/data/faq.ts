import type { FaqItem } from "../types";
import { commission, harvestPasses, trialDays } from "./plans";

const [cafePass, pimientaPass] = harvestPasses;

export const faq: FaqItem[] = [
  // TODO: validar — depende de cómo quede el modo sin conexión en la app
  {
    question: "¿Puedo usar la app sin internet?",
    answer:
      "Sí. Tus compras, tu producción y tus lotes se guardan en tu celular, así que puedes registrar todo aunque no tengas señal. El respaldo en la nube de Platino y Max, el mercado entre usuarios y las subastas sí necesitarán conexión.",
  },
  {
    question: "¿Puedo ser comprador y productor con la misma cuenta?",
    answer:
      "Sí. Al registrarte eliges cómo usarás la app: Comprador, Productor o Ambos, y puedes cambiarlo cuando quieras desde la tarjeta \"Tu rol\" en tu perfil. Si necesitas funciones de pago en los dos roles, el Paquete Comprador + Productor te sale más barato que contratar dos planes por separado.",
  },
  {
    question: "¿Cómo funciona el acceso anticipado de Max?",
    answer:
      "Cuando un productor publica un lote, durante las primeras 24 a 48 horas solo los compradores Max lo ven y pueden pujar. Si nadie lo compra, el lote pasa a los compradores Platino a precio fijo o por contacto directo.",
  },
  {
    question: "¿Qué es la comisión y cuándo se cobra?",
    answer: `Es un pequeño porcentaje que se cobra solo cuando se cierra una venta en el mercado de la app. La paga el comprador: ${commission.platino} % en Platino y ${commission.max} % en Max. Registrar compras o publicar lotes no tiene comisión.`,
  },
  {
    question: "¿Qué es el Pase de Cosecha?",
    answer: `Es un pago único para tener todo lo de Max solo durante la temporada que te interesa: ${cafePass.durationMonths} meses para café o ${pimientaPass.durationMonths} meses para pimienta. Ideal si compras por temporada y no todo el año.`,
  },
  // TODO: validar — los pagos dentro de la app aún no están disponibles
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer: `Sí. Puedes cancelar en cualquier momento desde la app y conservas tu plan hasta que termine el periodo que ya pagaste. Además, Platino y Max tienen ${trialDays} días de prueba sin tarjeta.`,
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Sí. Tu información es tuya: no vendemos tus datos ni mostramos tus compras a otros usuarios. En el mercado solo se ve lo que tú decides publicar.",
  },
  // TODO: validar — falta decidir si se agregarán otros productos
  {
    question: "¿Funciona para otros productos además de café y pimienta?",
    answer:
      "Por ahora la app está pensada para café y pimienta, con cálculos de merma hechos para estos productos. Estamos evaluando agregar otros cultivos de la región más adelante.",
  },
];
