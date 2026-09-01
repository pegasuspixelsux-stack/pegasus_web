import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LINKS = [
  { href: "/#sectores", label: "Sectores" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/#top"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition-opacity hover:opacity-70"
        >
          Pegasus <span className="text-sky-400">Pixels</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contacto"
          aria-label="Ir a contacto"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95"
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
}
