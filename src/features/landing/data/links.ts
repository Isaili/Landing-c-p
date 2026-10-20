/**
 * Enlaces externos y datos de contacto.
 * Reemplaza los "#" cuando la app esté publicada.
 */

/** URL pública del sitio, se usa en SEO, sitemap y Open Graph */
export const SITE_URL = "https://isaili.github.io/Landing-c-p"; // TODO: cambiar al dominio propio

export const APP_STORE_URL = "#";
export const GOOGLE_PLAY_URL = "#";

export const CONTACT_EMAIL = "hola@granoygrano.mx"; // TODO: confirmar correo

/** Deja la URL en "" para ocultar una red social */
export const SOCIAL_LINKS = {
  facebook: "#",
  instagram: "#",
  tiktok: "#",
  whatsapp: "#",
} as const;

export type SocialNetwork = keyof typeof SOCIAL_LINKS;
