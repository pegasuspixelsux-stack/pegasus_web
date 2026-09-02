import Link from "next/link";
import { SECTORS } from "@/lib/sectors";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// TODO: confirm the Instagram / LinkedIn handles.
const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: buildWhatsAppUrl({ vertical: "general" }),
    path: "M12.04 2.02c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5l-1.42 5.18 5.3-1.39a9.94 9.94 0 0 0 4.74 1.21h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04a9.9 9.9 0 0 0-7.05-2.92Zm0 18.2h-.01a8.26 8.26 0 0 1-4.2-1.15l-.3-.18-3.13.82.84-3.06-.2-.31a8.24 8.24 0 0 1-1.26-4.39c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.42a8.23 8.23 0 0 1 2.42 5.86c0 4.56-3.71 8.27-8.27 8.27Zm4.54-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02s-.43.06-.66.31c-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/pegasuspixels",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.98c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 3.37a4.49 4.49 0 1 1 0 8.98 4.49 4.49 0 0 1 0-8.98Zm0 7.4a2.91 2.91 0 1 0 0-5.82 2.91 2.91 0 0 0 0 5.82Zm5.72-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pegasus-pixels",
    path: "M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z",
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

        <nav className="flex gap-4" aria-label="Redes sociales">
          {SOCIAL_LINKS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d={path} />
              </svg>
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
