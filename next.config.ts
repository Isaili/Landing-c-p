import type { NextConfig } from "next";

/**
 * En GitHub Pages el sitio vive en /<nombre-del-repo>. El workflow de deploy
 * define NEXT_PUBLIC_BASE_PATH; en local queda vacío.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: `npm run build` genera la carpeta `out/`
  output: "export",
  basePath,
  // GitHub Pages sirve /ruta/index.html, así que usamos barra final
  trailingSlash: true,
  // La optimización de imágenes de Next requiere servidor; en export estático se sirven tal cual
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
