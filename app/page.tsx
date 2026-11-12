import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { StatsBar } from "./_components/stats-bar";
import { Brands } from "./_components/brands";
import { FeaturesSection } from "./_components/features-section";
import { CardShowcaseSection } from "./_components/card-showcase-section";
import { Testimonials } from "./_components/testimonials";
import { Faq } from "./_components/faq";
import { AppCtaSection } from "./_components/app-cta-section";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Brands />
        <FeaturesSection />
        <CardShowcaseSection />
        <Testimonials />
        <Faq />
        <AppCtaSection />
      </main>
      <Footer />
    </>
  );
}
