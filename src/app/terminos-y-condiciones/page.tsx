import type { Metadata } from "next";
import { LegalPage } from "@/features/landing/components/legal-page";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de la app Grano y Grano.",
  alternates: { canonical: "./" },
};

// TODO: reemplazar por los términos y condiciones definitivos
export default function TerminosYCondiciones() {
  return (
    <LegalPage title="Términos y condiciones" updated="pendiente">
      <p>Al usar Grano y Grano aceptas estos términos y condiciones.</p>
      <h2>Uso de la app</h2>
      <p>Contenido pendiente.</p>
      <h2>Planes, pagos y comisiones</h2>
      <p>Contenido pendiente.</p>
      <h2>Mercado de lotes</h2>
      <p>Contenido pendiente.</p>
    </LegalPage>
  );
}
