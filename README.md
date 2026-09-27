# Portafolio profesional · Ingeniería Web

Portafolio personal de una sola página desarrollado con Next.js, React, TypeScript y Tailwind CSS. Su composición toma como referencia el diseño de Figma adjunto: perfil y habilidades en una barra lateral, contenido principal desplazable y accesos a redes en el extremo derecho.

## Funcionalidades

- Diseño adaptable para escritorio, tablet y móvil.
- Perfil con diálogo personalizado para ampliar la presentación.
- Conocimientos, cuatro experiencias laborales y formación en ingeniería y cursos técnicos.
- Idiomas y lenguajes mostrados con el nivel declarado en la hoja de vida; no se infieren porcentajes ausentes.
- Carrusel horizontal de proyectos con controles y diálogos de detalle.
- Enlaces a repositorios y demos listos para añadir a cada proyecto.
- Animaciones sutiles con Framer Motion y respeto por `prefers-reduced-motion`.
- Navegación por teclado, enlace para saltar al contenido y etiquetas semánticas.

## Requisitos

- Node.js 20.9 o posterior.
- npm (incluido con Node.js).

## Instalación y desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000). Para generar y servir una versión de producción:

```bash
pnpm build
pnpm start
```

## Personalización del contenido

Edita [`src/data/portfolio.ts`](src/data/portfolio.ts) para actualizar perfil, habilidades, experiencia, educación, proyectos y redes. La información profesional y la fotografía actual se incorporaron desde la hoja de vida proporcionada. El enlace de LinkedIn está pendiente porque el PDF no especifica su URL. Los porcentajes de habilidad tampoco aparecen en el CV, por lo que se muestran niveles o nombres sin atribuir puntuaciones. Agrega enlaces de repositorios y demos cuando quieras ampliar el portafolio.

Reemplaza `public/images/profile.jpg` por una fotografía propia cuadrada, optimizada y con permiso de uso. No es necesario cambiar los componentes para actualizar el contenido.

## Arquitectura

```text
src/
├── app/
│   ├── globals.css           # Tema, estilos responsive y movimiento reducido
│   ├── layout.tsx            # Metadata, idioma y hoja global
│   └── page.tsx              # Entrada de la página
├── components/
│   ├── atoms/                # Button, Badge, ProgressBar, SectionHeading
│   ├── molecules/            # SkillItem, ContactItem, SocialLink, ModalDialog
│   ├── organisms/            # Sidebars y secciones completas
│   ├── templates/            # MainLayout de tres columnas
│   └── HomePage.tsx          # Composición de la página y estado del diálogo
├── data/portfolio.ts         # Contenido tipado y separado de la presentación
└── types/portfolio.ts        # Contratos TypeScript compartidos
```

### Flujo de componentes

```mermaid
flowchart TD
  Page[Page] --> Home[HomePage]
  Home --> Layout[MainLayout]
  Layout --> Left[SidebarLeft]
  Layout --> Center[Contenido desplazable]
  Layout --> Right[SidebarRight]
  Center --> Profile[ProfileSection]
  Center --> Knowledge[KnowledgeSection]
  Center --> Experience[ExperienceSection]
  Center --> Education[EducationSection]
  Center --> Portfolio[PortfolioSection]
  Center --> Footer[SiteFooter]
  Left --> SkillGroup --> SkillItem --> ProgressBar
  Left --> ContactItem
  Right --> SocialLink
  Knowledge --> Heading[SectionHeading]
  Experience --> ExperienceItem[ExperienceItem]
  Education --> Heading
  Portfolio --> Project[ProjectCard]
  Project --> Badge
  Portfolio --> Dialog[ModalDialog]
  Profile --> Dialog
```

Atomic Design agrupa decisiones visuales pequeñas en átomos, composición de datos en moléculas y secciones completas en organismos. `MainLayout` organiza las tres columnas y la página compone el contenido; `portfolio.ts` mantiene los datos fuera del marcado para facilitar cambios y futuras traducciones.

Tailwind CSS 4 define su tema en [`src/app/globals.css`](src/app/globals.css) mediante `@theme`; esta versión no necesita un `tailwind.config.js` para los tokens usados aquí. PostCSS conecta el compilador con Next.js desde `postcss.config.mjs`.

## Dependencias principales

| Paquete | Uso |
| --- | --- |
| `next`, `react`, `react-dom` | Aplicación web, renderizado y componentes |
| `typescript` | Tipado estricto y contratos de datos |
| `tailwindcss`, `@tailwindcss/postcss` | Tema y utilidades CSS |
| `lucide-react` | Iconografía SVG accesible |
| `framer-motion` | Aparición progresiva y microinteracciones |
| `eslint`, `eslint-config-next` | Reglas de calidad para Next.js |

## Despliegue en Vercel

1. Sube la rama `main` al repositorio remoto de GitHub.
2. Importa el repositorio desde el panel de Vercel.
3. Selecciona Next.js como framework; el archivo `vercel.json` ya lo declara.
4. Configura pnpm como gestor del proyecto y conserva los comandos `pnpm install` y `pnpm build`.
5. Despliega y agrega el dominio académico solicitado si está disponible.

No se necesitan variables de entorno para la versión base. No publiques correo, teléfono, dirección ni enlaces privados que no quieras hacer públicos.

## Recomendaciones para la entrega

- Verifica que los datos personales publicados sean los que quieres compartir y agrega el enlace correcto de LinkedIn, repositorios y demostraciones.
- Usa imágenes propias u optimizadas y escribe descripciones breves que expliquen problema, aporte y tecnologías.
- Revisa la experiencia en móvil, teclado, contraste, diálogos y desplazamiento horizontal antes de entregar.
- Mantén commits pequeños con mensajes descriptivos y verifica que la rama `main` desplegada corresponda con el último commit de entrega.
- Incluye el enlace de Vercel en el repositorio y confirma el acceso requerido por el docente antes de la fecha límite.

## Licencia

Proyecto académico. Reemplaza o documenta los recursos visuales de terceros antes de publicar una versión comercial.
