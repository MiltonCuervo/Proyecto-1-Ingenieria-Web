import Image from "next/image";
import { Check, Mail } from "lucide-react";
import { ContactItem } from "@/components/molecules/ContactItem";
import { SkillGroup } from "@/components/organisms/SkillGroup";
import { extraSkills, languages, profile, programmingLanguages } from "@/data/portfolio";

export function SidebarLeft() {
  return (
    <aside className="sidebar-left" aria-label="Información personal y habilidades">
      <div className="sidebar-profile">
        <div className="avatar-wrap">
          <Image className="avatar" src={profile.photo} alt={`Fotografía de ${profile.name}`} width={112} height={112} priority />
          <span className="availability-dot" aria-label="Disponible" />
        </div>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
      </div>

      <section className="sidebar-group sidebar-contact" aria-label="Datos personales">
        {profile.age && <ContactItem label="Edad" value={profile.age} />}
        {profile.residence && <ContactItem label="Residencia" value={profile.residence} />}
        {profile.availability && <ContactItem label="Disponibilidad" value={<span className="available"><Check size={13} aria-hidden="true" /> {profile.availability}</span>} />}
        {profile.address && <ContactItem label="Ubicación" value={profile.address} />}
        {profile.email && <ContactItem label="Correo" value={<a href={`mailto:${profile.email}`}><Mail size={13} aria-hidden="true" /> Email</a>} />}
      </section>

      <SkillGroup title="Idiomas" skills={languages} />
      <SkillGroup title="Tecnologías" skills={programmingLanguages} />

      <section className="sidebar-group" aria-label="Habilidades adicionales">
        <h3>Habilidades extra</h3>
        <ul className="extra-skills">
          {extraSkills.map((skill) => <li key={skill}><span aria-hidden="true">↗</span>{skill}</li>)}
        </ul>
      </section>
    </aside>
  );
}
