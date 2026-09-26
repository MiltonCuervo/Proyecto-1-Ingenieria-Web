import type { ReactNode } from "react";
import { SidebarLeft } from "@/components/organisms/SidebarLeft";
import { SidebarRight } from "@/components/organisms/SidebarRight";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="main-layout">
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <SidebarLeft />
      <main className="main-scroll" id="contenido-principal" tabIndex={-1}>
        <div className="main-content">{children}</div>
      </main>
      <SidebarRight />
    </div>
  );
}
