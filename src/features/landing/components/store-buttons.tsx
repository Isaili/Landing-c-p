import { DownloadIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ANDROID_APK_URL,
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  storesComingSoon,
} from "../data/links";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M16.37 12.73c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.38-3.69ZM14.1 5.98c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.52 2.68-1.27Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M4.2 2.3a1.4 1.4 0 0 0-.5 1.1v17.2c0 .45.18.84.5 1.1l9.6-9.7-9.6-9.7Zm10.9 8.4 2.7-2.7L6.1 1.4l9 9.3Zm0 2.6-9 9.3 11.7-6.6-2.7-2.7Zm4.2-4.5L16.4 10.4l-1.7 1.6 1.7 1.6 2.9 1.6c.9-.5.9-1.9 0-2.5v-3.9Z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M17.6 9.48 19.44 6.3a.38.38 0 0 0-.66-.38l-1.86 3.22a11.5 11.5 0 0 0-9.84 0L5.22 5.92a.38.38 0 1 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52ZM7 15.25A1.25 1.25 0 1 1 8.25 14 1.25 1.25 0 0 1 7 15.25Zm10 0A1.25 1.25 0 1 1 18.25 14 1.25 1.25 0 0 1 17 15.25Z" />
    </svg>
  );
}

const stores = [
  { href: APP_STORE_URL, small: "Descárgala en", big: "App Store", Icon: AppleIcon },
  { href: GOOGLE_PLAY_URL, small: "Disponible en", big: "Google Play", Icon: PlayIcon },
];

/** Botón principal: descarga directa del APK de Android */
export function AndroidDownloadButton({ className }: { className?: string }) {
  return (
    <a
      href={ANDROID_APK_URL}
      download
      className={cn(
        "inline-flex h-14 items-center gap-3 rounded-xl bg-leaf px-5 text-white shadow-lg shadow-leaf/20 transition-colors hover:bg-leaf-dark",
        className,
      )}
    >
      <AndroidIcon />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-xs opacity-85">Descarga gratis</span>
        <span className="text-lg font-semibold">Para Android</span>
      </span>
      <DownloadIcon className="ml-auto size-5 opacity-85" aria-hidden="true" />
    </a>
  );
}

/** Descarga Android + tiendas (marcadas como "Muy pronto" mientras no estén publicadas) */
export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <AndroidDownloadButton className="w-full sm:w-fit sm:min-w-64" />
      <p className="text-sm text-muted-foreground">
        Archivo APK. Al abrirlo, Android te pedirá permitir la instalación desde tu navegador.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {stores.map(({ href, small, big, Icon }) =>
          storesComingSoon ? (
            <div
              key={big}
              className="flex h-14 min-w-0 items-center gap-3 rounded-xl border border-dashed px-4 text-muted-foreground"
            >
              <Icon />
              <span className="flex min-w-0 flex-col text-left leading-tight">
                <span className="text-xs">Muy pronto en</span>
                <span className="truncate text-base font-semibold">{big}</span>
              </span>
            </div>
          ) : (
            <a
              key={big}
              href={href}
              className="flex h-14 min-w-0 items-center gap-3 rounded-xl bg-coffee-deep px-4 text-white transition-colors hover:bg-black"
            >
              <Icon />
              <span className="flex min-w-0 flex-col text-left leading-tight">
                <span className="text-xs opacity-80">{small}</span>
                <span className="truncate text-base font-semibold">{big}</span>
              </span>
            </a>
          ),
        )}
      </div>
    </div>
  );
}
