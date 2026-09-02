import { ArrowRight, Camera, Magnet, Megaphone, MessagesSquare } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Eyebrow } from "@/components/eyebrow";
import { FeatureCard } from "@/components/feature-card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const H2 =
  "text-balance text-[1.75rem] font-light leading-[1.2] tracking-tight md:text-h2";

const PILLARS = [
  {
    icon: Camera,
    title: "Creación de contenido",
    body: "Fotografía y video de estudio, flyers y reels alineados a tu identidad de marca, producidos para publicar todas las semanas.",
  },
  {
    icon: Magnet,
    title: "Captación de leads",
    body: "Cada interacción en la web y en redes se transforma en un contacto calificado que llega ordenado a tu equipo comercial.",
  },
  {
    icon: Megaphone,
    title: "Herramientas de publicación",
    body: "Panel propio para cargar inventario, precios y estados en segundos, y llevar cada unidad a tu sitio y tus redes al instante.",
  },
  {
    icon: MessagesSquare,
    title: "Agente 24/7",
    body: "Respuesta automática que atiende, califica y agenda consultas a cualquier hora, incluso mientras el salón está cerrado.",
  },
];

const FLYERS = [
  { src: "/sectores/m3_1.png", hint: undefined },
  { src: undefined, hint: "public/sectores/flyer-concesionarias-2.png" },
  { src: undefined, hint: "public/sectores/flyer-concesionarias-3.png" },
  { src: "/sectores/m3_2.png", hint: undefined },
];

const CTA_HREF = buildWhatsAppUrl({
  vertical: "Ecosistema de contenido para concesionarias",
});

/**
 * Content + ecosystem pitch appended to the Concesionarias landing page,
 * rendered as `children` of VerticalLanding (before the Agente section).
 */
export function DealershipEcosystem() {
  return (
    <>
      {/* Portals -> owned audience */}
      <Section tone="b">
        <Reveal className="max-w-3xl">
          <Eyebrow>Audiencia propia</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>
            Dejá de alquilar visibilidad en portales. Construí tu propia
            audiencia.
          </h2>
          <p className="mt-5 text-base text-muted">
            Los portales de clasificados masivos ponen tu inventario al lado del
            de toda la competencia y se quedan con la relación con el cliente.
            Cada aviso que pagás alimenta su audiencia, no la tuya.
          </p>
          <p className="mt-4 text-base text-muted">
            El activo que sí capitaliza tu concesionaria es una comunidad propia
            en Instagram y Facebook: seguidores que conocen tu marca, confían en
            tu criterio y vuelven cuando llega el momento de cambiar de auto.
          </p>
        </Reveal>
      </Section>

      {/* The complete ecosystem */}
      <Section tone="a">
        <Reveal className="max-w-3xl">
          <Eyebrow>Ecosistema completo</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>Un motor digital, no piezas sueltas</h2>
          <p className="mt-5 text-base text-muted">
            Creación de contenido, captación de leads, herramientas de
            publicación y el Agente 24/7 trabajan como un solo sistema. Cada
            pieza refuerza a la siguiente y el resultado es un flujo continuo de
            consultas calificadas.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06} className="h-full">
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

      {/* Brand alignment & core values */}
      <Section tone="b">
        <Reveal className="max-w-3xl">
          <Eyebrow>Marca y valores</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>
            Presencia que refleja tus valores, no solo tus precios
          </h2>
          <p className="mt-5 text-base text-muted">
            Una concesionaria de alta gama no compite por el aviso más barato,
            compite por confianza. La presencia digital tiene que comunicar tu
            trayectoria, tu criterio de selección y tu forma de atender —los
            valores por los que un comprador elige tu salón y no otro.
          </p>
          <p className="mt-4 text-base text-muted">
            Construimos esa presencia para el largo plazo: contenido con
            coherencia visual y editorial que genera vínculo, en lugar de
            publicidad transaccional que se olvida al día siguiente.
          </p>
        </Reveal>
      </Section>

      {/* Full-service value + flyer showcase + CTA */}
      <Section tone="a">
        <Reveal className="max-w-3xl">
          <Eyebrow>Servicio integral</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>
            Producimos y sostenemos todo el ecosistema
          </h2>
          <p className="mt-5 text-base text-muted">
            No entregamos una herramienta y te dejamos solo. Nos hacemos cargo
            de la estrategia, la producción del contenido, la publicación y el
            mantenimiento —de punta a punta— para que tu equipo se concentre en
            vender.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {FLYERS.map((flyer, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <ImagePlaceholder
                aspect="aspect-square"
                src={flyer.src}
                alt={`Flyer de venta ${i + 1}`}
                label={`Flyer de venta ${i + 1}`}
                hint={flyer.hint}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-none bg-accent px-7 py-4 text-base font-medium text-on-accent transition duration-150 ease-out hover:bg-accent-hover active:scale-[0.98] motion-reduce:active:scale-100"
          >
            Solicitar propuesta para tu concesionaria
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </Section>
    </>
  );
}
