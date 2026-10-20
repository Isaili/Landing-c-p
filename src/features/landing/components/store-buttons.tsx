import { cn } from "@/lib/utils";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../data/links";

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

const stores = [
  { href: APP_STORE_URL, small: "Descárgala en", big: "App Store", Icon: AppleIcon },
  { href: GOOGLE_PLAY_URL, small: "Disponible en", big: "Google Play", Icon: PlayIcon },
];

export function StoreButtons({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      {stores.map(({ href, small, big, Icon }) => (
        <a
          key={big}
          href={href}
          className={cn(
            "inline-flex h-14 items-center gap-3 rounded-xl px-5 transition-colors",
            tone === "light"
              ? "bg-cream text-coffee-deep hover:bg-cream-deep"
              : "bg-coffee-deep text-cream hover:bg-coffee",
          )}
        >
          <Icon />
          <span className="flex flex-col text-left leading-tight">
            <span className="text-xs opacity-80">{small}</span>
            <span className="text-lg font-semibold">{big}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
