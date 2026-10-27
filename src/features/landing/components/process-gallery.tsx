"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  ExternalLinkIcon,
  GalleryHorizontalEndIcon,
  MapPinIcon,
  PauseIcon,
  PlayIcon,
} from "lucide-react";
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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { coffeeProcess, pepperProcess, type GalleryPhoto } from "../data/gallery";
import { asset } from "../lib/asset";

const AUTOPLAY_MS = 5000;

/** Miniatura ligera generada en public/images/galeria/thumbs/ */
const thumbOf = (src: string) => src.replace("/galeria/", "/galeria/thumbs/");

const pad = (n: number) => String(n).padStart(2, "0");

function ProcessViewer({ photos }: { photos: GalleryPhoto[] }) {
  const reduceMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(!reduceMotion);
  const listRef = useRef<HTMLOListElement>(null);

  // Avanza sola cada 5 s; se pausa con el mouse encima y con el botón de pausa
  const plugins = useMemo(
    () =>
      reduceMotion
        ? []
        : [Autoplay({ delay: AUTOPLAY_MS, stopOnInteraction: false, stopOnMouseEnter: true })],
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

  // Mantiene visible en la lista el paso actual (vertical en escritorio, horizontal en celular)
  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[current] as HTMLElement | undefined;
    if (!list || !item) return;
    const vertical = list.scrollHeight > list.clientHeight + 1;
    list.scrollTo(
      vertical
        ? { top: item.offsetTop - 8, behavior: "smooth" }
        : { left: item.offsetLeft - 8, behavior: "smooth" },
    );
  }, [current]);

  const togglePlay = () => {
    const autoplay = api?.plugins()?.autoplay;
    if (!autoplay) return;
    if (playing) autoplay.stop();
    else autoplay.play();
    setPlaying(!playing);
  };

  const photo = photos[current];

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      {/* Foto principal */}
      <div className="flex min-w-0 flex-col gap-3">
        <Carousel opts={{ loop: true }} plugins={plugins} setApi={setApi} className="w-full">
          <CarouselContent>
            {photos.map((p, i) => (
              <CarouselItem key={p.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-lg shadow-black/10 ring-1 ring-black/5 sm:aspect-[16/10]">
                  <Image
                    src={asset(p.src)}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 760px, 95vw"
                    // Solo se cargan la foto visible y sus vecinas
                    loading={Math.abs(i - current) <= 1 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-3">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-white sm:text-sm">
                      <MapPinIcon className="size-3.5" aria-hidden="true" />
                      {p.place}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 size-10 border-0 bg-white/90 shadow-md hover:bg-white" />
          <CarouselNext className="right-3 size-10 border-0 bg-white/90 shadow-md hover:bg-white" />
        </Carousel>

        {/* Progreso y pausa */}
        <div className="flex items-center gap-3">
          <span className="font-heading text-sm font-semibold text-coffee tabular-nums">
            {pad(current + 1)} / {pad(photos.length)}
          </span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-leaf transition-[width] duration-500"
              style={{ width: `${((current + 1) / photos.length) * 100}%` }}
            />
          </div>
          {!reduceMotion && (
            <button
              type="button"
              onClick={togglePlay}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-8 gap-1.5 px-3")}
            >
              {playing ? (
                <PauseIcon className="size-3.5" aria-hidden="true" />
              ) : (
                <PlayIcon className="size-3.5" aria-hidden="true" />
              )}
              {playing ? "Pausar" : "Reproducir"}
            </button>
          )}
        </div>
      </div>

      {/* Información del paso + lista de pasos */}
      <div className="flex min-w-0 flex-col gap-5">
        <div aria-live="polite" className="lg:min-h-48">
          <Badge className="h-6 bg-leaf px-2.5 font-semibold text-white">
            Paso {current + 1} de {photos.length}
          </Badge>
          <h3 className="mt-3 text-2xl font-semibold text-coffee">{photo.title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{photo.description}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Foto:{" "}
            <a
              href={photo.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 underline underline-offset-2 hover:text-foreground"
            >
              {photo.author}
              <ExternalLinkIcon className="size-3" aria-hidden="true" />
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

        <div className="flex min-w-0 flex-col gap-2">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Todos los pasos
          </p>
          <ol
            ref={listRef}
            className="relative flex gap-2 overflow-x-auto pb-2 lg:max-h-[19rem] lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:pr-1 lg:pb-0"
          >
            {photos.map((p, i) => {
              const active = i === current;
              return (
                <li key={p.src} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => api?.scrollTo(i)}
                    aria-current={active ? "step" : undefined}
                    className={cn(
                      "flex w-28 flex-col gap-1.5 rounded-lg border p-1.5 text-left transition-colors lg:w-full lg:flex-row lg:items-center lg:gap-3",
                      active ? "border-leaf bg-leaf-soft/60 ring-1 ring-leaf" : "hover:bg-muted",
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(thumbOf(p.src))}
                      alt=""
                      width={240}
                      height={180}
                      loading="lazy"
                      className="aspect-[4/3] w-full shrink-0 rounded-md object-cover lg:w-16"
                    />
                    <span className="flex min-w-0 items-baseline gap-1.5 px-0.5 lg:px-0">
                      <span
                        className={cn(
                          "text-xs font-semibold tabular-nums",
                          active ? "text-leaf" : "text-muted-foreground",
                        )}
                      >
                        {pad(i + 1)}
                      </span>
                      <span className="truncate text-sm font-medium text-coffee">{p.title}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

/** Botón "Conoce más del proceso" que abre la galería del café y la pimienta */
export function ProcessGallery() {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ size: "xl", variant: "outline" }), "border-leaf/40 bg-white")}
      >
        <GalleryHorizontalEndIcon aria-hidden="true" />
        Conoce más del proceso
      </DialogTrigger>
      <DialogContent className="max-h-[94dvh] grid-cols-[minmax(0,1fr)] gap-0 overflow-y-auto p-0 sm:max-w-6xl">
        <Tabs defaultValue="cafe" className="gap-0">
          <div className="flex flex-col gap-4 border-b px-5 py-4 pr-12 sm:px-7 sm:py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <DialogTitle className="flex items-center gap-2.5 font-heading text-xl font-semibold text-coffee sm:text-2xl">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-leaf text-white">
                  <GalleryHorizontalEndIcon className="size-4" aria-hidden="true" />
                </span>
                Del cafetal a la taza
              </DialogTitle>
              <DialogDescription className="mt-1 text-[0.95rem]">
                El proceso paso a paso, con fotos de regiones productoras de México y del mundo.
              </DialogDescription>
            </div>
            <TabsList className="h-auto! w-full shrink-0 rounded-full border bg-muted p-1 md:w-60">
              <TabsTrigger
                value="cafe"
                className="h-9 rounded-full text-[0.95rem] data-active:bg-leaf! data-active:text-white!"
              >
                Café
              </TabsTrigger>
              <TabsTrigger
                value="pimienta"
                className="h-9 rounded-full text-[0.95rem] data-active:bg-leaf! data-active:text-white!"
              >
                Pimienta
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="cafe" className="p-5 sm:p-7">
            <ProcessViewer photos={coffeeProcess} />
          </TabsContent>
          <TabsContent value="pimienta" className="p-5 sm:p-7">
            <ProcessViewer photos={pepperProcess} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
