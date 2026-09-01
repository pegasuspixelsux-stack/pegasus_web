import { Hero } from "@/components/hero";
import { Sectors } from "@/components/sectors";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sectors />
      <About />
      <ContactSection />
    </main>
  );
}
