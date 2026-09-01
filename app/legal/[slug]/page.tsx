import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const DOCS: Record<string, string> = {
  privacidad: "Política de Privacidad",
  terminos: "Términos y Condiciones",
  cookies: "Política de Cookies",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = DOCS[slug];
  return title ? { title: `${title} | Pegasus Pixels` } : {};
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = DOCS[slug];
  if (!title) notFound();

  return (
    <main className="mx-auto min-h-[70vh] max-w-3xl px-6 pb-32 pt-40 lg:px-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>

      <h1 className="text-4xl font-light leading-[1.1] tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-8 leading-relaxed text-white/60">
        Este documento está en preparación. Para cualquier consulta sobre el
        tratamiento de datos, contáctenos por{" "}
        <a
          href={buildWhatsAppUrl({ vertical: "general" })}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 transition-colors hover:text-sky-300"
        >
          WhatsApp
        </a>
        .
      </p>
    </main>
  );
}
