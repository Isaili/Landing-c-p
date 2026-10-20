import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

/** Plantilla para páginas legales (Aviso de privacidad, Términos) */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="contenido" className="flex-1 px-4 pt-28 pb-20 sm:px-6">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold text-coffee">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última actualización: {updated}</p>
          <div className="mt-6 rounded-2xl border border-clay/40 bg-accent p-4 text-sm text-coffee">
            Este documento es un borrador provisional y será reemplazado por la versión legal definitiva.
          </div>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/90 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-coffee">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
