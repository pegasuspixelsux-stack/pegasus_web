import { ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section
      id="contacto"
      className="flex min-h-[50vh] items-center px-6 py-32 text-center lg:px-24"
    >
      <div className="mx-auto max-w-2xl space-y-8">
        <h2 className="text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          Inicie una conversación directa.
        </h2>
        <a
          href={buildWhatsAppUrl({ vertical: "general" })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[0.9375rem] font-medium text-black transition-colors hover:bg-white/90"
        >
          <span>Iniciar conversación por WhatsApp</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
