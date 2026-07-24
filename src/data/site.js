export const site = {
  name: 'Gustavo Adolfo Britez',
  heroName: 'Gustavo Britez',
  heroRoles: ['Egresado en Ingeniería en Informática', 'Full-Stack Developer'],
  role: 'Egresado en Ingeniería en Informática & Full-Stack Developer',
  academicStatus: 'Tesis concluida — pendiente de defensa pública',
  specialization: 'React 19, Express 5, Node.js y PostgreSQL',
  availability: 'Disponible para oportunidades',
  heroDescription:
    'Construyo aplicaciones full-stack escalables y seguras con React, Node.js y PostgreSQL. Especializado en arquitectura enterprise, auditoría legal e integridad de datos.',
  avatarPath: '/avatar.webp',
  avatarSrcSet: '/avatar.webp 576w, /avatar@2x.webp 792w',
  avatarSizes: '(max-width: 640px) 128px, 160px',
  email: 'britezgustavo844@gmail.com',
  gmailHref:
    'https://mail.google.com/mail/?view=cm&fs=1&to=britezgustavo844@gmail.com',
  phone: '(0981) 964-184',
  phoneHref: 'tel:+595981964184',
  whatsappHref: 'https://wa.me/595981964184',
  location: 'Asunción, Paraguay',
  github: 'https://github.com/GustavoAdolfoBritez',
  linkedin: 'https://www.linkedin.com/in/gustavo-britez',
  cvPath: '/cv-gustavo-adolfo-britez.pdf',
  formspreeEndpoint:
    import.meta.env.VITE_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/YOUR_FORM_ID',
}

export const starProject = {
  title: 'Sistema de Gestión Académica y Auditoría',
  subtitle: 'Tesis de Grado',
  modulesLabel: 'Módulos clave del sistema',
  description:
    'API REST en Express 5 con SPA en React 19 / TypeScript. Autenticación JWT, RBAC dinámico y validación de esquemas con Zod. Repositorio auditado con Knip y +30 migraciones.',
  imageSizes: '(max-width: 640px) 100vw, 1919px',
  imageWidth: 1024,
  imageHeight: 576,
  imageZoomWidth: 1919,
  imageZoomHeight: 1079,
  screenshots: [
    {
      id: 'dashboard',
      label: 'Panel de control',
      alt: 'Panel de control con KPIs, alertas de asistencia y visualización analítica',
      imagesByTheme: {
        light: {
          src: '/dashboard-light.webp',
          srcSet: '/dashboard-light.webp 1024w, /dashboard-light@2x.webp 1917w',
          zoom: '/dashboard-light@2x.webp',
        },
        dark: {
          src: '/dashboard-dark.webp',
          srcSet: '/dashboard-dark.webp 1024w, /dashboard-dark@2x.webp 1919w',
          zoom: '/dashboard-dark@2x.webp',
        },
      },
    },
    {
      id: 'auditoria',
      label: 'Auditoría',
      alt: 'Módulo de auditoría del sistema — filtros, bitácora y exportación PDF',
      imagesByTheme: {
        light: {
          src: '/auditoria-light.webp',
          srcSet: '/auditoria-light.webp 1024w, /auditoria-light@2x.webp 1919w',
          zoom: '/auditoria-light@2x.webp',
        },
        dark: {
          src: '/auditoria-dark.webp',
          srcSet: '/auditoria-dark.webp 1024w, /auditoria-dark@2x.webp 1919w',
          zoom: '/auditoria-dark@2x.webp',
        },
      },
    },
    {
      id: 'cierre',
      label: 'Cierre mensual',
      alt: 'Confirmación segura para cierre mensual con flujo guiado y validación bcrypt',
      imagesByTheme: {
        light: {
          src: '/cierre-light.webp',
          srcSet: '/cierre-light.webp 1024w, /cierre-light@2x.webp 1919w',
          zoom: '/cierre-light@2x.webp',
        },
        dark: {
          src: '/cierre-dark.webp',
          srcSet: '/cierre-dark.webp 1024w, /cierre-dark@2x.webp 1919w',
          zoom: '/cierre-dark@2x.webp',
        },
      },
    },
  ],
  technologies: [
    'React 19',
    'Express 5',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'Zod',
    'Docker',
  ],
  highlights: [
    'Autenticación JWT y RBAC dinámico con validación Zod',
    'Bitácora inmutable (append-only) y cierre irreversible con bcrypt',
    'Procesamiento masivo atómico con SAVEPOINTs en PostgreSQL',
  ],
  demoUrl: '#',
  demoLabel: 'Demo en vivo',
  repoUrl: '#',
  repoLabel: 'Repositorio',
  repoNote: 'Solicitar acceso',
}

export const experience = {
  type: 'Pasantía',
  company: 'Enterprise Solutions',
  role: 'Desarrollador Front-End',
  period: 'Oct — Dic 2025 · 340 hs',
  contributions: [
    'Refactoricé módulos legados en Angular y React, reduciendo duplicación y optimizando UI.',
    'Implementé lógica de IDs secuenciales en el cliente para prevenir registros duplicados.',
    'Diseñé interacciones intuitivas con controles visibles y comportamientos dinámicos en filas.',
    'Utilicé GitLab para branching, code reviews, documentación y merge requests.',
  ],
}

export const techStack = {
  Frontend: ['React 19', 'Angular', 'TailwindCSS', 'TypeScript', 'Vite'],
  Backend: ['Node.js', 'Express 5', 'REST APIs', 'JWT', 'Zod'],
  'Base de Datos': ['PostgreSQL', 'Supabase', 'Knex.js', 'SQL'],
  Herramientas: ['Docker', 'Git', 'GitLab', 'Vitest', 'Knip'],
}

/** Icon slugs from simpleicons.org — used by OrbitingSkills */
export const orbitingSkills = {
  inner: [
    { id: 'typescript', label: 'TypeScript', slug: 'typescript', color: '3178C6' },
    { id: 'tailwindcss', label: 'TailwindCSS', slug: 'tailwindcss', color: '06B6D4' },
    { id: 'vite', label: 'Vite', slug: 'vite', color: '646CFF' },
  ],
  middle: [
    { id: 'react', label: 'React 19', slug: 'react', color: '61DAFB' },
    { id: 'angular', label: 'Angular', slug: 'angular', color: 'DD0031' },
    { id: 'nodejs', label: 'Node.js', slug: 'nodedotjs', color: '339933' },
    { id: 'express', label: 'Express 5', slug: 'express', color: 'FFFFFF' },
  ],
  outer: [
    { id: 'postgresql', label: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
    { id: 'supabase', label: 'Supabase', slug: 'supabase', color: '3FCF8E' },
    { id: 'docker', label: 'Docker', slug: 'docker', color: '2496ED' },
    { id: 'git', label: 'Git', slug: 'git', color: 'F05032' },
    { id: 'gitlab', label: 'GitLab', slug: 'gitlab', color: 'FC6D26' },
    { id: 'vitest', label: 'Vitest', slug: 'vitest', color: '6E9F18' },
  ],
}
