"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { GalleryHorizontalEndIcon, MapPinIcon } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { coffeeProcess, pepperProcess, type GalleryPhoto } from "../data/gallery";
import { asset } from "../lib/asset";

function ProcessCarousel({ photos }: { photos: GalleryPhoto[] }) {
  const reduceMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Avanza sola cada 5 s; se pausa con el mouse encima o al tocar
  const plugins = useMemo(
    () =>
      reduceMotion
        ? []
        : [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
    [reduceMotion],
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const photo = photos[current];

  return (
    <div className="flex flex-col gap-4">
      <Carousel opts={{ loop: true }} plugins={plugins} setApi={setApi} className="w-full">
        <CarouselContent>
          {photos.map((p, i) => (
            <CarouselItem key={p.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted sm:aspect-[16/10]">
                <Image
                  src={asset(p.src)}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 860px, 95vw"
                  // Solo se cargan la foto visible y las vecinas
                  loading={Math.abs(i - current) <= 1 ? "eager" : "lazy"}
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 h-6 bg-leaf px-2.5 font-semibold text-white">
                  Paso {i + 1} de {photos.length}
                </Badge>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 size-10 border-0 bg-white/90 shadow-md hover:bg-white" />
        <CarouselNext className="right-3 size-10 border-0 bg-white/90 shadow-md hover:bg-white" />
      </Carousel>

      {/* Texto del paso visible: se anuncia al cambiar */}
      <div aria-live="polite" className="min-h-28">
        <h3 className="text-xl font-semibold text-coffee sm:text-2xl">{photo.title}</h3>
        <p className="mt-1 text-base leading-relaxed text-muted-foreground">{photo.description}</p>
        <p className="mt-2 flex flex-wrap items-center gap-x-1.5 text-xs text-muted-foreground">
          <MapPinIcon className="size-3.5" aria-hidden="true" />
          {photo.place} · Foto:{" "}
          <a
            href={photo.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            {photo.author}
          </a>{" "}
          ·{" "}
          <a
            href={photo.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            {photo.license}
          </a>
        </p>
      </div>

      {/* Indicadores de posición */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Ir al paso ${i + 1}: ${p.title}`}
            aria-current={i === current ? "step" : undefined}
            className={cn(
              "h-2 rounded-full transition-all",
              i === current ? "w-6 bg-leaf" : "w-2 bg-border hover:bg-leaf/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/** Botón "Conoce más del proceso" que abre la galería del café y la pimienta */
export function ProcessGallery() {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants({ size: "xl", variant: "outline" }),
          "border-leaf/40 bg-white",
        )}
      >
        <GalleryHorizontalEndIcon aria-hidden="true" />
        Conoce más del proceso
      </DialogTrigger>
      <DialogContent className="max-h-[92dvh] grid-cols-[minmax(0,1fr)] gap-5 overflow-y-auto p-4 sm:max-w-4xl sm:p-6">
        <DialogHeader className="pr-8">
          <DialogTitle className="font-heading text-2xl font-semibold text-coffee sm:text-3xl">
            Del cafetal a la taza
          </DialogTitle>
          <DialogDescription className="text-base">
            Así se trabaja el café y la pimienta, paso a paso. Fotos de regiones productoras de
            México y del mundo, con el crédito de cada autor.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="cafe" className="gap-5">
          <TabsList className="h-auto! w-full max-w-xs rounded-full border bg-muted p-1">
            <TabsTrigger
              value="cafe"
              className="h-10 rounded-full text-[0.95rem] data-active:bg-leaf! data-active:text-white!"
            >
              Café
            </TabsTrigger>
            <TabsTrigger
              value="pimienta"
              className="h-10 rounded-full text-[0.95rem] data-active:bg-leaf! data-active:text-white!"
            >
              Pimienta
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cafe">
            <ProcessCarousel photos={coffeeProcess} />
          </TabsContent>
          <TabsContent value="pimienta">
            <ProcessCarousel photos={pepperProcess} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
