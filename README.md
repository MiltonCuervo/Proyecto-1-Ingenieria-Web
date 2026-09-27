# Portafolio de Milton Cuervo

Este es mi portafolio para el proyecto de Ingeniería Web. Lo desarrollé con Next.js, React, TypeScript y Tailwind CSS a partir del diseño de referencia de Figma. Incluye mi perfil, experiencia, formación, habilidades y algunos proyectos en los que he trabajado.

## Para ejecutarlo

Necesitas Node.js 20.9 o posterior y pnpm. Si pnpm no está disponible en tu terminal, puedes habilitarlo con `corepack enable` y abrir una terminal nueva.

```bash
pnpm install
pnpm dev
```

La página queda disponible en [http://localhost:3000](http://localhost:3000). Para generar la versión de producción:

```bash
pnpm build
pnpm start
```

## Organización del proyecto

Mantengo el contenido en `src/data/portfolio.ts` para poder actualizar mis datos sin cambiar la estructura visual. Los componentes están agrupados con Atomic Design:

```text
src/
├── app/                 # Página, metadata y estilos generales
├── components/
│   ├── atoms/           # Botones, iconos, etiquetas y barras
│   ├── molecules/       # Contactos, enlaces y elementos de habilidad
│   ├── organisms/       # Barras laterales y secciones de contenido
│   └── templates/       # Distribución principal de la página
├── data/portfolio.ts    # Mi información y los proyectos
└── types/portfolio.ts   # Tipos usados por los componentes
```

La página usa una barra lateral con mis datos y habilidades, un contenido central desplazable y enlaces a GitHub y LinkedIn. Los proyectos se recorren horizontalmente y cada uno tiene una ventana con su descripción, tecnologías y enlaces disponibles. El Sistema de Reservas se muestra como proyecto con repositorio privado.

## Datos y porcentajes

Los porcentajes de idiomas y lenguajes de programación son aproximados y autoevaluados. Los identifico así en la página. Antes de publicar, reviso que los datos personales y los enlaces sigan correctos.

## Despliegue

El proyecto está configurado para Next.js con `vercel.json`. Para publicarlo, importo el repositorio en Vercel y sigo los pasos de despliegue de la plataforma. No uso variables de entorno.

## Herramientas

Next.js, React, TypeScript, Tailwind CSS, Lucide React, Framer Motion y pnpm. Las versiones están en `package.json` y `pnpm-lock.yaml`.
