"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalDialogProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  eyebrow?: string;
}

export function ModalDialog({ title, eyebrow = "Un poco más", onClose, children }: ModalDialogProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar diálogo"><X size={19} /></button>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="modal-title">{title}</h2>
        <div className="modal-card__content">{children}</div>
      </section>
    </div>
  );
}
