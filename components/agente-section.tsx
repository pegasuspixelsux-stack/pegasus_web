"use client";

import { ArrowRight, Clock, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const H2 =
  "text-balance text-[1.75rem] font-light leading-[1.2] tracking-tight md:text-h2";

const ADVANTAGES = [
  {
    icon: Clock,
    title: "Disponibilidad global 24/7",
    body: "Capta al inversor extranjero y al comprador de alto patrimonio en cualquier huso horario, sin esperas ni horarios de oficina.",
  },
  {
    icon: ShieldCheck,
    title: "Cero oportunidades perdidas",
    body: "Reemplaza el formulario estático por una conversación guiada que retiene al visitante en vez de dejarlo ir.",
  },
  {
    icon: Target,
    title: "Calificación de precisión",
    body: "Pre-califica cada consulta por intención y criterios exactos, y vuelca datos limpios y accionables directo al pipeline de ventas.",
  },
  {
    icon: Sparkles,
    title: "Diferenciación de mercado",
    body: "Un concierge digital a medida distingue a tu inmobiliaria de la competencia atada a los portales genéricos.",
  },
];

export function AgenteSection() {
  const launch = () => {
    window.dispatchEvent(new Event("pegasus:open-agente"));
  };

  return (
    <Section tone="b">
      <Reveal className="max-w-3xl">
        <Eyebrow icon="dot">Agente · Concierge 24/7</Eyebrow>
        <h2 className={`mt-5 ${H2}`}>
          El concierge que califica cada consulta, a cualquier hora
        </h2>
        <p className="mt-5 text-base text-muted">
          Agente es un embudo de calificación interactivo y multi-paso. En lugar
          de un formulario que nadie completa, conduce a cada visitante por
          preguntas cortas —intención, presupuesto, zona, plazo— y entrega un
          lead calificado a tu equipo de ventas.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {ADVANTAGES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4 py-5">
                <Icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-sky-400"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-base text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
          <ImagePlaceholder
            src="/sectores/agente_1.png"
            alt="Agente — paso 1 de 8 del embudo de calificación"
            label="Captura del embudo de calificación de Agente"
            aspect="aspect-[385/341]"
            fit="contain"
          />
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <button
          type="button"
          onClick={launch}
          className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-4 text-base font-medium text-black transition-colors hover:bg-sky-300"
        >
          Probar Agente ahora
          <ArrowRight className="h-4 w-4" />
        </button>
      </Reveal>
    </Section>
  );
}
