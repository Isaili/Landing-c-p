import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon, CheckIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hero } from "../data/content";
import { asset } from "../lib/asset";
import { HeroSceneLoader } from "./hero-scene-loader";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,var(--cream-deep),var(--cream)_60%)] pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-leaf-soft px-3 py-1 text-sm font-medium text-secondary-foreground">
            <span className="size-2 rounded-full bg-leaf" aria-hidden="true" />
            Para café y pimienta en Chiapas
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
                "border-coffee/25 bg-transparent",
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

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <HeroSceneLoader />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={asset(hero.mockup.src)}
              alt={hero.mockup.alt}
              width={300}
              height={620}
              priority
              className="h-[88%] w-auto drop-shadow-[0_30px_40px_rgba(34,20,13,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
