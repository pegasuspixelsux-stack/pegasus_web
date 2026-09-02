export type VerticalLandingData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { h1: string; lead: string };
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
    items: { title: string; body: string }[];
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
};

export const VERTICAL_LANDINGS: Record<string, VerticalLandingData> = {
  inmobiliarias: {
    slug: "inmobiliarias",
    metaTitle: "Desarrollos Inmobiliarios | Pegasus Pixels",
    metaDescription:
      "Infraestructura comercial para inmobiliarias y desarrolladores: catálogo propio, selector multidivisa, captación directa por WhatsApp y autonomía operativa total.",
    hero: {
      h1: "Infraestructura comercial para inmobiliarias y desarrolladores",
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
          title: "Cierres ágiles con capital externo",
          body: "Presentá masterplans interactivos, fichas inmersivas y selectores multidivisa en tiempo real (USD, UYU, ARS) que eliminan las dudas del comprador de alto poder adquisitivo.",
        },
        {
          title: "Velocidad y adaptabilidad total",
          body: "Carga instantánea en cualquier smartphone. Tus agentes inmobiliarios pueden mostrar el inventario actualizado desde cualquier lugar, durante una obra o reunión presencial.",
        },
        {
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
  },

  gastronomia: {
    slug: "gastronomia",
    metaTitle: "Sector Gastronómico | Pegasus Pixels",
    metaDescription:
      "Infraestructura digital para restaurantes y polos gastronómicos: sistema de pedidos y reservas propio, sin comisiones, con tu identidad visual y gestión de stock en tiempo real.",
    hero: {
      h1: "Infraestructura digital para restaurantes y polo gastronómico",
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
          title: "Cero comisiones por pedido",
          body: "Cada orden procesada mediante tu plataforma va directo a tu operación. Eliminá intermediarios y recuperá el margen operativo que las aplicaciones de terceros erosionan cada mes.",
        },
        {
          title: "Pedidos ágiles desde cualquier dispositivo",
          body: "Carta digital de carga instantánea optimizada para smartphones. Ideal para que los comensales consulten el menú, pidan a la mesa o soliciten delivery sin fricciones ni esperas.",
        },
        {
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
  },

  concesionarias: {
    slug: "concesionarias",
    metaTitle: "Concesionarias y Automoción | Pegasus Pixels",
    metaDescription:
      "Infraestructura digital y catálogo de alta gama para concesionarias: showroom digital inmersivo, ecosistema multicanal unificado y control total del inventario.",
    hero: {
      h1: "Infraestructura digital y catálogo de alta gama para concesionarias",
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
          title: "Ecosistema uniforme y planificado",
          body: "Sincronizamos tu sitio web, publicaciones en redes sociales y campañas publicitarias bajo una misma línea visual y estratégica. Guía al cliente a través de un embudo limpio y sin fricciones, desde el primer impacto hasta la venta final.",
        },
        {
          title: "Tu vidriera principal en el celular",
          body: "Fichas técnicas detalladas, galerías fotográficas en alta resolución y selectores de financiación optimizados para ofrecer una experiencia visual impecable en cualquier smartphone.",
        },
        {
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
  },
};
