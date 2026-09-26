import type { ReactNode } from "react";

export function ContactItem({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="contact-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
