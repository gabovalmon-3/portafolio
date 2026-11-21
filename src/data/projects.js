// Galería de trabajos. category: 'work' | 'university' | 'freelance' | 'personal'
// pattern: textura de la portada ('grid' | 'lines' | 'dots').
// Capturas reales: poner las imágenes en /public/proyectos y agregar images: [{ src, es, en }]
export const projects = [
  {
    id: 'livo',
    title: 'LIVO',
    mark: 'LIVO',
    category: 'personal',
    pattern: 'grid',
    stack: ['Next.js 16', 'TypeScript', 'PostgreSQL + PostGIS', 'Drizzle', 'MapLibre', 'Docker'],
    images: [
      { src: './proyectos/livo-inicio.jpg', es: 'Página de inicio de LIVO', en: 'LIVO landing page' },
      { src: './proyectos/livo-mapa.jpg', es: 'Búsqueda de rides con mapa', en: 'Ride search with map' },
      { src: './proyectos/livo-publicacion.jpg', es: 'Detalle de una publicación de vivienda', en: 'Housing listing detail' },
    ],
    es: {
      summary: 'Dónde vivir, cómo moverse y con quién viajar al llegar a un lugar nuevo por una temporada.',
      detail:
        'Plataforma para temporeros, estudiantes de intercambio y nómadas: vivienda, rides compartidos y planes, todo sobre un mapa. Incluye publicaciones con fotos, filtros, mensajes, reseñas, verificación y moderación, en español, inglés y portugués. Su lanzamiento está en planificación.',
      role: 'Idea, diseño del producto y desarrollo completo, con pruebas de extremo a extremo en Playwright.',
    },
    en: {
      summary: 'Where to live, how to get around and who to travel with when you arrive somewhere new for a season.',
      detail:
        'Platform for seasonal workers, exchange students and nomads: housing, shared rides and plans, all on a map. It includes listings with photos, filters, messaging, reviews, verification and moderation, in Spanish, English and Portuguese. Its launch is being planned.',
      role: 'Concept, product design and full development, with end-to-end tests in Playwright.',
    },
  },
  {
    id: 'brakket',
    title: 'Brakket',
    mark: 'BRK',
    category: 'university',
    pattern: 'grid',
    stack: ['Spring Boot 3', 'Java 21', 'Angular 19', 'PostgreSQL', 'Docker'],
    images: [
      { src: './proyectos/brakket-juegos.jpg', es: 'Catálogo de juegos de Brakket', en: 'Brakket game catalog' },
      { src: './proyectos/brakket-torneo.jpg', es: 'Detalle de un torneo de doble eliminación', en: 'Double-elimination tournament detail' },
      { src: './proyectos/brakket-inicio.jpg', es: 'Página de presentación del proyecto', en: 'Project landing page' },
    ],
    repo: 'https://github.com/macOS-M/Brakket',
    es: {
      summary: 'Plataforma para gestionar y transmitir ligas y torneos de esports.',
      detail:
        'Proyecto del curso Proyecto de Ingeniería de Software 3, desarrollado con el equipo Coffee&Commits. Monorepo con API REST en Spring Boot, SPA en Angular, migraciones con Flyway e integración continua separada para backend y frontend.',
      role: 'Desarrollo full stack dentro de un equipo, con flujo de ramas y revisión de código.',
    },
    en: {
      summary: 'Platform to manage and broadcast esports leagues and tournaments.',
      detail:
        'Built for the Software Engineering Project 3 course with the Coffee&Commits team. Monorepo with a Spring Boot REST API, an Angular SPA, Flyway migrations and separate CI pipelines for backend and frontend.',
      role: 'Full-stack development inside a team, with a branching workflow and code review.',
    },
  },
  {
    id: 'garage-toolbox',
    title: 'Garage Toolbox',
    mark: 'GT',
    category: 'personal',
    pattern: 'lines',
    stack: ['Astro', 'TypeScript', 'Flutter', 'SQLite'],
    images: [
      { src: './proyectos/garage-inicio.jpg', es: 'Página de inicio de Garage Toolbox', en: 'Garage Toolbox home page' },
      { src: './proyectos/garage-wheelfit.jpg', es: 'WheelFit: visualizador de aros y llantas', en: 'WheelFit: wheel and tire visualizer' },
      { src: './proyectos/garage-comparacion.jpg', es: 'Comparación de medidas de llanta', en: 'Tire size comparison' },
    ],
    es: {
      summary: 'Calculadoras automotrices: llantas, aros, ajuste y consumo de combustible.',
      detail:
        'Producto independiente sin backend ni cuentas. Las fórmulas se definen una sola vez en casos de prueba compartidos que deben pasar tanto el motor en TypeScript como el de Dart.',
      role: 'Producto propio: planificación, motor de cálculo y sitio web.',
    },
    en: {
      summary: 'Automotive calculators: tires, wheels, fitment and fuel consumption.',
      detail:
        'Independent product with no backend and no accounts. The formulas are defined once as shared test fixtures that both the TypeScript and the Dart engines must pass.',
      role: 'Own product: planning, calculation engine and website.',
    },
  },
  {
    id: 'cs-app',
    title: 'Cinco Siete AI',
    mark: '57',
    category: 'work',
    pattern: 'dots',
    stack: ['TypeScript', 'Python', 'PostgreSQL', 'Docker', 'IA'],
    es: {
      summary: 'Aplicación principal de la empresa: plataforma de inteligencia política y regulatoria con IA.',
      detail:
        'La plataforma monitorea proyectos de ley, decretos, consultas y noticias, y usa inteligencia artificial para avisar a las empresas qué les puede afectar. Es el producto central de Cinco Siete AI y está en evolución constante.',
      role: 'Desarrollo, implementación y mantenimiento constante de nuevas tecnologías dentro de la aplicación.',
    },
    en: {
      summary: "The company's main application: an AI-powered political and regulatory intelligence platform.",
      detail:
        'The platform monitors bills, decrees, consultations and news, and uses artificial intelligence to alert companies about what may affect them. It is the core product of Cinco Siete AI and is constantly evolving.',
      role: 'Development, implementation and ongoing maintenance of new technologies within the application.',
    },
  },
  {
    id: 'cs-crm',
    title: 'CRM interno',
    titleEn: 'Internal CRM',
    mark: 'CRM',
    category: 'work',
    pattern: 'grid',
    stack: ['TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    es: {
      summary: 'Herramientas internas tipo CRM para gestionar clientes y procesos del equipo.',
      detail:
        'Herramientas internas de Cinco Siete AI, tipo CRM, que ordenan la información de clientes y el seguimiento del trabajo del equipo.',
      role: 'Desarrollo full stack: modelo de datos, servicios de backend e interfaz.',
    },
    en: {
      summary: 'Internal CRM-style tools to manage clients and team processes.',
      detail:
        "Internal CRM-style tools at Cinco Siete AI that organize client information and the team's work tracking.",
      role: 'Full-stack development: data model, backend services and interface.',
    },
  },
  {
    id: 'cs-audiovisual',
    title: 'Edición audiovisual',
    titleEn: 'Audiovisual editing',
    mark: 'AV',
    category: 'work',
    pattern: 'lines',
    stack: ['Python', 'TypeScript', 'Docker'],
    es: {
      summary: 'Aplicaciones internas para editar y producir contenido audiovisual.',
      detail:
        'Herramientas internas de Cinco Siete AI que apoyan al equipo en la edición y producción de material audiovisual, automatizando pasos repetitivos del flujo de trabajo.',
      role: 'Desarrollo full stack de la aplicación y de sus procesos de automatización.',
    },
    en: {
      summary: 'Internal applications to edit and produce audiovisual content.',
      detail:
        'Internal Cinco Siete AI tools that support the team in editing and producing audiovisual material, automating repetitive steps of the workflow.',
      role: 'Full-stack development of the application and its automation processes.',
    },
  },
  {
    id: 'juego-rts',
    title: 'Juego RTS',
    mark: 'RTS',
    category: 'university',
    pattern: 'dots',
    stack: ['Unity (URP)', 'C#', 'Builder', 'Command', 'Strategy'],
    repo: 'https://github.com/gabovalmon-3/JuegoRTS',
    es: {
      summary: 'Prototipo de estrategia en tiempo real construido con patrones de diseño.',
      detail:
        'Proyecto del curso Programación con Patrones. Incluye control de cámara, selección múltiple de unidades, economía básica, construcciones y un sistema de enemigos por oleadas.',
      role: 'Aplicación de los patrones Builder, Command y Strategy a mecánicas reales de juego.',
    },
    en: {
      summary: 'Real-time strategy prototype built around design patterns.',
      detail:
        'Built for the Programming with Patterns course. It includes camera control, multi-unit selection, a basic economy, buildings and a wave-based enemy system.',
      role: 'Applying the Builder, Command and Strategy patterns to real game mechanics.',
    },
  },
  {
    id: 'cenfocinemas',
    title: 'CenfoCinemas',
    mark: 'CNF',
    category: 'university',
    pattern: 'lines',
    stack: ['C#', '.NET', 'SQL Server', 'JavaScript', 'HTML/CSS'],
    repo: 'https://github.com/gabovalmon-3/CenfoCinemas',
    es: {
      summary: 'Sistema web de cine con API en C#, SQL Server y frontend en JavaScript.',
      detail:
        'Aplicación por capas: API en .NET, acceso a datos con procedimientos almacenados en SQL Server y una interfaz web en HTML, CSS y JavaScript que consume la API.',
      role: 'Diseño de la base de datos, la API y la interfaz.',
    },
    en: {
      summary: 'Cinema web system with a C# API, SQL Server and a JavaScript frontend.',
      detail:
        'Layered application: a .NET API, data access through SQL Server stored procedures and an HTML, CSS and JavaScript interface that consumes the API.',
      role: 'Database, API and interface design.',
    },
  },
  {
    id: 'quantumpay',
    title: 'QuantumPay',
    mark: 'QP',
    category: 'university',
    pattern: 'grid',
    stack: ['C#', '.NET', 'SQL Server', 'JavaScript'],
    es: {
      summary: 'Billetera digital con roles de cliente, comercio, banco y administrador.',
      detail:
        'Proyecto universitario en equipo. Maneja transacciones, comisiones de banco y comercio, promociones y edición de perfil con mapa, además de verificación por correo, SMS y reconocimiento facial. Arquitectura por capas: API en .NET, lógica de negocio separada, SQL Server y frontend web en JavaScript.',
      role: 'Desarrollo de backend y frontend dentro del equipo.',
    },
    en: {
      summary: 'Digital wallet with customer, merchant, bank and admin roles.',
      detail:
        'University team project. It handles transactions, bank and merchant commissions, promotions and profile editing with a map, plus email, SMS and face-recognition verification. Layered architecture: .NET API, separate business logic, SQL Server and a JavaScript web frontend.',
      role: 'Backend and frontend development within the team.',
    },
  },
  {
    id: 'crud-fullstack',
    title: 'CRUD Full Stack',
    mark: 'CRUD',
    category: 'university',
    pattern: 'dots',
    stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'SCSS'],
    repo: 'https://github.com/gabovalmon-3/tarea1-crud-backend',
    es: {
      summary: 'API REST en Java y cliente en Angular para operaciones CRUD.',
      detail:
        'Dos repositorios: un backend en Java con Spring Boot que expone la API y un frontend en Angular con TypeScript y SCSS que la consume.',
      role: 'Desarrollo individual de backend y frontend.',
    },
    en: {
      summary: 'Java REST API and Angular client for CRUD operations.',
      detail:
        'Two repositories: a Java Spring Boot backend exposing the API and an Angular frontend in TypeScript and SCSS that consumes it.',
      role: 'Individual backend and frontend development.',
    },
  },
  {
    id: 'redes',
    title: 'Laboratorios de redes',
    titleEn: 'Networking labs',
    mark: 'NET',
    category: 'university',
    pattern: 'lines',
    stack: ['Cisco Packet Tracer', 'IOS', 'Enrutamiento estático', 'RIP'],
    es: {
      summary: 'Topologías de red configuradas y documentadas en Cisco Packet Tracer.',
      detail:
        'Prácticas de los cursos de redes y telemática: direccionamiento, configuración de routers y switches con Cisco IOS, enrutamiento estático y dinámico con RIP, y verificación de conectividad.',
      role: 'Diseño de la topología, configuración y documentación de cada práctica.',
    },
    en: {
      summary: 'Network topologies configured and documented in Cisco Packet Tracer.',
      detail:
        'Labs from the networking and telematics courses: addressing, router and switch configuration with Cisco IOS, static and dynamic routing with RIP, and connectivity checks.',
      role: 'Topology design, configuration and documentation for each lab.',
    },
  },
  {
    id: 'qr-menu',
    title: 'QR Menu Pro',
    mark: 'QR',
    category: 'freelance',
    pattern: 'dots',
    stack: ['Next.js', 'Fastify', 'SQL Server', 'Stripe'],
    es: {
      summary: 'Menú digital por código QR con pedidos y pagos en línea para restaurantes.',
      detail:
        'Sistema de menú y pedidos: el cliente escanea un QR, arma su orden y paga con Stripe. Frontend en Next.js, API en Fastify y datos en SQL Server.',
      role: 'Desarrollo completo: modelo de datos, API, interfaz y pagos.',
    },
    en: {
      summary: 'QR-code digital menu with online ordering and payments for restaurants.',
      detail:
        'Menu and ordering system: the customer scans a QR code, builds an order and pays with Stripe. Next.js frontend, Fastify API and SQL Server data.',
      role: 'End-to-end development: data model, API, interface and payments.',
    },
  },
];

export const categories = ['all', 'work', 'university', 'freelance', 'personal'];
