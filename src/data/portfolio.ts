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

/** Contenido de la hoja de vida, separado de la presentación para facilitar su edición. */
export const profile = {
  name: "Milton Alejandro Cuervo Ramírez",
  role: "Ingeniero de Sistemas",
  headline: "Automatización, datos e IA aplicada al negocio.",
  introduction:
    "Ingeniero de Sistemas orientado a resultados, con experiencia en automatización empresarial, análisis de datos e iniciativas de inteligencia artificial aplicada.",
  about:
    "Transformo datos complejos en decisiones claras y conecto la tecnología con las necesidades operativas de las organizaciones. He desarrollado automatizaciones con Power Platform y Python, impulsado iniciativas de IA aplicada y participado en aplicaciones de ciclo completo, desde la arquitectura hasta su evolución en producción. Me motiva comprender el negocio y diseñar sistemas con impacto medible y duradero.",
  location: "El Retiro, Colombia",
  phone: "+57 312 253 2328",
  email: "miltonalejo.cr@gmail.com",
  photo: "/images/profile.jpg",
};

export const languages: Skill[] = [
  { name: "Español", proficiency: "Nativo" },
  { name: "Inglés", proficiency: "B2 certificado" },
];

export const programmingLanguages: Skill[] = [
  { name: "Java (Spring Boot)" },
  { name: "Python" },
  { name: "R" },
  { name: "React" },
  { name: "Gherkin" },
];

export const skillCategories = [
  { title: "Metodologías", items: ["Lean Startup", "Scrum", "Kanban", "Design Thinking", "Gestión ágil", "IA aplicada"] },
  { title: "Tecnologías", items: ["Power Platform", "Docker", "Git", "Kubernetes"] },
  { title: "Bases de datos", items: ["MySQL", "PostgreSQL", "Modelado de datos"] },
];

export const knowledge: Knowledge[] = [
  { title: "Automatización empresarial", description: "Power Platform, Python y mejora de procesos", icon: Braces },
  { title: "Analítica y BI", description: "Power BI, análisis de datos y reportes", icon: ChartNoAxesCombined },
  { title: "Desarrollo backend", description: "APIs REST con FastAPI y Java / Spring Boot", icon: CodeXml },
  { title: "Inteligencia artificial", description: "Iniciativas de IA aplicada al negocio", icon: Sparkles },
  { title: "Infraestructura", description: "Docker, Kubernetes, Git y redes", icon: MonitorSmartphone },
  { title: "Datos y bases de datos", description: "MySQL, PostgreSQL y modelado de datos", icon: Palette },
];

export const education: Education[] = [
  {
    institution: "Universidad de Antioquia",
    program: "Ingeniería de Sistemas · Noveno semestre",
    date: "2022–2026",
    description: "Formación universitaria en Ingeniería de Sistemas.",
  },
  {
    institution: "Oracle University",
    program: "Business Agility",
    date: "2023",
    description: "Formación complementaria en agilidad de negocio.",
  },
  {
    institution: "Oracle University",
    program: "Java y Spring Boot",
    date: "2023",
    description: "Formación técnica en desarrollo de software con Java y Spring Boot.",
  },
];

export const experience: Experience[] = [
  {
    organization: "Fiduciaria Bancolombia",
    role: "Practicante · Gerencia Articuladora de Negocios Fiduciarios",
    date: "2026 · Actual",
    description: [
      "Desarrollo y entrego automatizaciones con Microsoft Power Platform y Python para optimizar flujos operativos.",
      "Impulso iniciativas de inteligencia artificial aplicada a la toma de decisiones y la eficiencia operativa.",
      "Participo en la evolución del Tablero 360 y en la arquitectura y el stack tecnológico objetivo.",
    ],
  },
  {
    organization: "Alcaldía de El Retiro",
    role: "Auxiliar de Programación · Sistema de Reservas",
    date: "2025",
    description: [
      "Diseñé e implementé una API REST con FastAPI y arquitectura hexagonal para gestionar espacios públicos municipales.",
      "Integré visualizaciones de reportes y métricas de uso para apoyar decisiones operativas en tiempo real.",
      "Trabajé con el cliente para levantar requerimientos y entregar una solución alineada con el negocio.",
    ],
  },
  {
    organization: "Universidad de Antioquia · SIU",
    role: "Auxiliar de Programación",
    date: "2025",
    description: [
      "Implementé soluciones con Power Automate y Power BI para facilitar el análisis de datos institucionales.",
      "Diseñé flujos automatizados que redujeron tiempos de procesamiento en tareas operativas críticas.",
    ],
  },
  {
    organization: "Universidad de Antioquia · Laboratorio de Accesibilidad",
    role: "Auxiliar Administrativo",
    date: "2025",
    description: [
      "Automaticé procesos administrativos con Power Automate, Power Apps, Excel avanzado y SharePoint.",
      "Optimicé flujos internos para reducir trabajo manual y mejorar tiempos de respuesta.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Sistema municipal de reservas",
    category: "Desarrollo backend",
    description: "API para la gestión de espacios públicos municipales.",
    details: "Diseño e implementación de una API REST con FastAPI y arquitectura hexagonal. La solución incorporó visualizaciones de reportes y métricas de uso para respaldar decisiones operativas.",
    technologies: ["Python", "FastAPI", "REST", "Arquitectura hexagonal"],
    theme: "violet",
  },
  {
    title: "Automatización de procesos",
    category: "Power Platform · Python",
    description: "Automatizaciones para mejorar flujos operativos de negocio.",
    details: "Trabajo actual en desarrollo y entrega de automatizaciones con Microsoft Power Platform y Python. Los detalles específicos de procesos internos se mantienen fuera de esta página pública.",
    technologies: ["Power Automate", "Power Platform", "Python"],
    theme: "mint",
  },
  {
    title: "Analítica institucional",
    category: "Datos · Business Intelligence",
    description: "Soluciones para habilitar análisis y decisiones basadas en datos.",
    details: "Implementación de soluciones con Power Automate y Power BI para análisis de datos institucionales y toma de decisiones. La información se presenta a nivel general para no exponer datos internos.",
    technologies: ["Power BI", "Power Automate", "Análisis de datos"],
    theme: "coral",
  },
];

export const socialProfiles: SocialProfile[] = [
  { label: "GitHub", href: "https://github.com/MiltonCuervo", icon: Github },
  { label: "LinkedIn", icon: Linkedin },
];
