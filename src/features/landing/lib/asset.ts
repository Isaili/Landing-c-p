const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Antepone el basePath a rutas de /public (next/image no lo hace solo) */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
