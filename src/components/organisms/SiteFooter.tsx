import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>Hecho con intención y muchas líneas de código.</span>
      <a href="#perfil" aria-label="Volver al inicio">Volver arriba <ArrowUpRight size={14} aria-hidden="true" /></a>
      <span>© {new Date().getFullYear()} · Milton Cuervo</span>
    </footer>
  );
}
