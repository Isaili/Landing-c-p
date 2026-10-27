/**
 * Enlaces externos y datos de contacto.
 */

/** URL pública del sitio, se usa en SEO, sitemap y Open Graph */
export const SITE_URL = "https://isaili.github.io/Landing-c-p"; // TODO: cambiar al dominio propio

/** Descarga directa del instalador de Android */
export const ANDROID_APK_URL = "https://pimez.vercel.app/descargas/cafe-pimienta.apk";

/**
 * Tiendas: mientras `storesComingSoon` sea true se muestran como "Muy pronto"
 * y sin enlace. Cuando la app esté publicada, pon las URLs y cámbialo a false.
 */
export const storesComingSoon = true;
export const APP_STORE_URL = "#";
export const GOOGLE_PLAY_URL = "#";

/** Sitio de Softvana, desarrolladora de la app */
export const SOFTVANA_URL = "https://isaili.github.io/CODEX_SOFTVA/";

export const CONTACT_EMAIL = "hola@granoygrano.mx"; // TODO: confirmar correo

/** Deja la URL en "" para ocultar una red social */
export const SOCIAL_LINKS = {
  facebook: "#",
  instagram: "#",
  tiktok: "#",
  whatsapp: "#",
} as const;

export type SocialNetwork = keyof typeof SOCIAL_LINKS;
