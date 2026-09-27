import {
  Braces,
  ChartNoAxesCombined,
  CodeXml,
  Github,
  Linkedin,
  MonitorSmartphone,
  Palette,
  Sparkles,
} from "lucide-react";
import type { Education, Experience, Knowledge, Project, Skill, SocialProfile } from "@/types/portfolio";

/** Aquí actualizo mis datos y los proyectos que muestro en la página. */
export const profile = {
  name: "Milton Alejandro Cuervo Ramírez",
  role: "Estudiante de Ingeniería de Sistemas",
  headline: "Automatización, datos y desarrollo de software.",
  introduction:
    "Estudio Ingeniería de Sistemas en la Universidad de Antioquia. He trabajado en automatización de procesos, análisis de datos y desarrollo de aplicaciones.",
  about:
    "En mis trabajos como auxiliar y practicante he creado flujos con Power Platform y Python, apoyado el análisis de datos con Power BI y participado en aplicaciones web. Me interesa resolver problemas concretos y aprender de cada proyecto.",
  location: "El Retiro, Colombia",
  phone: "+57 312 253 2328",
  email: "miltonalejo.cr@gmail.com",
  photo: "/images/profile.jpg",
};

export const languages: Skill[] = [
  { name: "Español", level: 100, proficiency: "Nativo" },
  { name: "Inglés", level: 75, proficiency: "B2 certificado" },
];

export const programmingLanguages: Skill[] = [
  { name: "Java", level: 75 },
  { name: "Python", level: 80 },
  { name: "R", level: 60 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 75 },
];

export const skillCategories = [
  { title: "Metodologías", items: ["Lean Startup", "Scrum", "Kanban", "Design Thinking", "Gestión ágil", "IA aplicada"] },
  { title: "Tecnologías", items: ["Power Platform", "React", "Docker", "Git", "Kubernetes"] },
  { title: "Bases de datos", items: ["MySQL", "PostgreSQL", "Modelado de datos"] },
];

export const knowledge: Knowledge[] = [
  { title: "Automatización", description: "Flujos de trabajo con Power Platform y Python", icon: Braces },
  { title: "Análisis de datos", description: "Reportes y tableros en Power BI", icon: ChartNoAxesCombined },
  { title: "Desarrollo backend", description: "APIs con FastAPI y Java / Spring Boot", icon: CodeXml },
  { title: "Aprendizaje automático", description: "Estudio de modelos para clasificación de imágenes", icon: Sparkles },
  { title: "Herramientas", description: "Docker, Kubernetes, Git y redes", icon: MonitorSmartphone },
  { title: "Bases de datos", description: "MySQL, PostgreSQL y diseño de modelos", icon: Palette },
];

export const education: Education[] = [
  {
    institution: "Universidad de Antioquia",
    program: "Ingeniería de Sistemas · Noveno semestre",
    date: "2022–2026",
    description: "Carrera de Ingeniería de Sistemas en curso.",
  },
  {
    institution: "Oracle University",
    program: "Business Agility",
    date: "2023",
    description: "Curso de Business Agility en Oracle University.",
  },
  {
    institution: "Oracle University",
    program: "Java y Spring Boot",
    date: "2023",
    description: "Curso de Java y Spring Boot en Oracle University.",
  },
];

export const experience: Experience[] = [
  {
    organization: "Fiduciaria Bancolombia",
    role: "Practicante · Gerencia Articuladora de Negocios Fiduciarios",
    date: "2026 · Actual",
    description: [
      "Desarrollo automatizaciones con Microsoft Power Platform y Python para tareas operativas.",
      "Participo en iniciativas de inteligencia artificial para apoyar el análisis y la toma de decisiones.",
      "Apoyo el trabajo del Tablero 360 y las decisiones sobre su arquitectura y tecnologías.",
    ],
  },
  {
    organization: "Alcaldía de El Retiro",
    role: "Auxiliar de Programación · Sistema de Reservas",
    date: "2025",
    description: [
      "Desarrollé una API REST con FastAPI y arquitectura hexagonal para administrar espacios públicos municipales.",
      "Añadí reportes y métricas de uso para consultar la actividad de las reservas.",
      "Recogí los requerimientos con el cliente y los llevé a la aplicación.",
    ],
  },
  {
    organization: "Universidad de Antioquia · SIU",
    role: "Auxiliar de Programación",
    date: "2025",
    description: [
      "Usé Power Automate y Power BI para organizar datos institucionales y facilitar su consulta.",
      "Automaticé tareas de procesamiento que antes se hacían manualmente.",
    ],
  },
  {
    organization: "Universidad de Antioquia · Laboratorio de Accesibilidad",
    role: "Auxiliar Administrativo",
    date: "2025",
    description: [
      "Automaticé tareas administrativas con Power Automate, Power Apps, Excel y SharePoint.",
      "Actualicé flujos internos para reducir pasos manuales.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Sistema de Reservas",
    category: "Proyecto Integrador 1 · Alcaldía de El Retiro",
    description: "Aplicación para administrar reservas de espacios públicos.",
    details: "Desarrollé la API con FastAPI y participé en una aplicación con frontend en TypeScript. El proyecto incluye reportes de uso y configuración Docker para ejecutar el frontend, el backend y PostgreSQL. El repositorio es privado.",
    technologies: ["Python", "FastAPI", "TypeScript", "PostgreSQL", "Docker"],
    repoVisibility: "private",
    theme: "violet",
  },
  {
    title: "CitaSalud",
    category: "CodeFactory · Proyecto en equipo",
    description: "Frontend de una aplicación de citas en salud.",
    details: "Proyecto de equipo en CodeFactory. El frontend está hecho con React, TypeScript y Tailwind CSS; el backend del proyecto está desarrollado en Java. Puedes revisar el código y abrir la demo.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Java", "Vite"],
    repoUrl: "https://github.com/Codefactory-EP02-CITASalud-Feature02/frontend-citasalud",
    demoUrl: "https://frontend-citasalud.vercel.app",
    theme: "mint",
  },
  {
    title: "Aplicación bancaria",
    category: "Arquitectura de Software · Laboratorio 1",
    description: "Registro de clientes, transferencias e historial de movimientos.",
    details: "Aplicación de curso con un backend en Java y Spring Boot y una interfaz en React. Permite administrar clientes, transferir dinero entre cuentas y consultar el historial de transacciones.",
    technologies: ["Java 21", "Spring Boot", "React", "MySQL", "Maven"],
    repoUrl: "https://github.com/MiltonCuervo/BancoFullStackFinal",
    theme: "coral",
  },
  {
    title: "Lotería descentralizada",
    category: "Solidity · Contratos inteligentes",
    description: "Contratos para administrar tokens, boletos NFT y sorteos.",
    details: "Proyecto hecho en Solidity y probado en Remix. Incluye un token ERC-20, boletos ERC-721 y contratos para registrar compras y ejecutar el sorteo.",
    technologies: ["Solidity", "Remix IDE", "ERC-20", "ERC-721", "OpenZeppelin"],
    repoUrl: "https://github.com/MiltonCuervo/loteria-descentralizada",
    theme: "violet",
  },
  {
    title: "Análisis de fraude en transacciones",
    category: "Proyecto Integrador II · En curso",
    description: "Exploro cómo tomar decisiones de bloqueo considerando su costo.",
    details: "Proyecto académico en curso con el conjunto de datos IEEE-CIS. Estoy comparando reglas de decisión para transacciones sospechosas y preparando particiones temporales para evaluar el costo económico fuera de muestra. El repositorio contiene la exploración inicial y la estructura del análisis.",
    technologies: ["Python", "Jupyter", "Análisis de datos", "IEEE-CIS"],
    repoUrl: "https://github.com/MiltonCuervo/IEEE-CIS-Fraud-Detection-PI2",
    theme: "mint",
  },
];

export const socialProfiles: SocialProfile[] = [
  { label: "GitHub", href: "https://github.com/MiltonCuervo", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/miltoncuervo", icon: Linkedin },
];
