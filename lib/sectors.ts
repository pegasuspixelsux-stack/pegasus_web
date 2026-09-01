export type Sector = {
  id: string;
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
    title: "Inmobiliarias",
    subtitle: "Plataformas para portales y fichas de propiedades de alta gama.",
    image: "/sectores/inmobiliarias.jpg",
    body: "Arquitectura digital para captar capitales en Punta del Este, Buenos Aires y São Paulo. Galerías inmersivas en alta resolución, selectores multidivisa (USD, UYU, ARS) y búsqueda geoespacial instantánea por zonas exclusivas (La Barra, Manantiales, José Ignacio, Punta Ballena, Beverly Hills) sin recargar la página. Acceso directo a fichas técnicas, planos ejecutivos y contacto inmediato por WhatsApp con los brokers, eliminando la fricción para el inversor internacional.",
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
    ],
  },
  {
    id: "car-dealers",
    title: "Concesionarias",
    subtitle: "Showrooms digitales y catálogos de vehículos exclusivos.",
    image: "/sectores/car-dealers.jpg",
    body: "Showrooms digitales de alto contraste para exhibir y comercializar vehículos exclusivos en Maldonado. Galerías en estudio, fichas técnicas avanzadas, calculadoras de financiación y tasación de permutas que conectan al comprador directamente con el equipo de ventas. Velocidad extrema en dispositivos móviles para maximizar conversiones.",
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
    ],
  },
  {
    id: "gastronomia",
    title: "Gastronomía",
    subtitle: "Experiencias, cartas digitales y reservas privadas.",
    image: "/sectores/gastronomia.jpg",
    imagePosition: "50% 20%",
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
    ],
  },
];
