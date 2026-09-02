"use client";

import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MessageSquare, X, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const INDUSTRIES = [
  "Inmobiliarias",
  "Car Dealers",
  "Gastronomía",
  "Otro sector selecto",
];

const PAINS = [
  "Nuestra web actual es lenta y perdemos clientes frente a la competencia.",
  "Necesitamos captar mejor al inversor/turista internacional y automatizar leads.",
  "Ya usamos una plataforma pero estamos frustrados con el rendimiento o soporte.",
  "Queremos cotizar un desarrollo completamente a medida desde cero.",
];

const TIMELINES: { label: string; tag: string }[] = [
  { label: "Lo antes posible (Urgente / Pre-temporada)", tag: "Hot Lead" },
  { label: "Estamos planificando el próximo trimestre", tag: "Warm Lead" },
  { label: "Solo explorando opciones por ahora", tag: "Early Stage" },
];

function Bot({ children }: { children: React.ReactNode }) {
  return <p className="rounded-xl bg-foreground/5 p-3 text-foreground/80">{children}</p>;
}

function Me({ children }: { children: React.ReactNode }) {
  return (
    <p className="ml-6 rounded-xl bg-accent/15 p-3 text-right text-accent">
      {children}
    </p>
  );
}

function Options({
  items,
  onSelect,
}: {
  items: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 pt-1">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className="rounded-lg bg-foreground/5 px-3 py-2 text-left leading-snug text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function ChatWidget() {
  const reduce = useReducedMotion();
  const contactId = useId();
  const [open, setOpen] = useState(false);
  const [industry, setIndustry] = useState<string | null>(null);
  const [pain, setPain] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<(typeof TIMELINES)[number] | null>(
    null,
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const step = !industry ? 1 : !pain ? 2 : !timeline ? 3 : 4;
  const canSend = name.trim() !== "" && phone.trim() !== "";

  // Let other sections (e.g. the Agente pitch) pop the widget open.
  useEffect(() => {
    const openAgente = () => setOpen(true);
    window.addEventListener("pegasus:open-agente", openAgente);
    return () => window.removeEventListener("pegasus:open-agente", openAgente);
  }, []);

  const send = () => {
    if (!canSend) return;
    const message = [
      "Hola, escribo desde el Agente de Pegasus Pixels.",
      "",
      `Sector: ${industry}`,
      `Desafío: ${pain}`,
      `Horizonte: ${timeline?.label} [${timeline?.tag}]`,
      `Nombre: ${name.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      ...(email.trim() ? [`Email: ${email.trim()}`] : []),
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
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
            aria-label="Agente Pegasus Pixels"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute bottom-16 right-0 flex w-[340px] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-surface-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-foreground/10 bg-surface px-4 py-3">
              <span className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                Agente Pegasus Pixels
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar Agente"
                className="text-foreground/60 transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[380px] space-y-3 overflow-y-auto p-4 text-xs">
              <Bot>
                Bienvenido a Pegasus Pixels. ¿En qué sector opera su negocio?
              </Bot>
              {industry && <Me>{industry}</Me>}
              {step === 1 && (
                <Options items={INDUSTRIES} onSelect={setIndustry} />
              )}

              {step >= 2 && (
                <Bot>
                  ¿Qué desafío principal buscamos resolver en su operativa?
                </Bot>
              )}
              {pain && <Me>{pain}</Me>}
              {step === 2 && <Options items={PAINS} onSelect={setPain} />}

              {step >= 3 && (
                <Bot>
                  ¿Cuál es el horizonte de tiempo para implementar esta mejora?
                </Bot>
              )}
              {timeline && <Me>{timeline.label}</Me>}
              {step === 3 && (
                <Options
                  items={TIMELINES.map((t) => t.label)}
                  onSelect={(label) =>
                    setTimeline(
                      TIMELINES.find((t) => t.label === label) ?? null,
                    )
                  }
                />
              )}

              {step === 4 && (
                <div className="space-y-3">
                  <Bot>
                    Perfecto. Para enviarle casos de estudio específicos de su
                    sector y coordinar una charla directa, por favor déjenos sus
                    datos:
                  </Bot>
                  <label htmlFor={`${contactId}-name`} className="sr-only">
                    Nombre
                  </label>
                  <input
                    id={`${contactId}-name`}
                    type="text"
                    autoComplete="name"
                    placeholder="Nombre"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-lg border border-foreground/10 bg-foreground/[0.05] px-3 py-2 text-foreground placeholder-foreground/30 focus:border-foreground/40 focus:outline-none"
                  />
                  <label htmlFor={`${contactId}-phone`} className="sr-only">
                    Teléfono o WhatsApp
                  </label>
                  <input
                    id={`${contactId}-phone`}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Teléfono / WhatsApp"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full rounded-lg border border-foreground/10 bg-foreground/[0.05] px-3 py-2 text-foreground placeholder-foreground/30 focus:border-foreground/40 focus:outline-none"
                  />
                  <label htmlFor={`${contactId}-email`} className="sr-only">
                    Email (opcional)
                  </label>
                  <input
                    id={`${contactId}-email`}
                    type="email"
                    autoComplete="email"
                    placeholder="Email (opcional)"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") send();
                    }}
                    className="w-full rounded-lg border border-foreground/10 bg-foreground/[0.05] px-3 py-2 text-foreground placeholder-foreground/30 focus:border-foreground/40 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={send}
                    disabled={!canSend}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-3 py-2.5 font-medium text-background transition duration-150 ease-out hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:active:scale-100"
                  >
                    Conectar con un especialista
                    <ArrowRight className="h-4 w-4" />
                  </button>
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
        aria-label={open ? "Cerrar Agente" : "Agente"}
        title="Agente"
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg transition-colors hover:bg-accent-hover"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </motion.button>
    </div>
  );
}
