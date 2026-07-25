# Gustavo Britez — Portfolio

Portfolio personal de **Gustavo Adolfo Britez**, Full-Stack Developer especializado en React, Node.js y PostgreSQL. Construido como una SPA rápida, accesible y optimizada para mobile, con foco en performance real (no solo en el diseño).

🔗 **Demo en vivo:** [TU-DOMINIO-AQUI](https://TU-DOMINIO-AQUI) <!-- TODO: reemplazar por la URL pública real -->


---

## ✨ Features

- **Diseño responsive** de punta a punta, pensado mobile-first (navegación, tabs, órbitas de skills, etc.)
- **Scroll-spy** en el header: detecta la sección activa mientras se scrollea y resalta el link correspondiente
- **Fondo animado** con `<canvas>` (beams de luz) optimizado para no consumir batería/CPU de más en celulares
- **Efecto typewriter** en el rol del hero (`Egresado en Ingeniería en Informática` / `Full-Stack Developer`)
- **Skills orbitando** en animación CSS (3 órbitas concéntricas) con radios que se recalculan según el tamaño real del contenedor, para no desbordar en pantallas chicas
- **Proyecto destacado (tesis)** con capturas reales en modo claro/oscuro y zoom ampliado al hacer clic
- **Accesibilidad**: respeta `prefers-reduced-motion` (desactiva animaciones pesadas si el usuario lo pidió a nivel sistema operativo)
- **Sección de contacto** minimalista, sin formularios ni dependencias de terceros innecesarias

## ⚡ Rendimiento

El fondo animado (`BeamsBackground`) fue optimizado específicamente para mobile:

- El desenfoque se aplica una sola vez por `CSS filter` (GPU) en vez de recalcularlo por software en cada figura y en cada frame
- `devicePixelRatio` limitado en mobile para no renderizar a una resolución innecesariamente alta
- Menos partículas y throttle a 30fps en pantallas chicas (60fps en desktop)
- La animación se pausa automáticamente si la pestaña pierde el foco

## 🛠️ Stack técnico

| Categoría       | Tecnologías                                  |
| --------------- | --------------------------------------------- |
| Framework       | React 19 + Vite                                |
| Estilos         | Tailwind CSS v4                                |
| Animaciones     | Motion (Framer Motion), CSS keyframes, Canvas 2D |
| Iconos          | Lucide React, Simple Icons (CDN)               |
| Optimización de imágenes | Sharp (script de build para generar WebP @1x/@2x) |
| Linter          | Oxlint                                         |
| Deploy          | Vercel                                         |

## 📁 Estructura del proyecto

```
src/
├── App.jsx                  # Composición general de la página
├── data/
│   └── site.js               # Todo el contenido del sitio (textos, links, stack, proyectos)
├── components/
│   ├── Header.jsx             # Nav con scroll-spy
│   ├── Hero.jsx                # Sección de inicio + typewriter
│   ├── TypewriterRole.jsx
│   ├── BeamsBackground.jsx     # Fondo animado en canvas (optimizado)
│   ├── StarProject.jsx         # Proyecto de tesis con capturas y toggle de tema
│   ├── ThemeToggle.jsx
│   ├── ImageLightbox.jsx       # Zoom de capturas
│   ├── Experience.jsx
│   ├── OrbitingSkills.jsx      # Órbitas de tecnologías
│   ├── TechStack.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── index.css
```

Todo el **contenido** (textos, roles, proyectos, experiencia, stack, links) vive en `src/data/site.js`, separado de los componentes. Esto permite actualizar la información del portfolio sin tocar lógica ni JSX.

## 🚀 Cómo correrlo localmente

```bash
# Clonar el repositorio
git clone https://github.com/GustavoAdolfoBritez/portfolio-web.git
cd portfolio-web

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

Otros scripts disponibles:

```bash
npm run build            # Build de producción
npm run preview          # Previsualizar el build localmente
npm run lint              # Linter (oxlint)
npm run optimize:images   # Genera versiones WebP (1x/2x) de las capturas del proyecto
```

## 📦 Deploy

El sitio está desplegado en **Vercel**, con deploy automático en cada push a `main`. No requiere variables de entorno para funcionar (el build es 100% estático).

## 📬 Contacto

- **Email:** [britezgustavo844@gmail.com](mailto:britezgustavo844@gmail.com)
- **LinkedIn:** [linkedin.com/in/gustavo-britez](https://www.linkedin.com/in/gustavo-britez)
- **GitHub:** [github.com/GustavoAdolfoBritez](https://github.com/GustavoAdolfoBritez)

---

<p align="center">Hecho por Gustavo Britez</p>
