import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SECTORS, getSectorBySlug } from "@/lib/sectors";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const dynamicParams = false;

// `inmobiliarias` has its own dedicated landing at app/inmobiliarias/page.tsx.
export function generateStaticParams() {
  return SECTORS.filter((sector) => sector.slug !== "inmobiliarias").map(
    (sector) => ({ slug: sector.slug }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};
  return {
    title: `${sector.title} | Pegasus Pixels`,
    description: sector.body ?? sector.subtitle,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const Icon = sector.icon;

  return (
    <main>
      <section className="relative isolate flex min-h-[88vh] flex-col justify-end overflow-hidden border-b border-white/10 md:min-h-[92vh]">
        <Image
          src={sector.image}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: sector.imagePosition ?? "50% 50%" }}
          className="object-cover opacity-70"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-24 lg:py-24">
          <Link
            href="/#sectores"
            className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a sectores
          </Link>

          <h1 className="flex max-w-4xl items-center gap-4 text-[2rem] font-light leading-[1.1] tracking-tight sm:text-5xl md:text-[3.5rem] lg:text-h1">
            <Icon
              className="h-9 w-9 shrink-0 text-sky-400 md:h-12 md:w-12"
              strokeWidth={1.5}
            />
            {sector.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-sky-400">
            {sector.subtitle}
          </p>
          {sector.body && (
            <p className="mt-8 max-w-2xl text-base text-muted">{sector.body}</p>
          )}
        </div>
      </section>

      <section className="border-b border-white/10 bg-surface px-6 py-24 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-12 text-xs uppercase tracking-[0.2em] text-sky-400">
            Qué construimos
          </h2>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {sector.samples.map((sample) => (
              <div key={sample.title} className="space-y-3 bg-surface-card p-8">
                <h3 className="text-base font-medium text-sky-400">
                  {sample.title}
                </h3>
                <p className="text-base text-muted">{sample.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 text-center lg:px-24">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-[2rem] font-light leading-[1.2] tracking-tight md:text-h2">
            Hablemos de su proyecto en {sector.title.toLowerCase()}.
          </h2>
          <a
            href={buildWhatsAppUrl({ vertical: sector.title })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 active:translate-y-0"
          >
            <span>Iniciar conversación por WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
