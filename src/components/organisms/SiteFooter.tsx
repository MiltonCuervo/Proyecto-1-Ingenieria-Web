import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>Gracias por visitar mi portafolio.</span>
      <a href="#perfil" aria-label="Volver al inicio">Volver arriba <Icon icon={ArrowUpRight} size={14} /></a>
      <span>© {new Date().getFullYear()} · Milton Alejandro Cuervo Ramírez</span>
    </footer>
  );
}
