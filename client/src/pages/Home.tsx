import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechnicalSpecs } from "@/components/TechnicalSpecs";
import { Benefits } from "@/components/Benefits";
import { Ingredients } from "@/components/Ingredients";
import { HowToUse } from "@/components/HowToUse";
import { PurchaseSection } from "@/components/PurchaseSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <TechnicalSpecs />
        <Benefits />
        <Ingredients />
        <HowToUse />
        <PurchaseSection />
      </main>

      <Footer />
    </div>
  );
}
