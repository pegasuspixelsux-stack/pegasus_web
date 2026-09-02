"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const POINTS = [
  "Arquitectura de aplicaciones con estándares globales, sobre bases probadas en el mercado y sin mantenimiento innecesario.",
  "Rendimiento extremo: Core Web Vitals en verde y carga inmediata desde el primer deploy.",
  "Adquisición autónoma: cada consulta de alto valor llega directa a su equipo comercial, lista para cerrar.",
];

export function ApproachSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="soluciones"
      className="scroll-mt-16 border-b border-foreground/10 bg-surface px-6 py-24 lg:px-24 lg:py-32"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
            Enfoque
          </p>
          <h2 className="text-[2rem] font-normal leading-[1.2] tracking-tight md:text-h2">
            Sistemas comerciales
            <br />
            de alta conversión
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base text-muted">
            Creamos infraestructura digital enfocada en resultados comerciales
            directos, optimizada para empresas consolidadas que exigen
            rendimiento y efectividad.
          </p>
          <ul className="space-y-3 border-t border-foreground/15 pt-6">
            {POINTS.map((point) => (
              <li key={point} className="text-base text-muted">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
