import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ChatWidget } from "@/components/chat-widget";
import { ThemeScript } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pegasus Pixels | Infraestructura digital con base en Punta del Este",
  description:
    "Ingeniería y arquitectura de aplicaciones con estándares globales. Sede en Punta del Este, Uruguay; oferta global (EE. UU., Europa y Latinoamérica) para desarrollos inmobiliarios, concesionarias y gastronomía.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full">
        <ThemeScript />
        <NoiseOverlay />
        <SiteNav />
        {children}
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
