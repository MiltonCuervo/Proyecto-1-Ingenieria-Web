import { socialProfiles } from "@/data/portfolio";
import { SocialLink } from "@/components/molecules/SocialLink";

export function SidebarRight() {
  return (
    <aside className="sidebar-right" aria-label="Redes sociales">
      <p>Enlaces</p>
      <nav aria-label="Perfiles sociales">
        {socialProfiles.map((social) => <SocialLink key={social.label} {...social} />)}
      </nav>
    </aside>
  );
}
