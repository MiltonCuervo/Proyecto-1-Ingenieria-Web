"use client";

import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { ModalDialog } from "@/components/molecules/ModalDialog";
import { EducationSection } from "@/components/organisms/EducationSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { KnowledgeSection } from "@/components/organisms/KnowledgeSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { ProfileSection } from "@/components/organisms/ProfileSection";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { MainLayout } from "@/components/templates/MainLayout";
import { profile } from "@/data/portfolio";

export function HomePage() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <MainLayout>
      <ProfileSection onOpenAbout={() => setAboutOpen(true)} />
      <KnowledgeSection />
      <ExperienceSection />
      <EducationSection />
      <PortfolioSection />
      <SiteFooter />
      {aboutOpen && (
        <ModalDialog title="Un poco sobre mí" eyebrow="Perfil personal" onClose={() => setAboutOpen(false)}>
          <p>{profile.about}</p>
          {profile.email ? (
            <a className="about-contact" href={`mailto:${profile.email}`}><Mail size={16} /> Hablemos <ArrowUpRight size={14} /></a>
          ) : (
            <p className="modal-hint">Para recibir mensajes, agrega tu correo en el archivo de datos del portafolio.</p>
          )}
        </ModalDialog>
      )}
    </MainLayout>
  );
}
