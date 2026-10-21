import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon, CheckIcon, MapPinIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hero } from "../data/content";
import { photos } from "../data/photos";
import { asset } from "../lib/asset";
import { HeroSceneLoader } from "./hero-scene-loader";

export function Hero() {
  const photo = photos.cafetal;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-32 lg:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-leaf-soft px-3 py-1 text-sm font-medium text-secondary-foreground">
            <MapPinIcon className="size-4" aria-hidden="true" />
            Para compradores y productores de Chiapas
          </p>
          <h1
            id="hero-title"
            className="text-4xl leading-[1.08] font-semibold text-coffee sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-pretty text-muted-foreground sm:text-xl lg:mx-0">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="/#descargar" className={buttonVariants({ size: "xl" })}>
              {hero.primaryCta}
            </Link>
            <Link
              href="/#precios"
              className={cn(
                buttonVariants({ variant: "outline", size: "xl" }),
                "border-leaf/30 bg-white",
              )}
            >
              {hero.secondaryCta}
              <ArrowDownIcon />
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-coffee/80 lg:justify-start">
            {hero.trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CheckIcon className="size-4 text-leaf" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Foto real de un cafetal en Chiapas + mockup de la app */}
        <div className="relative mx-auto w-full max-w-md pb-10 pl-10 sm:pl-16 lg:max-w-none">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-leaf/20">
            <Image
              src={asset(photo.src)}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
            <figcaption className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <MapPinIcon className="size-3.5" aria-hidden="true" />
              {photo.caption}
            </figcaption>
          </figure>

          <HeroSceneLoader />

          <Image
            src={asset(hero.mockup.src)}
            alt={hero.mockup.alt}
            width={300}
            height={620}
            priority
            className="absolute bottom-0 left-0 w-[44%] max-w-[210px] drop-shadow-[0_24px_32px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
