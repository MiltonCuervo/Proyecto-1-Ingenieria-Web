"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Globe2 } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { ModalDialog } from "@/components/molecules/ModalDialog";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { projects } from "@/data/portfolio";
import { Icon } from "@/components/atoms/Icon";
import type { Project } from "@/types/portfolio";

function ProjectPreview({ theme, title }: { theme: Project["theme"]; title: string }) {
  return (
    <div className={`project-preview project-preview--${theme}`} role="img" aria-label={`Vista previa visual: ${title}`}>
      <div className="preview-window">
        <div className="preview-window__bar"><i /><i /><i /><span /></div>
        <div className="preview-window__body">
          <span className="preview-window__aside" />
          <div className="preview-window__main"><b /><b /><b /><div><i /><i /><i /></div></div>
        </div>
      </div>
      <span className="preview-orbit preview-orbit--one" />
      <span className="preview-orbit preview-orbit--two" />
    </div>
  );
}

export function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const track = document.getElementById("project-track");
    const firstCard = track?.querySelector<HTMLElement>(".project-card");
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;
    // Desplazo el carrusel una tarjeta por cada clic.
    track.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <section className="content-section portfolio-section" id="portafolio" aria-labelledby="portfolio-title">
      <div className="portfolio-heading-row">
        <SectionHeading title="Proyectos" id="portfolio-title" description="Algunos proyectos de la universidad, el trabajo y CodeFactory." />
        <div className="carousel-controls" aria-label="Controles del carrusel">
          <button type="button" aria-label="Ver proyectos anteriores" onClick={() => scrollProjects("left")}><Icon icon={ChevronLeft} size={19} /></button>
          <button type="button" aria-label="Ver proyectos siguientes" onClick={() => scrollProjects("right")}><Icon icon={ChevronRight} size={19} /></button>
        </div>
      </div>
      <div className="project-track" id="project-track" aria-label="Proyectos" tabIndex={0}>
        {projects.map((project) => (
          <article className="project-card transition-transform duration-300 hover:-translate-y-1" key={project.title}>
            <ProjectPreview theme={project.theme} title={project.title} />
            <div className="project-card__body">
              <p className="project-card__category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <Button variant="text" className="learn-more" onClick={() => setActiveProject(project)} withArrow>Conocer proyecto</Button>
            </div>
          </article>
        ))}
      </div>
      {activeProject && (
        <ModalDialog title={activeProject.title} eyebrow={activeProject.category} onClose={() => setActiveProject(null)}>
          <p>{activeProject.details}</p>
          <div className="project-tags">{activeProject.technologies.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
          <div className="modal-links">
            {activeProject.repoUrl ? (
              <a href={activeProject.repoUrl} target="_blank" rel="noreferrer"><Icon icon={Github} size={16} /> Ver código <Icon icon={ArrowUpRight} size={14} /></a>
            ) : activeProject.repoVisibility === "private" ? (
              <span className="private-repo-label"><Icon icon={Github} size={16} /> Repositorio privado</span>
            ) : null}
            {activeProject.demoUrl && (
              <a href={activeProject.demoUrl} target="_blank" rel="noreferrer"><Icon icon={Globe2} size={16} /> Ver demo <Icon icon={ArrowUpRight} size={14} /></a>
            )}
          </div>
        </ModalDialog>
      )}
    </section>
  );
}
