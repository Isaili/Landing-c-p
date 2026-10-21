import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { faq } from "../data/faq";
import { LandingSection } from "./landing-section";
import { SectionHeading } from "./section-heading";

export function Faq() {
  return (
    <LandingSection id="preguntas" labelledBy="preguntas-title" containerClassName="max-w-3xl">
      <SectionHeading
        id="preguntas-title"
        eyebrow="Preguntas frecuentes"
        title="Resolvemos tus dudas"
      />
      <Card className="mt-12 py-2 shadow-sm">
        <Accordion className="px-5 sm:px-7">
          {faq.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-5 text-base font-semibold text-coffee hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </LandingSection>
  );
}
