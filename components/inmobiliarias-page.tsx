"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ContactDetails } from "@/components/contact-details";
import { Eyebrow } from "@/components/eyebrow";
import { FeatureCard } from "@/components/feature-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const H1 =
  "text-balance text-[2rem] font-light leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-h1";
const H2 =
  "text-balance text-[1.75rem] font-light leading-[1.2] tracking-tight md:text-h2";

const BENEFITS = [
  {
    title: "Cierres ágiles con capital externo",
    body: "Presentá masterplans interactivos, fichas inmersivas y selectores multidivisa en tiempo real (USD, UYU, ARS) que eliminan las dudas del comprador de alto poder adquisitivo.",
  },
  {
    title: "Velocidad y adaptabilidad total",
    body: "Carga instantánea en cualquier smartphone. Tus agentes inmobiliarios pueden mostrar el inventario actualizado desde cualquier lugar, durante una obra o reunión presencial.",
  },
  {
    title: "Autonomía operativa absoluta",
    body: "Panel de administración interno ultrarrápido para cargar, modificar o retirar propiedades en segundos, sin dependencias de terceros ni mantenimientos mensuales absurdos.",
  },
];

const COMPARISON = {
  before: {
    label: "Antes",
    title: "Portales lentos y dependencia",
    body: "Leads repartidos entre decenas de inmobiliarias, costos altos por aviso destacado y plataformas lentas que frustran al cliente.",
  },
  after: {
    label: "Ahora",
    title: "Tu propio sistema de alta conversión",
    body: "Infraestructura exclusiva, consultas canalizadas directamente a tus vendedores por WhatsApp y estética prémium que justifica comisiones más altas.",
  },
};

const WHATSAPP_HREF = buildWhatsAppUrl({ vertical: "Desarrollos Inmobiliarios" });

export function InmobiliariasPage() {
  return (
    <main>
      {/* A — Hero */}
      <Section tone="a" id="top">
        <Link
          href="/#sectores"
          className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a sectores
        </Link>

        <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow icon="dot">Operación local, estándares globales.</Eyebrow>
            <h1 className={`mt-6 ${H1}`}>
              Infraestructura comercial para inmobiliarias y desarrolladores
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted">
              Dejá de depender de portales genéricos que te cobran comisiones
              abusivas y te entregan leads fríos. Te damos tu propia
              infraestructura digital de alta gama para que tu inmobiliaria
              controle su inventario, proyecte una imagen de exclusividad
              absoluta y cierre más operaciones.
            </p>
          </div>

          {/* Platform mockup */}
          <div className="relative rounded-2xl border border-white/10 bg-surface-card p-3 shadow-2xl">
            <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/sectores/inmobiliarias.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                USD · UYU · ARS
              </span>
              <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/10 bg-black/70 p-3 backdrop-blur">
                <p className="text-sm font-medium text-white">
                  Penthouse · La Barra
                </p>
                <p className="text-xs text-muted">
                  USD 1.240.000 · 3 suites · 240 m²
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* B — Control de cartera */}
      <Section tone="b">
        <Reveal className="max-w-3xl">
          <Eyebrow>Cartera y marca</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>Control total de tu cartera y marca</h2>
          <p className="mt-5 text-base text-muted">
            Implementamos un sistema propio con tu propia identidad visual.
            Olvidate de compartir espacio con la competencia en webs saturadas;
            acá el protagonista absoluto es tu catálogo de propiedades y la
            reputación de tu empresa.
          </p>
        </Reveal>
      </Section>

      {/* C — Beneficios clave */}
      <Section tone="a">
        <Reveal className="max-w-3xl">
          <Eyebrow>Beneficios clave</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>
            Lo que gana tu inmobiliaria con infraestructura propia
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08} className="h-full">
              <FeatureCard title={benefit.title} className="h-full">
                {benefit.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* D — Antes vs. ahora */}
      <Section tone="b">
        <Reveal className="max-w-3xl">
          <Eyebrow>Antes vs. ahora</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>
            ¿Qué cambia al implementar esta arquitectura?
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-surface-card p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {COMPARISON.before.label}
              </p>
              <h3 className="mt-3 text-h3 font-light tracking-tight text-foreground">
                {COMPARISON.before.title}
              </h3>
              <p className="mt-3 text-base text-muted">
                {COMPARISON.before.body}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-2xl border border-sky-400/40 bg-sky-400/[0.06] p-6 lg:p-8">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sky-400">
                <Check className="h-3.5 w-3.5" />
                {COMPARISON.after.label}
              </p>
              <h3 className="mt-3 text-h3 font-light tracking-tight text-foreground">
                {COMPARISON.after.title}
              </h3>
              <p className="mt-3 text-base text-muted">
                {COMPARISON.after.body}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* E — CTA */}
      <section className="border-b border-white/10 bg-background px-6 py-24 lg:px-24 lg:py-32">
        <Reveal className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>Siguiente paso</Eyebrow>
            <h2 className={`mt-5 ${H2}`}>¿Listo para escalar tu inmobiliaria?</h2>
            <p className="mt-5 max-w-md text-base text-muted">
              Coordiná una llamada directa para implementar la infraestructura
              que tu negocio necesita para cerrar más operaciones.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-4 text-base font-medium text-black transition-colors hover:bg-sky-300"
            >
              Hablar por WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="lg:pt-1">
            <ContactDetails />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
