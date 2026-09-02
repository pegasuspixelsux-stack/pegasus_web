import type { Metadata } from "next";
import { InmobiliariasPage } from "@/components/inmobiliarias-page";

export const metadata: Metadata = {
  title: "Desarrollos Inmobiliarios | Pegasus Pixels",
  description:
    "Infraestructura comercial para inmobiliarias y desarrolladores: catálogo propio, selector multidivisa, captación directa por WhatsApp y autonomía operativa total.",
};

export default function Page() {
  return <InmobiliariasPage />;
}
