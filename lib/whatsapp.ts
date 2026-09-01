// TODO: replace with the real Pegasus Pixels WhatsApp number (country code + number, digits only).
export const WHATSAPP_NUMBER = "59899000000";

type LeadContext = {
  vertical?: string;
  phone?: string;
};

/**
 * Builds a wa.me deep link with a pre-filled Spanish message tailored to the
 * visitor's sector. Used by every CTA and by the assistant widget.
 */
export function buildWhatsAppUrl({ vertical, phone }: LeadContext = {}): string {
  const target = vertical && vertical !== "general" ? vertical : "mi proyecto";
  const lines = [
    `Hola, me interesa la infraestructura digital para ${target} en Punta del Este.`,
  ];
  if (phone && phone.trim()) {
    lines.push(`Mi contacto: ${phone.trim()}`);
  }
  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
