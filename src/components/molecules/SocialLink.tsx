import type { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

export function SocialLink({ label, href, icon: Icon }: SocialLinkProps) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={`${label} (se abre en una nueva pestaña)`}>
      <Icon aria-hidden="true" size={19} strokeWidth={2} />
    </a>
  );
}
