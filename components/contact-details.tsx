import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_LOCATION,
  CONTACT_PHONES,
} from "@/lib/contact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * The institutional contact list (email, phones, WhatsApp, hours, location).
 * Shared by the home contact section and every vertical landing page.
 */
export function ContactDetails({ className }: { className?: string }) {
  return (
    <ul className={`max-w-md space-y-5 ${className ?? ""}`}>
      <li className="flex items-start gap-3">
        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-muted transition-colors hover:text-white"
        >
          {CONTACT_EMAIL}
        </a>
      </li>
      {CONTACT_PHONES.map((phone) => (
        <li key={phone.href} className="flex items-start gap-3">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
          <a
            href={`tel:${phone.href}`}
            className="text-muted transition-colors hover:text-white"
          >
            {phone.display}
            <span className="text-muted/60"> · {phone.region}</span>
          </a>
        </li>
      ))}
      <li className="flex items-start gap-3">
        <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
        <a
          href={buildWhatsAppUrl({ vertical: "general" })}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-white"
        >
          Chat directo por WhatsApp
        </a>
      </li>
      <li className="flex items-start gap-3">
        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
        <span className="text-muted">{CONTACT_HOURS}</span>
      </li>
      <li className="flex items-start gap-3">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
        <span className="text-muted">{CONTACT_LOCATION}</span>
      </li>
    </ul>
  );
}
