import { features } from "../data/content";
import { FeatureBlock } from "./feature-block";
import { SectionHeading } from "./section-heading";

export function Features() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="scroll-mt-16 bg-card py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="como-funciona-title"
          eyebrow="Cómo funciona"
          title="Todo lo que necesitas, en tu celular"
          description="Funciones pensadas para el día a día del acopio y la cosecha."
        />
        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {features.map((f, i) => (
            <FeatureBlock
              key={f.id}
              index={i}
              eyebrow={f.eyebrow}
              title={f.title}
              description={f.description}
              image={f.image}
              alt={f.alt}
              comingSoon={"comingSoon" in f ? f.comingSoon : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
