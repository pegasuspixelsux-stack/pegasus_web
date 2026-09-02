import Link from "next/link";
import { SECTORS } from "@/lib/sectors";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// TODO: confirm real handles — these are placeholders like WHATSAPP_NUMBER.
const SOCIAL_LINKS = [
  { label: "WhatsApp", href: buildWhatsAppUrl({ vertical: "general" }) },
  { label: "Instagram", href: "https://instagram.com/pegasuspixels" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pegasus-pixels",
  },
];

const SECTOR_LINKS = [
  ...SECTORS.map((sector) => ({
    href: `/${sector.slug}`,
    label: sector.title,
  })),
  { href: "/#contacto", label: "Soluciones probadas en el mercado" },
];

const TECH_ITEMS = [
  "Arquitectura web de alto rendimiento",
  "Adquisición de leads por WhatsApp",
  "Optimización móvil integral",
];

const LEGAL_LINKS = [
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/terminos", label: "Términos" },
  { href: "/legal/cookies", label: "Cookies" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-16 text-sm text-muted lg:px-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Pegasus <span className="text-sky-400">Pixels</span>
          </p>
          <p>
            Arquitectura de aplicaciones con estándares globales, desde Punta
            del Este.
          </p>
          <p className="text-muted/70">
            Sede en Punta del Este, Uruguay · Oferta global (EE. UU., Europa y
            Latinoamérica).
          </p>
        </div>

        <nav className="space-y-3" aria-label="Sectores">
          <p className="uppercase tracking-[0.2em] text-sky-400">Sectores</p>
          <ul className="space-y-2">
            {SECTOR_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-sky-400">Tecnología</p>
          <ul className="space-y-2">
            {TECH_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-sky-400">Contacto</p>
          <ul className="space-y-2">
            <li>
              <a
                href={buildWhatsAppUrl({ vertical: "general" })}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Canal directo de WhatsApp
              </a>
            </li>
            <li className="text-muted/70">Consultas: lunes a viernes, 9 a 18 h.</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1440px] flex-col gap-6 border-t border-white/10 pt-8 text-muted/70 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Pegasus Pixels.</p>

        <nav className="flex flex-wrap gap-6" aria-label="Redes sociales">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <nav className="flex flex-wrap gap-6" aria-label="Legal">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
