/** Icon keys resolved to lucide components in components/vertical-landing.tsx. */
export type BenefitIcon =
  | "landmark"
  | "smartphone"
  | "dashboard"
  | "wallet"
  | "package"
  | "workflow"
  | "sliders";

/** "Agente" 24/7 concierge section, one per vertical landing page. */
export type AgenteData = {
  eyebrow: string;
  h2: string;
  intro: string;
  advantages: {
    /** target | clock | messages | sparkles | heart | gauge */
    icon: string;
    title: string;
    body: string;
  }[];
  /** Public path to the funnel screenshot; omit to show an upload stub. */
  screenshot?: string;
  screenshotHint?: string;
};

export type VerticalLandingData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    /** Leading substring of `h1` rendered in the accent color. */
    h1Accent?: string;
    lead: string;
  };
  /** Faux-platform card shown in the hero right column. */
  mockup: {
    image: string;
    imagePosition?: string;
    chip: string;
    cardTitle: string;
    cardSubtitle: string;
  };
  control: { eyebrow: string; h2: string; body: string };
  benefits: {
    eyebrow: string;
    h2: string;
    items: { title: string; body: string; icon: BenefitIcon }[];
  };
  comparison: {
    eyebrow: string;
    h2: string;
    before: { label: string; title: string; body: string };
    after: { label: string; title: string; body: string };
  };
  cta: {
    eyebrow: string;
    h2: string;
    body: string;
    button: string;
    /** `vertical` label passed to buildWhatsAppUrl. */
    whatsappVertical: string;
  };
  agente: AgenteData;
};

export const VERTICAL_LANDINGS: Record<string, VerticalLandingData> = {
  inmobiliarias: {
    slug: "inmobiliarias",
    metaTitle: "Desarrollos Inmobiliarios | Pegasus Pixels",
    metaDescription:
      "Infraestructura comercial para inmobiliarias y desarrolladores: catálogo propio, selector multidivisa, captación directa por WhatsApp y autonomía operativa total.",
    hero: {
      h1: "Infraestructura comercial para inmobiliarias y desarrolladores",
      h1Accent: "Infraestructura comercial",
      lead: "Dejá de depender de portales genéricos que te cobran comisiones abusivas y te entregan leads fríos. Te damos tu propia infraestructura digital de alta gama para que tu inmobiliaria controle su inventario, proyecte una imagen de exclusividad absoluta y cierre más operaciones.",
    },
    mockup: {
      image: "/sectores/inmobiliarias.jpg",
      chip: "USD · UYU · ARS",
      cardTitle: "Penthouse · La Barra",
      cardSubtitle: "USD 1.240.000 · 3 suites · 240 m²",
    },
    control: {
      eyebrow: "Cartera y marca",
      h2: "Control total de tu cartera y marca",
      body: "Implementamos un sistema propio con tu propia identidad visual. Olvidate de compartir espacio con la competencia en webs saturadas; acá el protagonista absoluto es tu catálogo de propiedades y la reputación de tu empresa.",
    },
    benefits: {
      eyebrow: "Beneficios clave",
      h2: "Lo que gana tu inmobiliaria con infraestructura propia",
      items: [
        {
          icon: "landmark",
          title: "Cierres ágiles con capital externo",
          body: "Presentá masterplans interactivos, fichas inmersivas y selectores multidivisa en tiempo real (USD, UYU, ARS) que eliminan las dudas del comprador de alto poder adquisitivo.",
        },
        {
          icon: "smartphone",
          title: "Velocidad y adaptabilidad total",
          body: "Carga instantánea en cualquier smartphone. Tus agentes inmobiliarios pueden mostrar el inventario actualizado desde cualquier lugar, durante una obra o reunión presencial.",
        },
        {
          icon: "dashboard",
          title: "Autonomía operativa absoluta",
          body: "Panel de administración interno ultrarrápido para cargar, modificar o retirar propiedades en segundos, sin dependencias de terceros ni mantenimientos mensuales absurdos.",
        },
      ],
    },
    comparison: {
      eyebrow: "Antes vs. ahora",
      h2: "¿Qué cambia al implementar esta arquitectura?",
      before: {
        label: "Antes",
        title: "Portales lentos y dependencia",
        body: "Leads repartidos entre decenas de inmobiliarias, costos altos por aviso destacado y plataformas lentas que frustran al cliente.",
      },
      after: {
        label: "Ahora",
        title: "Tu propio sistema de alta conversión",
        body: "Infraestructura exclusiva, consultas canalizadas directamente a tus vendedores por WhatsApp y estética prémium que justifica comisiones más altas.",
      },
    },
    cta: {
      eyebrow: "Siguiente paso",
      h2: "¿Listo para escalar tu inmobiliaria?",
      body: "Coordiná una llamada directa para implementar la infraestructura que tu negocio necesita para cerrar más operaciones.",
      button: "Hablar por WhatsApp",
      whatsappVertical: "Desarrollos Inmobiliarios",
    },
    agente: {
      eyebrow: "Agente · Concierge 24/7",
      h2: "El concierge que califica cada consulta, a cualquier hora",
      intro:
        "Agente es un embudo de calificación interactivo y multi-paso. En lugar de un formulario que nadie completa, conduce a cada visitante por preguntas cortas —intención, presupuesto, zona, plazo— y entrega un lead calificado a tu equipo de ventas.",
      advantages: [
        {
          icon: "target",
          title: "Calificación de precisión",
          body: "Pre-califica cada consulta por intención, presupuesto, zona y plazo, y vuelca datos limpios directo al pipeline de ventas.",
        },
        {
          icon: "clock",
          title: "Disponibilidad global 24/7",
          body: "Capta al inversor extranjero y al comprador de alto patrimonio en cualquier huso horario, sin esperas ni horarios de oficina.",
        },
        {
          icon: "messages",
          title: "Fin de los formularios estáticos",
          body: "Reemplaza el formulario que nadie completa por una conversación guiada que retiene al visitante en lugar de dejarlo ir.",
        },
        {
          icon: "sparkles",
          title: "Diferenciación de mercado",
          body: "Un concierge digital a medida distingue a tu inmobiliaria de la competencia atada a los portales genéricos.",
        },
      ],
      screenshot: "/sectores/agente_1.png",
    },
  },

  gastronomia: {
    slug: "gastronomia",
    metaTitle: "Sector Gastronómico | Pegasus Pixels",
    metaDescription:
      "Infraestructura digital para restaurantes y polos gastronómicos: sistema de pedidos y reservas propio, sin comisiones, con tu identidad visual y gestión de stock en tiempo real.",
    hero: {
      h1: "Infraestructura digital para restaurantes y polo gastronómico",
      h1Accent: "Infraestructura digital",
      lead: "Dejá de regalar hasta el treinta por ciento de tu rentabilidad a las aplicaciones de delivery tradicionales y de depender de algoritmos ajenos. Te entregamos un sistema de pedidos y reservas propio, rápido y con tu identidad visual, diseñado para blindar tu margen de ganancia y fidelizar a tu clientela.",
    },
    mockup: {
      image: "/sectores/gastronomia.jpg",
      imagePosition: "50% 40%",
      chip: "Carta digital · Pedido directo",
      cardTitle: "Tiradito de corvina",
      cardSubtitle: "$ 1.190 · Entradas · 12 min",
    },
    control: {
      eyebrow: "Canales y marca",
      h2: "Control total de tus canales de venta y marca",
      body: "Implementamos una plataforma propia conectada directamente a tus canales de mensajería y gestión interna. Olvidate de compartir espacio con la competencia en marketplaces saturados; acá el protagonista absoluto es la identidad de tu local y la experiencia de tu cliente.",
    },
    benefits: {
      eyebrow: "Beneficios clave",
      h2: "Lo que gana tu local con infraestructura propia",
      items: [
        {
          icon: "wallet",
          title: "Cero comisiones por pedido",
          body: "Cada orden procesada mediante tu plataforma va directo a tu operación. Eliminá intermediarios y recuperá el margen operativo que las aplicaciones de terceros erosionan cada mes.",
        },
        {
          icon: "smartphone",
          title: "Pedidos ágiles desde cualquier dispositivo",
          body: "Carta digital de carga instantánea optimizada para smartphones. Ideal para que los comensales consulten el menú, pidan a la mesa o soliciten delivery sin fricciones ni esperas.",
        },
        {
          icon: "package",
          title: "Gestión de stock en tiempo real",
          body: "Panel de administración ultrarrápido para actualizar platos, modificar precios o pausar ítems agotados en segundos, sin dependencias externas ni costos de mantenimiento absurdos.",
        },
      ],
    },
    comparison: {
      eyebrow: "Antes vs. ahora",
      h2: "¿Qué cambia al implementar esta arquitectura?",
      before: {
        label: "Antes",
        title: "Apps de delivery masivas y costosas",
        body: "Comisiones abusivas por cada ticket, pérdida de la relación directa con el cliente y plataformas lentas que diluyen tu marca.",
      },
      after: {
        label: "Ahora",
        title: "Tu propio canal de venta directo",
        body: "Infraestructura exclusiva, pedidos canalizados sin intermediarios y una estética prémium que eleva la propuesta gastronómica.",
      },
    },
    cta: {
      eyebrow: "Siguiente paso",
      h2: "¿Listo para escalar tu propuesta gastronómica?",
      body: "Coordiná una llamada directa para implementar la infraestructura que tu negocio necesita para maximizar su rentabilidad.",
      button: "Hablar por WhatsApp",
      whatsappVertical: "Gastronomía",
    },
    agente: {
      eyebrow: "Agente · Asistente de menú y pedidos 24/7",
      h2: "El asistente de menú y pedidos que eleva la experiencia del comensal",
      intro:
        "Agente interactúa con cada visitante para descubrir sus antojos, presentar el menú disponible y guiarlo paso a paso —reserva, pedido anticipado o delivery— convirtiendo la visita a la web en una interacción memorable y automatizada.",
      advantages: [
        {
          icon: "messages",
          title: "Guía interactiva del menú en tiempo real",
          body: "Interactúa directamente con los comensales para descubrir sus antojos, presentarles las opciones disponibles del menú y ayudarlos a elegir paso a paso qué van a comer o beber.",
        },
        {
          icon: "gauge",
          title: "Atención y toma de decisiones sin esperas",
          body: "Ideal para captar reservas, coordinar pedidos anticipados o guiar a clientes indecisos a cualquier hora, optimizando la rotación y el flujo de atención del salón o del delivery.",
        },
        {
          icon: "heart",
          title: "Personalización y captura de preferencias",
          body: "Registra los gustos, restricciones alimentarias y selecciones del usuario, permitiendo a la marca conocer mejor a su clientela y hacer un seguimiento comercial o de fidelización efectivo.",
        },
        {
          icon: "sparkles",
          title: "Ventaja competitiva única",
          body: "Diferencia a tu restaurante o polo gastronómico con una experiencia de bienvenida digital sofisticada que las webs tradicionales del sector no pueden igualar.",
        },
      ],
      screenshotHint: "public/sectores/agente_gastronomia.png",
    },
  },

  concesionarias: {
    slug: "concesionarias",
    metaTitle: "Concesionarias y Automoción | Pegasus Pixels",
    metaDescription:
      "Infraestructura digital y catálogo de alta gama para concesionarias: showroom digital inmersivo, ecosistema multicanal unificado y control total del inventario.",
    hero: {
      h1: "Infraestructura digital y catálogo de alta gama para concesionarias",
      h1Accent: "Infraestructura digital",
      lead: "La primera impresión que un cliente tiene de tu concesionaria ya no ocurre en tu salón de ventas físico, sino en la pantalla de su teléfono. En un mercado automotriz profundamente fragmentado, te entregamos un sistema centralizado de inventario y conversión que diferencia tu marca, unifica tu presencia digital y acelera cada cierre.",
    },
    mockup: {
      image: "/sectores/car-dealers.jpg",
      chip: "Ficha técnica · Financiación",
      cardTitle: "BMW X6 M · 2024",
      cardSubtitle: "USD 145.000 · 0 km · Reservado",
    },
    control: {
      eyebrow: "Contexto de industria",
      h2: "El mercado está segmentado. Tu ventaja competitiva empieza en la digitalización.",
      body: "Las agencias tradicionales compiten en un entorno saturado con fichas desorganizadas, fotos de baja calidad y redes sociales desconectadas. Implementar una arquitectura digital propia te permite proyectar una imagen de sofisticación absoluta, eliminando el ruido de la competencia y posicionando tu inventario en el nivel que tus clientes de alto poder adquisitivo exigen.",
    },
    benefits: {
      eyebrow: "Beneficios clave",
      h2: "Lo que gana tu concesionaria con infraestructura propia",
      items: [
        {
          icon: "workflow",
          title: "Ecosistema uniforme y planificado",
          body: "Sincronizamos tu sitio web, publicaciones en redes sociales y campañas publicitarias bajo una misma línea visual y estratégica. Guía al cliente a través de un embudo limpio y sin fricciones, desde el primer impacto hasta la venta final.",
        },
        {
          icon: "smartphone",
          title: "Tu vidriera principal en el celular",
          body: "Fichas técnicas detalladas, galerías fotográficas en alta resolución y selectores de financiación optimizados para ofrecer una experiencia visual impecable en cualquier smartphone.",
        },
        {
          icon: "sliders",
          title: "Autonomía operativa absoluta",
          body: "Un panel de administración interno ultrarrápido para publicar nuevos ingresos, actualizar precios o marcar vehículos como reservados en segundos, sin intermediarios ni dependencias técnicas.",
        },
      ],
    },
    comparison: {
      eyebrow: "Antes vs. ahora",
      h2: "¿Qué cambia al implementar esta arquitectura?",
      before: {
        label: "Antes",
        title: "Presencia fragmentada y redes desorganizadas",
        body: "Clientes dispersos navegando por catálogos lentos, publicaciones sin estrategia uniforme y consultas que se pierden entre múltiples plataformas.",
      },
      after: {
        label: "Ahora",
        title: "Un embudo limpio y centralizado",
        body: "Infraestructura exclusiva, identidad visual perfectamente estandarizada y leads directos al equipo de ventas por WhatsApp.",
      },
    },
    cta: {
      eyebrow: "Siguiente paso",
      h2: "¿Listo para liderar el sector automotriz de la región?",
      body: "Coordiná una llamada directa para implementar la infraestructura digital que tu concesionaria necesita para diferenciarse y cerrar más operaciones.",
      button: "Hablar por WhatsApp",
      whatsappVertical: "Concesionarias",
    },
    agente: {
      eyebrow: "Agente · Concierge comercial 24/7",
      h2: "El concierge comercial 24/7 que revoluciona el sector automotor",
      intro:
        "Agente guía al comprador por un embudo inteligente —qué vehículo busca, qué presupuesto maneja, si quiere agendar una visita al salón o entregar un usado en permuta— y deja un lead altamente calificado en manos de tu equipo comercial.",
      advantages: [
        {
          icon: "target",
          title: "Conversión instantánea y calificación precisa",
          body: "Consulta en tiempo real modelo, presupuesto, visita al salón y permuta (trade-in), y entrega datos estructurados y accionables directo a ventas.",
        },
        {
          icon: "clock",
          title: "Disponibilidad global y nocturna",
          body: "El comprador de alta gama investiga y decide fuera del horario comercial. Agente atiende 24/7 y en cualquier huso horario, sin perder una sola consulta.",
        },
        {
          icon: "messages",
          title: "Fin de los formularios estáticos",
          body: "Reemplaza los formularios de contacto por una experiencia conversacional que captura la curiosidad del visitante y la transforma en datos listos para cerrar la venta.",
        },
        {
          icon: "sparkles",
          title: "Diferenciación absoluta frente a la competencia",
          body: "Posiciona a tu concesionaria a la vanguardia con un trato digital personalizado y de alto nivel que las webs tradicionales del sector no pueden igualar.",
        },
      ],
      screenshotHint: "public/sectores/agente_concesionarias.png",
    },
  },
};
