"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  LayoutDashboard,
  Landmark,
  PackageCheck,
  SlidersHorizontal,
  Smartphone,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { BenefitIcon, VerticalLandingData } from "@/lib/verticals";
import { ContactDetails } from "@/components/contact-details";
import { Eyebrow } from "@/components/eyebrow";
import { FeatureCard } from "@/components/feature-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const BENEFIT_ICONS: Record<BenefitIcon, LucideIcon> = {
  landmark: Landmark,
  smartphone: Smartphone,
  dashboard: LayoutDashboard,
  wallet: Wallet,
  package: PackageCheck,
  workflow: Workflow,
  sliders: SlidersHorizontal,
};

const H1 =
  "text-balance text-[2rem] font-light leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-h1";
const H2 =
  "text-balance text-[1.75rem] font-light leading-[1.2] tracking-tight md:text-h2";

export function VerticalLanding({ data }: { data: VerticalLandingData }) {
  const { hero, mockup, control, benefits, comparison, cta } = data;
  const whatsappHref = buildWhatsAppUrl({ vertical: cta.whatsappVertical });

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
            <h1 className={`mt-6 ${H1}`}>{hero.h1}</h1>
            <p className="mt-6 max-w-xl text-base text-muted">{hero.lead}</p>
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
                src={mockup.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                style={{ objectPosition: mockup.imagePosition ?? "50% 50%" }}
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {mockup.chip}
              </span>
              <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/10 bg-black/70 p-3 backdrop-blur">
                <p className="text-sm font-medium text-white">
                  {mockup.cardTitle}
                </p>
                <p className="text-xs text-muted">{mockup.cardSubtitle}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* B — Control */}
      <Section tone="b">
        <Reveal className="max-w-3xl">
          <Eyebrow>{control.eyebrow}</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>{control.h2}</h2>
          <p className="mt-5 text-base text-muted">{control.body}</p>
        </Reveal>
      </Section>

      {/* C — Beneficios */}
      <Section tone="a">
        <Reveal className="max-w-3xl">
          <Eyebrow>{benefits.eyebrow}</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>{benefits.h2}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {benefits.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <FeatureCard
                title={item.title}
                icon={BENEFIT_ICONS[item.icon]}
                className="h-full"
              >
                {item.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* D — Antes vs. ahora */}
      <Section tone="b">
        <Reveal className="max-w-3xl">
          <Eyebrow>{comparison.eyebrow}</Eyebrow>
          <h2 className={`mt-5 ${H2}`}>{comparison.h2}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-surface-card p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {comparison.before.label}
              </p>
              <h3 className="mt-3 text-h3 font-light tracking-tight text-foreground">
                {comparison.before.title}
              </h3>
              <p className="mt-3 text-base text-muted">
                {comparison.before.body}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-2xl border border-sky-400/40 bg-sky-400/[0.06] p-6 lg:p-8">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sky-400">
                <Check className="h-3.5 w-3.5" />
                {comparison.after.label}
              </p>
              <h3 className="mt-3 text-h3 font-light tracking-tight text-foreground">
                {comparison.after.title}
              </h3>
              <p className="mt-3 text-base text-muted">
                {comparison.after.body}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* E — CTA */}
      <section className="border-b border-white/10 bg-background px-6 py-24 lg:px-24 lg:py-32">
        <Reveal className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>{cta.eyebrow}</Eyebrow>
            <h2 className={`mt-5 ${H2}`}>{cta.h2}</h2>
            <p className="mt-5 max-w-md text-base text-muted">{cta.body}</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-4 text-base font-medium text-black transition-colors hover:bg-sky-300"
            >
              {cta.button}
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
