"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";

interface ModalDialogProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  eyebrow?: string;
}

export function ModalDialog({ title, eyebrow = "Un poco más", onClose, children }: ModalDialogProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const keepFocusInDialog = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("keydown", keepFocusInDialog);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("keydown", keepFocusInDialog);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="modal-card" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
        <button className="modal-close" ref={closeButtonRef} type="button" onClick={onClose} aria-label="Cerrar diálogo"><Icon icon={X} size={19} /></button>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="modal-title">{title}</h2>
        <div className="modal-card__content" id="modal-description">{children}</div>
      </section>
    </div>
  );
}
