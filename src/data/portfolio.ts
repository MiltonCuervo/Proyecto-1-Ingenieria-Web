import {
  Accessibility,
  Braces,
  ChartNoAxesCombined,
  CodeXml,
  Github,
  Linkedin,
  Lightbulb,
  MonitorSmartphone,
  Palette,
} from "lucide-react";
import type { Education, Knowledge, Project, Skill, SocialProfile } from "@/types/portfolio";

/** Centraliza el contenido editable para que actualizar el portafolio no requiera tocar la UI. */
export const profile = {
  name: "Milton Cuervo",
  role: "Estudiante de Ingeniería de Sistemas",
  headline: "Construyo experiencias digitales útiles y cuidadas.",
  introduction:
    "Soy estudiante de Ingeniería de Sistemas interesado en el desarrollo frontend, el diseño de interfaces y la creación de productos web accesibles.",
  about:
    "Me gusta convertir ideas en experiencias claras, rápidas y fáciles de usar. En cada proyecto combino pensamiento de ingeniería, curiosidad por el diseño y ganas de aprender. Actualmente estoy fortaleciendo mis habilidades en desarrollo web moderno y trabajo colaborativo.",
  age: "",
  residence: "",
  availability: "",
  address: "",
  email: "", // Agrega aquí el correo que quieras publicar.
  photo: "/images/profile.jpg",
};

export const languages: Skill[] = [
  { name: "Español", level: 100 },
  { name: "Inglés", level: 70 },
];

export const programmingLanguages: Skill[] = [
  { name: "TypeScript", level: 75 },
  { name: "JavaScript", level: 80 },
  { name: "HTML & CSS", level: 85 },
  { name: "Java", level: 65 },
  { name: "SQL", level: 60 },
];

export const extraSkills = ["React y Next.js", "Diseño responsive", "Git y GitHub", "Trabajo en equipo"];

export const knowledge: Knowledge[] = [
  { title: "Desarrollo web", description: "Interfaces rápidas y adaptables", icon: CodeXml },
  { title: "Experiencia de usuario", description: "Diseño centrado en las personas", icon: MonitorSmartphone },
  { title: "Desarrollo frontend", description: "Componentes reutilizables", icon: Braces },
  { title: "Accesibilidad", description: "Experiencias inclusivas", icon: Accessibility },
  { title: "Diseño de interfaces", description: "Sistemas visuales coherentes", icon: Palette },
  { title: "Pensamiento analítico", description: "Soluciones basadas en datos", icon: ChartNoAxesCombined },
];

export const education: Education[] = [
  {
    institution: "Tu universidad",
    program: "Ingeniería de Sistemas",
    date: "En curso",
    description: "Formación en ingeniería de software, estructuras de datos, bases de datos y desarrollo de soluciones tecnológicas.",
  },
  {
    institution: "Formación complementaria",
    program: "Desarrollo de software",
    date: "Aprendizaje continuo",
    description: "Exploración práctica de herramientas web, diseño de interfaces y buenas prácticas para crear productos digitales.",
  },
  {
    institution: "Proyectos académicos",
    program: "Ingeniería web",
    date: "2026",
    description: "Aplicación de fundamentos de frontend, trabajo con Git y despliegue de aplicaciones web modernas.",
  },
];

export const projects: Project[] = [
  {
    title: "Portafolio profesional",
    category: "Desarrollo web",
    description: "Una página personal para presentar mi perfil, formación y proyectos.",
    details: "Portafolio de una sola página inspirado en un diseño de Figma. Está construido con Next.js, TypeScript y Tailwind CSS, con componentes organizados mediante Atomic Design, navegación por secciones y diálogos accesibles.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    theme: "violet",
  },
  {
    title: "Interfaz de producto",
    category: "Diseño de interfaces",
    description: "Exploración de una interfaz clara para una experiencia digital cotidiana.",
    details: "Un ejercicio académico de diseño y prototipado centrado en jerarquía visual, responsive design y componentes reutilizables. Reemplaza esta descripción por los detalles de un proyecto propio.",
    technologies: ["React", "UX/UI", "Responsive"],
    theme: "mint",
  },
  {
    title: "Aplicación académica",
    category: "Ingeniería de software",
    description: "Una solución web desarrollada como parte de mi proceso de aprendizaje.",
    details: "Este espacio está preparado para describir un proyecto académico: su problema, las decisiones técnicas, el aporte personal y lo aprendido. Agrega enlaces públicos al repositorio y a la demostración cuando estén disponibles.",
    technologies: ["JavaScript", "Git", "Web"],
    theme: "coral",
  },
];

export const socialProfiles: SocialProfile[] = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Ideas y diseño", href: "https://www.behance.net/", icon: Lightbulb },
];
