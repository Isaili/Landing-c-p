"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CONTACT_EMAIL, SOCIAL_LINKS, type SocialNetwork } from "../data/links";
import { Logo } from "./logo";

const BUILD_YEAR = new Date().getFullYear();

/** Año actual: el HTML estático trae el año del build y el navegador lo actualiza */
function useCurrentYear() {
  return useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );
}

const socialLabels: Record<SocialNetwork, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  whatsapp: "WhatsApp",
};

const footerLinks = [
  { label: "Precios", href: "/#precios" },
  { label: "Preguntas", href: "/#preguntas" },
  { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Créditos de fotos", href: "/creditos" },
];

export function Footer() {
  const year = useCurrentYear();
  const socials = (Object.keys(SOCIAL_LINKS) as SocialNetwork[]).filter(
    (k) => SOCIAL_LINKS[k],
  );

  return (
    <footer className="border-t bg-cream-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 text-muted-foreground">
            Desarrollado por Softvana · Chiapas, México
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="font-sans text-sm font-semibold tracking-wide text-coffee uppercase">
            Enlaces
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="rounded text-coffee/80 hover:text-coffee hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded text-coffee/80 hover:text-coffee hover:underline"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {socials.length > 0 && (
          <div>
            <h2 className="font-sans text-sm font-semibold tracking-wide text-coffee uppercase">
              Síguenos
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s}>
                  <a
                    href={SOCIAL_LINKS[s]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded text-coffee/80 hover:text-coffee hover:underline"
                  >
                    {socialLabels[s]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <p className="border-t px-4 py-5 text-center text-sm text-muted-foreground">
        © {year} Grano y Grano. Todos los derechos reservados.
      </p>
    </footer>
  );
}
