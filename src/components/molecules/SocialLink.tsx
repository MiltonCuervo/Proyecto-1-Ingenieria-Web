import type { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  label: string;
  href?: string;
  icon: LucideIcon;
}

export function SocialLink({ label, href, icon: Icon }: SocialLinkProps) {
  if (!href) {
    return (
      <span className="social-link social-link--disabled" aria-label={`${label}: agrega la URL del perfil en los datos del portafolio`} title={`Agrega la URL de ${label}`}>
        <Icon aria-hidden="true" size={19} strokeWidth={2} />
      </span>
    );
  }

  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={`${label} (se abre en una nueva pestaña)`}>
      <Icon aria-hidden="true" size={19} strokeWidth={2} />
    </a>
  );
}
