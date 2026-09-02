import { Hero } from "@/components/hero";
import { ApproachSection } from "@/components/approach-section";
import { Sectors } from "@/components/sectors";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApproachSection />
      <Sectors />
      <About />
      <ContactSection />
    </main>
  );
}
