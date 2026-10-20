import type { Metadata } from "next";
import { LegalPage } from "@/features/landing/components/legal-page";
import { CONTACT_EMAIL } from "@/features/landing/data/links";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Cómo Grano y Grano recaba, usa y protege tus datos personales.",
  alternates: { canonical: "./" },
};

// TODO: reemplazar por el aviso de privacidad definitivo (LFPDPPP)
export default function AvisoDePrivacidad() {
  return (
    <LegalPage title="Aviso de privacidad" updated="pendiente">
      <p>
        Softvana, desarrollador de Grano y Grano, con domicilio en Chiapas, México, es responsable
        del tratamiento de tus datos personales.
      </p>
      <h2>Datos que recabamos</h2>
      <p>Contenido pendiente.</p>
      <h2>Para qué usamos tus datos</h2>
      <p>Contenido pendiente.</p>
      <h2>Derechos ARCO</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiendo a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay-dark underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPage>
  );
}
