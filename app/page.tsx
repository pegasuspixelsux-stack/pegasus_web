import { Hero } from "@/components/hero";
import { Sectors } from "@/components/sectors";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sectors />
      <About />
      <CTA />
    </main>
  );
}
