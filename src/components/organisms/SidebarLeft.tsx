import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactItem } from "@/components/molecules/ContactItem";
import { SkillGroup } from "@/components/organisms/SkillGroup";
import { languages, profile, programmingLanguages, skillCategories } from "@/data/portfolio";

export function SidebarLeft() {
  return (
    <aside className="sidebar-left" aria-label="Información personal y habilidades">
      <div className="sidebar-profile">
        <div className="avatar-wrap">
          <Image className="avatar" src={profile.photo} alt={`Fotografía de ${profile.name}`} width={112} height={112} priority />
          <span className="availability-dot" aria-hidden="true" />
        </div>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
      </div>

      <section className="sidebar-group sidebar-contact" aria-label="Datos personales">
        <ContactItem label="Ubicación" value={<><MapPin size={13} aria-hidden="true" /> {profile.location}</>} />
        <ContactItem label="Teléfono" value={<a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone size={13} aria-hidden="true" /> {profile.phone}</a>} />
        <ContactItem label="Correo" value={<a href={`mailto:${profile.email}`}><Mail size={13} aria-hidden="true" /> Email</a>} />
      </section>

      <SkillGroup title="Idiomas" skills={languages} />
      <SkillGroup title="Lenguajes" skills={programmingLanguages} />

      <section className="sidebar-group" aria-label="Habilidades adicionales">
        <h3>Habilidades extra</h3>
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h4>{category.title}</h4>
            <ul className="extra-skills">
              {category.items.map((skill) => <li key={skill}><span aria-hidden="true">↗</span>{skill}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </aside>
  );
}
