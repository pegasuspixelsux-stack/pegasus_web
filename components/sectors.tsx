"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus, Sparkle } from "lucide-react";
import { SECTORS } from "@/lib/sectors";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Sectors() {
  const reduce = useReducedMotion();

  return (
    <section id="sectores" className="border-b border-foreground/10">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-[1440px] px-6 pb-16 pt-24 lg:px-24"
      >
        <h2 className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
          <Sparkle className="h-3.5 w-3.5 fill-current" />
          Verticales Principales
        </h2>
        <p className="text-balance text-[2rem] font-normal leading-[1.2] tracking-tight md:text-h2">
          Soluciones específicas diseñadas
          <br />
          con estándares globales.
        </p>
      </motion.div>

      <div>
        {SECTORS.map((sector) => {
          const Icon = sector.icon;
          return (
          <article
            key={sector.id}
            className="relative border-t border-foreground/10 bg-background"
          >
            <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-24 lg:py-28">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h3 className="flex items-center gap-3 text-h3 font-normal tracking-tight">
                      <Icon
                        className="h-7 w-7 shrink-0 text-accent"
                        strokeWidth={1.5}
                      />
                      {sector.title}
                    </h3>
                    <p className="mt-4 text-base text-accent">
                      {sector.subtitle}
                    </p>
                    {sector.body && (
                      <p className="mt-6 text-base text-muted">{sector.body}</p>
                    )}

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {sector.samples.map((sample, i) => (
                        <motion.div
                          key={sample.title}
                          className="rounded-xl border border-foreground/10 bg-surface-card p-5"
                          initial={reduce ? false : { opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.08,
                            ease: EASE,
                          }}
                        >
                          <h4 className="flex items-center gap-1.5 text-base font-medium text-accent">
                            {sample.title}
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                          </h4>
                          <p className="mt-2 text-base text-muted">
                            {sample.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-foreground/10 lg:sticky lg:top-24">
                    <Image
                      src={sector.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      style={{
                        objectPosition: sector.imagePosition ?? "50% 50%",
                      }}
                      className="object-cover"
                    />
                    <Link
                      href={`/${sector.slug}`}
                      aria-label={`Ver ${sector.title}`}
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </article>
          );
        })}
      </div>

      <motion.a
        href="#contacto"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="group flex items-center justify-center gap-3 border-t border-foreground/10 px-6 py-14 text-center transition-colors hover:bg-foreground/[0.03] lg:px-24"
      >
        <Plus className="h-4 w-4 text-foreground/40 transition-transform duration-300 group-hover:rotate-90 group-hover:text-foreground" />
        <span className="text-base text-muted transition-colors group-hover:text-foreground">
          ¿Busca algo diferente? Desarrollos a medida para otros sectores
          selectos.
        </span>
      </motion.a>
    </section>
  );
}
