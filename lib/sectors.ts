import { Building2, Car, UtensilsCrossed, type LucideIcon } from "lucide-react";

export type Sector = {
  id: string;
  /** URL slug for the sector's dedicated page (`/<slug>`). */
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  /** Background photography served from `public/sectores/`. */
  image: string;
  /** `object-position` for the background image (default `50% 50%`). */
  imagePosition?: string;
  /** Long-form description revealed when the card is expanded. */
  body?: string;
  samples: { title: string; desc: string }[];
};

export const SECTORS: Sector[] = [
  {
    id: "inmobiliarias",
    slug: "inmobiliarias",
    icon: Building2,
    title: "Desarrollos Inmobiliarios",
    subtitle: "Plataformas para portales y fichas de propiedades de alta gama.",
    image: "/sectores/inmobiliarias.jpg",
    body: "Plataformas para captar inversores globales (EE. UU., Europa y Latinoamérica). Galerías inmersivas, selector multidivisa (USD, EUR, UYU, ARS) y búsqueda instantánea por zona exclusiva. Fichas técnicas, planos y contacto directo con brokers por WhatsApp.",
    samples: [
      {
        title: "Ficha inmersiva de propiedad",
        desc: "Galería a pantalla completa, selector multidivisa (USD/UYU/ARS) y acceso directo a WhatsApp para visitas privadas.",
      },
      {
        title: "Buscador inteligente por zonas",
        desc: "Filtros instantáneos por La Barra, Manantiales y Punta Ballena con velocidad de carga inmediata.",
      },
      {
        title: "Landing bilingüe para inversores",
        desc: "Estructuras optimizadas para capitales de Buenos Aires y São Paulo con descarga de planos y dossiers.",
      },
      {
        title: "Dossier de inversión descargable",
        desc: "Ficha, planos y proyección de renta en un PDF listo para enviar al cliente.",
      },
    ],
  },
  {
    id: "car-dealers",
    slug: "concesionarias",
    icon: Car,
    title: "Concesionarias",
    subtitle: "Showrooms digitales y catálogos de vehículos exclusivos.",
    image: "/sectores/car-dealers.jpg",
    body: "Showrooms digitales de alto contraste para concesionarias de vehículos exclusivos, con despliegue en cualquier mercado. Galerías en estudio, calculadora de financiación, tasación de permutas y contacto directo con ventas.",
    samples: [
      {
        title: "Grilla de inventario dinámico",
        desc: "Fichas técnicas para SUVs y vehículos de alta gama con calculadora de financiación integrada.",
      },
      {
        title: "Detalle de vehículo y tasación",
        desc: "Carrusel fotográfico de precisión, formulario de permuta y canalización directa al equipo de ventas.",
      },
      {
        title: "Showroom de estética oscura",
        desc: "Diseños minimalistas de alto contraste con reserva online y sistemas de citas.",
      },
      {
        title: "Comparador de modelos",
        desc: "Fichas lado a lado con especificaciones, financiación y disponibilidad en tiempo real.",
      },
    ],
  },
  {
    id: "gastronomia",
    slug: "gastronomia",
    icon: UtensilsCrossed,
    title: "Gastronomía",
    subtitle: "Experiencias, cartas digitales y reservas privadas.",
    image: "/sectores/gastronomia.jpg",
    imagePosition: "50% 40%",
    body: "Plataformas para restaurantes, paradores y beach clubs de Punta del Este y destinos premium de cualquier región. Cartas digitales ultrarrápidas, reservas por turno y comensales, y concierge por WhatsApp para la temporada alta y la retención local todo el año.",
    samples: [
      {
        title: "Menú móvil ultrarrápido",
        desc: "Optimizado para el visitante en movimiento, con categorías fluidas y etiquetas de especialidades.",
      },
      {
        title: "Sistema de reservas integrado",
        desc: "Gestión directa de mesas por horarios, turnos y cantidad de comensales sin fricción.",
      },
      {
        title: "Landing de Parador / Beach Club",
        desc: "Calendario de eventos exclusivos, cartas VIP y enlace directo al servicio de concierge.",
      },
      {
        title: "Carta con fotografía profesional",
        desc: "Cada plato en alta resolución, con etiquetas de alérgenos y sugerencias de maridaje.",
      },
    ],
  },
];
