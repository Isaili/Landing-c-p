import type { Metadata } from "next";
import { Footer } from "@/features/landing/components/footer";
import { Header } from "@/features/landing/components/header";
import { photos } from "@/features/landing/data/photos";

export const metadata: Metadata = {
  title: "Créditos de fotos",
  description: "Autores y licencias de las fotografías usadas en el sitio de Grano y Grano.",
  alternates: { canonical: "./" },
};

export default function Creditos() {
  return (
    <>
      <Header />
      <main id="contenido" className="flex-1 px-4 pt-28 pb-20 sm:px-6">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold text-coffee">Créditos de fotos</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Las fotografías de este sitio provienen de Wikimedia Commons y se usan bajo licencias
            Creative Commons. Gracias a sus autores.
          </p>
          <ul className="mt-8 divide-y rounded-2xl border">
            {Object.values(photos).map((p) => (
              <li key={p.src} className="p-5">
                <p className="font-semibold text-coffee">{p.caption}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Foto: {p.author} ·{" "}
                  <a href={p.licenseUrl} className="text-clay-dark underline" target="_blank" rel="noopener noreferrer">
                    {p.license}
                  </a>{" "}
                  ·{" "}
                  <a href={p.source} className="text-clay-dark underline" target="_blank" rel="noopener noreferrer">
                    Ver original
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
