"use client";

import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { profile } from "@/data/portfolio";

interface ProfileSectionProps {
  onOpenAbout: () => void;
}

export function ProfileSection({ onOpenAbout }: ProfileSectionProps) {
  return (
    <motion.section
      className="profile-hero"
      id="perfil"
      aria-labelledby="profile-title"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="profile-hero__copy">
        <p className="hero-kicker"><Sparkles size={15} aria-hidden="true" /> Ingeniería · Creatividad · Tecnología</p>
        <h2 id="profile-title">Hola, soy <span>{profile.name}</span></h2>
        <h3>{profile.headline}</h3>
        <p className="profile-hero__description">{profile.introduction}</p>
        <div className="hero-actions">
          <Button onClick={onOpenAbout} withArrow>Conóceme</Button>
          <a className="text-link" href="#portafolio">Ver proyectos <ArrowDown size={15} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-portrait" aria-hidden="true">
        <div className="hero-portrait__halo" />
        <Image src={profile.photo} alt="" width={264} height={264} priority />
        <span className="hero-note">Diseño con intención <span>✳</span></span>
      </div>
      <span className="hero-index" aria-hidden="true">01 / 04</span>
    </motion.section>
  );
}
