import Image from "next/image";
import { MapPinIcon, SparklesIcon } from "lucide-react";
import { finalCta } from "../data/content";
import { photos } from "../data/photos";
import { asset } from "../lib/asset";
import { founderText } from "./founder-banner";
import { StoreButtons } from "./store-buttons";

export function FinalCta() {
  const photo = photos.unionJuarez;

  return (
    <section
      id="descargar"
      aria-labelledby="descargar-title"
      className="scroll-mt-16 bg-white px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border bg-white shadow-xl shadow-leaf/10 md:grid-cols-2">
        <figure className="relative min-h-64 md:min-h-full">
          <Image
            src={asset(photo.src)}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <MapPinIcon className="size-3.5" aria-hidden="true" />
            {photo.caption}
          </figcaption>
        </figure>

        <div className="px-6 py-12 sm:px-12 sm:py-16">
          <h2 id="descargar-title" className="text-3xl font-semibold text-coffee sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{finalCta.subtitle}</p>
          <StoreButtons className="mt-8" />
          <p className="mt-8 inline-flex items-start gap-2 rounded-2xl border border-clay/30 bg-accent px-4 py-3 text-sm font-medium text-coffee">
            <SparklesIcon className="mt-0.5 size-4 shrink-0 text-clay-dark" aria-hidden="true" />
            {founderText}
          </p>
        </div>
      </div>
    </section>
  );
}
