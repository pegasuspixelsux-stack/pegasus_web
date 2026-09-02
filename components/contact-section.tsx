"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const EMAIL = "contacto@pegasuspixels.com";
const PHONE_DISPLAY = "+598 99 000 000";
const PHONE_HREF = "+59899000000";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none";

export function ContactSection() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const canSubmit =
    name.trim() !== "" && (email.trim() !== "" || phone.trim() !== "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;
    const lines = [
      "Hola, escribo desde el formulario de Pegasus Pixels.",
      "",
      `Nombre: ${name.trim()}`,
      ...(email.trim() ? [`Email: ${email.trim()}`] : []),
      ...(phone.trim() ? [`Teléfono / WhatsApp: ${phone.trim()}`] : []),
      ...(message.trim() ? [`Mensaje: ${message.trim()}`] : []),
    ];
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-16 border-t border-white/10 bg-[#0c0c0c] px-6 py-24 lg:px-24 lg:py-32"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24"
      >
        <div>
          <h2 className="text-3xl font-light tracking-tight text-white/90 md:text-4xl">
            Contacto directo
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            Atención personalizada para proyectos selectos. Escríbanos y
            coordinamos una charla directa con el equipo.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <a
                href={`mailto:${EMAIL}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <a
                href={`tel:${PHONE_HREF}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <a
                href={buildWhatsAppUrl({ vertical: "general" })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                Chat directo por WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <span className="text-white/70">
                Lunes a viernes, 09:00 a 19:00 (UYT)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <span className="text-white/70">
                Punta del Este y Maldonado, Uruguay
              </span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-white/10 bg-[#121212] p-2.5"
        >
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/15 text-sky-400">
                <Check className="h-6 w-6" />
              </div>
              <p className="text-white/80">
                Abrimos WhatsApp con su mensaje. Le respondemos a la brevedad.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="text-xs uppercase tracking-wider text-white/50 transition-colors hover:text-white"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="cf-name" className="sr-only">
                  Nombre y apellido
                </label>
                <input
                  id="cf-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Nombre y apellido"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="cf-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cf-phone" className="sr-only">
                  Teléfono o WhatsApp
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Teléfono / WhatsApp"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="cf-message" className="sr-only">
                  Mensaje o detalles del proyecto
                </label>
                <textarea
                  id="cf-message"
                  rows={4}
                  placeholder="Mensaje / detalles del proyecto"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 py-4 text-[1rem] font-medium text-black transition-colors hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                enviar consulta
                <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </motion.div>
    </section>
  );
}
