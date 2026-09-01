"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MessageSquare, X, Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const VERTICALS = ["Inmobiliaria", "Concesionaria", "Gastronomía", "Otro"];

export function ChatWidget() {
  const reduce = useReducedMotion();
  const phoneId = useId();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [vertical, setVertical] = useState("");
  const [phone, setPhone] = useState("");

  const send = () => {
    window.open(
      buildWhatsAppUrl({ vertical: vertical || "general", phone }),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Asistente Pegasus"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 right-0 flex w-[340px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-[#1e1e1e] px-4 py-3">
              <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                Asistente Pegasus
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar asistente"
                className="text-white/60 transition-colors hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[300px] space-y-4 overflow-y-auto p-4 text-xs text-white/80">
              <p className="rounded-xl bg-white/5 p-3">
                Bienvenido a Pegasus Pixels. ¿En qué sector opera su negocio en
                Punta del Este?
              </p>

              {step === 0 && (
                <div className="grid grid-cols-1 gap-2 pt-2">
                  {VERTICALS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setVertical(option);
                        setStep(1);
                      }}
                      className="rounded-lg bg-white/5 px-3 py-2 text-left transition-colors hover:bg-white/10"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {step >= 1 && (
                <div className="space-y-3 pt-2">
                  <p className="rounded-xl bg-white/5 p-3">
                    Excelente. Déjenos su número de contacto para canalizar su
                    consulta a nuestro equipo técnico por WhatsApp.
                  </p>
                  <label htmlFor={phoneId} className="sr-only">
                    Número de contacto
                  </label>
                  <div className="flex gap-2">
                    <input
                      id={phoneId}
                      type="tel"
                      inputMode="tel"
                      placeholder="Ej: +598 99 123 456"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") send();
                      }}
                      className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/30 focus:border-white/40 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={send}
                      aria-label="Enviar por WhatsApp"
                      className="rounded-lg bg-white p-2 text-black transition-colors hover:bg-white/90"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={reduce ? undefined : { scale: 1.05 }}
        whileTap={reduce ? undefined : { scale: 0.95 }}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-colors hover:bg-white/90"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </motion.button>
    </div>
  );
}
