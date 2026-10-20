import { SparklesIcon } from "lucide-react";
import { finalCta } from "../data/content";
import { founderText } from "./founder-banner";
import { LogoMark } from "./logo";
import { StoreButtons } from "./store-buttons";

export function FinalCta() {
  return (
    <section
      id="descargar"
      aria-labelledby="descargar-title"
      className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-coffee px-6 py-14 text-center text-cream sm:px-12 sm:py-20">
        <LogoMark className="mx-auto size-14" />
        <h2
          id="descargar-title"
          className="mx-auto mt-6 max-w-2xl text-3xl font-semibold sm:text-5xl"
        >
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cream/80">{finalCta.subtitle}</p>
        <StoreButtons tone="light" className="mt-8 justify-center" />
        <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm font-medium">
          <SparklesIcon className="size-4 shrink-0 text-clay" aria-hidden="true" />
          {founderText}
        </p>
      </div>
    </section>
  );
}
