import { ConciergeBell, KanbanSquare, Sparkles } from "lucide-react";
import { EditionsSlideshow } from "@/components/editions-slideshow";
import { Eyebrow } from "@/components/eyebrow";
import { FeatureCard } from "@/components/feature-card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const H2 =
  "text-balance text-[1.75rem] font-light leading-[1.2] tracking-tight md:text-h2";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Motor de publicación inmersivo",
    body: "Fichas de propiedad a pantalla completa con tours, planos y galerías en alta resolución. Cada detalle lleva tu identidad, no la de un portal compartido.",
  },
  {
    icon: KanbanSquare,
    title: "CRM y pipeline visual de ventas",
    body: "Gestión de leads y un tablero que sigue cada oportunidad —de la primera consulta a la escritura— sin planillas sueltas ni contactos olvidados.",
  },
  {
    icon: ConciergeBell,
    title: "Embudo de agente concierge premium",
    body: "Un flujo conversacional diseñado para despertar la curiosidad del comprador de alto patrimonio y convertirla en una visita agendada con tu equipo.",
  },
];

/**
 * White-label real-estate platform pitch, appended to the Desarrollos
 * Inmobiliarios landing page (same Pegasus Pixels styling as the rest of
 * the site). Rendered as `children` of VerticalLanding, before the shared
 * Agente section and the closing CTA.
 */
export function WhiteLabelPitch() {
  return (
    <>
      {/* Value proposition */}
      <Section tone="b">
        <Reveal className="max-w-3xl">
          <Eyebrow>Plataforma white-label</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>
            El flagship digital de tu inmobiliaria, con tu marca
          </h2>
          <p className="mt-5 text-base text-muted">
            Las agencias de lujo pierden diferenciación cuando publican en los
            mismos portales masivos donde su cartera aparece al lado de
            propiedades genéricas. La conversación se vuelve precio y la marca
            desaparece.
          </p>
          <p className="mt-4 text-base text-muted">
            Te licenciamos una plataforma propia —publicación, CRM y concierge—
            para que unifiques tu identidad en un canal exclusivo y controles la
            experiencia completa del comprador, del primer clic a la firma.
          </p>
        </Reveal>
      </Section>

      {/* Feature pillars */}
      <Section tone="a">
        <Reveal className="max-w-3xl">
          <Eyebrow>La plataforma</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>El sistema completo, con tu identidad</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="h-full">
              <FeatureCard
                title={pillar.title}
                icon={pillar.icon}
                className="h-full"
              >
                {pillar.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Dashboard visual */}
      <Section tone="b">
        <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Panel de control</Eyebrow>
            <h2 className={`mt-5 ${H2}`}>Toda tu operación en una pantalla</h2>
            <p className="mt-5 max-w-xl text-base text-muted">
              Inventario, leads y pipeline en una sola vista. Publicá una
              propiedad, movés una oportunidad de etapa o marcás una reserva en
              segundos, sin depender de nadie.
            </p>
          </div>
          <ImagePlaceholder
            label="Captura del panel de administración y la vista de pipeline"
            hint="public/inmobiliarias/dashboard.png"
          />
        </Reveal>
      </Section>

      {/* Editions: Oceanus & Calypso */}
      <Section tone="a">
        <Reveal className="max-w-3xl">
          <Eyebrow>Dos ediciones</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>Elegí el carácter de tu flagship</h2>
          <p className="mt-5 text-base text-muted">
            La misma plataforma y el mismo motor, en dos lenguajes visuales.
            Cada edición se entrega lista para adaptar a tu marca.
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <EditionsSlideshow />
        </Reveal>
      </Section>
    </>
  );
}
