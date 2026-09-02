"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { SECTORS } from "@/lib/sectors";
import { NavSearch } from "@/components/nav-search";
import { ThemeToggle } from "@/components/theme-toggle";
import { EASE } from "@/lib/motion";

const SOLUCIONES_LINKS = SECTORS.map((sector) => ({
  href: `/${sector.slug}`,
  label: sector.title,
}));

const LINKS = [
  { href: "/#top", label: "Inicio" },
  { href: "/#soluciones", label: "Soluciones", menu: SOLUCIONES_LINKS },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

const navLinkClass =
  "text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground";

export function SiteNav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <Link
            href="/#top"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80 transition-opacity hover:opacity-70"
          >
            Pegasus <span className="text-accent">Pixels</span>
          </Link>

          <ul className="hidden items-center gap-6 nav:flex nav:gap-9">
            {LINKS.map((link) =>
              link.menu ? (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 ${navLinkClass}`}
                  >
                    {link.label}
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 origin-top scale-95 pt-3 opacity-0 transition duration-150 ease-out group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:visible group-hover:scale-100 group-hover:opacity-100 motion-reduce:scale-100">
                    <ul className="min-w-[240px] rounded-xl border border-foreground/10 bg-surface-card p-1.5 shadow-2xl">
                      {link.menu.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="hidden items-center gap-3 nav:flex">
            <NavSearch variant="desktop" />
            <ThemeToggle />
            <Link
              href="/#contacto"
              aria-label="Ir a contacto"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-on-accent transition-transform hover:scale-105 active:scale-95"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 nav:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Drawer lives outside <header> so its `fixed` box is the viewport,
          not the backdrop-blurred header (which would clamp it to 64px). */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background px-6 py-5 nav:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80">
                Pegasus <span className="text-accent">Pixels</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="text-muted transition-colors hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col">
              <NavSearch variant="mobile" onNavigate={() => setOpen(false)} />

              <ul className="mt-8 space-y-1">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-h3 font-normal tracking-tight text-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-10 mb-2 text-xs uppercase tracking-[0.2em] text-accent">
                Verticales
              </p>
              <ul className="space-y-1">
                {SECTORS.map((sector) => (
                  <li key={sector.slug}>
                    <Link
                      href={`/${sector.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-base font-normal text-muted transition-colors hover:text-foreground"
                    >
                      {sector.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center gap-2 border-t border-foreground/10 pt-6 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al sitio
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
