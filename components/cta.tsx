"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CTA() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contacto"
      className="flex min-h-[50vh] items-center px-6 py-32 text-center lg:px-24"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-2xl space-y-8"
      >
        <h2 className="text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          Inicie una conversación directa.
        </h2>
        <a
          href={buildWhatsAppUrl({ vertical: "general" })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 active:translate-y-0"
        >
          <span>Iniciar conversación por WhatsApp</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
