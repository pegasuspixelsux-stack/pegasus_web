"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { SECTORS } from "@/lib/sectors";

const LINKS = [
  { href: "/#sectores", label: "Sectores" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteNav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

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
          className="hidden h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95 md:flex"
        >
          <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="text-white/80 transition-colors hover:text-white md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a] px-6 py-5 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Pegasus <span className="text-sky-400">Pixels</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="text-white/60 transition-colors hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-12 flex flex-1 flex-col">
              <ul className="space-y-1">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-2xl font-light tracking-tight text-white/90 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-10 mb-2 text-xs uppercase tracking-[0.2em] text-sky-400">
                Verticales
              </p>
              <ul className="space-y-1">
                {SECTORS.map((sector) => (
                  <li key={sector.slug}>
                    <Link
                      href={`/${sector.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-lg font-light text-white/70 transition-colors hover:text-white"
                    >
                      {sector.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center gap-2 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al sitio
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
