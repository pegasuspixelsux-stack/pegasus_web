"use client";

import { motion, useReducedMotion } from "motion/react";
import { Sparkle } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="nosotros"
      className="flex min-h-[50vh] items-center border-b border-foreground/10 bg-surface px-6 py-28 lg:px-24 lg:py-32"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-3xl space-y-6 text-left sm:text-center"
      >
        <h2 className="flex items-center justify-start gap-2 text-xs uppercase tracking-[0.2em] text-accent sm:justify-center">
          <Sparkle className="h-3.5 w-3.5 fill-current" />
          Quiénes Somos
        </h2>
        <p className="text-balance text-[2rem] font-light leading-[1.2] tracking-tight md:text-h2">
          Ingeniería y arquitectura de aplicaciones de alto rendimiento, con base en
          Punta del Este y oferta global.
        </p>
        <p className="max-w-2xl text-base text-muted sm:mx-auto">
          Pegasus Pixels es un estudio de ingeniería y arquitectura de aplicaciones
          y diseño de alta gama con sede en Punta del Este y oferta global
          (EE. UU., Europa y Latinoamérica), especializado en crear
          infraestructura digital, velocidad extrema y sistemas de adquisición
          autónoma. Aplicamos estándares globales de arquitectura de aplicaciones,
          sin las limitaciones de un mercado exclusivamente local: nada de
          plantillas genéricas ni mantenimiento innecesario, sólo tecnología a
          medida que elimina la fricción visual y convierte el tráfico de alto
          valor en operaciones concretas.
        </p>
      </motion.div>
    </section>
  );
}
