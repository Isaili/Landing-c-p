# Grano y Grano · Landing

Landing page de **Grano y Grano**, la app para compradores y productores de café y pimienta en Chiapas.

Next.js (App Router, export estático) · TypeScript · Tailwind CSS · shadcn/ui · Three.js (React Three Fiber)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera el sitio estático en out/
```

## Cambiar precios y planes

Todo vive en [`src/features/landing/data/plans.ts`](src/features/landing/data/plans.ts):

- `pricing.comprador`, `pricing.productor` y `pricing.ambos` (paquete): nombre, frase, precio mensual/anual, botón, etiqueta y puntos clave de cada plan, más la tabla comparativa (`true` = ✓, `false` = —, texto = se muestra tal cual). `comingSoon: true` en una fila agrega la etiqueta "Próximamente".
- `paymentsEnabled`: mientras sea `false`, los botones de Platino y Max dicen "Próximamente". Cámbialo a `true` cuando haya pagos.
- `harvestPasses`, `commission`, `founderOffer`, `trialDays` y `yearlyBadge`.

Los montos son números en MXN sin decimales (`3490`), el formato `$3,490 MXN` se aplica solo.

## Cambiar enlaces

[`src/features/landing/data/links.ts`](src/features/landing/data/links.ts): App Store, Google Play, correo de contacto, redes sociales (deja `""` para ocultar una) y `SITE_URL` (dominio usado en SEO, sitemap y Open Graph).

## Cambiar textos

- Secciones, beneficios, funciones y pasos del mercado: [`data/content.ts`](src/features/landing/data/content.ts)
- Preguntas frecuentes: [`data/faq.ts`](src/features/landing/data/faq.ts) (las marcadas con `TODO: validar` dependen de decisiones pendientes)
- Testimonios: [`data/testimonials.ts`](src/features/landing/data/testimonials.ts). La sección se oculta mientras el arreglo esté vacío; agrega solo testimonios reales.

## Cambiar imágenes

Los placeholders están en `public/images/`. Reemplaza el archivo conservando el nombre, o cambia la ruta en `data/content.ts`:

| Archivo | Dónde aparece | Tamaño sugerido |
|---|---|---|
| `app-mockup.svg` | Teléfono del hero | 300 × 620 (o proporción similar) |
| `feature-*.svg` | Bloques de funciones | 560 × 420 (4:3) |

Puedes usar `.png`, `.jpg` o `.webp`; solo actualiza la extensión en `content.ts`. Las fotos de testimonios van en `public/images/testimonios/`.

La imagen para redes sociales (Open Graph) se genera en [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx).

## Despliegue en GitHub Pages

Cada push a `main` ejecuta [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que compila y publica `out/`.

Primera vez: en el repositorio ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.

El workflow define `NEXT_PUBLIC_BASE_PATH=/<nombre-del-repo>`. Si usas un dominio propio, quita esa variable del workflow y actualiza `SITE_URL`.
