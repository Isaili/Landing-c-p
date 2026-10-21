import Image from "next/image";
import { ShoppingBasketIcon, SproutIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { chiapas } from "../data/content";
import { photos, type Photo } from "../data/photos";
import { asset } from "../lib/asset";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/** Galería: en escritorio 4 columnas × 2 filas, en celular 2 columnas × 3 filas */
const gallery: { photo: Photo; className: string }[] = [
  { photo: photos.patioSecado, className: "row-span-2" },
  { photo: photos.cafeCereza, className: "" },
  { photo: photos.despulpadora, className: "" },
  { photo: photos.pimienta, className: "md:row-span-2" },
  { photo: photos.productora, className: "md:col-span-2" },
];

const audiences = [
  { icon: SproutIcon, ...chiapas.producer },
  { icon: ShoppingBasketIcon, ...chiapas.buyer },
];

export function ChiapasSection() {
  return (
    <section aria-labelledby="chiapas-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="chiapas-title"
          eyebrow={chiapas.eyebrow}
          title={chiapas.title}
          description={chiapas.description}
        />

        <ul className="mt-12 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {gallery.map(({ photo, className }) => (
            <li key={photo.src} className={cn("relative", className)}>
              <figure className="group absolute inset-0 overflow-hidden rounded-2xl">
                <Image
                  src={asset(photo.src)}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-8 pb-2.5 text-xs font-medium text-white sm:text-sm">
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="flex h-full gap-4 rounded-2xl border bg-cream-deep p-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-leaf text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-coffee">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
