import Image from "next/image";
import { testimonials } from "../data/testimonials";
import { asset } from "../lib/asset";
import { SectionHeading } from "./section-heading";

/** Se oculta mientras no haya testimonios reales en data/testimonials.ts */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonios-title" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="testimonios-title"
          eyebrow="Testimonios"
          title="Lo que dicen en el campo"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border bg-cream p-6">
                <blockquote className="flex-1 text-lg text-coffee">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={asset(t.photo)}
                    alt={`Foto de ${t.name}`}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                  <span>
                    <span className="block font-semibold text-coffee">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">
                      {t.role} · {t.municipality}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
