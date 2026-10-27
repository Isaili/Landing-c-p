import Image from "next/image";
import { ImageIcon, SmartphoneIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { FeatureMedia } from "../data/content";
import { asset } from "../lib/asset";
import { ComingSoonBadge } from "./coming-soon-badge";
import { Reveal } from "./reveal";

interface FeatureBlockProps {
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  media: FeatureMedia;
  comingSoon?: boolean;
}

/** Captura real de la app dentro de un marco de teléfono */
function AppScreen({ media }: { media: Extract<FeatureMedia, { kind: "app" }> }) {
  return (
    <figure className="flex flex-col items-center gap-4 px-6 pt-10 pb-6">
      <div className="w-[240px] rounded-[2.4rem] bg-neutral-900 p-2.5 shadow-2xl shadow-black/20 sm:w-[260px]">
        <div className="overflow-hidden rounded-[1.9rem] bg-white">
          <Image
            src={asset(media.src)}
            alt={media.alt}
            width={media.width}
            height={media.height}
            loading="lazy"
            sizes="260px"
            className="h-auto w-full"
          />
        </div>
      </div>
      <figcaption>
        <Badge variant="outline" className="h-6 gap-1.5 bg-white px-2.5 text-muted-foreground">
          <SmartphoneIcon aria-hidden="true" />
          Pantalla real de la app
        </Badge>
      </figcaption>
    </figure>
  );
}

/** Foto de apoyo cuando la función aún no tiene pantalla en la app */
function RepresentativeImage({
  media,
}: {
  media: Extract<FeatureMedia, { kind: "representativa" }>;
}) {
  const { photo, fit = "cover" } = media;
  return (
    <figure className="flex h-full flex-col">
      <div
        className={cn(
          "relative w-full",
          fit === "contain" ? "bg-white px-6 pt-14 pb-6" : "aspect-[4/3]",
        )}
      >
        {fit === "contain" ? (
          <Image
            src={asset(photo.src)}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            sizes="(min-width: 768px) 520px, 100vw"
            className="h-auto w-full"
          />
        ) : (
          <Image
            src={asset(photo.src)}
            alt={photo.alt}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 520px, 100vw"
            className="object-cover"
          />
        )}
        <Badge className="absolute top-3 left-3 h-6 gap-1.5 bg-black/60 px-2.5 text-white backdrop-blur-sm">
          <ImageIcon aria-hidden="true" />
          Imagen representativa
        </Badge>
      </div>
      <figcaption className="border-t px-5 py-3 text-sm text-muted-foreground">
        {photo.caption}
      </figcaption>
    </figure>
  );
}

export function FeatureBlock({
  index,
  eyebrow,
  title,
  description,
  media,
  comingSoon,
}: FeatureBlockProps) {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className={cn(reversed && "md:order-2")}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="h-6 bg-leaf px-2.5 font-semibold text-white">
              {String(index + 1).padStart(2, "0")}
            </Badge>
            <span className="text-sm font-semibold tracking-wide text-leaf uppercase">
              {eyebrow}
            </span>
            {comingSoon && <ComingSoonBadge />}
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-coffee sm:text-3xl">{title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <Card
          className={cn(
            "gap-0 py-0 shadow-lg shadow-black/5",
            media.kind === "app" && "bg-gradient-to-b from-leaf-soft/70 to-white",
            reversed && "md:order-1",
          )}
        >
          {media.kind === "app" ? <AppScreen media={media} /> : <RepresentativeImage media={media} />}
        </Card>
      </article>
    </Reveal>
  );
}
