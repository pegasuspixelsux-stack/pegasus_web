import { NoiseOverlay } from "@/components/noise-overlay";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Sectors } from "@/components/sectors";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";
import { ChatWidget } from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans text-[#f5f5f7]">
      <NoiseOverlay />
      <SiteNav />
      <main>
        <Hero />
        <Sectors />
        <About />
        <CTA />
      </main>
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
