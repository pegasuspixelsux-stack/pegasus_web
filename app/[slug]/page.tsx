import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SECTORS, getSectorBySlug } from "@/lib/sectors";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const dynamicParams = false;

export function generateStaticParams() {
  return SECTORS.map((sector) => ({ slug: sector.slug }));
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
            className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a sectores
          </Link>

          <h1 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {sector.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-yellow-400">
            {sector.subtitle}
          </p>
          {sector.body && (
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              {sector.body}
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-white/10 bg-surface px-6 py-24 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-12 text-xs uppercase tracking-[0.2em] text-yellow-400">
            Qué construimos
          </h2>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {sector.samples.map((sample) => (
              <div key={sample.title} className="space-y-3 bg-[#0d0d0d] p-8">
                <h3 className="text-lg font-medium text-white">
                  {sample.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {sample.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 text-center lg:px-24">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
            Hablemos de su proyecto en {sector.title.toLowerCase()}.
          </h2>
          <a
            href={buildWhatsAppUrl({ vertical: sector.title })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[0.9375rem] font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 active:translate-y-0"
          >
            <span>Iniciar conversación por WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
