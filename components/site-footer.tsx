import { buildWhatsAppUrl } from "@/lib/whatsapp";

const SECTOR_LINKS = [
  { href: "#sectores", label: "Inmobiliarias" },
  { href: "#sectores", label: "Concesionarias" },
  { href: "#sectores", label: "Gastronomía" },
  { href: "#contacto", label: "Soluciones a medida" },
];

const TECH_ITEMS = [
  "Arquitectura web de alto rendimiento",
  "Captación de leads por WhatsApp",
  "Optimización móvil integral",
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-16 text-xs text-white/60 lg:px-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Pegasus Pixels
          </p>
          <p>Infraestructura digital para Punta del Este.</p>
          <p className="text-white/40">Base en Maldonado, Uruguay.</p>
          <p className="text-white/40">&copy; {year} Pegasus Pixels.</p>
        </div>

        <nav className="space-y-3" aria-label="Sectores">
          <p className="uppercase tracking-[0.2em] text-white/40">Sectores</p>
          <ul className="space-y-2">
            {SECTOR_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-white/40">Tecnología</p>
          <ul className="space-y-2">
            {TECH_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-white/40">Contacto</p>
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
            <li className="text-white/40">Consultas: lunes a viernes, 9 a 18 h.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
