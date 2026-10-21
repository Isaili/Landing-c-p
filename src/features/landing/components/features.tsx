import { features } from "../data/content";
import { FeatureBlock } from "./feature-block";
import { LandingSection } from "./landing-section";
import { SectionHeading } from "./section-heading";

export function Features() {
  return (
    <LandingSection id="como-funciona" labelledBy="como-funciona-title">
      <SectionHeading
        id="como-funciona-title"
        eyebrow="Cómo funciona"
        title="Todo lo que necesitas, en tu celular"
        description="Funciones pensadas para el día a día del acopio y la cosecha."
      />
      <div className="mt-16 flex flex-col gap-20 md:gap-28">
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
    </LandingSection>
  );
}
