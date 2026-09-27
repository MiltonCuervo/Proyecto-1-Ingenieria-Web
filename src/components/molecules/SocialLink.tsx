import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";

interface SocialLinkProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

export function SocialLink({ label, href, icon: IconComponent }: SocialLinkProps) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={`${label} (se abre en una nueva pestaña)`}>
      <Icon icon={IconComponent} size={19} strokeWidth={2} />
    </a>
  );
}
