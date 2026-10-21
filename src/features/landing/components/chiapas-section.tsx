import Image from "next/image";
import { ShoppingBasketIcon, SproutIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { chiapas } from "../data/content";
import { photos, type Photo } from "../data/photos";
import { asset } from "../lib/asset";
import { LandingSection } from "./landing-section";
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
    <LandingSection labelledBy="chiapas-title">
      <SectionHeading
        id="chiapas-title"
        eyebrow={chiapas.eyebrow}
        title={chiapas.title}
        description={chiapas.description}
      />

      <ul className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[230px] md:grid-cols-4 md:gap-4">
        {gallery.map(({ photo, className }) => (
          <li key={photo.src} className={cn("relative", className)}>
            <figure className="group absolute inset-0 overflow-hidden rounded-xl ring-1 ring-black/5">
              <Image
                src={asset(photo.src)}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-3.5 pt-10 pb-3 text-xs font-medium text-white sm:text-sm">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {audiences.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <Card className="h-full py-6 shadow-sm">
              <CardHeader className="grid-cols-[auto_1fr] items-start gap-x-4 px-6">
                <span className="row-span-2 inline-flex size-11 items-center justify-center rounded-lg bg-leaf text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="text-xl font-semibold text-coffee">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </LandingSection>
  );
}
