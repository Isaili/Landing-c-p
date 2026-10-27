"use client";

import { useState } from "react";
import { ExternalLinkIcon, PlayCircleIcon, PlayIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { processVideos } from "../data/gallery";

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/**
 * Botón que abre los videos del café y la pimienta. El iframe solo existe
 * mientras el diálogo está abierto y solo para el video elegido, así que
 * YouTube no carga nada hasta que se pide.
 */
export function VideoDialog() {
  const [selectedId, setSelectedId] = useState(processVideos[0].id);
  const video = processVideos.find((v) => v.id === selectedId) ?? processVideos[0];

  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ size: "xl" }))}>
        <PlayCircleIcon aria-hidden="true" />
        Ver videos
      </DialogTrigger>
      <DialogContent className="max-h-[94dvh] grid-cols-[minmax(0,1fr)] gap-0 overflow-y-auto p-0 sm:max-w-6xl">
        <DialogHeader className="border-b px-5 py-4 pr-12 sm:px-7 sm:py-5">
          <DialogTitle className="flex items-center gap-2.5 font-heading text-xl font-semibold text-coffee sm:text-2xl">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-leaf text-white">
              <PlayIcon className="size-4 fill-current" aria-hidden="true" />
            </span>
            Videos del proceso
          </DialogTitle>
          <DialogDescription className="text-[0.95rem]">
            Conoce de cerca cómo se trabaja el café y la pimienta en México.
          </DialogDescription>
        </DialogHeader>

        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* Reproductor */}
          <div className="flex min-w-0 flex-col gap-4">
            <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-lg shadow-black/10 ring-1 ring-black/5">
              <iframe
                key={video.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="size-full"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div aria-live="polite">
                <Badge variant="outline" className="mb-2 h-6 border-leaf/25 px-2.5 text-leaf">
                  {video.label}
                </Badge>
                <h3 className="text-xl font-semibold text-coffee sm:text-2xl">{video.title}</h3>
                <p className="mt-1 text-muted-foreground">{video.description}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Canal:{" "}
                  <a
                    href={video.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    {video.channel}
                  </a>
                </p>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 shrink-0 px-4")}
              >
                Ver en YouTube
                <ExternalLinkIcon aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Lista de videos */}
          <div className="flex min-w-0 flex-col gap-3">
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {processVideos.length} videos
            </p>
            <ul className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)]">
              {processVideos.map((v) => {
                const active = v.id === video.id;
                return (
                  <li key={v.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(v.id)}
                      aria-pressed={active}
                      className={cn(
                        "group flex w-full gap-3 rounded-xl border p-2.5 text-left transition-colors",
                        active ? "border-leaf bg-leaf-soft/60 ring-1 ring-leaf" : "hover:bg-muted",
                      )}
                    >
                      <span className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg bg-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={thumb(v.youtubeId)}
                          alt=""
                          loading="lazy"
                          className="size-full object-cover"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/90 text-leaf shadow">
                            <PlayIcon className="size-4 fill-current" aria-hidden="true" />
                          </span>
                        </span>
                      </span>
                      <span className="flex min-w-0 flex-col justify-center">
                        <span className="text-xs font-semibold text-leaf uppercase">{v.label}</span>
                        <span className="line-clamp-2 font-medium text-coffee">{v.title}</span>
                        <span className="truncate text-xs text-muted-foreground">{v.channel}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
