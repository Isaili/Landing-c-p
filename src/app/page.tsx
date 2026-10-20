import { Benefits } from "@/features/landing/components/benefits";
import { Faq } from "@/features/landing/components/faq";
import { Features } from "@/features/landing/components/features";
import { FinalCta } from "@/features/landing/components/final-cta";
import { Footer } from "@/features/landing/components/footer";
import { Header } from "@/features/landing/components/header";
import { Hero } from "@/features/landing/components/hero";
import { MarketTimeline } from "@/features/landing/components/market-timeline";
import { Pricing } from "@/features/landing/components/pricing";
import { Problem } from "@/features/landing/components/problem";
import { Testimonials } from "@/features/landing/components/testimonials";
import { RoleProvider } from "@/features/landing/context/role-context";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" className="flex-1">
        <Hero />
        <Problem />
        {/* Beneficios y Precios comparten el rol seleccionado */}
        <RoleProvider>
          <Benefits />
          <Features />
          <MarketTimeline />
          <Pricing />
        </RoleProvider>
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
